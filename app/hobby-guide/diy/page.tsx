import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import AffiliateSection from '@/components/AffiliateSection';
import ArticleMeta from '@/components/ArticleMeta';
import References from '@/components/References';

export const metadata: Metadata = {
  title: 'DIYを副業にした会社員の経費・節税ガイド',
  description:
    'ハンドメイド販売・DIY系YouTube・ワークショップ運営で稼ぐ会社員のための経費・節税ガイド。材料費、工具、作業スペースの按分の考え方を解説。',
  alternates: { canonical: '/hobby-guide/diy' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="趣味別ガイド"
        title="DIYを副業にした人の経費・節税"
        description="minneやCreema、BASEでのハンドメイド販売、DIY系YouTube運営、ワークショップ。手作りビジネスならではの経費の整理術。"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '趣味別ガイド', href: '/hobby-guide' },
          { label: 'DIY' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <ArticleMeta updated="2026-04-28" published="2025-10-05" />
          <Prose>
            <h2>経費にできる代表例</h2>
            <ul>
              <li>木材、金具、塗料などの材料費</li>
              <li>電動工具（ドリル、サンダー、丸ノコ等）</li>
              <li>作業用の手袋・保護メガネ・マスク</li>
              <li>梱包資材（段ボール、緩衝材、テープ）</li>
              <li>販売プラットフォームの手数料</li>
              <li>撮影機材・照明（YouTube用）</li>
              <li>ワークショップ会場費</li>
            </ul>

            <h2>判断が難しいグレーゾーン</h2>
            <h3>自宅の作業スペース（家事按分）</h3>
            <p>
              自宅の一室や駐車場・庭を作業場に使う場合、
              <strong>家賃・電気代の一部</strong>
              を経費化できます。事業に使う面積比や時間比を根拠に按分しましょう。
              （例：家全体50㎡のうち作業スペース10㎡ → 家賃の20%を経費）
            </p>

            <h3>展示用に作って売れなかった作品</h3>
            <p>
              展示や撮影のために作った作品は、材料費を経費計上できます。
              在庫として残った場合は、決算時に
              <strong>棚卸し</strong>
              として記帳が必要です。
            </p>

            <h2>節税のポイント</h2>
            <ol>
              <li>
                工具は10万円未満なら一括経費化、青色申告なら30万円未満まで一括経費化の特例あり。
              </li>
              <li>
                ハンドメイドサイトの販売手数料・振込手数料も忘れず計上。
              </li>
              <li>
                材料の仕入れは「事業用クレカ」で統一すると記帳が楽。
              </li>
            </ol>

            <h2>注意したいポイント</h2>
            <p>
              食品・化粧品・電気製品など
              <strong>規制対象のジャンル</strong>
              は販売に許可・届出が必要なケースがあります。
              また、海外発送する場合の送料や関税の扱いにも注意しましょう。
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
                title: 'No.5408 中小企業者等の少額減価償却資産の取得価額の損金算入の特例',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5408.htm',
              },
            ]}
          />
        </div>
      </section>

      <AffiliateSection
        heading="材料費と販売手数料を一元管理"
        lead="ホームセンターの領収書、minneやBASEの売上、振込手数料。会計ソフトでまとめて整理すると棚卸しもスムーズです。"
      />
    </>
  );
}
