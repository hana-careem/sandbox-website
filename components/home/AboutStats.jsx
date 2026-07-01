import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function AboutStats() {
  const stats = [
    { label: "Schools Reached", value: "150+" },
    { label: "Participants", value: "3,000+" },
    { label: "Prize Pool", value: "Rs. 500k+" }, // TODO: Update prize pool
    { label: "Past Editions", value: "3" }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-black font-display text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm md:text-base font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
