import React from 'react';

/**
 * Global Stark-Lab background. Fixed-position, GPU-accelerated.
 * Owns: holo-grid, rotating arc-rings, scanline, diagonal accents,
 * plus all global keyframes + reusable HUD utility classes.
 *
 * Performance rules:
 *  - Animate transform/opacity only. No layout-triggering props.
 *  - No heavy backdrop-filter on the background itself.
 *  - translate3d() / rotate() to force GPU.
 */
const Background: React.FC = () => {
  return (
    <>
      <GlobalStarkStyles />
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0, background: '#010810', contain: 'strict' }}
      >
        {/* Subtle radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(0,191,255,0.05), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(20,40,80,0.25), transparent 60%)',
          }}
        />

        {/* Holographic 3D-perspective grid */}
        <div className="bg-grid" />

        {/* Diagonal accent lines */}
        <div className="bg-diag bg-diag-1" />
        <div className="bg-diag bg-diag-2" />

        {/* Rotating arc-rings anchored to viewport top-right */}
        <div className="bg-rings">
          <div className="bg-ring bg-ring-1" />
          <div className="bg-ring bg-ring-2" />
          <div className="bg-ring bg-ring-3" />
        </div>

        {/* Continuous scanline sweeping the full viewport */}
        <div className="bg-scan" />
      </div>
    </>
  );
};

const GlobalStarkStyles: React.FC = () => (
  <style>{`
    /* ---------- TYPOGRAPHY ---------- */
    body {
      font-family: 'Rajdhani', sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    /* ---------- BACKGROUND LAYERS ---------- */
    .bg-grid {
      position: absolute;
      inset: -10% -10% 0 -10%;
      background-image:
        linear-gradient(rgba(0,191,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,191,255,0.05) 1px, transparent 1px);
      background-size: 70px 70px;
      transform: perspective(900px) rotateX(55deg) translate3d(0, 0, 0);
      transform-origin: 50% 100%;
      mask-image: radial-gradient(ellipse at 50% 60%, black 20%, transparent 75%);
      -webkit-mask-image: radial-gradient(ellipse at 50% 60%, black 20%, transparent 75%);
      backface-visibility: hidden;
      /* static grid — animating background-position with a mask was repainting the entire
         masked region every frame on scroll. Rings + scanline provide the motion. */
    }

    .bg-diag {
      position: absolute;
      width: 200%;
      height: 1px;
      background: rgba(0,191,255,0.06);
      transform-origin: left center;
      will-change: transform;
    }
    .bg-diag-1 { top: 28%; left: -50%; transform: rotate(-18deg) translate3d(0,0,0); }
    .bg-diag-2 { top: 68%; left: -50%; transform: rotate(-18deg) translate3d(0,0,0); }

    .bg-rings {
      position: absolute;
      top: -120px;
      right: -120px;
      width: 600px;
      height: 600px;
      pointer-events: none;
    }
    .bg-ring {
      position: absolute;
      border-radius: 50%;
      border: 1px solid rgba(0,191,255,0.12);
      will-change: transform;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
    }
    .bg-ring-1 { width: 600px; height: 600px; top: 0; right: 0; animation: bgSpin 28s linear infinite; }
    .bg-ring-2 { width: 420px; height: 420px; top: 90px; right: 90px; border-color: rgba(0,191,255,0.08); animation: bgSpin 18s linear infinite reverse; }
    .bg-ring-3 { width: 260px; height: 260px; top: 170px; right: 170px; border-color: rgba(0,191,255,0.18); animation: bgSpin 10s linear infinite; }
    @keyframes bgSpin { to { transform: rotate(360deg) translate3d(0, 0, 0); } }

    .bg-scan {
      position: absolute;
      left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,191,255,0.22), transparent);
      will-change: transform, opacity;
      animation: bgScanAnim 7s linear infinite;
      backface-visibility: hidden;
    }
    @keyframes bgScanAnim {
      0%   { transform: translate3d(0, -10px, 0); opacity: 0; }
      6%   { opacity: 1; }
      94%  { opacity: 1; }
      100% { transform: translate3d(0, 100vh, 0); opacity: 0; }
    }

    /* ---------- GLOBAL KEYFRAMES (used by Hero + sections) ---------- */
    @keyframes dotBlink   { 0%, 100% { opacity: 1; } 50% { opacity: 0.15; } }
    @keyframes arcPulse   { 0%, 100% { transform: scale(1); opacity: 0.85; } 50% { transform: scale(1.15); opacity: 1; } }

    .arc-pulse  { transform-origin: center; animation: arcPulse 2s ease-in-out infinite; will-change: transform, opacity; }
    .blink-dot  { animation: dotBlink 2s step-end infinite; }

    /* ---------- HUD FRAME (reusable border + corner brackets) ---------- */
    .hud-frame {
      position: relative;
      border: 1px solid rgba(0, 229, 255, 0.18);
      border-radius: 6px;
      background: rgba(2, 12, 24, 0.35);
    }
    .hud-frame::before, .hud-frame::after {
      content: '';
      position: absolute;
      width: 26px; height: 26px;
      pointer-events: none;
    }
    .hud-corner { position: absolute; width: 22px; height: 22px; pointer-events: none; }
    .hud-corner::before, .hud-corner::after { content: ''; position: absolute; background: #00e5ff; opacity: 0.5; }
    .hud-tl { top: -1px; left: -1px; }
    .hud-tl::before { width: 100%; height: 1px; top: 0; left: 0; }
    .hud-tl::after  { width: 1px; height: 100%; top: 0; left: 0; }
    .hud-tr { top: -1px; right: -1px; }
    .hud-tr::before { width: 100%; height: 1px; top: 0; right: 0; }
    .hud-tr::after  { width: 1px; height: 100%; top: 0; right: 0; }
    .hud-bl { bottom: -1px; left: -1px; }
    .hud-bl::before { width: 100%; height: 1px; bottom: 0; left: 0; }
    .hud-bl::after  { width: 1px; height: 100%; bottom: 0; left: 0; }
    .hud-br { bottom: -1px; right: -1px; }
    .hud-br::before { width: 100%; height: 1px; bottom: 0; right: 0; }
    .hud-br::after  { width: 1px; height: 100%; bottom: 0; right: 0; }

    /* ---------- REDUCED MOTION ---------- */
    @media (prefers-reduced-motion: reduce) {
      .bg-grid, .bg-ring, .bg-scan, .arc-pulse, .blink-dot { animation: none !important; }
    }

    /* ---------- MOBILE PERF ---------- */
    @media (max-width: 768px) {
      .bg-rings { display: none; }
      .bg-diag-1, .bg-diag-2 { display: none; }
    }
  `}</style>
);

export default Background;
