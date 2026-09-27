import React, { useState } from 'react';
import { X, Syringe, Search, ShieldCheck, Info } from 'lucide-react';
import { SRS_VACCINES, type VaccineItem } from '../data/vaccines';

interface VaccinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VaccinesModal: React.FC<VaccinesModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredVaccines = SRS_VACCINES.filter((v) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      v.name.toLowerCase().includes(q) ||
      v.shortName.toLowerCase().includes(q) ||
      v.targetDiseases.toLowerCase().includes(q) ||
      v.targetAge.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full sm:max-w-xl rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-6 duration-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Syringe className="w-5 h-5 text-emerald-200" />
            <div>
              <h3 className="text-base font-bold leading-tight">Esquema Oficial de Vacunación 2025</h3>
              <p className="text-[11px] text-emerald-100">Superintendencia de Regulación Sanitaria (SRS) · El Salvador</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar vacuna, edad o enfermedad (ej. BCG, 2 meses, Tétanos, VPH)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* Vaccine List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Mostrando {filteredVaccines.length} vacunas autorizadas en el Listado Oficial SRS 2025</span>
          </div>

          {filteredVaccines.map((v) => (
            <div
              key={v.id}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 shadow-xs hover:border-emerald-500 transition-all space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{v.name}</span>
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200/50">
                      {v.shortName}
                    </span>
                  </h4>
                  <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                    Edad recomendada: {v.targetAge}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 block">
                    {v.route}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    Dosis: {v.dosage}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-700 dark:text-slate-300 pt-1 border-t border-slate-100 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-slate-200">Protege contra: </span>
                <span>{v.targetDiseases}</span>
              </div>

              <div className="p-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg text-[11px] text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">Principio activo oficial SRS:</span>
                <p className="leading-relaxed">{v.officialCompositionSRS2025}</p>
              </div>

              {v.clinicalNotes && (
                <div className="flex items-start gap-1.5 text-[11px] text-emerald-800 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/30 p-2 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
                  <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{v.clinicalNotes}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
