import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { getRecipe } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';

export const Card = async () => {
  const recipes: RecipeType[] = await getRecipe();

  return (
    <>
      {recipes.map((recipes) => (
        <div
          key={recipes._id}
          className={cn('bg-white rounded-md shadow-md overflow-hidden')}
        >
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
          <div className={cn('p-4')}>
            <h3 className={cn('text-lg font-bold mb-2')}>{recipes.name}</h3>
            <p className={cn('text-neutral-500 mb-4')}>
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
    </>
  );
};
