import React from 'react';

export default function Marquee() {
  const text = "SANDBOX • INNOVATE • IDEATE • PITCH • DISRUPT • ";
  
  return (
    <div className="relative flex overflow-hidden bg-[#7C3AED] text-white py-4 border-y border-white/10 w-full">
      <div className="animate-marquee whitespace-nowrap flex font-display text-2xl md:text-3xl font-black tracking-widest opacity-90">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex font-display text-2xl md:text-3xl font-black tracking-widest opacity-90">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
      
      {/* We need to define these keyframes in tailwind config later, but for now we rely on inline styles or standard tailwind if added */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
