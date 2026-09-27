import { Medication } from '../types';

export const MEDICATIONS: Medication[] = [
  {
    id: 'amoxicilina',
    name: 'Amoxicilina',
    commercialNames: ['Amoxil', 'Clamoxyl', 'Ardine', 'Amoxal'],
    category: 'Antibióticos',
    therapeuticClass: 'Aminopenicilina de amplio espectro (Betalactámico)',
    badgeText: 'Primera línea OMA y NAC',
    shortDescription: 'Antibiótico de elección para infecciones respiratorias altas, otitis media y neumonía comunitaria.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'amox-susp-250',
        name: 'Suspensión 250 mg / 5 mL',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100,
        notes: 'Equivale a 50 mg/mL'
      },
      {
        id: 'amox-susp-400',
        name: 'Suspensión 400 mg / 5 mL',
        amountMg: 400,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 70,
        notes: 'Equivale a 80 mg/mL (facilita menor volumen)'
      },
      {
        id: 'amox-susp-500',
        name: 'Suspensión 500 mg / 5 mL',
        amountMg: 500,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: 'Equivale a 100 mg/mL'
      },
      {
        id: 'amox-comp-500',
        name: 'Cápsulas / Comprimidos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Uso en niños mayores (>40 kg) y adultos'
      },
      {
        id: 'amox-comp-875',
        name: 'Comprimidos 875 mg',
        amountMg: 875,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Pauta cada 12 horas en adultos'
      }
    ],
    indications: [
      {
        id: 'amox-ind-oma-high',
        name: 'Otitis Media Aguda (Dosis Alta) / NAC',
        recommendedDoseMgPerKgPerDay: 90,
        minDoseMgPerKgPerDay: 80,
        maxDoseMgPerKgPerDay: 90,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 - 10 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: 'Recomendada por la AAP ante sospecha de S. pneumoniae con resistencia intermedia a penicilina.'
      },
      {
        id: 'amox-ind-faringo',
        name: 'Faringoamigdalitis por S. pyogenes (EbhGA)',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 50,
        maxDoseMgPerKgPerDay: 50,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10 días',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 500,
        description: 'Es imperativo completar 10 días para prevenir fiebre reumática aguda.'
      },
      {
        id: 'amox-ind-estandar',
        name: 'Infección Leve / Dosis Estándar',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 40,
        maxDoseMgPerKgPerDay: 50,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        description: 'Sinusitis no complicada, infecciones odontológicas o de piel leve.'
      },
      {
        id: 'amox-ind-adulto',
        name: 'Adultos: Dosis Estándar Oral',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 - 10 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: '500 mg cada 8 horas o 875-1000 mg cada 12 horas vía oral.'
      }
    ],
    whenToUse: [
      'Primera elección en Otitis Media Aguda (OMA) pediátrica no complicada.',
      'Faringoamigdalitis aguda con prueba rápida o cultivo positivo para Streptococcus pyogenes.',
      'Neumonía Adquirida en la Comunidad (NAC) típica en pacientes ambulatorios.',
      'Infecciones cutáneas leves o abscesos dentales en pacientes no alérgicos a penicilinas.'
    ],
    pearlsAndPitfalls: [
      'Perla: La dosis de 80-90 mg/kg/día en 2 o 3 tomas vence la resistencia intermedia de S. pneumoniae en oído medio.',
      'Cuidado: Si el paciente usó amoxicilina en los últimos 30 días o presenta conjuntivitis purulenta concurrente, preferir Amoxicilina/Clavulánico (cobertura H. influenzae productor de betalactamasa).',
      'El exantema maculopapular tras administrar amoxicilina en un paciente con mononucleosis infecciosa (VEB) no es una alergia verdadera mediada por IgE, sino una reacción idiosincrática.',
      'Reconstitución: Conservar la suspensión en refrigerador (2-8 °C) por un máximo de 14 días. Agitar vigorosamente antes de dosificar.'
    ],
    monitoringAndSideEffects: [
      'Diarrea y náuseas (leves a moderadas por disbiosis).',
      'Reacciones de hipersensibilidad (erupción cutánea, urticaria, anafilaxia infrecuente).',
      'Superinfección por C. difficile en tratamientos prolongados.'
    ],
    evidenceAndSources: [
      {
        title: 'AAP Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media',
        source: 'Pediatrics. 2013;131(3):e964-e999 (Reafirmada 2021)',
        summary: 'Recomienda amoxicilina a 80-90 mg/kg/día como antibiótico de elección de primera línea para OMA.'
      },
      {
        title: 'Infectious Diseases Society of America (IDSA) Community-Acquired Pneumonia Guidelines',
        source: 'Clin Infect Dis. 2011;53(7):e25-e76',
        summary: 'Amoxicilina en dosis elevadas es el pilar de tratamiento ambulatorio en niños inmunocompetentes.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 50 mL/min', adjustmentText: '100% de la dosis cada 8 horas (sin ajuste necesario)', cautionLevel: 'normal' },
      { crClThreshold: 'FG 10 - 50 mL/min', adjustmentText: '100% de la dosis cada 12 horas (o reducir dosis al 50-75%)', cautionLevel: 'moderate' },
      { crClThreshold: 'FG < 10 mL/min', adjustmentText: '100% de la dosis cada 24 horas', cautionLevel: 'severe' },
      { crClThreshold: 'Hemodiálisis', adjustmentText: 'Dosis suplementaria post-diálisis del 50%', cautionLevel: 'severe' }
    ],
    reconstitutionNotes: 'Agregar agua hervida fría hasta la marca en 2 partes. Agitar hasta suspensión homogénea.',
    storageNotes: 'Refrigerar a 2-8°C tras reconstituir. Estable por 14 días. Desechar sobrante.'
  },
  {
    id: 'amoxicilina-clavulanico',
    name: 'Amoxicilina + Ácido Clavulánico',
    commercialNames: ['Augmentin', 'Clavulin', 'Curam', 'Amoval Duo'],
    category: 'Antibióticos',
    therapeuticClass: 'Aminopenicilina + Inhibidor de betalactamasa',
    badgeText: 'Fracaso a Amoxi / OMA con conjuntivitis',
    shortDescription: 'Cubre patógenos productores de betalactamasa (H. influenzae, M. catarrhalis, S. aureus MSSA).',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'amox-clav-400-57',
        name: 'Suspensión 400/57 mg por 5 mL (Proporción 7:1)',
        amountMg: 400,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 70,
        notes: 'Dosis cada 12 horas. Menor incidencia de diarrea.'
      },
      {
        id: 'amox-clav-250-62',
        name: 'Suspensión 250/62.5 mg por 5 mL (Proporción 4:1)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100,
        notes: 'Dosis cada 8 horas. Mayor carga de clavulanato.'
      },
      {
        id: 'amox-clav-600-42',
        name: 'Suspensión ES 600/42.9 mg por 5 mL (Proporción 14:1)',
        amountMg: 600,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100,
        notes: 'Fórmula especial para alta dosis (90 mg/kg) sin exceso de clavulánico.'
      },
      {
        id: 'amox-clav-comp-875',
        name: 'Comprimidos 875/125 mg',
        amountMg: 875,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis usual en adultos: 1 comprimido cada 12 horas'
      },
      {
        id: 'amox-clav-iv-1000',
        name: 'Vial IV 1000/200 mg',
        amountMg: 1000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: 'Uso hospitalario parenteral'
      }
    ],
    indications: [
      {
        id: 'amox-clav-ind-oma-fallo',
        name: 'OMA refractaria o Síndrome Otitis-Conjuntivitis',
        recommendedDoseMgPerKgPerDay: 90,
        minDoseMgPerKgPerDay: 80,
        maxDoseMgPerKgPerDay: 90,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: 'Basado en componente de amoxicilina. Usar formulaciones 7:1 o 14:1 para no superar 10 mg/kg/día de clavulanato.'
      },
      {
        id: 'amox-clav-ind-mordeduras',
        name: 'Mordedura humana / animal (Profilaxis o Tto)',
        recommendedDoseMgPerKgPerDay: 45,
        minDoseMgPerKgPerDay: 40,
        maxDoseMgPerKgPerDay: 50,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7 - 10 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 875,
        description: 'Excelente cobertura para Pasteurella multocida, Eikenella corrodens y anaerobios orales.'
      },
      {
        id: 'amox-clav-adult-oral',
        name: 'Adultos: Infección Respiratoria / Cutánea',
        fixedAdultDoseMg: 875,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7 - 10 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 875,
        description: '1 comprimido de 875/125 mg cada 12 horas con las comidas.'
      }
    ],
    whenToUse: [
      'Falla terapéutica a amoxicilina a las 48-72 horas.',
      'Otitis media aguda concurrente con conjuntivitis purulenta.',
      'Sinusitis bacteriana aguda que empeora o no mejora tras 10 días.',
      'Mordeduras de animales (perro, gato) y humanas.',
      'Infecciones cutáneas con sospecha de S. aureus meticilino-sensible.'
    ],
    pearlsAndPitfalls: [
      'Perla de Clavulanato: El ácido clavulánico es el principal causante de la diarrea osmótica. No exceder 10 mg/kg/día de clavulánico.',
      'Diferencia clave: 2 comprimidos de 250/125 mg NO equivalen a 1 comprimido de 500/125 mg (duplicarían la dosis de clavulanato y causarían diarrea severa).',
      'Tomar al inicio de una comida para minimizar los síntomas gastrointestinales y mejorar la absorción.',
      'Toxicidad hepática colestásica: Más frecuente en varones adultos mayores o tras tratamientos repetidos prolongados.'
    ],
    monitoringAndSideEffects: [
      'Diarrea y cólicos abdominales.',
      'Candidiasis mucocutánea (del pañal / oral).',
      'Elevación transitoria de transaminasas o ictericia colestásica.'
    ],
    evidenceAndSources: [
      {
        title: 'Management of Acute Otitis Media in Children',
        source: 'New England Journal of Medicine. 2011;364:168-176',
        summary: 'El uso de formulación 14:1 ES (600 mg amoxi / 42.9 mg clav) ofrece erradicación bacteriológica superior sin exceso de diarrea.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 30 mL/min', adjustmentText: 'Dosis habitual', cautionLevel: 'normal' },
      { crClThreshold: 'FG 10 - 30 mL/min', adjustmentText: '500/125 mg cada 12 hrs (evitar comp 875 mg)', cautionLevel: 'moderate' },
      { crClThreshold: 'FG < 10 mL/min', adjustmentText: '500/125 mg cada 24 hrs', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'paracetamol',
    name: 'Paracetamol (Acetaminofén)',
    commercialNames: ['Tylenol', 'Tempra', 'Panadol', 'Apiretal', 'Perfalgan'],
    category: 'Analgesia / AINEs',
    therapeuticClass: 'Analgésico y antipirético no opiáceo (Inhibidor central síntesis PG)',
    badgeText: 'Antipirético de 1ra línea pediátrico',
    shortDescription: 'Fármaco de referencia para fiebre y dolor leve a moderado en todas las edades.',
    availableRoutes: ['oral', 'rectal', 'iv'],
    concentrations: [
      {
        id: 'para-gotas-100',
        name: 'Gotas orales 100 mg / mL (Apiretal / Tempra)',
        amountMg: 100,
        volumeMl: 1,
        form: 'drops',
        unit: 'gotas / mL',
        standardBottleMl: 30,
        notes: '1 mL = aprox. 20-25 gotas (o usar jeringa dosificadora en mL = 0.15 mL/kg)'
      },
      {
        id: 'para-jarabe-120',
        name: 'Jarabe 120 mg / 5 mL',
        amountMg: 120,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: 'Equivale a 24 mg/mL'
      },
      {
        id: 'para-jarabe-160',
        name: 'Jarabe 160 mg / 5 mL (Tylenol Infantil)',
        amountMg: 160,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: 'Equivale a 32 mg/mL'
      },
      {
        id: 'para-comp-500',
        name: 'Comprimidos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Adultos y niños > 40 kg'
      },
      {
        id: 'para-comp-1000',
        name: 'Comprimidos 1 g (1000 mg)',
        amountMg: 1000,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis estándar adulto cada 6-8 hrs'
      },
      {
        id: 'para-iv-10mg-ml',
        name: 'Vial Perfusión IV 10 mg/mL (100 mL = 1 g)',
        amountMg: 10,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Infusión en 15 minutos'
      }
    ],
    indications: [
      {
        id: 'para-ind-pediatrico',
        name: 'Fiebre o Dolor Pediátrico (Por Dosis)',
        recommendedDoseMgPerKgPerDay: 15, // isDosePerKgPerDose = true
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 15,
        isDosePerKgPerDose: true,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Según necesidad (3 - 5 días)',
        maxDailyDoseMg: 60, // max 60-75 mg/kg/day en niños o max 4000 mg/día
        maxSingleDoseMg: 1000,
        description: 'Dosis estándar de 10 a 15 mg/kg por CADA TOMA, cada 4 a 6 horas. No superar 60-75 mg/kg/día ni 4 g/día.'
      },
      {
        id: 'para-ind-adulto',
        name: 'Adultos: Dolor / Fiebre Oral o IV',
        fixedAdultDoseMg: 650,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Según necesidad',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        description: '500 mg a 1000 mg cada 6-8 horas vía oral o IV. Máximo 4000 mg/día (máximo 2000-3000 mg en hepatopatía o desnutrición).'
      }
    ],
    whenToUse: [
      'Primera elección antipirética y analgésica en neonatos, lactantes, niños y adultos.',
      'Cefalea tensional, odontalgia, otalgia, mialgias.',
      'Fiebre post-vacunación.',
      'Seguro durante el embarazo y la lactancia.'
    ],
    pearlsAndPitfalls: [
      '¡Atención a la regla de cálculo rápido!: En gotas de 100 mg/mL (Apiretal), los mL necesarios por toma equivalen a: Peso (kg) × 0.15 mL. (Ejemplo: Niño de 10 kg → 10 × 0.15 = 1.5 mL).',
      'Hepatotoxicidad: La sobredosis aguda (> 150 mg/kg en niños o > 7.5-10 g en adultos) satura la glucuronidación y produce NAPQI tóxico. Antídoto: N-Acetilcisteína (NAC) guiado por nomograma de Rumack-Matthew.',
      'Precaución con la duplicidad: Miles de antigripales de venta libre contienen paracetamol oculto.',
      'El paracetamol carece de efecto antiinflamatorio clínicamente significativo a nivel periférico.'
    ],
    monitoringAndSideEffects: [
      'Excepcionalmente bien tolerado a dosis terapéuticas.',
      'En sobredosis: náuseas, vómitos, dolor en hipocondrio derecho y necrosis hepática fulminante a las 48-72h.'
    ],
    evidenceAndSources: [
      {
        title: 'Fever and Antipyretic Use in Children',
        source: 'Pediatrics. 2011;127(3):580-587 (AAP Clinical Report)',
        summary: 'La meta de la antipiresis es el confort del niño, no normalizar numéricamente la temperatura. Enfatiza dosificar estrictamente por peso y no por edad.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 50 mL/min', adjustmentText: 'Intervalo cada 4-6 hrs', cautionLevel: 'normal' },
      { crClThreshold: 'FG 10 - 50 mL/min', adjustmentText: 'Espaciar intervalo a cada 6 hrs', cautionLevel: 'moderate' },
      { crClThreshold: 'FG < 10 mL/min', adjustmentText: 'Espaciar intervalo a cada 8 hrs', cautionLevel: 'moderate' }
    ]
  },
  {
    id: 'ibuprofeno',
    name: 'Ibuprofeno',
    commercialNames: ['Motrin', 'Advil', 'Dalsy', 'Espidifen'],
    category: 'Analgesia / AINEs',
    therapeuticClass: 'Antiinflamatorio no esteroideo (AINE) derivado del ácido propiónico',
    badgeText: 'Antiinflamatorio y dolor musculoesquelético',
    shortDescription: 'Eficaz para fiebre refractaria, dolor inflamatorio, otalgia y traumatismos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'ibu-susp-100',
        name: 'Suspensión 100 mg / 5 mL (2% - Dalsy / Motrin)',
        amountMg: 100,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 150,
        notes: 'Equivale a 20 mg/mL'
      },
      {
        id: 'ibu-susp-200',
        name: 'Suspensión 200 mg / 5 mL (4% - Forte)',
        amountMg: 200,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100,
        notes: 'Equivale a 40 mg/mL (ideal para niños mayores, mitad de volumen)'
      },
      {
        id: 'ibu-comp-400',
        name: 'Comprimidos 400 mg',
        amountMg: 400,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis analgésica óptima en adultos'
      },
      {
        id: 'ibu-comp-600',
        name: 'Comprimidos 600 mg',
        amountMg: 600,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Antiinflamatorio en artritis o dolor severo'
      }
    ],
    indications: [
      {
        id: 'ibu-ind-pediatrico',
        name: 'Fiebre / Dolor Inflamatorio Pediátrico',
        recommendedDoseMgPerKgPerDay: 10, // isDosePerKgPerDose = true
        minDoseMgPerKgPerDay: 5,
        maxDoseMgPerKgPerDay: 10,
        isDosePerKgPerDose: true,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3 - 5 días',
        maxDailyDoseMg: 40, // max 40 mg/kg/día o max 2400 mg
        maxSingleDoseMg: 600,
        description: '5 a 10 mg/kg por TOMA cada 6 a 8 horas con las comidas. Dosis máxima: 40 mg/kg/día.'
      },
      {
        id: 'ibu-ind-adulto',
        name: 'Adultos: Dolor o Inflamación',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5 - 7 días',
        maxDailyDoseMg: 2400,
        maxSingleDoseMg: 800,
        description: '400 mg cada 8 horas (dosis de 400 mg tiene el mismo techo analgésico que 600-800 mg pero con menor toxicidad GI).'
      }
    ],
    whenToUse: [
      'Dolor con componente inflamatorio evidente: otalgia aguda, faringodinia, traumatismos leves, artritis.',
      'Fiebre refractaria a paracetamol en niños > 3 a 6 meses de edad.',
      'Dismenorrea primaria en adolescentes y mujeres adultas.'
    ],
    pearlsAndPitfalls: [
      'Edad mínima: No se recomienda en menores de 3 meses o con peso inferior a 5-6 kg.',
      '¡Atención en Varicela!: Contraindicado o evitar activamente durante la varicela debido a la asociación descrita con fascitis necrotizante e infecciones invasivas por estreptococo del grupo A.',
      'Deshidratación: Evitar en niños deshidratados por gastroenteritis aguda por riesgo de necrosis tubular aguda / falla renal por bloqueo de prostaglandinas vasodilatadoras renales.',
      'Tomar siempre con alimentos para reducir dispepsia o irritación gástrica.'
    ],
    monitoringAndSideEffects: [
      'Gastritis, úlcera péptica y hemorragia digestiva alta.',
      'Deterioro de función renal, retención hidrosalina.',
      'Broncoespasmo en pacientes con tríada de Samter (asma inducida por AINEs).'
    ],
    evidenceAndSources: [
      {
        title: 'Safety of Ibuprofen in Infants and Children',
        source: 'Cochrane Database of Systematic Reviews. 2020',
        summary: 'Demuestra eficacia antipirética ligeramente superior y más duradera (hasta 8 hrs) vs paracetamol, con perfil de seguridad equivalente en normohidratados.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 50 mL/min', adjustmentText: 'Dosis habitual', cautionLevel: 'normal' },
      { crClThreshold: 'FG 10 - 50 mL/min', adjustmentText: 'Usar con extrema precaución, reducir dosis al 50%', cautionLevel: 'severe' },
      { crClThreshold: 'FG < 10 mL/min', adjustmentText: 'Contraindicado en falla renal avanzada', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'azitromicina',
    name: 'Azitromicina',
    commercialNames: ['Zithromax', 'Zitromax', 'Azitromin', 'Toraseptol'],
    category: 'Antibióticos',
    therapeuticClass: 'Macrólido azálido (Inhibidor síntesis proteica subunidad 50S)',
    badgeText: 'Pauta corta de 3 a 5 días',
    shortDescription: 'Excelente cobertura frente a bacterias atípicas (Mycoplasma, Chlamydia) y B. pertussis.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'azi-susp-200',
        name: 'Suspensión 200 mg / 5 mL',
        amountMg: 200,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 30,
        notes: 'Equivale a 40 mg/mL'
      },
      {
        id: 'azi-comp-500',
        name: 'Comprimidos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Pauta adulto: 500 mg 1 vez al día x 3 días'
      }
    ],
    indications: [
      {
        id: 'azi-ind-3days',
        name: 'Pediatría: Pauta de 3 Días (10 mg/kg/día)',
        recommendedDoseMgPerKgPerDay: 10,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3 días consecutivos',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        description: 'Dosis única diaria de 10 mg/kg/día durante 3 días. Vida media tisular prolongada (hasta 68 horas).'
      },
      {
        id: 'azi-ind-5days',
        name: 'Pediatría: Pauta de 5 Días (Neumonía atípica)',
        recommendedDoseMgPerKgPerDay: 10,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Día 1: 10 mg/kg, Días 2-5: 5 mg/kg/día',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        description: 'Carga el día 1 (10 mg/kg) y luego 5 mg/kg/día los días 2, 3, 4 y 5.'
      },
      {
        id: 'azi-ind-adulto',
        name: 'Adultos: Neumonía / Exacerbación EPOC',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3 días (o 500mg día 1 + 250mg d 2-5)',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        description: '500 mg vía oral 1 vez al día durante 3 días consecutivos.'
      }
    ],
    whenToUse: [
      'Sospecha de Neumonía por gérmenes atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae) en escolares y adultos.',
      'Tratamiento y profilaxis de tos ferina (Bordetella pertussis).',
      'Infección urogenital por Chlamydia trachomatis (1 g dosis única en adultos).',
      'Alternativa en pacientes alérgicos graves a penicilinas con faringitis bacteriana.'
    ],
    pearlsAndPitfalls: [
      'Alargamiento del intervalo QTc: Usar con precaución en pacientes con cardiopatía de base o en combinación con otros fármacos que prolonguen el QT (antiarrítmicos, fluoroquinolonas, ondansetrón).',
      'Estenosis hipertrófica de píloro: Se ha descrito un riesgo incrementado en neonatos menores de 2 semanas expuestos a macrólidos.',
      'No requiere ajuste en insuficiencia renal leve a moderada por su eliminación predominantemente biliar/hepática.'
    ],
    monitoringAndSideEffects: [
      'Molestias digestivas (dolor cólico, náuseas, diarrea).',
      'Prolongación del intervalo QT y arritmias ventriculares (Torsades de Pointes, infrecuente).'
    ],
    evidenceAndSources: [
      {
        title: 'Azithromycin for treatment of community-acquired pneumonia in children',
        source: 'Cochrane Database of Systematic Reviews. 2014',
        summary: 'Equivalente en tasa de curación clínica a betalactámicos cuando hay etiología atípica, con menor tasa de eventos adversos que eritromicina.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 10 mL/min', adjustmentText: 'Sin necesidad de ajuste de dosis', cautionLevel: 'normal' },
      { crClThreshold: 'FG < 10 mL/min', adjustmentText: 'Usar con precaución (datos limitados, monitorizar)', cautionLevel: 'moderate' }
    ]
  },
  {
    id: 'ceftriaxona',
    name: 'Ceftriaxona',
    commercialNames: ['Rocephin', 'Ceftriaxona sódica', 'Mesporin'],
    category: 'Antibióticos',
    therapeuticClass: 'Cefalosporina de 3ra generación parenteral',
    badgeText: 'Sepsis, meningitis y NAC severa',
    shortDescription: 'Cefalosporina de amplio espectro de administración única o dos veces al día con alta penetración al LCR.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'cef-vial-1g',
        name: 'Vial 1 g polvo para inyección',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 10 mL para IV o 3.5 mL Lidocaína 1% para IM'
      },
      {
        id: 'cef-vial-500',
        name: 'Vial 500 mg polvo para inyección',
        amountMg: 500,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'Uso pediátrico o dosis baja'
      },
      {
        id: 'cef-vial-2g',
        name: 'Vial 2 g polvo para infusión',
        amountMg: 2000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: 'Para meningitis en adultos o bacteriemia severa'
      }
    ],
    indications: [
      {
        id: 'cef-ind-infecc-general',
        name: 'Infección Moderada / NAC / ITU Pediátrica',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 50,
        maxDoseMgPerKgPerDay: 75,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7 - 10 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 2000,
        description: '50 a 75 mg/kg/día cada 24 horas vía IV o IM profunda.'
      },
      {
        id: 'cef-ind-meningitis',
        name: 'Meningitis Bacteriana Aguda Pediátrica',
        recommendedDoseMgPerKgPerDay: 100,
        minDoseMgPerKgPerDay: 80,
        maxDoseMgPerKgPerDay: 100,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10 - 14 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        description: 'Dosis meníngea alta: 100 mg/kg/día repartidos cada 12 horas (máximo 4 g/día).'
      },
      {
        id: 'cef-ind-adulto',
        name: 'Adultos: Dosis Estándar Sepsis / NAC',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7 - 14 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        description: '1 g a 2 g IV cada 24 horas (en meningitis: 2 g cada 12 horas).'
      }
    ],
    whenToUse: [
      'Infecciones graves: sepsis, bacteriemia, meningitis bacteriana aguda.',
      'Neumonía comunitaria complicada o con necesidad de ingreso.',
      'Pielonefritis aguda e infecciones urinarias complicadas.',
      'Enfermedad inflamatoria pélvica y gonorrea (250-500 mg IM dosis única).'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN MORTAL EN NEONATOS!: No administrar ceftriaxona conjuntamente con soluciones que contengan calcio (como Ringer Lactato) por riesgo de precipitación fatal de ceftriaxona-calcio en pulmones y riñones.',
      'Hiperbilirrubinemia neonatal: Desplaza a la bilirrubina de la albúmina, incrementando el riesgo de kernicterus en recién nacidos ictéricos o prematuros.',
      'Barro biliar / pseudolitiasis: Puede precipitar con sales biliares en vesícula tras tratamientos prolongados o dosis altas; generalmente reversible al suspender.',
      'Vía IM: Dolorosa. Se recomienda reconstituir con lidocaína al 1% sin epinefrina (¡exclusivo para vía IM, JAMÁS administrar lidocaína IV!).'
    ],
    monitoringAndSideEffects: [
      'Tromboflebitis local (infundir en al menos 30 min).',
      'Pseudolitiasis biliar sintomática (dolor cólico en CSD).',
      'Diarrea por C. difficile.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Guidelines for the Management of Bacterial Meningitis',
        source: 'Clin Infect Dis. 2004;39(9):1267-1284',
        summary: 'Ceftriaxona a 100 mg/kg/día combinada con vancomicina es el régimen empírico estándar para meningitis comunitaria.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 10 mL/min', adjustmentText: 'No requiere ajuste de dosis (doble vía hepática y renal)', cautionLevel: 'normal' },
      { crClThreshold: 'FG < 10 mL/min', adjustmentText: 'Máximo 2 g al día si no hay disfunción hepática concurrente', cautionLevel: 'moderate' },
      { crClThreshold: 'Falla combinada Hepática + Renal', adjustmentText: 'Monitorizar concentraciones plasmáticas o reducir a máx 1 g/día', cautionLevel: 'severe' }
    ],
    reconstitutionNotes: 'Para infusión IV: Diluir en 50-100 mL de Solución Salina 0.9% o Dextrosa 5%. Pasar en 30 minutos. ¡NO usar soluciones con calcio!'
  },
  {
    id: 'vancomicina',
    name: 'Vancomicina',
    commercialNames: ['Vancocin', 'Vancomicina clorhidrato'],
    category: 'Antibióticos',
    therapeuticClass: 'Glicopéptido bactericida (Inhibidor pared celular bacteriana)',
    badgeText: 'SAMR y Enterococo - Requiere monitorización',
    shortDescription: 'Antibiótico de reserva para infecciones invasivas por Staphylococcus aureus meticilino-resistente (SAMR).',
    availableRoutes: ['iv', 'oral'],
    concentrations: [
      {
        id: 'vanco-vial-500',
        name: 'Vial 500 mg polvo liofilizado',
        amountMg: 500,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Concentración tras reconstitución primaria: 50 mg/mL'
      },
      {
        id: 'vanco-vial-1000',
        name: 'Vial 1 g (1000 mg) polvo liofilizado',
        amountMg: 1000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: 'Diluir a concentración final máxima de 5 mg/mL (ej. 1g en 200-250 mL)'
      }
    ],
    indications: [
      {
        id: 'vanco-ind-carga',
        name: 'Dosis de Carga Adulto (Sepsis / Paciente Crítico)',
        recommendedDoseMgPerKgPerDay: 25, // isDosePerKgPerDose = true
        minDoseMgPerKgPerDay: 20,
        maxDoseMgPerKgPerDay: 30,
        isDosePerKgPerDose: true,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única inicial',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 2000,
        description: '25 a 30 mg/kg (peso real) como dosis de carga inicial en pacientes gravemente enfermos para alcanzar rápidamente niveles diana.'
      },
      {
        id: 'vanco-ind-mantenimiento-pediatrico',
        name: 'Mantenimiento Pediátrico (> 1 mes)',
        recommendedDoseMgPerKgPerDay: 60,
        minDoseMgPerKgPerDay: 40,
        maxDoseMgPerKgPerDay: 60,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7 - 14 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: '15 mg/kg cada 6 horas (o 20 mg/kg cada 8 horas) IV infundido en al menos 60 minutos.'
      },
      {
        id: 'vanco-ind-mantenimiento-adulto',
        name: 'Mantenimiento Adulto Estándar',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 30,
        maxDoseMgPerKgPerDay: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Según foco clínico',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1500,
        description: '15 a 20 mg/kg cada 8 a 12 horas según el aclaramiento de creatinina (Cockcroft-Gault).'
      }
    ],
    whenToUse: [
      'Infecciones graves por Staphylococcus aureus resistente a meticilina (SAMR).',
      'Endocarditis infecciosa por enterococos o estafilococos.',
      'Meningitis bacteriana en combinación con ceftriaxona.',
      'Colitis pseudomembranosa por C. difficile (¡administrada exclusivamente por VÍA ORAL, no se absorbe!).'
    ],
    pearlsAndPitfalls: [
      'Síndrome de Hombre Rojo (Reacción a la infusión): Eritema, prurito y flushing en cabeza/cuello mediado por liberación no inmune de histamina. Prevención: Infundir a no más de 10 mg/minuto (mínimo 60 minutos para 1 g, 120 minutos para 2 g).',
      'Monitorización Terapéutica (PK/PD): La meta actual es una relación AUC24/MIC de 400 a 600 (o niveles valle entre 15 y 20 mcg/mL en infecciones graves). Medir nivel valle justo antes de la 4ta dosis.',
      'Nefrotoxicidad sinérgica: Se incrementa notablemente cuando se combina con Piperacilina/Tazobactam o Aminoglucósidos.',
      'Dosificación por peso real: Se dosifica según el peso corporal total real del paciente, no por peso ideal.'
    ],
    monitoringAndSideEffects: [
      'Creatinina sérica y nitrógeno ureico (función renal seriada).',
      'Niveles plasmáticos valle (trough levels).',
      'Ototoxicidad vestibular o auditiva (infrecuente salvo con dosis excesivas o nefropatía).'
    ],
    evidenceAndSources: [
      {
        title: 'Therapeutic monitoring of vancomycin for serious methicillin-resistant S. aureus infections: Revised Consensus Guidelines',
        source: 'Am J Health-Syst Pharm. 2020;77(11):835-864',
        summary: 'Recomienda monitorización basada en AUC/MIC (400-600) guiada por farmacocinética bayesiana para maximizar eficacia y reducir nefrotoxicidad.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 50 mL/min', adjustmentText: '15-20 mg/kg cada 12 horas', cautionLevel: 'normal' },
      { crClThreshold: 'FG 20 - 49 mL/min', adjustmentText: '15 mg/kg cada 24 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'FG < 20 mL/min', adjustmentText: 'Dosis de carga (15-20 mg/kg) y luego redosificar sólo según niveles valle < 15 mcg/mL', cautionLevel: 'severe' },
      { crClThreshold: 'Hemodiálisis intermitente', adjustmentText: 'Carga 20 mg/kg; mantenimiento 500-1000 mg tras cada sesión según niveles', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'salbutamol',
    name: 'Salbutamol (Albuterol)',
    commercialNames: ['Ventolin', 'Salbutol', 'Aerolin', 'ProAir'],
    category: 'Urgencias / Respiratorio',
    therapeuticClass: 'Agonista beta-2 adrenérgico de acción corta (SABA)',
    badgeText: 'Broncodilatador de rescate crisis asmática',
    shortDescription: 'Broncodilatador de acción rápida para el alivio del broncoespasmo en asma y bronquiolitis seleccionada.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'salbu-inhalador-100mcg',
        name: 'Inhalador de dosis medida (MDI) 100 mcg / pulsación',
        amountMg: 0.1, // 100 mcg = 0.1 mg
        volumeMl: 1,
        form: 'inhaler',
        unit: 'puffs (inhalaciones)',
        notes: '200 dosis por frasco. ¡Siempre usar con cámara de inhalación (aerocámara)!'
      },
      {
        id: 'salbu-gotas-nebu-5mg',
        name: 'Solución para Nebulización 5 mg / mL (0.5%)',
        amountMg: 5,
        volumeMl: 1,
        form: 'drops',
        unit: 'gotas / mL',
        notes: '1 mL = 20 gotas = 5 mg (1 gota = 0.25 mg)'
      }
    ],
    indications: [
      {
        id: 'salbu-ind-crisis-puff',
        name: 'Crisis Asmática Leve-Moderada (MDI con Cámara)',
        fixedAdultDoseMg: 4, // represent 4 puffs
        frequencyPerDay: 3,
        intervalHours: 1,
        durationDays: 'Según evolución clínica',
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 8,
        description: 'Niños: 2 a 4 puffs cada 20 minutos durante la primera hora. Adultos: 4 a 8 puffs cada 20 minutos.'
      },
      {
        id: 'salbu-ind-nebu-pediatrica',
        name: 'Crisis Asmática Severa (Nebulización Continua / Frecuente)',
        recommendedDoseMgPerKgPerDay: 0.15, // mg/kg/dosis
        minDoseMgPerKgPerDay: 0.15,
        maxDoseMgPerKgPerDay: 0.3,
        isDosePerKgPerDose: true,
        frequencyPerDay: 3,
        intervalHours: 1,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 5,
        description: '0.15 mg/kg por dosis (mínimo 1.25 mg = 0.25 mL = 5 gotas; máximo 5 mg = 1 mL = 20 gotas) en 3 mL de SSN 0.9% con O2 a 6-8 L/min.'
      }
    ],
    whenToUse: [
      'Tratamiento de rescate del broncoespasmo agudo en asma bronquial.',
      'Prevención del broncoespasmo inducido por ejercicio (2 puffs 15 min antes).',
      'Crisis obstructiva respiratoria en pacientes con EPOC.',
      'Manejo de hiperpotasemia grave (facilita el shift intracelular de potasio).'
    ],
    pearlsAndPitfalls: [
      'MDI con espaciador vs Nebulizador: Múltiples metaanálisis han demostrado que 4 a 8 puffs de salbutamol con aerocámara tienen igual o superior eficacia broncodilatadora que una nebulización, con menores efectos adversos (taquicardia) y menor dispersión de aerosoles.',
      'Técnica inhalatoria: Agitar el MDI, acoplar a la aerocámara, aplicar 1 solo puff por vez y permitir 5 a 6 respiraciones tranquilas antes del siguiente puff.',
      'Temblor distal y taquicardia refleja: Efectos beta-adrenérgicos predecibles que disminuyen con el uso repetido.',
      'Hipopotasemia e hiperlactatemia transitoria: Ocurren tras nebulizaciones continuas o dosis elevadas.'
    ],
    monitoringAndSideEffects: [
      'Frecuencia cardíaca y oximetría de pulso (SpO2).',
      'Signos de dificultad respiratoria (tiraje intercostal, aleteo nasal, estridor).',
      'Potasio sérico en crisis severas tratadas con dosis altas.'
    ],
    evidenceAndSources: [
      {
        title: 'Global Initiative for Asthma (GINA) 2023 Guidelines',
        source: 'GINA Executive Summary 2023',
        summary: 'Enfatiza el uso de cámara espaciadora como técnica preferida sobre la nebulización tradicional para crisis asmáticas en urgencias.'
      }
    ]
  },
  {
    id: 'dexametasona',
    name: 'Dexametasona',
    commercialNames: ['Decadron', 'Fortecortin', 'Alin'],
    category: 'Corticoides',
    therapeuticClass: 'Glucocorticoide sintético de alta potencia y larga duración',
    badgeText: 'Crup / Laringotraqueítis aguda y antiemesis',
    shortDescription: 'Glucocorticoide potente (potencia 25-30 veces superior a hidrocortisona) con nula actividad mineralocorticoide.',
    availableRoutes: ['oral', 'iv', 'im'],
    concentrations: [
      {
        id: 'dexa-amp-4mg',
        name: 'Ampolla 4 mg / 1 mL',
        amountMg: 4,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Apta vía IV, IM y oral directa en urgencias pediátricas'
      },
      {
        id: 'dexa-amp-8mg',
        name: 'Ampolla 8 mg / 2 mL',
        amountMg: 8,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Equivale a 4 mg/mL'
      },
      {
        id: 'dexa-comp-4mg',
        name: 'Comprimidos 4 mg',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Adultos o edema cerebral'
      }
    ],
    indications: [
      {
        id: 'dexa-ind-crup',
        name: 'Crup (Laringotraqueítis Aguda Pediátrica)',
        recommendedDoseMgPerKgPerDay: 0.15, // isDosePerKgPerDose = true
        minDoseMgPerKgPerDay: 0.15,
        maxDoseMgPerKgPerDay: 0.6,
        isDosePerKgPerDose: true,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única (repetir a las 24h sólo si persiste estridor)',
        maxDailyDoseMg: 16,
        maxSingleDoseMg: 10,
        description: 'Dosis única de 0.15 mg/kg (en casos leves-moderados) a 0.6 mg/kg vía oral o parenteral. Máximo 10-16 mg.'
      },
      {
        id: 'dexa-ind-edema-cerebral',
        name: 'Edema Cerebral / Tumor SNC Adulto',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3 - 7 días en pauta descendente',
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 10,
        description: 'Dosis de carga de 10 mg IV seguida de 4 mg cada 6 horas IV/oral.'
      }
    ],
    whenToUse: [
      'Laringitis estridulosa / Crup pediátrico de cualquier intensidad (reduce estancia hospitalaria e intubación).',
      'Profilaxis de náuseas y vómitos postoperatorios (NVPO) o inducidos por quimioterapia.',
      'Edema cerebral peritumoral o por radioterapia.',
      'Coadyuvante en meningitis bacteriana por S. pneumoniae antes o con la 1ra dosis de antibiótico.'
    ],
    pearlsAndPitfalls: [
      'Perla en Crup: La dosis de 0.15 mg/kg ha demostrado ser tan eficaz como la dosis clásica de 0.6 mg/kg para el alivio del estridor y la reducción de consultas a urgencias.',
      'Vía oral de la ampolla inyectable: La solución inyectable IV/IM puede administrarse por vía oral mezclada con unas gotas de jarabe dulce o jugo para mejorar el sabor amargo si no se dispone de solución oral.',
      'Vida media biológica prolongada: Efecto de 36 a 54 horas; por ello, una única dosis suele ser suficiente en la mayoría de los casos de crup.',
      'Evitar en infecciones fúngicas sistémicas activas no tratadas.'
    ],
    monitoringAndSideEffects: [
      'Hiperglucemia transitoria en pacientes diabéticos.',
      'Insomnio, irritabilidad y euforia/cambios del humor.',
      'Molestias epigástricas.'
    ],
    evidenceAndSources: [
      {
        title: 'Glucocorticoids for croup in children',
        source: 'Cochrane Database of Systematic Reviews. 2018;8(8):CD001955',
        summary: 'Los corticoides son el pilar terapéutico incuestionable del crup; 0.15 mg/kg de dexametasona es seguro y eficaz.'
      }
    ]
  },
  {
    id: 'metronidazol',
    name: 'Metronidazol',
    commercialNames: ['Flagyl', 'Servizol', 'Flegyl'],
    category: 'Gastroenterología',
    therapeuticClass: 'Nitroimidazol antibacteriano y antiprotozoario',
    badgeText: 'Anaerobios, giardiasis y amebiasis',
    shortDescription: 'Tratamiento de elección para bacterias anaerobias intraabdominales y protozoarios intestinales.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'metro-susp-250',
        name: 'Suspensión 250 mg / 5 mL (Benzoilmetronidazol)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: 'Equivale a 50 mg/mL'
      },
      {
        id: 'metro-comp-500',
        name: 'Comprimidos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Adultos'
      },
      {
        id: 'metro-iv-500',
        name: 'Vial Perfusión IV 500 mg / 100 mL',
        amountMg: 500,
        volumeMl: 100,
        form: 'vial',
        unit: 'mL',
        notes: 'Concentración 5 mg/mL'
      }
    ],
    indications: [
      {
        id: 'metro-ind-giardia',
        name: 'Giardiasis Intestinal Pediátrica',
        recommendedDoseMgPerKgPerDay: 15,
        minDoseMgPerKgPerDay: 15,
        maxDoseMgPerKgPerDay: 30,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5 - 7 días',
        maxDailyDoseMg: 750,
        maxSingleDoseMg: 250,
        description: '15 a 30 mg/kg/día fraccionados cada 8 horas durante 5 a 7 días.'
      },
      {
        id: 'metro-ind-anaerobios',
        name: 'Infección por Anaerobios / Abdominal Adultos',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 - 14 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        description: '500 mg IV u oral cada 8 horas.'
      }
    ],
    whenToUse: [
      'Infecciones intraabdominales quirúrgicas (abscesos, apendicitis perforada, peritonitis) asociado a cobertura contra Gram negativos.',
      'Giardiasis, amebiasis intestinal y hepática, tricomoniasis.',
      'Vaginosis bacteriana.'
    ],
    pearlsAndPitfalls: [
      'Efecto Antabús / Disulfiram: Contraindicada la ingesta concomitante de alcohol hasta 48 horas tras finalizar el tratamiento (produce náuseas intensas, rubor, taquicardia y vómitos).',
      'Sabor metálico desagradable muy común que puede reducir la adherencia terapéutica en pediatría.',
      'Coloración oscura de la orina (marrón-rojiza) por metabolitos inofensivos; advertir al paciente.'
    ],
    monitoringAndSideEffects: [
      'Sabor metálico y dispepsia.',
      'Neuropatía periférica y ataxia con tratamientos prolongados.',
      'Leucopenia reversible leve.'
    ],
    evidenceAndSources: [
      {
        title: 'Guidelines for the Management of Intra-abdominal Infections',
        source: 'Surgical Infection Society and IDSA Guidelines',
        summary: 'Metronidazol es el agente antianaerobio clásico de referencia para patógenos del tracto colónico.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 50 mL/min', adjustmentText: 'Dosis estándar', cautionLevel: 'normal' },
      { crClThreshold: 'FG 10 - 50 mL/min', adjustmentText: '100% de la dosis cada 12 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'FG < 10 mL/min', adjustmentText: '50% de la dosis habitual cada 12 horas', cautionLevel: 'severe' },
      { crClThreshold: 'Hemodiálisis', adjustmentText: 'Administrar dosis suplementaria post-diálisis', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'gentamicina',
    name: 'Gentamicina',
    commercialNames: ['GentaGobens', 'Gentamicina sulfato', 'Gentalyn'],
    category: 'Antibióticos',
    therapeuticClass: 'Aminoglucósido bactericida (Unión subunidad ribosómica 30S)',
    badgeText: 'Dosis única diaria - Gram negativos',
    shortDescription: 'Potente antibacteriano bactericida dependiente de concentración frente a bacilos Gram negativos aerobios y sinergia en endocarditis.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'genta-amp-80mg',
        name: 'Ampolla 80 mg / 2 mL',
        amountMg: 80,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Equivale a 40 mg/mL'
      },
      {
        id: 'genta-amp-20mg',
        name: 'Ampolla pediátrica 20 mg / 2 mL',
        amountMg: 20,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Equivale a 10 mg/mL'
      }
    ],
    indications: [
      {
        id: 'genta-ind-dosis-unica',
        name: 'Dosis Única Diaria (DUD / Dosis Extendida) Adultos',
        recommendedDoseMgPerKgPerDay: 5, // mg/kg/dosis diaria
        minDoseMgPerKgPerDay: 5,
        maxDoseMgPerKgPerDay: 7,
        isDosePerKgPerDose: true,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3 - 5 días',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        description: '5 a 7 mg/kg en infusión IV de 30-60 minutos cada 24 horas (peso ideal o peso ajustado en obesos).'
      },
      {
        id: 'genta-ind-pediatrica',
        name: 'Sepsis Neonatal / Infección Pediátrica',
        recommendedDoseMgPerKgPerDay: 7.5,
        minDoseMgPerKgPerDay: 5,
        maxDoseMgPerKgPerDay: 7.5,
        isDosePerKgPerDose: true,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según evolución clínica',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 300,
        description: '7.5 mg/kg cada 24 horas en lactantes y niños (o 4-5 mg/kg en neonatos a término cada 24-36h según edad gestacional).'
      }
    ],
    whenToUse: [
      'Pielonefritis aguda grave o sepsis de origen urinario.',
      'Sepsis neonatal precoz combinada con ampicilina.',
      'Sinergia bactericida en endocarditis por enterococo o estafilococo (dosis baja 1 mg/kg cada 8h).',
      'Infecciones intraabdominales nosocomiales graves.'
    ],
    pearlsAndPitfalls: [
      'Bactericida dependiente de concentración: La eficacia clínica se correlaciona con el pico plasmático (Cmax/MIC > 8-10). La pauta de Dosis Única Diaria maximiza este pico y reduce la acumulación en la corteza renal.',
      'Efecto post-antibiótico prolongado: Permite mantener la supresión bacteriana aún cuando los niveles séricos caigan por debajo de la MIC.',
      'Nefrotoxicidad y Ototoxicidad: Monitorizar creatinina sérica. Si el tratamiento dura más de 48-72 horas, medir niveles valle justo antes de la siguiente dosis (< 1 mcg/mL).'
    ],
    monitoringAndSideEffects: [
      'Nivel plasmático valle (< 1 mcg/mL) para evitar acumulación.',
      'Creatinina sérica basal y cada 48-72 horas.',
      'Evaluación auditiva y vestibular en tratamientos de más de 5 días.'
    ],
    evidenceAndSources: [
      {
        title: 'Once-daily aminoglycoside dosing in immunocompetent adults: a meta-analysis',
        source: 'Lancet. 1996;347(9015):1610-1615',
        summary: 'Demuestra igual o menor nefrotoxicidad y eficacia bacteriológica idéntica de la dosis única diaria frente a la pauta fraccionada tradicional.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'FG > 60 mL/min', adjustmentText: '100% de la dosis cada 24 horas', cautionLevel: 'normal' },
      { crClThreshold: 'FG 40 - 59 mL/min', adjustmentText: '100% de la dosis cada 36 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'FG 20 - 39 mL/min', adjustmentText: '100% de la dosis cada 48 horas', cautionLevel: 'severe' },
      { crClThreshold: 'FG < 20 mL/min', adjustmentText: 'Dosis inicial de 2-3 mg/kg y redosificar sólo según niveles plasmáticos', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'omeprazol',
    name: 'Omeprazol',
    commercialNames: ['Prilosec', 'Losec', 'Mopral', 'Ulceral'],
    category: 'Gastroenterología',
    therapeuticClass: 'Inhibidor de la bomba de protones (IBP)',
    badgeText: 'Supresor ácido gástrico',
    shortDescription: 'Inhibe de forma irreversible la H+/K+ ATPasa gástrica para tratamiento de reflujo, gastritis y profilaxis de úlcera.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'ome-comp-20mg',
        name: 'Cápsulas gastro-resistentes 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'No masticar ni triturar los microgránulos'
      },
      {
        id: 'ome-vial-40mg',
        name: 'Vial IV 40 mg polvo liofilizado',
        amountMg: 40,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Inyección lenta en 5 min o infusión en 100 mL SSN en 20-30 min'
      },
      {
        id: 'ome-susp-magistral-2mg-ml',
        name: 'Fórmula Magistral Suspensión Oral 2 mg / mL',
        amountMg: 2,
        volumeMl: 1,
        form: 'suspension',
        unit: 'mL',
        notes: 'Preparada en bicarbonato sódico para pediatría'
      }
    ],
    indications: [
      {
        id: 'ome-ind-pediatrico-reflujo',
        name: 'ERGE / Esofagitis Pediátrica',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 0.7,
        maxDoseMgPerKgPerDay: 1.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4 - 8 semanas',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '0.7 a 1 mg/kg 1 vez al día en ayunas (30 minutos antes del desayuno).'
      },
      {
        id: 'ome-ind-adulto-erge',
        name: 'Adultos: ERGE / Gastritis / Profilaxis',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4 - 8 semanas',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 40,
        description: '20 a 40 mg vía oral cada 24 horas por la mañana 30 minutos antes del desayuno.'
      }
    ],
    whenToUse: [
      'Enfermedad por Reflujo Gastroesofágico (ERGE) sintomática o con esofagitis erosiva.',
      'Úlcera gástrica o duodenal y erradicación de Helicobacter pylori.',
      'Profilaxis de sangrado digestivo por úlcera de estrés en pacientes críticos en UCI.',
      'Protección gástrica en pacientes de alto riesgo tratados crónicamente con AINEs.'
    ],
    pearlsAndPitfalls: [
      'Momento de administración: Debe tomarse estrictamente 30 a 60 minutos ANTES de la primera comida del día, ya que bloquea selectivamente las bombas de protones activadas durante la digestión.',
      'No triturar cápsulas: Los microgránulos tienen cubierta entérica para proteger el fármaco de la degradación ácida en el estómago.',
      'Uso prolongado innecesario: Asociado a hipomagnesemia, déficit de vitamina B12, fracturas por fragilidad e infecciones entéricas.'
    ],
    monitoringAndSideEffects: [
      'Cefalea y diarrea leve transitoria.',
      'Magnesio sérico en tratamientos mayores a 1 año.'
    ],
    evidenceAndSources: [
      {
        title: 'ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease',
        source: 'Am J Gastroenterol. 2022;117(1):27-56',
        summary: 'Los IBPs constituyen la terapia médica más efectiva para cicatrizar esofagitis y controlar síntomas de ERGE.'
      }
    ]
  }
];

export interface InfusionProtocol {
  id: string;
  drugName: string;
  indication: string;
  defaultConcentration: {
    drugAmountMg: number;
    solutionVolumeMl: number; // e.g. 8 mg in 100 mL = 80 mcg/mL
    diluent: string;
  };
  doseUnit: 'mcg/kg/min' | 'mcg/min' | 'mg/h' | 'UI/h';
  typicalDoseRange: {
    min: number;
    initial: number;
    max: number;
  };
  clinicalTips: string;
}

export const INFUSION_PROTOCOLS: InfusionProtocol[] = [
  {
    id: 'noradrenalina',
    drugName: 'Noradrenalina (Norepinefrina)',
    indication: 'Shock Séptico / Vasodilatador (PAM diana ≥ 65 mmHg)',
    defaultConcentration: {
      drugAmountMg: 8, // 2 ampollas de 4 mg
      solutionVolumeMl: 100, // 8 mg en 100 mL D5% = 80 mcg/mL
      diluent: 'Dextrosa 5% en Agua'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1,
      max: 1.5
    },
    clinicalTips: 'Vasopresor de 1ra elección en shock séptico. Administrar preferiblemente por Vía Venosa Central (VVC) para evitar extravasación y necrosis.'
  },
  {
    id: 'fentanilo',
    drugName: 'Fentanilo',
    indication: 'Sedación y Analgesia en UCI / Ventilación Mecánica',
    defaultConcentration: {
      drugAmountMg: 1, // 2 ampollas de 500 mcg = 1000 mcg
      solutionVolumeMl: 100, // 10 mcg/mL
      diluent: 'Solución Fisiológica 0.9%'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.02,
      initial: 0.03,
      max: 0.08
    },
    clinicalTips: 'Opioide de acción rápida. Monitorizar escala RASS o CPOT. Riesgo de acumulación en infusión prolongada (>48h).'
  },
  {
    id: 'midazolam',
    drugName: 'Midazolam',
    indication: 'Sedación Continua en UCI / Estatus Epiléptico',
    defaultConcentration: {
      drugAmountMg: 100, // 2 ampollas de 50 mg
      solutionVolumeMl: 100, // 1 mg/mL
      diluent: 'Solución Fisiológica 0.9%'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.5,
      initial: 1.0,
      max: 4.0
    },
    clinicalTips: 'Benzodiacepina lipofílica con metabolito activo que se acumula en falla renal y hepática.'
  },
  {
    id: 'insulina-regular',
    drugName: 'Insulina Regular Rápida',
    indication: 'Cetoacidosis Diabética (CAD) / Estado Hiperosmolar',
    defaultConcentration: {
      drugAmountMg: 100, // 100 UI en 100 mL = 1 UI/mL
      solutionVolumeMl: 100,
      diluent: 'Solución Salina 0.9%'
    },
    doseUnit: 'UI/h',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1, // 0.1 UI/kg/h
      max: 0.2
    },
    clinicalTips: 'Purgar 20-30 mL por el equipo de infusión antes de conectar (la insulina se adhiere al plástico del tubo). Objetivo CAD: descenso de glucemia 50-75 mg/dL por hora.'
  }
];
