import Link from 'next/link';
import { categories } from '@/lib/site';

export default function CategoryGrid() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="py-20 sm:py-24"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">読みたいテーマから</span>
          <h2 id="categories-heading" className="heading-2 mt-5">
            知りたいところから読む
          </h2>
          <p className="lede mt-4">
            会社員が趣味を副業に育てるとき、つまずきがちなテーマを4つに絞ってまとめました。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link key={c.slug} href={c.href} className="card group flex flex-col">
              <div className="flex items-baseline justify-between">
                <span
                  className="font-serif text-3xl text-cream-200"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl" aria-hidden>
                  {c.emoji}
                </span>
              </div>
              <h3 className="heading-3 mt-4 group-hover:text-brand-700">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {c.description}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-bold text-brand-700">
                詳しく見る
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
