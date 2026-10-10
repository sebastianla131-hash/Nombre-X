// src/utils/prescriptionGenerator.ts
// Pure function for Electronic Health Record (HIS/EHR) & Patient-Friendly Prescription Generation

import { RouteOfAdmin } from '../types/clinical';

export interface PrescriptionGenerationParams {
  medicationName: string;
  concentrationName: string;
  amountMg?: number;
  volumeMl?: number;
  form?: string;
  singleDoseQuantity: number;
  singleDoseMg?: number;
  unitLabel: string;
  route: RouteOfAdmin;
  intervalHours: number;
  durationDays: number;
  bottlesNeeded?: number;
  extraInstructions?: string;
}

export function formatRouteLabel(route: RouteOfAdmin): string {
  switch (route) {
    case 'oral':
      return 'Vía Oral';
    case 'iv':
      return 'Vía Intravenosa';
    case 'im':
      return 'Vía Intramuscular';
    case 'sc':
      return 'Vía Subcutánea';
    case 'rectal':
      return 'Vía Rectal';
    case 'inhalatoria':
      return 'Vía Inhalatoria';
    case 'sublingual':
      return 'Vía Sublingual';
    case 'topica':
      return 'Vía Tópica';
    default:
      return `Vía ${route}`;
  }
}

export function formatConcentrationShort(params: {
  concentrationName: string;
  amountMg?: number;
  volumeMl?: number;
  form?: string;
}): string {
  const { concentrationName, amountMg, volumeMl, form } = params;

  if (amountMg !== undefined && volumeMl !== undefined && volumeMl > 0 && form !== 'tablets') {
    return `${amountMg}mg/${volumeMl}mL`;
  }
  if (amountMg !== undefined && (form === 'tablets' || !volumeMl || volumeMl === 1)) {
    return `${amountMg}mg`;
  }

  // Remove prefixes like "Suspensión ", "Comprimidos ", "Gotas ", clean spaces
  return concentrationName
    .replace(/^Suspensión\s+/i, '')
    .replace(/^Comprimidos\s+/i, '')
    .replace(/^Gotas\s+/i, '')
    .replace(/^Frasco\s+/i, '')
    .replace(/\s+/g, '');
}

export function getScheduleExample(intervalHours: number): string {
  switch (intervalHours) {
    case 6:
      return '(ej. 6AM - 12PM - 6PM - 12AM)';
    case 8:
      return '(ej. 6AM - 2PM - 10PM)';
    case 12:
      return '(ej. 8AM - 8PM)';
    case 24:
      return '(ej. 8:00 AM cada mañana)';
    default:
      return `(cada ${intervalHours} horas)`;
  }
}

export function getDefaultPatientInstructions(form?: string): string {
  if (form === 'suspension') {
    return 'Agite bien el frasco antes de cada toma y use el dosificador.';
  }
  if (form === 'drops') {
    return 'Contar las gotas con calma. Puede mezclarse con una cucharadita de agua o leche.';
  }
  if (form === 'tablets') {
    return 'Tomar con un vaso lleno de agua, preferiblemente con alimentos.';
  }
  return 'Tomar puntualmente a las horas indicadas para asegurar su efectividad.';
}

/**
 * Formats the clinical dose in active mass/potency (mg, g, mcg, UI) without preparation liquid volumes (mL).
 * Nursing and hospital pharmacy determine the exact volume and dilution based on their preparation protocols.
 */
export function formatClinicalDose(params: PrescriptionGenerationParams): string {
  const { singleDoseMg, singleDoseQuantity, unitLabel, amountMg, volumeMl } = params;

  // 1. Determine active dose in mg or international units
  let doseMg = singleDoseMg;

  if (doseMg === undefined || doseMg <= 0) {
    if (unitLabel === 'mL' && amountMg && volumeMl && volumeMl > 0) {
      doseMg = (singleDoseQuantity * amountMg) / volumeMl;
    } else if (unitLabel === 'gotas' && amountMg && volumeMl && volumeMl > 0) {
      doseMg = (singleDoseQuantity / 20) * (amountMg / volumeMl);
    } else if (['comprimido', 'comprimidos', 'cápsula', 'cápsulas', 'tableta', 'tabletas'].includes(unitLabel) && amountMg) {
      doseMg = singleDoseQuantity * amountMg;
    } else if (['mg', 'mcg', 'g', 'UI'].includes(unitLabel)) {
      doseMg = singleDoseQuantity;
    }
  }

  // 2. Units format (UI)
  if (unitLabel === 'UI' || (amountMg && amountMg >= 50000 && !volumeMl)) {
    const uiValue = doseMg !== undefined ? doseMg : singleDoseQuantity;
    return `${Math.round(uiValue).toLocaleString('es-ES')} UI`;
  }

  // 3. Mass format (g, mg, mcg)
  if (doseMg !== undefined && doseMg > 0) {
    // If dose is integer multiple of grams (e.g. 1000 mg -> 1 g, 2000 mg -> 2 g)
    if (doseMg >= 1000 && doseMg % 1000 === 0) {
      return `${doseMg / 1000} g`;
    }
    // If microgram range (e.g. 0.05 mg = 50 mcg)
    if (doseMg < 1 && doseMg >= 0.001) {
      const mcg = Math.round(doseMg * 1000);
      return `${mcg} mcg (${doseMg} mg)`;
    }
    // Standard milligram dose
    const formattedMg = Number.isInteger(doseMg) ? doseMg.toString() : parseFloat(doseMg.toFixed(2)).toString();
    return `${formattedMg} mg`;
  }

  // Fallback if no mass could be determined
  return `${singleDoseQuantity} ${unitLabel}`;
}

/**
 * 1. HIS / EHR Prescription String (Texto para Historia Clínica / Orden Médica):
 * Format:
 * "[Medicamento] [Dosis Activa en mg/g/UI] [Vía], cada [Frecuencia] horas, por [Duración] días."
 * (NO incluye volumen en mL ni frascos a dispensar; la preparación líquida depende de enfermería o farmacia)
 */
export function generateHisPrescription(params: PrescriptionGenerationParams): string {
  const {
    medicationName,
    route,
    intervalHours,
    durationDays,
  } = params;

  const doseStr = formatClinicalDose(params);
  const routeStr = formatRouteLabel(route);

  if (durationDays === 1 && (intervalHours >= 24 || intervalHours === 0)) {
    return `${medicationName} ${doseStr} ${routeStr}, en dosis única.`;
  }

  return `${medicationName} ${doseStr} ${routeStr}, cada ${intervalHours} horas, por ${durationDays} días.`;
}

/**
 * Backwards compatibility alias for EHR
 */
export function generateEhrPrescription(params: PrescriptionGenerationParams): string {
  return generateHisPrescription(params);
}

/**
 * 2. Patient-Friendly Prescription String:
 * Format:
 * "Tomar [Volumen/Cantidad] de [Medicamento] cada [Frecuencia] horas (ej. 6AM - 2PM - 10PM) durante [Duración] días. [Instrucción extra ej. Agite el frasco]."
 */
export function generatePatientPrescription(params: PrescriptionGenerationParams): string {
  const {
    medicationName,
    form,
    singleDoseQuantity,
    unitLabel,
    intervalHours,
    durationDays,
    extraInstructions,
  } = params;

  const schedule = getScheduleExample(intervalHours);
  const extra = extraInstructions || getDefaultPatientInstructions(form);

  return `Tomar ${singleDoseQuantity} ${unitLabel} de ${medicationName} cada ${intervalHours} horas ${schedule} durante ${durationDays} días. ${extra}`;
}
