'use client';
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import AboutEditionSlideshow from '../AboutEditionSlideshow';

// ─── Sandbox 1.0 photos (all now flat in public/assets/) ────────────────────
const s1_imgs = [
  '/assets/What we offer sandbox 1.0 (1).jpg',
  '/assets/What we offer sandbox 1.0 (2).jpg',
  '/assets/Wht we offer sandbox 1.0 (1).jpg',
  '/assets/Wht we offer sandbox 1.0 (2).jpg',
  '/assets/Wht we offer sandbox 1.0 (3).jpg',
  '/assets/Wht we offer sandbox 1.0 (4).jpg',
  '/assets/Wht we offer sandbox 1.0 (5).jpg',
  '/assets/Wht we offer sandbox 1.0 (6).jpg',
  '/assets/Wht we offer sandbox 1.0 (7).jpg',
  '/assets/Wht we offer sandbox 1.0 (8).jpg',
  '/assets/Wht we offer sandbox 1.0 (9).jpg',
  '/assets/Wht we offer sandbox 1.0 (10).jpg',
  '/assets/Wht we offer sandbox 1.0 (11).jpg',
];

// ─── Sandbox 2.0 photos (Grand Final + Preliminaries + Workshop) ─────────────
const s2_imgs = [
  // Grand Final (10)
  '/assets/Grand final sandbox 2.0 (1).jpg',
  '/assets/Grand final sandbox 2.0 (2).jpg',
  '/assets/Grand final sandbox 2.0 (3).jpg',
  '/assets/Grand final sandbox 2.0 (4).jpg',
  '/assets/Grand final sandbox 2.0 (5).jpg',
  '/assets/Grand final sandbox 2.0 (6).jpg',
  '/assets/Grand final sandbox 2.0 (7).jpg',
  '/assets/Grand final sandbox 2.0 (8).jpg',
  '/assets/Grand final sandbox 2.0 (9).jpg',
  '/assets/Grand final sandbox 2.0 (10).jpg',
  // Preliminaries (6)
  '/assets/preliminairies sandbox 2.0 (1).jpg',
  '/assets/preliminairies sandbox 2.0 (2).jpg',
  '/assets/preliminairies sandbox 2.0 (3).jpg',
  '/assets/preliminairies sandbox 2.0 (4).jpg',
  '/assets/preliminairies sandbox 2.0 (5).jpg',
  '/assets/preliminairies sandbox 2.0 (6).jpg',
  // Workshop (7)
  '/assets/Workshop sandbox 2.0 (1).jpg',
  '/assets/Workshop sandbox 2.0 (2).jpg',
  '/assets/Workshop sandbox 2.0 (3).jpg',
  '/assets/Workshop sandbox 2.0 (4).jpg',
  '/assets/Workshop sandbox 2.0 (5).jpg',
  '/assets/Workshop sandbox 2.0 (6).jpg',
  '/assets/Workshop sandbox 2.0 (7).jpg',
];

export default function OurHistory() {
  const history = [
    {
      edition: "Sandbox 1.0",
      editionParam: "1.0",
      desc: "The inaugural edition in September 2024 that started it all, launching Sri Lanka's first inter-school business pitching competition under the theme of Sustainability.",
      images: s1_imgs,
    },
    {
      edition: "Sandbox 2.0",
      editionParam: "2.0",
      desc: "The competition had grown to 38 participating schools and 50 competing teams under the theme of Community Concerns, with St. Joseph's College, Negombo crowned champions.",
      images: s2_imgs,
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/10 px-6 py-16 md:px-16 ring-1 ring-white/5 shadow-[0_0_90px_rgba(124,58,237,0.10)]">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-coolvetica font-normal text-white mb-16 text-center">Our History</h2>
        </ScrollReveal>

        <div className="space-y-12">
          {history.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="w-full md:w-1/2">
                  <AboutEditionSlideshow images={item.images} label={item.edition} />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <h3 className="text-2xl font-normal mb-4 font-coolvetica">
                    {item.editionParam ? (
                      <Link
                        href={`/about/editions?edition=${item.editionParam}`}
                        className="text-white hover:text-[#38BDF8] transition-colors underline-offset-4 hover:underline cursor-pointer"
                      >
                        {item.edition}
                      </Link>
                    ) : (
                      <span className="text-white">{item.edition}</span>
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
