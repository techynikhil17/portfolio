import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-navy-900">
      {/* Radial Gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy-900 via-[#0a192f] to-[#020c1b]"></div>
      
      {/* Subtle Grain */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px] animate-pulse duration-[4000ms]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px]"></div>
    </div>
  );
};

export default Background;