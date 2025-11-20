import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Background from './components/Background';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent body scroll when project is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <main className="relative w-full min-h-screen text-slate-300 selection:bg-neon-green selection:text-navy-900">
      <Background />

      {/* Main Content - Always rendered to preserve scroll, but pushed back when modal is open */}
      <motion.div
        animate={{
          scale: selectedProject ? 0.95 : 1,
          opacity: selectedProject ? 0.5 : 1,
          filter: selectedProject ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 flex flex-col gap-0"
      >
        <Hero />
        <About />
        <Portfolio onSelectProject={setSelectedProject} />
        <Contact />
      </motion.div>

      {/* Full Screen Project View */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;