import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function OurHistory() {
  const history = [
    { edition: "Sandbox 1.0", editionParam: "1.0", desc: "The inaugural edition in September 2024 that started it all, launching Sri Lanka's first inter-school business pitching competition under the theme of Sustainability." },
    { edition: "Sandbox 2.0", editionParam: "2.0", desc: "The competition had grown to 38 participating schools and 50 competing teams under the theme of Community Concerns, with St. Joseph's College, Negombo crowned champions." }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/10 px-6 py-16 md:px-16 ring-1 ring-white/5 shadow-[0_0_90px_rgba(124,58,237,0.10)]">
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
                  <h3 className="text-2xl font-bold mb-4 font-display">
                    {item.editionParam ? (
                      <Link
                        href={`/about/editions?edition=${item.editionParam}`}
                        className="text-[#FF4D6D] hover:text-[#7C3AED] transition-colors underline-offset-4 hover:underline"
                      >
                        {item.edition}
                      </Link>
                    ) : (
                      <span className="text-[#FF4D6D]">{item.edition}</span>
                    )}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
