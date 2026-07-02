import React from 'react';
import FaqAccordion from '../../components/faqs/FaqAccordion';

export const metadata = {
  title: 'FAQs | Sandbox',
  description: 'Frequently asked questions about the Sandbox pitching competition.',
};

export default function FaqsPage() {
  return (
    <main className="w-full">
      <FaqAccordion />
    </main>
  );
}
