type Reference = {
  title: string;
  publisher: string;
  href: string;
};

type Props = {
  items: Reference[];
};

export default function References({ items }: Props) {
  return (
    <aside
      aria-labelledby="refs-heading"
      className="mx-auto mt-16 max-w-3xl rounded-3xl border border-cream-200 bg-cream-50 p-7 sm:p-8"
    >
      <p
        id="refs-heading"
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700"
      >
        References ／ 参考資料
      </p>
      <p className="mt-3 text-xs leading-relaxed text-ink-500">
        本記事は、以下の公的資料を参考に作成しています。最新の情報や個別ケースについては、各リンク先または管轄税務署でご確認ください。
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((r) => (
          <li key={r.href} className="flex gap-3 text-sm">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-600"
            />
            <div className="min-w-0 flex-1">
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-800 underline-offset-2 hover:underline"
              >
                {r.title}
              </a>
              <p className="mt-0.5 text-xs text-ink-500">
                {r.publisher}
                <svg
                  className="ml-1 inline h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
