import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Prenons contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-slate-300 max-w-xl"
            >
              Parlons missions, partenariats et exploration. Notre équipe vous répond à vitesse lumière.
            </motion.p>

            <div className="mt-8 space-y-3 text-sm">
              <a href="mailto:contact@nebulax.io" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition">
                <Mail size={16} /> contact@nebulax.io
              </a>
              <div className="inline-flex items-center gap-2 text-slate-300">
                <Phone size={16} /> +33 1 23 45 67 89
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-slate-300">Nom</span>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    placeholder="Ada Lovelace"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-300">Email</span>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    placeholder="ada@exemple.com"
                    required
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-slate-300">Sujet</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="Partenariat, démo, mission…"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Message</span>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="Votre idée, votre besoin…"
                  required
                />
              </label>
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-violet-600/25 transition"
                >
                  <Send size={16} /> Envoyer
                </button>
                <span className="text-xs text-slate-400">Envoi simulé — aucune donnée n’est stockée.</span>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
