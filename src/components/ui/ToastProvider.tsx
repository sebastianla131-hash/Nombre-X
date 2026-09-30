// src/components/ui/ToastProvider.tsx
// Ephemeral Toast notification system (Mobile-First / Zero native alert() calls)

import React, { createContext, useContext, useState, useCallback } from 'react';
import { ToastMessage } from '../../types/clinical';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

interface ToastContextType {
  toasts: ToastMessage[];
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
  success: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ message, title, type = 'info', durationMs = 3000 }: Omit<ToastMessage, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      const newToast: ToastMessage = { id, message, title, type, durationMs };

      setToasts((prev) => [...prev.slice(-2), newToast]); // Keep max 3 toasts visible

      if (durationMs > 0) {
        setTimeout(() => {
          removeToast(id);
        }, durationMs);
      }
    },
    [removeToast]
  );

  const success = useCallback((message: string, title?: string) => {
    showToast({ message, title, type: 'success' });
  }, [showToast]);

  const warning = useCallback((message: string, title?: string) => {
    showToast({ message, title, type: 'warning' });
  }, [showToast]);

  const error = useCallback((message: string, title?: string) => {
    showToast({ message, title, type: 'error' });
  }, [showToast]);

  const info = useCallback((message: string, title?: string) => {
    showToast({ message, title, type: 'info' });
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast, success, warning, error, info }}>
      {children}

      {/* Floating Toast Container (Bottom pinned above BottomNav) */}
      <div
        aria-live="polite"
        className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 pointer-events-none flex flex-col gap-2"
      >
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isWarning = toast.type === 'warning';
          const isError = toast.type === 'error';

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto p-3 rounded-xl shadow-lg border text-xs flex items-center justify-between gap-2.5 transition-all transform animate-in fade-in slide-in-from-bottom-2 duration-200 ${
                isSuccess
                  ? 'bg-slate-900 text-white border-slate-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-100'
                  : isWarning
                  ? 'bg-amber-900 text-amber-50 border-amber-800'
                  : isError
                  ? 'bg-rose-900 text-rose-50 border-rose-800'
                  : 'bg-slate-900 text-slate-100 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                {isSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                {isWarning && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
                {isError && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                {!isSuccess && !isWarning && !isError && <Info className="w-4 h-4 text-blue-400 shrink-0" />}
                <div>
                  {toast.title && <div className="font-bold text-[11px] mb-0.5">{toast.title}</div>}
                  <div className="font-medium text-xs leading-tight">{toast.message}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Cerrar notificación"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
