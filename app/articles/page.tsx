import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { categories } from '@/lib/site';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: '記事一覧',
  description:
    '副業会社員の確定申告・節税・会計ソフト選びに役立つ解説記事をすべて掲載しています。',
  alternates: { canonical: '/articles' },
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

export default function ArticlesIndexPage() {
  const articles = getAllArticles();

  const grouped = categories
    .map((c) => ({
      ...c,
      items: articles.filter((a) => a.categorySlug === c.slug),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="記事一覧"
        description="副業会社員の確定申告と節税に関わる論点を、一次情報をもとにひとつずつ解きほぐした解説記事です。"
        breadcrumbs={[
          { label: 'ホーム', href: '/' },
          { label: '記事一覧' },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          {articles.length === 0 ? (
            <p className="text-ink-500">
              まだ記事がありません。順次公開していきます。
            </p>
          ) : (
            <>
              <div>
                <span className="eyebrow">All</span>
                <h2 className="heading-2 mt-4">すべての記事</h2>
              </div>

              <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={a.href} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-cream-200">
                        <Image
                          src={a.hero}
                          alt={a.heroAlt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 inline-flex rounded-full bg-cream-50/95 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-800 backdrop-blur">
                          {a.category}
                        </span>
                      </div>
                      <p className="mt-4 text-[11px] tracking-widest text-ink-500">
                        <time dateTime={a.publishedAt}>
                          {formatDate(a.publishedAt)}
                        </time>
                        <span className="mx-2 text-cream-200">／</span>
                        読了 約 {a.readingTime} 分
                      </p>
                      <h3 className="font-display mt-2 text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500">
                        {a.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

              {grouped.length > 0 && (
                <div className="mt-20 border-t border-cream-200 pt-12">
                  <span className="eyebrow">Categories</span>
                  <h2 className="heading-2 mt-4">カテゴリで探す</h2>
                  <div className="mt-10 grid gap-10 md:grid-cols-2">
                    {grouped.map((g) => (
                      <div key={g.slug}>
                        <h3 className="font-display text-lg font-bold text-ink-900">
                          <span aria-hidden className="mr-2">
                            {g.emoji}
                          </span>
                          {g.title}
                          <span className="ml-2 text-sm font-normal text-ink-500">
                            ({g.items.length})
                          </span>
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {g.items.map((a) => (
                            <li key={a.slug}>
                              <Link
                                href={a.href}
                                className="group flex items-baseline gap-3 text-sm"
                              >
                                <time
                                  dateTime={a.publishedAt}
                                  className="flex-none text-xs text-ink-500"
                                >
                                  {formatDate(a.publishedAt)}
                                </time>
                                <span className="text-ink-700 group-hover:text-brand-700">
                                  {a.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
