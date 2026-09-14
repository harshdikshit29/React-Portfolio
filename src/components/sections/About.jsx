import React from 'react';
import { Layers, Server, Database, LineChart } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { motion } from 'motion/react';

export function About() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Frontend Craft & Interaction",
      desc: "Architecting accessible, responsive web and mobile interfaces using React 19, Vite, and Flutter. Prioritizing instant feedback, clean state boundaries, and thoughtful layout design."
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: "Backend & RESTful Services",
      desc: "Building asynchronous API architectures with Python (FastAPI) and Node.js (Express). Implementing stateless JWT authentication, role-based authorization gates, and strict input validation."
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      title: "Relational Modeling & Storage",
      desc: "Engineering structured database schemas in Microsoft SQL Server (MSSQL), MySQL, and MongoDB. Writing normalized tables, foreign key constraints, indexes, and queries using SQLAlchemy and SQL."
    },
    {
      icon: <LineChart className="w-5 h-5 text-emerald-400" />,
      title: "Data Pipelines & Normalization",
      desc: "Developing automated Python extraction pipelines with BeautifulSoup and Pandas. Cleaning messy unstructured web feeds, resolving entity discrepancies, and exporting normalized CSV/JSON feeds."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <SectionHeader
          badge="Engineering Philosophy"
          title="Bridging the gap between"
          subtitle="interface craftsmanship and reliable backend systems."
          description="I don't treat frontend, backend, or data as isolated silos. True product reliability requires understanding the entire lifecycle—from the user's touch target down to SQL indexes."
        />

        {/* Narrative & Stats Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Narrative with Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p className="text-slate-200">
              {personalInfo.bio[0]}
            </p>
            <p className="text-slate-400">
              {personalInfo.bio[1]}
            </p>
            <p className="text-slate-400">
              {personalInfo.bio[2]}
            </p>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3, borderColor: "rgba(6, 182, 212, 0.3)" }}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 transition-colors flex flex-col justify-between"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{stat.label}</span>
                <div className="my-2">
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">{stat.helper}</span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.4)" }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/70 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-[11px] font-mono text-cyan-400">
                <span>Phase 0{i + 1} Architecture</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
