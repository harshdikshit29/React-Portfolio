import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { journeyMilestones } from '../../data/portfolioData';
import { motion } from 'motion/react';

export function Journey() {
  return (
    <section id="journey" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Growth & Capability"
          title="Engineering Journey"
          subtitle="A systematic progression across modern software disciplines."
          description="How my engineering capabilities expanded over time—from mastering modern frontend component architectures to architecting secure REST APIs, database schemas, and data pipelines."
        />

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {journeyMilestones.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></div>
              </div>

              {/* Phase tag positioned on left for desktop */}
              <div className="md:absolute md:-left-32 md:top-2 text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                PHASE {item.phase}
              </div>

              {/* Milestone Card */}
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(6, 182, 212, 0.4)" }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/70 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Step {index + 1} of {journeyMilestones.length}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.summary}
                </p>

                {/* Applied Skills Chips */}
                <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>

        {/* Note on data customization */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500">
          * Timeline data is centrally managed in <code className="text-cyan-400/80">src/data/portfolioData.js</code> for effortless updates.
        </div>

      </div>
    </section>
  );
}

export default Journey;
