import React from 'react';
import { Rocket, Star, Users, Mail, User, LogOut } from 'lucide-react';

const Header = ({ onLogin, onRegister, user, onLogout }) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-900">
            <Rocket size={20} />
          </div>
          <span className="font-semibold tracking-wide text-white group-hover:text-cyan-200 transition">NebulaX</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#hero" className="text-slate-300 hover:text-white transition flex items-center gap-2">
            <Star size={16} /> Accueil
          </a>
          <a href="#mission" className="text-slate-300 hover:text-white transition">Mission</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition flex items-center gap-2">
            <Mail size={16} /> Contact
          </a>

          <div className="ml-4 h-6 w-px bg-white/10" />

          {!user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onLogin}
                className="px-3 py-2 rounded-md border border-white/15 text-white/90 hover:text-white hover:bg-white/5"
              >
                Se connecter
              </button>
              <button
                onClick={onRegister}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-violet-600/25 transition"
              >
                <User size={16} /> Créer un compte
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">
                <User size={16} />
                <span className="max-w-[160px] truncate">{user.name || user.email}</span>
              </div>
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5"
                title="Se déconnecter"
              >
                <LogOut size={16} /> <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
