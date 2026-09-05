import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { skillCategories, skills } from '../../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Technical Proficiency"
          title="Skills & Technologies Matrix"
          subtitle="Comprehensive overview of tools, machine learning frameworks, data analytics platforms, and mobile & web development languages."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-slate-800/80 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-md`}>
                    <div className="w-full h-full bg-[#0d111a] rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono">
                      Proficiency: {skill.proficiency}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
