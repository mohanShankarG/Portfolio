import React from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  GitBranch, 
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';
import { professionalSummary, personalInfo, softSkills, personalInterests } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Enterprise Full Stack",
      desc: "Architecting end-to-end web platforms using React.js, Node.js, Express, and PostgreSQL/MongoDB with robust RBAC and high-performance server-side data workflows.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      icon: Cpu,
      title: "AI & Computer Vision",
      desc: "Deploying state-of-the-art YOLOv11 and BoT-SORT models for real-world automated highway asset detection, video batch processing, and chainage deduplication.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: Zap,
      title: "Automated Workflows & Jobs",
      desc: "Engineering scheduled Cron daemons for automated officer ranking, continuous record archival, Redis worker queues, and SLA violation escalation algorithms up to the CMO.",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20"
    },
    {
      icon: Database,
      title: "Data & Embedded Systems",
      desc: "Designing databases (PostgreSQL, MongoDB, Redis, Prisma) and integrating edge hardware (Raspberry Pi 5 & 4) with WhatsApp/Telegram emergency cloud alerting and healthcare robotics.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-900/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest">
            <Sparkles size={13} />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering at the intersection of <span className="text-cyan-400">Web Scale</span>, <span className="text-blue-400">Computer Vision</span> & <span className="text-emerald-400">Embedded IoT</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From Raspberry Pi 5 & 4 healthcare robotics and Cloud Emergency Alerting Bots to state-level governmental road safety portals and deep learning computer vision pipelines.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Detailed Narrative (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span>The Engineering Philosophy</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {professionalSummary}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Currently at <strong className="text-cyan-300">Satra Service and Solutions</strong>, I architect and scale critical modules for Gujarat State Government's <strong className="text-white">GujMarg Road Safety Portal</strong> with CMO escalation, alongside engineering highway furniture asset detection using <strong className="text-cyan-300">YOLOv11 & Redis</strong>.
              </p>

              {/* Key Highlights list */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                {[
                  "Production-grade full-stack architectures serving governmental civil operations (GujMarg)",
                  "Automated cron jobs for daily ranking computations and massive record archiving",
                  "Deep learning batch pipelines processing highway video surveys with deduplication",
                  "Hardware integration with Raspberry Pi 5 & 4, WhatsApp/Telegram emergency bots (Ambulance, Hospital, Family, Police), and medical sensor automation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Working Principles */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Users size={14} className="text-cyan-400" />
                <span>Soft Skills & Professional Practices</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Core Pillars (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90 hover:border-slate-700 transition-all hover:scale-[1.01] space-y-3"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pillar.bg}`}>
                      <Icon className={pillar.color} size={22} />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Interests & Continuous Learning */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Compass size={14} className="text-emerald-400" />
                <span>Personal Interests & Activities</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs bg-slate-900/90 border border-slate-800/90 text-slate-300 font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
