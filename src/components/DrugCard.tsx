import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
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
      className={`w-full text-left bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border transition-all cursor-pointer group ${
        pregSafety?.isContraindicatedNow
          ? 'border-rose-300 dark:border-rose-900/60 hover:border-rose-400 dark:hover:border-rose-800'
          : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {medication.name}
            </h3>
            {medication.atcCode && (
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                {medication.atcCode}
              </span>
            )}
          </div>

          {/* Unboxed Minimalist Metadata */}
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
            <span>{medication.therapeuticClass}</span>
            {medication.availableRoutes && medication.availableRoutes.length > 0 && (
              <>
                <span className="mx-1.5 opacity-50">·</span>
                <span className="font-medium text-slate-600 dark:text-slate-300">
                  {medication.availableRoutes
                    .map((r) => (r === 'oral' ? 'VO' : r.toUpperCase()))
                    .join('/')}
                </span>
              </>
            )}
            {medication.commercialNames.length > 0 && (
              <>
                <span className="mx-1.5 opacity-50">·</span>
                <span>{medication.commercialNames.slice(0, 2).join(', ')}</span>
              </>
            )}
          </p>
        </div>

        {/* Favorite Star Button */}
        <button
          type="button"
          onClick={onToggleFavorite}
          className="p-1 text-slate-300 dark:text-slate-600 hover:text-amber-500 transition-colors cursor-pointer shrink-0"
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

      {/* Alerta de Embarazo Minimalista */}
      {pregSafety?.isContraindicatedNow && (
        <div className="mt-2 text-[11px] font-medium text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
          <span>⛔</span>
          <span>Contraindicado en gestación (Categoría {pregSafety.guidance.category})</span>
        </div>
      )}

      {/* Indication & Dosage Quick Info */}
      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
        <div className="text-slate-600 dark:text-slate-300 flex items-center gap-1 truncate pr-2">
          <span className="truncate">{primaryIndication.name}:</span>
          <span className="font-semibold text-slate-900 dark:text-white shrink-0">
            {primaryIndication.isDosePerKgPerDose
              ? `${primaryIndication.recommendedDoseMgPerKgPerDay} mg/kg/dosis`
              : primaryIndication.recommendedDoseMgPerKgPerDay
              ? `${primaryIndication.recommendedDoseMgPerKgPerDay} mg/kg/día`
              : `${primaryIndication.fixedAdultDoseMg} mg`}
          </span>
        </div>

        <div className="flex items-center gap-0.5 text-xs text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors shrink-0">
          <span>Calcular</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
