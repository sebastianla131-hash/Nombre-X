import { Medication } from '../types';

export const GYNECOLOGY_MEDICATIONS: Medication[] = [
  {
    id: 'oxitocina',
    name: 'Oxitocina',
    commercialNames: ['Syntocinon', 'Pitocin', 'Oxitocina'],
    atcCode: 'H01BB02',
    category: 'Ginecología',
    therapeuticClass: 'Uterotónico / Hormona Oxitócica (SRS 2025)',
    shortDescription: 'Fármaco uterotónico de primera línea para el manejo activo del tercer período del parto y prevención/tratamiento de hemorragia posparto.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'oxit-10ui-amp',
        name: 'Ampolla 10 UI / 1 mL (SRS 2025)',
        amountMg: 10,
        volumeMl: 1,
        form: 'vial',
        unit: 'UI',
        notes: 'Conservar refrigerada (2°C a 8°C). Proteger de la luz.'
      }
    ],
    indications: [
      {
        id: 'oxit-alumbramiento-activo',
        name: 'Manejo Activo del 3.er Periodo del Parto (Prevención HPP)',
        description: 'Administrar inmediatamente tras la salida del hombro anterior o expulsión fetal: 10 UI IM (o 5-10 UI en bolo IV lento en ≥ 1-2 minutos).',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única al momento del parto',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 10
      },
      {
        id: 'oxit-tratamiento-hpp',
        name: 'Tratamiento de Hemorragia Posparto por Atonía Uterina',
        description: '20 a 40 UI en 1000 mL de Solución Salina o Ringer Lactato a infusión continua (250 mL/h = 125-250 mUI/min).',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 4,
        durationDays: 'Hasta hemostasia y tono uterino adecuado',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20
      },
      {
        id: 'oxit-induccion-parto',
        name: 'Inducción / Acentuación del Trabajo de Parto',
        description: 'Infusión IV en bomba: iniciar a 1-2 mUI/min; incrementar cada 30 minutos según dinámica uterina (máx 20 mUI/min). Monitorización cardiotocográfica obligatoria.',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 8,
        durationDays: 'Durante el trabajo de parto',
        maxDailyDoseMg: 30,
        maxSingleDoseMg: 5
      }
    ],
    whenToUse: [
      'Prevención sistemática de hemorragia posparto en todo parto vaginal o por cesárea.',
      'Atonía uterina refractaria a masaje bimanual.',
      'Inducción médica del trabajo de parto bajo criterio obstétrico estricto.'
    ],
    pearlsAndPitfalls: [
      'NUNCA administrar en bolo IV rápido sin diluir: produce hipotensión severa, taquicardia refleja y colapso cardiovascular.',
      'La infusión prolongada de altas dosis en soluciones hipotónicas puede producir intoxicación hídrica e hiponatremia severa (efecto antidiurético similar a vasopresina).',
      'Verificar siempre la cadena de frío de la oxitocina para garantizar su potencia uterotónica.'
    ],
    monitoringAndSideEffects: [
      'Hipersensibilidad a la oxitocina',
      'Desproporción cefalopélvica o situación fetal transversa',
      'Sufrimiento fetal agudo sin parto inminente',
      'Hipertonía o polisistolia uterina',
      'Placenta previa o vasa previa'
    ],
    evidenceAndSources: [
      {
        title: 'Recomendaciones de la OMS para la Prevención y Tratamiento de la Hemorragia Posparto',
        source: 'Organización Mundial de la Salud (OMS)',
        summary: 'La oxitocina 10 UI IM/IV es el uterotónico de referencia para la prevención rutinaria de la HPP.'
      }
    ]
  },
  {
    id: 'misoprostol',
    name: 'Misoprostol',
    commercialNames: ['Cytotec', 'Misoprolen', 'Misotrol'],
    atcCode: 'G02AD06',
    category: 'Ginecología',
    therapeuticClass: 'Análogo Sintético de Prostaglandina E1 / Uterotónico (SRS 2025)',
    shortDescription: 'Uterotónico termoestable de acción rápida para prevención y tratamiento de hemorragia posparto y maduración cervical.',
    availableRoutes: ['oral', 'sublingual', 'rectal'],
    concentrations: [
      {
        id: 'miso-200mcg-tab',
        name: 'Comprimidos 200 mcg (0.2 mg)',
        amountMg: 0.2,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Comprimidos ranurados. Apto para vía oral, sublingual o rectal según indicación.'
      }
    ],
    indications: [
      {
        id: 'miso-tratamiento-hpp',
        name: 'Tratamiento de Hemorragia Posparto (HPP)',
        description: '800 mcg vía sublingual (4 comprimidos de 200 mcg) o rectal, como alternativa o coadyuvante cuando la oxitocina no está disponible o no responde.',
        fixedAdultDoseMg: 0.8, // 800 mcg
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única de rescate',
        maxDailyDoseMg: 0.8,
        maxSingleDoseMg: 0.8
      },
      {
        id: 'miso-prevencion-hpp',
        name: 'Prevención de HPP (en ausencia de Oxitocina)',
        description: '600 mcg vía oral (3 comprimidos de 200 mcg) inmediatamente tras el parto en entornos de bajos recursos sin cadena de frío.',
        fixedAdultDoseMg: 0.6, // 600 mcg
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única tras el parto',
        maxDailyDoseMg: 0.6,
        maxSingleDoseMg: 0.6
      },
      {
        id: 'miso-maduracion-cervical',
        name: 'Maduración Cervical e Inducción de Parto',
        description: '25 mcg vía vaginal cada 4-6 horas (o 25 mcg VO cada 2 horas) hasta inicio de dinámica de parto activa (según protocolos FIGO/ACOG).',
        fixedAdultDoseMg: 0.025, // 25 mcg
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '1-2 días bajo monitoreo',
        maxDailyDoseMg: 0.2,
        maxSingleDoseMg: 0.05
      }
    ],
    whenToUse: [
      'Tratamiento de hemorragia posparto cuando la oxitocina sola resulta insuficiente.',
      'Prevención de HPP en atención comunitaria sin disponibilidad de refrigeración.',
      'Maduración cervical con feto a término e indicación obstétrica de inducción.'
    ],
    pearlsAndPitfalls: [
      'Efectos adversos muy frecuentes y autolimitados: escalofríos y fiebre transitoria (38–39°C), que ceden espontáneamente en 2 a 6 horas.',
      'La vía sublingual ofrece el pico plasmático más rápido y la mayor biodisponibilidad para emergencias hemorrágicas.',
      'Contraindicado para inducción en pacientes con cesárea previa o cirugía uterina previa por riesgo de rotura uterina.'
    ],
    monitoringAndSideEffects: [
      'Cesárea anterior o antecedente de histerotomía (contraindicado en inducción con feto viable)',
      'Alergia a prostaglandinas',
      'Asma bronquial severa descompensada'
    ],
    evidenceAndSources: [
      {
        title: 'FIGO Misoprostol Dosing Guidelines 2024',
        source: 'Federación Internacional de Ginecología y Obstetricia (FIGO)',
        summary: 'Pautas universales de dosificación de misoprostol en obstetricia y ginecología.'
      }
    ]
  },
  {
    id: 'acido-folico',
    name: 'Ácido Fólico',
    commercialNames: ['Folvite', 'Acfol', 'Ácido Fólico SRS'],
    atcCode: 'B03BB01',
    category: 'Ginecología',
    therapeuticClass: 'Vitamina del Complejo B / Antianémico y Protector Embriofetal (SRS 2025)',
    shortDescription: 'Suplemento vitamínico esencial periconcepcional para prevención de defectos del tubo neural (espina bífida, anencefalia) y anemia megaloblástica.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'folic-1mg-tab',
        name: 'Comprimidos 1 mg (SRS 2025)',
        amountMg: 1,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis estándar para profilaxis prenatal universal.'
      },
      {
        id: 'folic-5mg-tab',
        name: 'Comprimidos 5 mg (SRS 2025)',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis alta para mujeres con antecedentes de hijo con DTN, diabetes pregestacional o fármacos antifolato.'
      }
    ],
    indications: [
      {
        id: 'folic-prevencion-dtn-estandar',
        name: 'Prevención Periconcepcional de Defectos del Tubo Neural (Bajo Riesgo)',
        description: '1 mg/día (o 400 mcg) iniciado al menos 1 a 3 meses antes de la concepción y mantenido hasta la semana 12–14 de gestación.',
        fixedAdultDoseMg: 1,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Periconcepcional hasta semana 12-14',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 1
      },
      {
        id: 'folic-prevencion-dtn-alto-riesgo',
        name: 'Prevención de DTN en Gestante de Alto Riesgo',
        description: '5 mg/día en mujeres con: antecedente de feto/hijo con defecto del tubo neural, diabetes mellitus tipo 1 o 2 materna, obesidad IMC ≥ 35, o uso de anticonvulsivantes (Ácido Valproico, Carbamazepina).',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3 meses preconcepcional y todo el 1.er trimestre',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 5
      },
      {
        id: 'folic-anemia-megaloblastica',
        name: 'Tratamiento de Anemia Megaloblástica por Déficit de Folatos',
        description: '5 mg una vez al día por 4 meses hasta normalización de serie roja y reservas.',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4 meses continuos',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5
      }
    ],
    whenToUse: [
      'Toda mujer en edad reproductiva que planifique un embarazo (prevención primaria de malformaciones congénitas).',
      'Primer trimestre del embarazo.',
      'Anemia macrocítica/megaloblástica documentada.'
    ],
    pearlsAndPitfalls: [
      'El cierre del tubo neural ocurre entre el día 26 y 28 post-concepción (generalmente antes de la primera falta menstrual), por lo que la administración debe ser PRE-concepcional para máxima eficacia protectora.',
      'Excelente perfil de seguridad; el exceso no fijado a proteínas se elimina por vía renal.',
      'En anemias megaloblásticas, descartar previamente deficiencia de Vitamina B12 para no enmascarar degeneración combinada subaguda medular.'
    ],
    monitoringAndSideEffects: [
      'Hipersensibilidad al ácido fólico',
      'Anemia perniciosa no tratada con vitamina B12'
    ],
    evidenceAndSources: [
      {
        title: 'WHO Guideline: Optimal Serum and Red Blood Cell Folate Concentrations in Women of Reproductive Age',
        source: 'Organización Mundial de la Salud (OMS)',
        summary: 'La suplementación con folato previene hasta un 70% de los defectos del tubo neural.'
      }
    ]
  },
  {
    id: 'progesterona-micronizada',
    name: 'Progesterona Micronizada',
    commercialNames: ['Utrogestan', 'Geslutin', 'Progeffik'],
    atcCode: 'G03DA04',
    category: 'Ginecología',
    therapeuticClass: 'Progestágeno Natural Micronizado / Terapia Tocolítica Preventiva',
    shortDescription: 'Hormona lútea bioidéntica para prevención de parto prematuro en mujeres con cuello uterino corto o antecedente de parto pretérmino.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'prog-200mg-cap',
        name: 'Cápsulas Blandas 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Apto para administración oral o vía vaginal (preferida en obstetricia).'
      },
      {
        id: 'prog-100mg-cap',
        name: 'Cápsulas Blandas 100 mg',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Dosis para soporte de fase lútea o titulación menor.'
      }
    ],
    indications: [
      {
        id: 'prog-prevencion-parto-prematuro',
        name: 'Prevención de Parto Prematuro (Cérvix Corto ≤ 25 mm)',
        description: '200 mg al día por la noche antes de acostarse (vía vaginal preferida), iniciando entre las semanas 16 y 24, y manteniendo hasta la semana 36 de gestación.',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Semana 16-24 hasta semana 36',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200
      },
      {
        id: 'prog-soporte-fase-lutea',
        name: 'Soporte de Fase Lútea / Amenaza de Aborto Recurrente',
        description: '100 a 200 mg cada 12 horas hasta la semana 10 a 12 de gestación en mujeres con sangrado del 1.er trimestre y antecedente de abortos recurrentes.',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Hasta semana 10-12 de gestación',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200
      }
    ],
    whenToUse: [
      'Gestaciones únicas asintomáticas con hallazgo ecográfico de longitud cervical ≤ 25 mm en el segundo trimestre (18–24 semanas).',
      'Mujeres con antecedente de parto pretérmino espontáneo previo.',
      'Soporte hormonal en técnicas de reproducción asistida.'
    ],
    pearlsAndPitfalls: [
      'La vía vaginal evita el metabolismo de primer paso hepático, alcanzando concentraciones miometriales elevadas con mínimos efectos secundarios (menor sedación y mareo).',
      'Si se administra por vía oral, tomar al acostarse para mitigar somnolencia.',
      'No ha demostrado beneficio preventivo en gestaciones múltiples (gemelares) no seleccionadas.'
    ],
    monitoringAndSideEffects: [
      'Sangrado genital no diagnosticado',
      'Tromboflebitis activa o antecedentes tromboembólicos',
      'Disfunción hepática severa'
    ],
    evidenceAndSources: [
      {
        title: 'ACOG Practice Bulletin No. 234: Prediction and Prevention of Spontaneous Preterm Birth',
        source: 'American College of Obstetricians and Gynecologists (ACOG)',
        summary: 'La progesterona vaginal reduce significativamente el riesgo de parto pretérmino en mujeres con cuello uterino corto.'
      }
    ]
  }
];
