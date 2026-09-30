import React from 'react';
import { Pill, Activity, Droplets, Calculator, Star } from 'lucide-react';

export type TabType = 'drugs' | 'renal' | 'infusions' | 'custom' | 'favorites';

interface BottomNavProps {
  activeTab: TabType | string | null;
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
    <nav className="sticky bottom-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors shrink-0">
      <div className="grid grid-cols-5 items-center h-13 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors relative cursor-pointer ${
                isActive
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <div className="relative">
                <Icon className={`w-4.5 h-4.5 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.6]'}`} />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-amber-500 text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] tracking-tight mt-0.5 whitespace-nowrap ${
                  isActive ? 'font-semibold' : 'font-normal'
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
