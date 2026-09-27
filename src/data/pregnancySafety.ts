import { Medication, PregnancyGuidance, PregnancySafetyStatus } from '../types';

export interface EvaluatedPregnancySafety {
  guidance: PregnancyGuidance;
  isContraindicatedNow: boolean;
  status: PregnancySafetyStatus;
  badgeText: string;
  badgeColorClass: string;
  borderClass: string;
  bgClass: string;
  iconType: 'safe' | 'caution' | 'danger';
}

/**
 * Catálogo Farmacológico de Seguridad en el Embarazo
 * Basado en Guías de Práctica Clínica, Clasificación FDA y Briggs Drugs in Pregnancy and Lactation.
 */
export const PREGNANCY_DRUG_DATABASE: Record<string, PregnancyGuidance> = {
  // === ANALGESIA Y AINES ===
  ibuprofeno: {
    category: 'D',
    status: 'contraindicated',
    statusLabel: 'Contraindicado en 3.er Trimestre / Evitar desde sem 20',
    summary:
      'Contraindicado estrictamente en el 3.er trimestre (≥28 semanas) y no recomendado a partir de la semana 20 de gestación. Provoca cierre prematuro del conducto arterioso fetal, oligohidramnios por disfunción renal fetal, prolongación del parto e incremento del sangrado materno-fetal.',
    contraindicatedInTrimester: [3],
    clinicalAlternative: 'Paracetamol (Acetaminofén) a dosis de 500 mg - 1 g cada 6-8 h (máximo 3 g/día) como analgésico y antipirético de primera elección.',
    fetalRisks: [
      'Cierre prematuro del ductus arterioso',
      'Oligohidramnios y daño renal fetal',
      'Hipertensión pulmonar persistente del recién nacido'
    ]
  },
  paracetamol: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Fármaco de 1.ª Elección',
    summary:
      'Analgésico y antipirético de primera línea durante todos los trimestres del embarazo. Perfil de seguridad extensamente comprobado a dosis terapéuticas.',
    clinicalAlternative: 'Fármaco de elección preferente. Utilizar la menor dosis terapéutica eficaz.',
    fetalRisks: []
  },
  tramadol: {
    category: 'C',
    status: 'caution',
    statusLabel: 'Usar con Precaución / Evaluar Riesgo-Beneficio',
    summary:
      'Atraviesa la barrera placentaria. El uso prolongado o en dosis altas puede causar síndrome de abstinencia neonatal y depresión respiratoria al nacimiento.',
    contraindicatedInTrimester: [3],
    clinicalAlternative: 'Paracetamol o analgesia no opioide. Si es indispensable, usar periodos muy cortos.',
    fetalRisks: ['Depresión respiratoria neonatal', 'Síndrome de abstinencia neonatal']
  },

  // === ANTIBIÓTICOS ===
  amoxicilina: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Seguro en Todos los Trimestres',
    summary:
      'Betalactámico de primera elección para infecciones bacterianas susceptibles (respiratorias, urinarias, ORL) durante todo el embarazo.',
    clinicalAlternative: 'Fármaco seguro de primera línea.',
    fetalRisks: []
  },
  'amoxicilina-clavulanato': {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Fármaco Seguro',
    summary:
      'Ampliamente utilizado en infecciones refractarias o complicadas en el embarazo. En ruptura prematura de membranas pretérmino se prefiere ampicilina sola para reducir riesgo de enterocolitis necrotizante.',
    clinicalAlternative: 'Amoxicilina sola o Cefalosporinas de 1.ª/2.ª generación.',
    fetalRisks: []
  },
  ampicilina: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Elección en Profilaxis EGB',
    summary:
      'Betalactámico seguro. Fármaco de elección para profilaxis intraparto de Estreptococo del Grupo B y tratamiento de corioamnionitis.',
    fetalRisks: []
  },
  cefalexina: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Seguro en Infección Urinaria',
    summary:
      'Cefalosporina oral de 1.ª generación segura y de elección para bacteriuria asintomática e infección de vías urinarias en la gestante.',
    fetalRisks: []
  },
  ceftriaxona: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Seguro en Infecciones Graves',
    summary:
      'Cefalosporina de 3.ª generación de uso seguro en pielonefritis, neumonía y sepsis materna. No desplaza significativamente la bilirrubina si se administra antenatal.',
    fetalRisks: []
  },
  azitromicina: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Macrólido de Elección',
    summary:
      'Macrólido de elección para infección por Chlamydia trachomatis en el embarazo, infecciones respiratorias atípicas o pacientes alérgicas a penicilina.',
    fetalRisks: []
  },
  ciprofloxacino: {
    category: 'C',
    status: 'caution',
    statusLabel: 'Uso con Precaución / Evitar si hay Alternativas',
    summary:
      'Fluoroquinolona. Estudios preclínicos evidenciaron artropatías y daño en cartílago articular en animales inmaduros. Usar solo si no existen alternativas con betalactámicos o fosfomicina.',
    clinicalAlternative: 'Cefalosporinas (Ceftriaxona, Cefalexina) o Fosfomicina.',
    fetalRisks: ['Potencial artropatía o toxicidad en cartílagos de crecimiento']
  },
  gentamicina: {
    category: 'D',
    status: 'caution',
    statusLabel: 'Riesgo Fetal Potencial / Monitorizar Niveles',
    summary:
      'Atraviesa placenta. Riesgo potencial de ototoxicidad y nefrotoxicidad del VIII par craneal fetal. Reservar para sepsis grave, pielonefritis complicada o corioamnionitis con monitoreo estricto.',
    clinicalAlternative: 'Ceftriaxona o carbapenémicos según antibiograma.',
    fetalRisks: ['Ototoxicidad fetal bilateral', 'Nefrotoxicidad']
  },
  metronidazol: {
    category: 'B',
    status: 'caution',
    statusLabel: 'Precaución en 1.er Trimestre / Seguro en 2.º y 3.º',
    summary:
      'Eficaz en vaginosis bacteriana y tricomoniasis. En el 1.er trimestre se recomienda evaluar alternativas tópicas; seguro en 2.º y 3.er trimestre.',
    contraindicatedInTrimester: [1],
    clinicalAlternative: 'Clindamicina tópica u óvulos en 1.er trimestre.',
    fetalRisks: []
  },

  // === CARDIOVASCULAR Y RENAL ===
  enalapril: {
    category: 'D',
    status: 'contraindicated',
    statusLabel: 'CONTRAINDICADO / Riesgo Fetal Severo',
    summary:
      'Inhibidor de la ECA ESTRICTAMENTE CONTRAINDICADO. En el 2.º y 3.er trimestre causa fetopatía por IECA: oligoamnios, hipoplasia pulmonar fetal, contracturas de extremidades, retraso de osificación craneana e insuficiencia renal neonatal anúrica irreversible y muerte fetal.',
    contraindicatedInTrimester: [1, 2, 3],
    clinicalAlternative: 'Labetalol oral o intravenoso, Nifedipino o Alfa-metildopa.',
    fetalRisks: [
      'Fetopatía por IECA',
      'Insuficiencia renal anúrica neonatal',
      'Hipoplasia pulmonar fetal',
      'Muerte fetal intrauterina'
    ]
  },
  hidralazina: {
    category: 'C',
    status: 'safe',
    statusLabel: 'Fármaco de Elección en Crisis Hipertensiva',
    summary:
      'Vasodilatador de primera línea y ampliamente protocolizado para el manejo de crisis hipertensiva en preeclampsia severa y eclampsia vía IV.',
    clinicalAlternative: 'Fármaco de referencia para urgencia hipertensiva gestacional junto a Labetalol.',
    fetalRisks: []
  },
  espirolactona: {
    category: 'D',
    status: 'contraindicated',
    statusLabel: 'Contraindicado / Efecto Antiandrogénico',
    summary:
      'Efectos antiandrogénicos demostrados; riesgo de feminización del feto masculino. Evitar durante toda la gestación.',
    contraindicatedInTrimester: [1, 2, 3],
    clinicalAlternative: 'Furosemida a dosis mínima si hay edema pulmonar agudo.',
    fetalRisks: ['Feminización de genitales en fetos masculinos']
  },
  furosemida: {
    category: 'C',
    status: 'caution',
    statusLabel: 'Uso con Precaución / Riesgo de Hipovolemia',
    summary:
      'Puede disminuir el volumen plasmático materno y la perfusión útero-placentaria. Reservar para edema pulmonar o insuficiencia cardíaca descompensada.',
    fetalRisks: ['Disminución de perfusión útero-placentaria']
  },
  'acido-tranexamico': {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Protocolo en Hemorragia Posparto',
    summary:
      'Fármaco antifibrinolítico seguro y estándar de oro para el tratamiento y prevención de la hemorragia posparto (Ensayo WOMAN).',
    fetalRisks: []
  },
  'sulfato-ferroso': {
    category: 'A',
    status: 'safe',
    statusLabel: 'Seguro y Esencial en el Embarazo',
    summary:
      'Micronutriente indispensable. Prevención y tratamiento de la anemia microcítica ferropénica gestacional según recomendaciones de la OMS.',
    fetalRisks: []
  },

  // === GASTROENTEROLOGÍA ===
  omeprazol: {
    category: 'C',
    status: 'caution',
    statusLabel: 'Uso con Precaución / 2.ª Línea en ERGE',
    summary:
      'Inhibidor de bomba de protones. Seguro tras fracaso de medidas dietéticas y antiácidos (ej. hidróxido de aluminio/magnesio o sucralfato).',
    clinicalAlternative: 'Antiácidos no absorbibles o Ranitidina/Famotidina como 1.ª línea.',
    fetalRisks: []
  },
  ondansetron: {
    category: 'B',
    status: 'caution',
    statusLabel: 'Uso con Precaución / 2.ª Línea en Hiperémesis',
    summary:
      'Antiemético eficaz en hiperémesis gravídica refractaria a doxilamina y metoclopramida. En las primeras 10 semanas de gestación se evalúa riesgo-beneficio.',
    clinicalAlternative: 'Doxilamina + Piridoxina, o Metoclopramida.',
    fetalRisks: ['Ligera correlación en primer trimestre con fisuras orales en metaanálisis específicos']
  },
  metoclopramida: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Antiemético de Elección',
    summary:
      'Antiemético de uso común y seguro para náuseas y vómitos inducidos por el embarazo e hiperémesis gravídica.',
    fetalRisks: []
  },
  hioscina: {
    category: 'C',
    status: 'caution',
    statusLabel: 'Precaución en Cólico Espasmódico',
    summary:
      'Antiespasmódico. Usar con precaución y en periodos cortos ante cólicos biliares o renales. Puede relajar la musculatura uterina transitoriamente.',
    fetalRisks: []
  },
  'sales-rehidratacion-oral': {
    category: 'A',
    status: 'safe',
    statusLabel: '100% Seguro / Recomendado',
    summary:
      'Pilar fundamental en deshidratación por diarrea o hiperémesis en la gestante.',
    fetalRisks: []
  },
  'sulfato-zinc': {
    category: 'A',
    status: 'safe',
    statusLabel: 'Seguro en Dosis Terapéutica',
    summary: 'Micronutriente seguro y adecuado a requerimientos diarios.',
    fetalRisks: []
  },
  lactulosa: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / De Elección en Estreñimiento',
    summary:
      'Laxante osmótico no absorbible sistémicamente. Primera elección para estreñimiento inducido por progesterona gestacional.',
    fetalRisks: []
  },

  // === RESPIRATORIO Y URGENCIAS ===
  salbutamol: {
    category: 'C',
    status: 'safe',
    statusLabel: 'Compatible / Seguro en Crisis Asmática',
    summary:
      'Broncodilatador de acción corta indispensable en asma gestacional. La hipoxia materna es mucho más lesiva para el feto que el fármaco.',
    fetalRisks: []
  },
  ipratropio: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible en Crisis Bronquial',
    summary: 'Anticolinérgico inhalado seguro como coadyuvante en crisis moderada o severa.',
    fetalRisks: []
  },
  dexametasona: {
    category: 'C',
    status: 'safe',
    statusLabel: 'Esencial en Maduración Pulmonar Fetal (sem 24-34)',
    summary:
      'Corticoide fluorado que atraviesa la placenta. Estándar de oro para acelerar maduración pulmonar fetal ante riesgo de parto pretérmino inminente.',
    fetalRisks: []
  },
  hidrocortisona: {
    category: 'C',
    status: 'safe',
    statusLabel: 'Seguro en Emergencia / Crisis Adrenal',
    summary:
      'Corticoide inactivado en 85% por la 11-beta-HSD2 placentaria. Elección materna en shock anafiláctico o crisis asmática.',
    fetalRisks: []
  },
  adrenalina: {
    category: 'C',
    status: 'safe',
    statusLabel: 'Indispensable en Anafilaxia / Paro',
    summary:
      'Tratamiento de rescate vital en anafilaxia materna y RCP. La reanimación materna garantiza la supervivencia fetal.',
    fetalRisks: []
  },
  difenhidramina: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible en Reacciones Alérgicas',
    summary: 'Antihistamínico de primera generación seguro para prurito gestacional y alergias agudas.',
    fetalRisks: []
  },
  loratadina: {
    category: 'B',
    status: 'safe',
    statusLabel: 'Compatible / Antihistamínico de Elección',
    summary: 'Antihistamínico de 2.ª generación no sedante preferido en rinitis y urticaria gestacional.',
    fetalRisks: []
  },

  // === NEUROLOGÍA Y ANTÍDOTOS ===
  diazepam: {
    category: 'D',
    status: 'contraindicated',
    statusLabel: 'Contraindicado / Riesgo Neonatal Severo',
    summary:
      'Atraviesa placenta rápidamente. Provoca depresión neonatal severa ("síndrome del recién nacido flácido"), hipotermia, hipotonía y síndrome de abstinencia. En convulsión eclampsia se prefiere Sulfato de Magnesio.',
    contraindicatedInTrimester: [1, 2, 3],
    clinicalAlternative: 'Sulfato de Magnesio IV para eclampsia / convulsiones gestacionales.',
    fetalRisks: ['Síndrome del recién nacido flácido', 'Depresión respiratoria neonatal', 'Hipotermia']
  },
  midazolam: {
    category: 'D',
    status: 'caution',
    statusLabel: 'Riesgo / Reservar para Estatus Refractario',
    summary: 'Benzodiacepina de acción corta; reservar solo para sedación de emergencia o estatus refractario.',
    fetalRisks: ['Depresión del SNC neonatal']
  },
  fenitoina: {
    category: 'D',
    status: 'contraindicated',
    statusLabel: 'CONTRAINDICADO / Síndrome Hidantoínico Fetal',
    summary:
      'Teratógeno mayor conocido. Causa Síndrome Hidantoínico Fetal (dismorfia craneofacial, hipoplasia digital, microcefalia y retraso psicomotor).',
    contraindicatedInTrimester: [1, 2, 3],
    clinicalAlternative: 'Levetiracetam o Lamotrigina en epilepsia durante el embarazo.',
    fetalRisks: ['Síndrome hidantoínico fetal', 'Hipoplasia de falanges y uñas', 'Cardiopatías congénitas']
  },
  naloxona: {
    category: 'B',
    status: 'caution',
    statusLabel: 'Uso con Precaución en Sobredosis de Opioides',
    summary: 'Antídoto vital en intoxicación materna por opioides. Titular dosis para evitar abstinencia fetal aguda.',
    fetalRisks: ['Síndrome de abstinencia fetal agudo por reversión brusca']
  },
  flumazenil: {
    category: 'C',
    status: 'caution',
    statusLabel: 'Uso de Emergencia',
    summary: 'Reservar para intoxicación por benzodiacepinas con compromiso de la vía aérea.',
    fetalRisks: []
  },
  atropina: {
    category: 'C',
    status: 'safe',
    statusLabel: 'Vital en Intoxicación por Organofosforados',
    summary: 'Antídoto anticolinérgico vital. Puede inducir taquicardia fetal transitoria.',
    fetalRisks: []
  },
  albendazol: {
    category: 'C',
    status: 'contraindicated',
    statusLabel: 'CONTRAINDICADO en 1.er Trimestre',
    summary:
      'Antihelmíntico con efecto embriotóxico y teratogénico demostrado en modelos animales durante organogénesis. Contraindicado en el 1.er trimestre; en el 2.º y 3.er trimestre solo si hay anemia severa asociada.',
    contraindicatedInTrimester: [1],
    clinicalAlternative: 'Diferir desparasitación hasta después del parto o usar Pamoato de Pirantel.',
    fetalRisks: ['Teratogénesis y embriotoxicidad en 1.er trimestre']
  }
};

/**
 * Función de consulta clínica de seguridad en el embarazo
 */
export function getPregnancyGuidance(
  drug: Medication | { id: string; category?: string; name: string },
  trimester?: 1 | 2 | 3
): EvaluatedPregnancySafety {
  const defaultGuidance: PregnancyGuidance = {
    category: 'C',
    status: 'caution',
    statusLabel: 'Evaluar Riesgo / Beneficio Clínico',
    summary: 'No se dispone de datos concluyentes en humanos. Administrar únicamente si el beneficio materno justifica el riesgo fetal potencial.',
    fetalRisks: []
  };

  const registered = PREGNANCY_DRUG_DATABASE[drug.id] || defaultGuidance;

  let currentStatus: PregnancySafetyStatus = registered.status;
  let isContraindicatedNow = registered.status === 'contraindicated';

  // Si tiene trimestres específicos de contraindicación (ej. Ibuprofeno en 3er trimestre o Albendazol en 1er trimestre)
  if (registered.contraindicatedInTrimester && trimester) {
    if (registered.contraindicatedInTrimester.includes(trimester)) {
      currentStatus = 'contraindicated';
      isContraindicatedNow = true;
    } else if (registered.status === 'contraindicated' && !registered.contraindicatedInTrimester.includes(trimester)) {
      currentStatus = 'caution';
      isContraindicatedNow = false;
    }
  }

  // Estilos visuales acordes a la severidad clínica
  if (currentStatus === 'contraindicated') {
    return {
      guidance: registered,
      isContraindicatedNow: true,
      status: 'contraindicated',
      badgeText: `⛔ Contraindicado en Embarazo (Cat. ${registered.category})`,
      badgeColorClass: 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800',
      borderClass: 'border-rose-500 dark:border-rose-600',
      bgClass: 'bg-rose-50/70 dark:bg-rose-950/20',
      iconType: 'danger'
    };
  }

  if (currentStatus === 'caution') {
    return {
      guidance: registered,
      isContraindicatedNow: false,
      status: 'caution',
      badgeText: `⚠️ Precaución en Embarazo (Cat. ${registered.category})`,
      badgeColorClass: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
      borderClass: 'border-amber-400 dark:border-amber-600',
      bgClass: 'bg-amber-50/70 dark:bg-amber-950/20',
      iconType: 'caution'
    };
  }

  return {
    guidance: registered,
    isContraindicatedNow: false,
    status: 'safe',
    badgeText: `🤰 Seguro / Compatible en Embarazo (Cat. ${registered.category})`,
    badgeColorClass: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800',
    borderClass: 'border-emerald-500 dark:border-emerald-600',
    bgClass: 'bg-emerald-50/70 dark:bg-emerald-950/20',
    iconType: 'safe'
  };
}
