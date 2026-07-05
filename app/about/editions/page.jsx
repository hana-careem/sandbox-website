import { Suspense } from 'react';
import SandboxPastEditions from '../../../components/about/SandboxPastEditions';

export const metadata = {
  title: 'Past Editions | Sandbox',
  description: 'Explore the history and winners of past Sandbox editions, including the stages, the schools, and the ideas that made it.',
};

export default function EditionsPage() {
  return (
    <main className="w-full">
      {/* Suspense is required by Next.js 14 when a client component uses
          useSearchParams — it prevents the page from blocking SSR. */}
      <Suspense fallback={null}>
        <SandboxPastEditions />
      </Suspense>
    </main>
  );
}
