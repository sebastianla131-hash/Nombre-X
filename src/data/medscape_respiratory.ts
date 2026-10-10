import { Medication } from '../types';

export const MEDSCAPE_RESPIRATORY: Medication[] = [
  {
    id: 'budesonida',
    name: 'Budesonida',
    commercialNames: ['Pulmicort', 'Budecort', 'Rhinocort', 'Miflonide'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'R03BA02',
    awareCategory: 'Access',
    therapeuticClass: 'Glucocorticoide Inhalado de Alta Potencia Tópica',
    badgeText: 'Respiratorio · Asma / Crup',
    shortDescription: 'Corticoide inhalado con alta afinidad por los receptores glucocorticoides de la vía aérea y baja biodisponibilidad sistémica por extenso metabolismo hepático de primer paso (90%). Pilar en asma y laringotraqueítis aguda (crup).',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'bude-susp-neb-05',
        name: 'Suspensión para Nebulización 0.5 mg / 2 mL (Ampolla monodosis)',
        amountMg: 0.5,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: '0.25 mg/mL para nebulizador tipo jet o malla'
      },
      {
        id: 'bude-susp-neb-1',
        name: 'Suspensión para Nebulización 1 mg / 2 mL (Ampolla monodosis)',
        amountMg: 1,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: '0.5 mg/mL de concentración'
      },
      {
        id: 'bude-inhalador-200',
        name: 'Aerosol para Inhalación Bucal 200 mcg / dosis (Puff) (100-200 dosis)',
        amountMg: 0.2,
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puff',
        notes: '0.2 mg (200 mcg) por cada disparo'
      }
    ],
    indications: [
      {
        id: 'bude-ind-crup-peds',
        name: 'Laringotraqueítis Aguda Pediátrica (Crup Moderado a Grave)',
        fixedAdultDoseMg: 2,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única o repetir a las 12h',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 2,
        description: 'Nebulización de 2 mg (4 mL de 0.5 mg/mL) en dosis única, o dexametasona oral/IM. Disminuye rápidamente el estridor y la dificultad respiratoria.'
      },
      {
        id: 'bude-ind-asma-mantenimiento',
        name: 'Mantenimiento del Asma Persistente en Adultos y Niños >6 años',
        fixedAdultDoseMg: 0.4,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico de control',
        maxDailyDoseMg: 1.6,
        maxSingleDoseMg: 0.8,
        description: '200 a 400 mcg (1-2 puffs) inhalados cada 12 horas con aerocámara. Enjuagar la boca con agua tras la inhalación.'
      },
      {
        id: 'bude-ind-asma-peds-neb',
        name: 'Asma / Hiperreactividad Bronquial Pediátrica en Niños Pequeños (6 meses a 4 años)',
        recommendedDoseMgPerKgPerDay: 0.5,
        minDoseMgPerKgPerDay: 0.25,
        maxDoseMgPerKgPerDay: 1,
        fixedAdultDoseMg: 1,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Mantenimiento o crisis',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 1,
        description: '0.25 a 0.5 mg nebulizados cada 12 horas.'
      }
    ],
    whenToUse: [
      'Tratamiento de control antiinflamatorio de primera línea en asma persistente (GINA).',
      'Crup laríngeo en urgencias pediátricas para reducir la tasa de hospitalizaciones.',
      'Exacerbación aguda de asma o EPOC en combinación con broncodilatadores (SABA/SAMA).'
    ],
    pearlsAndPitfalls: [
      '¡Enjuague bucal obligatorio!: Tras cada inhalación, enjuagar la boca y hacer gárgaras con agua sin tragar para prevenir candidiasis orofaríngea (muguet) y disfonía.',
      'Uso de aerocámara con mascarilla en niños <4-5 años para asegurar el depósito pulmonar y evitar absorción perioral.',
      'En crup moderado a grave, la nebulización de budesonida tiene una eficacia equiparable a la dexametasona oral.'
    ],
    monitoringAndSideEffects: [
      'Cavidad oral y faringe (descartar placas blanquecinas de candidiasis).',
      'Control de síntomas diurnos, nocturnos y uso de medicación de rescate.',
      'Velocidad de crecimiento en niños con dosis altas continuas a largo plazo.'
    ],
    evidenceAndSources: [
      {
        title: 'Global Initiative for Asthma (GINA) Strategy Report',
        source: 'GINA Executive Committee',
        year: '2024',
        summary: 'Reafirma que la budesonida inhalada, preferentemente combinada con formoterol a demanda, previene exacerbaciones graves y mortalidad en asma leve a severa.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Corticoide Inhalado de Elección en el Embarazo',
      summary: 'Es el corticoide inhalado con mayor cantidad de datos epidemiológicos y de seguridad en gestantes (Categoría B de la FDA). Mantener el control del asma es prioritario para evitar hipoxia fetal.',
      clinicalAlternative: 'Fármaco de elección preferente.'
    }
  },
  {
    id: 'montelukast',
    name: 'Montelukast',
    commercialNames: ['Singulair', 'Airtal', 'Asmavent', 'Montelair'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'R03DC03',
    therapeuticClass: 'Antagonista de Receptores de Leucotrienos Cisteinílicos (LTRA)',
    badgeText: 'Respiratorio · Anti-leucotrieno',
    shortDescription: 'Bloqueador selectivo de los receptores CysLT1 que inhibe la broncoconstricción, la hiperreactividad de la vía aérea, la secreción de moco y el reclutamiento de eosinófilos inducidos por leucotrienos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'monte-gran-4',
        name: 'Sobres de Gránulos Orales 4 mg (Pediátrico 6 meses a 5 años)',
        amountMg: 4,
        volumeMl: 1,
        form: 'suspension',
        unit: 'sobre',
        notes: 'Disolver en una cucharadita de alimento blando frío o leche'
      },
      {
        id: 'monte-masticable-4',
        name: 'Comprimidos Masticables 4 mg (Niños de 2 a 5 años)',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'monte-masticable-5',
        name: 'Comprimidos Masticables 5 mg (Niños de 6 a 14 años)',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'monte-comp-10',
        name: 'Comprimidos Recubiertos 10 mg (Adolescentes ≥15 años y Adultos)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'monte-ind-asma-adulto',
        name: 'Asma Persistente / Rinitis Alérgica en Adultos y ≥15 años',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico de control',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '10 mg una vez al día por la noche antes de acostarse.'
      },
      {
        id: 'monte-ind-asma-peds',
        name: 'Asma Pediátrica y Rinitis (Dosificación por Edad)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico de control',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 5,
        description: '6 meses a 5 años: 4 mg una vez al día en la noche. 6 a 14 años: 5 mg una vez al día en la noche.'
      },
      {
        id: 'monte-ind-ejercicio',
        name: 'Prevención de Broncoconstricción Inducida por Ejercicio',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'A demanda',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: 'Una dosis tomada al menos 2 horas antes de realizar actividad física intensa.'
      }
    ],
    whenToUse: [
      'Tratamiento adyuvante en pacientes con asma no controlada con dosis bajas de corticoide inhalado.',
      'Control simultáneo de asma y rinitis alérgica estacional o perenne.',
      'Asma inducida por aspirina / AINEs (intolerancia con hiperproducción de leucotrienos).'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA!: Riesgo de eventos neuropsiquiátricos adversos graves (pesadillas vívidas, insomnio, irritabilidad, agresividad, depresión y comportamiento suicida). Suspender inmediatamente si aparecen alteraciones del estado de ánimo o del sueño.',
      'NO es un broncodilatador de rescate: carece de utilidad para el alivio agudo de una crisis asmática.',
      'Tomar por la noche, ya que el tono broncomotor y los mediadores inflamatorios leucotriénicos alcanzan su pico durante la madrugada.'
    ],
    monitoringAndSideEffects: [
      'Vigilancia estricta de cambios del comportamiento, irritabilidad o pesadillas en niños.',
      'Cefalea y dolor abdominal leve.',
      'Evolución del control del asma y necesidad de medicación de rescate.'
    ],
    evidenceAndSources: [
      {
        title: 'FDA Boxed Warning on Montelukast: Serious Neuropsychiatric Events',
        source: 'US Food and Drug Administration',
        year: '2023',
        summary: 'Exige que los médicos adviertan a los padres y pacientes sobre los riesgos psiquiátricos antes de iniciar montelukast.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en falla renal; eliminación biliar exclusiva.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible si está Indicado',
      summary: 'Grandes bases de datos no muestran aumento de anomalías congénitas. Mantener si la paciente ya estaba bien controlada antes del embarazo.',
      clinicalAlternative: 'Budesonida inhalada como corticoide de primera línea.'
    }
  },
  {
    id: 'cetirizina',
    name: 'Cetirizina',
    commercialNames: ['Zyrtec', 'Alerlisin', 'Virlix', 'Cetrine'],
    category: 'Urgencias / Respiratorio',
    atcCode: 'R06AE07',
    awareCategory: 'Access',
    therapeuticClass: 'Antihistamínico H1 de 2.ª Generación (No Sedante)',
    badgeText: 'Alergia · Antihistamínico H1',
    shortDescription: 'Antihistamínico H1 de segunda generación con rápido inicio de acción (20-60 minutos) y potente efecto antagonista en piel y mucosas. Mínimo paso a través de la barrera hematoencefálica con baja incidencia de sedación.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'ceti-sol-10',
        name: 'Solución Oral / Gotas 10 mg / mL (Pediátrico)',
        amountMg: 10,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        standardBottleMl: 30,
        notes: '20 gotas = 1 mL = 10 mg (0.5 mg/gota)'
      },
      {
        id: 'ceti-jarabe-5',
        name: 'Jarabe 5 mg / 5 mL (1 mg/mL)',
        amountMg: 5,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 60
      },
      {
        id: 'ceti-comp-10',
        name: 'Comprimidos Recubiertos 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'ceti-ind-urticaria-adulto',
        name: 'Urticaria Aguda y Crónica / Rinitis Alérgica en Adultos y >12 años',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-14 días o según síntomas',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '10 mg una vez al día (preferiblemente por la tarde/noche).'
      },
      {
        id: 'ceti-ind-peds',
        name: 'Alergia y Prurito Pediátrico (>6 meses)',
        recommendedDoseMgPerKgPerDay: 0.25,
        minDoseMgPerKgPerDay: 0.25,
        maxDoseMgPerKgPerDay: 0.5,
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-10 días',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5,
        description: '6 meses a 2 años: 2.5 mg una vez al día. 2 a 5 años: 2.5 a 5 mg al día (o 2.5 mg c/12h). 6 a 12 años: 5 a 10 mg una vez al día.'
      }
    ],
    whenToUse: [
      'Alivio sintomático de rinitis alérgica estacional y perenne (estornudos, rinorrea, prurito nasal).',
      'Urticaria aguda o crónica espontánea con erupción habonosa y prurito intenso.',
      'Dermatitis atópica con prurito rebelde.'
    ],
    pearlsAndPitfalls: [
      'De los antihistamínicos de 2da generación, la cetirizina es el que tiene mayor potencial de somnolencia residual (aproximadamente en un 10-14% de pacientes a dosis de 10 mg).',
      'Excelente perfil de seguridad en lactantes a partir de los 6 meses de edad.',
      'A diferencia de la terfenadina o astemizol antiguos, no tiene toxicidad cardíaca ni prolonga el intervalo QTc.'
    ],
    monitoringAndSideEffects: [
      'Evolución del prurito y lesiones cutáneas.',
      'Somnolencia diurna y rendimiento psicomotor.',
      'Sequedad de boca y fatiga leve.'
    ],
    evidenceAndSources: [
      {
        title: 'EAACI/GA²LEN/EDF/WAO Guideline for the Definition, Classification, and Management of Urticaria',
        source: 'Allergy Journal',
        year: '2023',
        summary: 'Los antihistamínicos H1 de segunda generación (cetirizina, levocetirizina) son el tratamiento de primera línea no sedante en urticaria.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: '10 mg una vez al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: '5 mg una vez al día.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 29 mL/min',
        adjustmentText: '5 mg cada 48 horas.',
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
      statusLabel: 'Compatible / De Elección en Gestantes',
      summary: 'Múltiples estudios de cohortes confirman su seguridad sin incremento de anomalías congénitas fetales. Antihistamínico no sedante de primera elección durante todo el embarazo.',
      clinicalAlternative: 'Fármaco de elección preferente junto con loratadina.'
    }
  },
  {
    id: 'prednisona',
    name: 'Prednisona',
    commercialNames: ['Meticorten', 'Dacortin', 'Prednisona', 'Cortiprex'],
    category: 'Corticoides',
    atcCode: 'H02AB07',
    awareCategory: 'Access',
    therapeuticClass: 'Glucocorticoide Sistémico Sintético Oral de Acción Intermedia',
    badgeText: 'Corticoide Sistémico · Antiinflamatorio / Inmunosupresor',
    shortDescription: 'Profármaco glucocorticosteroide que se convierte rápidamente en prednisolona en el hígado. Potente acción antiinflamatoria e inmunosupresora (4 veces más potente que la hidrocortisona).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'pred-comp-5',
        name: 'Comprimidos Ranurados 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'pred-comp-20',
        name: 'Comprimidos Ranurados 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'pred-comp-50',
        name: 'Comprimidos Ranurados 50 mg',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'pred-ind-crisis-asma',
        name: 'Crisis Asmática Aguda / Exacerbación EPOC en Adultos',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5 días',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 50,
        description: '40 a 50 mg una vez al día por la mañana durante 5 días (no requiere pauta descendente si la duración es ≤5 días).'
      },
      {
        id: 'pred-ind-inmunosupresion',
        name: 'Brotes de Enfermedades Autoinmunes / Síndrome Nefrótico',
        fixedAdultDoseMg: 60,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según protocolo autoinmune',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 80,
        description: '1 mg/kg/día (40 a 60 mg/día) en toma matutina única con desayuno.'
      },
      {
        id: 'pred-ind-peds',
        name: 'Crisis Asmática Pediátrica',
        recommendedDoseMgPerKgPerDay: 1.5,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 40,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3-5 días',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 40,
        description: '1 a 2 mg/kg/día (máximo 40 mg en <12 años o 60 mg en ≥12 años) en toma matutina durante 3 a 5 días.'
      }
    ],
    whenToUse: [
      'Exacerbaciones agudas de asma bronquial o EPOC descompensado.',
      'Parálisis facial periférica de Bell (iniciar en las primeras 72 horas para mejorar recuperación motora).',
      'Síndrome nefrótico corticosensible y brotes de artritis reumatoide o lupus.'
    ],
    pearlsAndPitfalls: [
      'Administrar SIEMPRE en una sola toma matutina (entre las 7:00 y las 8:00 AM) junto con el desayuno para respetar el ritmo circadiano del eje hipotálamo-hipófiso-adrenal (HHA) y mitigar la supresión adrenal.',
      'Cursos cortos de 5 días NO requieren retirada escalonada ni reducción progresiva de dosis.',
      'Tratamientos prolongados (>2-3 semanas): Riesgo de síndrome de Cushing iatrogénico, osteoporosis, hiperglucemia y supresión del eje HHA (requiere desescalamiento muy gradual).'
    ],
    monitoringAndSideEffects: [
      'Glucemia (los corticoides inducen resistencia periférica a la insulina y gluconeogénesis).',
      'Presión arterial sistólica y retención de líquidos.',
      'Síntomas digestivos (asociar IBP si se combina con AINEs o en antecedentes ulcerosos).'
    ],
    evidenceAndSources: [
      {
        title: 'Cochrane Review: Systemic Corticosteroids for Acute Asthma Exacerbations',
        source: 'Cochrane Database of Systematic Reviews',
        year: '2023',
        summary: 'Los corticoides orales son tan eficaces como los intravenosos para resolver la crisis asmática, reduciendo significativamente las recaídas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Compatible con el Embarazo (La Placenta la Inactiva)',
      summary: 'La enzima placentaria 11-beta-hidroxiesteroide deshidrogenasa tipo 2 inactiva el 90% de la prednisona hacia prednisolona inactiva, protegiendo al feto. De elección para tratar patologías maternas sin afectar al feto.',
      clinicalAlternative: 'Fármaco de elección para patología inflamatoria o autoinmune materna.'
    }
  }
];
