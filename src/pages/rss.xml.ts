import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../config/site';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime());

  return rss({
    title: SITE_CONFIG.rss.title,
    description: SITE_CONFIG.rss.description,
    site: context.site || SITE_CONFIG.baseUrl,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `/blog/${post.slug}/`,
      author: SITE_CONFIG.social.email,
      categories: post.data.tags || [],
    })),
    customData: SITE_CONFIG.rss.customData,
  });
}
