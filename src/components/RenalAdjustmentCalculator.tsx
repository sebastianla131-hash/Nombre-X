import React, { useState, useMemo } from 'react';
import {
  Activity,
  AlertTriangle,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  FileText,
  Scale,
  Droplet,
  Calendar,
  User,
  Ruler
} from 'lucide-react';
import { PatientProfile, Medication } from '../types';
import { calculateCockcroftGault, calculateCKDEPI2021 } from '../utils/calculator';
import { MEDICATIONS } from '../data/medications';

interface RenalAdjustmentCalculatorProps {
  patient: PatientProfile;
  onUpdatePatient: (p: PatientProfile) => void;
  onSelectDrug: (m: Medication) => void;
}

export type RenalFormula = 'cockcroft-gault' | 'ckd-epi-2021';

export const RenalAdjustmentCalculator: React.FC<RenalAdjustmentCalculatorProps> = ({
  patient,
  onUpdatePatient,
  onSelectDrug
}) => {
  // Formula selection: Cockcroft-Gault vs 2021 CKD-EPI Creatinine
  const [formula, setFormula] = useState<RenalFormula>('cockcroft-gault');

  // Collapsible instructions state
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  // Unit toggle for weight
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [weightInput, setWeightInput] = useState<number>(patient.weightKg || 70);

  // Form states
  const [serumCr, setSerumCr] = useState<string>(
    patient.serumCreatinineMgDl ? String(patient.serumCreatinineMgDl) : '1.0'
  );
  const [age, setAge] = useState<number>(patient.ageYears || 55);
  const [gender, setGender] = useState<'male' | 'female'>(patient.gender || 'male');
  const [heightCm, setHeightCm] = useState<number>(patient.heightCm || 170);

  const crValue = parseFloat(serumCr) || 0;

  // Sync weight changes with unit
  const effectiveWeightKg = useMemo(() => {
    if (weightUnit === 'lb') {
      return Number((weightInput / 2.20462).toFixed(1));
    }
    return weightInput;
  }, [weightInput, weightUnit]);

  const handleWeightUnitToggle = (newUnit: 'kg' | 'lb') => {
    if (newUnit === weightUnit) return;
    if (newUnit === 'lb') {
      const inLb = Number((weightInput * 2.20462).toFixed(1));
      setWeightInput(inLb);
    } else {
      const inKg = Number((weightInput / 2.20462).toFixed(1));
      setWeightInput(inKg);
    }
    setWeightUnit(newUnit);
  };

  const handleWeightChange = (val: number) => {
    setWeightInput(val);
    const kg = weightUnit === 'lb' ? Number((val / 2.20462).toFixed(1)) : val;
    onUpdatePatient({
      ...patient,
      weightKg: Math.max(0, kg)
    });
  };

  // Validation: required fields check
  const isInputValid = crValue > 0 && age > 0 && effectiveWeightKg > 0;

  // Calculation 1: Cockcroft-Gault CrCl (mL/min)
  const cgResult = useMemo(() => {
    if (!isInputValid) return null;
    return calculateCockcroftGault({
      ageYears: age,
      weightKg: effectiveWeightKg,
      serumCreatinineMgDl: crValue,
      gender
    });
  }, [isInputValid, age, effectiveWeightKg, crValue, gender]);

  // Calculation 2: 2021 CKD-EPI Creatinine (mL/min/1.73 m²)
  const ckdEpiResult = useMemo(() => {
    if (!isInputValid) return null;
    return calculateCKDEPI2021({
      ageYears: age,
      serumCreatinineMgDl: crValue,
      gender,
      weightKg: effectiveWeightKg,
      heightCm: heightCm > 0 ? heightCm : undefined
    });
  }, [isInputValid, age, crValue, gender, effectiveWeightKg, heightCm]);

  // Current active value for drug dosage adjustment
  const activeFiltrationValue = useMemo(() => {
    if (formula === 'cockcroft-gault') {
      return cgResult?.crCl ?? 0;
    }
    return ckdEpiResult?.egfr ?? 0;
  }, [formula, cgResult, ckdEpiResult]);

  const handleApplyToPatient = () => {
    onUpdatePatient({
      ...patient,
      weightKg: effectiveWeightKg,
      heightCm,
      ageYears: age,
      gender,
      serumCreatinineMgDl: crValue
    });
  };

  // Drug-specific renal advice matching current threshold
  const getDrugRenalAdvice = (med: Medication, cl: number) => {
    if (!med.renalAdjustments || med.renalAdjustments.length === 0) {
      return { text: 'No requiere ajuste significativo de dosis.', level: 'normal' };
    }
    if (cl >= 50) {
      const match = med.renalAdjustments.find(
        (r) => r.crClThreshold.includes('> 50') || r.crClThreshold.includes('> 30') || r.crClThreshold.includes('> 60')
      );
      return { text: match ? match.adjustmentText : '100% de la dosis habitual.', level: 'normal' };
    } else if (cl >= 20 && cl < 50) {
      const match = med.renalAdjustments.find(
        (r) =>
          r.crClThreshold.includes('10 - 50') ||
          r.crClThreshold.includes('20 - 49') ||
          r.crClThreshold.includes('10 - 30') ||
          r.crClThreshold.includes('40 - 59')
      );
      return { text: match ? match.adjustmentText : 'Ajustar dosis o espaciar intervalo.', level: 'moderate' };
    } else {
      const match = med.renalAdjustments.find((r) => r.crClThreshold.includes('< 10') || r.crClThreshold.includes('< 20'));
      return { text: match ? match.adjustmentText : 'Reducir marcadamente o suspender.', level: 'severe' };
    }
  };

  // Result card color coding based on severity
  let resultBorder = 'border-blue-200 dark:border-blue-800';
  let resultBg = 'bg-blue-50/50 dark:bg-slate-900';
  let headerBg = 'bg-blue-700';

  if (activeFiltrationValue > 0) {
    if (activeFiltrationValue < 30) {
      resultBorder = 'border-rose-300 dark:border-rose-800';
      resultBg = 'bg-rose-50/50 dark:bg-rose-950/20';
      headerBg = 'bg-rose-700';
    } else if (activeFiltrationValue < 60) {
      resultBorder = 'border-amber-300 dark:border-amber-700';
      resultBg = 'bg-amber-50/50 dark:bg-amber-950/20';
      headerBg = 'bg-amber-600';
    }
  }

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto pb-24 text-slate-900 dark:text-slate-100">
      {/* ========================================================
          1. ENCABEZADO: TÍTULO + SELECTOR DE ECUACIÓN + INSTRUCCIONES
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              Ajuste de Dosis Renal y Filtración Glomerular
            </h1>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
            Estimación de la función renal para ajuste posológico farmacológico y prevención de nefrotoxicidad.
          </p>
        </div>

        {/* SELECTOR DE FÓRMULA CLÍNICA (Cockcroft-Gault vs 2021 CKD-EPI) */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Ecuación de Estimación Renal:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFormula('cockcroft-gault')}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                formula === 'cockcroft-gault'
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="font-bold text-xs">Cockcroft-Gault</div>
              <div className={`text-[10px] mt-0.5 ${formula === 'cockcroft-gault' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                Aclaramiento (ClCr en mL/min) · Estándar FDA
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormula('ckd-epi-2021')}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                formula === 'ckd-epi-2021'
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="font-bold text-xs flex items-center justify-between">
                <span>2021 CKD-EPI Creatinina</span>
                <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${formula === 'ckd-epi-2021' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'}`}>
                  Sin raza
                </span>
              </div>
              <div className={`text-[10px] mt-0.5 ${formula === 'ckd-epi-2021' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                TFGe (mL/min/1.73 m²) · Estándar KDIGO 2021/2024
              </div>
            </button>
          </div>
        </div>

        {/* Sección "Instrucciones y Comparativa Clínica" Plegable */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setShowInstructions(!showInstructions)}
            className="w-full flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 transition-colors py-0.5 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>¿Cuál fórmula elegir para ajuste de dosis? (Guía KDIGO / FDA)</span>
            </span>
            {showInstructions ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {showInstructions && (
            <div className="mt-2.5 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-xs space-y-2.5 border border-slate-200/80 dark:border-slate-700/80 animate-in fade-in duration-150 leading-relaxed text-slate-600 dark:text-slate-300">
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">
                  1. Ecuación de Cockcroft-Gault (1976):
                </strong>
                <p>
                  Calcula el Aclaramiento de Creatinina (ClCr en mL/min) utilizando directamente el peso corporal y la edad. Es la fórmula estipulada en la inmensa mayoría de las monografías oficiales de la FDA, EMA y fichas técnicas de fármacos de estrecho margen terapéutico (aminoglucósidos, vancomicina, anticoagulantes directos).
                </p>
              </div>

              <div>
                <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">
                  2. Ecuación 2021 CKD-EPI Creatinina (Inker et al., NEJM 2021):
                </strong>
                <p>
                  Estima la Tasa de Filtración Glomerular (TFGe en mL/min/1.73 m²). Fue reformulada y recomendada oficialmente por KDIGO 2021/2024 y el consorcio NKF-ASN eliminando la variable racial para universalidad diagnóstica. Para dosificación farmacológica en pacientes con superficie corporal marcadamente distinta a 1.73 m², se recomienda utilizar la cifra desindexada en mL/min.
                </p>
              </div>

              <div className="p-2 bg-amber-50 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200">
                <strong>Recomendación práctica:</strong> Las guías KDIGO establecen que cualquiera de las dos ecuaciones es aceptable para dosificación en adultos ambulatorios estables. En ancianos o bajo peso, Cockcroft-Gault tiende a ser más conservador (evita sobredosificación).
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          2. FORMULARIO DE INPUTS: CREATININA, EDAD, PESO, TALLA Y SEXO
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3.5">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Parámetros del Paciente
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Campo Numérico 1: Creatinina Sérica con Unidad Visible */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1.5">
              <Droplet className="w-3.5 h-3.5 text-blue-700" />
              Creatinina Sérica
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.05"
                min="0.1"
                max="20"
                value={serumCr}
                onChange={(e) => setSerumCr(e.target.value)}
                placeholder="Ej. 1.0"
                className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-14 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 pointer-events-none">
                mg/dL
              </span>
            </div>
          </div>

          {/* Campo Numérico 2: Edad con Unidad Visible */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
              Edad del Paciente
            </label>
            <div className="relative">
              <input
                type="number"
                min="18"
                max="120"
                value={age || ''}
                onChange={(e) => setAge(parseInt(e.target.value, 10) || 0)}
                placeholder="Ej. 55"
                className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-14 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 pointer-events-none">
                años
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          {/* Campo Numérico 3: Peso Real con Toggle kg/lb */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-blue-700" />
                Peso Corporal
              </label>
              <div className="flex rounded border border-slate-300 dark:border-slate-600 p-0.5 bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => handleWeightUnitToggle('kg')}
                  className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                    weightUnit === 'kg'
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  kg
                </button>
                <button
                  type="button"
                  onClick={() => handleWeightUnitToggle('lb')}
                  className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                    weightUnit === 'lb'
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  lb
                </button>
              </div>
            </div>

            <div className="relative">
              <input
                type="number"
                step="0.5"
                min="10"
                max="250"
                value={weightInput || ''}
                onChange={(e) => handleWeightChange(parseFloat(e.target.value) || 0)}
                placeholder="Ej. 70"
                className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 uppercase pointer-events-none">
                {weightUnit}
              </span>
            </div>
            {weightUnit === 'lb' && (
              <span className="text-[11px] text-slate-500 block mt-1">
                ≈ {effectiveWeightKg} kg
              </span>
            )}
          </div>

          {/* Campo Numérico 4: Talla / Estatura (para Desindexar en CKD-EPI) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-blue-700" />
                Estatura / Talla
              </label>
              <span className="text-[11px] text-blue-700 dark:text-blue-400 font-bold">
                {heightCm > 0 ? (heightCm / 100).toFixed(2) : '1.70'} m
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="1"
                min="40"
                max="240"
                value={heightCm || ''}
                onChange={(e) => setHeightCm(parseFloat(e.target.value) || 170)}
                placeholder="Ej. 170"
                className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 pointer-events-none">
                cm
              </span>
            </div>
          </div>
        </div>

        {/* Variable Categórica: Sexo Biológico */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
            Sexo Biológico (Corrección Fisiológica de Masa Muscular)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all flex items-center justify-center gap-1.5 min-h-[42px] cursor-pointer ${
                gender === 'male'
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Hombre {formula === 'cockcroft-gault' ? '(Factor 1.0)' : '(κ=0.9, α=-0.302)'}</span>
            </button>
            <button
              type="button"
              onClick={() => setGender('female')}
              className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all flex items-center justify-center gap-1.5 min-h-[42px] cursor-pointer ${
                gender === 'female'
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Mujer {formula === 'cockcroft-gault' ? '(×0.85)' : '(κ=0.7, α=-0.241, ×1.012)'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. PANEL DE RESULTADO: RESULTADO EN VIVO SEGÚN LA ECUACIÓN SELECCIONADA
         ======================================================== */}
      <section className={`rounded-xl border-2 ${resultBorder} ${resultBg} shadow-sm overflow-hidden transition-all`}>
        <div className={`${headerBg} text-white px-4 py-2.5 flex items-center justify-between`}>
          <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            {formula === 'cockcroft-gault'
              ? 'Aclaramiento de Creatinina (Cockcroft-Gault)'
              : 'Filtración Glomerular Estimada (2021 CKD-EPI)'}
          </span>
          <span className="text-xs text-blue-100 font-medium">
            {isInputValid ? `${effectiveWeightKg} kg · ${age} años` : 'Pendiente'}
          </span>
        </div>

        <div className="p-4 space-y-3">
          {/* Validación Inline */}
          {!isInputValid ? (
            <div className="p-4 text-center space-y-1.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
              <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto" />
              <div className="text-sm font-bold">Parámetros Incompletos</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Ingrese una creatinina sérica (&gt;0), edad y peso corporal para estimar la función renal.
              </p>
            </div>
          ) : formula === 'cockcroft-gault' && cgResult ? (
            /* Vista del Resultado Cockcroft-Gault */
            <>
              <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3 bg-white dark:bg-slate-900 p-3.5 rounded-lg border">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Aclaramiento de Creatinina (ClCr):
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                      {cgResult.crCl}
                    </span>
                    <span className="text-base font-bold text-slate-600 dark:text-slate-300">
                      mL/min
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-medium">Corrección Sexo</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {gender === 'female' ? 'Factor ×0.85' : 'Factor ×1.0'}
                  </span>
                </div>
              </div>

              {/* Estadío Funcional con color-coding */}
              <div className="flex items-center justify-between text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  Estadío de Severidad:
                </span>
                <span className={`font-bold ${cgResult.color}`}>
                  {cgResult.stage}
                </span>
              </div>

              {/* Píldora de Comparación Rápida con 2021 CKD-EPI */}
              {ckdEpiResult && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs">
                  <span className="text-blue-900 dark:text-blue-200 font-medium">
                    Comparación correlativa (2021 CKD-EPI):
                  </span>
                  <span className="font-bold text-blue-800 dark:text-blue-300 tabular-nums">
                    {ckdEpiResult.egfr} mL/min/1.73 m² ({ckdEpiResult.kdigoCategory})
                  </span>
                </div>
              )}
            </>
          ) : formula === 'ckd-epi-2021' && ckdEpiResult ? (
            /* Vista del Resultado 2021 CKD-EPI */
            <>
              <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3 bg-white dark:bg-slate-900 p-3.5 rounded-lg border">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Tasa de Filtración Glomerular Estimada (TFGe):
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                      {ckdEpiResult.egfr}
                    </span>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                      mL/min/1.73 m²
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-medium">Estadío KDIGO</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 border border-blue-300 dark:border-blue-800">
                    {ckdEpiResult.kdigoCategory}
                  </span>
                </div>
              </div>

              {/* TFGe Desindexada para dosificación farmacológica */}
              {ckdEpiResult.unindexedEgfr && ckdEpiResult.bsaM2 && (
                <div className="grid grid-cols-2 gap-2 text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-[11px] text-slate-500 block">TFGe Desindexada (Absoluta):</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white tabular-nums">
                        {ckdEpiResult.unindexedEgfr}
                      </span>
                      <span className="text-xs font-bold text-slate-500">mL/min</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Recomendada en fármacos de índice estrecho</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 block">Superficie Corporal (ASC):</span>
                    <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums mt-0.5">
                      {ckdEpiResult.bsaM2} m²
                    </div>
                    <span className="text-[10px] text-slate-400">Mosteller</span>
                  </div>
                </div>
              )}

              {/* Categoría Funcional KDIGO */}
              <div className="flex items-center justify-between text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-600 dark:text-slate-400">
                  Interpretación KDIGO:
                </span>
                <span className={`font-bold ${ckdEpiResult.color}`}>
                  {ckdEpiResult.stage}
                </span>
              </div>

              {/* Píldora de Comparación Rápida con Cockcroft-Gault */}
              {cgResult && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs">
                  <span className="text-blue-900 dark:text-blue-200 font-medium">
                    Comparación correlativa (Cockcroft-Gault):
                  </span>
                  <span className="font-bold text-blue-800 dark:text-blue-300 tabular-nums">
                    {cgResult.crCl} mL/min
                  </span>
                </div>
              )}
            </>
          ) : null}

          {/* Sincronización con el paciente activo */}
          {isInputValid && (
            <button
              type="button"
              onClick={handleApplyToPatient}
              className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs min-h-[44px] cursor-pointer"
            >
              <Check className="w-3.5 h-3.5 text-blue-200" />
              Sincronizar con Paciente Activo ({effectiveWeightKg} kg, {age}a, Cr {crValue} mg/dL)
            </button>
          )}
        </div>
      </section>

      {/* ========================================================
          4. BLOQUE DE INTERPRETACIÓN: TABLA OFICIAL DE RANGOS KDIGO
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
          <FileText className="w-4 h-4 text-blue-700" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Estadificación Renal y Conducta Farmacológica (KDIGO)
          </h3>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden text-xs">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold">
              <tr>
                <th className="py-2 px-3">Tasa ({formula === 'cockcroft-gault' ? 'mL/min' : 'mL/min/1.73m²'})</th>
                <th className="py-2 px-3">Estadío KDIGO</th>
                <th className="py-2 px-3">Conducta Farmacológica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
              <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 ${activeFiltrationValue >= 90 ? 'bg-emerald-50/60 dark:bg-emerald-950/30 font-bold' : ''}`}>
                <td className="py-2 px-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  ≥ 90
                </td>
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  G1: Normal / Elevada
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  100% de la dosis habitual. No requiere ajuste.
                </td>
              </tr>
              <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 ${activeFiltrationValue >= 60 && activeFiltrationValue < 90 ? 'bg-teal-50/60 dark:bg-teal-950/30 font-bold' : ''}`}>
                <td className="py-2 px-3 font-mono font-bold text-teal-700 dark:text-teal-400">
                  60 – 89
                </td>
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  G2: Disminución Ligera
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Dosis plena en la mayoría. Monitorizar nefrotóxicos.
                </td>
              </tr>
              <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 ${activeFiltrationValue >= 45 && activeFiltrationValue < 60 ? 'bg-amber-50/60 dark:bg-amber-950/30 font-bold' : ''}`}>
                <td className="py-2 px-3 font-mono font-bold text-amber-600 dark:text-amber-400">
                  45 – 59
                </td>
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  G3a: Disminución Moderada
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Evaluar ajuste de dosis en betalactámicos y anticoagulantes.
                </td>
              </tr>
              <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 ${activeFiltrationValue >= 30 && activeFiltrationValue < 45 ? 'bg-amber-50/60 dark:bg-amber-950/30 font-bold' : ''}`}>
                <td className="py-2 px-3 font-mono font-bold text-amber-700 dark:text-amber-500">
                  30 – 44
                </td>
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  G3b: Moderada a Severa
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Reducción de dosis (50-75%) o duplicación de intervalo de dosificación.
                </td>
              </tr>
              <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 ${activeFiltrationValue >= 15 && activeFiltrationValue < 30 ? 'bg-rose-50/60 dark:bg-rose-950/30 font-bold' : ''}`}>
                <td className="py-2 px-3 font-mono font-bold text-rose-600 dark:text-rose-400">
                  15 – 29
                </td>
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  G4: Disminución Severa
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Contraindicación de múltiples fármacos. Ajuste estricto según niveles.
                </td>
              </tr>
              <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 ${activeFiltrationValue < 15 && activeFiltrationValue > 0 ? 'bg-red-50/60 dark:bg-red-950/30 font-bold' : ''}`}>
                <td className="py-2 px-3 font-mono font-bold text-red-700 dark:text-red-400">
                  &lt; 15
                </td>
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  G5: Falla Renal Terminal
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Régimen de diálisis o sustitución renal. Monitorización estricta.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Fármacos más comunes con ajuste activo */}
        {isInputValid && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
              Ajustes Farmacológicos Sugeridos ({formula === 'cockcroft-gault' ? 'ClCr' : 'TFGe'}: {activeFiltrationValue} {formula === 'cockcroft-gault' ? 'mL/min' : 'mL/min/1.73m²'}):
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MEDICATIONS.filter((m) => m.renalAdjustments && m.renalAdjustments.length > 0)
                .slice(0, 6)
                .map((med) => {
                  const advice = getDrugRenalAdvice(med, activeFiltrationValue);
                  return (
                    <div
                      key={med.id}
                      onClick={() => onSelectDrug(med)}
                      className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-600 bg-slate-50/50 dark:bg-slate-800/40 transition-all cursor-pointer flex items-center justify-between gap-2"
                    >
                      <div>
                        <span className="font-bold text-xs text-slate-900 dark:text-white">
                          {med.name}
                        </span>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-1">
                          {advice.text}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </section>

      {/* ========================================================
          5. TRAZABILIDAD: FÓRMULA UTILIZADA Y FUENTE/REFERENCIA
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
          <BookOpen className="w-4 h-4 text-blue-700" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Trazabilidad, Fórmulas y Fuentes Oficiales
          </h3>
        </div>

        {/* Ecuación Activa */}
        {formula === 'cockcroft-gault' ? (
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
              Ecuación de Cockcroft-Gault (1976):
            </span>
            <div className="font-mono text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800 leading-relaxed">
              <div>
                <strong>ClCr (Hombres):</strong> [(140 - Edad) × Peso (kg)] ÷ [72 × Creatinina Sérica (mg/dL)]
              </div>
              <div className="mt-1">
                <strong>ClCr (Mujeres):</strong> ClCr (Hombres) × 0.85
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
              Ecuación 2021 CKD-EPI Creatinina (Refit sin raza):
            </span>
            <div className="font-mono text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800 leading-relaxed space-y-1">
              <div>
                <strong>TFGe (mL/min/1.73 m²):</strong> 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^-1.200 × 0.9938^Edad × [1.012 si mujer]
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">
                • Mujer: κ = 0.7, α = -0.241, multiplicador = 1.012
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">
                • Hombre: κ = 0.9, α = -0.302, multiplicador = 1.0
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400">
                • Desindexación: TFGe (mL/min) = TFGe × (ASC / 1.73)
              </div>
            </div>
          </div>
        )}

        {/* Fuentes y Referencias Oficiales */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
            Referencias Bibliográficas y Guías Clínicas:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">1.</span>
              <span>
                <strong>Cockcroft DW, Gault MH.</strong> <em>Prediction of creatinine clearance from serum creatinine.</em> Nephron. 1976; 16(1):31-41.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">2.</span>
              <span>
                <strong>Inker LA, Eneanya ND, Coresh J, et al.</strong> <em>New Creatinine- and Cystatin C–Based Equations to Estimate GFR without Race.</em> N Engl J Med 2021; 385:1737-1749.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">3.</span>
              <span>
                <strong>KDIGO 2024 Clinical Practice Guideline</strong> for the Evaluation and Management of Chronic Kidney Disease. Kidney International.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
