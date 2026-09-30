import { Medication } from '../types';
import { ANTIBIOTICS_MEDICATIONS } from './antibiotics';
import { ANALGESICS_MEDICATIONS } from './analgesics';
import { GASTRO_MEDICATIONS } from './gastro';
import { RESPIRATORY_EMERGENCY_MEDICATIONS } from './respiratory_emergency';
import { NEUROLOGY_ANTIDOTES_MEDICATIONS } from './neurology_antidotes';
import { CARDIOVASCULAR_MEDICATIONS } from './cardiovascular';
import { ENDOCRINOLOGY_MEDICATIONS } from './endocrinology';
import { GYNECOLOGY_MEDICATIONS } from './gynecology';

/**
 * Listado Oficial Integrado de Medicamentos 2025
 * Superintendencia de Regulación Sanitaria (SRS) - Gobierno de El Salvador
 * Incluye clasificación OMS AWaRe (Acceso, Precaución, Reserva), códigos ATC y dosis pediátrico/adulto.
 */
export const MEDICATIONS: Medication[] = [
  ...ANTIBIOTICS_MEDICATIONS,
  ...ANALGESICS_MEDICATIONS,
  ...GASTRO_MEDICATIONS,
  ...RESPIRATORY_EMERGENCY_MEDICATIONS,
  ...NEUROLOGY_ANTIDOTES_MEDICATIONS,
  ...CARDIOVASCULAR_MEDICATIONS,
  ...ENDOCRINOLOGY_MEDICATIONS,
  ...GYNECOLOGY_MEDICATIONS
];

export interface InfusionProtocol {
  id: string;
  drugName: string;
  indication: string;
  defaultConcentration: {
    drugAmountMg: number;
    solutionVolumeMl: number;
    diluent: string;
  };
  doseUnit: 'mcg/kg/min' | 'mcg/min' | 'mg/h' | 'UI/h';
  typicalDoseRange: {
    min: number;
    initial: number;
    max: number;
  };
  clinicalTips: string;
}

export const INFUSION_PROTOCOLS: InfusionProtocol[] = [
  {
    id: 'noradrenalina',
    drugName: 'Noradrenalina (Norepinefrina)',
    indication: 'Shock Séptico / Vasodilatador (PAM diana ≥ 65 mmHg)',
    defaultConcentration: {
      drugAmountMg: 8, // 2 ampollas de 4 mg
      solutionVolumeMl: 100, // 8 mg en 100 mL D5% = 80 mcg/mL
      diluent: 'Dextrosa 5% en Agua'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1,
      max: 1.5
    },
    clinicalTips: 'Vasopresor de 1ra elección en shock séptico. Administrar preferiblemente por Vía Venosa Central (VVC) para evitar extravasación y necrosis.'
  },
  {
    id: 'adrenalina-infusion',
    drugName: 'Epinefrina (Adrenalina Infusión)',
    indication: 'Shock Anafiláctico Refractario / Shock Cardiogénico Pediátrico',
    defaultConcentration: {
      drugAmountMg: 4, // 4 ampollas de 1 mg en 100 mL = 40 mcg/mL
      solutionVolumeMl: 100,
      diluent: 'Dextrosa 5% en Agua o Salina 0.9%'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1,
      max: 1.0
    },
    clinicalTips: 'Agonista inotrópico y vasopresor potente. Titular para mantener perfusión periférica, llenado capilar <2s y presión arterial media.'
  },
  {
    id: 'dopamina',
    drugName: 'Dopamina',
    indication: 'Shock Cardiogénico con Bradicardia / Hipotensión',
    defaultConcentration: {
      drugAmountMg: 200, // 1 ampolla de 200 mg (40 mg/mL x 5 mL)
      solutionVolumeMl: 250, // 800 mcg/mL
      diluent: 'Dextrosa 5% en Agua'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 2,
      initial: 5,
      max: 20
    },
    clinicalTips: 'Efecto inotrópico beta-1 a dosis intermedias (5-10 mcg/kg/min); efecto vasoconstrictor alfa a dosis altas (>10 mcg/kg/min). Cuidado con taquiarritmias.'
  },
  {
    id: 'dobutamina',
    drugName: 'Dobutamina',
    indication: 'Shock Cardiogénico con Disfunción Sistólica Miocárdica',
    defaultConcentration: {
      drugAmountMg: 250, // 1 ampolla de 250 mg (12.5 mg/mL x 20 mL)
      solutionVolumeMl: 250, // 1000 mcg/mL
      diluent: 'Dextrosa 5% en Agua'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 2.5,
      initial: 5.0,
      max: 20.0
    },
    clinicalTips: 'Inodilatador: aumenta la contractilidad miocárdica (inotropo) y reduce la poscarga ventricular. Requiere volemia adecuada previa.'
  },
  {
    id: 'fentanilo',
    drugName: 'Fentanilo',
    indication: 'Sedación y Analgesia en UCI / Ventilación Mecánica',
    defaultConcentration: {
      drugAmountMg: 1, // 2 ampollas de 500 mcg = 1000 mcg
      solutionVolumeMl: 100, // 10 mcg/mL
      diluent: 'Solución Fisiológica 0.9%'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.02,
      initial: 0.03,
      max: 0.08
    },
    clinicalTips: 'Opioide de acción rápida. Monitorizar escala RASS o CPOT. Riesgo de acumulación en infusión prolongada (>48h).'
  },
  {
    id: 'midazolam',
    drugName: 'Midazolam',
    indication: 'Sedación Continua en UCI / Estatus Epiléptico Refractario',
    defaultConcentration: {
      drugAmountMg: 100, // 2 ampollas de 50 mg
      solutionVolumeMl: 100, // 1 mg/mL
      diluent: 'Solución Fisiológica 0.9%'
    },
    doseUnit: 'mcg/kg/min',
    typicalDoseRange: {
      min: 0.5,
      initial: 1.0,
      max: 4.0
    },
    clinicalTips: 'Benzodiacepina lipofílica con metabolito activo que se acumula en falla renal y hepática.'
  },
  {
    id: 'insulina-regular',
    drugName: 'Insulina Regular Rápida',
    indication: 'Cetoacidosis Diabética (CAD) / Estado Hiperosmolar',
    defaultConcentration: {
      drugAmountMg: 100, // 100 UI en 100 mL = 1 UI/mL
      solutionVolumeMl: 100,
      diluent: 'Solución Salina 0.9%'
    },
    doseUnit: 'UI/h',
    typicalDoseRange: {
      min: 0.05,
      initial: 0.1, // 0.1 UI/kg/h
      max: 0.2
    },
    clinicalTips: 'Purgar 20-30 mL por el equipo de infusión antes de conectar (la insulina se adhiere al plástico del tubo). Objetivo CAD: descenso de glucemia 50-75 mg/dL por hora.'
  }
];
