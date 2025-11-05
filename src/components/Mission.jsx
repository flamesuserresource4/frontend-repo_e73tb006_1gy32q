import { motion } from 'framer-motion';

const planets = [
  { name: 'Mercure', color: 'from-orange-200 to-amber-500', desc: 'La plus proche du Soleil, rapide et brûlante.' },
  { name: 'Vénus', color: 'from-yellow-200 to-yellow-500', desc: 'Brille intensément, enveloppée d’un épais manteau.' },
  { name: 'Terre', color: 'from-sky-300 to-emerald-500', desc: 'Notre oasis bleue dans l’immensité.' },
  { name: 'Mars', color: 'from-red-300 to-red-600', desc: 'Le désert rouge des explorateurs.' },
  { name: 'Jupiter', color: 'from-amber-200 to-orange-700', desc: 'Géante gazeuse aux tempêtes colossales.' },
  { name: 'Saturne', color: 'from-yellow-200 to-amber-400', desc: 'Ses anneaux éclairent la nuit cosmique.' },
  { name: 'Uranus', color: 'from-cyan-200 to-blue-400', desc: 'Mystérieuse, couchée sur le côté.' },
  { name: 'Neptune', color: 'from-blue-300 to-indigo-700', desc: 'Vents furieux aux confins du système.' },
];

export default function Mission() {
  return (
    <section id="mission" className="relative w-full py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-bold tracking-tight text-white md:text-5xl"
        >
          Notre mission stellaire
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {planets.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className={`mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br ${p.color} shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} />
              <h3 className="mb-2 text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-white/70">{p.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
