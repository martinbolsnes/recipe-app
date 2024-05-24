import { LogOut, UtensilsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from '@/auth';

export default function LogoutPage() {
  return (
    <div className={cn('mx-auto max-w-md space-y-6 py-12')}>
      <div className={cn('space-y-2 text-center')}>
        <h1
          className={cn('text-3xl font-bold flex items-center justify-center')}
        >
          <UtensilsIcon className={cn('mr-2 h-6 w-6')} />
          MunchMate
        </h1>
      </div>
      <div className={cn('flex flex-col gap-4 items-center')}>
        <form
          action={async () => {
            'use server';
            await signOut();
            window.location.href = '/';
          }}
        >
          <Button variant='default' type='submit'>
            <LogOut className={cn('w-4 h-4 mr-2')} />
            Log out
          </Button>
        </form>
      </div>
    </div>
  );
}
