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
  Info,
  Shield,
  Zap,
  HeartPulse
} from 'lucide-react';
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
import { Medication, DrugCategory, PatientProfile } from './types';

const CATEGORIES: { id: DrugCategory; label: string }[] = [
  { id: 'Favoritos', label: 'Favoritos' },
  { id: 'Antibióticos', label: 'Antibióticos' },
  { id: 'Analgésicos', label: 'Analgésicos' },
  { id: 'Antihipertensivos', label: 'Antihipertensivos' },
  { id: 'Todos', label: 'Todos los Fármacos' },
  { id: 'Urgencias / Respiratorio', label: 'Respiratorio / Urgencias' },
  { id: 'Gastroenterología', label: 'Gastroenterología' },
  { id: 'Corticoides', label: 'Corticoides' },
  { id: 'Antídotos / Toxicología', label: 'Antídotos / Toxicología' },
  { id: 'Pediátricos', label: 'Pediátricos' }
];

type ScreenMode = 'home' | 'patient_profile' | 'main';

export default function App() {
  // Screen Mode: 'home' (página de inicio) | 'patient_profile' (datos del paciente e IMC) | 'main' (calculadoras)
  const [currentScreen, setCurrentScreen] = useState<ScreenMode>('home');

  // Navigation & View state inside main
  const [activeTab, setActiveTab] = useState<TabType>('drugs');
  const [selectedDrug, setSelectedDrug] = useState<Medication | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<DrugCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
      localStorage.setItem('mdformulary_patient', JSON.stringify(patient));
    } catch {}
  }, [patient]);

  const toggleFavorite = (drugId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(drugId) ? prev.filter((id) => id !== drugId) : [...prev, drugId]
    );
  };

  // Filtered Medications (Búsqueda por Enfermedad, Medicamento o Clase + Filtro de Categoría)
  const filteredMedications = useMemo(() => {
    const normalize = (str: string) =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();

    const query = normalize(searchQuery);
    const searchTerms = query.split(/\s+/).filter(Boolean);

    return MEDICATIONS.filter((med) => {
      // 1. Filtro de Favoritos (si la pestaña activa es favoritos o la categoría seleccionada es Favoritos)
      if ((activeTab === 'favorites' || selectedCategory === 'Favoritos') && !favorites.includes(med.id)) {
        return false;
      }

      // 2. Filtro de Categoría de Medicamento (Antibióticos, Analgésicos, Antihipertensivos, etc.)
      if (activeTab === 'drugs' && selectedCategory !== 'Todos' && selectedCategory !== 'Favoritos') {
        if (selectedCategory === 'Antibióticos') {
          if (med.category !== 'Antibióticos') return false;
        } else if (selectedCategory === 'Analgésicos' || selectedCategory === 'Analgesia / AINEs') {
          if (med.category !== 'Analgesia / AINEs') return false;
        } else if (selectedCategory === 'Antihipertensivos' || selectedCategory === 'Cardiovascular') {
          const isCardio = med.category === 'Cardiovascular';
          const isAntiht =
            med.therapeuticClass.toLowerCase().includes('antihipertensiv') ||
            med.therapeuticClass.toLowerCase().includes('ieca') ||
            med.therapeuticClass.toLowerCase().includes('ara-ii') ||
            med.therapeuticClass.toLowerCase().includes('calcioantagonista') ||
            med.therapeuticClass.toLowerCase().includes('diurético') ||
            med.therapeuticClass.toLowerCase().includes('vasodilatador');
          if (!isCardio && !isAntiht) return false;
        } else if (selectedCategory === 'Pediátricos') {
          const hasPeds = med.indications.some((i) => !i.fixedAdultDoseMg);
          if (!hasPeds) return false;
        } else if (selectedCategory === 'Urgencias / Respiratorio') {
          if (med.category !== 'Urgencias / Respiratorio') return false;
        } else if (selectedCategory === 'Gastroenterología') {
          if (med.category !== 'Gastroenterología') return false;
        } else if (selectedCategory === 'Corticoides') {
          if (med.category !== 'Corticoides') return false;
        } else if (selectedCategory === 'Antídotos / Toxicología') {
          if (med.category !== 'Antídotos / Toxicología') return false;
        } else if (med.category !== selectedCategory) {
          return false;
        }
      }

      // 3. Filtro de Búsqueda inteligente (Enfermedad / Indicación, Medicamento o Clase Terapéutica)
      if (searchTerms.length > 0) {
        const nameNorm = normalize(med.name);
        const classNorm = normalize(med.therapeuticClass);
        const catNorm = normalize(med.category);
        const descNorm = normalize(med.shortDescription);
        const commercialNorm = med.commercialNames.map(normalize).join(' ');
        const atcNorm = med.atcCode ? normalize(med.atcCode) : '';
        const awareNorm = med.awareCategory ? normalize(med.awareCategory) : '';
        const badgeNorm = med.badgeText ? normalize(med.badgeText) : '';
        const indicationsNorm = med.indications
          .map((i) => `${normalize(i.name)} ${i.description ? normalize(i.description) : ''}`)
          .join(' ');
        const whenToUseNorm = (med.whenToUse || []).map(normalize).join(' ');
        const pearlsNorm = (med.pearlsAndPitfalls || []).map(normalize).join(' ');

        const fullCorpus = `${nameNorm} ${classNorm} ${catNorm} ${descNorm} ${commercialNorm} ${atcNorm} ${awareNorm} ${badgeNorm} ${indicationsNorm} ${whenToUseNorm} ${pearlsNorm}`;

        const matchesAll = searchTerms.every((term) => fullCorpus.includes(term));
        if (!matchesAll) return false;
      }

      return true;
    });
  }, [activeTab, selectedCategory, searchQuery, favorites]);

  // Counts for Category Cards
  const favoritesCount = favorites.length;
  const antibioticsCount = useMemo(
    () => MEDICATIONS.filter((m) => m.category === 'Antibióticos').length,
    []
  );
  const analgesicsCount = useMemo(
    () => MEDICATIONS.filter((m) => m.category === 'Analgesia / AINEs').length,
    []
  );
  const antihipertensivesCount = useMemo(
    () =>
      MEDICATIONS.filter(
        (m) =>
          m.category === 'Cardiovascular' ||
          m.therapeuticClass.toLowerCase().includes('antihipertensiv')
      ).length,
    []
  );

  // Handle drug selection
  const handleSelectDrug = (drug: Medication) => {
    setSelectedDrug(drug);
  };

  // 1. PÁGINA DE INICIO (Home Screen) con únicamente un acceso en la mitad de la página
  if (currentScreen === 'home') {
    return (
      <PhoneContainer>
        <HomeScreen onOpenPatientData={() => setCurrentScreen('patient_profile')} />
      </PhoneContainer>
    );
  }

  // 2. VISTA DE DATOS DEL PACIENTE Y CÁLCULO DE IMC
  if (currentScreen === 'patient_profile') {
    return (
      <PhoneContainer>
        <PatientProfileView
          patient={patient}
          onSave={setPatient}
          onBackToHome={() => setCurrentScreen('home')}
          onContinueToCalculators={(updatedPatient) => {
            setPatient(updatedPatient);
            setCurrentScreen('main');
          }}
        />
      </PhoneContainer>
    );
  }

  // 3. VISTA PRINCIPAL: FORMULARIO Y CALCULADORAS CLÍNICAS
  return (
    <PhoneContainer>
      {/* Barra de búsqueda permanente en pantalla con selector de tipos de medicamentos justo debajo */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (selectedDrug) setSelectedDrug(null);
          if (activeTab !== 'drugs' && activeTab !== 'favorites') setActiveTab('drugs');
        }}
        patient={patient}
        onOpenPatientModal={() => setCurrentScreen('patient_profile')}
        favoritesCount={favorites.length}
        onOpenFavorites={() => {
          setSelectedDrug(null);
          setSelectedCategory('Favoritos');
          setActiveTab('drugs');
        }}
        onBackToHome={() => setCurrentScreen('home')}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          if (selectedDrug) setSelectedDrug(null);
          if (activeTab !== 'drugs') setActiveTab('drugs');
        }}
        showCategories={!selectedDrug && activeTab === 'drugs'}
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
            {/* Opciones Principales de Tipo de Medicamento (Primero Favoritos, luego Antibióticos, Analgésicos, Antihipertensivos) */}
            {activeTab === 'drugs' && !searchQuery && (
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Tipo de Medicamento
                  </span>
                  {selectedCategory !== 'Todos' && (
                    <button
                      onClick={() => setSelectedCategory('Todos')}
                      className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      Ver catálogo completo ({MEDICATIONS.length})
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {/* Opción 1: FAVORITOS (Primero) */}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('Favoritos')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                      selectedCategory === 'Favoritos'
                        ? 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-400 dark:border-amber-500 shadow-sm ring-2 ring-amber-400/80'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                        <Star className="w-4 h-4 fill-amber-400" />
                      </div>
                      <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                        {favoritesCount}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        Favoritos
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        Guardados en turno
                      </span>
                    </div>
                  </button>

                  {/* Opción 2: ANTIBIÓTICOS */}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('Antibióticos')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                      selectedCategory === 'Antibióticos'
                        ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-500 dark:border-emerald-600 shadow-sm ring-2 ring-emerald-500/80'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                        <Shield className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                        {antibioticsCount}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        Antibióticos
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        Amoxi, Ceftriaxona...
                      </span>
                    </div>
                  </button>

                  {/* Opción 3: ANALGÉSICOS */}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('Analgésicos')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                      selectedCategory === 'Analgésicos'
                        ? 'bg-amber-50/90 dark:bg-amber-950/40 border-orange-400 dark:border-orange-500 shadow-sm ring-2 ring-orange-400/80'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/60 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/60 text-orange-800 dark:text-orange-300">
                        {analgesicsCount}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        Analgésicos
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        Paracetamol, AINEs...
                      </span>
                    </div>
                  </button>

                  {/* Opción 4: ANTIHIPERTENSIVOS */}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('Antihipertensivos')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                      selectedCategory === 'Antihipertensivos'
                        ? 'bg-rose-50/90 dark:bg-rose-950/40 border-rose-500 dark:border-rose-600 shadow-sm ring-2 ring-rose-500/80'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-rose-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300">
                        {antihipertensivesCount}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        Antihipertensivos
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        Enalapril, Losartán...
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* SRS 2025 Formulary Banner */}
            {activeTab === 'drugs' && !searchQuery && (
              <div className="bg-gradient-to-r from-blue-800 to-slate-800 text-white p-3 rounded-xl shadow-xs flex items-center justify-between gap-2 border border-blue-700/40">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <Pill className="w-4 h-4 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">
                      Listado Oficial SRS 2025 · El Salvador
                    </div>
                    <div className="text-[11px] text-blue-100">
                      Clasificación OMS AWaRe (Acceso / Precaución / Reserva) y Códigos ATC
                    </div>
                  </div>
                </div>
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

            {/* Banner de Estado Obstétrico si la paciente está en embarazo */}
            {patient.gender === 'female' && patient.isPregnant && (
              <div className="p-3 bg-pink-50/90 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 text-xs text-pink-950 dark:text-pink-100 flex items-start gap-2.5 shadow-xs">
                <span className="text-xl">🤰</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      Modo Obstétrico Activo ({patient.pregnancyTrimester ? `${patient.pregnancyTrimester}º Trimestre` : 'Embarazo'})
                    </span>
                    <button
                      onClick={() => setCurrentScreen('patient_profile')}
                      className="text-[11px] font-semibold text-pink-700 dark:text-pink-300 underline hover:text-pink-900 cursor-pointer"
                    >
                      Editar
                    </button>
                  </div>
                  <p className="text-[11px] text-pink-800 dark:text-pink-200 mt-0.5 leading-relaxed">
                    Evaluando seguridad teratogénica y fetal (FDA/Briggs). Los fármacos contraindicados se marcan en rojo para evitar riesgos perinatales.
                  </p>
                </div>
              </div>
            )}

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
                    isPregnant={patient.gender === 'female' && !!patient.isPregnant}
                    pregnancyTrimester={patient.pregnancyTrimester}
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
        activeTab={selectedCategory === 'Favoritos' && activeTab === 'drugs' ? 'favorites' : activeTab}
        onTabChange={(tab) => {
          if (tab === 'favorites') {
            setSelectedDrug(null);
            setSelectedCategory('Favoritos');
            setActiveTab('drugs');
          } else {
            setActiveTab(tab);
            setSelectedDrug(null);
          }
        }}
        favoritesCount={favorites.length}
      />
    </PhoneContainer>
  );
}
