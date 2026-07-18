import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhyAttend() {
  const reasons = [
    {
      title: "Shape Your Ideas",
      desc: "Transform your raw concepts into viable business models with guidance from industry experts."
    },
    {
      title: "Network Nationally",
      desc: "Connect with like-minded student entrepreneurs from over 150 schools across Sri Lanka."
    },
    {
      title: "Gain Exposure",
      desc: "Present your vision in front of a panel of leading investors and business leaders."
    },
    {
      title: "Win Big",
      desc: "Compete for a massive prize pool and ongoing mentorship to launch your startup."
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2E1065]/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/10 to-slate-950" />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-white mb-4">Why Sandbox?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">It's more than a competition. It's the launchpad for your entrepreneurial journey.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors h-full">
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
