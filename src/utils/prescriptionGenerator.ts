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
 * 1. HIS / EHR Prescription String:
 * Format:
 * "[Medicamento], [Concentración], Administrar [Dosis] [Vía], cada [Frecuencia]h, por [Duración]d. Dispensar: [N] frascos."
 */
export function generateHisPrescription(params: PrescriptionGenerationParams): string {
  const {
    medicationName,
    concentrationName,
    amountMg,
    volumeMl,
    form,
    singleDoseQuantity,
    unitLabel,
    route,
    intervalHours,
    durationDays,
    bottlesNeeded,
  } = params;

  const concStr = formatConcentrationShort({ concentrationName, amountMg, volumeMl, form });
  const routeStr = formatRouteLabel(route);
  const bottlePart = bottlesNeeded && bottlesNeeded > 0 ? ` Dispensar: ${bottlesNeeded} frascos.` : '';

  return `${medicationName}, ${concStr}, Administrar ${singleDoseQuantity} ${unitLabel} ${routeStr}, cada ${intervalHours}h, por ${durationDays}d.${bottlePart}`;
}

/**
 * Backwards compatibility alias for EHR
 */
export function generateEhrPrescription(params: PrescriptionGenerationParams): string {
  const {
    medicationName,
    concentrationName,
    amountMg,
    volumeMl,
    form,
    singleDoseQuantity,
    unitLabel,
    route,
    intervalHours,
    durationDays,
  } = params;

  const concStr = formatConcentrationShort({ concentrationName, amountMg, volumeMl, form });
  const routeStr = formatRouteLabel(route);

  return `${medicationName}, ${concStr}, Administrar ${singleDoseQuantity} ${unitLabel} ${routeStr}, cada ${intervalHours} horas, por ${durationDays} días.`;
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
