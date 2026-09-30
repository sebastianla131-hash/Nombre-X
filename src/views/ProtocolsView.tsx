// src/views/ProtocolsView.tsx
// One-Tap Presets / Protocols Multi-Drug Combination Calculator (SRS 2025)

import React, { useState } from 'react';
import { PatientProfile, ClinicalPreset } from '../types/clinical';
import { usePresetsStore } from '../store/presetsStore';
import { useToast } from '../components/ui/ToastProvider';
import {
  generateHisPrescription,
  generatePatientPrescription,
} from '../utils/prescriptionGenerator';
import {
  Sparkles,
  Copy,
  Check,
  FileText,
  User,
  Pill,
  ChevronRight,
  Clock,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

interface ProtocolsViewProps {
  patient: PatientProfile;
  onSelectMedication?: (medId: string) => void;
}

export const ProtocolsView: React.FC<ProtocolsViewProps> = ({
  patient,
  onSelectMedication,
}) => {
  const toast = useToast();
  const { presets, activePresetId, setActivePreset } = usePresetsStore();

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedMode, setCopiedMode] = useState<'his' | 'patient' | null>(null);

  const selectedPreset = presets.find((p) => p.id === activePresetId) || presets[0];

  // Helper to calculate a single item in a preset for the current patient weight
  const calculatePresetItem = (item: (typeof selectedPreset)['items'][0]) => {
    const weight = patient.weightKg || 14;
    const isPerDose = item.doseMgPerKgDay < 20 && item.frequencyPerDay > 1; // standard pediatric rule
    const dailyMg = isPerDose ? item.doseMgPerKgDay * weight * item.frequencyPerDay : item.doseMgPerKgDay * weight;
    const singleMg = dailyMg / item.frequencyPerDay;

    let singleQuantity = 0;
    let unitLabel = 'mL';

    if (item.form === 'suspension') {
      const concMgPerMl = (item.amountMg || 250) / (item.volumeMl || 5);
      singleQuantity = Number((singleMg / concMgPerMl).toFixed(1));
      unitLabel = 'mL';
    } else if (item.form === 'tablets') {
      singleQuantity = Number((singleMg / (item.amountMg || 500)).toFixed(1));
      unitLabel = singleQuantity === 1 ? 'comprimido' : 'comprimidos';
    } else if (item.form === 'drops') {
      const concMgPerDrop = (item.amountMg || 100) / ((item.volumeMl || 1) * 20);
      singleQuantity = Math.round(singleMg / concMgPerDrop);
      unitLabel = 'gotas';
    } else {
      singleQuantity = Number(singleMg.toFixed(1));
      unitLabel = 'mg';
    }

    const totalLiquidMl = item.form === 'suspension' ? singleQuantity * item.frequencyPerDay * item.durationDays : undefined;
    const bottlesNeeded = totalLiquidMl ? Math.max(1, Math.ceil(totalLiquidMl / 100)) : undefined;

    const hisString = generateHisPrescription({
      medicationName: item.drugName,
      concentrationName: item.concentrationName,
      amountMg: item.amountMg,
      volumeMl: item.volumeMl,
      form: item.form,
      singleDoseQuantity: singleQuantity,
      unitLabel,
      route: item.route,
      intervalHours: item.intervalHours,
      durationDays: item.durationDays,
      bottlesNeeded,
    });

    const patientString = generatePatientPrescription({
      medicationName: item.drugName,
      concentrationName: item.concentrationName,
      form: item.form,
      singleDoseQuantity: singleQuantity,
      unitLabel,
      route: item.route,
      intervalHours: item.intervalHours,
      durationDays: item.durationDays,
      extraInstructions: item.instructions,
    });

    return {
      singleQuantity,
      unitLabel,
      singleMg: Math.round(singleMg),
      dailyMg: Math.round(dailyMg),
      bottlesNeeded,
      hisString,
      patientString,
    };
  };

  // Concatenate all items for the active preset
  const handleCopyPresetAll = (preset: ClinicalPreset, mode: 'his' | 'patient') => {
    const results = preset.items.map((item) => calculatePresetItem(item));
    const combinedText = mode === 'his'
      ? results.map((r) => r.hisString).join('\n')
      : results.map((r, idx) => `${idx + 1}. ${r.patientString}`).join('\n\n');

    navigator.clipboard.writeText(combinedText);
    setCopiedId(preset.id);
    setCopiedMode(mode);
    toast.success(
      mode === 'his'
        ? `Protocolo "${preset.title}" copiado para Historia Clínica`
        : `Instrucciones del protocolo copiadas para el Paciente`
    );

    setTimeout(() => {
      setCopiedId(null);
      setCopiedMode(null);
    }, 2000);
  };

  return (
    <div className="space-y-4 pb-12 animate-in fade-in duration-200">
      {/* Encabezado */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-4 shadow-sm space-y-1">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-blue-200">
            ONE-TAP COMBOS & PROTOCOLOS
          </span>
        </div>
        <h2 className="text-base font-extrabold tracking-tight">
          Mis Protocolos Clínicos
        </h2>
        <p className="text-xs text-blue-100">
          Calcula y concatena automáticamente combinaciones frecuentes de medicamentos para el peso actual ({patient.weightKg} kg).
        </p>
      </div>

      {/* Selector de Protocolos */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {presets.map((preset) => {
          const isSelected = preset.id === selectedPreset?.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => setActivePreset(preset.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400'
              }`}
            >
              {preset.title}
            </button>
          );
        })}
      </div>

      {/* Detalle del Protocolo Seleccionado */}
      {selectedPreset && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 space-y-4 shadow-xs">
          <div className="flex items-start justify-between gap-3 flex-wrap border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                  {selectedPreset.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedPreset.items.length} fármacos incluidos
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                {selectedPreset.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {selectedPreset.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleCopyPresetAll(selectedPreset, 'his')}
                className="py-2 px-3 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedId === selectedPreset.id && copiedMode === 'his' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                ) : (
                  <FileText className="w-3.5 h-3.5" />
                )}
                <span>Copiar Todo (HIS)</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopyPresetAll(selectedPreset, 'patient')}
                className="py-2 px-3 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedId === selectedPreset.id && copiedMode === 'patient' ? (
                  <Check className="w-3.5 h-3.5 text-white" />
                ) : (
                  <User className="w-3.5 h-3.5" />
                )}
                <span>Copiar Paciente</span>
              </button>
            </div>
          </div>

          {/* Lista de Fármacos Calculados en el Protocolo */}
          <div className="space-y-3">
            {selectedPreset.items.map((item, idx) => {
              const calc = calculatePresetItem(item);

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/70 border border-slate-200/80 dark:border-slate-800 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2">
                        <Pill className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="font-extrabold text-xs text-slate-900 dark:text-white">
                          {item.drugName}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                          {item.concentrationName}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                        Indicación: {item.indicationName} · {item.doseMgPerKgDay} mg/kg/día
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-extrabold text-blue-700 dark:text-blue-400 font-mono tabular-nums">
                        {calc.singleQuantity} {calc.unitLabel}
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        cada {item.intervalHours}h por {item.durationDays}d
                      </span>
                    </div>
                  </div>

                  {/* Cajas de texto formateadas */}
                  <div className="space-y-1.5 pt-1">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[11px] font-mono text-slate-800 dark:text-slate-200 select-all">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block font-sans">
                        Historia Clínica (HIS):
                      </span>
                      {calc.hisString}
                    </div>

                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[11px] font-sans text-slate-700 dark:text-slate-300 select-all">
                      <span className="text-[9px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">
                        Instrucciones al Paciente:
                      </span>
                      {calc.patientString}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
