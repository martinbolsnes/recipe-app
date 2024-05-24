import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Beef, Fish, Salad, Wheat } from 'lucide-react';

import { getCategories } from '@/sanity/sanity.query';
import type { CategoryType } from '@/types';

const icons = {
  meat: <Beef className={cn('w-4 h-4 mr-2')} />,
  fish: <Fish className={cn('w-4 h-4 mr-2')} />,
  veggie: <Salad className={cn('w-4 h-4 mr-2')} />,
  pasta: <Wheat className={cn('w-4 h-4 mr-2')} />,
};

export const CategoryButtons = async () => {
  const categories: CategoryType[] = await getCategories();
  return (
    <div className={cn('flex flex-wrap items-center gap-4')}>
      {categories.map((category) => (
        <Button key={category._id} size='sm' variant='outline'>
          {icons[category.icon as keyof typeof icons]}
          {category.name}
        </Button>
      ))}
    </div>
  );
};
