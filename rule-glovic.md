# rule-glovic.md
## Blueprint Arsitektur — GloVic Website Bio
**Next.js · React · Tailwind CSS · Wine Red Theme**

---

## 1. IDENTITAS PROYEK

| Atribut | Detail |
|---|---|
| Nama Usaha | **GloVic** |
| Tagline | *coffee · bakery · cafe* |
| Tipe Website | Single-page bio / landing page |
| Target Audiens | Warga & pengunjung Jember, wisatawan, mahasiswa UNEJ, pecinta kopi & bakery |
| Tone | Hangat, premium lokal, cozy, Instagram-worthy |
| Stack | Next.js (App Router) · React · Tailwind CSS |

---

## 2. INFORMASI BISNIS (SUMBER KEBENARAN)

### Kontak Utama
```
Instagram  : @glovicbakery
WhatsApp   : 0811-3558693  (pesan saja / message only)
```

### Jam Operasional
```
Everyday   : 06.00 – 22.00 WIB
```

### Cabang & Telepon

| No | Nama Cabang | Alamat | Telepon |
|----|-------------|--------|---------|
| 1 | GloVic Gatsu *(Cabang Gatot Subroto)* | Jl. Gatot Subroto No. 33B, Kepatihan, Kaliwates, Jember 68131 | 0331-5105555 |
| 2 | GloVic A. Yani *(Cabang Ahmad Yani)* | Jl. A. Yani Kav. 6–8, Kepatihan, Kaliwates, Jember 68137 | 0331-411445 |

> **Catatan developer:** Seluruh data kontak dan lokasi wajib diambil dari konstanta terpusat (`lib/constants/glovic.ts`), tidak boleh hardcode inline di komponen.

---

## 3. ARSITEKTUR PROYEK

### Struktur Direktori
```
glovic-web/
├── app/
│   ├── layout.tsx              # Root layout (font, metadata, global styles)
│   ├── page.tsx                # Landing page utama (single-page)
│   └── globals.css             # Tailwind directives + CSS variables
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar transparan → solid saat scroll
│   │   └── Footer.tsx          # Footer minimal
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero full-viewport
│   │   ├── AboutSection.tsx    # Cerita & identitas GloVic
│   │   ├── MenuHighlight.tsx   # Highlight menu unggulan (3–4 item)
│   │   ├── LocationSection.tsx # Dua kartu cabang + map embed
│   │   ├── GallerySection.tsx  # Foto suasana (grid masonry)
│   │   └── ContactSection.tsx  # CTA WhatsApp + Instagram
│   │
│   └── ui/
│       ├── BranchCard.tsx      # Kartu info cabang reusable
│       ├── MenuCard.tsx        # Kartu menu highlight
│       ├── SectionTitle.tsx    # Heading section berformat seragam
│       └── OpenBadge.tsx       # Badge status buka/tutup real-time
│
├── lib/
│   ├── constants/
│   │   └── glovic.ts           # Semua data bisnis (kontak, cabang, jam)
│   └── utils/
│       └── isOpen.ts           # Logika cek status buka/tutup
│
├── public/
│   ├── images/
│   │   ├── hero/               # Foto hero (1–2 foto landscape HD)
│   │   ├── menu/               # Foto menu highlight
│   │   └── gallery/            # Foto suasana cafe
│   └── icons/
│       └── glovic-favicon.ico
│
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. DATA CONSTANTS (lib/constants/glovic.ts)

```typescript
// lib/constants/glovic.ts

export const GLOVIC_INFO = {
  name: 'GloVic',
  tagline: 'coffee · bakery · cafe',
  description:
    'Tempat nongkrong favorit di Jember. Nikmati kopi spesial, bakery segar, dan kudapan lezat dalam suasana yang cozy dan instagramable.',

  contact: {
    whatsapp: {
      number: '0811-3558693',
      href: 'https://wa.me/628113558693',
      label: 'Chat WhatsApp (message only)',
    },
    instagram: {
      username: '@glovicbakery',
      href: 'https://www.instagram.com/glovicbakery',
    },
  },

  hours: {
    label: 'Everyday',
    open: '06:00',
    close: '22:00',
    display: 'Setiap Hari  06.00 – 22.00 WIB',
  },

  branches: [
    {
      id: 'gatsu',
      name: 'GloVic Gatsu',
      address: 'Jl. Gatot Subroto No. 33B, Kepatihan, Kaliwates, Jember 68131',
      phone: '0331-5105555',
      phoneHref: 'tel:+623315105555',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!...(embed_url_gatsu)...',
      mapLink: 'https://maps.google.com/?q=Glovic+Bakery+Gatot+Subroto+Jember',
    },
    {
      id: 'ayani',
      name: 'GloVic A. Yani',
      address: 'Jl. A. Yani Kav. 6–8, Kepatihan, Kaliwates, Jember 68137',
      phone: '0331-411445',
      phoneHref: 'tel:+623314114450',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!...(embed_url_ayani)...',
      mapLink: 'https://maps.google.com/?q=GloVic+A+Yani+Jember',
    },
  ],

  menuHighlights: [
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      description: 'Espresso dengan busa susu lembut, kaya rasa dan aroma.',
      emoji: '☕',
    },
    {
      id: 'red-velvet',
      name: 'Red Velvet Crumble',
      description: 'Kue lembut dengan lapisan cream cheese yang creamy.',
      emoji: '🎂',
    },
    {
      id: 'croquette',
      name: 'Kroket',
      description: 'Gorengan renyah dengan isian gurih — menu signature favorit.',
      emoji: '🥐',
    },
    {
      id: 'waffle',
      name: 'Cappuccino & Waffle',
      description: 'Kombinasi sempurna untuk sarapan atau sore hari.',
      emoji: '🧇',
    },
  ],
} as const;
```

---

## 5. UTILITY — LOGIKA BUKA/TUTUP (lib/utils/isOpen.ts)

```typescript
// lib/utils/isOpen.ts
// Jam buka GloVic: Everyday 06:00 – 22:00 WIB (UTC+7)

export function isGlovicOpen(): boolean {
  const now = new Date();
  // Konversi ke WIB (UTC+7)
  const wibOffset = 7 * 60;
  const localOffset = now.getTimezoneOffset();
  const wibTime = new Date(now.getTime() + (wibOffset + localOffset) * 60000);

  const hours = wibTime.getHours();
  const minutes = wibTime.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const openMinutes = 6 * 60;   // 06:00
  const closeMinutes = 22 * 60; // 22:00

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export function getStatusLabel(): { open: boolean; label: string; sublabel: string } {
  const open = isGlovicOpen();
  return {
    open,
    label: open ? 'Sedang Buka' : 'Sedang Tutup',
    sublabel: open
      ? 'Tutup pukul 22.00 WIB'
      : 'Buka kembali pukul 06.00 WIB',
  };
}
```

---

## 6. DESIGN SYSTEM

### 6.1 Palet Warna — Wine Red Theme

| Token | Nama | Hex | Penggunaan |
|---|---|---|---|
| `wine-950` | Deep Noir | `#1A0A0F` | Background gelap, footer |
| `wine-900` | Burgundy Night | `#2D1018` | Navbar solid, section gelap |
| `wine-800` | Rich Wine | `#5C1A2A` | Background section alternatif |
| `wine-700` | Deep Crimson | `#7A1F33` | Elemen dekoratif, border aksen |
| `wine-600` | Wine Red *(primer)* | `#922637` | CTA button, highlight utama |
| `wine-500` | Merlot | `#A83044` | Button hover state |
| `wine-400` | Rosé | `#C4596B` | Icon, badge, underline dekoratif |
| `wine-300` | Blush | `#D98A96` | Teks muted pada dark bg |
| `cream-100` | Warm Cream | `#FAF5EE` | Background terang |
| `cream-50` | Off White | `#FFFDF9` | Card background, section terang |
| `gold-400` | Warm Gold | `#C9A84C` | Aksen premium (jam buka, bintang) |
| `text-dark` | Charcoal | `#1C1C1E` | Body teks pada bg terang |
| `text-muted` | Taupe | `#6B5B5B` | Teks sekunder pada bg terang |

> **Filosofi:** Wine red memberi kesan premium, hangat, dan mature — cocok dengan positioning GloVic sebagai cafe cozy bertarget segmen dewasa muda hingga profesional. Cream sebagai contrast terang menciptakan ritme visual antara section gelap dan terang.

### 6.2 Tipografi

```css
/* Font utama: Playfair Display (display heading) */
/* Font body: Plus Jakarta Sans (UI & body) */
/* Font angka/data: JetBrains Mono (jam operasional, nomor telp) */
```

| Role | Font | Weight | Keterangan |
|---|---|---|---|
| Display / Hero | Playfair Display | 700, 900 | Karakter elegant & premium |
| Heading Section | Playfair Display | 600 | Konsistensi identitas visual |
| Body Teks | Plus Jakarta Sans | 400, 500 | Keterbacaan optimal |
| Label / Caption | Plus Jakarta Sans | 600 | Badge, label cabang |
| Angka / Jam / Telepon | JetBrains Mono | 500 | Jam buka, nomor telepon |

```typescript
// next.config.ts — Google Fonts import
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
```

### 6.3 Tailwind Config Extension

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50:  '#FFF0F2',
          100: '#FFD6DC',
          200: '#FFB3BC',
          300: '#D98A96',
          400: '#C4596B',
          500: '#A83044',
          600: '#922637',
          700: '#7A1F33',
          800: '#5C1A2A',
          900: '#2D1018',
          950: '#1A0A0F',
        },
        cream: {
          50:  '#FFFDF9',
          100: '#FAF5EE',
        },
        gold: {
          400: '#C9A84C',
          500: '#B8960F',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        jakarta:  ['var(--font-jakarta)', 'sans-serif'],
        mono:     ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'wine-gradient':
          'linear-gradient(135deg, #1A0A0F 0%, #5C1A2A 50%, #922637 100%)',
        'cream-gradient':
          'linear-gradient(180deg, #FFFDF9 0%, #FAF5EE 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 7. STRUKTUR HALAMAN (Single-Page Layout)

### Urutan Section

```
[Navbar]
  ↓
[1. HeroSection]         — Full viewport, foto suasana cafe
  ↓
[2. AboutSection]        — Cerita singkat GloVic, vibe & atmosfer
  ↓
[3. MenuHighlight]       — 4 menu andalan (grid 2x2 atau carousel)
  ↓
[4. GallerySection]      — Grid foto (6–9 foto, masonry style)
  ↓
[5. LocationSection]     — 2 kartu cabang + Google Maps embed
  ↓
[6. ContactSection]      — CTA WhatsApp, Instagram, jam buka
  ↓
[Footer]
```

---

## 8. SPESIFIKASI KOMPONEN

### 8.1 Navbar

```
Behavior:
- Transparan dengan teks putih saat posisi atas (hero)
- Berubah solid wine-900 + shadow saat di-scroll > 80px
- Sticky: position: sticky; top: 0; z-index: 50

Konten:
- Kiri: Logo text "GloVic" (Playfair Display, wine-400 atau gold-400)
- Kanan: Anchor links → #about, #menu, #lokasi, #kontak
- Mobile: Hamburger menu (drawer dari kanan)

Tailwind classes utama:
  navbar-transparan: "fixed top-0 w-full text-white transition-all duration-300"
  navbar-solid:      "bg-wine-900/95 backdrop-blur-sm shadow-lg"
```

### 8.2 HeroSection

```
Layout:
- Full viewport height (min-h-screen)
- Background: foto cafe (object-cover) + overlay gradient wine gelap
- Overlay: "bg-gradient-to-b from-wine-950/80 via-wine-900/60 to-wine-950/90"

Konten (teks, center aligned):
- Eyebrow: "coffee · bakery · cafe" (Plus Jakarta Sans, wine-300, tracking-widest uppercase)
- Headline: "GloVic" (Playfair Display 900, 5xl–8xl, white)
- Subheadline: "Tempat favorit Jember untuk kopi, bakery, dan momen terbaik."
- OpenBadge: status buka/tutup real-time
- CTA Button: "Hubungi Kami via WhatsApp" → link wa.me
- CTA Secondary: "Lihat Lokasi" → scroll ke #lokasi

Signature element:
- Judul "GloVic" dengan letter-spacing sangat lebar (tracking-[0.2em])
  dan garis dekoratif wine-600 di kiri-kanan teks (ornamen klasik bakery)
```

### 8.3 OpenBadge Component

```typescript
// Menampilkan status real-time buka/tutup
// Digunakan di Hero dan ContactSection

Props: tidak ada (menggunakan getStatusLabel() internal)

Tampilan BUKA:
  - Dot hijau berkedip (animate-pulse)
  - Background: green-900/30 border green-500
  - Teks: "Sedang Buka  •  Tutup 22.00 WIB"

Tampilan TUTUP:
  - Dot merah statis
  - Background: wine-900/50 border wine-400
  - Teks: "Sedang Tutup  •  Buka 06.00 WIB"

Font angka jam: JetBrains Mono
```

### 8.4 AboutSection

```
Background: cream-100 (terang)
Layout: 2 kolom (teks kiri + foto kanan) — stack di mobile

Konten:
- Section label: "Tentang Kami"
- Heading: "Lebih dari Sekadar Kopi"
- Body teks (2–3 paragraf):
    → Didirikan di Jember, GloVic hadir sebagai ruang untuk semua —
       mulai dari sarapan pagi dengan fresh bakery, sesi kerja siang
       hari dengan wifi kencang, hingga nongkrong sore dengan cappuccino.
    → Dua lokasi strategis di Gatot Subroto dan Ahmad Yani, buka
       setiap hari mulai pukul 6 pagi.
- Highlight stats (3 item):
    → "2 Lokasi" / "Setiap Hari" / "06.00–22.00"
    Font angka: Playfair Display bold
```

### 8.5 MenuHighlight

```
Background: wine-900 (gelap)
Layout: Grid 2x2 desktop, 1 kolom mobile

Heading: "Menu Andalan" (Playfair, cream/white)
Subheading: "Pilihan yang paling sering dipesan pelanggan setia GloVic"

MenuCard struktur:
- Emoji/ikon besar (4xl)
- Nama menu (Playfair Display, gold-400)
- Deskripsi singkat (Plus Jakarta Sans, wine-300)
- Border: wine-700, hover: border-wine-400 + shadow wine-600/30

Data: dari GLOVIC_INFO.menuHighlights
```

### 8.6 GallerySection

```
Background: cream-50
Heading: "Suasana GloVic"

Layout: CSS Grid masonry-like, 3 kolom desktop
  → Variasikan ukuran foto: beberapa span 2 baris (row-span-2)
  → Hover: slight zoom + overlay wine gradient tipis

Foto yang diperlukan (sumber: foto nyata dari owner / Instagram @glovicbakery):
  - Interior cafe (2–3 foto)
  - Showcase kue/bakery
  - Latte art / cappuccino
  - Suasana duduk bersama teman
  - Detail dekorasi instagramable

Fallback placeholder saat foto belum ada:
  - Warna wine-800 dengan teks "GloVic" di tengah
```

### 8.7 LocationSection

```
Background: wine-950 (gelap)
Heading: "Temukan Kami"

Layout: 2 BranchCard berdampingan (stack di mobile)

BranchCard konten:
  - Badge nomor cabang (wine-600 background)
  - Nama cabang (Playfair, gold-400)
  - Ikon 📍 + Alamat lengkap
  - Ikon 📞 + Nomor telepon (JetBrains Mono, klik-to-call)
  - Ikon 🕐 + "Everyday 06.00–22.00 WIB"
  - Tombol "Buka di Google Maps" → mapLink
  - Google Maps iframe embed (responsive, rounded-xl)

Map embed styling:
  filter: saturate(120%) hue-rotate(330deg) → warna kemerahan mencocokkan tema
  atau gunakan map style gelap (dark mode map)
```

### 8.8 ContactSection

```
Background: wine-800 → wine-600 (gradient)
Heading: "Hubungi GloVic"
Subheading: "Pesan, tanya menu, atau reservasi — kami siap membantu."

Konten:
  1. WhatsApp CTA (utama):
     - Tombol besar: "Chat WhatsApp" → https://wa.me/628113558693
     - Keterangan: "0811-3558693 (pesan saja)"
     - Ikon WhatsApp (SVG)

  2. Instagram CTA:
     - Tombol: "Follow @glovicbakery" → Instagram link
     - Keterangan: "Lihat menu terbaru & promo"

  3. OpenBadge (ulang, kondisi real-time)

  4. Jam operasional display:
     "Setiap Hari  ·  06.00 – 22.00 WIB"
     Font: JetBrains Mono, gold-400
```

### 8.9 Footer

```
Background: wine-950
Konten minimal:
  - "GloVic · coffee · bakery · cafe" (Playfair)
  - "© 2025 GloVic Jember. All rights reserved."
  - Icon links: WhatsApp + Instagram
  - Tagline kecil: "Jember's Cozy Spot Since ..."
```

---

## 9. RESPONSIVENESS

| Breakpoint | Target | Catatan |
|---|---|---|
| `sm` (640px) | Ponsel lebar | Stack semua section jadi 1 kolom |
| `md` (768px) | Tablet | 2 kolom mulai aktif (About, Menu) |
| `lg` (1024px) | Laptop | Layout penuh, grid gallery 3 kolom |
| `xl` (1280px) | Desktop lebar | Max-width container 1280px, center |

### Mobile-First Rules
- Navbar mobile: hamburger icon → slide drawer dari kanan
- Hero text: font-size diperkecil (`text-5xl md:text-7xl lg:text-8xl`)
- BranchCard: stack vertical di bawah `md`
- Gallery: 2 kolom di mobile, 3 kolom di desktop
- Semua tombol CTA minimal 48px tinggi (touch target)

---

## 10. SEO & METADATA

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'GloVic — Coffee · Bakery · Cafe Jember',
  description:
    'GloVic adalah cafe dan bakery favorit di Jember. Nikmati kopi specialty, fresh bakery, dan suasana cozy di 2 lokasi strategis. Buka setiap hari 06.00–22.00 WIB.',
  keywords: [
    'GloVic', 'GloVic Jember', 'cafe Jember', 'bakery Jember',
    'kopi Jember', 'GloVic Gatot Subroto', 'GloVic Ahmad Yani',
    'coffee shop Jember', 'tempat nongkrong Jember',
  ],
  openGraph: {
    title: 'GloVic — Coffee · Bakery · Cafe Jember',
    description: 'Tempat favorit Jember. Buka setiap hari 06.00–22.00 WIB.',
    url: 'https://glovic.id', // domain final
    siteName: 'GloVic',
    locale: 'id_ID',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icons/glovic-favicon.ico' },
};
```

---

## 11. PERFORMA & TEKNIS

### Image Optimization
- Gunakan `next/image` untuk semua foto cafe dan menu
- Format: WebP (otomatis via Next.js Image)
- `priority={true}` hanya untuk foto hero
- Semua gambar memiliki `alt` deskriptif (aksesibilitas)

### Animasi
- Gunakan `tailwindcss/animate` atau `framer-motion` (pilih satu)
- Section reveal: `opacity-0 translate-y-4 → opacity-100 translate-y-0` saat scroll (IntersectionObserver)
- Navbar transition: `transition-all duration-300`
- Hover card: `transition-transform duration-200 hover:scale-[1.02]`
- JANGAN animasi berlebihan — kesan cozy bukan circus

### Performance Rules
- No external CSS framework (hanya Tailwind utility)
- Google Fonts dimuat via `next/font/google` (zero layout shift)
- Google Maps embed: lazy load dengan `loading="lazy"` pada iframe
- WhatsApp link menggunakan format `https://wa.me/628113558693`

---

## 12. NAMING CONVENTION

| Elemen | Convention | Contoh |
|---|---|---|
| Komponen React | PascalCase | `BranchCard.tsx`, `OpenBadge.tsx` |
| File CSS/utils | kebab-case | `is-open.ts` |
| Konstanta | SCREAMING_SNAKE | `GLOVIC_INFO` |
| Tailwind kustom | kebab-case | `wine-600`, `font-playfair` |
| Section ID (anchor) | kebab-case | `#tentang`, `#menu`, `#lokasi`, `#kontak` |
| Props interface | PascalCase + Props suffix | `BranchCardProps` |

---

## 13. CHECKLIST SEBELUM DEPLOY

- [ ] Semua data kontak dari `GLOVIC_INFO` constants (bukan hardcode)
- [ ] `isGlovicOpen()` berjalan benar di timezone WIB
- [ ] Google Maps embed URL valid untuk kedua cabang
- [ ] WhatsApp link format: `https://wa.me/628113558693`
- [ ] Semua gambar menggunakan `next/image` dengan `alt` text
- [ ] Responsif di 375px (iPhone SE), 768px, 1280px
- [ ] Navbar smooth scroll ke setiap section anchor
- [ ] `metadata` OpenGraph diisi lengkap
- [ ] Favicon terpasang
- [ ] Tidak ada console error saat build (`next build`)
- [ ] Lighthouse Performance > 90, Accessibility > 90

---

## 14. CATATAN PENGEMBANGAN

> **Foto asli sangat penting.** Website bio cafe sangat bergantung pada foto suasana nyata. Minta owner GloVic menyediakan setidaknya:
> - 1–2 foto hero landscape (interior atau eksterior saat ramai)
> - 4–6 foto gallery (suasana, menu, detail dekorasi)
> - 2–4 foto menu highlight (cappuccino, kue, kroket, waffle)
>
> Sementara foto belum tersedia, gunakan placeholder dengan warna wine-800 dan overlay teks.

> **Google Maps Embed:** Dapatkan embed URL resmi dari Google Maps → Bagikan → Sematkan peta → Salin iframe, lalu ambil `src`-nya saja untuk ditaruh di konstanta.

> **Domain:** Pertimbangkan `glovic.id` atau `glovicjember.com` untuk branding yang kuat.
