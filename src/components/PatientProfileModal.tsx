import React, { useState, useMemo } from 'react';
import {
  X,
  User,
  Scale,
  Calendar,
  Droplet,
  Check,
  Ruler,
  Activity,
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { PatientProfile } from '../types';
import { calculateBMI } from '../utils/calculator';

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
  const [heightCm, setHeightCm] = useState<number>(
    patient.heightCm || (patient.weightKg >= 45 ? 170 : patient.weightKg >= 18 ? 110 : patient.weightKg >= 10 ? 87 : 65)
  );
  const [ageYears, setAgeYears] = useState<number>(patient.ageYears);
  const [ageMonths, setAgeMonths] = useState<number>(patient.ageMonths);
  const [gender, setGender] = useState<'male' | 'female'>(patient.gender);
  const [serumCreatinine, setSerumCreatinine] = useState<string>(
    patient.serumCreatinineMgDl ? String(patient.serumCreatinineMgDl) : '0.8'
  );
  const [showWhoTable, setShowWhoTable] = useState<boolean>(false);

  const effectiveWeightKg = weightUnit === 'lb' ? Number((weightKg / 2.20462).toFixed(1)) : weightKg;

  // Live BMI calculation
  const bmiResult = useMemo(() => {
    return calculateBMI({
      weightKg: effectiveWeightKg,
      heightCm,
      ageYears,
      ageMonths,
      gender
    });
  }, [effectiveWeightKg, heightCm, ageYears, ageMonths, gender]);

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
    onSave({
      weightKg: Math.max(0.5, effectiveWeightKg),
      heightCm: Math.max(30, heightCm),
      ageYears: Math.max(0, ageYears),
      ageMonths: Math.max(0, ageMonths),
      gender,
      serumCreatinineMgDl: parseFloat(serumCreatinine) || 0.8
    });
    onClose();
  };

  // Quick preset shortcuts
  const applyPreset = (w: number, h: number, years: number, months: number) => {
    setWeightKg(w);
    setWeightUnit('kg');
    setHeightCm(h);
    setAgeYears(years);
    setAgeMonths(months);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-6 duration-200">
        {/* Header */}
        <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-200" />
            <div>
              <h3 className="text-base font-semibold leading-tight">Datos del Paciente y Cálculo de IMC</h3>
              <p className="text-[11px] text-emerald-100/90">Perfil antropométrico y clínico activo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[82vh] overflow-y-auto">
          {/* Quick presets */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
              Atajos Antropométricos
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              <button
                type="button"
                onClick={() => applyPreset(6, 65, 0, 4)}
                className="py-1.5 px-2 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 rounded border border-slate-200 dark:border-slate-700 transition-colors font-medium text-center"
              >
                <div className="font-bold">Lactante</div>
                <div className="text-[10px] text-slate-500">6kg · 65cm</div>
              </button>
              <button
                type="button"
                onClick={() => applyPreset(12, 87, 2, 0)}
                className="py-1.5 px-2 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 rounded border border-slate-200 dark:border-slate-700 transition-colors font-medium text-center"
              >
                <div className="font-bold">2 años</div>
                <div className="text-[10px] text-slate-500">12kg · 87cm</div>
              </button>
              <button
                type="button"
                onClick={() => applyPreset(20, 110, 5, 0)}
                className="py-1.5 px-2 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 rounded border border-slate-200 dark:border-slate-700 transition-colors font-medium text-center"
              >
                <div className="font-bold">5 años</div>
                <div className="text-[10px] text-slate-500">20kg · 110cm</div>
              </button>
              <button
                type="button"
                onClick={() => applyPreset(70, 170, 35, 0)}
                className="py-1.5 px-2 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 rounded border border-slate-200 dark:border-slate-700 transition-colors font-medium text-center"
              >
                <div className="font-bold">Adulto</div>
                <div className="text-[10px] text-slate-500">70kg · 170cm</div>
              </button>
            </div>
          </div>

          {/* Measurements: Weight & Height Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Weight Input with Unit Switcher */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-emerald-600" />
                  Peso Corporal
                </label>
                <div className="flex rounded border border-slate-300 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-800 text-[11px] font-medium">
                  <button
                    type="button"
                    onClick={() => handleUnitToggle('kg')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      weightUnit === 'kg' ? 'bg-emerald-600 text-white shadow-xs font-bold' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    kg
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUnitToggle('lb')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      weightUnit === 'lb' ? 'bg-emerald-600 text-white shadow-xs font-bold' : 'text-slate-600 dark:text-slate-300'
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
                  className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
                <span className="absolute right-3 top-2 text-xs font-semibold text-slate-400">
                  {weightUnit}
                </span>
              </div>
              {weightUnit === 'lb' && (
                <div className="text-[11px] text-slate-500 mt-1 text-right">
                  ≈ {effectiveWeightKg} kg
                </div>
              )}
            </div>

            {/* Height (Talla / Estatura) Input */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-emerald-600" />
                  Estatura / Talla
                </label>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                  {(heightCm / 100).toFixed(2)} m
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  step="1"
                  min="30"
                  max="250"
                  value={heightCm || ''}
                  onChange={(e) => setHeightCm(parseFloat(e.target.value) || 0)}
                  className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
                <span className="absolute right-3 top-2 text-xs font-semibold text-slate-400">
                  cm
                </span>
              </div>
              {/* Quick height adjustments */}
              <div className="flex items-center justify-between gap-1 mt-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => Math.max(30, h - 5))}
                  className="px-1.5 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                >
                  -5 cm
                </button>
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => Math.max(30, h - 1))}
                  className="px-1.5 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                >
                  -1 cm
                </button>
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => h + 1)}
                  className="px-1.5 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                >
                  +1 cm
                </button>
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => h + 5)}
                  className="px-1.5 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                >
                  +5 cm
                </button>
              </div>
            </div>
          </div>

          {/* DEDICATED BMI / IMC CALCULATION CARD */}
          {bmiResult && (
            <div className={`p-3.5 rounded-xl border ${bmiResult.borderColor} ${bmiResult.badgeBg} transition-all shadow-xs`}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Cálculo de IMC (Índice de Quetelet)
                  </span>
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${bmiResult.borderColor} bg-white dark:bg-slate-900 ${bmiResult.color}`}>
                  {bmiResult.category}
                </span>
              </div>

              {/* Prominent Score Display */}
              <div className="flex items-baseline justify-between mb-3 bg-white/70 dark:bg-slate-900/70 p-3 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block">IMC Calculado:</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {bmiResult.bmi}
                    </span>
                    <span className="text-xs font-bold text-slate-500">kg/m²</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-500 font-medium block">Superficie Corporal (ASC):</span>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {bmiResult.bsaM2} m²
                  </div>
                  <span className="text-[10px] text-slate-400">Fórmula de Mosteller</span>
                </div>
              </div>

              {/* Segmented Visual Scale Gauge */}
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-[10px] font-semibold text-slate-600 dark:text-slate-400 px-0.5">
                  <span>Bajo &lt;18.5</span>
                  <span>Normal 18.5-24.9</span>
                  <span>Sobrepeso 25-29.9</span>
                  <span>Obesidad ≥30</span>
                </div>
                <div className="relative h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                  {/* Underweight zone */}
                  <div className="h-full bg-sky-400" style={{ width: '22%' }} title="Bajo peso (<18.5)" />
                  {/* Normal zone */}
                  <div className="h-full bg-emerald-500" style={{ width: '28%' }} title="Normal (18.5 - 24.9)" />
                  {/* Overweight zone */}
                  <div className="h-full bg-amber-400" style={{ width: '22%' }} title="Sobrepeso (25 - 29.9)" />
                  {/* Obese zone */}
                  <div className="h-full bg-rose-500" style={{ width: '28%' }} title="Obesidad (≥30)" />
                </div>
                {/* Pointer marker */}
                <div className="relative h-4 w-full">
                  <div
                    className="absolute top-0 transform -translate-x-1/2 flex flex-col items-center transition-all duration-300"
                    style={{ left: `${bmiResult.gaugePercentage}%` }}
                  >
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-slate-900 dark:border-b-white" />
                    <span className="text-[10px] font-black text-slate-900 dark:text-white leading-none bg-white dark:bg-slate-900 px-1 py-0.5 rounded shadow-xs border border-slate-300 dark:border-slate-700 mt-0.5">
                      {bmiResult.bmi}
                    </span>
                  </div>
                </div>
              </div>

              {/* Supplementary Clinical Data */}
              <div className="grid grid-cols-2 gap-2 text-xs bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 mt-2">
                <div>
                  <span className="text-[11px] text-slate-500 block">Rango de Peso Normal:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {bmiResult.healthyWeightRange.min} – {bmiResult.healthyWeightRange.max} kg
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Peso Ideal Estimado:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {bmiResult.idealWeightKg} kg {bmiResult.isPediatric ? '(p50)' : '(Devine)'}
                  </span>
                </div>
              </div>

              {/* Interpretation Note */}
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {bmiResult.interpretation}
              </p>
              {bmiResult.pediatricInterpretation && (
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 italic">
                  ℹ️ {bmiResult.pediatricInterpretation}
                </p>
              )}

              {/* Toggle WHO Criteria Table */}
              <button
                type="button"
                onClick={() => setShowWhoTable(!showWhoTable)}
                className="mt-2 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 hover:underline"
              >
                <span>{showWhoTable ? 'Ocultar' : 'Ver'} Criterios de Clasificación OMS</span>
                {showWhoTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showWhoTable && (
                <div className="mt-2 p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] space-y-1 animate-in fade-in duration-150">
                  <div className="font-bold text-slate-700 dark:text-slate-300 mb-1 border-b pb-0.5">
                    Clasificación Nutricional del Adulto (OMS)
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sky-600 dark:text-sky-400 font-medium">Bajo peso / Delgadez</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">&lt; 18.5 kg/m²</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Peso normal (Eutrófico)</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">18.5 – 24.9 kg/m²</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-amber-600 dark:text-amber-400 font-medium">Sobrepeso (Preobesidad)</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">25.0 – 29.9 kg/m²</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-orange-600 dark:text-orange-400 font-medium">Obesidad Grado I</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">30.0 – 34.9 kg/m²</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-rose-600 dark:text-rose-400 font-medium">Obesidad Grado II</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">35.0 – 39.9 kg/m²</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-red-700 dark:text-red-400 font-medium">Obesidad Grado III (Mórbida)</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">≥ 40.0 kg/m²</span>
                  </div>
                </div>
              )}
            </div>
          )}

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
                  className="w-full text-base font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
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
                  className="w-full text-base font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 block mb-1">
              Sexo Biológico (para Aclaramiento Cockcroft-Gault y Peso Ideal)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                  gender === 'male'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-600 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-600'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Masculino
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                  gender === 'female'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-600 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-600'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Femenino
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
                className="w-full text-base font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
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
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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
