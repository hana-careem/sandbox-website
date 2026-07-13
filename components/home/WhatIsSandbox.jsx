import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhatIsSandbox() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/10 px-6 py-16 md:px-16 text-center ring-1 ring-white/5 shadow-[0_0_90px_rgba(124,58,237,0.10)]">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-8 tracking-tight">What is Sandbox?</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Sri Lanka's first inter-school business pitching competition, run by the Entrepreneurship Club of APIIT with the Ministry of Education. Students from schools nationwide pitch real business ideas to a panel of industry judges.
            </p>
            <p className="text-xl font-bold text-[#7C3AED] font-display mt-8">
              This year's theme: A Better Tomorrow.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
