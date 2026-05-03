import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative flex flex-col items-center justify-center min-h-[80vh]">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-card max-w-3xl w-full p-12 rounded-2xl text-center border border-white/5 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50"></div>
        
        <p className="text-neon-green font-mono mb-4 tracking-widest text-sm">05. WHAT'S NEXT?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          I'm currently open to new opportunities in AI Engineering and Full Stack Development. 
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:nikhilchowdary334@gmail.com" 
            className="px-8 py-4 bg-transparent border border-neon-green text-neon-green font-mono rounded hover:bg-neon-green/10 transition-all duration-300 flex items-center gap-2"
          >
            <Mail size={18} /> Say Hello
          </a>
          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-4 bg-navy-900 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-all"><Github size={20} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-navy-900 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-all"><Linkedin size={20} /></a>
          </div>
        </div>

      </motion.div>

      <footer className="mt-24 text-slate-500 font-mono text-sm flex flex-col items-center gap-2">
        <p>Designed & Built by Nikhil</p>
        <p className="text-xs opacity-50">© 2025</p>
      </footer>
    </section>
  );
};

export default Contact;
