/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Pill, Star, Clock } from 'lucide-react';
import { Header } from './components/Header';
import { BottomNav, TabType } from './components/BottomNav';
import { DrugCard } from './components/DrugCard';
import { DrugDetailCalculator } from './components/DrugDetailCalculator';
import { RenalAdjustmentCalculator } from './components/RenalAdjustmentCalculator';
import { InfusionCalculator } from './components/InfusionCalculator';
import { CustomCalculator } from './components/CustomCalculator';
import { PhoneContainer } from './components/PhoneContainer';
import { HomeScreen } from './components/HomeScreen';
import { PatientProfileView } from './components/PatientProfileView';
import { MEDICATIONS } from './data/medications';
import { Medication, PatientProfile } from './types';

type ScreenMode = 'home' | 'patient_profile' | 'main';

export default function App() {
  // Theme state (light / dark)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('medformula_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } catch {
      return 'light';
    }
  });

  const isDarkMode = theme === 'dark';

  const handleToggleDarkMode = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    try {
      localStorage.setItem('medformula_theme', theme);
    } catch {}
  }, [theme]);

  // Screen Mode: 'home' (página de inicio) | 'patient_profile' (datos del paciente e IMC) | 'main' (calculadoras)
  const [currentScreen, setCurrentScreen] = useState<ScreenMode>('home');

  // Navigation & View state inside main
  const [activeTab, setActiveTab] = useState<TabType>('drugs');
  const [selectedDrug, setSelectedDrug] = useState<Medication | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Always scroll to top on screen, drug detail, or tab change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const container = document.getElementById('phone-scroll-container');
    if (container) {
      container.scrollTop = 0;
    }
    const mainScroll = document.getElementById('main-scroll-content');
    if (mainScroll) {
      mainScroll.scrollTop = 0;
    }
  }, [currentScreen, selectedDrug, activeTab]);

  // Persistent Favorites & Patient Profile
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mdformulary_favs');
      return saved ? JSON.parse(saved) : ['amoxicilina', 'paracetamol', 'ibuprofeno'];
    } catch {
      return ['amoxicilina', 'paracetamol', 'ibuprofeno'];
    }
  });

  // Persistent Recent Drug IDs (last 3 consulted medications)
  const [recentDrugIds, setRecentDrugIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mdformulary_recents');
      return saved ? JSON.parse(saved) : ['amoxicilina', 'paracetamol', 'ibuprofeno'];
    } catch {
      return ['amoxicilina', 'paracetamol', 'ibuprofeno'];
    }
  });

  const [patient, setPatient] = useState<PatientProfile>(() => {
    try {
      const saved = localStorage.getItem('mdformulary_patient');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.heightCm) {
          parsed.heightCm = parsed.weightKg >= 45 ? 170 : 95;
        }
        return parsed;
      }
      return {
        weightKg: 14,
        heightCm: 95,
        ageYears: 3,
        ageMonths: 0,
        gender: 'male',
        serumCreatinineMgDl: 0.7
      };
    } catch {
      return {
        weightKg: 14,
        heightCm: 95,
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
      localStorage.setItem('mdformulary_recents', JSON.stringify(recentDrugIds));
    } catch {}
  }, [recentDrugIds]);

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

  // Últimos 3 medicamentos consultados
  const recentMedications = useMemo(() => {
    return recentDrugIds
      .map((id) => MEDICATIONS.find((m) => m.id === id))
      .filter((m): m is Medication => Boolean(m))
      .slice(0, 3);
  }, [recentDrugIds]);

  // Filtered Medications: Only favorites by default, or live search results when searching
  const filteredMedications = useMemo(() => {
    const normalize = (str: string) =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();

    const query = normalize(searchQuery);
    const searchTerms = query.split(/\s+/).filter(Boolean);

    if (searchTerms.length > 0) {
      return MEDICATIONS.filter((med) => {
        const nameNorm = normalize(med.name);
        const classNorm = normalize(med.therapeuticClass);
        const commNorm = med.commercialNames.map(normalize).join(' ');
        const indNorm = med.indications
          .map((i) => `${normalize(i.name)} ${i.description ? normalize(i.description) : ''}`)
          .join(' ');

        const fullCorpus = `${nameNorm} ${classNorm} ${commNorm} ${indNorm}`;
        return searchTerms.every((term) => fullCorpus.includes(term));
      });
    }

    // Default: ONLY show the list of favorites!
    return MEDICATIONS.filter((med) => favorites.includes(med.id));
  }, [searchQuery, favorites]);

  // Handle drug selection & update recent history (top 3)
  const handleSelectDrug = (drug: Medication) => {
    setSelectedDrug(drug);
    setRecentDrugIds((prev) => [drug.id, ...prev.filter((id) => id !== drug.id)].slice(0, 3));
  };

  // Handle tab change from BottomNav
  const handleTabChange = (tab: TabType) => {
    setSelectedDrug(null);
    setSearchQuery('');
    setActiveTab(tab);
    setCurrentScreen('main');
  };

  // Determine which tab is visually active in BottomNav
  const currentBottomTab = currentScreen === 'main' ? (selectedDrug ? null : activeTab) : null;

  return (
    <PhoneContainer>
      {/* Dynamic Screen Routing */}
      {currentScreen === 'home' ? (
        // 1. PÁGINA DE INICIO (Home Screen) - Sin barra inferior
        <HomeScreen
          onOpenPatientData={() => setCurrentScreen('patient_profile')}
          onContinueToCalculators={() => setCurrentScreen('main')}
          patient={patient}
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />
      ) : currentScreen === 'patient_profile' ? (
        // 2. VISTA DE DATOS DEL PACIENTE Y CÁLCULO DE IMC - Sin barra inferior
        <PatientProfileView
          patient={patient}
          onSave={setPatient}
          onBackToHome={() => setCurrentScreen('home')}
          onContinueToCalculators={(updatedPatient) => {
            setPatient(updatedPatient);
            setCurrentScreen('main');
          }}
        />
      ) : (
        // 3. VISTA PRINCIPAL: FORMULARIO Y CALCULADORAS CLÍNICAS
        // Barra superior e inferior FIJAS en todo momento tras ingresar datos del paciente
        <div className="flex-1 h-full flex flex-col min-h-0 overflow-hidden">
          {/* Barra superior de búsqueda y paciente - FIJA */}
          <Header
            searchQuery={searchQuery}
            onSearchChange={(q) => {
              setSearchQuery(q);
              if (selectedDrug) setSelectedDrug(null);
              if (activeTab !== 'drugs') setActiveTab('drugs');
            }}
            patient={patient}
            onOpenPatientModal={() => setCurrentScreen('patient_profile')}
            favoritesCount={favorites.length}
            onOpenFavorites={() => {
              setSelectedDrug(null);
              setSearchQuery('');
              setActiveTab('favorites');
            }}
            onBackToHome={() => setCurrentScreen('home')}
            isDarkMode={isDarkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />

          {/* Área de contenido desplazable: Solo esta sección se desliza con el scroll */}
          <main
            id="main-scroll-content"
            className="flex-1 overflow-y-auto overscroll-contain bg-white dark:bg-slate-900 transition-colors"
          >
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
              // MEDICATIONS DIRECTORY: FAVORITES & SEARCH RESULTS
              <div className="p-4 space-y-3 pb-8 bg-white dark:bg-slate-900 transition-colors">
                {/* Sección Recientes: Aparece únicamente cuando el campo de búsqueda está vacío */}
                {!searchQuery && recentMedications.length > 0 && (
                  <div className="space-y-1.5 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between px-0.5">
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                        <span>Recientes</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setRecentDrugIds([])}
                        className="text-[10px] text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                        title="Limpiar recientes"
                      >
                        Borrar
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {recentMedications.map((med) => (
                        <button
                          key={med.id}
                          type="button"
                          onClick={() => handleSelectDrug(med)}
                          className="p-2 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-white dark:bg-slate-800/80 text-left transition-all cursor-pointer group flex flex-col justify-between"
                        >
                          <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate transition-colors">
                            {med.name}
                          </div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                            {med.availableRoutes && med.availableRoutes.length > 0
                              ? med.availableRoutes.map((r) => (r === 'oral' ? 'VO' : r.toUpperCase())).join('/')
                              : med.therapeuticClass}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Header del Listado */}
                <div className="flex items-center justify-between text-xs px-1 py-1 text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{searchQuery ? `Búsqueda: "${searchQuery}"` : 'Medicamentos Favoritos'}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {filteredMedications.length} {filteredMedications.length === 1 ? 'fármaco' : 'fármacos'}
                  </span>
                </div>

                {/* Notificación de Modo Obstétrico si aplica */}
                {patient.gender === 'female' && patient.isPregnant && (
                  <div className="px-3 py-2 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/50 text-xs text-rose-800 dark:text-rose-300 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span>🤰</span>
                      <span>Modo Obstétrico {patient.pregnancyTrimester ? `(${patient.pregnancyTrimester}º Trimestre)` : ''} · Seguridad FDA</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentScreen('patient_profile')}
                      className="text-[11px] underline hover:text-rose-950 dark:hover:text-rose-100 cursor-pointer"
                    >
                      Editar
                    </button>
                  </div>
                )}

                {/* Listado de Fármacos */}
                {filteredMedications.length > 0 ? (
                  <div className="space-y-2">
                    {filteredMedications.map((med) => (
                      <DrugCard
                        key={med.id}
                        medication={med}
                        onSelect={handleSelectDrug}
                        isFavorite={favorites.includes(med.id)}
                        onToggleFavorite={(e) => toggleFavorite(med.id, e)}
                        patientWeightKg={patient.weightKg}
                        isPregnant={patient.gender === 'female' && !!patient.isPregnant}
                        pregnancyTrimester={patient.pregnancyTrimester}
                      />
                    ))}
                  </div>
                ) : (
                  /* Estado Vacío Minimalista */
                  <div className="text-center py-16 px-4 space-y-2">
                    <Star className="w-8 h-8 text-amber-400/40 fill-amber-400/20 mx-auto" />
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {searchQuery ? 'No se encontraron medicamentos' : 'No hay medicamentos favoritos'}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto">
                      {searchQuery
                        ? `No hay resultados para "${searchQuery}".`
                        : 'Toca el ícono de estrella en cualquier medicamento para guardarlo aquí.'}
                    </p>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        Borrar búsqueda
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </main>

          {/* Barra de navegación inferior thumb-friendly - FIJA EN TODO MOMENTO */}
          <BottomNav
            activeTab={currentBottomTab}
            onTabChange={handleTabChange}
            favoritesCount={favorites.length}
          />
        </div>
      )}
    </PhoneContainer>
  );
}


