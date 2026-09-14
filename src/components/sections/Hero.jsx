import React from 'react';
import { ArrowRight, FileText, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import HeroConsole from './HeroConsole';
import { motion } from 'motion/react';

export function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Dynamic ambient background glow cones */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Background technical grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Animated Hero Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
                <span>{personalInfo.availabilityText}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <span className="text-xs sm:text-sm font-mono font-medium text-cyan-400 tracking-widest uppercase">
                Software Engineer & Architect
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                HARSH <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400">
                  DIKSHIT
                </span>
              </h1>
            </motion.div>

            {/* Role Badge */}
            <motion.div variants={itemVariants} className="mt-3">
              <div className="inline-block px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-sm sm:text-base font-mono text-emerald-400">
                {personalInfo.title}
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-normal">
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs with Spring Hover */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors shadow-lg shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-600"
              >
                <span>Let's Connect</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Channels & Stack Pills */}
            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Email Harsh"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Stack Snippet */}
              <div className="text-xs font-mono text-slate-500">
                <span>React • FastAPI • Node • MSSQL • Flutter</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Console with Motion Entrance */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative">
              {/* Back illumination glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-slate-700/20 to-emerald-500/20 blur-xl opacity-60 pointer-events-none" />
              <HeroConsole />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
