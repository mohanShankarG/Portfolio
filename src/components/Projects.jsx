import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Info, 
  X, 
  Cpu, 
  Server, 
  Database, 
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack Web', 'AI & Computer Vision', 'Embedded / IoT'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
            <FolderGit2 size={13} />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Systems & <span className="text-cyan-400">Engineering Workflows</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world government platforms, AI detection pipelines, retail e-commerce architectures, and embedded robotics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-cyan-950/20"
            >
              
              {/* Card Top Banner / Metadata */}
              <div className="p-6 sm:p-8 space-y-5">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {project.period}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Banner */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">
                          {m.val}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Feature Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                    Core Capabilities
                  </div>
                  <div className="space-y-1.5">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer / Tech Stack & Deep Dive CTA */}
              <div className="p-6 sm:p-8 pt-0 space-y-4">
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <Info size={15} />
                    <span>View Architecture & Specs</span>
                    <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                  </button>

                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.client}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Architecture Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                  {activeModalProject.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {activeModalProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeModalProject.description}
            </p>

            {/* Architecture Details Breakdown */}
            {activeModalProject.architecture && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase text-cyan-400 tracking-wider flex items-center gap-2">
                  <Layers size={14} />
                  <span>System Architecture Breakdown</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs">
                  {Object.entries(activeModalProject.architecture).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/60 pb-2 last:border-0 last:pb-0">
                      <span className="font-mono text-slate-400 uppercase tracking-wide">
                        {key}:
                      </span>
                      <span className="font-semibold text-slate-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Features List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                Full Feature Specifications
              </h4>
              <div className="space-y-2">
                {activeModalProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Tech Stack */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
              >
                Close Specifications
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
