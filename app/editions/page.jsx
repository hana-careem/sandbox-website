import React from 'react';
import EditionsBanner from '../../components/editions/EditionsBanner';
import EditionTabs from '../../components/editions/EditionTabs';

export const metadata = {
  title: 'Past Editions | Sandbox',
  description: 'Explore the history and winners of past Sandbox editions.',
};

export default function EditionsPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-[#7C3AED] selection:text-white">
      <EditionsBanner />
      <EditionTabs />
    </main>
  );
}
