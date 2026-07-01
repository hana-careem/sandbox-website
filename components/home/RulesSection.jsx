import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function RulesSection() {
  const rules = [
    "Teams must consist of 2 to 4 members from the same school.",
    "Open to all government, private, and international schools in Sri Lanka.",
    "Business ideas must be original and not currently generating over Rs. 1M in revenue.",
    "Pitch decks must be submitted in PDF format before the deadline."
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-black font-display text-white mb-8 text-center">Eligibility & Rules</h2>
            <ul className="space-y-4">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] text-sm font-bold mr-4 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-300">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
