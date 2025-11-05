import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax layers
  const planet1Y = useTransform(scrollY, [0, 800], [0, 150]);
  const planet2Y = useTransform(scrollY, [0, 800], [0, 220]);
  const planet3Y = useTransform(scrollY, [0, 800], [0, 300]);

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">{/* never use negative z-index per instructions */}
        <Spline
          scene="https://prod.spline.design/0CT1-dbOQTa-XJKt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]" />

      {/* Parallax planets */}
      <motion.div style={{ y: planet1Y }} className="absolute -left-16 top-24 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400 to-violet-700 blur-[1px] opacity-80" />
      <motion.div style={{ y: planet2Y }} className="absolute right-10 top-48 h-24 w-24 rounded-full bg-gradient-to-br from-white to-cyan-300/60 blur-[1px] opacity-70" />
      <motion.div style={{ y: planet3Y }} className="absolute left-1/2 bottom-10 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600 to-indigo-900 opacity-50 blur-sm" />

      {/* Cursor-follow light */}
      <CursorLight />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl"
        >
          Explorez l’infini.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          className="mx-auto mb-8 max-w-xl text-lg text-white/80"
        >
          Découvrez la nouvelle ère de l’exploration spatiale.
        </motion.p>

        <motion.a
          href="#mission"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 font-semibold text-white"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600" />
          <span className="pointer-events-none absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition bg-cyan-400/40" />
          <span className="relative">Commencer le voyage</span>
          <span className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-white/10 to-white/0 opacity-0 transition group-hover:opacity-100" />
        </motion.a>

        {/* Astronaut emoji floating */}
        <motion.div
          initial={{ y: -10, rotate: -5 }}
          animate={{ y: [ -10, 10, -10 ], rotate: [ -5, 5, -5 ] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-8 bottom-24 text-5xl select-none"
          aria-hidden
        >
          🧑‍🚀
        </motion.div>
      </div>
    </section>
  );
}

function CursorLight() {
  // Light that follows the cursor using CSS vars updated on mouse move
  return (
    <div
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
      }}
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(600px 600px at var(--mx,50%) var(--my,50%), rgba(56,189,248,0.15), transparent 60%)',
      }}
      aria-hidden
    />
  );
}
