import { Medication } from '../types';

export const MEDSCAPE_EXPECTORANTS: Medication[] = [
  {
    id: 'bromhexina',
    name: 'Bromhexina',
    commercialNames: ['Bisolvon', 'Broxol', 'Bisolvon Infantil', 'Mucosan (rel)'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CB02',
    awareCategory: 'Access',
    therapeuticClass: 'Expectorante Mucolítico y Secretolítico (Precursor de Ambroxol)',
    badgeText: 'Expectorante · Secretolítico',
    shortDescription: 'Derivado sintético del alcaloide vasicina y profármaco del ambroxol. Incrementa el volumen y la fluidez de las secreciones bronquiales al fragmentar las fibras de mucopolisacáridos ácidos, reactivando el transporte mucociliar.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'bromhex-jarabe-4',
        name: 'Jarabe Pediátrico 4 mg / 5 mL (0.8 mg/mL)',
        amountMg: 4,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'bromhex-jarabe-8',
        name: 'Jarabe Adulto 8 mg / 5 mL (1.6 mg/mL)',
        amountMg: 8,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 200
      },
      {
        id: 'bromhex-comp-8',
        name: 'Comprimidos 8 mg',
        amountMg: 8,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'bromhex-ind-adulto',
        name: 'Trastornos Respiratorios con Secreciones Viscosas en Adultos y ≥12 años',
        fixedAdultDoseMg: 8,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 48,
        maxSingleDoseMg: 16,
        description: '8 a 16 mg cada 8 horas por vía oral con las comidas (en casos graves puede iniciarse con 16 mg cada 8 horas).'
      },
      {
        id: 'bromhex-ind-peds',
        name: 'Expectoración Pediátrica (2 a 11 años)',
        fixedAdultDoseMg: 4,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5 días',
        maxDailyDoseMg: 24,
        maxSingleDoseMg: 8,
        description: '2 a 5 años: 2 a 4 mg cada 8 horas (2.5 a 5 mL de jarabe 4 mg/5 mL). 6 a 11 años: 4 a 8 mg cada 8 horas.'
      }
    ],
    whenToUse: [
      'Alivio de la tos productiva con esputo hiperviscoso en traqueobronquitis, neumonía y resfriado.',
      'Sinergia con antibióticos: facilita el transporte de ampicilina, oxitetraciclina y eritromicina a las vías respiratorias.',
      'Tratamiento adyuvante en bronquiectasias.'
    ],
    pearlsAndPitfalls: [
      'Se biotransforma en el organismo a su metabolito activo primordial: el Ambroxol.',
      'Aconsejar siempre abundante ingesta de líquidos para favorecer la licuefacción del moco bronquial.',
      'Contraindicada en menores de 2 años salvo estricta prescripción médica.'
    ],
    monitoringAndSideEffects: [
      'Facilidad para expulsar flemas y disminución de la viscosidad del esputo.',
      'Molestias gastrointestinales leves (náuseas, pirosis).',
      'Ausencia de reacciones cutáneas alérgicas.'
    ],
    evidenceAndSources: [
      {
        title: 'Pharmacology and Clinical Efficacy of Bromhexine in Bronchopulmonary Diseases',
        source: 'European Respiratory Review',
        year: '2023',
        summary: 'Demuestra incremento cuantitativo del aclaramiento mucociliar y aumento significativo de las concentraciones pulmonares de antibióticos coadministrados.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste para cursos de corta duración.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Precaución en Gestación',
      summary: 'No se han observado efectos teratogénicos en modelos preclínicos. Evitar preferentemente en el primer trimestre como norma general.',
      clinicalAlternative: 'Hidratación abundante y vapores de agua.'
    }
  },
  {
    id: 'carbocisteina',
    name: 'Carbocisteína',
    commercialNames: ['Mucodyne', 'Pectox Lisina', 'Viscoteina', 'Avimox', 'Fluidasa'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CB03',
    awareCategory: 'Access',
    therapeuticClass: 'Mucorregulador Intracelular del Epitelio Bronquial · Expectorante',
    badgeText: 'Expectorante · Mucorregulador',
    shortDescription: 'Agente mucorregulador derivado de la cisteína. Actúa a nivel intracelular en las células caliciformes activando la sialiltransferasa, restableciendo el cociente sialomucina/fucomucina y restaurando la elasticidad y viscosidad fisiológica del moco.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'carbo-jarabe-100',
        name: 'Jarabe Pediátrico al 2% (100 mg / 5 mL)',
        amountMg: 100,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'carbo-jarabe-250',
        name: 'Jarabe Adulto al 5% (250 mg / 5 mL)',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 200
      },
      {
        id: 'carbo-sobres-lisina',
        name: 'Sobres de Granulado para Solución Oral 2.7 g de Carbocisteinato de Lisina',
        amountMg: 2700,
        volumeMl: 1,
        form: 'tablets',
        unit: 'sobre',
        notes: 'Equivalente a 1.5 g de carbocisteína; toma única diaria matutina'
      },
      {
        id: 'carbo-comp-750',
        name: 'Cápsulas / Comprimidos 750 mg',
        amountMg: 750,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'carbo-ind-adulto',
        name: 'Hipersecreción Bronquial y Moco Viscoso en Adultos y ≥12 años',
        fixedAdultDoseMg: 750,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 2250,
        maxSingleDoseMg: 750,
        description: '750 mg cada 8 horas por vía oral (o 1 sobre de 2.7 g de sal de lisina una vez al día). Al notar mejoría clínica, reducir a 750 mg cada 12 horas.'
      },
      {
        id: 'carbo-ind-peds',
        name: 'Expectoración Pediátrica (2 a 11 años)',
        recommendedDoseMgPerKgPerDay: 20,
        minDoseMgPerKgPerDay: 15,
        maxDoseMgPerKgPerDay: 25,
        fixedAdultDoseMg: 250,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 750,
        maxSingleDoseMg: 250,
        description: '2 a 5 años: 100 mg cada 8 horas (5 mL de jarabe al 2%). 6 a 11 años: 250 mg cada 8 horas (5 mL de jarabe al 5%).'
      }
    ],
    whenToUse: [
      'EPOC con hipersecreción mucosa y bronquitis crónica con expectoración pegajosa.',
      'Rinosinusitis crónica y otitis media serosa (facilita el drenaje tubárico).',
      'Catarros y procesos gripales complicados con moco mucopurulento.'
    ],
    pearlsAndPitfalls: [
      '¡Mecanismo Mucorregulador Puro!: A diferencia de la N-acetilcisteína (que rompe puentes disulfuro en el moco ya formado), la carbocisteína actúa intracelularmente durante la biosíntesis del moco, garantizando una secreción más fisiológica y fácil de expectorar.',
      'Reduce la adherencia de Streptococcus pneumoniae y Haemophilus influenzae al epitelio ciliar respiratorio.',
      'Precaución en pacientes con antecedentes de úlcera péptica activa (altera la barrera mucosa gástrica a dosis elevadas).'
    ],
    monitoringAndSideEffects: [
      'Epigastralgia, pirosis o dispepsia leve.',
      'Volumen y consistencia de las flemas.',
      'Evolución del patrón respiratorio.'
    ],
    evidenceAndSources: [
      {
        title: 'PEACE Study: Carbocisteine on Exacerbations in COPD Patients',
        source: 'The Lancet',
        year: '2023',
        summary: 'Demostró una reducción significativa del 24% en la tasa de exacerbaciones anuales en pacientes con EPOC tratados con carbocisteína prolongada.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; eliminación mayoritaria como metabolitos inactivos.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Precaución en Gestación',
      summary: 'Estudios de reproducción animal no revelaron teratogénesis. Uso habitual seguro en 2.º y 3.er trimestre.',
      clinicalAlternative: 'Hidratación oral copiosa.'
    }
  },
  {
    id: 'erdosteina',
    name: 'Erdosteína',
    commercialNames: ['Fluditec', 'Erdotin', 'Vectavir', 'Dostein'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CB15',
    awareCategory: 'Access',
    therapeuticClass: 'Mucolítico Tiol Pro-Fármaco y Antiadherente Bacteriano · Expectorante',
    badgeText: 'Expectorante · Antiadhesina Bacteriana',
    shortDescription: 'Profármaco tiólico con grupos sulfhidrilo bloqueados que se activan tras el metabolismo hepático de primer paso. Rompe los puentes disulfuro de las mucoproteínas, reduce la viscosidad del esputo y disminuye la adherencia de bacterias a la mucosa respiratoria.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'erdos-susp-175',
        name: 'Polvo para Suspensión Oral Pediátrica 175 mg / 5 mL (35 mg/mL)',
        amountMg: 175,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100
      },
      {
        id: 'erdos-caps-300',
        name: 'Cápsulas 300 mg',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'erdos-ind-adulto',
        name: 'Enfermedades Broncopulmonares Agudas y Crónicas con Hipersecreción en Adultos',
        fixedAdultDoseMg: 300,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-10 días',
        maxDailyDoseMg: 900,
        maxSingleDoseMg: 300,
        description: '300 mg cada 12 horas por vía oral (o 300 mg cada 8 horas en exacerbaciones severas).'
      },
      {
        id: 'erdos-ind-peds',
        name: 'Expectoración Pediátrica (>2 años)',
        recommendedDoseMgPerKgPerDay: 15,
        minDoseMgPerKgPerDay: 10,
        maxDoseMgPerKgPerDay: 20,
        fixedAdultDoseMg: 175,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5-7 días',
        maxDailyDoseMg: 350,
        maxSingleDoseMg: 175,
        description: '15 a 19 kg: 175 mg cada 12 horas (5 mL). 20 a 30 kg: 175 mg cada 8 horas (5 mL). >30 kg: dosis de adulto (300 mg cada 12h).'
      }
    ],
    whenToUse: [
      'Bronquitis aguda, traqueobronquitis y exacerbaciones leves a moderadas de EPOC.',
      'Prevención de sobreinfección bacteriana secundaria a virus respiratorios.',
      'Sinergia con amoxicilina, claritromicina o ciprofloxacino en secreciones purulentas.'
    ],
    pearlsAndPitfalls: [
      'Doble mecanismo clínico: Mucolítico directo y reductor de la adhesividad de Staphylococcus aureus y Pseudomonas aeruginosa al epitelio bronquial.',
      'Excelente tolerancia gástrica: Sus grupos SH libres están bloqueados dentro de un anillo de tiolactona hasta que llegan al hígado, por lo que no causa la irritación gástrica directa de la N-acetilcisteína.',
      'Aumenta la penetración de IgA secretora en el moco bronquial.'
    ],
    monitoringAndSideEffects: [
      'Viscosidad del moco y facilidad para toser.',
      'Excelente perfil de seguridad sin molestias gástricas de relevancia.',
      'Función hepática en tratamientos muy prolongados.'
    ],
    evidenceAndSources: [
      {
        title: 'RESTED Study: Erdosteine in Acute Exacerbations of COPD',
        source: 'American Journal of Respiratory and Critical Care Medicine',
        year: '2023',
        summary: 'Demostró reducción significativa de la duración de las exacerbaciones de EPOC y mejoría precoz de la disnea y saturación de oxígeno.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 25 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 25 mL/min',
        adjustmentText: 'Contraindicado en insuficiencia renal grave o hepática avanzada.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo-Beneficio',
      summary: 'Datos clínicos limitados en gestantes. Emplear solo si el beneficio clínico está claramente justificado.',
      clinicalAlternative: 'N-Acetilcisteína o hidratación oral copiosa.'
    }
  },
  {
    id: 'yoduro-potasio-sski',
    name: 'Yoduro de Potasio (SSKI / Solución Saturada)',
    commercialNames: ['SSKI', 'Pima', 'ThyroShield', 'Iosat'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CA02',
    awareCategory: 'Access',
    therapeuticClass: 'Expectorante Secretomotor Clásico y Protector Tiroideo',
    badgeText: 'Expectorante · Secreción Bronquial Tenaz',
    shortDescription: 'Solución saturada de yoduro de potasio (1 g/mL). Estimula directamente las glándulas bronquiales submucosas y activa las enzimas proteolíticas endógenas del esputo, disolviendo tapones de moco tenaces y viscosos en bronquiectasias crónicas.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'sski-sol-1g',
        name: 'Solución Oral Saturada 1 g / mL (1000 mg/mL) Frasco Gotero (SSKI)',
        amountMg: 1000,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        standardBottleMl: 30,
        notes: '1 gota = aprox. 50 mg de yoduro de potasio (20 gotas = 1 mL = 1000 mg)'
      }
    ],
    indications: [
      {
        id: 'sski-ind-expectorante-adulto',
        name: 'Expectorante en Bronquiectasias / Asma Bronquial con Tapones de Moco Tenaz',
        fixedAdultDoseMg: 300,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '5-14 días',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 600,
        description: '300 a 600 mg (6 a 12 gotas) diluidos en un vaso grande de agua, leche o zumo 3 a 4 veces al día con las comidas.'
      },
      {
        id: 'sski-ind-bloqueo-tiroideo',
        name: 'Protección Tiroidea por Exposición a Radiación / Tormenta Tiroidea',
        fixedAdultDoseMg: 130,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según emergencia radiológica',
        maxDailyDoseMg: 130,
        maxSingleDoseMg: 130,
        description: 'Adultos y niños >12 años: 130 mg una vez al día. Niños 3-12 años: 65 mg al día. Lactantes 1 mes a 3 años: 32.5 mg al día.'
      }
    ],
    whenToUse: [
      'Bronquiectasias crónicas y asma bronquial con tapones de moco insolubles hiperviscosos resistentes a otros expectorantes.',
      'Profilaxis de captación de yodo radiactivo en emergencias nucleares o tormenta tiroidea.'
    ],
    pearlsAndPitfalls: [
      '¡Efecto Wolff-Chaikoff!: La carga masiva de yoduro inhibe de forma transitoria la síntesis de hormonas tiroideas; vigilar hipotiroidismo o bocio inducido en tratamientos prolongados (>2-3 semanas).',
      'Diluir siempre en abundante agua, leche o zumo para amortiguar el sabor salado metálico y evitar la irritación gástrica.',
      'Contraindicado en tuberculosis activa, hipertiroidismo no tratado y dermatitis herpetiforme de Duhring.'
    ],
    monitoringAndSideEffects: [
      'Función tiroidea (TSH y T4 libre si el tratamiento excede 10-14 días).',
      'Signos de yodismo: sabor metálico, sialorrea, ardor bucal y acné yodado.',
      'Potasio sérico en pacientes con insuficiencia renal o que toman diuréticos ahorradores de potasio.'
    ],
    evidenceAndSources: [
      {
        title: 'Use of Potassium Iodide Solution as an Expectorant in Refractory Bronchiectasis',
        source: 'Respiratory Medicine Case Reports',
        year: '2023',
        summary: 'Revalida la utilidad de SSKI como expectorante de rescate altamente eficaz en tapones mucosos severos refractarios a mucolíticos convencionales.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis habitual.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 50 mL/min',
        adjustmentText: 'Contraindicado o usar con precaución extrema por riesgo de hiperpotasemia letal y acumulación de yoduro.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado como Expectorante en Gestación',
      summary: 'Atraviesa libremente la placenta y se concentra en la tiroides fetal, pudiendo causar bocio fetal obstructivo e hipotiroidismo congénito. CONTRAINDICADO para uso respiratorio.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Guaifenesina o hidratación oral abundante.'
    }
  },
  {
    id: 'dornasa-alfa',
    name: 'Dornasa Alfa (rhDNase)',
    commercialNames: ['Pulmozyme'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CB13',
    awareCategory: 'Reserve',
    therapeuticClass: 'Desoxirribonucleasa Humana Recombinante I · Expectorante Enzimático de Alta Precisión',
    badgeText: 'Expectorante Enzimático · Fibrosis Quística',
    shortDescription: 'Enzima recombinante de ingeniería genética que escinde selectivamente las cadenas de ADN libre extracelular liberado por los neutrófilos lisados en el esputo purulento. Reduce radicalmente la viscoelasticidad del moco en minutos.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'dornasa-amp-25',
        name: 'Solución para Inhalación por Nebulizador 2.5 mg / 2.5 mL (1 mg/mL) (Pulmozyme)',
        amountMg: 2.5,
        volumeMl: 2.5,
        form: 'vial',
        unit: 'mL',
        notes: '2.5 mg en ampolla monodosis plástica lista para nebulizar'
      }
    ],
    indications: [
      {
        id: 'dornasa-ind-fq',
        name: 'Tratamiento Diario en Fibrosis Quística para Aclaramiento Mucoso (≥5 años)',
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Mantenimiento crónico diario',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 2.5,
        description: '2.5 mg (una ampolla de 2.5 mL) inhalados sin diluir una vez al día utilizando un nebulizador de aire comprimido homologado (ej. Pari LC Plus).'
      },
      {
        id: 'dornasa-ind-atelectasia',
        name: 'Atelectasia Masiva por Tapón Mucoso Purulento en Cuidados Críticos',
        fixedAdultDoseMg: 2.5,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '3-5 días',
        maxDailyDoseMg: 5,
        maxSingleDoseMg: 2.5,
        description: '2.5 mg nebulizados cada 12 horas (o instilados por broncoscopia flexible en el bronquio lobar atelectásico).'
      }
    ],
    whenToUse: [
      'Fibrosis quística con VEF1 > 40% del valor predictivo para mejorar la función pulmonar y reducir las exacerbaciones infecciosas.',
      'Tapones de moco mucopurulentos tenaces y atelectasia lobar en pacientes con ventilación mecánica invasiva en UCI.'
    ],
    pearlsAndPitfalls: [
      '¡Conservar en Nevera (2°C a 8°C)!: Es una proteína biológica termolábil sensible a la temperatura y la luz; mantener en su blíster de aluminio refrigerado hasta el momento exacto de su uso.',
      'NO mezclar nunca con otros fármacos en la misma cámara del nebulizador (ni broncodilatadores ni antibióticos como tobramicina). Administrar de forma aislada.',
      'Inhalar siempre DESPUÉS del broncodilatador y fisioterapia respiratoria, o inmediatamente antes del antibiótico inhalado.'
    ],
    monitoringAndSideEffects: [
      'Espirometría (mejoría de VEF1 y CVF).',
      'Afonía o disfonía leve y faringitis transitoria.',
      'Disminución del número de ciclos anuales de antibióticos parenterales.'
    ],
    evidenceAndSources: [
      {
        title: 'Cystic Fibrosis Foundation Pulmonary Clinical Practice Guidelines',
        source: 'American Journal of Respiratory and Critical Care Medicine',
        year: '2023',
        summary: 'Recomienda fuertemente la dornasa alfa inhalada diaria continua para todos los pacientes con fibrosis quística mayores de 6 años.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; acción enzimática exclusivamente local en el árbol bronquial.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Sin Absorción Sistémica Relevante',
      summary: 'Absorción sistémica insignificante tras la inhalación. Seguro para continuar el tratamiento crónico durante la gestación en pacientes con fibrosis quística.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'solucion-salina-hipertonica-inhalada',
    name: 'Solución Salina Hipertónica Inhalada (3% y 7%)',
    commercialNames: ['HyperSal', 'Nebusal', 'RespiSal', 'Salina Hipertónica al 3% y 7%'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CA',
    awareCategory: 'Access',
    therapeuticClass: 'Expectorante Osmótico Físico para Inhalación / Aclaramiento Mucociliar',
    badgeText: 'Expectorante Osmótico · Nebulización',
    shortDescription: 'Solución salina estéril con concentración iónica superior a la fisiológica (3% o 7%). Crea un gradiente osmótico que atrae agua desde la submucosa hacia la superficie epitelial, hidratando la capa de líquido periciliar y acelerando la expectoración mucociliar.',
    availableRoutes: ['inhalatoria'],
    concentrations: [
      {
        id: 'salina-hip-3',
        name: 'Solución Estéril Inhalatoria al 3% (30 mg/mL de NaCl) Ampollas 4 mL',
        amountMg: 120,
        volumeMl: 4,
        form: 'vial',
        unit: 'mL',
        notes: 'Concentración preferida en bronquiolitis pediátrica e intolerancia al 7%'
      },
      {
        id: 'salina-hip-7',
        name: 'Solución Estéril Inhalatoria al 7% (70 mg/mL de NaCl) Ampollas 4 mL (HyperSal)',
        amountMg: 280,
        volumeMl: 4,
        form: 'vial',
        unit: 'mL',
        notes: 'Estándar en fibrosis quística y bronquiectasias de adultos'
      }
    ],
    indications: [
      {
        id: 'salina-hip-ind-fq-adulto',
        name: 'Aclaramiento Mucociliar en Fibrosis Quística / Bronquiectasias',
        fixedAdultDoseMg: 280,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Mantenimiento crónico',
        maxDailyDoseMg: 560,
        maxSingleDoseMg: 280,
        description: '4 mL de solución al 7% nebulizados dos veces al día. Premedicar siempre con un agonista beta-2 (ej. salbutamol 2 inhalaciones) 10-15 minutos antes.'
      },
      {
        id: 'salina-hip-ind-bronquiolitis',
        name: 'Bronquiolitis Aguda Pediátrica en Lactantes Hospitalizados',
        fixedAdultDoseMg: 120,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '3-5 días',
        maxDailyDoseMg: 480,
        maxSingleDoseMg: 120,
        description: '4 mL de solución salina hipertónica al 3% nebulizados cada 6 a 8 horas para reducir el edema de la pared bronquiolar y facilitar la aspiración de secreciones.'
      }
    ],
    whenToUse: [
      'Tratamiento de base para acelerar el aclaramiento de esputo en fibrosis quística y bronquiectasias no fibrosis quística.',
      'Bronquiolitis aguda moderada a grave en lactantes hospitalizados para reducir los días de estancia hospitalaria.',
      'Inducción de esputo para diagnóstico microbiológico de tuberculosis o neumocistosis.'
    ],
    pearlsAndPitfalls: [
      '¡PREMEDICACIÓN OBLIGATORIA CON SALBUTAMOL!: La inhalación de soluciones salinas hipertónicas (especialmente al 7%) es un potente irritante osmótico que desencadena broncoespasmo reflejo severo en vías respiratorias hiperreactivas. Administrar SIEMPRE salbutamol previo a la nebulización.',
      'Económico, altamente eficaz y exento de toxicidad metabólica o hepática.',
      'Sabor intensamente salado transitorio; aconsejar enjuague bucal posterior.'
    ],
    monitoringAndSideEffects: [
      'Sibilancias o signos de broncoespasmo durante la nebulización (suspender si aparece estridor o tiraje).',
      'Volumen de esputo expectorado tras la sesión.',
      'Saturación de oxígeno por pulsioximetría.'
    ],
    evidenceAndSources: [
      {
        title: 'Cochrane Review: Nebulised Hypertonic Saline for Cystic Fibrosis',
        source: 'Cochrane Database of Systematic Reviews',
        year: '2023',
        summary: 'Confirma que la salina hipertónica al 7% mejora la función pulmonar y reduce significativamente la frecuencia de exacerbaciones respiratorias.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste; efecto físico-osmótico local en la vía aérea.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'A',
      status: 'safe',
      statusLabel: 'Completamente Seguro en Gestación',
      summary: 'Cloruro sódico estéril fisiológico; carece de absorción o toxicidad sistémica. Fármaco de máxima inocuidad en el embarazo.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'guaifenesina-pseudoefedrina',
    name: 'Guaifenesina / Pseudoefedrina',
    commercialNames: ['Mucinex D', 'Entex ER', 'Balminil Expectorante + Descongestionante', 'Pseudovent'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CA10',
    awareCategory: 'Access',
    therapeuticClass: 'Combinación Expectorante Mucocinético + Descongestionante Sistémico Oral',
    badgeText: 'Resfriado · Expectorante + Descongestionante',
    shortDescription: 'Asociación que combina la acción fluidificante y expectorante de secreciones bronquiales de la guaifenesina con la vasoconstricción y desinflamación nasal y sinusal de la pseudoefedrina.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'guai-pseudo-comp-er',
        name: 'Comprimidos de Liberación Prolongada (Guaifenesina 600 mg + Pseudoefedrina 60 mg) (Mucinex D)',
        amountMg: 660,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Doble capa: capa inmediata + capa de liberación sostenida de 12 horas'
      },
      {
        id: 'guai-pseudo-comp-max',
        name: 'Comprimidos Máxima Potencia (Guaifenesina 1200 mg + Pseudoefedrina 120 mg) (Mucinex D Max)',
        amountMg: 1320,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'guai-pseudo-ind-adulto',
        name: 'Congestión Nasosinusal y Tos con Secreciones Viscosas en Adultos y ≥12 años',
        fixedAdultDoseMg: 660,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5-7 días',
        maxDailyDoseMg: 1320,
        maxSingleDoseMg: 660,
        description: '1 comprimido de 600/60 mg cada 12 horas con un vaso lleno de agua (o 1 comprimido de máxima potencia cada 12 horas sin superar 2400 mg de guaifenesina/240 mg de pseudoefedrina al día).'
      }
    ],
    whenToUse: [
      'Catarros y sinusitis aguda con congestión facial severa y expectoración bronquial adherente.',
      'Gripes con taponamiento nasal y sensación de pesadez torácica.'
    ],
    pearlsAndPitfalls: [
      'Beber al menos 2 litros de agua al día para maximizar la eficacia expectorante de la guaifenesina.',
      'Tomar por la mañana o temprano en la tarde para evitar el insomnio secundario a la pseudoefedrina.',
      'Contraindicada en hipertensión severa o no controlada, cardiopatía isquémica o uso de IMAO.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial y frecuencia cardíaca.',
      'Insomnio, taquicardia o cefalea.',
      'Alivio de la congestión y facilidad para toser.'
    ],
    evidenceAndSources: [
      {
        title: 'Clinical Efficacy of Guaifenesin/Pseudoephedrine in Upper Respiratory Tract Infections',
        source: 'Journal of Pharmacy and Pharmacology',
        year: '2023',
        summary: 'Demuestra reducción simultánea superior de la resistencia de la vía aérea nasal y disminución de la viscosidad del moco respiratorio.'
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
        adjustmentText: 'Reducir la dosis diaria a la mitad por acumulación de pseudoefedrina.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 1.er Trimestre',
      summary: 'La pseudoefedrina se asocia a riesgo de anomalías vasculares fetales en el primer trimestre. Evitar en el embarazo.',
      contraindicatedInTrimester: [1],
      clinicalAlternative: 'Guaifenesina sola + lavados nasales con solución fisiológica.'
    }
  },
  {
    id: 'guaifenesina-codeina',
    name: 'Guaifenesina / Codeína',
    commercialNames: ['Cheratussin AC', 'Robitussin AC', 'Virtussin AC', 'Brontex', 'Tussi-Organidin-S NR'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05FA02',
    awareCategory: 'Watch',
    therapeuticClass: 'Combinación Expectorante Mucocinético + Antitusígeno Narcótico Opioide',
    badgeText: 'Resfriado · Expectorante + Opioide',
    shortDescription: 'Solución oral que asocia la acción fluidificante de la guaifenesina con la potente supresión del centro bulbar de la tos de la codeína. Fármaco de prescripción médica controlada para tos dolorosa refractaria.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'guai-code-jarabe',
        name: 'Jarabe Oral (Guaifenesina 100 mg + Fosfato de Codeína 10 mg / 5 mL) (Cheratussin AC)',
        amountMg: 110,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120,
        notes: '100 mg Guaifenesina + 10 mg Codeína por cada 5 mL'
      }
    ],
    indications: [
      {
        id: 'guai-code-ind-adulto',
        name: 'Tos Dolorosa Severa e Incapacitante con Flemas Viscosas en Adultos (≥18 años)',
        fixedAdultDoseMg: 220,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Máximo 3 a 5 días',
        maxDailyDoseMg: 880,
        maxSingleDoseMg: 220,
        description: '10 mL de jarabe (200 mg Guaifenesina + 20 mg Codeína) cada 4 a 6 horas por vía oral según necesidad (máximo 60 mL de jarabe en 24 horas).'
      }
    ],
    whenToUse: [
      'Tos dolorosa severa paroxística postraumática, costal o asociada a pleuresía.',
      'Tos exhaustiva nocturna que impide el descanso en bronquitis aguda cuando han fallado los no narcóticos.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA!: CONTRAINDICADO ABSOLUTAMENTE en menores de 18 años debido al riesgo de depresión respiratoria mortal en metabolizadores ultrarrápidos de CYP2D6.',
      'Potencial de abuso, dependencia y sedación; restringir a la menor duración posible (máximo 3 a 5 días).',
      'No combinar con alcohol ni con otros depresores del sistema nervioso central o benzodiacepinas.'
    ],
    monitoringAndSideEffects: [
      'Frecuencia respiratoria y nivel de consciencia.',
      'Estreñimiento, mareo, somnolencia y náuseas.',
      'Control del dolor torácico asociado a la tos.'
    ],
    evidenceAndSources: [
      {
        title: 'FDA Drug Safety Communication: Codeine Restriction in Cough and Cold Medicines',
        source: 'US Food and Drug Administration',
        year: '2023',
        summary: 'Prohíbe el uso de codeína para la tos en todos los pacientes pediátricos menores de 18 años por riesgo de depresión respiratoria letal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 49 mL/min',
        adjustmentText: 'Reducir la dosis al 75% o espaciar a cada 8 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: 'Reducir la dosis al 50% o evitar su uso por acumulación de metabolitos neurotóxicos (codeína-6-glucurónido).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 3.er Trimestre y Lactancia',
      summary: 'El uso en el tercer trimestre puede causar síndrome de abstinencia neonatal y depresión respiratoria al nacer. Contraindicado en la lactancia materna por riesgo letal en el lactante.',
      contraindicatedInTrimester: [3],
      clinicalAlternative: 'Guaifenesina sola o Dextrometorfano.'
    }
  },
  {
    id: 'hedera-helix',
    name: 'Hedera Helix (Extracto de Hoja de Hiedra)',
    commercialNames: ['Prospan', 'Abrilar', 'Hedelix', 'Hederatuss'],
    category: 'Alergia / Resfriado',
    atcCode: 'R05CA12',
    awareCategory: 'Access',
    therapeuticClass: 'Expectorante Secretolítico y Broncoespasmolítico Natural (Saponinas)',
    badgeText: 'Expectorante Natural · Saponinas EA 575',
    shortDescription: 'Extracto estandarizado de hojas secas de hiedra (Hedera helix L., extracto EA 575). Contiene saponinas triterpénicas (principalmente alfa-hederina) que estimulan la secreción de surfactante por los neumocitos tipo II e inhiben la internalización de receptores beta-2 adrenérgicos.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'prospan-jarabe',
        name: 'Jarabe Oral (7 mg de Extracto Seco de Hedera Helix / mL) (Prospan)',
        amountMg: 35,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 100,
        notes: 'Contiene 35 mg de extracto seco especial EA 575 por cada 5 mL'
      },
      {
        id: 'prospan-gotas',
        name: 'Gotas Orales / Solución (20 mg / mL) (Prospan Gotas)',
        amountMg: 20,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        standardBottleMl: 20
      }
    ],
    indications: [
      {
        id: 'hedera-ind-adulto',
        name: 'Tos Productiva en Afecciones Bronquiales Benignas en Adultos y >12 años',
        fixedAdultDoseMg: 35,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7 días',
        maxDailyDoseMg: 105,
        maxSingleDoseMg: 35,
        description: '5 mL de jarabe (35 mg) tres veces al día (mañana, mediodía y noche) (total 105 mg de extracto al día).'
      },
      {
        id: 'hedera-ind-peds',
        name: 'Expectorante Pediátrico en Tos Catarral (2 a 11 años)',
        fixedAdultDoseMg: 17.5,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-7 días',
        maxDailyDoseMg: 52.5,
        maxSingleDoseMg: 17.5,
        description: '2 a 5 años: 2.5 mL de jarabe (17.5 mg) dos veces al día. 6 a 11 años: 5 mL de jarabe (35 mg) dos veces al día.'
      }
    ],
    whenToUse: [
      'Alivio de la tos productiva con flemas en catarro común y bronquitis aguda.',
      'Alternativa expectorante de origen fitofarmacéutico con excelente tolerabilidad en pediatría.'
    ],
    pearlsAndPitfalls: [
      'Doble acción demostrada in vitro y clínica: Secretolítica (fluidifica el moco denso) y broncoespasmolítica (relaja el músculo liso bronquial al mantener activos los receptores beta-2 adrenérgicos).',
      'Excelente perfil de tolerabilidad gastrointestinal; carece de interacciones medicamentosas conocidas.',
      'No utilizar en niños menores de 2 años sin evaluación médica.'
    ],
    monitoringAndSideEffects: [
      'Alivio de la frecuencia de la tos y fluidez de las flemas.',
      'Tolerancia gástrica (raras molestias leves por contenido de sorbitol).',
      'Ausencia de dificultad respiratoria añadida.'
    ],
    evidenceAndSources: [
      {
        title: 'Systematic Review and Meta-Analysis of Hedera Helix for Acute Respiratory Infections',
        source: 'Phytomedicine',
        year: '2023',
        summary: 'Demuestra eficacia estadísticamente significativa en la reducción de la severidad de la tos y el tiempo de recuperación clínica en pacientes con bronquitis aguda.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Uso con Precaución en Gestación',
      summary: 'No hay datos clínicos suficientes de seguridad en mujeres embarazadas. Usar solo bajo criterio médico.',
      clinicalAlternative: 'Hidratación abundante y vapores de agua.'
    }
  }
];
