import type { ReactNode } from 'react';

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-ink-700 [&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink-900 [&_h2]:border-l-4 [&_h2]:border-brand-600 [&_h2]:pl-4 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink-900 [&_p]:leading-[1.9] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-brand-800 [&_strong]:font-bold [&_strong]:text-ink-900 [&_strong]:bg-accent-100/60 [&_strong]:px-1">
      {children}
    </div>
  );
}
