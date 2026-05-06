import { statItems } from '@/lib/site';

export default function StatsBand() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden border-y border-cream-200 bg-cream-100 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-paper-noise opacity-50"
        aria-hidden
      />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">Numbers</span>
          <h2 id="stats-heading" className="heading-2 mt-5">
            数字で見る<span className="font-serif italic text-brand-700">副業確定申告</span>
          </h2>
          <p className="lede mt-4">
            会社員の副業確定申告でおさえておきたい基本の数字を、4つに整理しました。
          </p>
        </div>

        <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream-200 bg-cream-200 lg:grid-cols-4">
          {statItems.map((s) => (
            <div
              key={s.label}
              className="flex flex-col bg-white p-7 sm:p-8"
            >
              <dt className="flex items-baseline gap-1">
                <span className="font-serif text-5xl font-bold leading-none text-brand-800 sm:text-6xl">
                  {s.number}
                </span>
                {s.unit && (
                  <span className="font-serif text-xl font-bold text-brand-700 sm:text-2xl">
                    {s.unit}
                  </span>
                )}
              </dt>
              <dd className="mt-5 flex flex-1 flex-col">
                <span className="text-sm leading-relaxed text-ink-700">{s.label}</span>
                <span className="mt-3 text-[11px] tracking-wider text-ink-500">
                  出典：{s.source}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
