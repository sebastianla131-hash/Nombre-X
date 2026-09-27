import React from 'react';
import { Search, X, Smartphone, Monitor, UserCheck, Star, Syringe } from 'lucide-react';
import { PatientProfile } from '../types';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  patient: PatientProfile;
  onOpenPatientModal: () => void;
  isPhoneFrame: boolean;
  onTogglePhoneFrame: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenVaccines?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  patient,
  onOpenPatientModal,
  isPhoneFrame,
  onTogglePhoneFrame,
  favoritesCount,
  onOpenFavorites,
  onOpenVaccines
}) => {
  return (
    <header className="sticky top-0 z-30 bg-emerald-700 text-white shadow-md">
      {/* Top Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between border-b border-emerald-600/50">
        <div className="flex items-center gap-2">
          {/* Medical Logo Icon */}
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-inner">
            <span className="text-emerald-700 font-extrabold text-base tracking-tighter">MD</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight leading-none text-white">
                Formulary
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-emerald-800/80 text-emerald-100">
                MDCalc UI
              </span>
            </div>
            <p className="text-[11px] text-emerald-100/90 font-normal leading-tight mt-0.5">
              Dosificación y Guía Clínica
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {/* Quick Patient Pill */}
          <button
            onClick={onOpenPatientModal}
            title="Editar peso y datos del paciente"
            className="flex items-center gap-1 text-xs bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-2.5 py-1.5 rounded-md transition-colors border border-emerald-600/50 active:scale-95 shadow-xs"
          >
            <UserCheck className="w-3.5 h-3.5 text-emerald-200" />
            <span className="font-semibold">{patient.weightKg} kg</span>
            <span className="text-emerald-200 text-[11px]">({patient.ageYears > 0 ? `${patient.ageYears}a` : `${patient.ageMonths}m`})</span>
          </button>

          {/* Vaccines SRS 2025 shortcut */}
          {onOpenVaccines && (
            <button
              onClick={onOpenVaccines}
              title="Esquema Oficial de Vacunación 2025"
              className="p-1.5 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors flex items-center gap-1"
              aria-label="Vacunas 2025"
            >
              <Syringe className="w-4 h-4 text-emerald-200" />
              <span className="hidden sm:inline text-xs font-semibold">Vacunas</span>
            </button>
          )}

          {/* Favorites shortcut */}
          <button
            onClick={onOpenFavorites}
            title="Ver calculadoras favoritas"
            className="p-1.5 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors relative"
            aria-label="Favoritos"
          >
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-900 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Desktop/Phone View toggle */}
          <button
            onClick={onTogglePhoneFrame}
            title={isPhoneFrame ? 'Expandir vista completa' : 'Simular marco de teléfono'}
            className="hidden sm:flex p-1.5 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors"
            aria-label="Toggle frame"
          >
            {isPhoneFrame ? <Monitor className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Instant Search Bar */}
      <div className="p-2.5 bg-emerald-800">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-emerald-200 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar medicamento, indicación o clase (ej. Amoxi, Otitis, Paracetamol)..."
            className="w-full pl-9 pr-8 py-2 text-xs md:text-sm bg-white text-slate-900 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-medium shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 text-slate-400 hover:text-slate-600 p-0.5"
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
