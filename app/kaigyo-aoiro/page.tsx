import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import AffiliateSection from '@/components/AffiliateSection';
import ArticleMeta from '@/components/ArticleMeta';
import References from '@/components/References';

export const metadata: Metadata = {
  title: '開業届と青色申告のはじめ方',
  description:
    '副業会社員のための開業届と青色申告承認申請の出し方ガイド。提出書類、期限、青色申告で65万円控除を受けるための条件をやさしく解説。',
  alternates: { canonical: '/kaigyo-aoiro' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="カテゴリ"
        title="開業届・青色申告"
        description="副業の規模が育ってきたら、開業届と青色申告承認申請を出すのが節税の第一歩。手続きの流れをまとめました。"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '開業届・青色申告' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <ArticleMeta updated="2026-04-07" published="2025-08-22" />
          <Prose>
            <h2>開業届とは</h2>
            <p>
              個人で事業を始めたときに税務署へ提出する書類です。正式には
              <strong>「個人事業の開業・廃業等届出書」</strong>。
              事業開始から<strong>1ヶ月以内</strong>の提出が原則です。
            </p>
            <ul>
              <li>提出先：納税地（住所地）を管轄する税務署</li>
              <li>提出方法：窓口・郵送・e-Tax</li>
              <li>費用：無料</li>
            </ul>

            <h2>青色申告承認申請書とは</h2>
            <p>
              青色申告で確定申告をするために必要な申請書です。
              <strong>原則として開業から2ヶ月以内</strong>
              （新年から青色を使う場合は3月15日まで）に提出します。
              開業届と一緒に出すのがおすすめ。
            </p>

            <h2>青色申告の3つのメリット</h2>
            <ol>
              <li>
                <strong>最大65万円の青色申告特別控除</strong>（複式簿記＋e-Tax必須）
              </li>
              <li>
                <strong>赤字を3年間繰り越せる</strong>（純損失の繰越控除）
              </li>
              <li>
                <strong>家族への給与を経費にできる</strong>（青色事業専従者給与）
              </li>
            </ol>

            <h2>65万円控除を受けるための条件</h2>
            <ul>
              <li>事業所得または不動産所得があること</li>
              <li>複式簿記で帳簿をつけていること</li>
              <li>貸借対照表と損益計算書を提出すること</li>
              <li>e-Taxで電子申告するか、電子帳簿保存をしていること</li>
              <li>期限内に申告すること</li>
            </ul>
            <p>
              「複式簿記」と聞くと難しく感じますが、
              会計ソフトを使えば日々の取引を入力するだけで自動的に複式簿記の帳簿が作られます。
            </p>

            <h2>提出までの流れ</h2>
            <ol>
              <li>国税庁サイトまたは会計ソフトで開業届と青色申告承認申請書を作成</li>
              <li>マイナンバーと本人確認書類を準備</li>
              <li>e-Taxで提出（紙の場合は税務署へ持参または郵送）</li>
              <li>控えに受付印をもらって保管</li>
            </ol>

            <h2>会社員の副業で開業届を出すと社会保険はどうなる？</h2>
            <p>
              開業届を出しても、
              <strong>会社員としての社会保険は変わりません</strong>。
              失業給付の受給資格に影響する可能性はありますが、現役の会社員にはほぼ影響なしと考えてOKです。
            </p>

            <h2>注意したいポイント</h2>
            <p>
              開業届を出すと
              <strong>屋号付き口座</strong>
              を作れたり、小規模企業共済に加入できたりとメリットが増えます。
              一方で、信用情報や扶養の判定に関係する場面もあるため、配偶者の扶養に入っている場合は事前に確認しましょう。
            </p>
          </Prose>

          <References
            items={[
              {
                title: '個人事業の開業届出・廃業届出等手続',
                publisher: '国税庁',
                href: 'https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/shinkoku/annai/04.htm',
              },
              {
                title: '所得税の青色申告承認申請手続',
                publisher: '国税庁',
                href: 'https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/shinkoku/annai/09100.htm',
              },
              {
                title: 'No.2070 青色申告制度',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm',
              },
              {
                title: 'No.5408 中小企業者等の少額減価償却資産の特例',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5408.htm',
              },
            ]}
          />
        </div>
      </section>

      <AffiliateSection
        heading="開業届と青色申告承認申請も会計ソフトで作れる"
        lead="質問に答えるだけで開業届が完成。提出までワンストップで進められます。"
      />
    </>
  );
}
