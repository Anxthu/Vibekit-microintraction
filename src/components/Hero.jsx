import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ComputerScene from './ComputerScene';

const Hero = () => {
  return (
    <section className="section hero-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>

        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 style={{
              fontSize: 'clamp(4rem, 10vw, 10rem)',
              lineHeight: '0.85',
              marginBottom: '2rem',
              color: 'var(--text)',
              letterSpacing: '-0.04em'
            }}>
              Vibe<br />
              <span style={{ color: 'var(--text)' }}>Kit</span><span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="mono" style={{ maxWidth: '300px', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
              MOTION & MICROINTERACTION LIBRARY.
              <br /><br />
              Designed for the screen.
              <br />
              Open source.
              <br />
              Libre.
            </div>
          </motion.div>
        </div>

        {/* Right Content (3D Scene) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{ height: '600px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ComputerScene />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '2rem', left: '50%', translateX: '-50%' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={32} color="var(--accent)" />
      </motion.div>

      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(255,51,51,0.03) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: -1
      }} />
    </section>
  );
};

export default Hero;
