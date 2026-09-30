// src/views/DrugDetailCalculator.tsx
// Advanced Medical Dosage Calculator with Dose Thermometer, Hard Stop Modal, Toast Feedback, and Physical Unit Icons

import React, { useState, useMemo, useEffect } from 'react';
import {
  Medication,
  PatientProfile,
  RouteOfAdmin,
} from '../types/clinical';
import {
  calculateDrugDosage,
  evaluateObstetricSafety,
  evaluateRenalStatus,
  evaluateDoseSpectrum,
  analyzeBodyWeight,
} from '../utils/clinicalEngine';
import {
  generateHisPrescription,
  generatePatientPrescription,
  generateEhrPrescription,
} from '../utils/prescriptionGenerator';
import { SegmentedControl, SegmentedControlOption } from '../components/ui/SegmentedControl';
import { DoseThermometer } from '../components/ui/DoseThermometer';
import { CriticalAlertModal } from '../components/ui/CriticalAlertModal';
import { useToast } from '../components/ui/ToastProvider';
import {
  ArrowLeft,
  RotateCcw,
  Star,
  Copy,
  Check,
  AlertTriangle,
  ShieldAlert,
  Info,
  ChevronDown,
  ChevronUp,
  FileText,
  AlertCircle,
  Pill,
  Droplets,
  Droplet,
  Activity,
  User,
  Scale,
} from 'lucide-react';

interface DrugDetailCalculatorProps {
  medication: Medication;
  patient: PatientProfile;
  onUpdatePatient?: (patient: PatientProfile) => void;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const DrugDetailCalculator: React.FC<DrugDetailCalculatorProps> = ({
  medication,
  patient,
  onBack,
  isFavorite,
  onToggleFavorite,
}) => {
  const toast = useToast();

  // 1. State for Selections
  const [selectedIndicationId, setSelectedIndicationId] = useState<string>(
    medication.indications[0]?.id || ''
  );
  const [selectedConcentrationId, setSelectedConcentrationId] = useState<string>(
    medication.concentrations[0]?.id || ''
  );
  const [selectedRoute, setSelectedRoute] = useState<RouteOfAdmin>(
    medication.availableRoutes[0] || 'oral'
  );

  const selectedIndication = useMemo(
    () => medication.indications.find((i) => i.id === selectedIndicationId) || medication.indications[0],
    [medication.indications, selectedIndicationId]
  );

  const selectedConcentration = useMemo(
    () => medication.concentrations.find((c) => c.id === selectedConcentrationId) || medication.concentrations[0],
    [medication.concentrations, selectedConcentrationId]
  );

  // Dynamic Dose & Duration state
  const [customDoseRate, setCustomDoseRate] = useState<number | undefined>(undefined);
  const [selectedFrequency, setSelectedFrequency] = useState<number>(
    selectedIndication?.frequencyPerDay || 3
  );
  const [selectedDurationDays, setSelectedDurationDays] = useState<number>(7);

  // Accordion & Copy state
  const [showPearls, setShowPearls] = useState<boolean>(false);
  const [copiedHis, setCopiedHis] = useState<boolean>(false);
  const [copiedPatient, setCopiedPatient] = useState<boolean>(false);
  const [useAdjustedWeight, setUseAdjustedWeight] = useState<boolean>(false);

  // Obesity Analysis (IBW / ABW Devine & Robinson)
  const weightAnalysis = useMemo(() => {
    return analyzeBodyWeight(patient, useAdjustedWeight);
  }, [patient, useAdjustedWeight]);

  const effectiveWeightKg = useAdjustedWeight && weightAnalysis.abwKg
    ? weightAnalysis.abwKg
    : patient.weightKg;

  // 2. Clinical Safety Evaluations
  const obstetricSafety = useMemo(() => {
    return evaluateObstetricSafety(medication, patient);
  }, [medication, patient]);

  // Hard Stop Modal State: activates when severe contraindication is detected
  const [isHardStopModalOpen, setIsHardStopModalOpen] = useState<boolean>(
    Boolean(obstetricSafety.isAlertTriggered && obstetricSafety.isHardStop)
  );

  useEffect(() => {
    if (obstetricSafety.isAlertTriggered && obstetricSafety.isHardStop) {
      setIsHardStopModalOpen(true);
    }
  }, [obstetricSafety]);

  const renalStatus = useMemo(() => {
    return evaluateRenalStatus(patient, medication);
  }, [patient, medication]);

  // 3. Clinical Engine Calculations (Pure Functions with Effective Weight)
  const calculation = useMemo(() => {
    return calculateDrugDosage({
      patientWeightKg: effectiveWeightKg,
      indication: selectedIndication,
      concentration: selectedConcentration,
      customDoseMgPerKgPerDay: customDoseRate,
      selectedFrequencyPerDay: selectedFrequency,
      selectedDurationDays,
      selectedRoute,
      medicationName: medication.name,
    });
  }, [
    effectiveWeightKg,
    selectedIndication,
    selectedConcentration,
    customDoseRate,
    selectedFrequency,
    selectedDurationDays,
    selectedRoute,
    medication.name,
  ]);

  // Dose Spectrum Thermometer Evaluation
  const doseSpectrum = useMemo(() => {
    return evaluateDoseSpectrum(calculation.dailyTotalMg, effectiveWeightKg, selectedIndication);
  }, [calculation.dailyTotalMg, effectiveWeightKg, selectedIndication]);

  // Dual Prescription Formulations (HIS vs Patient)
  const hisPrescription = useMemo(() => {
    return generateHisPrescription({
      medicationName: medication.name,
      concentrationName: selectedConcentration.name,
      amountMg: selectedConcentration.amountMg,
      volumeMl: selectedConcentration.volumeMl,
      form: selectedConcentration.form,
      singleDoseQuantity: calculation.singleDoseUnitQuantity,
      unitLabel: calculation.unitLabel,
      route: selectedRoute,
      intervalHours: Math.round(24 / selectedFrequency),
      durationDays: selectedDurationDays,
      bottlesNeeded: calculation.bottlesNeeded,
    });
  }, [
    medication.name,
    selectedConcentration,
    calculation.singleDoseUnitQuantity,
    calculation.unitLabel,
    calculation.bottlesNeeded,
    selectedRoute,
    selectedFrequency,
    selectedDurationDays,
  ]);

  const patientPrescription = useMemo(() => {
    return generatePatientPrescription({
      medicationName: medication.name,
      concentrationName: selectedConcentration.name,
      amountMg: selectedConcentration.amountMg,
      volumeMl: selectedConcentration.volumeMl,
      form: selectedConcentration.form,
      singleDoseQuantity: calculation.singleDoseUnitQuantity,
      unitLabel: calculation.unitLabel,
      route: selectedRoute,
      intervalHours: Math.round(24 / selectedFrequency),
      durationDays: selectedDurationDays,
    });
  }, [
    medication.name,
    selectedConcentration,
    calculation.singleDoseUnitQuantity,
    calculation.unitLabel,
    selectedRoute,
    selectedFrequency,
    selectedDurationDays,
  ]);

  // Reset parameters
  const handleResetToDefaults = () => {
    setCustomDoseRate(undefined);
    setSelectedFrequency(selectedIndication?.frequencyPerDay || 3);
    setSelectedDurationDays(7);
    setUseAdjustedWeight(false);
    toast.info('Valores restablecidos a las guías clínicas predeterminadas.');
  };

  // Toggle favorite with toast feedback
  const handleToggleFavoriteWithFeedback = () => {
    onToggleFavorite();
    if (isFavorite) {
      toast.info(`"${medication.name}" eliminado de favoritos.`);
    } else {
      toast.success(`"${medication.name}" guardado en favoritos.`);
    }
  };

  // Dual Copy Handlers with toast feedback
  const handleCopyHis = () => {
    navigator.clipboard.writeText(hisPrescription);
    setCopiedHis(true);
    toast.success('Formulación copiada para Historia Clínica (HIS)');
    setTimeout(() => setCopiedHis(false), 2000);
  };

  const handleCopyPatient = () => {
    navigator.clipboard.writeText(patientPrescription);
    setCopiedPatient(true);
    toast.success('Instrucciones copiadas para el Paciente');
    setTimeout(() => setCopiedPatient(false), 2000);
  };

  // Physical Unit Icon renderer
  const renderPhysicalUnitIcon = () => {
    switch (selectedConcentration.form) {
      case 'suspension':
        return <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'drops':
        return <Droplet className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'tablets':
        return <Pill className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'vial':
      default:
        return <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
    }
  };

  // 4. Segmented Control Options
  const indicationOptions: SegmentedControlOption<string>[] = useMemo(() => {
    return medication.indications.map((ind) => ({
      id: ind.id,
      label: ind.name,
      sublabel: ind.recommendedDoseMgPerKgPerDay
        ? `${ind.recommendedDoseMgPerKgPerDay} mg/kg/día`
        : ind.fixedAdultDoseMg
        ? `${ind.fixedAdultDoseMg} mg fija`
        : undefined,
      badge: ind.recommendedDoseMgPerKgPerDay ? `${ind.recommendedDoseMgPerKgPerDay} mg/kg` : undefined,
    }));
  }, [medication.indications]);

  const concentrationOptions: SegmentedControlOption<string>[] = useMemo(() => {
    return medication.concentrations.map((c) => ({
      id: c.id,
      label: c.name,
      sublabel: c.form === 'suspension' ? `${c.amountMg} mg en ${c.volumeMl} mL` : undefined,
      badge: c.unit,
    }));
  }, [medication.concentrations]);

  const routeOptions: SegmentedControlOption<RouteOfAdmin>[] = useMemo(() => {
    return medication.availableRoutes.map((r) => {
      const labels: Record<RouteOfAdmin, { label: string; abbr: string }> = {
        oral: { label: 'Vía Oral', abbr: 'VO' },
        iv: { label: 'Intravenosa', abbr: 'IV' },
        im: { label: 'Intramuscular', abbr: 'IM' },
        sc: { label: 'Subcutánea', abbr: 'SC' },
        rectal: { label: 'Vía Rectal', abbr: 'REC' },
        inhalatoria: { label: 'Inhalatoria', abbr: 'INH' },
        sublingual: { label: 'Sublingual', abbr: 'SL' },
        topica: { label: 'Vía Tópica', abbr: 'TOP' },
      };
      const info = labels[r] || { label: r, abbr: r.toUpperCase() };
      return {
        id: r,
        label: info.label,
        badge: info.abbr,
      };
    });
  }, [medication.availableRoutes]);

  const frequencyOptions: SegmentedControlOption<number>[] = [
    { id: 4, label: 'c / 6h', sublabel: '4 veces/día' },
    { id: 3, label: 'c / 8h', sublabel: '3 veces/día' },
    { id: 2, label: 'c / 12h', sublabel: '2 veces/día' },
    { id: 1, label: 'c / 24h', sublabel: '1 vez/día' },
  ];

  const durationOptions: SegmentedControlOption<number>[] = [
    { id: 3, label: '3 d' },
    { id: 5, label: '5 d' },
    { id: 7, label: '7 d' },
    { id: 10, label: '10 d' },
    { id: 14, label: '14 d' },
  ];

  return (
    <div className="pb-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Modal de Bloqueo Crítico (Hard Stop) */}
      <CriticalAlertModal
        isOpen={isHardStopModalOpen}
        title="CONTRAINDICACIÓN OBSTÉTRICA GRAVE"
        drugName={medication.name}
        reason={obstetricSafety.message}
        fetalRisks={obstetricSafety.fetalRisks}
        clinicalAlternative={obstetricSafety.alternativeSuggestion}
        onAcknowledge={() => setIsHardStopModalOpen(false)}
        onSelectAlternative={() => {
          setIsHardStopModalOpen(false);
          onBack();
        }}
      />

      {/* Top Bar Navigation */}
      <div className="sticky top-0 z-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 py-2 flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-1 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Directorio</span>
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleResetToDefaults}
            title="Restablecer valores predeterminados"
            className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleToggleFavoriteWithFeedback}
            title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <Star
              className={`w-4 h-4 ${
                isFavorite ? 'text-amber-500 fill-amber-400' : 'text-slate-400 hover:text-amber-400'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-xl mx-auto">
        {/* Encabezado Clínico del Medicamento */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {medication.name}
            </h2>
            {medication.awareCategory && (
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  medication.awareCategory === 'Access'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300'
                    : medication.awareCategory === 'Watch'
                    ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300'
                    : 'bg-rose-50 text-rose-700 border-rose-300 dark:bg-rose-950/70 dark:text-rose-300'
                }`}
              >
                OMS: {medication.awareCategory}
              </span>
            )}
            <span className="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
              {medication.category}
            </span>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            {medication.therapeuticClass}
            {medication.commercialNames?.length > 0 && ` · Marcas: ${medication.commercialNames.slice(0, 3).join(', ')}`}
          </p>
        </div>

        {/* Ajuste por Obesidad (IBW / ABW Devine) si IMC >= 30 */}
        {weightAnalysis.isObese && weightAnalysis.abwKg && (
          <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl space-y-2 text-xs animate-in fade-in duration-200">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-200 text-xs">
                <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Alerta: Paciente con Obesidad (IMC: {weightAnalysis.bmi} kg/m²)</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 font-bold">
                IBW Ideal: {weightAnalysis.ibwKg} kg
              </span>
            </div>

            <p className="text-amber-950 dark:text-amber-100 text-[11px] leading-tight font-medium">
              En obesidad clase I-III, dosificar por peso real puede inducir toxicidad. Puede alternar entre Peso Real y Peso Ajustado (fórmula Devine: ABW = IBW + 0.4 &times; [TBW - IBW]):
            </p>

            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <button
                type="button"
                onClick={() => setUseAdjustedWeight(false)}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border flex flex-col items-center ${
                  !useAdjustedWeight
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-amber-400'
                }`}
              >
                <span className="text-[10px] uppercase opacity-90">Usar Peso Real</span>
                <span className="text-sm font-mono font-black">{patient.weightKg} kg</span>
              </button>

              <button
                type="button"
                onClick={() => setUseAdjustedWeight(true)}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border flex flex-col items-center ${
                  useAdjustedWeight
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-amber-400'
                }`}
              >
                <span className="text-[10px] uppercase opacity-90">Usar Peso Ajustado (ABW)</span>
                <span className="text-sm font-mono font-black">{weightAnalysis.abwKg} kg</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            ALERTAS COLOR-CODED DE SEGURIDAD CLÍNICA
           ======================================================== */}

        {/* 1. Alerta Obstétrica / Teratogenia (Rojo / Vino) */}
        {obstetricSafety.isAlertTriggered && (
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100 rounded-xl text-xs space-y-2 animate-in fade-in duration-200">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-1 w-full">
                <div className="flex items-center justify-between gap-1 flex-wrap">
                  <span className="font-bold text-rose-900 dark:text-rose-200 uppercase tracking-wide text-[11px] flex items-center gap-1.5">
                    <span>🤰</span>
                    <span>Alerta Obstétrica: Riesgo Teratogénico</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-200 text-rose-900 dark:bg-rose-900/80 dark:text-rose-200">
                      {patient.pregnancyTrimester ? `${patient.pregnancyTrimester}º Trimestre` : 'Embarazo'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsHardStopModalOpen(true)}
                      className="text-[10px] underline font-bold text-rose-800 dark:text-rose-300 hover:text-rose-950 cursor-pointer"
                    >
                      Ver Bloqueo
                    </button>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-rose-950 dark:text-rose-100 font-medium">
                  {obstetricSafety.message}
                </p>
                {obstetricSafety.alternativeSuggestion && (
                  <div className="pt-1.5 border-t border-rose-200/80 dark:border-rose-900/80 text-[11px] flex items-start gap-1 text-rose-900 dark:text-rose-200">
                    <strong className="font-semibold shrink-0">Alternativa Sugerida:</strong>
                    <span>{obstetricSafety.alternativeSuggestion}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 2. Alerta Renal / Filtrado Glomerular (Púrpura / Rojo) */}
        {renalStatus?.isRenalAlertTriggered && (
          <div className="p-3.5 bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 text-purple-950 dark:text-purple-100 rounded-xl text-xs space-y-2 animate-in fade-in duration-200">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <div className="space-y-1 w-full">
                <div className="flex items-center justify-between gap-1 flex-wrap">
                  <span className="font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wide text-[11px]">
                    Alerta Renal: ClCr {renalStatus.cockcroftGaultCrCl} mL/min ({renalStatus.kdigoStage})
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-200 text-purple-900 dark:bg-purple-900/80 dark:text-purple-200">
                    Cockcroft-Gault
                  </span>
                </div>
                <p className="text-xs text-purple-950 dark:text-purple-100 leading-relaxed font-medium">
                  Función renal disminuida (KDIGO {renalStatus.kdigoStage}: {renalStatus.kdigoDescription}).
                  {renalStatus.guideline
                    ? ` Guía clínica: ${renalStatus.guideline.adjustmentText}`
                    : ' Requiere ajustar la dosis o prolongar el intervalo de dosificación.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            CONTROLES DE CONFIGURACIÓN CLÍNICA (SEGMENTED CONTROLS)
           ======================================================== */}

        {/* 1. Indicación Clínica */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span>Indicación Clínica</span>
            <span className="text-[11px] text-blue-600 dark:text-blue-400 font-normal">
              {selectedIndication.durationDays}
            </span>
          </label>
          <SegmentedControl
            options={indicationOptions}
            value={selectedIndicationId}
            onChange={(val) => {
              setSelectedIndicationId(val);
              const nextInd = medication.indications.find((i) => i.id === val);
              if (nextInd) {
                setCustomDoseRate(undefined);
                setSelectedFrequency(nextInd.frequencyPerDay || 3);
              }
            }}
            layout="wrap"
          />
        </div>

        {/* 2. Presentación Farmacéutica */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Presentación y Concentración
          </label>
          <SegmentedControl
            options={concentrationOptions}
            value={selectedConcentrationId}
            onChange={setSelectedConcentrationId}
            layout="wrap"
          />
        </div>

        {/* 3. Vía de Administración */}
        {medication.availableRoutes.length > 1 && (
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Vía de Administración
            </label>
            <SegmentedControl
              options={routeOptions}
              value={selectedRoute}
              onChange={setSelectedRoute}
              layout="wrap"
              size="sm"
            />
          </div>
        )}

        {/* 4. Frecuencia y Duración */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Intervalo Horario
            </label>
            <SegmentedControl
              options={frequencyOptions}
              value={selectedFrequency}
              onChange={setSelectedFrequency}
              layout="grid-2"
              size="sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Duración Tratamiento
            </label>
            <SegmentedControl
              options={durationOptions}
              value={selectedDurationDays}
              onChange={setSelectedDurationDays}
              layout="row"
              size="sm"
            />
          </div>
        </div>

        {/* Ajuste Fino de Dosis en mg/kg con teclado numérico nativo */}
        {selectedIndication.recommendedDoseMgPerKgPerDay && (
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Dosis por Peso ({selectedIndication.isDosePerKgPerDose ? 'mg/kg/toma' : 'mg/kg/día'})
              </span>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  inputMode="decimal"
                  pattern="[0-9]*[.,]?[0-9]*"
                  step="1"
                  min={selectedIndication.minDoseMgPerKgPerDay || 1}
                  max={selectedIndication.maxDoseMgPerKgPerDay || 200}
                  value={customDoseRate ?? selectedIndication.recommendedDoseMgPerKgPerDay}
                  onChange={(e) => setCustomDoseRate(parseFloat(e.target.value) || 0)}
                  className="w-16 text-center font-mono font-bold text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md py-0.5 text-blue-600 dark:text-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-xs">
                  mg/kg
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min={selectedIndication.minDoseMgPerKgPerDay || Math.round(selectedIndication.recommendedDoseMgPerKgPerDay * 0.5)}
                max={selectedIndication.maxDoseMgPerKgPerDay || Math.round(selectedIndication.recommendedDoseMgPerKgPerDay * 1.5)}
                step="5"
                value={customDoseRate ?? selectedIndication.recommendedDoseMgPerKgPerDay}
                onChange={(e) => setCustomDoseRate(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              {customDoseRate !== undefined && (
                <button
                  type="button"
                  onClick={() => setCustomDoseRate(undefined)}
                  className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline shrink-0 cursor-pointer"
                >
                  Restablecer
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
              <span>Mín: {selectedIndication.minDoseMgPerKgPerDay || '-'} mg/kg</span>
              <span>Guía: {selectedIndication.recommendedDoseMgPerKgPerDay} mg/kg</span>
              <span>Máx: {selectedIndication.maxDoseMgPerKgPerDay || '-'} mg/kg</span>
            </div>
          </div>
        )}

        {/* ========================================================
            PANEL DE RESULTADOS CLÍNICOS EN TIEMPO REAL
           ======================================================== */}
        <section
          className={`rounded-2xl border p-4 space-y-3.5 transition-colors shadow-xs ${
            calculation.isOutOfRange
              ? 'bg-orange-50/60 dark:bg-orange-950/20 border-orange-300 dark:border-orange-800'
              : 'bg-blue-50/50 dark:bg-slate-850/80 border-blue-200 dark:border-blue-900/60'
          }`}
        >
          {/* Cifra destacada por toma acompañada de icono físico de unidad */}
          <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3 bg-white dark:bg-slate-900 p-3.5 rounded-xl border">
            <div>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                Dosis a Administrar por Toma:
              </span>
              <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  {renderPhysicalUnitIcon()}
                  <span className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight tabular-nums">
                    {calculation.singleDoseUnitQuantity}
                  </span>
                  <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    {calculation.unitLabel}
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-1 font-semibold">
                  ({Math.round(calculation.singleDoseMg)} mg)
                </span>
                <span className="ml-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  {selectedRoute === 'oral' ? 'VO' : selectedRoute.toUpperCase()}
                </span>
                {calculation.isOutOfRange && (
                  <span className="ml-1 px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 dark:bg-orange-950/70 text-orange-800 dark:text-orange-200 border border-orange-300 dark:border-orange-700">
                    ⚠️ Dosis fuera de rango
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 block">Frecuencia</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                c / {Math.round(24 / selectedFrequency)}h
              </span>
            </div>
          </div>

          {/* Tarjeta de Resumen Numérico */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block">Dosis Diaria Total</span>
              <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                {Math.round(calculation.dailyTotalMg)} mg/día
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block">Duración</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {selectedDurationDays} días
              </span>
            </div>

            {calculation.totalVolumeMl !== undefined && (
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 block">Volumen Total</span>
                <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                  {calculation.totalVolumeMl} mL
                </span>
              </div>
            )}

            {calculation.bottlesNeeded !== undefined && (
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 block">Dispensar</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {calculation.bottlesNeeded} frasco(s)
                </span>
              </div>
            )}
          </div>

          {/* Visualizador de Dosis: Termómetro de Seguridad */}
          <DoseThermometer evaluation={doseSpectrum} unitLabel="mg/día" />

          {/* Alerta de 'Dosis fuera de rango' (Naranja) */}
          {calculation.isOutOfRange && (
            <div className="p-3 bg-orange-50 dark:bg-orange-950/40 border border-orange-400 dark:border-orange-600 text-orange-950 dark:text-orange-100 rounded-xl text-xs flex items-start gap-2.5 animate-in fade-in duration-200 shadow-xs">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
              <div className="space-y-1.5 w-full">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-bold text-orange-900 dark:text-orange-200 uppercase tracking-wide text-[11px] flex items-center gap-1.5">
                    <span>⚠️</span>
                    <span>Alerta: Dosis fuera de rango</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-200 text-orange-900 dark:bg-orange-900/70 dark:text-orange-200 border border-orange-300 dark:border-orange-700">
                    Seguridad Clínica
                  </span>
                </div>
                <p className="text-xs text-orange-950 dark:text-orange-100 leading-relaxed font-medium">
                  {calculation.outOfRangeReason}
                </p>
                {calculation.isMaxDoseExceeded && (
                  <div className="pt-1.5 border-t border-orange-200/80 dark:border-orange-800/80 text-[11px] text-orange-900 dark:text-orange-200 space-y-0.5">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span>
                        Dosis teórica por peso: <strong>{calculation.rawCalculatedSingleMg} mg/toma</strong> ({calculation.rawCalculatedDailyMg} mg/día)
                      </span>
                      <span className="font-bold text-orange-800 dark:text-orange-300">
                        → Tope aplicado: <strong>{calculation.singleDoseMg} mg</strong> ({calculation.dailyTotalMg} mg/día)
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Traductor Dual de Formulación: HIS y Paciente */}
          <div className="space-y-3 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Botón 1: Copiar para HIS (Historia Clínica) */}
              <button
                type="button"
                onClick={handleCopyHis}
                className="py-3 px-3.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[46px]"
              >
                {copiedHis ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300 stroke-[2.5]" />
                    <span>¡Copiado para HIS!</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 text-white stroke-[2.2]" />
                    <span>Copiar para HIS (Historia Clínica)</span>
                  </>
                )}
              </button>

              {/* Botón 2: Copiar para Paciente */}
              <button
                type="button"
                onClick={handleCopyPatient}
                className="py-3 px-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[46px]"
              >
                {copiedPatient ? (
                  <>
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>¡Copiado para Paciente!</span>
                  </>
                ) : (
                  <>
                    <User className="w-4 h-4 text-white stroke-[2.2]" />
                    <span>Copiar para Paciente</span>
                  </>
                )}
              </button>
            </div>

            {/* Vista Previa Dual */}
            <div className="space-y-2">
              {/* Vista Previa HIS */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800 space-y-1 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Texto para Historia Clínica (HIS / HCE):</span>
                  </span>
                  <span className="text-[9px] font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                    Técnico
                  </span>
                </div>
                <p className="text-xs font-mono font-medium text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-850 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800 break-words leading-relaxed select-all">
                  {hisPrescription}
                </p>
              </div>

              {/* Vista Previa Lenguaje Paciente */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800 space-y-1 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Instrucciones para el Paciente / Cuidador:</span>
                  </span>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                    Horarios & Cuidados
                  </span>
                </div>
                <p className="text-xs font-sans font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-850 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800 break-words leading-relaxed select-all">
                  {patientPrescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PERLAS CLÍNICAS Y EVIDENCIA MÉDICA (MDCalc Style)
           ======================================================== */}
        <div className="space-y-2 pt-1">
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setShowPearls(!showPearls)}
              className="w-full px-4 py-3 text-left font-semibold text-xs text-slate-900 dark:text-white flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Perlas Clínicas y Precauciones</span>
              </span>
              {showPearls ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {showPearls && (
              <div className="p-4 pt-1 border-t border-slate-100 dark:border-slate-800 text-xs space-y-3">
                {medication.whenToUse?.length > 0 && (
                  <div>
                    <h5 className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[10px] mb-1">
                      Cuándo Usar:
                    </h5>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600 dark:text-slate-400">
                      {medication.whenToUse.map((w, idx) => (
                        <li key={idx}>{w}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {medication.pearlsAndPitfalls?.length > 0 && (
                  <div>
                    <h5 className="font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider text-[10px] mb-1">
                      Perlas y Trampas Clínicas:
                    </h5>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600 dark:text-slate-400">
                      {medication.pearlsAndPitfalls.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {medication.reconstitutionNotes && (
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5 text-[11px]">
                      Reconstitución y Conservación:
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">{medication.reconstitutionNotes}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
