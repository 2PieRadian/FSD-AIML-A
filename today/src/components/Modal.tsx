import type { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200/60 dark:border-white/10 shadow-2xl">
          <div className="flex items-center justify-between p-5 border-b border-slate-200/60 dark:border-white/10">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="p-6 text-sm sm:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
