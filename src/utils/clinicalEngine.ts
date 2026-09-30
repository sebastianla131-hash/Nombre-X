// src/utils/clinicalEngine.ts
// Pure Mathematical and Clinical Engine for MedFormula MD (SRS 2025 / WHO AWaRe)
// Strictly separated from UI components.

import {
  PatientProfile,
  DrugIndication,
  DrugConcentration,
  RouteOfAdmin,
  CalculationResult,
  RenalClearanceResult,
  ObstetricSafetyEvaluation,
  Medication,
  BodyWeightAnalysis,
  CrashCartItem,
} from '../types/clinical';

/**
 * 1. Body Mass Index (BMI / IMC)
 * Formula: weight (kg) / [height (m)]^2
 */
export function calculateBMI(
  weightKg: number,
  heightCm?: number
): { bmi: number | null; category: string; color: string } {
  if (!heightCm || heightCm <= 0 || weightKg <= 0) {
    return { bmi: null, category: 'Sin datos de talla', color: 'text-slate-400' };
  }

  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

  let category = 'Normal';
  let color = 'text-emerald-600 dark:text-emerald-400';

  if (bmi < 18.5) {
    category = 'Bajo peso';
    color = 'text-amber-600 dark:text-amber-400';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Sobrepeso';
    color = 'text-amber-600 dark:text-amber-400';
  } else if (bmi >= 30 && bmi < 35) {
    category = 'Obesidad Clase I';
    color = 'text-rose-600 dark:text-rose-400';
  } else if (bmi >= 35 && bmi < 40) {
    category = 'Obesidad Clase II';
    color = 'text-rose-700 dark:text-rose-500';
  } else if (bmi >= 40) {
    category = 'Obesidad Clase III (Mórbida)';
    color = 'text-rose-800 dark:text-rose-500';
  }

  return { bmi, category, color };
}

/**
 * 2. Body Surface Area (BSA / ASC) via Mosteller Formula
 * Formula: sqrt([height (cm) * weight (kg)] / 3600)
 */
export function calculateBSA(weightKg: number, heightCm?: number): number | null {
  if (!heightCm || heightCm <= 0 || weightKg <= 0) return null;
  return Number(Math.sqrt((heightCm * weightKg) / 3600).toFixed(2));
}

/**
 * 2b. Ideal Body Weight (IBW) calculation
 * - Adults (age >= 18 or height >= 152.4 cm): Devine Formula
 *   Male: 50 + 2.3 * ((heightCm / 2.54) - 60)
 *   Female: 45.5 + 2.3 * ((heightCm / 2.54) - 60)
 * - Pediatrics: Height-based 50th percentile weight approximation or age formula
 */
export function calculateIBW(patient: PatientProfile): number | null {
  const heightCm = patient.heightCm;
  const isFemale = patient.gender === 'female';
  const age = (patient.ageYears ?? 0) + (patient.ageMonths ? patient.ageMonths / 12 : 0);

  if (age >= 18 || (heightCm && heightCm >= 152.4)) {
    if (!heightCm || heightCm < 100) return null;
    const heightInches = heightCm / 2.54;
    const inchesOver60 = Math.max(0, heightInches - 60);
    const base = isFemale ? 45.5 : 50.0;
    return Number((base + 2.3 * inchesOver60).toFixed(1));
  }

  // Pediatric IBW estimation
  if (heightCm && heightCm > 0) {
    const heightM = heightCm / 100;
    return Number((16.5 * heightM * heightM).toFixed(1));
  }

  if (age > 0) {
    return Number(estimatePediatricWeight(patient.ageYears, patient.ageMonths).toFixed(1));
  }

  return null;
}

/**
 * 2c. Adjusted Body Weight (ABW) for Obese Patients (BMI >= 30)
 * Formula: IBW + 0.4 * (Actual Weight - IBW)
 */
export function calculateABW(actualWeightKg: number, ibwKg: number): number {
  if (actualWeightKg <= ibwKg) return actualWeightKg;
  return Number((ibwKg + 0.4 * (actualWeightKg - ibwKg)).toFixed(1));
}

/**
 * 2d. Comprehensive Body Weight Analysis for Obesity & Dosing
 */
export function analyzeBodyWeight(
  patient: PatientProfile,
  useAdjustedWeight: boolean = false
): BodyWeightAnalysis {
  const actualWeightKg = patient.weightKg;
  const bmiData = calculateBMI(actualWeightKg, patient.heightCm);
  const ibwKg = calculateIBW(patient);
  const abwKg = ibwKg && actualWeightKg > ibwKg ? calculateABW(actualWeightKg, ibwKg) : null;
  const isObese = Boolean(bmiData.bmi && bmiData.bmi >= 30);

  const recommendedWeightKg = useAdjustedWeight && abwKg ? abwKg : actualWeightKg;

  return {
    actualWeightKg,
    ibwKg,
    abwKg,
    bmi: bmiData.bmi,
    bmiCategory: bmiData.category,
    isObese,
    recommendedWeightKg,
  };
}

/**
 * 2e. Emergency Pediatric Weight Estimation (Broselow / APLS Standard)
 */
export function estimatePediatricWeight(
  ageYears: number = 0,
  ageMonths: number = 0,
  heightCm?: number
): number {
  if (heightCm && heightCm > 45 && heightCm < 150) {
    const est = Math.exp(0.0185 * heightCm) * 3.2;
    return Number(Math.min(65, Math.max(2, est)).toFixed(1));
  }

  const totalAgeYears = ageYears + (ageMonths / 12);
  if (totalAgeYears < 1) {
    const m = ageMonths > 0 ? ageMonths : totalAgeYears * 12;
    return Number(((m * 0.5) + 4).toFixed(1));
  }
  if (totalAgeYears <= 5) {
    return Number((2 * (totalAgeYears + 5)).toFixed(1));
  }
  if (totalAgeYears <= 12) {
    return Number(((totalAgeYears * 3) + 7).toFixed(1));
  }
  return Math.min(70, Number(((totalAgeYears * 3.5) + 5).toFixed(1)));
}

/**
 * 2f. Crash Cart (Código Azul / Resucitación de Emergencia PALS & ACLS)
 */
export function calculateCrashCart(
  patient: PatientProfile,
  customWeightKg?: number
): CrashCartItem[] {
  const weight = customWeightKg && customWeightKg > 0
    ? customWeightKg
    : (patient.weightKg > 0 ? patient.weightKg : estimatePediatricWeight(patient.ageYears, patient.ageMonths, patient.heightCm));

  const ageYears = patient.ageYears || 0;
  const isAdult = ageYears >= 16 || weight >= 50;

  const epiMg = isAdult ? 1.0 : Math.min(1.0, Number((0.01 * weight).toFixed(2)));
  const epiMl = isAdult ? 10.0 : Math.min(10.0, Number((0.1 * weight).toFixed(1)));

  const amioMg = isAdult ? 300 : Math.min(300, Math.round(5 * weight));
  const amioMl = Number((amioMg / 50).toFixed(1));

  const atropinaRawMg = 0.02 * weight;
  const atropinaMax = isAdult ? 1.0 : 0.5;
  const atropinaMg = isAdult ? 1.0 : Number(Math.min(atropinaMax, Math.max(0.1, atropinaRawMg)).toFixed(2));
  const atropinaMl = Number((atropinaMg / 1).toFixed(2));

  const defibInitialJoules = isAdult ? 200 : Math.min(200, Math.round(2 * weight));
  const defibSecondJoules = isAdult ? 360 : Math.min(360, Math.round(4 * weight));
  const cardioversionJoules = isAdult ? 100 : Math.min(100, Math.round(1 * weight));

  let tetCuffed = '7.5 - 8.0 mm';
  let tetUncuffed = '8.0 mm';
  let tetDepthCm = '21 - 23 cm';
  if (!isAdult && ageYears < 16) {
    if (ageYears < 1) {
      tetCuffed = '3.0 - 3.5 mm';
      tetUncuffed = '3.5 mm';
      tetDepthCm = '9 - 10 cm';
    } else {
      const cuffedNum = Number(((ageYears / 4) + 3.5).toFixed(1));
      const uncuffedNum = Number(((ageYears / 4) + 4.0).toFixed(1));
      tetCuffed = `${cuffedNum} mm (con balón)`;
      tetUncuffed = `${uncuffedNum} mm (sin balón)`;
      tetDepthCm = `${Math.round(cuffedNum * 3)} cm en labio`;
    }
  }

  const fluidBoloMl = isAdult ? 1000 : Math.min(1000, Math.round(20 * weight));
  const bicarbMeq = isAdult ? 50 : Math.min(50, Math.round(1 * weight));
  const dextrosaMl = isAdult ? 150 : Math.min(150, Math.round(2.5 * weight));

  return [
    {
      id: 'defib_1',
      category: 'defibrillation',
      name: 'Desfibrilación Eléctrica (1ª Descarga)',
      indication: 'Fibrilación Ventricular (FV) / TV sin pulso',
      doseFormula: isAdult ? '200 J Bifásico fijo' : '2 J / kg',
      calculatedDose: `${defibInitialJoules} Joules`,
      concentrationOrSpec: 'Palas / Parches Pediátricos o Adulto con gel',
      volumeOrJoulesToDeliver: `${defibInitialJoules} J`,
      routeOrAction: 'Descarga asincrónica inmediata + 2 min RCP',
      maxLimit: 'Máx 200 J',
      notes: 'Continuar compresiones inmediatamente sin verificar pulso.',
      isDefibrillation: true,
    },
    {
      id: 'defib_2',
      category: 'defibrillation',
      name: 'Desfibrilación Eléctrica (2ª Descarga y Subsiguientes)',
      indication: 'FV / TV sin pulso persistente o refractaria',
      doseFormula: isAdult ? '360 J Bifásico o máximo' : '4 J / kg',
      calculatedDose: `${defibSecondJoules} Joules`,
      concentrationOrSpec: 'Aumentar carga en desfibrilador',
      volumeOrJoulesToDeliver: `${defibSecondJoules} J`,
      routeOrAction: 'Descarga asincrónica inmediata + 2 min RCP',
      maxLimit: 'Máx 360 J (o 10 J/kg)',
      notes: 'Administrar Epinefrina tras la 2ª descarga.',
      isDefibrillation: true,
    },
    {
      id: 'cardioversion',
      category: 'defibrillation',
      name: 'Cardioversión Sincronizada',
      indication: 'Taquicardia Supraventricular o TV inestable CON pulso',
      doseFormula: isAdult ? '100 J Sincronizado' : '0.5 - 1 J / kg',
      calculatedDose: `${cardioversionJoules} Joules`,
      concentrationOrSpec: 'Activar modo SYNC en desfibrilador',
      volumeOrJoulesToDeliver: `${cardioversionJoules} J`,
      routeOrAction: 'Descarga sincronizada con onda R',
      notes: 'Sedación y analgesia previas si el paciente está consciente.',
      isDefibrillation: true,
    },
    {
      id: 'adrenaline',
      category: 'resuscitation',
      name: 'Epinefrina (Adrenalina) 1:10.000',
      indication: 'Paro Cardíaco (Asistolia / AESP / FV refractaria)',
      doseFormula: '0.01 mg/kg (0.1 mL/kg de 1:10.000)',
      calculatedDose: `${epiMg} mg`,
      concentrationOrSpec: 'Dilución 1:10.000 (0.1 mg/mL = 1mg en 10mL)',
      volumeOrJoulesToDeliver: `${epiMl} mL`,
      routeOrAction: 'IV / IO rápido en bolo + flush 5-10 mL SF',
      maxLimit: 'Máx 1 mg (10 mL)',
      notes: 'Repetir cada 3 a 5 minutos mientras dure el paro.',
    },
    {
      id: 'amiodarone',
      category: 'antiarrhythmic',
      name: 'Amiodarona',
      indication: 'FV / TV sin pulso tras 3ª descarga',
      doseFormula: '5 mg/kg bolo rápido IV/IO',
      calculatedDose: `${amioMg} mg`,
      concentrationOrSpec: 'Ampolla 150 mg / 3 mL (50 mg/mL)',
      volumeOrJoulesToDeliver: `${amioMl} mL`,
      routeOrAction: 'Bolo IV/IO rápido (diluido en DAD 5% o directo) + flush',
      maxLimit: '1ª dosis: 300 mg. 2ª dosis: 150 mg.',
      notes: 'Puede repetirse una 2ª dosis de 2.5 mg/kg (o 150 mg) si refractario.',
    },
    {
      id: 'atropine',
      category: 'cardiovascular',
      name: 'Atropina Sulfato',
      indication: 'Bradicardia sintomática con compromiso hemodinámico',
      doseFormula: '0.02 mg/kg IV/IO (mín 0.1 mg)',
      calculatedDose: `${atropinaMg} mg`,
      concentrationOrSpec: 'Ampolla 1 mg / 1 mL',
      volumeOrJoulesToDeliver: `${atropinaMl} mL`,
      routeOrAction: 'IV / IO rápido',
      maxLimit: isAdult ? 'Máx 1.0 mg' : 'Máx 0.5 mg en niños',
      notes: 'No dar < 0.1 mg para evitar bradicardia paradójica.',
    },
    {
      id: 'fluids',
      category: 'fluids',
      name: 'Solución Salina 0.9% (Bolo Expansor)',
      indication: 'Shock Hipovolémico, Séptico o Deshidratación Grave',
      doseFormula: '20 mL/kg en 10-20 minutos',
      calculatedDose: `${fluidBoloMl} mL`,
      concentrationOrSpec: 'Cloruro de Sodio 0.9% o Ringer Lactato',
      volumeOrJoulesToDeliver: `${fluidBoloMl} mL`,
      routeOrAction: 'Infusión rápida a presión / jeringa IV/IO',
      maxLimit: 'Máx 1.000 mL por bolo',
      notes: 'Evaluar crepitantes o hepatomegalia tras cada bolo.',
    },
    {
      id: 'dextrose',
      category: 'fluids',
      name: 'Dextrosa al 10% (DAD 10%)',
      indication: 'Hipoglicemia sintomática o en paro',
      doseFormula: '2.5 mL/kg (0.25 g/kg de glucosa)',
      calculatedDose: `${dextrosaMl} mL`,
      concentrationOrSpec: 'Dextrosa en Agua Destilada 10% (0.1 g/mL)',
      volumeOrJoulesToDeliver: `${dextrosaMl} mL`,
      routeOrAction: 'IV / IO infusión lenta en 5-10 minutos',
      maxLimit: 'Máx 150 mL en bolo',
      notes: 'Comprobar hemoglucotest a los 10-15 minutos.',
    },
    {
      id: 'bicarb',
      category: 'resuscitation',
      name: 'Bicarbonato de Sodio 8.4%',
      indication: 'Paro prolongado, Hiperpotasemia o Intoxicación por ATC',
      doseFormula: '1 mEq/kg (1 mL/kg de sol. 8.4%)',
      calculatedDose: `${bicarbMeq} mEq`,
      concentrationOrSpec: 'Solución 8.4% (1 mEq = 1 mL)',
      volumeOrJoulesToDeliver: `${bicarbMeq} mL`,
      routeOrAction: 'IV / IO lento en 2-5 minutos',
      maxLimit: 'Máx 50 mEq (50 mL)',
      notes: 'Asegurar ventilación alveolar adecuada antes de administrar.',
    },
    {
      id: 'airway_tet',
      category: 'airway',
      name: 'Tubo Endotraqueal (TET / ETT)',
      indication: 'Vía aérea avanzada en paro o insuficiencia ventilatoria',
      doseFormula: isAdult ? 'Estándar adulto' : 'Con balón: (Edad/4)+3.5 | Sin balón: (Edad/4)+4',
      calculatedDose: tetCuffed,
      concentrationOrSpec: `TET con balón: ${tetCuffed} | Sin balón: ${tetUncuffed}`,
      volumeOrJoulesToDeliver: `Fijación labial: ${tetDepthCm}`,
      routeOrAction: 'Intubación orotraqueal bajo laringoscopía directa / videolaringoscopio',
      notes: 'Tener siempre disponible un número medio punto menor y mayor (±0.5).',
    },
  ];
}

/**
 * 3. Creatinine Clearance via Cockcroft-Gault Equation
 * Formula: [(140 - Age) * Weight(kg)] / [72 * SCr(mg/dL)] (* 0.85 if female)
 */
export function calculateCockcroftGault(
  patient: PatientProfile
): { crCl: number | null; alertRequired: boolean } {
  const scr = patient.serumCreatinineMgDl;
  const age = (patient.ageYears ?? 0) + (patient.ageMonths ? patient.ageMonths / 12 : 0);
  const weight = patient.weightKg;

  if (!scr || scr <= 0 || !weight || weight <= 0 || age <= 0) {
    return { crCl: null, alertRequired: false };
  }

  let crCl = ((140 - age) * weight) / (72 * scr);
  if (patient.gender === 'female') {
    crCl *= 0.85;
  }

  const rounded = Number(crCl.toFixed(1));
  return {
    crCl: rounded,
    alertRequired: rounded < 50,
  };
}

/**
 * 4. Estimated Glomerular Filtration Rate via 2021 CKD-EPI (Race-Free)
 */
export function calculateCKDEpi2021(
  patient: PatientProfile
): { egfr: number | null; stage: string } {
  const scr = patient.serumCreatinineMgDl;
  const age = (patient.ageYears ?? 0) + (patient.ageMonths ? patient.ageMonths / 12 : 0);

  if (!scr || scr <= 0 || age < 18) {
    return { egfr: null, stage: 'No aplicable (< 18 años o sin CrS)' };
  }

  const isFemale = patient.gender === 'female';
  const kappa = isFemale ? 0.7 : 0.9;
  const alpha = isFemale ? -0.241 : -0.302;
  const femaleFactor = isFemale ? 1.012 : 1.0;

  const minScrKappa = Math.min(scr / kappa, 1);
  const maxScrKappa = Math.max(scr / kappa, 1);

  const egfr =
    142 *
    Math.pow(minScrKappa, alpha) *
    Math.pow(maxScrKappa, -1.200) *
    Math.pow(0.9938, age) *
    femaleFactor;

  const rounded = Math.round(egfr);

  let stage = 'G1 (Normal o alta)';
  if (rounded < 15) stage = 'G5 (Falla renal terminal)';
  else if (rounded < 30) stage = 'G4 (Descenso severo)';
  else if (rounded < 45) stage = 'G3b (Descenso moderado a severo)';
  else if (rounded < 60) stage = 'G3a (Descenso leve a moderado)';
  else if (rounded < 90) stage = 'G2 (Descenso leve)';

  return { egfr: rounded, stage };
}

/**
 * 5. Complete KDIGO Renal Clearance Assessment
 */
export function evaluateRenalStatus(
  patient: PatientProfile,
  medication?: Medication
): RenalClearanceResult | null {
  const cg = calculateCockcroftGault(patient);
  if (cg.crCl === null) return null;

  const ckd = calculateCKDEpi2021(patient);

  let kdigoStage: RenalClearanceResult['kdigoStage'] = 'G1';
  let kdigoDescription = 'Función Renal Normal';

  if (cg.crCl < 15) {
    kdigoStage = 'G5';
    kdigoDescription = 'Falla Renal Terminal';
  } else if (cg.crCl < 30) {
    kdigoStage = 'G4';
    kdigoDescription = 'Deterioro Renal Severo';
  } else if (cg.crCl < 45) {
    kdigoStage = 'G3b';
    kdigoDescription = 'Deterioro Moderado a Severo';
  } else if (cg.crCl < 60) {
    kdigoStage = 'G3a';
    kdigoDescription = 'Deterioro Moderado';
  } else if (cg.crCl < 90) {
    kdigoStage = 'G2';
    kdigoDescription = 'Deterioro Leve';
  }

  // Find matching drug guideline if available
  let matchingGuideline = undefined;
  if (medication?.renalAdjustments) {
    if (cg.crCl >= 50) {
      matchingGuideline = medication.renalAdjustments.find(g => g.crClThreshold.includes('> 50'));
    } else if (cg.crCl >= 10) {
      matchingGuideline = medication.renalAdjustments.find(g => g.crClThreshold.includes('10-50'));
    } else {
      matchingGuideline = medication.renalAdjustments.find(g => g.crClThreshold.includes('< 10'));
    }
  }

  return {
    cockcroftGaultCrCl: cg.crCl,
    ckdEpiEgfr: ckd.egfr ?? undefined,
    kdigoStage,
    kdigoDescription,
    isRenalAlertTriggered: cg.crCl < 50,
    guideline: matchingGuideline,
  };
}

/**
 * 6. Obstetric Safety Evaluation Engine
 */
export function evaluateObstetricSafety(
  medication: Medication,
  patient: PatientProfile
): ObstetricSafetyEvaluation {
  if (patient.gender !== 'female' || !patient.isPregnant) {
    return { isAlertTriggered: false, severity: 'safe', message: 'No aplica (paciente no gestante)' };
  }

  const guidance = medication.pregnancyGuidance;
  if (!guidance) {
    return {
      isAlertTriggered: false,
      severity: 'caution',
      message: 'Sin datos categóricos de teratogenia en ficha técnica. Usar con cautela clínica.'
    };
  }

  const trimester = patient.pregnancyTrimester;
  const isTrimesterContraindicated = trimester && guidance.contraindicatedInTrimester?.includes(trimester);

  if (guidance.status === 'contraindicated' || isTrimesterContraindicated) {
    const trimesterText = trimester ? `en el ${trimester}º Trimestre` : 'durante la gestación';
    return {
      isAlertTriggered: true,
      severity: 'contraindicated',
      isHardStop: true,
      message: `CONTRAINDICADO ${trimesterText}. ${guidance.summary}`,
      alternativeSuggestion: guidance.clinicalAlternative,
      fetalRisks: guidance.fetalRisks,
    };
  }

  if (guidance.status === 'caution') {
    return {
      isAlertTriggered: true,
      severity: 'caution',
      isHardStop: false,
      message: `Precaución en embarazo (Categoría ${guidance.category}). ${guidance.summary}`,
      alternativeSuggestion: guidance.clinicalAlternative,
      fetalRisks: guidance.fetalRisks,
    };
  }

  return {
    isAlertTriggered: false,
    severity: 'safe',
    isHardStop: false,
    message: `Compatible en embarazo (Categoría ${guidance.category}). ${guidance.summary}`,
  };
}

export interface DoseSpectrumEvaluation {
  currentDailyMg: number;
  minDailyMg: number;
  recDailyMg: number;
  maxDailyMg: number;
  percentage: number;
  status: 'subtherapeutic' | 'optimal' | 'high_normal' | 'exceeded_capped';
  statusLabel: string;
}

export function evaluateDoseSpectrum(
  currentDailyMg: number,
  patientWeightKg: number,
  indication: DrugIndication
): DoseSpectrumEvaluation {
  const recRate = indication.recommendedDoseMgPerKgPerDay || 0;
  const minRate = indication.minDoseMgPerKgPerDay || (recRate ? recRate * 0.7 : 0);
  const maxRate = indication.maxDoseMgPerKgPerDay || (recRate ? recRate * 1.3 : 0);

  const minDailyMg = indication.isDosePerKgPerDose
    ? minRate * patientWeightKg * indication.frequencyPerDay
    : minRate * patientWeightKg;

  const recDailyMg = indication.isDosePerKgPerDose
    ? recRate * patientWeightKg * indication.frequencyPerDay
    : (indication.fixedAdultDoseMg ? indication.fixedAdultDoseMg * indication.frequencyPerDay : recRate * patientWeightKg);

  const maxCeiling = indication.maxDailyDoseMg || (maxRate * patientWeightKg) || (recDailyMg * 1.5);
  const maxDailyMg = Math.min(
    maxCeiling,
    indication.isDosePerKgPerDose ? maxRate * patientWeightKg * indication.frequencyPerDay : (maxRate * patientWeightKg || maxCeiling)
  );

  const safeMax = Math.max(maxCeiling, maxDailyMg);
  const safeMin = Math.max(0, minDailyMg);

  let percentage = 50;
  if (safeMax > safeMin) {
    percentage = Math.min(100, Math.max(0, ((currentDailyMg - safeMin) / (safeMax - safeMin)) * 100));
  }

  let status: DoseSpectrumEvaluation['status'] = 'optimal';
  let statusLabel = 'Ventana Terapéutica Óptima';

  if (currentDailyMg >= maxCeiling) {
    status = 'exceeded_capped';
    statusLabel = 'Tope Máximo de Seguridad';
  } else if (currentDailyMg > maxDailyMg && maxDailyMg > 0) {
    status = 'high_normal';
    statusLabel = 'Límite Superior Terapéutico';
  } else if (currentDailyMg < minDailyMg && minDailyMg > 0) {
    status = 'subtherapeutic';
    statusLabel = 'Sub-terapéutico (Dosis baja)';
  }

  return {
    currentDailyMg,
    minDailyMg: Math.round(minDailyMg),
    recDailyMg: Math.round(recDailyMg),
    maxDailyMg: Math.round(safeMax),
    percentage: Math.round(percentage),
    status,
    statusLabel,
  };
}

/**
 * 7. Core Drug Dosage Calculation Engine
 * Pure function: takes inputs, produces verified CalculationResult
 */
export interface DosageCalculationParams {
  patientWeightKg: number;
  indication: DrugIndication;
  concentration: DrugConcentration;
  customDoseMgPerKgPerDay?: number;
  selectedFrequencyPerDay?: number;
  selectedDurationDays?: number;
  selectedRoute?: RouteOfAdmin;
  medicationName?: string;
}

export function calculateDrugDosage(params: DosageCalculationParams): CalculationResult {
  const {
    patientWeightKg,
    indication,
    concentration,
    customDoseMgPerKgPerDay,
    selectedFrequencyPerDay,
    selectedDurationDays = 7,
    selectedRoute = 'oral',
    medicationName = 'Medicamento'
  } = params;

  const frequency = selectedFrequencyPerDay || indication.frequencyPerDay || 3;
  const doseRate = customDoseMgPerKgPerDay !== undefined
    ? customDoseMgPerKgPerDay
    : (indication.recommendedDoseMgPerKgPerDay || 0);

  // 1. Calculate raw dose based on whether it is dose-per-kg-per-day or per-dose
  let rawDailyMg = 0;
  let rawSingleMg = 0;

  if (indication.fixedAdultDoseMg && patientWeightKg >= 40 && !indication.recommendedDoseMgPerKgPerDay) {
    rawSingleMg = indication.fixedAdultDoseMg;
    rawDailyMg = rawSingleMg * frequency;
  } else if (indication.isDosePerKgPerDose) {
    rawSingleMg = doseRate * patientWeightKg;
    rawDailyMg = rawSingleMg * frequency;
  } else {
    rawDailyMg = doseRate * patientWeightKg;
    rawSingleMg = frequency > 0 ? rawDailyMg / frequency : 0;
  }

  // 2. Cap against maximum safety limits
  let singleMg = rawSingleMg;
  let dailyMg = rawDailyMg;
  let isMaxDoseExceeded = false;

  const maxDaily = indication.maxDailyDoseMg || 4000;
  const maxSingle = indication.maxSingleDoseMg || (maxDaily / frequency);

  if (dailyMg > maxDaily) {
    dailyMg = maxDaily;
    singleMg = dailyMg / frequency;
    isMaxDoseExceeded = true;
  }

  if (singleMg > maxSingle) {
    singleMg = maxSingle;
    dailyMg = singleMg * frequency;
    isMaxDoseExceeded = true;
  }

  // 3. Out of range detection
  let isOutOfRange = isMaxDoseExceeded;
  let outOfRangeReason: string | undefined = undefined;

  if (isMaxDoseExceeded) {
    outOfRangeReason = `La dosis calculada por peso (${Math.round(rawDailyMg)} mg/día) superaba el límite máximo seguro (${maxDaily} mg/día o ${maxSingle} mg/toma). Se aplicó el tope máximo clínico.`;
  } else if (
    indication.minDoseMgPerKgPerDay !== undefined &&
    doseRate < indication.minDoseMgPerKgPerDay
  ) {
    isOutOfRange = true;
    outOfRangeReason = `La dosis fijada (${doseRate} mg/kg/día) se encuentra por debajo del rango terapéutico mínimo recomendado (${indication.minDoseMgPerKgPerDay} mg/kg/día).`;
  } else if (
    indication.maxDoseMgPerKgPerDay !== undefined &&
    doseRate > indication.maxDoseMgPerKgPerDay
  ) {
    isOutOfRange = true;
    outOfRangeReason = `La dosis fijada (${doseRate} mg/kg/día) supera el rango terapéutico máximo recomendado (${indication.maxDoseMgPerKgPerDay} mg/kg/día).`;
  }

  // 4. Calculate unit quantity based on pharmaceutical concentration
  let singleUnitQuantity = 0;
  let unitLabel = concentration.unit || 'mL';

  if (concentration.form === 'suspension') {
    const mgPerMl = concentration.amountMg / concentration.volumeMl;
    singleUnitQuantity = Number((singleMg / mgPerMl).toFixed(1));
    unitLabel = 'mL';
  } else if (concentration.form === 'drops') {
    const mgPerDrop = concentration.amountMg / (concentration.volumeMl * 20); // 20 drops ≈ 1 mL
    singleUnitQuantity = Math.round(singleMg / mgPerDrop);
    unitLabel = 'gotas';
  } else if (concentration.form === 'tablets') {
    singleUnitQuantity = Number((singleMg / concentration.amountMg).toFixed(2));
    unitLabel = singleUnitQuantity === 1 ? 'comprimido' : 'comprimidos';
  } else if (concentration.form === 'vial') {
    const mgPerMl = concentration.amountMg / concentration.volumeMl;
    singleUnitQuantity = Number((singleMg / mgPerMl).toFixed(1));
    unitLabel = 'mL';
  } else {
    singleUnitQuantity = Number(singleMg.toFixed(1));
    unitLabel = 'unidades';
  }

  // 5. Total volume and commercial bottle estimation
  let totalVolumeMl: number | undefined = undefined;
  let bottlesNeeded: number | undefined = undefined;
  let totalDailyLiquidMl: number | undefined = undefined;

  if (concentration.form === 'suspension') {
    totalDailyLiquidMl = singleUnitQuantity * frequency;
    totalVolumeMl = Number((totalDailyLiquidMl * selectedDurationDays).toFixed(1));
    const bottleSize = concentration.standardBottleMl || 100;
    bottlesNeeded = Math.max(1, Math.ceil(totalVolumeMl / bottleSize));
  }

  // 6. Generate Structured Prescription (Rp.)
  const intervalHours = Math.round(24 / frequency);
  const routeAbbr = selectedRoute === 'oral' ? 'VO' : selectedRoute.toUpperCase();
  const structuredPrescription = [
    `Rp. ${medicationName} (${concentration.name})`,
    `Administrar: ${singleUnitQuantity} ${unitLabel} (${Math.round(singleMg)} mg) cada ${intervalHours} horas por vía ${routeAbbr}.`,
    `Duración: por ${selectedDurationDays} días.`,
    bottlesNeeded ? `Dispensar: ${bottlesNeeded} frasco(s).` : null,
    isOutOfRange ? `[Nota de Seguridad: Dosis limitada al tope de seguridad clínico: ${Math.round(dailyMg)} mg/día]` : null,
  ].filter(Boolean).join('\n');

  return {
    singleDoseUnitQuantity: singleUnitQuantity,
    unitLabel,
    singleDoseMg: Number(singleMg.toFixed(1)),
    dailyTotalMg: Number(dailyMg.toFixed(1)),
    bottlesNeeded,
    totalVolumeMl,
    isMaxDoseExceeded,
    isOutOfRange,
    outOfRangeReason,
    rawCalculatedSingleMg: Number(rawSingleMg.toFixed(1)),
    rawCalculatedDailyMg: Number(rawDailyMg.toFixed(1)),
    totalDailyLiquidMl,
    structuredPrescription,
  };
}
