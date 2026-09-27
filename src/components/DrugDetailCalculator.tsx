import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Star,
  Copy,
  Check,
  Share2,
  RotateCcw,
  AlertTriangle,
  Info,
  BookOpen,
  FileText,
  ShieldAlert,
  Clock,
  Sparkles
} from 'lucide-react';
import { Medication, DrugIndication, DrugConcentration, PatientProfile } from '../types';
import { calculateMedicationDose, calculateCockcroftGault } from '../utils/calculator';

interface DrugDetailCalculatorProps {
  medication: Medication;
  patient: PatientProfile;
  onUpdatePatient: (p: PatientProfile) => void;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const DrugDetailCalculator: React.FC<DrugDetailCalculatorProps> = ({
  medication,
  patient,
  onUpdatePatient,
  onBack,
  isFavorite,
  onToggleFavorite
}) => {
  // MDCalc Tabs: 'calculator' | 'whenToUse' | 'pearls' | 'evidence'
  const [activeTab, setActiveTab] = useState<'calculator' | 'whenToUse' | 'pearls' | 'evidence'>('calculator');

  // Calculator states
  const [selectedIndication, setSelectedIndication] = useState<DrugIndication>(
    medication.indications[0]
  );
  const [selectedConcentration, setSelectedConcentration] = useState<DrugConcentration>(
    medication.concentrations[0]
  );
  const [frequencyPerDay, setFrequencyPerDay] = useState<number>(
    medication.indications[0].frequencyPerDay
  );
  const [intervalHours, setIntervalHours] = useState<number>(
    medication.indications[0].intervalHours
  );
  const [durationDays, setDurationDays] = useState<number>(7);
  const [customDoseMgKg, setCustomDoseMgKg] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // When indication changes, sync default dose, frequency, interval
  const handleSelectIndication = (ind: DrugIndication) => {
    setSelectedIndication(ind);
    setFrequencyPerDay(ind.frequencyPerDay);
    setIntervalHours(ind.intervalHours);
    setCustomDoseMgKg(null);
  };

  // Determine current active dose per kg
  const activeDoseMgKg = customDoseMgKg !== null
    ? customDoseMgKg
    : (selectedIndication.recommendedDoseMgPerKgPerDay || selectedIndication.fixedAdultDoseMg || 50);

  // Calculate results
  const calculation = useMemo(() => {
    return calculateMedicationDose({
      drugName: medication.name,
      weightKg: patient.weightKg,
      doseMgPerKg: activeDoseMgKg,
      isDosePerKgPerDose: selectedIndication.isDosePerKgPerDose || false,
      frequencyPerDay,
      intervalHours,
      durationDaysStr: `${durationDays} días`,
      durationDaysNum: durationDays,
      concentrationAmountMg: selectedConcentration.amountMg,
      concentrationVolumeMl: selectedConcentration.volumeMl,
      concentrationForm: selectedConcentration.form,
      concentrationUnit: selectedConcentration.unit,
      standardBottleMl: selectedConcentration.standardBottleMl,
      maxDailyDoseMg: selectedIndication.maxDailyDoseMg,
      maxSingleDoseMg: selectedIndication.maxSingleDoseMg,
      route: medication.availableRoutes[0] || 'oral',
      instructionsNote: selectedConcentration.notes
    });
  }, [
    medication.name,
    patient.weightKg,
    activeDoseMgKg,
    selectedIndication,
    frequencyPerDay,
    intervalHours,
    durationDays,
    selectedConcentration,
    medication.availableRoutes
  ]);

  // Check renal clearance
  const renalStatus = useMemo(() => {
    if (!patient.serumCreatinineMgDl) return null;
    return calculateCockcroftGault({
      ageYears: patient.ageYears || 30,
      weightKg: patient.weightKg,
      serumCreatinineMgDl: patient.serumCreatinineMgDl,
      gender: patient.gender
    });
  }, [patient]);

  const handleCopyPrescription = () => {
    navigator.clipboard.writeText(calculation.formattedPrescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `*Receta Médica - ${medication.name}*\n${calculation.formattedPrescription}\n_Generado con MDFormulary (MDCalc UI)_`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSelectedIndication(medication.indications[0]);
    setSelectedConcentration(medication.concentrations[0]);
    setFrequencyPerDay(medication.indications[0].frequencyPerDay);
    setIntervalHours(medication.indications[0].intervalHours);
    setDurationDays(7);
    setCustomDoseMgKg(null);
  };

  return (
    <div className="pb-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Top Navigation & Title Bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 sticky top-14 z-20 shadow-xs">
        <div className="flex items-center justify-between mb-1.5">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Calculadoras</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleReset}
              title="Reiniciar valores"
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onToggleFavorite}
              title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Star
                className={`w-4 h-4 ${
                  isFavorite
                    ? 'fill-amber-400 text-amber-500'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              />
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h1 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">
              {medication.name}
            </h1>
            {medication.atcCode && (
              <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700">
                ATC {medication.atcCode}
              </span>
            )}
            {medication.awareCategory === 'Access' && (
              <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-300">
                AWaRe: Acceso
              </span>
            )}
            {medication.awareCategory === 'Watch' && (
              <span className="text-[11px] font-bold text-amber-800 dark:text-amber-200 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded border border-amber-300">
                AWaRe: Precaución
              </span>
            )}
            {medication.awareCategory === 'Reserve' && (
              <span className="text-[11px] font-bold text-rose-800 dark:text-rose-200 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded border border-rose-300">
                AWaRe: Reserva
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            <span>{medication.therapeuticClass}</span>
            <span aria-hidden="true">·</span>
            <span>{medication.category}</span>
          </div>
        </div>

        {/* MDCalc Classic Tab Navigation */}
        <div className="flex items-center gap-1 mt-3 border-b border-slate-200 dark:border-slate-800 -mx-4 px-4 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`py-2 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'calculator'
                ? 'border-emerald-700 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Calculadora
          </button>
          <button
            onClick={() => setActiveTab('whenToUse')}
            className={`py-2 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'whenToUse'
                ? 'border-emerald-700 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Cuándo Usar
          </button>
          <button
            onClick={() => setActiveTab('pearls')}
            className={`py-2 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'pearls'
                ? 'border-emerald-700 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Perlas Clínicas
          </button>
          <button
            onClick={() => setActiveTab('evidence')}
            className={`py-2 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'evidence'
                ? 'border-emerald-700 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Evidencia
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-xl mx-auto p-4 space-y-4">
        {activeTab === 'calculator' && (
          <>
            {/* MDCalc PROMINENT RESULT CARD */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-emerald-600/40 shadow-md overflow-hidden animate-in fade-in duration-150">
              {/* Result Card Top Accent Bar */}
              <div className="bg-emerald-700 text-white px-4 py-2 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Resultado de Formulación
                </span>
                <span className="text-[11px] text-emerald-100 font-medium">
                  {selectedIndication.isDosePerKgPerDose ? 'Dosis por Toma' : 'Fraccionada'}
                </span>
              </div>

              <div className="p-4 space-y-3">
                {/* Big Unitary Dose Display */}
                <div className="flex items-baseline justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">
                      Dosis a Administrar por Toma:
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-3xl md:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 tracking-tight">
                        {calculation.singleDoseUnitQuantity}
                      </span>
                      <span className="text-lg font-bold text-slate-700 dark:text-slate-200">
                        {calculation.unitLabel}
                      </span>
                      <span className="text-xs text-slate-500 ml-1 font-semibold">
                        ({Math.round(calculation.singleDoseMg)} mg)
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block font-medium">Frecuencia</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Cada {intervalHours} horas
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      ({frequencyPerDay} veces al día)
                    </span>
                  </div>
                </div>

                {/* Daily Total & Duration */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Dosis Diaria Total:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      {calculation.dailyTotalMg} mg/día
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Duración:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      {durationDays} días recomendados
                    </span>
                  </div>
                </div>

                {/* Liquid Volume / Bottle Estimation */}
                {calculation.estimatedTotalVolumeMl && calculation.bottlesNeeded && (
                  <div className="flex items-center justify-between text-xs px-1 text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      Consumo estimado: <strong>{calculation.estimatedTotalVolumeMl} mL</strong>
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                      {calculation.bottlesNeeded} frasco(s) necesario(s)
                    </span>
                  </div>
                )}

                {/* Max Dose Warning Banner */}
                {calculation.isMaxDoseExceeded && (
                  <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 p-2.5 rounded-lg text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Límite Máximo Aplicado:</strong> La dosis teórica superaba el tope de seguridad. Se ajustó automáticamente a {selectedIndication.maxSingleDoseMg || selectedIndication.maxDailyDoseMg} mg.
                    </div>
                  </div>
                )}

                {/* Renal Alert Flag if patient has renal impairment */}
                {renalStatus && renalStatus.crCl < 50 && medication.renalAdjustments && (
                  <div className="flex items-start gap-2 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-900 dark:text-red-200 p-2.5 rounded-lg text-xs">
                    <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Alerta de Función Renal:</strong> ClCr estimado es {renalStatus.crCl} mL/min. Revisa la pestaña de "Perlas Clínicas" para ajustar intervalo o dosis.
                    </div>
                  </div>
                )}

                {/* Action CTA Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={handleCopyPrescription}
                    className="flex-1 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>¡Receta Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Receta</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleShareWhatsApp}
                    className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
                    title="Compartir por WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* INPUTS SECTION */}
            <div className="space-y-4">
              {/* 1. Patient Weight & Height Input Box */}
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    1. Peso y Talla del Paciente
                  </label>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Edad: {patient.ageYears > 0 ? `${patient.ageYears} años` : `${patient.ageMonths} meses`}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      step="0.1"
                      min="0.5"
                      max="200"
                      value={patient.weightKg || ''}
                      onChange={(e) =>
                        onUpdatePatient({
                          ...patient,
                          weightKg: parseFloat(e.target.value) || 0
                        })
                      }
                      className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                    <span className="absolute right-3 top-2 text-xs font-semibold text-slate-400">
                      kg
                    </span>
                  </div>
                  {/* Quick increment/decrement buttons for phone */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        onUpdatePatient({
                          ...patient,
                          weightKg: Math.max(1, Number((patient.weightKg - 1).toFixed(1)))
                        })
                      }
                      className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 flex items-center justify-center text-sm"
                    >
                      -1
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onUpdatePatient({
                          ...patient,
                          weightKg: Number((patient.weightKg + 1).toFixed(1))
                        })
                      }
                      className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 flex items-center justify-center text-sm"
                    >
                      +1
                    </button>
                  </div>
                </div>

                {/* Patient Height and BMI row */}
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <span className="font-medium text-[11px]">Talla:</span>
                    <input
                      type="number"
                      min="30"
                      max="250"
                      value={patient.heightCm || ''}
                      placeholder="95"
                      onChange={(e) =>
                        onUpdatePatient({
                          ...patient,
                          heightCm: parseFloat(e.target.value) || 0
                        })
                      }
                      className="w-16 px-1.5 py-0.5 font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-center text-xs focus:ring-1 focus:ring-emerald-600 focus:outline-none"
                    />
                    <span className="text-[11px]">cm</span>
                  </div>

                  {patient.heightCm && patient.heightCm > 0 && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-slate-400 font-medium">IMC:</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 text-xs">
                        {(patient.weightKg / Math.pow(patient.heightCm / 100, 2)).toFixed(1)} kg/m²
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Indication Selector (Segmented buttons) */}
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-2">
                  2. Indicación Clínica
                </label>
                <div className="space-y-1.5">
                  {medication.indications.map((ind) => {
                    const isSelected = selectedIndication.id === ind.id;
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => handleSelectIndication(ind)}
                        className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs flex items-start justify-between gap-2 ${
                          isSelected
                            ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-700 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-700'
                            : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="font-semibold">{ind.name}</div>
                          {ind.description && (
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                              {ind.description}
                            </div>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-bold text-emerald-700 dark:text-emerald-400 block">
                            {ind.isDosePerKgPerDose
                              ? `${ind.recommendedDoseMgPerKgPerDay} mg/kg/dosis`
                              : ind.recommendedDoseMgPerKgPerDay
                              ? `${ind.recommendedDoseMgPerKgPerDay} mg/kg/d`
                              : `${ind.fixedAdultDoseMg} mg`}
                          </span>
                          <span className="text-[10px] text-slate-400">c/{ind.intervalHours}h</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Concentration & Presentation Selector */}
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-2">
                  3. Presentación / Concentración Farmacéutica
                </label>
                <div className="space-y-1.5">
                  {medication.concentrations.map((conc) => {
                    const isSelected = selectedConcentration.id === conc.id;
                    return (
                      <button
                        key={conc.id}
                        type="button"
                        onClick={() => setSelectedConcentration(conc)}
                        className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-700 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-700'
                            : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="font-semibold">{conc.name}</div>
                          {conc.notes && (
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">
                              {conc.notes}
                            </div>
                          )}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase">
                          {conc.form}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Frequency & Duration Adjustment */}
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
                      Intervalo (Horas)
                    </label>
                    <div className="grid grid-cols-3 gap-1">
                      {[6, 8, 12, 24].map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => {
                            setIntervalHours(h);
                            setFrequencyPerDay(Math.round(24 / h));
                          }}
                          className={`py-1.5 text-xs font-semibold rounded border transition-all ${
                            intervalHours === h
                              ? 'bg-emerald-700 text-white border-emerald-700'
                              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          c/{h}h
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
                      Duración (Días)
                    </label>
                    <div className="flex items-center gap-1">
                      {[3, 5, 7, 10, 14].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDurationDays(d)}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded border transition-all ${
                            durationDays === d
                              ? 'bg-emerald-700 text-white border-emerald-700'
                              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {d}d
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Optional Custom Dose Override */}
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Dosis actual:{' '}
                    <strong>
                      {activeDoseMgKg}{' '}
                      {selectedIndication.isDosePerKgPerDose ? 'mg/kg/dosis' : 'mg/kg/día'}
                    </strong>
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        const step = selectedIndication.isDosePerKgPerDose ? 2.5 : 10;
                        setCustomDoseMgKg(Math.max(1, Number((activeDoseMgKg - step).toFixed(1))));
                      }}
                      className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 font-bold"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const step = selectedIndication.isDosePerKgPerDose ? 2.5 : 10;
                        setCustomDoseMgKg(Number((activeDoseMgKg + step).toFixed(1)));
                      }}
                      className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 font-bold"
                    >
                      +
                    </button>
                    {customDoseMgKg !== null && (
                      <button
                        type="button"
                        onClick={() => setCustomDoseMgKg(null)}
                        className="text-[11px] text-emerald-700 hover:underline ml-1 font-semibold"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* CUÁNDO USAR TAB */}
        {activeTab === 'whenToUse' && (
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
                <FileText className="w-4 h-4 text-emerald-700" />
                Indicaciones Clínicas y Criterios de Selección
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {medication.whenToUse.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {medication.reconstitutionNotes && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                  Reconstitución y Administración:
                </span>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  {medication.reconstitutionNotes}
                </p>
              </div>
            )}

            {medication.storageNotes && (
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  Almacenamiento y Estabilidad:
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {medication.storageNotes}
                </p>
              </div>
            )}
          </div>
        )}

        {/* PERLAS CLÍNICAS TAB (MDCalc Iconic Feature) */}
        {activeTab === 'pearls' && (
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Perlas Clínicas y Trampas Frecuentes (Pearls & Pitfalls)
              </h3>
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                {medication.pearlsAndPitfalls.map((pearl, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg"
                  >
                    <p className="leading-relaxed">{pearl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring and Side Effects */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider text-slate-500">
                Efectos Adversos Clave y Monitorización
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {medication.monitoringAndSideEffects.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Renal Adjustments Table */}
            {medication.renalAdjustments && (
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-emerald-600" />
                  Ajuste en Insuficiencia Renal
                </h4>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden text-xs">
                  <table className="w-full">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px]">
                      <tr>
                        <th className="py-2 px-3 text-left">Aclaramiento (ClCr)</th>
                        <th className="py-2 px-3 text-left">Recomendación de Dosis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {medication.renalAdjustments.map((ra, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <td className="py-2 px-3 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                            {ra.crClThreshold}
                          </td>
                          <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                            {ra.adjustmentText}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* EVIDENCIA TAB */}
        {activeTab === 'evidence' && (
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              Evidencia Científica y Guías Clínicas
            </h3>
            <div className="space-y-3">
              {medication.evidenceAndSources.map((ev, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-xs space-y-1"
                >
                  <div className="font-bold text-slate-900 dark:text-white">{ev.title}</div>
                  <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                    {ev.source}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
                    {ev.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
