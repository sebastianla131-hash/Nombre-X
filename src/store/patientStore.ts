// src/store/patientStore.ts
// Medical-grade global patient store using Zustand with validation & persistence

import { create } from 'zustand';
import { PatientProfile, CLINICAL_LIMITS } from '../types/clinical';

export interface PatientState {
  patient: PatientProfile;
  errors: string[];
  setPatient: (patient: PatientProfile) => void;
  updateField: <K extends keyof PatientProfile>(field: K, value: PatientProfile[K]) => void;
  resetPatient: () => void;
  validate: () => boolean;
}

const STORAGE_KEY = 'medformula_patient_data';

const DEFAULT_PATIENT: PatientProfile = {
  weightKg: 14,
  heightCm: 95,
  ageYears: 3,
  ageMonths: 0,
  gender: 'male',
  isPregnant: false,
  pregnancyTrimester: undefined,
  serumCreatinineMgDl: undefined,
};

function getInitialPatient(): PatientProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return sanitizePatient(parsed);
    }
  } catch {
    // fallback
  }
  return DEFAULT_PATIENT;
}

export function sanitizePatient(input: Partial<PatientProfile>): PatientProfile {
  const weight = typeof input.weightKg === 'number'
    ? Math.min(Math.max(input.weightKg, CLINICAL_LIMITS.MIN_WEIGHT_KG), CLINICAL_LIMITS.MAX_WEIGHT_KG)
    : DEFAULT_PATIENT.weightKg;

  const height = typeof input.heightCm === 'number' && input.heightCm > 0
    ? Math.min(Math.max(input.heightCm, CLINICAL_LIMITS.MIN_HEIGHT_CM), CLINICAL_LIMITS.MAX_HEIGHT_CM)
    : undefined;

  const ageYears = typeof input.ageYears === 'number'
    ? Math.min(Math.max(input.ageYears, CLINICAL_LIMITS.MIN_AGE_YEARS), CLINICAL_LIMITS.MAX_AGE_YEARS)
    : 0;

  const ageMonths = typeof input.ageMonths === 'number'
    ? Math.min(Math.max(input.ageMonths, 0), 11)
    : 0;

  const creatinine = typeof input.serumCreatinineMgDl === 'number' && input.serumCreatinineMgDl > 0
    ? Math.min(Math.max(input.serumCreatinineMgDl, CLINICAL_LIMITS.MIN_CREATININE_MG_DL), CLINICAL_LIMITS.MAX_CREATININE_MG_DL)
    : undefined;

  const gender = input.gender === 'female' ? 'female' : 'male';
  const isPregnant = gender === 'female' ? Boolean(input.isPregnant) : false;
  const trimester = isPregnant ? input.pregnancyTrimester : undefined;

  return {
    weightKg: weight,
    heightCm: height,
    ageYears,
    ageMonths,
    gender,
    isPregnant,
    pregnancyTrimester: trimester,
    serumCreatinineMgDl: creatinine,
  };
}

export function validatePatientProfile(patient: PatientProfile): string[] {
  const errors: string[] = [];

  if (patient.weightKg < CLINICAL_LIMITS.MIN_WEIGHT_KG || patient.weightKg > CLINICAL_LIMITS.MAX_WEIGHT_KG) {
    errors.push(`El peso debe encontrarse entre ${CLINICAL_LIMITS.MIN_WEIGHT_KG} kg y ${CLINICAL_LIMITS.MAX_WEIGHT_KG} kg.`);
  }

  if (patient.heightCm !== undefined && (patient.heightCm < CLINICAL_LIMITS.MIN_HEIGHT_CM || patient.heightCm > CLINICAL_LIMITS.MAX_HEIGHT_CM)) {
    errors.push(`La talla debe encontrarse entre ${CLINICAL_LIMITS.MIN_HEIGHT_CM} cm y ${CLINICAL_LIMITS.MAX_HEIGHT_CM} cm.`);
  }

  if (patient.serumCreatinineMgDl !== undefined && (patient.serumCreatinineMgDl < CLINICAL_LIMITS.MIN_CREATININE_MG_DL || patient.serumCreatinineMgDl > CLINICAL_LIMITS.MAX_CREATININE_MG_DL)) {
    errors.push(`La creatinina sérica debe encontrarse entre ${CLINICAL_LIMITS.MIN_CREATININE_MG_DL} y ${CLINICAL_LIMITS.MAX_CREATININE_MG_DL} mg/dL.`);
  }

  return errors;
}

export const usePatientStore = create<PatientState>((set, get) => ({
  patient: getInitialPatient(),
  errors: [],

  setPatient: (newPatient: PatientProfile) => {
    const sanitized = sanitizePatient(newPatient);
    const errors = validatePatientProfile(sanitized);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
    } catch {}
    set({ patient: sanitized, errors });
  },

  updateField: <K extends keyof PatientProfile>(field: K, value: PatientProfile[K]) => {
    const current = get().patient;
    const updated = { ...current, [field]: value };
    const sanitized = sanitizePatient(updated);
    const errors = validatePatientProfile(sanitized);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
    } catch {}
    set({ patient: sanitized, errors });
  },

  resetPatient: () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PATIENT));
    } catch {}
    set({ patient: DEFAULT_PATIENT, errors: [] });
  },

  validate: () => {
    const errors = validatePatientProfile(get().patient);
    set({ errors });
    return errors.length === 0;
  },
}));
