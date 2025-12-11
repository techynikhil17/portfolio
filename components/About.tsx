import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SKILLS } from '../data';
import { Code, Terminal, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  
  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 min-h-screen flex items-center relative overflow-hidden">
      {/* Dividing Glow Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="flex items-center text-3xl md:text-4xl font-display font-bold text-white mb-8">
            <span className="text-neon-green mr-4 font-mono text-2xl">01.</span> About Me
          </h2>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
            <p>
              I’m <span className="text-white font-medium">Nikhil</span>, a final-year ISE student with a relentless focus on bridging the gap between <span className="text-neon-purple">theoretical AI</span> and <span className="text-neon-blue">deployed applications</span>.
            </p>
            <p>
              My work involves analyzing failed startups with large language models, predicting urban crime patterns using XGBoost, and building recommendation engines that actually understand context. I don't just run Jupyter notebooks—I build APIs, deploy to edge functions, and solve real-world problems.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="mt-10 space-y-6">
            <SkillGroup icon={<Terminal size={18} />} title="Languages" skills={["Python", "SQL", "Java"]} />
            <SkillGroup icon={<Cpu size={18} />} title="Machine Learning" skills={["XGBoost", "Scikit-Learn", "Pandas", "TensorFlow"]} />
            <SkillGroup icon={<Code size={18} />} title="Engineering" skills={["FastAPI", "Docker", "Flask", "REST API", "Vercel"]} />
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div style={{ y: imageY }} className="relative group hidden md:block">
          <div className="absolute inset-0 border-2 border-neon-green rounded-lg translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          <div className="relative rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 aspect-[4/5]">
             <img 
               src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" 
               alt="Nikhil Profile" 
               className="object-cover w-full h-full"
             />
             <div className="absolute inset-0 bg-navy-900/30 hover:bg-transparent transition-colors duration-300"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const SkillGroup = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 text-neon-green">{icon}</div>
    <div>
      <h4 className="text-white font-mono text-sm mb-2 uppercase tracking-wider">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="text-sm text-slate-400 bg-navy-800 px-2 py-1 rounded hover:text-white transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default About;
