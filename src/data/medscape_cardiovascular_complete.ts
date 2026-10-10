import { Medication } from '../types';

export const MEDSCAPE_CARDIOVASCULAR_COMPLETE: Medication[] = [
  {
    id: 'sacubitril-valsartan',
    name: 'Sacubitril / Valsartan',
    commercialNames: ['Entresto', 'Vymada'],
    category: 'Cardiovascular',
    atcCode: 'C09DX04',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor del Receptor de Angiotensina y Neprilisina (ARNI) · Estándar de Oro en ICFEr',
    badgeText: 'Cardiovascular · ARNI ICFEr',
    shortDescription: 'Asociación molecular de sacubitril (inhibidor de la neprilisina que degrada péptidos natriuréticos ANP/BNP) y valsartan (bloqueador de receptores AT1). Estándar de oro mundial de primera línea para reducir mortalidad y hospitalizaciones en insuficiencia cardíaca con fracción de eyección reducida.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'arni-comp-24-26',
        name: 'Comprimidos Recubiertos 24/26 mg (50 mg) (Dosis Inicial)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: '24.3 mg sacubitril + 25.7 mg valsartan'
      },
      {
        id: 'arni-comp-49-51',
        name: 'Comprimidos Recubiertos 49/51 mg (100 mg) (Dosis Intermedia)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: '48.6 mg sacubitril + 51.4 mg valsartan'
      },
      {
        id: 'arni-comp-97-103',
        name: 'Comprimidos Recubiertos 97/103 mg (200 mg) (Dosis Objetivo)',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: '97.2 mg sacubitril + 102.8 mg valsartan'
      }
    ],
    indications: [
      {
        id: 'arni-ind-icfer',
        name: 'Insuficiencia Cardíaca con Fracción de Eyección Reducida (ICFEr NYHA II-IV)',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200,
        description: 'Iniciar con 49/51 mg (100 mg) cada 12 horas. Titular cada 2-4 semanas hasta la dosis objetivo de 97/103 mg (200 mg) cada 12 horas. Si no tomaba IECA/ARA-II previo o PA baja: iniciar con 24/26 mg cada 12 horas.'
      }
    ],
    whenToUse: [
      'Primera línea en pacientes con insuficiencia cardíaca sintomática (NYHA II-IV) con FEVI ≤ 40% en sustitución de un IECA o ARA-II.',
      'Pacientes hospitalizados por insuficiencia cardíaca descompensada estabilizados hemodinámicamente antes del alta.'
    ],
    pearlsAndPitfalls: [
      '¡PERIODO DE LAVADO OBLIGATORIO DE 36 HORAS TRAS SUSPENDER UN IECA!: Administrar sacubitril/valsartan antes de transcurridas 36 horas desde la última toma de enalapril, captopril o lisinopril desencadena angioedema laríngeo potencialmente mortal (inhibición dual de degradación de bradicinina). Con ARA-II no se requiere periodo de lavado.',
      'Monitoreo analítico: El BNP aumentará debido a la inhibición de su degradación enzimática por sacubitril; para evaluar descompensación cardíaca monitorizar EXCLUSIVAMENTE NT-proBNP (no es sustrato de neprilisina).',
      'Vigilar hipotensión sintomática e hiperpotasemia.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sistólica (objetivo > 100 mmHg).',
      'Potasio sérico y creatinina sérica a las 1-2 semanas de cada titulación de dosis.',
      'NT-proBNP (nunca BNP) para seguimiento clínico.'
    ],
    evidenceAndSources: [
      {
        title: 'PARADIGM-HF & PIONEER-HF Trials',
        source: 'New England Journal of Medicine',
        year: '2023 Update',
        summary: 'Demostró una reducción del 20% en muerte cardiovascular o primera hospitalización por IC frente a enalapril, con reducción de la mortalidad por todas las causas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar con titulación habitual.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Iniciar con 24/26 mg cada 12 horas; titular con precaución.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Actúa sobre el sistema renina-angiotensina causando oligohidramnios, hipoplasia pulmonar fetal y anuria neonatal. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Hidralazina + Nitratos o Labetalol.'
    }
  },
  {
    id: 'apixaban',
    name: 'Apixaban',
    commercialNames: ['Eliquis', 'Apaday'],
    category: 'Cardiovascular',
    atcCode: 'B01AF02',
    awareCategory: 'Access',
    therapeuticClass: 'Anticoagulante Oral Directo (ACOD) Inhibidor del Factor Xa',
    badgeText: 'Cardiovascular · ACOD Factor Xa',
    shortDescription: 'Inhibidor oral directo, potente, selectivo y reversible del factor Xa libre y ligado al coágulo. Fármaco de primera línea para prevención de ictus en fibrilación auricular no valvular y tratamiento de TVP/TEP.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'apix-comp-25',
        name: 'Comprimidos Recubiertos 2.5 mg',
        amountMg: 2.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'apix-comp-5',
        name: 'Comprimidos Recubiertos 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'apix-ind-fa',
        name: 'Prevención de Ictus y Embolia Sistémica en Fibrilación Auricular No Valvular',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5,
        description: '5 mg cada 12 horas vía oral. Reducir a 2.5 mg cada 12 horas si cumple AL MENOS 2 DE 3 CRITERIOS: edad ≥ 80 años, peso corporal ≤ 60 kg, o creatinina sérica ≥ 1.5 mg/dL.'
      },
      {
        id: 'apix-ind-tep-tvp',
        name: 'Tratamiento Agudo de TVP / Tromboembolismo Pulmonar',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7 días de carga, luego mantenimiento',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 10,
        description: 'Fase aguda de carga: 10 mg cada 12 horas durante los primeros 7 días. Mantenimiento posterior: 5 mg cada 12 horas durante al menos 3 a 6 meses.'
      }
    ],
    whenToUse: [
      'Prevención tromboembólica en adultos con fibrilación auricular no valvular con CHA2DS2-VASc ≥ 1 (varones) o ≥ 2 (mujeres).',
      'Tratamiento y prevención secundaria de TVP y embolia pulmonar.',
      'Perfil de menor tasa de sangrado gastrointestinal e intracraneal entre los ACODs.'
    ],
    pearlsAndPitfalls: [
      '¡Regla de Reducción ABC en Fibrilación Auricular!: Requiere al menos 2 de los siguientes 3 factores para reducir la dosis a 2.5 mg c/12h: Age ≥ 80 años, Body weight ≤ 60 kg, Creatinine ≥ 1.5 mg/dL (133 mcmol/L).',
      'No requiere monitorización de INR.',
      'Agente de reversión específico disponible: Andexanet alfa.'
    ],
    monitoringAndSideEffects: [
      'Hemoglobina y hematocrito basales y periódicos.',
      'Función renal (aclaramiento de creatinina Cockcroft-Gault anual o semestral).',
      'Signos de sangrado oculto o evidente.'
    ],
    evidenceAndSources: [
      {
        title: 'ARISTOTLE & AMPLIFY Clinical Trials',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'Demostró superioridad frente a warfarina en prevención de ictus con una reducción del 31% en hemorragias mayores y menor mortalidad global.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar (salvo criterio ABC en FA).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '15 - 29 mL/min',
        adjustmentText: '2.5 mg cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 15 mL/min o Hemodiálisis',
        adjustmentText: 'Usar con extrema precaución; en hemodiálisis 5 mg c/12h (o 2.5 mg c/12h si edad ≥80 o peso ≤60kg).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Atraviesa la placenta con riesgo hemorrágico fetal y materno. CONTRAINDICADO en el embarazo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Enoxaparina / Heparina de Bajo Peso Molecular SC.'
    }
  },
  {
    id: 'rivaroxaban',
    name: 'Rivaroxaban',
    commercialNames: ['Xarelto', 'Xalerto', 'Rivolet'],
    category: 'Cardiovascular',
    atcCode: 'B01AF01',
    awareCategory: 'Access',
    therapeuticClass: 'Anticoagulante Oral Directo (ACOD) Inhibidor del Factor Xa · Toma Única Diaria',
    badgeText: 'Cardiovascular · ACOD Factor Xa (1 vez al día)',
    shortDescription: 'Inhibidor selectivo directo del factor Xa con excelente biodisponibilidad oral y pauta de una sola toma al día con alimentos en fibrilación auricular. Ampliamente utilizado en profilaxis y tratamiento de tromboembolismo venoso.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'riva-comp-10',
        name: 'Comprimidos Recubiertos 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'riva-comp-15',
        name: 'Comprimidos Recubiertos 15 mg',
        amountMg: 15,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'riva-comp-20',
        name: 'Comprimidos Recubiertos 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'riva-ind-fa',
        name: 'Prevención de Ictus en Fibrilación Auricular No Valvular',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 20,
        description: '20 mg una vez al día obligatoriamente CON LA CENA (o comida principal). Si ClCr 15-49 mL/min: reducir a 15 mg una vez al día con la comida.'
      },
      {
        id: 'riva-ind-tep-tvp',
        name: 'Tratamiento de TVP y Tromboembolismo Pulmonar Agudo',
        fixedAdultDoseMg: 15,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '21 días de carga, luego 20 mg al día',
        maxDailyDoseMg: 30,
        maxSingleDoseMg: 20,
        description: 'Fase de carga: 15 mg cada 12 horas con alimentos durante los primeros 21 días (3 semanas). Mantenimiento: 20 mg una vez al día con alimentos.'
      }
    ],
    whenToUse: [
      'Prevención de ictus en fibrilación auricular no valvular en pacientes que prefieren una sola toma diaria.',
      'Tratamiento agudo y prevención secundaria de TVP y tromboembolismo pulmonar sin necesidad de solapamiento con heparina.',
      'Prevención de eventos aterotrombóticos en cardiopatía isquémica estable (dosis vascular COMPASS de 2.5 mg c/12h asociada a AAS).'
    ],
    pearlsAndPitfalls: [
      '¡REGLA DE ORO DE ABSORCIÓN!: Las dosis de 15 mg y 20 mg DEBEN tomarse obligatoriamente con comida; en ayunas la biodisponibilidad se reduce drásticamente (hasta un 34% menos), perdiendo eficacia anticoagulante protectora.',
      'Tercio de eliminación por vía renal inalterada; contraindicado con ClCr < 15 mL/min.',
      'Antídoto de reversión específico: Andexanet alfa.'
    ],
    monitoringAndSideEffects: [
      'Función renal periódica para ajuste de dosis (ClCr Cockcroft-Gault).',
      'Hemoglobina y hematocrito.',
      'Tolerancia digestiva y ausencia de hemorragia gastrointestinal.'
    ],
    evidenceAndSources: [
      {
        title: 'ROCKET-AF & EINSTEIN-DVT/PE Trials',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'No inferior a warfarina para la prevención de ictus con una reducción estadísticamente significativa del 33% en hemorragia intracraneal fatal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: '20 mg una vez al día con alimentos.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '15 - 49 mL/min',
        adjustmentText: '15 mg una vez al día con alimentos.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 15 mL/min',
        adjustmentText: 'Contraindicado en Europa; usar con extrema precaución en EE.UU.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Embarazo y Lactancia',
      summary: 'Riesgo elevado de hemorragia obstétrica y paso placentario con toxicidad embrionaria. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Enoxaparina SC.'
    }
  },
  {
    id: 'dabigatran',
    name: 'Dabigatrán Etexilato',
    commercialNames: ['Pradaxa'],
    category: 'Cardiovascular',
    atcCode: 'B01AE07',
    awareCategory: 'Access',
    therapeuticClass: 'Anticoagulante Oral Directo (ACOD) Inhibidor Directo de la Trombina (Factor IIa)',
    badgeText: 'Cardiovascular · Inhibidor Directo IIa',
    shortDescription: 'Profármaco que se biotransforma en dabigatrán, un inhibidor directo, reversible y competitivo de la trombina libre y unida a fibrina. Único ACOD con antídoto monoclonal de reversión inmediata en 5 minutos (Idarucizumab).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'dabi-caps-110',
        name: 'Cápsulas Duras 110 mg',
        amountMg: 110,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Tragar ENTERAS; no abrir ni masticar'
      },
      {
        id: 'dabi-caps-150',
        name: 'Cápsulas Duras 150 mg',
        amountMg: 150,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Tragar enteras con un vaso lleno de agua'
      }
    ],
    indications: [
      {
        id: 'dabi-ind-fa',
        name: 'Prevención de Ictus en Fibrilación Auricular No Valvular',
        fixedAdultDoseMg: 150,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 150,
        description: '150 mg cada 12 horas. Reducir a 110 mg cada 12 horas en pacientes ≥80 años, uso concomitante de verapamilo o riesgo incrementado de hemorragia.'
      }
    ],
    whenToUse: [
      'Prevención tromboembólica en fibrilación auricular cuando se busca la máxima eficacia en reducción de ictus isquémico demostrada (superior a warfarina a dosis de 150 mg c/12h).',
      'Situaciones donde se valore la disponibilidad de un antídoto de reversión ultra-rápida (Idarucizumab) para cirugías de emergencia.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta de Manipulación de Cápsulas!: NUNCA abrir, romper ni masticar las cápsulas; el recubrimiento con núcleo de ácido tartárico multiplica la biodisponibilidad hasta en un 75% si se abre, aumentando de forma masiva el riesgo hemorrágico letal.',
      'Alta eliminación renal (80%): Muy sensible a la disfunción renal; contraindicado absolutamente si ClCr < 30 mL/min.',
      'Antídoto específico inmediato: Idarucizumab (Praxbind) revierte el efecto en menos de 5 minutos por afinidad 350 veces superior a la trombina.'
    ],
    monitoringAndSideEffects: [
      'Dispepsia, ardor epigástrico y gastritis (debido al ácido tartárico excipiente; tomar con las comidas o asociar IBP).',
      'Aclaramiento de creatinina (Cockcroft-Gault) cada 3-6 meses.',
      'Tiempo de trombina o tiempo de coagulación de ecarina si se precisa evaluar efecto.'
    ],
    evidenceAndSources: [
      {
        title: 'RE-LY Clinical Trial',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'Dabigatrán 150 mg dos veces al día redujo el ictus y embolia sistémica en un 35% frente a warfarina con menor sangrado con riesgo vital.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: '150 mg cada 12 horas (o 110 mg cada 12 horas si edad ≥80 años).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: '110 mg cada 12 horas con monitorización estricta.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min o Diálisis',
        adjustmentText: 'CONTRAINDICADO ABSOLUTAMENTE por eliminación renal del 80%.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación',
      summary: 'Atraviesa la barrera placentaria; riesgo de hemorragia fetal. Contraindicado en el embarazo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Heparina de bajo peso molecular (Enoxaparina).'
    }
  },
  {
    id: 'lisinopril',
    name: 'Lisinopril',
    commercialNames: ['Prinivil', 'Zestril', 'Acerbon', 'Lisinopril'],
    category: 'Cardiovascular',
    atcCode: 'C09AA03',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) de Larga Duración',
    badgeText: 'Cardiovascular · IECA de 24h',
    shortDescription: 'IECA hidrofílico no profármaco (molécula activa directa) con vida media de 12 horas y efecto vasodilatador sostenido de 24 horas. Fármaco de referencia para hipertensión, insuficiencia cardíaca y nefropatía diabética.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'lisin-comp-5',
        name: 'Comprimidos Ranurados 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'lisin-comp-10',
        name: 'Comprimidos Ranurados 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'lisin-comp-20',
        name: 'Comprimidos Ranurados 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'lisin-ind-hta',
        name: 'Hipertensión Arterial / Nefroprotección Diabética en Adultos',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 40,
        description: 'Dosis inicial de 10 mg una vez al día por la mañana (5 mg en ancianos o con diuréticos). Titular según cifras de PA hasta 20 a 40 mg una vez al día.'
      },
      {
        id: 'lisin-ind-ic',
        name: 'Insuficiencia Cardíaca / Post-Infarto Agudo de Miocardio',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 35,
        maxSingleDoseMg: 35,
        description: 'Iniciar con 2.5 a 5 mg una vez al día; titular cada 2 semanas hasta la dosis objetivo de 20 a 35 mg diarios.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial esencial, especialmente en diabéticos (reduce albuminuria y progresión de ERC).',
      'Insuficiencia cardíaca congestiva con FEVI reducida.',
      'Post-infarto agudo de miocardio en las primeras 24 horas si el paciente está hemodinámicamente estable.'
    ],
    pearlsAndPitfalls: [
      'Tos seca persistente mediada por bradicinina en el 5-15% de pacientes (si es intolerable, rotar a ARA-II como losartán o valsartán).',
      'Riesgo de angioedema de lengua y glotis mediado por bradicinina (más frecuente en personas de raza negra).',
      'Al no requerir biotransformación hepática (es la molécula activa directa), es idóneo en pacientes con hepatopatía crónica.'
    ],
    monitoringAndSideEffects: [
      'Creatinina sérica y potasio sérico a los 7-14 días del inicio o ajuste (un aumento de creatinina hasta el 30% es fisiológico y aceptable).',
      'Presión arterial basal y ortostática.',
      'Tos seca nocturna o edema labial/orofaríngeo.'
    ],
    evidenceAndSources: [
      {
        title: 'ALLHAT & ATLAS Clinical Trials',
        source: 'Lancet & Circulation',
        year: '2023 Guidelines',
        summary: 'Confirmó que dosis altas de lisinopril (32.5-35 mg/día) logran mayor reducción de hospitalizaciones por insuficiencia cardíaca frente a dosis bajas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis habitual de inicio 10 mg.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 29 mL/min',
        adjustmentText: 'Iniciar con 2.5 a 5 mg una vez al día.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '2.5 mg una vez al día (se dializa; administrar tras diálisis).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico y Fetotóxico)',
      summary: 'Causa fallo renal fetal, oligohidramnios, hipoplasia pulmonar y defectos craneales. CONTRAINDICADO en todo el embarazo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa, Labetalol o Nifedipino.'
    }
  },
  {
    id: 'ramipril',
    name: 'Ramipril',
    commercialNames: ['Altace', 'Triatec', 'Tritace', 'Vesdil'],
    category: 'Cardiovascular',
    atcCode: 'C09AA05',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de la ECA de Alta Lipofilia y Penetración Tisular · Cardio-Nefroprotector',
    badgeText: 'Cardiovascular · Prevención Cardiovascular HOPE',
    shortDescription: 'Profármaco que se hidroliza a ramiprilato, caracterizado por una afinidad extraordinariamente alta por la ECA endotelial y tisular. Fármaco de referencia con evidencia de primer nivel (estudio HOPE) para reducción de eventos cardiovasculares mayores.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'rami-comp-25',
        name: 'Comprimidos / Cápsulas 2.5 mg',
        amountMg: 2.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'rami-comp-5',
        name: 'Comprimidos / Cápsulas 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'rami-comp-10',
        name: 'Comprimidos / Cápsulas 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'rami-ind-prevencion-cv',
        name: 'Reducción de Riesgo Cardiovascular Global (Ensayo HOPE) en Adultos (≥55 años)',
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: 'Iniciar con 2.5 mg una vez al día por 1 semana, luego 5 mg una vez al día por 3 semanas, hasta la dosis objetivo de 10 mg una vez al día.'
      },
      {
        id: 'rami-ind-ic-postiam',
        name: 'Insuficiencia Cardíaca Post-Infarto de Miocardio (Ensayo AIRE)',
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 5,
        description: 'Iniciar con 2.5 mg cada 12 horas; titular hasta la dosis diana de 5 mg cada 12 horas.'
      }
    ],
    whenToUse: [
      'Pacientes de alto riesgo cardiovascular con cardiopatía isquémica, ictus previo o enfermedad vascular periférica más diabetes.',
      'Hipertensión arterial con hipertrofia ventricular izquierda o microalbuminuria.',
      'Disfunción sistólica ventricular izquierda post-infarto.'
    ],
    pearlsAndPitfalls: [
      'Mayor inhibición de la ECA tisular en la pared arterial y miocardio comparado con otros IECAs hidrófilos.',
      'Ensayo HOPE: redujo en un 22% la muerte cardiovascular, infarto de miocardio o ictus en pacientes de alto riesgo sin insuficiencia cardíaca previa.',
      'Tos seca irritativa en el 10% y riesgo de hiperpotasemia en nefropatía diabética.'
    ],
    monitoringAndSideEffects: [
      'Creatinina y potasio sérico antes de titular a 10 mg/día.',
      'Presión arterial sistólica.',
      'Tolerancia respiratoria (ausencia de tos persistente).'
    ],
    evidenceAndSources: [
      {
        title: 'HOPE & AIRE Landmark Clinical Trials',
        source: 'New England Journal of Medicine & Lancet',
        year: '2023 Update',
        summary: 'Consolidó a ramipril 10 mg al día como el estándar de oro para la protección vascular y prevención secundaria en pacientes de alto riesgo.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 60 mL/min',
        adjustmentText: 'Dosis estándar con titulación a 10 mg.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 59 mL/min',
        adjustmentText: 'Iniciar con 1.25 mg al día; dosis máxima 5 mg al día.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 30 mL/min o Diálisis',
        adjustmentText: 'Iniciar con 1.25 mg en días alternos; dosis máxima 5 mg al día.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Fetotóxico)',
      summary: 'Inhibe el eje renina-angiotensina fetal causando anuria, hipoplasia pulmonar y muerte fetal. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metildopa, Labetalol o Nifedipino.'
    }
  },
  {
    id: 'bisoprolol',
    name: 'Bisoprolol',
    commercialNames: ['Concor', 'Zebeta', 'Emconcor', 'BisoLich'],
    category: 'Cardiovascular',
    atcCode: 'C07AB07',
    awareCategory: 'Access',
    therapeuticClass: 'Betabloqueador Altamente Cardioselectivo Beta-1 · Estándar en ICFEr (CIBIS-II)',
    badgeText: 'Cardiovascular · Beta-1 Puro (1 vez al día)',
    shortDescription: 'Bloqueador selectivo de los receptores adrenérgicos beta-1 con el índice de cardioselectividad más elevado de toda la clase (ratio beta-1/beta-2 de 1:75). Uno de los tres betabloqueantes con beneficio demostrado en reducción de mortalidad en insuficiencia cardíaca.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'biso-comp-125',
        name: 'Comprimidos Ranurados 1.25 mg (Dosis de Inicio IC)',
        amountMg: 1.25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'biso-comp-25',
        name: 'Comprimidos Ranurados 2.5 mg',
        amountMg: 2.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'biso-comp-5',
        name: 'Comprimidos Ranurados 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'biso-comp-10',
        name: 'Comprimidos Ranurados 10 mg (Dosis Máxima Objetivo)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'biso-ind-icfer',
        name: 'Insuficiencia Cardíaca con FEVI Reducida (ICFEr / CIBIS-II)',
        fixedAdultDoseMg: 1.25,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: 'Iniciar con 1.25 mg una vez al día por la mañana durante 2 semanas. Titular escalonadamente: 2.5 mg, 3.75 mg, 5 mg, 7.5 mg hasta la dosis objetivo de 10 mg una vez al día según tolerancia (FC y PA).'
      },
      {
        id: 'biso-ind-hta-angina',
        name: 'Hipertensión Arterial / Angina de Pecho Estable',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 20,
        description: '5 mg una vez al día; puede incrementarse a 10 mg una vez al día (máximo 20 mg/día).'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea en insuficiencia cardíaca crónica estable con FEVI ≤ 40%.',
      'Hipertensión arterial asociada a taquicardia sinusal, cardiopatía isquémica o temblor esencial.',
      'Control de frecuencia ventricular en fibrilación auricular permanente.'
    ],
    pearlsAndPitfalls: [
      'Mayor cardioselectividad beta-1 que metoprolol o atenolol: menor riesgo de broncoespasmo en pacientes con EPOC leve o asma bien controlada.',
      'Eliminación balanceada 50% hepática y 50% renal: no se acumula desproporcionadamente en insuficiencia renal aislada.',
      'Nunca suspender de forma brusca: riesgo de taquicardia refleja de rebote, angina inestable e infarto de miocardio.'
    ],
    monitoringAndSideEffects: [
      'Frecuencia cardíaca en reposo (objetivo en IC: 55-65 lpm).',
      'Presión arterial sistólica y signos de bradicardia o bloqueo AV (ECG).',
      'Sensación de fatiga o astenia en las primeras semanas de tratamiento.'
    ],
    evidenceAndSources: [
      {
        title: 'CIBIS-II Clinical Trial',
        source: 'The Lancet',
        year: '2023 Guidelines',
        summary: 'Demostró una impresionante reducción del 34% en la mortalidad por todas las causas y una disminución del 44% en muerte súbita cardíaca en pacientes con insuficiencia cardíaca moderada a severa.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 20 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 20 mL/min o Hemodiálisis',
        adjustmentText: 'Dosis máxima recomendada de 10 mg al día.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio en Gestación',
      summary: 'Puede causar retraso del crecimiento intrauterino y bradicardia/hipoglucemia neonatal al nacimiento.',
      clinicalAlternative: 'Labetalol es el betabloqueante de primera elección en el embarazo.'
    }
  },
  {
    id: 'nebivolol',
    name: 'Nebivolol',
    commercialNames: ['Bystolic', 'Lobivon', 'Silostar', 'Nebilet'],
    category: 'Cardiovascular',
    atcCode: 'C07AB12',
    awareCategory: 'Access',
    therapeuticClass: 'Betabloqueador de 3.ª Generación Vasodilatador Mediado por Óxido Nítrico',
    badgeText: 'Cardiovascular · Beta-1 + Vasodilatador NO',
    shortDescription: 'Betabloqueante de tercera generación con doble mecanismo: bloqueo altamente selectivo beta-1 y vasodilatación periférica mediada por estimulación endotelial de la L-arginina / óxido nítrico sintasa. No altera el perfil lipídico ni glucémico y tiene la menor incidencia de disfunción eréctil.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'nebi-comp-25',
        name: 'Comprimidos Ranurados 2.5 mg',
        amountMg: 2.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'nebi-comp-5',
        name: 'Comprimidos Ranurados en Cruz 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'nebi-comp-10',
        name: 'Comprimidos Ranurados 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'nebi-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '5 mg una vez al día con o sin alimentos (2.5 mg en ancianos o falla renal). El efecto antihipertensivo pleno se instaura a las 1-2 semanas.'
      },
      {
        id: 'nebi-ind-ic-ancianos',
        name: 'Insuficiencia Cardíaca en Pacientes de Edad Avanzada (≥70 años, Ensayo SENIORS)',
        fixedAdultDoseMg: 1.25,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: 'Iniciar con 1.25 mg una vez al día; titular cada 1-2 semanas hasta la dosis máxima tolerada (hasta 10 mg al día).'
      }
    ],
    whenToUse: [
      'Hipertensión en varones jóvenes o de mediana edad preocupados por la disfunción sexual (menor tasa de disfunción eréctil por vasodilatación por óxido nítrico).',
      'Hipertensión con síndrome metabólico, diabetes o dislipidemia (respeto neutro o favorable sobre la sensibilidad a la insulina).',
      'Insuficiencia cardíaca estable en ancianos (estudio SENIORS).'
    ],
    pearlsAndPitfalls: [
      'Vasodilatación fisiológica activa: Estimula la liberación endotelial de óxido nítrico, reduciendo la rigidez arterial y la onda de pulso central.',
      'Metabolizado por CYP2D6: Los metabolizadores lentos (aprox. 10% de la población caucásica) tienen vidas medias más prolongadas pero mantienen excelente eficacia.',
      'Ausencia del efecto vasoconstrictor periférico típico de los betabloqueantes clásicos (extremidades frías).'
    ],
    monitoringAndSideEffects: [
      'Frecuencia cardíaca en reposo.',
      'Presión arterial sistólica y diastólica.',
      'Cefalea vasodilatadora leve o mareo al inicio.'
    ],
    evidenceAndSources: [
      {
        title: 'SENIORS Clinical Trial',
        source: 'European Heart Journal',
        year: '2023 Guidelines',
        summary: 'Demostró una reducción del 14% en la combinación de muerte por todas las causas u hospitalizaciones cardiovasculares en pacientes ancianos con IC independientemente de la FEVI.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar de 5 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Iniciar con 2.5 mg una vez al día; titular con precaución.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en Gestación',
      summary: 'Datos limitados en humanos. Puede causar hipoperfusión placentaria.',
      clinicalAlternative: 'Labetalol o Metildopa.'
    }
  },
  {
    id: 'propranolol',
    name: 'Propranolol',
    commercialNames: ['Inderal', 'Inderalici', 'Propranolol'],
    category: 'Cardiovascular',
    atcCode: 'C07AA05',
    awareCategory: 'Access',
    therapeuticClass: 'Betabloqueador No Selectivo Puro (Beta-1 y Beta-2) de Alta Lipofilia',
    badgeText: 'Cardiovascular · Beta No Selectivo',
    shortDescription: 'Betabloqueador no selectivo prototipo altamente lipofílico que cruza rápidamente la barrera hematoencefálica. Indicado en hipertensión portal, hemangiomas infantiles, profilaxis de migraña, temblor esencial y tormenta tiroidea.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'prop-sol-ped-4',
        name: 'Solución Oral Pediátrica 3.75 mg / mL (Hemangiol)',
        amountMg: 3.75,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'prop-comp-10',
        name: 'Comprimidos 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'prop-comp-40',
        name: 'Comprimidos Ranurados 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'prop-amp-1',
        name: 'Ampolla Inyectable IV 1 mg / 1 mL',
        amountMg: 1,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'prop-ind-hta-portal',
        name: 'Profilaxis de Sangrado por Várices Esofágicas (Hipertensión Portal en Cirrosis)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 320,
        maxSingleDoseMg: 160,
        description: 'Iniciar con 20 a 40 mg cada 12 horas; titular hasta reducir la frecuencia cardíaca en reposo en un 25% o hasta alcanzar 55-60 lpm.'
      },
      {
        id: 'prop-ind-hemangioma-peds',
        name: 'Hemangioma Infantil Proliferativo Pediátrico (Hemangiol)',
        recommendedDoseMgPerKgPerDay: 2,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 3,
        fixedAdultDoseMg: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '6 meses',
        maxDailyDoseMg: 3,
        maxSingleDoseMg: 1.5,
        description: '1 mg/kg/día dividido cada 12 horas durante la 1.ª semana, luego 2 mg/kg/día dividido cada 12 horas administrado DURANTE O INMEDIATAMENTE TRAS LA TOMA DE LECHE para evitar hipoglucemia.'
      },
      {
        id: 'prop-ind-tirotoxicosis-temblor',
        name: 'Tormenta Tiroidea / Temblor Esencial / Profilaxis de Migraña',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Según indicación',
        maxDailyDoseMg: 240,
        maxSingleDoseMg: 80,
        description: '40 a 80 mg cada 8 horas (en crisis tirotóxica inhibe también la conversión periférica de T4 a T3).'
      }
    ],
    whenToUse: [
      'Prevención primaria y secundaria de hemorragia digestiva por várices esofágicas en cirrosis (bloqueo beta-2 causa vasoconstricción esplácnica refleja).',
      'Tratamiento de primera línea para hemangiomas infantiles que comprometen la función visual, aérea o estética.',
      'Crisis de pánico con síntomas autonómicos motores (taquicardia, temblor fino).'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA EN ASMA!: Al bloquear receptores beta-2 bronquiales, desencadena broncoespasmo grave o letal en pacientes asmáticos.',
      'En pediatría (hemangiomas): NUNCA administrar en ayunas por riesgo de hipoglucemia severa sintomática con convulsiones.',
      'Inhibe la conversión periférica de tiroxina (T4) a triyodotironina (T3) por la 5\'-monodesyodasa, confiriendo un beneficio metabólico único en la tirotoxicosis.'
    ],
    monitoringAndSideEffects: [
      'Glucemia capilar en lactantes tratados por hemangioma.',
      'Frecuencia cardíaca y presión arterial.',
      'Aparición de sibilancias o disnea.'
    ],
    evidenceAndSources: [
      {
        title: 'Baveno VII Consensus on Portal Hypertension',
        source: 'Journal of Hepatology',
        year: '2023',
        summary: 'Mantiene a los betabloqueantes no selectivos como el tratamiento médico de primera elección para prevenir la descompensación en cirrosis.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; metabolismo hepático casi total (>90%).',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio en Gestación',
      summary: 'Puede provocar retraso en el crecimiento intrauterino y depresión respiratoria neonatal transitoria.',
      clinicalAlternative: 'Labetalol para hipertensión materna.'
    }
  },
  {
    id: 'esmolol',
    name: 'Esmolol',
    commercialNames: ['Brevibloc', 'Esmolol'],
    category: 'Cardiovascular',
    atcCode: 'C07AB09',
    awareCategory: 'Access',
    therapeuticClass: 'Betabloqueador Cardioselectivo Beta-1 Intravenoso de Acción Ultracorta',
    badgeText: 'Cardiovascular · Beta-1 UCI (Vida Media 9 min)',
    shortDescription: 'Betabloqueador cardioselectivo beta-1 intravenoso con una vida media de eliminación ultracorta de solo 9 minutos gracias a su rápida hidrólisis por esterasas eritrocitarias. Fármaco de oro para control agudo de frecuencia y presión en disección aórtica y taquiarritmias perioperatorias.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'esmo-amp-100',
        name: 'Vial Inyectable IV 100 mg / 10 mL (10 mg/mL)',
        amountMg: 100,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      },
      {
        id: 'esmo-bolsa-2500',
        name: 'Bolsa para Infusión IV 2500 mg / 250 mL (10 mg/mL) (Brevibloc)',
        amountMg: 2500,
        volumeMl: 250,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'esmo-ind-diseccion-aortica',
        name: 'Disección Aórtica Aguda / Taquicardia Supraventricular en UCI / Quirófano',
        fixedAdultDoseMg: 35,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento agudo en UCI',
        maxDailyDoseMg: 5000,
        maxSingleDoseMg: 50,
        description: 'Dosis de carga opcional: 500 mcg/kg (0.5 mg/kg) IV en 1 minuto. Infusión continua de mantenimiento: 50 mcg/kg/min; titular cada 5-10 minutos en incrementos de 50 mcg/kg/min hasta 200 a 300 mcg/kg/min según FC y PA.'
      }
    ],
    whenToUse: [
      'Disección aórtica aguda (administrar ANTES del vasodilatador como nitroprusiato para frenar la fuerza de eyección dP/dt y evitar rotura aórtica).',
      'Control rápido de la frecuencia ventricular en fibrilación auricular o flutter con respuesta ventricular rápida en pacientes inestables.',
      'Taquicardia e hipertensión intraoperatoria y en el despertar anestésico.'
    ],
    pearlsAndPitfalls: [
      '¡Vida Media de 9 Minutos!: Si el paciente desarrolla hipotensión severa o bradicardia, basta con detener la infusión; el efecto desaparece por completo en menos de 15 a 20 minutos sin necesidad de antídoto.',
      'Metabolismo independiente de riñón e hígado: Es degradado rápidamente por esterasas del citosol de los glóbulos rojos.',
      'En disección aórtica, el objetivo estricto es FC < 60 lpm y PAS < 120 mmHg.'
    ],
    monitoringAndSideEffects: [
      'Monitorización electrocardiográfica continua y presión arterial invasiva por línea arterial.',
      'Hipotensión dependiente de dosis (se revierte deteniendo o bajando la tasa de infusión).',
      'Flebitis en sitios de venoclisis periférica (preferir catéter venoso central o vena de gran calibre).'
    ],
    evidenceAndSources: [
      {
        title: 'AHA/ACC Guideline for the Management of Aortic Disease',
        source: 'Circulation',
        year: '2023',
        summary: 'Recomienda esmolol intravenoso como el betabloqueante parenteral preferido para el control hemodinámico inicial inmediato del síndrome aórtico agudo.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; degradado por esterasas eritrocitarias.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Uso de Emergencia Crítica en Gestación',
      summary: 'Acción ultrarrápida y controlable en emergencias hipertensivas o tirotoxicosis periparto.',
      clinicalAlternative: 'Labetalol IV como alternativa estándar.'
    }
  },
  {
    id: 'nifedipino',
    name: 'Nifedipino',
    commercialNames: ['Adalat OROS', 'Adalat CC', 'Procardia XL', 'Nifedipino'],
    category: 'Cardiovascular',
    atcCode: 'C08CA05',
    awareCategory: 'Access',
    therapeuticClass: 'Bloqueador de Canales de Calcio Dihidropiridínico de Larga Duración · Tocolítico y Antihipertensivo',
    badgeText: 'Cardiovascular · Calcioantagonista OROS',
    shortDescription: 'Calcioantagonista dihidropiridínico con potente acción vasodilatadora arteriolar selectiva. La formulación OROS (bomba osmótica de liberación prolongada) confiere un control antihipertensivo continuo de 24 horas sin taquicardia refleja y es de elección en hipertensión en el embarazo y tocolisis.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'nife-comp-30-oros',
        name: 'Comprimidos de Liberación Osmótica 30 mg (Adalat OROS)',
        amountMg: 30,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tragar ENTEROS; expulsión de la matriz plástica vacía en heces'
      },
      {
        id: 'nife-comp-60-oros',
        name: 'Comprimidos de Liberación Osmótica 60 mg (Adalat OROS)',
        amountMg: 60,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'nife-caps-10-retard',
        name: 'Comprimidos Retard 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'nife-ind-hta',
        name: 'Hipertensión Arterial / Angina Estable en Adultos',
        fixedAdultDoseMg: 30,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 90,
        maxSingleDoseMg: 90,
        description: '30 mg una vez al día por la mañana (Adalat OROS); puede titularse cada 1-2 semanas a 60 mg una vez al día (máximo 90 mg/día).'
      },
      {
        id: 'nife-ind-preeclampsia',
        name: 'Emergencia Hipertensiva en el Embarazo / Preeclampsia Grave',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Fase aguda',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '10 a 20 mg vía oral (cápsula de liberación inmediata deglutida con agua, NUNCA sublingual). Repetir a los 20-30 minutos si la PA sistólica continúa ≥ 160 o diastólica ≥ 110 mmHg.'
      },
      {
        id: 'nife-ind-tocolisis',
        name: 'Tocolisis en Amenaza de Parto Prematuro (24 a 34 semanas)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Máximo 48 horas',
        maxDailyDoseMg: 160,
        maxSingleDoseMg: 20,
        description: 'Dosis de carga: 20 mg oral (repetir 10-20 mg a los 30 min si persisten contracciones). Mantenimiento: 10 a 20 mg cada 4 a 6 horas durante 48 horas para permitir la maduración pulmonar fetal con corticoides.'
      }
    ],
    whenToUse: [
      'Hipertensión arterial en personas de raza negra y adultos mayores (mayor respuesta vascular por baja renina).',
      'Preeclampsia grave y crisis hipertensivas del embarazo.',
      'Fenómeno de Raynaud primario o secundario a esclerosis sistémica (vasodilatación periférica ungueal).'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN HISTÓRICA DEL NIFEDIPINO SUBLINGUAL!: La cápsula sublingual o mordida produce caídas tensionales precipitadas incontrolables con taquicardia refleja, robo coronario, ictus e infartos agudos. Usar EXCLUSIVAMENTE formulaciones de liberación prolongada deglutidas.',
      'La cáscara o matriz insoluble no absorbible del comprimido OROS se elimina intacta en las heces; advertir al paciente para que no se alarme.',
      'Edema maleolar bilateral por vasodilatación precapilar arteriolar (no responde a diuréticos; responde a IECA/ARA-II asociados).'
    ],
    monitoringAndSideEffects: [
      'Edema periférico de tobillos y pies.',
      'Cefalea pulsátil y sofocos o rubor facial.',
      'Presión arterial materna y frecuencia cardíaca fetal en preeclampsia.'
    ],
    evidenceAndSources: [
      {
        title: 'ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia',
        source: 'Obstetrics & Gynecology',
        year: '2023 Guidelines',
        summary: 'Establece al nifedipino oral como uno de los tres fármacos de primera línea esenciales para el manejo agudo y crónico de la preeclampsia severa.'
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
      statusLabel: 'Compatible / Fármaco de 1.ª Línea en Gestación',
      summary: 'Extensa experiencia de bioseguridad en el segundo y tercer trimestre en preeclampsia y tocolisis sin efectos teratogénicos.',
      clinicalAlternative: 'Fármaco de elección junto a Labetalol.'
    }
  },
  {
    id: 'diltiazem',
    name: 'Diltiazem',
    commercialNames: ['Cardizem', 'Tilazem', 'Diltiazem', 'Tiazac'],
    category: 'Cardiovascular',
    atcCode: 'C08DB01',
    awareCategory: 'Access',
    therapeuticClass: 'Bloqueador de Canales de Calcio No Dihidropiridínico (Benzotiazepina)',
    badgeText: 'Cardiovascular · Calcioantagonista No Dihidro',
    shortDescription: 'Calcioantagonista intermedio que combina una eficaz vasodilatación coronaria con una potente inhibición de la conducción del nodo auriculoventricular y reducción de la contractilidad miocárdica. De elección para frenar la frecuencia en fibrilación auricular con respuesta rápida.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'dilt-comp-60',
        name: 'Comprimidos Ranurados 60 mg',
        amountMg: 60,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'dilt-caps-120-cd',
        name: 'Cápsulas de Liberación Prolongada 120 mg (Cardizem CD)',
        amountMg: 120,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'dilt-caps-240-cd',
        name: 'Cápsulas de Liberación Prolongada 240 mg',
        amountMg: 240,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula'
      },
      {
        id: 'dilt-vial-25',
        name: 'Vial Inyectable IV 25 mg / 5 mL (5 mg/mL)',
        amountMg: 25,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'dilt-ind-fa-aguda',
        name: 'Control Rápido de Frecuencia Ventricular en Fibrilación Auricular / Flutter (IV)',
        fixedAdultDoseMg: 15,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Fase de urgencia',
        maxDailyDoseMg: 360,
        maxSingleDoseMg: 25,
        description: 'Bolo IV lento: 0.25 mg/kg (promedio 15 a 20 mg) en 2 minutos. Si respuesta insuficiente tras 15 minutos: segundo bolo de 0.35 mg/kg (25 mg). Infusión de mantenimiento: 5 a 15 mg/hora.'
      },
      {
        id: 'dilt-ind-angina-hta',
        name: 'Angina de Pecho / Angina Vasoespástica de Prinzmetal / Hipertensión',
        fixedAdultDoseMg: 120,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 360,
        maxSingleDoseMg: 360,
        description: 'Cápsulas de liberación prolongada: 120 a 240 mg una vez al día con agua (hasta 360 mg/día según respuesta).'
      }
    ],
    whenToUse: [
      'Control de frecuencia cardíaca en fibrilación auricular o flutter en pacientes con FEVI conservada (>40%).',
      'Angina vasoespástica o variante de Prinzmetal (de elección para prevenir espasmo coronario).',
      'Hipertensión arterial en pacientes con contraindicación para betabloqueantes (ej. asma grave).'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICADO EN INSUFICIENCIA CARDÍACA CON FEVI REDUCIDA (FEVI < 40%)!: Por su efecto inotrópico negativo puede precipitar shock cardiogénico o edema agudo de pulmón descompensado.',
      'Contraindicado en síndrome de preexcitación (Wolff-Parkinson-White) con fibrilación auricular: al bloquear el nodo AV, favorece la conducción preferente por la vía accesoria, pudiendo desencadenar fibrilación ventricular y parada cardíaca.',
      'Inhibidor moderado del citocromo CYP3A4: aumenta niveles de estatinas, ciclosporina y anticoagulantes directos.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (intervalo PR y frecuencia ventricular).',
      'Hipotensión arterial y bradicardia sinusal.',
      'Estreñimiento y edema maleolar.'
    ],
    evidenceAndSources: [
      {
        title: 'ESC Guidelines for the Management of Atrial Fibrillation',
        source: 'European Heart Journal',
        year: '2023 Update',
        summary: 'Recomienda diltiazem o betabloqueantes como fármacos de primera elección para el control agudo y crónico de la frecuencia ventricular en FA con FEVI conservada.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'Usar con precaución; metabolizado principalmente en hígado.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Evitar en Gestación',
      summary: 'Efectos teratogénicos y embriocidas en animales. Evitar salvo necesidad cardiovascular extrema.',
      clinicalAlternative: 'Labetalol, Nifedipino o Metoprolol.'
    }
  },
  {
    id: 'verapamilo',
    name: 'Verapamilo',
    commercialNames: ['Isoptin', 'Calan', 'Verelan', 'Verapamilo'],
    category: 'Cardiovascular',
    atcCode: 'C08DA01',
    awareCategory: 'Access',
    therapeuticClass: 'Bloqueador de Canales de Calcio Fenilalquilamina (No Dihidropiridínico) · Antiarrítmico Clase IV',
    badgeText: 'Cardiovascular · Antiarrítmico Clase IV',
    shortDescription: 'Calcioantagonista con potente selectividad miocárdica sobre el nodo sinusal y auriculoventricular. Produce un potente retraso de la conducción AV, prolongando el periodo refractario nodal. Estándar de oro para yugular taquicardias supraventriculares paroxísticas.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'vera-comp-80',
        name: 'Comprimidos Recubiertos 80 mg',
        amountMg: 80,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'vera-comp-240-sr',
        name: 'Comprimidos de Liberación Sostenida 240 mg (Isoptin Retard)',
        amountMg: 240,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'vera-amp-5',
        name: 'Ampolla Inyectable IV 5 mg / 2 mL (2.5 mg/mL)',
        amountMg: 5,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'vera-ind-tsvp-aguda',
        name: 'Reversión Aguda de Taquicardia Supraventricular Paroxística (TSVP) (IV)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Procedimiento agudo en urgencias',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 10,
        description: 'Bolo IV lento en 2 minutos: 5 a 10 mg (0.075 a 0.15 mg/kg). Si no revierte tras 15-30 minutos: segundo bolo de 10 mg (0.15 mg/kg).'
      },
      {
        id: 'vera-ind-angina-fa',
        name: 'Angina de Pecho / Control de Frecuencia en Fibrilación Auricular / Cefalea en Racimos',
        fixedAdultDoseMg: 80,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Crónico',
        maxDailyDoseMg: 480,
        maxSingleDoseMg: 240,
        description: 'Oral: 80 mg cada 8 horas (o 240 mg una vez al día en formulación Retard). En cefalea en racimos (cluster headache) se titula hasta 360-480 mg/día con ECG seriado.'
      }
    ],
    whenToUse: [
      'Terminación de TSVP por reentrada nodal cuando las maniobras vagales y adenosina fallan o están contraindicadas (asma grave).',
      'Profilaxis de cefalea en racimos episódica y crónica (fármaco preventivo de elección).',
      'Cardiopatía isquémica con angina y miocardiopatía hipertrófica obstructiva (mejora el llenado diastólico).'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN MORTAL EN TAQUICARDIA DE COMPLEJO ANCHO!: NUNCA administrar verapamilo en taquicardias ventriculares o de complejo ancho indiferenciadas; provoca colapso cardiovascular irreversible y parada cardíaca.',
      'Contraindicación absoluta con betabloqueantes IV concomitantes (riesgo de asistolia completa y bloqueo auriculoventricular de 3.er grado).',
      'Efecto adverso muy común: Estreñimiento severo en hasta un 30% de los pacientes (inhibición de la motilidad colónica dependiente de calcio).'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (vigilar intervalo PR; suspender si bloqueo AV de 2.º o 3.er grado).',
      'Presión arterial sistólica.',
      'Hábito intestinal y estreñimiento.'
    ],
    evidenceAndSources: [
      {
        title: 'AHA/ACC/HRS Guideline for the Management of Adult Patients with Supraventricular Tachycardia',
        source: 'Circulation',
        year: '2023',
        summary: 'Recomienda verapamilo intravenoso como fármaco de clase I para la terminación aguda de TSVP hemodinámicamente estable.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación hepática del 95%.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Usar con Precaución en Gestación',
      summary: 'Puede usarse en arritmias fetales o maternas de difícil control con monitorización estrecha.',
      clinicalAlternative: 'Adenosina IV para TSVP o Labetalol para hipertensión.'
    }
  },
  {
    id: 'clonidina',
    name: 'Clonidina',
    commercialNames: ['Catapres', 'Catapresan', 'Clonidina'],
    category: 'Cardiovascular',
    atcCode: 'C02AC01',
    awareCategory: 'Access',
    therapeuticClass: 'Agonista Alfa-2 Adrenérgico Central · Antihipertensivo Simpatolítico',
    badgeText: 'Cardiovascular · Agonista Alfa-2 Central',
    shortDescription: 'Estimulante selectivo de receptores alfa-2 adrenérgicos presinápticos en el tronco del encéfalo. Disminuye de forma centralizada la descarga simpática eferente hacia el corazón y vasos periféricos, reduciendo rápidamente la presión arterial y la frecuencia cardíaca.',
    availableRoutes: ['oral', 'transdermica', 'iv'],
    concentrations: [
      {
        id: 'cloni-comp-01',
        name: 'Comprimidos Ranurados 0.1 mg (100 mcg)',
        amountMg: 0.1,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'cloni-comp-02',
        name: 'Comprimidos Ranurados 0.2 mg (200 mcg)',
        amountMg: 0.2,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'cloni-amp-015',
        name: 'Ampolla Inyectable IV 0.15 mg / 1 mL (150 mcg)',
        amountMg: 0.15,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'cloni-ind-urgencia-hta',
        name: 'Urgencia Hipertensiva Asintomática en Adultos (Sin Daño de Órgano Blanco)',
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '1-3 días',
        maxDailyDoseMg: 0.6,
        maxSingleDoseMg: 0.2,
        description: 'Dosis inicial de 0.1 a 0.2 mg vía oral; puede repetirse 0.1 mg cada hora hasta lograr control o hasta un máximo de 0.6 mg.'
      },
      {
        id: 'cloni-ind-abstinencia-tdah',
        name: 'Síndrome de Abstinencia a Opioides / TDAH en Niños (>6 años)',
        recommendedDoseMgPerKgPerDay: 0.005,
        minDoseMgPerKgPerDay: 0.003,
        maxDoseMgPerKgPerDay: 0.01,
        fixedAdultDoseMg: 0.1,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Según protocolo',
        maxDailyDoseMg: 0.4,
        maxSingleDoseMg: 0.1,
        description: 'En abstinencia a opioides: 0.1 a 0.2 mg cada 6 a 8 horas para mitigar la hiperactividad simpática autonómica.'
      }
    ],
    whenToUse: [
      'Urgencias hipertensivas en atención primaria o urgencias hospitalarias.',
      'Atenuación del exceso simpático en el síndrome de abstinencia a opiáceos, alcohol o nicotina.',
      'Hipertensión resistente combinada con otros fármacos.'
    ],
    pearlsAndPitfalls: [
      '¡CRISIS HIPERTENSIVA DE REBOTE MORTAL!: NUNCA suspender bruscamente la clonidina; la retirada abrupta desencadena una tormenta de catecolaminas con picos hipertensivos masivos y riesgo de hemorragia intracraneal. Reducir la dosis progresivamente a lo largo de 3 a 7 días.',
      'Marcada somnolencia, boca seca y sedación en las primeras tomas.',
      'Bradicardia sinusal potencial (precaución si se asocia a betabloqueantes o digoxina).'
    ],
    monitoringAndSideEffects: [
      'Presión arterial y pulso periférico.',
      'Sequedad de boca y nivel de sedación.',
      'Educación estricta al paciente sobre no omitir dosis.'
    ],
    evidenceAndSources: [
      {
        title: 'Clinical Management of Hypertensive Urgencies',
        source: 'Journal of the American College of Cardiology',
        year: '2023',
        summary: 'Revalida la utilidad de la clonidina oral para el descenso gradual y seguro de la presión arterial en urgencias hipertensivas sin daño agudo de órgano blanco.'
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
        adjustmentText: 'Reducir la dosis al 50-75% por excreción renal inalterada del 50%.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Uso de Segunda Línea en Gestación',
      summary: 'Atraviesa la placenta. Puede utilizarse si fallan los fármacos de primera línea.',
      clinicalAlternative: 'Metildopa o Labetalol de primera elección.'
    }
  },
  {
    id: 'metildopa',
    name: 'Metildopa',
    commercialNames: ['Aldomet', 'Metildopa'],
    category: 'Cardiovascular',
    atcCode: 'C02AB01',
    awareCategory: 'Access',
    therapeuticClass: 'Agonista Alfa-2 Adrenérgico Central · Antihipertensivo Estándar en el Embarazo',
    badgeText: 'Cardiovascular · Hipertensión Gestacional',
    shortDescription: 'Profármaco que se metaboliza en el sistema nervioso central a alfa-metilnoradrenalina, un potente agonista de receptores alfa-2 presinápticos que disminuye el tono simpático vasomotor. Es el antihipertensivo con el mayor registro histórico de seguridad materno-fetal en el mundo.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'metil-comp-250',
        name: 'Comprimidos Recubiertos 250 mg',
        amountMg: 250,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'metil-comp-500',
        name: 'Comprimidos Recubiertos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'metil-ind-embarazo',
        name: 'Hipertensión Crónica y Gestacional en el Embarazo / Preeclampsia Leve',
        fixedAdultDoseMg: 250,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Continuo durante la gestación',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: 'Iniciar con 250 mg cada 12 horas (o cada 8 horas). Titular según cifras tensionales cada 2-3 días hasta 500 mg cada 8 horas (dosis habitual de 500 a 2000 mg al día dividida en 2-4 tomas).'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea para la hipertensión arterial crónica en mujeres que planean el embarazo o ya están embarazadas.',
      'Hipertensión gestacional no proteinúrica a partir de la semana 20 de gestación.',
      'Mantenimiento tras el control de una crisis hipertensiva en preeclampsia.'
    ],
    pearlsAndPitfalls: [
      '¡Seguridad Fetal a Largo Plazo!: Es el único antihipertensivo con seguimiento pediátrico a largo plazo (hasta los 7.5 años de edad) que demostró ausencia absoluta de efectos adversos sobre el neurodesarrollo infantil.',
      'Efectos adversos inmunológicos: Test de Coombs directo positivo en el 10-20% de pacientes tratados por más de 6-12 meses (solo el 1% desarrolla anemia hemolítica inmune real).',
      'Hepatotoxicidad farmacológica: Monitorizar transaminasas basales y periódicas; suspender si aparece ictericia o elevación marcada de transaminasas.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial de la gestante (objetivo: 120-140/80-90 mmHg; evitar hipotensión excesiva que reduzca el flujo uteroplacentario).',
      'Hemograma completo y prueba de Coombs si aparece anemia.',
      'Transaminasas hepáticas (ALT, AST).',
      'Somnolencia diurna y sequedad de mucosas.'
    ],
    evidenceAndSources: [
      {
        title: 'ACOG Practice Guidelines on Chronic Hypertension in Pregnancy',
        source: 'Obstetrics & Gynecology',
        year: '2023 Guidelines',
        summary: 'Recomienda metildopa y labetalol como los fármacos de primera elección de máxima bioseguridad durante la gestación.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar cada 8-12 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 49 mL/min',
        adjustmentText: 'Espaciar intervalo cada 12 a 18 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: 'Espaciar cada 18 a 24 horas; administrar dosis complementaria post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Fármaco de Elección Tradicional en el Embarazo',
      summary: 'Excelente perfil de seguridad materno y fetal confirmado en múltiples ensayos clínicos controlados y seguimiento infantil.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'flecainida',
    name: 'Flecainida',
    commercialNames: ['Tambocor', 'Apocard', 'Flecainida'],
    category: 'Cardiovascular',
    atcCode: 'C01BC04',
    awareCategory: 'Access',
    therapeuticClass: 'Antiarrítmico Clase IC (Bloqueador Potente de Canales Rápidos de Sodio Nav1.5)',
    badgeText: 'Cardiovascular · Antiarrítmico Clase IC ("Pill in the Pocket")',
    shortDescription: 'Antiarrítmico que bloquea potentemente la corriente rápida de sodio (INa) con cinética de disociación lenta. Prolonga de forma marcada el intervalo PR y ensancha el complejo QRS sin alterar sustancialmente la repolarización ventricular. Fármaco de oro para cardioversión médica de la fibrilación auricular en corazones sin cardiopatía estructural.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'fleca-comp-100',
        name: 'Comprimidos Ranurados 100 mg (Tambocor)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'fleca-amp-150',
        name: 'Ampolla Inyectable IV 150 mg / 15 mL (10 mg/mL)',
        amountMg: 150,
        volumeMl: 15,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'fleca-ind-pill-pocket',
        name: 'Cardioversión Farmacológica Ambulatoria de Fibrilación Auricular ("Pill in the Pocket")',
        fixedAdultDoseMg: 300,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única ante episodio paroxístico',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 300,
        description: 'Toma única de 200 a 300 mg por vía oral (200 mg si peso < 70 kg) administrada tras 30 minutos de haber tomado un betabloqueante (ej. metoprolol o bisoprolol) para evitar conducción 1:1 en flutter auricular.'
      },
      {
        id: 'fleca-ind-mantenimiento',
        name: 'Mantenimiento del Ritmo Sinusal en Fibrilación Auricular / Taquicardias por Reentrada AV',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 150,
        description: '50 a 100 mg cada 12 horas por vía oral (máximo 150 mg cada 12 horas).'
      }
    ],
    whenToUse: [
      'Cardioversión farmacológica rápida de fibrilación auricular paroxística de reciente comienzo en pacientes SIN cardiopatía estructural.',
      'Prevención de recurrencias de fibrilación auricular o flutter auricular en corazones estructuralmente sanos.',
      'Taquicardias supraventriculares asociadas al síndrome de Wolff-Parkinson-White.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA EN CARDIOPATÍA ISQUÉMICA O HIPERTROFIA / DISFUNCIÓN VENTRICULAR (ENSAYO CAST)!: En pacientes con antecedentes de infarto de miocardio, enfermedad coronaria o FEVI < 50%, la flecainida desencadena arritmias ventriculares letales (taquicardia ventricular sostenida) y aumenta la mortalidad de forma masiva.',
      'Riesgo de flutter auricular con conducción 1:1 rápida: Administrar SIEMPRE junto a un betabloqueador o diltiazem para frenar el nodo AV.',
      'Suspender inmediatamente si el complejo QRS se ensancha más de un 25% respecto al basal en el ECG.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma basal y de control (anchura del QRS e intervalo PR).',
      'Ecocardiograma previo obligatorio para descartar cardiopatía estructural o disfunción sistólica.',
      'Mareo, visión borrosa o sabor metálico.'
    ],
    evidenceAndSources: [
      {
        title: 'ESC Guidelines for the Diagnosis and Management of Atrial Fibrillation',
        source: 'European Heart Journal',
        year: '2023 Guidelines',
        summary: 'Recomienda fuertemente la estrategia "pill-in-the-pocket" con flecainida oral para pacientes seleccionados con FA paroxística sin cardiopatía estructural significativa.'
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
        adjustmentText: 'Iniciar con 50 mg cada 12 horas y monitorizar niveles plasmáticos (valle 0.2 a 1 mcg/mL).',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible para Arritmias Fetales y Maternas Graves',
      summary: 'Fármaco de elección transplacentario para el tratamiento de la taquicardia supraventricular fetal refractaria.',
      clinicalAlternative: 'Fármaco de elección para taquiarritmia fetal bajo supervisión de medicina materno-fetal.'
    }
  },
  {
    id: 'ivabradina',
    name: 'Ivabradina',
    commercialNames: ['Procoralan', 'Corlanor', 'Corlentor'],
    category: 'Cardiovascular',
    atcCode: 'C01EB17',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Selectivo y Específico de la Corriente Marcapasos If del Nodo Sinusal',
    badgeText: 'Cardiovascular · Reductor Puro de FC (Nodo Sinusal)',
    shortDescription: 'Inhibidor selectivo de los canales HCN responsables de la corriente marcapasos If en el nodo sinoauricular. Reduce exclusivamente la frecuencia cardíaca en reposo sin alterar la contractilidad miocárdica (inotropismo neutro), la repolarización ventricular ni la presión arterial.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'iva-comp-5',
        name: 'Comprimidos Ranurados 5 mg',
        amountMg: 5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'iva-comp-75',
        name: 'Comprimidos Ranurados 7.5 mg',
        amountMg: 7.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'iva-ind-icfer',
        name: 'Insuficiencia Cardíaca con FEVI Reducida (FEVI ≤ 35%) y Ritmo Sinusal (Ensayo SHIFT)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 7.5,
        description: 'Iniciar con 5 mg cada 12 horas con las comidas (2.5 mg cada 12 horas en ancianos ≥75 años). A las 2-4 semanas titular según frecuencia cardíaca en reposo: si FC > 60 lpm aumentar a 7.5 mg c/12h; si FC entre 50 y 60 lpm mantener; si FC < 50 lpm reducir a 2.5 mg c/12h.'
      },
      {
        id: 'iva-ind-angina',
        name: 'Angina de Pecho Estable Crónica en Adultos',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 7.5,
        description: '5 mg cada 12 horas; titular hasta 7.5 mg cada 12 horas según tolerancia.'
      }
    ],
    whenToUse: [
      'Pacientes con insuficiencia cardíaca sintomática (NYHA II-IV), FEVI ≤ 35%, en RITMO SINUSAL y con frecuencia cardíaca en reposo ≥ 70 lpm a pesar de dosis máxima tolerada de betabloqueante.',
      'Pacientes con ICFEr con intolerancia absoluta o contraindicación a betabloqueantes (ej. asma severa).',
      'Taquicardia sinusal inapropiada refractaria.'
    ],
    pearlsAndPitfalls: [
      '¡REQUISITO OBLIGATORIO: RITMO SINUSAL!: Carece por completo de eficacia en fibrilación auricular o flutter (su diana son exclusivamente los canales marcapasos del nodo sinusal).',
      'Fenómenos fóticos o fosfenos transitorios (percepción aumentada de brillo visual en el campo visual) en hasta un 15% de pacientes debido a la inhibición del canal homólogo retinal Ih; suelen ser leves y ceden espontáneamente.',
      'No tiene efecto sobre la presión arterial sistólica ni diastólica: no causa hipotensión.'
    ],
    monitoringAndSideEffects: [
      'Frecuencia cardíaca en reposo (objetivo diana: 50 a 60 lpm).',
      'Electrocardiograma (vigilar que se mantenga en ritmo sinusal).',
      'Síntomas visuales (fosfenos ante cambios bruscos de luz).'
    ],
    evidenceAndSources: [
      {
        title: 'SHIFT Clinical Trial',
        source: 'The Lancet',
        year: '2023 Guidelines',
        summary: 'Demostró una reducción significativa del 18% en muerte cardiovascular o ingreso hospitalario por empeoramiento de la insuficiencia cardíaca en pacientes con FC ≥ 70 lpm.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 15 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 15 mL/min',
        adjustmentText: 'Usar con precaución por datos limitados.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico)',
      summary: 'Demostró toxicidad embriofetal y defectos cardíacos congénitos en modelos animales. CONTRAINDICADO en mujeres en edad fértil sin anticoncepción eficaz.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Metoprolol o Digoxina.'
    }
  },
  {
    id: 'milrinona',
    name: 'Milrinona',
    commercialNames: ['Primacor', 'Corotrope', 'Milrinona'],
    category: 'Cardiovascular',
    atcCode: 'C01CE02',
    awareCategory: 'Reserve',
    therapeuticClass: 'Inodilatador Inhibidor de la Fosfodiesterasa-3 (PDE-3) Intravenoso',
    badgeText: 'Cardiovascular · Inodilatador UCI',
    shortDescription: 'Inhibidor selectivo de la fosfodiesterasa-3 miocárdica y vascular. Incrementa el AMP cíclico intracelular generando un potente efecto inotrópico positivo directo combinado con vasodilatación arteriolar y venosa periférica, reduciendo la poscarga y mejorando el gasto cardíaco sin depender de receptores beta.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'milri-amp-10',
        name: 'Vial Inyectable IV 10 mg / 10 mL (1 mg/mL) (Primacor)',
        amountMg: 10,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'milri-ind-shock-ic',
        name: 'Insuficiencia Cardíaca Aguda Descompensada / Shock Cardiogénico / Post-Cirugía Cardíaca',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '48 horas en UCI',
        maxDailyDoseMg: 1.13,
        maxSingleDoseMg: 0.05,
        description: 'Dosis de carga (opcional, omitir si PA borderline): 50 mcg/kg IV en 10 minutos. Infusión continua de mantenimiento: 0.375 a 0.75 mcg/kg/min (titular según índice cardíaco y presión arterial).'
      }
    ],
    whenToUse: [
      'Bajo gasto cardíaco persistente en insuficiencia cardíaca aguda descompensada refractaria a diuréticos y vasodilatadores.',
      'Shock cardiogénico en pacientes que están recibiendo betabloqueantes crónicos (su mecanismo por PDE-3 es independiente del receptor beta-adrenérgico).',
      'Hipertensión pulmonar aguda asociada a disfunción del ventrículo derecho post-cirugía cardíaca (produce potente vasodilatación pulmonar).'
    ],
    pearlsAndPitfalls: [
      '¡OMITIR EL BOLO DE CARGA EN PACIENTES CON HIPOTENSIÓN O EN UCI!: El bolo rápido de 50 mcg/kg suele provocar vasodilatación masiva con colapso tensional severo; en la práctica clínica moderna se inicia directamente la infusión continua.',
      'No aumenta el consumo miocárdico de oxígeno en la misma medida que los agonistas beta (dobutamina), gracias a la reducción simultánea de la poscarga.',
      'Riesgo de arritmias ventriculares y supraventriculares (monitorización ECG continua en UCI).'
    ],
    monitoringAndSideEffects: [
      'Presión arterial invasiva y gasto cardíaco.',
      'Monitorización continua del ritmo cardíaco (descartar taquicardia ventricular).',
      'Recuento de plaquetas (trombocitopenia leve en tratamientos >48-72h).',
      'Función renal (ajuste de infusión si ClCr < 50 mL/min).'
    ],
    evidenceAndSources: [
      {
        title: 'DOREMI Clinical Trial: Milrinone vs Dobutamine in Cardiogenic Shock',
        source: 'New England Journal of Medicine',
        year: '2023',
        summary: 'Demostró resultados clínicos equivalentes entre milrinona y dobutamina en shock cardiogénico, siendo la milrinona preferida en pacientes betabloqueados o con hipertensión pulmonar.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: '0.375 a 0.75 mcg/kg/min.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: '0.33 mcg/kg/min.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 29 mL/min',
        adjustmentText: '0.23 mcg/kg/min.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '0.20 mcg/kg/min.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Uso de Rescate Vital en Cuidados Críticos',
      summary: 'Reservado para shock cardiogénico materno potencialmente mortal.',
      clinicalAlternative: 'Dopamina o Dobutamina según situación hemodinámica.'
    }
  },
  {
    id: 'ticagrelor',
    name: 'Ticagrelor',
    commercialNames: ['Brilinta', 'Possia', 'Ticagrelor'],
    category: 'Cardiovascular',
    atcCode: 'B01AC24',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Reversible Directo del Receptor Plaquetario P2Y12 (Ciclopentiltriazolopirimidina)',
    badgeText: 'Cardiovascular · Antiagregante SCA (PLATO)',
    shortDescription: 'Inhibidor oral directo y reversible del receptor plaquetario P2Y12 de ADP. No requiere activación metabólica hepática (inicio de acción rápido) y tiene reversibilidad al suspenderse. Primera línea para síndrome coronario agudo con o sin elevación del ST.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'tica-comp-60',
        name: 'Comprimidos Recubiertos 60 mg (Doble Antiagregación Prolongada >1 año)',
        amountMg: 60,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'tica-comp-90',
        name: 'Comprimidos Recubiertos 90 mg (Fase Aguda SCA)',
        amountMg: 90,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'tica-ind-sca',
        name: 'Síndrome Coronario Agudo (SCACEST y SCASEST) / Post-Angioplastia Coronaria (ICP)',
        fixedAdultDoseMg: 180,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '12 meses',
        maxDailyDoseMg: 180,
        maxSingleDoseMg: 180,
        description: 'Dosis de carga inmediata: 180 mg vía oral (dos comprimidos de 90 mg). Mantenimiento posterior: 90 mg cada 12 horas vía oral asociado a ácido acetilsalicílico (AAS 75-100 mg/día) durante 12 meses.'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea en todos los pacientes con síndrome coronario agudo (angina inestable, IAMSEST o IAMCEST) independientemente de la estrategia inicial (médica o invasiva).',
      'Prevención secundaria a largo plazo (>1 año) en pacientes con alto riesgo isquémico (60 mg cada 12h, estudio PEGASUS-TIMI 54).'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Disnea por Adenosina!: Provoca sensación de disnea transitoria o ahogo en el 10-15% de pacientes debido a la inhibición del transportador equilibrativo de nucleósidos-1 (ENT1) que eleva los niveles plasmáticos de adenosina endógena; suele autolimitarse sin broncoespasmo.',
      'Pausas ventriculares asintomáticas (bradicardia mediada por adenosina) en la primera semana.',
      'Dosis de aspirina asociada: La dosis de ácido acetilsalicílico de mantenimiento DEBE ser baja (75-100 mg diarios); dosis de AAS > 100 mg reducen la eficacia clínica del ticagrelor.'
    ],
    monitoringAndSideEffects: [
      'Signos de sangrado menor o mayor.',
      'Disnea de reposo y tolerancia respiratoria.',
      'Ácido úrico y creatinina sérica (puede causar hiperuricemia leve reversible).'
    ],
    evidenceAndSources: [
      {
        title: 'PLATO Clinical Trial',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'Demostró una reducción significativa del 16% en muerte vascular, infarto de miocardio o ictus, y una reducción del 22% en la mortalidad por todas las causas en comparación con clopidogrel en SCA.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en insuficiencia renal ni hemodiálisis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Riesgo elevado de hemorragia obstétrica masiva. Contraindicado en el embarazo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Aspirina sola a bajas dosis.'
    }
  },
  {
    id: 'rosuvastatina',
    name: 'Rosuvastatina',
    commercialNames: ['Crestor', 'Rosuvastatina', 'Rovartal', 'Provisacol'],
    category: 'Cardiovascular',
    atcCode: 'C10AA07',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Competitivo de la HMG-CoA Reductasa de Alta Potencia (Estatina)',
    badgeText: 'Cardiovascular · Estatina de Alta Intensidad (JUPITER)',
    shortDescription: 'Estatina hidrofílica sintética de máxima potencia reductora del colesterol LDL (hasta un 55-60% de descenso). Mínimo metabolismo por CYP3A4 (menor tasa de interacciones medicamentosas farmacológicas) y con vida media de eliminación prolongada de 19 horas.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'rosu-comp-10',
        name: 'Comprimidos Recubiertos 10 mg (Dosis Moderada-Alta)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'rosu-comp-20',
        name: 'Comprimidos Recubiertos 20 mg (Alta Intensidad)',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'rosu-comp-40',
        name: 'Comprimidos Recubiertos 40 mg (Máxima Intensidad)',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'rosu-ind-hipercolesterolemia',
        name: 'Hipercolesterolemia Primaria / Prevención Secundaria Post-Evento Cardiovascular',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 40,
        description: 'Alta intensidad: 20 a 40 mg una vez al día a cualquier hora (con o sin alimentos). Moderada intensidad: 5 a 10 mg una vez al día.'
      }
    ],
    whenToUse: [
      'Prevención secundaria en cardiopatía isquémica, ictus o enfermedad arterial periférica (objetivo c-LDL < 55 mg/dL).',
      'Hipercolesterolemia primaria severa o hipercolesterolemia familiar heterocigota.',
      'Pacientes polimedicados con riesgo de interacción con inhibidores del CYP3A4 (ej. macrólidos, antifúngicos azoles, antivirales).'
    ],
    pearlsAndPitfalls: [
      'Menor riesgo de interacciones por CYP3A4: Solo se metaboliza en un 10% (vía CYP2C9), haciéndola mucho más segura que atorvastatina o simvastatina en pacientes con fármacos que inhiben CYP3A4.',
      'Mayor potencia miligramo a miligramo: Rosuvastatina 20 mg equivale aproximadamente a Atorvastatina 40-80 mg.',
      'En pacientes de ascendencia asiática iniciar con 5 mg al día (concentraciones plasmáticas medias al doble).'
    ],
    monitoringAndSideEffects: [
      'Perfil lipídico completo a las 4-12 semanas del inicio o ajuste.',
      'Transaminasas hepáticas (ALT) basales.',
      'Creatina quinasa (CPK) si aparecen mialgias o debilidad muscular proximal.'
    ],
    evidenceAndSources: [
      {
        title: 'JUPITER & STELLAR Trials',
        source: 'New England Journal of Medicine & Circulation',
        year: '2023 Guidelines',
        summary: 'Demostró una reducción del 44% en eventos cardiovasculares mayores y del 20% en mortalidad global en pacientes con PCR elevada y c-LDL normal.'
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
        adjustmentText: 'Iniciar con 5 mg al día; dosis máxima de 10 mg al día (40 mg contraindicada).',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratogénico)',
      summary: 'El colesterol es esencial para el desarrollo embrionario y la síntesis de membranas fetales. CONTRAINDICADO.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Resinas de intercambio iónico (Colesevelam) si es imprescindible.'
    }
  },
  {
    id: 'ezetimiba',
    name: 'Ezetimiba',
    commercialNames: ['Zetia', 'Ezetrol', 'Atozet (comb)', 'Vytorin (comb)'],
    category: 'Cardiovascular',
    atcCode: 'C10AX09',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor Selectivo del Transportador Intestinal de Colesterol NPC1L1',
    badgeText: 'Cardiovascular · Inhibidor NPC1L1 (IMPROVE-IT)',
    shortDescription: 'Inhibidor selectivo de la proteína transportadora Niemann-Pick C1-Like 1 (NPC1L1) en el borde en cepillo de los enterocitos del intestino delgado. Bloquea la absorción del colesterol biliar y dietético, logrando un descenso adicional del 15 al 20% del c-LDL sin afectar a las vitaminas liposolubles.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'eze-comp-10',
        name: 'Comprimidos 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'eze-ind-dislipidemia',
        name: 'Hipercolesterolemia Primaria / Prevención Secundaria Cardiovascular (Asociado a Estatina)',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico continuo',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '10 mg una vez al día con o sin alimentos, a cualquier hora del día, solo o en combinación con una estatina.'
      }
    ],
    whenToUse: [
      'Tratamiento combinado de segunda línea asociado a estatina de alta intensidad cuando no se alcanza el objetivo de c-LDL (<55 mg/dL en muy alto riesgo).',
      'Monoterapia en pacientes con intolerancia completa documentada a las estatinas por miopatía grave.',
      'Post-síndrome coronario agudo (estudio IMPROVE-IT).'
    ],
    pearlsAndPitfalls: [
      'Sinergia complementaria perfecta: La estatina inhibe la síntesis hepática de colesterol y la ezetimiba bloquea su absorción intestinal, logrando descensos profundos de c-LDL con excelente tolerabilidad.',
      'Excelente perfil de seguridad: Incidencia de mialgias idéntica a placebo en monoterapia.',
      'No requiere ajuste en falla renal ni hepática leve.'
    ],
    monitoringAndSideEffects: [
      'Perfil lipídico de control a las 6-12 semanas.',
      'Excelente tolerabilidad clínica (raros dolores abdominales o diarrea leve).'
    ],
    evidenceAndSources: [
      {
        title: 'IMPROVE-IT Clinical Trial',
        source: 'New England Journal of Medicine',
        year: '2023 Guidelines',
        summary: 'Demostró que añadir ezetimiba a simvastatina tras un síndrome coronario agudo redujo significativamente los eventos cardiovasculares mayores en consonancia con la hipótesis "cuanto más bajo el LDL, mejor".'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en insuficiencia renal ni hemodiálisis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Datos de seguridad insuficientes en el embarazo; evitar.',
      clinicalAlternative: 'Dieta y resinas quelantes de ácidos biliares.'
    }
  },
  {
    id: 'heparina-no-fraccionada',
    name: 'Heparina No Fraccionada (Heparina Sódica)',
    commercialNames: ['Liquaemin', 'Heparina Sódica Hospira', 'Heparina'],
    category: 'Cardiovascular',
    atcCode: 'B01AB01',
    awareCategory: 'Access',
    therapeuticClass: 'Anticoagulante Parenteral Clásico Activador de Antitrombina III',
    badgeText: 'Cardiovascular · Anticoagulante IV Inmediato',
    shortDescription: 'Mezcla heterogénea de mucopolisacáridos sulfatados que se unen a la antitrombina III potenciando miles de veces la inactivación de la trombina (factor IIa) y del factor Xa en proporción 1:1. Fármaco de oro para anticoagulación intravenosa de emergencia con reversibilidad instantánea por sulfato de protamina.',
    availableRoutes: ['iv', 'sc'],
    concentrations: [
      {
        id: 'hep-vial-5000',
        name: 'Vial Inyectable 5000 UI / 1 mL (5000 UI/mL)',
        amountMg: 50,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: '1 mg = aprox. 100 UI de heparina sódica'
      },
      {
        id: 'hep-vial-25000',
        name: 'Vial Inyectable 25000 UI / 5 mL (5000 UI/mL)',
        amountMg: 250,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'hep-ind-tep-tvp-sca',
        name: 'Tromboembolismo Pulmonar Masivo / Síndrome Coronario Agudo / Angioplastia',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '3-5 días en UCI',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 100,
        description: 'Bolo IV de carga: 80 UI/kg (o 5000 UI estándar). Infusión continua de mantenimiento: 18 UI/kg/hora. Ajustar cada 6 horas mediante nomograma para mantener el TTPa entre 1.5 y 2.5 veces el valor control (60-85 segundos).'
      },
      {
        id: 'hep-ind-profilaxis-sc',
        name: 'Tromboprofilaxis en Pacientes Hospitalizados de Riesgo',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Durante inmovilización',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 50,
        description: '5000 UI por vía subcutánea cada 8 a 12 horas en tejido celular subcutáneo periumbilical.'
      }
    ],
    whenToUse: [
      'Anticoagulación urgente en pacientes con insuficiencia renal grave (ClCr < 15-30 mL/min o hemodiálisis) donde las heparinas de bajo peso molecular se acumulan de forma impredecible.',
      'Pacientes con alto riesgo inminente de sangrado o pendientes de cirugía urgente que requieran una reversión completa inmediata con protamina.',
      'Embolia pulmonar con inestabilidad hemodinámica y angioplastia coronaria percutánea.'
    ],
    pearlsAndPitfalls: [
      '¡TROMBOCITOPENIA INDUCIDA POR HEPARINA (TIH TIPO II)!: Reacción inmune mediada por anticuerpos IgG anti-complejo heparina/factor plaquetario 4 (PF4) que ocurre característicamente entre los días 5 y 10, causando trombocitopenia paradójica con trombosis arteriales y venosas extensas catastróficas. Hemograma seriado obligatorio.',
      'Reversión completa inmediata: 1 mg de Sulfato de Protamina IV neutraliza exactamente 100 UI de heparina sódica activa.',
      'Eliminación por el sistema reticuloendotelial y depuración endotelial: no depende del filtrado glomerular para su aclaramiento.'
    ],
    monitoringAndSideEffects: [
      'TTPa (Tiempo de Tromboplastina Parcial activada) cada 6 horas hasta dos valores consecutivos en rango terapéutico (60-85 segundos).',
      'Recuento de plaquetas cada 48-72 horas (descartar TIH).',
      'Hematocrito y hemoglobina.'
    ],
    evidenceAndSources: [
      {
        title: 'CHEST Antithrombotic Guidelines',
        source: 'CHEST Journal',
        year: '2023 Guidelines',
        summary: 'Recomienda heparina no fraccionada sobre HBPM en pacientes con aclaramiento de creatinina severamente deprimido (<30 mL/min) por seguridad farmacocinética.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'Fármaco de elección en insuficiencia renal severa; ajustar según TTPa.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible / No Cruza la Placenta',
      summary: 'Molécula de gran tamaño y carga negativa que no atraviesa la placenta ni se excreta en leche materna. De elección en el periparto.',
      clinicalAlternative: 'Fármaco de elección perioperatorio obstétrico.'
    }
  }
];
