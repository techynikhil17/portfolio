import React from 'react';
import { motion } from 'framer-motion';

const DOMAINS = [
  {
    name: '⚡ LLM & GENERATIVE AI',
    headerColor: 'text-neon-purple',
    skills: [
      'GPT-4', 'Gemini 3', 'Claude', 'Mistral', 'LLaMA 3', 'Qwen 3.5', 'Kimi K2.6',
      'Prompt Engineering', 'Chain-of-Thought', 'Few-Shot', 'RAG',
      'Embeddings', 'Vector Search', 'FAISS', 'ChromaDB',
      'AI Agents', 'Multi-Agent Orchestration', 'Function Calling', 'ReAct',
      'HuggingFace Transformers', 'Ollama', 'vLLM',
      'LoRA', 'PEFT', 'Hallucination Detection',
    ],
  },
  {
    name: '🎙️ VOICE & REAL-TIME AI',
    headerColor: 'text-neon-blue',
    skills: [
      'Whisper', 'Deepgram', 'ElevenLabs', 'Kokoro', 'Coqui', 'Bark',
      'STT→LLM→TTS Pipeline', 'Async Streaming', 'WebSocket Orchestration',
      'Interruption Handling', 'Persona Switching', 'Session Management',
    ],
  },
  {
    name: '🧠 MACHINE LEARNING',
    headerColor: 'text-red-400',
    skills: [
      'Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost',
      'PyTorch', 'TensorFlow', 'NLP', 'Transformers',
      'Tokenization', 'Embeddings', 'Sentiment Analysis', 'NER',
      'Pandas', 'NumPy', 'Feature Engineering', 'Ensemble Methods',
      'Cross-Validation', 'SHAP', 'AUC-ROC', 'F1',
    ],
  },
  {
    name: '🔧 BACKEND & INFRA',
    headerColor: 'text-neon-green',
    skills: [
      'Python', 'Django', 'FastAPI', 'REST APIs', 'PostgreSQL',
      'Redis', 'Supabase', 'Docker', 'Git', 'Vercel', 'Azure',
      'TypeScript', 'SQL', 'Celery', 'WebSockets',
    ],
  },
  {
    name: '🎨 FRONTEND & TOOLING',
    headerColor: 'text-yellow-400',
    skills: [
      'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript',
      'n8n', 'Cursor AI', 'Claude Code', 'GitHub Copilot', 'Replit',
    ],
  },
];

const STATUS_ROWS = [
  { key: 'DESIGNATION', value: 'AI Product Developer Intern @ Rooman Technologies' },
  { key: 'LOCATION', value: 'Bangalore, India' },
  { key: 'STATUS', value: 'Open to AI Engineer / SWE / Intern roles' },
];

const CREDENTIALS = [
  { code: 'AZ-900', label: 'Microsoft Certified: Azure Fundamentals' },
  { code: 'INF-AI', label: 'Infosys: Principles of Generative AI' },
  { code: 'ANT-101', label: 'Anthropic: Claude 101' },
  { code: 'ANT-CC', label: 'Anthropic: Claude Code in Action' },
  { code: 'IJRAR', label: 'Research Publication: AI-Based Crime Pattern Prediction (87% acc, XGBoost)' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full hud-frame px-6 md:px-10 py-12 md:py-16">
        <span className="hud-corner hud-tl" />
        <span className="hud-corner hud-tr" />
        <span className="hud-corner hud-bl" />
        <span className="hud-corner hud-br" />
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="flex items-center text-3xl md:text-5xl font-display font-bold text-white mb-6"
        >
          <span className="text-neon-green mr-4 font-mono text-2xl md:text-3xl">01.</span>
          About Me
        </motion.h2>
        <div className="h-[1px] bg-gradient-to-r from-neon-green/50 to-transparent max-w-md mb-16"></div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Bio + Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                I'm <span className="text-white font-medium">Nikhil</span> — AI Product Developer building production-grade <span className="text-neon-purple">LLM systems</span>, <span className="text-neon-blue">voice agents</span>, and AI-powered SaaS. Not demos. Not notebooks. Shipped systems.
              </p>
              <p>
                Currently interning at <span className="text-white font-medium">Rooman Technologies</span> where I built a real-time multi-persona STT→LLM→TTS voice agent, engineered full CRM modules (Accounts, Meetings, Tasks) with Django + Convex, and led intern teams shipping ERP systems used in production.
              </p>
              <p>
                Targeting <span className="text-neon-green">AI Engineer</span> and <span className="text-neon-green">AI/SWE Intern</span> roles.
              </p>
            </div>

            {/* Status Terminal Card */}
            <div className="bg-black/40 border border-slate-800 rounded-xl p-6 font-mono text-sm space-y-3">
              {STATUS_ROWS.map(row => (
                <div key={row.key} className="flex flex-wrap items-start gap-3">
                  <span className="text-slate-500 w-32 flex-shrink-0">{row.key}</span>
                  <span className="text-neon-green">→</span>
                  <span className="text-slate-300 flex-1 min-w-0">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Credentials Strip */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-wrap gap-3"
            >
              {CREDENTIALS.map(c => (
                <motion.span
                  key={c.code}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="font-mono text-xs px-4 py-2 rounded-full border border-slate-700 bg-navy-800/40 text-slate-400 hover:border-neon-green/50 hover:text-neon-green transition-colors cursor-default"
                >
                  <span className="text-neon-green">[{c.code}]</span>{' '}
                  <span className="text-slate-400">{c.label}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Skill Intelligence Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-800/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm max-h-[680px] overflow-y-auto custom-scrollbar space-y-8"
          >
            {DOMAINS.map((domain, di) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: di * 0.1 }}
              >
                <h4 className={`text-xs font-mono uppercase tracking-widest mb-3 ${domain.headerColor}`}>
                  {domain.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded border border-white/5 bg-navy-800/60 text-slate-400 cursor-default hover:border-neon-green/40 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
