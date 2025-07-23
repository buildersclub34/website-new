import './globals.css';
import ClientLayout from './ClientLayout';
import { Metadata } from 'next';

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
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-black text-white font-sans antialiased" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}