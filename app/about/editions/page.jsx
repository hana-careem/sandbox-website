import React from 'react';
import EditionsBanner from '../../../components/about/EditionsBanner';
import EditionTabs from '../../../components/about/EditionTabs';

export const metadata = {
  title: 'Past Editions | Sandbox',
  description: 'Explore the history and winners of past Sandbox editions.',
};

export default function EditionsPage() {
  return (
    <main className="w-full">
      <EditionsBanner />
      <EditionTabs />
    </main>
  );
}
