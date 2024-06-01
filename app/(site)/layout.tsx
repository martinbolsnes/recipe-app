import type { Metadata } from 'next';
import { Comfortaa as FontSans } from 'next/font/google';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Header } from '../components/Header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'MunchMate',
  description: 'Your favorite recipes in one place',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
            fontSans.variable
          )}
        >
          <Header />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
