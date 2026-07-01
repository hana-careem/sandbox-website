import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Lightbulb, Users, TrendingUp, Trophy } from 'lucide-react';

export default function WhyAttend() {
  const reasons = [
    {
      icon: <Lightbulb size={32} className="text-[#7C3AED]" />,
      title: "Shape Your Ideas",
      desc: "Transform your raw concepts into viable business models with guidance from industry experts."
    },
    {
      icon: <Users size={32} className="text-[#FF4D6D]" />,
      title: "Network Nationally",
      desc: "Connect with like-minded student entrepreneurs from over 150 schools across Sri Lanka."
    },
    {
      icon: <TrendingUp size={32} className="text-[#38BDF8]" />,
      title: "Gain Exposure",
      desc: "Present your vision in front of a panel of leading investors and business leaders."
    },
    {
      icon: <Trophy size={32} className="text-[#7C3AED]" />,
      title: "Win Big",
      desc: "Compete for a massive prize pool and ongoing mentorship to launch your startup."
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4">Why Sandbox?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">It's more than a competition. It's the launchpad for your entrepreneurial journey.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors h-full">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed">{reason.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
