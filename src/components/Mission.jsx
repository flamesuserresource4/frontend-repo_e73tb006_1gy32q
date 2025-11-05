import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Satellite, Gauge } from 'lucide-react';

const features = [
  {
    title: 'Navigation quantique',
    desc: 'Itinéraires optimisés via calculs probabilistes et champs gravitationnels.',
    icon: Gauge,
  },
  {
    title: 'Réseau satellitaire',
    desc: 'Couverture interstellaire faible latence pour une télémétrie fiable.',
    icon: Satellite,
  },
  {
    title: 'Boucliers adaptatifs',
    desc: 'Protection dynamique contre radiations et micro-météorites.',
    icon: Shield,
  },
];

const Mission = () => {
  return (
    <section id="mission" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          Notre mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-slate-300 max-w-2xl mb-12"
        >
          Relier les mondes en proposant une plateforme d’exploration rapide, sûre et élégante. Chaque détail a été pensé pour une immersion totale.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
