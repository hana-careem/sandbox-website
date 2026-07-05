import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function OurGoals() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/10 px-6 py-16 md:px-16 text-center ring-1 ring-white/5 shadow-[0_0_90px_rgba(56,189,248,0.08)]">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-8">Our Goals</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We aim to foster a culture of innovation and critical thinking among school students across Sri Lanka. By providing a platform to pitch real business ideas, we bridge the gap between classroom learning and practical entrepreneurship.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our ultimate goal is to see student-led startups grow into successful enterprises that contribute to the national economy.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
