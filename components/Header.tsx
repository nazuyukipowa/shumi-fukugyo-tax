'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-brand-800"
          aria-label="趣味副業の確定申告ガイド トップ"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-700 font-serif text-base font-bold text-cream-50">
            趣
          </span>
          <span className="font-display text-base font-bold tracking-tight sm:text-lg">
            趣味副業の確定申告ガイド
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="主要ナビゲーション">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              className="text-sm font-medium text-ink-700 hover:text-brand-700"
            >
              {c.title}
            </Link>
          ))}
          <Link
            href="/articles"
            className="text-sm font-medium text-ink-700 hover:text-brand-700"
          >
            記事
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 md:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-cream-200 bg-cream-50 md:hidden">
          <nav className="container-x flex flex-col gap-1 py-3" aria-label="モバイルナビゲーション">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-800"
                onClick={() => setOpen(false)}
              >
                {c.emoji} {c.title}
              </Link>
            ))}
            <Link
              href="/articles"
              className="rounded-md px-3 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-800"
              onClick={() => setOpen(false)}
            >
              📰 記事一覧
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
