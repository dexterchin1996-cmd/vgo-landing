export const dynamic = "force-static";

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vgo-website.vercel.app';
  const now = new Date();
  const routes: { url: string; priority: number; freq: 'weekly' | 'monthly' | 'yearly' }[] = [
    { url: '/', priority: 1.0, freq: 'weekly' },
    { url: '/about', priority: 0.8, freq: 'monthly' },
    { url: '/contact', priority: 0.9, freq: 'monthly' },
    { url: '/faq', priority: 0.7, freq: 'monthly' },
    { url: '/coverage', priority: 0.7, freq: 'monthly' },
    { url: '/services/repair', priority: 0.9, freq: 'monthly' },
    { url: '/services/clean', priority: 0.9, freq: 'monthly' },
    { url: '/services/massage', priority: 0.8, freq: 'monthly' },
    { url: '/services/errand', priority: 0.8, freq: 'monthly' },
    { url: '/services/market', priority: 0.7, freq: 'monthly' },
    { url: '/services/jobs', priority: 0.7, freq: 'monthly' },
    { url: '/partner', priority: 0.8, freq: 'monthly' },
    { url: '/merchant', priority: 0.9, freq: 'monthly' },
    { url: '/technician', priority: 0.9, freq: 'monthly' },
    { url: '/offers', priority: 0.7, freq: 'weekly' },
    { url: '/how-it-works/customer', priority: 0.7, freq: 'monthly' },
    { url: '/how-it-works/merchant', priority: 0.7, freq: 'monthly' },
    { url: '/how-it-works/technician', priority: 0.7, freq: 'monthly' },
    { url: '/privacy', priority: 0.5, freq: 'yearly' },
    { url: '/terms', priority: 0.5, freq: 'yearly' },
    { url: '/user-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/merchant-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/pro-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/agent-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/ip-copyright', priority: 0.3, freq: 'yearly' },
  ];
  return routes.map((r) => ({ url: base + r.url, lastModified: now, changeFrequency: r.freq, priority: r.priority }));
}
