import React from 'react';
import SandboxHero from '../components/home/SandboxHero';
import AboutSandbox from '../components/home/AboutSandbox';
import OfficialPartnership from '../components/home/OfficialPartnership';
import Guidelines from '../components/home/Guidelines';
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
      <AboutSandbox />
      <OfficialPartnership />
      <Guidelines />
      <Timeline />
      <WhyAttend />
    </main>
  );
}

