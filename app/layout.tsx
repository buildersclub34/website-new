import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Builders Club - Venture Capital & Investment',
  description: 'Building the future through strategic investments and partnerships.',
  keywords: 'venture capital, investment, startup, entrepreneurship, builders club',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://buildersclub.me'),
  manifest: '/manifest.json',
  openGraph: {
    title: 'Builders Club - Venture Capital & Investment',
    description: 'Building the future through strategic investments and partnerships.',
    url: '/',
    siteName: 'Builders Club',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Builders Club',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builders Club - Venture Capital & Investment',
    description: 'Building the future through strategic investments and partnerships.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Providers>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}