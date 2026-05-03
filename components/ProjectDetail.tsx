import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Layers, Cpu, Rocket, AlertTriangle, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-navy-900 overflow-y-auto custom-scrollbar"
    >
      {/* Sticky Back Navigation */}
      <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-navy-900 to-transparent pointer-events-none">
        <button
          onClick={onClose}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/80 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">Back to Portfolio</span>
        </button>
      </div>

      {/* Header Section (Text Only - No Image) */}
      <div className="relative w-full pt-32 pb-16 px-6 bg-gradient-to-b from-navy-800 to-navy-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/40 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-700/50 via-navy-900/0 to-transparent z-0"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex gap-3 flex-wrap">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs font-mono border border-neon-green/30 text-neon-green bg-neon-green/5 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white leading-tight">
              {project.title}
            </h1>
            
            <div className="max-w-3xl">
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {project.liveUrl && (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neon-purple/10 border border-neon-purple text-neon-purple rounded-lg hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(181,55,242,0.15)] hover:shadow-[0_0_30px_rgba(181,55,242,0.4)] font-mono text-sm font-bold tracking-wider"
                  >
                    <ExternalLink size={18} />
                    LIVE DEMO
                  </motion.a>
                )}
                {project.npmUrl && (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    href={project.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 font-mono text-sm font-bold tracking-wider"
                  >
                    <ExternalLink size={18} />
                    VIEW ON NPM
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-slate-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 font-mono text-sm font-bold tracking-wider"
                  >
                    <ExternalLink size={18} />
                    GITHUB
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detailed Content Body */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        
        {/* Overview Section */}
        <section className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Layers className="text-neon-purple" /> Overview
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">{project.overview}</p>
            </div>

            <div className="bg-navy-800/50 border border-white/5 p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" size={20} /> Problem Statement
              </h3>
              <p className="text-slate-400">{project.problemStatement}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-navy-800/30 border border-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-widest">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm text-slate-300 bg-navy-700/50 rounded border border-white/5 hover:border-neon-green/50 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-navy-800/30 border border-white/5 p-6 rounded-xl">
              <h3 className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-widest">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-neon-green mt-1">▹</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-[1px] bg-slate-800 flex-1"></div>
             <h2 className="text-2xl font-mono text-neon-green">TECHNICAL_DEEP_DIVE</h2>
             <div className="h-[1px] bg-slate-800 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Architecture */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Cpu className="text-neon-blue" /> Architecture & Flow
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {project.architecture.description}
              </p>
              <div className="bg-black/40 p-6 rounded-xl border border-slate-800 font-mono text-sm text-slate-300 space-y-3 shadow-inner">
                {project.pipeline.split('→').map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-neon-blue">{i + 1}.</span>
                    <span>{step.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & ML */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Database className="text-red-400" /> Data & Model
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-navy-800/30 border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-slate-200 font-semibold">
                    <Database size={16} /> Dataset
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{project.datasetDetails.source}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.datasetDetails.fields.map(f => (
                      <span key={f} className="text-xs px-2 py-1 bg-white/5 rounded text-slate-500">{f}</span>
                    ))}
                  </div>
                </div>

                {project.mlModel && (
                  <div className="p-4 rounded-lg bg-navy-800/30 border border-white/5">
                    <div className="flex items-center gap-2 mb-2 text-slate-200 font-semibold">
                      <Rocket size={16} /> Model Specs
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="block text-slate-500 text-xs">Algorithm</span>
                        <span className="text-neon-purple">{project.mlModel.algorithm}</span>
                      </div>
                      <div>
                        <span className="block text-slate-500 text-xs">Optimization</span>
                        <span className="text-slate-300">{project.mlModel.optimization || "N/A"}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Unique Points */}
        <section className="py-12 border-t border-slate-800">
           <h2 className="text-3xl font-bold text-white mb-8 text-center">Why This Project Matters</h2>
           <div className="grid md:grid-cols-3 gap-6">
             {project.uniqueSellingPoints.map((point, i) => (
               <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/5 hover:border-neon-green/30 transition-colors group">
                 <Rocket className="text-neon-green mb-4 group-hover:-translate-y-1 transition-transform" />
                 <p className="text-slate-300">{point}</p>
               </div>
             ))}
           </div>
        </section>

      </div>
      
      {/* Footer for Project */}
      <div className="py-12 text-center border-t border-white/5">
        <button onClick={onClose} className="text-slate-400 hover:text-neon-green transition-colors text-sm uppercase tracking-widest font-mono">
          Close Project
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;