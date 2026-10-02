// src/data/clinicalDatabase.ts
// Master Clinical Drug Database for MedFormula MD (SaMD)
// Formulated under WHO AWaRe 2025, Nelson Pediatrics 21st/22nd Ed, UpToDate & IDSA Guidelines

import {
  Medication,
  RouteOfAdmin,
  DrugCategory
} from '../types/clinical';

export type Sex = 'M' | 'F';
export type Trimester = 0 | 1 | 2 | 3;
export type AWaReCategory = 'Access' | 'Watch' | 'Reserve' | 'N/A';

export interface DrugConcentration {
  label: string;
  mg: number;
  ml: number;
  form: 'suspension' | 'tablet' | 'ampoule' | 'drops';
  commercialVolumeMl?: number; // EXTREMADAMENTE IMPORTANTE: Volumen del frasco comercial (ej. 100 para un jarabe de 100mL) para calcular cuántos frascos dispensar.
}

export interface DrugIndication {
  name: string;
  doseMgPerKgDay: number; // Dosis total diaria por kg
  maxDailyDoseMg: number; // Techo máximo diario absoluto
  maxSingleDoseMg: number; // Techo máximo por toma individual
  defaultIntervals: number[]; // Horas (ej. [6, 8, 12])
  defaultDurations: number[]; // Días de tratamiento estándar
}

export interface DrugAlert {
  type: 'obstetric' | 'renal' | 'hepatic' | 'blackbox';
  conditionDefinition: string; // Explicación de la condición (ej. "ClCr < 30")
  message: string;
  severity: 'high' | 'critical';
}

export interface Drug {
  id: string;
  genericName: string;
  commercialNames: string[];
  atc: string;
  group: string; // Ej: 'Antibióticos', 'Analgésicos', 'Urgencias/Crash Cart'
  aware: AWaReCategory;
  routes: string[];
  indications: DrugIndication[];
  concentrations: DrugConcentration[];
  alerts: DrugAlert[];
  isCrashCart?: boolean; // Flag para los medicamentos de reanimación
}

export const DRUG_DB: Drug[] = [
  // =========================================================================
  // 1. ANALGÉSICOS, ANTIPIRÉTICOS Y ANTIINFLAMATORIOS (AINEs)
  // =========================================================================
  {
    id: 'acetaminofen',
    genericName: 'Acetaminofén (Paracetamol)',
    commercialNames: ['Dolex', 'Tempra', 'Tylenol', 'Adorem', 'Panadol', 'Apiretal'],
    atc: 'N02BE01',
    group: 'Analgésicos/AINEs',
    aware: 'N/A',
    routes: ['oral', 'iv', 'rectal'],
    indications: [
      {
        name: 'Fiebre y Dolor Leve a Moderado (Oral)',
        doseMgPerKgDay: 60, // 15 mg/kg/dosis cada 6 horas
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [6, 8],
        defaultDurations: [3, 5],
      },
      {
        name: 'Dolor Agudo / Antipirético Rápido (Intravenoso)',
        doseMgPerKgDay: 60, // 15 mg/kg/dosis cada 6 horas IV
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [6],
        defaultDurations: [2, 3],
      },
    ],
    concentrations: [
      { label: 'Jarabe Pediátrico 150 mg / 5 mL', mg: 150, ml: 5, form: 'suspension', commercialVolumeMl: 120 },
      { label: 'Jarabe Infantil 160 mg / 5 mL', mg: 160, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Gotas Orales 100 mg / 1 mL', mg: 100, ml: 1, form: 'drops', commercialVolumeMl: 30 },
      { label: 'Tableta Ranurada 500 mg', mg: 500, ml: 1, form: 'tablet' },
      { label: 'Tableta Recubierta 1 g (1000 mg)', mg: 1000, ml: 1, form: 'tablet' },
      { label: 'Vial Infusión IV 10 mg / mL (1000 mg / 100 mL)', mg: 1000, ml: 100, form: 'ampoule', commercialVolumeMl: 100 },
    ],
    alerts: [
      {
        type: 'hepatic',
        conditionDefinition: 'Hepatopatía activa, cirrosis o falla hepática aguda',
        message: 'Hepatotoxicidad dependiente de dosis por acumulación de NAPQI. En disfunción hepática severa limitar dosis a 2 g/día o suspender.',
        severity: 'critical',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Dosis total acumulada > 4000 mg/día o ingesta alcohólica concurrente',
        message: 'Advertencia Blackbox: Riesgo de necrosis centrolobulillar y falla hepática fulminante por sobredosificación inadvertida en combinaciones antigripales.',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'ibuprofeno',
    genericName: 'Ibuprofeno',
    commercialNames: ['Advil', 'Motrin', 'Buprex', 'Ibufen', 'Dalsy'],
    atc: 'M01AE01',
    group: 'Analgésicos/AINEs',
    aware: 'N/A',
    routes: ['oral'],
    indications: [
      {
        name: 'Antipirético / Analgésico Pediátrico (> 6 meses)',
        doseMgPerKgDay: 30, // 10 mg/kg/dosis cada 8 horas
        maxDailyDoseMg: 2400,
        maxSingleDoseMg: 600,
        defaultIntervals: [6, 8],
        defaultDurations: [3, 5],
      },
      {
        name: 'Artritis Idiopática Juvenil / Antiinflamatorio Mayor',
        doseMgPerKgDay: 40,
        maxDailyDoseMg: 3200,
        maxSingleDoseMg: 800,
        defaultIntervals: [6, 8],
        defaultDurations: [7, 14],
      },
    ],
    concentrations: [
      { label: 'Suspensión Oral 100 mg / 5 mL', mg: 100, ml: 5, form: 'suspension', commercialVolumeMl: 120 },
      { label: 'Suspensión Oral Forte 200 mg / 5 mL', mg: 200, ml: 5, form: 'suspension', commercialVolumeMl: 120 },
      { label: 'Gotas Orales Pediátricas 40 mg / 1 mL', mg: 40, ml: 1, form: 'drops', commercialVolumeMl: 30 },
      { label: 'Tableta / Cápsula Blanda 400 mg', mg: 400, ml: 1, form: 'tablet' },
      { label: 'Tableta 600 mg', mg: 600, ml: 1, form: 'tablet' },
      { label: 'Tableta 800 mg', mg: 800, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'obstetric',
        conditionDefinition: 'Edad gestacional >= 20 semanas (especialmente 3er Trimestre)',
        message: 'CONTRAINDICACIÓN CRÍTICA: Cierre prematuro del ductus arterioso fetal, oligohidramnios e hipertensión pulmonar neonatal.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min o deshidratación aguda',
        message: 'Inhibición de prostaglandinas renales vasodilatadoras (PGE2/PGI2). Provoca vasoconstricción de la arteriola aferente y caída de la TFG.',
        severity: 'high',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Ulcera péptica activa o hemorragia gastrointestinal',
        message: 'Blackbox: Incremento de riesgo de sangrado digestivo alto, perforación gástrica y eventos cardiovasculares trombóticos.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'dipirona',
    genericName: 'Dipirona (Metamizol Sódico)',
    commercialNames: ['Novalgina', 'Conmel', 'Lisalgil', 'Prodolina', 'Nolotil'],
    atc: 'N02BB02',
    group: 'Analgésicos/AINEs',
    aware: 'N/A',
    routes: ['oral', 'iv', 'im'],
    indications: [
      {
        name: 'Fiebre Refractaria / Dolor Posquirúrgico Moderado a Severo',
        doseMgPerKgDay: 60, // 15-20 mg/kg/dosis cada 8 horas
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [6, 8],
        defaultDurations: [2, 3],
      },
      {
        name: 'Cólico Biliar / Renal o Dolor Espasmódico Severo',
        doseMgPerKgDay: 80,
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        defaultIntervals: [8],
        defaultDurations: [1, 2],
      },
    ],
    concentrations: [
      { label: 'Jarabe 250 mg / 5 mL (50 mg/mL)', mg: 250, ml: 5, form: 'suspension', commercialVolumeMl: 60 },
      { label: 'Gotas Orales 500 mg / 1 mL (20 gotas)', mg: 500, ml: 1, form: 'drops', commercialVolumeMl: 15 },
      { label: 'Comprimidos 500 mg', mg: 500, ml: 1, form: 'tablet' },
      { label: 'Ampolla Inyectable 1 g / 2 mL (500 mg/mL)', mg: 1000, ml: 2, form: 'ampoule', commercialVolumeMl: 2 },
      { label: 'Ampolla Inyectable 2.5 g / 5 mL (500 mg/mL)', mg: 2500, ml: 5, form: 'ampoule', commercialVolumeMl: 5 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Antecedente de discrasias sanguíneas o alergia a pirazolonas',
        message: 'Blackbox: Riesgo de agranulocitosis idiosincrásica potencialmente fatal y anemia aplásica. Suspender ante fiebre inexplicable o dolor de garganta.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Hipotensión o administración IV rápida',
        message: 'La infusión intravenosa rápida puede desencadenar shock distributivo e hipotensión severa. Infundir diluido en al menos 10-15 minutos.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'ketorolaco',
    genericName: 'Ketorolaco Trometamol',
    commercialNames: ['Toradol', 'Dolgenal', 'Alidol', 'Acular'],
    atc: 'M01AB15',
    group: 'Analgésicos/AINEs',
    aware: 'N/A',
    routes: ['iv', 'im', 'oral'],
    indications: [
      {
        name: 'Manejo a Corto Plazo del Dolor Posoperatorio Agudo (IV/IM)',
        doseMgPerKgDay: 1.5, // 0.5 mg/kg/dosis cada 8 horas
        maxDailyDoseMg: 90,
        maxSingleDoseMg: 30,
        defaultIntervals: [6, 8],
        defaultDurations: [2, 3], // Máximo 48-72h parenteral
      },
    ],
    concentrations: [
      { label: 'Ampolla Inyectable 30 mg / 1 mL', mg: 30, ml: 1, form: 'ampoule', commercialVolumeMl: 1 },
      { label: 'Ampolla Inyectable 60 mg / 2 mL', mg: 60, ml: 2, form: 'ampoule', commercialVolumeMl: 2 },
      { label: 'Tableta Sublingual 10 mg', mg: 10, ml: 1, form: 'tablet' },
      { label: 'Tableta 10 mg', mg: 10, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Uso continuo > 5 días consecutivos',
        message: 'Blackbox: No exceder 5 días de tratamiento por riesgo extremo de falla renal aguda oligúrica, hemorragia gastrointestinal mortal y sangrado quirúrgico.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 50 mL/min o hipovolemia',
        message: 'Altamente nefrotóxico. Contraindicado en insuficiencia renal moderada a grave y en posquirúrgico de cirugía cardiovascular (CABG).',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'tramadol',
    genericName: 'Tramadol Clorhidrato',
    commercialNames: ['Tramal', 'Tradol', 'Zaldiar (asociado)', 'Calmador'],
    atc: 'N02AX02',
    group: 'Analgésicos/AINEs',
    aware: 'N/A',
    routes: ['oral', 'iv', 'sc'],
    indications: [
      {
        name: 'Dolor Agudo Moderado a Severo en Mayores de 12 Años',
        doseMgPerKgDay: 4, // 1 mg/kg/dosis cada 6 horas
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 100,
        defaultIntervals: [6, 8],
        defaultDurations: [3, 5],
      },
    ],
    concentrations: [
      { label: 'Gotas Orales 100 mg / 1 mL (20 gotas)', mg: 100, ml: 1, form: 'drops', commercialVolumeMl: 10 },
      { label: 'Cápsulas 50 mg', mg: 50, ml: 1, form: 'tablet' },
      { label: 'Ampolla Inyectable 50 mg / 1 mL', mg: 50, ml: 1, form: 'ampoule', commercialVolumeMl: 1 },
      { label: 'Ampolla Inyectable 100 mg / 2 mL (50 mg/mL)', mg: 100, ml: 2, form: 'ampoule', commercialVolumeMl: 2 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Pacientes < 12 años o < 18 años tras amigdalectomía/adenoidectomía',
        message: 'Blackbox FDA: Contraindicado en menores de 12 años por riesgo de depresión respiratoria potencialmente fatal debida a metabolismo ultrarrápido CYP2D6.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min',
        message: 'Ajustar intervalo a cada 12 horas. Dosis máxima 200 mg/día. Eliminación retardada de metabolito activo M1.',
        severity: 'high',
      },
    ],
  },

  // =========================================================================
  // 2. ANTIBIÓTICOS (Clasificación OMS AWaRe 2025)
  // =========================================================================
  {
    id: 'amoxicilina',
    genericName: 'Amoxicilina',
    commercialNames: ['Amoxil', 'Trimox', 'Velamox', 'Polymox', 'Amoxal'],
    atc: 'J01CA04',
    group: 'Antibióticos',
    aware: 'Access',
    routes: ['oral'],
    indications: [
      {
        name: 'Faringoamigdalitis Estreptocócica / Infección Leve',
        doseMgPerKgDay: 50,
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        defaultIntervals: [8, 12],
        defaultDurations: [10],
      },
      {
        name: 'Otitis Media Aguda / Neumonía Adquirida en Comunidad (Alta Dosis)',
        doseMgPerKgDay: 90, // Neumococo con sensibilidad intermedia
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [8, 12],
        defaultDurations: [7, 10],
      },
    ],
    concentrations: [
      { label: 'Suspensión Oral 250 mg / 5 mL', mg: 250, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Suspensión Oral Forte 500 mg / 5 mL', mg: 500, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Cápsulas 500 mg', mg: 500, ml: 1, form: 'tablet' },
      { label: 'Tabletas Dispersables / Masticables 875 mg', mg: 875, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'renal',
        conditionDefinition: 'ClCr 10-30 mL/min',
        message: 'Ajustar dosis a 250-500 mg cada 12 horas. Si ClCr < 10 mL/min, administrar cada 24 horas.',
        severity: 'high',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Hipersensibilidad confirmada a betalactámicos o shock anafiláctico previo',
        message: 'Riesgo inminente de anafilaxia mediada por IgE, angioedema y laringoespasmo. Reemplazar por Macrólido.',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'amox_clav',
    genericName: 'Amoxicilina + Ácido Clavulánico',
    commercialNames: ['Clavulin', 'Augmentin', 'Curam', 'Klavox', 'Amoxidal Plus'],
    atc: 'J01CR02',
    group: 'Antibióticos',
    aware: 'Access',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Otitis Media Aguda Recurrente / Falla Terapéutica (Relación 14:1 ES)',
        doseMgPerKgDay: 90, // Basado en Amoxicilina
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [12],
        defaultDurations: [10],
      },
      {
        name: 'Sinusitis Bacteriana / Mordedura Animal / Infección Cutánea (Relación 7:1 o 4:1)',
        doseMgPerKgDay: 45,
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 875,
        defaultIntervals: [8, 12],
        defaultDurations: [7, 10],
      },
    ],
    concentrations: [
      { label: 'Suspensión ES 600 mg / 42.9 mg por 5 mL (14:1)', mg: 600, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Suspensión 400 mg / 57 mg por 5 mL (7:1)', mg: 400, ml: 5, form: 'suspension', commercialVolumeMl: 70 },
      { label: 'Suspensión 250 mg / 62.5 mg por 5 mL (4:1)', mg: 250, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Tabletas 875 mg / 125 mg', mg: 875, ml: 1, form: 'tablet' },
      { label: 'Tabletas 500 mg / 125 mg', mg: 500, ml: 1, form: 'tablet' },
      { label: 'Vial IV 1000 mg / 200 mg (1.2 g)', mg: 1000, ml: 20, form: 'ampoule', commercialVolumeMl: 20 },
    ],
    alerts: [
      {
        type: 'hepatic',
        conditionDefinition: 'Antecedente de ictericia colestásica o disfunción hepática por Clavulanato',
        message: 'El ácido clavulánico está asociado a hepatitis colestásica idiosincrásica. Contraindicado reexponer si hubo ictericia previa.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min',
        message: 'No utilizar formulaciones de 875/125 mg ni presentaciones ES 600 mg. Dosificar con formulación 500/125 mg cada 12-24 horas.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'cefalexina',
    genericName: 'Cefalexina',
    commercialNames: ['Keflex', 'Cefalex', 'Ceporex', 'Nulicyn'],
    atc: 'J01DB01',
    group: 'Antibióticos',
    aware: 'Access',
    routes: ['oral'],
    indications: [
      {
        name: 'Infecciones de Piel y Tejidos Blandos (Impétigo, Celulitis)',
        doseMgPerKgDay: 50,
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 500,
        defaultIntervals: [6, 8],
        defaultDurations: [7],
      },
      {
        name: 'Infección Urinaria Baja No Complicada / Faringitis Alternativa',
        doseMgPerKgDay: 50,
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 500,
        defaultIntervals: [6, 8],
        defaultDurations: [7, 10],
      },
    ],
    concentrations: [
      { label: 'Suspensión Oral 250 mg / 5 mL', mg: 250, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Suspensión Oral 125 mg / 5 mL', mg: 125, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Cápsulas 500 mg', mg: 500, ml: 1, form: 'tablet' },
      { label: 'Tabletas 1000 mg', mg: 1000, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min',
        message: 'Ajuste de intervalo: ClCr 15-29 mL/min c/8-12h; ClCr < 15 mL/min c/24h. Riesgo de toxicidad sobre SNC.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'azitromicina',
    genericName: 'Azitromicina',
    commercialNames: ['Zithromax', 'Trex', 'Azitrom', 'Koptin', 'Zitrolab'],
    atc: 'J01FA10',
    group: 'Antibióticos',
    aware: 'Watch',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Neumonía Atípica / Tos Ferina (Bordetella pertussis)',
        doseMgPerKgDay: 10, // Día 1: 10 mg/kg; Días 2-5: 5 mg/kg (o esquema 10mg/kg/d x 3 días)
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        defaultIntervals: [24],
        defaultDurations: [5],
      },
      {
        name: 'Faringoamigdalitis en Alérgicos a Penicilina (Esquema Corto)',
        doseMgPerKgDay: 12,
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        defaultIntervals: [24],
        defaultDurations: [5],
      },
    ],
    concentrations: [
      { label: 'Suspensión Oral 200 mg / 5 mL (40 mg/mL)', mg: 200, ml: 5, form: 'suspension', commercialVolumeMl: 30 },
      { label: 'Suspensión Oral 200 mg / 5 mL (Frasco Grande)', mg: 200, ml: 5, form: 'suspension', commercialVolumeMl: 60 },
      { label: 'Tabletas Recubiertas 500 mg', mg: 500, ml: 1, form: 'tablet' },
      { label: 'Vial Liofilizado IV 500 mg', mg: 500, ml: 10, form: 'ampoule', commercialVolumeMl: 10 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Prolongación de intervalo QTc basal > 450ms o uso concomitante de proarrítmicos',
        message: 'Blackbox FDA: Riesgo de taquiarritmia ventricular polimórfica (Torsades de Pointes) y paro cardíaco súbito.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Disfunción hepática grave',
        message: 'Metabolismo y excreción predominantemente biliar. Monitorizar enzimas hepáticas si tratamiento prolongado.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'claritromicina',
    genericName: 'Claritromicina',
    commercialNames: ['Klaricid', 'Adel', 'Claxid', 'Biaxin'],
    atc: 'J01FA09',
    group: 'Antibióticos',
    aware: 'Watch',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Infección Respiratoria Baja / Erradicación H. pylori Pediátrico',
        doseMgPerKgDay: 15, // 7.5 mg/kg/dosis cada 12 horas
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 500,
        defaultIntervals: [12],
        defaultDurations: [7, 10],
      },
    ],
    concentrations: [
      { label: 'Suspensión Pediátrica 125 mg / 5 mL', mg: 125, ml: 5, form: 'suspension', commercialVolumeMl: 60 },
      { label: 'Suspensión Pediátrica 250 mg / 5 mL', mg: 250, ml: 5, form: 'suspension', commercialVolumeMl: 60 },
      { label: 'Tabletas 500 mg', mg: 500, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min',
        message: 'Reducir la dosis al 50% o espaciar a cada 24 horas.',
        severity: 'high',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Cardiopatía isquémica conocida o síndrome de QT largo',
        message: 'Advertencia FDA: Incremento de mortalidad cardiovascular a largo plazo en pacientes coronarios.',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'ceftriaxona',
    genericName: 'Ceftriaxona Sódica',
    commercialNames: ['Rocephin', 'Ceftrian', 'Triaxone', 'Mesporin'],
    atc: 'J01DD04',
    group: 'Antibióticos',
    aware: 'Watch',
    routes: ['iv', 'im'],
    indications: [
      {
        name: 'Sepsis / Neumonía Grave Adquirida en Comunidad / Celulitis Severa',
        doseMgPerKgDay: 75, // 50-75 mg/kg/día cada 24 horas
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 2000,
        defaultIntervals: [24],
        defaultDurations: [7, 10],
      },
      {
        name: 'Meningitis Bacteriana Aguda (Alta Penetración LCR)',
        doseMgPerKgDay: 100, // 50 mg/kg/dosis cada 12 horas o 100 mg/kg c/24h
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        defaultIntervals: [12, 24],
        defaultDurations: [10, 14],
      },
    ],
    concentrations: [
      { label: 'Vial Inyectable IV/IM 1 g (1000 mg)', mg: 1000, ml: 10, form: 'ampoule', commercialVolumeMl: 10 },
      { label: 'Vial Inyectable IV/IM 500 mg', mg: 500, ml: 5, form: 'ampoule', commercialVolumeMl: 5 },
      { label: 'Vial Inyectable IM 1 g con Lidocaína 1%', mg: 1000, ml: 3.5, form: 'ampoule', commercialVolumeMl: 3.5 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Neonatos <= 28 días de vida recibiendo soluciones con Calcio parenteral',
        message: 'CONTRAINDICACIÓN MORTAL: Precipitación de cristales insolubles de ceftriaxona-calcio en parénquima pulmonar y renal. Usar Cefotaxima.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Neonatos con hiperbilirrubinemia no conjugada o ictericia fisiológica',
        message: 'Desplaza la bilirrubina de la albúmina sérica provocando encefalopatía bilirrubínica (Kernícterus).',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'trimetoprim_sulfa',
    genericName: 'Trimetoprim + Sulfametoxazol (Cotrimoxazol)',
    commercialNames: ['Bactrim', 'Septra', 'Bactropin', 'Trimetoprim Sulfa'],
    atc: 'J01EE01',
    group: 'Antibióticos',
    aware: 'Access',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Infección Urinaria / Infección de Piel por S. aureus SAMR Comunitario',
        doseMgPerKgDay: 10, // Basado en Trimetoprim (8-10 mg/kg/día dividido c/12h)
        maxDailyDoseMg: 320, // Techo de TMP (equivale a 1600 mg SMX)
        maxSingleDoseMg: 160,
        defaultIntervals: [12],
        defaultDurations: [7, 10],
      },
      {
        name: 'Neumonía por Pneumocystis jirovecii (Tratamiento)',
        doseMgPerKgDay: 20, // 15-20 mg/kg/día TMP dividido c/6-8h
        maxDailyDoseMg: 960,
        maxSingleDoseMg: 240,
        defaultIntervals: [6, 8],
        defaultDurations: [21],
      },
    ],
    concentrations: [
      { label: 'Suspensión Pediátrica 40 mg TMP / 200 mg SMX por 5 mL', mg: 40, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Suspensión Forte 80 mg TMP / 400 mg SMX por 5 mL', mg: 80, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Tabletas Forte 160 mg TMP / 800 mg SMX', mg: 160, ml: 1, form: 'tablet' },
      { label: 'Tabletas Estándar 80 mg TMP / 400 mg SMX', mg: 80, ml: 1, form: 'tablet' },
      { label: 'Ampolla Inyectable IV 80 mg TMP / 400 mg SMX en 5 mL', mg: 80, ml: 5, form: 'ampoule', commercialVolumeMl: 5 },
    ],
    alerts: [
      {
        type: 'obstetric',
        conditionDefinition: '1er Trimestre (antagonista folatos) o Término / 3er Trimestre tardío',
        message: 'Riesgo de defectos de tubo neural en 1er trimestre y kernícterus neonatal cerca del parto. Evitar.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'ClCr 15-30 mL/min',
        message: 'Reducir la dosis al 50%. Si ClCr < 15 mL/min no se recomienda.',
        severity: 'high',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Reacciones cutáneas severas (Síndrome de Stevens-Johnson / NET)',
        message: 'Blackbox: Ante la menor erupción cutánea o lesiones en diana, suspender inmediatamente.',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'ciprofloxacino',
    genericName: 'Ciprofloxacino',
    commercialNames: ['Cipro', 'Ciriax', 'Bactiflox', 'Ciprobay'],
    atc: 'J01MA02',
    group: 'Antibióticos',
    aware: 'Watch',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Infección Urinaria Complicada / Pielonefritis / Shigelosis Resistente',
        doseMgPerKgDay: 30, // 15 mg/kg/dosis cada 12 horas (Oral)
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 750,
        defaultIntervals: [12],
        defaultDurations: [7, 14],
      },
    ],
    concentrations: [
      { label: 'Tabletas 500 mg', mg: 500, ml: 1, form: 'tablet' },
      { label: 'Tabletas 250 mg', mg: 250, ml: 1, form: 'tablet' },
      { label: 'Frasco Infusión IV 200 mg / 100 mL (2 mg/mL)', mg: 200, ml: 100, form: 'ampoule', commercialVolumeMl: 100 },
      { label: 'Frasco Infusión IV 400 mg / 200 mL (2 mg/mL)', mg: 400, ml: 200, form: 'ampoule', commercialVolumeMl: 200 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Antecedente de tendinitis o rotura de tendón de Aquiles',
        message: 'Blackbox FDA: Riesgo de tendinitis y rotura del tendón de Aquiles, exacerbación de miastenia gravis y neuropatía periférica irreversible.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min',
        message: 'Ajustar dosis a 250-500 mg cada 18-24 horas.',
        severity: 'high',
      },
    ],
  },

  // =========================================================================
  // 3. CORTICOIDES SISTÉMICOS
  // =========================================================================
  {
    id: 'dexametasona',
    genericName: 'Dexametasona',
    commercialNames: ['Decadron', 'Dexacort', 'Fortecortin', 'Alin'],
    atc: 'H02AB02',
    group: 'Corticoides',
    aware: 'N/A',
    routes: ['oral', 'iv', 'im'],
    indications: [
      {
        name: 'Laringotraqueítis Aguda (Crupo Pediátrico Leve-Moderado-Severo)',
        doseMgPerKgDay: 0.6, // Dosis única de 0.6 mg/kg
        maxDailyDoseMg: 16,
        maxSingleDoseMg: 16,
        defaultIntervals: [24],
        defaultDurations: [1],
      },
      {
        name: 'Edema Cerebral / Coadyuvante en Meningitis Bacteriana',
        doseMgPerKgDay: 0.6, // 0.15 mg/kg cada 6 horas por 4 días
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 10,
        defaultIntervals: [6],
        defaultDurations: [4],
      },
      {
        name: 'Crisis Asmática Severa (Esquema Corto Oral de 2 días)',
        doseMgPerKgDay: 0.6,
        maxDailyDoseMg: 16,
        maxSingleDoseMg: 16,
        defaultIntervals: [24],
        defaultDurations: [2],
      },
    ],
    concentrations: [
      { label: 'Elixir Pediátrico 0.5 mg / 5 mL (0.1 mg/mL)', mg: 0.5, ml: 5, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Ampolla Inyectable 4 mg / 1 mL', mg: 4, ml: 1, form: 'ampoule', commercialVolumeMl: 1 },
      { label: 'Ampolla Inyectable Forte 8 mg / 2 mL (4 mg/mL)', mg: 8, ml: 2, form: 'ampoule', commercialVolumeMl: 2 },
      { label: 'Tabletas 0.5 mg', mg: 0.5, ml: 1, form: 'tablet' },
      { label: 'Tabletas 4 mg', mg: 4, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Infección fúngica sistémica no tratada o malaria cerebral',
        message: 'Inmunosupresión severa con diseminación micótica. Contraindicada la administración sin cobertura antimicrobiana adecuada.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Diabetes Mellitus descompensada',
        message: 'Inducción rápida de hiperglucemia severa y cetoacidosis diabética por gluconeogénesis.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'prednisolona',
    genericName: 'Prednisolona',
    commercialNames: ['Fisopred', 'Prelone', 'Bepicort', 'Sintisone', 'Pediacort'],
    atc: 'H02AB06',
    group: 'Corticoides',
    aware: 'N/A',
    routes: ['oral'],
    indications: [
      {
        name: 'Exacerbación de Asma Bronquial / Sibilancias Pediátricas',
        doseMgPerKgDay: 2, // 1-2 mg/kg/día en 1 o 2 tomas
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 60,
        defaultIntervals: [12, 24],
        defaultDurations: [3, 5],
      },
      {
        name: 'Síndrome Nefrótico Pediátrico (Inducción)',
        doseMgPerKgDay: 2, // 60 mg/m2/día o 2 mg/kg/día
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 60,
        defaultIntervals: [24],
        defaultDurations: [28],
      },
    ],
    concentrations: [
      { label: 'Solución Oral 1 mg / 1 mL (15 mg/15 mL)', mg: 1, ml: 1, form: 'suspension', commercialVolumeMl: 120 },
      { label: 'Solución Oral Forte 3 mg / 1 mL (15 mg/5 mL)', mg: 3, ml: 1, form: 'suspension', commercialVolumeMl: 100 },
      { label: 'Gotas Pediátricas 13.3 mg / 1 mL', mg: 13.3, ml: 1, form: 'drops', commercialVolumeMl: 20 },
      { label: 'Tabletas 5 mg', mg: 5, ml: 1, form: 'tablet' },
      { label: 'Tabletas 20 mg', mg: 20, ml: 1, form: 'tablet' },
      { label: 'Tabletas 50 mg', mg: 50, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Uso prolongado > 14 días sin desescalamiento gradual',
        message: 'Supresión del eje hipotálamo-hipófisis-adrenal (HHA) e insuficiencia suprarrenal aguda ante retiro súbito.',
        severity: 'critical',
      },
    ],
  },

  // =========================================================================
  // 4. URGENCIAS, CÓDIGO AZUL Y RESUCITACIÓN (CRASH CART - AHA PALS/ACLS 2025)
  // =========================================================================
  {
    id: 'adrenalina',
    genericName: 'Epinefrina (Adrenalina)',
    commercialNames: ['Adrenalina Biol', 'EpiPen', 'Adrenalin'],
    atc: 'C01CA24',
    group: 'Urgencias / Crash Cart',
    aware: 'N/A',
    routes: ['iv', 'im', 'inhalatoria'],
    isCrashCart: true,
    indications: [
      {
        name: 'Paro Cardíaco Pediátrico / Adulto (Asistolia / AESP / FV refractaria)',
        doseMgPerKgDay: 0.1, // 0.01 mg/kg (0.1 mL/kg de dilución 1:10.000) cada 3-5 min
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 1, // 1 mg (10 mL de 1:10.000)
        defaultIntervals: [1], // Se repite cada 3 a 5 min en el paro
        defaultDurations: [1],
      },
      {
        name: 'Anafilaxia Grave / Shock Anafiláctico (Vía Intramuscular Cara Anterolateral Muslo)',
        doseMgPerKgDay: 0.03, // 0.01 mg/kg ampolla pura 1:1.000 IM (máx 0.3mg niño, 0.5mg adulto)
        maxDailyDoseMg: 1.5,
        maxSingleDoseMg: 0.5,
        defaultIntervals: [1],
        defaultDurations: [1],
      },
      {
        name: 'Crupo Grave / Estridor en Reposo (Nebulización con Adrenalina Racémica/L)',
        doseMgPerKgDay: 5, // 0.5 mL/kg de 1:1.000 en 3 mL SF (máx 5 mL)
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 5,
        defaultIntervals: [2],
        defaultDurations: [1],
      },
    ],
    concentrations: [
      { label: 'Ampolla Inyectable 1 mg / 1 mL (1:1.000)', mg: 1, ml: 1, form: 'ampoule', commercialVolumeMl: 1 },
      { label: 'Solución Diluida Reanimación 0.1 mg / 1 mL (1:10.000 = 1 mg en 10 mL SF)', mg: 0.1, ml: 1, form: 'ampoule', commercialVolumeMl: 10 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Inyección intravenosa de solución pura 1:1.000 sin dilución previa',
        message: 'ERROR FATAL: La administración IV de adrenalina concentrada 1:1.000 produce fibrilación ventricular, crisis hipertensiva extrema y hemorragia cerebral. En paro IV usar exclusivamente dilución 1:10.000.',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'amiodarona',
    genericName: 'Amiodarona Clorhidrato',
    commercialNames: ['Cordarone', 'Atlansil', 'Trangorex', 'Braxan'],
    atc: 'C01BD01',
    group: 'Urgencias / Crash Cart',
    aware: 'N/A',
    routes: ['iv', 'oral'],
    isCrashCart: true,
    indications: [
      {
        name: 'Paro Cardíaco por Fibrilación Ventricular (FV) / TV sin pulso refractaria',
        doseMgPerKgDay: 15, // 5 mg/kg bolo rápido IV/IO (máx 300 mg)
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 300,
        defaultIntervals: [1],
        defaultDurations: [1],
      },
      {
        name: 'Taquicardia Supraventricular o TV Estable con Pulso',
        doseMgPerKgDay: 15, // 5 mg/kg infusión lenta en 20-60 min
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 300,
        defaultIntervals: [8],
        defaultDurations: [1],
      },
    ],
    concentrations: [
      { label: 'Ampolla Inyectable 150 mg / 3 mL (50 mg/mL)', mg: 150, ml: 3, form: 'ampoule', commercialVolumeMl: 3 },
      { label: 'Tabletas 200 mg', mg: 200, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Bloqueo AV de 2º o 3er grado sin marcapasos o bradicardia sinusal severa',
        message: 'Colapso cardiovascular agudo y paro sinusal. Administrar con monitorización electrocardiográfica continua.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Infusión periférica rápida no diluida',
        message: 'Causa flebitis química severa e hipotensión marcada mediada por solvente polisorbato. Diluir exclusivamente en Dextrosa al 5%.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'atropina',
    genericName: 'Atropina Sulfato',
    commercialNames: ['Atropina Biol', 'Atropina Sulfato'],
    atc: 'A03BA01',
    group: 'Urgencias / Crash Cart',
    aware: 'N/A',
    routes: ['iv', 'im'],
    isCrashCart: true,
    indications: [
      {
        name: 'Bradicardia Sintomática con Compromiso Hemodinámico',
        doseMgPerKgDay: 0.04, // 0.02 mg/kg IV/IO (mínimo 0.1 mg)
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 0.5, // 0.5 mg en niños, 1 mg en adultos
        defaultIntervals: [1],
        defaultDurations: [1],
      },
      {
        name: 'Intoxicación por Organofosforados / Insecticidas Colinérgicos',
        doseMgPerKgDay: 2, // Atropinización rápida: 0.05 mg/kg cada 5-15 min hasta secado de secreciones
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 5,
        defaultIntervals: [1],
        defaultDurations: [2],
      },
    ],
    concentrations: [
      { label: 'Ampolla Inyectable 1 mg / 1 mL (1 mg/mL)', mg: 1, ml: 1, form: 'ampoule', commercialVolumeMl: 1 },
      { label: 'Ampolla Pediátrica 0.5 mg / 1 mL', mg: 0.5, ml: 1, form: 'ampoule', commercialVolumeMl: 1 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Dosis < 0.1 mg en pediatría o administración IV ultra-lenta',
        message: 'Efecto vagomimético paradójico central: dosis subterapéuticas < 0.1 mg provocan bradicardia paradójica severa y paro cardíaco.',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'sulfato_magnesio',
    genericName: 'Sulfato de Magnesio al 50%',
    commercialNames: ['Sulfato de Magnesio 50%'],
    atc: 'B05XA05',
    group: 'Urgencias / Crash Cart',
    aware: 'N/A',
    routes: ['iv'],
    isCrashCart: true,
    indications: [
      {
        name: 'Torsades de Pointes / Crisis Asmática Grave Refractaria',
        doseMgPerKgDay: 50, // 25-50 mg/kg IV en 20 minutos (máximo 2000 mg)
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        defaultIntervals: [6],
        defaultDurations: [1],
      },
      {
        name: 'Eclampsia / Preeclampsia con Criterios de Severidad (Esquema Zuspan)',
        doseMgPerKgDay: 24, // 4 g bolo IV en 20 min + 1-2 g/hora infusión
        maxDailyDoseMg: 40000,
        maxSingleDoseMg: 4000,
        defaultIntervals: [1],
        defaultDurations: [1],
      },
    ],
    concentrations: [
      { label: 'Ampolla Inyectable al 50% (5 g en 10 mL = 500 mg/mL)', mg: 5000, ml: 10, form: 'ampoule', commercialVolumeMl: 10 },
      { label: 'Ampolla Inyectable al 20% (2 g en 10 mL = 200 mg/mL)', mg: 2000, ml: 10, form: 'ampoule', commercialVolumeMl: 10 },
    ],
    alerts: [
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min o oliguria',
        message: 'Riesgo inminente de toxicidad magnésica por pérdida de excreción renal. Vigilar abolición del reflejo patelar.',
        severity: 'critical',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Paro respiratorio por hipermagnesemia (Magnesio sérico > 9 mg/dL)',
        message: 'Tener siempre disponible Gluconato de Calcio al 10% (10 mL IV) como antídoto inmediato para revertir parálisis muscular y paro.',
        severity: 'critical',
      },
    ],
  },
  {
    id: 'bicarbonato_sodio',
    genericName: 'Bicarbonato de Sodio 8.4%',
    commercialNames: ['Bicarbonato de Sodio 8.4% (1 mEq/mL)'],
    atc: 'B05XA02',
    group: 'Urgencias / Crash Cart',
    aware: 'N/A',
    routes: ['iv'],
    isCrashCart: true,
    indications: [
      {
        name: 'Acidosis Metabólica Grave / Paro Prolongado / Intoxicación por Antidepresivos Tricíclicos',
        doseMgPerKgDay: 2, // 1 mEq/kg = 1 mL/kg de solución 8.4%
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 50, // 50 mEq (50 mL)
        defaultIntervals: [1],
        defaultDurations: [1],
      },
    ],
    concentrations: [
      { label: 'Ampolla / Frasco al 8.4% (1 mEq / 1 mL = 10 mL con 10 mEq)', mg: 840, ml: 10, form: 'ampoule', commercialVolumeMl: 10 },
      { label: 'Frasco Infusión al 8.4% (100 mEq en 100 mL)', mg: 8400, ml: 100, form: 'ampoule', commercialVolumeMl: 100 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Administración IV rápida sin ventilación alveolar efectiva previa',
        message: 'El bicarbonato genera CO2 que difunde libremente hacia el LCR provocando acidosis cerebral paradójica grave.',
        severity: 'critical',
      },
    ],
  },

  // =========================================================================
  // 5. RESPIRATORIO Y ANTIHISTAMÍNICOS
  // =========================================================================
  {
    id: 'salbutamol',
    genericName: 'Salbutamol (Albuterol)',
    commercialNames: ['Ventolin', 'Aerolin', 'Salbutol', 'Asthalin'],
    atc: 'R03AC02',
    group: 'Urgencias / Respiratorio',
    aware: 'N/A',
    routes: ['inhalatoria', 'oral'],
    indications: [
      {
        name: 'Crisis Asmática Aguda / Broncoespasmo (Inhalador MDI con Aerocámara)',
        doseMgPerKgDay: 0.8, // 2 a 4 puffs (100mcg/puff) cada 20 min primera hora
        maxDailyDoseMg: 8,
        maxSingleDoseMg: 1, // 10 puffs = 1 mg
        defaultIntervals: [4, 6],
        defaultDurations: [5],
      },
      {
        name: 'Broncoespasmo Severo (Micronebulización)',
        doseMgPerKgDay: 0.6, // 0.15 mg/kg = 0.03 mL/kg de gotas para nebulizar (máx 5 mg = 1 mL)
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 5,
        defaultIntervals: [4, 6],
        defaultDurations: [3],
      },
    ],
    concentrations: [
      { label: 'Inhalador Aerosol MDI 100 mcg / dosis (200 dosis)', mg: 20, ml: 10, form: 'suspension', commercialVolumeMl: 10 },
      { label: 'Solución para Nebulizar al 0.5% (5 mg / 1 mL = 20 gotas)', mg: 5, ml: 1, form: 'drops', commercialVolumeMl: 20 },
      { label: 'Jarabe 2 mg / 5 mL', mg: 2, ml: 5, form: 'suspension', commercialVolumeMl: 120 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Taquiarritmias severas o tirotoxicosis',
        message: 'Estimulación beta-1 cruzada a altas dosis: taquicardia sinusal marcada, temblor distal fino e hipopotasemia por translocación celular.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'cetirizina',
    genericName: 'Cetirizina Diclorhidrato',
    commercialNames: ['Zyrtec', 'Cetrine', 'Alerlisin', 'Histaler'],
    atc: 'R06AE07',
    group: 'Urgencias / Respiratorio',
    aware: 'N/A',
    routes: ['oral'],
    indications: [
      {
        name: 'Rinitis Alérgica / Urticaria Aguda y Prurito Pediátrico (> 6 meses)',
        doseMgPerKgDay: 0.25, // 2.5 mg/día (6m-2a); 5 mg/día (2-5a); 10 mg/día (>6a)
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        defaultIntervals: [12, 24],
        defaultDurations: [7, 14],
      },
    ],
    concentrations: [
      { label: 'Solución Oral / Jarabe 5 mg / 5 mL (1 mg/mL)', mg: 5, ml: 5, form: 'suspension', commercialVolumeMl: 60 },
      { label: 'Gotas Pediátricas 10 mg / 1 mL (20 gotas)', mg: 10, ml: 1, form: 'drops', commercialVolumeMl: 15 },
      { label: 'Tabletas 10 mg', mg: 10, ml: 1, form: 'tablet' },
    ],
    alerts: [
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min',
        message: 'Reducir la dosis al 50% debido a eliminación principalmente renal.',
        severity: 'high',
      },
    ],
  },

  // =========================================================================
  // 6. GASTROENTEROLOGÍA Y ANTIEMÉTICOS
  // =========================================================================
  {
    id: 'ondansetron',
    genericName: 'Ondansetrón Clorhidrato',
    commercialNames: ['Zofran', 'Modifical', 'Danac', 'Ondax'],
    atc: 'A04AA01',
    group: 'Gastroenterología',
    aware: 'N/A',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Vómitos Incoercibles en Gastroenteritis Aguda Pediátrica',
        doseMgPerKgDay: 0.45, // 0.15 mg/kg/dosis cada 8 horas (o dosis única previa a SRO)
        maxDailyDoseMg: 16,
        maxSingleDoseMg: 8,
        defaultIntervals: [8, 12],
        defaultDurations: [1, 2],
      },
      {
        name: 'Emesis por Quimioterapia / Posoperatorio',
        doseMgPerKgDay: 0.45,
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 8,
        defaultIntervals: [8],
        defaultDurations: [3],
      },
    ],
    concentrations: [
      { label: 'Jarabe 4 mg / 5 mL (0.8 mg/mL)', mg: 4, ml: 5, form: 'suspension', commercialVolumeMl: 50 },
      { label: 'Tabletas Dispersables ODT 4 mg', mg: 4, ml: 1, form: 'tablet' },
      { label: 'Tabletas Recubiertas 8 mg', mg: 8, ml: 1, form: 'tablet' },
      { label: 'Ampolla Inyectable IV 4 mg / 2 mL (2 mg/mL)', mg: 4, ml: 2, form: 'ampoule', commercialVolumeMl: 2 },
      { label: 'Ampolla Inyectable IV 8 mg / 4 mL (2 mg/mL)', mg: 8, ml: 4, form: 'ampoule', commercialVolumeMl: 4 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Prolongación de intervalo QT o hipopotasemia/hipomagnesemia no corregida',
        message: 'Blackbox: Bloqueo de canales hERG con riesgo de prolongación del intervalo QTc y arritmias ventriculares graves.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Insuficiencia hepática grave (Child-Pugh C)',
        message: 'Dosis diaria máxima absoluta de 8 mg/día por disminución acentuada del aclaramiento hepático.',
        severity: 'high',
      },
    ],
  },
  {
    id: 'omeprazol',
    genericName: 'Omeprazol',
    commercialNames: ['Losec', 'Gastrazol', 'Genoprazol', 'Prilosec'],
    atc: 'A02BC01',
    group: 'Gastroenterología',
    aware: 'N/A',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Enfermedad por Reflujo Gastroesofágico / Esofagitis Erosiva Pediátrica',
        doseMgPerKgDay: 1, // 0.7 - 1 mg/kg/día en 1 toma matutina
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 40,
        defaultIntervals: [24],
        defaultDurations: [28, 56],
      },
      {
        name: 'Hemorragia Digestiva Alta / Profilaxis de Úlcera por Estrés en UCI',
        doseMgPerKgDay: 2, // 1 mg/kg cada 12 horas IV
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 40,
        defaultIntervals: [12],
        defaultDurations: [3, 7],
      },
    ],
    concentrations: [
      { label: 'Cápsulas con Microgránulos Gastrorresistentes 20 mg', mg: 20, ml: 1, form: 'tablet' },
      { label: 'Cápsulas 40 mg', mg: 40, ml: 1, form: 'tablet' },
      { label: 'Vial Inyectable IV 40 mg con Solvente', mg: 40, ml: 10, form: 'ampoule', commercialVolumeMl: 10 },
      { label: 'Suspensión Extemporánea 2 mg / 1 mL (Formulación Magistral)', mg: 2, ml: 1, form: 'suspension', commercialVolumeMl: 50 },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Uso concomitante con Clopidogrel',
        message: 'Inhibición competitiva de CYP2C19: reduce significativamente la activación del Clopidogrel aumentando riesgo de trombosis de stent.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'Uso crónico con desarrollo de nefritis túbulo-intersticial aguda',
        message: 'Riesgo de nefritis intersticial aguda inmunomediada. Si se eleva creatinina sérica sin causa evidente, suspender.',
        severity: 'high',
      },
    ],
  },
];

/**
 * Transforms standard DRUG_DB entry into the UI-compatible Medication schema.
 */
export function transformDrugToMedication(drug: Drug): Medication {
  const obstetricAlert = drug.alerts.find((a) => a.type === 'obstetric');
  const renalAlert = drug.alerts.find((a) => a.type === 'renal');
  const blackboxAlert = drug.alerts.find((a) => a.type === 'blackbox');
  const hepaticAlert = drug.alerts.find((a) => a.type === 'hepatic');

  return {
    id: drug.id,
    name: drug.genericName,
    commercialNames: drug.commercialNames,
    category: (drug.group as DrugCategory) || 'Todos',
    therapeuticClass: `${drug.group} · ATC ${drug.atc}`,
    atcCode: drug.atc,
    awareCategory: drug.aware !== 'N/A' ? (drug.aware as 'Access' | 'Watch' | 'Reserve') : undefined,
    shortDescription: `${drug.genericName} - ${drug.group} (${drug.atc})`,
    availableRoutes: drug.routes as RouteOfAdmin[],
    concentrations: drug.concentrations.map((c, idx) => ({
      id: `${drug.id}_conc_${idx}`,
      name: c.label,
      amountMg: c.mg,
      volumeMl: c.ml,
      form: c.form === 'tablet' ? 'tablets' : c.form === 'ampoule' ? 'vial' : c.form,
      unit: c.form === 'suspension' || c.form === 'ampoule' ? 'mL' : c.form === 'drops' ? 'gotas' : 'comprimido',
      standardBottleMl: c.commercialVolumeMl || (c.form === 'suspension' ? 100 : undefined),
    })),
    indications: drug.indications.map((ind, idx) => {
      const intervalHours = ind.defaultIntervals[0] || 8;
      const frequencyPerDay = Math.round(24 / intervalHours);
      return {
        id: `${drug.id}_ind_${idx}`,
        name: ind.name,
        recommendedDoseMgPerKgPerDay: ind.doseMgPerKgDay,
        maxDailyDoseMg: ind.maxDailyDoseMg,
        maxSingleDoseMg: ind.maxSingleDoseMg,
        frequencyPerDay,
        intervalHours,
        durationDays: `${ind.defaultDurations[0] || 7} días`,
        description: `Dosis: ${ind.doseMgPerKgDay} mg/kg/día c/${intervalHours}h (Guías SRS/Nelson)`,
      };
    }),
    whenToUse: drug.indications.map((i) => i.name),
    pearlsAndPitfalls: [
      blackboxAlert ? `⚠️ Blackbox: ${blackboxAlert.message}` : null,
      hepaticAlert ? `🔬 Hepático: ${hepaticAlert.message}` : null,
      renalAlert ? `💧 Renal: ${renalAlert.message}` : null,
    ].filter(Boolean) as string[],
    monitoringAndSideEffects: [],
    evidenceAndSources: [
      {
        title: 'OMS AWaRe / Nelson Textbook of Pediatrics / SRS 2025',
        source: 'Organización Mundial de la Salud & Nelson Pediatrics',
        year: '2025',
        summary: `Fármaco oficial bajo normativa ATC ${drug.atc}. Categoría AWaRe: ${drug.aware}.`,
      },
    ],
    pregnancyGuidance: obstetricAlert
      ? {
          category: 'D',
          status: 'contraindicated',
          statusLabel: 'Contraindicado en Embarazo',
          summary: obstetricAlert.message,
          contraindicatedInTrimester: [3],
          clinicalAlternative: 'Acetaminofén (Paracetamol) a dosis mínima eficaz',
          fetalRisks: ['Cierre precoz del ductus arterioso', 'Oligohidramnios'],
        }
      : undefined,
    renalAdjustments: renalAlert
      ? [
          {
            crClThreshold: renalAlert.conditionDefinition,
            adjustmentText: renalAlert.message,
            cautionLevel: renalAlert.severity === 'critical' ? 'severe' : 'moderate',
          },
        ]
      : undefined,
  };
}

/**
 * Transformed array for UI consumption in MedFormula MD
 */
export const drugToMedication = transformDrugToMedication;
export const CLINICAL_MEDICATIONS: Medication[] = DRUG_DB.map(transformDrugToMedication);
