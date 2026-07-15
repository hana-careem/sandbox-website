import React from 'react';
import { Users, Briefcase, Award } from 'lucide-react';

const COMMUNITY_GROWTH_DATA = [
  {
    title: "Networking Opportunities",
    description: "Connect with like-minded student entrepreneurs from over 150 schools across the nation.",
    icon: <Users className="w-7 h-7 text-[#7C3AED]" />,
    images: ["https://placehold.co/560x680", "https://placehold.co/560x680"]
  },
  {
    title: "Career Building",
    description: "Enhance your resume and university applications with verifiable entrepreneurial experience.",
    icon: <Briefcase className="w-7 h-7 text-[#7C3AED]" />,
    images: ["https://placehold.co/560x680", "https://placehold.co/560x680"]
  },
  {
    title: "Mentorship",
    description: "Receive personalized guidance and feedback from assigned mentors throughout the competition lifecycle.",
    icon: <Award className="w-7 h-7 text-[#7C3AED]" />,
    images: ["https://placehold.co/560x680", "https://placehold.co/560x680"]
  }
];

export default function CommunityGrowth() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tighter mb-6">
            Community &amp; <span className="text-[#7C3AED]">Growth</span>
          </h2>
        </div>

        <div>
          {COMMUNITY_GROWTH_DATA.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10 md:gap-16 py-12 border-b border-white/5 last:border-b-0`}
            >
              <div className="relative w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-3">
                  {item.images.map((src, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="overflow-hidden rounded-2xl border border-white/5 shadow-[0_0_60px_rgba(124,58,237,0.12)]"
                    >
                      <img src={src} alt="" className="w-full h-56 md:h-80 object-cover" />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
