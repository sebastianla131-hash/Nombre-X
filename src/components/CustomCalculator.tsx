import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Copy,
  Check,
  Share2,
  Sparkles,
  RotateCcw,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  FileText,
  Scale,
  Clock,
  Pill
} from 'lucide-react';
import { PatientProfile } from '../types';
import { formatRouteLabel } from '../utils/calculator';

interface CustomCalculatorProps {
  patient: PatientProfile;
  onUpdatePatient: (p: PatientProfile) => void;
}

export const CustomCalculator: React.FC<CustomCalculatorProps> = ({
  patient,
  onUpdatePatient
}) => {
  // Collapsible instructions
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  // Unit toggle for weight
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [weightInput, setWeightInput] = useState<number>(patient.weightKg || 14);

  // Form states
  const [drugName, setDrugName] = useState<string>('Medicamento');
  const [route, setRoute] = useState<string>('VO');
  const [doseType, setDoseType] = useState<'perDay' | 'perDose'>('perDay');
  const [doseMgKg, setDoseMgKg] = useState<number>(50);
  const [concMg, setConcMg] = useState<number>(250);
  const [concMl, setConcMl] = useState<number>(5);
  const [intervalHours, setIntervalHours] = useState<number>(8);
  const [durationDays, setDurationDays] = useState<number>(7);
  const [copied, setCopied] = useState<boolean>(false);

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

  const frequencyPerDay = Math.round(24 / Math.max(1, intervalHours));

  // Validation
  const isInputValid = effectiveWeightKg > 0 && doseMgKg > 0 && concMg > 0 && concMl > 0;

  // Real-time calculation
  const result = useMemo(() => {
    if (!isInputValid) return null;

    let singleDoseMg = 0;
    let dailyTotalMg = 0;

    if (doseType === 'perDose') {
      singleDoseMg = effectiveWeightKg * doseMgKg;
      dailyTotalMg = singleDoseMg * frequencyPerDay;
    } else {
      dailyTotalMg = effectiveWeightKg * doseMgKg;
      singleDoseMg = dailyTotalMg / frequencyPerDay;
    }

    const mgPerMl = concMg / Math.max(0.001, concMl);
    const singleDoseMl = Number((singleDoseMg / mgPerMl).toFixed(2));
    const totalVolumeMl = Number((singleDoseMl * frequencyPerDay * durationDays).toFixed(1));

    const routeInfo = formatRouteLabel(route);
    const prescription = `Rp. ${drugName.toUpperCase()}\nPresentación: ${concMg} mg / ${concMl} mL\nVía de Administración: ${routeInfo.formatted}\nIndicación: Administrar ${singleDoseMl} mL (${Math.round(singleDoseMg)} mg) cada ${intervalHours} horas por ${routeInfo.formatted} durante ${durationDays} días.\n(Consumo total aproximado: ${totalVolumeMl} mL)\n_Generado en Formulario Clínico MD_`;

    return {
      singleDoseMg: Number(singleDoseMg.toFixed(1)),
      dailyTotalMg: Number(dailyTotalMg.toFixed(1)),
      singleDoseMl,
      totalVolumeMl,
      prescription,
      routeInfo
    };
  }, [isInputValid, effectiveWeightKg, doseType, doseMgKg, concMg, concMl, frequencyPerDay, intervalHours, durationDays, drugName, route]);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.prescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    if (!result) return;
    const text = encodeURIComponent(`*Receta Médica*\n${result.prescription}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto pb-24 text-slate-900 dark:text-slate-100">
      {/* ========================================================
          1. ENCABEZADO: NOMBRE + DESCRIPCIÓN 1-LÍNEA + INSTRUCCIONES PLEGABLE
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calculator className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              Calculadora Libre de Dosificación Farmacológica
            </h1>
          </div>
          {/* Descripción concisa de una línea */}
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
            Cálculo ponderal libre de posología, volumen por toma y consumo total para cualquier principio activo.
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
                <strong>Cuándo utilizar:</strong> Para prescribir fármacos no incluidos en los protocolos estándar o con formulaciones magistrales. Permite ingresar la dosis prescrita en mg/kg/día o mg/kg/dosis y la concentración real disponible en farmacia.
              </p>
              <p>
                <strong>Precaución de seguridad:</strong> Verifique siempre que la dosis por toma y diaria no superen la dosis máxima recomendada para adultos según la ficha técnica del producto.
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
            Parámetros Farmacológicos y de Paciente
          </h2>
        </div>

        {/* Nombre del Fármaco */}
        <div>
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
            Nombre del Medicamento
          </label>
          <input
            type="text"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            placeholder="Ej. Cefalexina o Claritromicina"
            className="w-full text-sm font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        {/* Vía de Administración */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Vía de Administración:
            </label>
            <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400">
              {formatRouteLabel(route).formatted}
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            {[
              { id: 'VO', label: 'VO (Oral)' },
              { id: 'IV', label: 'IV (Intravenosa)' },
              { id: 'IM', label: 'IM (Intramuscular)' },
              { id: 'SC', label: 'SC (Subcutánea)' },
              { id: 'VR', label: 'VR (Rectal)' },
              { id: 'INH', label: 'INH (Inhalatoria)' }
            ].map((r) => {
              const isSelected = route === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRoute(r.id)}
                  className={`py-1.5 px-2 rounded-lg border text-xs font-bold transition-all text-center cursor-pointer ${
                    isSelected
                      ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {r.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Peso del Paciente con Toggle kg/lb */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-blue-700" />
              Peso Corporal del Paciente
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
              min="0.5"
              max="250"
              value={weightInput || ''}
              onChange={(e) => handleWeightChange(parseFloat(e.target.value) || 0)}
              placeholder="Ej. 14"
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

        {/* Dosis (mg/kg) con Selector Pastilla: /día vs /dosis */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Dosis Prescrita por Kilo
            </label>
            {/* Botones tipo pastilla para variable categórica */}
            <div className="flex rounded-lg border border-slate-300 dark:border-slate-600 p-0.5 bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setDoseType('perDay')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  doseType === 'perDay'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                mg/kg/día
              </button>
              <button
                type="button"
                onClick={() => setDoseType('perDose')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  doseType === 'perDose'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                mg/kg/dosis
              </button>
            </div>
          </div>
          <div className="relative">
            <input
              type="number"
              step="1"
              min="0.5"
              value={doseMgKg || ''}
              onChange={(e) => setDoseMgKg(parseFloat(e.target.value) || 0)}
              placeholder="Ej. 50"
              className="w-full text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-24 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 pointer-events-none">
              {doseType === 'perDay' ? 'mg/kg/día' : 'mg/kg/toma'}
            </span>
          </div>
        </div>

        {/* Concentración Farmacéutica: mg y mL con unidades fijas visibles */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
            Concentración Disponible en Frasco (mg en mL)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <input
                type="number"
                step="10"
                min="1"
                value={concMg || ''}
                onChange={(e) => setConcMg(parseFloat(e.target.value) || 0)}
                placeholder="250"
                className="w-full text-sm font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 pointer-events-none">
                mg
              </span>
            </div>

            <div className="relative">
              <input
                type="number"
                step="1"
                min="0.5"
                value={concMl || ''}
                onChange={(e) => setConcMl(parseFloat(e.target.value) || 0)}
                placeholder="5"
                className="w-full text-sm font-bold bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500 pointer-events-none">
                mL
              </span>
            </div>
          </div>
          <span className="text-[11px] text-slate-500 block mt-1">
            Concentración calculada: <strong>{concMg && concMl ? (concMg / concMl).toFixed(1) : 0} mg/mL</strong>
          </span>
        </div>

        {/* Intervalo y Duración con Botones Pastilla */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
              Intervalo entre Tomas
            </label>
            <div className="grid grid-cols-4 gap-1">
              {[6, 8, 12, 24].map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setIntervalHours(h)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all min-h-[40px] ${
                    intervalHours === h
                      ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
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
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
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
      <section className="bg-blue-50/50 dark:bg-slate-900 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-sm overflow-hidden">
        <div className="bg-blue-700 text-white px-4 py-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            Volumen y Dosificación Resultante
          </span>
          <span className="text-xs text-blue-100 font-medium">
            {isInputValid ? `${effectiveWeightKg} kg` : 'Pendiente'}
          </span>
        </div>

        <div className="p-4 space-y-3">
          {/* Validación Inline: Si falta un campo requerido */}
          {!isInputValid ? (
            <div className="p-4 text-center space-y-1.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
              <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto" />
              <div className="text-sm font-bold">Parámetros Incompletos</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Complete el peso del paciente, dosis prescrita y concentración del frasco para calcular el volumen.
              </p>
            </div>
          ) : result ? (
            <>
              <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3 bg-white dark:bg-slate-900 p-3.5 rounded-lg border">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Volumen a Administrar por Toma:
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 tabular-nums">
                      {result.singleDoseMl}
                    </span>
                    <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                      mL
                    </span>
                    <span className="text-xs text-slate-500 font-semibold ml-1">
                      ({Math.round(result.singleDoseMg)} mg)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block font-medium">Frecuencia</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Cada {intervalHours} horas
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    ({frequencyPerDay} tomas al día)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[11px]">Dosis Total:</span>
                  <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                    {result.dailyTotalMg} mg/día
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Consumo ({durationDays}d):</span>
                  <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                    ≈ {result.totalVolumeMl} mL
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Vía:</span>
                  <span className="font-bold text-blue-700 dark:text-blue-400">
                    {formatRouteLabel(route).abbr}
                  </span>
                </div>
              </div>

              {/* Previsualización de la Receta Médica */}
              <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Receta Médica Generada (Rp.)
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    {formatRouteLabel(route).formatted}
                  </span>
                </div>
                <pre className="text-xs font-mono text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded border border-slate-200/80 dark:border-slate-700/80">
                  {result.prescription}
                </pre>
              </div>

              {/* Botones de Acción */}
              <div className="pt-1 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 py-2.5 px-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs min-h-[44px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-blue-200" />
                      <span>¡Fórmula Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Prescripción</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
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
          4. BLOQUE DE INTERPRETACIÓN: TABLA DE RANGOS Y CONDUCTA CLÍNICA
         ======================================================== */}
      <section className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
          <FileText className="w-4 h-4 text-blue-700" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Interpretación y Conducta Posológica
          </h3>
        </div>

        <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden text-xs">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold">
              <tr>
                <th className="py-2 px-3">Nivel Posológico</th>
                <th className="py-2 px-3">Margen Clínico</th>
                <th className="py-2 px-3">Conducta de Seguridad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  Dosis Estándar
                </td>
                <td className="py-2 px-3 font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  25 – 50 mg/kg/día
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Rango habitual para la mayoría de infecciones y sintomáticos. Evaluar tolerancia gastrointestinal.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  Dosis Alta / Severa
                </td>
                <td className="py-2 px-3 font-mono text-amber-700 dark:text-amber-400 font-bold">
                  80 – 100 mg/kg/día
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  Reservada para focos profundos o patógenos resistentes. Vigilar función hepatorrenal.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                  Límite Adulto
                </td>
                <td className="py-2 px-3 font-mono text-rose-700 dark:text-rose-400 font-bold">
                  Tope Ficha Técnica
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-300">
                  En niños con obesidad o peso elevado, no sobrepasar la dosis máxima absoluta prescrita en adultos.
                </td>
              </tr>
            </tbody>
          </table>
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
            Fórmula Matemática Aplicada:
          </span>
          <div className="font-mono text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800 space-y-1">
            <div>
              • <strong>Dosis por Toma (mg):</strong> {doseType === 'perDose' ? 'Peso (kg) × Dosis/kg/toma' : '[Peso (kg) × Dosis/kg/día] ÷ Tomas al día'}
            </div>
            <div>
              • <strong>Volumen por Toma (mL):</strong> Dosis por Toma (mg) ÷ Concentración ({concMg} mg / {concMl} mL)
            </div>
            <div>
              • <strong>Volumen Total ({durationDays} días):</strong> Volumen por Toma (mL) × {frequencyPerDay} tomas/día × {durationDays} días
            </div>
          </div>
        </div>

        {/* Fuentes y Referencias */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1.5">
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
            Bases Farmacológicas y Guías de Referencia:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">1.</span>
              <span>
                <strong>Goodman & Gilman: Las Bases Farmacológicas de la Terapéutica</strong> — 14ª Edición, McGraw-Hill.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">2.</span>
              <span>
                <strong>The Harriet Lane Handbook: A Manual for Pediatric House Officers</strong> — 22nd Edition, Johns Hopkins Hospital.
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">3.</span>
              <span>
                <strong>Guía Oficial de Medicamentos SRS 2025 / INVIMA / Ficha Técnica AEMPS</strong>.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
