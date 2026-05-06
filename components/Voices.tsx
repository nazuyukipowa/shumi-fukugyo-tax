import { voices } from '@/lib/site';

export default function Voices() {
  return (
    <section
      aria-labelledby="voices-heading"
      className="bg-cream-100 py-20 sm:py-24"
    >
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">Reader Survey</span>
            <h2 id="voices-heading" className="heading-2 mt-5">
              副業会社員に
              <br className="hidden sm:block" />
              <span className="font-serif italic text-brand-700">読まれて</span>います
            </h2>
            <p className="lede mt-5">
              実際にこのガイドを読んで確定申告に取り組まれた読者の方からの感想です。
            </p>
            <p className="mt-6 text-xs text-ink-500">
              ※ 編集部に届いたフィードバックより一部抜粋。属性は掲載時点の自己申告に基づき、個人を特定できる情報は表示していません。
            </p>
          </div>

          <ul className="grid gap-5 lg:col-span-8">
            {voices.map((v, i) => (
              <li
                key={i}
                className="relative rounded-3xl border border-cream-200 bg-white p-7 shadow-sm sm:p-8"
              >
                <span
                  className="absolute -top-3 left-7 font-serif text-7xl leading-none text-brand-200 sm:text-8xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="font-serif text-base leading-[1.95] text-ink-700 sm:text-lg">
                  {v.text}
                </blockquote>
                <figcaption className="mt-6 flex flex-wrap items-center gap-3 border-t border-cream-200 pt-5 text-xs text-ink-500 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 font-bold text-ink-900">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                    {v.attribute}
                  </span>
                  <span className="ml-auto rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700">
                    {v.hobby}
                  </span>
                </figcaption>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
