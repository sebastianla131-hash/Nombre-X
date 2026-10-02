import React from 'react';
import { ArrowRight, User, Sun, Moon, Flame, Sparkles } from 'lucide-react';
import { MedFormulaLogo } from './MedFormulaLogo';
import { PatientProfile } from '../types';

interface HomeScreenProps {
  onOpenPatientData: () => void;
  onContinueToCalculators?: () => void;
  onOpenCrashCart?: () => void;
  onOpenProtocols?: () => void;
  patient?: PatientProfile;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenPatientData,
  onContinueToCalculators,
  onOpenCrashCart,
  onOpenProtocols,
  patient,
  isDarkMode = false,
  onToggleDarkMode
}) => {
  const hasPatientData = Boolean(patient && patient.weightKg > 0);

  return (
    <div className="flex-1 h-full w-full flex flex-col items-center justify-center p-6 text-center select-none bg-white dark:bg-slate-900 relative transition-colors overflow-y-auto">
      {/* Top right theme toggle */}
      {onToggleDarkMode && (
        <div className="absolute top-4 right-4">
          <button
            type="button"
            onClick={onToggleDarkMode}
            title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
            aria-label="Alternar modo oscuro o claro"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      )}

      <div className="w-full max-w-sm flex flex-col items-center space-y-6 my-auto">
        {/* Minimalist Logo & Title */}
        <div className="space-y-2">
          <MedFormulaLogo variant="icon" size="lg" className="mx-auto" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Med<span className="text-blue-600 dark:text-blue-400">Formula</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
              Dosificación farmacológica clínica según peso, edad e indicación (SRS 2025)
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="w-full space-y-2.5 pt-1">
          <button
            type="button"
            onClick={onOpenPatientData}
            className="w-full py-3.5 px-5 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.99] cursor-pointer"
          >
            <User className="w-4 h-4 opacity-80" />
            <span>Ingresar datos del paciente</span>
            <ArrowRight className="w-4 h-4 opacity-80" />
          </button>

          {hasPatientData && onContinueToCalculators && patient && (
            <button
              type="button"
              onClick={onContinueToCalculators}
              className="w-full py-2.5 px-4 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer text-center bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 rounded-xl"
            >
              Continuar con paciente actual ({patient.weightKg} kg · {patient.ageYears}a) →
            </button>
          )}

          {/* Acceso Rápido a Código Azul y Protocolos */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            {onOpenCrashCart && (
              <button
                type="button"
                onClick={onOpenCrashCart}
                className="py-2.5 px-3 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition-all text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-rose-600 fill-rose-500 animate-pulse" />
                <span>Código Azul</span>
              </button>
            )}

            {onOpenProtocols && (
              <button
                type="button"
                onClick={onOpenProtocols}
                className="py-2.5 px-3 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-all text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Protocolos</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
