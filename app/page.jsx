import React from 'react';
import SandboxHero from '../components/home/SandboxHero';
import Marquee from '../components/home/Marquee';
import RegisterCTA from '../components/home/RegisterCTA';
import AboutStats from '../components/home/AboutStats';
import WhyAttend from '../components/home/WhyAttend';
import WhatToExpect from '../components/home/WhatToExpect';
import BenefitsPrizes from '../components/home/BenefitsPrizes';
import EventTimeline from '../components/home/EventTimeline';
import Gallery from '../components/home/Gallery';
import PartnerBanner from '../components/home/PartnerBanner';
import RulesSection from '../components/home/RulesSection';

export const metadata = {
  title: 'Sandbox | Inter-School Business Pitching Competition',
  description: 'Sri Lanka\'s premier entrepreneurial battleground for school students.',
};

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-[#7C3AED] selection:text-white">
      <SandboxHero />
      <Marquee />
      <AboutStats />
      <WhyAttend />
      <WhatToExpect />
      <BenefitsPrizes />
      <EventTimeline />
      <Gallery />
      <PartnerBanner />
      <RulesSection />
      <RegisterCTA />
    </main>
  );
}
