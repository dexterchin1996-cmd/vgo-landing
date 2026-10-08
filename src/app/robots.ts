import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://vgo-landing.vercel.app';
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/verify-success', '/verify-failed', '/api/'] }],
    sitemap: base + '/sitemap.xml',
  };
}
