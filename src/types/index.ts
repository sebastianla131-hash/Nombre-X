export type DrugCategory =
  | 'Todos'
  | 'Pediátricos'
  | 'Antibióticos'
  | 'Analgesia / AINEs'
  | 'Urgencias / Respiratorio'
  | 'Gastroenterología'
  | 'Cardiovascular'
  | 'Corticoides'
  | 'Antídotos / Toxicología';

export type RouteOfAdmin = 'oral' | 'iv' | 'im' | 'rectal' | 'inhalatoria' | 'sublingual' | 'topica';

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
  fixedAdultDoseMg?: number; // e.g. 500
  frequencyPerDay: number; // e.g. 3 (cada 8 horas) or 2 (cada 12 horas)
  intervalHours: number; // 8
  durationDays: string; // "7-10 días"
  maxDailyDoseMg: number; // 3000
  maxSingleDoseMg?: number; // 1000
  isDosePerKgPerDose?: boolean; // true for paracetamol (15 mg/kg/dosis), false for amoxicillin (80-90 mg/kg/dia)
  description?: string;
}

export interface RenalAdjustmentGuideline {
  crClThreshold: string; // e.g. "> 50 mL/min" | "10-50 mL/min" | "< 10 mL/min" | "Hemodiálisis"
  adjustmentText: string; // e.g. "100% de la dosis habitual cada 8 hrs"
  cautionLevel: 'normal' | 'moderate' | 'severe';
}

export interface Medication {
  id: string;
  name: string; // e.g. "Amoxicilina"
  commercialNames: string[]; // e.g. ["Amoxil", "Clamoxyl", "Ardine"]
  category: DrugCategory;
  therapeuticClass: string; // e.g. "Aminopenicilina / Betalactámico"
  atcCode?: string; // e.g. "J01CA04"
  awareCategory?: 'Access' | 'Watch' | 'Reserve'; // WHO AWaRe classification
  badgeText?: string;
  shortDescription: string;
  availableRoutes: RouteOfAdmin[];
  concentrations: DrugConcentration[];
  indications: DrugIndication[];
  
  // Clinical Pearls (MDCalc Style)
  whenToUse: string[];
  pearlsAndPitfalls: string[];
  monitoringAndSideEffects: string[];
  evidenceAndSources: {
    title: string;
    source: string;
    year?: string;
    summary: string;
  }[];
  
  // Renal Guidance
  renalAdjustments?: RenalAdjustmentGuideline[];
  
  // Reconstitution and storage
  reconstitutionNotes?: string;
  storageNotes?: string;
}

export interface PatientProfile {
  weightKg: number;
  heightCm?: number; // Estatura / Talla en centímetros (para cálculo de IMC y ASC)
  ageYears: number;
  ageMonths: number;
  gender: 'male' | 'female';
  serumCreatinineMgDl?: number;
}
