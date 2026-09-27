import React from 'react';

interface MedFormulaLogoProps {
  variant?: 'full' | 'icon' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const MedFormulaLogo: React.FC<MedFormulaLogoProps> = ({
  variant = 'full',
  size = 'lg',
  className = '',
  showSubtitle = true
}) => {
  // Dimensions mapping
  const iconDimensions = {
    sm: { width: 36, height: 36 },
    md: { width: 56, height: 56 },
    lg: { width: 88, height: 88 },
    xl: { width: 112, height: 112 }
  }[size];

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm'
  }[size];

  // The emblem SVG based on the user's official logo:
  // - Mortar bowl with rim
  // - Slanted pestle with medical cross (+)
  // - Hexagonal molecular chemical bonds & node junctions
  const Emblem = (
    <svg
      viewBox="0 0 160 160"
      width={iconDimensions.width}
      height={iconDimensions.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="MedFormula Logo Emblem"
    >
      {/* Defs for clinical gradients if desired */}
      <defs>
        <linearGradient id="medFormulaGrad" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e40af" /> {/* blue-800 */}
          <stop offset="60%" stopColor="#1d4ed8" /> {/* blue-700 */}
          <stop offset="100%" stopColor="#0369a1" /> {/* sky-700 */}
        </linearGradient>
      </defs>

      {/* 1. THE MORTAR (Mortero) */}
      {/* Left top rim */}
      <path
        d="M 36 64 L 84 64"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Right top rim */}
      <path
        d="M 116 64 L 128 64"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Mortar bowl outline */}
      <path
        d="M 37 64 C 38 98, 62 124, 88 124 C 104 124, 120 112, 127 64"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2. THE PESTLE (Pilón con cruz médica +) */}
      <g transform="translate(108, 54) rotate(26)">
        {/* Rounded pestle body */}
        <path
          d="M -11 -34 C -11 -41, 11 -41, 11 -34 L 11 16 L -11 16 Z"
          stroke="currentColor"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Medical Cross (+) aligned inside top head */}
        <path
          d="M 0 -38 L 0 -26 M -6 -32 L 6 -32"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>

      {/* 3. CHEMICAL MOLECULAR STRUCTURE (Moléculas hexagonales y enlaces) */}
      {/* Hexagon 1: Top right (near pestle) */}
      {/* Center ~ (115, 75), r ~ 9 */}
      <polygon
        points="115,66 122,70 122,79 115,83 108,79 108,70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Hexagon 2: Center hexagon */}
      {/* Center ~ (98, 88), r ~ 9 */}
      <polygon
        points="98,79 105,83 105,92 98,96 91,92 91,83"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Connecting bond between Hexagon 1 and 2 */}
      <line x1="108" y1="79" x2="105" y2="83" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Hexagon 3: Lower right */}
      {/* Center ~ (118, 98), r ~ 9 */}
      <polygon
        points="118,89 125,93 125,102 118,106 111,102 111,93"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Connecting bond between Hexagon 2 and 3 */}
      <line x1="105" y1="92" x2="111" y2="93" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Hexagon 4: Bottom center */}
      {/* Center ~ (98, 118), r ~ 7 */}
      <polygon
        points="98,111 104,114 104,121 98,124 92,121 92,114"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />

      {/* Bond from Hexagon 2 down to Hexagon 4 */}
      <line x1="98" y1="96" x2="98" y2="111" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />

      {/* Left branch with solid chemical node dot */}
      <line x1="91" y1="92" x2="77" y2="100" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="76" cy="101" r="4.2" fill="currentColor" />

      {/* Secondary node vertices for molecular look */}
      <circle cx="108" cy="70" r="2.2" fill="currentColor" />
      <circle cx="122" cy="79" r="2.2" fill="currentColor" />
      <circle cx="125" cy="102" r="2.2" fill="currentColor" />
      <circle cx="98" cy="124" r="2.2" fill="currentColor" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`text-blue-800 dark:text-blue-400 inline-flex items-center justify-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="text-blue-800 dark:text-blue-400">
          {Emblem}
        </div>
        <div className="flex flex-col">
          <div className={`font-bold ${titleSizes} tracking-tight text-slate-900 dark:text-white leading-tight`}>
            <span>Med</span>
            <span className="text-blue-700 dark:text-blue-400">Formula</span>
          </div>
          {showSubtitle && (
            <span className={`text-slate-500 dark:text-slate-400 font-medium ${subtitleSizes} tracking-wide`}>
              Formulación Médica Digital
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default 'full' variant: stacked emblem + title + subtitle
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Icon Emblem in Clinical Blue */}
      <div className="text-blue-800 dark:text-blue-400 filter drop-shadow-xs mb-3">
        {Emblem}
      </div>

      {/* Brand Title */}
      <h1 className={`font-bold ${titleSizes} tracking-tight text-slate-900 dark:text-white leading-none`}>
        <span className="text-blue-900 dark:text-blue-300">Med</span>
        <span className="text-blue-700 dark:text-blue-400">Formula</span>
      </h1>

      {/* Subtitle */}
      {showSubtitle && (
        <p className={`text-slate-600 dark:text-slate-400 font-medium ${subtitleSizes} tracking-wide mt-1.5`}>
          Formulación Médica Digital
        </p>
      )}
    </div>
  );
};
