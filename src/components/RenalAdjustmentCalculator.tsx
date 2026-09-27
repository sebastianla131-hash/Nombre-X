import React, { useState, useMemo } from 'react';
import { ShieldAlert, Activity, Info, Check, ArrowRight } from 'lucide-react';
import { PatientProfile, Medication } from '../types';
import { calculateCockcroftGault } from '../utils/calculator';
import { MEDICATIONS } from '../data/medications';

interface RenalAdjustmentCalculatorProps {
  patient: PatientProfile;
  onUpdatePatient: (p: PatientProfile) => void;
  onSelectDrug: (m: Medication) => void;
}

export const RenalAdjustmentCalculator: React.FC<RenalAdjustmentCalculatorProps> = ({
  patient,
  onUpdatePatient,
  onSelectDrug
}) => {
  const [serumCr, setSerumCr] = useState<string>(
    patient.serumCreatinineMgDl ? String(patient.serumCreatinineMgDl) : '1.2'
  );
  const [age, setAge] = useState<number>(patient.ageYears || 55);
  const [weight, setWeight] = useState<number>(patient.weightKg || 70);
  const [gender, setGender] = useState<'male' | 'female'>(patient.gender || 'male');

  const crValue = parseFloat(serumCr) || 1.0;

  const result = useMemo(() => {
    return calculateCockcroftGault({
      ageYears: age,
      weightKg: weight,
      serumCreatinineMgDl: crValue,
      gender
    });
  }, [age, weight, crValue, gender]);

  const handleApplyToPatient = () => {
    onUpdatePatient({
      ...patient,
      weightKg: weight,
      ageYears: age,
      gender,
      serumCreatinineMgDl: crValue
    });
  };

  // Find recommended dose for drugs based on current CrCl
  const getDrugRenalAdvice = (med: Medication) => {
    if (!med.renalAdjustments || med.renalAdjustments.length === 0) {
      return { text: 'No requiere ajuste significativo o eliminación hepática', level: 'normal' };
    }
    const cl = result.crCl;
    if (cl >= 50) {
      const match = med.renalAdjustments.find((r) => r.crClThreshold.includes('> 50') || r.crClThreshold.includes('> 30') || r.crClThreshold.includes('> 60'));
      return { text: match ? match.adjustmentText : '100% de la dosis habitual', level: 'normal' };
    } else if (cl >= 20 && cl < 50) {
      const match = med.renalAdjustments.find((r) => r.crClThreshold.includes('10 - 50') || r.crClThreshold.includes('20 - 49') || r.crClThreshold.includes('10 - 30') || r.crClThreshold.includes('40 - 59'));
      return { text: match ? match.adjustmentText : 'Ajustar dosis o espaciar intervalo', level: 'moderate' };
    } else {
      const match = med.renalAdjustments.find((r) => r.crClThreshold.includes('< 10') || r.crClThreshold.includes('< 20'));
      return { text: match ? match.adjustmentText : 'Reducir marcadamente o suspender', level: 'severe' };
    }
  };

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto pb-20">
      {/* Title */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
          Aclaramiento de Creatinina (Cockcroft-Gault)
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Calcula la tasa de filtración glomerular estimada para ajustar la dosis de antibióticos y fármacos nefrotóxicos.
        </p>
      </div>

      {/* Main Result Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-emerald-600/40 p-4 shadow-sm">
        <div className="flex items-baseline justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Aclaramiento Estimado (ClCr)
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 tabular-nums">
                {result.crCl}
              </span>
              <span className="text-base font-bold text-slate-700 dark:text-slate-300">
                mL/min
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              {gender === 'male' ? 'Varón' : 'Mujer (×0.85)'}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Estadío Funcional:
          </span>
          <span className={`font-bold ${result.color}`}>
            {result.stage}
          </span>
        </div>

        <button
          onClick={handleApplyToPatient}
          className="mt-3 w-full py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-emerald-200 dark:border-emerald-800"
        >
          <Check className="w-3.5 h-3.5" />
          Sincronizar estos valores con el paciente activo ({weight} kg, {age} años)
        </button>
      </div>

      {/* Inputs */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {/* Serum Creatinine */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
              Creatinina Sérica (mg/dL)
            </label>
            <input
              type="number"
              step="0.05"
              min="0.2"
              max="15"
              value={serumCr}
              onChange={(e) => setSerumCr(e.target.value)}
              className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>

          {/* Age */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
              Edad (Años)
            </label>
            <input
              type="number"
              min="1"
              max="115"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value, 10) || 0)}
              className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Weight */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
              Peso Real (kg)
            </label>
            <input
              type="number"
              step="0.5"
              min="5"
              max="250"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
              Sexo Biológico
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  gender === 'male'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                Hombre
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  gender === 'female'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                Mujer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC DRUG DOSING MATRIX */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>Pauta Recomendada Según ClCr ({result.crCl} mL/min)</span>
          <span className="text-[11px] text-emerald-700 dark:text-emerald-400 normal-case font-semibold">Toca para calcular</span>
        </h3>

        <div className="space-y-2">
          {MEDICATIONS.filter((m) => m.renalAdjustments && m.renalAdjustments.length > 0).map((med) => {
            const advice = getDrugRenalAdvice(med);
            const badgeBg =
              advice.level === 'severe'
                ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300'
                : advice.level === 'moderate'
                ? 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300';

            return (
              <div
                key={med.id}
                onClick={() => onSelectDrug(med)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectDrug(med);
                }}
                className="p-3 rounded-lg border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-800/40 transition-all cursor-pointer group flex items-center justify-between gap-3"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    {med.name}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-1">
                    {advice.text}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badgeBg}`}>
                    {advice.level === 'severe' ? 'Alerta' : advice.level === 'moderate' ? 'Ajustar' : 'Estándar'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
