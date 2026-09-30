// src/components/ui/CriticalAlertModal.tsx
// Critical Hard Stop Modal for High-Risk Contraindications (SRS 2025 Safety Mandate)

import React from 'react';
import { ShieldAlert, AlertTriangle, ArrowRight, XCircle } from 'lucide-react';

interface CriticalAlertModalProps {
  isOpen: boolean;
  title: string;
  drugName: string;
  reason: string;
  fetalRisks?: string[];
  clinicalAlternative?: string;
  onAcknowledge: () => void;
  onSelectAlternative?: () => void;
}

export const CriticalAlertModal: React.FC<CriticalAlertModalProps> = ({
  isOpen,
  title,
  drugName,
  reason,
  fetalRisks,
  clinicalAlternative,
  onAcknowledge,
  onSelectAlternative,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="critical-alert-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-2 border-rose-500 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Urgent Header */}
        <div className="bg-rose-600 dark:bg-rose-700 px-4 py-3.5 text-white flex items-center gap-2.5">
          <ShieldAlert className="w-6 h-6 shrink-0 text-white animate-pulse" />
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-rose-100 block">
              BLOQUEO DE SEGURIDAD CLÍNICA (HARD STOP)
            </span>
            <h3 id="critical-alert-title" className="text-base font-extrabold leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-3.5 text-xs text-slate-800 dark:text-slate-200 overflow-y-auto max-h-[70vh]">
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 space-y-1">
            <span className="font-bold text-rose-900 dark:text-rose-200 block text-xs">
              Medicamento Seleccionado: <span className="underline">{drugName}</span>
            </span>
            <p className="text-xs leading-relaxed text-rose-950 dark:text-rose-100 font-medium">
              {reason}
            </p>
          </div>

          {/* Fetal / Organ Risks */}
          {fetalRisks && fetalRisks.length > 0 && (
            <div className="space-y-1.5">
              <span className="font-bold uppercase tracking-wider text-[10px] text-slate-500 dark:text-slate-400 block">
                Riesgos Graves Documentados:
              </span>
              <ul className="space-y-1">
                {fetalRisks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-rose-700 dark:text-rose-300">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Clinical Alternative Suggestion */}
          {clinicalAlternative && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100 space-y-1">
              <span className="font-bold text-[11px] text-emerald-900 dark:text-emerald-300 uppercase tracking-wide block flex items-center gap-1.5">
                <span>✓</span> Alternativa Clínica Recomendada
              </span>
              <p className="text-xs font-semibold leading-relaxed">
                {clinicalAlternative}
              </p>
            </div>
          )}
        </div>

        {/* Actions Footer */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
          {clinicalAlternative && onSelectAlternative && (
            <button
              type="button"
              onClick={onSelectAlternative}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.99]"
            >
              <span>Cambiar a Alternativa Segura</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={onAcknowledge}
            className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Entendido y Ajustar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
