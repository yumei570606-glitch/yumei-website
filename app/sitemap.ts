import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/content';

export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yumeiot.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getPosts().map((p) => ({
    url: `${SITE_URL}/posts/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/posts`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ...posts,
  ];
}
