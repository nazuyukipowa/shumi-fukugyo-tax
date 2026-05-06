import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-gradient-to-br from-brand-700 to-accent-500 py-24 text-white">
      <div className="container-x text-center">
        <p className="text-sm font-semibold uppercase tracking-wider opacity-80">404</p>
        <h1 className="heading-1 mt-3 text-white">ページが見つかりませんでした</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          お探しのページは移動または削除された可能性があります。トップページから目的の情報をお探しください。
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary bg-white text-brand-700 hover:bg-brand-50">
            トップページへ戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
