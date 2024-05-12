import { cn } from '@/lib/utils';
import { SearchInput } from '../components/SearchInput';
import { DropdownMenuComponent } from '../components/DropdownMenu';
import { CategoryButtons } from '../components/CategoryButtons';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { getRecipe } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';

export default async function Page() {
  const recipes: RecipeType[] = await getRecipe();
  return (
    <>
      <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
        <div className={cn('flex items-center justify-between mb-4')}>
          <div className={cn('flex items-center gap-4')}>
            <SearchInput />
            <DropdownMenuComponent />
          </div>
        </div>
        <section className={cn('mb-8')}>
          <div className={cn('flex items-center justify-between mb-4')}>
            <CategoryButtons />
          </div>
          <div className={cn('flex items-center justify-end mb-4 mt-4')}></div>
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            )}
          >
            {recipes.map((recipes) => (
              <div
                key={recipes._id}
                className={cn('bg-white rounded-md shadow-md overflow-hidden')}
              >
                <Image
                  alt={recipes?.image?.alt}
                  className={cn('w-full h-48 object-cover')}
                  height={250}
                  src={recipes?.image?.image}
                  style={{
                    aspectRatio: '400/250',
                    objectFit: 'cover',
                  }}
                  width={400}
                />
                <div className={cn('p-4')}>
                  <h3 className={cn('text-lg font-bold mb-2')}>
                    {recipes.name}
                  </h3>
                  <p className={cn('text-gray-500 mb-4')}>
                    {recipes.shortDescription}
                  </p>
                  <div className={cn('flex items-center justify-between')}>
                    <Button size='sm' variant='outline'>
                      <Heart className={cn('w-4 h-4 mr-2')} />
                      Save
                    </Button>
                    <Link href={`/recipes/${recipes.slug}`}>
                      <Button size='sm' variant='default'>
                        View Recipe
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
