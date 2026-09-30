// src/components/ui/DoseThermometer.tsx
// Visual Dose Thermometer / Safety Spectrum Gauge (Anti-Slop / High Clinical Density)

import React from 'react';
import { DoseSpectrumEvaluation } from '../../utils/clinicalEngine';
import { ShieldCheck, AlertTriangle, ShieldAlert } from 'lucide-react';

interface DoseThermometerProps {
  evaluation: DoseSpectrumEvaluation;
  unitLabel?: string;
  className?: string;
}

export const DoseThermometer: React.FC<DoseThermometerProps> = ({
  evaluation,
  unitLabel = 'mg/día',
  className = '',
}) => {
  const { currentDailyMg, minDailyMg, recDailyMg, maxDailyMg, percentage, status, statusLabel } = evaluation;

  // Determine thermometer bar color gradient based on clinical status
  const getBarColor = () => {
    switch (status) {
      case 'exceeded_capped':
        return 'bg-gradient-to-r from-emerald-500 via-amber-400 to-orange-500';
      case 'high_normal':
        return 'bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-500';
      case 'subtherapeutic':
        return 'bg-gradient-to-r from-blue-400 to-emerald-400';
      case 'optimal':
      default:
        return 'bg-gradient-to-r from-blue-500 to-emerald-500';
    }
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'exceeded_capped':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-900 dark:bg-orange-950/80 dark:text-orange-200 border border-orange-300 dark:border-orange-800">
            <ShieldAlert className="w-3 h-3 text-orange-600 dark:text-orange-400" />
            <span>{statusLabel}</span>
          </span>
        );
      case 'high_normal':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3 h-3 text-amber-600 dark:text-amber-400" />
            <span>{statusLabel}</span>
          </span>
        );
      case 'subtherapeutic':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950/80 dark:text-blue-200 border border-blue-300 dark:border-blue-800">
            <span>{statusLabel}</span>
          </span>
        );
      case 'optimal':
      default:
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800">
            <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>{statusLabel}</span>
          </span>
        );
    }
  };

  return (
    <div className={`p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-2.5 ${className}`}>
      {/* Header with Title and Status Badge */}
      <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
        <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <span>Termómetro de Seguridad de Dosis</span>
        </span>
        {getStatusBadge()}
      </div>

      {/* Thermometer Bar Track */}
      <div className="relative pt-1 pb-1">
        {/* Track background */}
        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
          <div
            className={`h-full rounded-full transition-all duration-300 ease-out ${getBarColor()}`}
            style={{ width: `${Math.max(5, Math.min(100, percentage))}%` }}
          />
        </div>

        {/* Marker Indicator for Current Dose */}
        <div
          className="absolute -top-1 transition-all duration-300 -translate-x-1/2 flex flex-col items-center pointer-events-none"
          style={{ left: `${Math.max(4, Math.min(96, percentage))}%` }}
        >
          <div className="w-3 h-3 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white rounded-full shadow-xs" />
        </div>
      </div>

      {/* Reference Spectrum Milestones */}
      <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono tabular-nums">
        <div className="text-left">
          <span className="block text-slate-400 text-[9px]">Mínima Eficaz</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {minDailyMg} {unitLabel}
          </span>
        </div>

        <div className="text-center">
          <span className="block text-slate-400 text-[9px]">Recomendada</span>
          <span className="font-bold text-blue-600 dark:text-blue-400">
            {recDailyMg} {unitLabel}
          </span>
        </div>

        <div className="text-right">
          <span className="block text-slate-400 text-[9px]">Tope Seguro</span>
          <span className="font-semibold text-rose-600 dark:text-rose-400">
            {maxDailyMg} {unitLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
