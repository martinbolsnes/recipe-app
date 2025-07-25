/* import { cn } from '@/lib/utils';
import Image from 'next/image';
import { newRecipesQuery, recipeQuery } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeartIcon } from 'lucide-react';
import { sanityFetch } from '@/sanity/sanity.client';

export default async function NewRecipesSection() {
  const newRecipes: RecipeType[] = await sanityFetch({
    query: newRecipesQuery,
    tags: ['recipe'],
  });

  const newRecipe = newRecipes.slice(0, 6);

  return (
    <section className={cn('w-full py-8 md:py-20 lg:py-24')}>
      <div className={cn('container px-4 md:px-6')}>
        <div
          className={cn(
            'flex flex-col items-center justify-center space-y-4 text-center'
          )}
        >
          <div className={cn('space-y-2')}>
            <h2
              className={cn(
                'text-2xl text-foreground font-bold tracking-tighter sm:text-4xl'
              )}
            >
              Nye oppskrifter
            </h2>
            <p
              className={cn(
                'max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
              )}
            >
              Noen av våre nyeste oppskrifter som er lagt til på Munchmate
            </p>
          </div>
        </div>
        <div
          className={cn(
            'mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12'
          )}
        >
          {newRecipe.map((recipe) => (
            <Link
              key={recipe._id}
              href={`/recipes/${recipe.slug}`}
              className={cn(
                'flex flex-col justify-between rounded-md bg-background shadow-md transition-all hover:shadow-lg overflow-hidden cursor-pointer'
              )}
            >
              <div className={cn('relative')}>
                <Image
                  alt={recipe.image.alt || ''}
                  className={cn('w-full h-42 aspect-video object-cover')}
                  height='200'
                  src={recipe.image.image || ''}
                  width='300'
                />
                <Button
                  className='absolute top-2 right-2 bg-background rounded-full'
                  size='icon'
                  variant='outline'
                >
                  <HeartIcon className='w-5 h-5  stroke-rose-600 stroke-1 fill-rose-400' />
                </Button>
              </div>
              <div className={cn('space-y-2 p-4')}>
                <h3 className={cn('text-xl font-bold')}>{recipe.name}</h3>
                <p className={cn('text-foreground/60')}>
                  {recipe.shortDescription}
                </p>
                <div className='flex flex-wrap gap-2'>
                  <div className='bg-amber-100 px-2 py-1 rounded-sm text-sm font-semibold text-amber-600'>
                    New
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 */
