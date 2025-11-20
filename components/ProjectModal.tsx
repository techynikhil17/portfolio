import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Cpu, Database, Layers, Code2, Rocket } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/90 backdrop-blur-md p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-${project.id}`}
        className="bg-[#0a192f] w-full max-w-5xl min-h-screen md:min-h-0 md:h-auto md:max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-neon-purple hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header Image */}
        <div className="relative h-64 md:h-80 shrink-0">
            <motion.img
              layoutId={`image-${project.id}`}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                <motion.h2 
                    layoutId={`title-${project.id}`}
                    className="text-3xl md:text-5xl font-bold text-white font-display mb-2"
                >
                    {project.title}
                </motion.h2>
                <p className="text-neon-green font-mono text-sm md:text-base">{project.tags.join(' • ')}</p>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Main Column */}
                <div className="lg:col-span-2 space-y-10">
                    
                    {/* Overview */}
                    <motion.section variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <Layers className="text-neon-purple" size={20} /> Overview
                        </h3>
                        <p className="text-slate-300 leading-relaxed">{project.overview}</p>
                    </motion.section>

                    {/* Problem & Solution */}
                    <motion.section variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-navy-900 p-6 rounded-xl border border-slate-800">
                        <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                        <p className="text-slate-300">{project.problemStatement}</p>
                    </motion.section>

                    {/* Architecture/Pipeline */}
                    <motion.section variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Cpu className="text-neon-blue" size={20} /> Architecture & Pipeline
                        </h3>
                        <div className="space-y-4">
                            {project.architecture.description && (
                                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-neon-blue">
                                    <p className="font-mono text-sm text-neon-blue mb-1">Workflow</p>
                                    <p className="text-slate-300">{project.architecture.description}</p>
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(project.architecture).map(([key, value]) => {
                                    if (key === 'description') return null;
                                    return (
                                        <div key={key} className="bg-navy-800/50 p-4 rounded-lg">
                                            <span className="text-xs uppercase tracking-wider text-slate-500">{key.replace('_', ' ')}</span>
                                            <p className="text-slate-200 font-medium mt-1">{value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.section>

                    {/* Features */}
                    <motion.section variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
                        <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                    <span className="text-neon-green mt-1">▹</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    {/* ML Model Specifics (if applicable) */}
                    {project.mlModel && (
                         <motion.section variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }} className="border-t border-slate-800 pt-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Rocket className="text-red-400" size={20} /> ML Methodology
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-slate-400 text-sm mb-1">Algorithm</h4>
                                    <p className="text-white">{project.mlModel.algorithm}</p>
                                </div>
                                <div>
                                    <h4 className="text-slate-400 text-sm mb-1">Evaluation</h4>
                                    <p className="text-white">{project.mlModel.evaluation}</p>
                                </div>
                                <div className="md:col-span-2">
                                    <h4 className="text-slate-400 text-sm mb-1">Feature Engineering</h4>
                                    <p className="text-slate-300 text-sm">{project.mlModel.featureEngineering}</p>
                                </div>
                            </div>
                         </motion.section>
                    )}
                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">
                    
                    {/* Dataset */}
                    <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="bg-navy-800/30 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Database className="text-yellow-400" size={18} /> Dataset
                        </h3>
                        <p className="text-sm text-slate-300 mb-4">{project.datasetDetails.source}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.datasetDetails.fields.map(field => (
                                <span key={field} className="text-xs bg-navy-900 text-slate-400 px-2 py-1 rounded border border-slate-700">{field}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Code2 className="text-neon-green" size={18} /> Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 text-sm text-neon-green border border-neon-green/20 bg-neon-green/5 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Unique Selling Points */}
                    <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="space-y-2">
                        <h3 className="text-lg font-bold text-white mb-2">Why it stands out</h3>
                        {project.uniqueSellingPoints.map((point, i) => (
                             <div key={i} className="p-3 bg-gradient-to-r from-purple-900/20 to-transparent border-l-2 border-neon-purple">
                                 <p className="text-xs text-slate-200">{point}</p>
                             </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;