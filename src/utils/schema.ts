import { SITE_CONFIG } from '../config/site';

interface Author {
  name: string;
  url?: string;
}

interface Organization {
  name: string;
  url: string;
  logo: string;
}

interface SchemaOptions {
  type: 'BlogPosting' | 'WebSite' | 'WebPage' | 'AboutPage' | 'ContactPage';
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: Author;
  organization?: Organization;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateSchemaOrg(options: SchemaOptions): object {
  const {
    type,
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author,
    organization = SITE_CONFIG.organization
  } = options;

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    description,
    url,
    inLanguage: SITE_CONFIG.language,
    publisher: {
      '@type': 'Organization',
      name: organization.name,
      url: organization.url,
      logo: {
        '@type': 'ImageObject',
        url: organization.logo
      }
    }
  };

  if (type === 'BlogPosting') {
    return {
      ...baseSchema,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      image: image || SITE_CONFIG.defaultImage,
      datePublished,
      dateModified: dateModified || datePublished,
      author: author ? {
        '@type': 'Person',
        name: author.name,
        url: author.url
      } : {
        '@type': 'Organization',
        name: organization.name,
        url: organization.url
      }
    };
  }

  if (type === 'WebSite') {
    return {
      ...baseSchema,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  return baseSchema;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.name
      }
    }))
  };
}

export function generateOrganizationSchema(): object {
  const { organization } = SITE_CONFIG;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${organization.url}#organization`,
    name: organization.name,
    url: organization.url,
    logo: {
      '@type': 'ImageObject',
      url: organization.logo
    },
    description: organization.description,
    foundingDate: organization.foundingDate,
    founder: organization.founders.map(founder => ({
      '@type': 'Person',
      name: founder.name,
      url: founder.url
    })),
    sameAs: [
      SITE_CONFIG.social.twitter && `https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.linkedin
    ].filter(Boolean)
  };
}

export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.baseUrl}#website`,
    name: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.baseUrl,
    inLanguage: SITE_CONFIG.language,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.organization.url}#organization`,
      name: SITE_CONFIG.organization.name,
      url: SITE_CONFIG.organization.url
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateArticleListSchema(articles: any[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: article.data.title,
        description: article.data.description,
        url: `${SITE_CONFIG.baseUrl}/blog/${article.slug}`,
        datePublished: article.data.publishedDate,
        dateModified: article.data.modifiedDate || article.data.publishedDate,
        author: {
          '@type': 'Person',
          name: article.data.author.name,
          url: article.data.author.url
        },
        image: article.data.image || SITE_CONFIG.defaultImage,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.organization.name,
          url: SITE_CONFIG.organization.url,
          logo: {
            '@type': 'ImageObject',
            url: SITE_CONFIG.organization.logo
          }
        }
      }
    }))
  };
}
