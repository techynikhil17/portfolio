import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
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

      {/* Main Content - dim only on modal (no always-on filter, which would force compositing every frame) */}
      <motion.div
        animate={{ opacity: selectedProject ? 0.4 : 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ pointerEvents: selectedProject ? 'none' : 'auto' }}
        className="relative z-10 flex flex-col gap-0"
      >
        <Hero />
        <About />
        <Experience />
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