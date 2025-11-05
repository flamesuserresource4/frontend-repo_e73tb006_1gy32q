import React from 'react';
import { Rocket, Star, Users, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-900">
            <Rocket size={20} />
          </div>
          <span className="font-semibold tracking-wide text-white group-hover:text-cyan-200 transition">NebulaX</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#hero" className="text-slate-300 hover:text-white transition flex items-center gap-2">
            <Star size={16} /> Accueil
          </a>
          <a href="#mission" className="text-slate-300 hover:text-white transition">Mission</a>
          <a href="#team" className="text-slate-300 hover:text-white transition flex items-center gap-2">
            <Users size={16} /> Équipe
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-violet-600/25 transition">
            <Mail size={16} /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
