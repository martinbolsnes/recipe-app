import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PartyPopper, Plus, Utensils } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header
      className={cn(
        'bg-white shadow-md px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-10'
      )}
    >
      <div>
        <Link href='/' className={cn('flex items-center gap-2')}>
          <Utensils className={cn('w-4 h-4 text-primary')} />
          <h1 className={cn('text-lg font-bold')}>Yumz</h1>
        </Link>
      </div>
      <div className={cn('flex items-center gap-4')}>
        <Button size='sm' variant='secondary'>
          <Plus className={cn('w-4 h-4 mr-2')} />
          Add Recipe
        </Button>
        <Button size='sm' variant='default'>
          <PartyPopper className={cn('w-4 h-4 mr-2')} />
          Surprise Me
        </Button>
      </div>
    </header>
  );
};
