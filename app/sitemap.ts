import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();

  const paths: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/kakutei-shinkoku', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/hobby-guide', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/hobby-guide/cooking', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hobby-guide/music', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hobby-guide/diy', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/kaikei-soft', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/kaigyo-aoiro', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return paths.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
