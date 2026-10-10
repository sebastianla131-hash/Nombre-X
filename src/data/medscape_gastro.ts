import { Medication } from '../types';

export const MEDSCAPE_GASTRO: Medication[] = [
  {
    id: 'esomeprazol',
    name: 'Esomeprazol',
    commercialNames: ['Nexium', 'Esomax', 'Inexium', 'Cronopep'],
    category: 'Gastroenterología',
    atcCode: 'A02BC05',
    therapeuticClass: 'Inhibidor de la Bomba de Protones (IBP) Enantiómero S',
    badgeText: 'Gastroenterología · IBP Potente',
    shortDescription: 'Isómero S de omeprazol con mayor biodisponibilidad y menor aclaramiento hepático de primer paso. Provee una inhibición ácida gástrica más rápida y sostenida en ERGE erosiva.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'esom-comp-20',
        name: 'Comprimidos con Gránulos Gastrorresistentes 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'esom-comp-40',
        name: 'Comprimidos con Gránulos Gastrorresistentes 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'esom-vial-40',
        name: 'Polvo para Solución Inyectable IV 40 mg Frasco Vial',
        amountMg: 40,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'esom-ind-erge-reflujo',
        name: 'Enfermedad por Reflujo Gastroesofágico (ERGE) Erosiva Severa',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4-8 semanas',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 40,
        description: '40 mg una vez al día en ayunas (30 a 60 minutos antes del desayuno).'
      },
      {
        id: 'esom-ind-pylori',
        name: 'Erradicación de Helicobacter pylori (Terapia Cuádruple)',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '14 días',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 40,
        description: '40 mg cada 12 horas asociado a antibióticos y bismuto.'
      },
      {
        id: 'esom-ind-peds',
        name: 'ERGE Pediátrica (>1 año y >10 kg)',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 0.7,
        maxDoseMgPerKgPerDay: 1.5,
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4-8 semanas',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '10 a 20 kg: 10 mg una vez al día; >20 kg: 10 a 20 mg una vez al día en ayunas.'
      }
    ],
    whenToUse: [
      'Esofagitis erosiva documentada por endoscopia digestiva alta.',
      'Reflujo gastroesofágico sintomático refractario a omeprazol estándar.',
      'Prevención y cicatrización de úlceras gástricas inducidas por AINEs en pacientes de alto riesgo.'
    ],
    pearlsAndPitfalls: [
      'Administrar siempre 30-60 minutos antes del primer alimento del día para asegurar la presencia del fármaco cuando las bombas de protones están activas.',
      'No masticar ni triturar los comprimidos (contienen microgránulos gastrorresistentes diseñados para sortear el pH gástrico). Se pueden dispersar en agua no carbonatada.',
      'El uso crónico (>1 año) se asocia con hipomagnesemia, déficit de vitamina B12, aumento de fracturas osteoporóticas y sobrecrecimiento bacteriano (C. difficile).'
    ],
    monitoringAndSideEffects: [
      'Magnesio sérico en pacientes tratados por más de 6-12 meses.',
      'Cefalea, diarrea o dolor abdominal leve.',
      'Riesgo de nefritis intersticial aguda (reacción inmunoalérgica rara).'
    ],
    evidenceAndSources: [
      {
        title: 'American College of Gastroenterology (ACG) Guidelines for GERD',
        source: 'American Journal of Gastroenterology',
        year: '2023',
        summary: 'Los IBP son la terapia médica más eficaz para la cicatrización de la esofagitis erosiva y el alivio de pirosis.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis en insuficiencia renal.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Seguro si los antiácidos no son suficientes',
      summary: 'No se ha demostrado teratogénesis en estudios clínicos amplios. De elección tras fracaso de medidas dietéticas y antiácidos convencionales.',
      clinicalAlternative: 'Famotidina o Sucralfato.'
    }
  },
  {
    id: 'pantoprazol',
    name: 'Pantoprazol',
    commercialNames: ['Pantecta', 'Protonix', 'Zoltum', 'Controloc'],
    category: 'Gastroenterología',
    atcCode: 'A02BC02',
    therapeuticClass: 'Inhibidor de la Bomba de Protones (IBP) de Baja Interacción CYP',
    badgeText: 'IBP · Elección con Clopidogrel / HDA',
    shortDescription: 'IBP con activación selectiva en el canalículo secretor parietal a pH fuertemente ácido. Menor afinidad por el citocromo CYP2C19, siendo el IBP de elección en pacientes anticoagulados o con clopidogrel.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'panto-comp-40',
        name: 'Comprimidos con Cubierta Entérica 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'panto-vial-40',
        name: 'Polvo para Solución Inyectable IV 40 mg Frasco Vial',
        amountMg: 40,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'panto-ind-hda-infusion',
        name: 'Hemorragia Digestiva Alta No Variceal (Úlcera Sangrante Forrest I-IIa)',
        fixedAdultDoseMg: 80,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '72 horas',
        maxDailyDoseMg: 240,
        maxSingleDoseMg: 80,
        description: 'Bolo IV inicial de 80 mg en 15 minutos, seguido de infusión continua a 8 mg/hora durante 72 horas para mantener pH intragástrico >6 y consolidar el coágulo plaquetario.'
      },
      {
        id: 'panto-ind-erge-oral',
        name: 'Esofagitis por Reflujo / Gastroprotección en Pacientes con Clopidogrel',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4-8 semanas',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 40,
        description: '40 mg una vez al día por la mañana 30 minutos antes del desayuno.'
      }
    ],
    whenToUse: [
      'Gastroprotección obligatoria en pacientes tratados concomitantemente con clopidogrel y aspirina (DAPT).',
      'Manejo posendoscópico de úlcera péptica con estigmas de alto riesgo de resangrado.',
      'Profilaxis de úlceras por estrés en pacientes de UCI con ventilación mecánica >48h o coagulopatía.'
    ],
    pearlsAndPitfalls: [
      'Fármaco de elección entre todos los IBPs cuando el paciente toma Clopidogrel, ya que no interfiere de forma clínicamente significativa con la activación por CYP2C19.',
      'En hemorragia digestiva alta, el pH gástrico superior a 6 previene la agregación y lisis del coágulo.',
      'No triturar ni partir las tabletas entéricas.'
    ],
    monitoringAndSideEffects: [
      'Tasa de sangrado y necesidad de transfusión en HDA.',
      'Electrolitos séricos (sodio, magnesio) en tratamientos prolongados.',
      'Cefalea y estreñimiento leve.'
    ],
    evidenceAndSources: [
      {
        title: 'Consensus Recommendations on the Management of Nonvariceal Upper GI Bleeding',
        source: 'Annals of Internal Medicine',
        year: '2023',
        summary: 'Respalda la infusión intravenosa de pantoprazol a dosis altas tras hemostasia endoscópica para reducir el resangrado y la cirugía de urgencia.'
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
      statusLabel: 'Compatible con el Embarazo',
      summary: 'Seguro en todos los trimestres cuando la indicación clínica esté justificada.',
      clinicalAlternative: 'Famotidina.'
    }
  },
  {
    id: 'famotidina',
    name: 'Famotidina',
    commercialNames: ['Pepcid', 'Famotax', 'Tamerán', 'Ulcelac'],
    category: 'Gastroenterología',
    atcCode: 'A02BA03',
    therapeuticClass: 'Antagonista Competitivo de Receptores H2 de Histamina',
    badgeText: 'Gastroenterología · Antagonista H2',
    shortDescription: 'Antagonista competitivo reversible de receptores histamínicos H2 de las células parietales gástricas. Reduce la secreción ácida basal y nocturna con rápido inicio de acción (1 hora).',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'famo-comp-20',
        name: 'Comprimidos Recubiertos 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'famo-comp-40',
        name: 'Comprimidos Recubiertos 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'famo-amp-20',
        name: 'Ampolla Inyectable IV 20 mg / 2 mL',
        amountMg: 20,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'famo-ind-pirosis',
        name: 'Pirosis Ocasional / Dispepsia / Reflujo Gastroesofágico Leve',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'A demanda o 2-4 semanas',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '20 mg cada 12 horas o 20-40 mg por la noche antes de acostarse.'
      },
      {
        id: 'famo-ind-anafilaxia-coadyuvante',
        name: 'Coadyuvante en Anafilaxia / Urticaria Aguda (Bloqueo H2)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Agudo',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '20 mg IV lento en 2 minutos asociado a adrenalina y antihistamínicos H1 (difenhidramina).'
      },
      {
        id: 'famo-ind-peds',
        name: 'Reflujo / Esofagitis Pediátrica (>3 meses)',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 0.5,
        maxDoseMgPerKgPerDay: 1.5,
        fixedAdultDoseMg: 20,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '2-4 semanas',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '0.5 a 1 mg/kg/día dividido cada 12 horas (máximo 40 mg/día).'
      }
    ],
    whenToUse: [
      'Alivio rápido de la acidez estomacal y pirosis.',
      'Sustituto de primera línea seguro tras la retirada de la ranitidina.',
      'Efecto sinérgico con antihistamínicos H1 en urticaria severa y anafilaxia.'
    ],
    pearlsAndPitfalls: [
      'Desarrollo rápido de tolerancia farmacológica (taquifilaxia) en 1 a 2 semanas de uso continuo por regulación al alza de receptores.',
      'A diferencia de cimetidina, NO inhibe el citocromo P450, por lo que carece de interacciones metabólicas hepáticas importantes.',
      'Requiere ajuste de dosis en insuficiencia renal moderada a severa para evitar confusión y agitación en el anciano.'
    ],
    monitoringAndSideEffects: [
      'Función renal (creatinina sérica).',
      'Estado neurológico en adultos mayores con falla renal (riesgo de delirio y alucinaciones).',
      'Cefalea, mareo y diarrea transitoria.'
    ],
    evidenceAndSources: [
      {
        title: 'Safety and Efficacy of Famotidine in Acid-Peptic Disorders',
        source: 'Alimentary Pharmacology & Therapeutics',
        year: '2022',
        summary: 'Demostró alta seguridad y excelente perfil de supresión ácida nocturna sin la contaminación de nitrosaminas (NDMA) de la ranitidina.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar de 20 a 40 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 50 mL/min',
        adjustmentText: 'Reducir la dosis al 50% (ej. 20 mg cada 24 horas o 40 mg cada 48 horas).',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Muy Seguro en Gestación',
      summary: 'Amplia experiencia clínica. No incrementa el riesgo de malformaciones fetales. Fármaco oral de elección para pirosis y dispepsia en el embarazo tras medidas dietéticas.',
      clinicalAlternative: 'Fármaco de elección preferido.'
    }
  },
  {
    id: 'loperamida',
    name: 'Loperamida',
    commercialNames: ['Imodium', 'Lomper', 'Lopex', 'Fortasec', 'Suprasec'],
    category: 'Gastroenterología',
    atcCode: 'A07DA03',
    therapeuticClass: 'Antidiarreico Sintético · Agonista Opioide Periférico Mu',
    badgeText: 'Gastroenterología · Antidiarreico',
    shortDescription: 'Agonista de receptores opioides mu en el plexo mientérico intestinal. Disminuye el peristaltismo propulsivo, prolonga el tránsito gastrointestinal y aumenta el tono del esfínter anal sin efectos opioides centrales a dosis habituales.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'loper-comp-2',
        name: 'Comprimidos / Cápsulas 2 mg',
        amountMg: 2,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'loper-ind-diarrea-adulta',
        name: 'Diarrea Aguda Inespecífica en Adultos / Diarrea del Viajero',
        fixedAdultDoseMg: 4,
        frequencyPerDay: 4,
        intervalHours: 4,
        durationDays: 'Máximo 48 horas',
        maxDailyDoseMg: 16,
        maxSingleDoseMg: 4,
        description: 'Dosis inicial de 4 mg (2 cápsulas), seguida de 2 mg tras cada deposición líquida diarreica. Dosis máxima diaria recomendada: 8 mg en automedicación o 16 mg bajo supervisión médica.'
      }
    ],
    whenToUse: [
      'Diarrea aguda acuosa no inflamatoria en adultos.',
      'Control de deposiciones en pacientes con ileostomía o síndrome de intestino corto.',
      'Diarrea crónica asociada a síndrome de intestino irritable con predominio diarreico (SII-D).'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ESTRICTA EN DISENTERÍA Y DIARREA INFECCIOSA!: Jamás usar si hay fiebre alta (>38.5°C), heces con sangre visible (disentería) o sospecha de colitis pseudomembranosa por C. difficile, ya que puede desencadenar íleo paralítico y megacolon tóxico potencialmente mortal.',
      '¡Alerta Blackbox FDA!: Dosis supra-terapéuticas o abuso recreativo causan arritmias ventriculares letales (Torsades de Pointes) y paro cardíaco por bloqueo de canales de potasio hERG (prolongación de QTc).',
      'Contraindicada de forma general en pediatría (<2 años) y no recomendada rutinariamente en niños menores de 12 años.'
    ],
    monitoringAndSideEffects: [
      'Frecuencia y consistencia de las deposiciones (suspender si no hay mejoría en 48 horas).',
      'Distensión abdominal y ruidos hidroaéreos.',
      'Estreñimiento, cólicos abdominales, náuseas y sequedad de boca.'
    ],
    evidenceAndSources: [
      {
        title: 'ACG Clinical Guideline: Diagnosis and Management of Acute Diarrhea',
        source: 'American Journal of Gastroenterology',
        year: '2023',
        summary: 'La loperamida es eficaz para el alivio sintomático de la diarrea del viajero acuosa cuando se combina con antibióticos o como monoterapia sin disentería.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación casi total por heces y bilis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en 1.er Trimestre',
      summary: 'Algunos estudios han reportado una ligera asociación con anomalías cardíacas en el primer trimestre. Reservar para deshidratación severa si los rehidratantes orales fracasan.',
      contraindicatedInTrimester: [1],
      clinicalAlternative: 'Sales de Rehidratación Oral (SRO) y dieta astringente.'
    }
  }
];
