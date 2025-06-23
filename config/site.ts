export const SITE_CONFIG = {
  // Site Information
  title: 'BlogSaya',
  description: 'Blog modern tentang web development, teknologi, dan berbagai tips menarik. Dibuat dengan Astro dan Tailwind CSS.',
  author: 'BlogSaya Team',
  
  // URLs
  url: 'https://hilaldevtheme.pages.dev', // Base URL dari astro.config.mjs
  baseUrl: 'https://hilaldevtheme.pages.dev',
  
  // Social Media
  social: {
    twitter: '@blogsaya',
    github: 'https://github.com/blogsaya',
    linkedin: 'https://linkedin.com/company/blogsaya',
    email: 'hello@blogsaya.com'
  },
  
  // SEO
  keywords: [
    'web development',
    'programming',
    'javascript',
    'typescript',
    'react',
    'astro',
    'tailwind css',
    'tutorial',
    'blog teknologi',
    'tips programming'
  ],
  
  // Organization Info for Schema.org
  organization: {
    name: 'BlogSaya',
    url: 'https://hilaldevtheme.pages.dev',
    logo: 'https://hilaldevtheme.pages.dev/images/logo.png',
    description: 'Platform blog untuk berbagi pengetahuan tentang web development dan teknologi.',
    foundingDate: '2024-01-01',
    founders: [
      {
        name: 'Admin Blog',
        url: 'https://hilaldevtheme.pages.dev/author/admin'
      }
    ]
  },
  
  // Default Images
  defaultImage: 'https://hilaldevtheme.pages.dev/images/og-default.jpg',
  favicon: '/favicon.svg',
  
  // Language and Locale
  language: 'id',
  locale: 'id_ID',
  
  // Analytics (optional)
  googleAnalytics: '', // GA4 Measurement ID
  googleSiteVerification: '', // Google Search Console verification
  
  // RSS
  rss: {
    title: 'BlogSaya RSS Feed',
    description: 'Update terbaru dari BlogSaya',
    customData: `<language>id-id</language>`
  }
} as const;

export type SiteConfig = typeof SITE_CONFIG;
