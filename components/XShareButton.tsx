type Props = {
  /** Article title (will be combined with site name in the tweet text) */
  title: string;
  /** Absolute URL to the page being shared */
  url: string;
  /** Site name appended to the tweet text. Defaults to project shortName. */
  siteName?: string;
};

export default function XShareButton({
  title,
  url,
  siteName = '趣味副業の確定申告ガイド',
}: Props) {
  const text = `${title}｜${siteName}`;
  const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={intent}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="この記事をXでシェアする"
      className="inline-flex items-center gap-2 rounded-full border border-ink-900 bg-ink-900 px-4 py-2 text-xs font-bold text-cream-50 transition hover:bg-ink-700 focus:outline-none focus:ring-2 focus:ring-ink-700/40"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-3.5 w-3.5"
        aria-hidden
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      Xでシェア
    </a>
  );
}
