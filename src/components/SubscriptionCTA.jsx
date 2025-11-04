import { CreditCard, Crown, ShieldCheck } from "lucide-react";

export default function SubscriptionCTA() {
  return (
    <section id="abbonamento" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50 to-rose-50 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                <Crown size={14} /> Abbonamento Premium
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-3">
                Sconti esclusivi con locali convenzionati
              </h3>
              <p className="text-slate-700 mt-2">
                Attiva il piano mensile e ottieni accesso immediato a promozioni in caffè,
                palestre, hotel e servizi nelle principali città.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={16} /> Sconti fino al 25%</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={16} /> Accesso riservato al personale</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={16} /> Disdetta in qualsiasi momento</li>
              </ul>
            </div>
            <div className="md:justify-self-end w-full max-w-sm">
              <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900">€6.99</span>
                  <span className="text-slate-500">/ mese</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">Fatturazione ricorrente, cancellabile in ogni momento.</p>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                  <CreditCard size={18} /> Attiva ora
                </button>
                <p className="text-xs text-slate-500 mt-3">Pagamenti sicuri. Le convenzioni si aggiornano ogni mese.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
