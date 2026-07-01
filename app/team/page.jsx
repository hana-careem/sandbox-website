import React from 'react';
import TeamBanner from '../../components/team/TeamBanner';
import TeamGrid from '../../components/team/TeamGrid';

export const metadata = {
  title: 'Team | Sandbox',
  description: 'Meet the organizing committee behind Sandbox.',
};

export default function TeamPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-[#7C3AED] selection:text-white">
      <TeamBanner />
      <TeamGrid />
    </main>
  );
}
