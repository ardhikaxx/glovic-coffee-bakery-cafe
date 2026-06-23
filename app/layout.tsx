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
  icons: { icon: '/logo.webp' },
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
