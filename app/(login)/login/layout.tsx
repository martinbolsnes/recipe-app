import { cn } from '@/lib/utils';
import { Comfortaa as FontSans } from 'next/font/google';
import '../../globals.css';
import { Toaster } from '@/components/ui/toaster';

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
    <html lang='en'>
      <body
        className={cn(
          'flex items-center justify-center min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
