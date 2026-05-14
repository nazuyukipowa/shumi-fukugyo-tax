import Link from 'next/link';
import { categories, siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-cream-200 bg-cream-100">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-brand-800">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.shortName}のXアカウント`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-900 bg-ink-900 text-cream-50 transition hover:bg-ink-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <span className="text-xs text-ink-500">{siteConfig.twitter}</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-ink-900">カテゴリ</p>
            <ul className="mt-3 space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={c.href}
                    className="text-ink-700 hover:text-brand-700"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-ink-900">サイト情報</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/articles" className="text-ink-700 hover:text-brand-700">
                  記事一覧
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink-700 hover:text-brand-700">
                  運営者について
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-700 hover:text-brand-700">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-ink-700 hover:text-brand-700">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-ink-700 hover:text-brand-700">
                  免責事項
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-200 pt-6 text-xs text-ink-500">
          <p>
            本サイトの情報は一般的な解説であり、個別の税務判断を保証するものではありません。
            最終的なご判断は税理士・税務署にご相談ください。
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
