import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import { Twitter, Instagram, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#030314] text-white selection:bg-cyan-500/30 selection:text-white">
      <Header />
      <main className="relative">        
        <Hero />
        <Mission />
        <Team />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="mb-4 text-2xl font-semibold">Prêt·e pour le lancement ?</h3>
        <p className="mb-8 text-white/70">
          Écrivez-nous pour rejoindre la mission et façonner la prochaine génération d’exploration spatiale.
        </p>
        <a
          href="#home"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600" />
          <span className="relative flex items-center gap-2">
            <Send className="h-4 w-4" />
            Nous contacter
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-full blur-xl bg-cyan-400/30" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-white/60">© {new Date().getFullYear()} Astra Lab. Tous droits réservés.</p>
        <div className="flex items-center gap-3">
          <a
            aria-label="Twitter"
            href="https://twitter.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10"
          >
            <Twitter className="h-4 w-4 text-cyan-300" />
            <span className="hidden sm:inline">Twitter</span>
          </a>
          <a
            aria-label="Instagram"
            href="https://instagram.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10"
          >
            <Instagram className="h-4 w-4 text-cyan-300" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            aria-label="Discord"
            href="https://discord.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10"
          >
            <span className="h-4 w-4 rounded-full bg-cyan-400/70 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
            <span className="hidden sm:inline">Discord</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
