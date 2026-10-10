import { Medication } from '../types';

export const MEDSCAPE_ANALGESICS: Medication[] = [
  {
    id: 'naproxeno',
    name: 'Naproxeno',
    commercialNames: ['Aleve', 'Flanax', 'Naprosyn', 'Apronax', 'Dafloxen'],
    category: 'Analgesia / AINEs',
    atcCode: 'M01AE02',
    therapeuticClass: 'Antiinflamatorio No Esteroideo (AINE) Derivado del Ácido Propiónico',
    badgeText: 'AINE · Larga Acción',
    shortDescription: 'AINE no selectivo con vida media plasmática prolongada (12-15 horas). Considerado el AINE tradicional con el perfil cardiovascular aterotrombótico más favorable.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'napro-susp-125',
        name: 'Suspensión Oral 125 mg / 5 mL',
        amountMg: 125,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100
      },
      {
        id: 'napro-comp-250',
        name: 'Tabletas 250 mg',
        amountMg: 250,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'napro-comp-500',
        name: 'Tabletas 500 mg (Naproxeno Sódico 550 mg)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'napro-ind-dolor-adulto',
        name: 'Dolor Agudo Musculoesquelético / Dismenorrea / Migraña',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '3-7 días',
        maxDailyDoseMg: 1250,
        maxSingleDoseMg: 500,
        description: 'Dosis inicial de 500 mg, seguida de 250-500 mg cada 12 horas con alimentos.'
      },
      {
        id: 'napro-ind-artritis-adulto',
        name: 'Osteoartritis / Artritis Reumatoide / Gota Aguda',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Según indicación reumatológica',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 500,
        description: '500 mg cada 12 horas.'
      },
      {
        id: 'napro-ind-peds',
        name: 'Artritis Idiopática Juvenil / Dolor Pediátrico (>2 años)',
        recommendedDoseMgPerKgPerDay: 10,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 15,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Corto plazo o reumatológico',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 500,
        description: '10 mg/kg/día dividido cada 12 horas con alimentos (máximo 15 mg/kg/día o 1000 mg/día).'
      }
    ],
    whenToUse: [
      'Alivio de dolor osteomuscular agudo o crónico y dismenorrea primaria.',
      'AINE de primera elección si es mandatorio utilizar un antiinflamatorio en pacientes con riesgo cardiovascular elevado (menor riesgo de infarto relativo frente a diclofenaco o coxibs).',
      'Artritis idiopática juvenil en mayores de 2 años.'
    ],
    pearlsAndPitfalls: [
      'Menor riesgo cardiovascular aterotrombótico, pero IGUAL o mayor riesgo de sangrado gastrointestinal: asociar siempre un IBP (omeprazol/pantoprazol) en mayores de 65 años o antecedentes de úlcera.',
      'Tomar con alimentos para minimizar la dispepsia.',
      'Interfiere con el efecto cardioprotector de la aspirina: tomar aspirina al menos 30 minutos antes o 8 horas después del naproxeno.'
    ],
    monitoringAndSideEffects: [
      'Signos de hemorragia digestiva alta (melenas, anemia).',
      'Presión arterial (los AINEs pueden descompensar la hipertensión por retención hidrosalina).',
      'Función renal (especialmente si se asocia a IECA/ARA-II y diuréticos).'
    ],
    evidenceAndSources: [
      {
        title: 'PRECISION Trial on Cardiovascular Safety of Celecoxib vs Naproxen vs Ibuprofen',
        source: 'New England Journal of Medicine',
        year: '2022',
        summary: 'Confirmó que naproxeno a dosis de 500 mg c/12h mantiene un riesgo trombótico vascular bajo similar al basal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar con la menor duración posible.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Contraindicado por riesgo de insuficiencia renal aguda e hiperpotasemia.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 3.er Trimestre / Evitar desde sem 20',
      summary: 'Como todos los AINEs, provoca cierre prematuro del conducto arterioso fetal, oligohidramnios por disfunción renal fetal y prolongación del parto.',
      contraindicatedInTrimester: [3],
      clinicalAlternative: 'Paracetamol como analgésico de elección durante toda la gestación.',
      fetalRisks: ['Cierre prematuro del ductus arterioso', 'Oligohidramnios', 'Disfunción renal fetal']
    }
  },
  {
    id: 'celecoxib',
    name: 'Celecoxib',
    commercialNames: ['Celebrex', 'Celebra', 'Aclarex', 'Coxlec'],
    category: 'Analgesia / AINEs',
    atcCode: 'M01AH01',
    therapeuticClass: 'Antiinflamatorio No Esteroideo Inhibidor Selectivo de COX-2',
    badgeText: 'AINE · Selectivo COX-2 Gastroprotector',
    shortDescription: 'Inhibidor selectivo de la ciclooxigenasa-2 (COX-2). Provee eficacia analgésica y antiinflamatoria comparable a los AINEs tradicionales con una reducción significativa de úlceras y sangrado gastrointestinal.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'cele-cap-100',
        name: 'Cápsulas 100 mg',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'cele-cap-200',
        name: 'Cápsulas 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'cele-ind-osteoartritis',
        name: 'Osteoartritis / Dolor Articular Crónico',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según necesidad clínica',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200,
        description: '200 mg una vez al día o 100 mg cada 12 horas por vía oral.'
      },
      {
        id: 'cele-ind-dolor-agudo',
        name: 'Dolor Agudo / Dismenorrea Primaria / Posoperatorio',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3-5 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 400,
        description: 'Dosis inicial de 400 mg en toma única el primer día, seguida de 200 mg cada 12 horas si es necesario.'
      }
    ],
    whenToUse: [
      'Pacientes con dolor osteoarticular crónico y alto riesgo de complicaciones gastrointestinales (historia previa de úlcera, edad avanzada, uso concomitante de anticoagulantes o corticoides).',
      'Dolor posoperatorio en protocolos de recuperación acelerada multimodal (ERAS).',
      'Pacientes con intolerancia digestiva severa a AINEs no selectivos.'
    ],
    pearlsAndPitfalls: [
      'No inhibe la COX-1 plaquetaria: NO tiene efecto antiagregante plaquetario y NO sustituye a la aspirina en cardioprotección.',
      'Riesgo cardiovascular: En pacientes con cardiopatía isquémica previa, insuficiencia cardíaca descompensada o ictus reciente, los inhibidores selectivos de COX-2 incrementan el riesgo trombótico.',
      'Contiene un grupo sulfamida en su estructura química: precaución en pacientes con alergia grave previa a sulfonamidas.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica y signos de retención de líquidos / edemas maleolares.',
      'Función renal (la COX-2 es constitutiva en la mácula densa renal; los coxibs retienen sodio y reducen la filtración glomerular).',
      'Dispepsia y dolor abdominal.'
    ],
    evidenceAndSources: [
      {
        title: 'CONDOR Trial: Gastrointestinal Safety of Celecoxib vs Diclofenac plus Omeprazole',
        source: 'The Lancet',
        year: '2023',
        summary: 'Celecoxib demostró una reducción de 4 veces en eventos clínicamente significativos en todo el tracto gastrointestinal (alto y bajo).'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis habitual con precaución.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Contraindicado en insuficiencia renal severa.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 3.er Trimestre',
      summary: 'Inhibe la síntesis de prostaglandinas fetales indispensables para el mantenimiento de la permeabilidad ductal y la perfusión renal del feto.',
      contraindicatedInTrimester: [3],
      clinicalAlternative: 'Paracetamol.'
    }
  },
  {
    id: 'fentanilo',
    name: 'Fentanilo',
    commercialNames: ['Sublimaze', 'Fentanest', 'Durogesic', 'Fentora'],
    category: 'Analgesia / AINEs',
    atcCode: 'N01AH01',
    awareCategory: 'Access',
    therapeuticClass: 'Analgésico Opioide Mayor Potente (Agonista Puro Receptores Mu)',
    badgeText: 'Opioide Mayor · UCI / Urgencias',
    shortDescription: 'Opioide sintético lipofílico 50 a 100 veces más potente que la morfina. Inicio de acción casi inmediato (1-2 minutos) y estabilidad hemodinámica en analgesia crítica y anestesia.',
    availableRoutes: ['iv', 'im', 'sublingual'],
    concentrations: [
      {
        id: 'fent-amp-05',
        name: 'Ampolla Inyectable IV/IM 0.5 mg / 10 mL (50 mcg/mL)',
        amountMg: 0.5,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Concentración de 50 mcg/mL (0.05 mg/mL)'
      },
      {
        id: 'fent-amp-01',
        name: 'Ampolla Inyectable IV/IM 0.1 mg / 2 mL (50 mcg/mL)',
        amountMg: 0.1,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'fent-ind-bolo-adulto',
        name: 'Analgesia en Procedimientos / Dolor Agudo Severo en Urgencias',
        fixedAdultDoseMg: 0.05,
        frequencyPerDay: 4,
        intervalHours: 1,
        durationDays: 'Agudo',
        maxDailyDoseMg: 0.5,
        maxSingleDoseMg: 0.1,
        description: 'Bolo IV lento de 25 a 50 mcg (0.025-0.05 mg = 0.5-1 mL) en 2 a 3 minutos. Titular cada 15-30 minutos según escala de dolor y sedación.'
      },
      {
        id: 'fent-ind-peds',
        name: 'Analgesia Pediátrica en Urgencias / Cuidados Intensivos',
        recommendedDoseMgPerKgPerDay: 0.003,
        minDoseMgPerKgPerDay: 0.001,
        maxDoseMgPerKgPerDay: 0.005,
        fixedAdultDoseMg: 0.05,
        frequencyPerDay: 4,
        intervalHours: 1,
        durationDays: 'Agudo',
        maxDailyDoseMg: 0.2,
        maxSingleDoseMg: 0.05,
        isDosePerKgPerDose: true,
        description: '1 a 2 mcg/kg (0.001-0.002 mg/kg) IV lento en 3 a 5 minutos. Monitorización continua estricta de oximetría.'
      }
    ],
    whenToUse: [
      'Dolor agudo severo refractario a analgesia no opioide (politraumatismo, fracturas expuestas, pancreatitis aguda grave, quemaduras extensas).',
      'Analgesia y sedación en intubación de secuencia rápida y ventilación mecánica.',
      'Analgesia en pacientes con inestabilidad hemodinámica (menor liberación de histamina e hipotensión que morfina).'
    ],
    pearlsAndPitfalls: [
      '¡Tórax leñoso (rigidez de la pared torácica)!: Complicación grave potencialmente mortal por administración IV rápida de bolos de fentanilo; produce incapacidad para ventilar al paciente con bolsa-mascarilla. Tratamiento: Bloqueantes neuromusculares (succinilcolina/rocuronio) y reversión con Naloxona.',
      'Depresión respiratoria dosis-dependiente: antídoto inmediato es Naloxona (0.04 a 0.4 mg IV).',
      'No libera histamina, por lo que produce mucho menos prurito, broncoespasmo o vasodilatación refleja que la morfina.'
    ],
    monitoringAndSideEffects: [
      'Frecuencia respiratoria y saturación de oxígeno continuo (pulsioximetría).',
      'Nivel de sedación (Escala de Richmond RASS).',
      'Presión arterial y motilidad gastrointestinal (íleo paralítico en infusión prolongada).'
    ],
    evidenceAndSources: [
      {
        title: 'Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation, and Delirium (PADIS)',
        source: 'Critical Care Medicine',
        year: '2023',
        summary: 'Recomienda fentanilo como opioide de primera elección para dolor agudo en pacientes críticos por su rápido inicio y perfil cardiovascular favorable.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'De elección sobre morfina en insuficiencia renal; no produce metabolitos activos nefrotóxicos.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Uso Restringido a Emergencias / Analgesia Obstétrica Controlada',
      summary: 'Atraviesa rápidamente la placenta. El uso durante el trabajo de parto puede causar depresión respiratoria y letargia neonatal que requiere naloxona.',
      fetalRisks: ['Depresión respiratoria neonatal', 'Síndrome de abstinencia neonatal en uso crónico']
    }
  },
  {
    id: 'pregabalina',
    name: 'Pregabalina',
    commercialNames: ['Lyrica', 'Plenica', 'Martesia', 'Prefaxil'],
    category: 'Analgesia / AINEs',
    atcCode: 'N02BF02',
    therapeuticClass: 'Modulador de Canales de Calcio Dependientes de Voltaje (Alfa-2-Delta) · Antineuropático',
    badgeText: 'Dolor Neuropático · Primera Línea',
    shortDescription: 'Ligando selectivo de la subunidad alfa-2-delta de canales de calcio dependientes de voltaje en el SNC. Fármaco de primera línea para dolor neuropático periférico y central.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'prega-cap-75',
        name: 'Cápsulas 75 mg',
        amountMg: 75,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'prega-cap-150',
        name: 'Cápsulas 150 mg',
        amountMg: 150,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'prega-ind-neuropatico',
        name: 'Dolor Neuropático Periférico (Neuropatía Diabética, Neuralgia Posherpética)',
        fixedAdultDoseMg: 75,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 600,
        maxSingleDoseMg: 300,
        description: 'Dosis inicial de 75 mg cada 12 horas (o 75 mg en la noche en ancianos). Aumentar a 150 mg cada 12 horas a la semana según respuesta clínica (máximo 600 mg/día).'
      },
      {
        id: 'prega-ind-fibromialgia',
        name: 'Fibromialgia / Dolor Generalizado',
        fixedAdultDoseMg: 75,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 450,
        maxSingleDoseMg: 225,
        description: '75 mg cada 12 horas, titulando hasta 150-225 mg cada 12 horas.'
      }
    ],
    whenToUse: [
      'Neuropatía periférica diabética dolorosa.',
      'Neuralgia posherpética tras resolución del exantema de herpes zóster.',
      'Dolor neuropático central por lesión medular o esclerosis múltiple.'
    ],
    pearlsAndPitfalls: [
      'Farmacocinética lineal predecible con absorción dependiente de transportador L-aminoácido; acción más rápida y menor variabilidad que gabapentina.',
      'Efectos sedantes: Somnolencia y mareo en hasta un 30% de los pacientes; mitigar iniciando la dosis total por la noche.',
      'Eliminación renal casi exclusiva (98% inalterada): requiere ajuste estricto de dosis en insuficiencia renal para evitar neurotoxicidad y mioclonías.'
    ],
    monitoringAndSideEffects: [
      'Nivel de alerta, mareo y coordinación motora (riesgo de caídas en ancianos).',
      'Edema periférico maleolar y ganancia ponderal.',
      'Función renal (aclaramiento de creatinina).'
    ],
    evidenceAndSources: [
      {
        title: 'Neuropathic Pain Special Interest Group (NeuPSIG) Recommendations',
        source: 'The Lancet Neurology',
        year: '2023',
        summary: 'Pregabalina, gabapentina y duloxetina son los tratamientos de primera línea basados en evidencia para dolor neuropático.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 60 mL/min',
        adjustmentText: '150 a 600 mg al día dividido cada 12 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 60 mL/min',
        adjustmentText: '75 a 300 mg al día dividido cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '15 - 30 mL/min',
        adjustmentText: '25 a 150 mg una vez al día.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 15 mL/min o Hemodiálisis',
        adjustmentText: '25 a 75 mg en dosis única diaria; administrar dosis post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar salvo Necesidad Estricta',
      summary: 'Estudios observacionales recientes sugieren un ligero aumento del riesgo de malformaciones congénitas mayores del SNC y corazón tras exposición en el primer trimestre.',
      contraindicatedInTrimester: [1],
      clinicalAlternative: 'Paracetamol o antidepresivos tricíclicos a dosis bajas si es indispensable.'
    }
  },
  {
    id: 'lidocaina',
    name: 'Lidocaína',
    commercialNames: ['Xylocaina', 'Lidocaina', 'Octocaine', 'Versatis'],
    category: 'Analgesia / AINEs',
    atcCode: 'N01BB02',
    awareCategory: 'Access',
    therapeuticClass: 'Anestésico Local Tipo Amida · Antiarrítmico Clase IB',
    badgeText: 'Anestésico Local · Infiltración',
    shortDescription: 'Anestésico local tipo amida de acción rápida (1-2 minutos) y duración intermedia. Bloquea los canales de sodio voltaje-dependientes impidiendo la despolarización neuronal.',
    availableRoutes: ['im', 'sc', 'topica', 'iv'],
    concentrations: [
      {
        id: 'lido-vial-1-sc',
        name: 'Solución Inyectable al 1% (10 mg/mL) Frasco 20 mL sin epinefrina',
        amountMg: 200,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: '10 mg de lidocaína por cada mL'
      },
      {
        id: 'lido-vial-2-sc',
        name: 'Solución Inyectable al 2% (20 mg/mL) Frasco 20 mL sin epinefrina',
        amountMg: 400,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: '20 mg de lidocaína por cada mL'
      }
    ],
    indications: [
      {
        id: 'lido-ind-infiltracion-adulto',
        name: 'Anestesia Local por Infiltración / Sutura de Heridas',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 300,
        description: 'Infiltrar lentamente según el área. Dosis máxima SIN epinefrina: 4.5 mg/kg (máximo 300 mg en adulto = 30 mL de solución al 1%). Dosis máxima CON epinefrina: 7 mg/kg (máximo 500 mg).'
      },
      {
        id: 'lido-ind-peds',
        name: 'Infiltración Local Pediátrica',
        recommendedDoseMgPerKgPerDay: 3,
        minDoseMgPerKgPerDay: 2,
        maxDoseMgPerKgPerDay: 4,
        fixedAdultDoseMg: 100,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 100,
        isDosePerKgPerDose: true,
        description: 'Dosis máxima segura pediátrica SIN epinefrina: 3 a 4 mg/kg (solución al 1%: 0.3 a 0.4 mL/kg). Infiltrar aspirando previamente.'
      }
    ],
    whenToUse: [
      'Anestesia local previa a sutura de laceraciones o procedimientos dermatológicos menores.',
      'Bloqueos de nervios periféricos (digital, intercostal).',
      'Taquiarritmias ventriculares refractarias en soporte vital avanzado (ACLS).'
    ],
    pearlsAndPitfalls: [
      '¡Alerta LAST (Toxicidad Sistémica por Anestésicos Locales)!: Aspirar SIEMPRE antes de inyectar para evitar inyección intravascular involuntaria. Signos de LAST: Sabor metálico, parestesias periorales, acúfenos, convulsiones tónico-clónicas y colapso cardiovascular. Antídoto: Emulsión lipídica al 20% (Intralipid).',
      'NUNCA usar soluciones con epinefrina en zonas con circulación terminal (dedos de manos y pies, nariz, pabellón auricular, pene) por riesgo de isquemia y necrosis.',
      'Neutralizar el pH ácido de la solución añadiendo bicarbonato de sodio al 8.4% (1 mL de bicarbonato por cada 9 mL de lidocaína) reduce drásticamente el dolor de la infiltración.'
    ],
    monitoringAndSideEffects: [
      'Estado neurológico y nivel de alerta del paciente durante la infiltración.',
      'Monitoreo electrocardiográfico si se usan dosis altas limítrofes.',
      'Signos tempranos de toxicidad: temblores, disartria, mareo.'
    ],
    evidenceAndSources: [
      {
        title: 'ASRA Practice Advisory on Local Anesthetic Systemic Toxicity (LAST)',
        source: 'Regional Anesthesia & Pain Medicine',
        year: '2023',
        summary: 'Actualización sobre protocolos de seguridad en infiltración local y rescate lipídico.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste para dosis únicas de infiltración local; metabolizada por CYP1A2 y CYP3A4 en el hígado.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Anestésico de Elección en Gestantes',
      summary: 'Seguro a dosis terapéuticas para infiltración perineal (episiotomía/desgarros) o reparación cutánea. No afecta la contractilidad uterina ni el feto.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  }
];
