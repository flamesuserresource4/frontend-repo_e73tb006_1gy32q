import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserPlus, LogIn } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export default function Auth({ open, mode = 'login', onClose, onAuthed }) {
  const [current, setCurrent] = useState(mode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setCurrent(mode);
    setError('');
  }, [mode, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = current === 'register' ? '/auth/register' : '/auth/login';
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          current === 'register'
            ? { name, email, password }
            : { email, password }
        ),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.detail || 'Erreur inconnue');
      }

      // Persist token and user info
      localStorage.setItem('nebula_token', data.access_token);
      localStorage.setItem('nebula_user', JSON.stringify({ name: data.name, email: data.email }));

      onAuthed?.({ name: data.name, email: data.email, token: data.access_token });
      onClose?.();
    } catch (err) {
      setError(err.message || 'Erreur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/90 p-6 text-white backdrop-blur"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-md p-2 text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            <div className="mb-6 flex items-center gap-3">
              {current === 'register' ? (
                <UserPlus className="text-cyan-400" size={20} />
              ) : (
                <LogIn className="text-cyan-400" size={20} />
              )}
              <h3 className="text-xl font-semibold">
                {current === 'register' ? 'Créer un compte' : 'Se connecter'}
              </h3>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2 rounded-md bg-white/5 p-1">
              <button
                className={`rounded-md px-3 py-2 text-sm transition ${
                  current === 'login' ? 'bg-gradient-to-r from-cyan-500 to-violet-600' : 'hover:bg-white/10'
                }`}
                onClick={() => setCurrent('login')}
              >
                Connexion
              </button>
              <button
                className={`rounded-md px-3 py-2 text-sm transition ${
                  current === 'register' ? 'bg-gradient-to-r from-cyan-500 to-violet-600' : 'hover:bg-white/10'
                }`}
                onClick={() => setCurrent('register')}
              >
                Inscription
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4">
              {current === 'register' && (
                <label className="block">
                  <span className="text-sm text-slate-300">Nom</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-md border border-white/10 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    placeholder="Ada Lovelace"
                    required
                  />
                </label>
              )}
              <label className="block">
                <span className="text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border border-white/10 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="ada@exemple.com"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Mot de passe</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-md border border-white/10 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </label>

              {error && (
                <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-violet-600/25 disabled:opacity-60"
              >
                {loading ? 'Veuillez patienter…' : current === 'register' ? 'Créer mon compte' : 'Se connecter'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
