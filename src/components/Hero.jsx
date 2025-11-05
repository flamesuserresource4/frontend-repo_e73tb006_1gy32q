import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = e.currentTarget; // safe in JSX (no TS assertion)
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const glowStyle = {
    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.25), transparent 60%)`,
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Spline 3D scene (full cover) */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          className="pointer-events-auto"
        />
      </div>

      {/* Gradient overlays (do not block scene) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-10 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Interactive glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={glowStyle}
        onMouseMove={handleMouseMove}
      />

      <div
        className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-24 flex flex-col items-start gap-8"
        onMouseMove={handleMouseMove}
      >
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-cyan-200"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Mission spatiale en cours
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
        >
          Explorez l’infini avec une précision cosmique
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-lg md:text-xl text-slate-300"
        >
          Propulsé par des technologies de pointe, notre flotte dévoile de nouveaux horizons. Une expérience fluide, immersive et lumineuse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#mission"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-violet-600/25 transition"
          >
            Décoller maintenant
          </a>
          <a
            href="#team"
            className="px-6 py-3 rounded-md border border-white/20 text-white/90 hover:text-white bg-white/5 hover:bg-white/10 transition"
          >
            Rencontrer l’équipage
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
