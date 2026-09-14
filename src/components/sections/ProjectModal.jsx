import React from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Database, Server, Smartphone, Globe } from 'lucide-react';
import { Github } from '../ui/Icons';
import Modal from '../ui/Modal';

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.shortTitle || project.title} maxWidth="max-w-4xl">
      <div className="space-y-8">
        
        {/* Top Kicker & Title */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 font-mono">•</span>
            <span className="text-xs text-slate-400 font-mono">{project.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="mt-2 text-base text-slate-300 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Action Links & Metrics */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-4">
            {project.metrics?.map((m, i) => (
              <div key={i} className="border-r border-slate-800 pr-4 last:border-0 last:pr-0">
                <span className="block text-[10px] font-mono uppercase text-slate-500">{m.label}</span>
                <span className="text-xs sm:text-sm font-semibold text-white font-mono">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* The Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rose-950/10 border border-rose-500/20">
            <span className="text-xs font-mono font-semibold uppercase text-rose-400 tracking-wider flex items-center gap-1.5 mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Problem
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-500/20">
            <span className="text-xs font-mono font-semibold uppercase text-emerald-400 tracking-wider flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              The Architectural Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Animated Architecture Diagram */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              End-to-End System Flow Diagram
            </span>
            <span className="text-[10px] font-mono text-cyan-400">Subsystem Orchestration</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono relative">
            
            {/* Step 1 */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
              <Globe className="w-4 h-4 text-cyan-400 mb-1" />
              <span className="text-white font-semibold">Client UI</span>
              <span className="text-[10px] text-slate-400 mt-1">{project.architecture?.client?.split(' ')[0] || 'React/Flutter'}</span>
            </div>

            {/* Step 2 */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
              <span className="text-white font-semibold">Auth & Gateway</span>
              <span className="text-[10px] text-slate-400 mt-1">JWT / RBAC Guard</span>
            </div>

            {/* Step 3 */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
              <Server className="w-4 h-4 text-cyan-400 mb-1" />
              <span className="text-white font-semibold">API Microservice</span>
              <span className="text-[10px] text-slate-400 mt-1">{project.architecture?.api?.split(' ')[0] || 'FastAPI/Node'}</span>
            </div>

            {/* Step 4 */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
              <Database className="w-4 h-4 text-emerald-400 mb-1" />
              <span className="text-white font-semibold">Relational Store</span>
              <span className="text-[10px] text-slate-400 mt-1">MSSQL / MySQL</span>
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
            <div>
              <strong className="text-slate-300">Client Implementation:</strong> {project.architecture?.client}
            </div>
            <div>
              <strong className="text-slate-300">Database Engine:</strong> {project.architecture?.database || project.architecture?.output}
            </div>
          </div>
        </div>

        {/* Key Features List */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Key System Features
          </h3>
          <div className="grid grid-cols-1 gap-2.5">
            {project.highlights?.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2"></span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Challenges Solved */}
        {project.challenges && (
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Engineering Challenges & Architectural Mitigations
            </h3>
            <div className="space-y-3">
              {project.challenges.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-bold text-white font-mono mb-1">
                    Challenge {i + 1}: {c.challenge}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {c.resolution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies Applied
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack?.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  );
}

export default ProjectModal;
