import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';

export const metadata: Metadata = {
  title: '免責事項',
  description:
    '「趣味副業の確定申告ガイド」の免責事項。掲載情報の正確性、税務判断の最終責任について。',
  alternates: { canonical: '/disclaimer' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="サイト情報"
        title="免責事項"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: '免責事項' },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <Prose>
            <h2>掲載情報について</h2>
            <p>
              当サイトに掲載されている情報は、執筆時点での法令・公式情報に基づいて作成していますが、
              最新の改正や個別事案に対応しきれない場合があります。情報の利用にあたっては、
              必ずご自身の責任でご判断ください。
            </p>

            <h2>税務判断について</h2>
            <p>
              当サイトの内容は税理士による個別アドバイスではありません。
              実際の確定申告・節税対策については、必ず税理士または管轄の税務署にご相談ください。
            </p>

            <h2>外部リンクについて</h2>
            <p>
              当サイトから外部サイトへリンクする場合がありますが、リンク先の内容について当サイトは責任を負いません。
            </p>

            <h2>損害について</h2>
            <p>
              当サイトの利用により生じたいかなる損害についても、当サイトは一切の責任を負わないものとします。
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
