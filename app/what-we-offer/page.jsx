import React from 'react';
import IntroSection from '../../components/what-we-offer/IntroSection';
import CoreSupport from '../../components/what-we-offer/CoreSupport';
import CommunityGrowth from '../../components/what-we-offer/CommunityGrowth';
import PrizesRecognition from '../../components/what-we-offer/PrizesRecognition';

export const metadata = {
  title: 'What We Offer | Sandbox',
  description: 'Workshops, networking, and industry exposure at Sandbox.',
};

export default function WhatWeOfferPage() {
  return (
    <main
      className="w-full min-h-screen"
      style={{
        background:
          'radial-gradient(720px 620px at 12% 12%, rgba(122,61,104,0.42) 0%, rgba(122,61,104,0) 60%), radial-gradient(780px 680px at 88% 88%, rgba(168,113,150,0.30) 0%, rgba(168,113,150,0) 60%), linear-gradient(180deg, #2A1523 0%, #3c1c33 50%, #2A1523 100%)',
      }}
    >
      <IntroSection />
      <CoreSupport />
      <CommunityGrowth />
      <PrizesRecognition />
    </main>
  );
}
