import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import AffiliateSection from '@/components/AffiliateSection';
import ArticleMeta from '@/components/ArticleMeta';
import References from '@/components/References';

export const metadata: Metadata = {
  title: '確定申告の基本',
  description:
    '副業会社員のための確定申告の基本ガイド。20万円ルール、必要書類、申告の流れ、期限、雑所得と事業所得の違いをわかりやすく解説。',
  alternates: { canonical: '/kakutei-shinkoku' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="カテゴリ"
        title="確定申告の基本"
        description="副業を始めた会社員が、まず最初におさえるべき確定申告のルールと流れをまとめました。"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '確定申告の基本' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <ArticleMeta updated="2026-05-01" published="2025-09-15" />
          <Prose>
            <h2>副業の「20万円ルール」とは</h2>
            <p>
              会社員の副業で得た<strong>所得</strong>（売上から経費を引いた金額）が
              <strong>年間20万円を超える場合</strong>、所得税の確定申告が必要です。
              「売上」ではなく「所得」で判定する点に注意しましょう。
            </p>
            <ul>
              <li>売上 30万円 − 経費 12万円 = 所得 18万円 → 申告不要（所得税）</li>
              <li>売上 50万円 − 経費 25万円 = 所得 25万円 → 申告必要</li>
            </ul>
            <p>
              なお、所得税の申告が不要でも、
              <strong>住民税の申告は別途必要</strong>になるケースが多いです。お住まいの市区町村のルールも確認してください。
            </p>

            <h2>雑所得と事業所得の違い</h2>
            <p>
              趣味の延長で得た収入は、規模や継続性によって扱いが変わります。
            </p>
            <ul>
              <li>
                <strong>雑所得</strong>：単発・小規模・帳簿なし。青色申告の特典は使えません。
              </li>
              <li>
                <strong>事業所得</strong>：継続的・営利目的・帳簿あり。青色申告で
                <strong>最大65万円控除</strong>などの優遇を受けられます。
              </li>
            </ul>
            <p>
              帳簿を付けて反復継続的に営んでいる場合は、事業所得として申告できる可能性が高くなります。
            </p>

            <h2>確定申告の流れ（5ステップ）</h2>
            <ol>
              <li>1年分の売上・経費の領収書／取引データを集める</li>
              <li>会計ソフトに入力して、収支内訳書または青色申告決算書を作成</li>
              <li>所得控除（生命保険・医療費・iDeCoなど）を集計</li>
              <li>確定申告書（Bまたは新様式）を作成</li>
              <li>e-Taxまたは郵送、税務署窓口で提出</li>
            </ol>

            <h2>必要書類チェックリスト</h2>
            <ul>
              <li>会社からの源泉徴収票</li>
              <li>副業の売上がわかるもの（請求書・売上台帳）</li>
              <li>経費の領収書・クレジット明細・銀行明細</li>
              <li>各種控除証明書（生命保険、地震保険、iDeCo、ふるさと納税など）</li>
              <li>マイナンバーカードまたは通知カード＋本人確認書類</li>
            </ul>

            <h2>申告の期限</h2>
            <p>
              確定申告の期間は、原則として
              <strong>翌年2月16日〜3月15日</strong>です。期限を過ぎると無申告加算税や延滞税が発生する可能性があるため、早めの準備をおすすめします。
            </p>

            <h2>会社にバレないための注意点</h2>
            <p>
              住民税の徴収方法を
              <strong>「自分で納付（普通徴収）」</strong>
              にすると、副業分の住民税が会社に通知されにくくなります。確定申告書の住民税欄で必ず選択しましょう。
            </p>
          </Prose>

          <References
            items={[
              {
                title: '所得税の確定申告',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/shinkoku/kakutei.htm',
              },
              {
                title: 'No.1500 雑所得',
                publisher: '国税庁 タックスアンサー',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1500.htm',
              },
              {
                title: '給与所得者で確定申告が必要な人',
                publisher: '国税庁 タックスアンサー No.1900',
                href: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm',
              },
              {
                title: '住民税の申告について',
                publisher: '総務省',
                href: 'https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/individual-inhabitant-tax.html',
              },
            ]}
          />
        </div>
      </section>

      <AffiliateSection
        heading="申告作業を時短するなら会計ソフト"
        lead="会社員の副業確定申告は、自動連携できる会計ソフトを使うと作業時間が一気に短くなります。"
      />
    </>
  );
}
