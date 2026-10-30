import { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site-config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.urls.site || 'https://easymedlearning.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
