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
    <main
      className="min-h-screen text-[#c4b5c9] font-sans selection:bg-[#7C3AED] selection:text-white"
      style={{
        background:
          'radial-gradient(720px 620px at 12% 12%, rgba(122,61,104,0.42) 0%, rgba(122,61,104,0) 60%), radial-gradient(780px 680px at 88% 88%, rgba(168,113,150,0.30) 0%, rgba(168,113,150,0) 60%), linear-gradient(180deg, #2A1523 0%, #3c1c33 50%, #2A1523 100%)',
      }}
    >
      <AboutBanner />
      <OurHistory />
      <OurGoals />
    </main>
  );
}
