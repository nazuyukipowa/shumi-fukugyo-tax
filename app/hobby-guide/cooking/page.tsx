import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import AffiliateSection from '@/components/AffiliateSection';
import ArticleMeta from '@/components/ArticleMeta';
import References from '@/components/References';

export const metadata: Metadata = {
  title: '料理を副業にした会社員の経費・節税ガイド',
  description:
    '料理教室・レシピ販売・ケータリングなど、料理を副業にした会社員のための経費・節税ガイド。食材費、調理器具、撮影機材の経費化のコツを解説。',
  alternates: { canonical: '/hobby-guide/cooking' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="趣味別ガイド"
        title="料理を副業にした人の経費・節税"
        description="料理教室、レシピ販売、ケータリング、料理系SNS運営。食まわりの副業ならではの経費の考え方をまとめました。"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '趣味別ガイド', href: '/hobby-guide' },
          { label: '料理' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <ArticleMeta updated="2026-04-21" published="2025-10-12" />
          <Prose>
            <h2>経費にできる代表例</h2>
            <ul>
              <li>レシピ開発・撮影に使った食材費</li>
              <li>調理器具（鍋、オーブン、ミキサー等）の購入費</li>
              <li>食器・盛り付け用の小物</li>
              <li>撮影用カメラ・照明・三脚</li>
              <li>料理教室の会場費・場所代</li>
              <li>食品衛生責任者などの資格取得費用</li>
            </ul>

            <h2>判断が難しいグレーゾーン</h2>
            <h3>家族の食事に使った食材</h3>
            <p>
              レシピ開発で作った料理を家族と食べる場合、
              <strong>事業利用と私的利用の按分</strong>が必要です。
              「撮影用に作った1品＝事業」「家族と食べた残り＝私的」のように、メモを残しておくと安心です。
            </p>

            <h3>自宅キッチンの光熱費</h3>
            <p>
              自宅で調理する場合、ガス・電気・水道の一部は経費に計上できます。
              使用時間や面積比などの合理的な基準で按分しましょう（一般的には10〜30%程度に収める例が多い）。
            </p>

            <h2>節税のポイント</h2>
            <ol>
              <li>
                <strong>少額減価償却資産の特例</strong>を使えば、青色申告者は1単位30万円未満の調理機器を一括経費化できます（年間合計300万円まで）。
              </li>
              <li>
                食材レシートは「日付・店舗・用途（試作／撮影／教室）」をメモしておくと税務調査時に強い。
              </li>
              <li>
                料理教室の集客SNSの広告費・素材購入費も忘れずに計上。
              </li>
            </ol>

            <h2>注意したいポイント</h2>
            <p>
              飲食物を提供する形態（ケータリング、菓子販売など）は
              <strong>食品衛生法の許可</strong>
              が必要なケースがあります。経費以前にまず営業形態の確認を。
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
                title: '食品衛生申請等システム',
                publisher: '厚生労働省',
                href: 'https://ifas.mhlw.go.jp/faspub/_link.do',
              },
            ]}
          />
        </div>
      </section>

      <AffiliateSection
        heading="食材レシートの管理は会計ソフトで"
        lead="毎月の食材費を一件ずつ手入力するのは大変。スマホ撮影や口座連携で自動化しましょう。"
      />
    </>
  );
}
