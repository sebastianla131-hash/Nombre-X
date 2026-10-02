/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Módulo de Redondeo Clínico Inteligente (SaMD)
 *
 * En la práctica clínica real, una jeringa no puede medir 3.14 mL ni un paciente
 * puede fraccionar un comprimido en 0.83.
 *
 * Este algoritmo adapta las dosis teóricas calculadas matemáticamente a los calibres
 * físicos de administración (ranurado de comprimidos, conteo de gotas y calibres
 * de jeringas de tuberculina, 3-5cc o jeringas orales de 10cc).
 */

export type PharmaceuticalForm = 'suspension' | 'tablet' | 'ampoule' | 'drops';

export interface SyringeCalibrationInfo {
  syringeType: string;
  step: number;
  decimals: number;
}

/**
 * Obtiene la jeringa recomendada y el calibre de medición según el volumen líquido
 */
export function getSyringeCalibration(volumeMl: number): SyringeCalibrationInfo {
  if (volumeMl < 1) {
    return {
      syringeType: 'Jeringa de Tuberculina 1cc (Insulina/Ped)',
      step: 0.01,
      decimals: 2,
    };
  }
  if (volumeMl <= 5) {
    return {
      syringeType: 'Jeringa estándar de 3cc o 5cc',
      step: 0.1,
      decimals: 1,
    };
  }
  return {
    syringeType: 'Jeringa oral graduada / Jeringa de 10cc',
    step: 0.5,
    decimals: 1,
  };
}

/**
 * Redondeo matemático puro con corrección para imprecisiones de coma flotante IEEE 754
 */
function roundToStep(value: number, step: number): number {
  const inverse = 1 / step;
  return Math.round((value + Number.EPSILON) * inverse) / inverse;
}

/**
 * Elimina ceros no significativos a la derecha de un número en formato string
 * Ejemplos:
 *  - 3.50 -> "3.5"
 *  - 14.0 -> "14"
 *  - 0.350 -> "0.35"
 */
function stripTrailingZeros(num: number): string {
  // Corregir posibles artefactos de coma flotante (ej. 1.4999999999999998)
  const normalized = Number(num.toFixed(4));
  return normalized.toString();
}

/**
 * Redondea un valor clínico al número representativo más cercano según la forma farmacéutica
 *
 * 1. Gotas (drops): Entero más cercano (no existen fracciones de gota).
 * 2. Comprimidos (tablet): Múltiplo de 0.5 más cercano (ranurado a la mitad).
 * 3. Líquidos (suspension / ampoule):
 *    - < 1 mL: Paso de 0.01 mL (Jeringa tuberculina).
 *    - 1 a 5 mL: Paso de 0.1 mL (Jeringa de 3cc / 5cc).
 *    - > 5 mL: Paso de 0.5 mL (Jeringa oral / 10cc).
 */
export function clinicalRound(
  value: number,
  form: PharmaceuticalForm
): number {
  if (typeof value !== 'number' || isNaN(value) || !isFinite(value) || value <= 0) {
    return 0;
  }

  switch (form) {
    case 'drops':
      // 1. Gotas: Redondeo matemático estricto al número entero más cercano
      return Math.round(value + Number.EPSILON);

    case 'tablet':
      // 2. Comprimidos: Redondeo al 0.5 más cercano (mitad de pastilla)
      return roundToStep(value, 0.5);

    case 'suspension':
    case 'ampoule': {
      // 3. Líquidos: Basado en el volumen y el calibre de la jeringa
      if (value < 1) {
        // Jeringa de Tuberculina 1cc: precisión de 0.01 mL
        return roundToStep(value, 0.01);
      }
      if (value <= 5) {
        // Jeringa de 3cc o 5cc: precisión de 0.1 mL
        return roundToStep(value, 0.1);
      }
      // Jeringa oral o de 10cc (> 5 mL): paso de 0.5 mL
      return roundToStep(value, 0.5);
    }

    default: {
      const _exhaustiveCheck: never = form;
      return value;
    }
  }
}

/**
 * Formatea la dosis clínica calculada aplicando el redondeo inteligente
 * y retornando un string limpio sin ceros innecesarios a la derecha,
 * o un número si se especifica el parámetro opcional `asNumber`.
 *
 * @param value Dosis matemática pura (ej. 3.1415, 14.6, 1.83)
 * @param form Forma farmacéutica ('suspension' | 'tablet' | 'ampoule' | 'drops')
 * @param asNumber Si es true, retorna number en lugar de string (default: false)
 * @returns string | number (ej. "3.1", "15", "2", "0.35")
 */
export function formatClinicalDose(
  value: number,
  form: PharmaceuticalForm,
  asNumber: boolean = false
): string | number {
  const rounded = clinicalRound(value, form);

  if (asNumber) {
    return rounded;
  }

  return stripTrailingZeros(rounded);
}
