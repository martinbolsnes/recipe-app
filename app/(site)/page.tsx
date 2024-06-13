import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/sanity.client';
import { heroQuery } from '@/sanity/sanity.query';
import type { HeroContentType } from '@/types';
import { createClient } from '../utils/supabase/server';
import FeaturedSection from '../components/FeaturedSection';
import { Utensils } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import NewRecipesSection from '../components/Recipes/NewRecipesSection';
import { Suspense } from 'react';
import { LoadingLandingCards } from '../components/LoadingLandingCards';

export default async function LandingPage() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const hero: HeroContentType[] = await sanityFetch({
    query: heroQuery,
    tags: ['hero'],
  });

  return (
    <main className={cn('min-h-screen')}>
      <section
        className={cn(
          'mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'
        )}
      >
        <div className={cn('container px-4 md:px-6')}>
          <div
            className={cn(
              'flex flex-col items-center justify-center space-y-8 text-center'
            )}
          >
            <Badge
              variant='secondary'
              className='font-urbanist font-medium text-sm'
            >
              <Utensils className={cn('w-3 h-3 mr-1')} /> munchmate
            </Badge>
            <div
              className={cn(
                'flex flex-col justify-center items-center space-y-8'
              )}
            >
              <div
                className={cn(
                  'space-y-8 flex flex-col items-center justify-center'
                )}
              >
                <h1
                  className={cn(
                    'text-4xl font-bold tracking-tighter md:text-5xl'
                  )}
                >
                  {hero[0].name}
                </h1>
                <p
                  className={cn(
                    'max-w-[750px] text-center md:text-xl text-foreground'
                  )}
                >
                  {hero[0].description}
                </p>
              </div>
              <div
                className={cn(
                  'flex w-full items-center justify-center space-x-4 py-4 md:pb-10'
                )}
              >
                {user ? (
                  <Link href={'/recipes'}>
                    <Button
                      variant='default'
                      size='lg'
                      className={cn('font-bold')}
                    >
                      Kom i gang
                    </Button>
                  </Link>
                ) : (
                  <Link href={'/login'}>
                    <Button
                      variant='default'
                      size='lg'
                      className={cn('font-bold')}
                    >
                      Kom i gang
                    </Button>
                  </Link>
                )}
                <Link href='/recipes'>
                  <Button
                    variant='outline'
                    size='lg'
                    className={cn('font-bold')}
                  >
                    Utforsk oppskrifter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<LoadingLandingCards />}>
        <FeaturedSection />
      </Suspense>
      <Suspense fallback={<LoadingLandingCards />}>
        <NewRecipesSection />
      </Suspense>
    </main>
  );
}
