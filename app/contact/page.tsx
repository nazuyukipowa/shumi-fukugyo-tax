import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '「趣味副業の確定申告ガイド」へのお問い合わせフォーム。記事内容のご指摘、取材・広告掲載のご相談はこちらから。',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="サイト情報"
        title="お問い合わせ"
        description="記事内容のご指摘、取材・広告掲載のご相談、その他ご連絡はこちらのフォームよりお送りください。"
        breadcrumbs={[
          { label: 'トップ', href: '/' },
          { label: 'お問い合わせ' },
        ]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 rounded-2xl border border-cream-200 bg-cream-50 p-6 text-sm leading-relaxed text-ink-700">
              <p className="font-bold text-ink-900">
                ご利用前にお読みください
              </p>
              <ul className="mt-3 space-y-2 text-ink-500">
                <li>
                  ・個別の税務相談には<strong className="text-ink-700">対応いたしかねます</strong>。
                  税理士または所轄の税務署にご相談ください。
                </li>
                <li>
                  ・お返事までに数日〜1週間ほどお時間をいただく場合があります。
                </li>
                <li>
                  ・営業目的のご連絡、迷惑メールにはお返事しておりません。
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
