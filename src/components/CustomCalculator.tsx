import React, { useState, useMemo } from 'react';
import { Calculator, Copy, Check, Share2, Sparkles, RefreshCw } from 'lucide-react';
import { PatientProfile } from '../types';

interface CustomCalculatorProps {
  patient: PatientProfile;
  onUpdatePatient: (p: PatientProfile) => void;
}

export const CustomCalculator: React.FC<CustomCalculatorProps> = ({
  patient,
  onUpdatePatient
}) => {
  const [drugName, setDrugName] = useState<string>('Medicamento Personalizado');
  const [doseType, setDoseType] = useState<'perDay' | 'perDose'>('perDay');
  const [doseMgKg, setDoseMgKg] = useState<number>(50);
  const [concMg, setConcMg] = useState<number>(250);
  const [concMl, setConcMl] = useState<number>(5);
  const [intervalHours, setIntervalHours] = useState<number>(8);
  const [durationDays, setDurationDays] = useState<number>(7);
  const [copied, setCopied] = useState<boolean>(false);

  const frequencyPerDay = Math.round(24 / intervalHours);

  // Calculation
  const result = useMemo(() => {
    let singleDoseMg = 0;
    let dailyTotalMg = 0;

    if (doseType === 'perDose') {
      singleDoseMg = patient.weightKg * doseMgKg;
      dailyTotalMg = singleDoseMg * frequencyPerDay;
    } else {
      dailyTotalMg = patient.weightKg * doseMgKg;
      singleDoseMg = dailyTotalMg / frequencyPerDay;
    }

    const mgPerMl = concMg / Math.max(0.001, concMl);
    const singleDoseMl = Number((singleDoseMg / mgPerMl).toFixed(2));
    const totalVolumeMl = Number((singleDoseMl * frequencyPerDay * durationDays).toFixed(1));

    const prescription = `Rp. ${drugName.toUpperCase()}\nPresentación: ${concMg} mg / ${concMl} mL\nIndicación: Administrar ${singleDoseMl} mL (${Math.round(singleDoseMg)} mg) cada ${intervalHours} horas vía oral durante ${durationDays} días.\n(Consumo total aproximado: ${totalVolumeMl} mL)`;

    return {
      singleDoseMg: Number(singleDoseMg.toFixed(1)),
      dailyTotalMg: Number(dailyTotalMg.toFixed(1)),
      singleDoseMl,
      totalVolumeMl,
      prescription
    };
  }, [patient.weightKg, doseType, doseMgKg, concMg, concMl, frequencyPerDay, intervalHours, durationDays, drugName]);

  const handleCopy = () => {
    navigator.clipboard.writeText(result.prescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto pb-20">
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Calculator className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
          Calculadora Universal de Dosificación
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Formula rápidamente cualquier medicamento ingresando la dosis por kilo y la concentración deseada.
        </p>
      </div>

      {/* RESULT BANNER (MDCalc Style) */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-emerald-600/40 shadow-sm overflow-hidden">
        <div className="bg-emerald-700 text-white px-4 py-2 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Resultado de Dosis Libre
          </span>
          <span className="text-[11px] text-emerald-100 font-medium">
            {patient.weightKg} kg
          </span>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-baseline justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-semibold text-slate-500 block">
                Volumen a Administrar por Toma:
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 tabular-nums">
                  {result.singleDoseMl}
                </span>
                <span className="text-base font-bold text-slate-700 dark:text-slate-200">
                  mL
                </span>
                <span className="text-xs text-slate-500 ml-1 font-semibold">
                  ({Math.round(result.singleDoseMg)} mg)
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">Intervalo</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Cada {intervalHours} horas
              </span>
              <span className="text-[10px] text-slate-500 block">
                ({frequencyPerDay} tomas/día)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg">
            <div>
              <span className="text-slate-500 block text-[11px]">Dosis Total Diaria:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {result.dailyTotalMg} mg/día
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Consumo Total:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                ~{result.totalVolumeMl} mL en {durationDays} días
              </span>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>¡Fórmula Copiada al Portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Fórmula / Receta</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* INPUTS */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 space-y-3">
        {/* Drug Name Input */}
        <div>
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
            Nombre del Medicamento
          </label>
          <input
            type="text"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            placeholder="ej. Claritromicina o Cefalexina"
            className="w-full text-sm font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        {/* Weight & Dose per Kg */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
              Peso Paciente (kg)
            </label>
            <input
              type="number"
              step="0.5"
              value={patient.weightKg}
              onChange={(e) =>
                onUpdatePatient({
                  ...patient,
                  weightKg: parseFloat(e.target.value) || 1
                })
              }
              className="w-full text-sm font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
            {patient.heightCm && patient.heightCm > 0 && (
              <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium block mt-1">
                Talla: {patient.heightCm} cm · IMC {(patient.weightKg / Math.pow(patient.heightCm / 100, 2)).toFixed(1)} kg/m²
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Dosis (mg/kg)
              </label>
              <div className="flex text-[10px] rounded border border-slate-200 overflow-hidden font-medium">
                <button
                  type="button"
                  onClick={() => setDoseType('perDay')}
                  className={`px-1.5 py-0.5 ${
                    doseType === 'perDay' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  /día
                </button>
                <button
                  type="button"
                  onClick={() => setDoseType('perDose')}
                  className={`px-1.5 py-0.5 ${
                    doseType === 'perDose' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  /dosis
                </button>
              </div>
            </div>
            <input
              type="number"
              step="1"
              value={doseMgKg}
              onChange={(e) => setDoseMgKg(parseFloat(e.target.value) || 0)}
              className="w-full text-sm font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* Concentration Inputs */}
        <div>
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
            Concentración de la Suspensión o Frasco
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="number"
                value={concMg}
                onChange={(e) => setConcMg(parseFloat(e.target.value) || 1)}
                className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5"
              />
              <span className="absolute right-2 top-1.5 text-[11px] text-slate-400">mg</span>
            </div>
            <span className="text-sm font-bold text-slate-400">en</span>
            <div className="flex-1 relative">
              <input
                type="number"
                value={concMl}
                onChange={(e) => setConcMl(parseFloat(e.target.value) || 1)}
                className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5"
              />
              <span className="absolute right-2 top-1.5 text-[11px] text-slate-400">mL</span>
            </div>
          </div>
        </div>

        {/* Interval & Duration */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
              Intervalo
            </label>
            <div className="grid grid-cols-3 gap-1">
              {[6, 8, 12].map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setIntervalHours(h)}
                  className={`py-1 text-xs font-semibold rounded border transition-all ${
                    intervalHours === h
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  c/{h}h
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
              Duración (Días)
            </label>
            <input
              type="number"
              min="1"
              max="90"
              value={durationDays}
              onChange={(e) => setDurationDays(parseInt(e.target.value, 10) || 1)}
              className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
