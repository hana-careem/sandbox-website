import React from 'react';
import SandboxHero from '../components/home/SandboxHero';
import AboutSandbox from '../components/home/AboutSandbox';
import OfficialPartnership from '../components/home/OfficialPartnership';
import Guidelines from '../components/home/Guidelines';
import Timeline from '../components/home/Timeline';

export const metadata = {
  title: 'Sandbox | Inter-School Business Pitching Competition',
  description: 'Sri Lanka\'s premier entrepreneurial battleground for school students.',
};

export default function Home() {
  return (
    <main className="w-full">
      <SandboxHero />
      <div className="relative w-full bg-[linear-gradient(180deg,#130E1C_0%,#1E1233_16%,#2A143F_30%,#3A1860_46%,#5B2E8F_60%,#7A4FB0_72%,#C3AEE6_84%,#F1EAFB_100%)]">
        {/* Soft blurred radial glows for space depth */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#5B2E8F] rounded-full filter blur-[90px] opacity-50 pointer-events-none"></div>
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-[#7A4FB0] rounded-full filter blur-[90px] opacity-50 pointer-events-none"></div>

        <AboutSandbox />
        <OfficialPartnership />
        <Guidelines />
      </div>
      <Timeline />
    </main>
  );
}

