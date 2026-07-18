import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Trophy, Medal, Award } from 'lucide-react';

export default function BenefitsPrizes() {
  const prizes = [
    {
      icon: <Medal size={48} className="text-[#38BDF8]" />,
      title: "1st Runner Up",
      amount: "Rs. 150,000", // TODO: Update exact prize amounts
      color: "border-[#38BDF8]",
      bg: "bg-[#38BDF8]/5"
    },
    {
      icon: <Trophy size={64} className="text-[#7C3AED]" />,
      title: "Grand Champion",
      amount: "Rs. 250,000",
      color: "border-[#7C3AED]",
      bg: "bg-[#7C3AED]/10",
      featured: true
    },
    {
      icon: <Award size={48} className="text-[#FF4D6D]" />,
      title: "2nd Runner Up",
      amount: "Rs. 100,000",
      color: "border-[#FF4D6D]",
      bg: "bg-[#FF4D6D]/5"
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-white mb-4">Prizes & Perks</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Massive cash prizes to fund your startup, plus exclusive perks for all finalists.</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:items-end">
          {prizes.map((prize, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} className={`w-full lg:w-1/3 ${prize.featured ? 'order-first lg:order-none z-10' : ''}`}>
              <div className={`relative rounded-3xl border ${prize.color} ${prize.bg} p-8 text-center backdrop-blur-sm transition-transform hover:-translate-y-2 ${prize.featured ? 'py-12 lg:scale-110 shadow-[0_0_40px_rgba(124,58,237,0.2)]' : ''}`}>
                <div className="flex justify-center mb-6">{prize.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{prize.title}</h3>
                <div className={`font-black font-display text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400`}>
                  {prize.amount}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
