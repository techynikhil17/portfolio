import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

const STARK = '#00bfff';

const MODULE_FEED = [
  'INITIALIZING GHOSTFOLIO...',
  'BOOTING ERRBUDDY...',
  'SCANNING NPM HAWK...',
  'CALIBRATING VOICE AGENT...',
  'INDEXING CRIME-PRED MODEL...',
];

const Hero: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFeedIndex(i => (i + 1) % MODULE_FEED.length), 1800);
    return () => clearInterval(id);
  }, []);

  // rAF-throttled mouse glow via CSS variables — no React re-renders
  useEffect(() => {
    const el = rootRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    let raf = 0;
    let nx = 50, ny = 50;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      nx = ((e.clientX - r.left) / r.width) * 100;
      ny = ((e.clientY - r.top) / r.height) * 100;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          glow.style.setProperty('--mx', `${nx}%`);
          glow.style.setProperty('--my', `${ny}%`);
          raf = 0;
        });
      }
    };
    el.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      el.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="stark-hero relative w-full min-h-screen overflow-hidden"
      style={{ background: 'transparent', fontFamily: "'Rajdhani', sans-serif" }}
    >
      <StarkStyles />

      {/* Mouse-reactive radial glow — driven by CSS vars, no React state */}
      <div ref={glowRef} className="hero-glow pointer-events-none absolute inset-0" />


      {/* Floating data particles (cheap, transform/opacity only) */}
      <Particles />

      {/* HUD corner brackets (hero-local accent) */}
      <span className="hud-corner hud-tl" />
      <span className="hud-corner hud-tr" />
      <span className="hud-corner hud-bl" />
      <span className="hud-corner hud-br" />

      {/* Top status bar */}
      <div className="absolute top-5 left-0 right-0 px-8 flex justify-between items-center z-20 text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(0,191,255,0.45)' }}>
        <span className="flex items-center gap-2">
          <span className="status-dot" />
          JARVIS ONLINE · BANGALORE, INDIA
        </span>
        <span>BUILD v2.6.0 · NIKHIL_AI</span>
      </div>

      {/* Iron Spider hanging from top right */}
      <SpiderFigure />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] items-center min-h-screen max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-24 gap-12">
        {/* LEFT */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-5 text-[10px] uppercase tracking-[0.22em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: STARK }}
          >
            <span className="block w-6 h-px" style={{ background: STARK }} />
            Hello, World — I'm
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mb-2"
          >
            <span className="block text-white font-bold uppercase leading-[0.95] tracking-[0.04em]" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 'clamp(64px, 10vw, 120px)' }}>
              Nikhil
            </span>
            <span
              className="block font-bold uppercase leading-[0.95] tracking-[0.04em]"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: 'clamp(56px, 8vw, 96px)',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(0,191,255,0.55)',
              }}
            >
              AI Engineer.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="my-5 text-[12px] uppercase tracking-[0.1em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.32)' }}
          >
            Architecting <span style={{ color: STARK }}>Autonomous Intelligence</span>
          </motion.div>

          {/* Skill pillar tags */}
          <motion.div
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="flex flex-wrap gap-2 mb-7"
          >
            <PillarTag color="cyan">Real-Time AI Orchestration</PillarTag>
            <PillarTag color="red">LLM Pipelines</PillarTag>
            <PillarTag color="green">Scalable ML Backends</PillarTag>
            <PillarTag color="cyan">RAG Systems</PillarTag>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base max-w-md mb-8 leading-relaxed"
            style={{ fontFamily: "'Rajdhani', sans-serif", color: 'rgba(255,255,255,0.42)', fontWeight: 400 }}
          >
            <span className="text-white/80 font-semibold">Production-grade AI systems</span> — not demos, not notebooks. Real-time STT→LLM→TTS voice pipelines, multi-agent orchestration, and ML backends shipped at scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="btn-primary"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Get in Touch
            </a>
            <div className="flex gap-2 ml-1">
              <SocialIcon href={SOCIAL_LINKS.github}><Github size={15} /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.linkedin}><Linkedin size={15} /></SocialIcon>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — JARVIS HUD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col gap-3"
        >
          <div className="hud-panel">
            <div className="hud-label">SYSTEM STATUS</div>
            <div className="flex justify-center mb-3">
              <ArcReactor />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Stat value="11" suffix="+" label="Runtimes" />
              <Stat value="87" suffix="%" label="ML Precision" color="red" />
            </div>
            <Stat value="STABLE/LOW" label="Latency Floor" color="green" wide />
          </div>

          <div className="term">
            <div className="term-bar">
              <span className="td td-r" />
              <span className="td td-y" />
              <span className="td td-g" />
            </div>
            <div><span className="tp">JARVIS:~ $ </span><span className="tc">nikhil --diagnostics</span></div>
            <div className="to">precision&nbsp;&nbsp;<span className="tv">87.0% (XGB)</span></div>
            <div className="to">runtimes&nbsp;&nbsp;&nbsp;<span className="tv">11 LANGS</span></div>
            <div className="to">latency&nbsp;&nbsp;&nbsp;&nbsp;<span className="tv">STABLE / LOW</span></div>
            <div className="to mt-1.5 truncate">
              <span className="tp">{`>> `}</span>
              <motion.span
                key={feedIndex}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="tv"
              >
                {MODULE_FEED[feedIndex]}
              </motion.span>
            </div>
            <div><span className="tp">JARVIS:~ $ </span><span className="cur" /></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-5 left-0 right-0 px-8 flex justify-between items-center z-20" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.22)' }}>
          <div className="scroll-line" />
          Scroll to explore
        </div>
        <div className="text-[9px] uppercase tracking-[0.14em]" style={{ color: 'rgba(0,191,255,0.32)' }}>
          Active Build · GhostFolio
        </div>
      </div>
    </section>
  );
};

/* ---------- subcomponents ---------- */

const PillarTag: React.FC<{ color: 'cyan' | 'red' | 'green'; children: React.ReactNode }> = ({ color, children }) => {
  const palette = {
    cyan: { border: 'rgba(0,191,255,0.4)', text: '#00bfff', bg: 'rgba(0,191,255,0.05)' },
    red: { border: 'rgba(255,69,58,0.4)', text: '#ff453a', bg: 'rgba(255,69,58,0.05)' },
    green: { border: 'rgba(100,255,218,0.4)', text: '#64ffda', bg: 'rgba(100,255,218,0.05)' },
  }[color];
  return (
    <span
      className="text-[10px] uppercase tracking-[0.1em] px-3 py-1 rounded-sm"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        border: `1px solid ${palette.border}`,
        color: palette.text,
        background: palette.bg,
      }}
    >
      {children}
    </span>
  );
};

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="slink"
  >
    {children}
  </a>
);

const Stat: React.FC<{ value: string; suffix?: string; label: string; color?: 'cyan' | 'red' | 'green'; wide?: boolean }> = ({ value, suffix, label, color = 'cyan', wide }) => {
  const c = { cyan: '#00bfff', red: '#ff453a', green: '#64ffda' }[color];
  return (
    <div
      className={wide ? 'col-span-2' : ''}
      style={{
        border: '1px solid rgba(0,191,255,0.1)',
        background: 'rgba(0,191,255,0.03)',
        padding: '10px 12px',
      }}
    >
      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: wide ? 18 : 26, fontWeight: 700, color: c, lineHeight: 1 }}>
        {value}
        {suffix && <span style={{ fontSize: wide ? 12 : 16, color: `${c}99` }}>{suffix}</span>}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 2 }}>
        {label}
      </div>
    </div>
  );
};

const ArcReactor: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(0,191,255,0.08)" strokeWidth="1" />
    <circle cx="32" cy="32" r="22" fill="none" stroke="rgba(0,191,255,0.12)" strokeWidth="1" />
    <circle cx="32" cy="32" r="14" fill="none" stroke="rgba(0,191,255,0.2)" strokeWidth="1" />
    <circle cx="32" cy="32" r="7" fill="rgba(0,191,255,0.12)" stroke="rgba(0,191,255,0.5)" strokeWidth="1" className="arc-pulse" />
    <circle cx="32" cy="32" r="3" fill="rgba(0,191,255,0.85)" />
    <path id="orbit1" d="M32,10 a22,22 0 1,1 -0.001,0" fill="none" />
    <circle r="2.5" fill="#00bfff">
      <animateMotion dur="3s" repeatCount="indefinite">
        <mpath href="#orbit1" />
      </animateMotion>
    </circle>
    <path id="orbit2" d="M32,4 a28,28 0 1,1 -0.001,0" fill="none" />
    <circle r="1.5" fill="rgba(0,191,255,0.4)">
      <animateMotion dur="5s" repeatCount="indefinite">
        <mpath href="#orbit2" />
      </animateMotion>
    </circle>
  </svg>
);

const SpiderFigure: React.FC = () => (
  <div className="spider-figure absolute top-0 right-8 lg:right-[500px] w-[120px] z-[40] pointer-events-none">
    <svg viewBox="0 0 110 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* web thread + grapple */}
      <line x1="55" y1="0" x2="55" y2="52" stroke="rgba(0,191,255,0.5)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="55" cy="52" r="3" fill="rgba(0,191,255,0.6)" />
      {/* radiating webs */}
      <line x1="55" y1="52" x2="20" y2="30" stroke="rgba(0,191,255,0.18)" strokeWidth=".5" />
      <line x1="55" y1="52" x2="90" y2="30" stroke="rgba(0,191,255,0.18)" strokeWidth=".5" />
      <line x1="55" y1="52" x2="10" y2="55" stroke="rgba(0,191,255,0.1)" strokeWidth=".5" />
      <line x1="55" y1="52" x2="100" y2="55" stroke="rgba(0,191,255,0.1)" strokeWidth=".5" />
      {/* torso */}
      <ellipse cx="55" cy="105" rx="16" ry="22" fill="#0a1628" stroke="rgba(0,191,255,0.4)" strokeWidth="1" />
      {/* arc reactor chest */}
      <polygon points="55,95 61,99 61,107 55,111 49,107 49,99" fill="none" stroke="rgba(0,191,255,0.7)" strokeWidth="1" />
      <circle cx="55" cy="103" r="3.5" fill="rgba(0,191,255,0.6)" className="arc-pulse" />
      <circle cx="55" cy="103" r="6" fill="none" stroke="rgba(0,191,255,0.35)" strokeWidth="0.5" className="arc-pulse" />
      {/* head */}
      <ellipse cx="55" cy="135" rx="13" ry="15" fill="#0a1628" stroke="rgba(0,191,255,0.4)" strokeWidth="1" />
      <rect x="44" y="128" width="10" height="5" rx="1" fill="rgba(0,191,255,0.7)" />
      <rect x="56" y="128" width="10" height="5" rx="1" fill="rgba(0,191,255,0.7)" />
      <rect x="49" y="127" width="12" height="3" fill="#0a1628" stroke="rgba(0,191,255,0.3)" strokeWidth=".5" />
      {/* arms */}
      <line x1="39" y1="95" x2="28" y2="68" stroke="rgba(0,191,255,0.35)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="27" cy="65" r="5" fill="#0a1628" stroke="rgba(0,191,255,0.5)" strokeWidth="1" />
      <line x1="71" y1="95" x2="82" y2="68" stroke="rgba(0,191,255,0.35)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="83" cy="65" r="5" fill="#0a1628" stroke="rgba(0,191,255,0.5)" strokeWidth="1" />
      {/* hands grip */}
      <line x1="27" y1="60" x2="55" y2="52" stroke="rgba(0,191,255,0.25)" strokeWidth=".8" />
      <line x1="83" y1="60" x2="55" y2="52" stroke="rgba(0,191,255,0.25)" strokeWidth=".8" />
      {/* legs */}
      <line x1="46" y1="84" x2="30" y2="58" stroke="rgba(0,191,255,0.3)" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="27" cy="52" rx="8" ry="5" fill="#0a1628" stroke="rgba(0,191,255,0.4)" strokeWidth="1" />
      <line x1="64" y1="84" x2="80" y2="58" stroke="rgba(0,191,255,0.3)" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="83" cy="52" rx="8" ry="5" fill="#0a1628" stroke="rgba(0,191,255,0.4)" strokeWidth="1" />
      {/* suit panel lines */}
      <line x1="55" y1="83" x2="55" y2="127" stroke="rgba(0,191,255,0.15)" strokeWidth=".5" strokeDasharray="2 2" />
      <line x1="39" y1="98" x2="71" y2="98" stroke="rgba(0,191,255,0.12)" strokeWidth=".5" />
      <line x1="40" y1="110" x2="70" y2="110" stroke="rgba(0,191,255,0.12)" strokeWidth=".5" />
      {/* HUD diagnostic readouts */}
      <text x="0" y="100" fill="rgba(0,191,255,0.35)" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="1">PWR</text>
      <text x="0" y="108" fill="rgba(0,191,255,0.6)" fontFamily="JetBrains Mono, monospace" fontSize="6">100%</text>
      <text x="88" y="100" fill="rgba(0,191,255,0.35)" fontFamily="JetBrains Mono, monospace" fontSize="6">AGENTS</text>
      <text x="88" y="108" fill="rgba(0,191,255,0.6)" fontFamily="JetBrains Mono, monospace" fontSize="6">ACTIVE</text>
      <line x1="20" y1="103" x2="40" y2="103" stroke="rgba(0,191,255,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1="70" y1="103" x2="92" y2="103" stroke="rgba(0,191,255,0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>

    {/* Speech bubble — dangles below the upside-down head, tail points up to the mouth */}
    <div className="spider-bubble">
      "Your friendly neighbourhood
      <br />
      <em>Tech guy.</em>"
    </div>
  </div>
);

const Particles: React.FC = () => {
  const dots = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map(i => {
        const left = (i * 73) % 100;
        const delay = (i * 0.7) % 8;
        const dur = 8 + ((i * 1.3) % 6);
        const size = 1 + (i % 3);
        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDelay: `-${delay}s`,
              animationDuration: `${dur}s`,
            }}
          />
        );
      })}
    </div>
  );
};

/* ---------- styles ---------- */

const StarkStyles: React.FC = () => (
  <style>{`
    .stark-hero { color: #fff; }

    .status-dot {
      display: inline-block; width: 6px; height: 6px; border-radius: 50%;
      background: #00bfff; box-shadow: 0 0 8px #00bfff;
      animation: dotBlink 2s step-end infinite;
    }

    /* Spider hanging swing */
    .spider-figure {
      transform-origin: 50% 0%;
      animation: spiderDrop 0.9s ease 1.3s backwards, spiderSwing 5s ease-in-out 2.2s infinite;
      will-change: transform, opacity;
      backface-visibility: hidden;
    }
    @keyframes spiderDrop {
      from { opacity: 0; transform: translate3d(0, -30px, 0); }
      to   { opacity: 1; transform: translate3d(0, 0, 0); }
    }
    @keyframes spiderSwing {
      0%, 100% { transform: rotate(-1.5deg) translate3d(0,0,0); }
      50%      { transform: rotate(1.5deg) translate3d(0,0,0); }
    }

    /* Speech bubble — comic-style with cyan stroke + tail pointing up to the mouth */
    .spider-bubble {
      position: absolute;
      top: 178px;            /* below the head (head bottom ~165) */
      left: 50%;
      transform: translateX(-50%);
      padding: 9px 14px;
      min-width: 200px;
      background: rgba(2, 15, 28, 0.96);
      border: 1.5px solid rgba(0, 191, 255, 0.6);
      border-radius: 10px;
      box-shadow: 0 0 24px rgba(0, 191, 255, 0.25), inset 0 0 10px rgba(0, 191, 255, 0.06);
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.92);
      text-align: center;
      white-space: nowrap;
      opacity: 0;
      animation: bubbleIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 2.4s forwards;
      pointer-events: none;
    }
    .spider-bubble em {
      font-style: normal;
      color: #00bfff;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-shadow: 0 0 6px rgba(0,191,255,0.4);
    }
    /* Tail — outer (cyan stroke) pointing UP to the spider's head */
    .spider-bubble::before {
      content: '';
      position: absolute;
      top: -9px;
      left: 50%;
      transform: translateX(-50%);
      width: 0; height: 0;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-bottom: 9px solid rgba(0, 191, 255, 0.6);
    }
    /* Tail — inner (fill) */
    .spider-bubble::after {
      content: '';
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
      width: 0; height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid rgba(2, 15, 28, 0.96);
    }
    @keyframes bubbleIn {
      from { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(0.85); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
    }

    @media (max-width: 1023px) {
      .spider-bubble { display: none; }
    }

    /* Hero local glow (CSS-var driven) */
    .hero-glow {
      --mx: 50%;
      --my: 50%;
      background: radial-gradient(520px circle at var(--mx) var(--my), rgba(0,191,255,0.08), transparent 60%);
    }

    /* HUD panels — solid bg (no backdrop-filter, expensive on scroll) */
    .hud-panel {
      border: 1px solid rgba(0,191,255,0.15);
      background: rgba(2, 15, 28, 0.92);
      padding: 16px;
      position: relative;
    }
    .hud-panel::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,191,255,0.4), transparent);
    }
    .hud-label { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: rgba(0,191,255,0.5); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 10px; }

    /* Terminal */
    .term {
      border: 1px solid rgba(0,191,255,0.12);
      background: rgba(0, 8, 18, 0.95);
      padding: 12px 14px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      line-height: 1.85;
    }
    .term-bar { display: flex; gap: 5px; margin-bottom: 9px; padding-bottom: 7px; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .td { width: 7px; height: 7px; border-radius: 50%; }
    .td-r { background: rgba(255,95,86,.55); }
    .td-y { background: rgba(255,189,68,.55); }
    .td-g { background: rgba(39,201,63,.55); }
    .tp { color: rgba(0,191,255,.6); }
    .tc { color: rgba(255,255,255,.7); }
    .tv { color: #00bfff; }
    .to { color: rgba(255,255,255,.28); }
    .cur { display: inline-block; width: 6px; height: 10px; background: #00bfff; animation: dotBlink 1s step-end infinite; vertical-align: -1px; margin-left: 1px; }

    /* Buttons */
    .btn-primary {
      font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
      padding: 11px 24px;
      background: #00bfff; color: #020a14;
      font-weight: 700;
      cursor: pointer;
      clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
      transition: transform .18s, box-shadow .18s;
      text-decoration: none;
      display: inline-block;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,191,255,0.35); }
    .btn-secondary {
      font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
      padding: 10px 24px;
      background: transparent; color: rgba(255,255,255,0.5);
      border: 1px solid rgba(255,255,255,0.14);
      cursor: pointer;
      transition: border-color .18s, color .18s, transform .18s;
      text-decoration: none;
      display: inline-block;
    }
    .btn-secondary:hover { border-color: rgba(0,191,255,0.5); color: #fff; transform: translateY(-2px); }

    .slink {
      width: 36px; height: 36px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 3px;
      display: inline-flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.4);
      cursor: pointer;
      transition: border-color .18s, color .18s, transform .18s;
      text-decoration: none;
    }
    .slink:hover { border-color: #00bfff; color: #00bfff; transform: translateY(-2px); }

    .scroll-line { width: 26px; height: 1px; background: rgba(0,191,255,0.2); position: relative; overflow: hidden; }
    .scroll-line::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: #00bfff; animation: slPulse 2.2s ease-in-out infinite; }
    @keyframes slPulse { 0% { left: -100%; } 100% { left: 100%; } }

    /* Floating data particles */
    .particle {
      position: absolute;
      bottom: -10px;
      border-radius: 50%;
      background: #00bfff;
      box-shadow: 0 0 6px #00bfff;
      opacity: 0.3;
      animation: floatUp linear infinite;
      will-change: transform, opacity;
    }
    @keyframes floatUp {
      0%   { transform: translate3d(0, 0, 0); opacity: 0; }
      10%  { opacity: 0.5; }
      90%  { opacity: 0.4; }
      100% { transform: translate3d(0, -110vh, 0); opacity: 0; }
    }

    @media (max-width: 1023px) {
      .spider-figure { display: none; }
    }
  `}</style>
);

export default Hero;
