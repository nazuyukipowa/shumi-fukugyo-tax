import Image from 'next/image';
import Link from 'next/link';
import { hobbies } from '@/lib/site';

export default function HobbyGrid() {
  return (
    <section
      aria-labelledby="hobby-heading"
      className="bg-cream-100 py-20 sm:py-24"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">趣味別ガイド</span>
          <h2 id="hobby-heading" className="heading-2 mt-5">
            あなたの<span className="font-serif italic text-brand-700">「好き」</span>
            、ちゃんと経費にできる？
          </h2>
          <p className="lede mt-4">
            「これって経費になる？」の判断は、趣味によって全然ちがいます。代表的な3ジャンルで具体例を解説。
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-3">
          {hobbies.map((h) => (
            <Link
              key={h.slug}
              href={h.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={h.image}
                  alt={h.imageAlt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-800 backdrop-blur">
                  <span>{h.emoji}</span>
                  {h.title}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="heading-3 group-hover:text-brand-700">
                  {h.title}の経費・節税
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                  {h.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-700">
                  ガイドを読む
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
