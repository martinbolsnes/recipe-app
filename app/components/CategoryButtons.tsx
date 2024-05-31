'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Beef, CakeSlice, Fish, Martini, Salad, Wheat } from 'lucide-react';
import { getCategories } from '@/sanity/sanity.query';
import type { CategoryType } from '@/types';
import { useEffect, useState } from 'react';

const icons = {
  meat: <Beef className={cn('w-4 h-4 mr-2')} />,
  fish: <Fish className={cn('w-4 h-4 mr-2')} />,
  veggie: <Salad className={cn('w-4 h-4 mr-2')} />,
  pasta: <Wheat className={cn('w-4 h-4 mr-2')} />,
  dessert: <CakeSlice className={cn('w-4 h-4 mr-2')} />,
  drinks: <Martini className={cn('w-4 h-4 mr-2')} />,
  all: <CakeSlice className={cn('w-4 h-4 mr-2')} />,
};

export default function CategoryButtons() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    async function fetchData() {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    }

    fetchData();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category !== 'all') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={cn('flex flex-wrap items-center gap-4')}>
      <Button
        size='sm'
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => handleCategoryClick('all')}
      >
        {icons.all}
        All
      </Button>

      {categories.map((category) => {
        const categoryName = category.name.toLowerCase();
        return (
          <Button
            key={category._id}
            size='sm'
            variant={selectedCategory === categoryName ? 'default' : 'outline'}
            onClick={() => handleCategoryClick(categoryName)}
          >
            {icons[category.icon as keyof typeof icons]}
            {category.name}
          </Button>
        );
      })}
    </div>
  );
}
