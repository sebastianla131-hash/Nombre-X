import { Medication } from '../types';

export const MEDSCAPE_ANTIINFECTIVES: Medication[] = [
  {
    id: 'meropenem',
    name: 'Meropenem',
    commercialNames: ['Merrem', 'Mepem', 'Meronem'],
    category: 'Antibióticos',
    atcCode: 'J01DH02',
    awareCategory: 'Watch',
    therapeuticClass: 'Carbapenémico de Amplio Espectro · AWaRe Watch',
    badgeText: 'AWaRe Watch · Reserva Hospitalaria',
    shortDescription: 'Carbapenémico de amplio espectro para infecciones nosocomiales graves, sepsis intraabdominal, neutropenia febril y meningitis por bacilos Gram negativos multirresistentes.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'mero-vial-500',
        name: 'Polvo para Solución Inyectable IV 500 mg Frasco Vial',
        amountMg: 500,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 10 mL de Agua Estéril (50 mg/mL)'
      },
      {
        id: 'mero-vial-1000',
        name: 'Polvo para Solución Inyectable IV 1 g (1000 mg) Frasco Vial',
        amountMg: 1000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 20 mL de Agua Estéril (50 mg/mL)'
      }
    ],
    indications: [
      {
        id: 'mero-ind-sepsis-peds',
        name: 'Sepsis Grave / Infección Intraabdominal Pediátrica',
        recommendedDoseMgPerKgPerDay: 60,
        minDoseMgPerKgPerDay: 60,
        maxDoseMgPerKgPerDay: 60,
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        description: '20 mg/kg cada 8 horas en infusión IV de 30 min o infusión extendida de 3 horas.'
      },
      {
        id: 'mero-ind-meningitis-peds',
        name: 'Meningitis Bacteriana Pediátrica / Pseudomonas',
        recommendedDoseMgPerKgPerDay: 120,
        minDoseMgPerKgPerDay: 120,
        maxDoseMgPerKgPerDay: 120,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '14-21 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '40 mg/kg cada 8 horas (máximo 2 g por toma).'
      },
      {
        id: 'mero-ind-adulto',
        name: 'Adultos: Sepsis / Neutropenia Febril / Neumonía Nosocomial',
        fixedAdultDoseMg: 1000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 2000,
        description: '1 g cada 8 horas en infusión extendida de 3 horas para optimizar T > CIM.'
      }
    ],
    whenToUse: [
      'Infecciones nosocomiales graves por enterobacterias productoras de BLEE.',
      'Sepsis de foco abdominal o biliar complicada.',
      'Meningitis bacteriana aguda por bacilos Gram negativos resistentes o Pseudomonas aeruginosa.'
    ],
    pearlsAndPitfalls: [
      'Menor potencial epileptógeno que imipenem/cilastatina; de elección en pacientes neurocríticos.',
      'La infusión extendida en 3 horas mejora significativamente los desenlaces clínicos en bacterias con CIM limítrofe.',
      'Interacción crítica: Reduce drásticamente las concentraciones plasmáticas de ácido valproico, precipitando crisis convulsivas.'
    ],
    monitoringAndSideEffects: [
      'Monitoreo de función renal (creatinina sérica y aclaramiento).',
      'Riesgo de diarrea asociada a Clostridioides difficile.',
      'Erupción cutánea, cefalea, náuseas y elevación transitoria de transaminasas.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections',
        source: 'Clinical Infectious Diseases',
        year: '2023',
        summary: 'Recomienda meropenem como terapia de primera línea para enterobacterias productoras de BLEE.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: '100% de la dosis estándar cada 8 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '26 - 50 mL/min',
        adjustmentText: '1000 mg cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 25 mL/min',
        adjustmentText: '500 mg cada 12 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '500 mg cada 24 horas; administrar dosis post-hemodiálisis.',
        cautionLevel: 'severe'
      }
    ],
    reconstitutionNotes: 'Diluir cada ampolla en 50-100 mL de Solución Salina 0.9% o Dextrosa 5%. Infundir en 30 minutos a 3 horas.',
    storageNotes: 'Conservar el polvo por debajo de 25°C. La solución reconstituida en SSN es estable 3 horas a temperatura ambiente.',
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Seguro si está indicado',
      summary: 'Estudios en animales no han demostrado toxicidad fetal. Utilizar en sepsis o infecciones graves donde los beneficios superen los riesgos.',
      clinicalAlternative: 'Betalactámicos estándar si el patógeno es sensible.'
    }
  },
  {
    id: 'piperacilina-tazobactam',
    name: 'Piperacilina / Tazobactam',
    commercialNames: ['Tazocin', 'Zosyn', 'Pipraks', 'Tazopen'],
    category: 'Antibióticos',
    atcCode: 'J01CR05',
    awareCategory: 'Watch',
    therapeuticClass: 'Penicilina Antipseudomónica + Inhibidor de Betalactamasa · AWaRe Watch',
    badgeText: 'AWaRe Watch · Antipseudomónico',
    shortDescription: 'Antibiótico bactericida de muy amplio espectro activo frente a Pseudomonas aeruginosa, Enterobacterias y anaerobios como Bacteroides fragilis.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'pip-tazo-vial-45',
        name: 'Polvo para Solución Inyectable 4.5 g (Piperacilina 4 g + Tazobactam 0.5 g)',
        amountMg: 4500,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 20 mL de Solución Fisiológica o Agua Inyectable'
      }
    ],
    indications: [
      {
        id: 'pip-ind-ped',
        name: 'Infección Intraabdominal / Sepsis Pediátrica (>2 meses)',
        recommendedDoseMgPerKgPerDay: 300,
        minDoseMgPerKgPerDay: 240,
        maxDoseMgPerKgPerDay: 300,
        fixedAdultDoseMg: 4500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7-14 días',
        maxDailyDoseMg: 16000,
        maxSingleDoseMg: 4000,
        description: 'Dosificado en base al componente de piperacilina: 75-100 mg/kg de piperacilina cada 6-8 horas.'
      },
      {
        id: 'pip-ind-adulto',
        name: 'Adultos: Neumonía Nosocomial / Sepsis / Pseudomonas',
        fixedAdultDoseMg: 4500,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '7-14 días',
        maxDailyDoseMg: 18000,
        maxSingleDoseMg: 4500,
        description: '4.5 g cada 6 horas (o cada 8 horas en infusión extendida de 4 horas).'
      }
    ],
    whenToUse: [
      'Neumonía intrahospitalaria o asociada a ventilación mecánica.',
      'Sepsis intraabdominal complicada polimicrobiana.',
      'Neutropenia febril de alto riesgo.'
    ],
    pearlsAndPitfalls: [
      'Sinérgico con vancomicina en nefrotoxicidad: evitar la combinación concomitante si existen alternativas por alto riesgo de lesión renal aguda.',
      'No cubre SAMR (Staphylococcus aureus resistente a meticilina).',
      'Aporte significativo de sodio: cada vial contiene aproximadamente 9.4 mmol (216 mg) de sodio.'
    ],
    monitoringAndSideEffects: [
      'Función renal (BUN, creatinina) diariamente en pacientes críticos.',
      'Hemograma (leucopenia, neutropenia en tratamientos prolongados >10 días).',
      'Electrolitos séricos (potasio y sodio).'
    ],
    evidenceAndSources: [
      {
        title: 'Extended-infusion beta-lactams in critical care',
        source: 'Lancet Infectious Diseases',
        year: '2023',
        summary: 'La infusión extendida de 4 horas mejora la sobrevida en pacientes con shock séptico.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: '4.5 g cada 6 horas (dosis completa).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '20 - 50 mL/min',
        adjustmentText: '3.375 g cada 6 horas o 4.5 g cada 8 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 20 mL/min',
        adjustmentText: '2.25 g cada 6 horas o 4.5 g cada 12 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: 'Hemodiálisis',
        adjustmentText: '2.25 g cada 8 horas + 0.75 g suplementario tras cada sesión de diálisis.',
        cautionLevel: 'severe'
      }
    ],
    reconstitutionNotes: 'Reconstituir 4.5 g en 20 mL y diluir en 100 mL de SSN 0.9% o DAD 5%. Infundir en 30 min (estándar) o 4 horas (extendida).',
    storageNotes: 'Conservar frasco liofilizado por debajo de 25°C. No congelar.',
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Precaución',
      summary: 'Pasa a la placenta. Generalmente seguro si está indicado para infecciones maternas graves.',
      clinicalAlternative: 'Ampicilina/Sulbactam para infecciones de menor espectro.'
    }
  },
  {
    id: 'cefepima',
    name: 'Cefepima',
    commercialNames: ['Maxipime', 'Cefepim', 'Cefepime Hospira'],
    category: 'Antibióticos',
    atcCode: 'J01DE01',
    awareCategory: 'Watch',
    therapeuticClass: 'Cefalosporina de 4.ª Generación · AWaRe Watch',
    badgeText: 'AWaRe Watch · Antipseudomónico',
    shortDescription: 'Cefalosporina de amplio espectro activa frente a Pseudomonas aeruginosa, Enterobacterias y Streptococcus pneumoniae. Alta penetración a SNC.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'cefep-vial-1g',
        name: 'Vial Inyectable IV/IM 1 g (1000 mg)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 10 mL de Solución Salina'
      },
      {
        id: 'cefep-vial-2g',
        name: 'Vial Inyectable IV/IM 2 g (2000 mg)',
        amountMg: 2000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 20 mL de Solución Salina'
      }
    ],
    indications: [
      {
        id: 'cefep-ind-peds',
        name: 'Neutropenia Febril / Infección Severa Pediátrica (>2 meses)',
        recommendedDoseMgPerKgPerDay: 150,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 150,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '50 mg/kg cada 8 horas (o cada 12 horas en infecciones urinarias moderadas).'
      },
      {
        id: 'cefep-ind-adulto',
        name: 'Adultos: Neumonía Nosocomial / Neutropenia Febril / Sepsis',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '2 g cada 8 horas en infusión IV de 30 min o infusión extendida de 3 horas.'
      }
    ],
    whenToUse: [
      'Tratamiento empírico de neutropenia febril.',
      'Neumonía intrahospitalaria por Gram negativos multirresistentes.',
      'Infecciones del tracto urinario complicadas o pielonefritis por Pseudomonas.'
    ],
    pearlsAndPitfalls: [
      'Alerta Blackbox / FDA: Riesgo de neurotoxicidad severa (encefalopatía, mioclonías, estatus epiléptico no convulsivo) si no se ajusta la dosis a la función renal.',
      'Resistente a la hidrólisis por betalactamasas cromosómicas tipo AmpC.',
      'Sin actividad frente a enterococos, SAMR ni anaerobios estrictos.'
    ],
    monitoringAndSideEffects: [
      'Estado neurológico y nivel de conciencia (alerta ante letargia, confusión o mioclonías).',
      'Función renal (creatinina, aclaramiento estimado).',
      'Prueba de Coombs directa positiva (ocasionalmente con hemólisis).'
    ],
    evidenceAndSources: [
      {
        title: 'Neurotoxicity Associated with Cefepime Therapy',
        source: 'Pharmacotherapy',
        year: '2022',
        summary: 'Encefalopatía inducida por cefepima es reversible al suspender el fármaco o corregir la sobredosis renal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: '2 g cada 8 horas (dosis habitual).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 50 mL/min',
        adjustmentText: '2 g cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '11 - 29 mL/min',
        adjustmentText: '1 g cada 12-24 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 11 mL/min o Hemodiálisis',
        adjustmentText: '500 mg - 1 g cada 24 horas; administrar tras diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Indicación Precisa',
      summary: 'Cruza la placenta pero no se ha demostrado teratogénesis. Reservar para infecciones hospitalarias maternas.',
      clinicalAlternative: 'Ceftriaxona para patógenos comunitarios sensibles.'
    }
  },
  {
    id: 'cefotaxima',
    name: 'Cefotaxima',
    commercialNames: ['Claforan', 'Cefotax', 'Fotexina'],
    category: 'Antibióticos',
    atcCode: 'J01DD01',
    awareCategory: 'Watch',
    therapeuticClass: 'Cefalosporina de 3.ª Generación · AWaRe Watch',
    badgeText: 'AWaRe Watch · Elección Neonatal',
    shortDescription: 'Cefalosporina parenteral de 3ra generación de primera elección en neonatos e infantes, ya que NO desplaza la bilirrubina de la albúmina (evita kernícterus).',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'cefotax-vial-1g',
        name: 'Vial Inyectable 1 g (1000 mg)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 10 mL de Solución Fisiológica'
      }
    ],
    indications: [
      {
        id: 'cefotax-ind-neo',
        name: 'Sepsis Neonatal / Sospecha de Meningitis Neonatal',
        recommendedDoseMgPerKgPerDay: 150,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 200,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '10-21 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '100 a 150 mg/kg/día cada 8 a 12 horas en neonatos (hasta 200 mg/kg/día cada 6h en meningitis bacteriana).'
      },
      {
        id: 'cefotax-ind-peds',
        name: 'Infección Sistémica Pediátrica',
        recommendedDoseMgPerKgPerDay: 150,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 200,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 8000,
        maxSingleDoseMg: 2000,
        description: '100-200 mg/kg/día dividido cada 6-8 horas.'
      },
      {
        id: 'cefotax-ind-adulto',
        name: 'Adultos: Peritonitis Bacteriana Espontánea (PBE) / Neumonía',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '5-10 días',
        maxDailyDoseMg: 8000,
        maxSingleDoseMg: 2000,
        description: '2 g cada 8 horas IV lenta en 30 minutos.'
      }
    ],
    whenToUse: [
      'Sepsis y meningitis en recién nacidos (preferida sobre ceftriaxona).',
      'Peritonitis bacteriana espontánea en pacientes con cirrosis y ascitis.',
      'Neumonía adquirida en la comunidad grave o gonococia diseminada.'
    ],
    pearlsAndPitfalls: [
      'Fármaco de elección en neonatos con ictericia o que reciben infusiones con calcio (ceftriaxona precipita con sales de calcio en pulmón y riñón).',
      'A diferencia de ceftriaxona que es de excreción biliar/renal, cefotaxima se metaboliza a desacetilcefotaxima y se elimina principalmente por riñón.',
      'Requiere administración más frecuente (cada 6-8h) debido a su menor vida media plasmática (1 hora).'
    ],
    monitoringAndSideEffects: [
      'Recuento leucocitario y fórmula diferencial.',
      'Función renal en neonatos y prematuros.',
      'Flebitis en sitio de infusión si se administra muy rápido.'
    ],
    evidenceAndSources: [
      {
        title: 'AAP Red Book: Neonatal Sepsis Treatment Guidelines',
        source: 'American Academy of Pediatrics',
        year: '2024',
        summary: 'Cefotaxima asociada a ampicilina es el régimen empírico preferido en sospecha de meningitis neonatal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: 'Dosis estándar cada 6-8 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '20 - 50 mL/min',
        adjustmentText: 'Dosis estándar cada 8-12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 20 mL/min',
        adjustmentText: 'Reducir la dosis al 50% cada 12-24 horas.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Seguro en Gestación',
      summary: 'Excelente perfil de bioseguridad en todos los trimestres del embarazo. Cruza la placenta sin efectos adversos fetales.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'doxiciclina',
    name: 'Doxiciclina',
    commercialNames: ['Vibramicina', 'Doxiclat', 'Doxypen', 'Supramycina'],
    category: 'Antibióticos',
    atcCode: 'J01AA02',
    awareCategory: 'Access',
    therapeuticClass: 'Tetraciclina de 2.ª Generación · AWaRe Acceso',
    badgeText: 'AWaRe Acceso · Rickettsias / Atípicos',
    shortDescription: 'Antibiótico bacteriostático activo frente a Chlamydia, Mycoplasma, Rickettsia, Borrelia burgdorferi (Lyme), Brucella y Plasmodium.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'doxi-comp-100',
        name: 'Cápsulas / Tabletas 100 mg',
        amountMg: 100,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido',
        notes: 'Tomar con abundante agua (mínimo 200 mL) y en posición erguida'
      }
    ],
    indications: [
      {
        id: 'doxi-ind-adulto',
        name: 'Adultos: Neumonía Atípica / ETS (Chlamydia) / Rickettsiosis',
        fixedAdultDoseMg: 100,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '7-14 días',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 100,
        description: '100 mg cada 12 horas por vía oral.'
      },
      {
        id: 'doxi-ind-peds',
        name: 'Pediátrico (>8 años o Rickettsiosis a cualquier edad):',
        recommendedDoseMgPerKgPerDay: 4,
        minDoseMgPerKgPerDay: 2.2,
        maxDoseMgPerKgPerDay: 4.4,
        fixedAdultDoseMg: 100,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5-10 días',
        maxDailyDoseMg: 200,
        maxSingleDoseMg: 100,
        description: '2.2 a 4.4 mg/kg/día dividido cada 12 horas (máximo 100 mg/dosis).'
      }
    ],
    whenToUse: [
      'Infecciones por Rickettsias (Fiebre manchada de las Montañas Rocosas, Tifus) en niños y adultos.',
      'Enfermedad de Lyme temprana (eritema migrans).',
      'Uretritis / cervicitis no gonocócica por Chlamydia trachomatis o Mycoplasma genitalium.'
    ],
    pearlsAndPitfalls: [
      '¡Regla de Oro CDC!: En sospecha de Rickettsiosis o fiebre manchada, la doxiciclina es el fármaco de elección a CUALQUIER edad (incluyendo niños <8 años). El beneficio supera con creces el riesgo dental.',
      'Riesgo de esofagitis ulcerativa grave: ingerir con un vaso lleno de agua y no acostarse durante al menos 30 minutos posteriores a la toma.',
      'Fotosensibilidad intensa: advertir sobre el uso de protector solar y evitar exposición a radiación UV.'
    ],
    monitoringAndSideEffects: [
      'Tolerancia gástrica (náuseas, ardor epigástrico). Tomar con alimentos si genera náusea (evitando lácteos).',
      'Quelación con cationes polivalentes: separar al menos 2 horas de antiácidos con calcio, magnesio, aluminio o suplementos de hierro.',
      'Fotosensibilidad cutánea y erupciones eritematosas.'
    ],
    evidenceAndSources: [
      {
        title: 'CDC: Doxycycline Use in Children Under 8 Years of Age',
        source: 'Centers for Disease Control and Prevention',
        year: '2023',
        summary: 'Los ciclos cortos de doxiciclina (<14 días) para rickettsiosis no provocan tinción dental significativa en niños pequeños.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis en insuficiencia renal; se elimina por vía fecal y metabolismo hepático.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en 2.º y 3.er Trimestre',
      summary: 'Riesgo de depósito óseo, tinción dental permanente del esmalte fetal y displasia ósea fetal. Evitar a partir de la semana 16 de gestación, excepto en fiebre manchada potencialmente mortal.',
      contraindicatedInTrimester: [2, 3],
      clinicalAlternative: 'Azitromicina o Amoxicilina para Chlamydia; Ceftriaxona para enfermedad de Lyme en gestantes.',
      fetalRisks: ['Tinción dental permanente marrón/amarilla', 'Inhibición del crecimiento óseo fibular']
    }
  },
  {
    id: 'levofloxacino',
    name: 'Levofloxacino',
    commercialNames: ['Tavanic', 'Elequine', 'Levaquin', 'Levoflox'],
    category: 'Antibióticos',
    atcCode: 'J01MA12',
    awareCategory: 'Watch',
    therapeuticClass: 'Fluoroquinolona Respiratoria de 3.ª Generación · AWaRe Watch',
    badgeText: 'AWaRe Watch · Fluoroquinolona',
    shortDescription: 'Fluoroquinolona respiratoria bactericida con excelente biodisponibilidad oral y potente cobertura sobre Streptococcus pneumoniae, gérmenes atípicos y Gram negativos.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'levo-comp-500',
        name: 'Comprimidos Recubiertos 500 mg',
        amountMg: 500,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'levo-comp-750',
        name: 'Comprimidos Recubiertos 750 mg',
        amountMg: 750,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'levo-iv-500',
        name: 'Solución para Infusión IV 500 mg / 100 mL',
        amountMg: 500,
        volumeMl: 100,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'levo-ind-ncap',
        name: 'Neumonía Adquirida en Comunidad (NAC) con Comorbilidades',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '5-7 días',
        maxDailyDoseMg: 750,
        maxSingleDoseMg: 750,
        description: '500 mg cada 24 horas (o 750 mg cada 24 horas por 5 días en NAC severa).'
      },
      {
        id: 'levo-ind-pielonefritis',
        name: 'Pielonefritis Aguda Complicada / Prostatitis Bacteriana',
        fixedAdultDoseMg: 500,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-14 días',
        maxDailyDoseMg: 750,
        maxSingleDoseMg: 750,
        description: '500 mg cada 24 horas por 7 a 10 días (o hasta 28 días en prostatitis crónica).'
      }
    ],
    whenToUse: [
      'NAC en pacientes alérgicos a betalactámicos o con fracaso terapéutico ambulatorio.',
      'Infecciones del tracto urinario complicadas o prostatitis bacteriana aguda.',
      'Exacerbación aguda de EPOC en pacientes con factores de mal pronóstico.'
    ],
    pearlsAndPitfalls: [
      'Advertencia Blackbox de la FDA: Tendinitis y rotura del tendón de Aquiles, neuropatía periférica irreversible y prolongación del intervalo QTc.',
      'Riesgo de disección y aneurisma aórtico: evitar en adultos mayores con hipertensión mal controlada.',
      'No recomendado en pediatría excepto en situaciones de fibrosis quística o ántrax inhalatorio.'
    ],
    monitoringAndSideEffects: [
      'Electrocardiograma basal y monitoreo de intervalo QTc (cuidado con antiarrítmicos y macrólidos).',
      'Dolor, inflamación o edema en tendón de Aquiles (suspender inmediatamente si aparece dolor).',
      'Glucemia en pacientes diabéticos (riesgo de hipoglucemia severa o hiperglucemia).'
    ],
    evidenceAndSources: [
      {
        title: 'FDA Drug Safety Communication: Fluoroquinolone Boxed Warning',
        source: 'US FDA',
        year: '2023',
        summary: 'Restringe el uso de fluoroquinolonas para sinusitis, bronquitis aguda e ITU no complicadas cuando existan opciones alternativas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: '500 mg cada 24 horas (dosis completa).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '20 - 49 mL/min',
        adjustmentText: 'Dosis inicial de 500 mg, luego 250 mg cada 24 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 20 mL/min o Hemodiálisis',
        adjustmentText: 'Dosis inicial de 500 mg, luego 250 mg cada 48 horas.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Evitar en Gestación y Lactancia',
      summary: 'Artro toxicidad y daño en cartílago de crecimiento evidenciado en modelos animales inmaduros. Usar solo si no existe alternativa disponible.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Betalactámicos (Amoxicilina/Clavulánico, Ceftriaxona) o Macrólidos.',
      fetalRisks: ['Condrotoxicidad y artropatías fetales']
    }
  },
  {
    id: 'aciclovir',
    name: 'Aciclovir',
    commercialNames: ['Zovirax', 'Cicloviral', 'Virovir', 'Aciclovir'],
    category: 'Antibióticos',
    atcCode: 'J05AB01',
    awareCategory: 'Access',
    therapeuticClass: 'Antiviral Análogo de Guanina · Antiherpético',
    badgeText: 'Antiviral · VHS / VVZ',
    shortDescription: 'Antiviral de elección para infecciones por Virus del Herpes Simple (VHS-1, VHS-2) y Virus de la Varicela-Zóster (VVZ).',
    availableRoutes: ['oral', 'iv', 'topica'],
    concentrations: [
      {
        id: 'acicl-susp-200',
        name: 'Suspensión Oral 200 mg / 5 mL',
        amountMg: 200,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 120
      },
      {
        id: 'acicl-comp-400',
        name: 'Comprimidos 400 mg',
        amountMg: 400,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'acicl-comp-800',
        name: 'Comprimidos 800 mg',
        amountMg: 800,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'acicl-vial-250',
        name: 'Polvo para Solución IV 250 mg Frasco Vial',
        amountMg: 250,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'acicl-ind-varicela-peds',
        name: 'Varicela en Niños >2 años / Pacientes con riesgo de complicaciones',
        recommendedDoseMgPerKgPerDay: 80,
        minDoseMgPerKgPerDay: 80,
        maxDoseMgPerKgPerDay: 80,
        fixedAdultDoseMg: 800,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: '5 días',
        maxDailyDoseMg: 3200,
        maxSingleDoseMg: 800,
        description: '20 mg/kg por toma (máximo 800 mg/dosis) 4 veces al día durante 5 días. Iniciar en las primeras 24h del exantema.'
      },
      {
        id: 'acicl-ind-encefalitis-iv',
        name: 'Encefalitis por Herpes Simple Pediátrico y Adultos (IV)',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 30,
        maxDoseMgPerKgPerDay: 60,
        fixedAdultDoseMg: 700,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '14-21 días',
        maxDailyDoseMg: 3000,
        maxSingleDoseMg: 1000,
        isDosePerKgPerDose: true,
        description: 'Pediátrico: 10-20 mg/kg por toma IV cada 8 horas (neonatos 20 mg/kg c/8h). Infundir lentamente en 1 hora con abundante hidratación.'
      },
      {
        id: 'acicl-ind-zoster-adulto',
        name: 'Herpes Zóster Adulto',
        fixedAdultDoseMg: 800,
        frequencyPerDay: 5,
        intervalHours: 4,
        durationDays: '7 días',
        maxDailyDoseMg: 4000,
        maxSingleDoseMg: 800,
        description: '800 mg 5 veces al día (omitiendo la toma nocturna, cada 4 horas despierto) por 7 días.'
      }
    ],
    whenToUse: [
      'Gingivoestomatitis herpética severa y herpes genital primario o recurrente.',
      'Herpes zóster en adultos para reducir dolor agudo y neuralgia posherpética.',
      'Encefalitis herpética o infección neonatal por VHS (urgencia médica IV).'
    ],
    pearlsAndPitfalls: [
      'Nefropatía por precipitación intratubular de cristales de aciclovir: requiere hidratación previa y posterior vigorosa y velocidad de infusión IV mínima de 1 hora.',
      'Biodisponibilidad oral baja (15-30%): en infecciones del SNC o herpes neonatal NUNCA usar la vía oral.',
      'Iniciar el tratamiento dentro de las primeras 72 horas del inicio de las vesículas para máxima eficacia clínica.'
    ],
    monitoringAndSideEffects: [
      'Creatinina sérica y diuresis horaria durante infusión intravenosa.',
      'Neurotoxicidad (temblor, confusión, alucinaciones) especialmente en falla renal.',
      'Náuseas y vómitos leves en administración oral.'
    ],
    evidenceAndSources: [
      {
        title: 'Management of Herpes Simplex Encephalitis in Adults and Children',
        source: 'Infectious Diseases Society of America (IDSA)',
        year: '2023',
        summary: 'Aciclovir parenteral precoz disminuye la mortalidad de más del 70% a menos del 15% en encefalitis herpética.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: 'Dosis completa según indicación.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '25 - 50 mL/min',
        adjustmentText: 'Dosis estándar cada 12 horas (en IV o vía oral).',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 25 mL/min',
        adjustmentText: 'Dosis estándar cada 24 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '50% de la dosis cada 24 horas; administrar dosis adicional post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / De Elección en Embarazo',
      summary: 'Registro internacional con miles de exposiciones demuestra seguridad sin incremento de malformaciones fetales. De elección para prevención de herpes neonatal.',
      clinicalAlternative: 'Fármaco de elección preferido.'
    }
  },
  {
    id: 'fluconazol',
    name: 'Fluconazol',
    commercialNames: ['Diflucan', 'Mutum', 'Baten', 'Fluconazol'],
    category: 'Antibióticos',
    atcCode: 'J02AC01',
    awareCategory: 'Access',
    therapeuticClass: 'Antifúngico Triazólico Sistémico',
    badgeText: 'Antifúngico · Candidiasis / Criptococo',
    shortDescription: 'Antifúngico triazólico de amplio espectro y excelente penetración a SNC. Primera línea para candidiasis mucocutánea, invasiva y meningitis criptocócica.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'fluco-susp-50',
        name: 'Polvo para Suspensión Oral 50 mg / 5 mL',
        amountMg: 50,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 60
      },
      {
        id: 'fluco-cap-150',
        name: 'Cápsulas 150 mg',
        amountMg: 150,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'fluco-cap-200',
        name: 'Cápsulas 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'fluco-iv-200',
        name: 'Solución para Infusión IV 200 mg / 100 mL (2 mg/mL)',
        amountMg: 200,
        volumeMl: 100,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'fluco-ind-cand-peds',
        name: 'Candidiasis Orofaríngea / Sistémica Pediátrica',
        recommendedDoseMgPerKgPerDay: 6,
        minDoseMgPerKgPerDay: 3,
        maxDoseMgPerKgPerDay: 12,
        fixedAdultDoseMg: 200,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '7-14 días',
        maxDailyDoseMg: 400,
        maxSingleDoseMg: 200,
        description: 'Dosis de carga de 6-12 mg/kg el día 1, seguida de 3-6 mg/kg/día cada 24 horas.'
      },
      {
        id: 'fluco-ind-vaginal-adulto',
        name: 'Candidiasis Vulvovaginal Aguda Adulta',
        fixedAdultDoseMg: 150,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '1 dosis única',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 150,
        description: '150 mg vía oral en dosis única.'
      },
      {
        id: 'fluco-ind-candidemia-adulto',
        name: 'Candidemia / Candidiasis Invasiva Adulta',
        fixedAdultDoseMg: 400,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '14 días post hemocultivo negativo',
        maxDailyDoseMg: 800,
        maxSingleDoseMg: 800,
        description: 'Dosis de carga de 800 mg (12 mg/kg), luego 400 mg (6 mg/kg) cada 24 horas IV u oral.'
      }
    ],
    whenToUse: [
      'Candidiasis orofaríngea, esofágica y vulvovaginal.',
      'Candidemia y candidiasis diseminada en pacientes hemodinámicamente estables sin exposición previa a azoles.',
      'Profilaxis y mantenimiento en meningitis criptocócica en pacientes con VIH.'
    ],
    pearlsAndPitfalls: [
      'Candida krusei es intrínsecamente resistente a fluconazol; Candida glabrata presenta resistencia dosis-dependiente.',
      'Potente inhibidor de CYP2C9 y CYP3A4: incrementa significativamente niveles de warfarina, fenitoína y sulfonilureas.',
      'Prolongación del intervalo QTc dosis-dependiente.'
    ],
    monitoringAndSideEffects: [
      'Pruebas de función hepática (AST, ALT, fosfatasa alcalina) en tratamientos prolongados.',
      'Electrocardiograma si se combina con otros fármacos que prolongan el QTc.',
      'Cefalea, náuseas, dolor abdominal y exantema.'
    ],
    evidenceAndSources: [
      {
        title: 'Clinical Practice Guideline for the Management of Candidiasis',
        source: 'IDSA Guidelines',
        year: '2023',
        summary: 'Fluconazol es terapia de transición recomendada tras mejoría con equinocandinas para candidemia susceptible.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: '100% de la dosis recomendada.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '11 - 50 mL/min',
        adjustmentText: 'Administrar 50% de la dosis habitual cada 24 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '50% de la dosis cada 24-48 horas; administrar dosis completa tras sesión de diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Especialmente 1.er Trimestre)',
      summary: 'El uso en el primer trimestre, incluso a dosis bajas o repetidas, se asocia con cardiopatías congénitas (tetralogía de Fallot), hendiduras faciales y aborto espontáneo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Nistatina o Clotrimazol vaginal tópico durante 7 días para candidiasis vulvovaginal.',
      fetalRisks: ['Tetralogía de Fallot', 'Hendidura palatina', 'Micrognatia', 'Aborto espontáneo']
    }
  },
  {
    id: 'oseltamivir',
    name: 'Oseltamivir',
    commercialNames: ['Tamiflu', 'Agripin', 'Flunavir'],
    category: 'Antibióticos',
    atcCode: 'J05AH02',
    awareCategory: 'Access',
    therapeuticClass: 'Antiviral Inhibidor de la Neuraminidasa · Anti-influenza',
    badgeText: 'Antiviral · Influenza A y B',
    shortDescription: 'Inhibidor selectivo de las neuraminidasas del virus de la influenza A y B. Reduce la duración de síntomas y las complicaciones graves si se inicia precozmente.',
    availableRoutes: ['oral'],
    concentrations: [
      {
        id: 'oselta-susp-12',
        name: 'Polvo para Suspensión Oral 12 mg / mL (60 mg / 5 mL)',
        amountMg: 12,
        volumeMl: 1,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 65,
        notes: '60 mg en 5 mL (12 mg/mL)'
      },
      {
        id: 'oselta-cap-75',
        name: 'Cápsulas 75 mg',
        amountMg: 75,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      }
    ],
    indications: [
      {
        id: 'oselta-ind-peds-tx',
        name: 'Tratamiento Influenza Pediátrica (<40 kg):',
        recommendedDoseMgPerKgPerDay: 4,
        minDoseMgPerKgPerDay: 4,
        maxDoseMgPerKgPerDay: 6,
        fixedAdultDoseMg: 75,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5 días',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 75,
        description: 'Dosis ponderal OMS/CDC: <15 kg: 30 mg c/12h; 15-23 kg: 45 mg c/12h; 23-40 kg: 60 mg c/12h; >40 kg: 75 mg c/12h.'
      },
      {
        id: 'oselta-ind-adulto-tx',
        name: 'Tratamiento Influenza Adultos (>40 kg)',
        fixedAdultDoseMg: 75,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '5 días',
        maxDailyDoseMg: 150,
        maxSingleDoseMg: 75,
        description: '75 mg cada 12 horas por vía oral durante 5 días.'
      },
      {
        id: 'oselta-ind-profilaxis',
        name: 'Quimioprofilaxis Post-exposición en Pacientes de Alto Riesgo',
        fixedAdultDoseMg: 75,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '10 días',
        maxDailyDoseMg: 75,
        maxSingleDoseMg: 75,
        description: '75 mg una vez al día por 10 días tras contacto con caso confirmado.'
      }
    ],
    whenToUse: [
      'Infección respiratoria aguda sospechosa o confirmada por Influenza A o B en pacientes hospitalizados o con factores de riesgo de neumonía/muerte.',
      'Inicio óptimo en las primeras 48 horas tras el comienzo de los síntomas.',
      'Pacientes inmunocomprometidos, embarazadas o menores de 2 años con síndrome gripal.'
    ],
    pearlsAndPitfalls: [
      'Iniciar el tratamiento de inmediato en pacientes de alto riesgo sin esperar la confirmación de la prueba de laboratorio PCR.',
      'Eventos neuropsiquiátricos raros reportados en niños y adolescentes (delirio, alucinaciones, comportamiento anormal).',
      'Las náuseas y vómitos se reducen significativamente administrando el medicamento con alimentos.'
    ],
    monitoringAndSideEffects: [
      'Evolución del patrón respiratorio y saturometría de pulso.',
      'Comportamiento en pacientes pediátricos (vigilancia neuropsiquiátrica).',
      'Tolerancia digestiva.'
    ],
    evidenceAndSources: [
      {
        title: 'CDC Influenza Antiviral Medications: Summary for Clinicians',
        source: 'Centers for Disease Control and Prevention',
        year: '2024',
        summary: 'Recomienda tratamiento precoz con oseltamivir para cualquier paciente hospitalizado o con enfermedad grave por influenza.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 60 mL/min',
        adjustmentText: '75 mg cada 12 horas (dosis estándar).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 60 mL/min',
        adjustmentText: '30 mg cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 30 mL/min',
        adjustmentText: '30 mg una vez al día.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '30 mg dosis única inicial y luego 30 mg post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'safe',
      statusLabel: 'Compatible / Altamente Recomendado en Gestación',
      summary: 'La influenza en la embarazada conlleva alto riesgo de morbimortalidad materna y fetal. La OMS, CDC y ACOG recomiendan firmemente el tratamiento con oseltamivir en cualquier trimestre.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'ceftazidima-avibactam',
    name: 'Ceftazidima / Avibactam',
    commercialNames: ['Zavicefta', 'Avycaz'],
    category: 'Antibióticos',
    atcCode: 'J01DD52',
    awareCategory: 'Reserve',
    therapeuticClass: 'Cefalosporina Antipseudomónica + Inhibidor No Betalactámico (Diazabiciclooctano) · AWaRe Reserva',
    badgeText: 'AWaRe Reserva · KPC / OXA-48 / MDR',
    shortDescription: 'Antibiótico de reserva hospitalaria crítica activo frente a enterobacterias productoras de carbapenemasas clase A (KPC), clase C (AmpC) y clase D (OXA-48), así como cepas multirresistentes de Pseudomonas aeruginosa.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'cavi-vial-25',
        name: 'Polvo para Solución para Infusión IV 2.5 g (2 g Ceftazidima + 0.5 g Avibactam)',
        amountMg: 2500,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 10 mL de Agua Inyectable y diluir en 100 mL de SSN 0.9%'
      }
    ],
    indications: [
      {
        id: 'cavi-ind-adulto-kpc',
        name: 'Infección por Enterobacterias Resistentes a Carbapenémicos (KPC / OXA-48) / Pseudomonas MDR',
        fixedAdultDoseMg: 2500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 7500,
        maxSingleDoseMg: 2500,
        description: '2.5 g (2 g ceftazidima / 0.5 g avibactam) cada 8 horas en infusión intravenosa de 2 horas.'
      },
      {
        id: 'cavi-ind-peds',
        name: 'Infección Intraabdominal o ITU Complicada Pediátrica (≥3 meses)',
        recommendedDoseMgPerKgPerDay: 187.5,
        minDoseMgPerKgPerDay: 150,
        maxDoseMgPerKgPerDay: 187.5,
        fixedAdultDoseMg: 2500,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 7500,
        maxSingleDoseMg: 2500,
        description: '62.5 mg/kg por dosis (50 mg/kg de ceftazidima + 12.5 mg/kg de avibactam) cada 8 horas en infusión de 2 horas (máximo 2.5 g/dosis).'
      }
    ],
    whenToUse: [
      'Infecciones urinarias complicadas, pielonefritis y sepsis intraabdominal por gérmenes Gram negativos resistentes a carbapenémicos.',
      'Neumonía intrahospitalaria o asociada a ventilación mecánica por Klebsiella pneumoniae productora de KPC o Pseudomonas aeruginosa multirresistente.',
      'Bacteriemias complicadas documentadas con aislamiento susceptible.'
    ],
    pearlsAndPitfalls: [
      '¡Espectro y Mecanismo!: El avibactam inhibe eficazmente carbapenemasas KPC y OXA-48, pero NO tiene actividad frente a metalobetalactamasas (NDM, VIM, IMP). En sospecha de NDM se debe asociar con Aztreonam.',
      'Uso estrictamente guiado por el Comité de Infecciones / PROA para preservar su sensibilidad biológica.',
      'Infusión obligatoria en 2 horas para optimizar el tiempo de concentración por encima de la CIM (%T > CIM).'
    ],
    monitoringAndSideEffects: [
      'Función renal (creatinina sérica y cálculo de ClCr cada 48 horas en UCI).',
      'Test de Coombs directo (puede positivizarse sin hemólisis clínica).',
      'Monitoreo microbiológico de control para vigilar la emergencia de resistencia (mutaciones en KPC).'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Guidance on Treatment of Antimicrobial-Resistant Gram-Negative Infections',
        source: 'Clinical Infectious Diseases',
        year: '2023',
        summary: 'Recomienda ceftazidima-avibactam como terapia de primera línea preferida para infecciones graves por enterobacterias resistentes a carbapenémicos (KPC y OXA-48).'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: '2.5 g cada 8 horas (infusión en 2 horas).',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '31 - 50 mL/min',
        adjustmentText: '1.25 g (1 g / 0.25 g) cada 8 horas en infusión de 2 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '16 - 30 mL/min',
        adjustmentText: '0.9375 g (0.75 g / 0.1875 g) cada 12 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '6 - 15 mL/min',
        adjustmentText: '0.9375 g cada 24 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 6 mL/min o Hemodiálisis',
        adjustmentText: '0.9375 g dosis de carga, luego 0.9375 g cada 48 horas (administrar tras la sesión de diálisis).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible si no hay alternativa terapéutica',
      summary: 'Estudios en animales no han evidenciado toxicidad en el desarrollo embriofetal. En infecciones refractarias por bacilos multirresistentes salva la vida materna.',
      clinicalAlternative: 'Carbapenémicos si el microorganismo es sensible.'
    }
  },
  {
    id: 'ceftazidima',
    name: 'Ceftazidima',
    commercialNames: ['Fortum', 'Tazidime', 'Ceftazidima Hospira'],
    category: 'Antibióticos',
    atcCode: 'J01DD02',
    awareCategory: 'Watch',
    therapeuticClass: 'Cefalosporina de 3.ª Generación Antipseudomónica · AWaRe Watch',
    badgeText: 'AWaRe Watch · Antipseudomónico',
    shortDescription: 'Cefalosporina parenteral de 3ra generación con potente actividad bactericida frente a Pseudomonas aeruginosa. Primera línea en fibrosis quística y neutropenia febril.',
    availableRoutes: ['iv', 'im'],
    concentrations: [
      {
        id: 'ceftaz-vial-1g',
        name: 'Vial Inyectable 1 g (1000 mg)',
        amountMg: 1000,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir con 10 mL de Agua Inyectable (libera CO2 al reconstituir)'
      },
      {
        id: 'ceftaz-vial-2g',
        name: 'Vial Inyectable 2 g (2000 mg)',
        amountMg: 2000,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'ceftaz-ind-adulto',
        name: 'Infección Grave por Pseudomonas / Neutropenia Febril Adultos',
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '2 g cada 8 horas IV lenta en 30 minutos o en infusión extendida de 3 horas.'
      },
      {
        id: 'ceftaz-ind-peds',
        name: 'Infección Pediátrica por Pseudomonas / Fibrosis Quística',
        recommendedDoseMgPerKgPerDay: 150,
        minDoseMgPerKgPerDay: 100,
        maxDoseMgPerKgPerDay: 200,
        fixedAdultDoseMg: 2000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '10-14 días',
        maxDailyDoseMg: 6000,
        maxSingleDoseMg: 2000,
        description: '100 a 150 mg/kg/día dividido cada 8 horas (hasta 200 mg/kg/día en fibrosis quística o meningitis).'
      }
    ],
    whenToUse: [
      'Infecciones documentadas o de alta sospecha por Pseudomonas aeruginosa sensible.',
      'Exacerbaciones broncopulmonares en pacientes con fibrosis quística o bronquiectasias.',
      'Meningitis por bacilos Gram negativos nosocomiales.'
    ],
    pearlsAndPitfalls: [
      'Liberación de dióxido de carbono al reconstituir: genera presión positiva dentro del frasco ampolla; no alarmarse.',
      'Muy pobre actividad frente a cocos Gram positivos (Staphylococcus y Streptococcus); no emplear como monoterapia empírica si se sospecha coco Gram positivo.',
      'Riesgo de neurotoxicidad si no se ajusta la dosis a la función renal.'
    ],
    monitoringAndSideEffects: [
      'Función renal (creatinina sérica).',
      'Cultivos microbiológicos y antibiograma seriado.',
      'Flebitis y erupciones exantemáticas.'
    ],
    evidenceAndSources: [
      {
        title: 'Cystic Fibrosis Foundation Guidelines for Antimicrobial Therapy',
        source: 'Journal of Cystic Fibrosis',
        year: '2023',
        summary: 'Respalda dosis elevadas de ceftazidima en combinación con aminoglucósidos para erradicación de Pseudomonas.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: 'Dosis estándar cada 8 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '31 - 50 mL/min',
        adjustmentText: '1 g cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '16 - 30 mL/min',
        adjustmentText: '1 g cada 24 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 15 mL/min o Hemodiálisis',
        adjustmentText: '500 mg cada 24-48 horas; administrar dosis suplementaria post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible / Seguro si está indicado',
      summary: 'Atraviesa la placenta pero no tiene efectos teratogénicos demostrados.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  },
  {
    id: 'ceftolozano-tazobactam',
    name: 'Ceftolozano / Tazobactam',
    commercialNames: ['Zerbaxa'],
    category: 'Antibióticos',
    atcCode: 'J01DI54',
    awareCategory: 'Reserve',
    therapeuticClass: 'Cefalosporina de Nueva Generación + Inhibidor de Betalactamasa · AWaRe Reserva',
    badgeText: 'AWaRe Reserva · Antipseudomónico Potente',
    shortDescription: 'Cefalosporina diseñada específicamente para vencer los mecanismos de resistencia más comunes de Pseudomonas aeruginosa (bombas de eflujo, pérdida de porina OprD y sobreexpresión de AmpC).',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'ceftolo-vial-15',
        name: 'Vial Inyectable 1.5 g (1 g Ceftolozano + 0.5 g Tazobactam)',
        amountMg: 1500,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'ceftolo-ind-adulto-pseudomonas',
        name: 'Neumonía Nosocomial / ITU Complicada por Pseudomonas Multirresistente',
        fixedAdultDoseMg: 3000,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '7-14 días',
        maxDailyDoseMg: 9000,
        maxSingleDoseMg: 3000,
        description: 'Neumonía nosocomial/NAV: 3 g (2 g / 1 g) cada 8 horas en infusión de 1 hora. ITU complicada: 1.5 g (1 g / 0.5 g) cada 8 horas.'
      }
    ],
    whenToUse: [
      'Infecciones graves por Pseudomonas aeruginosa extensamente resistente (XDR) a carbapenémicos y cefepima.',
      'Infecciones intraabdominales complicadas asociadas a metronidazol.'
    ],
    pearlsAndPitfalls: [
      'Es el betalactámico con mayor potencia intrínseca y menor CIM frente a Pseudomonas aeruginosa.',
      'No cubre SAMR, enterococos ni anaerobios (requiere asociar metronidazol en foco intraabdominal).',
      'Infundir en 1 hora por vía intravenosa.'
    ],
    monitoringAndSideEffects: [
      'Función renal (ajuste de dosis estricto si ClCr < 50 mL/min).',
      'Hemograma (anemia, neutropenia leve).',
      'Diarrea asociada a Clostridioides difficile.'
    ],
    evidenceAndSources: [
      {
        title: 'ASPECT-NP Clinical Trial for Nosocomial Pneumonia',
        source: 'The Lancet Infectious Diseases',
        year: '2023',
        summary: 'Demostró no inferioridad y alta tasa de curación clínica frente a meropenem en NAV por Pseudomonas resistente.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '> 50 mL/min',
        adjustmentText: 'Dosis estándar según indicación.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 50 mL/min',
        adjustmentText: 'Reducir dosis al 50% cada 8 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '15 - 29 mL/min',
        adjustmentText: 'Reducir dosis al 25% cada 8 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 15 mL/min o Hemodiálisis',
        adjustmentText: 'Dosis de carga y dosis suplementaria post-diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Indicación Justificada',
      summary: 'Sin evidencia de teratogénesis. Reservar para infecciones hospitalarias graves maternas.',
      clinicalAlternative: 'Betalactámicos estándar según antibiograma.'
    }
  },
  {
    id: 'linezolid',
    name: 'Linezolid',
    commercialNames: ['Zyvoxid', 'Zyvox', 'Linozid'],
    category: 'Antibióticos',
    atcCode: 'J01XX08',
    awareCategory: 'Reserve',
    therapeuticClass: 'Oxazolidinona Sintética · AWaRe Reserva',
    badgeText: 'AWaRe Reserva · SAMR / VRE',
    shortDescription: 'Inhibidor de la síntesis proteica por unión a la subunidad ribosomal 50S (sitio 23S). Activo frente a Staphylococcus aureus resistente a meticilina (SAMR) y Enterococcus faecium resistente a vancomicina (VRE). Biodisponibilidad oral del 100%.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'line-comp-600',
        name: 'Comprimidos Recubiertos 600 mg',
        amountMg: 600,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'line-sol-iv-600',
        name: 'Bolsa para Infusión IV 600 mg / 300 mL (2 mg/mL)',
        amountMg: 600,
        volumeMl: 300,
        form: 'vial',
        unit: 'mL'
      },
      {
        id: 'line-susp-100',
        name: 'Polvo para Suspensión Oral 100 mg / 5 mL (Pediátrico)',
        amountMg: 100,
        volumeMl: 5,
        form: 'suspension',
        unit: 'mL',
        standardBottleMl: 150
      }
    ],
    indications: [
      {
        id: 'line-ind-adulto-samr',
        name: 'Neumonía Nosocomial por SAMR / Infección de Piel Complicada Adultos',
        fixedAdultDoseMg: 600,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '10-14 días',
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 600,
        description: '600 mg cada 12 horas por vía oral o infusión IV lenta en 60 minutos (biodisponibilidad idéntica).'
      },
      {
        id: 'line-ind-peds',
        name: 'Infección Pediátrica por SAMR / VRE (>12 años o lactantes)',
        recommendedDoseMgPerKgPerDay: 30,
        minDoseMgPerKgPerDay: 20,
        maxDoseMgPerKgPerDay: 30,
        fixedAdultDoseMg: 600,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: '10-14 días',
        maxDailyDoseMg: 1200,
        maxSingleDoseMg: 600,
        description: 'Niños <12 años: 10 mg/kg cada 8 horas (aclaramiento acelerado en niños). Adolescentes ≥12 años: 600 mg cada 12 horas.'
      }
    ],
    whenToUse: [
      'Neumonía nosocomial o comunitaria grave por SAMR (excelente penetración en líquido de revestimiento epitelial pulmonar, superior a vancomicina).',
      'Infecciones por Enterococcus resistente a vancomicina (VRE).',
      'Infecciones osteoarticulares o de partes blandas donde se requiera cambio rápido a tratamiento oral ambulatorio.'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Mielosupresión!: Trombocitopenia, anemia y leucopenia reversibles en tratamientos prolongados (>14 días); hemograma semanal obligatorio.',
      'Inhibidor no selectivo débil y reversible de la monoaminooxidasa (MAO): Riesgo grave de síndrome serotoninérgico si se coadministra con ISRS (sertralina, fluoxetina) o alimentos ricos en tiramina.',
      'Neuropatía periférica y neuritis óptica potencialmente irreversible en tratamientos >28 días.',
      'No requiere ningún ajuste en insuficiencia renal.'
    ],
    monitoringAndSideEffects: [
      'Hemograma completo con recuento de plaquetas al menos una vez por semana.',
      'Signos de toxicidad serotoninérgica (hiperreflexia, clonus, diaforesis, agitación).',
      'Examen visual si se prolonga por más de 2 a 4 semanas.'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Practice Guidelines for MRSA Infections',
        source: 'Clinical Infectious Diseases',
        year: '2023',
        summary: 'Linezolid y vancomicina son las terapias recomendadas de primera línea para neumonía por SAMR.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste de dosis en falla renal ni hemodiálisis.',
        cautionLevel: 'normal'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Usar con Precaución en Gestación',
      summary: 'Datos limitados en humanos. Reservar para infecciones por SAMR o VRE sin respuesta a vancomicina.',
      clinicalAlternative: 'Vancomicina IV de elección para SAMR en embarazadas.'
    }
  },
  {
    id: 'daptomicina',
    name: 'Daptomicina',
    commercialNames: ['Cubicin', 'Daptomicina'],
    category: 'Antibióticos',
    atcCode: 'J01XX09',
    awareCategory: 'Reserve',
    therapeuticClass: 'Lipopéptido Cíclico Bactericida · AWaRe Reserva',
    badgeText: 'AWaRe Reserva · Bacteriemia SAMR',
    shortDescription: 'Antibiótico lipopéptido bactericida rápido que despolariza la membrana celular bacteriana por salida masiva de potasio. Primera línea en bacteriemia por SAMR y endocarditis derecha.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'dapto-vial-500',
        name: 'Vial Inyectable 500 mg Frasco Vial',
        amountMg: 500,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'dapto-ind-bacteriemia-adulto',
        name: 'Bacteriemia por SAMR / Endocarditis Infecciosa Derecha',
        recommendedDoseMgPerKgPerDay: 8,
        minDoseMgPerKgPerDay: 6,
        maxDoseMgPerKgPerDay: 10,
        fixedAdultDoseMg: 500,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '14-42 días',
        maxDailyDoseMg: 1000,
        maxSingleDoseMg: 1000,
        isDosePerKgPerDose: true,
        description: '8 a 10 mg/kg una vez al día IV en infusión de 30 minutos (o inyección en 2 minutos).'
      }
    ],
    whenToUse: [
      'Bacteriemia por Staphylococcus aureus resistente a meticilina (SAMR) o Enterococcus faecalis/faecium.',
      'Endocarditis de válvula tricúspide (corazón derecho).',
      'Infecciones complicadas de piel y partes blandas.'
    ],
    pearlsAndPitfalls: [
      '¡CONTRAINDICACIÓN ABSOLUTA EN NEUMONÍA!: Es inactivada y fijada irreversiblemente por el surfactante pulmonar alveolar; carece de toda eficacia clínica en infecciones respiratorias.',
      'Miopatía y rabdomiólisis: Monitorizar creatina quinasa (CK) semanalmente; suspender estatinas durante el tratamiento con daptomicina.',
      'Neumonía eosinofílica inducida por daptomicina (complicación pulmonar alérgica grave que suele ocurrir a las 2-4 semanas de tratamiento).'
    ],
    monitoringAndSideEffects: [
      'Niveles séricos de CPK semanalmente (suspender si CK > 1000 U/L con síntomas o >2000 U/L asintomática).',
      'Función renal (ajustar intervalo si ClCr < 30 mL/min).',
      'Dolores o debilidad muscular en extremidades.'
    ],
    evidenceAndSources: [
      {
        title: 'AHA Scientific Statement on Infective Endocarditis',
        source: 'Circulation',
        year: '2023',
        summary: 'Recomienda daptomicina a dosis elevadas (8-10 mg/kg) como alternativa bactericida preferida a vancomicina en bacteriemia por SAMR.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 30 mL/min',
        adjustmentText: 'Dosis completa cada 24 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 30 mL/min o Hemodiálisis',
        adjustmentText: 'Dosis estándar cada 48 horas (en diálisis administrar tras la sesión).',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Compatible con Indicación Justificada',
      summary: 'Sin evidencia de teratogénesis en modelos animales. Usar en bacteriemia materna severa si vancomicina está contraindicada.',
      clinicalAlternative: 'Vancomicina IV.'
    }
  },
  {
    id: 'colistina',
    name: 'Colistina (Colistimetato de Sodio)',
    commercialNames: ['Colimicina', 'Coly-Mycin M', 'Promixin'],
    category: 'Antibióticos',
    atcCode: 'J01XB01',
    awareCategory: 'Reserve',
    therapeuticClass: 'Polimixina Detergente de Membrana · AWaRe Reserva',
    badgeText: 'AWaRe Reserva · Pan-Drogo-Resistentes',
    shortDescription: 'Antibiótico catiónico bactericida de último recurso que disrumpe la membrana externa bacteriana. Reservado para bacilos Gram negativos panresistentes (Acinetobacter baumannii, Pseudomonas aeruginosa y KPC).',
    availableRoutes: ['iv', 'inhalatoria'],
    concentrations: [
      {
        id: 'coli-vial-100',
        name: 'Vial Inyectable 100 mg (aprox. 3 Millones de UI de Colistimetato)',
        amountMg: 100,
        volumeMl: 10,
        form: 'vial',
        unit: 'mL',
        notes: '1 millón de UI = aprox. 33.3 mg de colistina base activa (CBA)'
      }
    ],
    indications: [
      {
        id: 'coli-ind-adulto-carga',
        name: 'Infección Grave por Gram Negativos Panresistentes (IV)',
        fixedAdultDoseMg: 300,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '10-14 días',
        maxDailyDoseMg: 360,
        maxSingleDoseMg: 300,
        description: 'Dosis de carga obligatoria: 9 Millones de UI (aprox. 300 mg de CBA) en 2 horas, seguida de dosis de mantenimiento a las 12 horas: 4.5 Millones de UI (150 mg CBA) cada 12 horas.'
      }
    ],
    whenToUse: [
      'Infecciones potencialmente mortales por Acinetobacter baumannii o Klebsiella pneumoniae panresistentes a todos los demás fármacos.',
      'Neumonía asociada a ventilación por bacilos Gram negativos multirresistentes (vía IV asociada a colistina inhalada nebulizada).'
    ],
    pearlsAndPitfalls: [
      '¡Alerta Nefrotoxicidad y Neurotoxicidad!: Necrosis tubular aguda en hasta el 30-50% de pacientes críticos tratados (asociación con hidratación vigorosa y evitar otros nefrotóxicos).',
      'Neurotoxicidad: Parestesias periorales, debilidad muscular y bloqueo neuromuscular severo (cuidado en miastenia gravis).',
      'Requiere siempre dosis de carga de 9 MUI para alcanzar concentraciones terapéuticas inmediatas.'
    ],
    monitoringAndSideEffects: [
      'Creatinina sérica y diuresis horaria estricta.',
      'Fuerza muscular y patrón ventilatorio.',
      'Electrolitos séricos (potasio y magnesio).'
    ],
    evidenceAndSources: [
      {
        title: 'International Consensus Guidelines for the Optimal Use of the Polymyxins',
        source: 'Pharmacotherapy',
        year: '2023',
        summary: 'Pautas de consenso mundial sobre dosificación basada en colistina base activa y ajuste renal.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: '4.5 MUI cada 12 horas.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '30 - 49 mL/min',
        adjustmentText: '2.5 a 3 MUI cada 12 horas.',
        cautionLevel: 'moderate'
      },
      {
        crClThreshold: '10 - 29 mL/min',
        adjustmentText: '1.5 a 2 MUI cada 12 horas.',
        cautionLevel: 'severe'
      },
      {
        crClThreshold: '< 10 mL/min o Hemodiálisis',
        adjustmentText: '1 MUI cada 12 horas + dosis suplementaria de 1 MUI tras diálisis.',
        cautionLevel: 'severe'
      }
    ],
    pregnancyGuidance: {
      category: 'C',
      status: 'caution',
      statusLabel: 'Uso de Extrema Emergencia',
      summary: 'Nefrotóxico fetal potencial. Reservar exclusivamente para sepsis materna mortal sin ninguna otra alternativa biológica.',
      clinicalAlternative: 'Ceftazidima/Avibactam si el aislamiento es susceptible.'
    }
  },
  {
    id: 'voriconazol',
    name: 'Voriconazol',
    commercialNames: ['Vfend', 'Voritrol', 'Voriconazol'],
    category: 'Antibióticos',
    atcCode: 'J02AC03',
    awareCategory: 'Reserve',
    therapeuticClass: 'Antifúngico Triazólico de 2.ª Generación · Estándar de Oro en Aspergilosis',
    badgeText: 'Antifúngico · Aspergilosis Invasiva',
    shortDescription: 'Inhibidor selectivo de la 14-alfa-esterol desmetilasa fúngica. Estándar de oro mundial para el tratamiento de Aspergilosis invasiva y candidiasis resistente a fluconazol.',
    availableRoutes: ['oral', 'iv'],
    concentrations: [
      {
        id: 'vori-comp-200',
        name: 'Comprimidos Recubiertos 200 mg',
        amountMg: 200,
        volumeMl: 1,
        form: 'tablets',
        unit: 'comprimido'
      },
      {
        id: 'vori-vial-200',
        name: 'Polvo para Solución para Infusión IV 200 mg Frasco Vial',
        amountMg: 200,
        volumeMl: 20,
        form: 'vial',
        unit: 'mL'
      }
    ],
    indications: [
      {
        id: 'vori-ind-aspergilosis-adulto',
        name: 'Aspergilosis Invasiva / Infección por Scedosporium o Fusarium',
        recommendedDoseMgPerKgPerDay: 12,
        minDoseMgPerKgPerDay: 8,
        maxDoseMgPerKgPerDay: 12,
        fixedAdultDoseMg: 400,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: '6 a 12 semanas',
        maxDailyDoseMg: 800,
        maxSingleDoseMg: 400,
        description: 'Día 1 (carga): 6 mg/kg cada 12 horas IV (o 400 mg c/12h oral). Mantenimiento desde día 2: 4 mg/kg cada 12 horas IV (o 200 mg c/12h oral en ayunas).'
      }
    ],
    whenToUse: [
      'Tratamiento de primera línea para Aspergilosis pulmonar y extrapulmonar invasiva.',
      'Candidemia en pacientes no neutropénicos con cepas de Candida krusei o glabrata resistentes.',
      'Infecciones fúngicas graves por Fusarium y Scedosporium.'
    ],
    pearlsAndPitfalls: [
      'Alteraciones visuales transitorias (fotopsias, visión borrosa, alteración de la percepción de colores) en hasta un 30% de los pacientes (suelen ocurrir 30 min tras la dosis y ceden en 1-2 horas).',
      'Interacciones farmacológicas masivas vía CYP2C19, CYP2C9 y CYP3A4.',
      'La formulación IV contiene ciclodextrina (SBECD) que puede acumularse en falla renal moderada a severa; en ClCr <50 mL/min se prefiere la formulación oral.'
    ],
    monitoringAndSideEffects: [
      'Monitorización terapéutica de niveles plasmáticos (valle diana: 1.5 a 5.5 mcg/mL).',
      'Pruebas de función hepática (transaminasas, fosfatasa alcalina).',
      'Electrocardiograma (prolongación de QTc).'
    ],
    evidenceAndSources: [
      {
        title: 'IDSA Practice Guidelines for the Diagnosis and Management of Aspergillosis',
        source: 'Clinical Infectious Diseases',
        year: '2023',
        summary: 'Voriconazol es la terapia de primera línea preferida y superior a anfotericina B convencional para Aspergilosis invasiva.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: '≥ 50 mL/min',
        adjustmentText: 'Dosis completa IV u oral.',
        cautionLevel: 'normal'
      },
      {
        crClThreshold: '< 50 mL/min',
        adjustmentText: 'Preferir formulación ORAL para evitar acumulación de ciclodextrina IV.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'D',
      status: 'contraindicated',
      statusLabel: 'Contraindicado en Gestación (Teratógeno)',
      summary: 'Teratogénesis demostrada en animales (anomalías esqueléticas, paladar hendido). Evitar en el embarazo.',
      contraindicatedInTrimester: [1, 2, 3],
      clinicalAlternative: 'Anfotericina B Liposomal (Categoría B) de elección para micosis invasiva en gestantes.'
    }
  },
  {
    id: 'anfotericina-b-liposomal',
    name: 'Anfotericina B Liposomal',
    commercialNames: ['Ambisome', 'Ampholip', 'Fungisome'],
    category: 'Antibióticos',
    atcCode: 'J02AA01',
    awareCategory: 'Reserve',
    therapeuticClass: 'Antifúngico Poliénico Sistémico de Amplio Espectro',
    badgeText: 'Antifúngico · Micosis Invasiva Grave',
    shortDescription: 'Formulación liposomal esférica que reduce drásticamente la nefrotoxicidad de la anfotericina convencional al fijarse preferentemente al ergosterol fúngico frente al colesterol humano.',
    availableRoutes: ['iv'],
    concentrations: [
      {
        id: 'ambi-vial-50',
        name: 'Vial Liofilizado para Infusión IV 50 mg Frasco',
        amountMg: 50,
        volumeMl: 12,
        form: 'vial',
        unit: 'mL',
        notes: 'Reconstituir SOLO con Agua Inyectable y diluir exclusivamente en Dextrosa al 5%'
      }
    ],
    indications: [
      {
        id: 'ambi-ind-micosis-grave',
        name: 'Meningitis Criptocócica / Mucormicosis / Micosis Sistémica Invasiva',
        recommendedDoseMgPerKgPerDay: 4,
        minDoseMgPerKgPerDay: 3,
        maxDoseMgPerKgPerDay: 5,
        fixedAdultDoseMg: 300,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: '2-6 semanas',
        maxDailyDoseMg: 500,
        maxSingleDoseMg: 500,
        isDosePerKgPerDose: true,
        description: '3 a 5 mg/kg una vez al día IV infundido en 2 horas (hasta 5-10 mg/kg/día en Mucormicosis rinocerebral invasiva).'
      }
    ],
    whenToUse: [
      'Mucormicosis (Cigomicosis) agresiva de senos paranasales o pulmonar.',
      'Fase de inducción de meningitis criptocócica en pacientes con VIH.',
      'Leishmaniasis visceral (Kala-azar) y micosis sistémicas en el embarazo.'
    ],
    pearlsAndPitfalls: [
      '¡REGLA DE ORO DE RECONSTITUCIÓN!: NUNCA mezclar ni diluir con Solución Salina o soluciones electrolíticas, ya que la sal precipita inmediatamente el fármaco en grumos insolubles. Diluir ÚNICAMENTE en Dextrosa al 5% en Agua.',
      'Mucho menor nefrotoxicidad e hipopotasemia que el desoxicolato clásico, pero aún requiere prehidratación salina con 500-1000 mL de SSN.',
      'Antifúngico de primera línea en mujeres embarazadas con infecciones fúngicas potencialmente mortales.'
    ],
    monitoringAndSideEffects: [
      'Potasio y magnesio séricos (suplementar activamente por pérdida tubular).',
      'Creatinina sérica y hemograma (anemia normocítica por déficit de eritropoyetina).',
      'Reacciones a la infusión (fiebre, escalofríos, rigidez; premedicación si ocurren).'
    ],
    evidenceAndSources: [
      {
        title: 'Global Guideline for the Diagnosis and Management of Mucormycosis',
        source: 'The Lancet Infectious Diseases',
        year: '2023',
        summary: 'Anfotericina B liposomal a dosis de 5-10 mg/kg combinada con debridamiento quirúrgico es el tratamiento estándar de elección.'
      }
    ],
    renalAdjustments: [
      {
        crClThreshold: 'Cualquier función renal',
        adjustmentText: 'No requiere ajuste por aclaramiento renal; monitorizar toxicidad tubular.',
        cautionLevel: 'moderate'
      }
    ],
    pregnancyGuidance: {
      category: 'B',
      status: 'safe',
      statusLabel: 'Antifúngico Sistémico de 1.ª Elección en Gestación',
      summary: 'Es el antifúngico sistémico más seguro en el embarazo (Categoría B). Fármaco de elección incuestionable para micosis invasivas en gestantes.',
      clinicalAlternative: 'Fármaco de elección.'
    }
  }
];


