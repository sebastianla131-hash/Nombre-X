// src/views/CrashCartView.tsx
// Emergency Resuscitation & Code Blue Crash Cart View (PALS / ACLS SRS 2025)

import React, { useState, useMemo } from 'react';
import { PatientProfile } from '../types/clinical';
import { calculateCrashCart, estimatePediatricWeight } from '../utils/clinicalEngine';
import { useToast } from '../components/ui/ToastProvider';
import {
  Zap,
  Flame,
  Activity,
  Heart,
  Droplets,
  Wind,
  RotateCcw,
  Copy,
  Check,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

interface CrashCartViewProps {
  patient: PatientProfile;
  onUpdatePatient?: (patient: PatientProfile) => void;
  onClose?: () => void;
}

export const CrashCartView: React.FC<CrashCartViewProps> = ({
  patient,
  onUpdatePatient,
}) => {
  const toast = useToast();

  const [customWeight, setCustomWeight] = useState<number | undefined>(
    patient.weightKg > 0 ? patient.weightKg : undefined
  );
  const [quickAgeYears, setQuickAgeYears] = useState<number>(patient.ageYears || 3);
  const [quickHeightCm, setQuickHeightCm] = useState<number | undefined>(patient.heightCm);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  // Active weight used for resuscitation calculations
  const activeWeightKg = useMemo(() => {
    if (customWeight && customWeight > 0) return customWeight;
    if (quickHeightCm && quickHeightCm > 45) {
      return estimatePediatricWeight(quickAgeYears, 0, quickHeightCm);
    }
    return estimatePediatricWeight(quickAgeYears, 0);
  }, [customWeight, quickAgeYears, quickHeightCm]);

  // Synchronize when patient weight changes
  React.useEffect(() => {
    if (patient.weightKg > 0) {
      setCustomWeight(patient.weightKg);
    }
  }, [patient.weightKg]);

  const crashItems = useMemo(() => {
    const dummyPatient: PatientProfile = {
      ...patient,
      weightKg: activeWeightKg,
      ageYears: quickAgeYears,
      heightCm: quickHeightCm,
    };
    return calculateCrashCart(dummyPatient, activeWeightKg);
  }, [patient, activeWeightKg, quickAgeYears, quickHeightCm]);

  const handleSetQuickPreset = (w: number, age: number, label: string) => {
    setCustomWeight(w);
    setQuickAgeYears(age);
    if (onUpdatePatient) {
      onUpdatePatient({ ...patient, weightKg: w, ageYears: age });
    }
    toast.info(`Preset seleccionado: ${label} (${w} kg)`);
  };

  const handleCopyCrashSummary = () => {
    const summaryLines = [
      `🚨 RESUMEN DE CÓDIGO AZUL / RESUCITACIÓN (Peso: ${activeWeightKg} kg, Edad: ${quickAgeYears} años)`,
      '--------------------------------------------------',
      ...crashItems.map(
        (item) =>
          `• ${item.name}: ${item.volumeOrJoulesToDeliver} (${item.calculatedDose}) - [${item.routeOrAction}]`
      ),
      '--------------------------------------------------',
      'Guías SRS El Salvador / AHA PALS-ACLS 2025.',
    ];

    navigator.clipboard.writeText(summaryLines.join('\n'));
    setCopiedSummary(true);
    toast.success('Resumen de reanimación copiado al portapapeles');
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="space-y-4 pb-12 animate-in fade-in duration-200">
      {/* Banner de Emergencia Código Azul */}
      <div className="bg-rose-600 dark:bg-rose-700 text-white rounded-2xl p-4 shadow-md flex items-center justify-between gap-3 border border-rose-500">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 animate-pulse">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase bg-white/20 px-2 py-0.5 rounded-full">
                MODO CÓDIGO AZUL (CRASH CART)
              </span>
            </div>
            <h2 className="text-base font-extrabold tracking-tight">
              Reanimación Avanzada Pediátrica y Adulto
            </h2>
            <p className="text-[11px] text-rose-100">
              Dosis pre-calculadas instantáneas sin interacción para paro cardiorrespiratorio
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopyCrashSummary}
          className="shrink-0 p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
          title="Copiar resumen de código azul"
        >
          {copiedSummary ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          <span className="hidden sm:inline">{copiedSummary ? 'Copiado' : 'Copiar Todo'}</span>
        </button>
      </div>

      {/* Control Rápido de Peso y Edad con Presets Broselow */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-rose-200 dark:border-rose-900/60 shadow-xs space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
              Ajuste Inmediato de Peso de Resucitación:
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Calculando sobre: <strong className="text-rose-600 dark:text-rose-400 font-mono text-sm">{activeWeightKg} kg</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-xl border border-rose-200 dark:border-rose-900">
              <span className="text-xs text-rose-800 dark:text-rose-300 font-semibold">Peso:</span>
              <input
                type="number"
                inputMode="decimal"
                pattern="[0-9]*[.,]?[0-9]*"
                step="0.5"
                min="1"
                max="250"
                value={customWeight ?? ''}
                onChange={(e) => setCustomWeight(parseFloat(e.target.value) || undefined)}
                placeholder={`${activeWeightKg}`}
                className="w-16 font-mono font-extrabold text-sm text-center bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-700 rounded-lg py-0.5 text-rose-600 dark:text-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">kg</span>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">Edad:</span>
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min="0"
                max="100"
                value={quickAgeYears}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  setQuickAgeYears(val);
                }}
                className="w-12 font-mono font-bold text-xs text-center bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg py-0.5 text-slate-800 dark:text-slate-200 focus:outline-none"
              />
              <span className="text-xs text-slate-500 font-mono">años</span>
            </div>
          </div>
        </div>

        {/* Botones de Acceso Rápido Broselow / Edad */}
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-rose-500" />
            <span>Accesos Rápidos por Grupo Etario (Cinta de Broselow):</span>
          </span>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => handleSetQuickPreset(3.5, 0, 'Neonato')}
              className="py-1.5 px-2 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 text-center cursor-pointer transition-colors"
            >
              <div className="font-bold text-[11px]">Neonato</div>
              <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400">3.5 kg</div>
            </button>
            <button
              type="button"
              onClick={() => handleSetQuickPreset(10, 1, 'Lactante 1a')}
              className="py-1.5 px-2 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 text-center cursor-pointer transition-colors"
            >
              <div className="font-bold text-[11px]">1 año</div>
              <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400">10 kg</div>
            </button>
            <button
              type="button"
              onClick={() => handleSetQuickPreset(14, 3, 'Preescolar 3a')}
              className="py-1.5 px-2 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 text-center cursor-pointer transition-colors"
            >
              <div className="font-bold text-[11px]">3 años</div>
              <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400">14 kg</div>
            </button>
            <button
              type="button"
              onClick={() => handleSetQuickPreset(20, 5, 'Escolar 5a')}
              className="py-1.5 px-2 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 text-center cursor-pointer transition-colors"
            >
              <div className="font-bold text-[11px]">5 años</div>
              <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400">20 kg</div>
            </button>
            <button
              type="button"
              onClick={() => handleSetQuickPreset(35, 10, 'Escolar 10a')}
              className="py-1.5 px-2 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 text-center cursor-pointer transition-colors"
            >
              <div className="font-bold text-[11px]">10 años</div>
              <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400">35 kg</div>
            </button>
            <button
              type="button"
              onClick={() => handleSetQuickPreset(70, 30, 'Adulto Estándar')}
              className="py-1.5 px-2 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 text-center cursor-pointer transition-colors"
            >
              <div className="font-bold text-[11px]">Adulto</div>
              <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400">70 kg</div>
            </button>
          </div>
        </div>
      </div>

      {/* Tabla no interactiva de dosis pre-calculadas de reanimación */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="px-4 py-3 bg-slate-50 dark:bg-slate-850 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>Tabla de Dosificación Inmediata en Paro y Shock</span>
          </span>
          <span className="text-[10px] font-mono text-slate-400">PALS / ACLS 2025</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {crashItems.map((item) => {
            const isDefib = item.isDefibrillation;
            const isEpi = item.id === 'adrenaline';

            return (
              <div
                key={item.id}
                className={`p-3.5 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                  isEpi
                    ? 'bg-rose-50/70 dark:bg-rose-950/30'
                    : isDefib
                    ? 'bg-amber-50/50 dark:bg-amber-950/20'
                    : 'hover:bg-slate-50/60 dark:hover:bg-slate-850/40'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                      {isDefib ? (
                        <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      ) : isEpi ? (
                        <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-500 animate-pulse" />
                      ) : (
                        <Activity className="w-3.5 h-3.5 text-blue-500" />
                      )}
                      <span>{item.name}</span>
                    </span>

                    <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded">
                      {item.doseFormula}
                    </span>

                    {item.maxLimit && (
                      <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/80 px-1.5 py-0.5 rounded">
                        {item.maxLimit}
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {item.indication} · <span className="font-medium text-slate-700 dark:text-slate-300">{item.concentrationOrSpec}</span>
                  </p>

                  {item.notes && (
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 italic">
                      Nota: {item.notes}
                    </p>
                  )}
                </div>

                {/* Resultado pre-calculado en tamaño grande */}
                <div className="shrink-0 sm:text-right bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">
                    Cargar / Administrar:
                  </span>
                  <div className="flex items-baseline gap-1 sm:justify-end">
                    <span className={`text-xl sm:text-2xl font-mono font-black tabular-nums ${
                      isEpi
                        ? 'text-rose-600 dark:text-rose-400'
                        : isDefib
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      {item.volumeOrJoulesToDeliver}
                    </span>
                    {!isDefib && (
                      <span className="text-xs text-slate-500 font-semibold">
                        ({item.calculatedDose})
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] font-mono font-semibold text-slate-600 dark:text-slate-400 block">
                    {item.routeOrAction}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
