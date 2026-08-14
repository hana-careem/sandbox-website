import React from 'react';
import BackToEclub from '../components/home/BackToEclub';
import SandboxHero from '../components/home/SandboxHero';
import AboutSandbox from '../components/home/AboutSandbox';
import Guidelines from '../components/home/Guidelines';
import Timeline from '../components/home/Timeline';
import PhotoCollageBackground from '../components/home/PhotoCollageBackground';
import ProjectProposalBanner from '../components/home/ProjectProposalBanner';

export const metadata = {
  title: 'Sandbox | Inter-School Business Pitching Competition',
  description: 'Sri Lanka\'s premier entrepreneurial battleground for school students.',
};

export default function Home() {
  return (
    <main className="w-full">
      <BackToEclub />
      <SandboxHero />
      <PhotoCollageBackground>
        <AboutSandbox />
        <Timeline />
        <Guidelines />
        <ProjectProposalBanner />
      </PhotoCollageBackground>
    </main>
  );
}

