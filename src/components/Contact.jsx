import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  Sparkles,
  MessageSquare,
  ExternalLink,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Live IST Clock (Indian Standard Time)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const openGmailCompose = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(
      formData.subject || `Opportunity Inquiry from ${formData.name || 'Visitor'}`
    )}&body=${encodeURIComponent(
      `Hello Mohan,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
    )}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // POST directly to FormSubmit backend API
      const response = await fetch("https://formsubmit.co/ajax/mohan.shankar62892@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || data.message)) {
        setStatus({
          type: 'success',
          message: 'Message delivered directly to Mohan’s inbox! Thank you, I will reply shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'fallback',
          message: 'Click below to dispatch directly via Gmail web or your mail client.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'fallback',
        message: 'Network error with automatic dispatch. Click below to send directly via Gmail.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest">
            <MessageSquare size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss <span className="text-cyan-400">High-Impact Engineering</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for full-time Full Stack Developer, React.js, Node.js, and AI / Computer Vision roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Direct Contact Information</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                    <Mail size={16} className="text-cyan-400" />
                    <span>Email Address</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 text-xs flex items-center gap-1 transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span className="text-[10px]">{copiedEmail ? "Copied!" : "Copy"}</span>
                    </button>
                    <button
                      onClick={openGmailCompose}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 text-xs flex items-center gap-1 transition-colors"
                      title="Open in Gmail"
                    >
                      <ExternalLink size={13} className="text-cyan-400" />
                      <span className="text-[10px]">Gmail</span>
                    </button>
                  </div>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors block break-all font-mono"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                    <Phone size={16} className="text-cyan-400" />
                    <span>Phone / WhatsApp</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 text-xs flex items-center gap-1 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span className="text-[10px]">{copiedPhone ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors block font-mono"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* Location & Live Clock */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>Current Location</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
                  <Clock size={13} className="text-emerald-400" />
                  <span>Local Time (IST):</span>
                  <span className="text-cyan-300 font-semibold">{currentTime || 'Loading...'}</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-xs font-semibold"
                >
                  <Linkedin size={16} className="text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-xs font-semibold"
                >
                  <Github size={16} className="text-cyan-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>

            </div>

          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below to deliver an inquiry directly to Mohan's inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Subject / Role Opportunity</label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Developer Opening at [Company]"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe the opportunity, project requirements, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Delivering to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={openGmailCompose}
                    className="px-5 py-3.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:border-cyan-500/50"
                  >
                    <ExternalLink size={16} className="text-cyan-400" />
                    <span>Open in Gmail</span>
                  </button>
                </div>

                {status && status.type === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs flex items-start gap-3">
                    <Check size={18} className="shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <div className="font-bold">{status.message}</div>
                      <div className="text-[11px] text-emerald-400/80 mt-0.5">Check your inbox or spam folder if this was your first test submission.</div>
                    </div>
                  </div>
                )}

                {status && status.type === 'fallback' && (
                  <div className="p-4 rounded-xl bg-blue-950/70 border border-blue-500/50 text-blue-200 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle size={16} className="text-cyan-400" />
                      <span>{status.message}</span>
                    </div>
                    <button
                      type="button"
                      onClick={openGmailCompose}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors"
                    >
                      <ExternalLink size={13} />
                      <span>Open in Gmail Web Now</span>
                    </button>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
