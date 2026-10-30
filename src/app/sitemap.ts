import { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site-config';
import { getAllSeminars } from '@/content/seminars';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.urls.site || 'https://easymedlearning.com';
  const currentDate = new Date().toISOString();
  const seminars = getAllSeminars();

  const seminarUrls: MetadataRoute.Sitemap = seminars.map((seminar) => ({
    url: `${baseUrl}/seminars/${seminar.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seminars`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...seminarUrls,
  ];
}
