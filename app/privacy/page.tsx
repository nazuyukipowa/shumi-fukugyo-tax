import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    '「趣味副業の確定申告ガイド」のプライバシーポリシー。アクセス解析、Cookie、アフィリエイトの取り扱いについて。',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="サイト情報"
        title="プライバシーポリシー"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: 'プライバシーポリシー' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <Prose>
            <h2>個人情報の取得について</h2>
            <p>
              当サイトでは、お問い合わせなどでお名前・メールアドレス等の個人情報を取得する場合があります。取得した情報は、お問い合わせへの返信以外の目的で利用いたしません。
            </p>

            <h2>アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を利用しています。
              Googleアナリティクスはトラフィックデータの収集のためにCookieを使用していますが、
              個人を特定する情報は含まれません。Cookieを無効にすることで収集を拒否できます。
            </p>

            <h2>アフィリエイトプログラムについて</h2>
            <p>
              当サイトは、freee・マネーフォワード等のアフィリエイトプログラムに参加しており、
              紹介リンクから商品・サービスをご利用いただいた場合に成果報酬を受け取ることがあります。
              紹介する商品・サービスは編集部の判断により選定しています。
            </p>

            <h2>免責事項</h2>
            <p>
              当サイトの情報は一般的な解説であり、税務上の最終判断を保証するものではありません。
              実際の確定申告にあたっては、税理士または税務署にご相談ください。
            </p>

            <h2>改定について</h2>
            <p>
              本ポリシーの内容は、必要に応じて改定することがあります。改定後の内容は本ページに掲示します。
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
