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

export interface BmiCalculationResult {
  bmi: number;
  category: string;
  categoryKey: 'underweight' | 'normal' | 'overweight' | 'obese1' | 'obese2' | 'obese3';
  color: string;
  badgeBg: string;
  borderColor: string;
  gaugePercentage: number;
  isPediatric: boolean;
  pediatricInterpretation?: string;
  healthyWeightRange: { min: number; max: number };
  idealWeightKg: number;
  weightDifferenceKg: number;
  bsaM2: number;
  interpretation: string;
}

/**
 * Body Mass Index (IMC = Peso (kg) / [Talla (m)]^2) & Nutritional Status
 */
export function calculateBMI(params: {
  weightKg: number;
  heightCm: number;
  ageYears?: number;
  ageMonths?: number;
  gender?: 'male' | 'female';
}): BmiCalculationResult | null {
  const { weightKg, heightCm, ageYears = 30, ageMonths = 0, gender = 'male' } = params;
  if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) {
    return null;
  }

  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));
  const bsaM2 = calculateBSA(weightKg, heightCm);

  const isPediatric = ageYears < 18;

  // Healthy weight range for adults (BMI 18.5 - 24.9)
  const minHealthyKg = Number((18.5 * heightM * heightM).toFixed(1));
  const maxHealthyKg = Number((24.9 * heightM * heightM).toFixed(1));

  // Ideal body weight (Devine formula if adult, or pediatric ~16.5)
  let idealWeightKg = 0;
  if (isPediatric) {
    idealWeightKg = Number((16.5 * heightM * heightM).toFixed(1));
  } else {
    const heightInches = heightCm / 2.54;
    if (heightInches >= 60) {
      const extraInches = heightInches - 60;
      idealWeightKg = gender === 'male' ? 50 + 2.3 * extraInches : 45.5 + 2.3 * extraInches;
    } else {
      idealWeightKg = Number((22.0 * heightM * heightM).toFixed(1));
    }
    idealWeightKg = Number(idealWeightKg.toFixed(1));
  }

  let weightDifferenceKg = 0;
  if (weightKg > maxHealthyKg) {
    weightDifferenceKg = Number((weightKg - maxHealthyKg).toFixed(1));
  } else if (weightKg < minHealthyKg) {
    weightDifferenceKg = Number((weightKg - minHealthyKg).toFixed(1));
  }

  let category = '';
  let categoryKey: 'underweight' | 'normal' | 'overweight' | 'obese1' | 'obese2' | 'obese3' = 'normal';
  let color = 'text-emerald-700 dark:text-emerald-400';
  let badgeBg = 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200';
  let borderColor = 'border-emerald-300 dark:border-emerald-700';
  let interpretation = '';
  let pediatricInterpretation = '';

  if (isPediatric) {
    let pCat = 'Peso Adecuado / Eutrófico (p5 - p85 OMS)';
    if (bmi < 14.0) {
      pCat = 'Bajo Peso / Desnutrición (<p5 OMS)';
      categoryKey = 'underweight';
      color = 'text-sky-700 dark:text-sky-400';
      badgeBg = 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-200';
      borderColor = 'border-sky-300 dark:border-sky-700';
      interpretation = 'IMC compatible con bajo peso para la edad. Se sugiere evaluar curvas OMS (P/E y T/E).';
    } else if (bmi <= 18.0) {
      pCat = 'Peso Adecuado / Eutrófico (p5 - p85 OMS)';
      categoryKey = 'normal';
      color = 'text-emerald-700 dark:text-emerald-400';
      badgeBg = 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200';
      borderColor = 'border-emerald-300 dark:border-emerald-700';
      interpretation = 'Desarrollo ponderal óptimo según patrones de crecimiento de la OMS.';
    } else if (bmi <= 21.0) {
      pCat = 'Sobrepeso Infantil (p85 - p95 OMS)';
      categoryKey = 'overweight';
      color = 'text-amber-700 dark:text-amber-400';
      badgeBg = 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200';
      borderColor = 'border-amber-300 dark:border-amber-700';
      interpretation = 'IMC entre percentil 85 y 95. Se sugiere asesoría de hábitos nutricionales y actividad.';
    } else {
      pCat = 'Obesidad Pediátrica (>p95 OMS / >+2 DE)';
      categoryKey = 'obese1';
      color = 'text-rose-700 dark:text-rose-400';
      badgeBg = 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200';
      borderColor = 'border-rose-300 dark:border-rose-700';
      interpretation = 'IMC superior al percentil 95 (>+2 DE OMS). Requiere seguimiento médico y tamizaje metabólico.';
    }
    category = pCat;
    pediatricInterpretation = 'En pediatría (<18 años), el IMC se evalúa por percentil y z-scores de la OMS según edad y sexo.';
  } else {
    if (bmi < 18.5) {
      category = 'Bajo Peso (Delgadez)';
      categoryKey = 'underweight';
      color = 'text-sky-700 dark:text-sky-400';
      badgeBg = 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-200';
      borderColor = 'border-sky-300 dark:border-sky-700';
      interpretation = 'Peso inferior al rango saludable. Mayor riesgo de déficit nutricional y osteoporosis.';
    } else if (bmi < 25.0) {
      category = 'Peso Saludable (Eutrófico)';
      categoryKey = 'normal';
      color = 'text-emerald-700 dark:text-emerald-400';
      badgeBg = 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200';
      borderColor = 'border-emerald-300 dark:border-emerald-700';
      interpretation = 'Peso corporal dentro del intervalo óptimo de bajo riesgo cardiovascular y metabólico (OMS).';
    } else if (bmi < 30.0) {
      category = 'Sobrepeso (Preobesidad)';
      categoryKey = 'overweight';
      color = 'text-amber-700 dark:text-amber-400';
      badgeBg = 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200';
      borderColor = 'border-amber-300 dark:border-amber-700';
      interpretation = 'Peso superior al recomendado. Aumento moderado de riesgo cardiovascular y resistencia insulínica.';
    } else if (bmi < 35.0) {
      category = 'Obesidad Grado I (Moderada)';
      categoryKey = 'obese1';
      color = 'text-orange-700 dark:text-orange-400';
      badgeBg = 'bg-orange-50 dark:bg-orange-950/60 text-orange-800 dark:text-orange-200';
      borderColor = 'border-orange-300 dark:border-orange-700';
      interpretation = 'Obesidad moderada (OMS). Se aconseja intervención nutricional y control de lípidos/glucemia.';
    } else if (bmi < 40.0) {
      category = 'Obesidad Grado II (Severa)';
      categoryKey = 'obese2';
      color = 'text-rose-700 dark:text-rose-400';
      badgeBg = 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200';
      borderColor = 'border-rose-300 dark:border-rose-700';
      interpretation = 'Riesgo cardiovascular alto. Requiere manejo médico estructurado.';
    } else {
      category = 'Obesidad Grado III (Mórbida)';
      categoryKey = 'obese3';
      color = 'text-red-800 dark:text-red-400';
      badgeBg = 'bg-red-50 dark:bg-red-950/60 text-red-900 dark:text-red-200';
      borderColor = 'border-red-400 dark:border-red-700';
      interpretation = 'Obesidad muy severa (mórbida). Indicación de abordaje multidisciplinario especializado.';
    }
  }

  // Gauge percentage: map BMI range [12, 42] to [0%, 100%]
  const minScale = 12;
  const maxScale = 42;
  const clampedBmi = Math.min(Math.max(bmi, minScale), maxScale);
  const gaugePercentage = Math.round(((clampedBmi - minScale) / (maxScale - minScale)) * 100);

  return {
    bmi,
    category,
    categoryKey,
    color,
    badgeBg,
    borderColor,
    gaugePercentage,
    isPediatric,
    pediatricInterpretation,
    healthyWeightRange: { min: minHealthyKg, max: maxHealthyKg },
    idealWeightKg,
    weightDifferenceKg,
    bsaM2,
    interpretation
  };
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
