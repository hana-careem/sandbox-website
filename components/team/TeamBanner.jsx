import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function TeamBanner() {
  return (
    <section className="pt-32 pb-16 bg-slate-950 text-center">
      <div className="container max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6">The Organizing Committee</h1>
          <p className="text-xl text-slate-300">Meet the passionate individuals from the APIIT Entrepreneurship Club who make Sandbox possible.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
