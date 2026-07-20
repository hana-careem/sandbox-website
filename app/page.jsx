import React from 'react';
import SandboxHero from '../components/home/SandboxHero';
import WhatIsSandbox from '../components/home/WhatIsSandbox';
import Timeline from '../components/home/Timeline';
import WhyAttend from '../components/home/WhyAttend';

export const metadata = {
  title: 'Sandbox | Inter-School Business Pitching Competition',
  description: 'Sri Lanka\'s premier entrepreneurial battleground for school students.',
};

export default function Home() {
  return (
    <main className="w-full">
      <SandboxHero />
      <WhatIsSandbox />
      <Timeline />
      <WhyAttend />
    </main>
  );
}
