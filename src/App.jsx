import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import FeatureShowcase from './components/FeatureShowcase';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Hero />
      <FeatureShowcase />
      <Footer />
    </div>
  );
}

export default App;
