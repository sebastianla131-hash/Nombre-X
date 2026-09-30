// clinicalDatabase.ts
// Medical-grade Drug Database for MedFormula MD (SRS 2025 / WHO AWaRe)

import { Drug, Medication, PatientProfile, RouteOfAdmin, DrugCategory } from '../types/clinical';
import { calculateCockcroftGault } from '../utils/clinicalEngine';

/**
 * Calculates Creatinine Clearance (Cockcroft-Gault) for alert conditions.
 */
export function calculateCrCl(p: PatientProfile): number | null {
  return calculateCockcroftGault(p).crCl;
}

export const DRUG_DB: Drug[] = [
  // ==========================================
  // ANALGÉSICOS Y ANTIPIRÉTICOS
  // ==========================================
  {
    id: 'acetaminofen',
    genericName: 'Acetaminofén (Paracetamol)',
    commercialNames: ['Dolex', 'Adorem', 'Tempra', 'Tylenol'],
    atc: 'N02BE01',
    group: 'Analgésicos/AINEs',
    aware: 'Access',
    routes: ['VO', 'IV', 'VR'],
    indications: [
      { 
        name: 'Fiebre / Dolor Leve-Moderado', 
        doseMgPerKgDay: 60, // Calculado a 15mg/kg/dosis c/6h
        maxDailyDoseMg: 4000, 
        maxSingleDoseMg: 1000, 
        defaultIntervals: [6, 8], 
        defaultDurations: [3, 5] 
      }
    ],
    concentrations: [
      { label: '150mg/5mL (Jarabe Niños)', mg: 150, ml: 5, form: 'suspension' },
      { label: '100mg/1mL (Gotas)', mg: 100, ml: 1, form: 'drops' },
      { label: '500mg (Tableta)', mg: 500, ml: 1, form: 'tablet' }
    ],
    alerts: [
      {
        type: 'hepatic',
        condition: () => false, // Se conectaría con un flag de hepatopatía en el PatientStore
        message: 'Precaución: En disfunción hepática severa, limitar dosis máxima a 2g/día.',
        severity: 'high'
      }
    ]
  },
  {
    id: 'ibuprofeno',
    genericName: 'Ibuprofeno',
    commercialNames: ['Advil', 'Motrin', 'Buprex'],
    atc: 'M01AE01',
    group: 'Analgésicos/AINEs',
    aware: 'Access',
    routes: ['VO'],
    indications: [
      { 
        name: 'Antipirético / Antiinflamatorio', 
        doseMgPerKgDay: 30, // Calculado a 10mg/kg/dosis c/8h
        maxDailyDoseMg: 2400, 
        maxSingleDoseMg: 600, // En adultos se puede hasta 800mg, pero 600mg es el techo seguro pediátrico/general estándar
        defaultIntervals: [6, 8], 
        defaultDurations: [3, 5] 
      }
    ],
    concentrations: [
      { label: '100mg/5mL (Suspensión)', mg: 100, ml: 5, form: 'suspension' },
      { label: '400mg (Cápsula blanda)', mg: 400, ml: 1, form: 'tablet' },
      { label: '600mg (Tableta)', mg: 600, ml: 1, form: 'tablet' }
    ],
    alerts: [
      {
        type: 'obstetric',
        condition: (p) => p.pregnancyTrimester === 3,
        message: '🛑 CONTRAINDICADO en 3er Trimestre. Riesgo de cierre prematuro del ductus arterioso y oligohidramnios. Cambiar a Acetaminofén.',
        severity: 'critical'
      },
      {
        type: 'renal',
        condition: (p) => calculateCrCl(p) !== null && calculateCrCl(p)! < 30,
        message: '⚠️ Tasa de filtración < 30 mL/min. Evitar AINEs por riesgo de nefrotoxicidad aguda.',
        severity: 'high'
      }
    ]
  },

  // ==========================================
  // ANTIBIÓTICOS (Clasificación OMS AWaRe)
  // ==========================================
  {
    id: 'amox_clav',
    genericName: 'Amoxicilina + Ácido Clavulánico',
    commercialNames: ['Clavulin', 'Curam', 'Augmentin'],
    atc: 'J01CR02',
    group: 'Antibióticos',
    aware: 'Access', // Considerado Access en esquemas de primera línea ampliados, Watch en algunas sub-clasificaciones
    routes: ['VO', 'IV'],
    indications: [
      { 
        name: 'OMA / Sinusitis (Alta Dosis)', 
        doseMgPerKgDay: 90, // Basado en el componente de Amoxicilina
        maxDailyDoseMg: 4000, 
        maxSingleDoseMg: 1000, 
        defaultIntervals: [12], 
        defaultDurations: [7, 10] 
      },
      { 
        name: 'Infección Piel / Vía Respiratoria Baja', 
        doseMgPerKgDay: 45, 
        maxDailyDoseMg: 3000, 
        maxSingleDoseMg: 875, 
        defaultIntervals: [8, 12], 
        defaultDurations: [7] 
      }
    ],
    concentrations: [
      { label: '600mg/42.9mg por 5mL (Suspensión ES)', mg: 600, ml: 5, form: 'suspension' },
      { label: '250mg/62.5mg por 5mL (Suspensión)', mg: 250, ml: 5, form: 'suspension' },
      { label: '875mg/125mg (Tableta)', mg: 875, ml: 1, form: 'tablet' }
    ],
    alerts: [
      {
        type: 'renal',
        condition: (p) => calculateCrCl(p) !== null && calculateCrCl(p)! < 30,
        message: '⚠️ ClCr < 30 mL/min: No usar presentaciones de 875mg. Ajustar intervalo a cada 12h o 24h según severidad.',
        severity: 'high'
      }
    ]
  },
  {
    id: 'cefalexina',
    genericName: 'Cefalexina',
    commercialNames: ['Keflex', 'Keforal'],
    atc: 'J01DB01',
    group: 'Antibióticos',
    aware: 'Access',
    routes: ['VO'],
    indications: [
      { 
        name: 'Faringoamigdalitis / Infección de Piel', 
        doseMgPerKgDay: 50, 
        maxDailyDoseMg: 4000, 
        maxSingleDoseMg: 1000, 
        defaultIntervals: [6, 8, 12], 
        defaultDurations: [7, 10] 
      },
      { 
        name: 'Celulitis / Impétigo Severo', 
        doseMgPerKgDay: 100, 
        maxDailyDoseMg: 4000, 
        maxSingleDoseMg: 1000, 
        defaultIntervals: [6, 8], 
        defaultDurations: [10] 
      }
    ],
    concentrations: [
      { label: '250mg/5mL (Suspensión)', mg: 250, ml: 5, form: 'suspension' },
      { label: '500mg (Cápsula)', mg: 500, ml: 1, form: 'tablet' }
    ],
    alerts: []
  },
  {
    id: 'azitromicina',
    genericName: 'Azitromicina',
    commercialNames: ['Zitromax', 'Trex', 'Bactocin'],
    atc: 'J01FA10',
    group: 'Antibióticos',
    aware: 'Watch', // Macrólidos están en el grupo Precaución (Watch)
    routes: ['VO', 'IV'],
    indications: [
      { 
        name: 'Faringitis / Neumonía Atípica', 
        doseMgPerKgDay: 10, 
        maxDailyDoseMg: 500, 
        maxSingleDoseMg: 500, 
        defaultIntervals: [24], 
        defaultDurations: [3, 5] 
      }
    ],
    concentrations: [
      { label: '200mg/5mL (Suspensión)', mg: 200, ml: 5, form: 'suspension' },
      { label: '500mg (Tableta)', mg: 500, ml: 1, form: 'tablet' }
    ],
    alerts: [
      {
        type: 'blackbox',
        condition: () => true, // Siempre visible como precaución estándar
        message: 'Precaución: Riesgo de prolongación del intervalo QT. Evitar uso concomitante con procinéticos u otros fármacos arritmogénicos.',
        severity: 'high'
      }
    ]
  },

  // ==========================================
  // CORTICOSTEROIDES Y RESPIRATORIO
  // ==========================================
  {
    id: 'dexametasona',
    genericName: 'Dexametasona',
    commercialNames: ['Decadron', 'Dexametasona Fosfato'],
    atc: 'H02AB02',
    group: 'Respiratorio/Urgencias',
    aware: 'Access',
    routes: ['VO', 'IM', 'IV'],
    indications: [
      { 
        name: 'Crupo (Laringotraqueítis) / Asma', 
        doseMgPerKgDay: 0.6, // Dosis única habitual de 0.6 mg/kg
        maxDailyDoseMg: 16, 
        maxSingleDoseMg: 16, 
        defaultIntervals: [24], 
        defaultDurations: [1, 2] 
      }
    ],
    concentrations: [
      { label: '4mg/1mL (Ampolla)', mg: 4, ml: 1, form: 'ampoule' },
      { label: '0.5mg/5mL (Elixir)', mg: 0.5, ml: 5, form: 'suspension' },
      { label: '8mg/2mL (Ampolla)', mg: 8, ml: 2, form: 'ampoule' }
    ],
    alerts: []
  },

  // ==========================================
  // GASTROENTEROLOGÍA Y ANTIEMÉTICOS
  // ==========================================
  {
    id: 'ondansetron',
    genericName: 'Ondansetrón',
    commercialNames: ['Zofran', 'Modifical'],
    atc: 'A04AA01',
    group: 'Gastroenterología',
    aware: 'Access',
    routes: ['VO', 'IV'],
    indications: [
      { 
        name: 'Vómito / Náuseas (Emesis Severa)', 
        doseMgPerKgDay: 0.45, // 0.15 mg/kg por dosis, max 3 veces al día
        maxDailyDoseMg: 24, 
        maxSingleDoseMg: 8, 
        defaultIntervals: [8], 
        defaultDurations: [1, 3] 
      }
    ],
    concentrations: [
      { label: '8mg/4mL (Ampolla)', mg: 8, ml: 4, form: 'ampoule' },
      { label: '4mg (Tableta ODT)', mg: 4, ml: 1, form: 'tablet' },
      { label: '8mg (Tableta ODT)', mg: 8, ml: 1, form: 'tablet' }
    ],
    alerts: [
      {
        type: 'blackbox',
        condition: () => true,
        message: 'Prolongación dosis-dependiente del intervalo QT. Administrar IV en infusión lenta (no menor a 15 min) si se usan dosis altas.',
        severity: 'high'
      }
    ]
  }
];

/**
 * Adapter converting a Drug to the full Medication interface for UI and engine compatibility.
 */
export function drugToMedication(drug: Drug): Medication {
  const mapRoute = (r: string): RouteOfAdmin => {
    const lower = r.toLowerCase();
    if (lower === 'vo') return 'oral';
    if (lower === 'iv') return 'iv';
    if (lower === 'im') return 'im';
    if (lower === 'vr') return 'rectal';
    if (lower === 'sc') return 'sc';
    if (lower === 'inh') return 'inhalatoria';
    if (lower === 'sl') return 'sublingual';
    return (lower as RouteOfAdmin) || 'oral';
  };

  const mapCategory = (grp: string): DrugCategory => {
    if (grp.includes('Antibiótico')) return 'Antibióticos';
    if (grp.includes('Analgésico') || grp.includes('AINE')) return 'Analgésicos';
    if (grp.includes('Gastro')) return 'Gastroenterología';
    if (grp.includes('Respiratorio') || grp.includes('Urgencia')) return 'Urgencias / Respiratorio';
    return 'Todos';
  };

  const obstetricAlert = drug.alerts.find(a => a.type === 'obstetric');
  const renalAlert = drug.alerts.find(a => a.type === 'renal');
  const blackboxAlert = drug.alerts.find(a => a.type === 'blackbox');

  return {
    id: drug.id,
    name: drug.genericName,
    commercialNames: drug.commercialNames,
    category: mapCategory(drug.group),
    therapeuticClass: `${drug.group} (ATC: ${drug.atc})`,
    atcCode: drug.atc,
    awareCategory: drug.aware,
    shortDescription: `${drug.genericName} - ${drug.group}`,
    availableRoutes: drug.routes.map(mapRoute),
    concentrations: drug.concentrations.map((c, idx) => ({
      id: `${drug.id}_conc_${idx}`,
      name: c.label,
      amountMg: c.mg,
      volumeMl: c.ml,
      form: c.form === 'tablet' ? 'tablets' : c.form === 'ampoule' ? 'vial' : c.form,
      unit: c.form === 'suspension' || c.form === 'ampoule' ? 'mL' : c.form === 'drops' ? 'gotas' : 'comprimido',
      standardBottleMl: c.form === 'suspension' ? 100 : undefined,
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
    whenToUse: drug.indications.map(i => i.name),
    pearlsAndPitfalls: [
      blackboxAlert?.message,
      drug.alerts.find(a => a.type === 'hepatic')?.message,
    ].filter(Boolean) as string[],
    monitoringAndSideEffects: [],
    evidenceAndSources: [
      {
        title: 'SRS El Salvador / OMS AWaRe 2025',
        source: 'Superintendencia de Regulación Sanitaria',
        year: '2025',
        summary: `Fármaco clasificado bajo categoría OMS AWaRe: ${drug.aware}. ATC: ${drug.atc}.`
      }
    ],
    pregnancyGuidance: obstetricAlert
      ? {
          category: 'D',
          status: 'contraindicated',
          statusLabel: 'Contraindicado en 3er Trimestre',
          summary: obstetricAlert.message,
          contraindicatedInTrimester: [3],
          clinicalAlternative: 'Acetaminofén (Paracetamol) a dosis mínima eficaz',
          fetalRisks: ['Cierre precoz del ductus arterioso', 'Oligohidramnios'],
        }
      : undefined,
    renalAdjustments: renalAlert
      ? [
          {
            crClThreshold: '< 30 mL/min',
            adjustmentText: renalAlert.message,
            cautionLevel: 'severe',
          }
        ]
      : undefined,
  };
}
