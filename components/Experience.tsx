import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import { EXPERIENCE } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <h2 className="flex items-center text-3xl md:text-5xl font-display font-bold text-white mb-6">
            <span className="text-neon-blue mr-4 font-mono text-2xl md:text-3xl">03.</span>
            Experience
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-neon-blue/50 to-transparent max-w-md"></div>
        </motion.div>

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 border-l border-slate-800 hover:border-neon-blue/50 transition-colors duration-500"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(100,200,255,0.6)]"></div>

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Briefcase size={16} className="text-neon-blue" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-neon-green font-mono text-sm">{exp.company}</p>
                  <p className="text-slate-500 font-mono text-xs mt-1">{exp.location}</p>
                </div>
                <span className="px-3 py-1 font-mono text-xs text-slate-400 border border-slate-700 rounded-full bg-navy-800/50">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-6 mt-6">
                {exp.projects.map((proj, pi) => (
                  <div key={pi}>
                    <h4 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-3">{proj.name}</h4>
                    <ul className="space-y-2">
                      {proj.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                          <ChevronRight size={14} className="text-neon-green mt-1 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {exp.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono text-slate-500 bg-navy-800/40 border border-white/5 rounded hover:text-neon-blue hover:border-neon-blue/30 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
