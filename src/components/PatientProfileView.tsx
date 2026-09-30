import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  User,
  Scale,
  Calendar,
  Droplet,
  Check,
  Ruler,
  Activity,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Info,
  BookOpen
} from 'lucide-react';
import { PatientProfile } from '../types';
import { calculateBMI } from '../utils/calculator';

interface PatientProfileViewProps {
  patient: PatientProfile;
  onSave: (p: PatientProfile) => void;
  onBackToHome: () => void;
  onContinueToCalculators: (p: PatientProfile) => void;
}

export const PatientProfileView: React.FC<PatientProfileViewProps> = ({
  patient,
  onSave,
  onBackToHome,
  onContinueToCalculators
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showInstructions, setShowInstructions] = useState<boolean>(false);
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

  const effectiveWeightKg = weightUnit === 'lb' ? Number((weightKg / 2.20462).toFixed(1)) : weightKg;

  // Validation
  const isValidInputs = effectiveWeightKg > 0 && heightCm > 0;

  // Live BMI calculation
  const bmiResult = useMemo(() => {
    if (!isValidInputs) return null;
    return calculateBMI({
      weightKg: effectiveWeightKg,
      heightCm,
      ageYears,
      ageMonths,
      gender
    });
  }, [isValidInputs, effectiveWeightKg, heightCm, ageYears, ageMonths, gender]);

  const handleUnitToggle = (newUnit: 'kg' | 'lb') => {
    if (newUnit === weightUnit) return;
    if (newUnit === 'lb') {
      setWeightKg(Number((weightKg * 2.20462).toFixed(1)));
    } else {
      setWeightKg(Number((weightKg / 2.20462).toFixed(1)));
    }
    setWeightUnit(newUnit);
  };

  const getProfileData = (): PatientProfile => ({
    weightKg: Math.min(300, Math.max(0.5, Number((effectiveWeightKg || 1).toFixed(2)))),
    heightCm: Math.min(250, Math.max(20, Math.round(heightCm || 100))),
    ageYears: Math.min(125, Math.max(0, ageYears)),
    ageMonths: Math.min(11, Math.max(0, ageMonths)),
    gender,
    isPregnant: gender === 'female' ? isPregnant : false,
    pregnancyTrimester: gender === 'female' && isPregnant ? pregnancyTrimester : undefined,
    serumCreatinineMgDl: Math.min(20, Math.max(0.1, Number((parseFloat(serumCreatinine) || 0.8).toFixed(2))))
  });

  const handleContinue = () => {
    const updated = getProfileData();
    onSave(updated);
    onContinueToCalculators(updated);
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Minimalista */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 py-3 sticky top-0 z-30 flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Inicio</span>
        </button>

        <h1 className="text-sm font-bold text-slate-900 dark:text-white">
          Datos del Paciente
        </h1>

        <button
          type="button"
          onClick={handleContinue}
          className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <span>Continuar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div
        className="p-4 space-y-4 pb-28 max-w-xl mx-auto w-full flex-1 overflow-y-auto no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* 1º APARTADO: EDAD DEL PACIENTE */}
        <section className="bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-none space-y-2">
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-700" />
            Edad del Paciente
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Años</span>
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min="0"
                max="120"
                value={ageYears}
                onChange={(e) => setAgeYears(parseInt(e.target.value, 10) || 0)}
                className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Meses (en lactantes)</span>
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min="0"
                max="11"
                value={ageMonths}
                onChange={(e) => setAgeMonths(parseInt(e.target.value, 10) || 0)}
                className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* 2º APARTADO: SEXO BIOLÓGICO Y CONDICIÓN DE EMBARAZO */}
        <section className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
              Sexo Biológico (para Aclaramiento Cockcroft-Gault y Peso Ideal)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setGender('male');
                  setIsPregnant(false);
                }}
                className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                  gender === 'male'
                    ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Masculino
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                  gender === 'female'
                    ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Femenino
              </button>
            </div>
          </div>

          {/* Desplegable condicional si el sexo biológico es Femenino */}
          {gender === 'female' && (
            <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span className="text-sm">🤰</span>
                  <span>¿Se encuentra en estado de embarazo?</span>
                </label>
                {isPregnant && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-600 text-white shadow-xs">
                    Gestante Activa
                  </span>
                )}
              </div>

              {/* Botones de pastilla para indicar si está en embarazo o no */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setIsPregnant(false)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                    !isPregnant
                      ? 'bg-slate-800 dark:bg-slate-700 text-white border-slate-800 dark:border-slate-700 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  No está embarazada
                </button>
                <button
                  type="button"
                  onClick={() => setIsPregnant(true)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isPregnant
                      ? 'bg-pink-600 hover:bg-pink-700 text-white border-pink-600 shadow-xs'
                      : 'bg-pink-50/60 dark:bg-pink-950/30 border-pink-200 dark:border-pink-900 text-pink-700 dark:text-pink-300 hover:bg-pink-100/50'
                  }`}
                >
                  <span>Sí, en embarazo</span>
                  <span>🤰</span>
                </button>
              </div>

              {/* Detalle del Trimestre de Gestación si está en embarazo */}
              {isPregnant && (
                <div className="bg-pink-50/70 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900/60 rounded-xl p-3 space-y-2 animate-in fade-in duration-200">
                  <label className="text-[11px] font-bold text-pink-950 dark:text-pink-200 block">
                    Trimestre de Gestación (para evaluación farmacológica):
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPregnancyTrimester(1)}
                      className={`py-1.5 px-1 text-[11px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        pregnancyTrimester === 1
                          ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                          : 'bg-white dark:bg-slate-900 border-pink-200 dark:border-pink-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      1.er Trimestre
                      <span className="block text-[9px] font-normal opacity-85">1-13 sem</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPregnancyTrimester(2)}
                      className={`py-1.5 px-1 text-[11px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        pregnancyTrimester === 2
                          ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                          : 'bg-white dark:bg-slate-900 border-pink-200 dark:border-pink-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      2.º Trimestre
                      <span className="block text-[9px] font-normal opacity-85">14-27 sem</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPregnancyTrimester(3)}
                      className={`py-1.5 px-1 text-[11px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        pregnancyTrimester === 3
                          ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                          : 'bg-white dark:bg-slate-900 border-pink-200 dark:border-pink-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      3.er Trimestre
                      <span className="block text-[9px] font-normal opacity-85">≥28 sem</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-pink-900 dark:text-pink-200/90 leading-tight pt-1">
                    ℹ️ <strong>Impacto clínico:</strong> Los medicamentos se evaluarán contra la base de datos obstétrica FDA/Briggs. Se emitirán alertas automáticas si un fármaco está contraindicado (ej. AINEs en 3.er trimestre, IECAs, Fenitoína).
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 3º APARTADO: CALCULADORA DE IMC (Inputs de Peso, Talla y Resultados) */}
        <div className="space-y-3">
          {/* Inputs de Peso y Talla */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Peso Corporal con Toggle kg / lb */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-blue-700" />
                  Peso Corporal
                </label>
                <div className="flex rounded border border-slate-300 dark:border-slate-600 p-0.5 bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold">
                  <button
                    type="button"
                    onClick={() => handleUnitToggle('kg')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      weightUnit === 'kg' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    kg
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUnitToggle('lb')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      weightUnit === 'lb' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    lb
                  </button>
                </div>
              </div>
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  pattern="[0-9]*[.,]?[0-9]*"
                  step="0.1"
                  min="0.5"
                  max="300"
                  value={weightKg || ''}
                  onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
                  placeholder="Ej. 70"
                  className={`w-full text-lg font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                    !weightKg || weightKg <= 0 ? 'border-amber-400 bg-amber-50/20' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-400 uppercase pointer-events-none">
                  {weightUnit}
                </span>
              </div>
              {weightUnit === 'lb' && (
                <div className="text-[11px] text-slate-500 mt-1">
                  ≈ {effectiveWeightKg} kg
                </div>
              )}
            </div>

            {/* Estatura / Talla */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-blue-700" />
                  Estatura / Talla
                </label>
                <span className="text-xs text-blue-700 dark:text-blue-400 font-bold">
                  {heightCm > 0 ? (heightCm / 100).toFixed(2) : '0.00'} m
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  pattern="[0-9]*"
                  step="1"
                  min="20"
                  max="250"
                  value={heightCm || ''}
                  onChange={(e) => setHeightCm(parseFloat(e.target.value) || 0)}
                  placeholder="Ej. 170"
                  className={`w-full text-lg font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                    !heightCm || heightCm <= 0 ? 'border-amber-400 bg-amber-50/20' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-400 pointer-events-none">
                  cm
                </span>
              </div>
              {/* Micro-ajustes */}
              <div className="flex items-center justify-between gap-1 mt-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => Math.max(30, h - 5))}
                  className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                >
                  -5 cm
                </button>
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => Math.max(30, h - 1))}
                  className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                >
                  -1 cm
                </button>
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => h + 1)}
                  className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                >
                  +1 cm
                </button>
                <button
                  type="button"
                  onClick={() => setHeightCm((h) => h + 5)}
                  className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                >
                  +5 cm
                </button>
              </div>
            </div>
          </section>

          {/* Tarjeta de Resultado de IMC */}
          {!isValidInputs || !bmiResult ? (
            <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-3">
              <Info className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="font-bold block">Faltan datos requeridos para el cálculo</span>
                <p className="text-[11px] text-amber-800 dark:text-amber-300 mt-0.5">
                  Ingrese un peso corporal y una estatura válidos mayores a cero para visualizar el Índice de Masa Corporal (IMC) y el diagnóstico nutricional.
                </p>
              </div>
            </div>
          ) : (
            <section className={`p-4 rounded-xl border-2 ${bmiResult.borderColor} ${bmiResult.badgeBg} shadow-sm transition-all space-y-3`}>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Cálculo de IMC (Índice de Quetelet)
                  </span>
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${bmiResult.borderColor} bg-white dark:bg-slate-900 ${bmiResult.color}`}>
                  {bmiResult.category}
                </span>
              </div>

              {/* Cifra de IMC y Superficie Corporal */}
              <div className="flex items-baseline justify-between bg-white dark:bg-slate-900 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs">
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">IMC Calculado:</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white tabular-nums">
                      {bmiResult.bmi}
                    </span>
                    <span className="text-xs font-bold text-slate-500">kg/m²</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-500 font-semibold block">Superficie Corporal (ASC):</span>
                  <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                    {bmiResult.bsaM2} m²
                  </div>
                  <span className="text-[10px] text-slate-400">Fórmula de Mosteller</span>
                </div>
              </div>

              {/* Escala Gráfica Visual (Gauge Segmentado) */}
              <div className="space-y-1 bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex justify-between text-[10px] font-semibold text-slate-600 dark:text-slate-400 px-0.5">
                  <span>Bajo &lt;18.5</span>
                  <span>Normal 18.5-24.9</span>
                  <span>Sobrepeso 25-29.9</span>
                  <span>Obesidad ≥30</span>
                </div>
                <div className="relative h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                  <div className="h-full bg-sky-400" style={{ width: '22%' }} title="Bajo peso (<18.5)" />
                  <div className="h-full bg-emerald-500" style={{ width: '28%' }} title="Normal (18.5 - 24.9)" />
                  <div className="h-full bg-amber-400" style={{ width: '22%' }} title="Sobrepeso (25 - 29.9)" />
                  <div className="h-full bg-rose-500" style={{ width: '28%' }} title="Obesidad (≥30)" />
                </div>
                {/* Puntero Marcador */}
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

              {/* Rango de Peso Normal y Peso Ideal */}
              <div className="grid grid-cols-2 gap-2 text-xs bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <div>
                  <span className="text-[11px] text-slate-500 block">Rango de Peso Normal:</span>
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

              {/* Interpretación Clínica */}
              <div className="space-y-1.5 pt-1">
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {bmiResult.interpretation}
                </p>
                {bmiResult.pediatricInterpretation && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    ℹ️ {bmiResult.pediatricInterpretation}
                  </p>
                )}
              </div>

              {/* Criterios OMS Desplegables */}
              <button
                type="button"
                onClick={() => setShowWhoTable(!showWhoTable)}
                className="text-xs font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-1 hover:underline pt-1 cursor-pointer"
              >
                <span>{showWhoTable ? 'Ocultar' : 'Ver'} Criterios de Clasificación OMS</span>
                {showWhoTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showWhoTable && (
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs space-y-1 animate-in fade-in duration-150">
                  <div className="font-bold text-slate-800 dark:text-slate-200 mb-1 border-b pb-1">
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
            </section>
          )}

          {/* Trazabilidad: Fórmula utilizada y Fuente / Referencia */}
          <section className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-100 dark:border-slate-800 pb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              <span>Trazabilidad Farmacológica y Fórmulas Clínicas</span>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Fórmula Utilizada:</span>
              <div className="font-mono text-[11px] text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-2 rounded border border-slate-200 dark:border-slate-700 space-y-1 mt-1">
                <div>• IMC (kg/m²) = Peso (kg) / [Talla (m)]²</div>
                <div>• ASC (Mosteller, m²) = √[ (Peso (kg) × Talla (cm)) / 3600 ]</div>
                <div>• Peso Ideal (Devine): Varón = 50 + 2.3 × (pulgadas - 60) | Mujer = 45.5 + 2.3 × (pulgadas - 60)</div>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Fuente / Referencia:</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                Organización Mundial de la Salud (OMS). <em>Physical status: the use and interpretation of anthropometry</em>. WHO Technical Report Series 854; Mosteller RD. <em>Simplified calculation of body-surface area</em>. N Engl J Med 1987; 317:1098.
              </p>
            </div>
          </section>
        </div>

        {/* 4º APARTADO: CREATININA SÉRICA */}
        <section className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Droplet className="w-3.5 h-3.5 text-blue-700" />
            Creatinina Sérica (para Ajuste de Dosis Renal)
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              pattern="[0-9]*[.,]?[0-9]*"
              step="0.05"
              min="0.1"
              max="20"
              value={serumCreatinine}
              onChange={(e) => setSerumCreatinine(e.target.value)}
              placeholder="0.8"
              className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-16 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-400 pointer-events-none">
              mg/dL
            </span>
          </div>
        </section>

        {/* 5º BOTONES DE ACCIÓN */}
        <div className="pt-2 space-y-2">
          <button
            type="button"
            onClick={handleContinue}
            className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all active:scale-[0.99] min-h-[48px] cursor-pointer"
          >
            <Check className="w-4 h-4 opacity-80" />
            <span>Guardar y Continuar a Fármacos / Calculadoras</span>
            <ArrowRight className="w-4 h-4 opacity-80 ml-0.5" />
          </button>

          <button
            type="button"
            onClick={onBackToHome}
            className="w-full py-2.5 px-4 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-center cursor-pointer"
          >
            Volver a la Página de Inicio
          </button>
        </div>
      </div>
    </div>
  );
};
