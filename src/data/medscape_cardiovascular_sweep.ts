import { Medication } from '../types';

export const MEDSCAPE_CARDIOVASCULAR_SWEEP: Medication[] = [
  {
    id: 'clortalidona',
    name: 'Clortalidona',
    commercialNames: ['Clortalidona', 'Hygroton'],
    category: 'Cardiovascular',
    atcCode: 'C03BA04',
    awareCategory: 'Access',
    therapeuticClass: 'Diurético Tiazídico-Like Sulfonamida de Larga Duración · Ensayo ALLHAT',
    badgeText: 'Cardiovascular · DCI Clortalidona (ALLHAT)',
    shortDescription: 'Diurético derivado de la ftalimidina con potente acción natriurética e inhibidora de la anhidrasa carbónica. Su prolongada semivida plasmática (40-60 horas) garantiza un descenso sostenido de la presión arterial las 24 horas y reducción demostrada de eventos cardiovasculares.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'clorta-comp-25',
        name: 'Comprimidos Ranurados 25 mg',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'clorta-comp-50',
        name: 'Comprimidos Ranurados 50 mg',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'clorta-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos (DCI Clortalidona)',
        fixedAdultDoseMg: 12.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 25,
        description: 'Dosis inicial de 12.5 a 25 mg una vez al día por la mañana con el desayuno. Puede aumentarse a 50 mg al día si no se alcanza el objetivo tensional tras 2 a 4 semanas.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial esencial no controlada con hidroclorotiazida (mayor potencia y duración de acción).',
      'Hipertensión sistólica aislada en el adulto mayor.',
      'Edema asociado a insuficiencia cardíaca leve o síndrome nefrótico.'
    ],
    pearlsAndPitfalls: [
      'Ensayo ALLHAT: Demostró que clortalidona fue superior o equivalente a lisinopril y amlodipino en la prevención de eventos cardiovasculares mayores e insuficiencia cardíaca.',
      'Semivida de 40 a 60 horas: Mayor persistencia que hidroclorotiazida; vigilar hipopotasemia e hipomagnesemia.',
      'Pierde eficacia diurética cuando el aclaramiento de creatinina cae por debajo de 30 mL/min (en cuyo caso se debe rotar a diuréticos de asa como torasemida o furosemida).'
    ],
    monitoringAndSideEffects: [
      'Potasio sérico, sodio y magnesio a las 2-4 semanas.',
      'Ácido úrico (puede desencadenar hiperuricemia y crisis gotosa).',
      'Glucemia en pacientes prediabéticos o diabéticos.'
    ],
    evidenceAndSources: [
      {
        title: 'ALLHAT Landmark Clinical Trial',
        source: 'JAMA',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Confirmó que clortalidona es el diurético tiazídico con la evidencia más sólida en reducción de fallo cardíaco y accidentes cerebrovasculares.'
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
        adjustmentText: 'Ineficaz como monoterapia natriurética; preferir diuréticos de asa.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Uso con Precaución en Gestación',
      summary: 'Puede reducir la perfusión uteroplacentaria e inducir trombocitopenia o hipoglucemia neonatal. Evitar en preeclampsia.',
      clinicalAlternative: 'Metildopa o Labetalol.'
    }
  },
  {
    id: 'indapamida',
    name: 'Indapamida',
    commercialNames: ['Indapamida', 'Natrilix'],
    category: 'Cardiovascular',
    atcCode: 'C03BA11',
    awareCategory: 'Access',
    therapeuticClass: 'Diurético Tiazídico-Like Indólico Vasodilatador Neutro Metabólico',
    badgeText: 'Cardiovascular · DCI Indapamida (HYVET)',
    shortDescription: 'Diurético derivado de la indolina con doble acción farmacológica: inhibe la reabsorción de sodio en el túbulo distal y reduce la resistencia vascular periférica mediante el bloqueo del flujo transmembrana de calcio en el músculo liso arteriolar. Perfil metabólico neutro sobre glucosa y lípidos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'inda-comp-15-sr',
        name: 'Comprimidos de Liberación Prolongada 1.5 mg (DCI Indapamida SR)',
        amountMg: 1.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tragar entero por la mañana con agua'
      },
      {
        id: 'inda-comp-25',
        name: 'Comprimidos Recubiertos 2.5 mg',
        amountMg: 2.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'inda-ind-hta-anciano',
        name: 'Hipertensión Arterial en Adultos y Pacientes de Edad Avanzada (≥80 años / HYVET)',
        fixedAdultDoseMg: 1.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 2.5,
        maxSingleDoseMg: 2.5,
        description: '1.5 mg una vez al día por la mañana (formulación de liberación sostenida) o 2.5 mg una vez al día con o sin alimentos.'
      }
    ],
    whenToUse: [
      'Hipertensión en pacientes muy ancianos (≥80 años, ensayo HYVET).',
      'Prevención secundaria de ictus recurrente (ensayo PROGRESS en combinación con perindopril).',
      'Hipertensión con diabetes o dislipidemia (no altera el metabolismo lipídico ni hidrocarbonado).'
    ],
    pearlsAndPitfalls: [
      'Ensayo HYVET: Demostró una reducción del 21% en mortalidad por todas las causas y del 30% en ictus fatal o no fatal en pacientes hipertensos de 80 años o más.',
      'Efecto vasodilatador arterial directo: Mantiene reducción tensional incluso con dosis submáximas que provocan mínima diuresis.',
      'Menor incidencia de hipopotasemia con la dosis de liberación prolongada de 1.5 mg/día.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica y ortostatismo.',
      'Potasio sérico y sodio sérico.',
      'Función renal periódica.'
    ],
    evidenceAndSources: [
      {
        title: 'HYVET (Hypertension in the Very Elderly Trial) & PROGRESS',
        source: 'New England Journal of Medicine & The Lancet',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Evidencia de primer nivel para la reducción de mortalidad global y eventos cerebrovasculares en ancianos frágiles tratados con indapamida.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar de 1.5 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Contraindicado en insuficiencia renal severa.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Evitar en Gestación',
      summary: 'Puede causar hipovolemia materna y reducción de la perfusión placentaria.',
      clinicalAlternative: 'Metildopa o Nifedipino.'
    }
  },
  {
    id: 'torasemida',
    name: 'Torasemida',
    commercialNames: ['Torasemida', 'Dilutol', 'Demadex'],
    category: 'Cardiovascular',
    atcCode: 'C03CA04',
    awareCategory: 'Access',
    therapeuticClass: 'Diurético de Asa Piridilsulfonilurea de Alta Biodisponibilidad y Acción Antialdosterónica',
    badgeText: 'Cardiovascular · DCI Torasemida (TRANSFORM-HF)',
    shortDescription: 'Diurético de asa de alta potencia con biodisponibilidad oral constante y predecible del 80-90% (incluso en presencia de edema de la pared intestinal por insuficiencia cardíaca descompensada) y semivida más prolongada que furosemida. Posee adicionalmente propiedades antialdosterónicas y antifibróticas miocárdicas.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'tora-comp-5',
        name: 'Comprimidos Ranurados 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'tora-comp-10',
        name: 'Comprimidos Ranurados 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'tora-comp-20',
        name: 'Comprimidos Ranurados 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'tora-amp-20',
        name: 'Ampolla Inyectable IV 20 mg / 4 mL (5 mg/mL)',
        amountMg: 20,
        volumeMl: 4,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'tora-ind-ic-edema',
        name: 'Edema por Insuficiencia Cardíaca Congestiva / Sobrecarga de Volumen',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico según volemia',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 100,
        description: 'Dosis inicial de 10 a 20 mg una vez al día por la mañana vía oral. Titular duplicando la dosis hasta alcanzar la euvolemia clínica (dosis máxima en IC: 200 mg/día).'
      },
      {
        id: 'tora-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos',
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 5,
        description: '2.5 a 5 mg una vez al día por la mañana.'
      }
    ],
    whenToUse: [
      'Insuficiencia cardíaca congestiva con mala respuesta o absorción errática de furosemida oral.',
      'Edema refractario por cirrosis hepática o síndrome nefrótico.',
      'Pacientes con hospitalizaciones recurrentes por descompensación hidrópica de insuficiencia cardíaca.'
    ],
    pearlsAndPitfalls: [
      'Equivalencia con Furosemida: 10-20 mg de torasemida oral equivalen a aproximadamente 40 mg de furosemida oral (ratio aproximado 1:2 o 1:4).',
      'Biodisponibilidad oral superior al 80%: A diferencia de furosemida (cuya absorción varía entre 10% y 90% y se bloquea con edema intestinal), torasemida se absorbe de forma predecible y completa.',
      'Menor pérdida de potasio urinario debido a su leve antagonismo de los receptores de aldosterona.'
    ],
    monitoringAndSideEffects: [
      'Peso diario del paciente y balance de líquidos.',
      'Electrolitos séricos (potasio, sodio, cloro) y función renal (BUN y creatinina).',
      'Presión arterial sistólica.'
    ],
    evidenceAndSources: [
      {
        title: 'TRANSFORM-HF Clinical Trial: Torsemide vs Furosemide in Heart Failure',
        source: 'JAMA',
        year: '2023 Guidelines',
        summary: 'Evaluó la supervivencia y hospitalizaciones en pacientes tras el alta hospitalaria por IC, consolidando la torasemida como diurético de asa de excelente absorción y manejo clínico ambulatorio.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'En insuficiencia renal grave pueden requerirse dosis más altas (hasta 100-200 mg/día) para lograr natriuresis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Usar con Precaución en Gestación',
      summary: 'Cruza la placenta; usar solo si el beneficio materno justifica el riesgo fetal de hipovolemia.',
      clinicalAlternative: 'Furosemida.'
    }
  },
  {
    id: 'bumetanida',
    name: 'Bumetanida',
    commercialNames: ['Bumetanida', 'Bumex', 'Fordiuran'],
    category: 'Cardiovascular',
    atcCode: 'C03CA02',
    awareCategory: 'Access',
    therapeuticClass: 'Diurético de Asa de Ultra-Alta Potencia (40 Veces Superior a Furosemida)',
    badgeText: 'Cardiovascular · DCI Bumetanida (1 mg = 40 mg Furosemida)',
    shortDescription: 'Diurético de asa inhibidor del cotransportador Na+/K+/2Cl- en la rama ascendente gruesa del asa de Henle. Su potencia natriurética miligramo a miligramo es 40 veces superior a la furosemida con un 80% de biodisponibilidad oral constante.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'bume-comp-1',
        name: 'Comprimidos Ranurados 1 mg (Equivale a 40 mg de Furosemida)',
        amountMg: 1,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'bume-amp-2',
        name: 'Ampolla Inyectable IV 2 mg / 4 mL (0.5 mg/mL)',
        amountMg: 2,
        volumeMl: 4,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'bume-ind-edema-refractario',
        name: 'Edema Refractario en Insuficiencia Cardíaca / Síndrome Nefrótico / Falla Renal',
        fixedAdultDoseMg: 1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según necesidad clínica',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5,
        description: '0.5 a 2 mg una vez al día por la mañana vía oral (o IV en bolo lento). Puede repetirse a las 4-5 horas si la respuesta diurética es insuficiente (máximo 10 mg al día).'
      }
    ],
    whenToUse: [
      'Resistencia a furosemida en pacientes con sobrecarga masiva de volumen.',
      'Alergia documentada a furosemida en pacientes que toleran bumetanida.',
      'Pacientes con edema intestinal severo donde la furosemida oral no se absorbe.'
    ],
    pearlsAndPitfalls: [
      '¡Regla de Oro de Conversión 1:40!: 1 mg de bumetanida equivale a 40 mg de furosemida (y a 20 mg de torasemida).',
      'Menor ototoxicidad relativa en comparación con dosis masivas de furosemida intravenosa.',
      'Requiere suplementación de potasio o combinación con un antagonista mineralocorticoide si el potasio cae < 4.0 mEq/L.'
    ],
    monitoringAndSideEffects: [
      'Electrolitos séricos (potasio, sodio, magnesio).',
      'Diuresis horaria y peso diario.',
      'Función renal (creatinina y urea).'
    ],
    evidenceAndSources: [
      {
        title: 'Comparative Bioavailability and Pharmacodynamics of Loop Diuretics',
        source: 'American Journal of Cardiology',
        year: '2023 Guidelines',
        summary: 'Demuestra absorción predecible y rápido aclaramiento de la sobrecarga de volumen refractaria en pacientes con fallo cardíaco y renal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'En insuficiencia renal grave pueden requerirse dosis mayores (hasta 5-10 mg/día) para superar la resistencia tubular.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Usar con extrema cautela si hay edema pulmonar agudo materno refractario.',
      clinicalAlternative: 'Furosemida.'
    }
  },
  {
    id: 'eplerenona',
    name: 'Eplerenona',
    commercialNames: ['Eplerenona', 'Inspra', 'Elecor'],
    category: 'Cardiovascular',
    atcCode: 'C03DA04',
    awareCategory: 'Access',
    therapeuticClass: 'Antagonista Selectivo de Receptores Mineralocorticoides (ARM) Sin Efectos Antiandrogénicos',
    badgeText: 'Cardiovascular · DCI Eplerenona (EPHESUS / EMPHASIS-HF)',
    shortDescription: 'Bloqueador selectivo de los receptores de aldosterona que carece de afinidad por los receptores de andrógenos y progesterona. No produce ginecomastia, mastodinia ni disfunción eréctil en varones, ofreciendo el beneficio pronóstico completo en insuficiencia cardíaca y post-infarto.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'eple-comp-25',
        name: 'Comprimidos Recubiertos 25 mg',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'eple-comp-50',
        name: 'Comprimidos Recubiertos 50 mg (Dosis Objetivo)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'eple-ind-icfer-postiam',
        name: 'Insuficiencia Cardíaca con FEVI Reducida / Post-Infarto Agudo de Miocardio (EMPHASIS / EPHESUS)',
        fixedAdultDoseMg: 25,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 50,
        description: 'Iniciar con 25 mg una vez al día con o sin alimentos si el potasio sérico es ≤ 5.0 mEq/L y la TFGe ≥ 30 mL/min/1.73m². A las 4 semanas titular hasta la dosis diana de 50 mg una vez al día según cifras de potasio.'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea en insuficiencia cardíaca crónica con FEVI ≤ 35% junto a IECA/ARNI, betabloqueante e iSGLT2 (los "cuatro pilares").',
      'Post-infarto agudo de miocardio con FEVI ≤ 40% y signos clínicos de insuficiencia cardíaca o diabetes.',
      'Varones que desarrollan ginecomastia o dolor mamario con espironolactona.'
    ],
    pearlsAndPitfalls: [
      '¡Cero Ginecomastia!: Afinidad 1000 veces menor que espironolactona por el receptor de andrógenos; resuelve completamente la ginecomastia dolorosa.',
      '¡Regla de Seguridad de Potasio!: NO iniciar si potasio basal > 5.0 mEq/L o TFGe < 30 mL/min. Si durante el tratamiento el potasio sube entre 5.5 y 5.9 mEq/L reducir a 25 mg en días alternos; si potasio ≥ 6.0 mEq/L suspender inmediatamente.',
      'Metabolizado por CYP3A4: contraindicado con inhibidores potentes de CYP3A4 (claritromicina, ketoconazol).'
    ],
    monitoringAndSideEffects: [
      'Potasio sérico y creatinina a la 1.ª y 4.ª semana de inicio, y a las 4 semanas de cada ajuste.',
      'Presión arterial sistólica.',
      'Ausencia de síntomas gastrointestinales.'
    ],
    evidenceAndSources: [
      {
        title: 'EMPHASIS-HF & EPHESUS Landmark Clinical Trials',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción del 37% en muerte cardiovascular o ingreso por IC en pacientes con IC levemente sintomática (EMPHASIS-HF) y reducción del 15% en mortalidad post-IAM (EPHESUS).'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar de 25 a 50 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: 'Iniciar con 25 mg en días alternos; dosis máxima 25 mg diarios.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min o K > 5.0 mEq/L',
        adjustmentText: 'CONTRAINDICADO ABSOLUTAMENTE por riesgo de hiperpotasemia letal.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Uso con Precaución en Gestación',
      summary: 'Datos clínicos limitados en gestantes. Usar solo si está estrictamente indicado.',
      clinicalAlternative: 'Labetalol o Hidralazina.'
    }
  },
  {
    id: 'finerenona',
    name: 'Finerenona',
    commercialNames: ['Finerenona', 'Kerendia'],
    category: 'Cardiovascular',
    atcCode: 'C03DA05',
    awareCategory: 'Access',
    therapeuticClass: 'Antagonista de Receptores Mineralocorticoides No Esteroideo de Alta Selectividad',
    badgeText: 'Cardiovascular · DCI Finerenona (FIDELIO / FIGARO)',
    shortDescription: 'Primer antagonista selectivo no esteroideo del receptor mineralocorticoide. Bloquea de forma equitativa y potente la inflamación y fibrosis inducida por aldosterona en el riñón y corazón con menor retención de potasio que los esteroideos. Fármaco de oro para nefroprotección y reducción de eventos cardiovasculares en ERC con diabetes tipo 2.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'fine-comp-10',
        name: 'Comprimidos Recubiertos 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'fine-comp-20',
        name: 'Comprimidos Recubiertos 20 mg (Dosis Objetivo)',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'fine-ind-erc-diabetes',
        name: 'Enfermedad Renal Crónica Asociada a Diabetes Mellitus Tipo 2 (FIDELIO-DKD / FIGARO-DKD)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 20,
        description: 'Dosis basada en TFGe y potasio basal: Si TFGe ≥ 60 mL/min/1.73m² y K ≤ 4.8 mEq/L: iniciar con 20 mg una vez al día. Si TFGe 25 a 59 mL/min/1.73m²: iniciar con 10 mg una vez al día; titular a 20 mg/día a las 4 semanas si K ≤ 4.8 mEq/L.'
      }
    ],
    whenToUse: [
      'Adultos con enfermedad renal crónica (estadios 1 a 4 con albuminuria persistente) y diabetes tipo 2 tratados con dosis máxima tolerada de IECA o ARA-II.',
      'Reducción de riesgo de fallo renal terminal, muerte cardiovascular e infarto de miocardio no fatal.'
    ],
    pearlsAndPitfalls: [
      'Estructura No Esteroidea Única: Distribución tisular balanceada entre corazón y riñón (los esteroideos se concentran más en el riñón), confiriendo potente cardioprotección con menor incidencia de hiperpotasemia.',
      'No tiene efecto relevante sobre la presión arterial sistólica (reducción media de solo 2-3 mmHg): su beneficio no depende de bajar la presión.',
      'NO iniciar si el potasio sérico inicial es > 5.0 mEq/L.'
    ],
    monitoringAndSideEffects: [
      'Potasio sérico y TFGe a las 4 semanas de iniciar o ajustar la dosis.',
      'Cociente albúmina/creatinina en orina.',
      'Ausencia de síntomas de hiperpotasemia.'
    ],
    evidenceAndSources: [
      {
        title: 'FIDELIO-DKD & FIGARO-DKD Clinical Trials',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostraron de forma consistente una reducción del 18% en progresión de la enfermedad renal y del 14% en eventos cardiovasculares mayores en más de 13.000 pacientes diabéticos.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 25 mL/min/1.73m²',
        adjustmentText: '10 a 20 mg al día según TFGe basal y potasio.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 25 mL/min/1.73m²',
        adjustmentText: 'No se recomienda iniciar el tratamiento; puede continuarse si ya lo recibía.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Datos insuficientes en humanos; riesgo fetal potencial. Contraindicado.',
      clinicalAlternative: 'Control glucémico intensivo con insulina y antihipertensivos aprobados.'
    }
  },
  {
    id: 'doxazosina',
    name: 'Doxazosina',
    commercialNames: ['Doxazosina', 'Cardura', 'Carduran'],
    category: 'Cardiovascular',
    atcCode: 'C02CA04',
    awareCategory: 'Access',
    therapeuticClass: 'Bloqueador Alfa-1 Adrenérgico Periférico de Larga Duración · HTA e HBP',
    badgeText: 'Cardiovascular · DCI Doxazosina (Alfa-1 Bloqueante)',
    shortDescription: 'Antagonista selectivo postsináptico de los receptores alfa-1 adrenérgicos vasculares y prostáticos. Causa vasodilatación arteriolar y venosa periférica reduciendo la resistencia vascular y relaja el músculo liso del cuello vesical y la cápsula prostática.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'doxa-comp-2',
        name: 'Comprimidos Ranurados 2 mg',
        amountMg: 2,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'doxa-comp-4',
        name: 'Comprimidos Ranurados 4 mg',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'doxa-comp-4-gits',
        name: 'Comprimidos de Liberación Prolongada GITS 4 mg (Cardura Neo)',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'doxa-ind-hbp-hta',
        name: 'Hiperplasia Prostática Benigna con o sin Hipertensión Arterial Refractaria',
        fixedAdultDoseMg: 2,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 16,
        maxSingleDoseMg: 8,
        description: 'Iniciar con 1 mg una vez al día AL ACOSTARSE (para evitar síncope de primera dosis). Aumentar cada 1-2 semanas a 2 mg, 4 mg hasta 8 mg una vez al día según flujo urinario y PA (máximo 16 mg/día).'
      }
    ],
    whenToUse: [
      'Varones con síntomas del tracto urinario inferior por hiperplasia prostática benigna asociados a hipertensión.',
      'Cuarto o quinto fármaco antihipertensivo en hipertensión resistente cuando fallan otras clases.'
    ],
    pearlsAndPitfalls: [
      '¡EFECTO SÍNCOPE DE PRIMERA DOSIS!: La primera toma puede causar hipotensión ortostática severa con pérdida de consciencia; debe tomarse OBLIGATORIAMENTE en la cama justo antes de dormir.',
      'Ensayo ALLHAT: La rama de doxazosina se suspendió precozmente por un incremento del 25% en eventos cardiovasculares mayores y el doble de hospitalizaciones por insuficiencia cardíaca frente a clortalidona; NUNCA usar como monoterapia de primera línea en HTA.',
      'Síndrome de Iris Flácido Intraoperatorio (IFIS): Advertir al oftalmólogo antes de cirugía de cataratas.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sentado y de pie (descartar ortostatismo).',
      'Flujo urinario y síntomas de vaciado prostático.',
      'Edema de miembros inferiores y congestión nasal.'
    ],
    evidenceAndSources: [
      {
        title: 'ALLHAT Doxazosin Arm Report',
        source: 'JAMA',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Estableció que los alfa-bloqueantes no deben usarse como tratamiento antihipertensivo primario en monoterapia por mayor riesgo de insuficiencia cardíaca.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación biliar/fecal del 90%.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en Gestación',
      summary: 'Usar solo si no hay opciones mejores.',
      clinicalAlternative: 'Labetalol o Metildopa.'
    }
  },
  {
    id: 'lercanidipino',
    name: 'Lercanidipino',
    commercialNames: ['Lercanidipino', 'Zanidip', 'Lerdip'],
    category: 'Cardiovascular',
    atcCode: 'C08CA13',
    awareCategory: 'Access',
    therapeuticClass: 'Calcioantagonista Dihidropiridínico de 3.ª Generación con Mínimo Edema Maleolar',
    badgeText: 'Cardiovascular · DCI Lercanidipino (Mínimo Edema)',
    shortDescription: 'Calcioantagonista dihidropiridínico lipofílico de tercera generación con una afinidad celular de membrana extraordinariamente alta. Se une a la bicapa lipídica de las células musculares lisas arteriolares liberándose gradualmente, confiriendo un inicio de acción lento y suave con una tasa de edemas maleolares significativamente inferior a la de amlodipino.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'lerca-comp-10',
        name: 'Comprimidos Recubiertos Ranurados 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar al menos 15 minutos antes de las comidas'
      },
      {
        id: 'lerca-comp-20',
        name: 'Comprimidos Recubiertos Ranurados 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'lerca-ind-hta',
        name: 'Hipertensión Arterial Esencial Leve a Moderada en Adultos',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 20,
        description: '10 mg una vez al día por la mañana, al menos 15 minutos antes del desayuno. Puede aumentarse a 20 mg una vez al día transcurridas 2 semanas según respuesta.'
      }
    ],
    whenToUse: [
      'Pacientes hipertensos que suspendieron amlodipino o nifedipino debido a edema de tobillos intolerable.',
      'Hipertensión arterial en personas de edad avanzada o con nefropatía diabética (dilata arteriolas aferentes y eferentes glomerulares reduciendo la presión intraglomerular).'
    ],
    pearlsAndPitfalls: [
      '¡Menor Tasa de Edema Maleolar Periférico!: Al dilatar no solo el lecho precapilar sino también el poscapilar venular, reduce la presión hidrostática capilar disminuyendo el edema en más de un 50% frente a amlodipino.',
      'Tomar 15 minutos antes del desayuno (los alimentos grasos multiplican su absorción hasta 4 veces de forma impredecible).',
      'Metabolizado por CYP3A4: evitar combinar con ketoconazol, itraconazol o zumo de pomelo.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica y diastólica.',
      'Inspección de tobillos y extremidades inferiores.',
      'Cefalea o rubor facial leve al inicio.'
    ],
    evidenceAndSources: [
      {
        title: 'COHESION & ZAFRA Clinical Studies',
        source: 'Journal of Hypertension',
        year: '2023 Guidelines',
        summary: 'Demostraron excelente eficacia antihipertensiva con una reducción drástica del edema de miembros inferiores en pacientes previamente intolerantes a otros calcioantagonistas.'
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
        adjustmentText: 'Contraindicado en insuficiencia renal grave o diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'No se recomienda su uso en mujeres embarazadas.',
      clinicalAlternative: 'Nifedipino de liberación osmótica o Labetalol.'
    }
  },
  {
    id: 'lidocaina-iv-cardio',
    name: 'Lidocaína IV (Cardiovascular)',
    commercialNames: ['Lidocaína al 2%', 'Xylocaine IV'],
    category: 'Cardiovascular',
    atcCode: 'C01BB01',
    awareCategory: 'Access',
    therapeuticClass: 'Antiarrítmico Clase IB Bloqueador de Canales de Sodio Rápido Miocárdico',
    badgeText: 'Cardiovascular · Antiarrítmico Clase IB (ACLS)',
    shortDescription: 'Antiarrítmico de clase IB con cinética de asociación y disociación rápida por el canal de sodio Nav1.5. Bloquea selectivamente los canales de sodio en tejido miocárdico despolarizado o isquémico, acortando el potencial de acción ventricular. Fármaco de oro en soporte vital avanzado (ACLS) para FV y TV refractarias a desfibrilación.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'lido-amp-2-pct',
        name: 'Ampolla Inyectable IV al 2% (20 mg / mL) 100 mg / 5 mL (Lidocaína Sin Epinefrina)',
        amountMg: 100,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'USO EXCLUSIVO IV SIN EPINEFRINA'
      },
      {
        id: 'lido-bolsa-infusion',
        name: 'Bolsa para Infusión IV 1 g / 250 mL (4 mg/mL)',
        amountMg: 1000,
        volumeMl: 250,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'lido-ind-paro-fv-tv',
        name: 'Parada Cardíaca por Fibrilación Ventricular o Taquicardia Ventricular Sin Pulso (ACLS)',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Protocolo agudo de RCP',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 100,
        description: 'Bolo IV inicial: 1 a 1.5 mg/kg (promedio 100 mg) tras la 3.ª descarga de desfibrilación si amiodarona no está disponible o refractaria. Puede administrarse un segundo bolo de 0.5 a 0.75 mg/kg a los 5-10 minutos (dosis acumulada máxima: 3 mg/kg).'
      },
      {
        id: 'lido-ind-tv-estable',
        name: 'Taquicardia Ventricular Monomorfa Estable con Pulso / Infusión Post-Resucitación',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '24-48 horas en UCI',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 100,
        description: 'Bolo IV de carga: 1 mg/kg en 2 minutos. Infusión continua de mantenimiento: 1 a 4 mg/min (20 a 50 mcg/kg/min).'
      }
    ],
    whenToUse: [
      'Fibrilación ventricular o taquicardia ventricular sin pulso refractaria a descargas en RCP avanzada (alternativa de igual prioridad a amiodarona según guías AHA/ERC).',
      'Arritmias ventriculares malignas desencadenadas por isquemia miocárdica aguda (infarto agudo de miocardio).'
    ],
    pearlsAndPitfalls: [
      '¡USAR EXCLUSIVAMENTE PRESENTACIONES SIN EPINEFRINA / SIN PRESERVANTE!: Nunca administrar las presentaciones odontológicas o anestésicas locales con adrenalina por vía intravenosa directa.',
      'Toxicidad del Sistema Nervioso Central (LAST / Toxicidad Sistémica): Signos precoces de toxicidad incluyen parestesias peribucales, sabor metálico, temblores, nistagmo y, en casos graves, convulsiones tónico-clónicas y depresión respiratoria.',
      'Reducir la infusión a la mitad en pacientes con insuficiencia cardíaca congestiva o hepatopatía avanzada (aclaramiento hepático disminuido).'
    ],
    monitoringAndSideEffects: [
      'Nivel de consciencia y presencia de temblores o fasciculaciones musculares.',
      'Monitorización electrocardiográfica continua.',
      'Niveles plasmáticos de lidocaína (rango terapéutico: 1.5 a 5 mcg/mL) si la infusión dura > 24 horas.'
    ],
    evidenceAndSources: [
      {
        title: 'AHA/ERC Guidelines for Cardiopulmonary Resuscitation (ACLS)',
        source: 'Circulation & Resuscitation',
        year: '2023 Guidelines',
        summary: 'Revalida a la lidocaína intravenosa con recomendación de clase I como antiarrítmico equivalente a amiodarona en parada cardíaca por FV/TV sin pulso.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste inicial; sus metabolitos activos (glicinexilidida) pueden acumularse tras 24-48h de infusión continua.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible para Emergencias Cardíacas en Gestación',
      summary: 'Seguro en protocolos de resucitación y arritmias ventriculares periparto.',
      clinicalAlternative: 'Fármaco de elección en parada cardíaca materna.'
    }
  },
  {
    id: 'ibutilida',
    name: 'Ibutilida',
    commercialNames: ['Ibutilida', 'Corvert'],
    category: 'Cardiovascular',
    atcCode: 'C01BD05',
    awareCategory: 'Reserve',
    therapeuticClass: 'Antiarrítmico Clase III Intravenoso Activador de Corrientes Lentas de Sodio',
    badgeText: 'Cardiovascular · DCI Ibutilida IV (Cardioversión Flutter / FA)',
    shortDescription: 'Antiarrítmico clase III intravenoso con un mecanismo dual: activa la corriente lenta de entrada de sodio hacia el interior celular e inhibe las corrientes rectificadoras tardías de potasio. Fármaco de máxima eficacia (hasta 70-80% de éxito) para la cardioversión médica rápida del flutter auricular y fibrilación auricular reciente en urgencias.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'ibuti-amp-1',
        name: 'Vial Inyectable IV 1 mg / 10 mL (0.1 mg/mL) (Corvert)',
        amountMg: 1,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'ibuti-ind-cardioversion-flutter-fa',
        name: 'Cardioversión Médica Rápida de Flutter Auricular / Fibrilación Auricular Reciente (<48h)',
        fixedAdultDoseMg: 1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento agudo en urgencias',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 1,
        description: 'Adultos con peso ≥ 60 kg: 1 mg (10 mL) en infusión IV lenta durante exactamente 10 minutos. Si peso < 60 kg: 0.01 mg/kg. Si la arritmia no revierte a los 10 minutos de finalizada la infusión, puede administrarse una segunda dosis idéntica de 1 mg.'
      }
    ],
    whenToUse: [
      'Cardioversión farmacológica inmediata de flutter auricular en el servicio de urgencias (tasa de éxito del 75-80%).',
      'Fibrilación auricular de reciente comienzo (<48 horas de evolución) sin cardiopatía estructural severa.'
    ],
    pearlsAndPitfalls: [
      '¡RIESGO DEL 4-8% DE TORSADES DE POINTES (TAQUICARDIA VENTRICULAR POLIMÓRFICA)!: Requiere monitorización electrocardiográfica continua y disponibilidad de desfibrilador durante y durante al menos 4 horas después de la infusión.',
      'Potasio y Magnesio Sérico Obligatorios: Antes de infundir ibutilida, el potasio DEBE ser > 4.0 mEq/L y el magnesio > 2.0 mg/dL; premedicar frecuentemente con 1-2 g de Sulfato de Magnesio IV para prevenir Torsades.',
      'Suspender inmediatamente la infusión si el ritmo revierte a sinusal o si el intervalo QTc se alarga > 500 ms.'
    ],
    monitoringAndSideEffects: [
      'Monitorización ECG continua con registro del intervalo QTc durante al menos 4 horas post-infusión.',
      'Torsades de pointes o extrasístoles ventriculares frecuentes.',
      'Presión arterial.'
    ],
    evidenceAndSources: [
      {
        title: 'AHA/ACC/HRS Atrial Fibrillation Management Guidelines',
        source: 'Circulation',
        year: '2023 Guidelines',
        summary: 'Mantiene a la ibutilida intravenosa con recomendación de clase I para la terminación rápida del flutter auricular.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; metabolismo hepático.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Uso de Emergencia con Desfibrilador Preparado',
      summary: 'Usar con extrema cautela para flutter auricular refractario materno.',
      clinicalAlternative: 'Cardioversión eléctrica sincronizada.'
    }
  },
  {
    id: 'dofetilida',
    name: 'Dofetilida',
    commercialNames: ['Dofetilida', 'Tikosyn'],
    category: 'Cardiovascular',
    atcCode: 'C01BD04',
    awareCategory: 'Reserve',
    therapeuticClass: 'Antiarrítmico Clase III Bloqueador Puro de Canales de Potasio IKr',
    badgeText: 'Cardiovascular · DCI Dofetilida (Seguro en ICFEr / DIAMOND)',
    shortDescription: 'Bloqueador puro y potente de la corriente rectificadora tardía rápida de potasio (IKr). Prolonga el potencial de acción y el periodo refractario auricular y ventricular sin alterar la velocidad de conducción ni el inotropismo miocárdico. Uno de los pocos antiarrítmicos demostrados como completamente seguros en insuficiencia cardíaca con FEVI deprimida.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'dofe-caps-125',
        name: 'Cápsulas 125 mcg (0.125 mg)',
        amountMg: 0.125,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'dofe-caps-250',
        name: 'Cápsulas 250 mcg (0.25 mg)',
        amountMg: 0.25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'dofe-caps-500',
        name: 'Cápsulas 500 mcg (0.5 mg)',
        amountMg: 0.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      }
    ],
    indications: [
      {
        id: 'dofe-ind-fa-ic',
        name: 'Conversión y Mantenimiento del Ritmo Sinusal en Fibrilación Auricular con Insuficiencia Cardíaca (DIAMOND)',
        fixedAdultDoseMg: 0.5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo (iniciación hospitalizada de 3 días)',
        maxDailyDoseMg: 1,
        maxSingleDoseMg: 0.5,
        description: 'Dosis ajustada estrictamente por ClCr Cockcroft-Gault: ClCr > 60 mL/min: 500 mcg cada 12 horas. ClCr 40 a 60 mL/min: 250 mcg cada 12 horas. ClCr 20 a 39 mL/min: 125 mcg cada 12 horas. INICIAR EXCLUSIVAMENTE CON EL PACIENTE INGRESADO EN HOSPITAL CON TELEMETRÍA DURANTE AL MENOS 3 DÍAS.'
      }
    ],
    whenToUse: [
      'Mantenimiento del ritmo sinusal en pacientes con fibrilación auricular o flutter y disfunción ventricular izquierda / insuficiencia cardíaca.',
      'Alternativa oral de primera línea a amiodarona en cardiopatía estructural con FEVI reducida.'
    ],
    pearlsAndPitfalls: [
      '¡REQUISITO OBLIGATORIO DE HOSPITALIZACIÓN DE 3 DÍAS (BLACKBOX FDA)!: La dofetilida DEBE iniciarse en un entorno hospitalario con telemetría continua durante un mínimo de 3 días debido a un riesgo del 2-3% de Torsades de pointes; medir el QTc en el ECG exactamente a las 2-3 horas de cada una de las primeras 5 dosis.',
      'Si el QTc basal es > 440 ms (o > 500 ms en presencia de bloqueo de rama), está CONTRAINDICADA.',
      'Contraindicada absolutamente con hidroclorotiazida, cimetidina, trimetoprim, ketoconazol, verapamilo o prochlorperazina (inhibición de la secreción tubular renal de dofetilida).'
    ],
    monitoringAndSideEffects: [
      'Intervalo QTc en ECG a las 2-3 horas tras cada dosis inicial.',
      'Aclaramiento de creatinina (Cockcroft-Gault) riguroso.',
      'Potasio sérico y magnesio sérico.'
    ],
    evidenceAndSources: [
      {
        title: 'DIAMOND Heart Failure Trial',
        source: 'The Lancet',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró que dofetilida es eficaz para restablecer y mantener el ritmo sinusal en pacientes con insuficiencia cardíaca con FEVI deprimida con total neutralidad sobre la mortalidad.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 60 mL/min',
        adjustmentText: '500 mcg cada 12 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '40 - 60 mL/min',
        adjustmentText: '250 mcg cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '20 - 39 mL/min',
        adjustmentText: '125 mcg cada 12 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 20 mL/min',
        adjustmentText: 'CONTRAINDICADO ABSOLUTAMENTE por excreción renal directa del 80%.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'Riesgo teratogénico y arritmogénico fetal. Contraindicado.',
      clinicalAlternative: 'Amiodarona o Sotalol.'
    }
  },
  {
    id: 'mexiletina',
    name: 'Mexiletina',
    commercialNames: ['Mexiletina', 'Mexitil', 'Namuscla'],
    category: 'Cardiovascular',
    atcCode: 'C01BB02',
    awareCategory: 'Access',
    therapeuticClass: 'Antiarrítmico Clase IB Oral (Análogo Oral de Lidocaína) y Antimiotónico',
    badgeText: 'Cardiovascular · DCI Mexiletina (Canales Nav1.5)',
    shortDescription: 'Análogo estructural oral de la lidocaína con excelente biodisponibilidad digestiva (90%) que bloquea selectivamente los canales rápidos de sodio miocárdicos. Indicado para arritmias ventriculares malignas refractarias y como tratamiento de elección de la miotonía no distrófica y síndrome de QT largo congénito tipo 3 (LQT3).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'mexi-caps-150',
        name: 'Cápsulas 150 mg',
        amountMg: 150,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'mexi-caps-200',
        name: 'Cápsulas 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      }
    ],
    indications: [
      {
        id: 'mexi-ind-arritmias-ventriculares',
        name: 'Arritmias Ventriculares Malignas / Síndrome de QT Largo Tipo 3 (LQT3)',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Crónico',
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 400,
        description: 'Iniciar con 150 a 200 mg cada 8 horas con comida o antiácidos para mitigar molestias digestivas. Puede titularse cada 2-3 días hasta 300 mg cada 8 horas.'
      }
    ],
    whenToUse: [
      'Tratamiento de taquicardias ventriculares recurrentes resistentes a betabloqueantes o amiodarona.',
      'Síndrome de QT largo congénito tipo 3 (LQT3): Bloquea selectivamente la corriente tardía de sodio mutada, acortando el QTc.',
      'Tratamiento sintomático de la miotonía no distrófica (Namuscla).'
    ],
    pearlsAndPitfalls: [
      'Tomar siempre con alimentos: Las náuseas, vómitos y ardor epigástrico ocurren en más del 20-30% de pacientes si se toma en ayunas.',
      'Neurotoxicidad dosis-dependiente: Vigilar temblor fino de manos, mareo, ataxia y diplopía (indican niveles plasmáticos supraterapéuticos).',
      'Metabolizado por CYP2D6 y CYP1A2; los inhibidores enzimáticos aumentan sus concentraciones.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (anchura del QRS e intervalo QTc).',
      'Temblores y síntomas vestibulares neurológicos.',
      'Tolerancia digestiva.'
    ],
    evidenceAndSources: [
      {
        title: 'HRS Expert Consensus Statement on the Management of Ventricular Arrhythmias',
        source: 'Heart Rhythm Journal',
        year: '2023 Guidelines',
        summary: 'Recomienda mexiletina como fármaco adyuvante para tormentas arrítmicas ventriculares y terapia dirigida específica en LQT3.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 10 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: 'Reducir al 50-75% de la dosis habitual.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Atraviesa la placenta; usar solo si el control arrítmico materno es prioritario.',
      clinicalAlternative: 'Betabloqueantes (Metoprolol o Propranolol).'
    }
  },
  {
    id: 'aliskiren',
    name: 'Aliskiren',
    commercialNames: ['Aliskiren', 'Tekturna', 'Rasilez'],
    category: 'Cardiovascular',
    atcCode: 'C09XA02',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Directo No Peptídico de la Renina Humana (IDR)',
    badgeText: 'Cardiovascular · DCI Aliskiren (Inhibidor Directo Renina)',
    shortDescription: 'Inhibidor oral potente y selectivo de la renina humana. Actúa en el punto inicial del sistema renina-angiotensina-aldosterona (SRAA), bloqueando la escisión del angiotensinógeno a angiotensina I y suprimiendo tanto la actividad de la renina plasmática como la síntesis de angiotensina II y aldosterona.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'alis-comp-150',
        name: 'Comprimidos Recubiertos 150 mg',
        amountMg: 150,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'alis-comp-300',
        name: 'Comprimidos Recubiertos 300 mg (Dosis Máxima)',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'alis-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos (DCI Aliskiren)',
        fixedAdultDoseMg: 150,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 300,
        description: '150 mg una vez al día con o sin alimentos (evitar comidas con alto contenido graso que reducen su absorción). Puede aumentarse a 300 mg una vez al día a las 2-4 semanas.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial esencial en pacientes que no toleran otras clases antihipertensivas.',
      'Control tensional en combinación con calcioantagonistas o diuréticos.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA EN DIABETES ASOCIADO A IECA O ARA-II (ENSAYO ALTITUDE)!: La combinación de aliskiren con un IECA o ARA-II en pacientes con diabetes mellitus o insuficiencia renal incrementa drásticamente el riesgo de ictus, insuficiencia renal aguda e hiperpotasemia sin aportar ningún beneficio clínico.',
      'Baja biodisponibilidad oral (2-3%): Evitar comidas copiosas muy ricas en grasas que disminuyen aún más su absorción.',
      'Riesgo de diarrea dependiente de dosis (especialmente con 300 mg/día).'
    ],
    monitoringAndSideEffects: [
      'Potasio sérico y creatinina sérica.',
      'Presión arterial sistólica y diastólica.',
      'Diarrea leve a moderada.'
    ],
    evidenceAndSources: [
      {
        title: 'ALTITUDE Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró incremento de eventos adversos renales e ictus al combinar inhibición dual del SRAA con aliskiren en pacientes diabéticos, estableciendo su contraindicación formal en combinación.'
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
        adjustmentText: 'CONTRAINDICADO en insuficiencia renal moderada a grave combinado con IECAs/ARA-II.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Inhibe el eje renina fetal con lesión renal y muerte fetal. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa o Labetalol.'
    }
  },
  {
    id: 'pitavastatina',
    name: 'Pitavastatina',
    commercialNames: ['Pitavastatina', 'Livalo', 'Alipza'],
    category: 'Cardiovascular',
    atcCode: 'C10AA08',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de la HMG-CoA Reductasa Lipofílico con Metabolismo Glucídico Neutro',
    badgeText: 'Cardiovascular · DCI Pitavastatina (Metabolismo Glucídico Neutro)',
    shortDescription: 'Estatina sintética con un anillo ciclopropilo que le confiere una inhibición competitiva extremadamente potente de la HMG-CoA reductasa a dosis milimétricas (1 a 4 mg). Se metaboliza mínimamente por glucuronidación sin depender de CYP3A4 y es la única estatina que ha demostrado neutralidad sobre el metabolismo hidrocarbonado, sin elevar la hemoglobina glicosilada ni aumentar el riesgo de diabetes.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'pita-comp-2',
        name: 'Comprimidos Recubiertos 2 mg',
        amountMg: 2,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'pita-comp-4',
        name: 'Comprimidos Recubiertos 4 mg (Dosis Máxima)',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'pita-ind-dislipidemia-prediabetes',
        name: 'Hipercolesterolemia / Dislipidemia en Pacientes Prediabéticos o con Síndrome Metabólico',
        fixedAdultDoseMg: 2,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 4,
        maxSingleDoseMg: 4,
        description: 'Iniciar con 2 mg una vez al día con o sin alimentos a cualquier hora del día. Puede aumentarse a 4 mg una vez al día según cifras de c-LDL objetivo.'
      }
    ],
    whenToUse: [
      'Pacientes con dislipidemia y alto riesgo de desarrollar diabetes (prediabetes, obesidad abdominal, síndrome metabólico).',
      'Pacientes con VIH tratados con antirretrovirales (ensayo REPRIEVE demostró reducción del 35% en eventos CV mayores).',
      'Pacientes polimedicados donde se deseen evitar interacciones por citocromo CYP3A4.'
    ],
    pearlsAndPitfalls: [
      '¡Respeto Metabólico Glucídico!: A diferencia de atorvastatina o rosuvastatina (que pueden inducir elevación leve de glucemia basal), pitavastatina preserva la secreción de insulina por las células beta pancreáticas.',
      'Ensayo REPRIEVE: Demostró una reducción masiva de infartos de miocardio e ictus en personas con infección por VIH con riesgo cardiovascular bajo a moderado tratadas con pitavastatina 4 mg/día.',
      'Contraindicada con ciclosporina (multiplica los niveles plasmáticos de pitavastatina).'
    ],
    monitoringAndSideEffects: [
      'Perfil lipídico a las 4-12 semanas.',
      'Glucemia basal y HbA1c (demuestra estabilidad metabólica).',
      'Transaminasas hepáticas.'
    ],
    evidenceAndSources: [
      {
        title: 'REPRIEVE Clinical Trial',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'Demostró una impresionante reducción del 35% en eventos cardiovasculares mayores adversos en pacientes tratados con pitavastatina 4 mg al día.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 60 mL/min',
        adjustmentText: 'Dosis estándar de 2 a 4 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 59 mL/min',
        adjustmentText: 'Iniciar con 1 mg al día; dosis máxima de 2 mg al día.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min o Hemodiálisis',
        adjustmentText: 'Dosis máxima recomendada de 2 mg al día.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico)',
      summary: 'Inhibe la síntesis de colesterol indispensable para la embriogénesis. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Colesevelam.'
    }
  },
  {
    id: 'icosapento-etilo',
    name: 'Icosapento de Etilo',
    commercialNames: ['Icosapento de Etilo', 'Vazkepa', 'Vascepa'],
    category: 'Cardiovascular',
    atcCode: 'C10AX06',
    awareCategory: 'Access',
    therapeuticClass: 'Éster Etílico Altamente Purificado de Ácido Eicosapentaenoico (EPA Puro)',
    badgeText: 'Cardiovascular · DCI Icosapento Etilo (REDUCE-IT)',
    shortDescription: 'Éster etílico del ácido graso poliinsaturado omega-3 eicosapentaenoico (EPA) con una pureza superior al 96% (desprovisto de DHA). Reduce la síntesis hepática de VLDL, estabiliza las membranas celulares endoteliales y ejerce una potente acción antiinflamatoria y antiplaquetaria sin elevar el colesterol LDL.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'icosa-caps-1000',
        name: 'Cápsulas Blandas 1000 mg (1 g) (DCI Icosapento de Etilo)',
        amountMg: 1000,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Tragar enteras con las comidas; no masticar'
      }
    ],
    indications: [
      {
        id: 'icosa-ind-reduce-it',
        name: 'Reducción de Riesgo Cardiovascular en Pacientes Tratados con Estatinas con Triglicéridos Altos (REDUCE-IT)',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        description: '2 cápsulas de 1000 mg (2 g) dos veces al día (total 4 gramos al día) con o inmediatamente después de las comidas principales (desayuno y cena).'
      }
    ],
    whenToUse: [
      'Adultos con enfermedad cardiovascular establecida o diabetes con ≥2 factores de riesgo cardiovascular adicionales, tratados con dosis máxima de estatina, que presentan triglicéridos elevados (≥150 mg/dL a 499 mg/dL).',
      'Reducción de eventos isquémicos recurrentes (infarto, ictus, revascularización).'
    ],
    pearlsAndPitfalls: [
      'Ensayo REDUCE-IT: Demostró una reducción estadísticamente arrolladora del 25% en eventos cardiovasculares mayores adversos y del 20% en muerte cardiovascular con 4 g/día de icosapento de etilo.',
      'Diferencia Crítica con los suplementos de Omega-3 comunes: Los preparados que contienen DHA pueden elevar el colesterol LDL; el icosapento de etilo es EPA puro al 96% y no eleva el LDL.',
      'Ligero incremento de fibrilación auricular o flutter (3.1% vs 2.1% en placebo) y sangrados menores.'
    ],
    monitoringAndSideEffects: [
      'Perfil lipídico completo.',
      'Electrocardiograma periódico (vigilar aparición de fibrilación auricular).',
      'Signos de sangrado en pacientes anticoagulados o con doble antiagregación.'
    ],
    evidenceAndSources: [
      {
        title: 'REDUCE-IT Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción del 25% en el criterio principal de valoración cardiovascular en pacientes de alto riesgo tratados con estatinas con hipertrigliceridemia residual.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en disfunción renal ni hemodiálisis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible con Precaución en Gestación',
      summary: 'Ácido graso esencial; se dispone de amplia experiencia con ácidos grasos omega-3 durante el embarazo.',
      clinicalAlternative: 'Fármaco de elección para triglicéridos en gestación.'
    }
  },
  {
    id: 'vericiguat',
    name: 'Vericiguat',
    commercialNames: ['Vericiguat', 'Verquvo'],
    category: 'Cardiovascular',
    atcCode: 'C01DX22',
    awareCategory: 'Access',
    therapeuticClass: 'Estimulador Directo de la Guanilato Ciclasa Soluble (GCs) · Insuficiencia Cardíaca',
    badgeText: 'Cardiovascular · DCI Vericiguat (VICTORIA)',
    shortDescription: 'Estimulador oral directo de la guanilato ciclasa soluble (GCs). Estimula directamente la enzima independientemente del óxido nítrico endógeno y sensibiliza la GCs al óxido nítrico residual, incrementando la síntesis de GMP cíclico intracelular. Restaura la relajación vascular, atenúa la disfunción miocárdica y reduce la fibrosis ventricular.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'veri-comp-25',
        name: 'Comprimidos Recubiertos 2.5 mg',
        amountMg: 2.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar con alimentos'
      },
      {
        id: 'veri-comp-5',
        name: 'Comprimidos Recubiertos 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'veri-comp-10',
        name: 'Comprimidos Recubiertos 10 mg (Dosis Objetivo)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'veri-ind-icfer-descompensada',
        name: 'Insuficiencia Cardíaca con FEVI < 45% tras Episodio de Descompensación Reciente (Ensayo VICTORIA)',
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: 'Iniciar con 2.5 mg una vez al día con alimentos. Duplicar la dosis aproximadamente cada 2 semanas: 5 mg una vez al día hasta la dosis objetivo diana de 10 mg una vez al día según tolerancia y presión arterial.'
      }
    ],
    whenToUse: [
      'Pacientes con insuficiencia cardíaca crónica con FEVI reducida (<45%) estabilizados tras una hospitalización por IC o necesidad de diuréticos intravenosos en los últimos 6 meses.',
      'Adyuvante a los cuatro pilares fundamentales de la insuficiencia cardíaca.'
    ],
    pearlsAndPitfalls: [
      'Ensayo VICTORIA: Demostró una reducción significativa del 10% en muerte cardiovascular o primera hospitalización por IC en una población de muy alto riesgo con descompensación reciente.',
      'Tomar obligatoriamente con comida: aumenta significativamente la biodisponibilidad y reduce la variabilidad plasmática.',
      '¡CONTRAINDICADO CON OTROS ESTIMULADORES DE GCs O INHIBIDORES DE PDE-5!: NUNCA combinar con riociguat ni con sildenafilo o tadalafilo (riesgo de hipotensión severa).'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica (mantener PAS ≥ 100 mmHg).',
      'Hemoglobina y hematocrito (puede causar anemia leve transitoria).',
      'Ausencia de síncope o hipotensión sintomática.'
    ],
    evidenceAndSources: [
      {
        title: 'VICTORIA Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró eficacia clínica estadísticamente significativa en la reducción de muerte cardiovascular y reingresos en pacientes de alto riesgo con insuficiencia cardíaca recientemente descompensada.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 15 mL/min/1.73m²',
        adjustmentText: 'Dosis estándar con titulación habitual.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 15 mL/min/1.73m² o Diálisis',
        adjustmentText: 'No recomendado por ausencia de datos clínicos.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico)',
      summary: 'Produce daño embriofetal y anomalías cardiovasculares en animales. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Hidralazina y Nitratos.'
    }
  },
  {
    id: 'bosentan',
    name: 'Bosentán',
    commercialNames: ['Bosentán', 'Tracleer'],
    category: 'Cardiovascular',
    atcCode: 'C02KX01',
    awareCategory: 'Reserve',
    therapeuticClass: 'Antagonista Dual de Receptores de Endotelina (ETA y ETB) · Hipertensión Pulmonar',
    badgeText: 'Cardiovascular · DCI Bosentán (HAP)',
    shortDescription: 'Antagonista competitivo no peptídico dual de los receptores de endotelina-1 ETA y ETB. Bloquea la vasoconstricción pulmonar y el remodelado fibrótico vascular inducido por endotelina en el árbol arterial pulmonar. Fármaco pionero para el tratamiento de la hipertensión arterial pulmonar clase funcional II a IV.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'bosen-comp-625',
        name: 'Comprimidos Recubiertos 62.5 mg',
        amountMg: 62.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'bosen-comp-125',
        name: 'Comprimidos Recubiertos 125 mg (Dosis de Mantenimiento)',
        amountMg: 125,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'bosen-ind-hap',
        name: 'Hipertensión Arterial Pulmonar (HAP Grupo 1 OMS) / Esclerosis Sistémica con Úlceras Digitales',
        fixedAdultDoseMg: 62.5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 250,
        maxSingleDoseMg: 125,
        description: 'Iniciar con 62.5 mg cada 12 horas por vía oral durante las primeras 4 semanas. Posteriormente titular a la dosis de mantenimiento de 125 mg cada 12 horas con o sin alimentos.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial pulmonar idiopática, hereditaria o asociada a conectivopatías en clase funcional II, III o IV de la OMS.',
      'Prevención de la recurrencia de úlceras digitales activas en esclerosis sistémica (esclerodermia).'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA de Hepatotoxicidad y Monitorización Mensual de Transaminasas!: Produce elevación de transaminasas (ALT/AST > 3 veces el límite normal) en hasta un 11% de pacientes; requiere análisis de función hepática mensual OBLIGATORIO antes de renovar la prescripción.',
      '¡Teratogenicidad Extrema (Blackbox FDA)!: Causa malformaciones congénitas craneofaciales y cardiovasculares graves; requiere doble método anticonceptivo y prueba de embarazo mensual obligatoria.',
      'Disminuye la eficacia de los anticonceptivos hormonales orales mediante inducción del citocromo CYP3A4.'
    ],
    monitoringAndSideEffects: [
      'Transaminasas hepáticas (ALT/AST) MENSUALES obligatorias.',
      'Hemoglobina y hematocrito (puede producir anemia en las primeras semanas).',
      'Test de embarazo mensual en mujeres en edad fértil.'
    ],
    evidenceAndSources: [
      {
        title: 'BREATHE-1 Landmark Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una mejora estadísticamente significativa en la capacidad de ejercicio (test de marcha de 6 minutos), clase funcional y retraso del tiempo hasta el empeoramiento clínico en HAP.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación casi total biliar/fecal.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico Severo)',
      summary: 'Produce malformaciones fetales congénitas letales. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Prostaciclinas parenterales o Sildenafilo bajo supervisión experta en HAP.'
    }
  },
  {
    id: 'macitentan',
    name: 'Macitentán',
    commercialNames: ['Macitentán', 'Opsumit'],
    category: 'Cardiovascular',
    atcCode: 'C02KX04',
    awareCategory: 'Reserve',
    therapeuticClass: 'Antagonista Dual de Receptores de Endotelina con Alta Lipofilia y Penetración Tisular',
    badgeText: 'Cardiovascular · DCI Macitentán (SERAPHIN)',
    shortDescription: 'Antagonista dual de los receptores de endotelina ETA y ETB caracterizado por una elevada lipofilia y unión sostenida al receptor. Fármaco de oro para hipertensión arterial pulmonar que demostró reducción significativa de la morbimortalidad a largo plazo con una tasa de hepatotoxicidad significativamente menor que bosentán.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'maci-comp-10',
        name: 'Comprimidos Recubiertos 10 mg (Dosis Estándar Diaria)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'maci-ind-hap',
        name: 'Hipertensión Arterial Pulmonar a Largo Plazo (Ensayo SERAPHIN)',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '10 mg una vez al día con o sin alimentos, tragado entero con agua.'
      }
    ],
    whenToUse: [
      'Tratamiento a largo plazo de la hipertensión arterial pulmonar (HAP) en monoterapia o en combinación con inhibidores de PDE-5 (ej. sildenafilo o tadalafilo).',
      'Pacientes con HAP que buscan la comodidad de una sola toma al día y menor riesgo de toxicidad hepática que bosentán.'
    ],
    pearlsAndPitfalls: [
      'Ensayo SERAPHIN: Primer ensayo clínico en HAP con objetivo principal de morbimortalidad a largo plazo; redujo en un 45% el riesgo de eventos clínicos de empeoramiento de la HAP o muerte.',
      'Perfil hepático significativamente más seguro que bosentán (incidencia de elevación de transaminasas similar a placebo).',
      '¡Teratogenicidad Estricta!: Prohibido en el embarazo; requiere doble método anticonceptivo.'
    ],
    monitoringAndSideEffects: [
      'Hemoglobina y hematocrito (descartar anemia).',
      'Transaminasas hepáticas basales y periódicas.',
      'Test de embarazo mensual en mujeres en edad fértil.'
    ],
    evidenceAndSources: [
      {
        title: 'SERAPHIN Clinical Trial',
        source: 'New England Journal of Medicine',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una reducción del 45% en el riesgo de empeoramiento de la enfermedad o muerte en pacientes con hipertensión arterial pulmonar tratados con macitentán 10 mg.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; no se dializa.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico)',
      summary: 'Produce malformaciones cardiovasculares y esqueléticas fetales graves. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Prostaciclinas inhaladas o parenterales.'
    }
  },
  {
    id: 'fenilefrina-iv-cardio',
    name: 'Fenilefrina IV (Cardiovascular)',
    commercialNames: ['Fenilefrina Inyectable', 'Vazculep'],
    category: 'Cardiovascular',
    atcCode: 'C01CA06',
    awareCategory: 'Access',
    therapeuticClass: 'Agonista Alfa-1 Adrenérgico Vasoconstrictor Puro Parenteral',
    badgeText: 'Cardiovascular · DCI Fenilefrina IV (Vasoconstrictor Puro)',
    shortDescription: 'Agonista selectivo potente de los receptores alfa-1 adrenérgicos vasculares sin actividad beta-adrenérgica. Produce una intensa vasoconstricción arteriolar sistémica incrementando la resistencia vascular periférica y la presión arterial media, acompañada de bradicardia refleja vagal compensatoria.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'feni-amp-10',
        name: 'Ampolla Inyectable IV 10 mg / 1 mL (10 mg/mL)',
        amountMg: 10,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'DILUIR OBLIGATORIAMENTE ANTES DE ADMINISTRAR (concentración 100 mcg/mL)'
      }
    ],
    indications: [
      {
        id: 'feni-ind-hipotension-anestesia',
        name: 'Hipotensión Inducida por Anestesia Raquídea / General o Vasoplejía con Taquicardia',
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento agudo',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 0.2,
        description: 'Bolo IV diluido: 50 a 100 mcg (0.05 a 0.1 mg) en bolo lento cada 2-5 minutos según necesidad. Infusión continua de mantenimiento: 0.4 a 1.5 mcg/kg/min (o 20 a 100 mcg/min) titulada según presión arterial media.'
      }
    ],
    whenToUse: [
      'Hipotensión aguda secundaria a simpatectomía por anestesia raquídea o epidural en cesáreas y cirugía obstétrica (vasopresor de elección por no producir taquicardia fetal).',
      'Shock distributivo o vasopléjico donde el paciente ya presenta taquicardia severa y se desea evitar el estímulo beta-1 de la noradrenalina.',
      'Sepsis hiperdinámica con gasto cardíaco elevado pero hipotensión severa.'
    ],
    pearlsAndPitfalls: [
      '¡Vasopresor de Elección en Cesárea bajo Anestesia Raquídea!: A diferencia de la efedrina, la fenilefrina produce menos acidosis fetal y menor taquicardia en el neonato, siendo el estándar de oro en obstetricia moderna.',
      'Bradicardia refleja mediada por barorreceptores: La intensa vasoconstricción periférica eleva la presión bruscamente y puede reducir la frecuencia cardíaca y el gasto cardíaco si la contractilidad miocárdica está deprimida.',
      'Extravasación tisular: Riesgo de necrosis tisular local; infundir preferentemente por catéter venoso central o vía periférica proximal gruesa.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial invasiva continua y frecuencia cardíaca.',
      'Gasto cardíaco y perfusión tisular periférica (lactato).',
      'Integridad del sitio de venoclisis.'
    ],
    evidenceAndSources: [
      {
        title: 'Consensus Statement on the Management of Hypotension During Cesarean Delivery',
        source: 'Anesthesia & Analgesia',
        year: '2023 Guidelines',
        summary: 'Recomienda fuertemente la fenilefrina IV como el vasopresor de primera línea para prevenir y tratar la hipotensión materna durante el parto por cesárea.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; titular por efecto hemodinámico.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Vasopresor de 1.ª Elección en Anestesia Obstétrica',
      summary: 'Estándar de oro mundial para el control de la hipotensión inducida por anestesia espinal durante el parto por cesárea sin inducir acidosis fetal.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'mavacamten',
    name: 'Mavacamten',
    commercialNames: ['Mavacamten', 'Camzyos'],
    category: 'Cardiovascular',
    atcCode: 'C01EB24',
    awareCategory: 'Reserve',
    therapeuticClass: 'Inhibidor Alostérico Selectivo y Reversible de la Miosina Cardíaca',
    badgeText: 'Cardiovascular · DCI Mavacamten (MCH Obstructiva)',
    shortDescription: 'Inhibidor selectivo, alostérico y reversible de la miosina cardíaca que normaliza la hipercontractilidad miocárdica característica de la miocardiopatía hipertrófica. Reduce la formación de puentes cruzados actina-miosina en exceso, disminuyendo radicalmente el gradiente de presión en el tracto de salida del ventrículo izquierdo (TSVI) y aliviando la disnea y la insuficiencia cardíaca.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'mava-caps-25',
        name: 'Cápsulas 2.5 mg',
        amountMg: 2.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'mava-caps-5',
        name: 'Cápsulas 5 mg (Dosis Inicial)',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'mava-caps-10',
        name: 'Cápsulas 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'mava-caps-15',
        name: 'Cápsulas 15 mg',
        amountMg: 15,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      }
    ],
    indications: [
      {
        id: 'mava-ind-mch-obstructiva',
        name: 'Miocardiopatía Hipertrófica Obstructiva Sintomática (NYHA II-III / EXPLORER-HCM)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo con ecocardiograma seriado',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 15,
        description: 'Dosis inicial de 5 mg una vez al día con o sin alimentos en pacientes con FEVI basal ≥ 55%. Evaluar con ecocardiograma a las semanas 4, 8 y 12: si FEVI ≥ 55% y gradiente TSVI con Valsalva ≥ 30 mmHg, titular a 10 mg o 15 mg/día. Si FEVI cae < 50%, INTERRUMPIR temporalmente el tratamiento.'
      }
    ],
    whenToUse: [
      'Miocardiopatía hipertrófica obstructiva (MCHO) sintomática en clase funcional NYHA II o III a pesar de betabloqueantes o verapamilo para evitar miectomía quirúrgica o ablación septal con alcohol.',
      'Reducción del gradiente del tracto de salida ventricular izquierdo en reposo y con maniobra de Valsalva.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA de Riesgo de Insuficiencia Cardíaca por Disfunción Sistólica (FEVI < 50%)!: Al reducir la contractilidad, puede inducir caída excesiva de la FEVI; requiere monitorización ecocardiográfica seriada estricta.',
      'Programa REMS obligatorio: Exige certificación médica y control ecocardiográfico riguroso de la FEVI antes de cada renovación.',
      'Metabolizado principalmente por CYP2C19 y CYP3A4: susceptible a interacciones farmacológicas importantes.'
    ],
    monitoringAndSideEffects: [
      'Ecocardiograma transtorácico obligatorio para medir FEVI y gradiente de TSVI en reposo y con Valsalva a las semanas 4, 8, 12 y luego cada 12 semanas.',
      'Aparición de disnea de esfuerzo o fatiga nueva.',
      'Interacciones farmacológicas con inductores o inhibidores de CYP2C19.'
    ],
    evidenceAndSources: [
      {
        title: 'EXPLORER-HCM & VALOR-HCM Clinical Trials',
        source: 'The Lancet & JAMA Cardiology',
        year: 'Landmark / 2023 Guidelines',
        summary: 'Demostró una mejoría contundente en el consumo pico de oxígeno (pVO2), clase funcional NYHA y reducción del gradiente de TSVI, evitando la necesidad de cirugía de reducción septal en más del 80% de los pacientes.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar con ecocardiograma seriado.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min o Diálisis',
        adjustmentText: 'No recomendado por ausencia de datos clínicos.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico Severo)',
      summary: 'Produce malformaciones cardíacas y esqueléticas fetales. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metoprolol o Verapamilo.'
    }
  }
];
