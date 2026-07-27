import React from 'react';

export default function AboutSandbox() {
  return (
    <section className="relative py-20 z-10 text-center">
      <div className="container max-w-4xl mx-auto px-4">
        
        {/* Eyebrow */}
        <div className="flex flex-col items-center justify-center mb-6">
          <p className="text-[#C3AEE6] font-medium tracking-widest uppercase text-sm">
            What is Sandbox
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7A4FB0] to-[#C3AEE6] mt-2 rounded-full"></div>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-coolvetica font-normal text-[#F3EEFB] mb-6 tracking-tight">
          Sri Lanka's First Inter-School Business Pitch Competition
        </h2>
        
        {/* Kicker */}
        <p className="text-xl md:text-2xl font-space-grotesk text-[#F3EEFB] font-medium mb-8">
          The next generation of entrepreneurs is here — and they're ready to be heard.
        </p>
        
        {/* Body */}
        <div className="text-[#C6B9E0] space-y-6 text-lg font-inter max-w-3xl mx-auto leading-relaxed mb-10">
          <p>
            Organized by the Entrepreneurship Club of APIIT in partnership with the Ministry of Education, this landmark competition brings together the sharpest young minds from schools across Sri Lanka to pitch real business ideas to a panel of seasoned industry judges.
          </p>
          <p className="text-[#F3EEFB] font-semibold text-xl">
            This isn't a classroom exercise. It's a launchpad.
          </p>
        </div>

        {/* Theme Box */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-[rgba(183,155,221,0.28)] bg-[rgba(122,79,176,0.10)] p-8 md:p-10 backdrop-blur-sm text-left">
          <h3 className="text-2xl font-space-grotesk font-bold text-[#F3EEFB] mb-4">
            This Year's Theme: A Better Tomorrow
          </h3>
          <p className="text-[#C6B9E0] text-lg font-inter leading-relaxed">
            Students are challenged to think beyond the ordinary — to build ideas that don't just make money, but make a difference. From sustainability to social impact, technology to community upliftment, contestants will present ventures designed to solve tomorrow's problems, today.
          </p>
        </div>

      </div>
    </section>
  );
}
