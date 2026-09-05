import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f131f] border border-slate-700/80 rounded-3xl shadow-2xl glass-panel relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f131f] via-[#0f131f]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700 hover:scale-110 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Header overlay */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-600/30 text-purple-300 border border-purple-500/40 backdrop-blur-md">
              {project.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.demo && project.demo.startsWith('http') && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-purple-500/20"
              >
                <span>View Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl glass-panel hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>

          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([key, val], idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 font-mono capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-lg font-bold text-purple-300 mt-1">{val}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-rose-400 uppercase font-mono tracking-wider">
                The Problem
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 uppercase font-mono tracking-wider">
                The Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white">Key Technical Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Stack */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white">System Architecture Overview</h4>
              <div className="space-y-2">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-cyan-300 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
