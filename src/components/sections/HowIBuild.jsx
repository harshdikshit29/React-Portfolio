import React, { useState } from 'react';
import { Compass, PenTool, Code, Network, CheckSquare, Rocket } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { howIBuildSteps } from '../../data/portfolioData';
import { motion } from 'motion/react';

const stepIcons = [
  <Compass className="w-5 h-5 text-cyan-400" />,
  <PenTool className="w-5 h-5 text-emerald-400" />,
  <Code className="w-5 h-5 text-cyan-400" />,
  <Network className="w-5 h-5 text-emerald-400" />,
  <CheckSquare className="w-5 h-5 text-cyan-400" />,
  <Rocket className="w-5 h-5 text-cyan-400" />,
];

export function HowIBuild() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="workflow" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Methodology"
          title="How I Build Software"
          subtitle="A disciplined engineering lifecycle from concept to deployment."
          description="High quality software is not an accident. It is the result of deliberate planning, disciplined architecture, modular implementation, and rigorous verification."
        />

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {howIBuildSteps.map((item, index) => {
            const isSelected = activeStepIndex === index;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStepIndex(index)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {stepIcons[index]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Phase 0{index + 1}</span>
                  <span className={isSelected ? 'text-cyan-400 font-semibold' : 'text-slate-600'}>
                    {isSelected ? 'Active Focus' : 'Details'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowIBuild;
