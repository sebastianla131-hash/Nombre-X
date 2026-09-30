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
  Medication
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
