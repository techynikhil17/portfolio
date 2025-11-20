import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center flex-col px-6 overflow-hidden">
      
      {/* Parallax Background Elements */}
      <motion.div style={{ y: useTransform(scrollY, [0, 1000], [0, 400]) }} className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-neon-blue/10 rounded-full blur-[120px]"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center space-y-8 max-w-5xl relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-neon-green font-mono text-lg tracking-widest"
        >
          HI, MY NAME IS
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tight leading-none mix-blend-overlay"
        >
          NIKHIL.
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-semibold text-slate-400"
        >
          I build intelligent systems.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          AI Engineer specializing in <span className="text-neon-blue">Machine Learning</span>, <span className="text-neon-purple">GenAI</span>, and production-grade Python development.
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 justify-center mt-12"
        >
          <SocialButton href={SOCIAL_LINKS.github} icon={<Github size={22} />} />
          <SocialButton href={SOCIAL_LINKS.linkedin} icon={<Linkedin size={22} />} />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 text-slate-500"
      >
        <ChevronDown size={32} className="opacity-50" />
      </motion.div>
    </section>
  );
};

const SocialButton = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-full border border-slate-700 text-slate-300 hover:text-neon-green hover:border-neon-green hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-navy-900/30"
  >
    {icon}
  </a>
);

export default Hero;