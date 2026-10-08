import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  FileText,
  CheckCircle2,
  Heart,
  Users
} from 'lucide-react';
import { 
  personalInfo, 
  professionalSummary, 
  experienceData, 
  projectsData, 
  educationData, 
  achievementsData, 
  skillsData,
  softSkills,
  personalInterests
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">
                Curriculum Vitae -- {personalInfo.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Full Stack Developer & AI Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF button */}
            <a
              href={personalInfo.resumePdfUrl}
              download="Mohan_Shankar_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-200 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base font-semibold text-cyan-400 mt-0.5">
                {personalInfo.title}
              </p>
            </div>
            <div className="text-xs text-slate-400 space-y-1 font-mono sm:text-right">
              <div>{personalInfo.location}</div>
              <div>{personalInfo.phone}</div>
              <div className="text-cyan-300">{personalInfo.email}</div>
              <div className="text-slate-400">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 underline mr-2">LinkedIn</a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
              Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {professionalSummary}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
              Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-white">{exp.role}</span>
                      <span className="text-slate-400"> — {exp.company}</span>
                    </div>
                    <span className="font-mono text-cyan-400 text-xs font-semibold">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 pl-3 border-l-2 border-slate-800 text-xs text-slate-300 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>• {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-bold text-white">{proj.title.split('—')[0]}</span>
                    <span className="font-mono text-cyan-400 text-[10px] shrink-0">{proj.badge}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tech.slice(0, 5).map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Highlights / Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-white">Programming Languages:</strong> JavaScript, Python, ABAP, C, C++, Embedded C
              </div>
              <div>
                <strong className="text-white">Frontend Technologies:</strong> React.js, Angular.js, HTML5, CSS3, Material UI, Axios, Vite, Responsive Web Design
              </div>
              <div>
                <strong className="text-white">Backend Technologies:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, Serverless Functions, Cron Jobs, RBAC
              </div>
              <div>
                <strong className="text-white">Databases & Enterprise Data:</strong> MongoDB Atlas, PostgreSQL, SAP HANA, Oracle DB, MySQL, Redis
              </div>
              <div>
                <strong className="text-white">AI/ML & Computer Vision:</strong> Python, YOLOv8, YOLOv11, BoT-SORT, OpenCV, Object Detection, Tracking, LabelImg, Label Studio
              </div>
              <div>
                <strong className="text-white">Cloud & Deployment:</strong> Vercel, Cloudinary, Render
              </div>
              <div>
                <strong className="text-white">Enterprise Tools & Middleware:</strong> SAP Integration Suite (CPI), SAP JCo, MuleSoft, SOAMANAGER, SAP GUI (SE37, WE20/WE21, SPROXY), Salesforce LWC, VS Code, Postman, Git, GitHub, Prisma ORM
              </div>
              <div>
                <strong className="text-white">Embedded Systems, Robotics & Healthcare IoT:</strong> Raspberry Pi 5 & 4, ROS, WhatsApp Bot, Telegram Bot API, LiDAR SLAM, MAX30102 (SpO2/Pulse), DHT22, MPU6050 IMU, MQTT, Speech Processing (TTS), IR/Ultrasonic Sensors, Auto-Stop Safety
              </div>
            </div>
          </div>

          {/* Soft Skills & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {softSkills.map((sk) => (
                  <span key={sk} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
                Interests
              </h2>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {personalInterests.map((it) => (
                  <span key={it} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-slate-400">{edu.institution} ({edu.grade})</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1">
                Achievements
              </h2>
              <ul className="text-xs space-y-1 text-slate-300">
                {achievementsData.map((ach, idx) => (
                  <li key={idx}>• <strong className="text-white">{ach.title}</strong> — {ach.issuer}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
