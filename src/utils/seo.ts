import { SITE_CONFIG } from '../config/site';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'blog';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

interface OpenGraphData {
  title: string;
  description: string;
  type: string;
  url: string;
  image: string;
  imageAlt: string;
  siteName: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

interface TwitterData {
  card: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  site?: string;
  creator?: string;
}

interface SEOTags {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  keywords: string;
  publisher: string;
  author?: string;
  openGraph: OpenGraphData;
  twitter: TwitterData;
}

export function generateSEOTags(props: SEOProps, currentUrl?: string): SEOTags {
  const {
    title,
    description,
    canonical,
    image,
    imageAlt,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    tags = [],
    keywords = [],
    noindex = false,
    nofollow = false
  } = props;

  // Generate full title
  const fullTitle = title === 'Beranda' 
    ? `${SITE_CONFIG.title} - ${SITE_CONFIG.description}` 
    : `${title} | ${SITE_CONFIG.title}`;
  
  // Generate canonical URL automatically
  const canonicalUrl = canonical || currentUrl || SITE_CONFIG.baseUrl;
  
  // Generate robots directive
  const robots = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
  
  // Generate keywords automatically
  const allKeywords = [
    ...SITE_CONFIG.keywords,
    ...keywords,
    ...tags
  ];
  const keywordsString = [...new Set(allKeywords)].join(', ');
  
  // Generate image URL
  const fullImageUrl = image 
    ? (image.startsWith('http') ? image : `${SITE_CONFIG.baseUrl}${image}`)
    : SITE_CONFIG.defaultImage;
  
  return {
    title: fullTitle,
    description,
    canonical: canonicalUrl,
    robots,
    keywords: keywordsString,
    publisher: SITE_CONFIG.organization.name,
    author: author || SITE_CONFIG.author,
    openGraph: {
      title: fullTitle,
      description,
      type,
      url: canonicalUrl,
      image: fullImageUrl,
      imageAlt: imageAlt || title,
      siteName: SITE_CONFIG.title,
      publishedTime,
      modifiedTime,
      author,
      tags
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: fullImageUrl,
      imageAlt: imageAlt || title,
      site: SITE_CONFIG.social.twitter,
      creator: SITE_CONFIG.social.twitter
    }
  };
}

// Helper function to generate page-specific SEO
export function generatePageSEO(
  title: string,
  description: string,
  path: string,
  options: Partial<SEOProps> = {}
): SEOProps {
  return {
    title,
    description,
    canonical: `${SITE_CONFIG.baseUrl}${path}`,
    type: 'website',
    ...options
  };
}

// Helper function to generate article SEO
export function generateArticleSEO(
  title: string,
  description: string,
  slug: string,
  options: Partial<SEOProps> = {}
): SEOProps {
  // Clean slug - remove leading/trailing slashes and ensure it's just the slug
  const cleanSlug = slug.replace(/^\/+|\/+$/g, '').replace(/^blog\//, '');
  
  return {
    title,
    description,
    canonical: `${SITE_CONFIG.baseUrl}/blog/${cleanSlug}`,
    type: 'article',
    ...options
  };
}

// Generate keywords from tags
export function generateKeywords(tags?: string[]): string {
  if (!tags || tags.length === 0) return '';
  return tags.join(', ');
}

// Get current URL helper
export function getCurrentUrl(astroUrl: URL): string {
  return astroUrl.href;
}
