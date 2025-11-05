import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import Contact from './components/Contact.jsx';
import Auth from './components/Auth.jsx';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('nebula_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const openLogin = () => {
    setAuthMode('login');
    setAuthOpen(true);
  };
  const openRegister = () => {
    setAuthMode('register');
    setAuthOpen(true);
  };
  const logout = () => {
    localStorage.removeItem('nebula_user');
    localStorage.removeItem('nebula_token');
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Header onLogin={openLogin} onRegister={openRegister} user={user} onLogout={logout} />
      <main>
        <Hero />
        <Mission />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NebulaX. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-300 hover:text-white">Twitter</a>
            <a href="#" className="text-slate-300 hover:text-white">Instagram</a>
            <a href="#" className="text-slate-300 hover:text-white">Discord</a>
          </div>
        </div>
      </footer>

      <Auth
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onAuthed={(u) => setUser({ name: u.name, email: u.email })}
      />
    </div>
  );
}

export default App;
