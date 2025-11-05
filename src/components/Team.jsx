import { motion } from 'framer-motion';

const members = [
  { name: 'Nova', role: 'Capitaine', color: 'from-cyan-400 to-violet-600' },
  { name: 'Orion', role: 'Ingénieur Systèmes', color: 'from-indigo-400 to-fuchsia-500' },
  { name: 'Lyra', role: 'Navigatrice', color: 'from-sky-400 to-emerald-500' },
  { name: 'Atlas', role: 'Scientifique', color: 'from-rose-400 to-amber-500' },
];

export default function Team() {
  return (
    <section id="team" className="relative w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-5xl"
        >
          L’équipage
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, rotateX: -10 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
            >
              <div className={`mx-auto mb-4 h-28 w-28 rounded-full bg-gradient-to-br ${m.color} shadow-[0_0_40px_rgba(99,102,241,0.3)]`} />
              <h3 className="text-lg font-semibold text-white">{m.name}</h3>
              <p className="text-sm text-white/70">{m.role}</p>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_200px_at_center,rgba(56,189,248,0.12),transparent)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
