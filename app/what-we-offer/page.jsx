import React from 'react';
import IntroSection from '../../components/what-we-offer/IntroSection';
import CoreSupport from '../../components/what-we-offer/CoreSupport';
import CommunityGrowth from '../../components/what-we-offer/CommunityGrowth';
import PrizesRecognition from '../../components/what-we-offer/PrizesRecognition';

export const metadata = {
  title: 'What We Offer | Sandbox',
  description: 'Workshops, networking, and investor exposure at Sandbox.',
};

export default function WhatWeOfferPage() {
  return (
    <main className="w-full">
      <IntroSection />
      <CoreSupport />
      <CommunityGrowth />
      <PrizesRecognition />
    </main>
  );
}
