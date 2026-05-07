import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import AffiliateSection from '@/components/AffiliateSection';
import References from '@/components/References';
import PullQuote from '@/components/PullQuote';

export const articleMdxComponents: MDXComponents = {
  AffiliateSection,
  References,
  PullQuote,
  a: ({ href, children, ...props }) => {
    if (!href) return <span {...props}>{children}</span>;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  },
  img: ({ src, alt }) => {
    if (!src) return null;
    return (
      <span className="my-8 block">
        <Image
          src={src}
          alt={alt ?? ''}
          width={1200}
          height={750}
          className="h-auto w-full rounded-2xl border border-cream-200 object-cover"
        />
        {alt && (
          <span className="mt-2 block text-center text-xs text-ink-500">
            {alt}
          </span>
        )}
      </span>
    );
  },
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-4 border-accent-400 bg-accent-50/50 px-5 py-4 font-serif text-ink-700"
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-cream-200">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border-b border-cream-200 bg-cream-50 px-4 py-2 text-left font-bold text-ink-900"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border-b border-cream-100 px-4 py-2 text-ink-700" {...props}>
      {children}
    </td>
  ),
  code: ({ children, ...props }) => (
    <code
      className="rounded bg-cream-100 px-1.5 py-0.5 text-[0.9em] font-mono text-brand-800"
      {...props}
    >
      {children}
    </code>
  ),
};
