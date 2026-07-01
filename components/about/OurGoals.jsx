import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function OurGoals() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container max-w-4xl mx-auto px-4 text-center">
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
    </section>
  );
}
