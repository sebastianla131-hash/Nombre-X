import React, { useState } from 'react';
import { X, User, Scale, Calendar, Droplet, Check } from 'lucide-react';
import { PatientProfile } from '../types';

interface PatientProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: PatientProfile;
  onSave: (p: PatientProfile) => void;
}

export const PatientProfileModal: React.FC<PatientProfileModalProps> = ({
  isOpen,
  onClose,
  patient,
  onSave
}) => {
  if (!isOpen) return null;

  const [weightKg, setWeightKg] = useState<number>(patient.weightKg);
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [ageYears, setAgeYears] = useState<number>(patient.ageYears);
  const [ageMonths, setAgeMonths] = useState<number>(patient.ageMonths);
  const [gender, setGender] = useState<'male' | 'female'>(patient.gender);
  const [serumCreatinine, setSerumCreatinine] = useState<string>(
    patient.serumCreatinineMgDl ? String(patient.serumCreatinineMgDl) : '0.8'
  );

  const handleUnitToggle = (newUnit: 'kg' | 'lb') => {
    if (newUnit === weightUnit) return;
    if (newUnit === 'lb') {
      setWeightKg(Number((weightKg * 2.20462).toFixed(1)));
    } else {
      setWeightKg(Number((weightKg / 2.20462).toFixed(1)));
    }
    setWeightUnit(newUnit);
  };

  const handleSave = () => {
    const finalWeightKg = weightUnit === 'lb' ? Number((weightKg / 2.20462).toFixed(1)) : weightKg;
    onSave({
      weightKg: Math.max(0.5, finalWeightKg),
      ageYears: Math.max(0, ageYears),
      ageMonths: Math.max(0, ageMonths),
      gender,
      serumCreatinineMgDl: parseFloat(serumCreatinine) || 0.8
    });
    onClose();
  };

  // Quick preset shortcuts
  const applyPreset = (w: number, years: number, months: number) => {
    setWeightKg(w);
    setWeightUnit('kg');
    setAgeYears(years);
    setAgeMonths(months);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full sm:max-w-md rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-6 duration-200">
        {/* Header */}
        <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-200" />
            <h3 className="text-base font-semibold">Perfil del Paciente Activo</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
          <p className="text-xs text-slate-500">
            Define el peso y edad una sola vez para sincronizar todas las calculadoras y recetas automáticamente.
          </p>

          {/* Quick presets */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
              Atajos Pediátricos / Adultos
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              <button
                type="button"
                onClick={() => applyPreset(6, 0, 4)}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded border border-slate-200 transition-colors font-medium"
              >
                Lactante (6 kg)
              </button>
              <button
                type="button"
                onClick={() => applyPreset(12, 2, 0)}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded border border-slate-200 transition-colors font-medium"
              >
                2 años (12 kg)
              </button>
              <button
                type="button"
                onClick={() => applyPreset(20, 5, 0)}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded border border-slate-200 transition-colors font-medium"
              >
                5 años (20 kg)
              </button>
              <button
                type="button"
                onClick={() => applyPreset(70, 35, 0)}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded border border-slate-200 transition-colors font-medium"
              >
                Adulto (70 kg)
              </button>
            </div>
          </div>

          {/* Weight Input with Unit Switcher */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-emerald-600" />
                Peso Corporal
              </label>
              <div className="flex rounded border border-slate-300 p-0.5 bg-slate-100 text-[11px] font-medium">
                <button
                  type="button"
                  onClick={() => handleUnitToggle('kg')}
                  className={`px-2 py-0.5 rounded ${
                    weightUnit === 'kg' ? 'bg-white text-emerald-700 shadow-xs font-bold' : 'text-slate-600'
                  }`}
                >
                  kg
                </button>
                <button
                  type="button"
                  onClick={() => handleUnitToggle('lb')}
                  className={`px-2 py-0.5 rounded ${
                    weightUnit === 'lb' ? 'bg-white text-emerald-700 shadow-xs font-bold' : 'text-slate-600'
                  }`}
                >
                  lb
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="250"
                value={weightKg || ''}
                onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
                className="w-full text-lg font-bold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-sm font-semibold text-slate-400">
                {weightUnit}
              </span>
            </div>
          </div>

          {/* Age Inputs */}
          <div>
            <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              Edad del Paciente
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[11px] text-slate-500 block mb-0.5">Años</span>
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={ageYears}
                  onChange={(e) => setAgeYears(parseInt(e.target.value, 10) || 0)}
                  className="w-full text-base font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block mb-0.5">Meses (en lactantes)</span>
                <input
                  type="number"
                  min="0"
                  max="11"
                  value={ageMonths}
                  onChange={(e) => setAgeMonths(parseInt(e.target.value, 10) || 0)}
                  className="w-full text-base font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 block mb-1">
              Sexo Biológico (para Aclaramiento de Creatinina Cockcroft-Gault)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                  gender === 'male'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Masculino
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                  gender === 'female'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Femenino (Factor ×0.85)
              </button>
            </div>
          </div>

          {/* Serum Creatinine */}
          <div>
            <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
              <Droplet className="w-3.5 h-3.5 text-emerald-600" />
              Creatinina Sérica (Opcional para cálculo renal)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.05"
                min="0.1"
                max="15"
                value={serumCreatinine}
                onChange={(e) => setSerumCreatinine(e.target.value)}
                placeholder="0.8"
                className="w-full text-base font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2 text-xs font-medium text-slate-400">
                mg/dL
              </span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
          >
            <Check className="w-4 h-4" />
            Guardar y Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};
