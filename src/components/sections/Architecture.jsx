import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, Database, LineChart, Code2, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { architectureLayers } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';

const layerIcons = {
  client: <Layers className="w-4 h-4 text-cyan-400" />,
  gateway: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
  services: <Cpu className="w-4 h-4 text-cyan-400" />,
  storage: <Database className="w-4 h-4 text-emerald-400" />,
  etl: <LineChart className="w-4 h-4 text-cyan-400" />
};

export function Architecture() {
  const [selectedLayerId, setSelectedLayerId] = useState(architectureLayers[0].id);

  const activeLayer = architectureLayers.find(l => l.id === selectedLayerId) || architectureLayers[0];

  return (
    <section id="architecture" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#06070c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Full-Stack Depth"
          title="More Than Just The UI"
          subtitle="Engineering across every boundary of the application lifecycle."
          description="A user interface is only as reliable as the API contracts, token security, and relational database schemas powering it. Here is how I architect multi-tier software systems."
        />

        {/* Interactive Architecture Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Layer Selector Stack (Diagram) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
              Select an Architectural Layer:
            </span>

            {architectureLayers.map((layer, index) => {
              const isSelected = selectedLayerId === layer.id;
              return (
                <div key={layer.id} className="relative">
                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    type="button"
                    onClick={() => setSelectedLayerId(layer.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                        {layerIcons[layer.id]}
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                          {layer.name}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-400">
                          {layer.tech}
                        </p>
                      </div>
                    </div>

                    <div className={`text-xs font-mono px-2 py-0.5 rounded ${
                      isSelected ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-600'
                    }`}>
                      Layer 0{index + 1}
                    </div>
                  </motion.button>

                  {/* Flow Arrow indicator between items */}
                  {index < architectureLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <svg width="16" height="12" viewBox="0 0 16 12" className="text-slate-700">
                        <line x1="8" y1="0" x2="8" y2="10" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" className="animate-flow" />
                        <polyline points="5,7 8,10 11,7" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Layer Inspector with Animated Transition */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-slate-800 bg-[#090b14]/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 status-pulse"></span>
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                        Deep Dive Inspector
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeLayer.name}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 mt-1">
                      Stack: {activeLayer.tech}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {activeLayer.description}
                  </p>
                </div>

                {/* Core Responsibilities */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Core Engineering Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeLayer.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Implementation Code Sample */}
                <div className="mt-6">
                  <div className="flex items-center justify-between px-3 py-2 bg-slate-950 rounded-t-xl border-t border-x border-slate-800 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Implementation Pattern Example</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Production Sample</span>
                  </div>
                  <pre className="p-4 bg-[#05060a] border border-slate-800 rounded-b-xl overflow-x-auto text-[11px] font-mono text-slate-300 leading-relaxed scrollbar-none">
                    <code>{activeLayer.codeSnippet}</code>
                  </pre>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Architecture;
