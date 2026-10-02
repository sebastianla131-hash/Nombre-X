/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// src/utils/clinicalRounding.test.ts
// Unit Tests for Intelligent Clinical Rounding (SaMD Module)
// Run with: npx tsx src/utils/clinicalRounding.test.ts

import { clinicalRound, formatClinicalDose, getSyringeCalibration } from './clinicalRounding';

// Minimalist zero-dependency Jest/Vitest-compatible test harness
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function describe(suiteName: string, fn: () => void) {
  console.log(`\n📦 ${suiteName}`);
  fn();
}

function test(testName: string, fn: () => void) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✅ PASS: ${testName}`);
  } catch (err: unknown) {
    failedTests++;
    console.error(`  ❌ FAIL: ${testName}`);
    if (err instanceof Error) {
      console.error(`     ${err.message}`);
    } else {
      console.error(`     ${String(err)}`);
    }
  }
}

const it = test;

function expect<T>(actual: T) {
  return {
    toBe(expected: T) {
      if (actual !== expected) {
        throw new Error(`Expected ${JSON.stringify(expected)} (${typeof expected}), but received ${JSON.stringify(actual)} (${typeof actual})`);
      }
    },
    toBeCloseTo(expected: number, delta: number = 0.0001) {
      if (typeof actual !== 'number' || Math.abs(actual - expected) > delta) {
        throw new Error(`Expected ${actual} to be close to ${expected} within delta ${delta}`);
      }
    },
  };
}

console.log('====================================================');
console.log('🧪 RUNNING INTELLIGENT CLINICAL ROUNDING AUDIT TESTS');
console.log('====================================================');

// =========================================================================
// RULE 1: GOTAS (DROPS)
// =========================================================================
describe('Regla 1: Gotas (drops) - Redondeo matemático estricto al entero', () => {
  it('Redondea hacia abajo cuando el decimal es < 0.5 (ej. 14.3 -> 14 gotas)', () => {
    expect(clinicalRound(14.3, 'drops')).toBe(14);
    expect(formatClinicalDose(14.3, 'drops')).toBe('14');
  });

  it('Redondea hacia arriba cuando el decimal es > 0.5 (ej. 14.6 -> 15 gotas)', () => {
    expect(clinicalRound(14.6, 'drops')).toBe(15);
    expect(formatClinicalDose(14.6, 'drops')).toBe('15');
  });

  it('Redondea exactamente en la frontera de 0.5 (ej. 14.5 -> 15 gotas)', () => {
    expect(clinicalRound(14.5, 'drops')).toBe(15);
    expect(formatClinicalDose(14.5, 'drops')).toBe('15');
  });

  it('Maneja dosis bajas pediátricas (< 1 gota)', () => {
    expect(clinicalRound(0.8, 'drops')).toBe(1);
    expect(formatClinicalDose(0.8, 'drops')).toBe('1');
    expect(clinicalRound(0.3, 'drops')).toBe(0);
    expect(formatClinicalDose(0.3, 'drops')).toBe('0');
  });

  it('No introduce decimales innecesarios en formato string', () => {
    expect(formatClinicalDose(20.0, 'drops')).toBe('20');
  });
});

// =========================================================================
// RULE 2: COMPRIMIDOS / TABLETAS (TABLET)
// =========================================================================
describe('Regla 2: Comprimidos / Tabletas (tablet) - Redondeo a la mitad más cercana (paso 0.5)', () => {
  it('Redondea 1.2 comprimidos a 1.0 (ejemplo prompt: 1.2 -> 1.0)', () => {
    expect(clinicalRound(1.2, 'tablet')).toBe(1.0);
    expect(formatClinicalDose(1.2, 'tablet')).toBe('1');
  });

  it('Redondea 1.3 comprimidos a 1.5 (ejemplo prompt: 1.3 -> 1.5)', () => {
    expect(clinicalRound(1.3, 'tablet')).toBe(1.5);
    expect(formatClinicalDose(1.3, 'tablet')).toBe('1.5');
  });

  it('Redondea 1.8 comprimidos a 2.0 (ejemplo prompt: 1.8 -> 2.0)', () => {
    expect(clinicalRound(1.8, 'tablet')).toBe(2.0);
    expect(formatClinicalDose(1.8, 'tablet')).toBe('2');
  });

  it('Mantiene dosis de medio comprimido exacto (0.5 y 1.5)', () => {
    expect(clinicalRound(0.5, 'tablet')).toBe(0.5);
    expect(formatClinicalDose(0.5, 'tablet')).toBe('0.5');
    expect(clinicalRound(1.5, 'tablet')).toBe(1.5);
    expect(formatClinicalDose(1.5, 'tablet')).toBe('1.5');
  });

  it('Evalúa límites exactos en cuartos de tableta (0.25 y 0.75)', () => {
    // 1.25 está en la frontera entre 1.0 y 1.5 -> redondea a 1.5
    expect(clinicalRound(1.25, 'tablet')).toBe(1.5);
    expect(formatClinicalDose(1.25, 'tablet')).toBe('1.5');

    // 1.75 está en la frontera entre 1.5 y 2.0 -> redondea a 2.0
    expect(clinicalRound(1.75, 'tablet')).toBe(2.0);
    expect(formatClinicalDose(1.75, 'tablet')).toBe('2');
  });

  it('Fracciones mínimas subterapéuticas (< 0.25)', () => {
    expect(clinicalRound(0.2, 'tablet')).toBe(0);
    expect(formatClinicalDose(0.2, 'tablet')).toBe('0');
  });
});

// =========================================================================
// RULE 3A: LÍQUIDOS < 1 mL (JERINGA TUBERCULINA 1cc - PASO 0.01 mL)
// =========================================================================
describe('Regla 3A: Líquidos < 1 mL (Jeringa Tuberculina) - Redondeo a 0.01 mL (2 decimales)', () => {
  it('Redondea 0.346 mL a 0.35 mL (ejemplo prompt: 0.346 -> 0.35 mL)', () => {
    expect(clinicalRound(0.346, 'suspension')).toBe(0.35);
    expect(formatClinicalDose(0.346, 'suspension')).toBe('0.35');
  });

  it('Redondea hacia abajo cuando el 3er decimal es < 5 (ej. 0.342 mL -> 0.34 mL)', () => {
    expect(clinicalRound(0.342, 'suspension')).toBe(0.34);
    expect(formatClinicalDose(0.342, 'suspension')).toBe('0.34');
  });

  it('Elimina ceros a la derecha innecesarios si termina en 0 (ej. 0.100 -> "0.1", no "0.10")', () => {
    expect(clinicalRound(0.100, 'suspension')).toBe(0.1);
    expect(formatClinicalDose(0.100, 'suspension')).toBe('0.1');
  });

  it('Aplica idéntico criterio a ampollas parenterales de volumen micro (ampoule)', () => {
    expect(clinicalRound(0.055, 'ampoule')).toBe(0.06);
    expect(formatClinicalDose(0.055, 'ampoule')).toBe('0.06');
  });

  it('Transición de frontera inmediata a 1.0 mL (0.996 mL -> 1.0 mL)', () => {
    expect(clinicalRound(0.996, 'suspension')).toBe(1.0);
    expect(formatClinicalDose(0.996, 'suspension')).toBe('1');
  });
});

// =========================================================================
// RULE 3B: LÍQUIDOS ENTRE 1 mL Y 5 mL (JERINGA 3cc/5cc - PASO 0.1 mL)
// =========================================================================
describe('Regla 3B: Líquidos 1 mL a 5 mL (Jeringa 3-5cc) - Redondeo a 0.1 mL (1 decimal)', () => {
  it('Redondea 3.14 mL a 3.1 mL (ejemplo prompt: 3.14 -> 3.1 mL)', () => {
    expect(clinicalRound(3.14, 'suspension')).toBe(3.1);
    expect(formatClinicalDose(3.14, 'suspension')).toBe('3.1');
  });

  it('Redondea 3.16 mL a 3.2 mL (ejemplo prompt: 3.16 -> 3.2 mL)', () => {
    expect(clinicalRound(3.16, 'suspension')).toBe(3.2);
    expect(formatClinicalDose(3.16, 'suspension')).toBe('3.2');
  });

  it('Redondea 1.04 mL a 1.0 mL (formato "1")', () => {
    expect(clinicalRound(1.04, 'suspension')).toBe(1.0);
    expect(formatClinicalDose(1.04, 'suspension')).toBe('1');
  });

  it('Redondea 2.50 mL sin ceros redundantes ("2.5")', () => {
    expect(clinicalRound(2.5, 'suspension')).toBe(2.5);
    expect(formatClinicalDose(2.5, 'suspension')).toBe('2.5');
  });

  it('Verifica el límite superior de 5.0 mL (4.98 mL -> 5.0 mL)', () => {
    expect(clinicalRound(4.98, 'suspension')).toBe(5.0);
    expect(formatClinicalDose(4.98, 'suspension')).toBe('5');
  });

  it('Aplica en ampollas parenterales dentro de 1 a 5 mL', () => {
    expect(clinicalRound(2.38, 'ampoule')).toBe(2.4);
    expect(formatClinicalDose(2.38, 'ampoule')).toBe('2.4');
  });
});

// =========================================================================
// RULE 3C: LÍQUIDOS > 5 mL (JERINGA ORAL / 10cc - PASO 0.5 mL)
// =========================================================================
describe('Regla 3C: Líquidos > 5 mL (Jeringa oral / 10cc) - Redondeo al 0.5 más cercano', () => {
  it('Redondea 7.2 mL a 7.0 mL (ejemplo prompt: 7.2 -> 7.0 mL)', () => {
    expect(clinicalRound(7.2, 'suspension')).toBe(7.0);
    expect(formatClinicalDose(7.2, 'suspension')).toBe('7');
  });

  it('Redondea 7.3 mL a 7.5 mL (ejemplo prompt: 7.3 -> 7.5 mL)', () => {
    expect(clinicalRound(7.3, 'suspension')).toBe(7.5);
    expect(formatClinicalDose(7.3, 'suspension')).toBe('7.5');
  });

  it('Redondea 7.8 mL a 8.0 mL (ejemplo prompt: 7.8 -> 8.0 mL)', () => {
    expect(clinicalRound(7.8, 'suspension')).toBe(8.0);
    expect(formatClinicalDose(7.8, 'suspension')).toBe('8');
  });

  it('Maneja frontera justo por encima de 5 mL (ej. 5.1 -> 5.0 mL; 5.3 -> 5.5 mL)', () => {
    expect(clinicalRound(5.1, 'suspension')).toBe(5.0);
    expect(formatClinicalDose(5.1, 'suspension')).toBe('5');

    expect(clinicalRound(5.3, 'suspension')).toBe(5.5);
    expect(formatClinicalDose(5.3, 'suspension')).toBe('5.5');
  });

  it('Maneja volúmenes altos pediátricos (ej. 12.74 mL -> 12.5 mL; 12.76 mL -> 13 mL)', () => {
    expect(clinicalRound(12.74, 'suspension')).toBe(12.5);
    expect(formatClinicalDose(12.74, 'suspension')).toBe('12.5');

    expect(clinicalRound(12.76, 'suspension')).toBe(13.0);
    expect(formatClinicalDose(12.76, 'suspension')).toBe('13');
  });

  it('Funciona en ampollas parenterales de gran volumen (> 5 mL)', () => {
    expect(clinicalRound(9.2, 'ampoule')).toBe(9.0);
    expect(formatClinicalDose(9.2, 'ampoule')).toBe('9');
    expect(clinicalRound(9.4, 'ampoule')).toBe(9.5);
    expect(formatClinicalDose(9.4, 'ampoule')).toBe('9.5');
  });
});

// =========================================================================
// RULE 4: CASOS EXTREMOS Y DE SEGURIDAD (EDGE CASES & SAFETY)
// =========================================================================
describe('Regla 4: Casos Extremos y Manejo de Entradas Atípicas (Edge Cases)', () => {
  it('Retorna 0 o "0" ante dosis cero', () => {
    expect(clinicalRound(0, 'suspension')).toBe(0);
    expect(formatClinicalDose(0, 'suspension')).toBe('0');
  });

  it('Protección contra números negativos', () => {
    expect(clinicalRound(-5.4, 'drops')).toBe(0);
    expect(formatClinicalDose(-5.4, 'drops')).toBe('0');
  });

  it('Protección contra NaN e Infinity', () => {
    expect(clinicalRound(NaN, 'tablet')).toBe(0);
    expect(formatClinicalDose(NaN, 'tablet')).toBe('0');
    expect(clinicalRound(Infinity, 'suspension')).toBe(0);
    expect(formatClinicalDose(Infinity, 'suspension')).toBe('0');
  });

  it('Soporta retorno numérico opcional mediante asNumber = true', () => {
    const numResult = formatClinicalDose(3.14, 'suspension', true);
    expect(typeof numResult).toBe('number');
    expect(numResult).toBe(3.1);
  });

  it('getSyringeCalibration sugiere correctamente el dispositivo según el volumen', () => {
    expect(getSyringeCalibration(0.4).step).toBe(0.01);
    expect(getSyringeCalibration(2.5).step).toBe(0.1);
    expect(getSyringeCalibration(8.0).step).toBe(0.5);
  });
});

console.log('\n====================================================');
console.log(`🏁 RESUMEN: ${passedTests}/${totalTests} pruebas pasadas (${failedTests} fallos).`);
console.log('====================================================');

if (failedTests > 0) {
  process.exit(1);
}
