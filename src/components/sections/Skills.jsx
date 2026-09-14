import React, { useState } from 'react';
import { Code2, Server, Database, Smartphone, BarChart3, ShieldCheck, Filter } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { skillsData } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';

const categoryIcons = {
  all: <Filter className="w-3.5 h-3.5" />,
  frontend: <Code2 className="w-3.5 h-3.5" />,
  backend: <Server className="w-3.5 h-3.5" />,
  database: <Database className="w-3.5 h-3.5" />,
  mobile: <Smartphone className="w-3.5 h-3.5" />,
  data: <BarChart3 className="w-3.5 h-3.5" />,
  engineering: <ShieldCheck className="w-3.5 h-3.5" />,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? skillsData.items
    : skillsData.items.filter(item => item.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Technical Stack"
          title="Battle-tested technologies"
          subtitle="mastered through building real-world applications."
          description="A categorized breakdown of the tools, frameworks, and database engines I rely on for production systems. Explicitly grounded in real usage with zero arbitrary percentage bars."
        />

        {/* Category Tabs with Animated Pill Indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {skillsData.categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors shrink-0 ${
                  isActive
                    ? 'text-cyan-300'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900/40 border border-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {categoryIcons[cat.id]}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-cyan-400/20 text-cyan-300' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {cat.id === 'all' 
                      ? skillsData.items.length 
                      : skillsData.items.filter(i => i.category === cat.id).length}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.4)" }}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/70 transition-colors group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <h3 className="font-semibold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {skill.highlight}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-cyan-400/80 font-medium">{skill.tier} Capability</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stack Integration Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/20 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-base font-semibold text-white">Full-Stack Synthesis</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Knowing individual technologies is only the beginning. The real value is stitching React/Vite frontends, Python/Node backends, and MSSQL/MySQL databases together with clean REST APIs and stateless JWT auth.
            </p>
          </div>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-cyan-300 transition-colors shrink-0"
          >
            <span>Inspect System Architecture</span>
            <span className="text-cyan-400">↓</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
