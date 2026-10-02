// src/data/medications.ts
// Master Medication Database for MedFormula MD (SaMD)
// Adheres strictly to international clinical standards (Nelson Pediatrics 21st/22nd Ed, UpToDate, IDSA, AHA PALS/ACLS 2025)
// and Latin American commercial pharmacy presentations.

import { Medication, RouteOfAdmin, DrugCategory } from '../types/clinical';
import { ANTIBIOTICS_MEDICATIONS } from './antibiotics';
import { ANALGESICS_MEDICATIONS } from './analgesics';
import { GASTRO_MEDICATIONS } from './gastro';
import { RESPIRATORY_EMERGENCY_MEDICATIONS } from './respiratory_emergency';
import { NEUROLOGY_ANTIDOTES_MEDICATIONS } from './neurology_antidotes';
import { CARDIOVASCULAR_MEDICATIONS } from './cardiovascular';
import { ENDOCRINOLOGY_MEDICATIONS } from './endocrinology';
import { GYNECOLOGY_MEDICATIONS } from './gynecology';

// =========================================================================
// OBLIGATORY TYPESCRIPT INTERFACES
// =========================================================================

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

// =========================================================================
// DRUG_DB CONSTANT (MASTER CLINICAL DATABASE)
// =========================================================================

export const DRUG_DB: Drug[] = [
  // -----------------------------------------------------------------------
  // 1. AMOXICILINA (Antibiótico / AWaRe: Access)
  // -----------------------------------------------------------------------
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
        name: 'Faringoamigdalitis Estreptocócica / Infección Leve a Moderada',
        doseMgPerKgDay: 50, // 50 mg/kg/día dividido cada 8-12 horas
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        defaultIntervals: [8, 12],
        defaultDurations: [10],
      },
      {
        name: 'Otitis Media Aguda / Neumonía Adquirida en Comunidad (Alta Dosis)',
        doseMgPerKgDay: 90, // 90 mg/kg/día para Streptococcus pneumoniae resistente
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [8, 12],
        defaultDurations: [7, 10],
      },
    ],
    concentrations: [
      {
        label: 'Suspensión Oral 250 mg / 5 mL',
        mg: 250,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 100, // Frasco comercial de 100 mL
      },
      {
        label: 'Suspensión Oral Forte 500 mg / 5 mL',
        mg: 500,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 100, // Frasco comercial de 100 mL
      },
      {
        label: 'Cápsulas 500 mg',
        mg: 500,
        ml: 1,
        form: 'tablet',
      },
      {
        label: 'Tabletas Dispersables 875 mg',
        mg: 875,
        ml: 1,
        form: 'tablet',
      },
    ],
    alerts: [
      {
        type: 'renal',
        conditionDefinition: 'ClCr 10 - 30 mL/min',
        message: 'Ajustar dosis a 250 - 500 mg cada 12 horas. Si ClCr < 10 mL/min, administrar cada 24 horas.',
        severity: 'high',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Hipersensibilidad mediada por IgE a betalactámicos o shock anafiláctico previo',
        message: 'Riesgo inminente de anafilaxia y colapso respiratorio. Emplear alternativa de otra familia (ej. Azitromicina).',
        severity: 'critical',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. PARACETAMOL / ACETAMINOFÉN (Analgésico / Antipirético)
  // -----------------------------------------------------------------------
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
        name: 'Fiebre y Dolor Leve a Moderado Pediátrico / Adulto',
        doseMgPerKgDay: 60, // 15 mg/kg/dosis cada 6 horas (o 10-15 mg/kg c/4-6h)
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [6, 8],
        defaultDurations: [3, 5],
      },
      {
        name: 'Dolor Posoperatorio / Analgesia Intravenosa',
        doseMgPerKgDay: 60, // 15 mg/kg IV cada 6 horas
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        defaultIntervals: [6],
        defaultDurations: [2, 3],
      },
    ],
    concentrations: [
      {
        label: 'Jarabe Pediátrico 150 mg / 5 mL',
        mg: 150,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 120, // Frasco comercial de 120 mL
      },
      {
        label: 'Jarabe Infantil 160 mg / 5 mL',
        mg: 160,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 100, // Frasco comercial de 100 mL
      },
      {
        label: 'Gotas Orales Pediátricas 100 mg / 1 mL',
        mg: 100,
        ml: 1,
        form: 'drops',
        commercialVolumeMl: 30, // Frasco gotero comercial de 30 mL
      },
      {
        label: 'Tableta Ranurada 500 mg',
        mg: 500,
        ml: 1,
        form: 'tablet',
      },
      {
        label: 'Tableta Recubierta 1 g (1000 mg)',
        mg: 1000,
        ml: 1,
        form: 'tablet',
      },
      {
        label: 'Vial Infusión IV 10 mg / mL (1000 mg / 100 mL)',
        mg: 1000,
        ml: 100,
        form: 'ampoule',
        commercialVolumeMl: 100,
      },
    ],
    alerts: [
      {
        type: 'hepatic',
        conditionDefinition: 'Insuficiencia hepática severa o cirrosis descompensada',
        message: 'Riesgo de hepatotoxicidad por acumulación de N-acetil-p-benzoquinoneimina (NAPQI). Limitar dosis a un máximo de 2 g/día o suspender.',
        severity: 'critical',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Dosis total acumulada superior a 4000 mg en 24 horas',
        message: 'Advertencia Blackbox: Riesgo de necrosis hepática centrolobulillar fulminante por sobredosis involuntaria en formulaciones combinadas.',
        severity: 'critical',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 3. IBUPROFENO (Analgésico / Antipirético / Antiinflamatorio)
  // -----------------------------------------------------------------------
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
        name: 'Antipirético / Analgésico Pediátrico (> 6 meses de edad)',
        doseMgPerKgDay: 30, // 10 mg/kg/dosis cada 8 horas
        maxDailyDoseMg: 2400,
        maxSingleDoseMg: 600,
        defaultIntervals: [6, 8],
        defaultDurations: [3, 5],
      },
      {
        name: 'Antiinflamatorio en Artritis / Dolor Musculoesquelético Moderado',
        doseMgPerKgDay: 40,
        maxDailyDoseMg: 3200,
        maxSingleDoseMg: 800,
        defaultIntervals: [6, 8],
        defaultDurations: [7, 14],
      },
    ],
    concentrations: [
      {
        label: 'Suspensión Oral 100 mg / 5 mL',
        mg: 100,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 120, // Frasco comercial de 120 mL
      },
      {
        label: 'Suspensión Oral Forte 200 mg / 5 mL',
        mg: 200,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 120, // Frasco comercial de 120 mL
      },
      {
        label: 'Gotas Orales Pediátricas 40 mg / 1 mL',
        mg: 40,
        ml: 1,
        form: 'drops',
        commercialVolumeMl: 30, // Frasco gotero comercial de 30 mL
      },
      {
        label: 'Cápsula Blanda 400 mg',
        mg: 400,
        ml: 1,
        form: 'tablet',
      },
      {
        label: 'Tableta 600 mg',
        mg: 600,
        ml: 1,
        form: 'tablet',
      },
      {
        label: 'Tableta 800 mg',
        mg: 800,
        ml: 1,
        form: 'tablet',
      },
    ],
    alerts: [
      {
        type: 'obstetric',
        conditionDefinition: 'Embarazo >= 20 semanas de gestación (especialmente 3er Trimestre)',
        message: 'CONTRAINDICACIÓN ABSOLUTA: Riesgo de cierre precoz del conducto arterioso fetal, oligohidramnios e hipertensión pulmonar neonatal severa.',
        severity: 'critical',
      },
      {
        type: 'renal',
        conditionDefinition: 'ClCr < 30 mL/min o deshidratación aguda',
        message: 'Inhibe la síntesis renal de PGE2 y PGI2 vasodilatadoras, provocando vasoconstricción de la arteriola aferente y fracaso renal agudo.',
        severity: 'high',
      },
      {
        type: 'blackbox',
        conditionDefinition: 'Enfermedad ulcerosa péptica activa o antecedentes de sangrado digestivo',
        message: 'Blackbox: Incremento de riesgo de hemorragia gastrointestinal y eventos trombóticos cardiovasculares mayores.',
        severity: 'high',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. EPINEFRINA / ADRENALINA (Reanimación y Urgencias / Crash Cart)
  // -----------------------------------------------------------------------
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
        name: 'Paro Cardíaco Pediátrico y Adulto (Asistolia / AESP / FV refractaria)',
        doseMgPerKgDay: 0.1, // 0.01 mg/kg IV/IO (0.1 mL/kg de dilución 1:10.000) cada 3-5 minutos
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 1, // 1 mg (10 mL de dilución 1:10.000)
        defaultIntervals: [1], // Repetir cada 3-5 minutos según ritmo
        defaultDurations: [1],
      },
      {
        name: 'Anafilaxia Severa / Shock Anafiláctico (Vía Intramuscular Cara Anterolateral Muslo)',
        doseMgPerKgDay: 0.03, // 0.01 mg/kg ampolla pura 1:1.000 IM (máximo 0.3 mg en niños, 0.5 mg en adultos)
        maxDailyDoseMg: 1.5,
        maxSingleDoseMg: 0.5,
        defaultIntervals: [1],
        defaultDurations: [1],
      },
      {
        name: 'Crupo Laringotraqueal Severo / Estridor en Reposo (Nebulización con Adrenalina)',
        doseMgPerKgDay: 5, // 0.5 mL/kg de ampolla 1:1.000 en 3 mL de Solución Salina (máximo 5 mL)
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 5,
        defaultIntervals: [2],
        defaultDurations: [1],
      },
    ],
    concentrations: [
      {
        label: 'Ampolla Inyectable 1 mg / 1 mL (1:1.000 Concentrada)',
        mg: 1,
        ml: 1,
        form: 'ampoule',
        commercialVolumeMl: 1,
      },
      {
        label: 'Solución Diluida Reanimación 0.1 mg / 1 mL (1:10.000 = 1 mg en 10 mL SF)',
        mg: 0.1,
        ml: 1,
        form: 'ampoule',
        commercialVolumeMl: 10,
      },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Administración intravenosa directa de ampolla concentrada 1:1.000 sin diluir',
        message: 'PELIGRO MORTAL: La inyección IV directa de adrenalina 1:1.000 induce fibrilación ventricular, crisis hipertensiva extrema y hemorragia cerebral fatal. En reanimación IV emplear exclusivamente dilución 1:10.000.',
        severity: 'critical',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 5. AMIODARONA (Antiarrítmico / Crash Cart PALS-ACLS 2025)
  // -----------------------------------------------------------------------
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
        name: 'Paro Cardíaco por Fibrilación Ventricular (FV) o TV Sin Pulso Refractaria',
        doseMgPerKgDay: 15, // 5 mg/kg en bolo rápido IV/IO (máx 300 mg en primera descarga, 150 mg en segunda)
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 300,
        defaultIntervals: [1],
        defaultDurations: [1],
      },
      {
        name: 'Taquicardia Supraventricular o TV Monomórfica Estable con Pulso',
        doseMgPerKgDay: 15, // 5 mg/kg en infusión IV lenta durante 20 a 60 minutos
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 300,
        defaultIntervals: [8],
        defaultDurations: [1],
      },
    ],
    concentrations: [
      {
        label: 'Ampolla Inyectable 150 mg / 3 mL (50 mg / 1 mL)',
        mg: 150,
        ml: 3,
        form: 'ampoule',
        commercialVolumeMl: 3,
      },
      {
        label: 'Tabletas Ranuradas 200 mg',
        mg: 200,
        ml: 1,
        form: 'tablet',
      },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Bloqueo auriculoventricular de 2º o 3er grado sin marcapasos o bradicardia sinusal severa',
        message: 'Riesgo de colapso hemodinámico agudo y asistolia. Requiere monitorización electrocardiográfica continua en UCI/Reanimación.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Infusión periférica rápida o dilución en solución salina',
        message: 'Causa flebitis química severa e hipotensión mediada por polisorbato. Diluir exclusivamente en Dextrosa al 5% en Agua.',
        severity: 'high',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 6. CEFTRIAXONA (Antibiótico / AWaRe: Watch)
  // -----------------------------------------------------------------------
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
        name: 'Sepsis / Neumonía Grave / Infección Severa Adquirida en Comunidad',
        doseMgPerKgDay: 75, // 50 - 75 mg/kg/día en dosis única cada 24 horas
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 2000,
        defaultIntervals: [24],
        defaultDurations: [7, 10],
      },
      {
        name: 'Meningitis Bacteriana Aguda (Penetración LCR)',
        doseMgPerKgDay: 100, // 100 mg/kg/día (o 50 mg/kg cada 12 horas)
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        defaultIntervals: [12, 24],
        defaultDurations: [10, 14],
      },
    ],
    concentrations: [
      {
        label: 'Vial Inyectable IV/IM 1 g (1000 mg)',
        mg: 1000,
        ml: 10,
        form: 'ampoule',
        commercialVolumeMl: 10,
      },
      {
        label: 'Vial Inyectable IV/IM 500 mg',
        mg: 500,
        ml: 5,
        form: 'ampoule',
        commercialVolumeMl: 5,
      },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Neonatos <= 28 días que reciben infusiones parenterales que contienen Calcio',
        message: 'CONTRAINDICACIÓN MORTAL: Precipitación de cristales insolubles de ceftriaxona-calcio en los pulmones y riñones neonatales.',
        severity: 'critical',
      },
      {
        type: 'hepatic',
        conditionDefinition: 'Neonatos con hiperbilirrubinemia no conjugada o ictericia fisiológica',
        message: 'Desplaza competitivamente la bilirrubina de la albúmina plasmática provocando encefalopatía bilirrubínica (Kernícterus).',
        severity: 'critical',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 7. AZITROMICINA (Macrólido / AWaRe: Watch)
  // -----------------------------------------------------------------------
  {
    id: 'azitromicina',
    genericName: 'Azitromicina',
    commercialNames: ['Zithromax', 'Trex', 'Azitrom', 'Koptin'],
    atc: 'J01FA10',
    group: 'Antibióticos',
    aware: 'Watch',
    routes: ['oral', 'iv'],
    indications: [
      {
        name: 'Neumonía Atípica / Faringitis en Alérgicos a Penicilina',
        doseMgPerKgDay: 10, // 10 mg/kg el día 1; luego 5 mg/kg los días 2 al 5
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        defaultIntervals: [24],
        defaultDurations: [5],
      },
    ],
    concentrations: [
      {
        label: 'Suspensión Oral 200 mg / 5 mL (Frasco 30 mL)',
        mg: 200,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 30, // Frasco comercial de 30 mL
      },
      {
        label: 'Suspensión Oral 200 mg / 5 mL (Frasco Grande 60 mL)',
        mg: 200,
        ml: 5,
        form: 'suspension',
        commercialVolumeMl: 60, // Frasco comercial de 60 mL
      },
      {
        label: 'Tabletas Recubiertas 500 mg',
        mg: 500,
        ml: 1,
        form: 'tablet',
      },
    ],
    alerts: [
      {
        type: 'blackbox',
        conditionDefinition: 'Intervalo QTc prolongado o administración simultánea con fármacos proarrítmicos',
        message: 'Blackbox FDA: Riesgo de taquiarritmia ventricular polimórfica (Torsades de Pointes) y muerte súbita cardiovascular.',
        severity: 'critical',
      },
    ],
  },
];

// =========================================================================
// TRANSFORMER: ADAPTS DRUG_DB TO RUNTIME UI MEDICATION SCHEMA
// =========================================================================

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
        description: `Dosis estándar: ${ind.doseMgPerKgDay} mg/kg/día c/${intervalHours}h`,
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
        title: 'OMS AWaRe / Nelson Pediatrics / UpToDate / SRS 2025',
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

export const drugToMedication = transformDrugToMedication;

// =========================================================================
// RUNTIME UNIFIED MEDICATIONS CATALOG
// =========================================================================

const PRIMARY_DB_MEDICATIONS = DRUG_DB.map(transformDrugToMedication);
const existingIds = new Set(PRIMARY_DB_MEDICATIONS.map((m) => m.id));

const SUPPLEMENTARY_MEDS = [
  ...ANTIBIOTICS_MEDICATIONS,
  ...ANALGESICS_MEDICATIONS,
  ...GASTRO_MEDICATIONS,
  ...RESPIRATORY_EMERGENCY_MEDICATIONS,
  ...NEUROLOGY_ANTIDOTES_MEDICATIONS,
  ...CARDIOVASCULAR_MEDICATIONS,
  ...ENDOCRINOLOGY_MEDICATIONS,
  ...GYNECOLOGY_MEDICATIONS,
].filter((m) => !existingIds.has(m.id));

/**
 * Global combined medications list for search, detail calculators and directories
 */
export const MEDICATIONS: Medication[] = [
  ...PRIMARY_DB_MEDICATIONS,
  ...SUPPLEMENTARY_MEDS,
];

// =========================================================================
// INTRAVENOUS INFUSION PROTOCOLS
// =========================================================================

export interface InfusionProtocol {
  id: string;
  drugName: string;
  indication: string;
  defaultConcentration: {
    drugAmountMg: number;
    solutionVolumeMl: number;
    diluent: string;
  };
  doseUnit: 'mcg/kg/min' | 'mcg/min' | 'mg/h' | 'UI/h';
  typicalDoseRange: {
    min: number;
    initial: number;
    max: number;
  };
  clinicalTips: string;
}

export const INFUSION_PROTOCOLS: InfusionProtocol[] = [
  {
    id: 'noradrenalina',
    drugName: 'Noradrenalina (Norepinefrina)',
    indication: 'Shock Séptico / Vasodilatador (PAM diana ≥ 65 mmHg)',
    defaultConcentration: {
      drugAmountMg: 8,
      solutionVolumeMl: 100,
      diluent: 'Dextrosa 5% en Agua',
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1,
      max: 1.5,
    },
    clinicalTips: 'Vasopresor de 1ra elección en shock séptico. Administrar preferiblemente por Vía Venosa Central (VVC) para evitar extravasación y necrosis.',
  },
  {
    id: 'adrenalina-infusion',
    drugName: 'Epinefrina (Adrenalina Infusión)',
    indication: 'Shock Anafiláctico Refractario / Shock Cardiogénico Pediátrico',
    defaultConcentration: {
      drugAmountMg: 4,
      solutionVolumeMl: 100,
      diluent: 'Dextrosa 5% en Agua o Salina 0.9%',
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1,
      max: 1.0,
    },
    clinicalTips: 'Agonista inotrópico y vasopresor potente. Titular para mantener perfusión periférica, llenado capilar <2s y presión arterial media.',
  },
  {
    id: 'dopamina',
    drugName: 'Dopamina',
    indication: 'Shock Cardiogénico con Bradicardia / Hipotensión',
    defaultConcentration: {
      drugAmountMg: 200,
      solutionVolumeMl: 250,
      diluent: 'Dextrosa 5% en Agua',
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 2,
      initial: 5,
      max: 20,
    },
    clinicalTips: 'Efecto inotrópico beta-1 a dosis intermedias (5-10 mcg/kg/min); efecto vasoconstrictor alfa a dosis altas (>10 mcg/kg/min). Cuidado con taquiarritmias.',
  },
  {
    id: 'dobutamina',
    drugName: 'Dobutamina',
    indication: 'Shock Cardiogénico con Disfunción Sistólica Miocárdica',
    defaultConcentration: {
      drugAmountMg: 250,
      solutionVolumeMl: 250,
      diluent: 'Dextrosa 5% en Agua',
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 2.5,
      initial: 5.0,
      max: 20.0,
    },
    clinicalTips: 'Inodilatador: aumenta contractilidad miocárdica y reduce poscarga. Requiere volemia adecuada previa.',
  },
  {
    id: 'fentanilo',
    drugName: 'Fentanilo',
    indication: 'Sedación y Analgesia en UCI / Ventilación Mecánica',
    defaultConcentration: {
      drugAmountMg: 1,
      solutionVolumeMl: 100,
      diluent: 'Solución Fisiológica 0.9%',
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.02,
      initial: 0.03,
      max: 0.08,
    },
    clinicalTips: 'Opioide de acción rápida. Monitorizar escala RASS o CPOT. Riesgo de acumulación en infusión prolongada (>48h).',
  },
  {
    id: 'midazolam',
    drugName: 'Midazolam',
    indication: 'Sedación Continua en UCI / Estatus Epiléptico Refractario',
    defaultConcentration: {
      drugAmountMg: 100,
      solutionVolumeMl: 100,
      diluent: 'Solución Fisiológica 0.9%',
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.5,
      initial: 1.0,
      max: 4.0,
    },
    clinicalTips: 'Benzodiacepina lipofílica con metabolito activo que se acumula en falla renal y hepática.',
  },
  {
    id: 'insulina-regular',
    drugName: 'Insulina Regular Rápida',
    indication: 'Cetoacidosis Diabética (CAD) / Estado Hiperosmolar',
    defaultConcentration: {
      drugAmountMg: 100,
      solutionVolumeMl: 100,
      diluent: 'Solución Salina 0.9%',
    },
    doseUnit: 'UI/h',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1,
      max: 0.2,
    },
    clinicalTips: 'Purgar 20-30 mL por el equipo de infusión antes de conectar. Objetivo CAD: descenso de glucemia 50-75 mg/dL por hora.',
  },
];
