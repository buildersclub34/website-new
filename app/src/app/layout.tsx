import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Builders Club',
  description: 'A community of builders and entrepreneurs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
