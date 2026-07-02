import React from 'react';
import SponsorsList from '../../components/sponsors/SponsorsList';
import PartnerUp from '../../components/sponsors/PartnerUp';

export const metadata = {
  title: 'Sponsors | Sandbox',
  description: 'The partners and sponsors who make Sandbox possible.',
};

export default function SponsorsPage() {
  return (
    <main className="w-full">
      <SponsorsList />
      <PartnerUp />
    </main>
  );
}
