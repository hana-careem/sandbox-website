import React from 'react';
import Link from 'next/link';
import AboutBanner from '../../components/about/AboutBanner';
import OurHistory from '../../components/about/OurHistory';
import OurGoals from '../../components/about/OurGoals';


export const metadata = {
  title: 'About | Sandbox',
  description: 'Learn about the history, vision, and mission of the Sandbox pitching competition.',
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-[#1a0a1f] via-[#3a1440] to-[#1a0a1f] min-h-screen text-[#c4b5c9] font-sans selection:bg-[#7C3AED] selection:text-white">
      <AboutBanner />
      <OurHistory />
      <OurGoals />
    </main>
  );
}
