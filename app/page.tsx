import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import CategoryGrid from '@/components/CategoryGrid';
import HobbyGrid from '@/components/HobbyGrid';
import RecentArticles from '@/components/RecentArticles';
import PullQuote from '@/components/PullQuote';
import Voices from '@/components/Voices';
import AffiliateSection from '@/components/AffiliateSection';
import EditorialPolicy from '@/components/EditorialPolicy';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | 趣味を副業にした会社員のための税金ガイド`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
};

const faqs = [
  {
    q: '副業の所得が年20万円以下でも申告は必要？',
    a: '所得税の確定申告は不要ですが、住民税の申告は別途必要です。お住まいの自治体のルールも確認しましょう。',
  },
  {
    q: '趣味で稼いだお金は「事業所得」？「雑所得」？',
    a: '継続性・営利性・規模感などで判断されます。帳簿を付けて反復継続的に行う場合は事業所得として認められやすくなります。',
  },
  {
    q: '会計ソフトは必須？',
    a: '青色申告（特に65万円控除）を使うなら、複式簿記が必要なため会計ソフトの利用がほぼ必須です。',
  },
  {
    q: '会社にバレたくない、どうしたら？',
    a: '住民税を「自分で納付（普通徴収）」にすることで、副業分の住民税が会社に通知されにくくなります。',
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'ja-JP',
      },
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/og-image.png`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <StatsBand />

      <CategoryGrid />

      <HobbyGrid />

      <div id="articles">
        <RecentArticles />
      </div>

      <PullQuote
        quote="趣味を仕事にしたとき、いちばん最初の壁は「これは経費か、ただの楽しみか」を自分で線引きすることだ。"
        attribution="副業タックス編集部"
      />

      <Voices />

      <AffiliateSection />

      <div id="policy">
        <EditorialPolicy />
      </div>

      <section
        aria-labelledby="faq-heading"
        className="bg-cream-100 py-20 sm:py-24"
      >
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">FAQ</span>
            <h2 id="faq-heading" className="heading-2 mt-5">
              よくある質問
            </h2>
            <p className="lede mt-4">
              副業会社員からよく聞かれる質問をまとめました。
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-cream-200 bg-white p-5 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-ink-900">
                  <span className="font-display">{f.q}</span>
                  <span className="font-serif text-2xl text-brand-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-800 py-20 text-cream-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
        >
          <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand-600 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-accent-500/40 blur-3xl" />
        </div>
        <div className="container-x relative text-center">
          <h2 className="heading-2 text-cream-50">
            まずは
            <span className="font-serif italic text-accent-400">確定申告の基本</span>
            から
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-100/90">
            副業の規模が小さいうちに正しい知識を入れておくと、確定申告のシーズンに慌てません。
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/kakutei-shinkoku" className="btn-accent">
              確定申告の基本を読む
            </Link>
            <Link
              href="/kaikei-soft"
              className="inline-flex items-center justify-center rounded-full border border-cream-50/40 bg-transparent px-6 py-3 text-sm font-bold text-cream-50 transition hover:bg-cream-50/10 sm:text-base"
            >
              会計ソフトを比較する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
