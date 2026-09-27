import React from 'react';
import { Search, X, UserCheck, Star, Home } from 'lucide-react';
import { PatientProfile } from '../types';
import { MedFormulaLogo } from './MedFormulaLogo';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  patient: PatientProfile;
  onOpenPatientModal: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onBackToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  patient,
  onOpenPatientModal,
  favoritesCount,
  onOpenFavorites,
  onBackToHome
}) => {
  const patientBmi =
    patient.heightCm && patient.heightCm > 0
      ? (patient.weightKg / Math.pow(patient.heightCm / 100, 2)).toFixed(1)
      : null;

  return (
    <header className="sticky top-0 z-30 bg-blue-800 text-white shadow-md">
      {/* Top Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between border-b border-blue-700/60">
        <div className="flex items-center gap-2.5">
          {/* Home / MedFormula Logo Button */}
          {onBackToHome ? (
            <button
              type="button"
              onClick={onBackToHome}
              title="Volver a la página de inicio"
              className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs hover:bg-blue-50 active:scale-95 transition-all cursor-pointer group"
            >
              <MedFormulaLogo variant="icon" size="sm" className="text-blue-800" />
            </button>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs">
              <MedFormulaLogo variant="icon" size="sm" className="text-blue-800" />
            </div>
          )}

          <div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onBackToHome}
                className="font-bold text-base tracking-tight leading-none text-white text-left hover:text-blue-100 transition-colors cursor-pointer"
              >
                <span>Med</span>
                <span className="text-blue-200">Formula</span>
              </button>
              <span className="text-[9px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-blue-900/90 text-blue-100 border border-blue-700/50">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-blue-100/90 font-medium leading-tight mt-0.5">
              Formulación Médica Digital
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {/* Quick Patient Pill with IMC and Pregnancy Status */}
          <button
            onClick={onOpenPatientModal}
            title={
              patientBmi
                ? `Paciente: ${patient.weightKg} kg · ${patient.heightCm} cm · IMC ${patientBmi} kg/m² ${
                    patient.gender === 'female' && patient.isPregnant
                      ? `· Gestante (${patient.pregnancyTrimester ? `${patient.pregnancyTrimester}º Trimestre` : 'Embarazo'})`
                      : ''
                  } (Clic para editar datos)`
                : 'Editar datos del paciente'
            }
            className="flex items-center gap-1.5 text-xs bg-blue-900 hover:bg-blue-950 text-white font-medium px-2.5 py-1.5 rounded-md transition-colors border border-blue-700/60 active:scale-95 shadow-xs cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5 text-blue-200" />
            <span className="font-bold">{patient.weightKg} kg</span>
            {patientBmi && (
              <span className="hidden xs:inline-block px-1.5 py-0.5 bg-blue-950/90 text-[10px] rounded font-bold text-blue-200 border border-blue-800">
                IMC {patientBmi}
              </span>
            )}
            {patient.gender === 'female' && patient.isPregnant && (
              <span className="px-1.5 py-0.5 bg-pink-600 text-white text-[10px] rounded font-bold border border-pink-400 flex items-center gap-0.5 animate-pulse">
                <span>🤰</span>
                <span>{patient.pregnancyTrimester ? `${patient.pregnancyTrimester}ºT` : 'Gest.'}</span>
              </span>
            )}
            <span className="text-blue-200 text-[11px]">
              ({patient.ageYears > 0 ? `${patient.ageYears}a` : `${patient.ageMonths}m`})
            </span>
          </button>

          {/* Favorites shortcut */}
          <button
            onClick={onOpenFavorites}
            title="Ver calculadoras favoritas"
            className="p-1.5 rounded-md text-blue-100 hover:text-white hover:bg-blue-900 transition-colors relative"
            aria-label="Favoritos"
          >
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-900 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Instant Search Bar */}
      <div className="p-2.5 bg-blue-900">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-blue-200 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar medicamento, indicación o clase (ej. Amoxi, Otitis, Paracetamol)..."
            className="w-full pl-9 pr-8 py-2 text-xs md:text-sm bg-white text-slate-900 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium shadow-xs transition-all"
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
