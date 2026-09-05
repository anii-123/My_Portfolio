import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Cpu, BarChart2, Smartphone, Code, CheckCircle2, User } from 'lucide-react';
import { personal } from '../../data/personal';

const About = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      desc: "Architecting predictive ML engines with Random Forest, XGBoost, Scikit-Learn & Python. Multi-attribute scoring logic & optimization.",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400"
    },
    {
      icon: BarChart2,
      title: "Data Analytics & Power BI",
      desc: "Transforming complex datasets into actionable BI dashboards using Power BI, DAX measures, PostgreSQL & Power Query ETL pipelines.",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile App Engineering",
      desc: "Building offline-first Flutter/Dart mobile apps with SQLite persistence, location API auto-fill, and Haversine GPS distance algorithms.",
      color: "from-cyan-500/20 to-emerald-500/20 border-cyan-500/30 text-cyan-400"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      desc: "Designing responsive web applications with Flask REST APIs, React, JavaScript, HTML5/CSS3, and automated Vercel/Render deployments.",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="About Me"
          title="Bridging Artificial Intelligence with Scalable Applications"
          subtitle="A passionate developer dedicated to creating clean code, predictive data models, and user-centric web and mobile experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <User className="w-32 h-32 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Software Engineer & Data Enthusiast
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-normal mb-6">
                {personal.fullBio}
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Specialized in Machine Learning Models (Scikit-Learn, XGBoost)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Interactive Power BI Data Visualization & DAX</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Cross-Platform Flutter Mobile Apps & SQLite Persistence</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100+ LeetCode DSA Solutions Solved in Java</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl glass-panel glass-panel-hover border bg-gradient-to-br ${item.color} space-y-3`}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
