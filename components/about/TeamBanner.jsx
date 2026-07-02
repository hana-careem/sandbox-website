import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function TeamBanner() {
  return (
    <section className="pt-40 pb-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tighter mb-6">
            MEET THE <span className="text-[#7C3AED]">TEAM</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The dedicated students behind Sandbox, working tirelessly to bring Sri Lanka's largest inter-school pitching competition to life.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
