import React, { useState, useMemo } from 'react';
import { Droplets, Clock, AlertTriangle, Check, ShieldCheck } from 'lucide-react';
import { PatientProfile } from '../types';
import { INFUSION_PROTOCOLS, InfusionProtocol } from '../data/medications';
import { calculateInfusionRate } from '../utils/calculator';

interface InfusionCalculatorProps {
  patient: PatientProfile;
  onUpdatePatient: (p: PatientProfile) => void;
}

export const InfusionCalculator: React.FC<InfusionCalculatorProps> = ({
  patient,
  onUpdatePatient
}) => {
  const [selectedProtocol, setSelectedProtocol] = useState<InfusionProtocol>(
    INFUSION_PROTOCOLS[0]
  );
  const [doseRate, setDoseRate] = useState<number>(
    INFUSION_PROTOCOLS[0].typicalDoseRange.initial
  );
  const [drugAmountMg, setDrugAmountMg] = useState<number>(
    INFUSION_PROTOCOLS[0].defaultConcentration.drugAmountMg
  );
  const [solutionVolumeMl, setSolutionVolumeMl] = useState<number>(
    INFUSION_PROTOCOLS[0].defaultConcentration.solutionVolumeMl
  );

  const handleSelectProtocol = (p: InfusionProtocol) => {
    setSelectedProtocol(p);
    setDoseRate(p.typicalDoseRange.initial);
    setDrugAmountMg(p.defaultConcentration.drugAmountMg);
    setSolutionVolumeMl(p.defaultConcentration.solutionVolumeMl);
  };

  const result = useMemo(() => {
    return calculateInfusionRate({
      weightKg: patient.weightKg,
      doseRate,
      doseUnit: selectedProtocol.doseUnit,
      totalDrugMg: drugAmountMg,
      totalVolumeMl: solutionVolumeMl
    });
  }, [patient.weightKg, doseRate, selectedProtocol.doseUnit, drugAmountMg, solutionVolumeMl]);

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto pb-20">
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Droplets className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
          Calculadora de Infusiones Continuas (UCI / Urgencias)
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Calcula la velocidad de bomba de infusión en mL/h y microgotas/min para drogas vasoactivas y sedación.
        </p>
      </div>

      {/* Protocol Selector Tabs */}
      <div className="grid grid-cols-2 gap-1.5">
        {INFUSION_PROTOCOLS.map((p) => {
          const isSelected = selectedProtocol.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handleSelectProtocol(p)}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-700 text-emerald-800 dark:text-emerald-200 ring-1 ring-emerald-700'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="font-bold text-xs truncate">{p.drugName}</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">{p.indication}</div>
            </button>
          );
        })}
      </div>

      {/* RESULT BANNER (MDCalc Style) */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-emerald-600/40 shadow-sm overflow-hidden">
        <div className="bg-emerald-700 text-white px-4 py-2 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider">
            Velocidad de Perfusión en Bomba
          </span>
          <span className="text-[11px] text-emerald-100 font-medium">
            Peso: {patient.weightKg} kg
          </span>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-baseline justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-semibold text-slate-500 block">
                Ritmo de Infusión Programado:
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 tabular-nums">
                  {result.rateMlPerHour}
                </span>
                <span className="text-base font-bold text-slate-700 dark:text-slate-200">
                  mL / hora
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">Microgotas</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {result.microdropsPerMin} gtt/min
              </span>
              <span className="text-[10px] text-slate-400 block">(Bomba o Microgotero)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg">
            <div>
              <span className="text-slate-500 block text-[11px]">Concentración Final:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {result.finalConcentrationMcgPerMl} mcg/mL
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Dosis Administrada:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {doseRate} {selectedProtocol.doseUnit}
              </span>
            </div>
          </div>

          {/* Clinical tips */}
          <div className="p-2.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-lg border border-emerald-200/60 text-xs text-emerald-950 dark:text-emerald-200 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{selectedProtocol.clinicalTips}</p>
          </div>
        </div>
      </div>

      {/* Adjustment Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 space-y-3">
        {/* Desired Dose Slider & Input */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Dosis Deseada ({selectedProtocol.doseUnit})
            </label>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
              {doseRate} {selectedProtocol.doseUnit}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="range"
              min={selectedProtocol.typicalDoseRange.min}
              max={selectedProtocol.typicalDoseRange.max}
              step={selectedProtocol.doseUnit === 'mcg/kg/min' && selectedProtocol.id === 'noradrenalina' ? 0.02 : 0.05}
              value={doseRate}
              onChange={(e) => setDoseRate(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
            />
            <input
              type="number"
              step="0.01"
              value={doseRate}
              onChange={(e) => setDoseRate(parseFloat(e.target.value) || 0)}
              className="w-20 px-2 py-1 text-xs font-bold border border-slate-300 rounded text-center"
            />
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>Mín: {selectedProtocol.typicalDoseRange.min}</span>
            <span>Inicio: {selectedProtocol.typicalDoseRange.initial}</span>
            <span>Máx: {selectedProtocol.typicalDoseRange.max}</span>
          </div>
        </div>

        {/* Dilution Formulation */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div>
            <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Cantidad de Fármaco (mg)
            </label>
            <input
              type="number"
              value={drugAmountMg}
              onChange={(e) => setDrugAmountMg(parseFloat(e.target.value) || 0)}
              className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Volumen de Solución (mL)
            </label>
            <input
              type="number"
              value={solutionVolumeMl}
              onChange={(e) => setSolutionVolumeMl(parseFloat(e.target.value) || 0)}
              className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* Patient Weight Shortcut */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">Peso del paciente:</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              value={patient.weightKg}
              onChange={(e) =>
                onUpdatePatient({
                  ...patient,
                  weightKg: parseFloat(e.target.value) || 1
                })
              }
              className="w-16 px-2 py-0.5 text-xs font-bold border border-slate-300 rounded text-center"
            />
            <span className="font-semibold text-slate-600">kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};
