import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/site/navbar';
import Footer from '@/components/site/footer';
import WhatsAppButton from '@/components/site/whatsapp-button';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport = {
  themeColor: '#0d0a07',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'Chandra Art and Crafts',
  description:
    'Premium furniture manufacturer in Boranada, Jodhpur, Rajasthan. Handcrafted solid wood beds, chairs, dining tables, coffee tables, sofas, cabinets, TV units, side tables, and console tables.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boranada, Jodhpur',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN',
  },
  telephone: '+91 8290562795',
  email: 'chandraartandcrafts@gmail.com',
  url: 'https://chandraartandcrafts.com',
  foundingDate: '1998',
  areaServed: 'Worldwide',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://chandraartandcrafts.com'),
  title: {
    default: 'Chandra Art and Crafts | Premium Furniture Manufacturer in Jodhpur',
    template: '%s | Chandra Art and Crafts',
  },
  description:
    'Chandra Art and Crafts is a premium furniture manufacturer based in Boranada, Jodhpur, Rajasthan. We craft handmade beds, chairs, dining tables, coffee tables, sofas, and cabinets from solid wood with artisan craftsmanship.',
  keywords: [
    'furniture manufacturer Jodhpur',
    'handcrafted furniture India',
    'wooden furniture Rajasthan',
    'luxury furniture exporter',
    'beds chairs dining tables sofas cabinets',
    'Chandra Art and Crafts',
    'Boranada furniture',
    'solid wood furniture',
  ],
  authors: [{ name: 'Chandra Art and Crafts' }],
  creator: 'Chandra Art and Crafts',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://chandraartandcrafts.com',
    siteName: 'Chandra Art and Crafts',
    title: 'Chandra Art and Crafts | Premium Furniture Manufacturer in Jodhpur',
    description:
      'Handcrafted premium furniture from Jodhpur, Rajasthan. Beds, chairs, dining tables, coffee tables, sofas, and cabinets made from solid wood.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8135289/pexels-photo-8135289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        width: 940,
        height: 650,
        alt: 'Chandra Art and Crafts premium furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandra Art and Crafts | Premium Furniture Manufacturer',
    description:
      'Handcrafted premium furniture from Jodhpur, Rajasthan. Solid wood beds, chairs, dining tables, sofas, and cabinets.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://chandraartandcrafts.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.variable}>
        <Navbar />

        <main className="min-h-screen pt-16 lg:pt-20">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}