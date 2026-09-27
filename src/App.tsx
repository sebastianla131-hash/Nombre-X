/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  Pill,
  Search,
  Filter,
  Sparkles,
  UserCheck,
  Star,
  Activity,
  Droplets,
  Calculator,
  ChevronRight,
  Info
} from 'lucide-react';
import { Header } from './components/Header';
import { BottomNav, TabType } from './components/BottomNav';
import { DrugCard } from './components/DrugCard';
import { DrugDetailCalculator } from './components/DrugDetailCalculator';
import { RenalAdjustmentCalculator } from './components/RenalAdjustmentCalculator';
import { InfusionCalculator } from './components/InfusionCalculator';
import { CustomCalculator } from './components/CustomCalculator';
import { PatientProfileModal } from './components/PatientProfileModal';
import { PhoneContainer } from './components/PhoneContainer';
import { MEDICATIONS } from './data/medications';
import { Medication, DrugCategory, PatientProfile } from './types';

const CATEGORIES: DrugCategory[] = [
  'Todos',
  'Pediátricos',
  'Antibióticos',
  'Analgesia / AINEs',
  'Urgencias / Respiratorio',
  'Gastroenterología',
  'Corticoides'
];

export default function App() {
  // Navigation & View state
  const [activeTab, setActiveTab] = useState<TabType>('drugs');
  const [selectedDrug, setSelectedDrug] = useState<Medication | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<DrugCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPatientModalOpen, setIsPatientModalOpen] = useState<boolean>(false);
  const [isPhoneFrame, setIsPhoneFrame] = useState<boolean>(true);

  // Persistent Favorites & Patient Profile
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mdformulary_favs');
      return saved ? JSON.parse(saved) : ['amoxicilina', 'paracetamol', 'ibuprofeno'];
    } catch {
      return ['amoxicilina', 'paracetamol', 'ibuprofeno'];
    }
  });

  const [patient, setPatient] = useState<PatientProfile>(() => {
    try {
      const saved = localStorage.getItem('mdformulary_patient');
      return saved
        ? JSON.parse(saved)
        : {
            weightKg: 14,
            ageYears: 3,
            ageMonths: 0,
            gender: 'male',
            serumCreatinineMgDl: 0.7
          };
    } catch {
      return {
        weightKg: 14,
        ageYears: 3,
        ageMonths: 0,
        gender: 'male',
        serumCreatinineMgDl: 0.7
      };
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mdformulary_favs', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('mdformulary_patient', JSON.stringify(patient));
    } catch {}
  }, [patient]);

  const toggleFavorite = (drugId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(drugId) ? prev.filter((id) => id !== drugId) : [...prev, drugId]
    );
  };

  // Filtered Medications
  const filteredMedications = useMemo(() => {
    return MEDICATIONS.filter((med) => {
      // Favorites filter if on favorites tab
      if (activeTab === 'favorites' && !favorites.includes(med.id)) {
        return false;
      }

      // Category filter
      if (activeTab === 'drugs' && selectedCategory !== 'Todos') {
        if (selectedCategory === 'Pediátricos') {
          const hasPeds = med.indications.some((i) => !i.fixedAdultDoseMg);
          if (!hasPeds) return false;
        } else if (med.category !== selectedCategory) {
          return false;
        }
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = med.name.toLowerCase().includes(query);
        const matchesClass = med.therapeuticClass.toLowerCase().includes(query);
        const matchesCommercial = med.commercialNames.some((c) =>
          c.toLowerCase().includes(query)
        );
        const matchesIndication = med.indications.some((i) =>
          i.name.toLowerCase().includes(query)
        );
        return matchesName || matchesClass || matchesCommercial || matchesIndication;
      }

      return true;
    });
  }, [activeTab, selectedCategory, searchQuery, favorites]);

  // Handle drug selection
  const handleSelectDrug = (drug: Medication) => {
    setSelectedDrug(drug);
  };

  return (
    <PhoneContainer isPhoneFrame={isPhoneFrame}>
      {/* MDCalc Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (selectedDrug) setSelectedDrug(null);
          if (activeTab !== 'drugs' && activeTab !== 'favorites') setActiveTab('drugs');
        }}
        patient={patient}
        onOpenPatientModal={() => setIsPatientModalOpen(true)}
        isPhoneFrame={isPhoneFrame}
        onTogglePhoneFrame={() => setIsPhoneFrame(!isPhoneFrame)}
        favoritesCount={favorites.length}
        onOpenFavorites={() => {
          setSelectedDrug(null);
          setActiveTab('favorites');
        }}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {selectedDrug ? (
          // DRUG DETAIL / CALCULATOR VIEW
          <DrugDetailCalculator
            medication={selectedDrug}
            patient={patient}
            onUpdatePatient={setPatient}
            onBack={() => setSelectedDrug(null)}
            isFavorite={favorites.includes(selectedDrug.id)}
            onToggleFavorite={() => toggleFavorite(selectedDrug.id)}
          />
        ) : activeTab === 'renal' ? (
          // RENAL ADJUSTMENT CALCULATOR
          <RenalAdjustmentCalculator
            patient={patient}
            onUpdatePatient={setPatient}
            onSelectDrug={handleSelectDrug}
          />
        ) : activeTab === 'infusions' ? (
          // INFUSION CALCULATOR
          <InfusionCalculator patient={patient} onUpdatePatient={setPatient} />
        ) : activeTab === 'custom' ? (
          // UNIVERSAL CUSTOM CALCULATOR
          <CustomCalculator patient={patient} onUpdatePatient={setPatient} />
        ) : (
          // MEDICATIONS DIRECTORY / FAVORITES VIEW
          <div className="p-3.5 space-y-3 pb-20">
            {/* MDCalc Category Horizontal Filter Bar */}
            {activeTab === 'drugs' && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar -mx-3.5 px-3.5">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all border ${
                        isSelected
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}

            {/* View Section Title */}
            <div className="flex items-center justify-between text-xs px-1 text-slate-500">
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                {activeTab === 'favorites'
                  ? 'Fármacos Guardados en Favoritos'
                  : selectedCategory === 'Todos'
                  ? 'Todos los Fármacos y Calculadoras'
                  : `Categoría: ${selectedCategory}`}
              </span>
              <span className="font-medium">
                {filteredMedications.length} {filteredMedications.length === 1 ? 'fármaco' : 'fármacos'}
              </span>
            </div>

            {/* Drug Cards List */}
            {filteredMedications.length > 0 ? (
              <div className="space-y-2.5">
                {filteredMedications.map((med) => (
                  <DrugCard
                    key={med.id}
                    medication={med}
                    onSelect={handleSelectDrug}
                    isFavorite={favorites.includes(med.id)}
                    onToggleFavorite={(e) => toggleFavorite(med.id, e)}
                    patientWeightKg={patient.weightKg}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-12 px-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <Pill className="w-10 h-10 text-slate-300 mx-auto stroke-1" />
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {activeTab === 'favorites'
                    ? 'No tienes medicamentos favoritos aún'
                    : 'No se encontraron medicamentos'}
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  {activeTab === 'favorites'
                    ? 'Toca el ícono de estrella en cualquier medicamento para tenerlo a mano durante tu turno clínico.'
                    : `No hay resultados para "${searchQuery}". Prueba con "Amoxi", "Paracetamol", "Ceftriaxona" o usa la calculadora libre.`}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                  >
                    Borrar búsqueda
                  </button>
                )}
                {activeTab === 'favorites' && (
                  <button
                    onClick={() => setActiveTab('drugs')}
                    className="mt-2 inline-block px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg"
                  >
                    Ver todos los fármacos
                  </button>
                )}
              </div>
            )}

            {/* Quick Clinical Banner */}
            <div className="p-3 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/60 dark:border-emerald-800/60 text-xs text-emerald-950 dark:text-emerald-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Peso sincronizado: {patient.weightKg} kg</span>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-300 mt-0.5 leading-relaxed">
                  Las dosis se recalculan al instante con el peso del paciente activo. Toca el botón superior con el peso para modificarlo en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Thumb-friendly Mobile Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSelectedDrug(null);
        }}
        favoritesCount={favorites.length}
      />

      {/* Patient Profile Edit Modal */}
      <PatientProfileModal
        isOpen={isPatientModalOpen}
        onClose={() => setIsPatientModalOpen(false)}
        patient={patient}
        onSave={setPatient}
      />
    </PhoneContainer>
  );
}
