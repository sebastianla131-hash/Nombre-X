import React from 'react';

interface PhoneContainerProps {
  children: React.ReactNode;
}

export const PhoneContainer: React.FC<PhoneContainerProps> = ({ children }) => {
  return (
    <div
      id="phone-scroll-container"
      className="fixed inset-0 h-[100dvh] w-full bg-slate-100 dark:bg-slate-950 flex justify-center overflow-hidden transition-colors"
    >
      <div className="w-full max-w-xl h-full bg-white dark:bg-slate-900 border-x border-slate-200/80 dark:border-slate-800 flex flex-col relative shadow-none transition-colors overflow-hidden">
        {children}
      </div>
    </div>
  );
};
