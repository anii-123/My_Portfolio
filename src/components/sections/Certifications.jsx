import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Award, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { certifications } from '../../data/certifications';

const Certifications = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Verified Credentials"
          title="Certifications & Industry Simulations"
          subtitle="Verified accomplishments from Deloitte, TATA, Udemy, and intensive algorithmic coding programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl glass-panel glass-panel-hover border border-slate-800 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900 text-purple-300 border border-slate-800">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-purple-400">
                  {cert.issuer} • {cert.date}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
