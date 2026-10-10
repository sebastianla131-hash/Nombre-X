import { Medication } from '../types';

export const MEDSCAPE_ALLERGY_COLD: Medication[] = [
  {
    id: 'clorfenamina',
    name: 'Clorfeniramina (Clorfenamina)',
    commercialNames: ['Cloro-Trimeton', 'Polaramine', 'Clorfenamina', 'Histiacil (comb)'],
    category: 'Alergia / Resfriado',
    atcCode: 'R06AB04',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 de 1.ª Generación (Alquilamina) · Sedante',
    badgeText: 'Alergia / Resfriado · 1.ª Generación',
    shortDescription: 'Antihistamínico clásico con moderada actividad anticolinérgica y sedante. Muy utilizado para el alivio sintomático de estornudos, rinorrea y prurito ocular en resfriado común y rinitis alérgica aguda.',
    availableRoutes: ['oral', 'im', 'iv'],
    concentrations: [
      {
        id: 'clorf-jarabe-2',
        name: 'Jarabe Pediátrico 2 mg / 5 mL (0.4 mg/mL)',
        amountMg: 2,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'clorf-comp-4',
        name: 'Comprimidos Ranurados 4 mg',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'clorf-amp-10',
        name: 'Ampolla Inyectable IM/IV 10 mg / 1 mL',
        amountMg: 10,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'clorf-ind-resfriado-adulto',
        name: 'Rinitis Alérgica / Síntomas de Resfriado Común en Adultos',
        fixedAdultDoseMg: 4,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 4,
        description: '4 mg cada 4 a 6 horas por vía oral (o formulación de liberación prolongada 8-12 mg cada 12 horas).'
      },
      {
        id: 'clorf-ind-peds',
        name: 'Alergia y Prurito Pediátrico (>2 años)',
        recommendedDoseMgPerKgPerDay: 0.35,
        minDoseMgPerKgPerDay: 0.35,
        maxDoseMgPerKgPerDay: 0.35,
        fixedAdultDoseMg: 4,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 12,
        maxSingleDoseMg: 2,
        description: '2 a 5 años: 1 mg cada 4 a 6 horas (máx 6 mg/día). 6 a 12 años: 2 mg cada 4 a 6 horas (máx 12 mg/día).'
      }
    ],
    whenToUse: [
      'Alivio rápido de síntomas vasomotores del resfriado común (rinorrea acuosa y estornudos).',
      'Urticaria aguda y reacciones alérgicas leves a alimentos o picaduras de insectos.',
      'Coadyuvante en prurito nocturno que interrumpe el sueño.'
    ],
    pearlsAndPitfalls: [
      'Marcado efecto sedante y anticolinérgico: contraindicado en glaucoma de ángulo cerrado, hiperplasia prostática con retención urinaria y obstrucción pilórica.',
      'Evitar el consumo concomitante de alcohol o sedantes del SNC por potenciación depresora.',
      'En adultos mayores puede provocar delirio, confusión y aumento significativo del riesgo de caídas.'
    ],
    monitoringAndSideEffects: [
      'Nivel de alerta y somnolencia diurna.',
      'Sequedad de boca, visión borrosa y retención urinaria.',
      'Evolución del prurito o rinorrea.'
    ],
    evidenceAndSources: [
      {
        title: 'Cochrane Review: Antihistamines for the Common Cold',
        source: 'Cochrane Database of Systematic Reviews',
        year: '2023',
        summary: 'Los antihistamínicos de primera generación combinados con descongestionantes ofrecen un alivio moderado de la rinorrea en adultos en los primeros 2 días.'
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
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Amplio Historial de Uso en Embarazo',
      summary: 'Es uno de los antihistamínicos con mayor experiencia de seguridad en mujeres gestantes cuando se requiere un antihistamínico de primera generación.',
      clinicalAlternative: 'Cetirizina o Loratadina como opciones no sedantes.'
    }
  },
  {
    id: 'hidroxizina',
    name: 'Hidroxizina',
    commercialNames: ['Atarax', 'Vistaril', 'Akiskam'],
    category: 'Alergia / Resfriado',
    atcCode: 'N05BB01',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 de 1.ª Generación (Piperazina) · Ansiolítico y Antipruriginoso',
    badgeText: 'Alergia · Prurito Severo / Urticaria',
    shortDescription: 'Potente antagonista H1 central y periférico con marcadas propiedades antipruriginosas, ansiolíticas y sedantes. Fármaco de referencia en urticaria colinérgica y prurito refractario.',
    availableRoutes: ['oral', 'im'],
    concentrations: [
      {
        id: 'hidroxi-jarabe-10',
        name: 'Jarabe 10 mg / 5 mL (2 mg/mL)',
        amountMg: 10,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'hidroxi-comp-25',
        name: 'Comprimidos Ranurados 25 mg',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'hidroxi-ind-prurito-adulto',
        name: 'Prurito Intenso por Urticaria / Dermatitis Atópica en Adultos',
        fixedAdultDoseMg: 25,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-14 días',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 50,
        description: '25 mg cada 6 a 8 horas (o 50 mg en toma única nocturna para controlar el rascado durante el sueño).'
      },
      {
        id: 'hidroxi-ind-peds',
        name: 'Prurito y Urticaria Pediátrica (>1 año)',
        recommendedDoseMgPerKgPerDay: 2,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 2.5,
        fixedAdultDoseMg: 25,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 25,
        description: '1 a 2 mg/kg/día dividido cada 6 a 8 horas.'
      }
    ],
    whenToUse: [
      'Prurito dermatológico incoercible secundario a urticaria crónica, eccema o varicela.',
      'Premedicación anestésica y alivio de la ansiedad a corto plazo.',
      'Urticaria colinérgica y dermografismo sintomático.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Prolongación del Intervalo QTc!: Inhibe canales de potasio cardíacos hERG; contraindicada en pacientes con síndrome de QT largo congénito o coadministración de fármacos que prolonguen el QTc.',
      'Dosis máxima estricta en adultos: 100 mg/día (máximo 50 mg/día en ancianos para reducir riesgo de arritmias ventriculares).',
      'Se metaboliza en el organismo a cetirizina (su metabolito carboxílico activo no sedante).'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (intervalo QTc) en pacientes con factores de riesgo arritmogénico.',
      'Nivel de sedación y boca seca.',
      'Control del prurito nocturno y lesiones por rascado.'
    ],
    evidenceAndSources: [
      {
        title: 'EMA PRAC Recommendations on Hydroxyzine Safety and QT Prolongation',
        source: 'European Medicines Agency',
        year: '2023',
        summary: 'Establece límites de dosis diaria máxima de 100 mg en adultos y 50 mg en ancianos para minimizar el riesgo de arritmias ventriculares.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 50 mL/min',
        adjustmentText: 'Reducir la dosis diaria al 50%.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en 1.er Trimestre',
      summary: 'Efectos teratogénicos a dosis altas en animales. Evitar en el primer trimestre; de ser necesario un antihistamínico sedante en el embarazo se prefiere clorfeniramina o difenhidramina.',
      clinicalAlternative: 'Clorfeniramina o Cetirizina.'
    }
  },
  {
    id: 'levocetirizina',
    name: 'Levocetirizina',
    commercialNames: ['Xyzal', 'Zyxem', 'Degraler', 'Levocet'],
    category: 'Alergia / Resfriado',
    atcCode: 'R06AE09',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 de 3.ª Generación (Enantiómero R de Cetirizina)',
    badgeText: 'Alergia · Máxima Afinidad H1',
    shortDescription: 'R-enantiómero farmacológicamente activo de la cetirizina. Posee el doble de afinidad por el receptor histamínico H1 con la mitad de la dosis, manteniendo una acción antihistamínica prolongada de 24 horas y menor somnolencia residual.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'levoce-sol-5',
        name: 'Gotas Orales / Solución 5 mg / mL (Pediátrico)',
        amountMg: 5,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        standardBottleMl: 20,
        notes: '20 gotas = 1 mL = 5 mg (0.25 mg por gota)'
      },
      {
        id: 'levoce-jarabe-25',
        name: 'Jarabe 2.5 mg / 5 mL (0.5 mg/mL)',
        amountMg: 2.5,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'levoce-comp-5',
        name: 'Comprimidos Recubiertos 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'levoce-ind-rinitis-adulto',
        name: 'Rinitis Alérgica Estacional y Perenne / Urticaria Crónica Adultos',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según síntomas',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 5,
        description: '5 mg una vez al día por la noche, con o sin alimentos.'
      },
      {
        id: 'levoce-ind-peds',
        name: 'Alergia Pediátrica (>6 meses)',
        recommendedDoseMgPerKgPerDay: 0.125,
        minDoseMgPerKgPerDay: 0.1,
        maxDoseMgPerKgPerDay: 0.2,
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-14 días',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 2.5,
        description: '6 meses a 5 años: 1.25 mg una vez al día por la noche. 6 a 11 años: 2.5 mg una vez al día. ≥12 años: 5 mg al día.'
      }
    ],
    whenToUse: [
      'Rinitis alérgica persistente y conjuntivitis alérgica.',
      'Urticaria crónica espontánea refractaria a otros antihistamínicos.',
      'Prurito alérgico con necesidad de cobertura continua de 24 horas.'
    ],
    pearlsAndPitfalls: [
      'Doble de afinidad por el receptor H1 respecto a la cetirizina racémica, logrando igual eficacia clínica con solo 5 mg (frente a 10 mg de cetirizina).',
      'Inicio de acción en menos de 60 minutos con duración del bloqueo histamínico superior a 24 horas.',
      'Eliminación por excreción renal inalterada en un 85%; requiere ajuste estricto por aclaramiento de creatinina.'
    ],
    monitoringAndSideEffects: [
      'Alivio de síntomas nasales y oculares.',
      'Función renal (ajustar intervalo en insuficiencia renal moderada a severa).',
      'Somnolencia leve o astenia en pacientes sensibles.'
    ],
    evidenceAndSources: [
      {
        title: 'Comparative Efficacy of Levocetirizine vs Other Second-Generation Antihistamines',
        source: 'Annals of Allergy, Asthma & Immunology',
        year: '2023',
        summary: 'Demostró superioridad en la inhibición de pápulas y eritema inducidos por histamina frente a fexofenadina y loratadina.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 80 mL/min',
        adjustmentText: '5 mg una vez al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '50 - 79 mL/min',
        adjustmentText: '2.5 mg una vez al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: '2.5 mg cada 48 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 29 mL/min',
        adjustmentText: '2.5 mg dos veces por semana (cada 3-4 días).',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: 'Contraindicado.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Seguro en Gestación',
      summary: 'No se han observado efectos teratogénicos ni toxicidad fetal en estudios preclínicos ni en vigilancia poscomercialización de cetirizina/levocetirizina.',
      clinicalAlternative: 'Fármaco de elección preferente.'
    }
  },
  {
    id: 'desloratadina',
    name: 'Desloratadina',
    commercialNames: ['Aerius', 'Clarinex', 'Desalex', 'Alergical'],
    category: 'Alergia / Resfriado',
    atcCode: 'R06AX27',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 de 2.ª Generación (Metabolito Activo de Loratadina) · No Sedante',
    badgeText: 'Alergia · No Sedante Puro',
    shortDescription: 'Metabolito activo principal de la loratadina. Posee una potencia antihistamínica 3 a 4 veces superior, acción antiinflamatoria adicional sobre citocinas y mastocitos, y carece de efectos sedantes o anticolinérgicos a dosis terapéuticas.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'deslo-jarabe-25',
        name: 'Jarabe Pediátrico 2.5 mg / 5 mL (0.5 mg/mL)',
        amountMg: 2.5,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'deslo-comp-5',
        name: 'Comprimidos Recubiertos 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'deslo-ind-rinitis-adulto',
        name: 'Rinitis Alérgica / Urticaria Aguda y Crónica en Adultos y ≥12 años',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según necesidad',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 5,
        description: '5 mg una vez al día con o sin alimentos.'
      },
      {
        id: 'deslo-ind-peds',
        name: 'Alergia Pediátrica (≥6 meses)',
        recommendedDoseMgPerKgPerDay: 0.1,
        minDoseMgPerKgPerDay: 0.08,
        maxDoseMgPerKgPerDay: 0.15,
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-14 días',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 2.5,
        description: '6 a 11 meses: 1 mg una vez al día (2 mL). 1 a 5 años: 1.25 mg una vez al día (2.5 mL). 6 a 11 años: 2.5 mg una vez al día (5 mL).'
      }
    ],
    whenToUse: [
      'Rinitis alérgica estacional y perenne con congestión nasal y prurito palatino.',
      'Urticaria crónica idiopática con habones recurrentes.',
      'Alergias en pacientes que requieren mantener alerta psicomotora total (conductores, pilotos, operarios).'
    ],
    pearlsAndPitfalls: [
      'Verdaderamente no sedante: a dosis de 5 mg no atraviesa la barrera hematoencefálica y los estudios de electroencefalografía y conducción son indistinguibles del placebo.',
      'No depende del citocromo CYP3A4 para su activación (a diferencia de loratadina), lo que disminuye la variabilidad en pacientes polimedicados.',
      'Vida media de eliminación prolongada (27 horas) que permite una cómoda toma única diaria.'
    ],
    monitoringAndSideEffects: [
      'Alivio de la rinorrea y el prurito.',
      'Cefalea y faringitis leve en raras ocasiones.',
      'Tolerancia digestiva.'
    ],
    evidenceAndSources: [
      {
        title: 'Safety and Efficacy of Desloratadine in Allergic Rhinitis and Chronic Urticaria',
        source: 'Clinical Drug Investigation',
        year: '2023',
        summary: 'Demostró un perfil de seguridad cardíaca impecable sin prolongación del QTc incluso a 4 veces la dosis recomendada (20 mg/día).'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: '5 mg una vez al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: '5 mg en días alternos (cada 48 horas).',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible / Fármaco Seguro',
      summary: 'Amplios registros epidemiológicos con miles de mujeres expuestas a loratadina/desloratadina no han evidenciado riesgo de malformaciones fetales.',
      clinicalAlternative: 'Cetirizina o Loratadina.'
    }
  },
  {
    id: 'fexofenadina',
    name: 'Fexofenadina',
    commercialNames: ['Allegra', 'Telfast', 'Falex', 'Fexofast'],
    category: 'Alergia / Resfriado',
    atcCode: 'R06AX26',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 de 2.ª Generación Puro · No Sedante',
    badgeText: 'Alergia · Cero Sedación',
    shortDescription: 'Metabolito activo de terfenadina exento de cardiotoxicidad. Es el antihistamínico con la tasa más baja de cruce a través de la barrera hematoencefálica (sedación idéntica al placebo incluso a dosis supraterapéuticas).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'fexo-susp-30',
        name: 'Suspensión Oral Pediátrica 30 mg / 5 mL (6 mg/mL)',
        amountMg: 30,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 150
      },
      {
        id: 'fexo-comp-120',
        name: 'Comprimidos Recubiertos 120 mg',
        amountMg: 120,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'fexo-comp-180',
        name: 'Comprimidos Recubiertos 180 mg (Dosis Diaria Máxima)',
        amountMg: 180,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'fexo-ind-rinitis-adulto',
        name: 'Rinitis Alérgica Estacional en Adultos y ≥12 años',
        fixedAdultDoseMg: 120,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según necesidad',
        maxDailyDoseMg: 180,
        maxSingleDoseMg: 180,
        description: '120 mg una vez al día con un vaso lleno de agua sola.'
      },
      {
        id: 'fexo-ind-urticaria-adulto',
        name: 'Urticaria Crónica Idiopática en Adultos',
        fixedAdultDoseMg: 180,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 180,
        maxSingleDoseMg: 180,
        description: '180 mg una vez al día con agua.'
      },
      {
        id: 'fexo-ind-peds',
        name: 'Alergia Pediátrica (2 a 11 años)',
        fixedAdultDoseMg: 30,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5-14 días',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 30,
        description: '2 a 11 años: 30 mg cada 12 horas con agua.'
      }
    ],
    whenToUse: [
      'Rinitis alérgica en pacientes donde la somnolencia está absolutamente prohibida (aviadores, cirujanos, conductores de maquinaria pesada).',
      'Urticaria crónica idiopática moderada a grave.',
      'Rinitis asociada a síntomas oculares intensos.'
    ],
    pearlsAndPitfalls: [
      '¡Interacción Crítica con Zumos de Frutas!: Los zumos de pomelo (toronja), manzana o naranja inhiben el polipéptido transportador de aniones orgánicos (OATP1A2), reduciendo la absorción intestinal de fexofenadina hasta en un 70%. Ingerir EXCLUSIVAMENTE con agua natural.',
      'No se metaboliza en el hígado (<5%); se elimina inalterada principalmente por excreción biliar y heces.',
      'Carece por completo de la cardiotoxicidad (prolongación de QTc) de su predecesora terfenadina.'
    ],
    monitoringAndSideEffects: [
      'Eficacia en control de prurito nasal y estornudos.',
      'Cefalea y dispepsia leve ocasional.',
      'Separar al menos 2 horas de antiácidos con aluminio o magnesio.'
    ],
    evidenceAndSources: [
      {
        title: 'FAA Aerospace Medical Guidance: Approved Antihistamines for Flight Crews',
        source: 'Federal Aviation Administration (FAA)',
        year: '2023',
        summary: 'Fexofenadina es uno de los pocos antihistamínicos formalmente autorizados para pilotos en vuelo activo debido a su total ausencia de sedación central.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 80 mL/min',
        adjustmentText: 'Dosis estándar de 120-180 mg diarios.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 80 mL/min',
        adjustmentText: 'Iniciar con 60 mg una vez al día.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio en Gestación',
      summary: 'Datos en humanos no indican aumento de anomalías, pero se dispone de mayor volumen de datos de seguridad con cetirizina o loratadina.',
      clinicalAlternative: 'Cetirizina o Loratadina como opciones de primera línea en el embarazo.'
    }
  },
  {
    id: 'fluticasona-nasal',
    name: 'Fluticasona Nasal',
    commercialNames: ['Flonase', 'Avamys', 'Flixonase', 'Rinonida'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01AD08',
    awareCategory: 'Access',
    therapeuticClass: 'Corticoide Intranasal Tópico de Alta Afinidad · Antiinflamatorio de 1.ª Línea',
    badgeText: 'Alergia / Resfriado · Corticoide Nasal',
    shortDescription: 'Glucocorticoide sintético trifluorado con potente acción antiinflamatoria tópica en la mucosa nasal y mínima absorción sistémica (<1%). Considerado el tratamiento farmacológico individual más eficaz para la rinitis alérgica.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'fluti-spray-50',
        name: 'Spray / Suspensión para Pulverización Nasal 50 mcg / dosis (120 pulverizaciones)',
        amountMg: 0.05,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '50 mcg de propionato de fluticasona por cada disparo'
      },
      {
        id: 'fluti-spray-avamys-27',
        name: 'Spray Nasal Furoato de Fluticasona 27.5 mcg / dosis (Avamys)',
        amountMg: 0.0275,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '27.5 mcg por disparo (menor volumen y olor neutro)'
      }
    ],
    indications: [
      {
        id: 'fluti-ind-rinitis-adulto',
        name: 'Rinitis Alérgica Estacional / Perenne Moderada a Grave en Adultos',
        fixedAdultDoseMg: 0.2,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Temporada de pólenes o continuo',
        maxDailyDoseMg: 0.2,
        maxSingleDoseMg: 0.1,
        description: '2 pulverizaciones en cada fosa nasal una vez al día por la mañana (total 200 mcg/día). Al lograr control de síntomas, reducir a 1 pulverización por fosa al día.'
      },
      {
        id: 'fluti-ind-peds',
        name: 'Rinitis Alérgica Pediátrica (≥4 años)',
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según indicación',
        maxDailyDoseMg: 0.1,
        maxSingleDoseMg: 0.05,
        description: '4 a 11 años: 1 pulverización (50 mcg) en cada fosa nasal una vez al día (total 100 mcg/día).'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea para rinitis alérgica moderada a severa con obstrucción y congestión nasal intensa.',
      'Poliposis nasal inflamatoria para reducir el tamaño de los pólipos y restaurar el olfato.',
      'Rinosinusitis crónica con rinitis vasomotora.'
    ],
    pearlsAndPitfalls: [
      '¡Técnica de Aplicación Correcta!: Inclinar ligeramente la cabeza hacia adelante; sostener el frasco con la mano derecha para aplicar en la fosa nasal IZQUIERDA (y viceversa), dirigiendo la boquilla hacia la pared lateral externa de la nariz (hacia la oreja), NUNCA hacia el tabique nasal para evitar epistaxis o perforación septal.',
      'Efecto clínico óptimo: No es inmediato; tarda entre 2 y 7 días de uso diario continuo en alcanzar su eficacia antiinflamatoria máxima.',
      'Superior a los antihistamínicos orales para el alivio de la congestión nasal y síntomas oculares reflejos.'
    ],
    monitoringAndSideEffects: [
      'Mucosa del tabique nasal (descartar erosiones o sangrado).',
      'Epistaxis transitoria leve y sequedad nasal.',
      'Control de síntomas diurnos y calidad del sueño.'
    ],
    evidenceAndSources: [
      {
        title: 'Allergic Rhinitis and its Impact on Asthma (ARIA) Guidelines',
        source: 'Journal of Allergy and Clinical Immunology',
        year: '2023 Update',
        summary: 'Los corticosteroides intranasales son el tratamiento médico de primera elección para todos los pacientes con rinitis alérgica persistente.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; biodisponibilidad sistémica despreciable (<1%).',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible / Corticoide Nasal de Elección en Gestación',
      summary: 'Absorción sistémica prácticamente nula. Millones de prescripciones confirman su seguridad sin impacto adverso sobre el crecimiento fetal ni malformaciones.',
      clinicalAlternative: 'Fármaco de elección preferente.'
    }
  },
  {
    id: 'mometasona-nasal',
    name: 'Mometasona Nasal',
    commercialNames: ['Nasonex', 'Mometasona', 'Rinelon', 'Flixonase Nasal'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01AD09',
    awareCategory: 'Access',
    therapeuticClass: 'Corticoide Intranasal Tópico de Mínima Biodisponibilidad (<0.1%)',
    badgeText: 'Alergia · Biodisponibilidad <0.1%',
    shortDescription: 'Glucocorticoide tópico intranasal con la biodisponibilidad sistémica más baja de toda su clase farmacológica (<0.1%). Aprobado para rinitis alérgica en niños a partir de los 2 años de edad y pólipos nasales.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'mome-spray-50',
        name: 'Suspensión para Spray Nasal 50 mcg / dosis (140 dosis)',
        amountMg: 0.05,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '50 mcg de furoato de mometasona anhidro por pulverización'
      }
    ],
    indications: [
      {
        id: 'mome-ind-rinitis-adulto',
        name: 'Rinitis Alérgica Estacional y Perenne en Adultos y ≥12 años',
        fixedAdultDoseMg: 0.2,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Continuo o estacional',
        maxDailyDoseMg: 0.2,
        maxSingleDoseMg: 0.1,
        description: '2 pulverizaciones (50 mcg/disparo) en cada fosa nasal una vez al día (total 200 mcg/día). Reducir a 1 pulverización por fosa al día como mantenimiento.'
      },
      {
        id: 'mome-ind-peds',
        name: 'Rinitis Alérgica Pediátrica (2 a 11 años)',
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según temporada',
        maxDailyDoseMg: 0.1,
        maxSingleDoseMg: 0.05,
        description: '1 pulverización (50 mcg) en cada fosa nasal una vez al día (total 100 mcg/día).'
      },
      {
        id: 'mome-ind-polipos',
        name: 'Poliposis Nasal en Adultos (≥18 años)',
        fixedAdultDoseMg: 0.2,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '4 a 6 meses',
        maxDailyDoseMg: 0.4,
        maxSingleDoseMg: 0.2,
        description: '2 pulverizaciones en cada fosa nasal dos veces al día (total 400 mcg/día).'
      }
    ],
    whenToUse: [
      'Rinitis alérgica en niños pequeños a partir de los 2 años de edad.',
      'Pacientes con rinitis alérgica que requieren tratamiento prolongado donde se busque la menor exposición sistémica posible.',
      'Poliposis nasosinusal bilateral obstructiva.'
    ],
    pearlsAndPitfalls: [
      'Biodisponibilidad sistémica indetectable (<0.1%): no produce supresión del eje hipotálamo-hipófiso-adrenal ni desaceleración del crecimiento en niños en estudios a 1 año.',
      'Agitar enérgicamente el frasco antes de cada aplicación.',
      'Al igual que con fluticasona, orientar la boquilla hacia la pared lateral nasal para evitar sangrados septales.'
    ],
    monitoringAndSideEffects: [
      'Evolución del flujo aéreo nasal y estornudos.',
      'Inspección periódica de la mucosa nasal.',
      'Epistaxis leve transitoria.'
    ],
    evidenceAndSources: [
      {
        title: 'Long-Term Safety of Mometasone Furoate Nasal Spray in Children',
        source: 'Pediatrics',
        year: '2023',
        summary: 'Demostró que el uso diario continuo durante 12 meses no afecta la velocidad de crecimiento en niños de 3 a 9 años frente a placebo.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible / Mínima Absorción Sistémica',
      summary: 'Absorción sistémica indetectable. Seguro para el manejo de rinitis alérgica severa o rinitis del embarazo.',
      clinicalAlternative: 'Budesonida nasal (Categoría B) o Mometasona.'
    }
  },
  {
    id: 'oximetazolina-nasal',
    name: 'Oximetazolina Nasal',
    commercialNames: ['Afrin', 'Iliadin', 'Oxilin', 'Respibien', 'Dristan'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01AA05',
    awareCategory: 'Access',
    therapeuticClass: 'Descongestionante Tópico Nasal Agonista Alfa-1 y Alfa-2 Adrenérgico',
    badgeText: 'Resfriado · Descongestionante Rápido',
    shortDescription: 'Agonista adrenérgico selectivo de receptores alfa vasculares de la mucosa nasal. Produce vasoconstricción arteriolar casi instantánea (1-2 minutos) con descongestión espectacular y duradera (hasta 12 horas).',
    availableRoutes: ['topica'],
    concentrations: [
      {
        id: 'oximet-spray-005',
        name: 'Solución para Nebulización / Gotas Nasales Adulto al 0.05% (0.5 mg/mL)',
        amountMg: 0.5,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        notes: '0.05% para adultos y niños >6 años'
      },
      {
        id: 'oximet-spray-0025',
        name: 'Solución Nasal Pediátrica al 0.025% (0.25 mg/mL) (Niños de 2 a 6 años)',
        amountMg: 0.25,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'oximet-ind-congestion-adulto',
        name: 'Congestión Nasal Aguda por Resfriado Común / Sinusitis en Adultos',
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Máximo 3 a 5 días',
        maxDailyDoseMg: 0.2,
        maxSingleDoseMg: 0.1,
        description: '2 a 3 pulverizaciones o gotas en cada fosa nasal cada 10 a 12 horas. ¡ADVERTENCIA ESTRICTA: NO USAR MÁS DE 3 A 5 DÍAS CONSECUTIVOS!'
      },
      {
        id: 'oximet-ind-epistaxis',
        name: 'Control de Epistaxis Anterior en Urgencias',
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento agudo',
        maxDailyDoseMg: 0.1,
        maxSingleDoseMg: 0.1,
        description: 'Algodón empapado en oximetazolina al 0.05% colocado en la fosa nasal sangrante con compresión externa por 10 minutos.'
      }
    ],
    whenToUse: [
      'Alivio a corto plazo de la congestión nasal severa por resfriado común o rinosinusitis.',
      'Facilitación del drenaje en sinusitis maxilar o disfunción de la trompa de Eustaquio.',
      'Hemostasia tópica rápida en epistaxis anterior anterior.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Rinitis Medicamentosa (Efecto Rebote Severo)!: El uso por más de 3 a 5 días consecutivos causa tolerancia por regulación a la baja de receptores alfa y vasodilatación refleja de rebote refractaria que lleva a adicción y daño mucociliar permanente.',
      'Excelente fármaco para el control rápido de la epistaxis en atención primaria y urgencias.',
      'Contraindicada en hipertensión arterial descontrolada, cardiopatía isquémica severa o uso concomitante de IMAO.'
    ],
    monitoringAndSideEffects: [
      'Duración estricta del tratamiento (suspender al 3.er-5.º día).',
      'Sensación de escozor nasal o sequedad de mucosas.',
      'Presión arterial en pacientes hipertensos.'
    ],
    evidenceAndSources: [
      {
        title: 'Clinical Practice Guideline: Adult Sinusitis and Topical Decongestants',
        source: 'Otolaryngology–Head and Neck Surgery',
        year: '2023',
        summary: 'Restringe el uso de descongestionantes tópicos a un máximo estricto de 3 a 5 días continuos para prevenir rinitis medicamentosa.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste para uso tópico a corto plazo.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en Gestación',
      summary: 'Efecto vasoconstrictor que en absorción sistémica excesiva puede reducir el flujo uteroplacentario. Evitar su uso prolongado en el embarazo.',
      clinicalAlternative: 'Lavados nasales con Solución Salina hipertónica o fisiológica al 0.9%.'
    }
  },
  {
    id: 'pseudoefedrina',
    name: 'Pseudoefedrina',
    commercialNames: ['Sudafed', 'Afrin Oral', 'Nastizol (comb)', 'Sensibit D (comb)'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01BA02',
    awareCategory: 'Access',
    therapeuticClass: 'Descongestionante Sistémico Oral Simpaticomimético Agonista Alfa y Beta',
    badgeText: 'Resfriado · Descongestionante Oral',
    shortDescription: 'Amina simpaticomimética esteroisómero de la efedrina. Estimula receptores alfa-adrenérgicos del músculo liso vascular nasal produciendo vasoconstricción y reducción inmediata de la hiperemia y edema de la mucosa.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'pseudo-jarabe-30',
        name: 'Jarabe 30 mg / 5 mL (6 mg/mL)',
        amountMg: 30,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'pseudo-comp-60',
        name: 'Comprimidos 60 mg',
        amountMg: 60,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'pseudo-comp-120-er',
        name: 'Comprimidos de Liberación Prolongada 120 mg',
        amountMg: 120,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'pseudo-ind-congestion-adulto',
        name: 'Congestión Nasal y Sinusal por Resfriado en Adultos y ≥12 años',
        fixedAdultDoseMg: 60,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-7 días',
        maxDailyDoseMg: 240,
        maxSingleDoseMg: 60,
        description: '60 mg cada 4 a 6 horas por vía oral (o 120 mg cada 12 horas en formulación de liberación sostenida).'
      },
      {
        id: 'pseudo-ind-peds',
        name: 'Congestión Pediátrica (6 a 11 años)',
        fixedAdultDoseMg: 30,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 120,
        maxSingleDoseMg: 30,
        description: '30 mg cada 6 horas por vía oral (máximo 120 mg/día).'
      }
    ],
    whenToUse: [
      'Alivio de la congestión de trompas de Eustaquio y senos paranasales durante vuelos en avión o barotrauma.',
      'Congestión nasal intensa por catarro común sin respuesta a lavados salinos.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Cardiovascular!: Produce taquicardia, palpitaciones, vasoconstricción e incremento agudo de la presión arterial sistólica y diastólica. CONTRAINDICADA en hipertensión arterial no controlada, cardiopatía isquémica y arritmias.',
      'Insomnio y excitación del SNC: Evitar tomar en las últimas 4 horas previas al descanso nocturno.',
      'Riesgo de síndrome de vasoconstricción cerebral reversible (RCVS) y síndrome de encefalopatía posterior reversible (PRES) ante sobredosis o cefalea en trueno.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial y frecuencia cardíaca basales y durante el tratamiento.',
      'Nivel de ansiedad, temblor e insomnio.',
      'Retención urinaria en pacientes con hipertrofia prostática.'
    ],
    evidenceAndSources: [
      {
        title: 'FDA Advisory Panel on Oral Decongestants Efficacy',
        source: 'US FDA Briefing Document',
        year: '2023',
        summary: 'Reafirmó que la pseudoefedrina oral es un descongestionante eficaz (a diferencia de la fenilefrina oral que carece de eficacia por su nula biodisponibilidad).'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis habitual.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 50 mL/min',
        adjustmentText: 'Reducir la dosis diaria al 50-75% por excreción renal inalterada (55-75%).',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 1.er Trimestre',
      summary: 'Asociada a un ligero incremento del riesgo de gastrosquisis fetal por vasoconstricción vascular en el primer trimestre. Evitar en el embarazo.',
      contraindicatedInTrimester: [1],
      clinicalAlternative: 'Solución Salina hipertónica o lavados nasales salinos fisiológicos.'
    }
  },
  {
    id: 'dextrometorfano',
    name: 'Dextrometorfano',
    commercialNames: ['Balminil DM', 'Bisolvon Antitusivo', 'Romilar', 'Delsym', 'Benylin DM', 'Robitussin DM (comb)'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05DA09',
    awareCategory: 'Access',
    therapeuticClass: 'Antitusígeno de Acción Central No Opioide (Derivado Morfinano)',
    badgeText: 'Resfriado · Tos Seca Irritativa',
    shortDescription: 'D-isómero del análogo de codeína levorfanol. Suprime el reflejo tusígeno actuando directamente sobre el centro bulbar de la tos sin producir analgesia, depresión respiratoria ni adicción a dosis terapéuticas.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'dextro-jarabe-15',
        name: 'Jarabe 15 mg / 5 mL (3 mg/mL)',
        amountMg: 15,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'dextro-comp-15',
        name: 'Comprimidos / Pastillas para Chupar 15 mg',
        amountMg: 15,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'dextro-ind-tos-adulto',
        name: 'Tos Seca Irritativa / Improductiva en Adultos y ≥12 años',
        fixedAdultDoseMg: 15,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 120,
        maxSingleDoseMg: 30,
        description: '15 a 30 mg cada 4 a 6 horas por vía oral (o formulación de liberación prolongada 60 mg cada 12 horas).'
      },
      {
        id: 'dextro-ind-peds',
        name: 'Tos Seca Pediátrica (6 a 11 años)',
        fixedAdultDoseMg: 7.5,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 15,
        description: '7.5 a 15 mg cada 4 a 6 horas por vía oral (máximo 60 mg/día). No recomendado en niños <6 años sin supervisión pediátrica.'
      }
    ],
    whenToUse: [
      'Alivio sintomático de la tos seca irritativa que impide el sueño o causa dolor torácico en resfriados, faringitis o bronquitis aguda.',
      'Tos persistente post-infección viral respiratoria.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ESTRICTA EN TOS PRODUCTIVA!: Nunca suprimir la tos con secreciones o expectoración, ya que la retención de moco favorece la sobreinfección bacteriana pulmonar y atelectasias.',
      '¡Alerta Síndrome Serotoninérgico!: Es un inhibidor débil de la recaptación de serotonina y agonista sigma-1; CONTRAINDICADO absolutamente en pacientes que toman IMAO o antidepresivos ISRS/IRSN (riesgo de crisis serotoninérgica letal).',
      'Metabolizado por CYP2D6 a dextrorfano (metabolito disociativo antagonista NMDA a dosis tóxicas; potencial de abuso recreativo).'
    ],
    monitoringAndSideEffects: [
      'Frecuencia e intensidad de los accesos de tos.',
      'Aparición de somnolencia, mareo o náuseas.',
      'Ausencia de síntomas de toxicidad serotoninérgica.'
    ],
    evidenceAndSources: [
      {
        title: 'CHEST Guideline: Symptomatic Treatment of Acute Cough in Adults',
        source: 'CHEST Journal',
        year: '2023',
        summary: 'Recomienda antitusivos de acción central como el dextrometorfano exclusivamente para tos seca incapacitante a corto plazo.'
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
      status: 'safe',
      statusLabel: 'Compatible con Moderación en Gestación',
      summary: 'Amplia experiencia epidemiológica sin evidencia de incremento de malformaciones congénitas. Usar la menor dosis eficaz por periodos cortos.',
      clinicalAlternative: 'Medidas no farmacológicas (hidratación, miel en adultos).'
    }
  },
  {
    id: 'guaifenesina',
    name: 'Guaifenesina',
    commercialNames: ['Mucinex', 'Robitussin', 'Balminil Expectorant', 'Glicerin Guayacolato', 'Humibid', 'Organidin NR', 'Tusilexil (comb)'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CA03',
    awareCategory: 'Access',
    therapeuticClass: 'Expectorante Mucocinético de Acción Refleja',
    badgeText: 'Resfriado · Expectorante',
    shortDescription: 'Expectorante que estimula los receptores de la mucosa gástrica provocando un reflejo vagal que incrementa el volumen y disminuye la viscosidad de las secreciones del árbol respiratorio, facilitando su expulsión ciliar.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'guai-jarabe-100',
        name: 'Jarabe 100 mg / 5 mL (20 mg/mL)',
        amountMg: 100,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 150
      },
      {
        id: 'guai-comp-600-er',
        name: 'Comprimidos de Liberación Prolongada 600 mg (Mucinex)',
        amountMg: 600,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'guai-comp-1200-er',
        name: 'Comprimidos de Máxima Potencia Liberación Prolongada 1200 mg (Mucinex Max)',
        amountMg: 1200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'guai-ind-expectorante-adulto',
        name: 'Tos Productiva con Secreciones Viscosas en Adultos y ≥12 años',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 4,
        intervalHours: 4,
        durationDays: '5-7 días',
        maxDailyDoseMg: 2400,
        maxSingleDoseMg: 400,
        description: '200 a 400 mg cada 4 horas por vía oral con un vaso lleno de agua (o 600-1200 mg cada 12 horas en formulación de liberación prolongada).'
      },
      {
        id: 'guai-ind-peds',
        name: 'Expectoración Pediátrica (6 a 11 años)',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 4,
        intervalHours: 4,
        durationDays: '3-5 días',
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 200,
        description: '100 a 200 mg cada 4 horas por vía oral con agua (máximo 1200 mg/día).'
      }
    ],
    whenToUse: [
      'Alivio de la congestión torácica y tos con expectoración espesa en resfriados, bronquitis aguda o sinusitis.',
      'Facilitación del aclaramiento mucociliar en vías respiratorias superiores.'
    ],
    pearlsAndPitfalls: [
      '¡Hidratación Abundante Obligatoria!: El agua es el expectorante natural más potente; aconsejar beber al menos 2 litros de agua diarios para potenciar la fluidificación de la secreción bronquial.',
      'Excelente perfil de bioseguridad sin interacciones farmacológicas de riesgo.',
      'A dosis elevadas puede causar náuseas o molestias gástricas leves.'
    ],
    monitoringAndSideEffects: [
      'Fluidez de la expectoración y facilidad para toser.',
      'Tolerancia digestiva.',
      'Resolución de la congestión bronquial.'
    ],
    evidenceAndSources: [
      {
        title: 'Clinical Evaluation of Guaifenesin in Upper Respiratory Tract Infections',
        source: 'Respiratory Research',
        year: '2023',
        summary: 'Demostró una reducción significativa de la viscosidad del moco y de la frecuencia de accesos de tos en pacientes con catarro común.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible con Precaución en Gestación',
      summary: 'Uso muy extendido. No se ha demostrado teratogénesis. Mantener adecuada hidratación oral.',
      clinicalAlternative: 'Hidratación abundante y vapores de agua.'
    }
  },
  {
    id: 'n-acetilcisteina',
    name: 'N-Acetilcisteína',
    commercialNames: ['Fluimucil', 'Acetilcisteína', 'Mucomyst', 'ACC'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CB01',
    awareCategory: 'Access',
    therapeuticClass: 'Mucolítico Sulfhidrilo Directo · Precursor de Glutatión y Antídoto',
    badgeText: 'Resfriado · Mucolítico Directo',
    shortDescription: 'Molécula con grupo tiol (-SH) libre que rompe químicamente los puentes disulfuro de las mucoproteínas, licuando de forma inmediata las secreciones bronquiales hiperviscosas purulentas.',
    availableRoutes: ['oral', 'inhalatoria', 'iv'],
    concentrations: [
      {
        id: 'nac-sobre-200',
        name: 'Sobres de Polvo Efervescente 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'sobre',
        notes: 'Disolver en medio vaso de agua'
      },
      {
        id: 'nac-sobre-600',
        name: 'Sobres / Comprimidos Efervescentes 600 mg',
        amountMg: 600,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Toma única diaria matutina'
      },
      {
        id: 'nac-amp-300',
        name: 'Ampolla Inyectable IV / para Nebulización 300 mg / 3 mL (10%)',
        amountMg: 300,
        volumeMl: 3,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'nac-ind-mucolitico-adulto',
        name: 'Mucolítico en Bronquitis Aguda / Exacerbación EPOC en Adultos',
        fixedAdultDoseMg: 600,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-10 días',
        maxDailyDoseMg: 600,
        maxSingleDoseMg: 600,
        description: '600 mg una vez al día disuelto en agua por la mañana (o 200 mg cada 8 horas).'
      },
      {
        id: 'nac-ind-peds',
        name: 'Mucolítico Pediátrico (>2 años)',
        recommendedDoseMgPerKgPerDay: 10,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 20,
        fixedAdultDoseMg: 200,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 600,
        maxSingleDoseMg: 200,
        description: '2 a 6 años: 100 mg cada 8 horas. >6 años: 200 mg cada 8 horas.'
      }
    ],
    whenToUse: [
      'Procesos catarrales y bronquiales con secreción mucosa espesa y purulenta.',
      'Exacerbaciones frecuentes en pacientes con EPOC o bronquiectasias.',
      'Antídoto específico para la sobredosis e intoxicación aguda por Paracetamol (Acetaminofén).'
    ],
    pearlsAndPitfalls: [
      'Olor azufrado característico: debido a los enlaces de azufre libre (-SH); explicar al paciente que es normal.',
      'En nebulización puede desencadenar broncoespasmo reflejo agudo en pacientes hiperreactivos o asmáticos: asociar siempre un broncodilatador (salbutamol).',
      'Contraindicado como mucolítico en niños menores de 2 años por riesgo de obstrucción bronquial al no poder expectorar el moco fluidificado.'
    ],
    monitoringAndSideEffects: [
      'Patrón ventilatorio y auscultación pulmonar.',
      'Dispepsia, pirosis o náuseas leves.',
      'Facilidad en la eliminación de secreciones.'
    ],
    evidenceAndSources: [
      {
        title: 'Cochrane Systematic Review: Mucolytics for Chronic Obstructive Pulmonary Disease',
        source: 'Cochrane Database of Systematic Reviews',
        year: '2023',
        summary: 'Demostró que el tratamiento continuo con N-acetilcisteína oral reduce significativamente la frecuencia de exacerbaciones agudas en EPOC.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Muy Seguro en Gestación',
      summary: 'Cruza la placenta pero no se asocia a toxicidad embriofetal. De elección incluso en sobredosis tóxica de paracetamol en embarazadas.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'ambroxol',
    name: 'Ambroxol',
    commercialNames: ['Mucosan', 'Muxol', 'Bisolvon Mucolítico', 'Ambroxol'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CB06',
    awareCategory: 'Access',
    therapeuticClass: 'Mucolítico Estimulador del Surfactante y Aclaramiento Ciliar',
    badgeText: 'Resfriado · Surfactante / Mucolítico',
    shortDescription: 'Metabolito activo de la bromhexina. Disminuye la adhesividad del moco, estimula la motilidad ciliar y activa la síntesis y secreción de surfactante pulmonar endógeno por los neumocitos tipo II.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'ambro-jarabe-15',
        name: 'Jarabe Pediátrico 15 mg / 5 mL (3 mg/mL)',
        amountMg: 15,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'ambro-jarabe-30',
        name: 'Jarabe Adulto 30 mg / 5 mL (6 mg/mL)',
        amountMg: 30,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 200
      },
      {
        id: 'ambro-comp-30',
        name: 'Comprimidos 30 mg',
        amountMg: 30,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'ambro-ind-adulto',
        name: 'Afecciones Broncopulmonares con Secreciones Viscosas en Adultos',
        fixedAdultDoseMg: 30,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 120,
        maxSingleDoseMg: 60,
        description: '30 mg cada 8 horas por vía oral con las comidas (o 60 mg cada 12 horas).'
      },
      {
        id: 'ambro-ind-peds',
        name: 'Mucólisis Pediátrica (>2 años)',
        recommendedDoseMgPerKgPerDay: 1.5,
        minDoseMgPerKgPerDay: 1.2,
        maxDoseMgPerKgPerDay: 1.6,
        fixedAdultDoseMg: 30,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5 días',
        maxDailyDoseMg: 45,
        maxSingleDoseMg: 15,
        description: '2 a 5 años: 7.5 mg cada 8 horas (2.5 mL de jarabe 15 mg/5 mL). 6 a 12 años: 15 mg cada 8 horas.'
      }
    ],
    whenToUse: [
      'Catarros y procesos gripales complicados con moco viscoso y adherente.',
      'Bronquitis aguda y traqueobronquitis.',
      'Sinergia antibiótica: aumenta la penetración de amoxicilina y cefuroxima en el tejido y secreción pulmonar.'
    ],
    pearlsAndPitfalls: [
      'Efecto sinérgico antimicrobiano comprobado: incrementa las concentraciones de betalactámicos y macrólidos en el esputo y tejido bronquial.',
      'Efecto anestésico local leve en la mucosa faríngea que alivia la odinofagia.',
      'No administrar en menores de 2 años sin indicación médica por inmadurez del reflejo de deglución de secreciones fluidificadas.'
    ],
    monitoringAndSideEffects: [
      'Facilidad para expulsar flemas.',
      'Dispepsia o pirosis leve.',
      'Raras reacciones alérgicas cutáneas.'
    ],
    evidenceAndSources: [
      {
        title: 'Ambroxol in Respiratory Diseases: Secretolytic and Anti-inflammatory Properties',
        source: 'Multidisciplinary Respiratory Medicine',
        year: '2023',
        summary: 'Detalla su triple mecanismo mucolítico, antioxidante y estimulador de surfactante pulmonar.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis en tratamientos cortos.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Precaución en Gestación',
      summary: 'Amplia experiencia clínica. No se ha demostrado toxicidad fetal en el segundo y tercer trimestre.',
      clinicalAlternative: 'Hidratación oral y lavados nasales salinos.'
    }
  },
  {
    id: 'benzonatato',
    name: 'Benzonatato',
    commercialNames: ['Zonatuss', 'Tesalon', 'Tessalon Perles', 'Benzonatato'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05DB01',
    awareCategory: 'Access',
    therapeuticClass: 'Antitusígeno Periférico No Narcótico (Anestésico Local)',
    badgeText: 'Resfriado · Tos Seca Refractaria',
    shortDescription: 'Derivado estructural de la tetracaína. Anestesia localmente los receptores de estiramiento de las fibras vagales aferentes en las vías respiratorias bajas, bronquios y alvéolos, interrumpiendo el estímulo periférico que desencadena el arco reflejo de la tos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'benzo-perlas-100',
        name: 'Perlas / Cápsulas Blandas 100 mg',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tragar ENTERAS sin masticar, morder ni chupar'
      },
      {
        id: 'benzo-perlas-200',
        name: 'Perlas / Cápsulas Blandas 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'benzo-ind-tos-adulto',
        name: 'Tos Seca Aguda o Crónica Irritativa en Adultos y >10 años',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 600,
        maxSingleDoseMg: 200,
        description: '100 a 200 mg cada 8 horas con un vaso de agua. Tragar las perlas enteras.'
      }
    ],
    whenToUse: [
      'Tos seca paroxística incoercible que no cede con antitusivos tradicionales.',
      'Tos irritativa posviral o por pleuresía.',
      'Tos refractaria en cáncer broncopulmonar.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA!: NUNCA masticar, partir ni disolver en la boca. La liberación local del fármaco en la cavidad oral anestesia la orofaringe y laringe en segundos, causando entumecimiento bucal, laringoespasmo agudo, asfixia y broncoaspiración mortal.',
      'Mantener estrictamente fuera del alcance de los niños pequeños: su aspecto gelatinoso colorido similar a un dulce causa intoxicaciones accidentales pediátricas letales (paro respiratorio y convulsiones).',
      'Antitusivo no narcótico: carece de efectos depresores sobre el centro respiratorio del bulbo raquídeo.'
    ],
    monitoringAndSideEffects: [
      'Cese de los accesos paroxísticos de tos.',
      'Sensación de mareo, cefalea o sedación leve.',
      'Advertencia estricta de no triturar las cápsulas.'
    ],
    evidenceAndSources: [
      {
        title: 'FDA Drug Safety Communication: Accidental Ingestion of Benzonatate in Children',
        source: 'US FDA Safety Alerts',
        year: '2023',
        summary: 'Enfatiza el peligro de sobredosis letal rápida en menores de 10 años por ingestión accidental de perlas masticadas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; hidrólisis por colinesterasas plasmáticas.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en Gestación',
      summary: 'Datos de bioseguridad muy escasos en embarazadas. Utilizar solo si los beneficios superan con creces los riesgos potenciales.',
      clinicalAlternative: 'Dextrometorfano o medidas demulcentes.'
    }
  },
  {
    id: 'ipratropio-nasal',
    name: 'Bromuro de Ipratropio Nasal',
    commercialNames: ['Atrovent Nasal', 'Ipratropio Nasal'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01AX03',
    awareCategory: 'Access',
    therapeuticClass: 'Anticolinérgico Tópico Nasal · Antisecretor',
    badgeText: 'Resfriado · Rinorrea Acuosa Profusa',
    shortDescription: 'Antagonista competitivo de receptores muscarínicos en la mucosa nasal. Inhibe selectivamente la secreción hiperactiva de las glándulas submucosas nasales, frenando de forma drástica la rinorrea acuosa profusa del resfriado común.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'ipra-nasal-006',
        name: 'Spray Nasal al 0.06% (42 mcg / pulverización) para Resfriado Común',
        amountMg: 0.042,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '0.06% (42 mcg por disparo) para rinorrea de catarro agudo'
      },
      {
        id: 'ipra-nasal-003',
        name: 'Spray Nasal al 0.03% (21 mcg / pulverización) para Rinitis Alérgica / Perenne',
        amountMg: 0.021,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff'
      }
    ],
    indications: [
      {
        id: 'ipra-ind-rinorrea-resfriado',
        name: 'Rinorrea Acuosa Profusa en Resfriado Común (Adultos y ≥12 años)',
        fixedAdultDoseMg: 0.168,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Mantenimiento de 4 días',
        maxDailyDoseMg: 0.672,
        maxSingleDoseMg: 0.168,
        description: '2 pulverizaciones de la solución al 0.06% (84 mcg por fosa) en cada fosa nasal 3 a 4 veces al día (cada 6-8 horas) durante un máximo de 4 días.'
      },
      {
        id: 'ipra-ind-rinitis-perenne',
        name: 'Rinitis Perenne No Alérgica (Vasomotora o "Gota de la Nariz")',
        fixedAdultDoseMg: 0.084,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Según necesidad',
        maxDailyDoseMg: 0.252,
        maxSingleDoseMg: 0.084,
        description: '2 pulverizaciones al 0.03% (42 mcg por fosa) en cada fosa nasal 2 a 3 veces al día.'
      }
    ],
    whenToUse: [
      'Rinorrea acuosa profusa goteante incapacitante en los primeros días del resfriado común.',
      'Rinitis vasomotora no alérgica inducida por frío o cambios de temperatura ("rinitis del esquiador").',
      'Rinitis gustatoria inducida por comidas calientes o picantes.'
    ],
    pearlsAndPitfalls: [
      'Efecto altamente selectivo: SOLO detiene la rinorrea acuosa (el goteo constante); carece de efecto descongestionante sobre la obstrucción nasal o los estornudos.',
      'Absorción sistémica insignificante (<10%), por lo que no genera los efectos anticolinérgicos sistémicos típicos.',
      'Efecto adverso más frecuente: sequedad nasal excesiva y costras (mitigar reduciendo la frecuencia).'
    ],
    monitoringAndSideEffects: [
      'Grado de sequedad de la mucosa nasal.',
      'Epistaxis leve por desecación mucosa.',
      'Cese del goteo nasal anterior.'
    ],
    evidenceAndSources: [
      {
        title: 'Topical Ipratropium Bromide for the Common Cold and Allergic Rhinitis',
        source: 'Cochrane Database of Systematic Reviews',
        year: '2023',
        summary: 'Demostró alta eficacia estadísticamente significativa para reducir la severidad y duración de la rinorrea acuosa frente a placebo.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; acción tópica local.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con el Embarazo',
      summary: 'Absorción sistémica mínima. No se han observado efectos embriotóxicos en estudios de reproducción.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'beclometasona-nasal',
    name: 'Beclometasona Nasal',
    commercialNames: ['Beconase AQ', 'QNASL', 'Rino-Clenil', 'Beclovent'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01AD01',
    awareCategory: 'Access',
    therapeuticClass: 'Corticoide Intranasal Tópico Acuoso',
    badgeText: 'Alergia · Rinitis Alérgica',
    shortDescription: 'Dipropionato de beclometasona para administración nasal tópica. Disminuye la inflamación de la mucosa nasal, los eosinófilos y la hiperreactividad tisular frente a aeroalérgenos.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'beclo-nasal-50',
        name: 'Spray Nasal Acuoso 50 mcg / pulverización (200 dosis)',
        amountMg: 0.05,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '50 mcg de dipropionato de beclometasona por disparo'
      }
    ],
    indications: [
      {
        id: 'beclo-ind-rinitis-adulto',
        name: 'Rinitis Alérgica y Vasomotora en Adultos y >12 años',
        fixedAdultDoseMg: 0.2,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Estacional o continuo',
        maxDailyDoseMg: 0.4,
        maxSingleDoseMg: 0.2,
        description: '1 a 2 pulverizaciones (50-100 mcg) en cada fosa nasal dos veces al día (total 200 a 400 mcg/día). Reducir a 1 pulverización por fosa al día tras lograr control.'
      },
      {
        id: 'beclo-ind-peds',
        name: 'Rinitis Alérgica Pediátrica (6 a 11 años)',
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Según indicación',
        maxDailyDoseMg: 0.2,
        maxSingleDoseMg: 0.1,
        description: '1 pulverización (50 mcg) en cada fosa nasal dos veces al día (total 200 mcg/día).'
      }
    ],
    whenToUse: [
      'Prevención y tratamiento de rinitis alérgica estacional y perenne.',
      'Prevención de recurrencia de pólipos nasales tras polipectomía quirúrgica.'
    ],
    pearlsAndPitfalls: [
      'Agitar bien antes de usar y dirigir la cánula hacia la parte externa de la nariz para evitar sangrado septal.',
      'Efecto terapéutico máximo en 3 a 5 días de uso diario regular.',
      'Uno de los corticoides nasales con más años de experiencia clínica y perfil de seguridad contrastado.'
    ],
    monitoringAndSideEffects: [
      'Inspección de la mucosa nasal (descartar sequedad o costras).',
      'Epistaxis transitoria.',
      'Control de síntomas diurnos y nocturnos.'
    ],
    evidenceAndSources: [
      {
        title: 'International Consensus Statement on Allergy and Rhinology: Allergic Rhinitis',
        source: 'International Forum of Allergy & Rhinology',
        year: '2023',
        summary: 'Recomienda fuertemente los corticosteroides intranasales como primera línea para la rinitis alérgica moderada a severa.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible / Décadas de Experiencia en Gestación',
      summary: 'Amplia experiencia clínica sin incrementos de riesgo teratogénico.',
      clinicalAlternative: 'Budesonida nasal o Fluticasona.'
    }
  },
  {
    id: 'bromfeniramina',
    name: 'Bromfeniramina',
    commercialNames: ['Dimetapp', 'Bromfed', 'Lodrane'],
    category: 'Alergia / Resfriado',
    atcCode: 'R06AB01',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 de 1.ª Generación (Alquilamina) · Sedante Moderado',
    badgeText: 'Resfriado · Antihistamínico Clásico',
    shortDescription: 'Antihistamínico H1 alquilamina con acción antagonista de histamina y moderado efecto anticolinérgico. Componente clásico de formulaciones combinadas de venta libre para el resfriado.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'bromf-elixir-2',
        name: 'Elixir / Jarabe 2 mg / 5 mL (0.4 mg/mL) (Dimetapp)',
        amountMg: 2,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'bromf-comp-4',
        name: 'Comprimidos 4 mg',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'bromf-ind-resfriado-adulto',
        name: 'Rinitis Alérgica y Síntomas de Resfriado en Adultos y ≥12 años',
        fixedAdultDoseMg: 4,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 4,
        description: '4 mg cada 4 a 6 horas por vía oral (máximo 24 mg al día).'
      },
      {
        id: 'bromf-ind-peds',
        name: 'Síntomas de Alergia Pediátrica (6 a 11 años)',
        fixedAdultDoseMg: 2,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 12,
        maxSingleDoseMg: 2,
        description: '2 mg cada 4 a 6 horas por vía oral (máximo 12 mg/día).'
      }
    ],
    whenToUse: [
      'Alivio sintomático de estornudos, rinorrea y ojos llorosos en resfriado común.',
      'Rinitis alérgica estacional de inicio agudo.'
    ],
    pearlsAndPitfalls: [
      'Menor sedación relativa que la difenhidramina, pero puede causar somnolencia diurna y mareo.',
      'Contraindicada con inhibidores de la monoaminooxidasa (IMAO) o en glaucoma de ángulo cerrado.',
      'Evitar el uso de maquinaria pesada o conducción.'
    ],
    monitoringAndSideEffects: [
      'Somnolencia diurna y rendimiento psicomotor.',
      'Sequedad de boca y visión borrosa.',
      'Alivio de la rinorrea.'
    ],
    evidenceAndSources: [
      {
        title: 'Efficacy of Antihistamine-Decongestant Combinations for the Common Cold',
        source: 'Clinical Therapeutics',
        year: '2023',
        summary: 'Demuestra eficacia en la reducción de síntomas nasales de resfriado común en combinación con descongestionantes orales.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Usar con precaución. Se dispone de mayor experiencia de seguridad con clorfeniramina.',
      clinicalAlternative: 'Clorfenamina o Cetirizina.'
    }
  },
  {
    id: 'ciproheptadina',
    name: 'Ciproheptadina',
    commercialNames: ['Periactin', 'Kipres', 'Viternum (comb)', 'Ciproheptadina'],
    category: 'Alergia / Resfriado',
    atcCode: 'R06AX02',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 y Antagonista Serotoninérgico 5-HT2 · Antídoto del Síndrome Serotoninérgico',
    badgeText: 'Alergia · Antagonista 5-HT2',
    shortDescription: 'Potente antagonista de receptores H1 de histamina y 5-HT2 de serotonina. Es el antídoto farmacológico de primera línea para el Síndrome Serotoninérgico agudo y estimulante orexígeno del apetito.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'cipro-jarabe-2',
        name: 'Jarabe 2 mg / 5 mL (0.4 mg/mL)',
        amountMg: 2,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'cipro-comp-4',
        name: 'Comprimidos Ranurados 4 mg',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'cipro-ind-serotoninergico',
        name: 'Síndrome Serotoninérgico Agudo en Urgencias / Toxicología',
        fixedAdultDoseMg: 12,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Hasta resolución clínica',
        maxDailyDoseMg: 32,
        maxSingleDoseMg: 12,
        description: 'Dosis inicial de carga: 12 mg vía oral (o por sonda nasogástrica), seguida de 4 a 8 mg cada 6 horas según control de clonus, rigidez e hipertermia.'
      },
      {
        id: 'cipro-ind-alergia-adulto',
        name: 'Rinitis Alérgica / Prurito / Urticaria por Frío',
        fixedAdultDoseMg: 4,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Según necesidad',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 8,
        description: '4 mg cada 8 horas (dosis habitual de 4 a 20 mg al día).'
      },
      {
        id: 'cipro-ind-peds',
        name: 'Alergia Pediátrica (2 a 6 años)',
        recommendedDoseMgPerKgPerDay: 0.25,
        minDoseMgPerKgPerDay: 0.25,
        maxDoseMgPerKgPerDay: 0.25,
        fixedAdultDoseMg: 2,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Según indicación',
        maxDailyDoseMg: 12,
        maxSingleDoseMg: 4,
        description: '2 a 6 años: 2 mg cada 8 a 12 horas (máx 12 mg/día). 7 a 14 años: 4 mg cada 8 a 12 horas (máx 16 mg/día).'
      }
    ],
    whenToUse: [
      'Tratamiento antídoto específico para el Síndrome Serotoninérgico agudo (bloqueo 5-HT2).',
      'Urticaria por frío (de elección).',
      'Estimulación del apetito en hiporexia pediátrica o caquexia.'
    ],
    pearlsAndPitfalls: [
      'Antídoto específico de elección para el Síndrome Serotoninérgico secundario a sobredosis de ISRS, tramadol o IMAO.',
      'Marcado aumento del apetito y ganancia de peso por bloqueo serotoninérgico hipotalámico.',
      'Sedación profunda y sequedad de boca marcadas al inicio.'
    ],
    monitoringAndSideEffects: [
      'Control de clonus, hiperreflexia, diaforesis y temperatura en síndrome serotoninérgico.',
      'Grado de somnolencia diurna.',
      'Apetito y peso corporal.'
    ],
    evidenceAndSources: [
      {
        title: 'Clinical Practice Guideline: Management of Serotonin Syndrome',
        source: 'New England Journal of Medicine',
        year: '2023',
        summary: 'Respalda la ciproheptadina oral como el antagonista serotoninérgico 5-HT2 específico más eficaz para el síndrome serotoninérgico moderado a severo.'
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
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Precaución en Gestación',
      summary: 'Estudios en animales no han evidenciado daño fetal. No obstante, se prefieren antihistamínicos de 2da generación salvo en síndrome serotoninérgico.',
      clinicalAlternative: 'Cetirizina o Loratadina para alergia.'
    }
  },
  {
    id: 'cromoglicato-sodio',
    name: 'Cromoglicato de Sodio Nasal',
    commercialNames: ['Nasalcrom', 'Crolom', 'Cromolyn', 'Rynacrom'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01AC01',
    awareCategory: 'Access',
    therapeuticClass: 'Estabilizador de Membrana de Mastocitos · Antialérgico Preventivo',
    badgeText: 'Alergia · Profilaxis Mastocitaria',
    shortDescription: 'Inhibe la degranulación de los mastocitos sensibilizados al bloquear los canales de calcio de membrana, impidiendo la liberación de histamina, leucotrienos y prostaglandinas. Fármaco preventivo de alta bioseguridad.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'cromo-spray-52',
        name: 'Spray Nasal Solución al 4% (5.2 mg / pulverización) (Nasalcrom)',
        amountMg: 5.2,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '5.2 mg de cromoglicato de sodio por cada disparo'
      }
    ],
    indications: [
      {
        id: 'cromo-ind-rinitis-profilaxis',
        name: 'Prevención y Tratamiento de Rinitis Alérgica en Adultos y ≥2 años',
        fixedAdultDoseMg: 5.2,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Temporada de alérgenos',
        maxDailyDoseMg: 31.2,
        maxSingleDoseMg: 5.2,
        description: '1 pulverización (5.2 mg) en cada fosa nasal 3 a 4 veces al día (cada 6 horas). Iniciar de 1 a 2 semanas antes del inicio esperado de la exposición a alérgenos.'
      }
    ],
    whenToUse: [
      'Profilaxis de rinitis alérgica estacional antes de la exposición a pólenes.',
      'Prevención de rinitis por mascotas en visitas programadas (aplicar 30 min antes).',
      'Pacientes pediátricos o gestantes que buscan la alternativa más inocua sin corticoides.'
    ],
    pearlsAndPitfalls: [
      '¡Fármaco profiláctico puro!: NO alivia la congestión aguda ya instaurada; requiere ser administrado de forma regular y anticipada para estabilizar los mastocitos.',
      'Perfil de seguridad excepcional: Prácticamente sin absorción sistémica (<7%) y sin efectos secundarios importantes.',
      'Requiere dosificación frecuente (3 a 4 veces al día) para mantener la protección.'
    ],
    monitoringAndSideEffects: [
      'Irritación nasal transitoria o estornudos leves tras la pulverización.',
      'Control profiláctico de los síntomas alérgicos.',
      'Adherencia posológica (requiere 3-4 tomas diarias).'
    ],
    evidenceAndSources: [
      {
        title: 'Safety Profile of Cromolyn Sodium in Pediatric Allergic Rhinitis',
        source: 'Journal of Allergy and Clinical Immunology: In Practice',
        year: '2023',
        summary: 'Destaca al cromoglicato nasal como la opción tópica con el perfil de seguridad más favorable para niños pequeños y mujeres embarazadas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Antialérgico Tópico de Máxima Seguridad en Gestación',
      summary: 'Absorción sistémica despreciable. Considerado el fármaco de mayor inocuidad para el tratamiento preventivo de la rinitis alérgica en el embarazo.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'dextrometorfano-guaifenesina',
    name: 'Dextrometorfano / Guaifenesina',
    commercialNames: ['Mucinex DM', 'Robitussin DM', 'Balminil DM + Expectorante', 'Bisolvon Compositum'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05FB02',
    awareCategory: 'Access',
    therapeuticClass: 'Combinación Antitusígeno Central + Expectorante Mucocinético',
    badgeText: 'Resfriado · Tos y Flemas',
    shortDescription: 'Combinación de referencia que une la inhibición del reflejo tusígeno central por dextrometorfano con la fluidificación y expectoración refleja de secreciones espesas por guaifenesina.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'dm-guai-jarabe-10-100',
        name: 'Jarabe Pediátrico y Adulto (Dextrometorfano 10 mg + Guaifenesina 100 mg / 5 mL)',
        amountMg: 110,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 150,
        notes: '10 mg DM + 100 mg Guaifenesina por cada 5 mL'
      },
      {
        id: 'dm-guai-comp-er',
        name: 'Comprimidos de Doble Capa Liberación Prolongada (DM 30 mg + Guaifenesina 600 mg) (Mucinex DM)',
        amountMg: 630,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis extendida cada 12 horas'
      }
    ],
    indications: [
      {
        id: 'dm-guai-ind-adulto',
        name: 'Tos Molesta con Expectoración Difícil en Resfriado y Bronquitis',
        fixedAdultDoseMg: 630,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5-7 días',
        maxDailyDoseMg: 1260,
        maxSingleDoseMg: 630,
        description: '1 comprimido de doble capa (30 mg DM / 600 mg Guaifenesina) cada 12 horas con un vaso lleno de agua (o 10 mL de jarabe cada 6 horas).'
      },
      {
        id: 'dm-guai-ind-peds',
        name: 'Tos y Congestión Bronquial Pediátrica (6 a 11 años)',
        fixedAdultDoseMg: 55,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 220,
        maxSingleDoseMg: 55,
        description: '5 mL de jarabe (10 mg DM / 100 mg Guaifenesina) cada 6 horas con abundante agua (máximo 4 tomas al día).'
      }
    ],
    whenToUse: [
      'Tos mixta en fase de resolución de infecciones virales respiratorias.',
      'Bronquitis aguda con tos seca espasmódica y secreción adherente.',
      'Gripes y resfriados con tos paroxística y sensación de opresión torácica.'
    ],
    pearlsAndPitfalls: [
      'Ingesta hídrica abundante: el agua optimiza el efecto fluidificante de la guaifenesina.',
      'Contraindicado con antidepresivos IMAO o ISRS por el componente de dextrometorfano.',
      'No usar en asma aguda o insuficiencia respiratoria severa.'
    ],
    monitoringAndSideEffects: [
      'Facilidad para expulsar secreciones y frecuencia de los golpes de tos.',
      'Tolerancia digestiva (náuseas leves ocasionales).',
      'Ausencia de mareo o somnolencia.'
    ],
    evidenceAndSources: [
      {
        title: 'Efficacy of Combined Dextromethorphan and Guaifenesin for Acute Cough',
        source: 'Chest Journal',
        year: '2023',
        summary: 'Demostró un control más rápido de la tos y mejoría en la calidad de vida frente a monoterapia en pacientes con bronquitis aguda.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio en Gestación',
      summary: 'Usar con moderación solo si las medidas de soporte físico e hidratación son insuficientes.',
      clinicalAlternative: 'Vapores de agua y adecuada hidratación oral.'
    }
  },
  {
    id: 'azelastina-fluticasona',
    name: 'Azelastina / Fluticasona Nasal',
    commercialNames: ['Dymista', 'Ryaltris (análogo)'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01AD58',
    awareCategory: 'Access',
    therapeuticClass: 'Combinación Intranasal Antihistamínico H1 Tópico + Corticoide de Alta Potencia',
    badgeText: 'Alergia · Dymista Doble Acción',
    shortDescription: 'Combinación intranasal que une el inicio de acción ultrarrápido (15 minutos) del antihistamínico azelastina con la potente desinflamación sostenida de la fluticasona. Estándar de oro para rinitis alérgica refractaria.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'azel-fluti-spray',
        name: 'Spray Nasal (Azelastina 137 mcg + Fluticasona 50 mcg / pulverización) (Dymista)',
        amountMg: 0.187,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '137 mcg de clorhidrato de azelastina + 50 mcg de propionato de fluticasona por disparo'
      }
    ],
    indications: [
      {
        id: 'azel-fluti-ind-rinitis-severa',
        name: 'Rinitis Alérgica Moderada a Severa Refractaria a Monoterapia (≥6 años)',
        fixedAdultDoseMg: 0.187,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Estacional o continuo',
        maxDailyDoseMg: 0.748,
        maxSingleDoseMg: 0.374,
        description: '1 pulverización en cada fosa nasal dos veces al día (por la mañana y por la noche).'
      }
    ],
    whenToUse: [
      'Rinitis alérgica persistente con fracaso o respuesta incompleta a corticoides nasales solos o antihistamínicos orales.',
      'Pacientes con síntomas nasales y oculares severos que requieren alivio casi inmediato (en 15 minutos).'
    ],
    pearlsAndPitfalls: [
      'Inicio de acción en 15 minutos: significativamente más rápido que cualquier corticoide intranasal en monoterapia.',
      'Sabor amargo transitorio tras la pulverización en hasta un 10% si el paciente traga el líquido; educar para inclinar la cabeza hacia adelante al aplicar.',
      'Superior a la administración concomitante de antihistamínicos orales más corticoides nasales por separado.'
    ],
    monitoringAndSideEffects: [
      'Alivio de la congestión y prurito en los primeros minutos.',
      'Sabor amargo o disgeusia leve.',
      'Ausencia de epistaxis.'
    ],
    evidenceAndSources: [
      {
        title: 'Real-World Evidence on the Superior Efficacy of MP-AzeFlu (Dymista)',
        source: 'Journal of Allergy and Clinical Immunology',
        year: '2023',
        summary: 'Consolida a la combinación azelastina-fluticasona como la terapia médica más potente disponible para el control completo de la rinitis alérgica.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Absorción sistémica baja, pero se dispone de mayor experiencia con fluticasona sola.',
      clinicalAlternative: 'Fluticasona nasal o Budesonida nasal en monoterapia.'
    }
  },
  {
    id: 'loratadina-pseudoefedrina',
    name: 'Loratadina / Pseudoefedrina',
    commercialNames: ['Claritin-D', 'Sensibit D', 'Loratadina D', 'Alergical Plus'],
    category: 'Alergia / Resfriado',
    atcCode: 'R01BA52',
    awareCategory: 'Access',
    therapeuticClass: 'Combinación Oral Antihistamínico H1 No Sedante + Descongestionante Sistémico',
    badgeText: 'Alergia / Resfriado · Claritin-D',
    shortDescription: 'Asociación oral de loratadina (bloqueador H1 periférico de 24h sin somnolencia) y pseudoefedrina (descongestionante vasoconstrictor de senos paranasales y trompa de Eustaquio).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'lora-pseudo-jarabe',
        name: 'Jarabe (Loratadina 5 mg + Pseudoefedrina 60 mg / 5 mL)',
        amountMg: 65,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 60
      },
      {
        id: 'lora-pseudo-comp-12h',
        name: 'Comprimidos Liberación Prolongada (Loratadina 5 mg + Pseudoefedrina 120 mg) (Claritin-D 12h)',
        amountMg: 125,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'lora-pseudo-comp-24h',
        name: 'Comprimidos Liberación Prolongada (Loratadina 10 mg + Pseudoefedrina 240 mg) (Claritin-D 24h)',
        amountMg: 250,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'lora-pseudo-ind-adulto',
        name: 'Rinitis Alérgica con Marcada Congestión Nasal en Adultos y ≥12 años',
        fixedAdultDoseMg: 125,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '3-7 días',
        maxDailyDoseMg: 250,
        maxSingleDoseMg: 125,
        description: '1 comprimido de Claritin-D 12h cada 12 horas con agua (o 1 comprimido de Claritin-D 24h una vez al día por la mañana).'
      }
    ],
    whenToUse: [
      'Rinitis alérgica severa donde predomina la obstrucción nasal completa resistente a antihistamínicos solos.',
      'Congestión rinosinusotubárica con sensación de taponamiento auditivo en catarro o viajes en avión.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Cardiovascular y de Presión Arterial!: Por el contenido de pseudoefedrina, está CONTRAINDICADA en hipertensión arterial no controlada, cardiopatía isquémica, arritmias o glaucoma de ángulo cerrado.',
      'Tomar por la mañana para evitar el insomnio secundario al estímulo simpático.',
      'Tragar los comprimidos enteros sin masticar ni triturar para preservar la matriz de liberación prolongada.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial y pulso en pacientes hipertensos.',
      'Palpitaciones, insomnio y sequedad de boca.',
      'Alivio de la congestión y estornudos.'
    ],
    evidenceAndSources: [
      {
        title: 'Efficacy of Loratadine/Pseudoephedrine vs Components in Allergic Rhinitis',
        source: 'Current Medical Research and Opinion',
        year: '2023',
        summary: 'Demostró superioridad clínica estadística en el alivio conjunto de la congestión nasal y síntomas histamínicos frente a la monoterapia.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 50 mL/min',
        adjustmentText: 'Reducir a 1 comprimido de 12h cada 24 horas por acumulación de pseudoefedrina.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 1.er Trimestre',
      summary: 'La pseudoefedrina está asociada a riesgo de gastrosquisis en el primer trimestre. Evitar durante el embarazo.',
      contraindicatedInTrimester: [1],
      clinicalAlternative: 'Loratadina sola + lavados nasales con solución fisiológica.'
    }
  }
];

