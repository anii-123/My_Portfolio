import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, Code2, Cpu, BarChart3, Smartphone } from 'lucide-react';
import { personal } from '../../data/personal';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personal.roles[roleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden bg-grid-pattern">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10 space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-medium text-purple-300 shadow-xl animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Open for AI/ML & Full-Stack Opportunities</span>
        </div>

        {/* Main Name Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-gradient-purple">{personal.name}</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-slate-300 max-w-3xl mx-auto">
            {personal.title}
          </p>
        </div>

        {/* Animated Typing Subhead */}
        <div className="h-16 flex items-center justify-center">
          <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 font-mono text-sm sm:text-base text-cyan-400 flex items-center gap-2 shadow-2xl">
            <Terminal className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span className="truncate">{displayText}</span>
            <span className="w-2 h-4 bg-purple-400 animate-pulse flex-shrink-0" />
          </div>
        </div>

        {/* Bio Paragraph */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          {personal.shortBio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personal.contact.email}`}
            className="px-6 py-3.5 rounded-xl glass-panel glass-panel-hover text-white font-semibold text-sm tracking-wide flex items-center gap-2"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Counter Stats Bar */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {personal.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel glass-panel-hover text-center border border-slate-800/80"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-purple font-mono">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
