export interface VaccineItem {
  id: string;
  name: string;
  shortName: string;
  route: string;
  dosage: string;
  targetAge: string;
  targetDiseases: string;
  officialCompositionSRS2025: string;
  clinicalNotes: string;
}

export const SRS_VACCINES: VaccineItem[] = [
  {
    id: 'bcg',
    name: 'Vacuna BCG (Bacilo Calmette-Guérin)',
    shortName: 'BCG',
    route: 'Intradérmica (deltoides derecho)',
    dosage: '0.1 mL (dosis única al nacer)',
    targetAge: 'Recién nacidos antes del alta hospitalaria (peso > 2000 g)',
    targetDiseases: 'Tuberculosis meníngea y miliar (formas graves)',
    officialCompositionSRS2025: 'Cada 0.1 mL contiene entre 2x10⁵ y 8x10⁵ C.F.U de la Cepa Viva Atenuada Mycobacterium bovis.',
    clinicalNotes: 'Deja pápula que evoluciona a mácula, nódulo y cicatriz queloide característica en 6-12 semanas. No frotar ni aplicar antisépticos.'
  },
  {
    id: 'hepb-pediatrica',
    name: 'Vacuna Hepatitis B Pediátrica',
    shortName: 'Hep B Monovalente',
    route: 'Intramuscular (vasto lateral del muslo)',
    dosage: '0.5 mL (10 mcg antígeno HBsAg)',
    targetAge: 'Primeras 12 a 24 horas de vida',
    targetDiseases: 'Hepatitis B y prevención de transmisión vertical madre-hijo',
    officialCompositionSRS2025: 'Cada 0.5 mL contiene 10 mcg de antígeno de superficie purificado de la Hepatitis B recombinante.',
    clinicalNotes: 'Fundamental administrar en las primeras 12 horas si la madre es HBsAg positiva junto con gammaglobulina anti-hepatitis B.'
  },
  {
    id: 'pentavalente',
    name: 'Vacuna Pentavalente (DTP + HepB + Hib)',
    shortName: 'Pentavalente',
    route: 'Intramuscular profunda (vasto externo muslo)',
    dosage: '0.5 mL a los 2, 4 y 6 meses',
    targetAge: '2 meses, 4 meses y 6 meses de vida',
    targetDiseases: 'Difteria, Tétanos, Tos Ferina, Hepatitis B e Infecciones invasivas por Haemophilus influenzae tipo b',
    officialCompositionSRS2025: 'Toxoide diftérico ≥30 UI, Toxoide tetánico ≥60 UI, Bordetella pertussis ≥4 UI, HBsAg ≥12.5 mcg, Hib PRP conjugado 11 mcg.',
    clinicalNotes: 'Fiebre y dolor local frecuente en las primeras 48h; tratar con acetaminofén. Si convulsión febril previa, vigilar.'
  },
  {
    id: 'rotavirus',
    name: 'Vacuna contra Rotavirus (Atenuada Monovalente)',
    shortName: 'Rotavirus Oral',
    route: 'Oral (1.5 mL en aplicador bucal)',
    dosage: '1.5 mL a los 2 y 4 meses',
    targetAge: '1ra dosis: 2 meses (máx 14 sem 6 días); 2da dosis: 4 meses (máx 8 meses 0 días)',
    targetDiseases: 'Gastroenteritis aguda deshidratante severa por Rotavirus',
    officialCompositionSRS2025: 'Rotavirus vivos atenuados humanos, Cepa G1 P[8] RIX4414 no menos de 10^6.0 DICC50.',
    clinicalNotes: 'No repetir si el lactante regurgita parte de la dosis. Contraindicada en antecedentes de invaginación intestinal o inmunodeficiencia combinada grave.'
  },
  {
    id: 'ipv',
    name: 'Vacuna Antipoliomielítica Inactivada (IPV Salk)',
    shortName: 'IPV (Polio Inyectable)',
    route: 'Intramuscular (vasto lateral)',
    dosage: '0.5 mL a los 2 y 4 meses',
    targetAge: '2 meses y 4 meses de edad',
    targetDiseases: 'Poliomielitis (parálisis flácida infantil por poliovirus tipos 1, 2 y 3)',
    officialCompositionSRS2025: 'Poliovirus Tipo 1 (Mahoney) 40 U, Tipo 2 (MEF-1) 8 U, Tipo 3 (Saukett) 32 U de antígeno D.',
    clinicalNotes: 'Virus inactivado: 100% segura, imposible que provoque parálisis asociada a la vacuna; ideal para erradicación global.'
  },
  {
    id: 'opv',
    name: 'Vacuna Antipoliomielítica Oral Bivalente (bOPV Sabin)',
    shortName: 'bOPV (Gotas Orales)',
    route: 'Oral (2 gotas)',
    dosage: '2 gotas a los 6 meses y refuerzos a 18 meses y 4 años',
    targetAge: '6 meses, 18 meses y 4 años',
    targetDiseases: 'Poliomielitis (inmunidad mucosal secretora de rebaño)',
    officialCompositionSRS2025: 'Suspensión virus vivo atenuado Cepa Sabin Tipo 1 (≥10^6.0 DICC50) y Tipo 3 (≥10^5.8 DICC50).',
    clinicalNotes: 'Estimula IgA secretora intestinal que previene la transmisión fecal-oral del virus salvaje en la comunidad.'
  },
  {
    id: 'neumococo-pcv13',
    name: 'Vacuna Neumocócica Conjugada (PCV13)',
    shortName: 'Neumococo Conjugada',
    route: 'Intramuscular (muslo en lactantes, deltoides en mayores)',
    dosage: '0.5 mL a los 2, 4 y refuerzo a los 12 meses',
    targetAge: '2 meses, 4 meses y refuerzo a los 12 meses (esquema 2+1)',
    targetDiseases: 'Enfermedad neumocócica invasiva, bacteriemia, meningitis, neumonía y OMA por 13 serotipos de S. pneumoniae',
    officialCompositionSRS2025: 'Polisacáridos serotipos 1, 3, 4, 5, 6A, 7F, 9V, 14, 18C, 19A, 19F, 23F (2.2 mcg c/u) + 6B (4.4 mcg) conjugados con CRM197.',
    clinicalNotes: 'Protege contra serotipos altamente invasivos causantes de neumonía bacteriana condensante y bacteriemia oculta.'
  },
  {
    id: 'spr',
    name: 'Vacuna Triple Viral (Sarampión, Parotiditis, Rubeola)',
    shortName: 'SPR',
    route: 'Subcutánea (brazo deltoides)',
    dosage: '0.5 mL a los 12 meses y a los 4 años',
    targetAge: '12 meses (1ª dosis) y 4 años (2ª dosis)',
    targetDiseases: 'Sarampión, Parotiditis (paperas) y Rubeola congénita',
    officialCompositionSRS2025: 'Cepas vivas atenuadas: ≥1000 DICC50 Sarampión, ≥5000 DICC50 Parotiditis y ≥1000 DICC50 Rubeola.',
    clinicalNotes: 'Efectos secundarios tardíos entre el día 7 y 12 post-vacunación: exantema morbiliforme leve y febrícula autolimitada.'
  },
  {
    id: 'dpt',
    name: 'Vacuna DPT (Difteria, Pertussis celular, Tétanos)',
    shortName: 'DPT Refuerzo',
    route: 'Intramuscular',
    dosage: '0.5 mL de refuerzo',
    targetAge: '18 meses (1er refuerzo) y 4 años (2do refuerzo)',
    targetDiseases: 'Difteria, Tétanos y Tos Ferina',
    officialCompositionSRS2025: 'Toxoide diftérico ≤25 Lf, Bordetella pertussis ≤16 OU, Toxoide tetánico ≤5 Lf.',
    clinicalNotes: 'Mantener inmunidad adquirida con la pentavalente antes del ingreso a la escuela primaria.'
  },
  {
    id: 'tdap',
    name: 'Vacuna Tdap (Toxoide Tetánico, Diftérico y Tos Ferina Acelular)',
    shortName: 'Tdap Acelular',
    route: 'Intramuscular (deltoides)',
    dosage: '0.5 mL dosis única en cada embarazo',
    targetAge: 'Embarazadas a partir de la semana 20 de gestación (ideal sem 27 a 36)',
    targetDiseases: 'Tos ferina neonatal (pertussis) y tétanos neonatal',
    officialCompositionSRS2025: 'Toxoide diftérico ≥2 UI, Toxoide tetánico ≥20 UI, Antígenos B. pertussis (Toxoide 8 mcg + FHA 8 mcg + Pertactina 2.5 mcg).',
    clinicalNotes: 'Pasa anticuerpos transplacentarios maternos de alta concentración para proteger al recién nacido en sus primeros meses de vida.'
  },
  {
    id: 'vph',
    name: 'Vacuna contra Virus del Papiloma Humano (VPH Tetravalente)',
    shortName: 'VPH (Cáncer Cervicouterino)',
    route: 'Intramuscular (deltoides)',
    dosage: '0.5 mL (esquema de 1 o 2 dosis)',
    targetAge: 'Niñas y niños de 9 a 14 años',
    targetDiseases: 'Cáncer de cuello uterino, verrugas anogenitales y cáncer orofaríngeo',
    officialCompositionSRS2025: 'Proteína L1 VPH Tipo 6 (20 mcg), Tipo 11 (40 mcg), Tipo 16 (40 mcg) y Tipo 18 (20 mcg).',
    clinicalNotes: 'Máxima eficacia preventiva si se administra antes del inicio de la actividad sexual.'
  },
  {
    id: 'varicela',
    name: 'Vacuna contra la Varicela',
    shortName: 'Varicela',
    route: 'Subcutánea o Intramuscular',
    dosage: '0.5 mL (1 dosis a partir de 12 meses)',
    targetAge: '12 a 15 meses de edad',
    targetDiseases: 'Varicela y sus complicaciones (sobreinfección bacteriana por S. pyogenes, encefalitis)',
    officialCompositionSRS2025: 'Virus vivo atenuado de la Varicela (cepa OKA) ≥1350 UFP.',
    clinicalNotes: 'Reduce en más del 95% las formas graves y hospitalizaciones por varicela infantil.'
  },
  {
    id: 'hepatitis-a',
    name: 'Vacuna contra la Hepatitis A Pediátrica',
    shortName: 'Hepatitis A',
    route: 'Intramuscular (deltoides o muslo)',
    dosage: '0.5 mL',
    targetAge: 'A partir de los 12 a 15 meses de edad',
    targetDiseases: 'Hepatitis A aguda y fallo hepático fulminante',
    officialCompositionSRS2025: 'Virus inactivado de la Hepatitis A cepa GBM (80 U pediátrica).',
    clinicalNotes: 'Excelente perfil de seguridad e inmunogenicidad protectora a largo plazo.'
  }
];
