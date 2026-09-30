import React from 'react';
import { ArrowRight, User, Sun, Moon } from 'lucide-react';
import { MedFormulaLogo } from './MedFormulaLogo';
import { PatientProfile } from '../types';

interface HomeScreenProps {
  onOpenPatientData: () => void;
  onContinueToCalculators?: () => void;
  patient?: PatientProfile;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenPatientData,
  onContinueToCalculators,
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

      <div className="w-full max-w-sm flex flex-col items-center space-y-7 my-auto">
        {/* Minimalist Logo & Title */}
        <div className="space-y-2.5">
          <MedFormulaLogo variant="icon" size="lg" className="mx-auto" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Med<span className="text-blue-600 dark:text-blue-400">Formula</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
              Dosificación farmacológica clínica según peso, edad e indicación
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="w-full space-y-2.5 pt-2">
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
              className="w-full py-2.5 px-4 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer text-center"
            >
              Continuar con paciente actual ({patient.weightKg} kg · {patient.ageYears}a) →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};




