import type { Metadata } from 'next';
import { Comfortaa as FontSans } from 'next/font/google';
import '../globals.css';

import { cn } from '@/lib/utils';
import { Header } from '../components/Header';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '../components/Footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'MunchMate',
  description: 'Your favorite recipes in one place',
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          fontSans.variable
        )}
      >
        <Header />

        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
