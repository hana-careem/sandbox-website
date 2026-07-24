import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhatIsSandbox() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#060718] via-[#691e56] to-[#060718]">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/10 px-6 py-16 md:px-16 text-center ring-1 ring-white/5 shadow-[0_0_90px_rgba(124,58,237,0.10)]">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-white mb-8 tracking-tight">What is Sand<span className="font-resolve font-light">box</span>?</h2>
            <p className="text-white text-lg md:text-xl font-semibold mb-6">
              Sri Lanka's First Inter-School Business Pitch Competition
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              The next generation of entrepreneurs is here — and they're ready to be heard.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Organized by the Entrepreneurship Club of APIIT in partnership with the Ministry of Education, this landmark competition brings together the sharpest young minds from schools across Sri Lanka to pitch real business ideas to a panel of seasoned industry judges.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              This isn't a classroom exercise. It's a launchpad.
            </p>
            <p className="text-[#a64d79] text-lg md:text-xl font-semibold mt-8 mb-6">
              This Year's Theme: A Better Tomorrow
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Students are challenged to think beyond the ordinary — to build ideas that don't just make money, but make a difference. From sustainability to social impact, technology to community upliftment, contestants will present ventures designed to solve tomorrow's problems, today.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
