import { Medication } from '../types';

export const MEDSCAPE_SPECIALTIES: Medication[] = [
  {
    id: 'sulfato-magnesio',
    name: 'Sulfato de Magnesio',
    commercialNames: ['SulfaMag', 'Sulfato de Magnesio 20%', 'Sulfato de Magnesio 50%'],
    category: 'Ginecología',
    atcCode: 'B05CX05',
    awareCategory: 'Access',
    therapeuticClass: 'Anticonvulsivante Obstétrico · Neuroprotector Fetal y Estabilizador de Membrana',
    badgeText: 'Obstetricia · Eclampsia / Neuroprotección',
    shortDescription: 'Estándar de oro mundial (OMS/ACOG) para la prevención y el tratamiento de convulsiones eclampsicas en preeclampsia severa y para neuroprotección fetal antes de las 32 semanas de gestación.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'mgso4-amp-20',
        name: 'Ampolla Inyectable IV 20% (2 g / 10 mL = 200 mg/mL)',
        amountMg: 2000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: '200 mg de sulfato de magnesio por mL'
      },
      {
        id: 'mgso4-amp-50',
        name: 'Ampolla Inyectable IV/IM 50% (5 g / 10 mL = 500 mg/mL)',
        amountMg: 5000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: '500 mg de sulfato de magnesio por mL'
      }
    ],
    indications: [
      {
        id: 'mgso4-ind-preeclampsia-carga',
        name: 'Prevención y Tratamiento de Eclampsia (Régimen de Zuspan)',
        fixedAdultDoseMg: 4000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '24 horas postparto',
        maxDailyDoseMg: 28000,
        maxSingleDoseMg: 4000,
        description: 'Dosis de carga: 4 a 6 g IV diluidos en 100 mL de Solución Salina infundidos en 15 a 20 minutos. Continuar inmediatamente con infusión de mantenimiento a 1 a 2 g/hora durante 24 horas continuas tras el parto o la última convulsión.'
      },
      {
        id: 'mgso4-ind-neuroproteccion',
        name: 'Neuroprotección Fetal en Parto Prematuro Inminente (<32 Semanas)',
        fixedAdultDoseMg: 4000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Hasta el nacimiento o máximo 24h',
        maxDailyDoseMg: 28000,
        maxSingleDoseMg: 4000,
        description: 'Dosis de carga de 4 g IV en 20 minutos, seguida de 1 g/hora de mantenimiento hasta el nacimiento o por un máximo de 24 horas para prevenir parálisis cerebral.'
      },
      {
        id: 'mgso4-ind-torsades',
        name: 'Torsades de Pointes / Crisis Asmática Severa Refractaria',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 1,
        intervalHours: 1,
        durationDays: 'Agudo',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        description: 'Bolo IV de 2 g diluidos en 100 mL de DAD 5% infundidos en 10 a 15 minutos.'
      }
    ],
    whenToUse: [
      'Preeclampsia con criterios de severidad para prevenir el desarrollo de eclampsia.',
      'Tratamiento inmediato de convulsiones eclámpsicas activas (superior a diazepam o fenitoína).',
      'Neuroprotección fetal ante amenaza inminente de parto prematuro entre las semanas 24+0 y 31+6 de gestación.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta de Intoxicación por Magnesio!: Monitorear estrictamente antes y durante la infusión: 1. Reflejo rotuliano presente (su abolición es el primer signo de toxicidad, magnesemia >8-10 mg/dL); 2. Frecuencia respiratoria ≥12 rpm (la depresión respiratoria ocurre a >12 mg/dL); 3. Diuresis horaria ≥30 mL/hora (se elimina 100% por riñón).',
      '¡ANTÍDOTO INMEDIATO!: Gluconato de Calcio al 10% (1 ampolla de 1 g = 10 mL IV lento en 3 a 5 minutos) en caso de depresión respiratoria o paro.',
      'No se considera un antihipertensivo primario; para el control de la tensión arterial severa (≥160/110 mmHg) se debe emplear labetalol o hidralazina concomitantemente.'
    ],
    monitoringAndSideEffects: [
      'Reflejo rotuliano patelar cada 2 horas.',
      'Frecuencia respiratoria horaria continua.',
      'Diuresis estricta por sonda vesical Foley con bolsa recolectora.',
      'Sensación de calor y rubor facial durante la dosis de carga (benigno).'
    ],
    evidenceAndSources: [
      {
        title: 'Magpie Trial: Magnesium Sulphate for Preeclampsia Prevention',
        source: 'The Lancet',
        year: '2023 Meta-Analysis Update',
        summary: 'Demostró una reducción de más del 50% en el riesgo de eclampsia en mujeres con preeclampsia severa tratadas con sulfato de magnesio frente a placebo.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar con control clínico.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Reducir la infusión de mantenimiento a la mitad (0.5 a 1 g/h) con monitorización seriada estricta de magnesemia.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'A',
      status: 'safe',
      statusLabel: 'Fármaco Vital de Elección en Obstetricia (ACOG/OMS)',
      summary: 'Tratamiento de elección e indiscutible para la prevención y el manejo de eclampsia y neuroprotección fetal. Salva vidas maternas y previene la parálisis cerebral.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'nifedipino',
    name: 'Nifedipino',
    commercialNames: ['Adalat', 'Nifepres', 'Procardia', 'Nifedipino'],
    category: 'Ginecología',
    atcCode: 'C08CA05',
    therapeuticClass: 'Antagonista de Canales de Calcio Dihidropiridínico · Tocolítico y Antihipertensivo',
    badgeText: 'Obstetricia · Tocolítico / HTA',
    shortDescription: 'Bloqueador selectivo de los canales de calcio tipo L del miocito uterino y vascular. Fármaco de primera línea para tocolisis en amenaza de parto pretérmino y control de hipertensión gestacional.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'nife-comp-10',
        name: 'Cápsulas / Comprimidos de Liberación Rápida 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Para protocolo tocolítico oral'
      },
      {
        id: 'nife-comp-30-orros',
        name: 'Comprimidos de Liberación Prolongada OROS 30 mg (Adalat OROS)',
        amountMg: 30,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Para control antihipertensivo crónico'
      }
    ],
    indications: [
      {
        id: 'nife-ind-tocolisis',
        name: 'Amenaza de Parto Pretérmino (Tocolisis Aguda entre Semanas 24 y 34)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '48 horas (ventana de maduración pulmonar)',
        maxDailyDoseMg: 160,
        maxSingleDoseMg: 20,
        description: 'Dosis de ataque: 20 mg vía oral (o 10 mg cada 20 min hasta 3 dosis). Mantenimiento: 10 a 20 mg cada 6 u 8 horas durante 48 horas para permitir la maduración con betametasona.'
      },
      {
        id: 'nife-ind-hta-embarazo',
        name: 'Hipertensión Gestacional / Preeclampsia sin Criterios de Severidad',
        fixedAdultDoseMg: 30,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Hasta el puerperio',
        maxDailyDoseMg: 60,
        maxSingleDoseMg: 60,
        description: '30 a 60 mg una vez al día en formulación de liberación prolongada (OROS/Retard).'
      },
      {
        id: 'nife-ind-crisis-obstetrica',
        name: 'Crisis Hipertensiva Obstétrica Aguda (PA ≥160/110 mmHg)',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 1,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '10 a 20 mg vía oral tragar con agua (repetir 20 mg en 20 minutos si persiste PA ≥160/110 mmHg).'
      }
    ],
    whenToUse: [
      'Tocolítico oral de primera elección para retrasar el parto prematuro 48 horas y permitir la corticoterapia fetal.',
      'Hipertensión arterial crónica en el embarazo y preeclampsia.',
      'Fenómeno de Raynaud primario severo.'
    ],
    pearlsAndPitfalls: [
      '¡NUNCA administrar por vía sublingual ni morder la cápsula en crisis hipertensiva!: La vía sublingual provoca caídas bruscas y descontroladas de la presión arterial materna, causando hipoperfusión placentaria aguda, sufrimiento fetal agudo o ictus.',
      'Sinergia hipotensora con sulfato de magnesio: monitorizar la presión arterial si se coadministran.',
      'Cefalea intensa, rubefacción facial (flushing) y taquicardia refleja son efectos secundarios comunes al inicio.'
    ],
    monitoringAndSideEffects: [
      'Dinámica uterina y frecuencia cardíaca fetal continua durante tocolisis.',
      'Tensión arterial materna cada 15-30 minutos en fase de carga.',
      'Edema bimaleolar y mareo ortostático.'
    ],
    evidenceAndSources: [
      {
        title: 'ACOG Practice Bulletin No. 171: Management of Preterm Labor',
        source: 'Obstetrics & Gynecology',
        year: '2023',
        summary: 'Recomienda antagonistas de canales de calcio (nifedipino) como agentes tocolíticos de primera línea preferidos por su superior eficacia y perfil de seguridad materno-fetal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación hepática (CYP3A4).',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Fármaco de Elección en Obstetricia (ACOG / FIGO)',
      summary: 'Seguridad clínica extensamente demostrada. Fármaco de primera línea para tocolisis y control de crisis hipertensiva en gestantes.',
      clinicalAlternative: 'Fármaco de elección preferido.'
    }
  },
  {
    id: 'betametasona',
    name: 'Betametasona',
    commercialNames: ['Celestone', 'Diprospan', 'Betaprospan'],
    category: 'Ginecología',
    atcCode: 'H02AB01',
    awareCategory: 'Access',
    therapeuticClass: 'Glucocorticoide Fluoroclorado de Acción Prolongada · Inductor de Maduración Pulmonar Fetal',
    badgeText: 'Obstetricia · Maduración Fetal',
    shortDescription: 'Corticoide fluorado que atraviesa eficazmente la barrera placentaria sin inactivación significativa. Estimula la síntesis de surfactante por los neumocitos tipo II y reduce la morbimortalidad neonatal entre las 24 y 34 semanas.',
    availableRoutes: ['im'],
    concentrations: [
      {
        id: 'beta-amp-12',
        name: 'Ampolla Inyectable IM 12 mg / 2 mL (Fosfato + Acetato)',
        amountMg: 12,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: '6 mg de fosfato disódico + 6 mg de acetato de betametasona por ampolla'
      }
    ],
    indications: [
      {
        id: 'beta-ind-maduracion-pulmonar',
        name: 'Inducción de Maduración Pulmonar Fetal (24+0 a 33+6 Semanas)',
        fixedAdultDoseMg: 12,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '2 dosis (total 24 mg)',
        maxDailyDoseMg: 12,
        maxSingleDoseMg: 12,
        description: '12 mg IM profunda cada 24 horas por 2 dosis en total (pauta estándar recomendada por OMS y ACOG).'
      }
    ],
    whenToUse: [
      'Amenaza de parto pretérmino con dilatación cervical progresiva entre las 24 y 34 semanas de edad gestacional.',
      'Rotura prematura de membranas pretérmino (RPMP).',
      'Finalización electiva del embarazo pretérmino por preeclampsia grave, RCIU severo o desprendimiento placentario.'
    ],
    pearlsAndPitfalls: [
      'Efecto clínico protector máximo: Se alcanza entre las 24 horas y los 7 días posteriores a la segunda dosis.',
      'Reduce drásticamente: 1. Síndrome de distrés respiratorio (SDR); 2. Hemorragia intraventricular (HIV); 3. Enterocolitis necrotizante (ECN); y 4. Muerte neonatal.',
      'Produce elevación transitoria de la glucemia materna en las 48-72 horas posteriores; intensificar monitoreo en gestantes con diabetes.'
    ],
    monitoringAndSideEffects: [
      'Perfil glucémico materno.',
      'Monitorización de variabilidad de la frecuencia cardíaca fetal (puede haber una disminución transitoria de la reactividad a las 48h que es benigna).',
      'Ausencia de signos de corioamnionitis.'
    ],
    evidenceAndSources: [
      {
        title: 'Antenatal Corticosteroid Therapy for Fetal Maturation',
        source: 'ACOG Committee Opinion No. 713',
        year: '2023',
        summary: 'La betametasona antenatal es la intervención médica individual más costo-efectiva para reducir la mortalidad neonatal en el parto pretérmino.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste para el esquema de 2 dosis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Tratamiento Salvavidas Obligatorio en Parto Pretérmino',
      summary: 'Intervención de máxima prioridad perinatal recomendada unánimemente por OMS, ACOG, RCOG y FIGO entre las 24 y 34 semanas.',
      clinicalAlternative: 'Dexametasona (6 mg IM cada 12 horas por 4 dosis) si no se dispone de betametasona.'
    }
  },
  {
    id: 'tamsulosina',
    name: 'Tamsulosina',
    commercialNames: ['Omnic', 'Secotex', 'Flomax', 'Urolosin'],
    category: 'Gastroenterología',
    atcCode: 'G04CA02',
    awareCategory: 'Access',
    therapeuticClass: 'Antagonista Alfa-1A Adrenérgico Uroselectivo',
    badgeText: 'Urología · Próstata / Cólico Nefrítico',
    shortDescription: 'Bloqueador selectivo de los receptores alfa-1A adrenérgicos localizados en el músculo liso del cuello vesical, estroma prostático y uréter distal. Alivia rápidamente la obstrucción urinaria con mínimo impacto sobre la presión arterial sistémica.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'tamsu-cap-04',
        name: 'Cápsulas de Liberación Modificada 0.4 mg (400 mcg)',
        amountMg: 0.4,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'tamsu-ind-hpb',
        name: 'Hiperplasia Prostática Benigna (Síntomas del Tracto Urinario Inferior)',
        fixedAdultDoseMg: 0.4,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 0.8,
        maxSingleDoseMg: 0.4,
        description: '0.4 mg una vez al día aproximadamente 30 minutos después de la misma comida todos los días (habitualmente tras el desayuno).'
      },
      {
        id: 'tamsu-ind-litiasis-expulsiva',
        name: 'Terapia Médica Expulsiva en Litiasis Ureteral Distal (<10 mm)',
        fixedAdultDoseMg: 0.4,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '14-28 días (hasta expulsión)',
        maxDailyDoseMg: 0.4,
        maxSingleDoseMg: 0.4,
        description: '0.4 mg una vez al día para relajar el músculo liso del uréter distal y facilitar la expulsión espontánea del cálculo.'
      }
    ],
    whenToUse: [
      'Síntomas miccionales obstructivos e irritativos por agrandamiento prostático benigno.',
      'Terapia médica expulsiva de cálculos en el uréter distal (estudios demuestran mayor tasa de expulsión y menor tiempo y dolor).',
      'Prevención de retención urinaria aguda tras retirada de sonda vesical.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Síndrome de Iris Flácido Intraoperatorio (IFIS)!: Puede complicar la cirugía de cataratas provocando prolapso del iris y pérdida visual. El oftalmólogo DEBE ser informado si el paciente toma o tomó tamsulosina.',
      'Eyaculación retrógrada: Ocurre en hasta un 10-15% de los pacientes por relajación del esfínter vesical interno (advertir para evitar alarma innecesaria).',
      'Menor riesgo de hipotensión ortostática que doxazosina o terazosina gracias a su uroselectividad por el subtipo alfa-1A.'
    ],
    monitoringAndSideEffects: [
      'Flujo urinario máximo (Qmax) y volumen de residuo miccional posmiccional por ecografía.',
      'Tensión arterial sentado y de pie en la primera semana en pacientes ancianos.',
      'Eyaculación retrógrada, astenia y congestión nasal.'
    ],
    evidenceAndSources: [
      {
        title: 'European Association of Urology (EAU) Guidelines on Non-neurogenic Male LUTS',
        source: 'European Urology',
        year: '2023',
        summary: 'Los alfa-1 bloqueadores son la terapia médica de inicio más rápida y eficaz para mejorar el flujo urinario y el índice IPSS.'
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
      category: 'B',
      status: 'caution',
      statusLabel: 'Uso en Mujeres Excepcional',
      summary: 'Indicado primariamente en hombres. En casos seleccionados de cólico nefrítico expulsivo en gestantes debe evaluarse riesgo-beneficio.',
      clinicalAlternative: 'Hidratación y analgesia.'
    }
  },
  {
    id: 'alopurinol',
    name: 'Alopurinol',
    commercialNames: ['Zyloprim', 'Atisuril', 'Urosin', 'Alopurinol'],
    category: 'Analgesia / AINEs',
    atcCode: 'M04AA01',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de la Xantina Oxidasa · Hipouricemiante',
    badgeText: 'Reumatología · Reductor de Ácido Úrico',
    shortDescription: 'Inhibidor análogo de purina de la enzima xantina oxidasa. Reduce la producción de ácido úrico, disuelve los cristales de urato monosódico y previene las crisis recurrentes de artritis gotosa y nefrolitiasis úrica.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'alo-comp-100',
        name: 'Comprimidos Ranurados 100 mg',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis inicial de titulación para prevenir brotes'
      },
      {
        id: 'alo-comp-300',
        name: 'Comprimidos Ranurados 300 mg',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'alo-ind-gota-cronica',
        name: 'Gota Crónica Tofácea / Hiperuricemia con Crisis Recurrentes (≥2 al año)',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 800,
        maxSingleDoseMg: 300,
        description: 'Dosis inicial de 100 mg una vez al día con alimentos. Titular en 100 mg cada 2 a 4 semanas hasta alcanzar la uricemia diana (<6.0 mg/dL o <5.0 mg/dL si hay tofos). Dosis habitual: 300 mg/día.'
      },
      {
        id: 'alo-ind-lisis-tumoral',
        name: 'Prevención del Síndrome de Lisis Tumoral en Quimioterapia',
        fixedAdultDoseMg: 300,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3-7 días peri-quimioterapia',
        maxDailyDoseMg: 600,
        maxSingleDoseMg: 300,
        description: '300 a 600 mg al día comenzando 24 a 48 horas antes de la quimioterapia con hidratación alcalinizante intensa.'
      }
    ],
    whenToUse: [
      'Gota con tofos subcutáneos, artropatía gotosa destructiva o crisis frecuentes.',
      'Nefrolitiasis recurrente de ácido úrico.',
      'Nefropatía por uratos y prevención de fallo renal en neoplasias hematológicas.'
    ],
    pearlsAndPitfalls: [
      '¡Regla de Oro en Crisis Aguda de Gota!: NUNCA iniciar alopurinol durante una crisis aguda inflamatoria, ya que la caída rápida de la uricemia disuelve y desestabiliza los tofos articulares, empeorando el brote. Esperar 2 a 4 semanas tras la resolución del dolor articular (o iniciar concomitantemente con profilaxis antiinflamatoria de colchicina 0.5 mg/día).',
      '¡Alerta Síndrome de Hipersensibilidad al Alopurinol (AHS/DRESS/Stevens-Johnson)!: Rash cutáneo con fiebre y eosinofilia; suspender de inmediato ante cualquier exantema por riesgo de necrólisis epidérmica tóxica mortal. Muy asociado al alelo HLA-B*58:01 (común en ascendencia asiática o afrodescendiente).',
      'Interacción mortal con Azatioprina y 6-Mercaptopurina: El alopurinol bloquea su catabolismo por xantina oxidasa, provocando pancitopenia fatal. Si es mandatoria la combinación, reducir la dosis de azatioprina al 25% de la habitual.'
    ],
    monitoringAndSideEffects: [
      'Ácido úrico en suero cada 2-4 semanas durante la titulación (meta <6 mg/dL).',
      'Hemograma completo y enzimas hepáticas.',
      'Inspección cutánea de erupciones eritematosas.'
    ],
    evidenceAndSources: [
      {
        title: 'American College of Rheumatology (ACR) Guideline for the Management of Gout',
        source: 'Arthritis & Rheumatology',
        year: '2023',
        summary: 'Recomienda fuertemente alopurinol como terapia hipouricemiante de primera línea para todos los pacientes con gota candidatos a tratamiento.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar con titulación progresiva.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '20 - 49 mL/min',
        adjustmentText: 'Iniciar con 50-100 mg/día; titular lentamente hasta máximo 200 mg/día.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 20 mL/min o Hemodiálisis',
        adjustmentText: 'Iniciar con 50 mg cada 48 horas o 100 mg post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar salvo Necesidad Estricta',
      summary: 'La gota es muy infrecuente en mujeres en edad fértil. No recomendado durante el embarazo por datos de toxicidad fetal en animales.',
      clinicalAlternative: 'Paracetamol para el dolor articular.'
    }
  },
  {
    id: 'colquicina',
    name: 'Colquicina',
    commercialNames: ['Colchicina', 'Colchimax', 'Colcrys', 'Sixol'],
    category: 'Analgesia / AINEs',
    atcCode: 'M04AC01',
    awareCategory: 'Access',
    therapeuticClass: 'Alcaloide Antiinflamatorio Específico · Inhibidor de la Polimerización de Tubulina',
    badgeText: 'Reumatología · Crisis de Gota',
    shortDescription: 'Alcaloide derivado de Colchicum autumnale que se une a la tubulina impidiendo la polimerización de microtúbulos, la activación del inflamasoma NLRP3 y la migración quimiotáctica de neutrófilos hacia los cristales de urato.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'colch-comp-05',
        name: 'Comprimidos 0.5 mg (500 mcg)',
        amountMg: 0.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'colch-comp-1',
        name: 'Comprimidos 1 mg (1000 mcg)',
        amountMg: 1,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'colch-ind-crisis-gota',
        name: 'Crisis Aguda de Gota (Pauta de Dosis Baja Moderna)',
        fixedAdultDoseMg: 1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Agudo (3-5 días)',
        maxDailyDoseMg: 1.8,
        maxSingleDoseMg: 1,
        description: 'Pauta moderna de baja dosis: 1 mg al inicio del dolor articular, seguido de 0.5 mg a la hora siguiente (total 1.5 mg en el día 1). Al día siguiente continuar con 0.5 mg una o dos veces al día hasta que ceda el dolor.'
      },
      {
        id: 'colch-ind-profilaxis-gota',
        name: 'Profilaxis de Brotes al Iniciar Hipouricemiantes (Alopurinol)',
        fixedAdultDoseMg: 0.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3 a 6 meses de coadministración',
        maxDailyDoseMg: 1,
        maxSingleDoseMg: 0.5,
        description: '0.5 mg una vez al día (o 0.5 mg cada 12 horas si el peso o función renal lo permiten).'
      },
      {
        id: 'colch-ind-pericarditis',
        name: 'Pericarditis Aguda y Recurrente en Adultos',
        fixedAdultDoseMg: 0.5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '3 meses (aguda) o 6 meses (recurrente)',
        maxDailyDoseMg: 1,
        maxSingleDoseMg: 0.5,
        description: 'Peso ≥70 kg: 0.5 mg cada 12 horas. Peso <70 kg: 0.5 mg una vez al día asociado a AINEs a dosis altas.'
      }
    ],
    whenToUse: [
      'Ataque agudo de gota iniciado en las primeras 12-24 horas.',
      'Profilaxis de brotes inflamatorios durante los primeros 3 a 6 meses de titulación de alopurinol.',
      'Pericarditis aguda para reducir las recurrencias a la mitad (guías ESC).',
      'Fiebre mediterránea familiar.'
    ],
    pearlsAndPitfalls: [
      '¡ABANDONAR LAS PAUTAS ANTIGUAS HISTÓRICAS!: Antiguamente se indicaba 0.5 mg cada 2 horas hasta la aparición de diarrea. Esto causaba toxicidad gastrointestinal grave; la pauta de baja dosis (1 mg + 0.5 mg) tiene la misma eficacia y muchísima menor toxicidad.',
      'Toxicidad gastrointestinal: La diarrea acuosa profusa, náuseas y vómitos son los primeros signos de toxicidad celular mitótica; suspender inmediatamente.',
      'Interacciones letales con inhibidores potentes de CYP3A4 o glicoproteína-P (claritromicina, ketoconazol, ciclosporina): provocan acumulación tóxica fulminante, rabdomiólisis y fallo multiorgánico fatal.'
    ],
    monitoringAndSideEffects: [
      'Aparición de diarrea o cólicos abdominales.',
      'Función renal y hepática.',
      'Hemograma en tratamientos de larga duración (riesgo de aplasia medular o neutropenia).'
    ],
    evidenceAndSources: [
      {
        title: 'AGREE Trial: Low-Dose vs High-Dose Colchicine for Acute Gout Flare',
        source: 'Arthritis & Rheumatism',
        year: '2023',
        summary: 'Demostró que la pauta de 1.8 mg en 1 hora tiene una eficacia analgésica idéntica a la pauta de dosis alta (4.8 mg) pero con una incidencia de diarrea similar al placebo.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar recomendada.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: 'Reducir dosis a 0.5 mg al día o días alternos.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Contraindicado o limitar a dosis única de 0.5 mg sin repetir en 2 semanas.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Inhibe la división celular mitótica en metafase. En fiebre mediterránea familiar se mantiene porque la enfermedad no controlada provoca amiloidosis y aborto. En gota se prefieren otros analgésicos.',
      clinicalAlternative: 'Paracetamol o corticoides a dosis bajas si es indispensable.'
    }
  }
];
