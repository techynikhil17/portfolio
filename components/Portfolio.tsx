import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, Folder } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects" className="py-32 px-6 min-h-screen relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <h2 className="flex items-center text-3xl md:text-5xl font-display font-bold text-white mb-6">
            <span className="text-neon-purple mr-4 font-mono text-2xl md:text-3xl">02.</span> 
            Selected Works
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-neon-purple/50 to-transparent max-w-md"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              variants={cardVariants}
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-navy-800/40 backdrop-blur-sm border border-white/5 hover:border-neon-green/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col h-[500px]"
              onClick={() => onSelectProject(project)}
            >
              {/* Image Half */}
              <div className="h-3/5 w-full relative overflow-hidden">
                 <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-multiply"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent z-20"></div>
                 <motion.img
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-md p-2 rounded-full text-neon-green">
                    <ArrowUpRight size={20} />
                 </div>
              </div>

              {/* Content Half */}
              <div className="p-8 flex flex-col flex-grow relative z-30 -mt-10">
                <div className="flex items-center justify-between mb-4">
                   <Folder className="text-neon-green" size={28} />
                   <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.slice(0,3).map(tag => (
                        <span key={tag} className="text-xs font-mono text-slate-300">{tag}</span>
                    ))}
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-green to-neon-purple opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;