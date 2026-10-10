import { Medication } from '../types';

export const MEDSCAPE_CARDIOVASCULAR: Medication[] = [
  {
    id: 'metoprolol',
    name: 'Metoprolol',
    commercialNames: ['Betaloc', 'Lopressor', 'Seloken', 'Beloc'],
    category: 'Cardiovascular',
    atcCode: 'C07AB02',
    therapeuticClass: 'Betabloqueador Cardioselectivo Beta-1',
    badgeText: 'Cardiovascular · Beta-1 Selectivo',
    shortDescription: 'Betabloqueador selectivo beta-1 sin actividad simpaticomimética intrínseca. Indicado en hipertensión, angina de pecho, taquiarritmias e insuficiencia cardíaca.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'metop-comp-50',
        name: 'Comprimidos Ranurados 50 mg (Tartrato)',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'metop-comp-100',
        name: 'Comprimidos Ranurados 100 mg (Tartrato)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'metop-amp-5',
        name: 'Solución Inyectable IV 5 mg / 5 mL (1 mg/mL)',
        amountMg: 5,
        volumeMl: 5,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'metop-ind-hta',
        name: 'Hipertensión Arterial / Angina de Pecho Estable',
        fixedAdultDoseMg: 50,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200,
        description: 'Dosis inicial de 50 mg cada 12 horas (tartrato); titular gradualmente según frecuencia cardíaca y PA.'
      },
      {
        id: 'metop-ind-arritmia-iv',
        name: 'Urgencia Arritmias / Taquicardia Supraventricular (IV)',
        fixedAdultDoseMg: 5,
        frequencyPerDay: 3,
        intervalHours: 1,
        durationDays: 'Urgencias',
        maxDailyDoseMg: 15,
        maxSingleDoseMg: 5,
        description: 'Bolo IV lento de 2.5 a 5 mg en 2 minutos. Puede repetirse cada 5 minutos hasta una dosis acumulada máxima de 15 mg bajo monitorización ECG.'
      },
      {
        id: 'metop-ind-peds',
        name: 'Hipertensión Pediátrica (>1 año)',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 50,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 100,
        description: '1 a 2 mg/kg/día dividido cada 12 horas (máximo inicial 50 mg/día).'
      }
    ],
    whenToUse: [
      'Control de frecuencia cardíaca en fibrilación auricular o flutter con respuesta ventricular rápida.',
      'Prevención secundaria pos-infarto agudo de miocardio (reduce mortalidad y reinfarto).',
      'Hipertensión arterial con taquicardia o cardiopatía isquémica coexistente.'
    ],
    pearlsAndPitfalls: [
      '¡No suspender abruptamente!: La retirada brusca puede causar taquicardia refleja de rebote, angina inestable o infarto agudo de miocardio.',
      'Contraindicado en asma severa descompensada, bloqueo auriculoventricular de 2.º o 3.er grado sin marcapasos y shock cardiogénico.',
      'Puede enmascarar los signos adrenérgicos de hipoglucemia (taquicardia, temblor) en pacientes con diabetes mellitus (la diaforesis suele persistir).'
    ],
    monitoringAndSideEffects: [
      'Frecuencia cardíaca (mantener FC diana en reposo entre 55 y 70 lpm).',
      'Presión arterial sistólica y diastólica.',
      'Bradicardia, broncoespasmo, fatiga e hipotensión ortostática.'
    ],
    evidenceAndSources: [
      {
        title: 'ACC/AHA Guideline for the Management of Heart Failure',
        source: 'Circulation',
        year: '2023',
        summary: 'Metoprolol succinato de liberación prolongada es uno de los 3 betabloqueadores con beneficio comprobado en sobrevida en falla cardíaca con FEVI reducida.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en falla renal; el metabolismo es casi exclusivamente hepático (CYP2D6).',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Usar con Precaución en Gestación',
      summary: 'Atraviesa la placenta y puede causar bradicardia fetal, hipoglucemia neonatal y restricción del crecimiento intrauterino (RCIU). Labetalol es el betabloqueador de primera elección en obstetricia.',
      clinicalAlternative: 'Labetalol oral o Nifedipino de liberación prolongada.',
      fetalRisks: ['Bradicardia neonatal', 'Restricción del crecimiento intrauterino']
    }
  },
  {
    id: 'carvedilol',
    name: 'Carvedilol',
    commercialNames: ['Dilatrend', 'Coreg', 'Dualten', 'Carvedil'],
    category: 'Cardiovascular',
    atcCode: 'C07AG02',
    therapeuticClass: 'Betabloqueador No Selectivo con Bloqueo Alfa-1 Vasodilatador',
    badgeText: 'Cardiovascular · Falla Cardíaca',
    shortDescription: 'Betabloqueador de tercera generación con acción vasodilatadora periférica por bloqueo alfa-1 y potente efecto antioxidante. Pilar fundamental en la insuficiencia cardíaca con FEVI reducida.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'carv-comp-625',
        name: 'Comprimidos Ranurados 6.25 mg',
        amountMg: 6.25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'carv-comp-125',
        name: 'Comprimidos Ranurados 12.5 mg',
        amountMg: 12.5,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'carv-comp-25',
        name: 'Comprimidos Ranurados 25 mg',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'carv-ind-ic',
        name: 'Insuficiencia Cardíaca con Fracción de Eyección Reducida (ICFEr)',
        fixedAdultDoseMg: 3.125,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 25,
        description: 'Dosis inicial de titulación: 3.125 mg cada 12 horas con alimentos por 2 semanas. Duplicar cada 14 días según tolerancia hasta dosis diana de 25 mg cada 12 horas (50 mg c/12h si peso >85 kg).'
      },
      {
        id: 'carv-ind-hta',
        name: 'Hipertensión Arterial Esencial',
        fixedAdultDoseMg: 12.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 25,
        description: '12.5 mg al día los primeros 2 días, luego 25 mg al día en una o dos tomas (máximo 50 mg/día).'
      }
    ],
    whenToUse: [
      'Insuficiencia cardíaca sintomática estable (clase funcional NYHA II-IV) en combinación con IECA/ARA-II/ARNI y antagonistas de aldosterona.',
      'Disfunción ventricular izquierda pos-infarto de miocardio.',
      'Hipertensión arterial refractaria con componente de sobreactivación simpática.'
    ],
    pearlsAndPitfalls: [
      'Administrar siempre con alimentos para ralentizar la absorción y mitigar el riesgo de hipotensión ortostática por el bloqueo alfa-1.',
      'Iniciar únicamente cuando el paciente se encuentre en estado de euvolemia clínica (sin congestión pulmonar o edema periférico severo descompensado).',
      'El doble bloqueo adrenérgico provee una reducción más eficaz de la presión arterial sistólica y poscarga que los betabloqueadores puros.'
    ],
    monitoringAndSideEffects: [
      'Presión arterial sentado y de pie (hipotensión ortostática y mareo).',
      'Frecuencia cardíaca en reposo y signos de empeoramiento transitorio de congestión al inicio.',
      'Glucemia y perfil lipídico (menor impacto metabólico adverso que betabloqueadores tradicionales).'
    ],
    evidenceAndSources: [
      {
        title: 'COPERNICUS and CAPRICORN Clinical Trials',
        source: 'New England Journal of Medicine & Lancet',
        year: '2022',
        summary: 'Demostraron reducción de la mortalidad por todas las causas del 35% en insuficiencia cardíaca severa con carvedilol.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste en falla renal; eliminación predominantemente biliar.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evaluar Riesgo / Beneficio',
      summary: 'Puede causar hipoperfusión placentaria, bradicardia fetal y retraso en el crecimiento intrauterino.',
      clinicalAlternative: 'Labetalol o Metildopa.'
    }
  },
  {
    id: 'hidroclorotiazida',
    name: 'Hidroclorotiazida',
    commercialNames: ['Microzide', 'Diclotride', 'Hidrosaluretil', 'HCTZ'],
    category: 'Cardiovascular',
    atcCode: 'C03AA03',
    therapeuticClass: 'Diurético Tiazídico · Antihipertensivo',
    badgeText: 'Cardiovascular · Tiazida',
    shortDescription: 'Diurético tiazídico que inhibe el cotransportador Na+/Cl- en el túbulo contorneado distal. Fármaco pilar de primera línea en hipertensión arterial y sinergia antihipertensiva.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'hctz-comp-25',
        name: 'Comprimidos Ranurados 25 mg',
        amountMg: 25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'hctz-comp-50',
        name: 'Comprimidos Ranurados 50 mg',
        amountMg: 50,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'hctz-ind-hta',
        name: 'Hipertensión Arterial Esencial en Adultos',
        fixedAdultDoseMg: 12.5,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 25,
        maxSingleDoseMg: 25,
        description: 'Dosis recomendada de 12.5 a 25 mg una vez al día por la mañana. Dosis >25 mg no aumentan eficacia antihipertensiva pero incrementan efectos metabólicos adversos.'
      },
      {
        id: 'hctz-ind-edema',
        name: 'Edema Asociado a Insuficiencia Cardíaca o Síndrome Nefrótico',
        fixedAdultDoseMg: 25,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Según respuesta diurética',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 50,
        description: '25 a 50 mg una vez al día o en días alternos.'
      },
      {
        id: 'hctz-ind-peds',
        name: 'Edema o Hipertensión Pediátrica',
        recommendedDoseMgPerKgPerDay: 1,
        minDoseMgPerKgPerDay: 1,
        maxDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 25,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 50,
        maxSingleDoseMg: 25,
        description: '1 a 2 mg/kg/día dividido cada 12 a 24 horas (máximo 50 mg/día).'
      }
    ],
    whenToUse: [
      'Hipertensión arterial esencial no complicada en monoterapia o en combinación fija con IECA/ARA-II.',
      'Hipertensión sistólica aislada en el adulto mayor.',
      'Prevención de recurrencia de nefrolitiasis por oxalato de calcio (reduce calciuria).'
    ],
    pearlsAndPitfalls: [
      'Pierde eficacia diurética cuando el filtrado glomerular estimado cae por debajo de 30 mL/min (en ERC avanzada sustituir por diuréticos de asa como furosemida).',
      'Efectos metabólicos: Hipopotasemia, hiponatremia, hipomagnesemia, hiperuricemia (puede precipitar crisis de gota) e hiperglucemia.',
      'Administrar en horas de la mañana para prevenir nicturia e interrupción del sueño.'
    ],
    monitoringAndSideEffects: [
      'Ionograma sérico basal y a las 2-4 semanas de inicio (potasio, sodio, magnesio).',
      'Ácido úrico en sangre y glucemia en ayunas.',
      'Función renal (BUN, creatinina sérica).'
    ],
    evidenceAndSources: [
      {
        title: 'ALLHAT Collaborative Research Group Findings',
        source: 'JAMA',
        year: '2022 Update',
        summary: 'Confirmó que los diuréticos tiazídicos son insuperables en la prevención de eventos cardiovasculares mayores por dólar invertido.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar de 12.5 - 25 mg diarios.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Ineficaz como monoterapia diurética; considerar diuréticos de asa (furosemida).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'caution',
      statusLabel: 'Evitar en Preeclampsia y Gestación',
      summary: 'Puede causar hipovolemia materna, reducción de la perfusión uteroplacentaria e hiponatremia/trombocitopenia neonatal. No utilizar en preeclampsia.',
      clinicalAlternative: 'Labetalol, Nifedipino o Metildopa.',
      fetalRisks: ['Hipoperfusión placentaria', 'Trombocitopenia neonatal']
    }
  },
  {
    id: 'atorvastatina',
    name: 'Atorvastatina',
    commercialNames: ['Lipitor', 'Atorlip', 'Cardyl', 'Torvast'],
    category: 'Cardiovascular',
    atcCode: 'C10AA05',
    therapeuticClass: 'Inhibidor de la HMG-CoA Reductasa · Estatina de Alta Intensidad',
    badgeText: 'Cardiovascular · Prevención Cardiovascular',
    shortDescription: 'Inhibidor competitivo y reversible de la HMG-CoA reductasa. Reduce el colesterol LDL entre un 30% y más del 50%, estabiliza la placa de ateroma y reduce la morbimortalidad cardiovascular.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'atorv-comp-20',
        name: 'Comprimidos Recubiertos 20 mg',
        amountMg: 20,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'atorv-comp-40',
        name: 'Comprimidos Recubiertos 40 mg',
        amountMg: 40,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'atorv-comp-80',
        name: 'Comprimidos Recubiertos 80 mg (Alta Intensidad)',
        amountMg: 80,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'atorv-ind-prev-secundaria',
        name: 'Prevención Secundaria / Síndrome Coronario Agudo (Alta Intensidad)',
        fixedAdultDoseMg: 80,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 80,
        description: '80 mg una vez al día (o 40 mg si intolerancia) independientemente de los niveles basales de lípidos para estabilización de placa.'
      },
      {
        id: 'atorv-ind-dislipidemia',
        name: 'Hipercolesterolemia / Prevención Primaria Cardiovascular',
        fixedAdultDoseMg: 20,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 80,
        maxSingleDoseMg: 80,
        description: '10 a 20 mg al día por la noche; titular según metas de c-LDL del riesgo cardiovascular.'
      }
    ],
    whenToUse: [
      'Pacientes con enfermedad cardiovascular aterosclerótica establecida (infarto, ictus, EAP).',
      'Diabetes mellitus en adultos de 40 a 75 años con riesgo cardiovascular elevado.',
      'Hipercolesterolemia primaria severa con c-LDL ≥ 190 mg/dL.'
    ],
    pearlsAndPitfalls: [
      'A diferencia de simvastatina o pravastatina, atorvastatina tiene una vida media prolongada (14 horas) y metabolitos activos (20-30 horas), por lo que puede tomarse a CUALQUIER hora del día.',
      'Sustrato mayor de CYP3A4: precaución con inhibidores potentes (claritromicina, azoles, inhibidores de proteasa) que incrementan el riesgo de miopatía.',
      'Riesgo infrecuente de miopatía y rabdomiólisis (<0.1%): advertir sobre dolores musculares inexplicables o coluria.'
    ],
    monitoringAndSideEffects: [
      'Perfil lipídico a las 4-12 semanas tras inicio o ajuste.',
      'Transaminasas hepáticas basales (suspender si ALT/AST > 3 veces el límite superior normal).',
      'Creatina quinasa (CK) ante mialgias intensas o debilidad muscular.'
    ],
    evidenceAndSources: [
      {
        title: 'AHA/ACC Guideline on the Management of Blood Cholesterol',
        source: 'Circulation',
        year: '2023',
        summary: 'Recomienda estatinas de alta intensidad (atorvastatina 40-80 mg) en todos los pacientes con SCA para reducir eventos mayores.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis en insuficiencia renal; excreción biliar preferente.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'X',
      status: 'contraindicated',
      statusLabel: 'Contraindicado Absoluto en Gestación y Lactancia',
      summary: 'El colesterol es un precursor esencial en el desarrollo embrionario y esteroidogénesis fetal. El bloqueo de la síntesis de colesterol puede causar anomalías congénitas esqueléticas y del SNC.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Secuestradores de ácidos biliares (Colesevelam) si el tratamiento hipolipemiante es estrictamente necesario.',
      fetalRisks: ['Malformaciones esqueléticas', 'Anomalías del SNC', 'Aborto espontáneo']
    }
  },
  {
    id: 'enoxaparina',
    name: 'Enoxaparina',
    commercialNames: ['Clexane', 'Lovenox', 'Enoxaparin Hospira', 'Dilutol'],
    category: 'Cardiovascular',
    atcCode: 'B01AB05',
    awareCategory: 'Access',
    therapeuticClass: 'Heparina de Bajo Peso Molecular (HBPM) · Anticoagulante',
    badgeText: 'Anticoagulante · Anti-Factor Xa',
    shortDescription: 'HBPM con alta actividad anti-factor Xa y menor efecto sobre trombina. Alta biodisponibilidad y respuesta anticoagulante predecible sin requerir monitorización rutinaria.',
    availableRoutes: ['sc', 'iv'],
    concentrations: [
      {
        id: 'enoxa-jeringa-40',
        name: 'Jeringa Prellenada Subcutánea 40 mg (0.4 mL / 4000 UI Anti-Xa)',
        amountMg: 40,
        volumeMl: 0.4,
        form: 'vial',
        unit: 'mL',
        notes: 'Dosis estándar profiláctica quirúrgica y médica'
      },
      {
        id: 'enoxa-jeringa-60',
        name: 'Jeringa Prellenada Subcutánea 60 mg (0.6 mL / 6000 UI Anti-Xa)',
        amountMg: 60,
        volumeMl: 0.6,
        form: 'vial',
        unit: 'mL'
      },
      {
        id: 'enoxa-jeringa-80',
        name: 'Jeringa Prellenada Subcutánea 80 mg (0.8 mL / 8000 UI Anti-Xa)',
        amountMg: 80,
        volumeMl: 0.8,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'enoxa-ind-profilaxis-adulto',
        name: 'Tromboprofilaxis en Pacientes Médicos u Ortopédicos',
        fixedAdultDoseMg: 40,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-14 días (hasta deambulación)',
        maxDailyDoseMg: 40,
        maxSingleDoseMg: 40,
        description: '40 mg (4000 UI) SC una vez al día (o 20-30 mg c/24h si alto riesgo de sangrado o peso bajo).'
      },
      {
        id: 'enoxa-ind-tratamiento-tvp',
        name: 'Tratamiento de TVP / TEP / SCA en Adultos',
        recommendedDoseMgPerKgPerDay: 2,
        minDoseMgPerKgPerDay: 2,
        maxDoseMgPerKgPerDay: 2,
        fixedAdultDoseMg: 80,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Mínimo 5 días hasta puente a ACO oral',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 100,
        isDosePerKgPerDose: true,
        description: '1 mg/kg (100 UI/kg) SC cada 12 horas (o 1.5 mg/kg SC una vez al día en TVP no complicada).'
      },
      {
        id: 'enoxa-ind-peds',
        name: 'Tratamiento Tromboembólico Pediátrico (>2 meses)',
        recommendedDoseMgPerKgPerDay: 2,
        minDoseMgPerKgPerDay: 2,
        maxDoseMgPerKgPerDay: 3,
        fixedAdultDoseMg: 40,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Según resolución del trombo',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 50,
        isDosePerKgPerDose: true,
        description: '1 mg/kg cada 12 horas SC (en lactantes <2 meses: 1.5 mg/kg c/12h). Monitorizar niveles de anti-Xa pico a las 4 horas (diana: 0.5-1.0 UI/mL).'
      }
    ],
    whenToUse: [
      'Profilaxis de tromboembolismo venoso en pacientes quirúrgicos o encamados con patología médica aguda.',
      'Tratamiento de trombosis venosa profunda (TVP) y tromboembolismo pulmonar (TEP).',
      'Síndrome coronario agudo sin elevación del segmento ST (SCASEST) e IAMCEST.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Punción Lumbar / Anestesia Neuroaxial!: Riesgo de hematoma epidural/espinal y parálisis permanente. Suspender mínimo 12h antes de la punción para dosis profiláctica y 24h para dosis terapéutica.',
      'Aclaramiento renal dependiente: acumulación tóxica y hemorragia en falla renal severa (ClCr < 30 mL/min). Requiere reducción del 50% de la dosis terapéutica a 1 mg/kg cada 24 horas.',
      'Menor incidencia de trombocitopenia inducida por heparina (TIH) que la heparina no fraccionada, pero no nula.'
    ],
    monitoringAndSideEffects: [
      'Recuento de plaquetas basales y a los 5-7 días para despistaje de TIH.',
      'Signos de hemorragia activa o caída inexplicada de hematocrito.',
      'Función renal (ajuste obligatorio si ClCr < 30 mL/min).'
    ],
    evidenceAndSources: [
      {
        title: 'CHEST Guideline and Expert Panel Report: Antithrombotic Therapy',
        source: 'CHEST Journal',
        year: '2023',
        summary: 'La HBPM es superior a la heparina no fraccionada en eficacia, seguridad y comodidad posológica en la mayoría de indicaciones clínicas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis estándar según indicación.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min',
        adjustmentText: 'Tratamiento: 1 mg/kg una vez al día (cada 24 horas). Profilaxis: 20 mg cada 24 horas.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Anticoagulante de Elección en Gestación',
      summary: 'No cruza la barrera placentaria ni se excreta en la leche materna. Es el fármaco de primera línea para profilaxis y tratamiento de eventos tromboembólicos en el embarazo.',
      clinicalAlternative: 'Fármaco de elección preferente.'
    }
  },
  {
    id: 'aspirina',
    name: 'Ácido Acetilsalicílico',
    commercialNames: ['Aspirina', 'Cardioaspirina', 'Ecotrin', 'Asaprol'],
    category: 'Cardiovascular',
    atcCode: 'B01AC06',
    therapeuticClass: 'Antiagregante Plaquetario · Inhibidor Irreversible COX-1',
    badgeText: 'Cardiovascular · Antiagregante',
    shortDescription: 'Inhibidor irreversible de la ciclooxigenasa-1 (COX-1) que bloquea la síntesis de tromboxano A2 durante toda la vida media de la plaqueta (7-10 días).',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'aas-comp-81',
        name: 'Comprimidos Recubiertos 81 mg (Dosis Pediátrica / Cardioprotectora)',
        amountMg: 81,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'aas-comp-100',
        name: 'Comprimidos con Cubierta Entérica 100 mg (Cardioaspirina)',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'aas-comp-500',
        name: 'Tabletas 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'aas-ind-cardioproteccion',
        name: 'Prevención Secundaria Cardiovascular / Síndrome Coronario',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'De por vida',
        maxDailyDoseMg: 100,
        maxSingleDoseMg: 100,
        description: '75 a 100 mg una vez al día con cubierta entérica.'
      },
      {
        id: 'aas-ind-sca-carga',
        name: 'Dosis de Carga Aguda en Síndrome Coronario Agudo (SCA)',
        fixedAdultDoseMg: 300,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única inicial',
        maxDailyDoseMg: 300,
        maxSingleDoseMg: 300,
        description: '162 a 325 mg masticados (sin cubierta entérica) de inmediato ante sospecha de SCA para absorción bucal rápida.'
      },
      {
        id: 'aas-ind-kawasaki',
        name: 'Enfermedad de Kawasaki Pediátrica',
        recommendedDoseMgPerKgPerDay: 40,
        minDoseMgPerKgPerDay: 30,
        maxDoseMgPerKgPerDay: 50,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 'Hasta 48h afebril, luego 3-5 mg/kg/día',
        maxDailyDoseMg: 2000,
        maxSingleDoseMg: 500,
        description: 'Fase aguda: 30 a 50 mg/kg/día dividido cada 6 horas asociada a gammaglobulina IV. Fase de convalecencia: 3 a 5 mg/kg/día en toma única matutina por 6-8 semanas.'
      },
      {
        id: 'aas-ind-preeclampsia',
        name: 'Profilaxis de Preeclampsia en Gestantes de Alto Riesgo',
        fixedAdultDoseMg: 150,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Desde semana 12-16 hasta semana 36',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 150,
        description: '100 a 150 mg diarios administrados en la noche antes de dormir desde la semana 12 de gestación.'
      }
    ],
    whenToUse: [
      'Prevención secundaria en cardiopatía isquémica, ictus isquémico o enfermedad arterial periférica.',
      'Dosis de carga inmediata ante sospecha de infarto agudo de miocardio.',
      'Profilaxis de preeclampsia en mujeres con factores de riesgo moderado o alto (ACOG/FIGO).',
      'Enfermedad de Kawasaki en niños.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Síndrome de Reye en Pediatría!: Contraindicada estrictamente en niños con infecciones virales (gripe, varicela) por riesgo de encefalopatía hepática aguda letal. La única indicación formal pediátrica es la Enfermedad de Kawasaki.',
      'Hemorragia digestiva: mayor riesgo si se asocia a AINEs, anticoagulantes o corticoides.',
      'Triada de Samter (Widal): Asma, poliposis nasal e intolerancia severa a aspirina.'
    ],
    monitoringAndSideEffects: [
      'Síntomas digestivos (dispepsia, pirosis, hematoquecia, melena).',
      'Hemograma periódico para detectar anemia microcítica por microsangrado oculto.',
      'Función renal y tensión arterial.'
    ],
    evidenceAndSources: [
      {
        title: 'ASPREE and ARRIVE Clinical Trials on Aspirin',
        source: 'New England Journal of Medicine & Lancet',
        year: '2023',
        summary: 'Desaconsejan la aspirina en prevención primaria en ancianos sin enfermedad cardiovascular establecida debido al riesgo elevado de sangrado digestivo e intracraneal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 30 mL/min',
        adjustmentText: 'Dosis estándar antiagregante.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 10 mL/min',
        adjustmentText: 'Evitar o usar con extrema precaución por disfunción plaquetaria urémica.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'safe',
      statusLabel: 'Dosis Bajas (≤150 mg): Segura y Recomendada para Preeclampsia',
      summary: 'Dosis antiagregantes bajas (100-150 mg/día) son seguras y están indicadas desde la semana 12 para prevenir preeclampsia. Dosis analgésicas altas (>500 mg) están contraindicadas en el 3.er trimestre por cierre del conducto arterioso.',
      contraindicatedInTrimester: [3],
      clinicalAlternative: 'Paracetamol para dolor/fiebre; Aspirina 100-150 mg solo para profilaxis de preeclampsia.'
    }
  },
  {
    id: 'clopidogrel',
    name: 'Clopidogrel',
    commercialNames: ['Plavix', 'Iscover', 'Clopilet', 'Noclot'],
    category: 'Cardiovascular',
    atcCode: 'B01AC04',
    therapeuticClass: 'Antiagregante Plaquetario · Antagonista del Receptor P2Y12',
    badgeText: 'Cardiovascular · Antiagregante P2Y12',
    shortDescription: 'Profármaco que inhibe irreversiblemente la unión del difosfato de adenosina (ADP) a su receptor plaquetario P2Y12. Base de la doble antiagregación tras angioplastia coronaria.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'clopi-comp-75',
        name: 'Comprimidos Recubiertos 75 mg',
        amountMg: 75,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'clopi-comp-300',
        name: 'Comprimidos Recubiertos 300 mg (Dosis de Carga)',
        amountMg: 300,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'clopi-ind-mantenimiento',
        name: 'Mantenimiento Antiagregante / Doble Antiagregación (DAPT)',
        fixedAdultDoseMg: 75,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '12 meses post-SCA o indefinido en monoterapia',
        maxDailyDoseMg: 75,
        maxSingleDoseMg: 75,
        description: '75 mg una vez al día con o sin alimentos.'
      },
      {
        id: 'clopi-ind-carga-sca',
        name: 'Dosis de Carga en Síndrome Coronario Agudo / Angioplastia',
        fixedAdultDoseMg: 300,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Dosis única inicial',
        maxDailyDoseMg: 600,
        maxSingleDoseMg: 600,
        description: '300 mg de carga inicial (o 600 mg antes de intervención coronaria percutánea inmediata).'
      }
    ],
    whenToUse: [
      'Doble antiagregación plaquetaria con aspirina tras colocación de stent coronario o SCA.',
      'Monoterapia en pacientes con intolerancia o alergia comprobada a la aspirina.',
      'Prevención secundaria de ictus isquémico aterotrombótico o AIT.'
    ],
    pearlsAndPitfalls: [
      'Interacción crítica con Omeprazol / Esomeprazol: Inhiben la enzima hepática CYP2C19 necesaria para transformar el clopidogrel en su metabolito activo, disminuyendo la protección antiagregante. Emplear Pantoprazol si se requiere IBP.',
      'Resistencia a clopidogrel en metabolizadores lentos de CYP2C19 (*2, *3).',
      'Suspender 5 a 7 días antes de cirugía electiva mayor para recuperar hemostasia.'
    ],
    monitoringAndSideEffects: [
      'Signos de sangrado espontáneo (epistaxis, hematomas, hemorragia gastrointestinal).',
      'Hemograma para descartar púrpura trombocitopénica trombótica (PTT), una complicación rara pero grave.',
      'Genotipo CYP2C19 en fracaso terapéutico o trombosis temprana de stent.'
    ],
    evidenceAndSources: [
      {
        title: 'ESC Guidelines for the management of acute coronary syndromes',
        source: 'European Heart Journal',
        year: '2023',
        summary: 'Recomienda DAPT con inhibidores P2Y12 por 12 meses tras SCA con stent coronario.'
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
      statusLabel: 'Usar con Precaución si está Indicado',
      summary: 'Datos limitados en gestantes. Utilizar tras angioplastia coronaria o stent cuando el beneficio materno justifique el riesgo hemorrágico.',
      clinicalAlternative: 'Aspirina a dosis bajas.'
    }
  },
  {
    id: 'digoxina',
    name: 'Digoxina',
    commercialNames: ['Lanoxin', 'Digoxin', 'Mapluxin'],
    category: 'Cardiovascular',
    atcCode: 'C01AA05',
    therapeuticClass: 'Glucósido Cardíaco Inotrópico y Cronotrópico Negativo',
    badgeText: 'Cardiovascular · Estrecho Margen',
    shortDescription: 'Inhibidor selectivo de la bomba Na+/K+ ATPasa miocárdica. Incrementa contractilidad cardíaca (inotropismo positivo) y disminuye conducción en el nodo AV (cronotropismo negativo).',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'digo-comp-025',
        name: 'Comprimidos Ranurados 0.25 mg (250 mcg)',
        amountMg: 0.25,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'digo-elixir-005',
        name: 'Elixir Pediátrico Oral 0.05 mg / mL (50 mcg/mL)',
        amountMg: 0.05,
        volumeMl: 1,
        form: 'drops',
        unit: 'mL',
        standardBottleMl: 60
      },
      {
        id: 'digo-amp-05',
        name: 'Ampolla Inyectable IV 0.5 mg / 2 mL (0.25 mg/mL)',
        amountMg: 0.5,
        volumeMl: 2,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'digo-ind-fa-adulto',
        name: 'Control de Frecuencia en Fibrilación Auricular / Falla Cardíaca',
        fixedAdultDoseMg: 0.125,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 'Crónico',
        maxDailyDoseMg: 0.25,
        maxSingleDoseMg: 0.25,
        description: 'Dosis habitual de mantenimiento: 0.125 a 0.25 mg al día (en ancianos o ClCr <50 mL/min: 0.0625 a 0.125 mg/día).'
      },
      {
        id: 'digo-ind-peds',
        name: 'Insuficiencia Cardíaca Congénita Pediátrica',
        recommendedDoseMgPerKgPerDay: 0.01,
        minDoseMgPerKgPerDay: 0.008,
        maxDoseMgPerKgPerDay: 0.012,
        fixedAdultDoseMg: 0.125,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 'Crónico',
        maxDailyDoseMg: 0.25,
        maxSingleDoseMg: 0.125,
        description: 'Dosis de mantenimiento: 8 a 10 mcg/kg/día dividido cada 12 horas.'
      }
    ],
    whenToUse: [
      'Control de respuesta ventricular en fibrilación auricular en pacientes sedentarios o con falla cardíaca congestiva.',
      'Alivio sintomático en insuficiencia cardíaca con fracción de eyección reducida persistente a pesar de tratamiento médico óptimo.'
    ],
    pearlsAndPitfalls: [
      '¡Rango terapéutico muy estrecho!: La digoxinemia diana en IC es de 0.5 a 0.9 ng/mL (evitar niveles >1.0 ng/mL por incremento de mortalidad).',
      'La hipopotasemia y la hipomagnesemia potencian la toxicidad digitálica: monitorizar electrolitos si se asocia a diuréticos de asa.',
      'Signos de intoxicación digitálica: Náuseas, vómitos, anorexia, visión amarilla/verde (xantopsia), bradicardia sinusal y extrasístoles ventriculares en bigeminismo. Antídoto: Anticuerpos Fab específicos (DigiFab).'
    ],
    monitoringAndSideEffects: [
      'Digoxinemia sérica medida al menos 6 a 8 horas tras la última dosis.',
      'Potasio, magnesio y creatinina sérica.',
      'Electrocardiograma (cubeta digitálica de efecto; bloqueo AV o taquiarritmias por toxicidad).'
    ],
    evidenceAndSources: [
      {
        title: 'DIG Trial Post-Hoc Analysis on Serum Digoxin Concentration',
        source: 'JAMA',
        year: '2023',
        summary: 'Concentraciones plasmáticas entre 0.5 y 0.8 ng/mL reducen hospitalizaciones sin aumentar mortalidad.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: '0.125 a 0.25 mg al día.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '10 - 50 mL/min',
        adjustmentText: '0.0625 a 0.125 mg al día (o 0.125 mg cada 48 horas).',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '0.0625 mg cada 48 a 72 horas; no se dializa eficientemente.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible / Seguro con Monitorización Estricta',
      summary: 'Largo historial de uso sin evidencia de teratogénesis. Fármaco de elección para taquiarritmias supraventriculares fetales e insuficiencia cardíaca materna.',
      clinicalAlternative: 'Fármaco de elección con monitorización de niveles plasmáticos.'
    }
  }
];
