// src/store/presetsStore.ts
// Medical-grade Presets & Protocols Store for MedFormula MD (Zustand + Persistence)

import { create } from 'zustand';
import { ClinicalPreset } from '../types/clinical';

export interface PresetsState {
  presets: ClinicalPreset[];
  activePresetId: string | null;
  setActivePreset: (id: string | null) => void;
  addPreset: (preset: ClinicalPreset) => void;
  deletePreset: (id: string) => void;
  resetToDefaults: () => void;
}

const STORAGE_KEY = 'medformula_clinical_presets_v1';

export const DEFAULT_PRESETS: ClinicalPreset[] = [
  {
    id: 'faringoamigdalitis_ped',
    title: 'Faringoamigdalitis Pediátrica',
    description: 'Esquema de primera línea para faringitis bacteriana por Streptococcus pyogenes + antipirético.',
    category: 'Pediatría / Infeccioso',
    color: 'blue',
    items: [
      {
        drugId: 'amoxicilina',
        drugName: 'Amoxicilina',
        indicationName: 'Faringoamigdalitis Bacteriana',
        concentrationName: 'Suspensión 250 mg / 5 mL',
        amountMg: 250,
        volumeMl: 5,
        form: 'suspension',
        doseMgPerKgDay: 50,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 10,
        route: 'oral',
        instructions: 'Agite antes de usar. Completar los 10 días para prevenir fiebre reumática.',
      },
      {
        drugId: 'acetaminofen',
        drugName: 'Acetaminofén (Paracetamol)',
        indicationName: 'Control de Fiebre y Odinofagia',
        concentrationName: 'Jarabe 150 mg / 5 mL',
        amountMg: 150,
        volumeMl: 5,
        form: 'suspension',
        doseMgPerKgDay: 60,
        frequencyPerDay: 4,
        intervalHours: 6,
        durationDays: 3,
        route: 'oral',
        instructions: 'Administrar solo en caso de fiebre > 38°C o dolor intenso.',
      },
    ],
  },
  {
    id: 'oma_alta_dosis',
    title: 'Otitis Media Aguda (Alta Dosis) + AINE',
    description: 'OMA resistente según guías AAP (90 mg/kg/día Amoxicilina) con analgesia antiinflamatoria.',
    category: 'Pediatría / Otorrino',
    color: 'amber',
    items: [
      {
        drugId: 'amox_clav',
        drugName: 'Amoxicilina + Ácido Clavulánico',
        indicationName: 'OMA Alta Dosis (ES)',
        concentrationName: 'Suspensión ES 600 mg / 5 mL',
        amountMg: 600,
        volumeMl: 5,
        form: 'suspension',
        doseMgPerKgDay: 90,
        frequencyPerDay: 2,
        intervalHours: 12,
        durationDays: 10,
        route: 'oral',
        instructions: 'Tomar al inicio de las comidas para mejorar tolerancia gastrointestinal.',
      },
      {
        drugId: 'ibuprofeno',
        drugName: 'Ibuprofeno',
        indicationName: 'Otalgia Aguda / Antiinflamatorio',
        concentrationName: 'Suspensión 100 mg / 5 mL',
        amountMg: 100,
        volumeMl: 5,
        form: 'suspension',
        doseMgPerKgDay: 30,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 3,
        route: 'oral',
        instructions: 'Tomar siempre con leche o alimentos.',
      },
    ],
  },
  {
    id: 'laringotraqueitis_crupo',
    title: 'Crupo / Laringotraqueítis Aguda',
    description: 'Corticoterapia sistémica de rescate para edema laríngeo agudo.',
    category: 'Urgencias / Respiratorio',
    color: 'emerald',
    items: [
      {
        drugId: 'dexametasona',
        drugName: 'Dexametasona',
        indicationName: 'Laringotraqueítis (Crupo Moderado/Severo)',
        concentrationName: 'Elixir 0.5 mg / 5 mL',
        amountMg: 0.5,
        volumeMl: 5,
        form: 'suspension',
        doseMgPerKgDay: 0.6,
        frequencyPerDay: 1,
        intervalHours: 24,
        durationDays: 1,
        route: 'oral',
        instructions: 'Dosis única. Puede repetirse en 24h si persiste estridor en reposo.',
      },
    ],
  },
  {
    id: 'gastroenteritis_emesis',
    title: 'Gastroenteritis con Emesis Severa',
    description: 'Antiemético previo al intento de tolerancia oral / rehidratación.',
    category: 'Gastroenterología',
    color: 'purple',
    items: [
      {
        drugId: 'ondansetron',
        drugName: 'Ondansetrón',
        indicationName: 'Emesis Intratable en Gastroenteritis',
        concentrationName: 'Tabletas ODT 4 mg (Dispersable)',
        amountMg: 4,
        volumeMl: 1,
        form: 'tablets',
        doseMgPerKgDay: 0.45,
        frequencyPerDay: 3,
        intervalHours: 8,
        durationDays: 2,
        route: 'oral',
        instructions: 'Dejar disolver en la lengua. Esperar 15-30 minutos antes de ofrecer suero oral a sorbos pequeños.',
      },
    ],
  },
];

function loadSavedPresets(): ClinicalPreset[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}
  return DEFAULT_PRESETS;
}

export const usePresetsStore = create<PresetsState>((set, get) => ({
  presets: loadSavedPresets(),
  activePresetId: null,

  setActivePreset: (id: string | null) => {
    set({ activePresetId: id });
  },

  addPreset: (newPreset: ClinicalPreset) => {
    const updated = [newPreset, ...get().presets.filter((p) => p.id !== newPreset.id)];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    set({ presets: updated });
  },

  deletePreset: (id: string) => {
    const updated = get().presets.filter((p) => p.id !== id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    set({ presets: updated });
  },

  resetToDefaults: () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PRESETS));
    } catch {}
    set({ presets: DEFAULT_PRESETS, activePresetId: null });
  },
}));
