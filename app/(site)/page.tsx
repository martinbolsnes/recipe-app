import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
/* import { auth } from '@/app/utils/auth'; */

import { getHero } from '@/sanity/sanity.query';
import type { HeroContentType } from '@/types';
import FeaturedSection from '../components/FeaturedSection';
import { Utensils } from 'lucide-react';

export default async function LandingPage() {
  const hero: HeroContentType[] = await getHero();
  /* const session = await auth(); */

  return (
    <>
      <section className={cn('w-full py-12 md:py-24 lg:py-32 h-screen')}>
        <div className={cn('container px-4 md:px-6')}>
          <div
            className={cn(
              'flex flex-col items-center justify-center space-y-8 text-center'
            )}
          >
            <Utensils className={cn('w-20 h-20 text-primary')} />
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
                    'text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
                  )}
                >
                  {hero[0].name}
                </h1>
                <p
                  className={cn('max-w-[650px] text-foreground/60 md:text-2xl')}
                >
                  {hero[0].description}
                </p>
              </div>
              <div className={cn('flex flex-col gap-2 min-[400px]:flex-row')}>
                <Link href={'/login'}>
                  <Button variant='default' size='lg'>
                    Start reisen
                  </Button>
                </Link>

                <Link href='/recipes'>
                  <Button variant='outline' size='lg'>
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
    </>
  );
}
