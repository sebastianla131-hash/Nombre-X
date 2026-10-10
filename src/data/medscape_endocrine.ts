import { Medication } from '../types';

export const MEDSCAPE_ENDOCRINOLOGY: Medication[] = [
  {
    id: 'empagliflozina',
    name: 'Empagliflozina',
    commercialNames: ['Jardiance', 'Empa', 'Glyxambi (comb)'],
    category: 'Endocrinología',
    atcCode: 'A10BK03',
    therapeuticClass: 'Inhibidor del Cotransportador Sodio-Glucosa 2 (iSGLT2) · Cardioprotector y Nefroprotector',
    badgeText: 'Endocrino · iSGLT2 Cardiorrenal',
    shortDescription: 'Inhibidor selectivo de SGLT2 en el túbulo contorneado proximal. Promueve glucosuria y natriuresis, reduciendo la glucemia, la presión arterial, las hospitalizaciones por insuficiencia cardíaca y la progresión de la enfermedad renal crónica.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'empa-comp-10',
        name: 'Comprimidos Recubiertos 10 mg',
        amountMg: 10,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'empa-comp-25',
        name: 'Comprimidos Recubiertos 25 mg',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'empa-ind-ic-erc',
        name: 'Insuficiencia Cardíaca (ICFEr / ICFEp) o Enfermedad Renal Crónica',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 10,
        maxSingleDoseMg: 10,
        description: '10 mg una vez al día por la mañana, con o sin alimentos, independientemente de la presencia de diabetes.'
      },
      {
        id: 'empa-ind-dm2',
        name: 'Diabetes Mellitus Tipo 2 con Alto Riesgo Cardiovascular',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 25,
        maxSingleDoseMg: 25,
        description: 'Dosis inicial de 10 mg al día. Puede aumentarse a 25 mg al día si se requiere mayor control glucémico adicional y TFGe ≥30 mL/min/1.73m².'
      }
    ],
    whenToUse: [
      'Insuficiencia cardíaca sintomática con cualquier rango de fracción de eyección (FEVI reducida, ligeramente reducida o preservada).',
      'Enfermedad renal crónica con albuminuria en adultos diabéticos o no diabéticos.',
      'Diabetes mellitus tipo 2 con enfermedad cardiovascular establecida o múltiples factores de riesgo aterotrombótico.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Cetoacidosis Diabética Euglucémica!: Puede ocurrir cetoacidosis con glucemias normales o ligeramente elevadas (<250 mg/dL). Suspender inmediatamente ante estrés metabólico severo, cirugía mayor o ayuno prolongado (mínimo 3 días antes de cirugía electiva).',
      'Infecciones micóticas genitales (candidiasis vulvovaginal y balanitis) en hasta un 5-10% por la glucosuria inducida; instruir higiene íntima estricta.',
      'Efecto hemodinámico inicial: Es normal observar una ligera caída transitoria en la TFGe de hasta un 30% en las primeras 2-4 semanas, seguida de estabilización y preservación renal a largo plazo.'
    ],
    monitoringAndSideEffects: [
      'Función renal (TFGe basal y a las 4 semanas).',
      'Signos y síntomas de infecciones urinarias complicadas o micosis genital.',
      'Presión arterial y estado de volemia (precaución con deshidratación o diuréticos de asa concomitantes).'
    ],
    evidenceAndSources: [
      {
        title: 'EMPEROR-Reduced, EMPEROR-Preserved and EMPA-KIDNEY Trials',
        source: 'New England Journal of Medicine',
        year: '2023',
        summary: 'Demostraron beneficios consistentes e independientes de la glucemia en reducción de muerte cardiovascular, hospitalización por IC y retraso en diálisis.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 20 mL/min/1.73m²',
        adjustmentText: '10 mg una vez al día (mantener para beneficio cardiorrenal).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 20 mL/min/1.73m²',
        adjustmentText: 'No recomendado iniciar por falta de datos clínicos de eficacia.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: 'Diálisis',
        adjustmentText: 'Contraindicado en pacientes en diálisis crónica.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 2.º y 3.er Trimestre',
      summary: 'Datos en animales muestran toxicidad en el desarrollo renal fetal (dilatación pélvica renal). Suspender y sustituir por insulina durante el embarazo.',
      contraindicatedInTrimester: [2, 3],
      clinicalAlternative: 'Insulina humana o análoga (Glargina / Lispro).'
    }
  },
  {
    id: 'semaglutida',
    name: 'Semaglutida',
    commercialNames: ['Ozempic', 'Rybelsus', 'Wegovy'],
    category: 'Endocrinología',
    atcCode: 'A10BJ06',
    therapeuticClass: 'Agonista del Receptor de GLP-1 (Péptido Similar al Glucagón-1)',
    badgeText: 'Endocrino · Agonista GLP-1',
    shortDescription: 'Agonista de larga duración del receptor GLP-1 con un 94% de homología estructural con el GLP-1 humano nativo. Estimula la secreción de insulina glucosa-dependiente, inhibe el glucagón, enlentece el vaciamiento gástrico y reduce el apetito a nivel hipotalámico.',
    availableRoutes: ['sc', 'oral'],
    concentrations: [
      {
        id: 'sema-pluma-2',
        name: 'Pluma Prellenada Subcutánea Semanal 2 mg / 1.5 mL (Ozempic 0.25 mg y 0.5 mg)',
        amountMg: 2,
        volumeMl: 1.5,
        form: 'vial',
        unit: 'mL',
        notes: 'Pluma multidosis para titulación semanal'
      },
      {
        id: 'sema-comp-7',
        name: 'Comprimidos Orales 7 mg (Rybelsus)',
        amountMg: 7,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar en ayunas con no más de 120 mL de agua sola'
      },
      {
        id: 'sema-comp-14',
        name: 'Comprimidos Orales 14 mg (Rybelsus)',
        amountMg: 14,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'sema-ind-dm2-sc',
        name: 'Diabetes Mellitus Tipo 2 / Reducción de Riesgo MACE (Subcutáneo)',
        fixedAdultDoseMg: 0.25,
        frequencyPerDay: 1,
        intervalHours: 168,
        durationDays: 'Crónico semanal',
        maxDailyDoseMg: 2,
        maxSingleDoseMg: 2,
        description: 'Inicio con 0.25 mg SC una vez a la semana durante 4 semanas (fase de tolerancia gastrointestinal). Aumentar a 0.5 mg SC semanal a la semana 4; si se requiere control adicional, escalar a 1 mg y hasta 2 mg semanales.'
      },
      {
        id: 'sema-ind-oral',
        name: 'Diabetes Mellitus Tipo 2 Vía Oral (Rybelsus)',
        fixedAdultDoseMg: 3,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico diario',
        maxDailyDoseMg: 14,
        maxSingleDoseMg: 14,
        description: 'Inicio con 3 mg al día por 30 días, luego aumentar a 7 mg al día (mantenimiento estándar) y si es necesario a 14 mg al día.'
      }
    ],
    whenToUse: [
      'DM2 en adultos con sobrepeso u obesidad y alto riesgo cardiovascular o eventos aterotrombóticos previos.',
      'Pacientes con DM2 que no alcanzan objetivos de HbA1c con metformina.',
      'Reducción de eventos adversos cardiovasculares mayores (MACE: muerte cardiovascular, infarto no fatal, ictus no fatal).'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Blackbox FDA!: Contraindicado en pacientes con antecedente personal o familiar de carcinoma medular de tiroides (CMT) o síndrome de neoplasia endocrina múltiple tipo 2 (MEN 2).',
      'Efectos gastrointestinales (náuseas, vómitos, saciedad precoz, estreñimiento): Suelen ser transitorios y se previenen con una titulación escalonada rigurosa cada 4 semanas.',
      'Retraso del vaciamiento gástrico: Suspender antes de cirugías con anestesia general para prevenir broncoaspiración (guías ASA).'
    ],
    monitoringAndSideEffects: [
      'HbA1c y peso corporal.',
      'Síntomas digestivos (descartar pancreatitis aguda ante dolor abdominal severo persistente irradiado a la espalda).',
      'Examen oftalmológico (vigilar retinopatía diabética si la glucemia desciende de forma muy acelerada).'
    ],
    evidenceAndSources: [
      {
        title: 'SUSTAIN-6 and SELECT Clinical Trials',
        source: 'New England Journal of Medicine',
        year: '2023',
        summary: 'Demostró una reducción del 20% en eventos cardiovasculares mayores (MACE) tanto en diabéticos como en pacientes no diabéticos con sobrepeso/obesidad y enfermedad cardiovascular.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 15 mL/min/1.73m²',
        adjustmentText: 'No requiere ajuste de dosis.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 15 mL/min o Diálisis',
        adjustmentText: 'Experiencia limitada; no recomendado.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación y Lactancia',
      summary: 'Toxicidad reproductiva demostrada en animales (pérdidas embrionarias y anomalías estructurales). Debe suspenderse al menos 2 meses antes de planificar un embarazo debido a su larga semivida (1 semana).',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Insulina.'
    }
  },
  {
    id: 'insulina-glargina',
    name: 'Insulina Glargina',
    commercialNames: ['Lantus', 'Toujeo', 'Basaglar', 'Optisulin'],
    category: 'Endocrinología',
    atcCode: 'A10AE04',
    therapeuticClass: 'Análogo de Insulina Humana Basal de Acción Prolongada',
    badgeText: 'Insulina Basal · Sin Pico (24h)',
    shortDescription: 'Análogo de insulina recombinante diseñado para precipitar en microcristales a pH fisiológico tras la inyección subcutánea, liberando insulina de forma constante sin picos pronunciados durante más de 24 horas.',
    availableRoutes: ['sc'],
    concentrations: [
      {
        id: 'glar-pluma-100',
        name: 'Pluma Prellenada Solución Inyectable SC 100 UI/mL (3 mL = 300 UI)',
        amountMg: 100,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: '100 UI de insulina glargina por cada mL (Lantus / Basaglar)'
      },
      {
        id: 'glar-pluma-300',
        name: 'Pluma Prellenada Concentrada 300 UI/mL (1.5 mL = 450 UI) (Toujeo)',
        amountMg: 300,
        volumeMl: 1,
        form: 'vial',
        unit: 'mL',
        notes: '300 UI por mL (menor volumen y perfil aún más plano)'
      }
    ],
    indications: [
      {
        id: 'glar-ind-dm2-basal',
        name: 'Insulinoterapia Basal en Diabetes Mellitus Tipo 2',
        fixedAdultDoseMg: 10,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 100,
        description: 'Dosis inicial recomendada: 10 UI al día (o 0.1 a 0.2 UI/kg/día) administradas a la misma hora todos los días (habitualmente por la noche antes de acostarse). Titular 2-4 UI cada 3-7 días según glucemia en ayunas.'
      },
      {
        id: 'glar-ind-dm1-peds-adulto',
        name: 'Diabetes Mellitus Tipo 1 Pediátrica y Adulta (Componente Basal)',
        recommendedDoseMgPerKgPerDay: 0.3,
        minDoseMgPerKgPerDay: 0.2,
        maxDoseMgPerKgPerDay: 0.5,
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico de por vida',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 80,
        description: 'Representa aproximadamente el 40-50% del requerimiento total diario de insulina (0.4-0.8 UI/kg/día total).'
      }
    ],
    whenToUse: [
      'Tratamiento de diabetes mellitus tipo 1 en niños (>2 años) y adultos en esquema basal-bolo.',
      'Diabetes mellitus tipo 2 cuando los antidiabéticos orales no alcanzan la meta de HbA1c o ante catabolismo franco (pérdida de peso, cetonuria).',
      'Hiperglucemia hospitalaria en pacientes ingresados no críticos.'
    ],
    pearlsAndPitfalls: [
      '¡NUNCA administrar por vía intravenosa!: La formulación precipita a pH sanguíneo; solo debe administrarse por vía subcutánea.',
      'NO mezclar en la misma jeringa con ninguna otra insulina, ya que su pH ácido (pH 4.0) desestabiliza a las insulinas neutras prandiales.',
      'Menor frecuencia de hipoglucemias nocturnas en comparación con la insulina NPH gracias a la ausencia de pico de concentración plasmática.'
    ],
    monitoringAndSideEffects: [
      'Glucemia capilar en ayunas (diana ambulatoria 80-130 mg/dL).',
      'Signos de hipoglucemia (sudoración fría, temblor, palpitaciones, mareo). Educar sobre la regla de los 15 gramos de carbohidratos simples.',
      'Inspección de sitios de inyección para descartar lipohipertrofia (rotar siempre los puntos de punción: abdomen, muslos, brazos).'
    ],
    evidenceAndSources: [
      {
        title: 'ADA Standards of Care in Diabetes',
        source: 'Diabetes Care',
        year: '2024',
        summary: 'Los análogos de insulina basal de segunda generación ofrecen menor variabilidad glucémica y menor riesgo de hipoglucemia severa frente a NPH.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis estándar.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 50 mL/min',
        adjustmentText: 'Reducir la dosis total en un 25% por menor aclaramiento de insulina.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min',
        adjustmentText: 'Reducir la dosis en un 50% por alto riesgo de hipoglucemia prolongada.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible y Ampliamente Utilizada en Gestación',
      summary: 'Grandes estudios observacionales y ensayos aleatorizados no han encontrado incremento de malformaciones fetales ni complicaciones perinatales en comparación con insulina NPH. Recomendada por la ADA en diabetes gestacional y pregestacional.',
      clinicalAlternative: 'Insulina NPH si se prefiere mayor número de décadas de experiencia.'
    }
  }
];
