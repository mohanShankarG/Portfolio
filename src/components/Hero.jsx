import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Eye, 
  Cpu, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const roles = [
    "Full Stack Web Developer",
    "AI & Computer Vision Engineer",
    "React.js & Node.js Specialist",
    "PostgreSQL & MongoDB Architect",
    "YOLOv11 & Video Analytics Dev"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[380px] h-[380px] bg-violet-600/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium text-emerald-400">Available for Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono">Full-time / High-Impact Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Typewriter */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-cyan-300">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-7 ml-1 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed">
              Full Stack Developer with <strong className="text-white dark:text-white light:text-slate-900">3+ years</strong> of hands-on experience building production-grade web systems, RESTful microservices, and government audit platforms using <strong className="text-cyan-300">React.js, Node.js, Express, MongoDB, & PostgreSQL</strong>. Specialized in integrating computer vision with <strong className="text-cyan-300">Python, YOLOv11 & PyTorch</strong>.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800">
                <MapPin size={14} className="text-cyan-400" />
                {personalInfo.location}
              </span>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              >
                <Mail size={14} className="text-cyan-400" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              >
                <Phone size={14} className="text-cyan-400" />
                {personalInfo.phone}
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-[1.02]"
              >
                <Download size={18} className="text-cyan-400" />
                <span>Resume / CV</span>
              </button>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-800 bg-slate-900/70 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-800 bg-slate-900/70 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Tech Profile Card (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer gradient border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 p-6 sm:p-8 backdrop-blur-xl space-y-6">
                
                {/* Header with Avatar & Status */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
                      <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center font-bold text-2xl text-cyan-300">
                        MS
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg">
                        Mohan Shankar G
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono">
                        3+ Years Full-Stack & Vision
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="text-[11px] text-slate-400">Satra Service & Solutions</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Active
                  </span>
                </div>

                {/* Tech Highlights Grid */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal size={14} className="text-cyan-400" />
                    <span>Specialized Domains</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="font-semibold text-cyan-300 mb-0.5">Gov Road Safety</div>
                      <div className="text-slate-400 text-[11px]">GujMarg Complaint Workflow & Officer Rank</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="font-semibold text-emerald-300 mb-0.5">YOLOv11 Vision</div>
                      <div className="text-slate-400 text-[11px]">Highway Asset Detection & Redis Queues</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="font-semibold text-purple-300 mb-0.5">MERN E-Commerce</div>
                      <div className="text-slate-400 text-[11px]">Nirupaa Store with Sharp & Cloudinary</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="font-semibold text-amber-300 mb-0.5">Robotics & IoT</div>
                      <div className="text-slate-400 text-[11px]">Sensor Integration & Assistive Wheelchair</div>
                    </div>
                  </div>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                  <div className="p-2 rounded-lg bg-slate-950/40">
                    <div className="text-xl font-extrabold text-cyan-400 font-mono">3+</div>
                    <div className="text-[11px] text-slate-400">Years Exp</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/40">
                    <div className="text-xl font-extrabold text-emerald-400 font-mono">5+</div>
                    <div className="text-[11px] text-slate-400">Major Apps</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/40">
                    <div className="text-xl font-extrabold text-blue-400 font-mono">100%</div>
                    <div className="text-[11px] text-slate-400">Production</div>
                  </div>
                </div>

                {/* Target roles pill */}
                <div className="pt-1">
                  <div className="text-[11px] text-slate-400 mb-1.5 font-mono">🎯 Target Roles:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.targetRoles.map((role) => (
                      <span key={role} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Tech Stack Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Core Technologies & Production Frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              "React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", 
              "Python", "PyTorch", "YOLOv11", "OpenCV", "Redis", 
              "Prisma ORM", "Docker", "Git/GitHub", "Material UI", "Vite"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
