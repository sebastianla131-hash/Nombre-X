// src/utils/clinicalEngine.test.ts
// Audit Validation Test for MedFormula MD (SRS 2025 Regulatory Compliance)
// Run with: npx tsx src/utils/clinicalEngine.test.ts

import {
  calculateBMI,
  calculateCockcroftGault,
  calculateCKDEpi2021,
  calculateDrugDosage,
  evaluateObstetricSafety,
} from './clinicalEngine';
import { generateEhrPrescription } from './prescriptionGenerator';
import { Medication, DrugIndication, DrugConcentration, PatientProfile } from '../types/clinical';

function assert(condition: boolean, testName: string, details?: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${testName} ${details ? `-> ${details}` : ''}`);
    process.exit(1);
  } else {
    console.log(`✅ PASS: ${testName}`);
  }
}

console.log('====================================================');
console.log('🩺 RUNNING CLINICAL ENGINE SRS 2025 AUDIT TESTS');
console.log('====================================================\n');

// TEST 1: BMI (IMC) Calculation & Category
{
  const res = calculateBMI(70, 175);
  assert(res.bmi === 22.9, 'BMI normal weight calculation', `Got ${res.bmi}`);
  assert(res.category === 'Normal', 'BMI category classification', `Got ${res.category}`);
}

// TEST 2: Renal Clearance Cockcroft-Gault (SRS Nephro-Safety)
{
  // 60yo Male, 70kg, SCr 1.2 mg/dL -> (140-60)*70 / (72*1.2) = 5600 / 86.4 = 64.8 mL/min
  const malePatient: PatientProfile = {
    weightKg: 70,
    ageYears: 60,
    ageMonths: 0,
    gender: 'male',
    serumCreatinineMgDl: 1.2,
  };
  const maleResult = calculateCockcroftGault(malePatient);
  assert(maleResult.crCl === 64.8, 'Cockcroft-Gault Male calculation', `Got ${maleResult.crCl}`);
  assert(!maleResult.alertRequired, 'Male CrCl > 50 no alert triggered');

  // Same for Female (* 0.85) -> 64.81 * 0.85 = 55.1 mL/min
  const femalePatient: PatientProfile = { ...malePatient, gender: 'female' };
  const femaleResult = calculateCockcroftGault(femalePatient);
  assert(femaleResult.crCl === 55.1, 'Cockcroft-Gault Female factor applied', `Got ${femaleResult.crCl}`);

  // Renal Impairment Alert (< 50 mL/min)
  const impairedPatient: PatientProfile = { ...malePatient, serumCreatinineMgDl: 2.0 }; // 38.9 mL/min
  const impairedResult = calculateCockcroftGault(impairedPatient);
  assert(impairedResult.alertRequired === true, 'Renal alert triggered for CrCl < 50 mL/min');
}

// TEST 3: 2021 CKD-EPI Race-Free eGFR
{
  const patient: PatientProfile = {
    weightKg: 70,
    ageYears: 50,
    ageMonths: 0,
    gender: 'female',
    serumCreatinineMgDl: 0.8,
  };
  const res = calculateCKDEpi2021(patient);
  assert(typeof res.egfr === 'number' && res.egfr > 80, '2021 CKD-EPI calculation validity', `Got ${res.egfr}`);
}

// TEST 4: Pediatric Amoxicillin High-Dose with Maximum Safety Ceiling Clamping (SRS 2025)
{
  const indication: DrugIndication = {
    id: 'oma_severe',
    name: 'Otitis Media Aguda (Dosis Alta)',
    recommendedDoseMgPerKgPerDay: 90,
    frequencyPerDay: 3,
    intervalHours: 8,
    durationDays: '10 días',
    maxDailyDoseMg: 3000,
    maxSingleDoseMg: 1000,
  };

  const concentration: DrugConcentration = {
    id: 'amox_250_5',
    name: 'Suspensión 250 mg / 5 mL',
    amountMg: 250,
    volumeMl: 5,
    form: 'suspension',
    unit: 'mL',
    standardBottleMl: 100,
  };

  // Case 4A: Normal child 15 kg -> 15 * 90 = 1350 mg/day (< 3000 max), 450 mg/dose
  // 450 mg / (250 mg / 5 mL) = 450 / 50 = 9 mL per dose.
  const calc15kg = calculateDrugDosage({
    patientWeightKg: 15,
    indication,
    concentration,
    selectedFrequencyPerDay: 3,
    selectedDurationDays: 10,
    medicationName: 'Amoxicilina',
  });

  assert(calc15kg.dailyTotalMg === 1350, '15kg Amoxicillin daily mg matches exactly', `Got ${calc15kg.dailyTotalMg}`);
  assert(calc15kg.singleDoseMg === 450, '15kg Amoxicillin single dose mg matches', `Got ${calc15kg.singleDoseMg}`);
  assert(calc15kg.singleDoseUnitQuantity === 9, '15kg Amoxicillin unit in mL is 9.0 mL', `Got ${calc15kg.singleDoseUnitQuantity}`);
  assert(!calc15kg.isMaxDoseExceeded, '15kg dose within safe limit');
  assert(!calc15kg.isOutOfRange, '15kg dose is not out of range');

  // Case 4B: Heavy child 42 kg -> 42 * 90 = 3780 mg/day (> 3000 mg limit!)
  // MUST clamp to 3000 mg/day (1000 mg per dose) = 20 mL per dose!
  const calc42kg = calculateDrugDosage({
    patientWeightKg: 42,
    indication,
    concentration,
    selectedFrequencyPerDay: 3,
    selectedDurationDays: 10,
    medicationName: 'Amoxicilina',
  });

  assert(calc42kg.rawCalculatedDailyMg === 3780, 'Raw theoretical daily dose was 3780 mg', `Got ${calc42kg.rawCalculatedDailyMg}`);
  assert(calc42kg.dailyTotalMg === 3000, 'Max daily dose ceiling clamped safely to 3000 mg', `Got ${calc42kg.dailyTotalMg}`);
  assert(calc42kg.singleDoseMg === 1000, 'Single dose capped to 1000 mg', `Got ${calc42kg.singleDoseMg}`);
  assert(calc42kg.singleDoseUnitQuantity === 20, 'Volume capped to 20 mL per dose', `Got ${calc42kg.singleDoseUnitQuantity}`);
  assert(calc42kg.isMaxDoseExceeded === true, 'Safety flag isMaxDoseExceeded is TRUE');
  assert(calc42kg.isOutOfRange === true, 'Orange safety alert isOutOfRange is TRUE');
  assert(calc42kg.bottlesNeeded === 6, 'Bottles needed for 10 days calculated correctly (600 mL / 100 mL = 6 frascos)', `Got ${calc42kg.bottlesNeeded}`);
}

// TEST 5: Obstetric Safety Evaluation (NSAIDs in 3rd Trimester)
{
  const ibuprofen: Medication = {
    id: 'ibuprofeno',
    name: 'Ibuprofeno',
    commercialNames: ['Motrin', 'Advil'],
    category: 'Analgésicos',
    therapeuticClass: 'AINE',
    shortDescription: 'Antiinflamatorio no esteroideo',
    availableRoutes: ['oral'],
    concentrations: [],
    indications: [],
    whenToUse: [],
    pearlsAndPitfalls: [],
    monitoringAndSideEffects: [],
    evidenceAndSources: [],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 3er Trimestre',
      summary: 'Riesgo de cierre prematuro del conducto arterioso fetal e hipertensión pulmonar neonatal.',
      contraindicatedInTrimester: [3],
      clinicalAlternative: 'Paracetamol (Acetaminofén) VO a dosis mínima eficaz',
      fetalRisks: ['Cierre precoz del ductus arterioso', 'Oligohidramnios', 'Disfunción renal neonatal'],
    },
  };

  const pregnant3rdTrimester: PatientProfile = {
    weightKg: 65,
    ageYears: 28,
    ageMonths: 0,
    gender: 'female',
    isPregnant: true,
    pregnancyTrimester: 3,
  };

  const obsResult = evaluateObstetricSafety(ibuprofen, pregnant3rdTrimester);
  assert(obsResult.isAlertTriggered === true, 'Obstetric danger triggered for 3rd trimester NSAID');
  assert(obsResult.severity === 'contraindicated', 'Severity is contraindicated');
  assert(Boolean(obsResult.alternativeSuggestion), 'Clinical alternative proposed (Paracetamol)');
}

// TEST 6: EHR One-Click Prescription String Generation (SRS Formatter)
{
  const text = generateEhrPrescription({
    medicationName: 'Amoxicilina',
    concentrationName: 'Suspensión 250 mg / 5 mL',
    amountMg: 250,
    volumeMl: 5,
    form: 'suspension',
    singleDoseQuantity: 10,
    unitLabel: 'mL',
    route: 'oral',
    intervalHours: 8,
    durationDays: 7,
  });

  const expected = 'Amoxicilina, 250mg/5mL, Administrar 10 mL Vía Oral, cada 8 horas, por 7 días.';
  assert(text === expected, 'EHR prescription string format exact match', `Got "${text}"`);
}

console.log('\n====================================================');
console.log('🎉 ALL SRS 2025 CLINICAL ENGINE AUDIT TESTS PASSED!');
console.log('====================================================');
