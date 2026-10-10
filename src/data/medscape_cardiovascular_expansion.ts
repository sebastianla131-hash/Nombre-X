import { Medication } from '../types';

export const MEDSCAPE_CARDIOVASCULAR_EXPANSION: Medication[] = [
  {
    id: 'captopril',
    name: 'Captopril',
    commercialNames: ['Capoten', 'Cesplon', 'Captopril', 'Capotena'],
    category: 'Cardiovascular',
    atcCode: 'C09AA01',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) Prototipo con Grupo Sulfhidrilo',
    badgeText: 'Cardiovascular · IECA de Acción Rápida',
    shortDescription: 'Inhibidor competitivo pionero de la ECA con grupo tiol (-SH). Se caracteriza por un rápido inicio de acción (15-30 minutos) y semivida corta, lo que permite su uso oral o sublingual para el control rápido de la presión arterial en urgencias hipertensivas, nefropatía diabética tipo 1 y post-infarto de miocardio.',
    availableRoutes: ['oral', 'sublingual'],
    concentrations: [
      {
        id: 'capto-comp-25',
        name: 'Comprimidos Ranurados 25 mg',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar 1 hora antes de las comidas en ayunas'
      },
      {
        id: 'capto-comp-50',
        name: 'Comprimidos Ranurados 50 mg',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'capto-ind-urgencia-hta',
        name: 'Urgencia Hipertensiva en Adultos (Descenso Controlado Oral o Sublingual)',
        fixedAdultDoseMg: 25,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '1-3 días',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 50,
        description: '25 a 50 mg por vía oral (o sublingual colocándolo bajo la lengua para absorción transmucosa rápida). Puede repetirse a los 60-90 minutos si la presión arterial no ha descendido adecuadamente.'
      },
      {
        id: 'capto-ind-post-iam-ic',
        name: 'Post-Infarto Agudo de Miocardio / Insuficiencia Cardíaca (Ensayo SAVE)',
        fixedAdultDoseMg: 6.25,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 50,
        description: 'Dosis inicial de prueba: 6.25 mg cada 8 horas (iniciar a partir de los 3 días post-IAM si hay estabilidad hemodinámica). Titular a 12.5 mg c/8h, 25 mg c/8h hasta la dosis diana de 50 mg cada 8 horas.'
      },
      {
        id: 'capto-ind-peds',
        name: 'Hipertensión Pediátrica en Niños y Neonatos',
        recommendedDoseMgPerKgPerDay: 0.9,
        minDoseMgPerKgPerDay: 0.3,
        maxDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 25,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Según indicación',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 25,
        description: 'Lactantes y niños: iniciar con 0.15 a 0.3 mg/kg/dosis cada 8 horas; titular gradualmente hasta 0.3 a 0.5 mg/kg/dosis cada 8 horas (máximo 2 mg/kg/día). Neonatos: 0.01 a 0.05 mg/kg/dosis.'
      }
    ],
    whenToUse: [
      'Control rápido de urgencias hipertensivas sintomáticas sin compromiso agudo de órgano blanco.',
      'Disfunción ventricular izquierda post-infarto de miocardio con FEVI ≤ 40% (ensayo SAVE).',
      'Nefropatía diabética tipo 1 con proteinuria (reduce la progresión de la enfermedad renal terminal).'
    ],
    pearlsAndPitfalls: [
      '¡Interacción Crítica con los Alimentos!: La presencia de comida en el estómago disminuye la absorción oral de captopril en un 30% a 40%; debe administrarse OBLIGATORIAMENTE 1 hora antes de las comidas o 2 horas después (en ayunas).',
      'Debido a su grupo sulfhidrilo libre (-SH), tiene mayor incidencia de disgeusia transitoria (sabor metálico) y erupciones cutáneas que otros IECAs.',
      'Tos seca irritativa por acúmulo de bradicinina y riesgo de angioedema. Suspender si aparece edema labial o laríngeo.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial a los 30-60 minutos de la primera toma.',
      'Creatinina sérica y potasio sérico a la semana de inicio.',
      'Hemograma en pacientes con colagenosis o insuficiencia renal (riesgo de neutropenia reversible).'
    ],
    evidenceAndSources: [
      {
        title: 'SAVE Clinical Trial: Survival and Ventricular Enlargement with Captopril',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción del 19% en la mortalidad por todas las causas y del 21% en muerte cardiovascular en pacientes post-infarto tratados precozmente con captopril.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '20 - 49 mL/min',
        adjustmentText: 'Reducir la dosis diaria al 75% o espaciar cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 20 mL/min o Hemodiálisis',
        adjustmentText: 'Reducir al 50% de la dosis habitual cada 12 a 24 horas; se dializa (administrar suplemento post-diálisis).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Produce oligoamnios, hipoplasia pulmonar fetal, displasia renal y anuria neonatal. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa o Labetalol.'
    }
  },
  {
    id: 'atenolol',
    name: 'Atenolol',
    commercialNames: ['Tenormin', 'Blokium', 'Atenolol'],
    category: 'Cardiovascular',
    atcCode: 'C07AB03',
    awareCategory: 'Access',
    therapeuticClass: 'Betabloqueador Cardioselectivo Beta-1 Hidrofílico Clásico',
    badgeText: 'Cardiovascular · Beta-1 Hidrofílico',
    shortDescription: 'Betabloqueador selectivo beta-1 hidrofílico que no atraviesa la barrera hematoencefálica (menor incidencia de pesadillas y depresión central). Fármaco antihipertensivo y antianginoso con eliminación renal casi exclusiva.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'atent-comp-50',
        name: 'Comprimidos Ranurados 50 mg',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'atent-comp-100',
        name: 'Comprimidos Ranurados 100 mg',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'atent-ind-hta',
        name: 'Hipertensión Arterial / Angina de Pecho Estable en Adultos',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 100,
        description: '50 mg una vez al día por la mañana. Puede aumentarse a 100 mg una vez al día según cifras de PA y frecuencia cardíaca.'
      },
      {
        id: 'atent-ind-arritmias',
        name: 'Arritmias Cardíacas / Taquicardia Sinusal / Temblor',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 50,
        description: '50 mg una vez al día.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial asociada a cardiopatía isquémica o angina de esfuerzo.',
      'Control de síntomas adrenérgicos en tirotoxicosis o ansiedad con taquicardia sinusal.'
    ],
    pearlsAndPitfalls: [
      'Eliminación renal del 85%: Muy dependiente de la función renal; requiere ajuste obligatorio en pacientes con aclaramiento de creatinina reducido.',
      'Al ser hidrofílico tiene la tasa más baja de efectos secundarios neuropsiquiátricos (insomnio, pesadillas vívidas) en comparación con metoprolol o propranolol.',
      'No recomendado como primera línea aislada en hipertensión no complicada en ancianos debido a menor reducción de ictus frente a IECAs o calcioantagonistas.'
    ],
    monitoringAndSideEffects: [
      'Frecuencia cardíaca (mantener > 50-55 lpm).',
      'Presión arterial sistólica.',
      'Creatinina sérica para ajuste renal.'
    ],
    evidenceAndSources: [
      {
        title: 'LIFE & ASCOT Clinical Trials',
        source: 'The Lancet',
        year: '2023 Guidelines',
        summary: 'Demostraron menor eficacia protectora frente a ictus comparado con ARA-II (losartán) o calcioantagonistas (amlodipino), reservándolo para cardiopatía isquémica o arritmias.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 35 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '15 - 34 mL/min',
        adjustmentText: 'Dosis máxima 50 mg al día (o 100 mg cada 48 horas).',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 15 mL/min o Hemodiálisis',
        adjustmentText: '25 a 50 mg cada 48 horas; administrar suplemento tras diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Evitar en Gestación (Retraso de Crecimiento Intrauterino)',
      summary: 'Asociado fuertemente a restricción del crecimiento intrauterino y bajo peso al nacer. Contraindicado en el embarazo salvo ausencia de alternativas.',
      clinicalAlternative: 'Labetalol o Metildopa.'
    }
  },
  {
    id: 'valsartan',
    name: 'Valsartán',
    commercialNames: ['Diovan', 'Co-Diovan (comb)', 'Tareg', 'Valsartán'],
    category: 'Cardiovascular',
    atcCode: 'C09CA03',
    awareCategory: 'Access',
    therapeuticClass: 'Antagonista de Receptores de Angiotensina II (ARA-II) Selectivo AT1',
    badgeText: 'Cardiovascular · ARA-II de Referencia',
    shortDescription: 'Bloqueador competitivo y selectivo de los receptores AT1 de la angiotensina II. Bloquea de forma eficaz la vasoconstricción y la secreción de aldosterona sin inhibir la degradación de bradicinina (sin tos seca ni angioedema). Fármaco de oro en hipertensión, post-infarto e insuficiencia cardíaca.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'val-comp-80',
        name: 'Comprimidos Recubiertos Ranurados 80 mg',
        amountMg: 80,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'val-comp-160',
        name: 'Comprimidos Recubiertos Ranurados 160 mg',
        amountMg: 160,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'val-comp-320',
        name: 'Comprimidos Recubiertos 320 mg (Dosis Máxima HTA)',
        amountMg: 320,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'val-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos y Niños (≥6 años)',
        fixedAdultDoseMg: 80,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 320,
        maxSingleDoseMg: 320,
        description: 'Dosis inicial de 80 mg una vez al día con o sin alimentos. Puede incrementarse a 160 mg y hasta 320 mg una vez al día según cifras tensionales.'
      },
      {
        id: 'val-ind-ic-postiam',
        name: 'Insuficiencia Cardíaca / Post-Infarto Agudo de Miocardio (Val-HeFT & VALIANT)',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 320,
        maxSingleDoseMg: 160,
        description: 'Iniciar con 40 mg cada 12 horas; titular progresivamente a 80 mg cada 12 horas hasta la dosis objetivo de 160 mg cada 12 horas según tolerancia clínica.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial e intolerancia a IECAs por tos seca persistente.',
      'Insuficiencia cardíaca sintomática con FEVI deprimida cuando no se tolera ARNI.',
      'Post-infarto de miocardio complicado con disfunción sistólica ventricular izquierda (estudio VALIANT).'
    ],
    pearlsAndPitfalls: [
      'Excelente sustituto de IECAs: Proporciona igual reducción de morbimortalidad cardiovascular sin causar la tos inducida por bradicinina.',
      'Eliminación predominantemente biliar/hepática (70-80% fecal y solo 20-30% renal): seguro en insuficiencia renal leve a moderada.',
      'Vigilar hiperpotasemia, especialmente en combinación con espironolactona o suplementos de potasio.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica.',
      'Potasio sérico y creatinina sérica a las 2 semanas del inicio.',
      'Función hepática en pacientes con cirrosis o colestasis.'
    ],
    evidenceAndSources: [
      {
        title: 'VALIANT & Val-HeFT Clinical Trials',
        source: 'New England Journal of Medicine & Circulation',
        year: '2023 Guidelines',
        summary: 'Demostró equivalencia de supervivencia frente a captopril en post-IAM (VALIANT) y reducción del 28% en hospitalizaciones por insuficiencia cardíaca (Val-HeFT).'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 10 mL/min',
        adjustmentText: 'No requiere ajuste; eliminación mayoritariamente hepática/biliar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: 'Usar con precaución; no se dializa.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Lesión fetal grave, oligohidramnios y fallo renal neonatal. CONTRAINDICADO en todo el embarazo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa, Labetalol o Nifedipino.'
    }
  },
  {
    id: 'telmisartan',
    name: 'Telmisartán',
    commercialNames: ['Micardis', 'Pritor', 'Kinzalmono', 'Telmisartán'],
    category: 'Cardiovascular',
    atcCode: 'C09CA07',
    awareCategory: 'Access',
    therapeuticClass: 'ARA-II de Semivida Más Prolongada (24 Horas) y Agonista Parcial PPAR-Gamma',
    badgeText: 'Cardiovascular · ARA-II 24 Horas + PPAR-γ (ONTARGET)',
    shortDescription: 'ARA-II con la semivida de eliminación más prolongada de toda la clase (24 horas) y la mayor afinidad por el receptor AT1. Posee una propiedad farmacológica dual única como agonista parcial del receptor nuclear PPAR-gamma, mejorando el metabolismo glucídico y lipídico además del control tensional circadiano.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'telmi-comp-40',
        name: 'Comprimidos 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'telmi-comp-80',
        name: 'Comprimidos 80 mg',
        amountMg: 80,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'telmi-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos (Control Tensional Nocturno y Matutino)',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 80,
        description: '40 mg una vez al día con o sin alimentos. Puede aumentarse a 80 mg una vez al día para lograr el máximo descenso tensional.'
      },
      {
        id: 'telmi-ind-prevencion-cv',
        name: 'Prevención Cardiovascular en Pacientes de Alto Riesgo Intolerantes a IECA (ONTARGET)',
        fixedAdultDoseMg: 80,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 80,
        description: '80 mg una vez al día para reducción de morbimortalidad cardiovascular.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial con pico matutino (morning surge) gracias a su efecto de 24 horas continuas.',
      'Hipertensión en pacientes con síndrome metabólico, diabetes tipo 2 o resistencia a la insulina (agonismo PPAR-gamma).',
      'Prevención cardiovascular secundaria en pacientes con enfermedad aterotrombótica establecida que no toleran ramipril.'
    ],
    pearlsAndPitfalls: [
      'Semivida más larga de los ARA-II (24 horas): Si el paciente olvida una toma, mantiene una cobertura antihipertensiva residual significativamente superior a losartán o valsartán.',
      'Eliminación renal insignificante (<1%): Más del 98% se excreta por heces vía biliar; no requiere ningún ajuste de dosis en insuficiencia renal grave ni en hemodiálisis.',
      'Ensayo ONTARGET: Demostró una eficacia cardiovascular idéntica a la de ramipril 10 mg con mucha mejor tolerabilidad y menos suspensiones del tratamiento.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial en consulta y MAPA (monitoreo ambulatorio de 24h).',
      'Potasio sérico.',
      'Excelente perfil de tolerabilidad (incidencia de efectos adversos similar a placebo).'
    ],
    evidenceAndSources: [
      {
        title: 'ONTARGET Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Confirmó que telmisartán 80 mg es no inferior a ramipril 10 mg en la prevención de eventos cardiovasculares mayores, con menor tasa de tos y angioedema.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación renal < 1%.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Daño y muerte fetal intrauterina por bloqueo del SRAA fetal. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa o Labetalol.'
    }
  },
  {
    id: 'candesartan',
    name: 'Candesartán Cilexetilo',
    commercialNames: ['Atacand', 'Parapres', 'Blopress', 'Candesartán'],
    category: 'Cardiovascular',
    atcCode: 'C09CA06',
    awareCategory: 'Access',
    therapeuticClass: 'ARA-II de Muy Alta Afinidad y Disociación Lenta · Ensayo CHARM en IC',
    badgeText: 'Cardiovascular · ARA-II ICFEr (CHARM)',
    shortDescription: 'Profármaco que se hidroliza completamente durante la absorción gastrointestinal a candesartán activo. Se une fuertemente al receptor AT1 con una tasa de disociación extraordinariamente lenta (insurmontable), asegurando una inhibición duradera. Fármaco de oro para reducir hospitalizaciones y mortalidad en insuficiencia cardíaca.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'cande-comp-8',
        name: 'Comprimidos Ranurados 8 mg',
        amountMg: 8,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'cande-comp-16',
        name: 'Comprimidos Ranurados 16 mg',
        amountMg: 16,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'cande-comp-32',
        name: 'Comprimidos Ranurados 32 mg (Dosis Objetivo IC / HTA)',
        amountMg: 32,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'cande-ind-icfer',
        name: 'Insuficiencia Cardíaca con FEVI Reducida (ICFEr NYHA II-IV / Ensayo CHARM)',
        fixedAdultDoseMg: 4,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 32,
        maxSingleDoseMg: 32,
        description: 'Dosis inicial de 4 mg una vez al día. Duplicar la dosis a intervalos no inferiores a 2 semanas: 8 mg, 16 mg, hasta la dosis objetivo diana de 32 mg una vez al día según tolerancia.'
      },
      {
        id: 'cande-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos',
        fixedAdultDoseMg: 8,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 32,
        maxSingleDoseMg: 32,
        description: '8 a 16 mg una vez al día (máximo 32 mg al día).'
      }
    ],
    whenToUse: [
      'Insuficiencia cardíaca sintomática con FEVI ≤ 40% en pacientes intolerantes a IECAs o ARNIs.',
      'Hipertensión arterial con hipertrofia ventricular izquierda.',
      'Profilaxis de migraña (evidencia sólida como preventivo neurológico).'
    ],
    pearlsAndPitfalls: [
      'Ensayo CHARM-Alternative: Demostró una reducción del 23% en muerte cardiovascular o ingreso por IC en pacientes con IC que no toleraban IECAs por tos o angioedema.',
      'Unión irreversible/insurmontable al receptor AT1: Mantiene el bloqueo incluso ante elevaciones marcadas de angiotensina II endógena.',
      'Titular hasta 32 mg/día siempre que la PA sistólica y la función renal lo permitan para obtener el beneficio pronóstico completo.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica.',
      'Potasio y creatinina sérica a las 2 semanas de cada duplicación de dosis.',
      'Mareo postural leve.'
    ],
    evidenceAndSources: [
      {
        title: 'CHARM Program (Candesartan in Heart failure: Assessment of Reduction in Mortality and morbidity)',
        source: 'The Lancet',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción significativa de la mortalidad cardiovascular y hospitalizaciones por IC tanto en FEVI reducida como preservada.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar con titulación habitual.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min o Hemodiálisis',
        adjustmentText: 'Iniciar con 4 mg al día; titular con cautela.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Atraviesa la placenta; daño renal y muerte fetal. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa o Labetalol.'
    }
  },
  {
    id: 'irbesartan',
    name: 'Irbesartán',
    commercialNames: ['Avapro', 'Aprovel', 'Karvea', 'Irbesartán'],
    category: 'Cardiovascular',
    atcCode: 'C09CA04',
    awareCategory: 'Access',
    therapeuticClass: 'ARA-II Nefroprotector de Referencia en Nefropatía Diabética Tipo 2',
    badgeText: 'Cardiovascular · Nefroprotector IDNT',
    shortDescription: 'ARA-II con potente evidencia de protección renal independiente del descenso tensional en pacientes diabéticos tipo 2 con micro y macroalbuminuria (ensayos IDNT e IRMA-2). Excelente biodisponibilidad oral sin dependencia de biotransformación hepática activa.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'irbe-comp-150',
        name: 'Comprimidos 150 mg',
        amountMg: 150,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'irbe-comp-300',
        name: 'Comprimidos 300 mg (Dosis Máxima Nefroprotectora)',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'irbe-ind-nefropatia-diabetica',
        name: 'Nefropatía Diabética en Diabetes Mellitus Tipo 2 con Proteinuria (IDNT / IRMA-2)',
        fixedAdultDoseMg: 150,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 300,
        description: 'Iniciar con 150 mg una vez al día; aumentar a la dosis diana de 300 mg una vez al día (dosis con mayor beneficio nefroprotector demostrado).'
      },
      {
        id: 'irbe-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos',
        fixedAdultDoseMg: 150,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 300,
        description: '150 a 300 mg una vez al día con o sin alimentos.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial en pacientes con diabetes mellitus tipo 2 y nefropatía diabética incipiente o clínica.',
      'Macroalbuminuria (>300 mg/día) para frenar la duplicación de la creatinina sérica.',
      'Hipertensión arterial esencial no controlada en monoterapia.'
    ],
    pearlsAndPitfalls: [
      'Ensayo IDNT: Demostró una reducción del 20% en el riesgo relativo de duplicación de creatinina sérica o enfermedad renal terminal en comparación con amlodipino y placebo para igual control tensional.',
      'Excelente biodisponibilidad oral (60-80%): No es afectada por los alimentos.',
      'Eliminación dual hepática (80%) y renal (20%): Muy seguro en insuficiencia renal moderada a severa sin necesidad de ajuste inicial.'
    ],
    monitoringAndSideEffects: [
      'Cociente albúmina/creatinina en orina.',
      'Creatinina sérica y tasa de filtración glomerular.',
      'Potasio sérico.'
    ],
    evidenceAndSources: [
      {
        title: 'IDNT (Irbesartan Diabetic Nephropathy Trial) & IRMA-2',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostraron de forma definitiva que irbesartán 300 mg frena la progresión de la nefropatía diabética tipo 2 con beneficio independiente del control de la presión arterial.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; iniciar con 75 mg en pacientes en hemodiálisis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Produce malformaciones renales y muerte fetal intrauterina. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa o Labetalol.'
    }
  },
  {
    id: 'olmesartan',
    name: 'Olmesartán Medoxomilo',
    commercialNames: ['Benicar', 'Olmetec', 'Ixia', 'Openvas'],
    category: 'Cardiovascular',
    atcCode: 'C09CA08',
    awareCategory: 'Access',
    therapeuticClass: 'ARA-II Potente de Rápida Disociación · Antihipertensivo',
    badgeText: 'Cardiovascular · ARA-II Potente',
    shortDescription: 'Profármaco éster que se hidroliza rápidamente en la mucosa intestinal a olmesartán, produciendo una inhibición potente y competitiva del receptor AT1 con una marcada reducción de la presión arterial sistólica y diastólica.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'olme-comp-20',
        name: 'Comprimidos Recubiertos 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'olme-comp-40',
        name: 'Comprimidos Recubiertos 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'olme-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos y Niños (≥6 años)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 40,
        description: '20 mg una vez al día por la mañana. Puede aumentarse a 40 mg una vez al día a las 2 semanas si se requiere mayor control tensional.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial esencial refractaria donde se busque la máxima potencia hipotensora dentro de los ARA-II.',
      'Pacientes con hipertrofia ventricular izquierda.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA de Enteropatía Tipo Celíaca (Sprue-like enteropathy)!: Puede causar diarrea crónica grave con pérdida de peso sustancial, malabsorción y atrofia de vellosidades intestinales (con serología celíaca negativa) tras meses o años de tratamiento; cede completamente al retirar el fármaco.',
      'Potente descenso de la presión arterial sistólica desde las 2 primeras semanas.',
      'Eliminación dual: 40% renal y 60% biliar/fecal.'
    ],
    monitoringAndSideEffects: [
      'Aparición de diarrea acuosa crónica o pérdida de peso involuntaria.',
      'Presión arterial sistólica y diastólica.',
      'Potasio sérico y creatinina.'
    ],
    evidenceAndSources: [
      {
        title: 'FDA Drug Safety Communication: Sprue-like Enteropathy Associated with Olmesartan',
        source: 'US FDA Safety Alerts',
        year: '2023 Update',
        summary: 'Advierte a los clínicos suspender olmesartán si el paciente desarrolla diarrea crónica severa y pérdida ponderal sin causa evidente.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 20 mL/min',
        adjustmentText: 'Dosis estándar (máximo 20 mg si ClCr 20-60 mL/min).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 20 mL/min',
        adjustmentText: 'Usar con precaución; dosis máxima de 20 mg diarios.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Provoca oligohidramnios y lesiones renales irreversibles en el feto. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa o Labetalol.'
    }
  },
  {
    id: 'prasugrel',
    name: 'Prasugrel',
    commercialNames: ['Effient', 'Efient', 'Prasugrel'],
    category: 'Cardiovascular',
    atcCode: 'B01AC22',
    awareCategory: 'Access',
    therapeuticClass: 'Tienopiridina de 3.ª Generación Inhibidora Irreversible Potente de P2Y12',
    badgeText: 'Cardiovascular · Antiagregante ICP (TRITON)',
    shortDescription: 'Profármaco tienopiridínico de tercera generación que se activa eficientemente en el hígado en un solo paso enzimático, logrando una inhibición plaquetaria más rápida, profunda y consistente que clopidogrel. Fármaco de oro para angioplastia coronaria percutánea en síndrome coronario agudo.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'prasu-comp-5',
        name: 'Comprimidos Recubiertos 5 mg (Bajo Peso <60 kg o Edad ≥75 años)',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'prasu-comp-10',
        name: 'Comprimidos Recubiertos 10 mg (Dosis Estándar Mantenimiento)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'prasu-ind-icp-sca',
        name: 'Síndrome Coronario Agudo sometido a Angioplastia Coronaria Transluminal Percutánea (ICP)',
        fixedAdultDoseMg: 60,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '12 meses',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 60,
        description: 'Dosis de carga inmediata: 60 mg vía oral en el momento de la ICP. Mantenimiento: 10 mg una vez al día asociado a AAS (75-100 mg). Si peso corporal < 60 kg o edad ≥ 75 años: reducir mantenimiento a 5 mg una vez al día.'
      }
    ],
    whenToUse: [
      'Pacientes con SCACEST o SCASEST en los que se conoce la anatomía coronaria y se va a proceder a implante de stent coronario.',
      'Trombosis previa de stent con clopidogrel o hiporrespondedores conocidos a clopidogrel.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA EN ACV / AIT PREVIO (BLACKBOX FDA)!: El ensayo TRITON-TIMI 38 demostró un aumento inaceptable de hemorragia intracraneal fatal en pacientes con antecedentes de ictus o accidente isquémico transitorio.',
      'Generalmente no recomendado en pacientes ≥ 75 años por balance desfavorable de sangrado (salvo alto riesgo de trombosis de stent o diabetes, en cuyo caso usar 5 mg/día).',
      'No precargar antes de la coronariografía en SCASEST (estudio ACCOAST) para evitar sangrado innecesario si el paciente requiere cirugía de bypass aortocoronario urgente.'
    ],
    monitoringAndSideEffects: [
      'Signos de hemorragia activa digestiva o en el sitio de punción vascular femoral/radial.',
      'Hemoglobina y hematocrito basales y de control.',
      'Plaquetas (descartar púrpura trombocitopénica trombótica en raras ocasiones).'
    ],
    evidenceAndSources: [
      {
        title: 'TRITON-TIMI 38 & ISAR-REACT 5 Clinical Trials',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'En ISAR-REACT 5 demostró una reducción estadísticamente superior en muerte, IAM o ictus frente a ticagrelor en pacientes con SCA sometidos a ICP sin incrementar sangrados mayores.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis en insuficiencia renal ni hemodiálisis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'Riesgo hemorrágico obstétrico severo. Contraindicado.',
      clinicalAlternative: 'Aspirina sola a dosis bajas.'
    }
  },
  {
    id: 'simvastatina',
    name: 'Simvastatina',
    commercialNames: ['Zocor', 'Simvastatina', 'Pantok', 'Vytorin (comb)'],
    category: 'Cardiovascular',
    atcCode: 'C10AA01',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Competitivo de la HMG-CoA Reductasa Lipofílico Clásico',
    badgeText: 'Cardiovascular · Estatina Histórica (4S)',
    shortDescription: 'Profármaco lipofílico que se hidroliza en el hígado al betahidroxiácido activo. Reduce la síntesis de colesterol hepático incrementando los receptores de LDL. Fármaco histórico que demostró por primera vez reducción de mortalidad coronaria en prevención secundaria (ensayo 4S).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'simva-comp-10',
        name: 'Comprimidos Recubiertos 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'simva-comp-20',
        name: 'Comprimidos Recubiertos 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'simva-comp-40',
        name: 'Comprimidos Recubiertos 40 mg (Dosis Máxima Habitual)',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'simva-ind-dislipidemia',
        name: 'Hipercolesterolemia Primaria / Prevención Cardiovascular Secundaria (Ensayo 4S)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 40,
        description: '20 a 40 mg una vez al día OBLIGATORIAMENTE POR LA NOCHE antes de acostarse (la síntesis de colesterol fisiológica es máxima de madrugada).'
      }
    ],
    whenToUse: [
      'Tratamiento de la hipercolesterolemia moderada y prevención de eventos coronarios.',
      'Pacientes con tratamiento crónico estable que ya toleran bien la molécula.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA de Dosis de 80 mg y Músculo!: La dosis de 80 mg/día está prácticamente PROHIBIDA por la FDA debido a un incremento exponencial del riesgo de miopatía grave y rabdomiólisis letal.',
      'Sustrato crítico del citocromo CYP3A4: CONTRAINDICADA con inhibidores potentes de CYP3A4 (claritromicina, eritromicina, itraconazol, ketoconazol, inhibidores de proteasa, zumo de pomelo).',
      'Límite de dosis con otros fármacos: Máximo 10 mg/día con amiodarona, diltiazem o verapamilo; máximo 20 mg/día con amlodipino.'
    ],
    monitoringAndSideEffects: [
      'Mialgias, calambres y debilidad muscular (medir CPK basal y si hay síntomas).',
      'Transaminasas hepáticas (ALT/AST).',
      'Perfil lipídico a las 4-12 semanas.'
    ],
    evidenceAndSources: [
      {
        title: 'Scandinavian Simvastatin Survival Study (4S)',
        source: 'The Lancet',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Hito histórico que demostró por primera vez una reducción del 30% en la mortalidad total y del 42% en muertes coronarias mediante la reducción intensiva del colesterol.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Iniciar con 10 mg al día; monitorizar estrechamente si se titula.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico)',
      summary: 'Interfiere con la síntesis de colesterol indispensable para el desarrollo embriofetal. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Colesevelam si es imprescindible.'
    }
  },
  {
    id: 'pravastatina',
    name: 'Pravastatina',
    commercialNames: ['Pravachol', 'Lipostat', 'Pravastatina'],
    category: 'Cardiovascular',
    atcCode: 'C10AA03',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de la HMG-CoA Reductasa Hidrofílico Sin Metabolismo por CYP3A4',
    badgeText: 'Cardiovascular · Estatina Sin Interacción CYP3A4',
    shortDescription: 'Estatina hidrofílica obtenida por fermentación de Nocardia autotrophica. A diferencia de simvastatina o atorvastatina, NO se metaboliza por las isoenzimas del citocromo P450 (CYP3A4), lo que le confiere el perfil de interacciones farmacológicas más seguro de toda su clase.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'prava-comp-20',
        name: 'Comprimidos Ranurados 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'prava-comp-40',
        name: 'Comprimidos Ranurados 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'prava-ind-dislipidemia',
        name: 'Hipercolesterolemia / Prevención Cardiovascular en Pacientes Polimedicados (Ensayo WOSCOPS)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 40,
        description: '20 a 40 mg una vez al día por la noche con o sin alimentos.'
      }
    ],
    whenToUse: [
      'Pacientes trasplantados con terapia inmunosupresora (ciclosporina, tacrolimus) donde otras estatinas causan toxicidad muscular grave.',
      'Pacientes con VIH en tratamiento antirretroviral o hepatitis C polimedicados.',
      'Ancianos frágiles polimedicados con riesgo elevado de interacciones farmacológicas.'
    ],
    pearlsAndPitfalls: [
      '¡Cero Interacción con CYP3A4!: Se elimina por sulfatación hepática y excreción renal directa; no compite con fármacos metabolizados por CYP3A4.',
      'Menor penetración tisular muscular por su naturaleza hidrofílica (baja tasa de miopatía).',
      'Potencia reductora de LDL moderada (20-30% de reducción); si se requiere reducción de LDL > 50% preferir rosuvastatina.'
    ],
    monitoringAndSideEffects: [
      'Perfil lipídico a las 6-12 semanas.',
      'Transaminasas basales.',
      'Excelente tolerabilidad muscular.'
    ],
    evidenceAndSources: [
      {
        title: 'WOSCOPS & LIPID Landmark Trials',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró reducciones significativas en infarto de miocardio y muerte coronaria tanto en prevención primaria como secundaria con un perfil de bioseguridad ejemplar.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Iniciar con 10 mg al día; titular según tolerancia.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'Interferencia en la síntesis de esteroides fetales. Contraindicado.',
      clinicalAlternative: 'Medidas dietéticas.'
    }
  },
  {
    id: 'fenofibrato',
    name: 'Fenofibrato',
    commercialNames: ['Tricor', 'Lipanthyl', 'Secalip', 'Fenofibrato'],
    category: 'Cardiovascular',
    atcCode: 'C10AB05',
    awareCategory: 'Access',
    therapeuticClass: 'Agonista de Receptores Nucleares PPAR-Alfa · Hipotrigliceridemiante de Elección',
    badgeText: 'Cardiovascular · Fibrato de Elección (FIELD)',
    shortDescription: 'Fibrato agonista del receptor activado por proliferadores de peroxisomas alfa (PPAR-alfa). Aumenta la lipolisis y eliminación de partículas aterogénicas ricas en triglicéridos activando la lipoproteína lipasa y reduciendo apo C-III. Fármaco de elección para prevenir pancreatitis aguda en hipertrigliceridemia severa.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'feno-caps-145',
        name: 'Comprimidos / Cápsulas Nanocristalizadas 145 mg (Tricor)',
        amountMg: 145,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Formulación nanocristalizada que no depende de la grasa de los alimentos'
      },
      {
        id: 'feno-caps-200',
        name: 'Cápsulas Micronizadas 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Tomar con la comida principal'
      }
    ],
    indications: [
      {
        id: 'feno-ind-hipertrigliceridemia',
        name: 'Hipertrigliceridemia Severa (>500 mg/dL) para Prevención de Pancreatitis Aguda',
        fixedAdultDoseMg: 145,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 200,
        description: '145 mg (nanocristalizado) o 200 mg (micronizado) una vez al día con la comida principal.'
      },
      {
        id: 'feno-ind-retinopatia',
        name: 'Retinopatía Diabética No Proliferativa en Adultos con Diabetes Tipo 2 (FIELD / ACCORD)',
        fixedAdultDoseMg: 145,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 145,
        maxSingleDoseMg: 145,
        description: '145 mg una vez al día (frena la progresión de la microangiopatía retiniana y la necesidad de fotocoagulación con láser).'
      }
    ],
    whenToUse: [
      'Triglicéridos séricos en ayunas > 500 mg/dL (o > 1000 mg/dL) para profilaxis primaria inmediata de pancreatitis aguda necrótica.',
      'Dislipidemia mixta aterogénica (triglicéridos altos y HDL bajo) asociado a estatinas en pacientes seleccionados de alto riesgo.',
      'Retinopatía diabética para enlentecer la necesidad de láser retiniano.'
    ],
    pearlsAndPitfalls: [
      '¡Fibrato Más Seguro en Combinación con Estatinas!: A diferencia de gemfibrozilo, fenofibrato NO inhibe la glucuronidación de las estatinas, por lo que su combinación con atorvastatina o rosuvastatina tiene un riesgo de rabdomiólisis infinitamente menor.',
      'Produce un incremento reversible de la creatinina sérica en un 10-15% (inhibe la secreción tubular de creatinina sin reducir el filtrado glomerular real).',
      'Contraindicado en enfermedad vesicular previa (favorece la litiasis biliar).'
    ],
    monitoringAndSideEffects: [
      'Triglicéridos séricos y perfil lipídico.',
      'Creatinina sérica y transaminasas hepáticas.',
      'Síntomas biliares (cólico biliar o colelitiasis).'
    ],
    evidenceAndSources: [
      {
        title: 'FIELD & ACCORD Lipid Clinical Trials',
        source: 'The Lancet & New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró eficacia contundente en la reducción de triglicéridos y reducción significativa en amputaciones no traumáticas y progresión de retinopatía diabética.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 60 mL/min',
        adjustmentText: 'Dosis estándar de 145-200 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 59 mL/min',
        adjustmentText: 'Reducir la dosis a 48-67 mg al día (no superar 100 mg/día).',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min o Hemodiálisis',
        adjustmentText: 'CONTRAINDICADO por acumulación tóxica y riesgo de rabdomiólisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'Datos de teratogenicidad en animales. Contraindicado en el embarazo salvo hipertrigliceridemia extrema con riesgo vital inminente de pancreatitis.',
      clinicalAlternative: 'Ácidos grasos Omega-3 de alta pureza (EPA/DHA).'
    }
  },
  {
    id: 'gemfibrozilo',
    name: 'Gemfibrozilo',
    commercialNames: ['Lopid', 'Gemfibrozilo', 'Lopid 600'],
    category: 'Cardiovascular',
    atcCode: 'C10AB04',
    awareCategory: 'Access',
    therapeuticClass: 'Fibrato Hipotrigliceridemiante Clásico · Ensayo VA-HIT',
    badgeText: 'Cardiovascular · Fibrato Monoterapia',
    shortDescription: 'Ácido carboxílico derivado del ácido fíbrico que reduce intensamente los niveles de triglicéridos e incrementa el colesterol HDL. Fármaco histórico de referencia en el ensayo VA-HIT para prevención cardiovascular secundaria en varones con HDL bajo.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'gemfi-comp-600',
        name: 'Comprimidos Recubiertos 600 mg',
        amountMg: 600,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'gemfi-comp-900',
        name: 'Comprimidos Recubiertos 900 mg',
        amountMg: 900,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'gemfi-ind-hipertrigliceridemia',
        name: 'Hipertrigliceridemia Severa / Dislipidemia Mixta en Adultos (Ensayo VA-HIT)',
        fixedAdultDoseMg: 600,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 600,
        description: '600 mg dos veces al día, administrados exactamente 30 minutos antes del desayuno y 30 minutos antes de la cena.'
      }
    ],
    whenToUse: [
      'Hiperlipidemia tipo IV y V con riesgo inminente de pancreatitis aguda.',
      'Monoterapia en pacientes con cardiopatía isquémica, HDL bajo y contraindicación a estatinas.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA CON ESTATINAS (BLACKBOX FDA)!: NUNCA asociar gemfibrozilo con estatinas (especialmente simvastatina o cerivastatina); inhibe potentemente el transportador OATP1B1 y la glucuronidación vía UGT1A1/UGT1A3, multiplicando los niveles de estatina y desencadenando rabdomiólisis fulminante letal con fallo renal agudo. Si se requiere asociar un fibrato a una estatina, usar SIEMPRE fenofibrato.',
      'Tomar estrictamente 30 minutos antes de las comidas.',
      'Aumenta el riesgo de litiasis vesicular biliar.'
    ],
    monitoringAndSideEffects: [
      'Triglicéridos séricos y HDL-C.',
      'CPK sérica (descartar miositis).',
      'Transaminasas hepáticas.'
    ],
    evidenceAndSources: [
      {
        title: 'VA-HIT (Veterans Affairs High-Density Lipoprotein Intervention Trial)',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción del 22% en eventos coronarios mayores y del 24% en ictus en varones coronarios con colesterol LDL normal y HDL bajo tratados con gemfibrozilo.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 60 mL/min',
        adjustmentText: 'Dosis estándar de 600 mg cada 12 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '15 - 59 mL/min',
        adjustmentText: 'Iniciar con 900 mg al día; titular con cautela.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 15 mL/min o Hemodiálisis',
        adjustmentText: 'CONTRAINDICADO ABSOLUTAMENTE por riesgo severo de rabdomiólisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'Toxicidad ósea y embriotóxica en animales. Evitar en el embarazo.',
      clinicalAlternative: 'Omega-3 o medidas nutricionales.'
    }
  },
  {
    id: 'isosorbide-mononitrato',
    name: 'Isosorbide Mononitrato',
    commercialNames: ['Imdur', 'Monoket', 'Cardiol', 'Corangin'],
    category: 'Cardiovascular',
    atcCode: 'C01DA14',
    awareCategory: 'Access',
    therapeuticClass: 'Vasodilatador Coronario y Venoso Donador de Óxido Nítrico de Acción Prolongada',
    badgeText: 'Cardiovascular · Nitrato 24h Antianginoso',
    shortDescription: 'Metabolito activo principal del dinitrato de isosorbide con 100% de biodisponibilidad oral y sin metabolismo de primer paso hepático. Produce venodilatación con reducción del retorno venoso (precarga) y dilatación de arterias coronarias epicárdicas para prevención de angina.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'isomono-comp-20',
        name: 'Comprimidos Ranurados 20 mg (Liberación Inmediata)',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'isomono-comp-60-er',
        name: 'Comprimidos de Liberación Prolongada 60 mg (Imdur)',
        amountMg: 60,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar por la mañana entero con medio vaso de agua'
      }
    ],
    indications: [
      {
        id: 'isomono-ind-angina',
        name: 'Profilaxis y Tratamiento Crónico de la Angina de Pecho Estable / Cardiopatía Isquémica',
        fixedAdultDoseMg: 60,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 120,
        maxSingleDoseMg: 60,
        description: 'Formulación de liberación prolongada (Imdur): 30 a 60 mg una vez al día por la mañana (puede aumentarse a 120 mg/día). Si se usa formulación inmediata: 20 mg dos veces al día separadas por 7 horas (ej. 8:00 AM y 3:00 PM) para permitir intervalo libre de nitratos.'
      }
    ],
    whenToUse: [
      'Prevención secundaria de episodios de angina de esfuerzo en pacientes con cardiopatía isquémica crónica estable.',
      'Tratamiento adyuvante de la insuficiencia cardíaca congestiva crónica para reducir la congestión venosa pulmonar.'
    ],
    pearlsAndPitfalls: [
      '¡INTERVALO LIBRE DE NITRATOS OBLIGATORIO DE 10-12 HORAS (PREVENCIÓN DE TOLERANCIA)!: La exposición continua a nitratos agota los grupos sulfhidrilo tisulares intracelulares causando taquifilaxia/tolerancia total en 24-48 horas con pérdida de eficacia; la dosis diaria debe tomarse POR LA MAÑANA para permitir un periodo nocturno libre de nitrato.',
      '¡CONTRAINDICACIÓN MORTAL CON INHIBIDORES DE PDE-5!: NUNCA asociar con sildenafilo o vardenafilo (esperar al menos 24 horas) ni con tadalafilo (esperar al menos 48 horas); la combinación desencadena vasodilatación masiva con colapso cardiovascular y muerte.',
      'Cefalea punzante pulsátil en el 30-50% de pacientes al inicio (disminuye gradualmente en 1-2 semanas).'
    ],
    monitoringAndSideEffects: [
      'Presión arterial basal y ortostática (descartar síncope o hipotensión).',
      'Cefalea frontal/temporal.',
      'Frecuencia cardíaca (taquicardia refleja leve).'
    ],
    evidenceAndSources: [
      {
        title: 'ESC Guidelines for the Diagnosis and Management of Chronic Coronary Syndromes',
        source: 'European Heart Journal',
        year: '2023 Guidelines',
        summary: 'Mantiene a los nitratos de acción prolongada como tratamiento antianginoso de segunda línea eficaz para el alivio de síntomas en angina crónica.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en falla renal.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Uso con precaución si no hay mejores alternativas para la isquemia miocárdica materna.',
      clinicalAlternative: 'Betabloqueantes o Labetalol.'
    }
  },
  {
    id: 'isosorbide-dinitrato',
    name: 'Isosorbide Dinitrato',
    commercialNames: ['Isordil', 'Isosorbide', 'Dilatrate-SR'],
    category: 'Cardiovascular',
    atcCode: 'C01DA08',
    awareCategory: 'Access',
    therapeuticClass: 'Vasodilatador Coronario y Venoso Donador de Óxido Nítrico Oral y Sublingual',
    badgeText: 'Cardiovascular · Nitrato Oral/SL (A-HeFT)',
    shortDescription: 'Nitrato orgánico vasodilatador con presentaciones sublingual (inicio en 2-5 minutos para crisis anginosa aguda) y oral de mantenimiento. Fármaco de oro combinado con hidralazina para reducir mortalidad en insuficiencia cardíaca en personas de raza negra (estudio A-HeFT).',
    availableRoutes: ['oral', 'sublingual'],
    concentrations: [
      {
        id: 'isodinitro-comp-5-sl',
        name: 'Comprimidos Sublinguales 5 mg (Crisis Anginosa Aguda)',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Disolver bajo la lengua; no tragar'
      },
      {
        id: 'isodinitro-comp-10',
        name: 'Comprimidos Orales 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'isodinitro-comp-20',
        name: 'Comprimidos Orales 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'isodinitro-ind-crisis-angina',
        name: 'Crisis Aguda de Angina de Pecho (Vía Sublingual)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis rescate aguda',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 5,
        description: '2.5 a 5 mg disueltos bajo la lengua al inicio del dolor torácico anginoso. Puede repetirse a los 5-10 minutos (máximo 3 tomas en 15 minutos). Si el dolor persiste tras 15 minutos acudir a emergencias.'
      },
      {
        id: 'isodinitro-ind-ic-aheft',
        name: 'Insuficiencia Cardíaca en Combinación con Hidralazina (Ensayo A-HeFT)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 120,
        maxSingleDoseMg: 40,
        description: 'Iniciar con 20 mg cada 8 horas vía oral (asociado a hidralazina 37.5 mg c/8h). Titular hasta la dosis objetivo de 40 mg cada 8 horas (con hidralazina 75 mg c/8h).'
      }
    ],
    whenToUse: [
      'Alivio inmediato de la crisis anginosa cuando no se dispone de nitroglicerina.',
      'Tratamiento de la insuficiencia cardíaca con FEVI reducida en pacientes de raza negra o en aquellos que no toleran IECAs/ARA-II/ARNI (asociado a hidralazina).',
      'Espasmo esofágico difuso y acalasia (relajación del esfínter esofágico inferior).'
    ],
    pearlsAndPitfalls: [
      'Ensayo A-HeFT: Demostró una reducción masiva del 43% en la mortalidad por todas las causas al combinar dinitrato de isosorbide con hidralazina en pacientes afroamericanos con IC avanzada.',
      '¡CONTRAINDICADO ABSOLUTAMENTE CON SILDENAFILO / TADALAFILO!: Riesgo de choque vasodilatador y muerte súbita.',
      'Requiere periodo libre de nitratos de al menos 10-12 horas diarias para evitar taquifilaxia farmacológica.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica y diastólica.',
      'Cefalea vasodilatadora pulsátil.',
      'Aparición de síncope o mareo postural.'
    ],
    evidenceAndSources: [
      {
        title: 'A-HeFT (African-American Heart Failure Trial)',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Evidencia de primer nivel para la combinación de hidralazina y dinitrato de isosorbide en insuficiencia cardíaca avanzada.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; metabolismo hepático extenso.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Uso con cautela en dolor anginoso materno grave.',
      clinicalAlternative: 'Nitroglicerina sublingual de acción más corta.'
    }
  },
  {
    id: 'levosimendan',
    name: 'Levosimendán',
    commercialNames: ['Simdax', 'Levosimendan'],
    category: 'Cardiovascular',
    atcCode: 'C01CX08',
    awareCategory: 'Reserve',
    therapeuticClass: 'Inodilatador Sensibilizador de Calcio a la Troponina C y Abridor de Canales K-ATP',
    badgeText: 'Cardiovascular · Inodilatador Calcio-Sensibilizador',
    shortDescription: 'Inodilatador no catecolaminérgico que sensibiliza la troponina C miocárdica al calcio intracelular durante la sístole sin incrementar el influjo de calcio citosólico. Aumenta la fuerza contráctil sin elevar el consumo miocárdico de oxígeno ni inducir arritmias por sobrecarga cálcica, mientras produce vasodilatación sistémica, coronaria y pulmonar.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'levo-amp-125',
        name: 'Vial Concentrado para Infusión IV 12.5 mg / 5 mL (2.5 mg/mL) (Simdax)',
        amountMg: 12.5,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'Diluir obligatoriamente en 500 mL de Glucosa 5% (concentración 0.025 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'levo-ind-ic-aguda',
        name: 'Insuficiencia Cardíaca Aguda Descompensada Grave / Shock Cardiogénico en UCI',
        fixedAdultDoseMg: 12.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Infusión continua de 24 horas',
        maxDailyDoseMg: 12.5,
        maxSingleDoseMg: 0.2,
        description: 'Dosis de carga (opcional, EVITAR si PAS < 100 mmHg): 6 a 12 mcg/kg en 10 minutos. Infusión continua de mantenimiento: 0.1 mcg/kg/min durante 24 horas; reducir a 0.05 mcg/kg/min si hipotensión o aumentar a 0.2 mcg/kg/min si buena respuesta.'
      }
    ],
    whenToUse: [
      'Insuficiencia cardíaca aguda severamente descompensada con bajo gasto cardíaco en pacientes tratados crónicamente con betabloqueantes.',
      'Fracaso de desconexión de circulación extracorpórea o síndrome de bajo gasto post-cirugía cardíaca.',
      'Falla ventricular derecha aguda e hipertensión pulmonar.'
    ],
    pearlsAndPitfalls: [
      '¡Efecto Hemodinámico Prolongado de 7 a 9 Días!: Aunque la infusión dura solo 24 horas, su metabolito activo OR-1896 tiene una semivida de 80 horas, manteniendo el beneficio inotrópico y vasodilatador durante más de una semana.',
      '¡NO aumenta el consumo miocárdico de oxígeno (MVO2)!: A diferencia de dobutamina o dopamina, no sobrecarga los miocitos de calcio.',
      'Omitir el bolo de carga en pacientes con presión arterial sistólica < 100 mmHg para prevenir hipotensión severa.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial invasiva y frecuencia cardíaca.',
      'Potasio sérico (puede provocar hipopotasemia por apertura de canales K-ATP).',
      'Monitorización ECG continua.'
    ],
    evidenceAndSources: [
      {
        title: 'LIDO & SURVIVE Clinical Trials',
        source: 'The Lancet & JAMA',
        year: '2023 Guidelines',
        summary: 'Demostró mayor aumento del gasto cardíaco y reducción de la presión capilar pulmonar frente a dobutamina, con marcada superioridad hemodinámica en pacientes betabloqueados.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'CONTRAINDICADO en insuficiencia renal grave o hepática avanzada.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Uso de Rescate Vital en Cuidados Críticos',
      summary: 'Reservado exclusivamente para shock cardiogénico periparto refractario.',
      clinicalAlternative: 'Dobutamina o Milrinona según situación hemodinámica.'
    }
  },
  {
    id: 'propafenona',
    name: 'Propafenona',
    commercialNames: ['Rythmol', 'Rytmonorm', 'Propafenona'],
    category: 'Cardiovascular',
    atcCode: 'C01BC03',
    awareCategory: 'Access',
    therapeuticClass: 'Antiarrítmico Clase IC con Débil Actividad Betabloqueante',
    badgeText: 'Cardiovascular · Antiarrítmico Clase IC',
    shortDescription: 'Antiarrítmico que bloquea los canales rápidos de sodio miocárdicos y posee adicionalmente una acción antagonista beta-adrenérgica débil intrínseca. Fármaco de referencia para cardioversión médica ambulatoria ("pill-in-the-pocket") de la fibrilación auricular paroxística en ausencia de cardiopatía estructural.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'propa-comp-150',
        name: 'Comprimidos Recubiertos 150 mg',
        amountMg: 150,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'propa-comp-300',
        name: 'Comprimidos Recubiertos 300 mg (Dosis "Pill-in-the-Pocket")',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'propa-ind-pill-pocket',
        name: 'Cardioversión Médica Ambulatoria de Fibrilación Auricular ("Pill in the Pocket")',
        fixedAdultDoseMg: 600,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Toma única ante crisis paroxística',
        maxDailyDoseMg: 600,
        maxSingleDoseMg: 600,
        description: 'Toma única de 450 a 600 mg por vía oral (450 mg si peso < 70 kg) administrada ante el inicio de palpitaciones en pacientes previamente testados en hospital.'
      },
      {
        id: 'propa-ind-mantenimiento',
        name: 'Prevención de Recurrencias de Fibrilación Auricular / Taquicardias Supraventriculares',
        fixedAdultDoseMg: 150,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Crónico',
        maxDailyDoseMg: 900,
        maxSingleDoseMg: 300,
        description: '150 mg cada 8 horas con las comidas; puede titularse a 300 mg cada 12 horas (máximo 300 mg cada 8 horas).'
      }
    ],
    whenToUse: [
      'Cardioversión y profilaxis de fibrilación auricular paroxística y taquicardias por reentrada nodal en corazones estructuralmente normales.',
      'Síndrome de Wolff-Parkinson-White sin cardiopatía isquémica.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ESTRICTA EN CARDIOPATÍA ISQUÉMICA O DISFUNCIÓN VENTRICULAR!: Al igual que flecainida, es altamente proarrítmica en presencia de cicatriz de infarto o miocardiopatía.',
      'Sabor metálico amargo característico en la boca en hasta un 20% de pacientes.',
      'Efecto betabloqueante intrínseco: Puede desencadenar broncoespasmo en asmáticos o bradicardia excesiva si se combina con otros betabloqueantes.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (anchura de QRS e intervalo PR).',
      'Ecocardiograma para verificar ausencia de cardiopatía estructural.',
      'Disgeusia (sabor metálico) y mareo.'
    ],
    evidenceAndSources: [
      {
        title: 'ESC Guidelines for the Management of Atrial Fibrillation',
        source: 'European Heart Journal',
        year: '2023 Guidelines',
        summary: 'Recomienda propafenona como fármaco de clase I para la cardioversión de la FA de reciente comienzo en pacientes seleccionados sin cardiopatía estructural.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 35 mL/min',
        adjustmentText: 'Dosis habitual.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 35 mL/min',
        adjustmentText: 'Reducir la dosis al 50% y monitorizar ECG.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio en Gestación',
      summary: 'Atraviesa la placenta. Usar solo si los beneficios superan los riesgos de la arritmia materna.',
      clinicalAlternative: 'Flecainida o Sotalol.'
    }
  },
  {
    id: 'dronedarona',
    name: 'Dronedarona',
    commercialNames: ['Multaq', 'Dronedarona'],
    category: 'Cardiovascular',
    atcCode: 'C01BD07',
    awareCategory: 'Access',
    therapeuticClass: 'Antiarrítmico Clase III Multicanal No Yodado (Derivado Benzofurano)',
    badgeText: 'Cardiovascular · Antiarrítmico Multaq (ATHENA)',
    shortDescription: 'Análogo estructural de la amiodarona desprovisto del grupo yodo y con un grupo metilsulfonamida que reduce su lipofilia y acumulación tisular. Bloquea múltiples corrientes iónicas (K+, Na+, Ca2+) y receptores adrenérgicos, reduciendo las hospitalizaciones cardiovasculares en fibrilación auricular no permanente sin toxicidad tiroidea o pulmonar.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'drone-comp-400',
        name: 'Comprimidos Recubiertos 400 mg (Multaq)',
        amountMg: 400,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'drone-ind-fa-paroxistica',
        name: 'Mantenimiento del Ritmo Sinusal en Fibrilación Auricular Paroxística / Persistente (Ensayo ATHENA)',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 800,
        maxSingleDoseMg: 400,
        description: '400 mg dos veces al día: un comprimido con el desayuno y un comprimido con la cena.'
      }
    ],
    whenToUse: [
      'Mantenimiento del ritmo sinusal en pacientes con antecedentes de fibrilación auricular paroxística o persistente tras cardioversión médica o eléctrica.',
      'Alternativa a amiodarona cuando se desea evitar la toxicidad pulmonar fibrótica o tiroidea a largo plazo.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA EN INSUFICIENCIA CARDÍACA CONGESTIVA O FEVI ≤ 35% (ENSAYO ANDROMEDA)!: Duplica la mortalidad en pacientes con IC inestable o disfunción ventricular severa.',
      '¡CONTRAINDICADA EN FIBRILACIÓN AURICULAR PERMANENTE (ENSAYO PALLAS)!: Solo está autorizada para FA paroxística o persistente; si la FA se convierte en permanente, el fármaco debe suspenderse de inmediato.',
      'Tomar obligatoriamente con comida: aumenta la biodisponibilidad de 2 a 3 veces.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (intervalo QTc seriado; suspender si QTc > 500 ms).',
      'Función hepática (ALT/AST basales y mensuales durante los primeros 6 meses).',
      'Creatinina sérica (produce un aumento fisiológico de 0.1-0.2 mg/dL por inhibición del transporte tubular sin caída del FGe real).'
    ],
    evidenceAndSources: [
      {
        title: 'ATHENA Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción del 24% en hospitalizaciones por causas cardiovasculares o muerte en pacientes con fibrilación auricular paroxística o persistente.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación biliar/fecal del 84%.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico)',
      summary: 'Efectos teratogénicos y embriofetales comprobados en animales. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Flecainida o Sotalol.'
    }
  },
  {
    id: 'ranolazina',
    name: 'Ranolazina',
    commercialNames: ['Ranexa', 'Rancad', 'Ranolazina'],
    category: 'Cardiovascular',
    atcCode: 'C01EB18',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Selectivo de la Corriente Tardía de Sodio (INaL) · Antiisquémico Metabólico',
    badgeText: 'Cardiovascular · Antianginoso Metabólico (Sin Efecto Hemodinámico)',
    shortDescription: 'Inhibidor selectivo de la corriente tardía de entrada de sodio (INaL) en los miocitos isquémicos. Previene la sobrecarga intracelular de sodio y la consiguiente acumulación de calcio por el intercambiador Na+/Ca2+, disminuyendo la rigidez diastólica miocárdica y mejorando la perfusión subendocárdica sin alterar la presión arterial ni la frecuencia cardíaca.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'rano-comp-375',
        name: 'Comprimidos de Liberación Prolongada 375 mg',
        amountMg: 375,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tragar enteros; no triturar ni masticar'
      },
      {
        id: 'rano-comp-500',
        name: 'Comprimidos de Liberación Prolongada 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'rano-comp-750',
        name: 'Comprimidos de Liberación Prolongada 750 mg',
        amountMg: 750,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'rano-ind-angina-cronica',
        name: 'Tratamiento Adyuvante de la Angina de Pecho Estable Refractaria en Adultos',
        fixedAdultDoseMg: 375,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 750,
        description: 'Iniciar con 375 mg cada 12 horas con o sin alimentos. A las 2-4 semanas titular a 500 mg cada 12 horas y, según respuesta clínica, hasta un máximo de 750 mg cada 12 horas.'
      }
    ],
    whenToUse: [
      'Angina de pecho crónica estable en pacientes con síntomas limitantes a pesar de tratamiento óptimo con betabloqueantes y calcioantagonistas.',
      'Pacientes coronarios con hipotensión o bradicardia basal que impiden titular betabloqueantes o nitratos.',
      'Angina microvascular (isquemia con arterias coronarias sin obstrucción epicárdica - INOCA).'
    ],
    pearlsAndPitfalls: [
      '¡CERO IMPACTO SOBRE FRECUENCIA CARDÍACA O PRESIÓN ARTERIAL!: Es uno de los pocos fármacos antianginosos que no causa bradicardia ni hipotensión, siendo idóneo en pacientes con PA o FC límites.',
      'Prolonga de forma dependiente de la dosis el intervalo QTc en el ECG (media de 6 ms; contraindicado con fármacos que alarguen el QT o en síndrome de QT largo congénito).',
      'Metabolizado por CYP3A4 y transportado por P-gp; contraindicado con inhibidores potentes de CYP3A4.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (medición basal y periódica del QTc).',
      'Estreñimiento, náuseas y mareo.',
      'Función renal (ajuste de dosis si insuficiencia moderada).'
    ],
    evidenceAndSources: [
      {
        title: 'MERLIN-TIMI 36 Clinical Trial',
        source: 'JAMA',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción significativa de la isquemia recurrente sin aumentar la mortalidad por todas las causas ni las arritmias ventriculares en pacientes con síndrome coronario.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '30 - 60 mL/min',
        adjustmentText: 'Titular con cautela; no superar 500 mg cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min o Hemodiálisis',
        adjustmentText: 'CONTRAINDICADO en insuficiencia renal grave.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en Gestación',
      summary: 'Datos de seguridad muy escasos en humanos. Evitar salvo necesidad insustituible.',
      clinicalAlternative: 'Nitratos o Betabloqueantes.'
    }
  },
  {
    id: 'minoxidil-oral',
    name: 'Minoxidil Oral',
    commercialNames: ['Loniten', 'Minoxidil'],
    category: 'Cardiovascular',
    atcCode: 'C02DC01',
    awareCategory: 'Access',
    therapeuticClass: 'Vasodilatador Arteriolar Directo Potente Abridor de Canales de K-ATP',
    badgeText: 'Cardiovascular · Antihipertensivo Refractario',
    shortDescription: 'Potente vasodilatador periférico directo de la musculatura lisa arteriolar que abre los canales de potasio sensibles a ATP (K-ATP). Reservado exclusivamente como fármaco de última línea para la hipertensión arterial severa refractaria que no responde a triples terapias a dosis plenas.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'minox-comp-5',
        name: 'Comprimidos Ranurados 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'minox-comp-10',
        name: 'Comprimidos Ranurados 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'minox-ind-hta-refractaria',
        name: 'Hipertensión Arterial Severa Refractaria a Triple Terapia Antihipertensiva Plena',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 40,
        description: 'Iniciar con 5 mg una vez al día (o cada 12h). Titular cada 3-7 días a 10 mg, 20 mg hasta 40 mg al día (dosis máxima 100 mg/día). DEBE ASOCIARSE OBLIGATORIAMENTE A UN DIURÉTICO DE ASA Y A UN BETABLOQUEANTE.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial refractaria extrema con daño inminente de órgano diana resistente a combinación de IECA/ARA-II + Calcioantagonista + Tiazida + Espironolactona.',
      'Hipertensión maligna en pacientes con insuficiencia renal avanzada.'
    ],
    pearlsAndPitfalls: [
      '¡REGLA OBLIGATORIA DEL TRIPLE ESQUEMA (TERAPIA COMBINADA OBLIGATORIA)!: El minoxidil NUNCA se prescribe solo; produce una vasodilatación arteriolar tan potente que desencadena: 1) Taquicardia refleja masiva e incremento del consumo de oxígeno miocárdico (requiere un BETABLOQUEANTE a dosis plenas); y 2) Retención renal de sodio y agua masiva con anasarca y edema pulmonar (requiere un DIURÉTICO DE ASA potente como furosemida).',
      '¡Riesgo de Derrame Pericárdico con Taponamiento Cardíaco!: Puede causar derrame pericárdico exudativo serohemático en hasta un 3-5% de pacientes, especialmente con disfunción renal.',
      'Hipertricosis generalizada (crecimiento de vello en rostro, brazos y espalda) en el 80% de pacientes a las pocas semanas de tratamiento.'
    ],
    monitoringAndSideEffects: [
      'Peso diario y edemas periféricos (signo precoz de retención de líquidos).',
      'Ecocardiograma periódico (descartar derrame pericárdico).',
      'Frecuencia cardíaca en reposo y presión arterial.'
    ],
    evidenceAndSources: [
      {
        title: 'AHA Scientific Statement on Resistant Hypertension',
        source: 'Hypertension',
        year: '2023 Guidelines',
        summary: 'Sitúa al minoxidil oral como vasodilatador de último recurso cuando todas las opciones farmacológicas estándar han fracasado.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis; sin embargo, en falla renal aumenta el riesgo de derrame pericárdico y retención de volumen (intensificar diurético de asa).',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'Asociado a hipertricosis fetal y alteraciones hemodinámicas. Contraindicado.',
      clinicalAlternative: 'Hidralazina o Labetalol.'
    }
  },
  {
    id: 'nicardipino',
    name: 'Nicardipino IV',
    commercialNames: ['Cardene IV', 'Loxen', 'Nicardipino'],
    category: 'Cardiovascular',
    atcCode: 'C08CA04',
    awareCategory: 'Access',
    therapeuticClass: 'Calcioantagonista Dihidropiridínico Intravenoso de Alta Precisión y Vasoselectividad',
    badgeText: 'Cardiovascular · Emergencia Hipertensiva IV',
    shortDescription: 'Calcioantagonista dihidropiridínico parenteral con una selectividad vascular arterial 30.000 veces superior a la miocárdica (nulo efecto inotrópico negativo). Es el antihipertensivo intravenoso de primera línea preferido en UCI para el control titrable y predecible de emergencias hipertensivas, ictus hemorrágico y eclampsia.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'nicar-amp-25',
        name: 'Ampolla Inyectable IV 25 mg / 10 mL (2.5 mg/mL) (Cardene IV)',
        amountMg: 25,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Diluir en 240 mL de Solución Fisiológica o Glucosa 5% (concentración final 0.1 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'nicar-ind-emergencia-hta',
        name: 'Emergencia Hipertensiva / Ictus Hemorrágico Agudo / Postoperatorio Cardiovascular',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento agudo en UCI',
        maxDailyDoseMg: 360,
        maxSingleDoseMg: 15,
        description: 'Infusión continua IV inicial: iniciar a 5 mg/hora. Titular aumentando 2.5 mg/hora cada 5 a 15 minutos hasta alcanzar la presión arterial objetivo (máximo 15 mg/hora). Una vez lograda la PA deseada, reducir la velocidad a 3 mg/hora de mantenimiento.'
      }
    ],
    whenToUse: [
      'Hemorragia intracerebral aguda o ictus isquémico candidato a trombólisis donde se exige un control tensional estricto (PAS < 140 o < 185 mmHg) sin caídas bruscas ni variabilidad.',
      'Emergencias hipertensivas con disección aórtica (asociado a esmolol) o encefalopatía hipertensiva.',
      'Hipertensión severa perioperatoria en neurocirugía o cirugía vascular.'
    ],
    pearlsAndPitfalls: [
      '¡Mayor Precisión y Predictibilidad que el Labetalol o Nitroprusiato!: No produce toxicidad por tiocianato/cianuro ni "efecto rebote", y preserva el flujo sanguíneo cerebral y coronario sin incrementar la presión intracraneal.',
      'Cambiar el sitio de infusión periférica cada 12 horas para evitar tromboflebitis química local (preferir catéter venoso central).',
      'No causa depresión de la contractilidad miocárdica.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial continua por línea arterial.',
      'Frecuencia cardíaca (taquicardia refleja leve compensatoria).',
      'Cefalea y rubor facial transitorio.'
    ],
    evidenceAndSources: [
      {
        title: 'CLASP & ATACH-2 Clinical Trials',
        source: 'New England Journal of Medicine & Neurocritical Care',
        year: '2023 Guidelines',
        summary: 'Demostró superioridad en alcanzar el rango de presión arterial objetivo de forma rápida y estable en pacientes con hemorragia intracerebral aguda frente a labetalol.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; metabolismo hepático casi total.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible para Emergencias Hipertensivas en Gestación',
      summary: 'Fármaco de segunda línea eficaz para crisis hipertensivas graves periparto.',
      clinicalAlternative: 'Labetalol IV o Hidralazina IV.'
    }
  },
  {
    id: 'edoxaban',
    name: 'Edoxabán',
    commercialNames: ['Savaysa', 'Lixiana', 'Edoxaban'],
    category: 'Cardiovascular',
    atcCode: 'B01AF03',
    awareCategory: 'Access',
    therapeuticClass: 'Anticoagulante Oral Directo (ACOD) Inhibidor del Factor Xa de Toma Única Diaria',
    badgeText: 'Cardiovascular · ACOD Factor Xa (ENGAGE AF)',
    shortDescription: 'Inhibidor directo, selectivo y reversible del factor Xa con pauta de una sola toma al día. Excelente perfil de seguridad hemorrágica en pacientes ancianos y con comorbilidades en fibrilación auricular y tromboembolismo venoso.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'edox-comp-15',
        name: 'Comprimidos Recubiertos 15 mg',
        amountMg: 15,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'edox-comp-30',
        name: 'Comprimidos Recubiertos 30 mg (Dosis Reducida)',
        amountMg: 30,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'edox-comp-60',
        name: 'Comprimidos Recubiertos 60 mg (Dosis Estándar)',
        amountMg: 60,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'edox-ind-fa',
        name: 'Prevención de Ictus en Fibrilación Auricular No Valvular (Ensayo ENGAGE AF-TIMI 48)',
        fixedAdultDoseMg: 60,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 60,
        description: '60 mg una vez al día con o sin alimentos. Reducir a 30 mg una vez al día si cumple CUALQUIERA DE: ClCr 15-50 mL/min, peso corporal ≤ 60 kg, o uso concomitante de inhibidores potentes de P-gp (ciclosporina, dronedarona, eritromicina o ketoconazol).'
      },
      {
        id: 'edox-ind-tep-tvp',
        name: 'Tratamiento de TVP y Embolia Pulmonar tras al menos 5 días de Heparina Parenteral (Hokusai-VTE)',
        fixedAdultDoseMg: 60,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Al menos 3-6 meses',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 60,
        description: '60 mg una vez al día iniciado INMEDIATAMENTE tras finalizar 5 a 10 días de anticoagulación parenteral inicial con heparina (HBPM).'
      }
    ],
    whenToUse: [
      'Prevención de ictus en fibrilación auricular no valvular en adultos con al menos un factor de riesgo.',
      'Tratamiento de trombosis venosa profunda y tromboembolismo pulmonar tras curso inicial de heparina.',
      'Pacientes ancianos o con riesgo hemorrágico elevado que se benefician de una pauta cómoda de una vez al día.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA de Función Renal Sobrenormal (ClCr > 95 mL/min)!: En pacientes con aclaramiento de creatinina mayor de 95 mL/min, edoxabán se elimina con demasiada rapidez, aumentando el riesgo de ictus isquémico comparado con warfarina; en EE.UU. está contraindicado con ClCr > 95 mL/min.',
      'Criterio de reducción de dosis a 30 mg muy sencillo: Basta con cumplir SOLO UNO de los tres criterios (ClCr 15-50, peso ≤60 kg o inhibidor P-gp).',
      'No requiere ayuno ni toma con alimentos grasos.'
    ],
    monitoringAndSideEffects: [
      'Aclaramiento de creatinina Cockcroft-Gault (vigilar no superar 95 mL/min ni caer < 15 mL/min).',
      'Hemoglobina y hematocrito periódicos.',
      'Ausencia de sangrado oculto.'
    ],
    evidenceAndSources: [
      {
        title: 'ENGAGE AF-TIMI 48 & Hokusai-VTE Clinical Trials',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró no inferioridad frente a warfarina en la prevención de ictus con una reducción estadísticamente significativa del 20% en sangrado mayor y del 53% en hemorragia intracraneal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '51 - 95 mL/min',
        adjustmentText: '60 mg una vez al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '15 - 50 mL/min',
        adjustmentText: 'Reducir a 30 mg una vez al día.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 15 mL/min',
        adjustmentText: 'No recomendado.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '> 95 mL/min',
        adjustmentText: 'Contraindicado en EE.UU. en FA por riesgo incrementado de ictus isquémico.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Riesgo hemorrágico materno-fetal severo. Contraindicado.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Enoxaparina SC.'
    }
  },
  {
    id: 'fondaparinux',
    name: 'Fondaparinux',
    commercialNames: ['Arixtra', 'Fondaparinux'],
    category: 'Cardiovascular',
    atcCode: 'B01AX05',
    awareCategory: 'Access',
    therapeuticClass: 'Pentasacárido Sintético Inhibidor Indirecto Selectivo del Factor Xa',
    badgeText: 'Cardiovascular · Pentasacárido (OASIS-5)',
    shortDescription: 'Pentasacárido sintético que reproduce exactamente la secuencia de unión de alta afinidad de la heparina a la antitrombina III. Induce un cambio conformacional que potencia 300 veces la neutralización selectiva del factor Xa sin inhibir la trombina (factor IIa). Estándar de oro en SCASEST por reducir a la mitad las hemorragias mayores frente a enoxaparina.',
    availableRoutes: ['sc', 'iv'],
    concentrations: [
      {
        id: 'fonda-jeringa-25',
        name: 'Jeringa Prellenada con Sistema de Seguridad 2.5 mg / 0.5 mL (SCA y Profilaxis)',
        amountMg: 2.5,
        volumeMl: 0.5,
        form: 'vial',
        unit: 'mL'
      },
      {
        id: 'fonda-jeringa-75',
        name: 'Jeringa Prellenada 7.5 mg / 0.6 mL (Tratamiento TVP/TEP)',
        amountMg: 7.5,
        volumeMl: 0.6,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'fonda-ind-scasest',
        name: 'Síndrome Coronario Agudo Sin Elevación del ST (SCASEST / Ensayo OASIS-5)',
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Hasta el alta o máximo 8 días',
        maxDailyDoseMg: 2.5,
        maxSingleDoseMg: 2.5,
        description: '2.5 mg por vía subcutánea una vez al día. En caso de angioplastia coronaria percutánea (ICP), administrar heparina no fraccionada adicional estándar durante el procedimiento.'
      },
      {
        id: 'fonda-ind-tvp-tep',
        name: 'Tratamiento de Trombosis Venosa Profunda y Tromboembolismo Pulmonar',
        fixedAdultDoseMg: 7.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-9 días',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: 'Dosis ponderal subcutánea una vez al día: Peso < 50 kg: 5 mg/día. Peso 50 a 100 kg: 7.5 mg/día. Peso > 100 kg: 10 mg/día.'
      }
    ],
    whenToUse: [
      'Fármaco anticoagulante de elección (recomendación clase IA de las guías europeas ESC) en el SCASEST manejado de forma médica o invasiva no urgente.',
      'Anticoagulación en pacientes con antecedentes de trombocitopenia inducida por heparina (TIH tipo II): Al ser un pentasacárido sintético ultracorto, NO interactúa con el factor plaquetario 4 (PF4) y no produce TIH.',
      'Tromboprofilaxis en cirugía ortopédica mayor de cadera o rodilla.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Trombosis de Catéter en ICP!: En caso de angioplastia coronaria percutánea urgente, fondaparinux no previene la trombosis del catéter guía intraprocedimiento; debe administrarse un bolo suplementario de heparina no fraccionada en el cateterismo.',
      'Ensayo OASIS-5: Redujo a la mitad las hemorragias mayores a los 9 días frente a enoxaparina, traduciéndose en una reducción significativa de la mortalidad a 30 días.',
      'Eliminación 100% renal inalterada: CONTRAINDICADO absolutamente si ClCr < 20 mL/min.'
    ],
    monitoringAndSideEffects: [
      'Hemoglobina y hematocrito basales y de control.',
      'Aclaramiento de creatinina (Cockcroft-Gault).',
      'No requiere control de plaquetas por ausencia de TIH.'
    ],
    evidenceAndSources: [
      {
        title: 'OASIS-5 Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró igual eficacia antiisquémica que enoxaparina pero redujo las hemorragias mayores en un 48%, disminuyendo significativamente la mortalidad a 30 días en SCASEST.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '20 - 49 mL/min',
        adjustmentText: 'En profilaxis reducir a 1.5 mg al día; en tratamiento usar con extrema precaución.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 20 mL/min o Hemodiálisis',
        adjustmentText: 'CONTRAINDICADO ABSOLUTAMENTE por acumulación prolongada y hemorragia.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Alternativa en Gestantes con Alergia / TIH a Heparinas',
      summary: 'No cruza la placenta en cantidades significativas. Es el anticoagulante parenteral de rescate preferido en gestantes con trombocitopenia inducida por heparina.',
      clinicalAlternative: 'Enoxaparina como primera elección salvo TIH.'
    }
  },
  {
    id: 'tirofiban',
    name: 'Tirofibán',
    commercialNames: ['Aggrastat', 'Tirofiban'],
    category: 'Cardiovascular',
    atcCode: 'B01AC17',
    awareCategory: 'Reserve',
    therapeuticClass: 'Inhibidor Antagonista No Peptídico del Receptor Plaquetario Glicoproteína IIb/IIIa',
    badgeText: 'Cardiovascular · Inhibidor GP IIb/IIIa IV (SCA / ICP)',
    shortDescription: 'Antagonista no peptídico reversible del receptor plaquetario GPIIb/IIIa (integrina alfaIIb-beta3). Bloquea la vía final común de la agregación plaquetaria impidiendo la unión del fibrinógeno y del factor von Willebrand a las plaquetas activadas. Fármaco intravenoso de rescate en el laboratorio de hemodinámica.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'tiro-bolsa-125',
        name: 'Bolsa para Infusión IV Lista para Usar 12.5 mg / 250 mL (50 mcg/mL) (Aggrastat)',
        amountMg: 12.5,
        volumeMl: 250,
        form: 'vial',
        unit: 'mL',
        notes: 'Infusión lista para usar de 50 mcg/mL'
      }
    ],
    indications: [
      {
        id: 'tiro-ind-icp-sca',
        name: 'Angioplastia Coronaria (ICP) de Alto Riesgo / Trombosis Intracoronaria Aguda (Bolo Alto)',
        fixedAdultDoseMg: 1.75,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento agudo en hemodinámica (12 a 24 horas)',
        maxDailyDoseMg: 25,
        maxSingleDoseMg: 2,
        description: 'Régimen de bolo alto (HDB): 25 mcg/kg IV en bolo durante 3 a 5 minutos al inicio de la ICP. Mantenimiento: infusión continua a 0.15 mcg/kg/min durante 12 a 24 horas (máximo 48 horas).'
      }
    ],
    whenToUse: [
      'Complicaciones trombóticas agudas intraprocedimiento durante la angioplastia coronaria (fenómeno de "no-reflow", disección trombótica o trombo gigante residual).',
      'Pacientes con SCACEST que van a ICP primaria con alta carga trombótica o que no recibieron dosis adecuada previa de inhibidores de P2Y12 orales.'
    ],
    pearlsAndPitfalls: [
      '¡Bloqueo Inmediato de la Vía Final Común!: Inhibe más del 90% de la agregación plaquetaria en cuestión de minutos tras el bolo intravenoso.',
      'Reversibilidad rápida: Tras detener la infusión, la función plaquetaria se recupera a más del 50% en menos de 4 a 6 horas gracias a su corta semivida (2 horas).',
      'Riesgo de trombocitopenia aguda profunda inmune (<50.000/mcL en menos de 24h); realizar hemograma de control obligatorio a las 2-6 horas de iniciar la infusión.'
    ],
    monitoringAndSideEffects: [
      'Recuento de plaquetas basal y a las 2 a 6 horas de iniciada la infusión.',
      'Sitios de acceso vascular y punción femoral/radial (hematomas o hemorragia retroperitoneal).',
      'Hemoglobina y hematocrito.'
    ],
    evidenceAndSources: [
      {
        title: 'PRISM-PLUS & EVEREST Clinical Trials',
        source: 'New England Journal of Medicine & Circulation',
        year: '2023 Guidelines',
        summary: 'Demostró superioridad en perfusión miocárdica, resolución del segmento ST y reducción de infarto de miocardio periprocedimiento con el régimen de bolo alto de 25 mcg/kg.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 60 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 60 mL/min',
        adjustmentText: 'Mantener el bolo de 25 mcg/kg pero REDUCIR la infusión de mantenimiento al 50% (0.075 mcg/kg/min).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Uso de Emergencia Crítica en Gestación',
      summary: 'Uso restringido a angioplastia coronaria de emergencia o infarto agudo materno con riesgo vital.',
      clinicalAlternative: 'Heparina y aspirina.'
    }
  },
  {
    id: 'acido-bempedoico',
    name: 'Ácido Bempedoico',
    commercialNames: ['Nexletol', 'Nustendi (comb)', 'Nilemdo'],
    category: 'Cardiovascular',
    atcCode: 'C10AX15',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de la ATP-Citrato Liasa (ACL) Hepática · Hipolipemiante de Nueva Generación',
    badgeText: 'Cardiovascular · Sin Efecto Muscular (CLEAR)',
    shortDescription: 'Profármaco oral que actúa en la vía de biosíntesis del colesterol un paso por encima de la HMG-CoA reductasa, inhibiendo la ATP-citrato liasa. Al requerir activación exclusiva por la enzima acil-CoA sintetasa muy larga cadena-1 (ACSVL1), presente en el hígado pero TOTALMENTE AUSENTE EN EL MÚSCULO ESQUELÉTICO, carece por completo de la toxicidad muscular y mialgias típicas de las estatinas.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'bempe-comp-180',
        name: 'Comprimidos Recubiertos 180 mg (Nexletol / Nilemdo)',
        amountMg: 180,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'bempe-ind-intolerancia-estatinas',
        name: 'Hipercolesterolemia y Prevención de Eventos Cardiovasculares en Intolerancia a Estatinas (CLEAR Outcomes)',
        fixedAdultDoseMg: 180,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 180,
        maxSingleDoseMg: 180,
        description: '180 mg una vez al día con o sin alimentos, solo o en combinación con ezetimiba (10 mg).'
      }
    ],
    whenToUse: [
      'Pacientes con alto o muy alto riesgo cardiovascular que presentan intolerancia completa a las estatinas confirmada por mialgias o miopatía.',
      'Tratamiento adyuvante para pacientes que no alcanzan el objetivo de c-LDL (<55 mg/dL) con estatinas a dosis máximas toleradas y ezetimiba.'
    ],
    pearlsAndPitfalls: [
      '¡CERO TOXICIDAD MUSCULAR MIOPÁTICA!: La enzima que lo activa (ACSVL1) no existe en el músculo esquelético humano, por lo que el ácido bempedoico no puede acumularse en el tejido muscular, aboliendo los dolores musculares.',
      'Ensayo CLEAR Outcomes: Demostró una reducción significativa del 13% en eventos cardiovasculares mayores (muerte cardiovascular, IAM no fatal, ictus o revascularización coronaria) en pacientes intolerantes a estatinas.',
      'Efectos secundarios metabólicos característicos: Ligero incremento de ácido úrico sérico (riesgo de desencadenar gota en pacientes predispuestos) y modesta elevación reversible de transaminasas hepáticas.'
    ],
    monitoringAndSideEffects: [
      'Ácido úrico sérico (descartar hiperuricemia o ataques agudos de gota).',
      'Transaminasas hepáticas (ALT/AST).',
      'Perfil lipídico a las 8-12 semanas (reducción adicional del 15-25% de c-LDL).'
    ],
    evidenceAndSources: [
      {
        title: 'CLEAR Outcomes Trial (Bempedoic Acid and Cardiovascular Outcomes in Statin-Intolerant Patients)',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'Confirmó que el ácido bempedoico reduce de forma estadísticamente significativa los eventos cardiovasculares adversos mayores en pacientes con intolerancia documentada a las estatinas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar de 180 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min o Hemodiálisis',
        adjustmentText: 'Datos de seguridad limitados; usar con precaución.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Interfiere con la síntesis de colesterol necesaria para la embriogénesis. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Resinas secuestradoras de ácidos biliares (Colesevelam).'
    }
  }
];
