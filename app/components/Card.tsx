import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart, HeartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { getRecipe } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';

export default async function Card({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const recipes: RecipeType[] = await getRecipe();
  console.log(recipes);

  const filteredRecipes = recipes.filter((recipe) => {
    const name =
      recipe.name && typeof recipe.name === 'string'
        ? recipe.name.toLowerCase()
        : '';
    const shortDescription =
      recipe.shortDescription && typeof recipe.shortDescription === 'string'
        ? recipe.shortDescription.toLowerCase()
        : '';

    return (
      name.includes(query?.toLowerCase() || '') ||
      shortDescription.includes(query?.toLowerCase() || '')
    );
  });

  return (
    <>
      {filteredRecipes.map((recipes) => (
        <Link
          href={`/recipes/${recipes.slug}`}
          key={recipes._id}
          className={cn(
            'bg-white rounded-md shadow-md transition-all hover:shadow-lg overflow-hidden'
          )}
        >
          <div className={cn('relative')}>
            <Image
              alt={recipes.image?.alt}
              className={cn('w-full h-48 object-cover')}
              height={250}
              src={recipes.image?.image}
              style={{
                aspectRatio: '400/250',
                objectFit: 'cover',
              }}
              width={400}
            />
            <Button
              className='absolute top-2 right-2 bg-background rounded-full'
              size='icon'
              variant='outline'
            >
              <HeartIcon className='w-5 h-5  stroke-neutral-600 stroke-1' />
            </Button>
          </div>
          <div className={cn('p-4')}>
            <h3 className={cn('text-lg font-bold mb-2')}>{recipes.name}</h3>
            <p className={cn('text-neutral-500 mb-4')}>
              {recipes.shortDescription}
            </p>
            <div className='flex flex-wrap gap-2'>
              <div className='bg-yellow-400 px-3 py-2 rounded-sm text-sm font-bold text-foreground'>
                Fast
              </div>
              <div className='bg-green-400 px-3 py-2 rounded-sm text-sm font-bold text-foreground'>
                Healthy
              </div>
              <div className='bg-rose-400 px-3 py-2 rounded-sm text-sm font-bold text-foreground'>
                New
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
