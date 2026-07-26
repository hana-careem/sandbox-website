import React from 'react';
import { Trophy, Globe2, Mic2, Landmark } from 'lucide-react';

export default function AboutSandbox() {
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-[#14F3DB]" />,
      title: "Largest",
      description: "Inter-school business pitching competition in Sri Lanka"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#14F3DB]" />,
      title: "All Schools",
      description: "Government, private & international welcome"
    },
    {
      icon: <Mic2 className="w-8 h-8 text-[#14F3DB]" />,
      title: "Real Stage",
      description: "Pitch in front of real entrepreneurs and industry leaders"
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#14F3DB]" />,
      title: "MOE Backed",
      description: "Supported by the Ministry of Education, Sri Lanka"
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A1D]">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#14F3DB] font-medium tracking-widest uppercase mb-4 text-sm">
            About the Competition
          </p>
          <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-white mb-8 tracking-tight">
            What is Sandbox?
          </h2>
          <div className="text-slate-300 space-y-6 text-lg font-inter">
            <p>
              Sri Lanka's first-ever inter-school pitching competition, organized by the Entrepreneurship Club of APIIT, in collaboration with the Ministry of Education.
            </p>
            <p>
              Open to all schools — government, private, and international — SANDBOX gives young Sri Lankans a real stage to brainstorm big ideas and pitch to actual entrepreneurs and industry leaders.
            </p>
            <p className="text-[#A64D79] font-medium text-xl">
              Equal access. Real opportunities.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#3B1C32] rounded-2xl p-6 border border-[#6A1E55] hover:border-[#A64D79] transition-colors duration-300 flex flex-col items-start"
            >
              <div className="mb-4 p-3 bg-[#1A1A1D] rounded-xl border border-[#6A1E55]">
                {feature.icon}
              </div>
              <h3 className="text-white font-space-grotesk text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-[#A64D79] text-sm font-inter leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
