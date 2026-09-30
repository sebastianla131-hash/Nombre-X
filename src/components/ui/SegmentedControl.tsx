// src/components/ui/SegmentedControl.tsx
// High-density, touch-optimized horizontal segmented control (Anti-Slop / Zero native dropdowns)

import React from 'react';

export interface SegmentedControlOption<T extends string | number> {
  id: T;
  label: string;
  sublabel?: string;
  badge?: string;
  badgeColor?: 'blue' | 'amber' | 'emerald' | 'rose';
  disabled?: boolean;
}

interface SegmentedControlProps<T extends string | number> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'row' | 'grid-2' | 'grid-3' | 'grid-4' | 'wrap';
  ariaLabel?: string;
  className?: string;
}

export function SegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
  size = 'md',
  layout = 'row',
  ariaLabel = 'Opciones de selección',
  className = '',
}: SegmentedControlProps<T>) {
  const getLayoutClass = () => {
    switch (layout) {
      case 'grid-2':
        return 'grid grid-cols-2 gap-1.5';
      case 'grid-3':
        return 'grid grid-cols-3 gap-1.5';
      case 'grid-4':
        return 'grid grid-cols-2 sm:grid-cols-4 gap-1.5';
      case 'wrap':
        return 'flex flex-wrap gap-1.5';
      case 'row':
      default:
        return 'flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-2.5 py-1 text-[11px] min-h-[34px]';
      case 'lg':
        return 'px-4 py-2.5 text-sm min-h-[44px]';
      case 'md':
      default:
        return 'px-3 py-1.5 text-xs min-h-[38px]';
    }
  };

  const getBadgeClass = (badgeColor?: string, isActive?: boolean) => {
    if (isActive) {
      return 'bg-white/20 text-white';
    }
    switch (badgeColor) {
      case 'amber':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300';
      case 'emerald':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300';
      case 'rose':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300';
      case 'blue':
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300';
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={`w-full ${getLayoutClass()} ${className}`}
    >
      {options.map((opt) => {
        const isActive = value === opt.id;
        const isDisabled = Boolean(opt.disabled);

        return (
          <button
            key={String(opt.id)}
            type="button"
            role="radio"
            aria-checked={isActive}
            disabled={isDisabled}
            onClick={() => !isDisabled && onChange(opt.id)}
            className={`flex flex-col items-center justify-center font-medium rounded-lg transition-all cursor-pointer select-none text-center relative border ${getSizeClass()} ${
              isDisabled
                ? 'opacity-40 cursor-not-allowed bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400'
                : isActive
                ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-600 dark:border-blue-500 shadow-xs font-semibold'
                : 'bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-1.5 justify-center w-full">
              <span className="truncate">{opt.label}</span>
              {opt.badge && (
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full font-bold uppercase shrink-0 ${getBadgeClass(
                    opt.badgeColor,
                    isActive
                  )}`}
                >
                  {opt.badge}
                </span>
              )}
            </div>
            {opt.sublabel && (
              <span
                className={`text-[10px] truncate max-w-full font-normal ${
                  isActive ? 'text-blue-100 dark:text-blue-200' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {opt.sublabel}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
