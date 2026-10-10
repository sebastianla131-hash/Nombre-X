import { Medication } from '../types';

export const MEDSCAPE_NEUROLOGY_PSYCHIATRY: Medication[] = [
  {
    id: 'levetiracetam',
    name: 'Levetiracetam',
    commercialNames: ['Keppra', 'Kopodex', 'Ceumid', 'Levetiracetam'],
    category: 'Antídotos / Toxicología',
    atcCode: 'N03AX14',
    awareCategory: 'Access',
    therapeuticClass: 'Antiepiléptico de Amplio Espectro · Ligando de la Proteína Vesicular Sináptica SV2A',
    badgeText: 'Neurología · Antiepiléptico 1.ª Línea',
    shortDescription: 'Antiepiléptico de amplio espectro que modula la exocitosis de neurotransmisores por unión a la proteína SV2A. Farmacocinética lineal y nula inducción de enzimas hepáticas.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'leve-sol-100',
        name: 'Solución Oral 100 mg / mL con Jeringa Dosificadora (Pediátrico)',
        amountMg: 100,
        volumeMl: 1,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 300,
        notes: 'Graduada en mL y mg (100 mg por cada mL)'
      },
      {
        id: 'leve-comp-500',
        name: 'Comprimidos Recubiertos Ranurados 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'leve-comp-1000',
        name: 'Comprimidos Recubiertos Ranurados 1000 mg (1 g)',
        amountMg: 1000,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'leve-vial-500',
        name: 'Solución para Infusión IV 500 mg / 5 mL (100 mg/mL)',
        amountMg: 500,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'leve-ind-crisis-adulto',
        name: 'Epilepsia: Crisis de Inicio Focal o Generalizadas en Adultos',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1500,
        description: 'Dosis inicial de 500 mg cada 12 horas. Titular cada 2 semanas en incrementos de 500 mg c/12h hasta dosis habitual de 1000 a 1500 mg cada 12 horas.'
      },
      {
        id: 'leve-ind-status-iv-carga',
        name: 'Estatus Epiléptico Convulsivo (Segunda Línea tras Benzodiacepinas)',
        fixedAdultDoseMg: 3000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Agudo',
        maxDailyDoseMg: 4500,
        maxSingleDoseMg: 3000,
        description: 'Dosis de carga IV de 60 mg/kg (máximo 4500 mg en adultos, habitual 3000 mg) diluida en 100 mL de SSN e infundida en 10 a 15 minutos.'
      },
      {
        id: 'leve-ind-peds',
        name: 'Epilepsia Pediátrica (>1 mes)',
        recommendedDoseMgPerKgPerDay: 20,
        minDoseMgPerKgPerDay: 20,
        maxDoseMgPerKgPerDay: 60,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1500,
        description: 'Inicio a 10 mg/kg cada 12 horas (20 mg/kg/día). Incrementar en 10 mg/kg cada 2 semanas hasta 30 mg/kg cada 12 horas (60 mg/kg/día).'
      }
    ],
    whenToUse: [
      'Monoterapia o adyuvante en crisis epilépticas focales con o sin generalización secundaria.',
      'Crisis mioclónicas en epilepsia mioclónica juvenil y crisis tónico-clónicas primarias.',
      'Estatus epiléptico en urgencias tras fracaso de diazepam/lorazepam (estudio ESETT).'
    ],
    pearlsAndPitfalls: [
      'Excelente perfil de interacciones: NO se metaboliza por el citocromo P450, no altera niveles de anticonceptivos ni anticoagulantes orales.',
      'Efectos psiquiátricos adversos: Irritabilidad marcada, agresividad, agitación, labilidad emocional y depresión en hasta un 10-15% de pacientes ("ira de Keppra"); precaución en pacientes con trastornos del ánimo previos.',
      'Eliminación por excreción renal en un 66% inalterada; requiere ajuste estricto de dosis en insuficiencia renal.'
    ],
    monitoringAndSideEffects: [
      'Función renal (aclaramiento de creatinina para ajuste posológico).',
      'Cambios conductuales y del estado de ánimo (irritabilidad, ideación suicida).',
      'Somnolencia, astenia y mareo en las primeras semanas de titulación.'
    ],
    evidenceAndSources: [
      {
        title: 'ESETT Trial: Levetiracetam vs Fosphenytoin vs Valproate in Established Status Epilepticus',
        source: 'New England Journal of Medicine',
        year: '2023',
        summary: 'Demostró igual eficacia que fosfenitoína y valproato en el cese del estatus epiléptico (alrededor del 50%), con un excelente perfil de seguridad hemodinámica.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 80 mL/min',
        adjustmentText: '500 a 1500 mg cada 12 horas (dosis completa).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '50 - 79 mL/min',
        adjustmentText: '500 a 1000 mg cada 12 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: '250 a 750 mg cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min o Hemodiálisis',
        adjustmentText: '250 a 500 mg cada 12 horas; en diálisis administrar dosis suplementaria post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Antiepiléptico de 1.ª Elección en Gestación (Junto con Lamotrigina)',
      summary: 'Registro internacional de epilepsia y embarazo (EURAP) confirma que levetiracetam presenta la tasa más baja de malformaciones fetales congénitas mayores (<2-3%), comparable a la población general sin fármacos.',
      clinicalAlternative: 'Fármaco de elección preferente frente a valproato.'
    }
  },
  {
    id: 'acido-valproico',
    name: 'Ácido Valproico / Valproato de Sodio',
    commercialNames: ['Depakene', 'Depakine', 'Epival', 'Valcote'],
    category: 'Antídotos / Toxicología',
    atcCode: 'N03AG01',
    awareCategory: 'Access',
    therapeuticClass: 'Anticonvulsivante de Amplio Espectro · Estabilizador del Ánimo',
    badgeText: 'Neurología · Amplio Espectro',
    shortDescription: 'Inhibe la degradación del GABA aumentando su concentración cerebral, bloquea canales de sodio voltaje-dependientes y reduce corrientes de calcio tipo T. Primera línea en ausencias y crisis generalizadas idiopáticas.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'valp-jarabe-250',
        name: 'Jarabe Pediátrico 250 mg / 5 mL (50 mg/mL)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'valp-comp-500',
        name: 'Comprimidos con Cubierta Entérica 500 mg (Divalproato)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'valp-vial-500',
        name: 'Solución Inyectable IV 500 mg / 5 mL',
        amountMg: 500,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'valp-ind-epilepsia-adulto',
        name: 'Crisis Generalizadas (Tónico-Clónicas, Mioclónicas, Ausencias)',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 2500,
        maxSingleDoseMg: 1000,
        description: 'Dosis inicial de 500 mg cada 12 horas. Titular semanalmente hasta nivel plasmático diana de 50 a 100 mcg/mL (habitual 1000 a 2000 mg/día).'
      },
      {
        id: 'valp-ind-status-iv',
        name: 'Estatus Epiléptico Refractario a Benzodiacepinas (IV)',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Agudo',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 2000,
        description: 'Bolo IV de carga de 40 mg/kg (habitual 2000 mg) diluido e infundido en 5 a 10 minutos (velocidad máxima 10 mg/kg/min).'
      },
      {
        id: 'valp-ind-peds',
        name: 'Epilepsia Pediátrica',
        recommendedDoseMgPerKgPerDay: 20,
        minDoseMgPerKgPerDay: 15,
        maxDoseMgPerKgPerDay: 40,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: '15 a 20 mg/kg/día dividido cada 8 a 12 horas. Escalar según control clínico hasta un máximo de 35 a 40 mg/kg/día.'
      }
    ],
    whenToUse: [
      'Epilepsia mioclónica juvenil y crisis de ausencia típicas.',
      'Tratamiento y profilaxis de episodios maníacos en el trastorno bipolar.',
      'Estatus epiléptico convulsivo en urgencias.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA de Teratogénesis Severa!: Es el antiepiléptico más teratógeno conocido (defectos del tubo neural como espina bífida en un 1-2%, malformaciones craneofaciales y reducción significativa del coeficiente intelectual infantil). CONTRAINDICADO en mujeres en edad fértil salvo que no exista ninguna otra opción y con anticoncepción obligatoria.',
      'Hepatotoxicidad fulminante (especialmente en niños <2 años con enfermedades mitocondriales por mutación en POLG).',
      'Pancreatitis hemorrágica aguda potencialmente mortal e hiperamonemia sin fallo hepático evidente (causa de encefalopatía).'
    ],
    monitoringAndSideEffects: [
      'Niveles plasmáticos de ácido valproico (rango terapéutico: 50 a 100 mcg/mL).',
      'Pruebas de función hepática (transaminasas) y amonio plasmático si hay letargia o confusión inexplicable.',
      'Hemograma (trombocitopenia dosis-dependiente), ganancia de peso y temblor fino de manos.'
    ],
    evidenceAndSources: [
      {
        title: 'SANAD II Trial: Long-Term Outcomes in Generalized Epilepsy',
        source: 'The Lancet',
        year: '2023',
        summary: 'Confirmó que el valproato sigue siendo el fármaco más eficaz para el control de crisis generalizadas, pero con severas restricciones en mujeres jóvenes.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; metabolismo hepático casi exclusivo (98%).',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'CONTRAINDICADO ABSOLUTO EN EL EMBARAZO (Teratógeno Mayor)',
      summary: 'Asociado a espina bífida (riesgo multiplicado por 10-20), cardiopatías congénitas, hendiduras orofaciales y trastornos del neurodesarrollo / espectro autista en hasta el 30-40% de los niños expuestos.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Levetiracetam o Lamotrigina con suplementación de ácido fólico a dosis altas (5 mg/día).',
      fetalRisks: ['Espina bífida / Mielomeningocele', 'Trastorno del espectro autista', 'Retraso del neurodesarrollo']
    }
  },
  {
    id: 'sertralina',
    name: 'Sertralina',
    commercialNames: ['Zoloft', 'Aremis', 'Sertex', 'Besitran'],
    category: 'Antídotos / Toxicología',
    atcCode: 'N06AB06',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Selectivo de la Recaptación de Serotonina (ISRS) · Antidepresivo',
    badgeText: 'Psiquiatría · ISRS de 1.ª Elección',
    shortDescription: 'Inhibidor potente y altamente selectivo de la recaptación presináptica de serotonina (5-HT). Antidepresivo y ansiolítico de primera línea con el perfil de seguridad cardiovascular y metabólico más favorable.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'sert-comp-50',
        name: 'Comprimidos Recubiertos Ranurados 50 mg',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'sert-comp-100',
        name: 'Comprimidos Recubiertos Ranurados 100 mg',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'sert-ind-depresion-adulto',
        name: 'Trastorno Depresivo Mayor / Ansiedad Generalizada / Pánico',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico (mínimo 6 meses tras remisión)',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 200,
        description: 'Dosis inicial de 50 mg una vez al día por la mañana o por la noche con alimentos. En caso de respuesta incompleta tras 4 a 6 semanas, aumentar progresivamente en tramos de 50 mg cada 2 semanas hasta 200 mg/día.'
      },
      {
        id: 'sert-ind-toc-peds',
        name: 'Trastorno Obsesivo-Compulsivo (TOC) Pediátrico (>6 años)',
        fixedAdultDoseMg: 25,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 200,
        description: 'Niños de 6 a 12 años: Iniciar con 25 mg una vez al día. Adolescentes: 50 mg una vez al día.'
      }
    ],
    whenToUse: [
      'Depresión unipolar en adultos y ancianos.',
      'Trastorno de pánico, fobia social y trastorno de ansiedad generalizada.',
      'Antidepresivo de primera elección en pacientes con cardiopatía isquémica previa o post-infarto de miocardio (ensayo SADHART).'
    ],
    pearlsAndPitfalls: [
      'Fármaco de elección entre los antidepresivos en patología cardiovascular: no altera la conducción eléctrica cardíaca ni prolonga el QTc a dosis estándar.',
      'Efectos adversos iniciales transitorios: Náuseas, diarrea y cefalea leve en las primeras 1-2 semanas de tratamiento.',
      '¡Alerta Síndrome Serotoninérgico!: Jamás asociar con IMAO (precaución extrema con tramadol, linezolid o dextrometorfano).',
      'Latencia de respuesta clínica: El efecto antidepresivo pleno tarda entre 3 y 6 semanas en manifestarse; advertir al paciente para evitar el abandono prematuro.'
    ],
    monitoringAndSideEffects: [
      'Ideación suicida y cambios paradójicos en el comportamiento en las primeras 2-4 semanas de tratamiento.',
      'Función sexual (disfunción eréctil o anorgasmia en hasta un 30% en tratamiento prolongado).',
      'Sodio sérico en pacientes ancianos (riesgo de hiponatremia por SIADH).'
    ],
    evidenceAndSources: [
      {
        title: 'Comparative Efficacy and Acceptability of 21 Antidepressant Drugs: Network Meta-Analysis',
        source: 'The Lancet',
        year: '2023',
        summary: 'Sertralina y escitalopram presentaron el mejor balance global entre eficacia terapéutica y tolerabilidad de todos los antidepresivos evaluados.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación metabólica hepática.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'ISRS de 1.ª Elección en Gestación y Lactancia',
      summary: 'Es el antidepresivo con mayor evidencia de seguridad perinatal. Tiene el menor paso a la leche materna de todos los ISRS (niveles indetectables en el lactante). Mantener si está indicado para prevenir recaída depresiva posparto.',
      clinicalAlternative: 'Fármaco de elección preferente.'
    }
  },
  {
    id: 'haloperidol',
    name: 'Haloperidol',
    commercialNames: ['Haldol', 'Haloperil', 'Aloperidin'],
    category: 'Antídotos / Toxicología',
    atcCode: 'N05AD01',
    awareCategory: 'Access',
    therapeuticClass: 'Antipsicótico Típico de Primera Generación (Butirofenona) · Bloqueador Dopaminérgico D2',
    badgeText: 'Psiquiatría · Agitación / Delirio',
    shortDescription: 'Potente antagonista de receptores dopaminérgicos D2 mesolímbicos y estriatales. Estándar de oro para el control agudo de agitación psicomotriz psicótica y delirio hiperactivo grave en urgencias y UCI.',
    availableRoutes: ['oral', 'im', 'iv'],
    concentrations: [
      {
        id: 'halo-gotas-2',
        name: 'Gotas Orales 2 mg / mL (Pediátrico y Ancianos)',
        amountMg: 2,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        standardBottleMl: 30,
        notes: '20 gotas = 1 mL = 2 mg (0.1 mg por gota)'
      },
      {
        id: 'halo-comp-5',
        name: 'Comprimidos Ranurados 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'halo-amp-5',
        name: 'Ampolla Inyectable IM/IV 5 mg / 1 mL',
        amountMg: 5,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'halo-ind-agitacion-urgencias',
        name: 'Agitación Psicomotriz Aguda / Delirio Hiperactivo en Urgencias',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 3,
        intervalHours: 1,
        durationDays: 'Agudo',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 5,
        description: '2.5 a 5 mg IM (o IV lento con monitorización ECG) cada 30-60 minutos hasta sedación o control de la conducta agresiva (en ancianos iniciar con 0.5 a 1 mg).'
      },
      {
        id: 'halo-ind-psicosis-cronica',
        name: 'Esquizofrenia y Psicosis Crónica (Vía Oral)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 10,
        description: '2 a 5 mg cada 12 horas por vía oral.'
      }
    ],
    whenToUse: [
      'Agitación psicomotriz severa con riesgo inminente de auto o heteroagresividad.',
      'Delirio hiperactivo en pacientes hospitalizados o en UCI cuando las medidas no farmacológicas fracasan.',
      'Corea de Huntington y síndrome de Gilles de la Tourette grave.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Síntomas Extrapiramidales (SEP)!: Distonía aguda (crisis oculógiras, trismus, tortícolis espasmódica) en pacientes jóvenes; tratar inmediatamente con anticolinérgicos (Biperideno 5 mg IM o Difenhidramina 50 mg IV).',
      '¡Alerta Prolongación de QTc y Torsades de Pointes!: Especialmente por vía intravenosa a dosis altas (>10 mg/día) o en hipopotasemia. Monitorizar el ECG antes y durante la administración parenteral.',
      'Síndrome Neuroléptico Maligno (SNM): Hipertermia extrema, rigidez muscular en "tubo de plomo", inestabilidad autonómica y CK marcadamente elevada; suspender de inmediato y dar soporte intensivo.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (intervalo QTc corregido por Bazett o Fridericia).',
      'Aparición de signos extrapiramidales (acatisia, parkinsonismo).',
      'Tensión arterial y temperatura corporal.'
    ],
    evidenceAndSources: [
      {
        title: 'MIND-USA Trial: Haloperidol and Ziprasidone for Delirium in Critical Illness',
        source: 'New England Journal of Medicine',
        year: '2023',
        summary: 'Demostró que el haloperidol debe reservarse para el delirio hiperactivo con agitación conductual peligrosa, evitando su uso profiláctico o en delirio hipoactivo.'
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
      statusLabel: 'Usar con Precaución en Urgencias',
      summary: 'El uso en el tercer trimestre puede causar síntomas extrapiramidales y de abstinencia neonatal transitorios. De elección para agitación psicótica aguda materna cuando el beneficio justifique el riesgo.',
      fetalRisks: ['Síntomas extrapiramidales neonatales transitorios']
    }
  }
];
