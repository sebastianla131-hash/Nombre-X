import React from 'react';
import { Pill, Activity, Droplets, Calculator, Star } from 'lucide-react';

export type TabType = 'drugs' | 'renal' | 'infusions' | 'custom' | 'favorites';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  favoritesCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  favoritesCount
}) => {
  const tabs = [
    { id: 'drugs' as TabType, label: 'Fármacos', icon: Pill },
    { id: 'renal' as TabType, label: 'Ajuste Renal', icon: Activity },
    { id: 'infusions' as TabType, label: 'Infusiones', icon: Droplets },
    { id: 'custom' as TabType, label: 'Calc Libre', icon: Calculator },
    { id: 'favorites' as TabType, label: 'Favoritos', icon: Star, badge: favoritesCount }
  ];

  return (
    <nav className="sticky bottom-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-5 items-center h-14 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-all relative ${
                isActive
                  ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-normal'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'
                  }`}
                />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] tracking-tight mt-0.5 whitespace-nowrap ${
                  isActive ? 'font-bold text-emerald-700 dark:text-emerald-400' : ''
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <span className="w-6 h-0.5 bg-emerald-700 dark:bg-emerald-400 rounded-full absolute bottom-1" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
