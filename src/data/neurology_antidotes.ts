import { Medication } from '../types';

export const NEUROLOGY_ANTIDOTES_MEDICATIONS: Medication[] = [
  {
    id: 'diazepam',
    name: 'Diazepam',
    commercialNames: ['Valium', 'Stesolid', 'Diazepam'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'N05BA01',
    therapeuticClass: 'Benzodiacepina Anticonvulsivante y Miorrelajante (SRS 2025)',
    badgeText: 'SRS 2025 · Anticonvulsivante Agudo',
    shortDescription: 'Benzodiacepina parenteral de acción rápida para el control urgente de crisis convulsivas agudas y estatus epiléptico.',
    availableRoutes: ['iv', 'rectal', 'im'],
    concentrations: [
      {
        id: 'diaze-amp-10mg',
        name: 'Líquidos Parenterales 5 mg/mL (10 mg / 2 mL) Ampolla (SRS 2025)',
        amountMg: 10,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IM/IV'
      }
    ],
    indications: [
      {
        id: 'diaze-ind-crisis-convulsiva-peds',
        name: 'Crisis Convulsiva Aguda Pediátrica IV Lenta',
        recommendedDoseMgPerKgPerDay: 0.3,
        minDoseMgPerKgPerDay: 0.2,
        maxDoseMgPerKgPerDay: 0.3,
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 0.25,
        durationDays: 'Dosis única de urgencia',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 10,
        isDosePerKgPerDose: true,
        description: '0.2 a 0.3 mg/kg por vía IV directa MUY LENTA (en 2-3 minutos sin diluir o diluido en sangre del catéter). Máximo 5 mg en niños <5 años y 10 mg en niños >5 años.'
      },
      {
        id: 'diaze-ind-crisis-adults',
        name: 'Estatus Epiléptico / Crisis Convulsiva Adulto',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 0.25,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 10,
        description: '10 mg IV lento (máximo 5 mg/min). Puede repetirse una vez a los 10 minutos si persisten las convulsiones.'
      }
    ],
    whenToUse: [
      'Cese rápido de convulsiones tónico-clónicas generalizadas activas que duren más de 5 minutos.',
      'Espasmos musculares severos (tétanos) y sedación prequirúrgica.'
    ],
    pearlsAndPitfalls: [
      'Tener siempre preparado equipo de intubación y bolsa-mascarilla: RIESGO DE DEPRESIÓN RESPIRATORIA e hipotensión tras bolo rápido.',
      'Antídoto específico: Flumazenil (0.1 mg/mL).',
      'No se absorbe de forma regular por vía IM; en ausencia de acceso venoso en niños, la vía rectal (solución inyectable administrada con jeringa sin aguja en recto) es preferible a la IM.'
    ],
    monitoringAndSideEffects: ['Frecuencia respiratoria, saturación de O2, presión arterial, nivel de consciencia.'],
    evidenceAndSources: [
      {
        title: 'AES Guidelines: Treatment of Convulsive Status Epilepticus in Children and Adults',
        source: 'Epilepsy Curr. 2016;16(1):48-61',
        summary: 'Las benzodiacepinas intravenosas precoces constituyen la primera línea imprescindible para frenar el estatus epiléptico.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador N05BA01',
        summary: 'Diazepam 5 mg/mL líquidos parenterales IM, IV.'
      }
    ]
  },
  {
    id: 'midazolam',
    name: 'Midazolam Clorhidrato',
    commercialNames: ['Dormicum', 'Versed', 'Midazolam'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'N05CD08',
    therapeuticClass: 'Benzodiacepina de Acción Corta y Ansiolítico Amnésico (SRS 2025)',
    badgeText: 'SRS 2025 · Sedación y Estatus',
    shortDescription: 'Benzodiacepina hidrosoluble de acción ultracorta para sedación en procedimientos, estatus epiléptico e inducción anestésica.',
    availableRoutes: ['iv', 'im', 'inhalatoria'],
    concentrations: [
      {
        id: 'mida-amp-5mg-ml',
        name: 'Líquidos Parenterales 5 mg/mL (15 mg / 3 mL) Ampolla (SRS 2025)',
        amountMg: 15,
        volumeMl: 3,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (5 mg/mL)'
      },
      {
        id: 'mida-amp-1mg-ml',
        name: 'Líquidos Parenterales 1 mg/mL Ampolla (SRS 2025)',
        amountMg: 5,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación diluida oficial SRS 2025 (1 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'mida-ind-sedacion-procedimientos',
        name: 'Sedación para Procedimientos Cortos Pediátricos',
        recommendedDoseMgPerKgPerDay: 0.1,
        minDoseMgPerKgPerDay: 0.05,
        maxDoseMgPerKgPerDay: 0.15,
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 1,
        intervalHours: 1,
        durationDays: 'Procedimiento',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5,
        isDosePerKgPerDose: true,
        description: '0.05 a 0.1 mg/kg IV lento titulado en 2 minutos (o 0.2 mg/kg intranasal en convulsión activa).'
      },
      {
        id: 'mida-ind-estatus-adulto',
        name: 'Estatus Epiléptico Adulto (IM / IV)',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 0.25,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 30,
        maxSingleDoseMg: 10,
        description: '10 mg IM profunda (fármaco de elección si no hay vía IV disponible) o 5 mg IV lento.'
      }
    ],
    whenToUse: [
      'Estatus epiléptico activo extrahospitalario (vía intramuscular o intranasal muy superior a diazepam).',
      'Sedación consciente y amnesia anterógrada para suturas complejas, reducción de fracturas o endoscopias.'
    ],
    pearlsAndPitfalls: [
      'Excelente absorción por mucosa nasal o vía IM sin necesidad de vehículo lipídico irritante.',
      'Produce amnesia anterógrada completa del procedimiento.',
      'Reversible inmediatamente con Flumazenil.'
    ],
    monitoringAndSideEffects: ['Depresión respiratoria, hipoxemia, amnesia, hipotensión en pacientes hipovolémicos.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador N05CD08',
        summary: 'Midazolam (clorhidrato) 5 mg/mL y 1 mg/mL líquidos parenterales IM, IV.'
      }
    ]
  },
  {
    id: 'fenitoina',
    name: 'Fenitoína Sódica (Difenilhidantoína)',
    commercialNames: ['Dilantin', 'Epamin', 'Feniten'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'N03AB02',
    therapeuticClass: 'Antiepiléptico Bloqueador de Canales de Sodio (SRS 2025)',
    badgeText: 'SRS 2025 · Carga Antiepiléptica',
    shortDescription: 'Antiepiléptico de segunda línea en estatus epiléptico que no cede a benzodiacepinas y profilaxis de convulsiones en traumatismo craneoencefálico.',
    availableRoutes: ['iv', 'oral'],
    concentrations: [
      {
        id: 'feni-amp-50mg',
        name: 'Líquidos Parenterales 50 mg/mL (250 mg / 5 mL) Ampolla (SRS 2025)',
        amountMg: 250,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IV (pH alcalino 12)'
      },
      {
        id: 'feni-susp-125',
        name: 'Líquidos Orales (Suspensión) 125 mg / 5 mL (SRS 2025)',
        amountMg: 125,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oral oficial SRS 2025 (25 mg/mL)'
      },
      {
        id: 'feni-comp-100',
        name: 'Sólidos Orales 100 mg (SRS 2025)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Presentación oficial SRS 2025'
      }
    ],
    indications: [
      {
        id: 'feni-ind-carga-estatus',
        name: 'Dosis de Carga en Estatus Epiléptico (Pediátrico y Adulto)',
        recommendedDoseMgPerKgPerDay: 20,
        minDoseMgPerKgPerDay: 15,
        maxDoseMgPerKgPerDay: 20,
        fixedAdultDoseMg: 1250,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '1 dosis de carga',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 1500,
        isDosePerKgPerDose: true,
        description: '20 mg/kg en infusión IV diluido EXCLUSIVAMENTE en Solución Salina 0.9% (máxima velocidad: 1 mg/kg/min en niños y 50 mg/min en adultos con monitor EKG continuo).'
      },
      {
        id: 'feni-ind-mantenimiento',
        name: 'Dosis de Mantenimiento Pediátrico',
        recommendedDoseMgPerKgPerDay: 5,
        minDoseMgPerKgPerDay: 5,
        maxDoseMgPerKgPerDay: 8,
        fixedAdultDoseMg: 300,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200,
        description: '5 a 8 mg/kg/día fraccionado cada 12 horas IV u oral (comenzar 12 horas tras la carga).'
      }
    ],
    whenToUse: [
      'Segunda línea en estatus epiléptico tras el fracaso de dos dosis de benzodiacepinas.',
      'Prevención de crisis epilépticas postraumáticas tempranas en TCE grave o neurocirugía.'
    ],
    pearlsAndPitfalls: [
      'NUNCA mezclar con soluciones glucosadas (Dextrosa): precipita de inmediato en forma de cristales insolubles.',
      'Riesgo de arritmias cardíacas letales y colapso cardiovascular por velocidad rápida de infusión (debido al propilenglicol solvente).',
      'Síndrome del guantelete púrpura en extravasación periférica (necrosis isquémica tisular).'
    ],
    monitoringAndSideEffects: ['Monitorización electrocardiográfica continua durante la carga, presión arterial, niveles séricos terapéuticos (10-20 mcg/mL).'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador N03AB02',
        summary: 'Fenitoína sódica 50 mg/mL líquidos parenterales IV, 125 mg/5mL líquidos orales y 100 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'La fracción libre activa aumenta; dosificar según niveles de fenitoína libre', cautionLevel: 'moderate' }
    ]
  },
  {
    id: 'naloxona',
    name: 'Naloxona Clorhidrato',
    commercialNames: ['Narcan', 'Nalone', 'Naloxona'],
    category: 'Antídotos / Toxicología',
    atcCode: 'V03AB15',
    therapeuticClass: 'Antagonista Puro de Receptores Opioides (Antídoto Vital) (SRS 2025)',
    badgeText: 'SRS 2025 · Antídoto Opioides',
    shortDescription: 'Antídoto de urgencia para revertir la depresión respiratoria y el coma inducido por sobredosis de opioides (morfina, fentanilo, tramadol, heroína).',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'nalox-amp-04',
        name: 'Líquidos Parenterales 0.4 mg / mL Ampolla (SRS 2025)',
        amountMg: 0.4,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (0.4 mg/mL IM/IV)'
      }
    ],
    indications: [
      {
        id: 'nalox-ind-peds-menor5a',
        name: 'Depresión Respiratoria por Opioides en Niños <5 años o <20 kg',
        recommendedDoseMgPerKgPerDay: 0.1,
        minDoseMgPerKgPerDay: 0.1,
        maxDoseMgPerKgPerDay: 0.1,
        fixedAdultDoseMg: 0.4,
        frequencyPerDay: 1,
        intervalHours: 0.05,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 2,
        isDosePerKgPerDose: true,
        description: '0.1 mg/kg IV, IM o intraósea (máx 2 mg por dosis). Si no hay respuesta a los 2-3 minutos, repetir la dosis.'
      },
      {
        id: 'nalox-ind-adults',
        name: 'Sobredosis de Opioides en Adultos (Titulación)',
        fixedAdultDoseMg: 0.4,
        frequencyPerDay: 1,
        intervalHours: 0.05,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 2,
        description: '0.4 mg a 2 mg IV cada 2 a 3 minutos hasta restablecer una frecuencia respiratoria adecuada (>12 rpm).'
      }
    ],
    whenToUse: [
      'Sospecha o confirmación de intoxicación aguda por opioides con la tríada clásica: miosis puntiforme, depresión respiratoria y coma.',
      'Reversión de sobredosificación accidental intraoperatoria o postoperatoria por fentanilo o morfina.'
    ],
    pearlsAndPitfalls: [
      '¡VIDA MEDIA CORTA!: La naloxona dura solo 30 a 90 minutos, mientras que los opioides ingeridos (morfina, tramadol, metadona) duran muchas horas. RIESGO GRAVE de resedación y paro respiratorio tardío al agotarse el antídoto.',
      'En pacientes dependientes a opioides, la administración brusca desencadena síndrome de abstinencia agudo severo (agitación, taquicardia, vómitos).',
      'El objetivo de la titulación es restaurar la respiración espontánea adecuada, no despertar completamente al paciente.'
    ],
    monitoringAndSideEffects: ['Frecuencia respiratoria continua, nivel de consciencia, oximetría de pulso durante al menos 4-6 horas.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador V03AB15',
        summary: 'Naloxona clorhidrato 0.4 mg/mL líquidos parenterales IM, IV.'
      }
    ]
  },
  {
    id: 'flumazenil',
    name: 'Flumazenil',
    commercialNames: ['Lanexat', 'Flumazenil'],
    category: 'Antídotos / Toxicología',
    atcCode: 'V03AB25',
    therapeuticClass: 'Antagonista Competitivo de Receptores de Benzodiacepinas (SRS 2025)',
    badgeText: 'SRS 2025 · Antídoto Benzodiacepinas',
    shortDescription: 'Antídoto específico para la reversión rápida de los efectos sedantes y depresores de las benzodiacepinas (diazepam, midazolam, clonazepam).',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'fluma-amp-01mg',
        name: 'Líquidos Parenterales 0.1 mg/mL (0.5 mg / 5 mL) Ampolla (SRS 2025)',
        amountMg: 0.5,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IV (0.1 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'fluma-ind-reversion-adults',
        name: 'Reversión de Sedación / Sobredosis por Benzodiacepinas Adulto',
        fixedAdultDoseMg: 0.2,
        frequencyPerDay: 1,
        intervalHours: 0.05,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 3,
        maxSingleDoseMg: 1,
        description: '0.2 mg IV en 15 segundos. Si no hay respuesta tras 60 segundos, administrar 0.3 mg y luego 0.5 mg cada minuto hasta un máximo de 3 mg.'
      },
      {
        id: 'fluma-ind-peds',
        name: 'Reversión de Sedación Pediátrica',
        recommendedDoseMgPerKgPerDay: 0.01,
        minDoseMgPerKgPerDay: 0.01,
        maxDoseMgPerKgPerDay: 0.01,
        fixedAdultDoseMg: 0.2,
        frequencyPerDay: 1,
        intervalHours: 0.05,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 1,
        maxSingleDoseMg: 0.2,
        isDosePerKgPerDose: true,
        description: '0.01 mg/kg IV lenta en 15 segundos (máximo 0.2 mg). Repetir cada minuto si es necesario hasta máx 1 mg.'
      }
    ],
    whenToUse: [
      'Reversión de la sedación inducida por benzodiacepinas al finalizar procedimientos diagnósticos o quirúrgicos.',
      'Diagnóstico y tratamiento de sobredosis pura de benzodiacepinas con depresión respiratoria.'
    ],
    pearlsAndPitfalls: [
      'CONTRAINDICADO en intoxicaciones mixtas con antidepresivos tricíclicos (desencadena arritmias ventriculares y convulsiones incoercibles).',
      'CONTRAINDICADO en pacientes epilépticos que toman benzodiacepinas de forma crónica (desencadena estatus epiléptico).',
      'Vida media corta (40-80 min): vigilar resedación.'
    ],
    monitoringAndSideEffects: ['Monitorización de signos vitales, riesgo de convulsiones en adictos o epilépticos, arritmias.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador V03AB25',
        summary: 'Flumazenil 0.1 mg/mL líquidos parenterales IV.'
      }
    ]
  },
  {
    id: 'atropina',
    name: 'Atropina Sulfato',
    commercialNames: ['Atropina Sulfato'],
    category: 'Antídotos / Toxicología',
    atcCode: 'A03BA01',
    therapeuticClass: 'Anticolinérgico Antimuscarínico y Antídoto Toxicológico (SRS 2025)',
    badgeText: 'SRS 2025 · Antídoto Organofosforados',
    shortDescription: 'Fármaco de emergencia para bradicardia sinusal sintomática inestable y antídoto de intoxicación por insecticidas organofosforados / carbamatos.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'atro-amp-1mg',
        name: 'Líquidos Parenterales 1 mg / mL Ampolla (SRS 2025)',
        amountMg: 1,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 SC/IM/IV (1 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'atro-ind-bradicardia-peds',
        name: 'Bradicardia Sintomática Pediátrica (PALS)',
        recommendedDoseMgPerKgPerDay: 0.02,
        minDoseMgPerKgPerDay: 0.02,
        maxDoseMgPerKgPerDay: 0.02,
        fixedAdultDoseMg: 1,
        frequencyPerDay: 1,
        intervalHours: 0.1,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 0.5,
        isDosePerKgPerDose: true,
        description: '0.02 mg/kg IV en bolo rápido (dosis mínima 0.1 mg para evitar bradicardia paradójica; máx 0.5 mg en niños y 1 mg en adolescentes).'
      },
      {
        id: 'atro-ind-intoxicacion-organofosforados',
        name: 'Intoxicación por Organofosforados / Carbamatos (Atropinización)',
        recommendedDoseMgPerKgPerDay: 0.05,
        minDoseMgPerKgPerDay: 0.05,
        maxDoseMgPerKgPerDay: 0.1,
        fixedAdultDoseMg: 2,
        frequencyPerDay: 1,
        intervalHours: 0.1,
        durationDays: 'Hasta signos de atropinización',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 5,
        isDosePerKgPerDose: true,
        description: 'Pediátrico: 0.05 mg/kg IV cada 5-10 minutos. Adultos: 2 a 5 mg IV cada 5 minutos duplicando la dosis hasta lograr signos de atropinización (secreciones bronquiales secas, frecuencia cardíaca >80 lpm).'
      }
    ],
    whenToUse: [
      'Bradicardia sinusal inestable con hipotensión o bajo gasto cardíaco mediada por tono vagal.',
      'Síndrome colinérgico agudo por intoxicación con insecticidas organofosforados o carbamatos.'
    ],
    pearlsAndPitfalls: [
      'En niños, NUNCA administrar menos de 0.1 mg totales (dosis subterapéuticas provocan bradicardia paradójica por estimulación de receptores muscarínicos presinápticos M1).',
      'Meta de atropinización en intoxicación: secado de las secreciones pulmonares y broncorrea (NO la dilatación pupilar ni la taquicardia).'
    ],
    monitoringAndSideEffects: ['Auscultación pulmonar (desaparición de estertores), FC, midriasis, sequedad bucal, rubor facial.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A03BA01',
        summary: 'Atropina (sulfato) 0.5 – 1 mg/mL líquidos parenterales SC/IM/IV.'
      }
    ]
  },
  {
    id: 'albendazol',
    name: 'Albendazol',
    commercialNames: ['Zentel', 'Albenza', 'Vermilife'],
    category: 'Antídotos / Toxicología',
    atcCode: 'P02CA03',
    therapeuticClass: 'Antihelmíntico Benzimidazol de Amplio Espectro (SRS 2025)',
    badgeText: 'SRS 2025 · Antiparasitario',
    shortDescription: 'Antihelmíntico de elección para geohelmintos (Ascaris, Trichuris, Uncinarias, Oxiuros) y giardiasis en niños >1 año y adultos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'alben-comp-200',
        name: 'Sólidos Orales 200 mg (SRS 2025)',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Comprimidos masticables de 200 mg'
      }
    ],
    indications: [
      {
        id: 'alben-ind-parasitosis-mayor2a',
        name: 'Geohelmintiasis / Desparasitación (>2 años y Adultos)',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 400,
        description: '400 mg (2 comprimidos de 200 mg masticados) en dosis única. En estrongiloidiasis o giardiasis dar 400 mg/día por 3 días.'
      },
      {
        id: 'alben-ind-parasitosis-1a2a',
        name: 'Niños de 1 a 2 años de edad',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 200,
        description: '200 mg (1 comprimido masticable) en dosis única.'
      }
    ],
    whenToUse: [
      'Campañas de desparasitación masiva escolar según guías de la OPS/OMS.',
      'Infecciones por Ascaris lumbricoides, Enterobius vermicularis (oxiuros), Trichuris trichiura y Necator americanus.'
    ],
    pearlsAndPitfalls: [
      'Para tratar parásitos intraluminales se toma en ayunas; para tratar quistes o larva migrans tisular se toma con alimentos ricos en grasa (aumenta 5 veces la absorción sistémica).',
      'En oxiuriasis, repetir la dosis única a los 14 días para erradicar los parásitos nacidos de huevos residuales y tratar a todo el núcleo familiar.',
      'Contraindicado en el primer trimestre del embarazo (teratogénico en animales).'
    ],
    monitoringAndSideEffects: ['Dolor abdominal cólico transitorio al expulsar parásitos, náuseas.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador P02CA03',
        summary: 'Albendazol 200 mg sólidos orales.'
      }
    ]
  }
];
