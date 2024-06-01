import { ArrowLeftIcon, LogOut, UtensilsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main
      className={cn(
        'mx-auto max-w-md space-y-6 py-12 h-screen flex flex-col items-center justify-center'
      )}
    >
      <Link href='/recipes'>
        <Button
          variant='outline'
          className={cn('text-base absolute top-8 left-6')}
        >
          <ArrowLeftIcon className={cn('w-4 h-4 mr-2')} />
          Go back
        </Button>
      </Link>
      <div className={cn('mx-auto max-w-md space-y-6 py-12')}>
        <div className={cn('space-y-2 text-center')}>
          <h1
            className={cn(
              'text-3xl font-bold flex items-center justify-center'
            )}
          >
            <UtensilsIcon className={cn('mr-2 h-6 w-6 text-primary')} />
            MunchMate
          </h1>
        </div>
        <div className={cn('flex flex-col gap-4 items-center')}>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary:
                  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8',
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
