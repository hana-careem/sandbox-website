import React from 'react';
import TeamBanner from '../../../components/about/TeamBanner';
import TeamGrid from '../../../components/about/TeamGrid';

export const metadata = {
  title: 'Meet the Team | Sandbox',
  description: 'Meet the organizing committee behind Sandbox.',
};

export default function TeamPage() {
  return (
    <main className="w-full">
      <TeamBanner />
      <TeamGrid />
    </main>
  );
}
