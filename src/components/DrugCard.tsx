import React from 'react';
import { Star, ChevronRight, Sparkles } from 'lucide-react';
import { Medication } from '../types';
import { getPregnancyGuidance } from '../data/pregnancySafety';

interface DrugCardProps {
  medication: Medication;
  onSelect: (m: Medication) => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  patientWeightKg: number;
  isPregnant?: boolean;
  pregnancyTrimester?: 1 | 2 | 3;
}

export const DrugCard: React.FC<DrugCardProps> = ({
  medication,
  onSelect,
  isFavorite,
  onToggleFavorite,
  patientWeightKg,
  isPregnant = false,
  pregnancyTrimester
}) => {
  const primaryIndication = medication.indications[0];
  const pregSafety = isPregnant ? getPregnancyGuidance(medication, pregnancyTrimester) : null;

  return (
    <div
      onClick={() => onSelect(medication)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(medication);
        }
      }}
      className={`w-full text-left bg-white dark:bg-slate-900 p-3.5 rounded-xl border shadow-xs transition-all cursor-pointer group active:scale-[0.99] ${
        pregSafety?.isContraindicatedNow
          ? 'border-rose-400 dark:border-rose-800 bg-rose-50/15 dark:bg-rose-950/10 hover:border-rose-600'
          : 'border-slate-200 dark:border-slate-800 hover:border-blue-600 hover:shadow-xs'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors truncate">
              {medication.name}
            </h3>
            {medication.atcCode && (
              <span className="text-[10px] font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                ATC {medication.atcCode}
              </span>
            )}
            {medication.awareCategory === 'Access' && (
              <span className="text-[10px] font-bold text-blue-800 dark:text-blue-200 bg-blue-100/90 dark:bg-blue-950 px-1.5 py-0.5 rounded border border-blue-300/60">
                AWaRe: Acceso
              </span>
            )}
            {medication.awareCategory === 'Watch' && (
              <span className="text-[10px] font-bold text-amber-800 dark:text-amber-200 bg-amber-100/90 dark:bg-amber-950 px-1.5 py-0.5 rounded border border-amber-300/60">
                AWaRe: Precaución
              </span>
            )}
            {medication.awareCategory === 'Reserve' && (
              <span className="text-[10px] font-bold text-rose-800 dark:text-rose-200 bg-rose-100/90 dark:bg-rose-950 px-1.5 py-0.5 rounded border border-rose-300/60">
                AWaRe: Reserva
              </span>
            )}
            {medication.badgeText && !medication.awareCategory && (
              <span className="text-[10px] font-semibold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-200/50">
                {medication.badgeText}
              </span>
            )}
          </div>

          {/* Commercial brands / subtext */}
          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
            {medication.commercialNames.join(', ')} · {medication.therapeuticClass}
          </p>
        </div>

        {/* Favorite Star Button */}
        <button
          type="button"
          onClick={onToggleFavorite}
          className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-300 hover:text-amber-500"
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <Star
            className={`w-4 h-4 ${
              isFavorite
                ? 'fill-amber-400 text-amber-500'
                : 'text-slate-300 dark:text-slate-600'
            }`}
          />
        </button>
      </div>

      {/* Alerta de Embarazo en la Tarjeta */}
      {pregSafety && (
        <div className="mt-2">
          {pregSafety.isContraindicatedNow ? (
            <div className="py-1 px-2.5 rounded-lg bg-rose-100 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-[11px] font-bold flex items-center justify-between gap-1">
              <span className="flex items-center gap-1.5 truncate">
                <span>⛔</span>
                <span className="truncate">Contraindicado en Gestación (Cat. {pregSafety.guidance.category})</span>
              </span>
              <span className="text-[10px] font-semibold bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100 px-1.5 py-0.5 rounded shrink-0">
                {pregnancyTrimester ? `${pregnancyTrimester}º Trim.` : 'Evitar'}
              </span>
            </div>
          ) : pregSafety.status === 'caution' ? (
            <div className="py-0.5 px-2 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-[10px] font-bold inline-flex items-center gap-1">
              <span>⚠️</span>
              <span>Precaución en Gestación (Cat. {pregSafety.guidance.category})</span>
            </div>
          ) : (
            <div className="py-0.5 px-2 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-[10px] font-bold inline-flex items-center gap-1">
              <span>🤰</span>
              <span>Seguro en Gestación (Cat. {pregSafety.guidance.category})</span>
            </div>
          )}
        </div>
      )}

      {/* Indication & Dosage Quick Info */}
      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <div className="text-slate-600 dark:text-slate-300 flex items-center gap-1 truncate pr-2">
          <span className="font-medium truncate">{primaryIndication.name}:</span>
          <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">
            {primaryIndication.isDosePerKgPerDose
              ? `${primaryIndication.recommendedDoseMgPerKgPerDay} mg/kg/dosis`
              : primaryIndication.recommendedDoseMgPerKgPerDay
              ? `${primaryIndication.recommendedDoseMgPerKgPerDay} mg/kg/d`
              : `${primaryIndication.fixedAdultDoseMg} mg`}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-blue-700 dark:text-blue-400 shrink-0 group-hover:translate-x-0.5 transition-transform">
          <span>Calcular</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
