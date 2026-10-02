// src/store/patientStore.ts
// Global Patient Profile Store for MedFormula MD (Zustand + LocalStorage Persistence)

import { create } from 'zustand';
import { PatientProfile } from '../types/clinical';

export interface PatientStoreState {
  patient: PatientProfile;
  setPatient: (patient: PatientProfile | ((prev: PatientProfile) => PatientProfile)) => void;
  updatePatientField: <K extends keyof PatientProfile>(field: K, value: PatientProfile[K]) => void;
  resetPatient: () => void;
}

const STORAGE_KEY = 'mdformulary_patient';

export const DEFAULT_PATIENT: PatientProfile = {
  weightKg: 14,
  heightCm: 95,
  ageYears: 3,
  ageMonths: 0,
  gender: 'male',
  serumCreatinineMgDl: 0.7,
  isPregnant: false,
  pregnancyTrimester: undefined,
};

function loadStoredPatient(): PatientProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (typeof parsed === 'object' && parsed !== null) {
        if (!parsed.heightCm) {
          parsed.heightCm = parsed.weightKg >= 45 ? 170 : 95;
        }
        return { ...DEFAULT_PATIENT, ...parsed };
      }
    }
  } catch {}
  return DEFAULT_PATIENT;
}

export const usePatientStore = create<PatientStoreState>((set) => ({
  patient: loadStoredPatient(),

  setPatient: (updater) => {
    set((state) => {
      const newPatient = typeof updater === 'function' ? updater(state.patient) : updater;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newPatient));
      } catch {}
      return { patient: newPatient };
    });
  },

  updatePatientField: (field, value) => {
    set((state) => {
      const updated = { ...state.patient, [field]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return { patient: updated };
    });
  },

  resetPatient: () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PATIENT));
    } catch {}
    set({ patient: DEFAULT_PATIENT });
  },
}));
