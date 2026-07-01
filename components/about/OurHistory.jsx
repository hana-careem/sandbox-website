import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function OurHistory() {
  const history = [
    { edition: "Sandbox 1.0", desc: "The inaugural edition that started it all, bringing together 50 schools for the first time." },
    { edition: "Sandbox 2.0", desc: "Expanding nationwide, introducing masterclasses and increasing the prize pool significantly." },
    { edition: "Sandbox 3.0", desc: "Our biggest edition yet, partnering with the Ministry of Education to reach 150+ schools." }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5">
      <div className="container max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-16 text-center">Our History</h2>
        </ScrollReveal>

        <div className="space-y-12">
          {history.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="w-full md:w-1/2">
                  <div className="aspect-video bg-slate-800 rounded-3xl border border-white/10 flex items-center justify-center text-slate-500">
                    [Placeholder: {item.edition} Image]
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <h3 className="text-2xl font-bold text-[#FF4D6D] mb-4 font-display">{item.edition}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
