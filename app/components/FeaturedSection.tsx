import { cn } from '@/lib/utils';
import Image from 'next/image';
import { getRecipe } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';
import Link from 'next/link';

export default async function FeaturedSection() {
  const featuredRecipes: RecipeType[] = await getRecipe();
  const featured = featuredRecipes
    .filter((recipe) => recipe.featured)
    .slice(0, 3);
  return (
    <section className={cn('w-full py-12 md:py-24 lg:py-32 bg-muted')}>
      <div className={cn('container px-4 md:px-6')}>
        <div
          className={cn(
            'flex flex-col items-center justify-center space-y-4 text-center'
          )}
        >
          <div className={cn('space-y-2')}>
            <h2
              className={cn(
                'text-3xl text-foreground font-bold tracking-tighter sm:text-5xl'
              )}
            >
              Featured Recipes
            </h2>
            <p
              className={cn(
                'max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
              )}
            >
              Explore our collection of delicious and easy-to-follow recipes.
            </p>
          </div>
        </div>
        <div
          className={cn(
            'mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12'
          )}
        >
          {featured.map((recipe) => (
            <Link
              key={recipe._id}
              href={`/recipes/${recipe.slug}`}
              className={cn(
                'flex flex-col justify-between rounded-md bg-background shadow-sm transition-all hover:shadow-md overflow-hidden cursor-pointer'
              )}
            >
              <div key={recipe._id}>
                <Image
                  alt={recipe.image.alt}
                  className={cn('w-full h-42 aspect-video object-cover')}
                  height='200'
                  src={recipe.image.image}
                  width='300'
                />
                <div className={cn('space-y-2 p-4')}>
                  <h3 className={cn('text-xl font-bold')}>{recipe.name}</h3>
                  <p className={cn('text-foreground/60')}>
                    {recipe.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
