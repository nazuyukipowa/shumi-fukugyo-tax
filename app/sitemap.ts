import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllArticles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();

  const staticPaths: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/articles', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/kakutei-shinkoku', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/hobby-guide', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/hobby-guide/cooking', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hobby-guide/music', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hobby-guide/diy', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/kaikei-soft', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/kaigyo-aoiro', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${base}${a.href}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
