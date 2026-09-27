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
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PatientProfile } from '../types';
import { calculateBMI } from '../utils/calculator';

interface PatientProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: PatientProfile;
  onSave: (patient: PatientProfile) => void;
}

export const PatientProfileModal: React.FC<PatientProfileModalProps> = ({
  isOpen,
  onClose,
  patient,
  onSave
}) => {
  const [weightKg, setWeightKg] = useState<number>(patient.weightKg);
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [heightCm, setHeightCm] = useState<number>(
    patient.heightCm || (patient.weightKg >= 45 ? 170 : patient.weightKg >= 18 ? 110 : patient.weightKg >= 10 ? 87 : 65)
  );
  const [ageYears, setAgeYears] = useState<number>(patient.ageYears);
  const [ageMonths, setAgeMonths] = useState<number>(patient.ageMonths);
  const [gender, setGender] = useState<'male' | 'female'>(patient.gender);
  const [isPregnant, setIsPregnant] = useState<boolean>(patient.gender === 'female' ? (patient.isPregnant ?? false) : false);
  const [pregnancyTrimester, setPregnancyTrimester] = useState<1 | 2 | 3>(patient.pregnancyTrimester || 2);
  const [serumCreatinine, setSerumCreatinine] = useState<string>(
    patient.serumCreatinineMgDl ? String(patient.serumCreatinineMgDl) : '0.8'
  );
  const [showWhoTable, setShowWhoTable] = useState<boolean>(false);

  // Sync state if modal opens with different patient
  React.useEffect(() => {
    if (isOpen) {
      setWeightKg(patient.weightKg);
      setWeightUnit('kg');
      setHeightCm(
        patient.heightCm || (patient.weightKg >= 45 ? 170 : patient.weightKg >= 18 ? 110 : patient.weightKg >= 10 ? 87 : 65)
      );
      setAgeYears(patient.ageYears);
      setAgeMonths(patient.ageMonths);
      setGender(patient.gender);
      setIsPregnant(patient.gender === 'female' ? (patient.isPregnant ?? false) : false);
      setPregnancyTrimester(patient.pregnancyTrimester || 2);
      setSerumCreatinine(patient.serumCreatinineMgDl ? String(patient.serumCreatinineMgDl) : '0.8');
    }
  }, [isOpen, patient]);

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

  if (!isOpen) return null;

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
      isPregnant: gender === 'female' ? isPregnant : false,
      pregnancyTrimester: gender === 'female' && isPregnant ? pregnancyTrimester : undefined,
      serumCreatinineMgDl: parseFloat(serumCreatinine) || 0.8
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-6 duration-200">
        {/* Header */}
        <div className="bg-blue-800 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-blue-200" />
            <div>
              <h3 className="text-base font-semibold leading-tight">Datos del Paciente y Cálculo de IMC</h3>
              <p className="text-[11px] text-blue-100/90">Perfil antropométrico y clínico activo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-blue-100 hover:text-white hover:bg-blue-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div
          className="p-4 space-y-4 max-h-[82vh] overflow-y-auto no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* 1º APARTADO: EDAD DEL PACIENTE */}
          <div>
            <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
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
                  className="w-full text-base font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600 focus:outline-none"
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
                  className="w-full text-base font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 2º APARTADO: SEXO BIOLÓGICO Y EMBARAZO */}
          <div className="space-y-2.5">
            <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">
              Sexo Biológico (para Aclaramiento Cockcroft-Gault y Peso Ideal)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setGender('male');
                  setIsPregnant(false);
                }}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                  gender === 'male'
                    ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Masculino
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                  gender === 'female'
                    ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Femenino
              </button>
            </div>

            {/* Desplegable si es Femenino */}
            {gender === 'female' && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-150 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span>🤰</span>
                    <span>¿Se encuentra en estado de embarazo?</span>
                  </label>
                  {isPregnant && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-600 text-white shadow-xs">
                      Gestante
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPregnant(false)}
                    className={`py-1.5 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      !isPregnant
                        ? 'bg-slate-800 dark:bg-slate-700 text-white border-slate-800 dark:border-slate-700 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPregnant(true)}
                    className={`py-1.5 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      isPregnant
                        ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                        : 'bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-900 text-pink-700 dark:text-pink-300'
                    }`}
                  >
                    Sí, en embarazo 🤰
                  </button>
                </div>

                {isPregnant && (
                  <div className="bg-pink-50/70 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900/60 rounded-xl p-2.5 space-y-1.5">
                    <span className="text-[11px] font-bold text-pink-950 dark:text-pink-200 block">
                      Trimestre de Gestación:
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setPregnancyTrimester(1)}
                        className={`py-1 px-1 text-[11px] font-bold rounded-lg border text-center transition-all ${
                          pregnancyTrimester === 1
                            ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                            : 'bg-white dark:bg-slate-900 border-pink-200 dark:border-pink-900 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        1.er Trim.
                      </button>
                      <button
                        type="button"
                        onClick={() => setPregnancyTrimester(2)}
                        className={`py-1 px-1 text-[11px] font-bold rounded-lg border text-center transition-all ${
                          pregnancyTrimester === 2
                            ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                            : 'bg-white dark:bg-slate-900 border-pink-200 dark:border-pink-900 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        2.º Trim.
                      </button>
                      <button
                        type="button"
                        onClick={() => setPregnancyTrimester(3)}
                        className={`py-1 px-1 text-[11px] font-bold rounded-lg border text-center transition-all ${
                          pregnancyTrimester === 3
                            ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                            : 'bg-white dark:bg-slate-900 border-pink-200 dark:border-pink-900 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        3.er Trim.
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 3º APARTADO: CALCULADORA DE IMC (Peso, Talla y Resultados) */}
          <div className="space-y-3">
            {/* Measurements: Weight & Height Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Weight Input with Unit Switcher */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-blue-700" />
                    Peso Corporal
                  </label>
                  <div className="flex rounded border border-slate-300 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-800 text-[11px] font-medium">
                    <button
                      type="button"
                      onClick={() => handleUnitToggle('kg')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        weightUnit === 'kg' ? 'bg-blue-700 text-white shadow-xs font-bold' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      kg
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUnitToggle('lb')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        weightUnit === 'lb' ? 'bg-blue-700 text-white shadow-xs font-bold' : 'text-slate-600 dark:text-slate-300'
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
                    className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600 focus:outline-none"
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
                    <Ruler className="w-3.5 h-3.5 text-blue-700" />
                    Estatura / Talla
                  </label>
                  <span className="text-[11px] text-blue-700 dark:text-blue-400 font-semibold">
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
                    className="w-full text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  <span className="absolute right-3 top-2 text-xs font-semibold text-slate-400">
                    cm
                  </span>
                </div>
                {/* Micro-adjust buttons */}
                <div className="flex items-center justify-between gap-1 mt-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setHeightCm((h) => Math.max(30, h - 5))}
                    className="px-2 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                  >
                    -5 cm
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeightCm((h) => Math.max(30, h - 1))}
                    className="px-2 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                  >
                    -1 cm
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeightCm((h) => h + 1)}
                    className="px-2 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                  >
                    +1 cm
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeightCm((h) => h + 5)}
                    className="px-2 py-0.5 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                  >
                    +5 cm
                  </button>
                </div>
              </div>
            </div>

            {/* LIVE BMI (IMC) CARD */}
            {bmiResult && (
              <div className={`p-3.5 rounded-xl border ${bmiResult.borderColor} ${bmiResult.badgeBg} space-y-3`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Índice de Masa Corporal (IMC)
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${bmiResult.borderColor} bg-white dark:bg-slate-900 ${bmiResult.color}`}>
                    {bmiResult.category}
                  </span>
                </div>

                {/* Big number & BSA */}
                <div className="flex items-baseline justify-between bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">IMC:</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {bmiResult.bmi}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">kg/m²</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 font-medium block">Superficie Corporal (ASC):</span>
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      {bmiResult.bsaM2} m²
                    </div>
                    <span className="text-[10px] text-slate-400">Mosteller</span>
                  </div>
                </div>

                {/* Visual Gauge Bar */}
                <div className="space-y-1 bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex justify-between text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                    <span>Bajo &lt;18.5</span>
                    <span>Normal 18.5-24.9</span>
                    <span>Sobrepeso 25-29.9</span>
                    <span>Obesidad ≥30</span>
                  </div>
                  <div className="relative h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                    <div className="h-full bg-sky-400" style={{ width: '22%' }} title="Bajo peso (<18.5)" />
                    <div className="h-full bg-emerald-500" style={{ width: '28%' }} title="Normal (18.5 - 24.9)" />
                    <div className="h-full bg-amber-400" style={{ width: '22%' }} title="Sobrepeso (25 - 29.9)" />
                    <div className="h-full bg-rose-500" style={{ width: '28%' }} title="Obesidad (≥30)" />
                  </div>
                  {/* Gauge marker */}
                  <div className="relative h-3 w-full">
                    <div
                      className="absolute top-0 transform -translate-x-1/2 flex flex-col items-center"
                      style={{ left: `${bmiResult.gaugePercentage}%` }}
                    >
                      <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-slate-900 dark:border-b-white" />
                      <span className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-none">
                        ▲
                      </span>
                    </div>
                  </div>
                </div>

                {/* Normal weight range & Ideal weight */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Rango Peso Normal:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {bmiResult.healthyWeightRange.min} – {bmiResult.healthyWeightRange.max} kg
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Peso Ideal Estimado:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {bmiResult.idealWeightKg} kg {bmiResult.isPediatric ? '(p50)' : '(Devine)'}
                    </span>
                  </div>
                </div>

                {/* Clinical Interpretation */}
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {bmiResult.interpretation}
                </p>
                {bmiResult.pediatricInterpretation && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    ℹ️ {bmiResult.pediatricInterpretation}
                  </p>
                )}

                {/* Collapsible WHO table */}
                <button
                  type="button"
                  onClick={() => setShowWhoTable(!showWhoTable)}
                  className="text-xs font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-1 hover:underline pt-1"
                >
                  <span>{showWhoTable ? 'Ocultar' : 'Ver'} Criterios de Clasificación OMS</span>
                  {showWhoTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showWhoTable && (
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1 border-b pb-1">
                      Clasificación Nutricional (OMS)
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-sky-600 dark:text-sky-400">Bajo peso</span>
                      <span className="font-mono text-slate-600 dark:text-slate-400">&lt; 18.5 kg/m²</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-emerald-600 dark:text-emerald-400">Peso normal</span>
                      <span className="font-mono text-slate-600 dark:text-slate-400">18.5 – 24.9 kg/m²</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-amber-600 dark:text-amber-400">Sobrepeso</span>
                      <span className="font-mono text-slate-600 dark:text-slate-400">25.0 – 29.9 kg/m²</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-orange-600 dark:text-orange-400">Obesidad Grado I</span>
                      <span className="font-mono text-slate-600 dark:text-slate-400">30.0 – 34.9 kg/m²</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-rose-600 dark:text-rose-400">Obesidad Grado II</span>
                      <span className="font-mono text-slate-600 dark:text-slate-400">35.0 – 39.9 kg/m²</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-red-700 dark:text-red-400">Obesidad Grado III</span>
                      <span className="font-mono text-slate-600 dark:text-slate-400">≥ 40.0 kg/m²</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4º APARTADO: CREATININA SÉRICA */}
          <div>
            <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
              <Droplet className="w-3.5 h-3.5 text-blue-700" />
              Creatinina Sérica (para Ajuste de Dosis Renal)
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
                className="w-full text-base font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600 focus:outline-none"
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
            className="px-5 py-2 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
          >
            <Check className="w-4 h-4" />
            Guardar y Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};
