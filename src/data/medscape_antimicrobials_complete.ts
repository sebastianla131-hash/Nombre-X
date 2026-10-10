import { Medication } from '../types';

export const MEDSCAPE_ANTIMICROBIALS_COMPLETE: Medication[] = [
  {
    id: 'penicilina-g-benzatinica',
    name: 'Penicilina G Benzatínica',
    commercialNames: ['Penicilina G Benzatínica', 'Benzetacil', 'Bicillin L-A'],
    category: 'Antibióticos',
    atcCode: 'J01CE08',
    awareCategory: 'Access',
    therapeuticClass: 'Penicilina Natural de Depósito de Acción Ultralenta · DCI',
    badgeText: 'Antibióticos · DCI Penicilina Benzatínica (Sífilis)',
    shortDescription: 'Sal insoluble de bencilpenicilina y dibenciletilendiamina de absorción intramuscular muy lenta que mantiene niveles séricos treponemicidas detectables durante 2 a 4 semanas. Fármaco de elección mundial irremplazable para todas las etapas de la sífilis (excepto neurosífilis) y profilaxis secundaria de la fiebre reumática.',
    availableRoutes: ['im'],
    concentrations: [
      {
        id: 'peni-benz-12',
        name: 'Vial Inyectable IM 1.200.000 UI / 4 mL (Suspensión Acuosa)',
        amountMg: 1200000,
        volumeMl: 4,
        form: 'vial',
        unit: 'mL',
        notes: 'USO EXCLUSIVO INTRAMUSCULAR PROFUNDO EN GLÚTEO. NUNCA IV'
      },
      {
        id: 'peni-benz-24',
        name: 'Vial Inyectable IM 2.400.000 UI / 5 mL',
        amountMg: 2400000,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL',
        notes: 'Inyección intraglútea profunda lenta'
      }
    ],
    indications: [
      {
        id: 'peni-ind-sifilis-precoz',
        name: 'Sífilis Primaria, Secundaria y Latente Precoz (<1 año de evolución)',
        fixedAdultDoseMg: 2400000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única',
        maxDailyDoseMg: 2400000,
        maxSingleDoseMg: 2400000,
        description: '2.400.000 UI por vía intramuscular profunda en una sola sesión (puede dividirse en dos inyecciones de 1.2M UI en cada glúteo).'
      },
      {
        id: 'peni-ind-sifilis-tardia',
        name: 'Sífilis Latente Tardía (>1 año o duración desconocida) / Sífilis Terciaria Cardiovascular',
        fixedAdultDoseMg: 2400000,
        frequencyPerDay: 1,
        intervalHours: 168,
        durationDays: '3 dosis (días 1, 8 y 15)',
        maxDailyDoseMg: 2400000,
        maxSingleDoseMg: 2400000,
        description: '2.400.000 UI IM profunda una vez por semana durante 3 semanas consecutivas (total acumulado 7.200.000 UI). Si se retrasa una dosis más de 7-9 días en embarazadas, reiniciar el ciclo completo.'
      },
      {
        id: 'peni-ind-profilaxis-reumatica',
        name: 'Profilaxis Secundaria de Fiebre Reumática / Faringitis Estreptocócica en Pediatría',
        recommendedDoseMgPerKgPerDay: 50000,
        minDoseMgPerKgPerDay: 25000,
        maxDoseMgPerKgPerDay: 50000,
        fixedAdultDoseMg: 1200000,
        frequencyPerDay: 1,
        intervalHours: 672,
        durationDays: 'Cada 3 a 4 semanas',
        maxDailyDoseMg: 1200000,
        maxSingleDoseMg: 1200000,
        description: 'Niños < 27 kg: 600.000 UI IM cada 3-4 semanas. Niños ≥ 27 kg y adultos: 1.200.000 UI IM cada 3-4 semanas.'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea indiscutible para la sífilis primaria (chancro), secundaria y latente en todas las poblaciones (incluyendo gestantes).',
      'Prevención de recurrencias de carditis y fiebre reumática por Streptococcus pyogenes del grupo A.',
      'Faringoamigdalitis estreptocócica aguda en pacientes donde no se puede garantizar el cumplimiento de 10 días de antibióticos orales.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA POR VÍA INTRAVENOSA (BLACKBOX FDA)!: La inyección inadvertida IV causa embolismo intravascular masivo, paro cardiorrespiratorio y daño neurovascular irreversible letal (Síndrome de Nicolau / Hoigné). Inyectar EXCLUSIVAMENTE en cuadrante superior externo del glúteo previa aspiración.',
      'Reacción de Jarisch-Herxheimer: Fiebre, escalofríos, mialgias y exacerbación transitoria de las lesiones cutáneas en las primeras 24 horas tras la inyección (por lisis masiva de Treponema pallidum). Es benigna y no es alergia.',
      'En embarazadas alérgicas a penicilina con sífilis: La penicilina es el ÚNICO fármaco demostrado eficaz para prevenir la sífilis congénita y muerte fetal; la paciente DEBE ser desensibilizada a penicilina y tratada obligatoriamente con penicilina benzatínica.'
    ],
    monitoringAndSideEffects: [
      'Títulos serológicos no treponémicos (RPR o VDRL) a los 3, 6, 12 y 24 meses (se espera un descenso de al menos 4 diluciones o 2 títulos).',
      'Signos de anafilaxia inmediata tras la inyección (mantener al paciente en observación durante 30 minutos).',
      'Tolerancia local en el sitio de inyección glútea.'
    ],
    evidenceAndSources: [
      {
        title: 'CDC & WHO Sexually Transmitted Infections Treatment Guidelines',
        source: 'MMWR Recommendations & Reports',
        year: '2023 Guidelines',
        summary: 'Revalida a la penicilina G benzatínica como el régimen de elección indiscutible para todas las fases de la sífilis adquirida y la prevención de la transmisión vertical materno-fetal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; dosis espaciadas de depósito.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Fármaco de Elección Obligatorio en Gestación',
      summary: 'Único fármaco antibiótico demostrado que atraviesa la placenta y cura la infección tanto en la madre como en el feto, previniendo la sífilis congénita.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'penicilina-g-sodica',
    name: 'Penicilina G Sódica (Cristalina)',
    commercialNames: ['Penicilina G Sódica', 'Bencilpenicilina Sódica'],
    category: 'Antibióticos',
    atcCode: 'J01CE01',
    awareCategory: 'Access',
    therapeuticClass: 'Penicilina Natural Parenteral Acuosa de Alta Concentración · DCI',
    badgeText: 'Antibióticos · DCI Penicilina Cristalina (Neurosífilis / Sepsis)',
    shortDescription: 'Sal sódica acuosa de bencilpenicilina para infusión intravenosa rápida que alcanza concentraciones plasmáticas y en líquido cefalorraquídeo bactericidas masivas. Fármaco de oro para neurosífilis, sífilis congénita neonatal, endocarditis bacteriana estreptocócica y gangrena gaseosa por Clostridium.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'peni-sod-5m',
        name: 'Vial Polvo para Solución Inyectable IV 5.000.000 UI (5 M UI)',
        amountMg: 5000000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: '1 M UI contiene aprox. 1.68 mEq de sodio (vigilar sobrecarga hidrosalina)'
      }
    ],
    indications: [
      {
        id: 'peni-sod-ind-neurosifilis',
        name: 'Neurosífilis y Sífilis Ocular / Otosífilis en Adultos (Guías CDC / OMS)',
        fixedAdultDoseMg: 3500000,
        frequencyPerDay: 6,
        intervalHours: 4,
        durationDays: '10 a 14 días',
        maxDailyDoseMg: 24000000,
        maxSingleDoseMg: 4000000,
        description: '18 a 24 millones de UI al día por vía intravenosa, administradas como 3 a 4 millones de UI cada 4 horas (o infusión intravenosa continua) durante 10 a 14 días.'
      },
      {
        id: 'peni-sod-ind-sifilis-congenita',
        name: 'Sífilis Congénita en Neonatos (<28 días de vida)',
        recommendedDoseMgPerKgPerDay: 150000,
        minDoseMgPerKgPerDay: 100000,
        maxDoseMgPerKgPerDay: 200000,
        fixedAdultDoseMg: 5000000,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10 días',
        maxDailyDoseMg: 200000,
        maxSingleDoseMg: 50000,
        description: '50.000 UI/kg/dosis IV cada 12 horas durante los primeros 7 días de vida, y luego cada 8 horas del día 8 al 10 (total 10 días).'
      }
    ],
    whenToUse: [
      'Neurosífilis sintomática o asintomática, sífilis ocular y ótica.',
      'Sífilis congénita diagnosticada o confirmada en el recién nacido.',
      'Fascitis necrosante y gangrena gaseosa por Clostridium perfringens (en combinación con clindamicina).'
    ],
    pearlsAndPitfalls: [
      '¡Aporte Significativo de Sodio en Dosis Masivas!: Cada millón de UI de penicilina sódica aporta 1.68 mEq de sodio; una dosis diaria de 24 millones de UI introduce más de 40 mEq de sodio libre al día, con riesgo de descompensación en insuficiencia cardíaca o anasarca.',
      'Neurotoxicidad (mioclonías y convulsiones): A dosis muy altas (>20-24 millones UI/día) o en pacientes con fallo renal sin ajuste de intervalo, la penicilina atraviesa la barrera hematoencefálica e inhibe el receptor GABAérgico induciendo estatus epiléptico.',
      'Ajustar intervalo en fallo renal (espaciar a cada 6 u 8 horas si ClCr < 50 mL/min).'
    ],
    monitoringAndSideEffects: [
      'Función renal y sodio sérico.',
      'Nivel de consciencia y ausencia de mioclonías.',
      'LCR a los 6 meses en neurosífilis para documentar curación.'
    ],
    evidenceAndSources: [
      {
        title: 'CDC Neurosyphilis Management Guidelines',
        source: 'MMWR Recommendations & Reports',
        year: '2023 Guidelines',
        summary: 'Establece a la penicilina G cristalina acuosa intravenosa de alta dosis como el único estándar curativo de clase IA para la neurosífilis.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar cada 4 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 49 mL/min',
        adjustmentText: 'Reducir la dosis diaria al 50% o espaciar cada 6 a 8 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: 'Espaciar cada 8 a 12 horas; suplementar post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible y Seguro en Gestación',
      summary: 'Seguridad comprobada sin efectos teratogénicos; penetra placenta y líquido amniótico.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'oxacilina',
    name: 'Oxacilina',
    commercialNames: ['Oxacilina', 'Prostaphlin', 'Bactocill'],
    category: 'Antibióticos',
    atcCode: 'J01CF04',
    awareCategory: 'Access',
    therapeuticClass: 'Penicilina Antiestafilocócica Isoxazólica Resistente a Penicilinasa · DCI',
    badgeText: 'Antibióticos · DCI Oxacilina (MSSA Bacteriemia)',
    shortDescription: 'Penicilina semisintética con cadena lateral isoxazólica que impide estéricamente la hidrólisis por la betalactamasa estafilocócica (penicilinasa). Fármaco de primera línea y estándar de oro indiscutible para bacteriemia grave, endocarditis, osteomielitis y celulitis por Staphylococcus aureus sensible a meticilina (MSSA), con mayor velocidad bactericida y menor mortalidad que la vancomicina.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'oxa-vial-1g',
        name: 'Vial Inyectable IV 1 g Polvo para Solución (DCI Oxacilina)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      },
      {
        id: 'oxa-vial-2g',
        name: 'Vial Inyectable IV 2 g Polvo para Solución',
        amountMg: 2000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'oxa-ind-mssa-bacteriemia',
        name: 'Bacteriemia / Endocarditis Infecciosa por Staphylococcus aureus Sensible a Meticilina (MSSA)',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 6,
        intervalHours: 4,
        durationDays: '14 días a 6 semanas',
        maxDailyDoseMg: 12000,
        maxSingleDoseMg: 2000,
        description: '2 g cada 4 horas por vía intravenosa (12 g al día en infusión continua o intermitente de 30-60 min).'
      },
      {
        id: 'oxa-ind-pediatrica',
        name: 'Infecciones Estafilocócicas Moderadas a Graves en Pediatría (Osteomielitis / Artritis Séptica)',
        recommendedDoseMgPerKgPerDay: 150,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 200,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Según indicación clínica',
        maxDailyDoseMg: 12000,
        maxSingleDoseMg: 2000,
        description: '100 a 200 mg/kg/día dividido cada 6 horas IV (máximo 12 g diarios).'
      }
    ],
    whenToUse: [
      'Infecciones invasivas comprobadas o altamente sospechosas por S. aureus sensible a meticilina (MSSA).',
      'Desescalamiento guiado por antibiograma desde vancomicina hacia oxacilina (superioridad bactericida comprobada).',
      'Artritis séptica, osteomielitis aguda y abscesos profundos por estafilococo sensible.'
    ],
    pearlsAndPitfalls: [
      '¡SUPERIORIDAD FRENTE A VANCOMICINA EN MSSA!: En bacteriemia y endocarditis por MSSA, los betalactámicos antiestafilocócicos (oxacilina, cefazolina) reducen la mortalidad a 30 días en más del 30-40% en comparación con vancomicina.',
      'Nefritis Intersticial Aguda Inmunoalérgica: Puede manifestarse con eosinofilia, fiebre y deterioro renal; monitorizar sedimento urinario y función renal.',
      'Hepatotoxicidad y flebitis química periférica: Frecuente elevación asintomática de transaminasas y marcada irritación de venas periféricas (preferir vía venosa central para cursos prolongados).'
    ],
    monitoringAndSideEffects: [
      'Hemograma completo (descartar neutropenia o eosinofilia en tratamientos > 2 semanas).',
      'Transaminasas hepáticas (ALT/AST) semanalmente.',
      'Creatinina sérica y sedimento urinario.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Guidelines for the Management of Staphylococcus aureus Infections',
        source: 'Clinical Infectious Diseases',
        year: '2023 Guidelines',
        summary: 'Recomienda fuertemente una penicilina antiestafilocócica (oxacilina) o cefazolina como tratamiento de primera elección de máxima eficacia para MSSA sobre los glicopéptidos.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en insuficiencia renal leve o moderada; metabolismo predominantemente hepático y biliar. En anuria considerar máximo 8-10 g/día.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible y Seguro en Gestación',
      summary: 'Seguridad fetal comprobada en múltiples cohortes; betalactámico de elección para mastitis y bacteriemia por estafilococo en el embarazo.',
      clinicalAlternative: 'Fármaco de elección junto a Cefazolina.'
    }
  },
  {
    id: 'cefalexina',
    name: 'Cefalexina',
    commercialNames: ['Cefalexina', 'Keflex', 'Ceporex'],
    category: 'Antibióticos',
    atcCode: 'J01DB01',
    awareCategory: 'Access',
    therapeuticClass: 'Cefalosporina de 1.ª Generación Oral · DCI',
    badgeText: 'Antibióticos · DCI Cefalexina (Piel / ITU / Faringitis)',
    shortDescription: 'Cefalosporina oral de primera generación con excelente biodisponibilidad digestiva (superior al 90%). Posee potente actividad bactericida frente a cocos grampositivos (Staphylococcus aureus sensible a meticilina y Streptococcus pyogenes) y bacilos gramnegativos comunitarios sensibles (E. coli, Proteus mirabilis, Klebsiella pneumoniae).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'cefa-susp-250',
        name: 'Suspensión Oral 250 mg / 5 mL (50 mg/mL)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100
      },
      {
        id: 'cefa-comp-500',
        name: 'Cápsulas / Comprimidos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'cefa-ind-piel-tejidos',
        name: 'Infecciones de Piel y Partes Blandas (Celulitis, Impétigo, Foliculitis por MSSA / Strep)',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        description: '500 mg cada 6 horas vía oral con o sin alimentos (o 1000 mg cada 12 horas en infecciones leves).'
      },
      {
        id: 'cefa-ind-peds',
        name: 'Infecciones Pediátricas Comunitarias (Impétigo, Celulitis, ITU)',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 25,
        maxDoseMgPerKgPerDay: 100,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7-10 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 1000,
        description: '25 a 50 mg/kg/día dividido cada 6 horas vía oral (puede aumentarse hasta 100 mg/kg/día en infecciones graves o celulitis profunda).'
      },
      {
        id: 'cefa-ind-itu-embarazo',
        name: 'Bacteriuria Asintomática / Cistitis Aguda No Complicada en el Embarazo',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 500,
        description: '500 mg cada 6 horas durante 7 días en gestantes con urocultivo positivo para patógenos sensibles.'
      }
    ],
    whenToUse: [
      'Infecciones cutáneas no purulentas o celulitis leve a moderada de manejo ambulatorio.',
      'Faringoamigdalitis estreptocócica en pacientes con alergia no anafiláctica a penicilina.',
      'Infección de vías urinarias en el primer trimestre del embarazo donde nitrofurantoína o TMP/SMX están desaconsejados.'
    ],
    pearlsAndPitfalls: [
      'Frecuencia de dosificación: Aunque tiene excelente absorción, su vida media es corta (aprox. 1 hora); la dosificación cada 6 horas asegura mantener la concentración por encima de la CMI el 50% del tiempo (%T>MIC), clave para la eficacia de los betalactámicos.',
      'Excelente tolerabilidad gástrica en suspensión pediátrica (sabor agradable y sin olor sulfuroso).',
      'Eliminación renal inalterada del 90%: requiere ajuste en insuficiencia renal avanzada.'
    ],
    monitoringAndSideEffects: [
      'Tolerancia digestiva (náuseas o diarrea leve autolimitada).',
      'Resolución del eritema y calor local en celulitis cutánea.',
      'Urocultivo de control post-tratamiento en gestantes.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Practice Guidelines for Skin and Soft Tissue Infections',
        source: 'Clinical Infectious Diseases',
        year: '2023 Guidelines',
        summary: 'Recomienda cefalexina oral como antibiótico de primera elección empírico para celulitis no purulenta y piodermias comunitarias en adultos y niños.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar cada 6 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 49 mL/min',
        adjustmentText: '500 mg cada 8 a 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '250 a 500 mg cada 12 a 24 horas; administrar tras diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Fármaco de 1.ª Elección en Gestación y Lactancia',
      summary: 'Amplio historial de bioseguridad en el primer, segundo y tercer trimestre del embarazo.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'ceftazidima',
    name: 'Ceftazidima',
    commercialNames: ['Ceftazidima', 'Fortum', 'Tazidime'],
    category: 'Antibióticos',
    atcCode: 'J01DD02',
    awareCategory: 'Watch',
    therapeuticClass: 'Cefalosporina de 3.ª Generación con Alta Potencia Antipseudomónica · DCI',
    badgeText: 'Antibióticos · DCI Ceftazidima (Pseudomonas / Neutropenia)',
    shortDescription: 'Cefalosporina parenteral de tercera generación con máxima actividad selectiva frente a Pseudomonas aeruginosa y enterobacterales gramnegativos. Cruza la barrera hematoencefálica con líquido cefalorraquídeo inflamado y carece de actividad relevante frente a cocos grampositivos.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'tazi-vial-1g',
        name: 'Vial Inyectable IV/IM 1 g Polvo para Solución (DCI Ceftazidima)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      },
      {
        id: 'tazi-vial-2g',
        name: 'Vial Inyectable IV 2 g Polvo para Solución',
        amountMg: 2000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'tazi-ind-pseudomonas-sepsis',
        name: 'Infecciones Severas por Pseudomonas aeruginosa / Neutropenia Febril',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '2 g cada 8 horas por vía intravenosa en infusión extendida de 3 horas (o infusión continua de 6 g/día para optimizar el tiempo sobre la CMI).'
      },
      {
        id: 'tazi-ind-peds',
        name: 'Infecciones Pediátricas por Pseudomonas / Fibrosis Quística',
        recommendedDoseMgPerKgPerDay: 150,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 200,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '10-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '100 a 150 mg/kg/día dividido cada 8 horas IV (hasta 200 mg/kg/día en exacerbaciones de fibrosis quística).'
      }
    ],
    whenToUse: [
      'Infecciones nosocomiales graves documentadas o con alta sospecha de Pseudomonas aeruginosa sensible.',
      'Meningitis bacteriana nosocomial postquirúrgica por bacilos gramnegativos.',
      'Exacerbaciones pulmonares en pacientes con fibrosis quística o bronquiectasias.'
    ],
    pearlsAndPitfalls: [
      '¡Pobre Actividad frente a Grampositivos!: Prácticamente carece de actividad frente a Staphylococcus aureus y Streptococcus pneumoniae; no utilizar de forma empírica aislada en neumonía adquirida en la comunidad.',
      'Riesgo de selección de cepas productoras de AmpC inducible (Enterobacter, Serratia, Citrobacter) con resistencia en 48-72h; en estos patógenos preferir cefepima o meropenem.',
      'En infusión extendida (3 horas) se optimiza el parámetro farmacodinámico %T>MIC, mejorando la curación clínica en pacientes críticos.'
    ],
    monitoringAndSideEffects: [
      'Función renal (aclaramiento de creatinina para ajuste estricto).',
      'Aparición de encefalopatía o mioclonías en fallo renal.',
      'Hemograma completo y cultivo microbiológico de control.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections',
        source: 'Clinical Infectious Diseases',
        year: '2023 Guidelines',
        summary: 'Posiciona a la ceftazidima como opción dirigida eficaz para P. aeruginosa cuando se confirma sensibilidad in vitro en antibiograma.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar cada 8 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '31 - 49 mL/min',
        adjustmentText: '1 g cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '16 - 30 mL/min',
        adjustmentText: '1 g cada 24 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 16 mL/min o Hemodiálisis',
        adjustmentText: '500 mg a 1 g cada 48 horas; administrar suplemento tras diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible en Gestación',
      summary: 'Seguridad documentada; betalactámico de elección para infecciones por Pseudomonas en embarazadas.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'ertapenem',
    name: 'Ertapenem',
    commercialNames: ['Ertapenem', 'Invanz'],
    category: 'Antibióticos',
    atcCode: 'J01DH03',
    awareCategory: 'Watch',
    therapeuticClass: 'Carbapenémico de Toma Única Diaria con Ahorro de Presión sobre Pseudomonas · DCI',
    badgeText: 'Antibióticos · DCI Ertapenem (BLEE 1 vez/día)',
    shortDescription: 'Carbapenémico 1-beta-metilo de espectro extendido con alta unión a proteínas plasmáticas (95%) y semivida de 4 horas, lo que permite su administración cómoda en una sola dosis diaria. Altamente resistente a las betalactamasas de espectro extendido (BLEE), pero carece deliberadamente de actividad sobre Pseudomonas aeruginosa y Acinetobacter, lo que preserva la ecología hospitalaria.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'erta-vial-1g',
        name: 'Vial Inyectable IV/IM 1 g Polvo para Solución (DCI Ertapenem)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'erta-ind-blee-infecciones',
        name: 'Infecciones Intraabdominales Complicadas / Pie Diabético / ITU por Enterobacterales BLEE',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-14 días',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 1000,
        description: '1 g una vez al día por vía intravenosa en infusión de 30 minutos (o intramuscular profunda reconstituida con lidocaína al 1%).'
      },
      {
        id: 'erta-ind-peds',
        name: 'Infecciones Intraabdominales o ITU Complicada en Niños (≥3 meses a 12 años)',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 30,
        maxDoseMgPerKgPerDay: 30,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-14 días',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 500,
        description: '15 mg/kg cada 12 horas IV (máximo 1 g al día). Niños > 13 años: 1 g una vez al día.'
      }
    ],
    whenToUse: [
      'Infecciones comunitarias o nosocomiales causadas por E. coli o Klebsiella pneumoniae productoras de BLEE.',
      'Terapia antibiótica domiciliaria endovenosa (TADE / OPAT) gracias a su pauta de una sola dosis cada 24 horas.',
      'Infecciones complicadas de pie diabético moderadas a severas polimicrobianas.'
    ],
    pearlsAndPitfalls: [
      '¡Ausencia Intencionada de Cobertura Antipseudomónica!: No cubre Pseudomonas aeruginosa, Acinetobacter ni Enterococcus faecalis; esta "debilidad" es su mayor ventaja ecológica para no inducir resistencias en Pseudomonas.',
      '¡INTERACCIÓN CRÍTICA CON ÁCIDO VALPROICO!: Al igual que todos los carbapenémicos, reduce los niveles séricos de ácido valproico en un 80% en menos de 24 horas, desencadenando crisis epilépticas intratables; NUNCA combinar.',
      'Reconstitución IM con Lidocaína: Si se administra por vía intramuscular, debe reconstituirse con clorhidrato de lidocaína al 1% sin epinefrina para aliviar el dolor local.'
    ],
    monitoringAndSideEffects: [
      'Aclaramiento de creatinina (requiere reducción al 50% si ClCr ≤ 50 mL/min).',
      'Signos neurológicos (cefalea, mareo, convulsiones en ancianos con fallo renal).',
      'Diarrea por Clostridioides difficile.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Guidance on Treatment of Extended-Spectrum Beta-Lactamase (ESBL) Infections',
        source: 'Clinical Infectious Diseases',
        year: '2023 Guidelines',
        summary: 'Recomienda fuertemente a ertapenem como el carbapenémico de elección para infecciones moderadas a graves por enterobacterales productores de BLEE sin sospecha de Pseudomonas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: '1 g una vez al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '≤ 50 mL/min',
        adjustmentText: '500 mg una vez al día.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: 'Hemodiálisis',
        adjustmentText: '500 mg al día; si se administra dentro de las 6 horas previas a la diálisis, administrar suplemento de 150 mg post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible en Gestación',
      summary: 'Sin evidencia de teratogenicidad en modelos animales; carbapenémico de elección para infecciones por BLEE en el embarazo.',
      clinicalAlternative: 'Fármaco de elección para BLEE.'
    }
  },
  {
    id: 'aztreonam',
    name: 'Aztreonam',
    commercialNames: ['Aztreonam', 'Azactam', 'Cayston'],
    category: 'Antibióticos',
    atcCode: 'J01DF01',
    awareCategory: 'Watch',
    therapeuticClass: 'Monobactámico Sintético Exclusivo para Gramnegativos Aerobios · Seguro en Alergia a Penicilina',
    badgeText: 'Antibióticos · DCI Aztreonam (Alergia a Penicilinas)',
    shortDescription: 'Antibiótico monobactámico monocíclico con afinidad selectiva exclusiva por la proteína fijadora de penicilina-3 (PBP-3) de bacterias gramnegativas aerobias. Su núcleo betalactámico monocíclico carece del anillo condensado de tiazolidina o dihidrotiazina, por lo que NO presenta reactividad cruzada inmunológica en pacientes con alergia grave mediada por IgE a penicilinas y cefalosporinas.',
    availableRoutes: ['iv', 'im', 'inhalatoria'],
    concentrations: [
      {
        id: 'aztre-vial-1g',
        name: 'Vial Inyectable IV/IM 1 g Polvo para Solución (DCI Aztreonam)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      },
      {
        id: 'aztre-vial-2g',
        name: 'Vial Inyectable IV 2 g Polvo para Solución',
        amountMg: 2000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'aztre-ind-sepsis-alergia',
        name: 'Sepsis Severa / ITU / Neumonía por Gramnegativos en Pacientes Alérgicos a Penicilina',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 8000,
        maxSingleDoseMg: 2000,
        description: '1 a 2 g cada 8 horas por vía intravenosa (hasta 2 g cada 6 horas en infecciones con riesgo vital o bacteriemia por Pseudomonas aeruginosa).'
      },
      {
        id: 'aztre-ind-peds',
        name: 'Infecciones Graves por Gramnegativos en Pediatría (≥9 meses)',
        recommendedDoseMgPerKgPerDay: 90,
        minDoseMgPerKgPerDay: 90,
        maxDoseMgPerKgPerDay: 120,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '30 mg/kg cada 8 horas o cada 6 horas IV (máximo 6 a 8 g diarios).'
      }
    ],
    whenToUse: [
      'Infecciones graves por bacilos gramnegativos (Pseudomonas, Enterobacterales) en pacientes con antecedente de anafilaxia o angioedema mediado por IgE a penicilinas.',
      'Sepsis nosocomial combinada con vancomicina o daptomicina en alérgicos a betalactámicos.',
      'Fibrosis quística con colonización crónica por P. aeruginosa (formulación inhalada Cayston).'
    ],
    pearlsAndPitfalls: [
      '¡SEGURIDAD INMUNOLÓGICA EN ALERGIA A BETALACTÁMICOS!: Es el único betalactámico que puede prescribirse con absoluta seguridad en pacientes con anafilaxia confirmada a penicilinas, ampicilina, cefalosporinas y carbapenémicos.',
      '¡Única Excepción Inmunológica: Reactividad Cruzada con Ceftazidima!: Aztreonam y ceftazidima comparten exactamente la misma cadena lateral química idéntica; CONTRAINDICADO si el paciente tiene alergia específica documentada a ceftazidima.',
      '¡CERO ACTIVIDAD FRENTE A BACTERIAS GRAMPOSITIVAS Y ANAEROBIOS!: Debe asociarse obligatoriamente a vancomicina, daptomicina o metronidazol para cobertura empírica mixta.'
    ],
    monitoringAndSideEffects: [
      'Función renal (ajuste de dosis por aclaramiento de creatinina).',
      'Transaminasas hepáticas.',
      'Ausencia de sobreinfección por hongos o cocos grampositivos.'
    ],
    evidenceAndSources: [
      {
        title: 'AAAAI/ACAAI Drug Allergy Practice Parameters',
        source: 'Journal of Allergy and Clinical Immunology',
        year: '2023 Guidelines',
        summary: 'Confirma la nula reactividad cruzada de aztreonam con penicilinas y carbapenémicos, siendo el sustituto betalactámico de referencia en anafilaxia mediada por IgE.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 29 mL/min',
        adjustmentText: 'Reducir la dosis de mantenimiento al 50% tras la primera dosis plena.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: 'Reducir al 25% de la dosis estándar; administrar suplemento de 1/8 de la dosis inicial post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible en Gestación',
      summary: 'Atraviesa la placenta pero no muestra efectos embriotóxicos; fármaco de elección para infecciones por gramnegativos en gestantes con anafilaxia a penicilina.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'fidaxomicina',
    name: 'Fidaxomicina',
    commercialNames: ['Fidaxomicina', 'Dificid', 'Dificlir'],
    category: 'Antibióticos',
    atcCode: 'A07AA12',
    awareCategory: 'Watch',
    therapeuticClass: 'Macrocíclico Bactericida de Espectro Estrecho · 1.ª Línea en Clostridioides difficile',
    badgeText: 'Antibióticos · DCI Fidaxomicina (C. difficile 1.ª Línea)',
    shortDescription: 'Antibiótico macrocíclico de absorción sistémica prácticamente nula que inhibe la ARN polimerasa bacteriana en un sitio diferente a las rifamicinas. Posee actividad bactericida selectiva de espectro ultraconcentrado frente a Clostridioides difficile, respetando la microbiota anaerobia fecal protectora (Bacteroides) y reduciendo significativamente las recurrencias de la colitis pseudomembranosa.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'fida-comp-200',
        name: 'Comprimidos Recubiertos 200 mg (DCI Fidaxomicina)',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'fida-ind-cdiff',
        name: 'Infección por Clostridioides difficile (ICD) Episodio Inicial o Recurrente (Guías IDSA 2023)',
        fixedAdultDoseMg: 200,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200,
        description: '200 mg cada 12 horas por vía oral con o sin alimentos durante 10 días completos (pauta estándar recomendada de primera línea por encima de vancomicina oral).'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea preferido de la diarrea e infección por Clostridioides difficile en adultos.',
      'Pacientes con alto riesgo de recurrencia de ICD (ancianos >65 años, inmunodeprimidos, uso continuo de otros antibióticos o episodios previos).'
    ],
    pearlsAndPitfalls: [
      '¡FÁRMACO DE PRIMERA ELECCIÓN POR ENCIMA DE VANCOMICINA ORAL (GUÍAS IDSA/SHEA)!: Demostró una reducción del 50% en las recurrencias de la infección a 30 días en comparación con la vancomicina oral, gracias a la preservación de la flora comensal colónica.',
      'Absorción sistémica mínima (<1%): Actúa tópicamente en la luz del colon y no produce efectos secundarios sistémicos relevantes.',
      'No tiene actividad contra bacilos gramnegativos: Ineficaz en infecciones sistémicas.'
    ],
    monitoringAndSideEffects: [
      'Resolución del número y consistencia de las deposiciones diarreicas.',
      'Excelente perfil de tolerabilidad gastrointestinal (raras náuseas leves).',
      'No requiere ajuste en fallo renal ni hemodiálisis.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA/SHEA Clinical Practice Guidelines on Clostridioides difficile Infection in Adults',
        source: 'Clinical Infectious Diseases',
        year: '2023 Guidelines',
        summary: 'Elevó a la fidaxomicina oral como el tratamiento preferido de primera línea sobre la vancomicina oral para episodios iniciales y recurrentes de infección por C. difficile.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; absorción sistémica insignificante.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible en Gestación',
      summary: 'Absorción sistémica nula; no llega a la circulación fetal en concentraciones detectables.',
      clinicalAlternative: 'Vancomicina oral como alternativa clásica.'
    }
  },
  {
    id: 'moxifloxacino',
    name: 'Moxifloxacino',
    commercialNames: ['Moxifloxacino', 'Avelox', 'Actira'],
    category: 'Antibióticos',
    atcCode: 'J01MA14',
    awareCategory: 'Watch',
    therapeuticClass: 'Fluoroquinolona Respiratoria de 4.ª Generación con Actividad Antianaerobia · DCI',
    badgeText: 'Antibióticos · DCI Moxifloxacino (Neumonía / Abscesos)',
    shortDescription: 'Fluoroquinolona respiratoria avanzada con doble diana enzimática: inhibe la ADN girasa (topoisomerasa II) y la topoisomerasa IV bacteriana. Proporciona excelente actividad frente a Streptococcus pneumoniae multirresistente, patógenos respiratorios atípicos (Legionella, Mycoplasma, Chlamydophila) y bacterias anaerobias.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'moxi-comp-400',
        name: 'Comprimidos Recubiertos 400 mg (DCI Moxifloxacino)',
        amountMg: 400,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'moxi-bolsa-400',
        name: 'Bolsa para Infusión IV 400 mg / 250 mL (1.6 mg/mL)',
        amountMg: 400,
        volumeMl: 250,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'moxi-ind-nac-severa',
        name: 'Neumonía Adquirida en la Comunidad / Exacerbación Grave de EPOC / Sinusitis Aguda',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-10 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 400,
        description: '400 mg una vez al día por vía oral o infusión intravenosa lenta en 60 minutos con o sin alimentos.'
      },
      {
        id: 'moxi-ind-intraabdominal',
        name: 'Infecciones Intraabdominales Complicadas en Monoterapia (cobertura anaerobia)',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-14 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 400,
        description: '400 mg una vez al día IV u oral (no requiere asociación con metronidazol para anaerobios comunitarios).'
      }
    ],
    whenToUse: [
      'Neumonía adquirida en la comunidad en pacientes con factores de riesgo de neumococo resistente o alergia grave a betalactámicos.',
      'Infecciones pulmonares por patógenos atípicos (Legionella pneumophila grave).',
      'Infecciones intraabdominales complicadas leves a moderadas como monoterapia en alérgicos a betalactámicos.'
    ],
    pearlsAndPitfalls: [
      '¡NO INDICADO EN INFECCIONES DE VÍAS URINARIAS (ITU)!: Se metaboliza predominantemente en el hígado por glucuronidación y sulfatación; menos del 15-20% se excreta inalterado en orina, por lo que NO alcanza concentraciones urinarias eficaces para cistitis o pielonefritis.',
      '¡Cero Ajuste por Función Renal!: Al tener aclaramiento predominantemente hepático, se prescribe la dosis plena de 400 mg/día independientemente del filtrado glomerular o diálisis.',
      'Prolongación del Intervalo QTc: Mayor riesgo que levofloxacino o ciprofloxacino; contraindicado con antiarrítmicos que alarguen el QT o hipopotasemia no corregida.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma (intervalo QTc seriado si hay comorbilidades cardíacas).',
      'Aparición de dolor o inflamación en tendón de Aquiles (tendinopatía por quinolonas).',
      'Transaminasas hepáticas.'
    ],
    evidenceAndSources: [
      {
        title: 'ATS/IDSA Guidelines on Community-Acquired Pneumonia in Adults',
        source: 'American Journal of Respiratory and Critical Care Medicine',
        year: '2023 Guidelines',
        summary: 'Sitúa al moxifloxacino como una de las opciones de fluoroquinolona respiratoria de primera línea en monoterapia para pacientes con comorbilidades o alergia a betalactámicos.'
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
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Riesgo de artropatía y daño de cartílagos de crecimiento fetales. Contraindicado en el embarazo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Macrólidos (Azitromicina) o Betalactámicos.'
    }
  },
  {
    id: 'valaciclovir',
    name: 'Valaciclovir',
    commercialNames: ['Valaciclovir', 'Valtrex', 'Zelitrex'],
    category: 'Antibióticos',
    atcCode: 'J05AB11',
    awareCategory: 'Access',
    therapeuticClass: 'Antiviral Análogo de Guanina Profármaco Éster de Aciclovir · DCI',
    badgeText: 'Antibióticos · DCI Valaciclovir (Herpes Zóster / VHS)',
    shortDescription: 'Éster L-valilo profármaco de aciclovir con una biodisponibilidad oral del 55% (de 3 a 5 veces superior a la del aciclovir oral clásico). Se convierte rápida y casi completamente en aciclovir por la hidrolasa hepática de valaciclovir, alcanzando niveles séricos comparables a la administración intravenosa con una pauta posológica mucho más cómoda.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'valac-comp-500',
        name: 'Comprimidos Recubiertos 500 mg (DCI Valaciclovir)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'valac-comp-1000',
        name: 'Comprimidos Recubiertos 1000 mg (1 g)',
        amountMg: 1000,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'valac-ind-herpes-zoster',
        name: 'Herpes Zóster en Adultos Inmunocompetentes (Prevención de Neuralgia Postherpética)',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: '1000 mg (1 g) cada 8 horas por vía oral durante 7 días, iniciado preferentemente dentro de las primeras 72 horas del inicio de las vesículas cutáneas.'
      },
      {
        id: 'valac-ind-herpes-genital',
        name: 'Herpes Genital (Episodio Primario y Supresor de Recurrencias)',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10 días en primario; continuo en supresor',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: 'Episodio primario: 1000 mg cada 12 horas por 10 días. Recurrencias episódicas: 500 mg cada 12 horas por 3 días. Terapia supresora crónica: 500 mg una vez al día (o 1000 mg/día si ≥10 brotes al año).'
      }
    ],
    whenToUse: [
      'Tratamiento de elección para herpes zóster y zóster oftálmico en pacientes ambulatorios.',
      'Tratamiento y prevención de la transmisión de herpes simple genital (VHS-2 y VHS-1).',
      'Herpes labial recurrente (2 g cada 12 horas por 1 solo día).'
    ],
    pearlsAndPitfalls: [
      '¡Comodidad de 3 tomas al día frente a 5 de Aciclovir oral!: Reemplaza ventajosamente al aciclovir oral (que requiere tomas incómodas cada 4 horas 5 veces al día) asegurando mayor cumplimiento y mayores concentraciones tisulares.',
      'Nefrotoxicidad por cristaluria: Asegurar adecuada hidratación oral diaria para evitar la precipitación intratubular renal de cristales aciculares.',
      'Alerta de PTT/SUH en pacientes VIH avanzados o con trasplante de médula ósea tratados con dosis supramáximas crónicas.'
    ],
    monitoringAndSideEffects: [
      'Función renal (creatinina sérica para ajuste estricto de dosis).',
      'Ingesta hídrica abundante.',
      'Síntomas neuropsiquiátricos en ancianos con fallo renal (confusión o alucinaciones si no se ajusta la dosis).'
    ],
    evidenceAndSources: [
      {
        title: 'CDC Sexually Transmitted Infections Treatment Guidelines: Genital HSV',
        source: 'MMWR Recommendations & Reports',
        year: '2023 Guidelines',
        summary: 'Recomienda valaciclovir oral como régimen de primera línea preferido tanto para el tratamiento de brotes agudos como para la profilaxis supresora continuada.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar cada 8 horas (1 g c/8h en zóster).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: '1 g cada 12 horas en herpes zóster.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 29 mL/min',
        adjustmentText: '1 g cada 24 horas en herpes zóster.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '500 mg cada 24 horas; administrar tras la sesión de diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible y de Elección en Gestación Periparto',
      summary: 'Excelente perfil de bioseguridad en el tercer trimestre para supresión de brotes herpéticos genitales y reducción de cesáreas.',
      clinicalAlternative: 'Fármaco de elección junto a Aciclovir.'
    }
  },
  {
    id: 'ivermectina',
    name: 'Ivermectina',
    commercialNames: ['Ivermectina', 'Stromectol', 'Ivexterm', 'Quantrel'],
    category: 'Antibióticos',
    atcCode: 'P02CF01',
    awareCategory: 'Access',
    therapeuticClass: 'Antiparasitario Avermectina Activador de Canales de Cloro por Glutamato · DCI',
    badgeText: 'Antiparasitarios · DCI Ivermectina (Estrongiloidiasis / Escabiosis)',
    shortDescription: 'Lactona macrocíclica antiparasitaria semisintética derivada de Streptomyces avermitilis. Se une selectivamente a los canales de cloruro activados por glutamato en las células nerviosas y musculares de los invertebrados, provocando hiperpolarización, parálisis neuromuscular y muerte del parásito con mínimo impacto en mamíferos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'iver-gotas-6',
        name: 'Solución Oral en Gotas 6 mg / mL (0.6%) (1 gota = 200 mcg)',
        amountMg: 6,
        volumeMl: 1,
        form: 'drops',
        unit: 'gotas',
        standardBottleMl: 5,
        notes: '1 gota por cada kg de peso corporal (aprox. 200 mcg/kg)'
      },
      {
        id: 'iver-comp-6',
        name: 'Comprimidos Ranurados 6 mg (DCI Ivermectina)',
        amountMg: 6,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'iver-ind-estrongiloidiasis',
        name: 'Estrongiloidiasis Intestinal (Strongyloides stercoralis) / Larva Migrans Cutánea',
        recommendedDoseMgPerKgPerDay: 0.2,
        minDoseMgPerKgPerDay: 0.2,
        maxDoseMgPerKgPerDay: 0.2,
        fixedAdultDoseMg: 12,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '1-2 días en ayunas',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 15,
        description: '200 mcg/kg (0.2 mg/kg) en dosis única por vía oral con agua en ayunas (ejemplo: 60 kg = 12 mg; 75 kg = 15 mg). En hiperinfección o diseminada en inmunodeprimidos: 200 mcg/kg diarios durante varios días hasta erradicación.'
      },
      {
        id: 'iver-ind-escabiosis-sarna',
        name: 'Escabiosis (Sarna Sarcóptica y Sarna Costrosa / Noruega)',
        recommendedDoseMgPerKgPerDay: 0.2,
        minDoseMgPerKgPerDay: 0.2,
        maxDoseMgPerKgPerDay: 0.2,
        fixedAdultDoseMg: 12,
        frequencyPerDay: 1,
        intervalHours: 168,
        durationDays: '2 dosis separadas por 7-14 días',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 15,
        description: '200 mcg/kg en dosis única oral, REPETIDA OBLIGATORIAMENTE a los 7 a 14 días para erradicar las ninfas recién nacidas que eclosionan de los huevos no afectados.'
      }
    ],
    whenToUse: [
      'Tratamiento de elección de la estrongiloidiasis intestinal (cura superior al 95%).',
      'Escabiosis resistente a permetrina tópica o brotes comunitarios en residencias/colegios.',
      'Sarna costrosa de Noruega en pacientes inmunodeprimidos (combinada con permetrina tópica).'
    ],
    pearlsAndPitfalls: [
      '¡Administrar estrictamente con Agua en Ayunas!: En infecciones parasitarias luminales sistémicas se administra 2 horas antes o después de los alimentos.',
      'Regla Práctica en Gotas Pediátricas: En solución al 0.6% (6 mg/mL), exactamente 1 gota equivale a 200 mcg, lo que permite dosificar intuitivamente 1 gota por kilogramo de peso corporal.',
      'Reacción de Mazzotti en filariasis: Al tratar oncocercosis o loasis con alta carga parasitaria puede desencadenar encefalopatía inflamatoria grave por lisis microfilarial.'
    ],
    monitoringAndSideEffects: [
      'Examen coproparasitológico seriado en heces para confirmar cura de Strongyloides.',
      'Resolución del prurito nocturno en escabiosis.',
      'Excelente perfil de tolerabilidad oral (raros mareos o somnolencia leve).'
    ],
    evidenceAndSources: [
      {
        title: 'WHO Model Formulary & CDC Guidelines on Parasitic Infections',
        source: 'World Health Organization Guidelines',
        year: '2023 Guidelines',
        summary: 'Posiciona a la ivermectina oral en la lista de medicamentos esenciales como el fármaco de elección indiscutible para la estrongiloidiasis y la escabiosis resistente.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación fecal del 98%.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio en Gestación',
      summary: 'Evitar en el primer trimestre; preferir permetrina tópica para escabiosis en el embarazo salvo infestación masiva o refractaria.',
      clinicalAlternative: 'Permetrina tópica al 5% para sarna.'
    }
  }
];
