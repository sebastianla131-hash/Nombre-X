import React from 'react';
import { User, ChevronRight } from 'lucide-react';
import { MedFormulaLogo } from './MedFormulaLogo';

interface HomeScreenProps {
  onOpenPatientData: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenPatientData }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 h-full overflow-hidden select-none">
      <div className="w-full max-w-xs flex flex-col items-center space-y-8 my-auto">
        {/* Logo de la app en la parte superior encima de Datos del paciente */}
        <div className="animate-in fade-in duration-300">
          <MedFormulaLogo variant="full" size="lg" showSubtitle={true} />
        </div>

        {/* Acceso a Datos del paciente en la mitad de la página */}
        <button
          type="button"
          onClick={onOpenPatientData}
          className="w-full bg-white dark:bg-slate-900 border-2 border-blue-600 hover:border-blue-700 dark:border-blue-500 rounded-2xl p-4.5 shadow-lg shadow-blue-900/10 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-between gap-4 group cursor-pointer"
          aria-label="Datos del paciente"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-xs group-hover:bg-blue-800 transition-colors shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="block text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Datos del paciente
              </span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-700 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 transition-all shrink-0">
            <ChevronRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    </div>
  );
};


