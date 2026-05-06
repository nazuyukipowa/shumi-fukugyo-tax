import { affiliateLinks } from '@/lib/site';

type Props = {
  heading?: string;
  lead?: string;
  compact?: boolean;
};

export default function AffiliateSection({
  heading = 'おすすめ会計ソフト',
  lead = '副業会社員の確定申告は、自動連携できる会計ソフトに任せるのが時短への近道。まずは無料プランで触ってみるのがおすすめです。',
  compact = false,
}: Props) {
  const items = [affiliateLinks.freee, affiliateLinks.moneyforward];

  return (
    <section
      id="affiliate"
      aria-labelledby="affiliate-heading"
      className={compact ? 'py-14' : 'py-20 sm:py-24'}
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">PR</span>
          <h2 id="affiliate-heading" className="heading-2 mt-5">
            {heading}
          </h2>
          <p className="lede mt-4">{lead}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm"
            >
              <div className="border-b border-cream-200 bg-cream-50 px-7 py-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700">
                  会計ソフト
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-ink-900">
                  {item.name}
                </h3>
                <p className="mt-1 font-serif text-sm text-ink-700">
                  {item.tagline}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-7">
                <ul className="space-y-2.5 text-sm text-ink-700">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener sponsored"
                  className="btn-accent mt-auto w-full"
                >
                  公式サイトで詳しく見る
                </a>
                <p className="text-center text-xs text-ink-500">
                  ※ 当リンクはアフィリエイト広告です
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
