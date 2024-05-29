import { cn } from '@/lib/utils';
import { Squircle, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

import { getRecipeBySlug } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';

import ConvertDialog from '@/app/components/ConvertDialog';
import { RecomendedCard } from '@/app/components/RecomendedCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Props = {
  params: {
    recipe: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.recipe;
  const recipe: RecipeType[] = await getRecipeBySlug(slug);

  return {
    title: `${recipe[0].name}`,
    description: recipe[0].shortDescription,
    openGraph: {
      images: recipe[0].image?.image || 'fallback image',
      title: recipe[0].name,
      description: recipe[0].shortDescription,
    },
  };
}

export default async function Recipe({ params }: Props) {
  const slug = params.recipe;
  const recipe: RecipeType[] = await getRecipeBySlug(slug);
  return (
    <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
      <div
        className={cn(
          'flex flex-col gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6'
        )}
      >
        <div className={cn('grid gap-6')}>
          <Image
            priority
            alt={recipe[0].image?.alt}
            className={cn('rounded-lg object-cover w-full max-w-[800px]')}
            height='300'
            src={recipe[0].image?.image || '/images/placeholder.jpg'}
            style={{
              aspectRatio: '500/300',
              objectFit: 'cover',
            }}
            width='500'
          />
          <div className={cn('grid gap-4')}>
            <h1 className={cn('text-3xl font-bold')}>
              {recipe[0].name || 'Recipe Name'}
            </h1>
            <p className={cn('text-gray-500')}>
              {recipe[0].shortDescription || 'Short description'}
            </p>
            <div className={cn('flex items-center gap-2')}>
              <div className={cn('flex items-center gap-0.5')}>
                <StarIcon className={cn('w-5 h-5 fill-primary')} />
                <StarIcon className={cn('w-5 h-5 fill-primary')} />
                <StarIcon className={cn('w-5 h-5 fill-primary')} />
                <StarIcon
                  className={cn('w-5 h-5 fill-muted stroke-muted-foreground')}
                />
                <StarIcon
                  className={cn('w-5 h-5 fill-muted stroke-muted-foreground')}
                />
              </div>
              <span
                className={cn('text-sm text-neutral-500 dark:text-neutral-400')}
              >
                (4.2 / 5)
              </span>
            </div>
            <Tabs
              className={cn('w-full max-w-[800px]')}
              defaultValue='ingredients'
            >
              <TabsList className='grid w-full grid-cols-2 border-b border-neutral-200'>
                <TabsTrigger value='ingredients'>Ingredients</TabsTrigger>
                <TabsTrigger value='instructions'>Instructions</TabsTrigger>
              </TabsList>
              <TabsContent className='py-6' value='ingredients'>
                <div className='grid gap-2'>
                  <h2 className='text-xl font-semibold'>Ingredients</h2>
                  <ul className='grid gap-1 text-sm pl-6'>
                    {recipe[0].ingredients.map((ingredient, index) => (
                      <li key={index}>
                        <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent className='py-6' value='instructions'>
                <div className='grid gap-2'>
                  <h2 className='text-xl font-semibold'>Instructions</h2>
                  <ol className='grid gap-2 text-sm pl-6'>
                    {recipe[0].instructions.map((instruction, index) => (
                      <li key={index}>
                        <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <ConvertDialog />
        </div>
        <RecomendedCard />
      </div>
    </main>
  );
}
