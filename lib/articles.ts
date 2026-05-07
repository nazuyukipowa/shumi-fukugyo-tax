import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type ArticleFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  categorySlug: string;
  tags?: string[];
  hero: string;
  heroAlt: string;
  readingTime: number;
  author?: string;
  draft?: boolean;
};

export type Article = ArticleFrontmatter & {
  slug: string;
  href: string;
  content: string;
};

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');
const DEFAULT_AUTHOR = '副業タックス編集部';

function readArticleFile(filename: string): Article | null {
  if (!filename.endsWith('.mdx')) return null;

  const slug = filename.replace(/\.mdx$/, '');
  const fullPath = path.join(ARTICLES_DIR, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  const fm = data as ArticleFrontmatter;

  if (fm.draft) return null;

  return {
    slug,
    href: `/articles/${slug}`,
    title: fm.title,
    description: fm.description,
    publishedAt: fm.publishedAt,
    updatedAt: fm.updatedAt ?? fm.publishedAt,
    category: fm.category,
    categorySlug: fm.categorySlug,
    tags: fm.tags ?? [],
    hero: fm.hero,
    heroAlt: fm.heroAlt,
    readingTime: fm.readingTime,
    author: fm.author ?? DEFAULT_AUTHOR,
    content,
  };
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  return fs
    .readdirSync(ARTICLES_DIR)
    .map(readArticleFile)
    .filter((a): a is Article => a !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}

export function getArticleBySlug(slug: string): Article | null {
  const filename = `${slug}.mdx`;
  const fullPath = path.join(ARTICLES_DIR, filename);
  if (!fs.existsSync(fullPath)) return null;
  return readArticleFile(filename);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.categorySlug === categorySlug);
}

export function getRelatedArticles(
  current: Article,
  limit = 3,
): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== current.slug)
    .filter(
      (a) =>
        a.categorySlug === current.categorySlug ||
        (current.tags ?? []).some((t) => (a.tags ?? []).includes(t)),
    )
    .slice(0, limit);
}
