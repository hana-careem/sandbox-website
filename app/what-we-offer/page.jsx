import React from 'react';
import OfferingsGrid from '../../components/what-we-offer/OfferingsGrid';

export const metadata = {
  title: 'What We Offer | Sandbox',
  description: 'Workshops, networking, and investor exposure at Sandbox.',
};

export default function WhatWeOfferPage() {
  return (
    <main className="w-full">
      <OfferingsGrid />
    </main>
  );
}
