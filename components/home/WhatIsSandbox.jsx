import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhatIsSandbox() {
  return (
    <section className="py-24 bg-slate-900 border-b border-white/5">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-8 tracking-tight">What is Sandbox?</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Sri Lanka's first inter-school business pitching competition, run by the Entrepreneurship Club of APIIT with the Ministry of Education. Students from schools nationwide pitch real business ideas to a panel of industry judges.
          </p>
          <p className="text-xl font-bold text-[#7C3AED] font-display mt-8">
            This year's theme: A Better Sri Lanka Tomorrow.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
