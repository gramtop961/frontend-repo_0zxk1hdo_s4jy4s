import { MapPin, Calendar, Users, Search } from "lucide-react";
import { useState } from "react";

export default function RideSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // For now we just show a simple alert as a placeholder for results
    const msg = `Ricerca: ${from} → ${to} il ${date || "data flessibile"} • ${seats} posto/i`;
    alert(msg);
  }

  return (
    <section id="cerca" className="relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 p-1 shadow-lg">
          <div className="rounded-[14px] bg-white p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 md:mb-6">
              Trova o offri un passaggio
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
              <div className="col-span-1 md:col-span-1">
                <label className="text-xs text-slate-500">Partenza</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                  <MapPin className="text-slate-500" size={18} />
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Città o base"
                    className="w-full outline-none bg-transparent placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-1">
                <label className="text-xs text-slate-500">Destinazione</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                  <MapPin className="text-slate-500" size={18} />
                  <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Città o base"
                    className="w-full outline-none bg-transparent placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-1">
                <label className="text-xs text-slate-500">Data</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                  <Calendar className="text-slate-500" size={18} />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-1">
                <label className="text-xs text-slate-500">Posti</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                  <Users className="text-slate-500" size={18} />
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={seats}
                    onChange={(e) => setSeats(parseInt(e.target.value) || 1)}
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="md:col-span-4 flex justify-end pt-1">
                <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow">
                  <Search size={18} /> Cerca
                </button>
              </div>
            </form>
            <div className="grid md:grid-cols-3 gap-4 mt-6" id="vantaggi">
              <Advantage title="Verifica identità" description="Accesso solo a personale con email istituzionale" />
              <Advantage title="Sicurezza prioritaria" description="Profili verificati e feedback interni" />
              <Advantage title="Risparmio e sostenibilità" description="Condividi costi e riduci l'impatto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantage({ title, description }) {
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
      <p className="font-medium text-slate-900">{title}</p>
      <p className="text-sm text-slate-600 mt-1">{description}</p>
    </div>
  );
}
