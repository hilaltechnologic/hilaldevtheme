# Panduan Setup Iklan

Tema blog ini sudah dilengkapi dengan sistem iklan yang fleksibel dan mendukung berbagai platform iklan populer.

## Platform Iklan yang Didukung

### 1. Google AdSense
Platform iklan paling populer dengan pembayaran yang stabil.

### 2. Media.net
Alternatif AdSense yang bagus, terutama untuk traffic dari negara-negara tertentu.

### 3. PropellerAds
Platform iklan dengan berbagai format iklan yang menarik.

### 4. Custom/Direct Ads
Untuk iklan langsung dari advertiser atau kode iklan custom.

## Cara Setup

### 1. Konfigurasi Dasar

Edit file `src/config/ads.ts`:

```typescript
export const ADS_CONFIG = {
  // Google AdSense
  adsense: {
    enabled: true, // Ubah ke true untuk mengaktifkan
    publisherId: 'ca-pub-YOUR_PUBLISHER_ID', // Ganti dengan Publisher ID Anda
    slots: {
      header: '1234567890',    // Ganti dengan Ad Unit ID Anda
      sidebar: '1234567891', 
      content: '1234567892',
      footer: '1234567893'
    }
  },
  
  // Global settings
  settings: {
    showInDevelopment: false, // Set ke true untuk melihat iklan di development
    lazyLoad: true,
    respectDoNotTrack: true,
    consentRequired: true
  }
};
```

### 2. Setup Google AdSense

1. Daftar di [Google AdSense](https://www.google.com/adsense/)
2. Dapatkan Publisher ID (format: ca-pub-xxxxxxxxxx)
3. Buat Ad Units untuk setiap slot (header, sidebar, content, footer)
4. Update konfigurasi di `src/config/ads.ts`

### 3. Setup Media.net

1. Daftar di [Media.net](https://www.media.net/)
2. Dapatkan Site ID
3. Buat ad tags untuk setiap slot
4. Update konfigurasi:

```typescript
medianet: {
  enabled: true,
  siteId: 'YOUR_SITE_ID',
  slots: {
    header: 'header-slot-id',
    sidebar: 'sidebar-slot-id',
    content: 'content-slot-id', 
    footer: 'footer-slot-id'
  }
}
```

### 4. Setup PropellerAds

1. Daftar di [PropellerAds](https://propellerads.com/)
2. Buat zone untuk setiap slot
3. Update konfigurasi:

```typescript
propellerads: {
  enabled: true,
  zoneIds: {
    header: 'zone-id-1',
    sidebar: 'zone-id-2',
    content: 'zone-id-3',
    footer: 'zone-id-4'
  }
}
```

### 5. Custom Ads

Untuk iklan custom atau direct:

```typescript
custom: {
  enabled: true,
  ads: {
    header: {
      html: '<div>Your custom ad HTML</div>',
      script: 'console.log("Custom ad script");'
    }
  }
}
```

## Lokasi Iklan

### 1. Halaman Blog (BlogLayout)
- **Header Ad**: Sebelum konten artikel
- **Footer Ad**: Setelah konten artikel

### 2. Halaman Utama (Index)
- **Header Ad**: Setelah hero section
- **Content Ad**: Di antara section artikel dan features
- **Footer Ad**: Sebelum newsletter section

### 3. Menambah Iklan di Halaman Lain

```astro
---
import Ad from '../components/Ad.astro';
---

<!-- Iklan Header -->
<Ad slot="header" type="display" />

<!-- Iklan Sidebar -->
<Ad slot="sidebar" type="auto" />

<!-- Iklan Content -->
<Ad slot="content" type="in-article" />

<!-- Iklan Footer -->
<Ad slot="footer" type="display" />
```

## Pengaturan Lanjutan

### 1. Development Mode

Untuk melihat iklan saat development:

```typescript
settings: {
  showInDevelopment: true
}
```

### 2. GDPR Compliance

Sistem sudah mendukung GDPR dengan pengaturan:

```typescript
settings: {
  respectDoNotTrack: true,
  consentRequired: true
}
```

### 3. Lazy Loading

Iklan akan dimuat secara lazy untuk performa yang lebih baik:

```typescript
settings: {
  lazyLoad: true
}
```

## Tips Optimasi

### 1. Penempatan Iklan
- **Header**: Efektif untuk visibility tinggi
- **Content**: Tingkat engagement tinggi
- **Sidebar**: Cocok untuk iklan persisten
- **Footer**: Untuk traffic yang scroll sampai bawah

### 2. Ukuran Iklan
- **Header/Footer**: 728x90 (Leaderboard) atau 320x50 (Mobile Banner)
- **Sidebar**: 300x600 (Half Page) atau 300x250 (Medium Rectangle)
- **Content**: 336x280 (Large Rectangle) atau responsive

### 3. A/B Testing
- Test berbagai ukuran dan posisi
- Monitor CTR dan revenue
- Sesuaikan berdasarkan performa

## Troubleshooting

### 1. Iklan Tidak Muncul
- Pastikan `enabled: true` di konfigurasi
- Cek Publisher ID dan Slot ID
- Pastikan domain sudah diapprove

### 2. Error Console
- Cek ad blocker
- Pastikan script loading dengan benar
- Cek network requests di DevTools

### 3. Revenue Rendah
- Optimasi penempatan iklan
- Tingkatkan traffic quality
- Coba platform iklan lain

## Dukungan

Jika mengalami masalah, cek:
1. Dokumentasi platform iklan
2. Console browser untuk error
3. Network tab untuk request yang gagal
4. Ad blocker yang mungkin aktif
