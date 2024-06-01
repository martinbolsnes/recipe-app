import { cn } from '@/lib/utils';
import { Comfortaa as FontSans } from 'next/font/google';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={cn(
            'flex items-center justify-center min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
