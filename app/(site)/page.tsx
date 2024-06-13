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
            <Badge variant='secondary'>
              <Utensils className={cn('w-3 h-3 mr-1')} /> MunchMate
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
            {/* <Image
              priority
              alt={hero[0].image.alt}
              className={cn(
                'mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-1/2 lg:order-last'
              )}
              height='250'
              src={hero[0].image.image || '/images/placeholder.jpg'}
              width='300'
              style={{ aspectRatio: '300/250', objectFit: 'cover' }}
            /> */}
          </div>
        </div>
      </section>
      <FeaturedSection />
      <NewRecipesSection />
    </main>
  );
}
