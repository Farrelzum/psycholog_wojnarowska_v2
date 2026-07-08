import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'ClaudeBot',
          'PerplexityBot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://psycholog-wojnarowska.pl/sitemap.xml',
  };
}