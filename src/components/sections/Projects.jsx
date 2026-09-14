import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ShieldCheck, Server, Database, Smartphone, BarChart3, Layers } from 'lucide-react';
import { Github } from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import ProjectModal from './ProjectModal';
import { projectsData } from '../../data/portfolioData';
import { motion } from 'motion/react';

export function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getCategoryIcon = (category) => {
    if (category.includes('Mobile')) return <Smartphone className="w-3.5 h-3.5 text-cyan-400" />;
    if (category.includes('Data')) return <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />;
    return <Layers className="w-3.5 h-3.5 text-cyan-400" />;
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Featured Engineering Work"
          title="Production Systems & Architectures"
          subtitle="Real-world software built across web, backend, mobile, and data pipelines."
          description="Detailed architectural implementations showcasing multi-tier separation, role-based access control, relational database modeling, and automated data pipelines."
        />

        {/* Editorial Showcase Cards */}
        <div className="space-y-12 lg:space-y-16">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-slate-800 bg-[#0a0c16]/90 overflow-hidden backdrop-blur-xl shadow-xl hover:border-slate-700 transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Project Details Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      {/* Category & Kicker */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {getCategoryIcon(project.category)}
                          <span>{project.category}</span>
                        </span>
                        <span className="text-xs text-slate-500 font-mono">•</span>
                        <span className="text-xs text-slate-400 font-mono">0{index + 1} / 03</span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Short Tagline */}
                      <p className="mt-2 text-sm sm:text-base font-mono text-cyan-400/90">
                        {project.kicker}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Key Highlights Bullet points */}
                      <div className="mt-6 space-y-2">
                        {project.highlights.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2"></span>
                            <span className="line-clamp-2">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-md shadow-cyan-500/10"
                      >
                        <span>Explore Architecture & Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.button>

                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 hover:border-slate-700 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Visual Architecture Preview Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div 
                      whileHover={{ y: -4, scale: 1.01 }}
                      onClick={() => setActiveModalProject(project)}
                      className="cursor-pointer group relative rounded-2xl border border-slate-800 bg-[#070912] p-5 sm:p-6 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between h-full min-h-[300px] overflow-hidden"
                    >
                      {/* Subtle hover backlight */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none transition-colors" />

                      {/* Header in Preview card */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
                          <span className="text-[11px] font-mono text-slate-400 uppercase">Architecture Spec</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                          Interactive Blueprint
                        </span>
                      </div>

                      {/* Simulated Architecture Flow */}
                      <div className="my-6 space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 group-hover:border-slate-700">
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Client Interface</div>
                          <div className="text-white font-medium mt-0.5 truncate">{project.architecture?.client}</div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 group-hover:border-slate-700">
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">API & Security</div>
                          <div className="text-emerald-400 font-medium mt-0.5 truncate">{project.architecture?.api || project.architecture?.ingestion}</div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 group-hover:border-slate-700">
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Storage Engine</div>
                          <div className="text-cyan-400 font-medium mt-0.5 truncate">{project.architecture?.database || project.architecture?.output}</div>
                        </div>
                      </div>

                      {/* Footer in Preview card */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                        <span>Click to view full flow</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>

                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

export default Projects;
