import React from 'react';
import SandboxHero from '../components/home/SandboxHero';
import AboutSandbox from '../components/home/AboutSandbox';
import Guidelines from '../components/home/Guidelines';
import Timeline from '../components/home/Timeline';
import PhotoCollageBackground from '../components/home/PhotoCollageBackground';

export const metadata = {
  title: 'Sandbox | Inter-School Business Pitching Competition',
  description: 'Sri Lanka\'s premier entrepreneurial battleground for school students.',
};

export default function Home() {
  return (
    <main className="w-full">
      <SandboxHero />

      {/* Collage zone: "What is Sandbox?" + Timeline (collage covers upper portion,
          pink bg is rendered inside Timeline for the lower Semi-Finals / Grand Finals) */}
      <div className="relative w-full bg-[linear-gradient(180deg,#150910_0%,#2A1523_30%,#3c1c33_72%,#3c1c33_100%)]">
        {/* Soft blurred radial glows for space depth */}
        <div className="absolute top-[18%] left-[5%] w-[400px] h-[400px] bg-[#7A3D68] rounded-full filter blur-[90px] opacity-50 pointer-events-none"></div>
        <div className="absolute top-[62%] right-[5%] w-[500px] h-[500px] bg-[#A87196] rounded-full filter blur-[90px] opacity-50 pointer-events-none"></div>

        {/* Bento photo collage — sits behind all content */}
        <PhotoCollageBackground />

        <AboutSandbox />
        <Timeline />
      </div>

      <Guidelines />
    </main>
  );
}
