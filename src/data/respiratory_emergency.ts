import { Medication } from '../types';

export const RESPIRATORY_EMERGENCY_MEDICATIONS: Medication[] = [
  {
    id: 'salbutamol',
    name: 'Salbutamol (Albuterol)',
    commercialNames: ['Ventolin', 'ProAir', 'Aerolin', 'Salbutol'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'R03AC02',
    therapeuticClass: 'Broncodilatador Agonista Beta-2 Adrenérgico de Acción Corta (SABA) (SRS 2025)',
    badgeText: 'SRS 2025 · Rescate Asma',
    shortDescription: 'Broncodilatador de rescate de primera línea para crisis de asma bronquial, broncoespasmo y bronquiolitis seleccionada.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'salbu-inhalador-100mcg',
        name: 'Aerosol Inhalador Presurizado 100 mcg / dosis (SRS 2025)',
        amountMg: 0.1,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puffs',
        notes: '200 dosis (100 mcg por disparo / puff)'
      },
      {
        id: 'salbu-gotas-nebu-5mg',
        name: 'Solución para Nebulización al 0.50% (5 mg/mL) (SRS 2025)',
        amountMg: 5,
        volumeMl: 1,
        form: 'drops',
        unit: 'gotas',
        notes: 'Presentación oficial SRS 2025 (1 gota ≈ 0.25 mg; 20 gotas = 1 mL = 5 mg)'
      }
    ],
    indications: [
      {
        id: 'salbu-ind-crisis-puff',
        name: 'Crisis Asmática Leve a Moderada (con Aerocámara)',
        recommendedDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 4,
        frequencyPerDay: 6,
        intervalHours: 4,
        durationDays: '3-5 días',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 8,
        description: 'Pediátrico: 2 a 4 puffs con cámara espaciadora cada 20 min en la 1ra hora (luego cada 4-6h). Adultos: 4 a 8 puffs.'
      },
      {
        id: 'salbu-ind-nebu-pediatrica',
        name: 'Nebulización en Crisis Asmática Severa',
        recommendedDoseMgPerKgPerDay: 0.15,
        minDoseMgPerKgPerDay: 0.15,
        maxDoseMgPerKgPerDay: 0.15,
        fixedAdultDoseMg: 5,
        frequencyPerDay: 6,
        intervalHours: 4,
        durationDays: 'En urgencias',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 5,
        isDosePerKgPerDose: true,
        description: '0.15 mg/kg por nebulización (mínimo 1.25 mg = 5 gotas; máx 5 mg = 20 gotas) diluido en 3 mL de solución salina con flujo de O2 a 6-8 L/min.'
      }
    ],
    whenToUse: [
      'Crisis asmática aguda y sibilancias inducidas por infección viral.',
      'Prevención y tratamiento del broncoespasmo inducido por ejercicio físico.',
      'Tratamiento de urgencia de la hiperpotasemia severa (desplaza potasio intracelularmente).'
    ],
    pearlsAndPitfalls: [
      'El uso de inhalador MDI con aerocámara con válvula es IGUAL O MÁS EFICAZ que la nebulización y produce menos taquicardia y menor diseminación de aerosoles.',
      'Efectos beta-adrenérgicos esperados: taquicardia sinusal, temblor fino de manos e hipopotasemia transitoria.',
      'Si el paciente necesita más de 2 botes de salbutamol al año, su asma NO está controlada y requiere corticoide inhalado diario.'
    ],
    monitoringAndSideEffects: ['Frecuencia cardíaca, trabajo respiratorio, temblor muscular, potasio sérico en uso repetido.'],
    evidenceAndSources: [
      {
        title: 'Global Initiative for Asthma (GINA) 2023 Strategy Report',
        source: 'ginasthma.org',
        summary: 'SABA en monoterapia sin corticoide asociado ya no se recomienda como mantenimiento por aumento de exacerbaciones graves.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador R03AC02',
        summary: 'Salbutamol sulfato 100 mcg/dosis aerosol y 0.50% solución para nebulización.'
      }
    ]
  },
  {
    id: 'ipratropio',
    name: 'Bromuro de Ipratropio',
    commercialNames: ['Atrovent', 'Iprabronc', 'Berodual (con fenoterol)'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'R03BB01',
    therapeuticClass: 'Anticolinérgico Broncodilatador Antimuscarínico (SAMA) (SRS 2025)',
    badgeText: 'SRS 2025 · Coadyuvante Crisis',
    shortDescription: 'Broncodilatador anticolinérgico coadyuvante de salbutamol en la primera hora de crisis asmática moderada a severa o EPOC.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'ipra-nebu-250',
        name: 'Solución para Nebulización 250 mcg / mL (SRS 2025)',
        amountMg: 0.25,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (250 mcg/mL)'
      },
      {
        id: 'ipra-aero-20',
        name: 'Aerosol Inhalador 20 mcg / dosis (SRS 2025)',
        amountMg: 0.02,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puffs',
        notes: '200 dosis (20 mcg/puff)'
      }
    ],
    indications: [
      {
        id: 'ipra-ind-crisis-asma-peds',
        name: 'Crisis Asmática Severa Pediátrica (con Salbutamol)',
        fixedAdultDoseMg: 0.5,
        frequencyPerDay: 3,
        intervalHours: 1,
        durationDays: 'Solo 1ra hora (3 dosis)',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 0.5,
        description: 'Niños <5 años: 250 mcg (1 mL). Niños ≥5 años y adultos: 500 mcg (2 mL). Mezclado con salbutamol en la nebulización cada 20 min en la 1ra hora.'
      }
    ],
    whenToUse: [
      'Crisis asmática moderada o severa en el servicio de urgencias añadido a salbutamol durante la primera hora.',
      'Exacerbación aguda de EPOC en adultos.'
    ],
    pearlsAndPitfalls: [
      'El mayor beneficio clínico se obtiene en las primeras 3 dosis (primera hora de llegada a urgencias). Su uso posterior en hospitalización no aporta beneficio adicional significativo.',
      'Proteger los ojos durante la nebulización con mascarilla bien ajustada para evitar midriasis unilateral o aumento de presión intraocular.'
    ],
    monitoringAndSideEffects: ['Sequedad de boca, sabor amargo, tos irritativa.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador R03BB01',
        summary: 'Ipratropio bromuro 250 mcg/mL solución para nebulización y 20 mcg/dosis aerosol.'
      }
    ]
  },
  {
    id: 'dexametasona',
    name: 'Dexametasona',
    commercialNames: ['Decadron', 'Fortecortin', 'Alin', 'Dexacort'],
    category: 'Corticoides',
    atcCode: 'H02AB02',
    therapeuticClass: 'Glucocorticoide Sintético de Alta Potencia y Larga Duración (SRS 2025)',
    badgeText: 'SRS 2025 · Potente Corticoide',
    shortDescription: 'Corticoide de elección en Crup laríngeo (laringotraqueítis aguda), edema cerebral vasogénico y antiemético en quimioterapia.',
    availableRoutes: ['iv', 'im', 'oral'],
    concentrations: [
      {
        id: 'dexa-amp-4mg',
        name: 'Líquidos Parenterales 4 mg / mL Ampolla (SRS 2025)',
        amountMg: 4,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (fosfato disódico) IV/IM'
      },
      {
        id: 'dexa-comp-4mg',
        name: 'Sólidos Orales (Tabletas) 4 mg (SRS 2025)',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tabletas orales de 4 mg'
      }
    ],
    indications: [
      {
        id: 'dexa-ind-crup',
        name: 'Crup Laríngeo (Laringitis Aguda Estenosante)',
        recommendedDoseMgPerKgPerDay: 0.15,
        minDoseMgPerKgPerDay: 0.15,
        maxDoseMgPerKgPerDay: 0.6,
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '1 dosis única',
        maxDailyDoseMg: 16,
        maxSingleDoseMg: 10,
        isDosePerKgPerDose: true,
        description: 'Dosis única de 0.15 mg/kg (en casos severos hasta 0.6 mg/kg, máx 10 mg) VO o IM. La ampolla IV puede administrarse por vía oral mezclada con almíbar.'
      },
      {
        id: 'dexa-ind-edema-cerebral',
        name: 'Edema Cerebral Vasogénico / Tumoral Adulto',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Según evolución',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 16,
        description: 'Dosis inicial de 10 mg IV seguido de 4 mg cada 6 horas IV o VO.'
      }
    ],
    whenToUse: [
      'Crup laríngeo en urgencias pediátricas (dosis única reduce dramáticamente la intubación y reconsultas).',
      'Edema cerebral asociado a tumores cerebrales o metástasis.',
      'Crisis asmática severa (alternativa en dosis única o 2 días).'
    ],
    pearlsAndPitfalls: [
      'Potencia glucocorticoide 25 veces mayor que hidrocortisona, con nulo efecto mineralocorticoide (no retiene sodio).',
      'Vida media biológica muy prolongada (36 a 54 horas), lo que permite que una sola dosis cubra el pico de inflamación en el crup.',
      'Sabor amargo intenso si se toma la ampolla oral: mezclar con una cucharadita de mermelada o jarabe dulce.'
    ],
    monitoringAndSideEffects: ['Hiperglucemia aguda, hipertensión arterial, agitación o euforia.'],
    evidenceAndSources: [
      {
        title: 'Cochrane Review: Glucocorticoids for Croup in Children',
        source: 'Cochrane Database Syst Rev. 2018',
        summary: 'Dexametasona oral o parenteral en dosis única es el tratamiento de elección para el crup de cualquier gravedad.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador H02AB02',
        summary: 'Dexametasona (fosfato) 4 mg/mL líquidos parenterales IV/IM.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 10 mL/min', adjustmentText: 'No requiere ajuste de dosis en insuficiencia renal', cautionLevel: 'normal' }
    ]
  },
  {
    id: 'hidrocortisona',
    name: 'Hidrocortisona Succinato Sódico',
    commercialNames: ['Solu-Cortef', 'Hidrocort', 'Actocortina'],
    category: 'Corticoides',
    atcCode: 'H02AB09',
    therapeuticClass: 'Glucocorticoide Natural de Acción Rápida con Efecto Mineralocorticoide (SRS 2025)',
    badgeText: 'SRS 2025 · Choque e Insuficiencia Suprarrenal',
    shortDescription: 'Corticoide de acción inmediata para shock anafiláctico, insuficiencia suprarrenal aguda (crisis addisoniana) y crisis asmática grave.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'hidro-vial-500',
        name: 'Sólidos Parenterales 500 mg Vial (SRS 2025)',
        amountMg: 500,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (succinato sódico)'
      }
    ],
    indications: [
      {
        id: 'hidro-ind-crisis-adrenal-peds',
        name: 'Crisis Suprarrenal Aguda / Choque Séptico Pediátrico',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 50,
        maxDoseMgPerKgPerDay: 100,
        fixedAdultDoseMg: 100,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '1-3 días',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 100,
        isDosePerKgPerDose: true,
        description: 'Bolo inicial de 50 a 100 mg/m² o 2 a 4 mg/kg IV, seguido de 2 mg/kg cada 6 horas.'
      },
      {
        id: 'hidro-ind-adults',
        name: 'Adultos: 100 mg a 200 mg IV cada 6-8 horas',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 800,
        maxSingleDoseMg: 200,
        description: '100 a 200 mg IV cada 6 horas en shock anafiláctico o séptico refractario.'
      }
    ],
    whenToUse: [
      'Crisis de insuficiencia suprarrenal aguda con hipotensión refractaria.',
      'Shock anafiláctico (segunda línea tras la adrenalina, para prevenir la respuesta de fase tardía).',
      'Crisis asmática refractaria con riesgo vital inminente.'
    ],
    pearlsAndPitfalls: [
      'En anafilaxia el fármaco salvador de primera línea es la ADRENALINA; los corticoides tardan 4 a 6 horas en ejercer su efecto genómico.',
      'Posee actividad mineralocorticoide intrínseca (retiene sodio y elimina potasio).',
      'Reconstituir con el diluyente adjunto y administrar en bolo IV en 3-5 minutos.'
    ],
    monitoringAndSideEffects: ['Glucemia, electrolitos séricos (sodio y potasio), presión arterial.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador H02AB09',
        summary: 'Hidrocortisona (succinato sódico) 500 mg sólidos parenterales IM, IV.'
      }
    ]
  },
  {
    id: 'adrenalina',
    name: 'Epinefrina (Adrenalina)',
    commercialNames: ['Adrenalina', 'EpiPen', 'Adrenalin'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'C01CA24',
    therapeuticClass: 'Agonista Adrenérgico Alfa y Beta Potente de Emergencia (SRS 2025)',
    badgeText: 'SRS 2025 · Fármaco de Paro y Anafilaxia',
    shortDescription: 'Fármaco salvador de vidas indispensable en Anafilaxia severa (IM), Paro Cardiorrespiratorio (IV) y Crup severo con estridor (nebulizado).',
    availableRoutes: ['im', 'iv', 'inhalatoria'],
    concentrations: [
      {
        id: 'epi-amp-1mg-ml',
        name: 'Líquidos Parenterales 1 mg/mL (1:1000) Ampolla (SRS 2025)',
        amountMg: 1,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025. 1 mL = 1 mg = 1000 mcg'
      }
    ],
    indications: [
      {
        id: 'epi-ind-anafilaxia',
        name: 'Anafilaxia Aguda (Inyección IM Vasto Lateral)',
        recommendedDoseMgPerKgPerDay: 0.01,
        minDoseMgPerKgPerDay: 0.01,
        maxDoseMgPerKgPerDay: 0.01,
        fixedAdultDoseMg: 0.5,
        frequencyPerDay: 1,
        intervalHours: 0.25,
        durationDays: 'Dosis única de rescate',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 0.5,
        isDosePerKgPerDose: true,
        description: '0.01 mg/kg (0.01 mL/kg de ampolla 1:1000 sin diluir) por vía INTRAMUSCULAR profunda en cara anterolateral del muslo (máx 0.3 mg en niños y 0.5 mg en adultos). Repetir cada 5-15 min si no mejora.'
      },
      {
        id: 'epi-ind-crup-nebulizado',
        name: 'Crup Severo con Estridor de Reposo (Nebulización L-Adrenalina)',
        recommendedDoseMgPerKgPerDay: 0.5,
        minDoseMgPerKgPerDay: 0.5,
        maxDoseMgPerKgPerDay: 0.5,
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 2,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5,
        isDosePerKgPerDose: true,
        description: '0.5 mL/kg de adrenalina 1:1000 (máximo 5 mL = 5 mg) en 3 mL de solución salina nebulizado con O2 al 100% en 15 minutos.'
      },
      {
        id: 'epi-ind-pcr',
        name: 'Paro Cardiorrespiratorio (PALS / ACLS)',
        recommendedDoseMgPerKgPerDay: 0.01,
        fixedAdultDoseMg: 1,
        frequencyPerDay: 1,
        intervalHours: 0.05,
        durationDays: 'Durante RCP',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 1,
        isDosePerKgPerDose: true,
        description: '0.01 mg/kg IV (0.1 mL/kg de dilución 1:10,000) cada 3-5 minutos de RCP. Adultos: 1 mg IV en bolo.'
      }
    ],
    whenToUse: [
      'Anafilaxia de cualquier origen (alimentos, picaduras, fármacos) con compromiso respiratorio o hemodinámico.',
      'Paro cardiorrespiratorio (ritmos no desfibrilables y tras 2da desfibrilación en ritmos desfibrilables).',
      'Crup laríngeo moderado a grave con estridor inspiratorio en reposo y tiraje.'
    ],
    pearlsAndPitfalls: [
      '¡VÍA CORRECTA EN ANAFILAXIA!: INTRAMUSCULAR en el muslo (vasto externo). NUNCA administrar en bolo IV en anafilaxia (riesgo de fibrilación ventricular e infarto de miocardio). La vía IV se reserva exclusivamente para shock refractario con bomba de infusión continua o PCR.',
      'Efecto rebote en crup: vigilar al paciente en observación al menos 2 a 4 horas tras la nebulización de adrenalina antes de considerar el alta.',
      'No hay contraindicación absoluta para la adrenalina en una anafilaxia con riesgo vital.'
    ],
    monitoringAndSideEffects: ['Monitorización cardíaca continua, presión arterial, frecuencia cardíaca, temblor, palidez.'],
    evidenceAndSources: [
      {
        title: 'World Allergy Organization (WAO) Anaphylaxis Guidelines 2020',
        source: 'World Allergy Organ J. 2020;13(10):100472',
        summary: 'La adrenalina intramuscular temprana es el tratamiento fundamental de primera línea.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador C01CA24',
        summary: 'Epinefrina 1 mg/mL (1:1000) líquidos parenterales SC/IM/IV.'
      }
    ]
  },
  {
    id: 'difenhidramina',
    name: 'Difenhidramina Clorhidrato',
    commercialNames: ['Benadryl', 'Difidryl', 'Histadyl'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'R06AA02',
    therapeuticClass: 'Antihistamínico H1 de Primera Generación con Efecto Anticolinérgico (SRS 2025)',
    badgeText: 'SRS 2025 · Antialérgico Urgencias',
    shortDescription: 'Antihistamínico inyectable para urticaria aguda, prurito severo, reacciones transfusionales y antídoto de distonías agudas por metoclopramida.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'difen-amp-50',
        name: 'Líquidos Parenterales 50 mg / mL Ampolla (SRS 2025)',
        amountMg: 50,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IM/IV'
      }
    ],
    indications: [
      {
        id: 'difen-ind-urticaria-peds',
        name: 'Reacción Alérgica / Urticaria Aguda Pediátrica',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 1.25,
        fixedAdultDoseMg: 50,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '1-3 días',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 50,
        isDosePerKgPerDose: true,
        description: '1 a 1.25 mg/kg por toma cada 6 horas IV lenta o IM profunda (máx 50 mg por dosis o 300 mg/día).'
      },
      {
        id: 'difen-ind-distonia-adult',
        name: 'Tratamiento de Distonía Aguda Extrapiramidal Adulto',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 6,
        durationDays: '1-2 días',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 50,
        description: '25 a 50 mg IV lenta en 2-3 minutos. El espasmo muscular y la crisis oculógira revierten en pocos minutos.'
      }
    ],
    whenToUse: [
      'Urticaria aguda generalizada y angioedema leve.',
      'Reacciones distónicas agudas secundarias a metoclopramida o neurolépticos.',
      'Premedicación en transfusiones o quimioterapia.'
    ],
    pearlsAndPitfalls: [
      'Efecto sedante y somnolencia marcados por bloqueo H1 central.',
      'En anafilaxia es solo coadyuvante sintomático de 2da línea: NUNCA sustituye a la adrenalina.',
      'Efectos anticolinérgicos colaterales: boca seca, visión borrosa y retención urinaria.'
    ],
    monitoringAndSideEffects: ['Nivel de sedación, frecuencia cardíaca.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador R06AA02',
        summary: 'Difenhidramina clorhidrato 50 mg/mL líquidos parenterales IM, IV.'
      }
    ]
  },
  {
    id: 'loratadina',
    name: 'Loratadina',
    commercialNames: ['Claritin', 'Clarityne', 'Alerpriv', 'Histalor'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'R06AX13',
    therapeuticClass: 'Antihistamínico H1 de Segunda Generación No Sedante (SRS 2025)',
    badgeText: 'SRS 2025 · Antialérgico Oral',
    shortDescription: 'Antihistamínico oral de toma única diaria para rinitis alérgica estacional y urticaria crónica sin causar somnolencia.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'lora-jarabe-1mg',
        name: 'Líquidos Orales (Jarabe) 1 mg/mL (5 mg / 5 mL) (SRS 2025)',
        amountMg: 5,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial pediátrica SRS 2025 (1 mg/mL)'
      },
      {
        id: 'lora-comp-10mg',
        name: 'Sólidos Orales 10 mg (SRS 2025)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial en tabletas SRS 2025'
      }
    ],
    indications: [
      {
        id: 'lora-ind-peds-menor30k',
        name: 'Niños de 2 a 12 años con Peso ≤ 30 kg (5 mg/día)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-14 días',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 5,
        description: '5 mg (5 mL del jarabe 1 mg/mL) una vez al día.'
      },
      {
        id: 'lora-ind-adults-mayor30k',
        name: 'Adultos y Niños con Peso > 30 kg (10 mg/día)',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-30 días',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '10 mg (1 comprimido o 10 mL de jarabe) una vez al día vía oral.'
      }
    ],
    whenToUse: [
      'Rinitis alérgica con rinorrea, estornudos y prurito nasal.',
      'Urticaria aguda y crónica idiopática.',
      'Conjuntivitis alérgica estacional.'
    ],
    pearlsAndPitfalls: [
      'No cruza la barrera hematoencefálica a dosis recomendadas, evitando la somnolencia y disminución del rendimiento escolar/laboral.',
      'Comienzo de acción en 1 a 3 horas y duración de efecto superior a 24 horas.'
    ],
    monitoringAndSideEffects: ['Cefalea leve, fatiga infrecuente.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador R06AX13',
        summary: 'Loratadina 1 mg/mL líquidos orales y 10 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: '10 mg cada 48 horas en adultos', cautionLevel: 'moderate' }
    ]
  }
];
