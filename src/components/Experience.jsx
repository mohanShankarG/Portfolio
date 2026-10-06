import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Building2
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 uppercase tracking-widest">
            <Briefcase size={13} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-cyan-400">Experience & Track Record</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            3+ years contributing to government-scale public safety infrastructure, commercial enterprise CRM backends, and R&D robotics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-400/30"></div>

              {/* Date Box on Left (for larger screens) */}
              <div className="md:absolute md:-left-36 md:top-0 md:text-right md:w-28 hidden md:block">
                <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-cyan-400 border border-slate-800">
                  {exp.period.split('--')[0].trim()}
                </span>
                <div className="text-[11px] text-slate-500 mt-1 font-mono">
                  {exp.type}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-xl">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm text-cyan-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={14} />
                        {exp.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Date Badge */}
                  <div className="md:hidden">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-1">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
