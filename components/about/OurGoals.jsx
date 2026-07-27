import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function OurGoals() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-[#1a0e2e] to-slate-950">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="relative rounded-3xl bg-white border-t-2 border-[#D4537E] ring-1 ring-black/5 shadow-[0_8px_24px_rgba(212,83,126,0.10)] px-6 py-16 md:px-16 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(212,83,126,0.18)]">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-[#691e56] mb-8">Our Goals</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We aim to foster a culture of innovation and critical thinking among school students across Sri Lanka. By providing a platform to pitch real business ideas, we bridge the gap between classroom learning and practical entrepreneurship.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our ultimate goal is to see student-led startups grow into successful enterprises that contribute to the national economy.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
