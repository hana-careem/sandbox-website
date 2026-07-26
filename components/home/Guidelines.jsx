import React from 'react';
import { CheckCircle2, ArrowRight, Check } from 'lucide-react';

export default function Guidelines() {
  const guidelines = [
    "Open to all Sri Lankan schools",
    "Team-based submission",
    "Live pitch rounds",
    "Judged by entrepreneurs",
    "Fair & transparent judging",
    "Government endorsed"
  ];

  return (
    <section className="relative py-20 z-10">
      {/* Background layer: fades from transparent to solid pale lavender */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0px,#F1EAFB_140px,#F1EAFB_100%)]"></div>

      <div className="container max-w-5xl mx-auto px-4 mt-12 md:mt-16">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Block */}
          <div className="flex-1">
            <p className="text-[#4A2178] font-bold tracking-widest uppercase mb-4 text-sm">
              Competition Guidelines
            </p>
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-[#23103F] mb-6 tracking-tight">
              How to Compete & Win
            </h2>
            <p className="text-[#4A3A68] text-lg font-inter leading-relaxed mb-8 font-medium">
              Open to all schools in Sri Lanka. Teams brainstorm and pitch a business idea, judged on originality, feasibility, and presentation by leading entrepreneurs.
            </p>
            
            <a 
              href="https://sandbox.apiit.lk/rule-regulations/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3A1860] to-[#5B2E8F] text-[#F3EEFB] px-8 py-4 rounded-full font-bold font-inter transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              View Full Rules & Regulations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Checklist Block */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="bg-white/40 p-8 md:p-10 rounded-3xl border border-[rgba(183,155,221,0.5)] shadow-xl backdrop-blur-md">
              <ul className="grid grid-cols-1 gap-6">
                {guidelines.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#3A1860] to-[#7A4FB0] flex items-center justify-center shadow-md">
                      <Check className="w-5 h-5 text-white stroke-[3]" />
                    </div>
                    <span className="text-[#23103F] font-inter text-lg font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
