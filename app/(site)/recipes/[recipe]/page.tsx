import { cn } from '@/lib/utils';
import { AlarmClock, Squircle, StarIcon, UtensilsCrossed } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Metadata } from 'next';

import { getRecipeBySlug } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';

import ConvertDialog from '@/app/components/ConvertDialog';
import { RecomendedCard } from '@/app/components/RecomendedCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

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
  console.log(recipe[0]);
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
            src={recipe[0].image?.image || '/placeholder.scg'}
            style={{
              aspectRatio: '500/300',
              objectFit: 'cover',
            }}
            width='500'
          />
        </div>
        <div className={cn('grid gap-4')}>
          <h1 className={cn('text-3xl font-bold')}>
            {recipe[0].name || 'Recipe Name'}
          </h1>
          <p className={cn('text-gray-500')}>
            {recipe[0].shortDescription || 'Short description'}
          </p>
          <div className={cn('flex gap-2')}>
            {recipe[0].totalTime ? (
              <Button
                variant='outline'
                className={cn('disabled cursor-default border-primary')}
              >
                <AlarmClock className='w-4 h-4 mr-2 inline-block' />
                {recipe[0].totalTime} min
              </Button>
            ) : null}
            {recipe[0].servings ? (
              <Button
                variant='outline'
                className={cn('disabled cursor-default border-primary')}
              >
                <UtensilsCrossed className='w-4 h-4 mr-2 inline-block' />
                {recipe[0].servings} servings
              </Button>
            ) : null}
          </div>
          <div className={cn('flex items-center gap-2')}>
            <Tabs
              className={cn('w-full max-w-[800px]')}
              defaultValue='ingredients'
            >
              <TabsList className='grid w-full grid-cols-2 border-b border-neutral-200'>
                <TabsTrigger value='ingredients'>Ingredienser</TabsTrigger>
                <TabsTrigger value='instructions'>Instruksjoner</TabsTrigger>
              </TabsList>
              <TabsContent className='py-6' value='ingredients'>
                <div className='grid gap-2'>
                  {recipe[0].ingredientsSubheaderOne ? (
                    <p className='text-lg font-semibold'>
                      {recipe[0].ingredientsSubheaderOne}
                    </p>
                  ) : null}
                  <ul className='grid gap-1 text-sm pl-6'>
                    {recipe[0].ingredientsOne.map((ingredient, index) => (
                      <li key={index} className={cn('flex items-start')}>
                        <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                        <span className={cn('flex-1')}>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                  {recipe[0].ingredientsSubheaderTwo ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].ingredientsSubheaderTwo}
                    </p>
                  ) : null}
                  {recipe[0].ingredientsTwo ? (
                    <ul className='grid gap-1 text-sm pl-6'>
                      {recipe[0].ingredientsTwo.map((ingredient, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {recipe[0].ingredientsSubheaderThree ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].ingredientsSubheaderThree}
                    </p>
                  ) : null}
                  {recipe[0].ingredientsThree ? (
                    <ul className='grid gap-1 text-sm pl-6'>
                      {recipe[0].ingredientsThree.map((ingredient, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {recipe[0].ingredientsSubheaderFour ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].ingredientsSubheaderFour}
                    </p>
                  ) : null}
                  {recipe[0].ingredientsFour ? (
                    <ul className='grid gap-1 text-sm pl-6'>
                      {recipe[0].ingredientsFour.map((ingredient, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {recipe[0].ingredientsSubheaderFive ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].ingredientsSubheaderFive}
                    </p>
                  ) : null}
                  {recipe[0].ingredientsFive ? (
                    <ul className='grid gap-1 text-sm pl-6'>
                      {recipe[0].ingredientsFive.map((ingredient, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </TabsContent>
              <TabsContent className='py-6' value='instructions'>
                <div className='grid gap-2'>
                  <ol className='grid gap-2 text-sm pl-6'>
                    {recipe[0].instructionsSubheaderOne ? (
                      <li className='text-sm font-semibold'>
                        {recipe[0].instructionsSubheaderOne}
                      </li>
                    ) : null}
                    {recipe[0].instructionsOne.map((instruction, index) => (
                      <li key={index} className={cn('flex items-start')}>
                        <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                        <span className={cn('flex-1')}>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                  {recipe[0].instructionsSubheaderTwo ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].instructionsSubheaderTwo}
                    </p>
                  ) : null}
                  {recipe[0].instructionsTwo ? (
                    <ol className='grid gap-2 text-sm pl-6'>
                      {recipe[0].instructionsTwo.map((instruction, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  {recipe[0].instructionsSubheaderThree ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].instructionsSubheaderThree}
                    </p>
                  ) : null}
                  {recipe[0].instructionsThree ? (
                    <ol className='grid gap-2 text-sm pl-6'>
                      {recipe[0].instructionsThree.map((instruction, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  {recipe[0].instructionsSubheaderFour ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].instructionsSubheaderFour}
                    </p>
                  ) : null}
                  {recipe[0].instructionsFour ? (
                    <ol className='grid gap-2 text-sm pl-6'>
                      {recipe[0].instructionsFour.map((instruction, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  {recipe[0].instructionsSubheaderFive ? (
                    <p className='text-sm font-semibold'>
                      {recipe[0].instructionsSubheaderFive}
                    </p>
                  ) : null}
                  {recipe[0].instructionsFive ? (
                    <ol className='grid gap-2 text-sm pl-6'>
                      {recipe[0].instructionsFive.map((instruction, index) => (
                        <li key={index} className={cn('flex items-start')}>
                          <Squircle className='w-4 h-4 mr-2 inline-block text-primary' />
                          <span className={cn('flex-1')}>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
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
