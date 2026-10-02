import React from 'react';
import {
  Search,
  X,
  User,
  Star,
  Sun,
  Moon,
  Flame,
} from 'lucide-react';
import { PatientProfile, DrugCategory } from '../types';

export interface CategoryItem {
  id: DrugCategory;
  label: string;
}

export const HEADER_CATEGORIES: CategoryItem[] = [
  { id: 'Favoritos', label: 'Favoritos' },
  { id: 'Antibióticos', label: 'Antibióticos' },
  { id: 'Analgésicos', label: 'Analgésicos' },
  { id: 'Antihipertensivos', label: 'Antihipertensivos' },
  { id: 'Endocrinología', label: 'Endocrinología' },
  { id: 'Cardiología', label: 'Cardiología' },
  { id: 'Ginecología', label: 'Ginecología' },
  { id: 'Todos', label: 'Todos' },
  { id: 'Urgencias / Respiratorio', label: 'Respiratorio / Urgencias' },
  { id: 'Gastroenterología', label: 'Gastroenterología' },
  { id: 'Corticoides', label: 'Corticoides' },
  { id: 'Antídotos / Toxicología', label: 'Antídotos' }
];

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  patient: PatientProfile;
  onOpenPatientModal: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenCrashCart?: () => void;
  onBackToHome?: () => void;
  selectedCategory?: DrugCategory;
  onSelectCategory?: (cat: DrugCategory) => void;
  showCategories?: boolean;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  patient,
  onOpenPatientModal,
  favoritesCount,
  onOpenFavorites,
  onOpenCrashCart,
  onBackToHome,
  isDarkMode = false,
  onToggleDarkMode
}) => {
  const patientBmi =
    patient.heightCm && patient.heightCm > 0
      ? (patient.weightKg / Math.pow(patient.heightCm / 100, 2)).toFixed(1)
      : null;

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white transition-colors shrink-0">
      {/* Top Minimalist Brand & Patient Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          {onBackToHome ? (
            <button
              type="button"
              onClick={onBackToHome}
              className="text-left font-bold text-base tracking-tight hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1 text-slate-900 dark:text-white"
            >
              <span>Med</span>
              <span className="text-blue-600 dark:text-blue-400">Formula</span>
            </button>
          ) : (
            <div className="font-bold text-base tracking-tight flex items-center gap-1 text-slate-900 dark:text-white">
              <span>Med</span>
              <span className="text-blue-600 dark:text-blue-400">Formula</span>
            </div>
          )}
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">· Dosificación</span>
        </div>

        {/* Quick Patient & Favorites Controls & Theme Switcher */}
        <div className="flex items-center gap-1.5">
          {onOpenCrashCart && (
            <button
              type="button"
              onClick={onOpenCrashCart}
              title="Código Azul (Crash Cart)"
              className="flex items-center gap-1 text-[11px] font-bold bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 px-2 py-1.5 rounded-lg transition-colors cursor-pointer"
              aria-label="Código Azul"
            >
              <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-600 animate-pulse" />
              <span className="hidden sm:inline">Cód. Azul</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenPatientModal}
            title="Editar datos del paciente"
            className="flex items-center gap-1.5 text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/90 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-medium px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span className="font-bold">{patient.weightKg} kg</span>
            {patientBmi && (
              <span className="text-slate-400 dark:text-slate-500 text-[11px] font-normal">
                · IMC {patientBmi}
              </span>
            )}
            {patient.gender === 'female' && patient.isPregnant && (
              <span className="text-rose-600 dark:text-rose-400 font-semibold text-[11px]">
                · 🤰{patient.pregnancyTrimester ? `${patient.pregnancyTrimester}ºT` : ''}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenFavorites}
            title="Ver favoritos"
            className="p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors relative cursor-pointer"
            aria-label="Favoritos"
          >
            <Star className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-amber-400 text-amber-500' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {onToggleDarkMode && (
            <button
              type="button"
              onClick={onToggleDarkMode}
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
              aria-label="Alternar modo oscuro o claro"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Persistent Minimal Search Bar */}
      <div className="px-4 pb-2.5">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar medicamento o indicación..."
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50/70 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-xl placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-slate-300 focus:bg-white dark:focus:bg-slate-800 transition-all font-normal"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 p-0.5 cursor-pointer"
              aria-label="Borrar búsqueda"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

