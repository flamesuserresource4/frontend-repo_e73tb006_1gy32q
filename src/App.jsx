import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import Team from './components/Team.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Team />
        {/* Contact */}
        <section id="contact" className="relative py-20 bg-slate-950">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
            <p className="text-slate-300 mb-8 max-w-2xl">Parlons missions, partenariats et exploration. Notre équipe vous répond vite — vitesse lumière comprise.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-violet-600/25 transition">Nous écrire</a>
              <a href="#" className="px-6 py-3 rounded-md border border-white/20 text-white/90 hover:text-white bg-white/5 hover:bg-white/10 transition">Docs techniques</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NebulaX. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-300 hover:text-white">Twitter</a>
            <a href="#" className="text-slate-300 hover:text-white">Instagram</a>
            <a href="#" className="text-slate-300 hover:text-white">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
