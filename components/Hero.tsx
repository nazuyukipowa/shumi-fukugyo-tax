import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-paper-noise opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 mix-blend-multiply"
        aria-hidden
      >
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-100 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-100 blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24 lg:gap-14">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-ink-500">
            <span className="font-bold text-brand-700">VOL. 01</span>
            <span className="h-px w-8 bg-cream-200" />
            <span>2026 SPRING ISSUE</span>
          </div>

          <h1 className="font-display mt-7 text-[2.4rem] font-black leading-[1.15] tracking-tight text-ink-900 sm:text-[3.2rem] sm:leading-[1.1] lg:text-[3.8rem]">
            趣味で稼いだら、
            <br />
            <span className="font-serif italic font-bold text-brand-700">確定申告</span>
            、<br className="sm:hidden" />
            <span className="marker">どうする？</span>
          </h1>

          <p className="lede mt-7 max-w-xl">
            料理・音楽・DIYなどの趣味を副業にした会社員のための、
            確定申告・経費・節税・会計ソフトの総合ガイド。
            <br className="hidden sm:block" />
            やさしい言葉と実例で、最初の一歩から青色申告までサポートします。
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <Link href="#categories" className="btn-primary">
              カテゴリから読む
            </Link>
            <Link href="#articles" className="btn-outline">
              新着記事を見る
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-cream-200 pt-6 text-xs text-ink-500 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-cream-50 px-3 py-1.5 font-bold text-brand-800">
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              公開前ファクトチェック
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-3 py-1.5 text-ink-700">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              公的資料を参照
            </span>
            <Link href="#policy" className="ml-auto font-bold text-brand-700 hover:text-brand-800">
              編集方針 →
            </Link>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-cream-200">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop"
              alt="ノートと電卓を並べたデスク"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream-50">
              <p className="text-[10px] tracking-[0.25em] opacity-80">FEATURE</p>
              <p className="font-display mt-2 text-base font-bold leading-tight sm:text-lg">
                副業20万円ルールの<br />本当の意味
              </p>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-6 hidden rotate-[-3deg] rounded-2xl border border-cream-200 bg-white px-5 py-4 shadow-lg sm:block">
            <p className="font-serif text-xs text-ink-500">読まれている記事</p>
            <p className="font-display mt-1 text-sm font-bold text-brand-800">
              freee × MF<br />比較アンケート
            </p>
          </div>
          <div className="absolute -right-3 -top-3 hidden rotate-[5deg] rounded-full bg-accent-500 px-4 py-2 text-[11px] font-bold tracking-wider text-white shadow-md sm:block">
            初心者 OK
          </div>
        </div>
      </div>
    </section>
  );
}
