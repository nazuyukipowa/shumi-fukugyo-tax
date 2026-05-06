type Props = {
  quote: string;
  attribution?: string;
};

export default function PullQuote({ quote, attribution }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-paper-noise opacity-40"
        aria-hidden
      />
      <div className="container-x">
        <figure className="mx-auto max-w-4xl text-center">
          <span
            className="font-serif text-7xl leading-none text-brand-300 sm:text-8xl"
            aria-hidden
          >
            &ldquo;
          </span>
          <blockquote className="mt-2 font-serif text-xl font-bold leading-[1.85] text-ink-900 sm:text-3xl sm:leading-[1.7]">
            {quote}
          </blockquote>
          {attribution && (
            <figcaption className="mt-7 text-xs tracking-[0.2em] text-ink-500">
              ── {attribution}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
