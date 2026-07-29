import React from 'react';
import { BookOpen, TrendingUp, Presentation } from 'lucide-react';
import SupportingContent from './SupportingContent';
import ScrollReveal from '../ui/ScrollReveal';

const CORE_SUPPORT_DATA = [
  {
    title: "Expert Workshops",
    description: "Learn the fundamentals of business planning, financial forecasting, and effective pitching directly from industry veterans.",
    icon: <BookOpen className="w-7 h-7 text-[#a64d79]" />,
    images: [
      "/assets/Workshop sandbox 2.0 (1).jpg",
      "/assets/Workshop sandbox 2.0 (2).jpg",
      "/assets/Workshop sandbox 2.0 (3).jpg",
      "/assets/Workshop sandbox 2.0 (4).jpg",
      "/assets/Workshop sandbox 2.0 (5).jpg",
      "/assets/Workshop sandbox 2.0 (6).jpg"
    ],
    extra: {
      type: 'bullets',
      items: [
        "Business planning, financial forecasting, pitch structuring",
        "Small group format, real feedback from industry veterans",
        "Covers common early-stage mistakes before you make them"
      ]
    }
  },
  {
    title: "Industry Exposure",
    description: "Pitch your ideas to a panel of real-world investors, CEOs, and business leaders who are looking for the next big thing.",
    icon: <TrendingUp className="w-7 h-7 text-[#a64d79]" />,
    images: [
      "/assets/inv-01.jpg",
      "/assets/inv-02.jpg",
      "/assets/inv-03.jpg",
      "/assets/inv-04.jpg",
      "/assets/inv-05.jpg",
      "/assets/inv-06.jpg"
    ],
    extra: {
      type: 'steps',
      items: [
        "Pitch directly to real-world investors and CEOs",
        "Receive unfiltered feedback on your model and delivery",
        "Get noticed for funding or follow-up conversations"
      ]
    }
  },
  {
    title: "Pitching Mastery",
    description: "Develop the confidence and public speaking skills necessary to command a room and sell your vision.",
    icon: <Presentation className="w-7 h-7 text-[#a64d79]" />,
    images: [
      "/assets/replace 1.jpg",
      "/assets/p2.jpg",
      "/assets/replace 3.jpg",
      "/assets/replace 4.jpg",
      "/assets/replace 5.jpg",
      "/assets/replace 2.jpg"
    ],
    extra: {
      type: 'tags',
      tags: ["Confidence", "Structure", "Objection handling", "Delivery"],
      note: "Built through repetition, not theory."
    }
  }
];

export default function CoreSupport() {
  return (
    <section className="pt-24 pb-0 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {CORE_SUPPORT_DATA.map((item, idx) => (
            <ScrollReveal key={item.title} direction={idx % 2 === 0 ? 'left' : 'right'}>
            <div
              className={`flex flex-col ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10 md:gap-16 py-12 border-b border-white/5 last:border-b-0`}
            >
              <div className="relative w-full md:w-1/2">
                <div className="grid grid-cols-3 gap-3">
                  {item.images.map((src, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="group overflow-hidden rounded-xl border border-white/5 shadow-[0_0_40px_rgba(124,58,237,0.10)]"
                    >
                      <img
                        src={src}
                        alt={`${item.title} photo ${imgIdx + 1}`}
                        className="w-full h-28 sm:h-36 md:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-5 left-6 w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                  {item.icon}
                </div>
              </div>
              <div className="text-center md:text-left md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
                  {item.description}
                </p>
                <SupportingContent extra={item.extra} />
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
