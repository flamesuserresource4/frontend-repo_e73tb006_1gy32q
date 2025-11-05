import React from 'react';
import { motion } from 'framer-motion';

const members = [
  { name: 'Ava', role: 'Commandante', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Leo', role: 'Ingénieur spatial', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Mina', role: 'Astrophysicienne', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=800&auto=format&fit=crop' },
  { name: 'Kai', role: 'Pilote', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
];

const Team = () => {
  return (
    <section id="team" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-10"
        >
          L’équipage
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-center overflow-hidden"
            >
              <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl" />
              <img
                src={m.img}
                alt={m.name}
                className="mx-auto h-28 w-28 rounded-full object-cover border-2 border-white/20 shadow-lg"
              />
              <h3 className="mt-4 text-white font-semibold">{m.name}</h3>
              <p className="text-slate-300 text-sm">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
