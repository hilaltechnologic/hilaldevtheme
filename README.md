# 🚀 Tema Blog Modern dengan Astro

Tema blog modern dan responsif yang dibangun dengan Astro, Tailwind CSS, dan TypeScript. Dilengkapi dengan sistem iklan terintegrasi, SEO optimal, dan fitur-fitur lengkap untuk blog profesional.

## ✨ Fitur Utama

### 🎨 Design & UI
- **Responsive Design**: Tampilan sempurna di semua perangkat
- **Dark Mode**: Mode gelap dengan transisi smooth
- **Modern UI**: Design clean dengan Tailwind CSS
- **Animasi**: Smooth animations dan transitions
- **Typography**: Tipografi yang mudah dibaca

### 📝 Content Management
- **MDX Support**: Menulis konten dengan Markdown + JSX
- **Content Collections**: Organisasi konten yang terstruktur
- **Tag System**: Sistem kategori dan tag
- **Featured Posts**: Artikel unggulan
- **Reading Time**: Estimasi waktu baca otomatis

### 🔍 SEO & Performance
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Sitemap**: Sitemap otomatis untuk search engines
- **Robots.txt**: Konfigurasi crawling yang optimal
- **Schema Markup**: Structured data untuk rich snippets
- **Fast Loading**: Performa loading yang sangat cepat

### 💰 Monetization
- **Multi-Platform Ads**: Google AdSense, Media.net, PropellerAds
- **Custom Ads**: Dukungan iklan direct/custom
- **Strategic Placement**: Penempatan iklan yang optimal
- **GDPR Compliant**: Sesuai regulasi privasi

### 📄 Pages & Features
- **Homepage**: Landing page dengan featured posts
- **Blog**: Halaman daftar artikel dengan pagination
- **Archive**: Arsip artikel berdasarkan bulan/tahun
- **Categories**: Halaman kategori dan tag
- **Contact**: Formulir kontak dengan Formspree
- **Legal Pages**: Privacy Policy, Terms, Disclaimer
- **404 Page**: Halaman error yang menarik

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Content**: [MDX](https://mdxjs.com/) - Markdown + JSX
- **Icons**: [Lucide](https://lucide.dev/) - Beautiful icons
- **Forms**: [Formspree](https://formspree.io/) - Form handling

## 📁 Struktur Proyek

```text
/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/         # Komponen Astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Ad.astro        # Komponen iklan
│   ├── content/           # Content collections
│   │   ├── config.ts
│   │   └── blog/          # Artikel blog
│   ├── layouts/           # Layout templates
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── pages/             # Halaman website
│   │   ├── index.astro    # Homepage
│   │   ├── blog/          # Blog pages
│   │   ├── kategori/      # Category pages
│   │   └── arsip/         # Archive pages
│   ├── config/            # Konfigurasi
│   │   ├── site.ts        # Site config
│   │   └── ads.ts         # Ads config
│   ├── utils/             # Utility functions
│   │   ├── seo.ts         # SEO helpers
│   │   └── schema.ts      # Schema markup
│   └── styles/            # Global styles
│       └── global.css
├── docs/                  # Dokumentasi
│   └── ADS_SETUP.md       # Panduan setup iklan
└── package.json
```

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone <repository-url>
cd base-tema
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Site

Edit `src/config/site.ts`:

```typescript
export const SITE_CONFIG = {
  title: 'Nama Blog Anda',
  description: 'Deskripsi blog Anda',
  baseUrl: 'https://yourdomain.com',
  author: 'Nama Anda',
  // ... konfigurasi lainnya
};
```

### 4. Setup Iklan (Opsional)

Edit `src/config/ads.ts` untuk mengaktifkan monetisasi:

```typescript
export const ADS_CONFIG = {
  adsense: {
    enabled: true,
    publisherId: 'ca-pub-YOUR_PUBLISHER_ID',
    // ... konfigurasi lainnya
  }
};
```

Lihat [docs/ADS_SETUP.md](docs/ADS_SETUP.md) untuk panduan lengkap.

### 5. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser.

## 📝 Membuat Konten

### Artikel Blog

Buat file `.mdx` di `src/content/blog/`:

```markdown
---
title: "Judul Artikel"
description: "Deskripsi artikel"
publishedDate: 2024-01-15
tags: ["web-development", "astro"]
featured: true
image: "/images/artikel.jpg"
---

# Konten Artikel

Tulis konten artikel Anda di sini menggunakan Markdown.
```

### Halaman Statis

Buat file `.astro` di `src/pages/`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Judul Halaman">
  <h1>Konten Halaman</h1>
</BaseLayout>
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server di `localhost:4321` |
| `npm run build` | Build production site ke `./dist/` |
| `npm run preview` | Preview build secara lokal |
| `npm run astro ...` | Run Astro CLI commands |

## 🎨 Kustomisasi

### Colors & Themes

Edit `tailwind.config.mjs` untuk mengubah color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Warna primary Anda
        }
      }
    }
  }
}
```

### Typography

Edit `src/styles/global.css` untuk styling typography:

```css
.prose-custom {
  /* Custom prose styling */
}
```

### Components

Buat komponen baru di `src/components/` dan import sesuai kebutuhan.

## 💰 Monetisasi

### Platform Iklan yang Didukung

1. **Google AdSense** - Platform paling populer
2. **Media.net** - Alternatif AdSense yang bagus
3. **PropellerAds** - Format iklan beragam
4. **Custom Ads** - Iklan direct/custom HTML

### Lokasi Iklan

- **Header**: Setelah hero section
- **Content**: Di tengah artikel
- **Footer**: Sebelum newsletter
- **Sidebar**: Dapat ditambahkan manual

Lihat [docs/ADS_SETUP.md](docs/ADS_SETUP.md) untuk panduan lengkap setup iklan.

## 📊 SEO Features

- ✅ Meta tags otomatis
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Schema markup
- ✅ Canonical URLs
- ✅ Breadcrumbs

## 🔧 Konfigurasi Lanjutan

### Environment Variables

Buat file `.env`:

```env
FORMSPREE_ENDPOINT=your_formspree_endpoint
SITE_URL=https://yourdomain.com
```

### Build Optimization

Tema sudah dioptimasi untuk:
- Static site generation
- Image optimization
- CSS purging
- JavaScript minification
- Bundle splitting

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy ke Vercel
```

### Netlify

```bash
npm run build
# Deploy ke Netlify
```

### GitHub Pages

```bash
npm run build
# Deploy ke GitHub Pages
```

## 📚 Dokumentasi

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs)
- [Setup Iklan](docs/ADS_SETUP.md)

## 🤝 Contributing

1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Buat Pull Request

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Credits

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

⭐ **Jika tema ini membantu, berikan star di repository ini!**
