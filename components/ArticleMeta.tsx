type Props = {
  updated: string; // ISO
  published?: string;
};

const fmt = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
};

export default function ArticleMeta({ updated, published }: Props) {
  return (
    <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500">
      <span className="inline-flex items-center gap-1.5">
        <svg
          className="h-3.5 w-3.5 text-brand-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
        公開前ファクトチェック済み
      </span>
      {published && (
        <span>
          公開日：<time dateTime={published}>{fmt(published)}</time>
        </span>
      )}
      <span>
        最終更新：<time dateTime={updated}>{fmt(updated)}</time>
      </span>
      <span className="ml-auto text-ink-500">
        執筆：<strong className="font-bold text-ink-700">副業タックス編集部</strong>
      </span>
    </div>
  );
}
