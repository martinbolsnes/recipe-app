import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart, HeartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { getRecipe } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';

export async function Card({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const recipes: RecipeType[] = await getRecipe();

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
      name.includes(query.toLowerCase()) ||
      shortDescription.includes(query.toLowerCase())
    );
  });

  return (
    <>
      {filteredRecipes.map((recipes) => (
        <Link
          href={`/recipes/${recipes.slug}`}
          key={recipes._id}
          className={cn(
            'bg-background rounded-md shadow-md transition-all hover:shadow-lg overflow-hidden'
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
              className='absolute top-2 right-2 bg-foreground/40 rounded-full'
              size='icon'
              variant='secondary'
            >
              <HeartIcon className='w-5 h-5  stroke-rose-400 stroke-1 fill-rose-400' />
            </Button>
          </div>
          <div className={cn('p-4')}>
            <h3 className={cn('text-lg font-bold mb-2')}>{recipes.name}</h3>
            <p className={cn('text-neutral-500 mb-4')}>
              {recipes.shortDescription}
            </p>
            <div className='flex flex-wrap gap-2'>
              <div className='bg-fuchsia-100 px-2 py-1 rounded-sm font-semibold text-sm text-fuchsia-900'>
                Fast
              </div>
              <div className='bg-emerald-100 px-2 py-1 rounded-sm text-sm font-semibold text-emerald-900 '>
                Healthy
              </div>
              <div className='bg-amber-100 px-2 py-1 rounded-sm text-sm font-semibold text-amber-900 '>
                New
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
