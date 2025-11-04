import Header from "./components/Header";
import RideSearch from "./components/RideSearch";
import PartnerDeals from "./components/PartnerDeals";
import SubscriptionCTA from "./components/SubscriptionCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl opacity-60" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-200 blur-3xl opacity-60" />
          </div>
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-8 md:pt-14 md:pb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                  Carpool sicuro per il personale militare
                </h1>
                <p className="mt-3 md:mt-4 text-slate-700 text-lg">
                  Organizza passaggi tra basi e città in modo semplice e riservato. Con un piano mensile ottieni sconti esclusivi nei locali convenzionati.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="#cerca" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow">Inizia a cercare</a>
                  <a href="#abbonamento" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50">Vedi abbonamento</a>
                </div>
              </div>
              <div className="md:pl-6">
                <RideSearch />
              </div>
            </div>
          </div>
        </section>
        <PartnerDeals />
        <SubscriptionCTA />
      </main>
      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} MilRide — progetto dedicato al personale militare.</p>
          <nav className="text-sm text-slate-600 flex gap-4">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Termini</a>
            <a href="#" className="hover:text-indigo-600">Contatti</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
