import React from 'react';
import { Pill, Activity, Droplets, Calculator, Star } from 'lucide-react';

export type TabType = 'drugs' | 'renal' | 'infusions' | 'custom' | 'favorites';

interface BottomNavProps {
  activeTab: TabType | string | null;
  onTabChange: (tab: TabType) => void;
  favoritesCount: number;
}

interface TabItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  activeColor: string;
  activeBg: string;
  hoverColor: string;
  badgeBg: string;
  fillOnActive?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  favoritesCount
}) => {
  const tabs: TabItem[] = [
    {
      id: 'drugs',
      label: 'Fármacos',
      icon: Pill,
      activeColor: 'text-blue-600 dark:text-blue-400',
      activeBg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-900/60',
      hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400',
      badgeBg: 'bg-blue-600',
    },
    {
      id: 'renal',
      label: 'Ajuste Renal',
      icon: Activity,
      activeColor: 'text-purple-600 dark:text-purple-400',
      activeBg: 'bg-purple-50 dark:bg-purple-950/60 border-purple-200/60 dark:border-purple-900/60',
      hoverColor: 'hover:text-purple-600 dark:hover:text-purple-400',
      badgeBg: 'bg-purple-600',
    },
    {
      id: 'infusions',
      label: 'Infusiones',
      icon: Droplets,
      activeColor: 'text-cyan-600 dark:text-cyan-400',
      activeBg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200/60 dark:border-cyan-900/60',
      hoverColor: 'hover:text-cyan-600 dark:hover:text-cyan-400',
      badgeBg: 'bg-cyan-600',
    },
    {
      id: 'custom',
      label: 'Calc Libre',
      icon: Calculator,
      activeColor: 'text-emerald-600 dark:text-emerald-400',
      activeBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-900/60',
      hoverColor: 'hover:text-emerald-600 dark:hover:text-emerald-400',
      badgeBg: 'bg-emerald-600',
    },
    {
      id: 'favorites',
      label: 'Favoritos',
      icon: Star,
      badge: favoritesCount,
      activeColor: 'text-amber-500 dark:text-amber-400',
      activeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-900/60',
      hoverColor: 'hover:text-amber-500 dark:hover:text-amber-400',
      badgeBg: 'bg-amber-500',
      fillOnActive: true,
    }
  ];

  return (
    <nav className="sticky bottom-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 transition-colors shrink-0 shadow-lg">
      <div className="grid grid-cols-5 items-center h-15 max-w-lg mx-auto px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-all relative cursor-pointer group"
              type="button"
            >
              {/* Contenedor del Icono con fondo coloreado al estar activo */}
              <div
                className={`relative px-2.5 py-1 rounded-xl transition-all duration-200 flex items-center justify-center ${
                  isActive
                    ? `${tab.activeBg} ${tab.activeColor} border shadow-2xs scale-105`
                    : `text-slate-400 dark:text-slate-500 ${tab.hoverColor} group-hover:scale-105`
                }`}
              >
                <Icon
                  className={`w-4.5 h-4.5 transition-transform ${
                    isActive
                      ? `stroke-[2.3] ${tab.fillOnActive ? 'fill-amber-400 dark:fill-amber-500' : ''}`
                      : 'stroke-[1.7]'
                  }`}
                />

                {/* Badge de contador con animación */}
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span
                    className={`absolute -top-1.5 -right-1.5 ${tab.badgeBg} text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs animate-in zoom-in-50 duration-150`}
                  >
                    {tab.badge}
                  </span>
                )}
              </div>

              {/* Etiqueta de texto coloreada */}
              <span
                className={`text-[10px] tracking-tight mt-0.5 whitespace-nowrap transition-colors ${
                  isActive
                    ? `${tab.activeColor} font-bold`
                    : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 font-medium'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
