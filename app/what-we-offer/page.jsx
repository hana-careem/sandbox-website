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
    <main className="w-full bg-[linear-gradient(180deg,#150910_0%,#2A1523_30%,#3c1c33_72%,#3c1c33_100%)] min-h-screen">
      <IntroSection />
      <CoreSupport />
      <CommunityGrowth />
      <PrizesRecognition />
    </main>
  );
}
