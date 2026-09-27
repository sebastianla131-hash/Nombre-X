import { Medication } from '../types';

export const ANTIBIOTICS_MEDICATIONS: Medication[] = [
  {
    id: 'amoxicilina',
    name: 'Amoxicilina',
    commercialNames: ['Amoxil', 'Clamoxyl', 'Amoxal', 'Trimox'],
    category: 'Antibióticos',
    atcCode: 'J01CA04',
    awareCategory: 'Access',
    therapeuticClass: 'Aminopenicilina (Betalactámico) · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Antibiótico de primera línea para otitis media aguda, sinusitis bacteriana, faringoamigdalitis y neumonía adquirida en la comunidad.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'amox-susp-250',
        name: 'Polvo para Suspensión Oral 250 mg / 5 mL (SRS 2025)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100,
        notes: 'Formulación estándar SRS El Salvador (50 mg/mL)'
      },
      {
        id: 'amox-comp-500',
        name: 'Sólidos Orales (Comprimidos/Cápsulas) 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Dosis estándar para niños >40 kg y adultos'
      }
    ],
    indications: [
      {
        id: 'amox-ind-oma-high',
        name: 'Otitis Media Aguda (OMA) / Sinusitis (Dosis Alta)',
        recommendedDoseMgPerKgPerDay: 90,
        minDoseMgPerKgPerDay: 80,
        maxDoseMgPerKgPerDay: 90,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-10 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: 'Dosis de 80-90 mg/kg/día para vencer la resistencia de S. pneumoniae con PBP alterada.'
      },
      {
        id: 'amox-ind-estandar',
        name: 'Infección Respiratoria / Faringoamigdalitis (Dosis Estándar)',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 40,
        maxDoseMgPerKgPerDay: 50,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-10 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        description: '40-50 mg/kg/día fraccionado cada 8 horas.'
      },
      {
        id: 'amox-ind-adulto',
        name: 'Adultos: Infección bacteriana susceptible',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: '500 mg cada 8 horas o 1 g cada 8-12 horas según severidad clínica.'
      }
    ],
    whenToUse: [
      'Otitis media aguda bacteriana no complicada en niños sin alergia a betalactámicos.',
      'Neumonía adquirida en la comunidad típica ambulatoria.',
      'Faringoamigdalitis aguda por Streptococcus pyogenes (Streptococcus grupo A).',
      'Infecciones cutáneas leves por gérmenes sensibles.'
    ],
    pearlsAndPitfalls: [
      'En OMA severa o lactantes <2 años, la dosis debe ser 80-90 mg/kg/día para superar resistencia intermedia de neumococo.',
      'No induce diarrea tanto como la combinación con clavulánico; reservar clavulánico para sospecha de productores de betalactamasa (H. influenzae, M. catarrhalis).',
      'El exantema maculopapular por amoxicilina durante una mononucleosis infecciosa (EBV) no es una alergia real a penicilina mediada por IgE.'
    ],
    monitoringAndSideEffects: [
      'Vómitos, diarrea, erupción cutánea.',
      'Vigilar hipersensibilidad inmediata (urticaria, broncoespasmo, anafilaxia).'
    ],
    evidenceAndSources: [
      {
        title: 'Guía AAP: The Diagnosis and Management of Acute Otitis Media',
        source: 'Pediatrics. 2013;131(3):e964-99',
        summary: 'Recomienda amoxicilina a dosis alta (80-90 mg/kg/día) como fármaco de primera elección.'
      },
      {
        title: 'Listado Oficial de Medicamentos 2025',
        source: 'Superintendencia de Regulación Sanitaria (SRS), El Salvador',
        summary: 'Código ATC J01CA04, clasificado en Grupo AWaRe Acceso (OMS).'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis cada 8 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 50 mL/min', adjustmentText: 'Dosis habitual cada 12 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Dosis habitual cada 24 horas', cautionLevel: 'severe' }
    ],
    reconstitutionNotes: 'Agitar el frasco para aflojar el polvo. Agregar agua hervida fría hasta la marca de aforo en dos tiempos y agitar vigorosamente.',
    storageNotes: 'Mantener en refrigeración (2-8 °C) tras reconstituir. Desechar a los 14 días.'
  },
  {
    id: 'amoxicilina-clavulanico',
    name: 'Amoxicilina + Ácido Clavulánico',
    commercialNames: ['Augmentin', 'Clavulin', 'Amoxidal Duo', 'Curam'],
    category: 'Antibióticos',
    atcCode: 'J01CR02',
    awareCategory: 'Access',
    therapeuticClass: 'Aminopenicilina + Inhibidor de Betalactamasa · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Betalactámico con inhibidor para infecciones por gérmenes productores de betalactamasas (H. influenzae, M. catarrhalis, S. aureus MSSA, anaerobios).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'amox-clav-250-62',
        name: 'Polvo para Suspensión 250 mg + 62.5 mg / 5 mL (SRS 2025)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100,
        notes: 'Presentación oficial SRS El Salvador (proporción 4:1)'
      },
      {
        id: 'amox-clav-comp-500-125',
        name: 'Sólidos Orales 500 mg + 125 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS El Salvador'
      }
    ],
    indications: [
      {
        id: 'amox-clav-ind-oma-fallo',
        name: 'Fallo Terapéutico a Amoxicilina / OMA con Conjuntivitis',
        recommendedDoseMgPerKgPerDay: 80,
        minDoseMgPerKgPerDay: 80,
        maxDoseMgPerKgPerDay: 90,
        fixedAdultDoseMg: 875,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '10 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: 'Dosis basada en componente amoxicilina calculada a 80-90 mg/kg/día.'
      },
      {
        id: 'amox-clav-ind-mordeduras',
        name: 'Mordeduras Humanas o de Animales / Celulitis',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 40,
        maxDoseMgPerKgPerDay: 50,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-10 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 500,
        description: 'Cubre Pasteurella multocida, Eikenella corrodens y anaerobios orales.'
      },
      {
        id: 'amox-clav-adult-oral',
        name: 'Adultos: 500/125 mg cada 8 horas',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: '1 comprimido de 500/125 mg cada 8 horas con alimentos.'
      }
    ],
    whenToUse: [
      'OMA recurrente o tras fallo terapéutico con amoxicilina previa en los últimos 30 días.',
      'Síndrome otitis-conjuntivitis (suele ser Haemophilus no tipificable productor de betalactamasa).',
      'Mordeduras de perro, gato o humanas.',
      'Sinusitis bacteriana complicada o neumonía con sospecha de anaerobios/S. aureus MSSA.'
    ],
    pearlsAndPitfalls: [
      'El ácido clavulánico es el responsable de la hipermotilidad gastrointestinal y diarrea. Administrar al inicio de las comidas.',
      'El cálculo siempre se realiza sobre los mg de amoxicilina.',
      'No sobrepasar 10 mg/kg/día de ácido clavulánico en formulaciones pediátricas para evitar diarrea severa.'
    ],
    monitoringAndSideEffects: [
      'Diarrea por clavulánico, náuseas, exantema.',
      'Riesgo infrecuente de colestasis hepática inducida por fármacos.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Guideline for Acute Bacterial Rhinosinusitis in Children and Adults',
        source: 'Clin Infect Dis. 2012;54(8):e72-e112',
        summary: 'Amoxicilina-clavulanato recomendado como primera línea empírica.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01CR02',
        summary: 'Sólidos orales 500+125 mg y suspensión 250+62.5 mg/5mL.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: 'Dosis estándar cada 8 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 50 mL/min', adjustmentText: 'Dosis estándar cada 12 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Dosis estándar cada 24 horas', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'ampicilina-sulbactam',
    name: 'Ampicilina + Sulbactam',
    commercialNames: ['Unasyn', 'Sulbampicin', 'Famicilina'],
    category: 'Antibióticos',
    atcCode: 'J01CR01',
    awareCategory: 'Access',
    therapeuticClass: 'Aminopenicilina parenteral + Inhibidor · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Antibiótico parenteral para infecciones intraabdominales, ginecológicas, neumonía por aspiración y celulitis complicada.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'ampi-sulb-vial-1500',
        name: 'Sólido Parenteral 1000 mg + 500 mg (1.5 g) Vial (SRS 2025)',
        amountMg: 1500,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Contiene 1 g Ampicilina + 0.5 g Sulbactam. Disolver en 10 mL de agua estéril.'
      }
    ],
    indications: [
      {
        id: 'ampi-sulb-ped-infecc',
        name: 'Infección Moderada a Severa Pediátrica',
        recommendedDoseMgPerKgPerDay: 150,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 200,
        fixedAdultDoseMg: 1500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7-14 días',
        maxDailyDoseMg: 12000,
        maxSingleDoseMg: 3000,
        description: '100-200 mg de ampicilina/kg/día (150-300 mg/kg/día totales) divididos cada 6 horas IV.'
      },
      {
        id: 'ampi-sulb-adult-dose',
        name: 'Adultos: 1.5 g a 3 g IV cada 6 horas',
        fixedAdultDoseMg: 1500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7-10 días',
        maxDailyDoseMg: 12000,
        maxSingleDoseMg: 3000,
        description: '1.5 g a 3 g IV cada 6 horas según gravedad de la infección.'
      }
    ],
    whenToUse: [
      'Infecciones intraabdominales comunitarias con cobertura para anaerobios y enterococos.',
      'Neumonía aspirativa y absceso pulmonar.',
      'Infecciones ginecológicas y pélvicas (enfermedad pélvica inflamatoria, endometritis postparto).'
    ],
    pearlsAndPitfalls: [
      'Excelente cobertura para Acinetobacter baumannii susceptible debido a la actividad intrínseca del sulbactam.',
      'Diluir en Solución Salina 0.9% o D5% y pasar en infusión de 15 a 30 minutos.'
    ],
    monitoringAndSideEffects: [
      'Flebitis en sitio de infusión, náuseas, eosinofilia transitoria, transaminasas elevadas.'
    ],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01CR01',
        summary: 'Ampicilina 1000 mg + Sulbactam 500 mg sólidos parenterales IM, IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '1.5 g - 3 g cada 6 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 15 - 50 mL/min', adjustmentText: '1.5 g - 3 g cada 12 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 15 mL/min', adjustmentText: '1.5 g cada 24 horas', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'ceftriaxona',
    name: 'Ceftriaxona',
    commercialNames: ['Rocephin', 'Cefaxona', 'Cefrine', 'Acantex'],
    category: 'Antibióticos',
    atcCode: 'J01DD04',
    awareCategory: 'Watch',
    therapeuticClass: 'Cefalosporina de 3ra generación parenteral · AWaRe Precaución (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Precaución',
    shortDescription: 'Cefalosporina de amplio espectro para sepsis, meningitis bacteriana, ITU complicada y gonorrea.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'cef-vial-1g',
        name: 'Sólidos Parenterales Vial 1 g (SRS 2025)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025. Reconstituir en 10 mL de agua estéril (100 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'cef-ind-infecc-general',
        name: 'Infección Sistémica / Neumonía / ITU Severa Pediátrica',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 50,
        maxDoseMgPerKgPerDay: 75,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-10 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 2000,
        description: '50-75 mg/kg/día en 1 dosis diaria (o cada 12 horas si severa).'
      },
      {
        id: 'cef-ind-meningitis',
        name: 'Meningitis Bacteriana Aguda Pediátrica',
        recommendedDoseMgPerKgPerDay: 100,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 100,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10-14 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        description: 'Dosis meníngea: 100 mg/kg/día repartido cada 12 horas IV.'
      },
      {
        id: 'cef-ind-adulto',
        name: 'Adultos: 1 g a 2 g IV cada 24 horas',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        description: '1 g a 2 g IV cada 24 horas (en meningitis 2 g cada 12 horas).'
      }
    ],
    whenToUse: [
      'Infecciones severas que requieran hospitalización: neumonía complicada, pielonefritis, bacteriemia.',
      'Meningitis bacteriana en combinación con vancomicina y ampicilina (según edad).',
      'Artritis séptica y osteomielitis por enterobacterias o neumococo.'
    ],
    pearlsAndPitfalls: [
      'CONTRAINDICADO en neonatos hiperbilirrubinémicos (desplaza la bilirrubina de la albúmina -> kernicterus).',
      'CONTRAINDICADO con soluciones con calcio (como Ringer Lactato) por riesgo de precipitados letales ceftriaxona-calcio en pulmones y riñones.',
      'Eliminación dual (biliar y renal); NO requiere ajuste en insuficiencia renal pura a menos que coexista con falla hepática.'
    ],
    monitoringAndSideEffects: [
      'Barro biliar reversible (pseudolitiasis biliar en ecografía), diarrea por C. difficile, flebitis.'
    ],
    evidenceAndSources: [
      {
        title: 'Listado Oficial de Medicamentos 2025',
        source: 'SRS El Salvador J01DD04',
        summary: 'Ceftriaxona sódica 1 g sólidos parenterales IM, IV. Grupo AWaRe Precaución (Watch).'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 10 mL/min', adjustmentText: 'No requiere ajuste (100% de la dosis habitual)', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Máximo 2 g al día si no hay falla hepática coexistente', cautionLevel: 'normal' }
    ],
    reconstitutionNotes: 'Para IV: reconstituir vial de 1 g con 10 mL de agua estéril y diluir en 50-100 mL de solución salina o dextrosa. Pasar en 30 minutos. Para IM: puede reconstituirse con lidocaína al 1% sin epinefrina.'
  },
  {
    id: 'cefadroxilo',
    name: 'Cefadroxilo',
    commercialNames: ['Duracef', 'Cefadrox', 'Cedrox'],
    category: 'Antibióticos',
    atcCode: 'J01DB05',
    awareCategory: 'Access',
    therapeuticClass: 'Cefalosporina de 1ra generación oral (SRS 2025)',
    badgeText: 'SRS 2025 · Grupo Acceso',
    shortDescription: 'Cefalosporina oral para infecciones de piel y tejidos blandos (S. aureus MSSA, S. pyogenes) y faringitis estreptocócica.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'cefadrox-susp-250',
        name: 'Polvo o Gránulos para Suspensión Oral 250 mg / 5 mL (SRS 2025)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial SRS El Salvador'
      },
      {
        id: 'cefadrox-comp-500',
        name: 'Sólidos Orales 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Comprimidos / cápsulas de 500 mg'
      }
    ],
    indications: [
      {
        id: 'cefadrox-ped-piel',
        name: 'Infección Cutánea / Faringoamigdalitis Pediátrica',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 25,
        maxDoseMgPerKgPerDay: 50,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-10 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: '30 mg/kg/día repartido cada 12 horas vía oral.'
      },
      {
        id: 'cefadrox-adult-dose',
        name: 'Adultos: 500 mg a 1 g cada 12 horas',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-10 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: '500 mg a 1 g VO cada 12 horas según severidad.'
      }
    ],
    whenToUse: [
      'Impétigo, foliculitis, celulitis no purulenta y erisipela.',
      'Faringoamigdalitis estreptocócica en pacientes con intolerancia a penicilina pero sin anafilaxia.'
    ],
    pearlsAndPitfalls: [
      'Excelente vida media que permite dosificación cómoda cada 12 horas en comparación con cefalexina (que requiere cada 6 horas).',
      'No tiene actividad contra Enterococcus ni S. aureus resistente a meticilina (MRSA).'
    ],
    monitoringAndSideEffects: ['Molestias digestivas, náuseas, rash cutáneo.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01DB05',
        summary: 'Cefadroxilo 500 mg sólidos orales y 250 mg/5mL suspensión oral.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis cada 12 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 50 mL/min', adjustmentText: 'Dosis habitual cada 24 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Dosis habitual cada 36 horas', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'cefazolina',
    name: 'Cefazolina',
    commercialNames: ['Kefzol', 'Cefacidal', 'Fazocelina'],
    category: 'Antibióticos',
    atcCode: 'J01DB04',
    awareCategory: 'Access',
    therapeuticClass: 'Cefalosporina de 1ra generación parenteral · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Profilaxis quirúrgica estándar de elección e infecciones severas por Staphylococcus aureus meticilinosensible (MSSA).',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'cefazolina-vial-1g',
        name: 'Sólidos Parenterales Vial 1 g (SRS 2025)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025. Reconstituir con 10 mL de agua estéril.'
      }
    ],
    indications: [
      {
        id: 'cefazolina-ind-profilaxis',
        name: 'Profilaxis Quirúrgica Preoperatoria',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 25,
        maxDoseMgPerKgPerDay: 30,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '1 dosis prequirúrgica',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 3000,
        description: 'Pediátrico: 30 mg/kg (máx 2 g). Adultos: 2 g IV administrados 30-60 minutos antes de la incisión quirúrgica (3 g si peso > 120 kg).'
      },
      {
        id: 'cefazolina-ind-infecc-peds',
        name: 'Infección Sistémica / Celulitis Severa MSSA Pediátrica',
        recommendedDoseMgPerKgPerDay: 50,
        minDoseMgPerKgPerDay: 50,
        maxDoseMgPerKgPerDay: 100,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '50-100 mg/kg/día repartido cada 8 horas IV.'
      }
    ],
    whenToUse: [
      'Profilaxis antibiótica estándar para cirugía limpia o limpia-contaminada.',
      'Bacteriemia, endocarditis u osteomielitis por S. aureus sensible a meticilina (MSSA) en pacientes con intolerancia a oxacilina.'
    ],
    pearlsAndPitfalls: [
      'En cirugías prolongadas, redosificar cada 4 horas intraoperatoriamente para mantener niveles séricos.',
      'Excelente tolerancia vascular comparada con oxacilina.'
    ],
    monitoringAndSideEffects: ['Flebitis, elevación transitoria de transaminasas, rash cutáneo.'],
    evidenceAndSources: [
      {
        title: 'Clinical Practice Guidelines for Antimicrobial Prophylaxis in Surgery',
        source: 'Am J Health-Syst Pharm. 2013;70:195-283',
        summary: 'Cefazolina es el estándar de oro profiláctico para cirugía gastrointestinal, ortopédica y cardiovascular.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis cada 8 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 20 - 50 mL/min', adjustmentText: 'Dosis habitual cada 12 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 20 mL/min', adjustmentText: 'Dosis habitual cada 24 horas', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'claritromicina',
    name: 'Claritromicina',
    commercialNames: ['Klaricid', 'Biaxin', 'Clambiotic'],
    category: 'Antibióticos',
    atcCode: 'J01FA09',
    awareCategory: 'Watch',
    therapeuticClass: 'Macrólido · AWaRe Precaución (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Precaución',
    shortDescription: 'Macrólido para neumonía atípica (Mycoplasma, Chlamydophila), faringoamigdalitis en alérgicos a penicilina y erradicación de H. pylori.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'clari-susp-250',
        name: 'Polvo o Gránulos para Suspensión 250 mg / 5 mL (SRS 2025)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (50 mg/mL)'
      },
      {
        id: 'clari-comp-500',
        name: 'Sólidos Orales 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025'
      }
    ],
    indications: [
      {
        id: 'clari-ind-peds',
        name: 'Neumonía Atípica / Faringitis Pediátrica',
        recommendedDoseMgPerKgPerDay: 15,
        minDoseMgPerKgPerDay: 15,
        maxDoseMgPerKgPerDay: 15,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-10 días',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 500,
        description: '15 mg/kg/día fraccionado cada 12 horas vía oral (máximo 500 mg por dosis).'
      },
      {
        id: 'clari-ind-adults',
        name: 'Adultos: 500 mg cada 12 horas',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-14 días',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 500,
        description: '500 mg cada 12 horas vía oral con o sin alimentos.'
      }
    ],
    whenToUse: [
      'Neumonía atípica comunitaria en niños mayores de 5 años y adultos.',
      'Tratamiento de faringitis estreptocócica en pacientes con alergia confirmada a penicilinas.',
      'Esquemas de erradicación de Helicobacter pylori en adultos.'
    ],
    pearlsAndPitfalls: [
      'Potente inhibidor del citocromo CYP3A4: múltiples interacciones con estatinas (riesgo de rabdomiólisis), carbamazepina y anticoagulantes.',
      'Puede prolongar el intervalo QTc en el electrocardiograma.'
    ],
    monitoringAndSideEffects: ['Sabor metálico o disgeusia, náuseas, dolor abdominal, prolongación QT.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01FA09',
        summary: 'Claritromicina 500 mg sólidos orales y 250 mg/5mL suspensión oral.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 30 mL/min', adjustmentText: '100% de la dosis cada 12 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: 'Reducir la dosis al 50% (ej. 250 mg cada 12h o 500 mg cada 24h)', cautionLevel: 'moderate' }
    ]
  },
  {
    id: 'clindamicina',
    name: 'Clindamicina',
    commercialNames: ['Dalacin', 'Clindacin', 'Bioclindax'],
    category: 'Antibióticos',
    atcCode: 'J01FF01',
    awareCategory: 'Access',
    therapeuticClass: 'Lincosamida · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Antibiótico para infecciones de piel y partes blandas por Gram positivos y anaerobios; efecto antitoxina en shock tóxico estreptocócico/estafilocócico.',
    availableRoutes: ['iv', 'im', 'oral'],
    concentrations: [
      {
        id: 'clinda-amp-150',
        name: 'Líquidos Parenterales 150 mg/mL (600 mg / 4 mL) Ampolla (SRS 2025)',
        amountMg: 600,
        volumeMl: 4,
        form: 'vial',
        unit: 'mL',
        notes: 'Equivale a 150 mg/mL fosfato de clindamicina'
      },
      {
        id: 'clinda-comp-300',
        name: 'Sólidos Orales (Cápsulas) 300 mg (SRS 2025)',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Clorhidrato de clindamicina'
      }
    ],
    indications: [
      {
        id: 'clinda-ind-ped-iv',
        name: 'Infección Severa Pediátrica IV (Celulitis / Osteomielitis)',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 20,
        maxDoseMgPerKgPerDay: 40,
        fixedAdultDoseMg: 600,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7-14 días',
        maxDailyDoseMg: 2700,
        maxSingleDoseMg: 900,
        description: '20-40 mg/kg/día fraccionado cada 6 a 8 horas por vía IV.'
      },
      {
        id: 'clinda-ind-ped-oral',
        name: 'Infección Moderada Pediátrica Oral',
        recommendedDoseMgPerKgPerDay: 20,
        minDoseMgPerKgPerDay: 15,
        maxDoseMgPerKgPerDay: 25,
        fixedAdultDoseMg: 300,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-10 días',
        maxDailyDoseMg: 1800,
        maxSingleDoseMg: 600,
        description: '15-25 mg/kg/día fraccionado cada 8 horas vía oral.'
      },
      {
        id: 'clinda-ind-adulto',
        name: 'Adultos: 600 mg IV cada 8 horas o 300 mg VO cada 6 horas',
        fixedAdultDoseMg: 600,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 2700,
        maxSingleDoseMg: 900,
        description: '600 mg IV cada 8 horas o 300-450 mg VO cada 6 horas.'
      }
    ],
    whenToUse: [
      'Infecciones cutáneas y osteoarticulares por S. aureus (incluido CA-MRSA sensible).',
      'Infecciones odontogénicas severas o abscesos orofaciales (cubre anaerobios orales).',
      'Fascitis necrosante o shock tóxico por Streptococcus pyogenes (bloquea la síntesis ribosomal de toxinas bacterianas).'
    ],
    pearlsAndPitfalls: [
      'Asociación clásica con colitis pseudomembranosa por Clostridioides difficile.',
      'Nunca administrar en bolo IV directo sin diluir (riesgo de paro cardiorrespiratorio e hipotensión). Infundir en al menos 30-40 minutos.',
      'Verificar prueba de D-test para descartar resistencia inducible a macrólidos-lincosamidas.'
    ],
    monitoringAndSideEffects: ['Diarrea acuosa copiosa (descartar C. difficile), flebitis, náuseas.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01FF01',
        summary: 'Clindamicina 150 mg/mL parenteral y 300 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 10 mL/min', adjustmentText: 'No requiere ajuste de dosis (metabolismo hepático)', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: '100% de la dosis; no requiere suplemento en hemodiálisis', cautionLevel: 'normal' }
    ]
  },
  {
    id: 'gentamicina',
    name: 'Gentamicina',
    commercialNames: ['Gentalyn', 'Gentisul', 'Gentamina'],
    category: 'Antibióticos',
    atcCode: 'J01GB03',
    awareCategory: 'Access',
    therapeuticClass: 'Aminoglucósido · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Aminoglucósido bactericida concentración-dependiente para sepsis neonatal, ITU complicada y choque séptico por Gram negativos.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'genta-amp-80mg',
        name: 'Líquidos Parenterales 80 mg / 2 mL (40 mg/mL) Ampolla (SRS 2025)',
        amountMg: 80,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación estándar SRS 2025 (40 mg/mL)'
      },
      {
        id: 'genta-amp-80mg-1ml',
        name: 'Líquidos Parenterales 80 mg/mL Ampolla (SRS 2025)',
        amountMg: 80,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación concentrada SRS 2025'
      }
    ],
    indications: [
      {
        id: 'genta-ind-dosis-unica',
        name: 'Dosis Única Diaria (DUD) Pediátrica',
        recommendedDoseMgPerKgPerDay: 5,
        minDoseMgPerKgPerDay: 5,
        maxDoseMgPerKgPerDay: 7.5,
        fixedAdultDoseMg: 350,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-7 días',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        description: '5-7.5 mg/kg en dosis única diaria cada 24 horas IV (infusión en 30-60 min).'
      },
      {
        id: 'genta-ind-neonatal',
        name: 'Sepsis Neonatal (Término >37 sem)',
        recommendedDoseMgPerKgPerDay: 4,
        minDoseMgPerKgPerDay: 3.5,
        maxDoseMgPerKgPerDay: 5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7 días',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 100,
        description: '4-5 mg/kg cada 24 horas IV (cada 36 horas en prematuros).'
      },
      {
        id: 'genta-ind-adulto',
        name: 'Adultos: 5 mg/kg IV cada 24 horas',
        fixedAdultDoseMg: 350,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-7 días',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        description: 'Dosis única diaria: 5 mg/kg en infusión de 30-60 minutos.'
      }
    ],
    whenToUse: [
      'Infecciones severas por bacilos Gram negativos aerobios (E. coli, Klebsiella, Pseudomonas).',
      'Tratamiento empírico de sepsis neonatal en combinación con ampicilina.',
      'Sinergia contra Enterococcus o Streptococcus en endocarditis infecciosa (dosis bajas 3 mg/kg/día).'
    ],
    pearlsAndPitfalls: [
      'La dosificación en Dosis Única Diaria (DUD) maximiza el pico bactericida Cmax/MIC y reduce el riesgo de nefrotoxicidad.',
      'Nefrotoxicidad (necrosis tubular aguda) y ototoxicidad cocleovestibular irreversible.',
      'Mantener hidratación adecuada y evitar coadministración con furosemida o vancomicina si es posible.'
    ],
    monitoringAndSideEffects: ['Creatinina sérica, diuresis, pruebas auditivas vestibulares.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01GB03',
        summary: 'Gentamicina 40 mg/mL y 80 mg/mL líquidos parenterales IM, IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 60 mL/min', adjustmentText: '100% de la dosis cada 24 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 40 - 59 mL/min', adjustmentText: 'Dosis habitual cada 36 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr 20 - 39 mL/min', adjustmentText: 'Dosis habitual cada 48 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 20 mL/min', adjustmentText: 'Medir niveles pico y valle antes de redosificar', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'amikacina',
    name: 'Amikacina',
    commercialNames: ['Amikin', 'Biclin', 'Amikayect'],
    category: 'Antibióticos',
    atcCode: 'J01GB06',
    awareCategory: 'Access',
    therapeuticClass: 'Aminoglucósido de reserva frente a resistencia · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Aminoglucósido resistente a la mayoría de enzimas inactivadoras bacterianas; elección en sospecha de Gram negativos multirresistentes.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'amika-amp-250',
        name: 'Líquidos Parenterales 250 mg/mL (500 mg / 2 mL) Ampolla (SRS 2025)',
        amountMg: 500,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (250 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'amika-ind-peds',
        name: 'Infección Severa Pediátrica (Dosis Única)',
        recommendedDoseMgPerKgPerDay: 15,
        minDoseMgPerKgPerDay: 15,
        maxDoseMgPerKgPerDay: 20,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-10 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 1000,
        description: '15-20 mg/kg en dosis única diaria IV en infusión de 30 a 60 minutos.'
      },
      {
        id: 'amika-ind-adults',
        name: 'Adultos: 15 mg/kg IV cada 24 horas',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-10 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 1000,
        description: '15 mg/kg IV cada 24 horas (máximo 1.5 g/día).'
      }
    ],
    whenToUse: [
      'Infecciones intrahospitalarias severas por Pseudomonas aeruginosa o enterobacterias resistentes a gentamicina.',
      'Sepsis de foco urinario o abdominal en pacientes de alto riesgo.',
      'Fármaco de segunda línea en esquemas de tuberculosis resistente (SRS 2025).'
    ],
    pearlsAndPitfalls: [
      'Menor tasa de resistencia enzimática bacteriana que gentamicina o tobramicina.',
      'Nefrotóxico y ototóxico: limitar tratamiento a 7-10 días siempre que sea posible.'
    ],
    monitoringAndSideEffects: ['Creatinina sérica basal y cada 48h, diuresis, audiometría en tratamientos prolongados.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01GB06',
        summary: 'Amikacina sulfato 250 mg/mL líquidos parenterales IM, IV. Grupo AWaRe Acceso.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '15 mg/kg cada 24 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 30 - 50 mL/min', adjustmentText: '15 mg/kg cada 36 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr 10 - 29 mL/min', adjustmentText: '15 mg/kg cada 48 horas', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'ciprofloxacino',
    name: 'Ciprofloxacino',
    commercialNames: ['Cipro', 'Ciproxina', 'Ciriax', 'Baflox'],
    category: 'Antibióticos',
    atcCode: 'J01MA02',
    awareCategory: 'Watch',
    therapeuticClass: 'Fluoroquinolona · AWaRe Precaución (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Precaución',
    shortDescription: 'Fluoroquinolona de amplio espectro para ITU complicada, pielonefritis, diarrea bacteriana invasiva y prostatitis.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'cipro-comp-500',
        name: 'Sólidos Orales 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Clorhidrato de ciprofloxacino'
      },
      {
        id: 'cipro-iv-200',
        name: 'Líquidos Parenterales 200 mg / 100 mL (SRS 2025)',
        amountMg: 200,
        volumeMl: 100,
        form: 'vial',
        unit: 'mL',
        notes: 'Solución para infusión intravenosa lista para usar (2 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'cipro-ind-itu-adult',
        name: 'Pielonefritis Aguda / ITU Complicada en Adultos',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 750,
        description: '500 mg VO cada 12 horas o 400 mg IV cada 12 horas.'
      },
      {
        id: 'cipro-ind-peds-especial',
        name: 'Uso Pediátrico Seleccionado (Fibrosis Quística / ITU Multirresistente)',
        recommendedDoseMgPerKgPerDay: 20,
        minDoseMgPerKgPerDay: 20,
        maxDoseMgPerKgPerDay: 30,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10-14 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 750,
        description: '20-30 mg/kg/día VO dividido cada 12h (o 10 mg/kg/dosis IV cada 12h máx 400 mg/dosis).'
      }
    ],
    whenToUse: [
      'Pielonefritis aguda no complicada en adultos.',
      'Infecciones complicadas del tracto urinario y prostatitis bacteriana.',
      'Shigelosis y diarrea del viajero severa con disentería.'
    ],
    pearlsAndPitfalls: [
      'Cuidado con la absorción oral: los antiácidos con aluminio/magnesio, sucralfato y suplementos de hierro/calcio disminuyen drásticamente su biodisponibilidad.',
      'Advertencia de caja negra de la FDA: tendinitis y rotura del tendón de Aquiles, neuropatía periférica y disección aórtica.'
    ],
    monitoringAndSideEffects: ['Tendinopatía, fototoxicidad, prolongación QT, náuseas.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01MA02',
        summary: 'Ciprofloxacino 500 mg sólidos orales y 200 mg líquidos parenterales. Grupo AWaRe Precaución (Watch).'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '100% de la dosis cada 12 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 30 - 50 mL/min', adjustmentText: '250 - 500 mg cada 12 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: '250 - 500 mg cada 18-24 horas', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'vancomicina',
    name: 'Vancomicina',
    commercialNames: ['Vancocin', 'Vanmax', 'Vancotie'],
    category: 'Antibióticos',
    atcCode: 'J01XA01',
    awareCategory: 'Watch',
    therapeuticClass: 'Glicopéptido · AWaRe Precaución (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Precaución',
    shortDescription: 'Glicopéptido de elección para infecciones invasivas por S. aureus resistente a meticilina (MRSA) y enterococos susceptibles.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'vanco-vial-500',
        name: 'Sólidos Parenterales Vial 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025. Reconstituir en 10 mL de agua estéril (50 mg/mL) y diluir a concentración máx 5 mg/mL'
      }
    ],
    indications: [
      {
        id: 'vanco-ind-peds',
        name: 'Infección Severa Pediátrica MRSA (Dosis Estándar)',
        recommendedDoseMgPerKgPerDay: 45,
        minDoseMgPerKgPerDay: 40,
        maxDoseMgPerKgPerDay: 60,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '10-14 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 1000,
        description: '45-60 mg/kg/día fraccionado cada 6 u 8 horas IV en infusión lenta (≥60 min).'
      },
      {
        id: 'vanco-ind-adults',
        name: 'Adultos: 15-20 mg/kg cada 8-12 horas',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10-14 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        description: '15 a 20 mg/kg por dosis cada 8 a 12 horas según función renal.'
      }
    ],
    whenToUse: [
      'Infecciones severas por MRSA (neumonía necrosante, osteomielitis, bacteriemia asociada a catéter).',
      'Meningitis bacteriana en combinación con ceftriaxona.',
      'Sepsis en pacientes alérgicos graves a betalactámicos.'
    ],
    pearlsAndPitfalls: [
      'Síndrome del Hombre Rojo (reacción infusional mediada por histamina por goteo rápido). No es alergia real: pasar en al menos 60 minutos por cada 1 g.',
      'Monitorizar niveles valle (trough) objetivo: 15-20 mcg/mL en infecciones graves (neumonía, bacteriemia, osteomielitis).'
    ],
    monitoringAndSideEffects: ['Creatinina sérica, niveles séricos valle, ototoxicidad, nefrotoxicidad si coadministrado con aminoglucósidos o piperacilina/tazobactam.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01XA01',
        summary: 'Vancomicina 500 mg sólidos parenterales IV. Grupo AWaRe Precaución (Watch).'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 50 mL/min', adjustmentText: '15-20 mg/kg cada 8-12 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 20 - 49 mL/min', adjustmentText: '15-20 mg/kg cada 24 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 20 mL/min', adjustmentText: 'Dosis de carga única y redosificar solo según nivel sérico', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'nitrofurantoina',
    name: 'Nitrofurantoína',
    commercialNames: ['Macrodantina', 'Furadantina', 'Nifuryl'],
    category: 'Antibióticos',
    atcCode: 'J01XE01',
    awareCategory: 'Access',
    therapeuticClass: 'Antibacteriano urinario · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Antibacteriano de primera línea para cistitis aguda no complicada; alcanza concentraciones terapéuticas exclusivas en vejiga.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'nitro-susp-50',
        name: 'Líquidos Orales (Suspensión) 50 mg / 5 mL (SRS 2025)',
        amountMg: 50,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (10 mg/mL)'
      },
      {
        id: 'nitro-comp-100',
        name: 'Sólidos Orales 100 mg (SRS 2025)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Macrocristales de nitrofurantoína'
      }
    ],
    indications: [
      {
        id: 'nitro-ind-cistitis-peds',
        name: 'Cistitis Aguda Pediátrica (>1 mes de vida)',
        recommendedDoseMgPerKgPerDay: 6,
        minDoseMgPerKgPerDay: 5,
        maxDoseMgPerKgPerDay: 7,
        fixedAdultDoseMg: 100,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '5-7 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 100,
        description: '5-7 mg/kg/día dividido cada 6 horas con alimentos.'
      },
      {
        id: 'nitro-ind-cistitis-adult',
        name: 'Cistitis Aguda No Complicada Adulto',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5 días',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 100,
        description: '100 mg cada 12 horas con las comidas por 5 días.'
      }
    ],
    whenToUse: [
      'Infección urinaria baja no complicada (cistitis) por E. coli u otros patógenos sensibles.',
      'Profilaxis de infecciones urinarias recurrentes (1-2 mg/kg/día nocturno).'
    ],
    pearlsAndPitfalls: [
      'INUTIL en pielonefritis o prostatitis: no alcanza concentraciones tisulares en parénquima renal ni en sangre.',
      'CONTRAINDICADO si ClCr < 30 mL/min (no se concentra en orina y aumenta neurotoxicidad).',
      'Tiñe la orina de color marrón/naranja inocuo.'
    ],
    monitoringAndSideEffects: ['Náuseas (tomar con alimentos), coloración de la orina, fibrosis pulmonar en uso profiláctico prolongado.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01XE01',
        summary: 'Nitrofurantoína 100 mg sólidos orales y 50 mg/5mL líquidos orales. Grupo AWaRe Acceso.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 30 mL/min', adjustmentText: '100% de la dosis estándar', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 30 mL/min', adjustmentText: 'Contraindicado: ineficaz y tóxico', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'fosfomicina',
    name: 'Fosfomicina',
    commercialNames: ['Monurol', 'Fosfocil', 'Fosfocin'],
    category: 'Antibióticos',
    atcCode: 'J01XX01',
    awareCategory: 'Access',
    therapeuticClass: 'Epoxi-antibiótico bactericida · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Tratamiento monodosis de primera línea para cistitis aguda no complicada en mujeres y bactericida para gérmenes multirresistentes.',
    availableRoutes: ['oral', 'iv', 'im'],
    concentrations: [
      {
        id: 'fosfo-sobre-3g',
        name: 'Líquidos Orales (Granulado para Solución) 3 g Sobre (SRS 2025)',
        amountMg: 3000,
        volumeMl: 100,
        form: 'suspension',
        unit: 'sobre',
        notes: 'Fosfomicina trometamol 3 g en polvo para disolver en agua'
      },
      {
        id: 'fosfo-comp-500',
        name: 'Sólidos Orales 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Fosfomicina cálcica 500 mg'
      },
      {
        id: 'fosfo-amp-1g',
        name: 'Líquidos Parenterales 1 g Ampolla (SRS 2025)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Fosfomicina disódica IV/IM'
      }
    ],
    indications: [
      {
        id: 'fosfo-ind-cistitis-monodosis',
        name: 'Cistitis Aguda No Complicada Adulto (Monodosis)',
        fixedAdultDoseMg: 3000,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '1 sola dosis única',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 3000,
        description: '1 sobre de 3 g disuelto en medio vaso de agua antes de acostarse con la vejiga vacía.'
      },
      {
        id: 'fosfo-ind-peds-iv',
        name: 'Infección Severa Pediátrica IV (Gram Negativos BLEE)',
        recommendedDoseMgPerKgPerDay: 100,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 200,
        fixedAdultDoseMg: 4000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 12000,
        maxSingleDoseMg: 4000,
        description: '100-200 mg/kg/día IV repartido cada 8 horas.'
      }
    ],
    whenToUse: [
      'Cistitis aguda bacteriana no complicada en mujeres en monodosis.',
      'Infecciones multirresistentes por enterobacterias productoras de betalactamasas de espectro extendido (BLEE).'
    ],
    pearlsAndPitfalls: [
      'La presentación de 3 g de trometamol se toma disuelta en agua 2-3 horas antes o después de las comidas (con el estómago vacío y vejiga vacía por la noche).',
      'La sal disódica IV contiene alta carga de sodio (14.4 mEq por cada 1 g de fosfomicina); precaución en insuficiencia cardíaca.'
    ],
    monitoringAndSideEffects: ['Diarrea autolimitada, dispepsia, sobrecarga de sodio/hipopotasemia en infusión IV.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01XX01',
        summary: 'Fosfomicina 3 g líquidos orales, 500 mg sólidos orales y 1 g líquidos parenterales. Grupo AWaRe Acceso.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 40 mL/min', adjustmentText: 'Dosis estándar', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 40 mL/min', adjustmentText: 'Espaciar intervalo de la formulación IV', cautionLevel: 'moderate' }
    ]
  },
  {
    id: 'trimetoprim-sulfametoxazol',
    name: 'Trimetoprim + Sulfametoxazol (TMP/SMX)',
    commercialNames: ['Bactrim', 'Septra', 'Cotrimoxazol', 'Trimetoprim Forte'],
    category: 'Antibióticos',
    atcCode: 'J01EE01',
    awareCategory: 'Access',
    therapeuticClass: 'Inhibidor de folatos bacterianos · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Combinación sinérgica para infecciones urinarias, celulitis por CA-MRSA, shigelosis y profilaxis de Pneumocystis jirovecii.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'cotrim-susp-40-200',
        name: 'Líquidos Orales 40 mg TMP + 200 mg SMX / 5 mL (SRS 2025)',
        amountMg: 40,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025. El cálculo se hace con base en TMP (8 mg TMP/mL)'
      },
      {
        id: 'cotrim-comp-160-800',
        name: 'Sólidos Orales 160 mg TMP + 800 mg SMX (Forte) (SRS 2025)',
        amountMg: 160,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025 (tableta Forte)'
      }
    ],
    indications: [
      {
        id: 'cotrim-ind-peds',
        name: 'Infección Urinaria / Cutánea Pediátrica (>2 meses)',
        recommendedDoseMgPerKgPerDay: 8,
        minDoseMgPerKgPerDay: 6,
        maxDoseMgPerKgPerDay: 10,
        fixedAdultDoseMg: 160,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-10 días',
        maxDailyDoseMg: 320,
        maxSingleDoseMg: 160,
        description: 'Calculado sobre base de Trimetoprim: 8-10 mg TMP/kg/día fraccionado cada 12 horas vía oral.'
      },
      {
        id: 'cotrim-ind-adults',
        name: 'Adultos: 1 tableta Forte (160/800 mg) cada 12 horas',
        fixedAdultDoseMg: 160,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-14 días',
        maxDailyDoseMg: 320,
        maxSingleDoseMg: 160,
        description: '1 comprimido de 160/800 mg cada 12 horas vía oral.'
      }
    ],
    whenToUse: [
      'Infecciones cutáneas por Staphylococcus aureus comunitario resistente a meticilina (CA-MRSA).',
      'Infecciones urinarias bajas no complicadas con antibiograma favorable.',
      'Tratamiento y profilaxis de neumonía por Pneumocystis jirovecii en inmunosuprimidos.'
    ],
    pearlsAndPitfalls: [
      'CONTRAINDICADO en lactantes menores de 2 meses de vida por desplazamiento de bilirrubina (riesgo de kernicterus).',
      'Puede provocar hiperpotasemia debido a que el trimetoprim bloquea los canales de sodio epiteliales renales (similar a amilorida).'
    ],
    monitoringAndSideEffects: ['Potasio sérico, hemograma en tratamientos prolongados (citopenias), erupción cutánea (Stevens-Johnson).'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01EE01',
        summary: 'Trimetoprim + Sulfametoxazol 160/800 mg sólidos orales y 40/200 mg/5mL líquidos orales. Grupo AWaRe Acceso.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 30 mL/min', adjustmentText: '100% de la dosis cada 12 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 15 - 30 mL/min', adjustmentText: '50% de la dosis habitual cada 12 horas', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 15 mL/min', adjustmentText: 'No recomendado o solo dosis reducida con monitoreo', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'metronidazol',
    name: 'Metronidazol',
    commercialNames: ['Flagyl', 'Flegyl', 'Metronid'],
    category: 'Antibióticos',
    atcCode: 'J01XD01',
    awareCategory: 'Access',
    therapeuticClass: 'Nitroimidazol antibacteriano y antiparasitario · AWaRe Acceso (SRS 2025)',
    badgeText: 'SRS 2025 · AWaRe Acceso',
    shortDescription: 'Bactericida potente frente a bacterias anaerobias estrictas (Bacteroides fragilis, Clostridioides) y antiparasitario (Giardia, E. histolytica, Trichomonas).',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'metro-susp-250',
        name: 'Líquidos Orales (Benzoilo) 250 mg / 5 mL (SRS 2025)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (50 mg/mL)'
      },
      {
        id: 'metro-comp-500',
        name: 'Sólidos Orales 500 mg (SRS 2025)',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025'
      },
      {
        id: 'metro-iv-500',
        name: 'Líquidos Parenterales 5 mg/mL (500 mg / 100 mL) (SRS 2025)',
        amountMg: 500,
        volumeMl: 100,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025'
      }
    ],
    indications: [
      {
        id: 'metro-ind-anaerobios',
        name: 'Infección Anaerobia / Absceso Intraabdominal Pediátrico',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 30,
        maxDoseMgPerKgPerDay: 40,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        description: '30 mg/kg/día fraccionado cada 8 horas IV u oral.'
      },
      {
        id: 'metro-ind-giardia',
        name: 'Giardiasis / Amebiasis Intestinal Pediátrica',
        recommendedDoseMgPerKgPerDay: 35,
        minDoseMgPerKgPerDay: 30,
        maxDoseMgPerKgPerDay: 40,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        description: '35 mg/kg/día repartido en 3 tomas diarias durante 5-7 días.'
      },
      {
        id: 'metro-ind-adults',
        name: 'Adultos: 500 mg cada 8 horas VO o IV',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-10 días',
        maxDailyDoseMg: 1500,
        maxSingleDoseMg: 500,
        description: '500 mg cada 8 horas vía oral o intravenosa.'
      }
    ],
    whenToUse: [
      'Infecciones intraabdominales graves y peritonitis (en combinación con ceftriaxona o ciprofloxacino).',
      'Amebiasis invasiva hepática o intestinal y giardiasis.',
      'Vaginosis bacteriana y tricomoniasis genital.'
    ],
    pearlsAndPitfalls: [
      'Efecto disulfiram / antabús estricto con el consumo de alcohol (náuseas, vómitos intensos, enrojecimiento facial).',
      'Sabor metálico desagradable muy común pero benigno.'
    ],
    monitoringAndSideEffects: ['Sabor metálico, neuropatía periférica en tratamientos muy prolongados, náuseas.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador J01XD01 y P01AB01',
        summary: 'Metronidazol 500 mg sólidos orales, 250 mg/5mL líquidos orales y 5 mg/mL líquidos parenterales. Grupo AWaRe Acceso.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 10 mL/min', adjustmentText: '100% de la dosis cada 8 horas', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: '50% de la dosis habitual cada 8-12 horas', cautionLevel: 'moderate' }
    ]
  }
];
