import type { WithContext } from 'schema-dts';

interface SchemaOrgProps {
  type: 'WebSite' | 'WebPage' | 'Article' | 'BlogPosting' | 'Organization' | 'Person';
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  organization?: {
    name: string;
    url: string;
    logo?: string;
  };
}

export function generateSchemaOrg(props: SchemaOrgProps): WithContext<any> {
  const {
    type,
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author,
    organization,
  } = props;

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url,
    ...(image && { image }),
  };

  switch (type) {
    case 'WebSite':
      return {
        ...baseSchema,
        publisher: organization && {
          '@type': 'Organization',
          name: organization.name,
          url: organization.url,
          logo: organization.logo && {
            '@type': 'ImageObject',
            url: organization.logo,
          },
        },
      };

    case 'WebPage':
      return {
        ...baseSchema,
        isPartOf: {
          '@type': 'WebSite',
          name: organization?.name || 'Website',
          url: organization?.url || url.split('/')[0],
        },
      };

    case 'Article':
    case 'BlogPosting':
      return {
        ...baseSchema,
        headline: title,
        datePublished,
        dateModified: dateModified || datePublished,
        author: author && {
          '@type': 'Person',
          name: author.name,
          url: author.url,
        },
        publisher: organization && {
          '@type': 'Organization',
          name: organization.name,
          url: organization.url,
          logo: organization.logo && {
            '@type': 'ImageObject',
            url: organization.logo,
          },
        },
      };

    case 'Organization':
      return {
        ...baseSchema,
        logo: organization?.logo && {
          '@type': 'ImageObject',
          url: organization.logo,
        },
      };

    case 'Person':
      return {
        ...baseSchema,
        ...(author?.url && { url: author.url }),
      };

    default:
      return baseSchema;
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  organization: {
    name: string;
    url: string;
    logo?: string;
  };
}): WithContext<any> {
  return generateSchemaOrg({
    type: 'BlogPosting',
    ...props,
  });
}
