import React, { useState, useEffect } from 'react';
import { Search, X, Folder, Code, Terminal, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { personal } from '../../data/personal';

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    { label: 'Jump to About Section', href: '#about', icon: Terminal },
    { label: 'View Featured Projects', href: '#projects', icon: Folder },
    { label: 'Inspect Skills Matrix', href: '#skills', icon: Code },
    { label: 'View Experience & Certifications', href: '#certificates', icon: Terminal },
    { label: 'Contact Anisha', href: '#contact', icon: Mail },
    { label: 'GitHub Profile', href: personal.contact.github, icon: FaGithub, external: true },
    { label: 'LinkedIn Profile', href: personal.contact.linkedin, icon: FaLinkedin, external: true }
  ];

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredActions = quickActions.filter(a =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#0f131f] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800">
          <Search className="w-5 h-5 text-purple-400" />
          <input
            type="text"
            placeholder="Type a command or search projects (e.g., EcoPack, Power BI, Python)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Quick Actions Section */}
          {filteredActions.length > 0 && (
            <div>
              <div className="text-[11px] font-mono tracking-wider text-slate-500 uppercase px-3 mb-2">
                Quick Navigation
              </div>
              <div className="space-y-1">
                {filteredActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={idx}
                      href={action.href}
                      target={action.external ? "_blank" : "_self"}
                      rel={action.external ? "noreferrer" : ""}
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 border border-transparent transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                        <span>{action.label}</span>
                      </div>
                      {action.external && <ExternalLink className="w-3.5 h-3.5 text-slate-500" />}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-mono tracking-wider text-slate-500 uppercase px-3 mb-2">
                Projects ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <a
                    key={p.id}
                    href={`#projects`}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/80 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300">
                        {p.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {p.subtitle}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {p.badge}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {filteredActions.length === 0 && filteredProjects.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching commands or projects found for "{query}"
            </div>
          )}
        </div>

        {/* Command Palette Footer */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">ESC</kbd> to close</span>
          <span>Tip: Use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Ctrl + K</kbd> anywhere</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
