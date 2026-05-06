import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { hobbies } from '@/lib/site';
import AffiliateSection from '@/components/AffiliateSection';

export const metadata: Metadata = {
  title: '趣味別の経費・節税ガイド',
  description:
    '料理・音楽・DIYなど、趣味を副業にした会社員のための経費・節税ガイド。ジャンルごとの「経費にできるもの／できないもの」の考え方を実例で解説。',
  alternates: { canonical: '/hobby-guide' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="カテゴリ"
        title="趣味別の経費・節税ガイド"
        description="あなたの趣味で発生する支出のうち、どれが経費になるのか。代表的な3ジャンルで具体例を見ていきましょう。"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '趣味別の経費・節税ガイド' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((h) => (
              <Link key={h.slug} href={h.href} className="card group flex flex-col">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-2xl text-white">
                  {h.emoji}
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-brand-700">
                  {h.title}の経費・節税
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {h.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
                  ガイドを読む →
                </span>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brand-200 bg-brand-50 p-6">
            <h2 className="text-lg font-bold text-brand-800">
              共通の考え方：プライベートとの「按分（あんぶん）」
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              趣味から発展した副業では、「自分が楽しむため」と「お金を稼ぐため」が混ざりがちです。
              機材、スペース、通信費などはプライベート利用と事業利用の比率で分けて経費計上するのが原則です。
              比率の根拠（使用時間・使用面積など）はメモやスプレッドシートで残しておきましょう。
            </p>
          </div>
        </div>
      </section>

      <AffiliateSection compact />
    </>
  );
}
