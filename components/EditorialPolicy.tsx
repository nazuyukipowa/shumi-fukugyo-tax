import Link from 'next/link';
import { editorialPolicies } from '@/lib/site';

export default function EditorialPolicy() {
  return (
    <section
      aria-labelledby="policy-heading"
      className="py-20 sm:py-24"
    >
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">Editorial Policy</span>
            <h2 id="policy-heading" className="heading-2 mt-5">
              編集方針
            </h2>
            <p className="lede mt-5">
              副業タックス編集部は、副業会社員が安心して情報を取れる場をつくることを目的に運営しています。
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              当サイトはメディアとしての役割を担うため、執筆者個人の見解ではなく、
              <strong className="font-bold text-ink-700">公的資料を基にした検証可能な情報</strong>
              の発信を方針としています。
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              運営者情報を見る
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <ol className="grid gap-5 lg:col-span-8 sm:grid-cols-2">
            {editorialPolicies.map((p, i) => (
              <li
                key={p.title}
                className="relative rounded-3xl border border-cream-200 bg-white p-6 shadow-sm sm:p-7"
              >
                <span
                  className="font-serif text-3xl font-bold text-cream-200"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-3 text-base font-bold text-ink-900 sm:text-lg">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 p-5 text-xs text-ink-500 sm:gap-5 sm:text-sm">
          <span className="inline-flex items-center gap-2 font-bold text-brand-700">
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            公開前ファクトチェック済み
          </span>
          <span className="hidden text-cream-200 sm:inline">／</span>
          <span>各記事に最終更新日を表示</span>
          <span className="hidden text-cream-200 sm:inline">／</span>
          <span>公的資料へのリンク掲載</span>
        </div>
      </div>
    </section>
  );
}
