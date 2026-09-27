import { Medication } from '../types';

export const GASTRO_MEDICATIONS: Medication[] = [
  {
    id: 'omeprazol',
    name: 'Omeprazol',
    commercialNames: ['Prilosec', 'Losec', 'Zegerid', 'Omebloc'],
    category: 'Gastroenterología',
    atcCode: 'A02BC01',
    therapeuticClass: 'Inhibidor de la Bomba de Protones (IBP) (SRS 2025)',
    badgeText: 'SRS 2025 · Gastroprotector',
    shortDescription: 'Inhibidor irreversible de la H+/K+-ATPasa para enfermedad por reflujo gastroesofágico (ERGE), úlcera péptica y profilaxis de sangrado digestivo.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'ome-comp-20mg',
        name: 'Sólidos Orales (Cápsulas) 20 mg (SRS 2025)',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'cápsula',
        notes: 'Presentación oficial SRS 2025'
      },
      {
        id: 'ome-vial-40mg',
        name: 'Sólidos Parenterales (Vial) 40 mg (SRS 2025)',
        amountMg: 40,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IV'
      }
    ],
    indications: [
      {
        id: 'ome-ind-adulto-erge',
        name: 'ERGE / Gastritis / Úlcera Péptica en Adultos',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4-8 semanas',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 40,
        description: '20 a 40 mg una vez al día por la mañana en ayunas 30 minutos antes del desayuno.'
      },
      {
        id: 'ome-ind-pediatrico-reflujo',
        name: 'ERGE Severa / Esofagitis Pediátrica',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 0.7,
        maxDoseMgPerKgPerDay: 1.5,
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '4-8 semanas',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 20,
        description: '1 mg/kg/día en toma única matutina (hasta 2 mg/kg/día en esofagitis erosiva).'
      },
      {
        id: 'ome-ind-sangrado-iv',
        name: 'Hemorragia Digestiva Alta / Profilaxis UCI Adulto',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '3-5 días',
        maxDailyDoseMg: 160,
        maxSingleDoseMg: 80,
        description: '40 mg IV cada 12 horas (o bolo de 80 mg seguido de infusión continua).'
      }
    ],
    whenToUse: [
      'Enfermedad por reflujo gastroesofágico (ERGE) sintomática o con esofagitis.',
      'Cicatrización de úlcera gástrica o duodenal activa.',
      'Prevención de úlceras por estrés en pacientes críticos en ventilación mecánica.'
    ],
    pearlsAndPitfalls: [
      'Tomar 30 a 60 minutos antes del primer alimento del día para bloquear las bombas de protones recién activadas.',
      'El uso crónico prolongado (>1 año) se asocia con hipomagnesemia, déficit de vitamina B12 y riesgo de fracturas óseas.',
      'Interacciona con clopidogrel inhibiendo competitivamente su bioactivación por CYP2C19.'
    ],
    monitoringAndSideEffects: ['Cefalea, diarrea leve, magnesio sérico en uso prolongado.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A02BC01',
        summary: 'Omeprazol 20 mg sólidos orales y 40 mg sólidos parenterales IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 10 mL/min', adjustmentText: 'No requiere ajuste de dosis (metabolismo hepático)', cautionLevel: 'normal' }
    ]
  },
  {
    id: 'ondansetron',
    name: 'Ondansetrón',
    commercialNames: ['Zofran', 'Modifical', 'Danitron', 'Emestop'],
    category: 'Gastroenterología',
    atcCode: 'A04AA01',
    therapeuticClass: 'Antagonista selectivo del receptor 5-HT3 de serotonina (SRS 2025)',
    badgeText: 'SRS 2025 · Antiemético',
    shortDescription: 'Antiemético de primera línea para vómitos inducidos por gastroenteritis aguda, quimioterapia y postoperatorio.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'ondan-amp-2mg',
        name: 'Líquidos Parenterales 2 mg/mL (4 mg / 2 mL y 8 mg / 4 mL) Ampolla (SRS 2025)',
        amountMg: 4,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (2 mg/mL IV)'
      },
      {
        id: 'ondan-comp-8mg',
        name: 'Sólidos Orales 8 mg (SRS 2025)',
        amountMg: 8,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial en tabletas SRS 2025'
      }
    ],
    indications: [
      {
        id: 'ondan-ind-vomitos-peds',
        name: 'Gastroenteritis Aguda con Vómitos Pediátrico',
        recommendedDoseMgPerKgPerDay: 0.15,
        minDoseMgPerKgPerDay: 0.15,
        maxDoseMgPerKgPerDay: 0.15,
        fixedAdultDoseMg: 8,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '1-2 días',
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 8,
        isDosePerKgPerDose: true,
        description: '0.15 mg/kg por dosis IV u oral (máx 8 mg por toma). Facilita la rehidratación oral exitosa en gastroenteritis infantil.'
      },
      {
        id: 'ondan-ind-adults',
        name: 'Adultos: 8 mg IV o VO cada 8 a 12 horas',
        fixedAdultDoseMg: 8,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '1-3 días',
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 8,
        description: '8 mg IV lento (en 2-5 minutos) o vía oral cada 8-12 horas.'
      }
    ],
    whenToUse: [
      'Gastroenteritis aguda infantil con vómitos que impiden la tolerancia de Sales de Rehidratación Oral (SRO).',
      'Náuseas y vómitos postoperatorios (NVPO).',
      'Náuseas inducidas por quimioterapia o radioterapia emetogénica.'
    ],
    pearlsAndPitfalls: [
      'En urgencias pediátricas, una dosis única de ondansetrón reduce en más del 50% la necesidad de hidratación intravenosa y de hospitalización.',
      'No produce efectos extrapiramidales ni somnolencia a diferencia de metoclopramida.',
      'Puede prolongar el intervalo QT a dosis altas por vía IV.'
    ],
    monitoringAndSideEffects: ['Cefalea leve, estreñimiento transitorio, electrocardiograma si coexiste con otros fármacos que prolongan QT.'],
    evidenceAndSources: [
      {
        title: 'Oral Ondansetron for Gastroenteritis in a Pediatric Emergency Department',
        source: 'N Engl J Med. 2006;354(16):1698-705',
        summary: 'Demostró reducción significativa de vómitos, fracaso de hidratación oral e ingresos hospitalarios.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A04AA01',
        summary: 'Ondansetrón 8 mg sólidos orales y 2 mg/mL líquidos parenterales IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 10 mL/min', adjustmentText: 'No requiere ajuste en falla renal', cautionLevel: 'normal' }
    ]
  },
  {
    id: 'metoclopramida',
    name: 'Metoclopramida Clorhidrato',
    commercialNames: ['Plasil', 'Primperan', 'Pramigel', 'Reglan'],
    category: 'Gastroenterología',
    atcCode: 'A03FA01',
    therapeuticClass: 'Procinético y Antiemético Antagonista Dopaminérgico D2 (SRS 2025)',
    badgeText: 'SRS 2025 · Procinético',
    shortDescription: 'Procinético gástrico y antiemético central para gastroparesia, reflujo y náuseas postoperatorias.',
    availableRoutes: ['iv', 'im', 'oral'],
    concentrations: [
      {
        id: 'metoc-amp-5mg',
        name: 'Líquidos Parenterales 5 mg/mL (10 mg / 2 mL) Ampolla (SRS 2025)',
        amountMg: 10,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IM/IV'
      },
      {
        id: 'metoc-comp-10mg',
        name: 'Sólidos Orales 10 mg (SRS 2025)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial SRS 2025'
      }
    ],
    indications: [
      {
        id: 'metoc-ind-adults',
        name: 'Náuseas y Gastroparesia Adulto',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3-5 días',
        maxDailyDoseMg: 30,
        maxSingleDoseMg: 10,
        description: '10 mg cada 8 horas vía oral o IV lenta administrada al menos en 3 minutos.'
      },
      {
        id: 'metoc-ind-peds',
        name: 'Pediátrico (>1 año): Reflujo / Procinético',
        recommendedDoseMgPerKgPerDay: 0.1,
        minDoseMgPerKgPerDay: 0.1,
        maxDoseMgPerKgPerDay: 0.15,
        fixedAdultDoseMg: 10,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '3-5 días',
        maxDailyDoseMg: 30,
        maxSingleDoseMg: 10,
        isDosePerKgPerDose: true,
        description: '0.1 a 0.15 mg/kg por toma cada 8 horas (máx 0.5 mg/kg/día o 10 mg por toma).'
      }
    ],
    whenToUse: [
      'Gastroparesia diabética o postquirúrgica con vaciamiento gástrico retardado.',
      'Reflujo gastroesofágico y náuseas asociadas a migraña en adultos.'
    ],
    pearlsAndPitfalls: [
      'RIESGO DE REACCIONES EXTRAPIRAMIDALES y distonía aguda (tortícolis, crisis oculógiras), especialmente en niños y adultos jóvenes.',
      'Tratamiento de la distonía aguda: Difenhidramina 1 mg/kg IV o Biperideno.',
      'CONTRAINDICADO en obstrucción intestinal mecánica, perforación o hemorragia digestiva.'
    ],
    monitoringAndSideEffects: ['Distonía aguda, acatisia, somnolencia, diarrea por aceleración del tránsito.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A03FA01',
        summary: 'Metoclopramida 5 mg/mL líquidos parenterales y 10 mg sólidos orales.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 40 mL/min', adjustmentText: '100% de la dosis habitual', cautionLevel: 'normal' },
      { crClThreshold: 'ClCr 10 - 40 mL/min', adjustmentText: 'Reducir la dosis al 50%', cautionLevel: 'moderate' },
      { crClThreshold: 'ClCr < 10 mL/min', adjustmentText: 'Reducir al 25-50% de la dosis habitual', cautionLevel: 'severe' }
    ]
  },
  {
    id: 'hioscina',
    name: 'Bromuro de Hioscina (Butilhioscina)',
    commercialNames: ['Buscapina', 'Hioscina', 'Espasmo-Silimar'],
    category: 'Gastroenterología',
    atcCode: 'A03BA03',
    therapeuticClass: 'Antiespasmódico Anticolinérgico Gastrointestinal (SRS 2025)',
    badgeText: 'SRS 2025 · Antiespasmódico',
    shortDescription: 'Anticolinérgico cuaternario para el alivio del cólico abdominal, cólico biliar y dolor espasmódico gastrointestinal.',
    availableRoutes: ['oral', 'iv', 'im'],
    concentrations: [
      {
        id: 'hiosc-comp-10',
        name: 'Sólidos Orales 10 mg (SRS 2025)',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'gragea',
        notes: 'Bromuro de butilhioscina 10 mg'
      },
      {
        id: 'hiosc-amp-20',
        name: 'Líquidos Parenterales 20 mg / mL Ampolla (SRS 2025)',
        amountMg: 20,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 IM/IV'
      }
    ],
    indications: [
      {
        id: 'hiosc-ind-adult-colico',
        name: 'Cólico Abdominal / Espasmo Digestivo Adulto',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '1-3 días',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 20,
        description: '20 mg IV lenta o IM, o 10 a 20 mg vía oral cada 8 horas.'
      },
      {
        id: 'hiosc-ind-pediatrico',
        name: 'Pediátrico (>6 años): Dolor Espasmódico',
        recommendedDoseMgPerKgPerDay: 0.3,
        minDoseMgPerKgPerDay: 0.3,
        maxDoseMgPerKgPerDay: 0.5,
        fixedAdultDoseMg: 10,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '1-2 días',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 10,
        isDosePerKgPerDose: true,
        description: '0.3 a 0.5 mg/kg por toma cada 8 horas vía oral o IV lenta.'
      }
    ],
    whenToUse: [
      'Espasmos agudos del tracto gastrointestinal, vías biliares y tracto genitourinario.',
      'Dismenorrea espasmódica y dolor tipo retortijón.'
    ],
    pearlsAndPitfalls: [
      'Al ser un amonio cuaternario, no atraviesa fácilmente la barrera hematoencefálica, produciendo menos efectos centrales que la atropina.',
      'CONTRAINDICADO en glaucoma de ángulo estrecho, retención urinaria por hipertrofia prostática y megacolon.'
    ],
    monitoringAndSideEffects: ['Sequedad bucal, visión borrosa, taquicardia transitoria, retención urinaria.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A03BA03',
        summary: 'Hyoscinamina (bromuro de n-butil hioscina) 10 mg sólidos orales y 20 mg/mL líquidos parenterales IM/IV.'
      }
    ],
    renalAdjustments: [
      { crClThreshold: 'ClCr > 10 mL/min', adjustmentText: 'No requiere ajuste de dosis', cautionLevel: 'normal' }
    ]
  },
  {
    id: 'sales-rehidratacion-oral',
    name: 'Sales de Rehidratación Oral (SRO)',
    commercialNames: ['Sueroral', 'Vida Suero Oral', 'Pedialyte 45', 'Electrolit SRO'],
    category: 'Gastroenterología',
    atcCode: 'A07CA',
    therapeuticClass: 'Solución Rehidratante Oral de Baja Osmolaridad (SRS 2025)',
    badgeText: 'SRS 2025 · Vital OMS',
    shortDescription: 'Pilar fundamental que salva vidas en diarrea y deshidratación infantil; fórmula OMS de baja osmolaridad (245 mOsm/L).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'sro-sobre-1l',
        name: 'Sobre de SRO para 1 Litro (Fórmula OMS 245 mOsm/L) (SRS 2025)',
        amountMg: 1000,
        volumeMl: 1000,
        form: 'suspension',
        unit: 'mL',
        notes: 'Composición oficial SRS: Glucosa 13.5 g/L, NaCl 2.6 g/L, KCl 1.5 g/L, Bicarbonato/Citrato 2.9 g/L'
      }
    ],
    indications: [
      {
        id: 'sro-ind-plan-a',
        name: 'Plan A: Prevención de Deshidratación en el Hogar',
        recommendedDoseMgPerKgPerDay: 10,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 10,
        fixedAdultDoseMg: 250,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Mientras dure la diarrea',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 250,
        isDosePerKgPerDose: true,
        description: 'Administrar 10 mL/kg de SRO después de cada evacuación diarreica líquida (o 50-100 mL en <2 años y 100-200 mL en >2 años).'
      },
      {
        id: 'sro-ind-plan-b',
        name: 'Plan B: Deshidratación Leve a Moderada (en 4 Horas)',
        recommendedDoseMgPerKgPerDay: 75,
        minDoseMgPerKgPerDay: 50,
        maxDoseMgPerKgPerDay: 100,
        fixedAdultDoseMg: 1500,
        frequencyPerDay: 1,
        intervalHours: 4,
        durationDays: 'Durante 4 horas en observación',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 2000,
        isDosePerKgPerDose: true,
        description: '50 a 100 mL/kg de solución SRO administrados a cucharaditas o sorbos pequeños durante un periodo de 4 horas en el centro de salud.'
      }
    ],
    whenToUse: [
      'Gastroenteritis aguda diarreica en lactantes, niños y adultos.',
      'Prevención y tratamiento de la deshidratación leve o moderada.'
    ],
    pearlsAndPitfalls: [
      'Reconstituir SIEMPRE en exactamente 1 litro de agua potable hervida o clorada. Si se disuelve en menos agua, se vuelve hipertónica y agrava la diarrea por arrastre osmótico.',
      'Dar despacio a cucharadita (1 cucharadita cada 1-2 minutos) para evitar desencadenar el reflejo nauseoso.',
      'Asociar siempre a suplemento de Zinc por 10 a 14 días en niños con diarrea aguda (reduce duración y recurrencias).'
    ],
    monitoringAndSideEffects: ['Signos de hidratación (turgencia cutánea, lágrimas, diuresis, estado mental).'],
    evidenceAndSources: [
      {
        title: 'WHO/UNICEF: Clinical Management of Acute Diarrhea',
        source: 'World Health Organization Geneva. 2004',
        summary: 'La fórmula de baja osmolaridad (245 mOsm/L) reduce en un 33% la necesidad de fluidos intravenosos.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A07CA',
        summary: 'Sales de rehidratación oral: Glucosa 13.5 g/L, KCl 1.5 g/L, NaCl 2.6 g/L, Bicarbonato 2.9 g/L. Osmolaridad 245 mOsm/L.'
      }
    ]
  },
  {
    id: 'sulfato-zinc',
    name: 'Zinc (Sulfato de Zinc)',
    commercialNames: ['Zincotab', 'Zincon', 'Biozinc'],
    category: 'Gastroenterología',
    atcCode: 'A12CB01',
    therapeuticClass: 'Suplemento Mineral Oligoelemento para Diarrea Pediátrica (SRS 2025)',
    badgeText: 'SRS 2025 · Guía OMS',
    shortDescription: 'Coadyuvante de primera línea según la OMS para diarrea aguda infantil; acorta la duración del episodio y previene recaídas en los siguientes 3 meses.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'zinc-jarabe-10',
        name: 'Líquidos Orales (Sulfato de Zinc) 10 mg / 5 mL (SRS 2025)',
        amountMg: 10,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (2 mg Zinc elemental/mL)'
      },
      {
        id: 'zinc-comp-50',
        name: 'Sólidos Orales (Tabletas) 50 mg (SRS 2025)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Presentación oficial en tabletas SRS 2025'
      }
    ],
    indications: [
      {
        id: 'zinc-ind-diarrea-menor6m',
        name: 'Lactantes < 6 meses: Diarrea Aguda (10 mg/día)',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '10-14 días continuos',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '10 mg de zinc elemental (5 mL del jarabe 10 mg/5 mL) una vez al día por 10 a 14 días.'
      },
      {
        id: 'zinc-ind-diarrea-mayor6m',
        name: 'Niños ≥ 6 meses: Diarrea Aguda (20 mg/día)',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '10-14 días continuos',
        maxDailyDoseMg: 20,
        maxSingleDoseMg: 20,
        description: '20 mg de zinc elemental (10 mL del jarabe 10 mg/5 mL) una vez al día por 10 a 14 días continuos.'
      }
    ],
    whenToUse: [
      'Tratamiento de todos los episodios de diarrea aguda infantil en combinación con Sales de Rehidratación Oral (SRO).',
      'Deficiencia nutricional de zinc y retardo del crecimiento.'
    ],
    pearlsAndPitfalls: [
      'Completar el ciclo de 10 a 14 días incluso si la diarrea ya cesó para regenerar el epitelio intestinal y restablecer la inmunidad mucosal.',
      'Sabor metálico que puede producir vómitos si se administra en ayunas; dar con o después de los alimentos.'
    ],
    monitoringAndSideEffects: ['Sabor metálico, náuseas.'],
    evidenceAndSources: [
      {
        title: 'WHO Guidelines: Zinc Supplementation in the Management of Diarrhea',
        source: 'WHO. 2006',
        summary: 'Zinc reduce la gravedad, duración y futuros episodios de diarrea en los siguientes 2-3 meses.'
      },
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A12CB01',
        summary: 'Zinc (sulfato) 10 mg/5 mL líquidos orales y 50 mg sólidos orales.'
      }
    ]
  },
  {
    id: 'lactulosa',
    name: 'Lactulosa',
    commercialNames: ['Duphalac', 'Lactulon', 'Genlac'],
    category: 'Gastroenterología',
    atcCode: 'A06AD11',
    therapeuticClass: 'Laxante Osmótico Disacárido y Reductor de Amonio (SRS 2025)',
    badgeText: 'SRS 2025 · Laxante',
    shortDescription: 'Laxante osmótico para estreñimiento crónico funcional y prevención/tratamiento de encefalopatía hepática.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'lactu-jarabe-10-15',
        name: 'Líquidos Orales 10 g / 15 mL Jarabe (SRS 2025)',
        amountMg: 10000,
        volumeMl: 15,
        form: 'suspension',
        unit: 'mL',
        notes: 'Presentación oficial SRS 2025 (0.67 g/mL)'
      }
    ],
    indications: [
      {
        id: 'lactu-ind-constipacion-peds',
        name: 'Estreñimiento Crónico Funcional Pediátrico',
        recommendedDoseMgPerKgPerDay: 1000,
        minDoseMgPerKgPerDay: 500,
        maxDoseMgPerKgPerDay: 1500,
        fixedAdultDoseMg: 15000,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Según respuesta clínica',
        maxDailyDoseMg: 30000,
        maxSingleDoseMg: 15000,
        description: '1 a 2 mL/kg/día (0.7 a 1.5 g/kg/día) dividido en 1 o 2 tomas diarias.'
      },
      {
        id: 'lactu-ind-encefalopatia-adult',
        name: 'Encefalopatía Hepática Adulto',
        fixedAdultDoseMg: 20000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 'Continuo',
        maxDailyDoseMg: 60000,
        maxSingleDoseMg: 30000,
        description: '30 a 45 mL (20 a 30 g) cada 8 horas titulando para lograr 2-3 deposiciones blandas al día.'
      }
    ],
    whenToUse: [
      'Estreñimiento crónico idiopático en niños y adultos.',
      'Encefalopatía portosistémica en cirrosis hepática (atrapa amonio ionizado NH4+ en la luz colónica).'
    ],
    pearlsAndPitfalls: [
      'No es absorbible en intestino delgado: las bacterias colónicas lo fermentan en ácidos grasos de cadena corta acidificando el medio y atrayendo agua.',
      'Produce flatulencia y meteorismo en los primeros días de tratamiento que suelen remitir con el tiempo.'
    ],
    monitoringAndSideEffects: ['Distensión abdominal, flatulencias, diarrea por sobretratamiento con pérdida de electrolitos.'],
    evidenceAndSources: [
      {
        title: 'Listado Oficial SRS 2025',
        source: 'SRS El Salvador A06AD11',
        summary: 'Lactulosa 10 g / 15 mL líquidos orales.'
      }
    ]
  }
];
