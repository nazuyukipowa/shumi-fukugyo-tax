import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AffiliateSection from '@/components/AffiliateSection';
import ArticleMeta from '@/components/ArticleMeta';
import References from '@/components/References';
import { affiliateLinks } from '@/lib/site';

export const metadata: Metadata = {
  title: '会計ソフト比較｜freee vs マネーフォワード',
  description:
    '副業会社員向けに、freee会計とマネーフォワード クラウド確定申告を比較。料金、機能、使いやすさ、サポートの違いを表でわかりやすく整理。',
  alternates: { canonical: '/kaikei-soft' },
};

const rows: Array<{
  label: string;
  freee: string;
  mf: string;
}> = [
  { label: '対象', freee: '簿記初心者・スマホ中心の人', mf: '家計簿アプリ利用者・経理経験者' },
  { label: '料金（個人）', freee: '月額1,180円〜（年払い）', mf: '月額980円〜（年払い）' },
  { label: '無料お試し', freee: '30日間', mf: '1ヶ月無料' },
  { label: '銀行・カード連携', freee: '◎ 種類豊富', mf: '◎ マネーフォワードME連携が強い' },
  { label: 'スマホアプリ', freee: '◎ 申告まで完結可', mf: '○ 取引取込が中心' },
  { label: '質問形式の入力', freee: '◎ 質問に答えるだけ', mf: '△ 仕訳ベース' },
  { label: '電子申告', freee: '対応', mf: '対応' },
  { label: 'インボイス対応', freee: '対応', mf: '対応' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="カテゴリ"
        title="会計ソフト比較"
        description="副業会社員に人気の2大クラウド会計ソフト、freeeとマネーフォワードを比較。あなたに合うのはどっち？"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '会計ソフト比較' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <ArticleMeta updated="2026-04-21" published="2025-11-08" />
          <div className="mx-auto max-w-4xl">
            <h2 className="heading-2">機能比較表</h2>
            <p className="mt-3 text-slate-600">
              料金は2025年時点の参考価格です。最新の情報は公式サイトでご確認ください。
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-xl border border-slate-200 text-sm">
                <thead className="bg-brand-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                      項目
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                      freee会計
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-bold">
                      マネーフォワード
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-800">
                        {r.label}
                      </td>
                      <td className="border-b border-slate-200 px-4 py-3 text-slate-700">
                        {r.freee}
                      </td>
                      <td className="border-b border-slate-200 px-4 py-3 text-slate-700">
                        {r.mf}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  {affiliateLinks.freee.name}が向いている人
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>・はじめて確定申告する人</li>
                  <li>・簿記の知識ゼロでとにかく簡単に終わらせたい</li>
                  <li>・スマホで申告まで完結したい</li>
                  <li>・チャットサポートを重視する</li>
                </ul>
                <a
                  href={affiliateLinks.freee.href}
                  target="_blank"
                  rel="noopener sponsored"
                  className="btn-primary mt-6 w-full"
                >
                  freee公式サイトを見る
                </a>
                <p className="mt-2 text-center text-xs text-slate-500">※ アフィリエイト広告</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  {affiliateLinks.moneyforward.name}が向いている人
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>・マネーフォワードMEを既に使っている</li>
                  <li>・仕訳の概念が理解できる／勉強したい</li>
                  <li>・将来的に法人化や本業化を考えている</li>
                  <li>・コスト重視（月額がやや安い）</li>
                </ul>
                <a
                  href={affiliateLinks.moneyforward.href}
                  target="_blank"
                  rel="noopener sponsored"
                  className="btn-primary mt-6 w-full"
                >
                  マネーフォワード公式を見る
                </a>
                <p className="mt-2 text-center text-xs text-slate-500">※ アフィリエイト広告</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AffiliateSection compact heading="まずは無料プランから試してみる" />

      <section className="pb-16">
        <div className="container-x">
          <References
            items={[
              {
                title: 'freee会計（個人事業主向け料金プラン）',
                publisher: 'freee株式会社 公式サイト',
                href: 'https://www.freee.co.jp/kojin/',
              },
              {
                title: 'マネーフォワード クラウド確定申告',
                publisher: '株式会社マネーフォワード 公式サイト',
                href: 'https://biz.moneyforward.com/tax_return',
              },
              {
                title: 'インボイス制度（適格請求書等保存方式）',
                publisher: '国税庁',
                href: 'https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice.htm',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
