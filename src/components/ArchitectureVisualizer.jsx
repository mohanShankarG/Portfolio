import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  Clock, 
  Database, 
  CheckCircle2, 
  Sparkles,
  Server,
  Zap,
  Layers
} from 'lucide-react';
import { systemPipelines } from '../data/portfolioData';

export default function ArchitectureVisualizer() {
  const [activePipelineId, setActivePipelineId] = useState('gujmarg-flow');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activePipeline = systemPipelines.find((p) => p.id === activePipelineId) || systemPipelines[0];

  return (
    <section id="architecture" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest">
            <Zap size={13} />
            <span>Interactive System Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production <span className="text-cyan-400">Architecture & Workflow</span> Visualizer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inspect the live data flows and logic pipelines engineered for government civic operations and deep learning computer vision.
          </p>
        </div>

        {/* Pipeline Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {systemPipelines.map((pipe) => (
            <button
              key={pipe.id}
              onClick={() => {
                setActivePipelineId(pipe.id);
                setActiveStepIndex(0);
              }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                activePipelineId === pipe.id
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/25 border border-cyan-400/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {pipe.id.includes('gujmarg') ? <ShieldCheck size={18} /> : <Eye size={18} />}
              <span>{pipe.title}</span>
            </button>
          ))}
        </div>

        {/* Visualizer Container */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Pipeline Info */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activePipeline.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {activePipeline.description}
            </p>
          </div>

          {/* Stepper Steps (Horizontally scrollable on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {activePipeline.steps.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeStepIndex === idx
                    ? 'bg-cyan-950/60 border-cyan-500 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    activeStepIndex === idx
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {st.step}
                  </span>
                  {activeStepIndex === idx && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  )}
                </div>
                <div className={`text-xs sm:text-sm font-bold ${
                  activeStepIndex === idx ? 'text-white' : 'text-slate-300'
                }`}>
                  {st.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                STAGE {activePipeline.steps[activeStepIndex].step}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {activePipeline.steps[activeStepIndex].title}
              </h4>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              {activePipeline.steps[activeStepIndex].desc}
            </p>

            {/* Stage Indicators */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>Production Verified Workflow</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Previous Stage
                </button>
                <button
                  disabled={activeStepIndex === activePipeline.steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(activePipeline.steps.length - 1, prev + 1))}
                  className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Next Stage
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

