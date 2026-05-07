import Image from 'next/image';
import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

export default function RecentArticles() {
  const articles = getAllArticles().slice(0, 6);
  if (articles.length === 0) return null;

  const [lead, ...rest] = articles;

  return (
    <section
      aria-labelledby="articles-heading"
      className="py-20 sm:py-24"
    >
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Latest Articles</span>
            <h2 id="articles-heading" className="heading-2 mt-5">
              新着の解説記事
            </h2>
            <p className="lede mt-4">
              副業会社員の実務で迷いやすい論点を、一次情報をもとにひとつずつ解きほぐします。
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden items-center gap-1 self-end whitespace-nowrap text-sm font-bold text-brand-700 hover:text-brand-800 sm:inline-flex"
          >
            記事一覧へ
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path
                fillRule="evenodd"
                d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Link
            href={lead.href}
            className="group lg:col-span-7"
          >
            <article className="overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm transition group-hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={lead.hero}
                  alt={lead.heroAlt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 inline-flex rounded-full bg-cream-50/95 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-800 backdrop-blur">
                  {lead.category}
                </span>
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-xs tracking-widest text-ink-500">
                  <time dateTime={lead.publishedAt}>{formatDate(lead.publishedAt)}</time>
                  <span className="mx-2 text-cream-200">／</span>
                  読了 約 {lead.readingTime} 分
                </p>
                <h3 className="font-display mt-3 text-xl font-bold leading-snug text-ink-900 group-hover:text-brand-700 sm:text-2xl">
                  {lead.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  {lead.description}
                </p>
                <p className="mt-5 text-xs text-ink-500">
                  執筆：<span className="font-bold text-ink-700">{lead.author}</span>
                </p>
              </div>
            </article>
          </Link>

          {rest.length > 0 && (
            <ul className="lg:col-span-5">
              {rest.map((a, i) => (
                <li key={a.slug}>
                  <Link href={a.href} className="group flex gap-4 py-5">
                    <div className="relative aspect-square w-24 flex-none overflow-hidden rounded-xl sm:w-28">
                      <Image
                        src={a.hero}
                        alt={a.heroAlt}
                        fill
                        sizes="120px"
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] tracking-widest text-ink-500">
                        <span className="font-bold text-brand-700">{a.category}</span>
                        <span className="mx-2 text-cream-200">／</span>
                        <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                      </p>
                      <h3 className="font-display mt-2 text-base font-bold leading-snug text-ink-900 group-hover:text-brand-700">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-xs text-ink-500">
                        執筆：{a.author}
                      </p>
                    </div>
                  </Link>
                  {i < rest.length - 1 && (
                    <hr className="border-cream-200" />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
