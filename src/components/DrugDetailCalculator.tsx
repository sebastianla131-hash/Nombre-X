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
  Sparkles,
  ChevronDown,
  ChevronUp,
  Scale,
  Ruler,
  HelpCircle,
  ExternalLink,
  User
} from 'lucide-react';
import { Medication, DrugIndication, DrugConcentration, PatientProfile, RouteOfAdmin } from '../types';
import {
  calculateMedicationDose,
  calculateCockcroftGault,
  calculateCKDEPI2021,
  formatRouteLabel
} from '../utils/calculator';
import { getPregnancyGuidance } from '../data/pregnancySafety';

interface DrugDetailCalculatorProps {
  medication: Medication;
  patient: PatientProfile;
  onUpdatePatient?: (p: PatientProfile) => void;
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
  // Collapsible clinical instructions context
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  // Calculator states
  const [selectedIndication, setSelectedIndication] = useState<DrugIndication>(
    medication.indications[0]
  );
  const [selectedConcentration, setSelectedConcentration] = useState<DrugConcentration>(
    medication.concentrations[0]
  );
  const [selectedRoute, setSelectedRoute] = useState<RouteOfAdmin>(
    medication.availableRoutes[0] || 'oral'
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

  // Weight is derived strictly from the active patient profile (read-only in drug detail)
  const effectiveWeightKg = patient.weightKg || 0;

  const handleSelectIndication = (ind: DrugIndication) => {
    setSelectedIndication(ind);
    setFrequencyPerDay(ind.frequencyPerDay);
    setIntervalHours(ind.intervalHours);
    setCustomDoseMgKg(null);
  };

  // Determine current active dose per kg
  const activeDoseMgKg =
    customDoseMgKg !== null
      ? customDoseMgKg
      : selectedIndication.recommendedDoseMgPerKgPerDay ||
        selectedIndication.fixedAdultDoseMg ||
        50;

  // Validation: check if required weight is present
  const isWeightValid = effectiveWeightKg > 0;

  // Dose calculation
  const calculation = useMemo(() => {
    if (!isWeightValid) return null;
    return calculateMedicationDose({
      drugName: medication.name,
      weightKg: effectiveWeightKg,
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
      route: selectedRoute,
      instructionsNote: selectedConcentration.notes
    });
  }, [
    isWeightValid,
    medication.name,
    effectiveWeightKg,
    activeDoseMgKg,
    selectedIndication,
    frequencyPerDay,
    intervalHours,
    durationDays,
    selectedConcentration,
    selectedRoute
  ]);

  // Renal Clearance status (Cockcroft-Gault & 2021 CKD-EPI)
  const renalStatus = useMemo(() => {
    if (!patient.serumCreatinineMgDl) return null;
    return calculateCockcroftGault({
      ageYears: patient.ageYears || 30,
      weightKg: effectiveWeightKg || 70,
      serumCreatinineMgDl: patient.serumCreatinineMgDl,
      gender: patient.gender
    });
  }, [patient, effectiveWeightKg]);

  const ckdEpiStatus = useMemo(() => {
    if (!patient.serumCreatinineMgDl) return null;
    return calculateCKDEPI2021({
      ageYears: patient.ageYears || 30,
      serumCreatinineMgDl: patient.serumCreatinineMgDl,
      gender: patient.gender,
      weightKg: effectiveWeightKg,
      heightCm: patient.heightCm
    });
  }, [patient, effectiveWeightKg]);

  const patientBmi = useMemo(() => {
    if (!patient.heightCm || patient.heightCm <= 0 || !effectiveWeightKg || effectiveWeightKg <= 0)
      return null;
    return (effectiveWeightKg / Math.pow(patient.heightCm / 100, 2)).toFixed(1);
  }, [effectiveWeightKg, patient.heightCm]);

  // Obstetric / Pregnancy Safety Evaluation
  const isPatientPregnant = patient.gender === 'female' && !!patient.isPregnant;
  const pregSafety = useMemo(() => {
    if (!isPatientPregnant) return null;
    return getPregnancyGuidance(medication, patient.pregnancyTrimester);
  }, [isPatientPregnant, medication, patient.pregnancyTrimester]);

  const handleCopyPrescription = () => {
    if (!calculation) return;
    let textToCopy = calculation.formattedPrescription;
    if (isPatientPregnant && pregSafety) {
      textToCopy += `\n[Nota Obstétrica: Paciente gestante (${patient.pregnancyTrimester ? `${patient.pregnancyTrimester}º Trimestre` : 'Embarazo activo'}) - Clasificación Fetal: Cat. ${pregSafety.guidance.category} (${pregSafety.guidance.statusLabel})]`;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    if (!calculation) return;
    const text = encodeURIComponent(
      `*Receta Médica - ${medication.name}*\n${calculation.formattedPrescription}\n_Formulario Clínico MD_`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSelectedIndication(medication.indications[0]);
    setSelectedConcentration(medication.concentrations[0]);
    setSelectedRoute(medication.availableRoutes[0] || 'oral');
    setFrequencyPerDay(medication.indications[0].frequencyPerDay);
    setIntervalHours(medication.indications[0].intervalHours);
    setDurationDays(7);
    setCustomDoseMgKg(null);
  };

  // Severity color coding for result card
  const isMaxExceeded = calculation?.isMaxDoseExceeded;
  const isRenalAlert = renalStatus && renalStatus.crCl < 50 && medication.renalAdjustments && medication.renalAdjustments.length > 0;
  const isPregnancyContraindicated = pregSafety?.isContraindicatedNow;

  let resultHeaderBg = 'bg-blue-700';
  let resultBorderColor = 'border-blue-200 dark:border-blue-800';
  let resultCardBg = 'bg-blue-50/40 dark:bg-slate-900';

  if (isPregnancyContraindicated) {
    resultHeaderBg = 'bg-rose-800';
    resultBorderColor = 'border-rose-400 dark:border-rose-800';
    resultCardBg = 'bg-rose-50/60 dark:bg-rose-950/20';
  } else if (isMaxExceeded) {
    resultHeaderBg = 'bg-amber-600';
    resultBorderColor = 'border-amber-300 dark:border-amber-700';
    resultCardBg = 'bg-amber-50/50 dark:bg-amber-950/20';
  } else if (isRenalAlert) {
    resultHeaderBg = 'bg-rose-700';
    resultBorderColor = 'border-rose-300 dark:border-rose-800';
    resultCardBg = 'bg-rose-50/50 dark:bg-rose-950/20';
  }

  return (
    <div className="pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      {/* Top Bar Navigation */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2.5 sticky top-0 z-20 shadow-xs flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-400 py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Catálogo</span>
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            title="Restablecer valores predeterminados"
            className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onToggleFavorite}
            title={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
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

      <div className="max-w-xl mx-auto p-4 space-y-4">
        {/* ========================================================
            1. ENCABEZADO: NOMBRE + DESCRIPCIÓN 1-LÍNEA + INSTRUCCIONES PLEGABLE
           ======================================================== */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {medication.name}
                </h1>
                {medication.atcCode && (
                  <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    ATC: {medication.atcCode}
                  </span>
                )}
                {medication.awareCategory && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                      medication.awareCategory === 'Access'
                        ? 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800'
                        : medication.awareCategory === 'Watch'
                        ? 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800'
                        : 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800'
                    }`}
                  >
                    AWaRe: {medication.awareCategory}
                  </span>
                )}
              </div>
              {/* Descripción concisa de una línea */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                {medication.shortDescription || `${medication.therapeuticClass} para tratamiento dosificado según peso y edad.`}
              </p>
            </div>
          </div>

          {/* Sección "Instrucciones" Plegable */}
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 transition-colors py-0.5"
            >
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Instrucciones y contexto clínico de uso
              </span>
              {showInstructions ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {showInstructions && (
              <div className="mt-2.5 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-xs space-y-2 border border-slate-200/80 dark:border-slate-700/80 animate-in fade-in duration-150">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                    Criterios y momento de uso:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {medication.whenToUse.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {medication.reconstitutionNotes && (
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">
                      Vía y administración:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {medication.reconstitutionNotes}
                    </p>
                  </div>
                )}

                {medication.storageNotes && (
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">
                      Conservación:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {medication.storageNotes}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            EVALUACIÓN OBSTÉTRICA Y SEGURIDAD EN EL EMBARAZO (Si la paciente está en gestación)
           ======================================================== */}
        {isPatientPregnant && pregSafety && (
          <section className={`rounded-xl p-4 border-2 shadow-xs transition-all ${pregSafety.borderClass} ${pregSafety.bgClass}`}>
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤰</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                      Seguridad y Dosificación en el Embarazo
                    </h2>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${pregSafety.badgeColorClass}`}>
                      {pregSafety.badgeText}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 font-medium">
                    Paciente en {patient.pregnancyTrimester ? `${patient.pregnancyTrimester}.er Trimestre` : 'Embarazo activo'} · Clasificación FDA/Briggs: <strong>Categoría {pregSafety.guidance.category}</strong> ({pregSafety.guidance.statusLabel})
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 bg-white/95 dark:bg-slate-900/95 rounded-lg p-3 border border-slate-200/80 dark:border-slate-800 text-xs space-y-2">
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {pregSafety.guidance.summary}
              </p>

              {pregSafety.guidance.fetalRisks && pregSafety.guidance.fetalRisks.length > 0 && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-rose-700 dark:text-rose-400 block mb-1">
                    ⚠️ Riesgos fetales / neonatales documentados:
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-700 dark:text-slate-300">
                    {pregSafety.guidance.fetalRisks.map((risk, idx) => (
                      <li key={idx}>{risk}</li>
                    ))}
                  </ul>
                </div>
              )}

              {pregSafety.guidance.clinicalAlternative && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-blue-950 dark:text-blue-200 bg-blue-50/70 dark:bg-blue-950/40 p-2.5 rounded-lg border border-blue-200 dark:border-blue-900">
                  <span className="font-bold text-[11px] block text-blue-800 dark:text-blue-300 mb-0.5">
                    💡 Alternativa clínica recomendada en la gestante:
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {pregSafety.guidance.clinicalAlternative}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ========================================================
            2. FORMULARIO DE INPUTS: UNIDADES VISIBLES + BOTONES PASTILLA + VALIDACIÓN
           ======================================================== */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Parámetros de Dosificación del Paciente
            </h2>
          </div>

          {/* Datos Antropométricos del Paciente (Solo Lectura) */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                Datos Antropométricos del Paciente
              </span>
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                Perfil Activo (Solo Lectura)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Peso del Paciente (Solo Lectura) */}
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  <Scale className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                  <span>Peso Corporal:</span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                    {effectiveWeightKg}
                  </span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">kg</span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    (≈ {(effectiveWeightKg * 2.20462).toFixed(1)} lb)
                  </span>
                </div>
              </div>

              {/* Talla del Paciente (Solo Lectura) */}
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    <Ruler className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                    <span>Talla:</span>
                  </div>
                  {patientBmi && (
                    <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.2 rounded border border-blue-200 dark:border-blue-800">
                      IMC {patientBmi}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                    {patient.heightCm || '--'}
                  </span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">cm</span>
                  {patient.heightCm ? (
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                      ({(patient.heightCm / 100).toFixed(2)} m)
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              💡 Para modificar el peso, la talla o el sexo, edite el perfil del paciente desde la barra superior o la pantalla de paciente.
            </p>
          </div>

          {/* Variable Categórica 1: Indicación Clínica (Botones tipo Pastilla, NO Dropdown) */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-2">
              Indicación Clínica (Selección con un toque)
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {medication.indications.map((ind) => {
                const isSelected = selectedIndication.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => handleSelectIndication(ind)}
                    className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between gap-2 min-h-[44px] ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-700 text-blue-950 dark:text-blue-100 ring-1 ring-blue-700 font-semibold'
                        : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{ind.name}</div>
                      {ind.description && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {ind.description}
                        </div>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block tabular-nums">
                        {ind.isDosePerKgPerDose
                          ? `${ind.recommendedDoseMgPerKgPerDay} mg/kg/toma`
                          : ind.recommendedDoseMgPerKgPerDay
                          ? `${ind.recommendedDoseMgPerKgPerDay} mg/kg/día`
                          : `${ind.fixedAdultDoseMg} mg`}
                      </span>
                      <span className="text-[10px] text-slate-500">c/{ind.intervalHours}h</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Variable Categórica 2: Concentración Farmacéutica (Botones tipo Pastilla, NO Dropdown) */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-2">
              Presentación / Concentración Farmacéutica
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {medication.concentrations.map((conc) => {
                const isSelected = selectedConcentration.id === conc.id;
                return (
                  <button
                    key={conc.id}
                    type="button"
                    onClick={() => setSelectedConcentration(conc)}
                    className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between min-h-[44px] ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-700 text-blue-950 dark:text-blue-100 ring-1 ring-blue-700 font-semibold'
                        : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
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
                    <span className="text-[10px] font-bold text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                      {conc.form}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Variable Categórica: Vía de Administración (VO, IV, IM, etc.) */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Vía de Administración Farmacológica:
              </label>
              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400">
                {formatRouteLabel(selectedRoute).formatted}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {medication.availableRoutes.map((r) => {
                const rInfo = formatRouteLabel(r);
                const isSelected = selectedRoute === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setSelectedRoute(r)}
                    className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                        isSelected
                          ? 'bg-blue-800 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {rInfo.abbr}
                    </span>
                    <span>{rInfo.full}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Variables Categóricas 3 & 4: Intervalo Horario y Duración (Pastillas Horizontales) */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
                Intervalo de Administración
              </label>
              <div className="grid grid-cols-4 gap-1">
                {[6, 8, 12, 24].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => {
                      setIntervalHours(h);
                      setFrequencyPerDay(Math.round(24 / h));
                    }}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all min-h-[40px] ${
                      intervalHours === h
                        ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
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
                Duración del Tratamiento
              </label>
              <div className="grid grid-cols-5 gap-1">
                {[3, 5, 7, 10, 14].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDurationDays(d)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all min-h-[40px] ${
                      durationDays === d
                        ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {d}d
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. PANEL DE RESULTADO: SEPARADO + TIEMPO REAL + COLOR-CODING + VALIDACIÓN INLINE
           ======================================================== */}
        <section className={`rounded-xl border-2 ${resultBorderColor} ${resultCardBg} shadow-sm overflow-hidden transition-all`}>
          {/* Header del Panel */}
          <div className={`${resultHeaderBg} text-white px-4 py-2.5 flex items-center justify-between`}>
            <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              Resultado de Dosificación Clínica
            </span>
            <span className="text-xs text-blue-100 font-medium">
              {isWeightValid ? `${effectiveWeightKg} kg` : 'Pendiente'}
            </span>
          </div>

          <div className="p-4 space-y-3">
            {/* Validación Inline: Si falta peso o es inválido, mensaje claro en vez de valor */}
            {!isWeightValid ? (
              <div className="p-4 text-center space-y-1.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
                <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto" />
                <div className="text-sm font-bold">Datos Incompletos</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Por favor ingrese el peso del paciente en el formulario superior para calcular la dosificación exacta.
                </p>
              </div>
            ) : calculation ? (
              <>
                {/* Alerta de Contraindicación en Embarazo dentro del panel de resultados */}
                {pregSafety?.isContraindicatedNow && (
                  <div className="p-3 bg-rose-100 dark:bg-rose-950/60 rounded-lg border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-100 text-xs flex items-start gap-2 animate-in fade-in duration-200">
                    <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-rose-950 dark:text-rose-100">
                        ALERTA CLÍNICA: FÁRMACO CONTRAINDICADO EN LA GESTANTE
                      </span>
                      <p className="text-[11px] mt-0.5 leading-relaxed text-rose-800 dark:text-rose-200 font-medium">
                        Este medicamento presenta riesgo fetal documentado o complicaciones perinatales en esta etapa gestacional ({patient.pregnancyTrimester ? `${patient.pregnancyTrimester}º Trimestre` : 'Embarazo'}). Se aconseja evaluar la alternativa clínica: <strong>{pregSafety.guidance.clinicalAlternative || 'Consulte alternativa obstétrica segura'}</strong>.
                      </p>
                    </div>
                  </div>
                )}

                {/* Gran cifra unitaria por toma */}
                <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3 bg-white dark:bg-slate-900 p-3.5 rounded-lg border">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                      Dosis a Administrar por Toma:
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight tabular-nums">
                        {calculation.singleDoseUnitQuantity}
                      </span>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        {calculation.unitLabel}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-1 font-semibold">
                        ({Math.round(calculation.singleDoseMg)} mg)
                      </span>
                      <span className="ml-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                        {formatRouteLabel(selectedRoute).abbr}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                      Frecuencia
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Cada {intervalHours} horas
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      ({frequencyPerDay} tomas al día)
                    </span>
                  </div>
                </div>

                {/* Resumen Diario, Duración y Vía de Administración */}
                <div className="grid grid-cols-3 gap-2 text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Dosis Diaria:</span>
                    <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                      {calculation.dailyTotalMg} mg/día
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Duración:</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {durationDays} días
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Vía:</span>
                    <span className="font-bold text-blue-700 dark:text-blue-400">
                      {formatRouteLabel(selectedRoute).abbr}
                    </span>
                  </div>
                </div>

                {/* Volumen total líquido y frascos */}
                {calculation.estimatedTotalVolumeMl && calculation.bottlesNeeded && (
                  <div className="flex items-center justify-between text-xs px-2 py-1.5 bg-blue-50/60 dark:bg-blue-950/40 rounded-lg text-blue-950 dark:text-blue-200 border border-blue-200/60">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-blue-700" />
                      Consumo total estimado: <strong>{calculation.estimatedTotalVolumeMl} mL</strong>
                    </span>
                    <span className="font-bold text-blue-800 dark:text-blue-300">
                      Dispensar: {calculation.bottlesNeeded} frasco(s)
                    </span>
                  </div>
                )}

                {/* Banner de Límite Máximo Superado (Color Ámbar) */}
                {calculation.isMaxDoseExceeded && (
                  <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 p-2.5 rounded-lg text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Tope Máximo de Seguridad Aplicado:</strong> La dosis teórica por peso excedía el límite recomendado. Se ajustó automáticamente a {selectedIndication.maxSingleDoseMg || selectedIndication.maxDailyDoseMg} mg.
                    </div>
                  </div>
                )}

                {/* Banner de Alerta Renal (Color Rojo) */}
                {isRenalAlert && (
                  <div className="flex items-start gap-2 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 p-2.5 rounded-lg text-xs">
                    <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Alerta Renal:</strong> ClCr estimado es {renalStatus?.crCl} mL/min (Cockcroft-Gault) {ckdEpiStatus?.egfr ? `· TFGe ${ckdEpiStatus.egfr} mL/min/1.73 m² (2021 CKD-EPI)` : ''}. Requiere ajuste de dosis o espaciamiento de intervalos según guía adjunta.
                    </div>
                  </div>
                )}

                {/* Visualización de la Receta Médica Estructurada */}
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Receta Médica Generada (Rp.)
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                      {formatRouteLabel(selectedRoute).formatted}
                    </span>
                  </div>
                  <pre className="text-xs font-mono text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded border border-slate-200/80 dark:border-slate-700/80">
                    {calculation.formattedPrescription}
                  </pre>
                </div>

                {/* Botones de Acción para Copiar y Compartir */}
                <div className="pt-1 flex items-center gap-2">
                  <button
                    onClick={handleCopyPrescription}
                    className="flex-1 py-2.5 px-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs min-h-[44px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-blue-200" />
                        <span>¡Receta Copiada al Portapapeles!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Receta Médica</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleShareWhatsApp}
                    className="py-2.5 px-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs min-h-[44px]"
                    title="Compartir por WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </section>

        {/* ========================================================
            4. BLOQUE DE INTERPRETACIÓN: TABLA DE RANGOS, SIGNIFICADO Y CONDUCTA
           ======================================================== */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
            <FileText className="w-4 h-4 text-blue-700" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Interpretación Clínica y Conducta Terapéutica
            </h3>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold">
                <tr>
                  <th className="py-2 px-3">Escenario / Severidad</th>
                  <th className="py-2 px-3">Rango Posológico</th>
                  <th className="py-2 px-3">Conducta Recomendada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                    Infección Leve a Moderada
                  </td>
                  <td className="py-2 px-3 font-mono text-blue-700 dark:text-blue-400 font-bold">
                    {medication.indications[0]?.recommendedDoseMgPerKgPerDay || 40-50} mg/kg/día
                  </td>
                  <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                    Administrar dividido c/8h o c/12h con alimentos. Evaluar respuesta a las 48-72h.
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                    Infección Severa / Riesgo Resistencia
                  </td>
                  <td className="py-2 px-3 font-mono text-amber-700 dark:text-amber-400 font-bold">
                    {medication.indications[1]?.recommendedDoseMgPerKgPerDay || 80-90} mg/kg/día
                  </td>
                  <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                    Dosis alta recomendada (OMA recurrente, neumonía bacteriana). Monitorear tolerancia GI.
                  </td>
                </tr>

                {medication.renalAdjustments && medication.renalAdjustments.length > 0 && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                      Falla Renal (ClCr &lt; 30 mL/min)
                    </td>
                    <td className="py-2 px-3 font-mono text-rose-700 dark:text-rose-400 font-bold">
                      Ajuste 50% / c/12-24h
                    </td>
                    <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                      {medication.renalAdjustments[0]?.adjustmentText || 'Espaciar intervalo de administración o reducir dosis.'}
                    </td>
                  </tr>
                )}

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                    Tope Máximo Seguro
                  </td>
                  <td className="py-2 px-3 font-mono text-slate-800 dark:text-slate-200 font-bold">
                    {selectedIndication.maxDailyDoseMg} mg/día
                  </td>
                  <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                    No exceder la dosis máxima del adulto independientemente del peso corporal.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Perlas clínicas y trampas de prescripción */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              Precauciones y Trampas Frecuentes (Clinical Pearls):
            </span>
            <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
              {medication.pearlsAndPitfalls.slice(0, 3).map((p, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========================================================
            5. TRAZABILIDAD: FÓRMULA UTILIZADA Y FUENTE/REFERENCIA (SIEMPRE VISIBLE)
           ======================================================== */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Trazabilidad, Fórmulas y Fuentes Oficiales
            </h3>
          </div>

          {/* Fórmula Utilizada (Explícita, no oculta) */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
              Fórmula Matemática Utilizada:
            </span>
            <div className="font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1 leading-relaxed bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800">
              <div>
                • <strong>Dosis Diaria (mg):</strong> Peso (kg) × {activeDoseMgKg} mg/kg/día
              </div>
              <div>
                • <strong>Dosis por Toma (mg):</strong> Dosis Diaria ÷ {frequencyPerDay} tomas/día
              </div>
              <div>
                • <strong>Volumen por Toma (mL):</strong> Dosis (mg) ÷ Concentración ({selectedConcentration.amountMg} mg / {selectedConcentration.volumeMl} mL)
              </div>
              {selectedConcentration.standardBottleMl && (
                <div>
                  • <strong>Frascos a Dispensar:</strong> ⌈(Volumen toma × tomas totales) ÷ {selectedConcentration.standardBottleMl} mL⌉
                </div>
              )}
            </div>
          </div>

          {/* Fuente / Referencia citando base farmacológica */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
              Fuentes y Referencias Oficiales:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">1.</span>
                <span>
                  <strong>Listado Oficial de Medicamentos y Guía de Prescripción 2025</strong> — Superintendencia de Regulación Sanitaria (SRS), El Salvador.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">2.</span>
                <span>
                  <strong>WHO Model List of Essential Medicines (Clasificación AWaRe 2025)</strong> — Organización Mundial de la Salud.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">3.</span>
                <span>
                  <strong>Ficha Técnica AEMPS / INVIMA / FDA RxNorm</strong> — Posología Pediátrica y de Adultos en Infecciones Susceptibles.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
