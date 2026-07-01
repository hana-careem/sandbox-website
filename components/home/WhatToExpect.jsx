import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhatToExpect() {
  const steps = [
    {
      title: "Masterclasses",
      desc: "Learn the fundamentals of business planning, financial modeling, and effective pitching from industry veterans before you even step on stage."
    },
    {
      title: "Mentorship Sessions",
      desc: "Get paired with experienced mentors who will help refine your pitch deck and stress-test your business model."
    },
    {
      title: "The Grand Finale",
      desc: "Pitch live to a panel of esteemed judges, field tough questions, and prove why your idea deserves to win."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <ScrollReveal direction="left">
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6">What to Expect</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Sandbox isn't just about the final pitch. It's a comprehensive educational experience designed to give you real-world startup skills.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/50 flex items-center justify-center text-[#7C3AED] font-bold text-xl font-display">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        <div className="w-full lg:w-1/2">
          <ScrollReveal direction="right">
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500">
                {/* TODO: Add real image of a workshop/mentoring session */}
                [Placeholder: Workshop Image]
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
