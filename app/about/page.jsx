import React from 'react';
import AboutBanner from '../../components/about/AboutBanner';
import OurHistory from '../../components/about/OurHistory';
import OurGoals from '../../components/about/OurGoals';
import VisionMission from '../../components/about/VisionMission';
import TeamCTA from '../../components/about/TeamCTA';

export const metadata = {
  title: 'About | Sandbox',
  description: 'Learn about the history, vision, and mission of the Sandbox pitching competition.',
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-[#7C3AED] selection:text-white">
      <AboutBanner />
      <OurHistory />
      <OurGoals />
      <VisionMission />
      <TeamCTA />
    </main>
  );
}
