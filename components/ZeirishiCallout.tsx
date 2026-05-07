type Props = {
  heading?: string;
  body?: string;
  cta?: string;
};

export default function ZeirishiCallout({
  heading = '個別の税務相談をご希望の方へ',
  body = '当サイトは一般的な解説を目的としたメディアのため、個別の税務判断にはお答えできません。確定申告や顧問契約などで税理士をお探しなら、税理士紹介サービス「税理士ドットコム」をご活用ください。希望条件を伝えると、無料で相性の良い税理士を紹介してもらえます。',
  cta = '税理士ドットコム 公式サイトを見る',
}: Props) {
  const href = process.env.NEXT_PUBLIC_ZEIRISHI_AFFILIATE_URL;
  if (!href) return null;

  return (
    <aside className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-cream-50 p-6 sm:p-8">
      <span className="eyebrow">PR</span>
      <h3 className="font-display mt-4 text-lg font-bold text-ink-900 sm:text-xl">
        {heading}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
        {body}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener sponsored"
        className="btn-accent mt-6 w-full sm:w-auto"
      >
        {cta}
      </a>
      <p className="mt-3 text-xs text-ink-500">
        ※ 当リンクはアフィリエイト広告です
      </p>
    </aside>
  );
}
