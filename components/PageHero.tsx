import Link from 'next/link';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-cream-200 bg-cream-100">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden
      >
        <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-brand-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-100 blur-3xl" />
      </div>

      <div className="container-x py-14 sm:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="パンくずリスト" className="mb-5 text-xs text-ink-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((b, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-brand-700">
                      {b.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink-700">
                      {b.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span aria-hidden className="text-ink-500">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="heading-1 mt-5">{title}</h1>
        {description && (
          <p className="lede mt-5 max-w-3xl">{description}</p>
        )}
      </div>
    </section>
  );
}
