import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Briefcase, GraduationCap, Trophy, Rocket, Calendar } from 'lucide-react';
import { timeline } from '../../data/timeline';

const Timeline = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'project':
        return Rocket;
      case 'experience':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'achievement':
        return Trophy;
      default:
        return Calendar;
    }
  };

  return (
    <section id="timeline" className="py-24 px-4 relative bg-[#0a0d14]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Journey & Milestones"
          title="Experience, Projects & Academic Roadmap"
          subtitle="Chronological progression across software engineering, machine learning project deployments, and computer science education."
        />

        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {timeline.map((item, idx) => {
            const Icon = getIcon(item.type);
            return (
              <div key={idx} className="relative pl-8 group">
                {/* Timeline Node Bullet */}
                <div className="absolute -left-5 top-0 w-10 h-10 rounded-xl bg-slate-900 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg shadow-purple-500/20">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Left Year Label (Desktop) */}
                <div className="hidden sm:block absolute -left-36 top-2 font-mono text-sm font-bold text-purple-400">
                  {item.year}
                </div>

                {/* Card Body */}
                <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="sm:hidden text-xs font-mono text-purple-400 font-bold block mb-1">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-purple-400/90 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
