# Panduan Optimasi Gambar

Tema blog ini dilengkapi dengan sistem optimasi gambar otomatis yang mengkonversi gambar ke format modern (AVIF, WebP) dengan ukuran yang optimal.

## Fitur Optimasi Gambar

### 1. Format Modern
- **AVIF**: Format terbaru dengan kompresi terbaik (80% kualitas)
- **WebP**: Format modern dengan dukungan browser luas (85% kualitas)
- **JPEG**: Fallback untuk browser lama (90% kualitas)

### 2. Responsive Images
- Multiple ukuran gambar: 640px, 768px, 1024px, 1280px, 1536px
- Srcset otomatis untuk loading gambar sesuai ukuran layar
- Lazy loading default untuk performa optimal

### 3. Optimasi Otomatis
- Kompresi gambar dengan Sharp
- Width dan height otomatis
- Progressive JPEG untuk loading bertahap

## Cara Menggunakan

### 1. Komponen OptimizedImage

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<OptimizedImage
  src="/images/artikel.jpg"
  alt="Deskripsi gambar"
  class="w-full h-auto rounded-lg"
  widths={[640, 768, 1024, 1280]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 2. Props yang Tersedia

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `src` | string | - | Path gambar (required) |
| `alt` | string | - | Alt text (required) |
| `class` | string | '' | CSS classes |
| `loading` | 'lazy' \| 'eager' | 'lazy' | Loading strategy |
| `sizes` | string | responsive | Media queries untuk srcset |
| `widths` | number[] | [640,768,1024,1280] | Ukuran gambar yang dihasilkan |

### 3. Penggunaan di Artikel Blog

Gambar featured di artikel blog sudah otomatis menggunakan OptimizedImage:

```astro
---
// Di frontmatter artikel
image: "/images/featured-image.jpg"
imageAlt: "Deskripsi gambar featured"
---
```

### 4. Penggunaan di MDX

Dalam konten artikel MDX, Anda bisa menggunakan:

```mdx
import OptimizedImage from '../../components/OptimizedImage.astro';

<OptimizedImage
  src="/images/content-image.jpg"
  alt="Gambar dalam artikel"
  class="my-8 rounded-lg shadow-lg"
/>
```

## Konfigurasi

### 1. Astro Config

Konfigurasi optimasi gambar di `astro.config.mjs`:

```javascript
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689 // ~16K x 16K
      }
    }
  }
});
```

### 2. Format dan Kualitas

Edit komponen `OptimizedImage.astro` untuk mengubah format dan kualitas:

```javascript
const formats = ['avif', 'webp'] as const;

const image = await getImage({
  src,
  width,
  format,
  quality: format === 'avif' ? 80 : 85
});
```

## Best Practices

### 1. Ukuran Gambar Sumber
- Gunakan gambar sumber dengan resolusi tinggi (minimal 1920px)
- Format sumber bisa JPEG, PNG, atau WebP
- Hindari gambar yang terlalu besar (>5MB)

### 2. Alt Text
- Selalu sertakan alt text yang deskriptif
- Gunakan untuk SEO dan accessibility
- Hindari "gambar" atau "foto" dalam alt text

### 3. Lazy Loading
- Gunakan `loading="eager"` hanya untuk gambar above-the-fold
- Biarkan default `loading="lazy"` untuk gambar lainnya
- Featured image artikel menggunakan `loading="eager"`

### 4. Sizes Attribute
- Sesuaikan dengan layout gambar
- Contoh untuk full width: `sizes="100vw"`
- Contoh untuk 2 kolom: `sizes="(max-width: 768px) 100vw, 50vw"`

## Contoh Penggunaan

### 1. Hero Image
```astro
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  class="w-full h-[500px] object-cover"
  loading="eager"
  widths={[768, 1024, 1280, 1536, 1920]}
  sizes="100vw"
/>
```

### 2. Gallery Grid
```astro
<OptimizedImage
  src="/images/gallery-1.jpg"
  alt="Gallery image 1"
  class="w-full h-64 object-cover rounded-lg"
  widths={[300, 400, 500]}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 3. Thumbnail
```astro
<OptimizedImage
  src="/images/thumbnail.jpg"
  alt="Article thumbnail"
  class="w-20 h-20 object-cover rounded-full"
  widths={[80, 160]}
  sizes="80px"
/>
```

## Performance Benefits

### 1. Ukuran File
- AVIF: 50-80% lebih kecil dari JPEG
- WebP: 25-50% lebih kecil dari JPEG
- Responsive images: Loading sesuai ukuran layar

### 2. Loading Speed
- Lazy loading mengurangi initial page load
- Progressive JPEG untuk loading bertahap
- Modern format loading lebih cepat

### 3. Core Web Vitals
- Improved LCP (Largest Contentful Paint)
- Better CLS (Cumulative Layout Shift) dengan width/height
- Optimized FCP (First Contentful Paint)

## Browser Support

### AVIF Support
- Chrome 85+
- Firefox 93+
- Safari 16+

### WebP Support
- Chrome 23+
- Firefox 65+
- Safari 14+
- Edge 18+

### Fallback
- JPEG untuk browser yang tidak mendukung format modern
- Progressive enhancement dengan `<picture>` element

## Troubleshooting

### 1. Gambar Tidak Muncul
- Pastikan path gambar benar
- Cek apakah gambar ada di folder `public/`
- Periksa console untuk error

### 2. Build Error
- Pastikan Sharp terinstall: `npm install sharp`
- Cek ukuran gambar tidak melebihi limit
- Pastikan format gambar didukung

### 3. Performance Issues
- Kurangi jumlah widths jika tidak diperlukan
- Gunakan lazy loading untuk gambar non-critical
- Optimasi gambar sumber sebelum upload

## Tips Optimasi

### 1. Preprocessing
- Resize gambar sumber ke ukuran maksimal yang diperlukan
- Kompres gambar sumber sebelum upload
- Gunakan tools seperti ImageOptim atau TinyPNG

### 2. CDN Integration
- Pertimbangkan menggunakan CDN untuk gambar
- Cloudinary atau ImageKit untuk optimasi lebih lanjut
- Astro Assets bisa diintegrasikan dengan CDN

### 3. Monitoring
- Monitor Core Web Vitals dengan Google PageSpeed Insights
- Gunakan Lighthouse untuk audit performa
- Track loading times dengan analytics
