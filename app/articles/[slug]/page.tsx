import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import AffiliateSection from '@/components/AffiliateSection';
import { articleMdxComponents } from '@/lib/mdx-components';
import { siteConfig } from '@/lib/site';
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from '@/lib/articles';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteConfig.url.replace(/\/$/, '')}${article.href}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.href },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [{ url: article.hero, alt: article.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.hero],
    },
  };
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
};

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const url = `${siteConfig.url.replace(/\/$/, '')}${article.href}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.hero,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.description}
        breadcrumbs={[
          { label: 'ホーム', href: '/' },
          { label: '記事一覧', href: '/articles' },
          { label: article.title },
        ]}
      />

      <article className="py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-widest text-ink-500">
              <time dateTime={article.publishedAt}>
                公開: {formatDate(article.publishedAt)}
              </time>
              {article.updatedAt && article.updatedAt !== article.publishedAt && (
                <>
                  <span className="mx-2 text-cream-200">／</span>
                  <time dateTime={article.updatedAt}>
                    最終更新: {formatDate(article.updatedAt)}
                  </time>
                </>
              )}
              <span className="mx-2 text-cream-200">／</span>
              読了 約 {article.readingTime} 分
            </p>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl border border-cream-200">
              <Image
                src={article.hero}
                alt={article.heroAlt}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <p className="mt-6 text-xs text-ink-500">
              執筆: <span className="font-bold text-ink-700">{article.author}</span>
            </p>
          </div>

          <div className="mt-12">
            <Prose>
              <MDXRemote
                source={article.content}
                components={articleMdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [
                        rehypeAutolinkHeadings,
                        {
                          behavior: 'wrap',
                          properties: { className: ['heading-anchor'] },
                        },
                      ],
                    ],
                  },
                }}
              />
            </Prose>
          </div>

          {(article.tags ?? []).length > 0 && (
            <div className="mx-auto mt-12 max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-ink-500">
                Tags
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {(article.tags ?? []).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-xs text-ink-700"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <AffiliateSection compact />

      {related.length > 0 && (
        <section className="border-t border-cream-200 py-16 sm:py-20">
          <div className="container-x">
            <span className="eyebrow">Related</span>
            <h2 className="heading-2 mt-4">関連する記事</h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link href={a.href} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-cream-200">
                      <Image
                        src={a.hero}
                        alt={a.heroAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-4 text-[11px] tracking-widest text-ink-500">
                      <span className="font-bold text-brand-700">
                        {a.category}
                      </span>
                      <span className="mx-2 text-cream-200">／</span>
                      <time dateTime={a.publishedAt}>
                        {formatDate(a.publishedAt)}
                      </time>
                    </p>
                    <h3 className="font-display mt-2 text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">
                      {a.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
