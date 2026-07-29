import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function OurGoals() {
  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="relative rounded-2xl bg-white/[0.05] border border-white/[0.08] px-6 py-16 md:px-16 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-white mb-8">Our Goals</h2>
            <p className="text-[#c4b5c9] text-lg leading-relaxed mb-6">
              We aim to foster a culture of innovation and critical thinking among school students across Sri Lanka. By providing a platform to pitch real business ideas, we bridge the gap between classroom learning and practical entrepreneurship.
            </p>
            <p className="text-[#c4b5c9] text-lg leading-relaxed">
              Our ultimate goal is to see student-led startups grow into successful enterprises that contribute to the national economy.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
