/**
 * Clinical calculation utilities
 */

export interface DoseCalculationResult {
  singleDoseMg: number;
  singleDoseUnitQuantity: number; // in mL, drops, or tablets
  unitLabel: string; // "mL", "comprimidos", "gotas"
  dailyTotalMg: number;
  frequencyPerDay: number;
  intervalHours: number;
  durationText: string;
  isMaxDoseExceeded: boolean;
  maxDailyDoseMg: number;
  maxSingleDoseMg?: number;
  estimatedTotalVolumeMl?: number;
  bottlesNeeded?: number;
  formattedPrescription: string;
  renalAdjustmentNote?: string;
  administrationTips: string[];
}

export function calculateMedicationDose(params: {
  drugName: string;
  weightKg: number;
  doseMgPerKg: number;
  isDosePerKgPerDose?: boolean;
  frequencyPerDay: number;
  intervalHours: number;
  durationDaysStr: string;
  durationDaysNum?: number;
  concentrationAmountMg: number;
  concentrationVolumeMl: number;
  concentrationForm: 'suspension' | 'tablets' | 'drops' | 'vial' | 'inhaler';
  concentrationUnit: string;
  standardBottleMl?: number;
  maxDailyDoseMg: number;
  maxSingleDoseMg?: number;
  route: string;
  instructionsNote?: string;
}): DoseCalculationResult {
  const {
    drugName,
    weightKg,
    doseMgPerKg,
    isDosePerKgPerDose = false,
    frequencyPerDay,
    intervalHours,
    durationDaysStr,
    durationDaysNum = 7,
    concentrationAmountMg,
    concentrationVolumeMl,
    concentrationForm,
    concentrationUnit,
    standardBottleMl,
    maxDailyDoseMg,
    maxSingleDoseMg,
    instructionsNote
  } = params;

  let calculatedSingleMg = 0;
  let calculatedDailyMg = 0;

  if (isDosePerKgPerDose) {
    // E.g., Paracetamol 15 mg/kg per dose
    calculatedSingleMg = weightKg * doseMgPerKg;
    calculatedDailyMg = calculatedSingleMg * frequencyPerDay;
  } else {
    // E.g., Amoxicillin 90 mg/kg per day
    calculatedDailyMg = weightKg * doseMgPerKg;
    calculatedSingleMg = calculatedDailyMg / Math.max(1, frequencyPerDay);
  }

  // Check caps
  let isMaxDoseExceeded = false;
  if (maxSingleDoseMg && calculatedSingleMg > maxSingleDoseMg) {
    calculatedSingleMg = maxSingleDoseMg;
    isMaxDoseExceeded = true;
  }
  if (maxDailyDoseMg && calculatedDailyMg > maxDailyDoseMg) {
    calculatedDailyMg = maxDailyDoseMg;
    isMaxDoseExceeded = true;
    calculatedSingleMg = Math.min(calculatedSingleMg, calculatedDailyMg / Math.max(1, frequencyPerDay));
  }

  // Calculate volume or units based on concentration
  // Concentration: concentrationAmountMg in concentrationVolumeMl
  // mgPerMl = concentrationAmountMg / concentrationVolumeMl
  const mgPerMl = concentrationAmountMg / Math.max(0.001, concentrationVolumeMl);
  let unitQuantity = 0;

  if (concentrationForm === 'tablets') {
    // e.g. tablets
    unitQuantity = Number((calculatedSingleMg / concentrationAmountMg).toFixed(2));
  } else if (concentrationForm === 'drops') {
    // If drops specified: often 1 mL = 20-25 drops or direct mL
    // Let's calculate mL first
    const volumeMl = calculatedSingleMg / mgPerMl;
    // If concentrationUnit includes "gotas": 1 mL = 20 drops
    if (concentrationUnit.toLowerCase().includes('gotas')) {
      const drops = Math.round(volumeMl * 20);
      unitQuantity = Number(volumeMl.toFixed(2));
    } else {
      unitQuantity = Number(volumeMl.toFixed(2));
    }
  } else {
    // Suspensions / Vials: volume in mL
    unitQuantity = Number((calculatedSingleMg / mgPerMl).toFixed(2));
  }

  // Estimated total volume and bottle counts
  let estimatedTotalVolumeMl: number | undefined;
  let bottlesNeeded: number | undefined;

  if (concentrationForm === 'suspension' || concentrationForm === 'drops') {
    const singleMl = calculatedSingleMg / mgPerMl;
    estimatedTotalVolumeMl = Number((singleMl * frequencyPerDay * durationDaysNum).toFixed(1));
    if (standardBottleMl && standardBottleMl > 0) {
      bottlesNeeded = Math.ceil(estimatedTotalVolumeMl / standardBottleMl);
    }
  }

  // Format prescription in clinical Spanish
  let doseUnitStr = '';
  if (concentrationForm === 'tablets') {
    doseUnitStr = `${unitQuantity} comprimido(s) (${Math.round(calculatedSingleMg)} mg)`;
  } else if (concentrationForm === 'drops') {
    const dropsCount = Math.round((calculatedSingleMg / mgPerMl) * 20);
    doseUnitStr = `${unitQuantity} mL (~${dropsCount} gotas / ${Math.round(calculatedSingleMg)} mg)`;
  } else {
    doseUnitStr = `${unitQuantity} mL (${Math.round(calculatedSingleMg)} mg)`;
  }

  const formattedPrescription = [
    `Rp. ${drugName.toUpperCase()}`,
    `Presentación: ${concentrationAmountMg} mg / ${concentrationVolumeMl} mL (${concentrationForm})`,
    `Indicación: Administrar ${doseUnitStr} cada ${intervalHours} horas vía oral durante ${durationDaysStr}.`,
    estimatedTotalVolumeMl && bottlesNeeded
      ? `Dispensar: ${bottlesNeeded} frasco(s) de ${standardBottleMl || 100} mL (volumen total estimado: ${estimatedTotalVolumeMl} mL).`
      : '',
    instructionsNote ? `Nota: ${instructionsNote}` : ''
  ]
    .filter(Boolean)
    .join('\n');

  const tips: string[] = [];
  if (isMaxDoseExceeded) {
    tips.push(`La dosis calculada alcanzaba el límite seguro. Se ajustó a la dosis máxima permitida (${maxSingleDoseMg || maxDailyDoseMg} mg).`);
  }
  if (concentrationForm === 'suspension') {
    tips.push('Agitar enérgicamente el frasco antes de cada toma.');
    tips.push('Utilizar jeringa dosificadora oral graduada en mL para mayor precisión.');
  }

  return {
    singleDoseMg: Number(calculatedSingleMg.toFixed(1)),
    singleDoseUnitQuantity: unitQuantity,
    unitLabel: concentrationUnit,
    dailyTotalMg: Number(calculatedDailyMg.toFixed(1)),
    frequencyPerDay,
    intervalHours,
    durationText: durationDaysStr,
    isMaxDoseExceeded,
    maxDailyDoseMg,
    maxSingleDoseMg,
    estimatedTotalVolumeMl,
    bottlesNeeded,
    formattedPrescription,
    administrationTips: tips
  };
}

/**
 * Cockcroft-Gault Creatinine Clearance (CrCl in mL/min)
 */
export function calculateCockcroftGault(params: {
  ageYears: number;
  weightKg: number;
  serumCreatinineMgDl: number;
  gender: 'male' | 'female';
}): { crCl: number; stage: string; color: string } {
  const { ageYears, weightKg, serumCreatinineMgDl, gender } = params;
  if (!serumCreatinineMgDl || serumCreatinineMgDl <= 0 || !weightKg || !ageYears) {
    return { crCl: 0, stage: 'Datos incompletos', color: 'text-slate-500' };
  }

  // CrCl = ((140 - Age) * Weight) / (72 * SCr) * (0.85 if female)
  let crCl = ((140 - ageYears) * weightKg) / (72 * serumCreatinineMgDl);
  if (gender === 'female') {
    crCl *= 0.85;
  }

  crCl = Number(crCl.toFixed(1));

  let stage = 'Función Renal Normal / Hiperfiltración (>90 mL/min)';
  let color = 'text-emerald-600';

  if (crCl < 15) {
    stage = 'Falla Renal Terminal / Grado 5 (<15 mL/min)';
    color = 'text-red-600';
  } else if (crCl < 30) {
    stage = 'Insuficiencia Renal Severa / Grado 4 (15-29 mL/min)';
    color = 'text-red-500';
  } else if (crCl < 60) {
    stage = 'Insuficiencia Renal Moderada / Grado 3 (30-59 mL/min)';
    color = 'text-amber-600';
  } else if (crCl < 90) {
    stage = 'Disfunción Renal Leve / Grado 2 (60-89 mL/min)';
    color = 'text-teal-600 dark:text-teal-400';
  }

  return { crCl, stage, color };
}

/**
 * Body Surface Area (Mosteller formula)
 */
export function calculateBSA(weightKg: number, heightCm: number): number {
  if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) return 0;
  return Number(Math.sqrt((weightKg * heightCm) / 3600).toFixed(2));
}

/**
 * Infusion Calculation
 */
export function calculateInfusionRate(params: {
  weightKg: number;
  doseRate: number; // e.g. 0.1 mcg/kg/min
  doseUnit: 'mcg/kg/min' | 'mcg/min' | 'mg/h' | 'UI/h';
  totalDrugMg: number;
  totalVolumeMl: number;
}): {
  rateMlPerHour: number;
  microdropsPerMin: number;
  finalConcentrationMcgPerMl: number;
} {
  const { weightKg, doseRate, doseUnit, totalDrugMg, totalVolumeMl } = params;
  if (!totalDrugMg || !totalVolumeMl || totalVolumeMl <= 0 || !doseRate) {
    return { rateMlPerHour: 0, microdropsPerMin: 0, finalConcentrationMcgPerMl: 0 };
  }

  const totalDrugMcg = totalDrugMg * 1000;
  const concMcgPerMl = totalDrugMcg / totalVolumeMl;

  let rateMlPerHour = 0;

  if (doseUnit === 'mcg/kg/min') {
    const requiredMcgPerHour = doseRate * weightKg * 60;
    rateMlPerHour = requiredMcgPerHour / concMcgPerMl;
  } else if (doseUnit === 'mcg/min') {
    const requiredMcgPerHour = doseRate * 60;
    rateMlPerHour = requiredMcgPerHour / concMcgPerMl;
  } else if (doseUnit === 'mg/h') {
    const requiredMgPerHour = doseRate;
    const concMgPerMl = totalDrugMg / totalVolumeMl;
    rateMlPerHour = requiredMgPerHour / concMgPerMl;
  } else if (doseUnit === 'UI/h') {
    // totalDrugMg represents total UI in this case
    const concUiPerMl = totalDrugMg / totalVolumeMl;
    rateMlPerHour = doseRate / concUiPerMl;
  }

  rateMlPerHour = Number(rateMlPerHour.toFixed(2));
  // 1 mL/h with standard microdrip (60 gtt/mL) = 1 microdrop/min
  const microdropsPerMin = Math.round(rateMlPerHour);

  return {
    rateMlPerHour,
    microdropsPerMin,
    finalConcentrationMcgPerMl: Number(concMcgPerMl.toFixed(1))
  };
}
