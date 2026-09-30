/**
 * Clinical calculation utilities
 */

export interface RouteLabel {
  abbr: string; // e.g. "VO", "IV", "IM", "SC", "VR", "INH", "SL", "Tópica"
  full: string; // e.g. "Vía Oral", "Vía Intravenosa", "Vía Intramuscular"
  formatted: string; // e.g. "VO (Vía Oral)", "IV (Vía Intravenosa)"
}

/**
 * Normaliza y formatea la vía de administración médica estándar (VO, IV, IM, etc.)
 */
export function formatRouteLabel(route?: string): RouteLabel {
  if (!route) {
    return { abbr: 'VO', full: 'Vía Oral', formatted: 'VO (Vía Oral)' };
  }
  const clean = route.trim().toLowerCase();
  if (clean === 'oral' || clean === 'vo') {
    return { abbr: 'VO', full: 'Vía Oral', formatted: 'VO (Vía Oral)' };
  }
  if (
    clean === 'iv' ||
    clean === 'ev' ||
    clean === 'intravenosa' ||
    clean === 'endovenosa' ||
    clean.includes('intraven') ||
    clean.includes('endoven')
  ) {
    return { abbr: 'IV', full: 'Vía Intravenosa', formatted: 'IV (Vía Intravenosa)' };
  }
  if (clean === 'im' || clean === 'intramuscular' || clean.includes('intramusc')) {
    return { abbr: 'IM', full: 'Vía Intramuscular', formatted: 'IM (Vía Intramuscular)' };
  }
  if (clean === 'sc' || clean === 'subcutanea' || clean === 'subcutánea' || clean.includes('subcutan')) {
    return { abbr: 'SC', full: 'Vía Subcutánea', formatted: 'SC (Vía Subcutánea)' };
  }
  if (clean === 'rectal' || clean === 'vr') {
    return { abbr: 'VR', full: 'Vía Rectal', formatted: 'VR (Vía Rectal)' };
  }
  if (clean === 'inhalatoria' || clean === 'inh' || clean.includes('inhal')) {
    return { abbr: 'INH', full: 'Vía Inhalatoria', formatted: 'INH (Vía Inhalatoria)' };
  }
  if (clean === 'sublingual' || clean === 'sl') {
    return { abbr: 'SL', full: 'Vía Sublingual', formatted: 'SL (Vía Sublingual)' };
  }
  if (clean === 'topica' || clean === 'tópica' || clean.includes('topic')) {
    return { abbr: 'Tópica', full: 'Vía Tópica', formatted: 'Vía Tópica' };
  }
  return {
    abbr: route.toUpperCase(),
    full: `Vía ${route}`,
    formatted: `${route.toUpperCase()} (Vía ${route})`
  };
}

export interface DoseCalculationResult {
  singleDoseMg: number;
  singleDoseUnitQuantity: number; // in mL, drops, or tablets
  unitLabel: string; // "mL", "comprimidos", "gotas"
  dailyTotalMg: number;
  frequencyPerDay: number;
  intervalHours: number;
  durationText: string;
  isMaxDoseExceeded: boolean;
  isOutOfRange: boolean;
  outOfRangeReason?: string;
  rawCalculatedSingleMg: number;
  rawCalculatedDailyMg: number;
  maxDailyDoseMg: number;
  maxSingleDoseMg?: number;
  standardMinDoseMgKg?: number;
  standardMaxDoseMgKg?: number;
  estimatedTotalVolumeMl?: number;
  bottlesNeeded?: number;
  formattedPrescription: string;
  renalAdjustmentNote?: string;
  administrationTips: string[];
  routeAbbr?: string;
  routeFormatted?: string;
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
  standardMinDoseMgKg?: number;
  standardMaxDoseMgKg?: number;
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
    standardMinDoseMgKg,
    standardMaxDoseMgKg,
    route = 'oral',
    instructionsNote
  } = params;

  const routeInfo = formatRouteLabel(route);

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

  const rawCalculatedSingleMg = Number(calculatedSingleMg.toFixed(1));
  const rawCalculatedDailyMg = Number(calculatedDailyMg.toFixed(1));

  // Check therapeutic limits and ceiling
  let isMaxDoseExceeded = false;
  let isOutOfRange = false;
  const reasons: string[] = [];

  // Exceeds standard maximum daily dose
  if (maxDailyDoseMg && rawCalculatedDailyMg > maxDailyDoseMg) {
    isMaxDoseExceeded = true;
    isOutOfRange = true;
    reasons.push(
      `La dosis diaria calculada (${rawCalculatedDailyMg} mg/día) supera el límite máximo seguro definido (${maxDailyDoseMg} mg/día).`
    );
  }

  // Exceeds standard maximum single dose
  if (maxSingleDoseMg && rawCalculatedSingleMg > maxSingleDoseMg) {
    isMaxDoseExceeded = true;
    isOutOfRange = true;
    reasons.push(
      `La dosis por toma calculada (${rawCalculatedSingleMg} mg/toma) supera el límite máximo seguro por toma (${maxSingleDoseMg} mg).`
    );
  }

  // Exceeds standard upper therapeutic limit in mg/kg
  if (standardMaxDoseMgKg && doseMgPerKg > standardMaxDoseMgKg) {
    isOutOfRange = true;
    reasons.push(
      `La dosis indicada (${doseMgPerKg} mg/kg${isDosePerKgPerDose ? '/toma' : '/día'}) supera el límite superior estándar (${standardMaxDoseMgKg} mg/kg${isDosePerKgPerDose ? '/toma' : '/día'}).`
    );
  }

  // Below standard lower therapeutic limit in mg/kg
  if (standardMinDoseMgKg && doseMgPerKg < standardMinDoseMgKg) {
    isOutOfRange = true;
    reasons.push(
      `La dosis indicada (${doseMgPerKg} mg/kg${isDosePerKgPerDose ? '/toma' : '/día'}) está por debajo del rango terapéutico mínimo (${standardMinDoseMgKg} mg/kg${isDosePerKgPerDose ? '/toma' : '/día'}).`
    );
  }

  // Apply maximum caps to protect patient
  if (maxSingleDoseMg && calculatedSingleMg > maxSingleDoseMg) {
    calculatedSingleMg = maxSingleDoseMg;
  }
  if (maxDailyDoseMg && calculatedDailyMg > maxDailyDoseMg) {
    calculatedDailyMg = maxDailyDoseMg;
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
  } else if (concentrationForm === 'inhaler') {
    doseUnitStr = `${unitQuantity || 1} puff(s) (${Math.round(calculatedSingleMg)} mcg)`;
  } else {
    doseUnitStr = `${unitQuantity} mL (${Math.round(calculatedSingleMg)} mg)`;
  }

  const formattedPrescription = [
    `Rp. ${drugName.toUpperCase()}`,
    `Presentación: ${concentrationAmountMg} mg / ${concentrationVolumeMl} mL (${concentrationForm})`,
    `Vía de Administración: ${routeInfo.formatted}`,
    `Indicación: Administrar ${doseUnitStr} cada ${intervalHours} horas por ${routeInfo.formatted} durante ${durationDaysStr}.`,
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
    isOutOfRange,
    outOfRangeReason: reasons.join(' '),
    rawCalculatedSingleMg,
    rawCalculatedDailyMg,
    maxDailyDoseMg,
    maxSingleDoseMg,
    standardMinDoseMgKg,
    standardMaxDoseMgKg,
    estimatedTotalVolumeMl,
    bottlesNeeded,
    formattedPrescription,
    administrationTips: tips,
    routeAbbr: routeInfo.abbr,
    routeFormatted: routeInfo.formatted
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

export interface CKDEPI2021Result {
  egfr: number; // in mL/min/1.73 m²
  unindexedEgfr?: number; // in mL/min if BSA available
  bsaM2?: number;
  stage: string;
  kdigoCategory: 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5';
  kdigoDescription: string;
  color: string;
}

/**
 * 2021 CKD-EPI Creatinine Equation (sin variable de raza)
 * Ref: Inker LA et al., N Engl J Med 2021; 385:1737-1749.
 * eGFR = 142 * min(Scr/kappa, 1)^alpha * max(Scr/kappa, 1)^-1.200 * 0.9938^Age * (1.012 if female)
 */
export function calculateCKDEPI2021(params: {
  ageYears: number;
  serumCreatinineMgDl: number;
  gender: 'male' | 'female';
  weightKg?: number;
  heightCm?: number;
}): CKDEPI2021Result {
  const { ageYears, serumCreatinineMgDl, gender, weightKg, heightCm } = params;

  if (!serumCreatinineMgDl || serumCreatinineMgDl <= 0 || !ageYears || ageYears <= 0) {
    return {
      egfr: 0,
      stage: 'Datos incompletos',
      kdigoCategory: 'G1',
      kdigoDescription: 'Datos incompletos',
      color: 'text-slate-500'
    };
  }

  const kappa = gender === 'female' ? 0.7 : 0.9;
  const alpha = gender === 'female' ? -0.241 : -0.302;
  const femaleFactor = gender === 'female' ? 1.012 : 1.0;

  const scrRatio = serumCreatinineMgDl / kappa;
  const minPart = Math.pow(Math.min(scrRatio, 1.0), alpha);
  const maxPart = Math.pow(Math.max(scrRatio, 1.0), -1.200);
  const agePart = Math.pow(0.9938, ageYears);

  const rawEgfr = 142 * minPart * maxPart * agePart * femaleFactor;
  const egfr = Number(rawEgfr.toFixed(1));

  let bsaM2: number | undefined;
  let unindexedEgfr: number | undefined;

  if (weightKg && heightCm && weightKg > 0 && heightCm > 0) {
    bsaM2 = Number(Math.sqrt((weightKg * heightCm) / 3600).toFixed(2));
    unindexedEgfr = Number(((egfr * bsaM2) / 1.73).toFixed(1));
  }

  let stage = 'G1: Filtración Glomerular Normal o Elevada (≥90 mL/min/1.73 m²)';
  let kdigoCategory: 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5' = 'G1';
  let kdigoDescription = 'Filtración normal o hiperfiltración';
  let color = 'text-emerald-600 dark:text-emerald-400';

  if (egfr < 15) {
    stage = 'G5: Falla Renal Terminal (<15 mL/min/1.73 m²)';
    kdigoCategory = 'G5';
    kdigoDescription = 'Falla renal terminal';
    color = 'text-red-600 dark:text-red-400';
  } else if (egfr < 30) {
    stage = 'G4: Disminución Severa de la TFG (15-29 mL/min/1.73 m²)';
    kdigoCategory = 'G4';
    kdigoDescription = 'Disfunción renal severa';
    color = 'text-red-500 dark:text-red-400';
  } else if (egfr < 45) {
    stage = 'G3b: Disminución Moderada a Severa (30-44 mL/min/1.73 m²)';
    kdigoCategory = 'G3b';
    kdigoDescription = 'Disfunción renal moderada a severa';
    color = 'text-amber-600 dark:text-amber-400';
  } else if (egfr < 60) {
    stage = 'G3a: Disminución Ligera a Moderada (45-59 mL/min/1.73 m²)';
    kdigoCategory = 'G3a';
    kdigoDescription = 'Disfunción renal leve a moderada';
    color = 'text-amber-500 dark:text-amber-400';
  } else if (egfr < 90) {
    stage = 'G2: Disminución Ligera de la TFG (60-89 mL/min/1.73 m²)';
    kdigoCategory = 'G2';
    kdigoDescription = 'Disfunción renal ligera';
    color = 'text-teal-600 dark:text-teal-400';
  }

  return {
    egfr,
    unindexedEgfr,
    bsaM2,
    stage,
    kdigoCategory,
    kdigoDescription,
    color
  };
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
