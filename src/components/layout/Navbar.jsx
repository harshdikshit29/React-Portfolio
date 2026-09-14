import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'workflow', label: 'How I Build' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection = 'hero', hasScrolled = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Identifier */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg p-1"
          aria-label="Harsh Dikshit - Home"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm tracking-wider shadow-inner group-hover:border-cyan-500/60 transition-colors">
            {personalInfo.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-slate-800 shadow-sm border border-slate-700/70' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-cyan-400 rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Status Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Availability status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
            <span className="hidden xl:inline">Available for Roles</span>
            <span className="xl:hidden">Available</span>
          </div>

          {/* Resume CTA */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-300 bg-slate-900 border border-slate-800 text-xs"
            aria-label="Download Resume"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/90 border border-slate-800 hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#090b14]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-2 mb-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
            <span>{personalInfo.status}</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Full Resume</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
