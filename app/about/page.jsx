import React from 'react';
import Link from 'next/link';
import AboutBanner from '../../components/about/AboutBanner';
import OurHistory from '../../components/about/OurHistory';
import OurGoals from '../../components/about/OurGoals';
import MeetTheTeamSection from '../../components/about/MeetTheTeamSection';

export const metadata = {
  title: 'About | Sandbox',
  description: 'Learn about the history, vision, and mission of the Sandbox pitching competition.',
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-[#7C3AED] selection:text-white">
      <AboutBanner />
      <OurHistory />
      <MeetTheTeamSection />
      <OurGoals />
    </main>
  );
}
