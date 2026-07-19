import React from 'react';

export default function IntroSection() {
  return (
    <section className="pt-40 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-coolvetica font-normal text-white tracking-normal">
            WHAT WE <span className="text-[#7C3AED]">OFFER</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Sandbox isn't just a competition; it's an accelerator for student potential. Here's what you gain by participating.
            </p>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Every year, thousands of students have an idea worth building — but few have access to the mentorship, capital, and network that turns that idea into something real. Sandbox exists to close that gap. Whether you're refining a business plan for the first time or preparing to pitch to your first investor, this is the support system built to get you there.
            </p>
          </div>

          <div className="md:w-1/2 w-full relative overflow-hidden rounded-3xl ring-1 ring-white/5 shadow-[0_0_90px_rgba(124,58,237,0.10)]">
            <img
              src="https://placehold.co/800x500"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
