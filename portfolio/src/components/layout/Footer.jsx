import React from 'react';
import { Heart, Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from '../../data/personal';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090e] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800/60">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Anisha Prakash Gurumukhi
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-md">
              AI & Data Science Developer | Full-Stack & Mobile App Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.contact.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/40 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.contact.email}`}
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500/40 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-600 transition-all hover:scale-110 ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Anisha Prakash Gurumukhi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
