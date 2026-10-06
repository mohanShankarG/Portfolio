import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  Cpu, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { educationData, achievementsData } from '../data/portfolioData';

export default function Education() {
  const achievementIcons = {
    Award: Award,
    Cpu: Cpu,
    Trophy: Trophy
  };

  return (
    <section id="education" className="py-24 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-widest">
            <GraduationCap size={14} />
            <span>Academic Background & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-cyan-400">Key Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Foundation in Computer Science and Engineering from Andhra University with distinguished recognitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-cyan-400" />
              <span>Formal Education</span>
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-800">
                      {edu.period}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">
                      {edu.grade}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm text-cyan-400">
                      <span className="font-semibold">{edu.institution}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Awards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Award size={18} className="text-amber-400" />
              <span>Honors & Recognitions</span>
            </h3>

            <div className="space-y-4">
              {achievementsData.map((ach, idx) => {
                const IconComponent = achievementIcons[ach.icon] || Award;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <IconComponent size={22} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white">
                        {ach.title}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">
                        {ach.issuer}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
