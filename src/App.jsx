import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Architecture from './components/sections/Architecture';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import HowIBuild from './components/sections/HowIBuild';
import Contact from './components/sections/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'architecture',
  'projects',
  'journey',
  'workflow',
  'contact'
];

export function App() {
  const { activeSection, hasScrolled } = useScrollSpy(SECTION_IDS, 160);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Reset scroll to top on initial page load / refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Subtle interactive mouse spotlight for desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Subtle Desktop Spotlight Follower */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-75 ease-out z-30 opacity-40 blur-[130px] hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(16,185,129,0.03) 40%, transparent 70%)',
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} hasScrolled={hasScrolled} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <Journey />
        <HowIBuild />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
