import { Medication } from '../types';

export const ANALGESICS_MEDICATIONS: Medication[] = [
  {
    id: 'paracetamol',
    name: 'Acetaminofén (Paracetamol)',
    commercialNames: ['Tylenol', 'Panadol', 'Tempra', 'Acetagen', 'Perfalgan'],
    category: 'Analgesia / AINEs',
    atcCode: 'N02BE01',
    therapeuticClass: 'Analgésico y Antipirético de Acción Central (SRS 2025)',
    badgeText: 'SRS 2025 · Primera Línea',
    shortDescription: 'Fármaco de primera línea para fiebre y dolor leve a moderado en neonatos, lactantes, niños y adultos.',
    availableRoutes: ['oral', 'iv', 'rectal'],
    concentrations: [
      {
        id: 'para-jarabe-120',
        name: 'Líquidos Orales (Jarabe) 120 mg / 5 mL (SRS 2025)',
        amountMg: 120,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: 'Presentación oficial pediátrica SRS 2025 (24 mg/mL)'
      },
      {
        id: 'para-jarabe-160',
        name: 'Líquidos Orales 160 mg / 5 mL (SRS 2025)',
        amountMg: 160,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: 'Presentación pediátrica oficial SRS 2025 (32 mg/mL)'
      },
      {
        id: 'para-comp-500',
        name: 'Sólidos Orales (Tabletas) 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis estándar para niños >40 kg y adultos'
      },
      {
        id: 'para-supo-125',
        name: 'Supositorio Rectal 125 mg (SRS 2025)',
        amountMg: 125,
        volumeMl: 1,
        form: 'tablets',
        unit: 'supositorio',
        notes: 'Presentación oficial para intolerancia oral'
      },
      {
        id: 'para-supo-300',
        name: 'Supositorio Rectal 300 mg (SRS 2025)',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'supositorio',
        notes: 'Presentación oficial para niños mayores'
      },
      {
        id: 'para-iv-1000',
        name: 'Líquidos Parenterales 1000 mg / 100 mL (10 mg/mL) (SRS 2025)',
        amountMg: 1000,
        volumeMl: 100,
        form: 'vial',
        unit: 'mL',
        notes: 'Solución para infusión intravenosa en 15 minutos'
      }
    ],
    indications: [
      {
        id: 'para-ind-pediatrico',
        name: 'Fiebre y Dolor Agudo Pediátrico',
        recommendedDoseMgPerKgPerDay: 15,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 15,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        isDosePerKgPerDose: true,
        description: '10 a 15 mg/kg por toma cada 6 horas (máximo 60-75 mg/kg/día o 1 g por toma).'
      },
      {
        id: 'para-ind-adulto',
        name: 'Adultos: 500 mg a 1000 mg cada 6 a 8 horas',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3-5 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        description: '500-1000 mg cada 6 a 8 horas (máximo 3 g/día en ancianos o desnutridos; 4 g/día límite absoluto).'
      }
    ],
    whenToUse: [
      'Primera elección para fiebre en niños de cualquier edad (incluidos recién nacidos y lactantes).',
      'Dolor leve a moderado (cefalea, otalgia, odinofagia, post-vacunación).',
      'Pacientes con úlcera péptica, asma inducida por AINEs o dengue (donde el ibuprofeno está contraindicado).'
    ],
    pearlsAndPitfalls: [
      '¡Atención a la concentración del jarabe (120 vs 160 mg/5 mL)! Indicar siempre los mL exactos a los cuidadores.',
      'Antídoto específico ante intoxicación aguda (>150 mg/kg): N-acetilcisteína (NAC) temprana.',
      'Seguro en sospecha de Dengue, Chikungunya y Zika (los AINEs aumentan riesgo hemorrágico).'
    ],
    monitoringAndSideEffects: ['Hepatotoxicidad por sobredosis (metabolito reactivo NAPQI).'],
    evidenceAndSources: [
      {
        title: 'AAP Clinical Report: Fever and Antipyretic Use in Children',
        source: 'Pediatrics. 2011;127(3):580-7',
        summary: 'La dosis recomendada de paracetamol es 10-15 mg/kg por toma cada 4-6 horas sin superar 5 dosis al día.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador N02BE01',
        summary: 'Acetaminofén 500 mg VO, 120-160 mg/5mL líquidos orales, 125-300 mg supositorios y 1000 mg IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis cada 6 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 50 mL/min', adjustmentText: 'Espaciar intervalo a cada 8 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Espaciar intervalo a cada 8-12 horas', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'ibuprofeno',
    name: 'Ibuprofeno',
    commercialNames: ['Advil', 'Motrin', 'Dalsy', 'Espidifen'],
    category: 'Analgesia / AINEs',
    atcCode: 'M01AE01',
    therapeuticClass: 'Antiinflamatorio No Esteroideo (AINE) Derivado del Ácido Propiónico (SRS 2025)',
    badgeText: 'SRS 2025 · Antiinflamatorio',
    shortDescription: 'AINE de elección para dolor inflamatorio, fiebre refractaria, osteoartritis y dismenorrea en niños mayores de 3-6 meses y adultos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'ibu-susp-100',
        name: 'Suspensión Oral 100 mg / 5 mL (SRS 2025)',
        amountMg: 100,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: 'Presentación oficial pediátrica SRS 2025 (20 mg/mL)'
      },
      {
        id: 'ibu-comp-400',
        name: 'Comprimidos 400 mg (SRS 2025)',
        amountMg: 400,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial en comprimidos SRS 2025'
      }
    ],
    indications: [
      {
        id: 'ibu-ind-pediatrico',
        name: 'Fiebre y Dolor Inflamatorio Pediátrico (>6 meses)',
        recommendedDoseMgPerKgPerDay: 10,
        minDoseMgPerKgPerDay: 5,
        maxDoseMgPerKgPerDay: 10,
        fixedAdultDoseMg: 400,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3-5 días',
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 400,
        isDosePerKgPerDose: true,
        description: '5 a 10 mg/kg por toma cada 8 horas (máx 30-40 mg/kg/día o 400 mg por toma).'
      },
      {
        id: 'ibu-ind-adulto',
        name: 'Adultos: 400 mg cada 8 horas con alimentos',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 2400,
        maxSingleDoseMg: 800,
        description: '400 mg cada 8 horas vía oral (hasta 600-800 mg c/8h en artritis severa).'
      }
    ],
    whenToUse: [
      'Fiebre alta acompañada de dolor inflamatorio (otitis, faringitis, artritis idiopática juvenil).',
      'Dolor osteomuscular, esguinces, traumatismos y odontalgia.',
      'Dismenorrea primaria.'
    ],
    pearlsAndPitfalls: [
      'CONTRAINDICADO en sospecha de dengue (riesgo de hemorragia grave por antiagregación plaquetaria).',
      'No usar en lactantes deshidratados o <3 meses por riesgo de insuficiencia renal aguda prerrenal.',
      'Tomar siempre con alimentos para proteger la mucosa gástrica.'
    ],
    monitoringAndSideEffects: ['Gastritis, sangrado digestivo, disfunción renal en deshidratación.'],
    evidenceAndSources: [
      {
        title: 'Efficacy and Safety of Acetaminophen vs Ibuprofen for Treating Children’s Pain or Fever',
        source: 'JAMA Netw Open. 2020;3(10):e2022398',
        summary: 'Ibuprofeno ofrece un descenso térmico y alivio analgésico ligeramente más prolongado que paracetamol.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador M01AE01',
        summary: 'Ibuprofeno 400 mg comprimidos y 100 mg/5mL suspensión oral.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: 'Dosis habitual cada 8 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 50 mL/min', adjustmentText: 'Reducir dosis o espaciar intervalo; vigilar función renal', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Evitar su uso (los AINEs deterioran la hemodinámica glomerular)', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'diclofenaco',
    name: 'Diclofenaco Sódico',
    commercialNames: ['Voltaren', 'Cataflam', 'Liroken', 'Artren'],
    category: 'Analgesia / AINEs',
    atcCode: 'M01AB05',
    therapeuticClass: 'AINE Derivado del Ácido Fenilacético (SRS 2025)',
    badgeText: 'SRS 2025 · AINE',
    shortDescription: 'Potente antiinflamatorio y analgésico para cólico renal, dolor postoperatorio y crisis de gota aguda.',
    availableRoutes: ['oral', 'im'],
    concentrations: [
      {
        id: 'diclo-comp-50',
        name: 'Sólidos Orales 50 mg (SRS 2025)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Comprimidos con recubrimiento entérico'
      },
      {
        id: 'diclo-amp-25',
        name: 'Líquidos Parenterales 25 mg/mL (75 mg / 3 mL) Ampolla (SRS 2025)',
        amountMg: 75,
        volumeMl: 3,
        form: 'vial',
        unit: 'mL',
        notes: 'Uso exclusivo intramuscular profundo (glúteo)'
      }
    ],
    indications: [
      {
        id: 'diclo-ind-adult-oral',
        name: 'Dolor Inflamatorio Adulto Oral',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3-5 días',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 50,
        description: '50 mg cada 8 horas vía oral con alimentos.'
      },
      {
        id: 'diclo-ind-colico-renal',
        name: 'Cólico Nefrítico / Dolor Agudo IM Adulto',
        fixedAdultDoseMg: 75,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '1-2 días',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 75,
        description: '75 mg en inyección intramuscular profunda en cuadrante superior externo del glúteo.'
      },
      {
        id: 'diclo-ind-pediatrico',
        name: 'Pediátrico (>1 año): Dolor Inflamatorio / Artritis',
        recommendedDoseMgPerKgPerDay: 1.5,
        minDoseMgPerKgPerDay: 0.5,
        maxDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 50,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3 días',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 50,
        description: '0.5 a 1 mg/kg por toma cada 8-12 horas vía oral (máximo 2 mg/kg/día).'
      }
    ],
    whenToUse: [
      'Cólico nefrítico agudo (primera línea de alivio espasmódico-inflamatorio).',
      'Crisis agudas de gota y lumbalgia mecánica severa.',
      'Dolor postraumático o posquirúrgico moderado a severo.'
    ],
    pearlsAndPitfalls: [
      'Nunca inyectar por vía intravenosa directa si la ampolla no está aprobada específicamente para infusión.',
      'Riesgo cardiovascular aumentado con uso crónico en comparación con naproxeno.',
      'Administración IM profunda para prevenir necrosis grasa o síndrome de Nicolau.'
    ],
    monitoringAndSideEffects: ['Ulcera péptica, elevación de transaminasas, toxicidad renal en deshidratación.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador M01AB05',
        summary: 'Diclofenaco sódico 50 mg sólidos orales y 25 mg/mL líquidos parenterales IM.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 30 mL/min', adjustmentText: 'Usar la dosis mínima eficaz durante el menor tiempo posible', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: 'Contraindicado en falla renal moderada o severa', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'ketorolaco',
    name: 'Ketorolaco Trometamina',
    commercialNames: ['Toradol', 'Dolac', 'Ketorolac', 'Acular'],
    category: 'Analgesia / AINEs',
    atcCode: 'M01AB15',
    therapeuticClass: 'AINE Analgésico Potente de Corta Duración (SRS 2025)',
    badgeText: 'SRS 2025 · Analgésico Severo',
    shortDescription: 'Potente analgésico no opioide para dolor agudo postoperatorio o traumático moderado a severo; límite máximo de 5 días de tratamiento.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'keto-amp-30',
        name: 'Líquidos Parenterales 30 mg / mL Ampolla (SRS 2025)',
        amountMg: 30,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IM/IV'
      }
    ],
    indications: [
      {
        id: 'keto-ind-adult-iv',
        name: 'Dolor Agudo Severo Adulto IM/IV',
        fixedAdultDoseMg: 30,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Máximo 2-5 días',
        maxDailyDoseMg: 120,
        maxSingleDoseMg: 30,
        description: '30 mg cada 6 horas IV o IM según dolor (máx 120 mg/día en adultos jóvenes; 60 mg/día en ancianos o peso < 50 kg).'
      },
      {
        id: 'keto-ind-peds',
        name: 'Dolor Postquirúrgico Pediátrico (>2 años)',
        recommendedDoseMgPerKgPerDay: 0.5,
        minDoseMgPerKgPerDay: 0.5,
        maxDoseMgPerKgPerDay: 1,
        fixedAdultDoseMg: 30,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Máximo 48-72 horas',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 15,
        isDosePerKgPerDose: true,
        description: '0.5 mg/kg por dosis IV cada 6 u 8 horas (máximo 15 mg por dosis y máximo 48-72 horas).'
      }
    ],
    whenToUse: [
      'Control del dolor agudo postoperatorio en salas de recuperación.',
      'Alivio del dolor moderado a severo por cólico renal o fracturas agudas.'
    ],
    pearlsAndPitfalls: [
      '¡REGLA DE ORO!: Duración MÁXIMA de 5 días en adultos y 48 horas en niños por alto riesgo de hemorragia digestiva e insuficiencia renal aguda.',
      'CONTRAINDICADO antes de cirugías mayores con riesgo de hemorragia activa o en pacientes con sospecha de sangrado intracraneal.',
      'No tiene efecto sedante ni depresor respiratorio como los opioides.'
    ],
    monitoringAndSideEffects: ['Función renal (creatinina), diuresis, hematocrito/sangrado gastrointestinal.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador M01AB15',
        summary: 'Ketorolaco trometamina 30 mg/mL líquidos parenterales IM, IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: 'Dosis estándar con límite estricto de 5 días', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 50 mL/min', adjustmentText: 'Contraindicado: alto riesgo de necrosis papilar y falla renal', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'tramadol',
    name: 'Tramadol Clorhidrato',
    commercialNames: ['Tramal', 'Zaldiar', 'Adolonta', 'Tradol'],
    category: 'Analgesia / AINEs',
    atcCode: 'N02AX02',
    therapeuticClass: 'Opioide Débil Atípico (Agonista mu + Inhibidor recaptación monoaminas) (SRS 2025)',
    badgeText: 'SRS 2025 · Opioide',
    shortDescription: 'Opioide menor para dolor moderado a intenso postquirúrgico, traumatológico y oncológico.',
    availableRoutes: ['iv', 'im', 'oral'],
    concentrations: [
      {
        id: 'tram-amp-50',
        name: 'Líquidos Parenterales 50 mg / mL Ampolla (SRS 2025)',
        amountMg: 50,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IM, IV, SC'
      },
      {
        id: 'tram-gotas-100',
        name: 'Líquidos Orales (Gotas) 100 mg / mL (SRS 2025)',
        amountMg: 100,
        volumeMl: 1,
        form: 'drops',
        unit: 'gotas',
        notes: 'Presentación oficial SRS 2025 (1 gota ≈ 2.5 mg; 20 gotas = 50 mg)'
      },
      {
        id: 'tram-comp-50',
        name: 'Sólidos Orales 50 mg (SRS 2025)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Presentación oficial SRS 2025'
      }
    ],
    indications: [
      {
        id: 'tram-ind-adult-iv',
        name: 'Dolor Moderado a Severo Adulto IV/IM',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3-7 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 100,
        description: '50 a 100 mg cada 6-8 horas IV lenta (diluido en 100 mL de solución salina) o IM.'
      },
      {
        id: 'tram-ind-pediatrico',
        name: 'Pediátrico (>12 años): Dolor Agudo',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 1.5,
        fixedAdultDoseMg: 50,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3-5 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 100,
        isDosePerKgPerDose: true,
        description: '1 a 1.5 mg/kg por toma cada 8 horas (máx 100 mg por toma o 400 mg/día).'
      }
    ],
    whenToUse: [
      'Dolor agudo moderado que no responde a paracetamol ni AINEs solos.',
      'Dolor postraumático, fracturas y postoperatorio.',
      'Dolor neuropático o mixto en combinación con coadyuvantes.'
    ],
    pearlsAndPitfalls: [
      'CONTRAINDICADO en niños <12 años (advertencia FDA por variabilidad en metabolizadores ultrarrápidos CYP2D6 con riesgo de depresión respiratoria mortal).',
      'Infundir siempre lento por vía IV (en al menos 15-20 minutos) para evitar náuseas, vómitos y mareos bruscos.',
      'Riesgo de síndrome serotoninérgico si se asocia a ISRS (fluoxetina, sertralina) o tramadol a altas dosis.',
      'Antídoto parcial: Naloxona (revierte la depresión respiratoria pero puede aumentar riesgo de convulsiones).'
    ],
    monitoringAndSideEffects: ['Náuseas y vómitos (coadministrar con antiemético si es necesario), mareo, somnolencia, estreñimiento.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador N02AX02',
        summary: 'Tramadol 50 mg/mL parenteral, 100 mg/mL gotas y 50 mg cápsulas.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 30 mL/min', adjustmentText: 'Dosis estándar cada 6-8 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: 'Espaciar a cada 12 horas; máximo 200 mg/día', cautionLevel: 'moderate' }
    ]
  },
  {
    id: 'morfina',
    name: 'Morfina Sulfato',
    commercialNames: ['Morfina', 'Sevredol', 'MST Continus', 'Oramorph'],
    category: 'Analgesia / AINEs',
    atcCode: 'N02AA01',
    therapeuticClass: 'Opioide Mayor Agonista Puro de Receptores Mu (SRS 2025)',
    badgeText: 'SRS 2025 · Opioide Mayor',
    shortDescription: 'Estándar de oro para el tratamiento del dolor severo oncológico, politrauma, edema agudo de pulmón cardiogénico e infarto de miocardio.',
    availableRoutes: ['iv', 'im', 'oral'],
    concentrations: [
      {
        id: 'morf-amp-10',
        name: 'Líquidos Parenterales 10 mg / mL Ampolla (SRS 2025)',
        amountMg: 10,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IM, IV, SC'
      },
      {
        id: 'morf-comp-30',
        name: 'Sólidos Orales 30 mg (SRS 2025)',
        amountMg: 30,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Comprimidos de morfina sulfato'
      }
    ],
    indications: [
      {
        id: 'morf-ind-adult-iv',
        name: 'Dolor Severo Agudo / IAM / EAP Adulto',
        fixedAdultDoseMg: 4,
        frequencyPerDay: 6,
        intervalHours: 4,
        durationDays: 'Según necesidad',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 10,
        description: '2 a 5 mg IV lento cada 5 a 15 minutos titulando según escala EVA y frecuencia respiratoria.'
      },
      {
        id: 'morf-ind-pediatrico',
        name: 'Dolor Severo Pediátrico IV (Bolo Lento)',
        recommendedDoseMgPerKgPerDay: 0.1,
        minDoseMgPerKgPerDay: 0.05,
        maxDoseMgPerKgPerDay: 0.1,
        fixedAdultDoseMg: 5,
        frequencyPerDay: 6,
        intervalHours: 4,
        durationDays: 'Según necesidad',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 5,
        isDosePerKgPerDose: true,
        description: '0.05 a 0.1 mg/kg por dosis IV lenta en 5 minutos cada 4 horas.'
      }
    ],
    whenToUse: [
      'Dolor agudo muy severo que no cede a otros analgésicos.',
      'Infarto agudo de miocardio (alivia el dolor y disminuye la precarga).',
      'Edema agudo de pulmón (vasodilatador venoso y ansiolítico).'
    ],
    pearlsAndPitfalls: [
      'Tener siempre lista Naloxona (0.4 mg/mL) al pie de cama por riesgo de depresión respiratoria.',
      'Libera histamina con vasodilatación e hipotensión; administrar despacio.',
      'En insuficiencia renal sus metabolitos activos (morfina-6-glucurónido) se acumulan provocando narcosis prolongada.'
    ],
    monitoringAndSideEffects: ['Frecuencia respiratoria, saturación de O2, escala de sedación, miosis, estreñimiento.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador N02AA01',
        summary: 'Morfina sulfato 10 mg/mL líquidos parenterales y 30 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis habitual', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 50 mL/min', adjustmentText: 'Reducir la dosis al 75% o espaciar intervalo cada 6-8 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Reducir al 50% de la dosis o preferir fentanilo (menor acumulación renal)', cautionLevel: 'severe' }
    ]
  }
];
