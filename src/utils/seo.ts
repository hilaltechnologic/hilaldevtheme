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
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateSEOTags(props: SEOProps) {
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
    tags,
    noindex = false,
    nofollow = false
  } = props;

  const siteUrl = 'https://example.com'; // Ganti dengan domain Anda
  const siteName = 'Blog Saya'; // Ganti dengan nama site Anda
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/og-default.jpg`;

  return {
    title: `${title} | ${siteName}`,
    description,
    canonical: canonical || '',
    robots: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`,
    openGraph: {
      title,
      description,
      type,
      url: canonical || '',
      image: fullImageUrl,
      imageAlt: imageAlt || title,
      siteName,
      publishedTime,
      modifiedTime,
      author,
      tags
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: fullImageUrl,
      imageAlt: imageAlt || title
    }
  };
}

export function generateKeywords(tags?: string[]): string {
  if (!tags || tags.length === 0) return '';
  return tags.join(', ');
}
