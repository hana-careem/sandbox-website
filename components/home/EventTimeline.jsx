import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function EventTimeline() {
  const timeline = [
    { date: "Oct 15", title: "Registrations Close", desc: "Last day to submit your team application." },
    { date: "Oct 20", title: "Virtual Briefing", desc: "Introduction to the Sandbox format and rules." },
    { date: "Nov 05", title: "Masterclass Day", desc: "In-person workshops on business planning and pitching." },
    { date: "Nov 15", title: "Semi-Finals", desc: "Top 50 teams pitch to secure a spot in the finals." },
    { date: "Nov 30", title: "Grand Finale", desc: "The top 10 teams battle it out for the championship." }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5">
      <div className="container max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4">Event Timeline</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Mark your calendars. Here is the roadmap to the Grand Finale.</p>
          </div>
        </ScrollReveal>

        <div className="relative border-l border-slate-700 ml-4 md:ml-0 md:border-none">
          {timeline.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="mb-10 ml-8 md:ml-0 md:flex md:items-center md:justify-between w-full relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#7C3AED] border-4 border-slate-900 z-10"></div>
                {/* Center line for desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px h-full bg-slate-700 -z-0 top-5"></div>
                
                <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}>
                  <div className="text-[#38BDF8] font-bold font-display text-xl mb-1">{item.date}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base">{item.desc}</p>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
