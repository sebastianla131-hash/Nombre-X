import { Medication } from '../types';

export const ENDOCRINOLOGY_MEDICATIONS: Medication[] = [
  {
    id: 'metformina',
    name: 'Metformina',
    commercialNames: ['Glucophage', 'Dianben', 'Metform', 'Predial'],
    atcCode: 'A10BA02',
    category: 'Endocrinología',
    therapeuticClass: 'Biguanida / Antidiabético Oral de Primera Elección',
    shortDescription: 'Fármaco de 1ra línea en DM2. Reduce la producción hepática de glucosa y mejora la sensibilidad a la insulina sin provocar hipoglucemia en monoterapia.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'metf-850-tab',
        name: 'Comprimidos 850 mg',
        amountMg: 850,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar con o inmediatamente después de las comidas principales para reducir molestias GI.'
      },
      {
        id: 'metf-500-tab',
        name: 'Comprimidos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis inicial recomendada para titulación progresiva.'
      },
      {
        id: 'metf-1000-tab',
        name: 'Comprimidos 1000 mg (1 g)',
        amountMg: 1000,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis de mantenimiento en pacientes tolerantes.'
      }
    ],
    indications: [
      {
        id: 'dm2-adultos',
        name: 'Diabetes Mellitus Tipo 2 (Adultos)',
        description: 'Monoterapia o combinada con otros antidiabéticos o insulina. Dosis inicial 500-850 mg c/12-24h; titular cada 1-2 semanas según glucemia.',
        recommendedDoseMgPerKgPerDay: 20,
        fixedAdultDoseMg: 850,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Tratamiento crónico continuo',
        maxDailyDoseMg: 2550,
        maxSingleDoseMg: 1000
      },
      {
        id: 'dm2-pediatrico',
        name: 'Diabetes Mellitus Tipo 2 (Pediátrico ≥ 10 años)',
        description: 'Iniciar con 500 mg una vez al día con la cena; incrementar semanalmente 500 mg hasta máx 2000 mg/día dividido en 2 tomas.',
        recommendedDoseMgPerKgPerDay: 15,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Tratamiento crónico continuo',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000
      },
      {
        id: 'sop-resistencia',
        name: 'Síndrome de Ovario Poliquístico (SOP)',
        description: 'Tratamiento de la resistencia a la insulina y anovulación en SOP.',
        fixedAdultDoseMg: 850,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Tratamiento continuo según ginecología',
        maxDailyDoseMg: 1700,
        maxSingleDoseMg: 850
      }
    ],
    whenToUse: [
      'Primera línea farmacológica en pacientes con diagnóstico confirmado de Diabetes Mellitus Tipo 2.',
      'Pacientes con prediabetes con alto riesgo de progresión (IMC ≥ 35 kg/m², < 60 años, mujeres con antecedente de DM gestacional).',
      'Síndrome de Ovario Poliquístico con resistencia a la insulina comprobada.'
    ],
    pearlsAndPitfalls: [
      'Titulación lenta (iniciar con 500-850 mg/día con la comida) reduce náuseas, diarrea y dolor abdominal.',
      'Suspender 48 horas antes de estudios con contraste radiológico yodado si la TFGe es < 60 mL/min.',
      'El uso a largo plazo (> 4 años) puede causar deficiencia de Vitamina B12 por malabsorción ileal; monitorizar niveles anualmente.'
    ],
    monitoringAndSideEffects: [
      'Insuficiencia renal severa (TFGe < 30 mL/min/1.73m²)',
      'Acidosis metabólica aguda o crónica (incluyendo cetoacidosis diabética)',
      'Insuficiencia cardíaca aguda inestable o shock séptico/hipovolémico',
      'Insuficiencia hepática grave'
    ],
    renalAdjustments: [
      {
        crClThreshold: 'TFGe 30-44 mL/min',
        adjustmentText: 'Reducir dosis máxima al 50% (máx 1000 mg/día). Monitorizar función renal cada 3 meses.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: 'TFGe < 30 mL/min',
        adjustmentText: 'CONTRAINDICADO formalmente por riesgo elevado de acidosis láctica.',
        cautionLevel: 'severe'
      }
    ],
    evidenceAndSources: [
      {
        title: 'ADA Standards of Care in Diabetes 2025',
        source: 'American Diabetes Association',
        summary: 'Metformin remains the preferred initial pharmacologic agent for the treatment of type 2 diabetes.'
      }
    ]
  },
  {
    id: 'levotiroxina',
    name: 'Levotiroxina Sódica',
    commercialNames: ['Eutirox', 'Synthroid', 'Levothroid'],
    atcCode: 'H03AA01',
    category: 'Endocrinología',
    therapeuticClass: 'Hormona Tiroidea Sintética (Levotiroxina T4)',
    shortDescription: 'Terapia de reemplazo hormonal de primera línea para hipotiroidismo congénito o adquirido y supresión de TSH en cáncer de tiroides.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'levo-50-tab',
        name: 'Comprimidos 50 mcg (0.05 mg)',
        amountMg: 0.05,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar en ayunas con agua 30-60 min antes del desayuno.'
      },
      {
        id: 'levo-100-tab',
        name: 'Comprimidos 100 mcg (0.1 mg)',
        amountMg: 0.1,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis estándar de reemplazo en adultos.'
      },
      {
        id: 'levo-25-tab',
        name: 'Comprimidos 25 mcg (0.025 mg)',
        amountMg: 0.025,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis inicial en ancianos, cardiopatía isquémica o titulación fina.'
      }
    ],
    indications: [
      {
        id: 'hipotiroidismo-adulto',
        name: 'Hipotiroidismo Primario en Adultos',
        description: 'Dosis de reemplazo pleno calculada a 1.6 mcg/kg/día en adultos jóvenes sanos. En ancianos o con cardiopatía iniciar con 25-50 mcg/día.',
        recommendedDoseMgPerKgPerDay: 0.0016, // 1.6 mcg = 0.0016 mg
        fixedAdultDoseMg: 0.1, // 100 mcg
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Tratamiento crónico continuo',
        maxDailyDoseMg: 0.3,
        maxSingleDoseMg: 0.3
      },
      {
        id: 'hipotiroidismo-congenito',
        name: 'Hipotiroidismo Congénito (Neonatos y Lactantes)',
        description: 'Iniciar inmediatamente tras screening neonatal: 10 a 15 mcg/kg/día para garantizar desarrollo neurológico adecuado.',
        recommendedDoseMgPerKgPerDay: 0.012, // 12 mcg/kg/día
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Tratamiento continuo vitalicio',
        maxDailyDoseMg: 0.05,
        maxSingleDoseMg: 0.05
      },
      {
        id: 'hipotiroidismo-gestacional',
        name: 'Hipotiroidismo en el Embarazo',
        description: 'Los requerimientos suelen aumentar un 25-30% desde las primeras semanas de gestación. TSH diana < 2.5 mUI/L.',
        recommendedDoseMgPerKgPerDay: 0.002,
        fixedAdultDoseMg: 0.125,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Durante toda la gestación',
        maxDailyDoseMg: 0.3,
        maxSingleDoseMg: 0.3
      }
    ],
    whenToUse: [
      'Hipotiroidismo clínico o subclínico con TSH elevada.',
      'Coma mixedematoso (asociado a hidrocortisona intravenosa).',
      'Hipotiroidismo congénito en tamizaje neonatal.'
    ],
    pearlsAndPitfalls: [
      'Debe ingerirse con estómago vacío (al menos 30 a 60 minutos antes del desayuno con agua pura). El café, la soya, el calcio y el hierro quelan la levotiroxina reduciendo su absorción hasta un 50%.',
      'Control de TSH a las 6–8 semanas de iniciar o modificar dosis (tiempo requerido para alcanzar estado estacionario).',
      'En ancianos con enfermedad coronaria, iniciar siempre "low and slow" (12.5–25 mcg/día) para evitar angina o arritmias.'
    ],
    monitoringAndSideEffects: [
      'Tirotoxicosis no tratada',
      'Infarto agudo de miocardio reciente no estabilizado',
      'Insuficiencia suprarrenal no corregida (debe iniciarse primero corticoide antes que levotiroxina para prevenir crisis suprarrenal)'
    ],
    evidenceAndSources: [
      {
        title: 'Guías de Manejo de Hipotiroidismo ATA 2024',
        source: 'American Thyroid Association',
        summary: 'Levothyroxine is the therapy of choice for hypothyroidism.'
      }
    ]
  },
  {
    id: 'insulina-humana-regular',
    name: 'Insulina Humana Regular',
    commercialNames: ['Humulin R', 'Novolin R', 'Insuman Rapid'],
    atcCode: 'A10AB01',
    category: 'Endocrinología',
    therapeuticClass: 'Insulina Humana de Acción Rápida (Cristalina)',
    shortDescription: 'Insulina de acción rápida y única apta para uso intravenoso directo o infusión continua en cetoacidosis diabética y emergencias hiperglucémicas.',
    availableRoutes: ['sc', 'iv', 'im'],
    concentrations: [
      {
        id: 'ins-reg-100ui-vial',
        name: 'Vial 100 UI/mL (Frasco 10 mL = 1000 UI)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'UI',
        notes: '1 mL contiene 100 UI. Administrar con jeringa calibrada para insulina U-100.'
      }
    ],
    indications: [
      {
        id: 'cetoacidosis-diabetica',
        name: 'Cetoacidosis Diabética (CAD) / EHH',
        description: 'Protocolo de infusión IV continua: bolo 0.1 UI/kg IV seguido de infusión a 0.1 UI/kg/hora. Objetivo: descenso glucémico 50-75 mg/dL/h.',
        recommendedDoseMgPerKgPerDay: 2.4, // representativo en UI/kg/día
        isDosePerKgPerDose: true,
        fixedAdultDoseMg: 7, // 7 UI bolo en 70 kg
        frequencyPerDay: 24,
        intervalHours: 1,
        durationDays: 'Hasta resolución de cetonemia y anión gap',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 20
      },
      {
        id: 'hiperglucemia-prandial',
        name: 'Control Glucémico Hospitalario / Esquema Corrección',
        description: 'Administración subcutánea 30 minutos antes de alimentos principales según glucemia capilar y carbohidratos.',
        recommendedDoseMgPerKgPerDay: 0.5,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Según requerimientos de internación',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 25
      },
      {
        id: 'hiperpotasemia-severa',
        name: 'Hiperpotasemia Severa (Desplazamiento Intracelular)',
        description: '10 UI de Insulina Regular IV administradas conjuntamente con 50 mL de Dextrosa al 50% (25 g de glucosa) en 15-30 minutos.',
        fixedAdultDoseMg: 10, // 10 UI
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única de urgencia',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 10
      }
    ],
    whenToUse: [
      'Cetoacidosis Diabética (CAD) y Estado Hiperosmolar Hiperglucémico (EHH).',
      'Tratamiento de emergencia de la hiperpotasemia severa K+ > 6.0 mEq/L (con Dextrosa al 50%).',
      'Control de glucemia peroperatoria y en cuidados intensivos.'
    ],
    pearlsAndPitfalls: [
      'En CAD: NO iniciar insulina si el potasio sérico es < 3.3 mEq/L (riesgo de paro cardíaco o arritmia letal). Reponer potasio primero.',
      'Vía SC: Inicio en 30 min, pico a las 2-3 horas, duración 6-8 horas.',
      'Vía IV: Vida media extremadamente corta (5-10 minutos), efecto casi inmediato.'
    ],
    monitoringAndSideEffects: [
      'Hipoglucemia documentada (< 70 mg/dL)',
      'Hipopotasemia no corregida (K+ < 3.3 mEq/L)'
    ],
    evidenceAndSources: [
      {
        title: 'Management of Hyperglycemic Emergencies in Adults',
        source: 'ADA / EASD Consensus Statement 2024',
        summary: 'Standard of care in DKA and HHS requires continuous regular insulin infusion.'
      }
    ]
  },
  {
    id: 'glibenclamida',
    name: 'Glibenclamida',
    commercialNames: ['Daonil', 'Euglucon', 'Glidiabet'],
    atcCode: 'A10BB01',
    category: 'Endocrinología',
    therapeuticClass: 'Sulfonilurea de 2.ª Generación / Secretagogo de Insulina',
    shortDescription: 'Estimula la secreción pancreática de insulina por bloqueo de canales de K-ATP. Indicada en DM2.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'glib-5-tab',
        name: 'Comprimidos 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar inmediatamente antes del desayuno o de la primera comida principal.'
      }
    ],
    indications: [
      {
        id: 'dm2-glibenclamida',
        name: 'Diabetes Mellitus Tipo 2',
        description: 'Dosis inicial 2.5 a 5 mg/día antes del desayuno; titular semanalmente según control glucémico hasta un máximo de 15 mg/día.',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Tratamiento crónico',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 10
      }
    ],
    whenToUse: [
      'Pacientes con DM2 no controlada adecuadamente con metformina y cambios en estilo de vida cuando no se dispone de inhibidores SGLT2 o análogos GLP-1.'
    ],
    pearlsAndPitfalls: [
      'Mayor riesgo de hipoglucemia prolongada y severa en comparación con sulfonilureas modernas (Gliclazida, Glimepirida), especialmente en ancianos.',
      'Evitar en insuficiencia renal moderada a severa por acumulación de metabolitos activos.'
    ],
    monitoringAndSideEffects: [
      'Diabetes Mellitus Tipo 1',
      'Cetoacidosis diabética',
      'Insuficiencia renal moderada-severa (TFGe < 45 mL/min)',
      'Insuficiencia hepática grave'
    ],
    evidenceAndSources: [
      {
        title: 'Listado Oficial de Medicamentos Esenciales 2025',
        source: 'SRS El Salvador / OMS',
        summary: 'Antidiabético oral sulfonilurea para atención primaria.'
      }
    ]
  }
];
