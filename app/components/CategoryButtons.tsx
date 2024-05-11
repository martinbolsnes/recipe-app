import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Beef, Fish, Salad, Wheat } from 'lucide-react';

export const CategoryButtons = () => {
  return (
    <div className={cn('flex items-center gap-4')}>
      <Button size='sm' variant='outline'>
        <Salad className={cn('w-4 h-4 mr-2')} />
        Veggie
      </Button>
      <Button size='sm' variant='outline'>
        <Beef className={cn('w-4 h-4 mr-2')} />
        Meat
      </Button>
      <Button size='sm' variant='outline'>
        <Fish className={cn('w-4 h-4 mr-2')} />
        Fish
      </Button>
      <Button size='sm' variant='outline'>
        <Wheat className={cn('w-4 h-4 mr-2')} />
        Pasta
      </Button>
    </div>
  );
};
