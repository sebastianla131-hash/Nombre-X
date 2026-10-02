// src/types/clinical.ts
// Medical-grade types for MedFormula MD (SRS 2025 / WHO AWaRe compliance)

export type DrugCategory =
  | 'Todos'
  | 'Favoritos'
  | 'Antibióticos'
  | 'Analgésicos'
  | 'Analgesia / AINEs'
  | 'Antihipertensivos'
  | 'Cardiovascular'
  | 'Endocrinología'
  | 'Cardiología'
  | 'Ginecología'
  | 'Pediátricos'
  | 'Urgencias / Respiratorio'
  | 'Gastroenterología'
  | 'Corticoides'
  | 'Antídotos / Toxicología';

export type RouteOfAdmin =
  | 'oral'
  | 'iv'
  | 'im'
  | 'sc'
  | 'rectal'
  | 'inhalatoria'
  | 'sublingual'
  | 'topica';

export type WhoAWaReCategory = 'Access' | 'Watch' | 'Reserve';

export type PregnancySafetyStatus = 'safe' | 'caution' | 'contraindicated';

export interface PregnancyGuidance {
  category: 'A' | 'B' | 'C' | 'D' | 'X';
  status: PregnancySafetyStatus;
  statusLabel: string;
  summary: string;
  contraindicatedInTrimester?: (1 | 2 | 3)[];
  clinicalAlternative?: string;
  fetalRisks?: string[];
}

export interface DrugConcentration {
  id: string;
  name: string; // e.g. "Suspensión 250 mg / 5 mL"
  amountMg: number; // 250
  volumeMl: number; // 5
  form: 'suspension' | 'tablets' | 'drops' | 'vial' | 'inhaler';
  unit: string; // "mL" | "comprimido" | "gotas" | "puff"
  standardBottleMl?: number; // e.g. 100 mL
  notes?: string;
}

export interface DrugIndication {
  id: string;
  name: string; // e.g. "Otitis Media Aguda severa o recurrente"
  recommendedDoseMgPerKgPerDay?: number; // e.g. 90
  minDoseMgPerKgPerDay?: number;
  maxDoseMgPerKgPerDay?: number;
  fixedAdultDoseMg?: number;
  frequencyPerDay: number; // e.g. 3 (cada 8 horas)
  intervalHours: number; // 8
  durationDays: string; // "7-10 días"
  maxDailyDoseMg: number; // 3000
  maxSingleDoseMg?: number; // 1000
  isDosePerKgPerDose?: boolean;
  description?: string;
}

export interface RenalAdjustmentGuideline {
  crClThreshold: string;
  adjustmentText: string;
  cautionLevel: 'normal' | 'moderate' | 'severe';
}

export interface Medication {
  id: string;
  name: string;
  commercialNames: string[];
  category: DrugCategory;
  therapeuticClass: string;
  atcCode?: string;
  awareCategory?: WhoAWaReCategory;
  badgeText?: string;
  shortDescription: string;
  availableRoutes: RouteOfAdmin[];
  concentrations: DrugConcentration[];
  indications: DrugIndication[];

  // Clinical Pearls (Hospital grade)
  whenToUse: string[];
  pearlsAndPitfalls: string[];
  monitoringAndSideEffects: string[];
  evidenceAndSources: {
    title: string;
    source: string;
    year?: string;
    summary: string;
  }[];

  renalAdjustments?: RenalAdjustmentGuideline[];
  reconstitutionNotes?: string;
  storageNotes?: string;
  pregnancyGuidance?: PregnancyGuidance;
}

export interface PatientProfile {
  weightKg: number;
  ageYears: number;
  ageMonths: number;
  gender: 'male' | 'female';
  isPregnant?: boolean;
  pregnancyTrimester?: 1 | 2 | 3;
  heightCm?: number;
  serumCreatinineMgDl?: number;
}

// Validation Limits to prevent fatal typing errors on shift
export const CLINICAL_LIMITS = {
  MIN_WEIGHT_KG: 0.5,
  MAX_WEIGHT_KG: 300,
  MIN_HEIGHT_CM: 20,
  MAX_HEIGHT_CM: 250,
  MIN_AGE_YEARS: 0,
  MAX_AGE_YEARS: 125,
  MIN_CREATININE_MG_DL: 0.1,
  MAX_CREATININE_MG_DL: 20.0,
} as const;

export type AlertSeverity = 'info' | 'warning_orange' | 'danger_red' | 'renal_purple';

export interface ClinicalAlert {
  id: string;
  type: 'out_of_range' | 'max_dose_exceeded' | 'obstetric_danger' | 'renal_warning' | 'age_contraindication';
  severity: AlertSeverity;
  title: string;
  message: string;
  rawCalculatedValue?: string | number;
  appliedCappedValue?: string | number;
  actionRecommendation?: string;
  clinicalAlternative?: string;
}

export interface CalculationResult {
  singleDoseUnitQuantity: number;
  unitLabel: string;
  singleDoseMg: number;
  dailyTotalMg: number;
  bottlesNeeded?: number;
  totalVolumeMl?: number;
  isMaxDoseExceeded: boolean;
  isOutOfRange: boolean;
  outOfRangeReason?: string;
  rawCalculatedSingleMg: number;
  rawCalculatedDailyMg: number;
  totalDailyLiquidMl?: number;
  structuredPrescription: string;
}

export interface RenalClearanceResult {
  cockcroftGaultCrCl: number;
  ckdEpiEgfr?: number;
  kdigoStage: 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5';
  kdigoDescription: string;
  isRenalAlertTriggered: boolean;
  guideline?: RenalAdjustmentGuideline;
}

export interface ObstetricSafetyEvaluation {
  isAlertTriggered: boolean;
  severity: 'safe' | 'caution' | 'contraindicated';
  message: string;
  alternativeSuggestion?: string;
  fetalRisks?: string[];
  isHardStop?: boolean;
}

export type DoseRangeStatus = 'subtherapeutic' | 'optimal' | 'high_normal' | 'exceeded_capped';

export interface ToastMessage {
  id: string;
  title?: string;
  message: string;
  type?: 'success' | 'warning' | 'error' | 'info';
  durationMs?: number;
}

export interface CriticalHardStop {
  isOpen: boolean;
  title: string;
  drugName: string;
  reason: string;
  fetalRisks?: string[];
  clinicalAlternative?: string;
}

// Clinical Database schema types (SRS 2025 / WHO AWaRe)
export type Sex = 'M' | 'F';
export type Trimester = 0 | 1 | 2 | 3;
export type AWaReCategory = 'Access' | 'Watch' | 'Reserve' | 'N/A';

export interface DrugDBConcentration {
  label: string;
  mg: number;
  ml: number;
  form: 'suspension' | 'tablet' | 'ampoule' | 'drops';
  commercialVolumeMl?: number;
}

export interface DrugDBIndication {
  name: string;
  doseMgPerKgDay: number;
  maxDailyDoseMg: number;
  maxSingleDoseMg: number;
  defaultIntervals: number[];
  defaultDurations: number[];
}

export interface DrugDBAlert {
  type: 'obstetric' | 'renal' | 'hepatic' | 'blackbox';
  conditionDefinition: string;
  message: string;
  severity: 'high' | 'critical';
}

export interface Drug {
  id: string;
  genericName: string;
  commercialNames: string[];
  atc: string;
  group: string;
  aware: AWaReCategory;
  routes: string[];
  indications: DrugDBIndication[];
  concentrations: DrugDBConcentration[];
  alerts: DrugDBAlert[];
  isCrashCart?: boolean;
}

// Body Weight Analysis (IBW / ABW for Obesity)
export interface BodyWeightAnalysis {
  actualWeightKg: number;
  ibwKg: number | null;
  abwKg: number | null;
  bmi: number | null;
  bmiCategory: string;
  isObese: boolean;
  recommendedWeightKg: number;
}

// Crash Cart (Code Blue Emergency Resuscitation)
export interface CrashCartItem {
  id: string;
  category: 'resuscitation' | 'antiarrhythmic' | 'cardiovascular' | 'defibrillation' | 'airway' | 'fluids';
  name: string;
  indication: string;
  doseFormula: string;
  calculatedDose: string;
  concentrationOrSpec: string;
  volumeOrJoulesToDeliver: string;
  routeOrAction: string;
  maxLimit?: string;
  notes?: string;
  isDefibrillation?: boolean;
}

// One-Tap Presets / Protocols (Multi-Drug Combos)
export interface ClinicalPresetItem {
  drugId: string;
  drugName: string;
  indicationName: string;
  concentrationName: string;
  amountMg?: number;
  volumeMl?: number;
  form?: 'suspension' | 'tablets' | 'drops' | 'vial' | 'inhaler';
  doseMgPerKgDay: number;
  frequencyPerDay: number;
  intervalHours: number;
  durationDays: number;
  route: RouteOfAdmin;
  instructions?: string;
}

export interface ClinicalPreset {
  id: string;
  title: string;
  description: string;
  category: string;
  color: string;
  items: ClinicalPresetItem[];
  isCustom?: boolean;
}
