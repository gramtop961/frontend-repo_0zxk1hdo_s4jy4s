import { Shield, Car, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center shadow-sm">
            <Shield size={20} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">MilRide</p>
            <p className="text-xs text-slate-500">Carpool riservato al personale</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#cerca" className="hover:text-indigo-600 transition">Cerca passaggi</a>
          <a href="#vantaggi" className="hover:text-indigo-600 transition">Vantaggi</a>
          <a href="#convenzioni" className="hover:text-indigo-600 transition">Convenzioni</a>
          <a href="#abbonamento" className="hover:text-indigo-600 transition">Abbonamento</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
            <User size={16} /> Accedi
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            <Car size={16} /> Pubblica un passaggio
          </button>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-slate-300" onClick={() => setOpen(!open)} aria-label="Apri menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#cerca" className="py-1">Cerca passaggi</a>
            <a href="#vantaggi" className="py-1">Vantaggi</a>
            <a href="#convenzioni" className="py-1">Convenzioni</a>
            <a href="#abbonamento" className="py-1">Abbonamento</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-slate-700">Accedi</button>
              <button className="flex-1 px-3 py-2 rounded-lg bg-indigo-600 text-white">Pubblica</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
