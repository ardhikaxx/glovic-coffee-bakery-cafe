import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'GloVic — Coffee · Bakery · Cafe Jember',
  description:
    'GloVic adalah cafe dan bakery favorit di Jember. Tempat nongkrong estetik dengan kopi specialty, fresh bakery, pastry, croquette, waffle, dan suasana cozy di 2 lokasi strategis: Jl. Gatot Subroto & Jl. Ahmad Yani. Buka setiap hari 06.00–22.00 WIB.',
  keywords: [
    // Brand keywords
    'GloVic', 'Glovic Bakery', 'Glovic Cafe', 'Glovic Jember', 'Glovic Coffee', 'GloVic Gatot Subroto', 'GloVic Ahmad Yani', 'Glovic Kepatihan', 'Glovic Kaliwates',
    // Category keywords
    'cafe Jember', 'bakery Jember', 'kopi Jember', 'coffee shop Jember', 'tempat nongkrong Jember', 'tempat nongkrong estetik Jember', 'cafe instagramable Jember', 'cafe cozy Jember', 'cafe murah Jember', 'cafe hits Jember', 'cafe buka pagi Jember', 'toko roti Jember', 'toko kue Jember',
    // Product keywords
    'kopi enak Jember', 'specialty coffee Jember', 'cappuccino Jember', 'waffle Jember', 'kroket Jember', 'red velvet Jember', 'pastry Jember', 'croissant Jember', 'kue ulang tahun Jember', 'sarapan Jember', 'dessert Jember',
    // Target audience / intent keywords
    'rekomendasi cafe Jember', 'tempat nugas Jember', 'cafe dekat UNEJ', 'kuliner Jember', 'jajanan Jember', 'makanan enak Jember', 'oleh oleh Jember', 'cafe keluarga Jember', 'tempat meeting Jember'
  ],
  authors: [{ name: 'GloVic Bakery & Cafe' }],
  category: 'Food & Beverage',
  openGraph: {
    title: 'GloVic — Coffee · Bakery · Cafe Jember',
    description: 'Tempat favorit Jember untuk ngopi dan menikmati bakery segar. Buka setiap hari 06.00–22.00 WIB.',
    url: 'https://glovic-cafe.vercel.app', // domain Vercel
    siteName: 'GloVic Cafe & Bakery',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/logo.webp', // Can be replaced with a proper OG Image later
        width: 800,
        height: 800,
        alt: 'GloVic Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GloVic — Coffee · Bakery · Cafe Jember',
    description: 'Cafe dan bakery terfavorit di Jember. Nikmati kopi, bakery segar, dan suasana yang nyaman.',
    images: ['/logo.webp'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: { icon: '/logo.webp', apple: '/logo.webp' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-jakarta antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
