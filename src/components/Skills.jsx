import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Eye, 
  Wrench, 
  Cpu, 
  Search, 
  Code2, 
  Layers,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    frontend: Layout,
    backend: Server,
    databases: Database,
    aiAndVision: Eye,
    devopsAndTools: Wrench,
    embedded: Cpu
  };

  const categories = Object.keys(skillsData);

  // Flatten or filter skills
  const filteredCategories = categories.filter((catKey) => {
    if (activeCategory !== 'all' && activeCategory !== catKey) return false;
    if (!searchQuery.trim()) return true;

    const cat = skillsData[catKey];
    const matchesCategory = cat.title.toLowerCase().includes(searchQuery.toLowerCase());
    const hasMatchingSkill = cat.skills.some(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return matchesCategory || hasMatchingSkill;
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
            <Layers size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-cyan-400">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proficiencies across full-stack web infrastructure, database design, AI computer vision, and embedded hardware.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {categories.map((catKey) => {
              const cat = skillsData[catKey];
              const Icon = categoryIcons[catKey];
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategory(catKey)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === catKey
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <Icon size={15} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Filter tech (e.g. YOLO, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catKey) => {
            const cat = skillsData[catKey];
            const Icon = categoryIcons[catKey];

            return (
              <div
                key={catKey}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-5"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-white">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills in Category */}
                  <div className="space-y-3.5">
                    {cat.skills.map((skill, sIdx) => {
                      const isHighlighted = searchQuery && (
                        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
                      );

                      return (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-xl border transition-all ${
                            isHighlighted
                              ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-200'
                              : 'bg-slate-900/50 border-slate-800/70'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-semibold text-xs sm:text-sm text-slate-200">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                              {skill.level}
                            </span>
                          </div>

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] px-2 py-0.5 rounded bg-slate-950/60 text-slate-400 border border-slate-800/80 font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

