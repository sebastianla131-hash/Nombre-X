import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

interface PhoneContainerProps {
  children: React.ReactNode;
  isPhoneFrame: boolean;
}

export const PhoneContainer: React.FC<PhoneContainerProps> = ({
  children,
  isPhoneFrame
}) => {
  if (!isPhoneFrame) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col justify-between">
        <main className="flex-1 max-w-xl mx-auto w-full bg-white dark:bg-slate-900 shadow-sm min-h-screen flex flex-col">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900/90 py-6 px-3 flex items-center justify-center">
      {/* Smartphone Hardware Shell */}
      <div className="relative w-full max-w-[410px] h-[860px] max-h-[94vh] bg-black rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.15)] flex flex-col overflow-hidden border-[4px] border-slate-700/60 ring-1 ring-white/20">
        
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
          <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2 gap-1 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-950/80 border border-emerald-400/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Smartphone Screen Canvas */}
        <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[38px] overflow-hidden flex flex-col relative">
          
          {/* iOS / Android Status Bar */}
          <div className="h-9 px-6 bg-emerald-700 text-white flex items-center justify-between text-[11px] font-semibold tracking-tight shrink-0 select-none z-40">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3 fill-current" />
              <Wifi className="w-3 h-3" />
              <BatteryMedium className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Scrollable Screen Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full pointer-events-none z-50 opacity-80" />
        </div>
      </div>
    </div>
  );
};
