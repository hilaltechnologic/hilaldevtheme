// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hilaldevtheme.pages.dev', // Ganti dengan domain Anda
  integrations: [
    tailwind({
      applyBaseStyles: false, // Kita akan menggunakan custom base styles
    }),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('draft'), // Exclude draft pages
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'id',
        locales: {
          id: 'id-ID'
        }
      }
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  image: {
    // Konfigurasi optimasi gambar dengan Sharp
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689 // ~16K x 16K
      }
    },
    // Format gambar yang didukung
    formats: ['avif', 'webp', 'jpeg'],
    // Kualitas default
    quality: 80
  }
});
