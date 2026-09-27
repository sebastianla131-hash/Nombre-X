import React from 'react';
import { Star, ChevronRight, Sparkles } from 'lucide-react';
import { Medication } from '../types';

interface DrugCardProps {
  medication: Medication;
  onSelect: (m: Medication) => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  patientWeightKg: number;
}

export const DrugCard: React.FC<DrugCardProps> = ({
  medication,
  onSelect,
  isFavorite,
  onToggleFavorite,
  patientWeightKg
}) => {
  const primaryIndication = medication.indications[0];

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
      className="w-full text-left bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer group active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors truncate">
              {medication.name}
            </h3>
            {medication.badgeText && (
              <span className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200/50">
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

      {/* Indication & Dosage Quick Info */}
      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <div className="text-slate-600 dark:text-slate-300 flex items-center gap-1 truncate pr-2">
          <span className="font-medium truncate">{primaryIndication.name}:</span>
          <span className="font-bold text-emerald-700 dark:text-emerald-400 shrink-0">
            {primaryIndication.isDosePerKgPerDose
              ? `${primaryIndication.recommendedDoseMgPerKgPerDay} mg/kg/dosis`
              : primaryIndication.recommendedDoseMgPerKgPerDay
              ? `${primaryIndication.recommendedDoseMgPerKgPerDay} mg/kg/d`
              : `${primaryIndication.fixedAdultDoseMg} mg`}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 shrink-0 group-hover:translate-x-0.5 transition-transform">
          <span>Calcular</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
