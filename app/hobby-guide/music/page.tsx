import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import AffiliateSection from '@/components/AffiliateSection';
import ArticleMeta from '@/components/ArticleMeta';
import References from '@/components/References';

export const metadata: Metadata = {
  title: '音楽を副業にした会社員の経費・節税ガイド',
  description:
    'ライブ・配信・楽曲販売で稼ぐ会社員のための経費・節税ガイド。楽器、機材、スタジオ代、配信ソフトの経費化と按分の考え方を解説。',
  alternates: { canonical: '/hobby-guide/music' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="趣味別ガイド"
        title="音楽を副業にした人の経費・節税"
        description="ライブ出演、配信、楽曲販売、レッスン業。音楽活動で発生する支出のうち経費にできるものを整理しました。"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '趣味別ガイド', href: '/hobby-guide' },
          { label: '音楽' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <ArticleMeta updated="2026-04-14" published="2025-09-30" />
          <Prose>
            <h2>経費にできる代表例</h2>
            <ul>
              <li>楽器・アンプ・エフェクター（10万円以上は減価償却）</li>
              <li>マイク、オーディオインターフェース、ヘッドホン</li>
              <li>DAWソフト・プラグイン・サブスク</li>
              <li>スタジオ代・リハーサル代</li>
              <li>譜面、楽譜作成ソフト</li>
              <li>ライブ会場までの交通費・宿泊費</li>
              <li>配信機材（カメラ、照明、配信ソフト）</li>
            </ul>

            <h2>判断が難しいグレーゾーン</h2>
            <h3>「趣味でも使う」楽器</h3>
            <p>
              プライベート演奏でも使うギターやキーボードは、
              <strong>事業利用比率を見積もって按分</strong>します。
              「週○時間が事業（配信・本番準備）」「週○時間が個人練習」と記録しておくと根拠になります。
            </p>

            <h3>音楽鑑賞・ライブ参戦費用</h3>
            <p>
              リファレンス目的の音源購入やライブ参戦は、明確な業務関連性が説明できれば経費化の余地があります。
              ただし全額経費化は厳しいケースが多く、按分または研究費としての一部計上が現実的です。
            </p>

            <h2>節税のポイント</h2>
            <ol>
              <li>
                10万円以上の楽器・機材は原則として
                <strong>減価償却</strong>
                。青色申告者は30万円未満なら一括経費化できる特例あり。
              </li>
              <li>
                サブスク（DAW、サンプル音源、ストリーミング）は毎月の継続費なので忘れず計上。
              </li>
              <li>
                ライブ収益は源泉徴収されている場合あり。支払調書を保管。
              </li>
            </ol>

            <h2>注意したいポイント</h2>
            <p>
              配信プラットフォームからの収入は
              <strong>外貨建て</strong>
              のことも多く、入金時のレートで円換算して記帳します。為替手数料も経費になります。
            </p>
          </Prose>

          <References
            items={[
              {
                title: 'No.2210 やさしい必要経費の知識',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm',
              },
              {
                title: 'No.2100 減価償却のあらまし',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2100.htm',
              },
              {
                title: 'No.5921 (法人) / No.2080 (個人) 外貨建取引の換算',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2080.htm',
              },
            ]}
          />
        </div>
      </section>

      <AffiliateSection
        heading="サブスクや海外送金の管理が楽になる会計ソフト"
        lead="DAWやサンプル音源のサブスク、海外プラットフォームからの入金。クレカ・銀行口座連携でまとめて管理しましょう。"
      />
    </>
  );
}
