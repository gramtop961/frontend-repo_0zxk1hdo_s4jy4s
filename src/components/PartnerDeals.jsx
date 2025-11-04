import { Store, Percent, MapPin } from "lucide-react";

const deals = [
  {
    name: "Caffè del Comando",
    city: "Roma",
    description: "10% su colazioni e pranzi",
    tag: "Food & Drink",
  },
  {
    name: "Officina Bravo",
    city: "Napoli",
    description: "Check-up gratuito + 15% ricambi",
    tag: "Auto Service",
  },
  {
    name: "Hotel Tricolore",
    city: "Torino",
    description: "Sconto 20% su camere standard",
    tag: "Hospitality",
  },
  {
    name: "Sport Base Gym",
    city: "Bari",
    description: "Abbonamento -25% per membri",
    tag: "Fitness",
  },
];

export default function PartnerDeals() {
  return (
    <section id="convenzioni" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Locali convenzionati</h3>
            <p className="text-slate-600 mt-1">
              Sconti esclusivi per chi sottoscrive l'abbonamento mensile
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-indigo-700 font-medium">
            <Percent size={18} /> Vedi tutti
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deals.map((d) => (
            <article
              key={d.name}
              className="rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">
                  <Store size={14} /> {d.tag}
                </span>
                <span className="text-xs text-slate-500">Partner</span>
              </div>
              <h4 className="mt-3 font-semibold text-slate-900">{d.name}</h4>
              <p className="text-sm text-slate-600 mt-1">{d.description}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-slate-700 text-sm">
                <MapPin size={16} /> {d.city}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
