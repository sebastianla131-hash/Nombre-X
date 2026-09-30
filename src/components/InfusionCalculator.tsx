import React, { useState, useMemo } from 'react';
import {
  Droplets,
  Clock,
  AlertTriangle,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  FileText,
  Scale,
  Sparkles
} from 'lucide-react';
import { PatientProfile } from '../types';
import { INFUSION_PROTOCOLS, InfusionProtocol } from '../data/medications';
import { calculateInfusionRate } from '../utils/calculator';

interface InfusionCalculatorProps {
  patient: PatientProfile;
  onUpdatePatient: (p: PatientProfile) => void;
}

export const InfusionCalculator: React.FC<InfusionCalculatorProps> = ({
  patient,
  onUpdatePatient
}) => {
  // Collapsible instructions
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  // Unit toggle for weight
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [weightInput, setWeightInput] = useState<number>(patient.weightKg || 70);

  // Protocol state
  const [selectedProtocol, setSelectedProtocol] = useState<InfusionProtocol>(
    INFUSION_PROTOCOLS[0]
  );
  const [doseRate, setDoseRate] = useState<number>(
    INFUSION_PROTOCOLS[0].typicalDoseRange.initial
  );
  const [drugAmountMg, setDrugAmountMg] = useState<number>(
    INFUSION_PROTOCOLS[0].defaultConcentration.drugAmountMg
  );
  const [solutionVolumeMl, setSolutionVolumeMl] = useState<number>(
    INFUSION_PROTOCOLS[0].defaultConcentration.solutionVolumeMl
  );

  const effectiveWeightKg = useMemo(() => {
    if (weightUnit === 'lb') {
      return Number((weightInput / 2.20462).toFixed(1));
    }
    return weightInput;
  }, [weightInput, weightUnit]);

  const handleWeightUnitToggle = (newUnit: 'kg' | 'lb') => {
    if (newUnit === weightUnit) return;
    if (newUnit === 'lb') {
      setWeightInput(Number((weightInput * 2.20462).toFixed(1)));
    } else {
      setWeightInput(Number((weightInput / 2.20462).toFixed(1)));
    }
    setWeightUnit(newUnit);
  };

  const handleWeightChange = (val: number) => {
    setWeightInput(val);
    const kg = weightUnit === 'lb' ? Number((val / 2.20462).toFixed(1)) : val;
    onUpdatePatient({
      ...patient,
      weightKg: Math.max(0, kg)
    });
  };

  const handleSelectProtocol = (p: InfusionProtocol) => {
    setSelectedProtocol(p);
    setDoseRate(p.typicalDoseRange.initial);
    setDrugAmountMg(p.defaultConcentration.drugAmountMg);
    setSolutionVolumeMl(p.defaultConcentration.solutionVolumeMl);
  };

  // Validation
  const isInputValid = effectiveWeightKg > 0 && doseRate > 0 && drugAmountMg > 0 && solutionVolumeMl > 0;

  // Real-time calculation
  const result = useMemo(() => {
    if (!isInputValid) return null;
    return calculateInfusionRate({
      weightKg: effectiveWeightKg,
      doseRate,
      doseUnit: selectedProtocol.doseUnit,
      totalDrugMg: drugAmountMg,
      totalVolumeMl: solutionVolumeMl
    });
  }, [isInputValid, effectiveWeightKg, doseRate, selectedProtocol.doseUnit, drugAmountMg, solutionVolumeMl]);

  // Dose severity status
  const isOutOfRange = doseRate > selectedProtocol.typicalDoseRange.max || doseRate < selectedProtocol.typicalDoseRange.min;
  const isHighDose = doseRate > selectedProtocol.typicalDoseRange.initial * 2;
  const isMaxDose = doseRate >= selectedProtocol.typicalDoseRange.max;

  let resultHeaderBg = 'bg-blue-700';
  let resultBorder = 'border-blue-200 dark:border-blue-800';
  let resultBg = 'bg-blue-50/50 dark:bg-slate-900';

  if (isOutOfRange) {
    resultHeaderBg = 'bg-orange-600';
    resultBorder = 'border-orange-400 dark:border-orange-600';
    resultBg = 'bg-orange-50/50 dark:bg-orange-950/20';
  } else if (isHighDose) {
    resultHeaderBg = 'bg-amber-600';
    resultBorder = 'border-amber-300 dark:border-amber-700';
    resultBg = 'bg-amber-50/50 dark:bg-amber-950/20';
  }

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto pb-24 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 transition-colors">
      {/* ========================================================
          1. ENCABEZADO: NOMBRE + DESCRIPCIÓN 1-LÍNEA + INSTRUCCIONES PLEGABLE
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Droplets className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              Calculadora de Infusiones Continuas en Cuidados Críticos
            </h1>
          </div>
          {/* Descripción concisa de una línea */}
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
            Programación de bomba de infusión en mL/h y microgotas/min para drogas vasoactivas, inotrópicas y sedación.
          </p>
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
            <div className="mt-2.5 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-xs space-y-2 border border-slate-200/80 dark:border-slate-700/80 animate-in fade-in duration-150 leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                <strong>Objetivo clínico:</strong> Titulación dinámica y precisa de soporte vasoactivo (Noradrenalina, Dopamina, Dobutamina) para mantener meta hemodinámica (PAM &gt; 65 mmHg en shock séptico o índice cardíaco adecuado).
              </p>
              <p>
                <strong>Vía de infusión:</strong> Administrar preferentemente por catéter venoso central (CVC) para evitar necrosis tisular por extravasación. En emergencias por vía periférica gruesa sólo de forma transitoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          2. FORMULARIO DE INPUTS: UNIDADES VISIBLES + PASTILLAS + VALIDACIÓN
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3.5">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Selección de Protocolo e Infusión
          </h2>
        </div>

        {/* Variable Categórica: Fármaco / Protocolo (Botones tipo Pastilla, NO Dropdown) */}
        <div>
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-2">
            Fármaco Vasoactivo / Crítico
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {INFUSION_PROTOCOLS.map((p) => {
              const isSelected = selectedProtocol.id === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectProtocol(p)}
                  className={`p-2.5 rounded-lg border text-left transition-all min-h-[46px] ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-700 text-blue-950 dark:text-blue-100 ring-1 ring-blue-700 font-semibold'
                      : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-xs truncate">{p.drugName}</div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">{p.indication}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Peso del Paciente con Toggle kg/lb */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-blue-700" />
              Peso del Paciente
            </label>
            <div className="flex rounded border border-slate-300 dark:border-slate-600 p-0.5 bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => handleWeightUnitToggle('kg')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  weightUnit === 'kg'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                kg
              </button>
              <button
                type="button"
                onClick={() => handleWeightUnitToggle('lb')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  weightUnit === 'lb'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                lb
              </button>
            </div>
          </div>
          <div className="relative">
            <input
              type="number"
              step="0.5"
              min="1"
              max="250"
              value={weightInput || ''}
              onChange={(e) => handleWeightChange(parseFloat(e.target.value) || 0)}
              placeholder="70"
              className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 uppercase pointer-events-none">
              {weightUnit}
            </span>
          </div>
          {weightUnit === 'lb' && (
            <span className="text-[11px] text-slate-500 block mt-1">
              ≈ {effectiveWeightKg} kg
            </span>
          )}
        </div>

        {/* Dosis Deseada con Slider y Unidad Visible */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Dosis Deseada ({selectedProtocol.doseUnit})
            </label>
            <span className="text-xs font-extrabold text-blue-700 dark:text-blue-400 tabular-nums">
              {doseRate} {selectedProtocol.doseUnit}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="range"
              min={selectedProtocol.typicalDoseRange.min}
              max={selectedProtocol.typicalDoseRange.max}
              step={selectedProtocol.id === 'noradrenalina' ? 0.02 : 0.05}
              value={doseRate}
              onChange={(e) => setDoseRate(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />
            <div className="relative w-28">
              <input
                type="number"
                step="0.01"
                min="0.01"
                value={doseRate || ''}
                onChange={(e) => setDoseRate(parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1.5 text-xs font-bold border border-slate-300 dark:border-slate-700 rounded-md text-center bg-slate-50 dark:bg-slate-800"
              />
            </div>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400">
            <span>Mín: {selectedProtocol.typicalDoseRange.min}</span>
            <span>Inicio Habitual: {selectedProtocol.typicalDoseRange.initial}</span>
            <span>Máx: {selectedProtocol.typicalDoseRange.max}</span>
          </div>
        </div>

        {/* Dilución: Fármaco en mg y Solución en mL */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
            Preparación de la Mezcla (Dilución)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Fármaco Añadido:</span>
              <div className="relative">
                <input
                  type="number"
                  min="0.1"
                  value={drugAmountMg || ''}
                  onChange={(e) => setDrugAmountMg(parseFloat(e.target.value) || 0)}
                  className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-2.5 pr-8 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <span className="absolute right-2.5 top-2 text-xs font-bold text-slate-400 pointer-events-none">
                  mg
                </span>
              </div>
            </div>

            <div>
              <span className="text-[11px] text-slate-500 block mb-0.5">Solución Infusora (DAD 5% o SSN):</span>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  value={solutionVolumeMl || ''}
                  onChange={(e) => setSolutionVolumeMl(parseFloat(e.target.value) || 0)}
                  className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-2.5 pr-8 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <span className="absolute right-2.5 top-2 text-xs font-bold text-slate-400 pointer-events-none">
                  mL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. PANEL DE RESULTADO: SEPARADO + TIEMPO REAL + COLOR-CODING + VALIDACIÓN INLINE
         ======================================================== */}
      <section className={`rounded-xl border-2 ${resultBorder} ${resultBg} shadow-sm overflow-hidden transition-all`}>
        <div className={`${resultHeaderBg} text-white px-4 py-2 flex items-center justify-between`}>
          <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            Programación de Bomba de Infusión
          </span>
          <span className="text-xs text-blue-100 font-medium">
            {isInputValid ? `${effectiveWeightKg} kg` : 'Pendiente'}
          </span>
        </div>

        <div className="p-4 space-y-3">
          {/* Validación Inline */}
          {!isInputValid ? (
            <div className="p-4 text-center space-y-1.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
              <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto" />
              <div className="text-sm font-bold">Datos Incompletos</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Complete el peso del paciente, dosis y dilución para programar la velocidad de infusión.
              </p>
            </div>
          ) : result ? (
            <>
              <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3 bg-white dark:bg-slate-900 p-3.5 rounded-lg border">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Velocidad en Bomba:
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 tabular-nums tracking-tight">
                      {result.rateMlPerHour}
                    </span>
                    <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                      mL / hora
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block font-medium">Goteo Microgotas</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white tabular-nums">
                    {result.microdropsPerMin} gtt/min
                  </span>
                  <span className="text-[10px] text-slate-400 block">(1 mL = 60 microgotas)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[11px]">Concentración Resultante:</span>
                  <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                    {result.finalConcentrationMcgPerMl} mcg/mL
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Dosis en Curso:</span>
                  <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                    {doseRate} {selectedProtocol.doseUnit}
                  </span>
                </div>
              </div>

              {/* Alerta de Dosis Fuera de Rango (Naranja) */}
              {isOutOfRange && (
                <div className="p-3 bg-orange-50 dark:bg-orange-950/40 border border-orange-400 dark:border-orange-600 text-orange-950 dark:text-orange-100 rounded-xl text-xs flex items-start gap-2.5 animate-in fade-in duration-200 shadow-xs">
                  <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-orange-900 dark:text-orange-200 uppercase tracking-wide text-[11px]">
                        ⚠️ Alerta: Dosis fuera de rango
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-200 text-orange-900 dark:bg-orange-900/70 dark:text-orange-200 border border-orange-300 dark:border-orange-700">
                        Seguridad Clínica
                      </span>
                    </div>
                    <p className="text-xs text-orange-950 dark:text-orange-100 leading-relaxed font-medium">
                      El ritmo programado ({doseRate} {selectedProtocol.doseUnit}) se encuentra fuera del rango de titulación estándar ({selectedProtocol.typicalDoseRange.min} - {selectedProtocol.typicalDoseRange.max} {selectedProtocol.doseUnit}).
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>
      </section>

      {/* ========================================================
          4. BLOQUE DE INTERPRETACIÓN: TABLA DE TITULACIÓN Y CONDUCTA
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
          <FileText className="w-4 h-4 text-blue-700" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Interpretación Hemodinámica y Conducta Clínica
          </h3>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden text-xs">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold">
              <tr>
                <th className="py-2 px-3">Nivel de Titulación</th>
                <th className="py-2 px-3">Efecto Fisiológico</th>
                <th className="py-2 px-3">Conducta de Monitorización</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  Dosis Baja (Inicio)
                </td>
                <td className="py-2 px-3 font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  {selectedProtocol.typicalDoseRange.min} – {selectedProtocol.typicalDoseRange.initial}
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Respuesta alfa/beta moderada. Titular cada 5-10 minutos según presión arterial media (PAM objetivo &gt; 65).
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  Dosis Media / Terapéutica
                </td>
                <td className="py-2 px-3 font-mono text-blue-700 dark:text-blue-400 font-bold">
                  {selectedProtocol.typicalDoseRange.initial} – {(selectedProtocol.typicalDoseRange.max * 0.6).toFixed(2)}
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Control estricto de gasto urinario (&gt;0.5 mL/kg/h), lactato sérico y perfusión periférica.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  Dosis Alta / Refractaria
                </td>
                <td className="py-2 px-3 font-mono text-rose-700 dark:text-rose-400 font-bold">
                  &gt; {(selectedProtocol.typicalDoseRange.max * 0.6).toFixed(2)} {selectedProtocol.doseUnit}
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Riesgo elevado de isquemia periférica y arritmias. Asociar vasopresor de segunda línea y línea arterial invasiva.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Consejos clínicos específicos del protocolo */}
        <div className="p-3 bg-blue-50/50 dark:bg-blue-950/30 rounded-lg border border-blue-200/60 dark:border-blue-800/60 text-xs text-blue-950 dark:text-blue-200 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Recomendación UCI:</strong> {selectedProtocol.clinicalTips}
          </p>
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

        {/* Fórmula Utilizada */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
            Fórmulas Matemáticas de Infusión:
          </span>
          <div className="font-mono text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800 space-y-1">
            <div>
              • <strong>Concentración (mcg/mL):</strong> [Fármaco (mg) × 1000] ÷ Volumen de Solución (mL)
            </div>
            <div>
              • <strong>Velocidad Bomba (mL/h):</strong> [Dosis (mcg/kg/min) × Peso (kg) × 60 min/h] ÷ Concentración (mcg/mL)
            </div>
            <div>
              • <strong>Microgotas / min:</strong> Velocidad Bomba (mL/h) × 1 (en equipo microgotero de 60 gtt/mL)
            </div>
          </div>
        </div>

        {/* Fuentes y Referencias */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
            Guías Clínicas de Soporte Vasoactivo:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">1.</span>
              <span>
                <strong>Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2024</strong> — Society of Critical Care Medicine (SCCM) & ESICM.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">2.</span>
              <span>
                <strong>American Heart Association (AHA) ACLS Guidelines</strong> for Vasopressor and Inotropic Support in Cardiogenic Shock.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">3.</span>
              <span>
                <strong>Listado Oficial de Medicamentos y Guía de Terapia Intensiva SRS 2025</strong> — Superintendencia de Regulación Sanitaria.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
