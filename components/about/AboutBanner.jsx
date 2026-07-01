import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function AboutBanner() {
  return (
    <section className="pt-32 pb-16 bg-slate-950 text-center">
      <div className="container max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6">About Sandbox</h1>
          <p className="text-xl text-slate-300">Empowering Sri Lanka's next generation of entrepreneurs since our inception.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
