import { Medication } from '../types';

export const CARDIOVASCULAR_MEDICATIONS: Medication[] = [
  {
    id: 'furosemida',
    name: 'Furosemida',
    commercialNames: ['Lasix', 'Seguril', 'Furosemida'],
    category: 'Cardiovascular',
    atcCode: 'C03CA01',
    therapeuticClass: 'Diurético del Asa de Henle de Alta Eficacia (SRS 2025)',
    badgeText: 'SRS 2025 · Diurético de Asa',
    shortDescription: 'Diurético de asa para sobrecarga de volumen, edema agudo de pulmón, insuficiencia cardíaca y síndrome nefrótico.',
    availableRoutes: ['iv', 'oral', 'im'],
    concentrations: [
      {
        id: 'furo-amp-10mg',
        name: 'Líquidos Parenterales 10 mg/mL (20 mg / 2 mL) Ampolla (SRS 2025)',
        amountMg: 20,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (10 mg/mL IV/IM)'
      },
      {
        id: 'furo-gotas-10mg',
        name: 'Líquidos Orales (Gotas) 10 mg / mL (SRS 2025)',
        amountMg: 10,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        notes: 'Presentación pediátrica oral SRS 2025'
      },
      {
        id: 'furo-comp-40mg',
        name: 'Sólidos Orales 40 mg (SRS 2025)',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial en comprimidos SRS 2025'
      }
    ],
    indications: [
      {
        id: 'furo-ind-edema-peds-iv',
        name: 'Edema / Sobrecarga de Volumen Pediátrico IV',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Según balance hídrico',
        maxDailyDoseMg: 120,
        maxSingleDoseMg: 40,
        isDosePerKgPerDose: true,
        description: '1 a 2 mg/kg por dosis IV lenta en 2-5 minutos cada 8 a 12 horas (máx 6 mg/kg/día).'
      },
      {
        id: 'furo-ind-edema-adult-iv',
        name: 'Edema Agudo de Pulmón / Insuficiencia Cardíaca Adulto',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 80,
        description: '20 a 40 mg IV en bolo lento (hasta 80-100 mg en pacientes con insuficiencia renal o uso crónico de diuréticos).'
      }
    ],
    whenToUse: [
      'Edema agudo de pulmón cardiogénico (efecto venodilatador inmediato pre-diurético en 5 minutos).',
      'Sobrecarga hídrica en insuficiencia cardíaca congestiva, cirrosis y síndrome nefrótico.',
      'Oliguria en insuficiencia renal aguda respondedora.'
    ],
    pearlsAndPitfalls: [
      'Biodisponibilidad oral del 50%: 40 mg por vía oral equivalen aproximadamente a 20 mg por vía intravenosa.',
      'Riesgo marcado de hipopotasemia, hiponatremia, hipocalcemia y alcalosis metabólica.',
      'Ototoxicidad si se inyecta en bolo IV muy rápido (>4 mg/min).'
    ],
    monitoringAndSideEffects: ['Ionograma (potasio, sodio), creatinina, diuresis horaria, presión arterial.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador C03CA01',
        summary: 'Furosemida 40 mg sólidos orales, 10 mg/mL líquidos orales y 10 mg/mL líquidos parenterales IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr < 20 mL/min', adjustmentText: 'Puede requerir dosis individuales más elevadas (80-160 mg IV) para alcanzar la luz tubular', cautionLevel: 'moderate' }
    ]
  },
  {
    id: 'espironolactona',
    name: 'Espironolactona',
    commercialNames: ['Aldactone', 'Aldactazide', 'Espironolactona'],
    category: 'Cardiovascular',
    atcCode: 'C03DA01',
    therapeuticClass: 'Antagonista de la Aldosterona y Diurético Ahorrador de Potasio (SRS 2025)',
    badgeText: 'SRS 2025 · Ahorrador de Potasio',
    shortDescription: 'Antagonista de mineralocorticoides para insuficiencia cardíaca con fracción de eyección reducida, cirrosis con ascitis e hipertensión resistente.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'espiro-comp-25',
        name: 'Sólidos Orales 25 mg (SRS 2025)',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025'
      },
      {
        id: 'espiro-comp-100',
        name: 'Sólidos Orales 100 mg (SRS 2025)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación de 100 mg SRS 2025'
      }
    ],
    indications: [
      {
        id: 'espiro-ind-ic-adults',
        name: 'Insuficiencia Cardíaca (IC-FEyR) Adulto',
        fixedAdultDoseMg: 25,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 50,
        description: '25 mg al día (dosis inicial 12.5-25 mg/día; titular hasta 50 mg/día si potasio < 5.0 mEq/L).'
      },
      {
        id: 'espiro-ind-peds',
        name: 'Insuficiencia Cardíaca / Ascitis Pediátrica',
        recommendedDoseMgPerKgPerDay: 1.5,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 3,
        fixedAdultDoseMg: 25,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 50,
        description: '1 a 3 mg/kg/día fraccionado cada 12 o 24 horas vía oral con alimentos.'
      }
    ],
    whenToUse: [
      'Insuficiencia cardíaca clase II-IV de la NYHA con FEy ≤35% (reduce mortalidad en estudio RALES).',
      'Ascitis en cirrosis hepática (primera línea en relación 100 mg espironolactona : 40 mg furosemida).',
      'Hipertensión arterial resistente y aldosteronismo primario.'
    ],
    pearlsAndPitfalls: [
      'RIESGO DE HIPERPOTASEMIA SEVERA: Evitar si potasio sérico inicial > 5.0 mEq/L o si ClCr < 30 mL/min.',
      'Ginecomastia dolorosa en varones por bloqueo antiandrogénico.',
      'Su efecto diurético máximo tarda de 48 a 72 horas en manifestarse debido al mecanismo de transcripción nuclear.'
    ],
    monitoringAndSideEffects: ['Potasio sérico y función renal a la 1ª y 4ª semana tras iniciar o ajustar dosis.'],
    evidenceAndSources: [
      {
        title: 'The Effect of Spironolactone on Morbidity and Mortality in Severe Heart Failure (RALES)',
        source: 'N Engl J Med. 1999;341(10):709-17',
        summary: 'Demostró una reducción del 30% en el riesgo de muerte en pacientes con insuficiencia cardíaca grave.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador C03DA01',
        summary: 'Espironolactona 25 mg y 100 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis estándar', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 30 - 50 mL/min', adjustmentText: 'Iniciar con dosis baja (12.5 mg cada 24-48 horas)', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: 'Contraindicado: alto riesgo de hiperpotasemia potencialmente mortal', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'enalapril',
    name: 'Enalapril',
    commercialNames: ['Vasotec', 'Renitec', 'Enalapril'],
    category: 'Cardiovascular',
    atcCode: 'C09AA02',
    therapeuticClass: 'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) (SRS 2025)',
    badgeText: 'SRS 2025 · IECA Primera Línea',
    shortDescription: 'IECA de primera línea para hipertensión arterial, insuficiencia cardíaca, post-infarto de miocardio y nefropatía diabética.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'enal-comp-20mg',
        name: 'Sólidos Orales 20 mg (SRS 2025)',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025 (ranurado)'
      }
    ],
    indications: [
      {
        id: 'enal-ind-hta-adults',
        name: 'Hipertensión Arterial / Insuficiencia Cardíaca Adulto',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: 'Dosis inicial de 5 mg al día; titular hasta 20 mg cada 12 o 24 horas (máx 40 mg/día).'
      },
      {
        id: 'enal-ind-peds',
        name: 'Hipertensión / Nefroprotección Pediátrica',
        recommendedDoseMgPerKgPerDay: 0.1,
        minDoseMgPerKgPerDay: 0.1,
        maxDoseMgPerKgPerDay: 0.5,
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '0.1 mg/kg/día una vez al día (titular hasta máx 0.5 mg/kg/día).'
      }
    ],
    whenToUse: [
      'Hipertensión arterial con comorbilidades (diabetes, insuficiencia cardíaca, proteinuria).',
      'Nefroprotección en diabetes mellitus tipo 1 y 2 con microalbuminuria.',
      'Remodelado post-infarto de miocardio.'
    ],
    pearlsAndPitfalls: [
      'Tos seca persistente mediada por bradicinina en un 10-15% de pacientes (indica cambio a ARA-II como Irbesartán).',
      'CONTRAINDICADO ABSOLUTO en el embarazo (teratogénico: agenesia renal y oligohidramnios).',
      'Angioedema por acumulación de bradicinina (puede comprometer vía aérea).'
    ],
    monitoringAndSideEffects: ['Creatinina y potasio sérico (aumento transitorio del 20-30% de creatinina es esperable y aceptable).'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador C09AA02',
        summary: 'Enalapril 20 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 30 mL/min', adjustmentText: '100% de la dosis estándar', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 30 mL/min', adjustmentText: 'Iniciar con 2.5 mg/día y titular con precaución', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Iniciar con 2.5 mg los días de diálisis', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'hidralazina',
    name: 'Hidralazina',
    commercialNames: ['Apresolina', 'Hydralazine'],
    category: 'Cardiovascular',
    atcCode: 'C02DB02',
    therapeuticClass: 'Vasodilatador Arterial Directo Antihipertensivo (SRS 2025)',
    badgeText: 'SRS 2025 · Emergencia Obstétrica',
    shortDescription: 'Vasodilatador arteriolar para crisis hipertensiva en el embarazo (Preeclampsia severa / Eclampsia) y urgencias pediátricas.',
    availableRoutes: ['iv', 'oral'],
    concentrations: [
      {
        id: 'hidra-amp-20mg',
        name: 'Sólidos y/o Líquidos Parenterales 20 mg Ampolla (SRS 2025)',
        amountMg: 20,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IV'
      },
      {
        id: 'hidra-comp-50mg',
        name: 'Sólidos Orales 50 mg (SRS 2025)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oral de 50 mg'
      }
    ],
    indications: [
      {
        id: 'hidra-ind-preeclampsia-iv',
        name: 'Crisis Hipertensiva en Preeclampsia Severa (ACOG)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 0.33,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 10,
        description: '5 a 10 mg IV lentos en 2 minutos. Si la PA diastólica sigue ≥ 110 mmHg tras 20 minutos, administrar 10 mg IV (máximo acumulado 20-30 mg).'
      },
      {
        id: 'hidra-ind-urgencia-peds',
        name: 'Crisis Hipertensiva Pediátrica IV',
        recommendedDoseMgPerKgPerDay: 0.2,
        minDoseMgPerKgPerDay: 0.1,
        maxDoseMgPerKgPerDay: 0.2,
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 4,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 10,
        isDosePerKgPerDose: true,
        description: '0.1 a 0.2 mg/kg por dosis IV lenta en 5 minutos cada 4 a 6 horas (máximo 10 mg por dosis inicial).'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea de la crisis hipertensiva en el embarazo (preeclampsia severa / eclampsia).',
      'Emergencias hipertensivas pediátricas asociadas a glomerulonefritis aguda.'
    ],
    pearlsAndPitfalls: [
      'Vasodilatador arterial puro: desencadena taquicardia refleja refleja marcada y retención de líquidos (frecuentemente combinado con betabloqueante en no gestantes).',
      'Cuidado con descensos tensionales bruscos que comprometan el flujo útero-placentario en la madre.',
      'Riesgo de síndrome similar a lupus (lupus-like) en uso crónico oral a dosis altas (>200 mg/día) en acetiladores lentos.'
    ],
    monitoringAndSideEffects: ['Presión arterial cada 5-10 minutos, frecuencia cardíaca materna y fetal, cefalea, palpitaciones.'],
    evidenceAndSources: [
      {
        title: 'ACOG Committee Opinion: Emergent Therapy for Acute-Onset Severe Hypertension During Pregnancy',
        source: 'Obstet Gynecol. 2017;129(2):e42-e45',
        summary: 'Hidralazina IV junto con Labetalol oral o Nifedipino oral son los fármacos recomendados para control urgente de la presión arterial.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador C02DB02',
        summary: 'Hidralazina 50 mg sólidos orales y 20 mg parenterales IV.'
      }
    ]
  },
  {
    id: 'acido-tranexamico',
    name: 'Ácido Tranexámico',
    commercialNames: ['Cyklokapron', 'Transamin', 'Lysteda'],
    category: 'Cardiovascular',
    atcCode: 'B02AA02',
    therapeuticClass: 'Antifibrinolítico Hemostático Análogo de la Lisina (SRS 2025)',
    badgeText: 'SRS 2025 · Antifibrinolítico',
    shortDescription: 'Inhibidor de la fibrinólisis para hemorragia masiva traumática (CRASH-2), hemorragia postparto (WOMAN) y epistaxis/sangrado quirúrgico.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'tranex-amp-100mg',
        name: 'Líquidos Parenterales 100 mg / mL (1000 mg / 10 mL) Ampolla (SRS 2025)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (100 mg/mL IV)'
      }
    ],
    indications: [
      {
        id: 'tranex-ind-trauma-adults',
        name: 'Politraumatismo / Hemorragia Masiva Adulto (Protocolo CRASH-2)',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 1,
        intervalHours: 8,
        durationDays: 'Primeras 8 horas',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: 'Bolo de 1 g IV en 10 minutos administrado en las primeras 3 horas del trauma, seguido de 1 g en infusión continua durante 8 horas.'
      },
      {
        id: 'tranex-ind-peds',
        name: 'Hemorragia Quirúrgica / Trauma Pediátrico',
        recommendedDoseMgPerKgPerDay: 15,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 20,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '1-3 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        isDosePerKgPerDose: true,
        description: '10 a 15 mg/kg por dosis IV lenta en 15 minutos cada 8 horas.'
      }
    ],
    whenToUse: [
      'Traumatismo mayor con sangrado activo significativo o riesgo de hemorragia masiva (iniciar <3 horas).',
      'Hemorragia postparto inmediata (estudio WOMAN).',
      'Cirugía mayor cardíaca u ortopédica para reducir requerimientos de transfusión.'
    ],
    pearlsAndPitfalls: [
      'REGLA DE LAS 3 HORAS: La eficacia es máxima si se administra dentro de las primeras 3 horas del trauma; administrado después de las 3 horas puede AUMENTAR el riesgo de mortalidad por trombosis.',
      'Infundir el bolo lento en al menos 10 minutos para evitar hipotensión arterial transitoria.'
    ],
    monitoringAndSideEffects: ['Hipotensión si infusión rápida, eventos trombóticos infrecuentes, convulsiones a dosis muy elevadas.'],
    evidenceAndSources: [
      {
        title: 'CRASH-2 Trial: Effects of tranexamic acid on death in trauma patients with significant haemorrhage',
        source: 'Lancet. 2010;376(9734):23-32',
        summary: 'Demostró reducción significativa de la mortalidad por todas las causas sin aumento de eventos tromboembólicos.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador B02AA02',
        summary: 'Ácido tranexámico 100 mg/mL líquidos parenterales IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis estándar', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 20 - 50 mL/min', adjustmentText: 'Reducir dosis al 50%', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 20 mL/min', adjustmentText: 'Reducir dosis al 25% y espaciar intervalo', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'sulfato-ferroso',
    name: 'Sulfato Ferroso',
    commercialNames: ['Fer-In-Sol', 'Iberet', 'Fersol'],
    category: 'Cardiovascular',
    atcCode: 'B03AA07',
    therapeuticClass: 'Preparación Antianémica con Hierro Elemental (SRS 2025)',
    badgeText: 'SRS 2025 · Antianémico',
    shortDescription: 'Suplemento de hierro de primera línea para profilaxis y tratamiento de anemia ferropénica en lactantes, niños, gestantes y adultos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'hierro-gotas-125',
        name: 'Líquidos Orales (Gotas) 125 mg / mL (SRS 2025)',
        amountMg: 125,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (125 mg/mL = 25 mg de Hierro Elemental por mL; 1 gota ≈ 1.25 mg Fe)'
      },
      {
        id: 'hierro-comp-300',
        name: 'Sólidos Orales (Tabletas) 300 mg (SRS 2025)',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025 (300 mg sulfato ferroso = 60 mg de Hierro Elemental)'
      }
    ],
    indications: [
      {
        id: 'hierro-ind-anemia-peds',
        name: 'Tratamiento de Anemia Ferropénica Pediátrica',
        recommendedDoseMgPerKgPerDay: 4,
        minDoseMgPerKgPerDay: 3,
        maxDoseMgPerKgPerDay: 6,
        fixedAdultDoseMg: 60,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '3 meses tras normalizar Hb',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 60,
        description: 'Calculado en Hierro Elemental: 3 a 6 mg Fe elemental/kg/día fraccionado en 1 o 2 tomas diarias entre comidas con jugo cítrico rico en vitamina C.'
      },
      {
        id: 'hierro-ind-anemia-adults',
        name: 'Tratamiento de Anemia Ferropénica en Adultos',
        fixedAdultDoseMg: 60,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3 meses',
        maxDailyDoseMg: 180,
        maxSingleDoseMg: 60,
        description: '1 tableta de 300 mg (60 mg Fe elemental) 1 vez al día (o en días alternos para maximizar la absorción intestinal y disminuir efectos gastrointestinales).'
      }
    ],
    whenToUse: [
      'Tratamiento de la anemia microcítica hipocrómica ferropénica.',
      'Profilaxis de anemia en recién nacidos prematuros o de bajo peso al nacer a partir de los 2 meses.',
      'Suplementación en el embarazo para prevenir la deficiencia materna y fetal.'
    ],
    pearlsAndPitfalls: [
      'Tomar entre comidas con agua o jugo de naranja (la vitamina C reduce el Fe3+ a Fe2+ aumentando su absorción intestinal).',
      'EVITAR tomar con leche materna, leche de vaca, té o café (los taninos y el calcio inhiben fuertemente la absorción de hierro).',
      'Tiñe las heces de color verde oscuro o negro alquitranado (informar a los padres para evitar alarma injustificada).',
      'Mantener SIEMPRE fuera del alcance de los niños: la intoxicación accidental por hierro es una causa pediátrica letal de necrosis gástrica y falla hepática.'
    ],
    monitoringAndSideEffects: ['Hemoglobina y ferritina sérica a los 30 días, estreñimiento, náuseas, heces oscuras.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador B03AA07',
        summary: 'Sulfato ferroso 125 mg/mL líquidos orales y 300 mg sólidos orales.'
      }
    ]
  },
  {
    id: 'amlodipina',
    name: 'Amlodipina',
    commercialNames: ['Norvasc', 'Amlodipino', 'Amlopress'],
    category: 'Cardiovascular',
    atcCode: 'C08CA01',
    therapeuticClass: 'Calcioantagonista Dihidropiridínico Antihipertensivo (SRS 2025)',
    badgeText: 'SRS 2025 · Calcioantagonista',
    shortDescription: 'Bloqueador de canales de calcio dihidropiridínico de larga acción para hipertensión arterial y angina de pecho.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'amlo-comp-5mg',
        name: 'Sólidos Orales 5 mg Comprimidos (SRS 2025)',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025'
      },
      {
        id: 'amlo-comp-10mg',
        name: 'Sólidos Orales 10 mg Comprimidos (SRS 2025)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis máxima diaria en adultos'
      }
    ],
    indications: [
      {
        id: 'amlo-ind-hta-adult',
        name: 'Hipertensión Arterial Esencial Adultos',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '5 mg vía oral una vez al día; titular a 10 mg/día tras 2-4 semanas si la respuesta tensional es insuficiente.'
      },
      {
        id: 'amlo-ind-hta-peds',
        name: 'Hipertensión Arterial Pediátrica (≥ 6 años)',
        recommendedDoseMgPerKgPerDay: 0.1,
        minDoseMgPerKgPerDay: 0.05,
        maxDoseMgPerKgPerDay: 0.2,
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5,
        description: '0.05 a 0.1 mg/kg/día una vez al día (dosis inicial máxima 2.5 a 5 mg/día; titular hasta máx 0.2 mg/kg/día o 10 mg/día).'
      }
    ],
    whenToUse: [
      'Hipertensión arterial primaria en monoterapia o combinada (excelente sinergia con IECA/ARA-II).',
      'Cardiopatía isquémica y angina vasoespástica (de Prinzmetal).',
      'Pacientes ancianos con hipertensión sistólica aislada.'
    ],
    pearlsAndPitfalls: [
      'Edema maleolar bilateral periférico dependiente de la dosis por vasodilatación arteriolar precapilar (no responde a diuréticos; mejora combinándolo con IECA o ARA-II).',
      'Vida media prolongada (~35-50 horas): permite posología cómoda de una sola toma al día.',
      'Cefalea y rubefacción facial transitoria al inicio del tratamiento.'
    ],
    monitoringAndSideEffects: ['Presión arterial, presencia de edema periférico, frecuencia cardíaca.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador C08CA01',
        summary: 'Amlodipina 5 mg y 10 mg sólidos orales.'
      }
    ]
  },
  {
    id: 'losartan',
    name: 'Losartán',
    commercialNames: ['Cozaar', 'Losartán Potásico', 'Corazem'],
    category: 'Cardiovascular',
    atcCode: 'C09CA01',
    therapeuticClass: 'Antagonista de Receptores de Angiotensina II (ARA-II) Antihipertensivo (SRS 2025)',
    badgeText: 'SRS 2025 · ARA-II Primera Línea',
    shortDescription: 'ARA-II para hipertensión arterial, protección renal en nefropatía diabética e intolerancia a IECAs por tos o angioedema.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'losar-comp-50mg',
        name: 'Sólidos Orales 50 mg Comprimidos (SRS 2025)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025 ranurada'
      },
      {
        id: 'losar-comp-100mg',
        name: 'Sólidos Orales 100 mg Comprimidos (SRS 2025)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis objetivo en insuficiencia cardíaca y nefropatía diabética'
      }
    ],
    indications: [
      {
        id: 'losar-ind-hta-adult',
        name: 'Hipertensión Arterial / Nefroprotección Diabética Adultos',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 100,
        description: '50 mg vía oral una vez al día (o fraccionado en 2 tomas); titular hasta 100 mg/día si no se alcanza la meta de presión arterial.'
      },
      {
        id: 'losar-ind-hta-peds',
        name: 'Hipertensión Arterial Pediátrica (≥ 6 años)',
        recommendedDoseMgPerKgPerDay: 0.7,
        minDoseMgPerKgPerDay: 0.5,
        maxDoseMgPerKgPerDay: 1.4,
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 50,
        description: '0.7 mg/kg vía oral una vez al día (hasta un máximo inicial de 50 mg/día; titular hasta 1.4 mg/kg/día o máx 100 mg/día).'
      }
    ],
    whenToUse: [
      'Hipertensión arterial esencial, especialmente en pacientes que presentan tos por Enalapril u otros IECAs.',
      'Reducción de progresión de nefropatía en diabetes mellitus tipo 2 con proteinuria (estudio RENAAL).',
      'Insuficiencia cardíaca en pacientes que no toleran IECAs.'
    ],
    pearlsAndPitfalls: [
      'CONTRAINDICADO ABSOLUTO en el embarazo (teratogénico: fallo renal fetal, oligohidramnios, hipoplasia pulmonar).',
      'No combinar simultáneamente con un IECA (Enalapril) debido a mayor riesgo de hiperpotasemia, hipotensión y fallo renal agudo sin beneficio clínico adicional.',
      'Efecto uricosúrico leve único entre los ARA-II, favorable en pacientes con gota o hiperuricemia.'
    ],
    monitoringAndSideEffects: ['Presión arterial, creatinina sérica y potasio sérico periódicamente.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador C09CA01',
        summary: 'Losartán potásico 50 mg y 100 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 30 mL/min', adjustmentText: '100% de la dosis estándar', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: 'Iniciar con 25 mg/día y titular vigilando el potasio sérico', cautionLevel: 'moderate' }
    ]
  }
];
