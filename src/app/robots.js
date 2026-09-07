export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/login/'],
    },
    sitemap: 'https://neelagiriheritage.com/sitemap.xml',
  };
}
