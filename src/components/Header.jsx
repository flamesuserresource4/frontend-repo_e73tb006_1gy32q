import { motion } from 'framer-motion';
import { Rocket, Home, Users, Info } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Accueil', icon: Home },
  { id: 'mission', label: 'Mission', icon: Info },
  { id: 'team', label: 'Équipe', icon: Users },
  { id: 'contact', label: 'Contact', icon: Rocket },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-cyan-300"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-[0_0_30px_rgba(99,102,241,0.7)]" />
          <span className="font-semibold tracking-widest text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
            ASTRA LAB
          </span>
        </motion.a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              whileHover={{ y: -2, boxShadow: '0 0 20px rgba(34,211,238,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
            >
              <Icon className="h-4 w-4 text-cyan-300" />
              <span>{label}</span>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-cyan-500/0 blur-lg transition group-hover:bg-cyan-500/20" />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="#mission"
          whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(34,211,238,0.6)' }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(14,165,233,0.5)]"
        >
          Décoller maintenant 🚀
        </motion.a>
      </div>
    </header>
  );
}
