import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
/* import { auth } from '@/app/utils/auth'; */

import { getHero } from '@/sanity/sanity.query';
import type { HeroContentType } from '@/types';
import FeaturedSection from '../components/FeaturedSection';

export default async function LandingPage() {
  const hero: HeroContentType[] = await getHero();
  /* const session = await auth(); */

  return (
    <>
      <section className={cn('w-full py-12 md:py-24 lg:py-32')}>
        <div className={cn('container px-4 md:px-6')}>
          <div
            className={cn(
              'grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'
            )}
          >
            <div className={cn('flex flex-col justify-center space-y-4')}>
              <div className={cn('space-y-4')}>
                <h1
                  className={cn(
                    'text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
                  )}
                >
                  {hero[0].name}
                </h1>
                <p
                  className={cn('max-w-[600px] text-foreground/60 md:text-xl')}
                >
                  {hero[0].description}
                </p>
              </div>
              <div className={cn('flex flex-col gap-2 min-[400px]:flex-row')}>
                <Link href={'/login'}>
                  <Button variant='default' size='lg'>
                    Get Started
                  </Button>
                </Link>

                <Link href='/recipes'>
                  <Button variant='outline' size='lg'>
                    Explore Recipes
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              priority
              alt={hero[0].image.alt}
              className={cn(
                'mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last'
              )}
              height='450'
              src={hero[0].image.image || '/images/placeholder.jpg'}
              width='500'
              style={{ aspectRatio: '500/450', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
      <FeaturedSection />
      <section className={cn('w-full py-12 md:py-24 lg:py-32')}>
        <div className={cn('container px-4 md:px-6')}>
          <div
            className={cn(
              'flex flex-col items-center justify-center space-y-4 text-center'
            )}
          >
            <div className={cn('space-y-2')}>
              <h2
                className={cn(
                  'text-3xl font-bold tracking-tighter sm:text-5xl'
                )}
              >
                What Our Users Say
              </h2>
              <p
                className={cn(
                  'max-w-[900px] text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '
                )}
              >
                Hear from our satisfied customers about their experience with
                our recipe app.
              </p>
            </div>
            <div
              className={cn(
                'mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12'
              )}
            >
              <div
                className={cn(
                  'flex flex-col justify-between rounded-xl bg-background p-4 shadow-sm transition-all hover:shadow-md'
                )}
              >
                <blockquote
                  className={cn(
                    'text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl'
                  )}
                >
                  “This recipe app has completely transformed the way I cook.
                  The recipes are easy to follow and the results are always
                  delicious.”
                </blockquote>
                <div className={cn('pt-4')}>
                  <div className={cn('font-semibold')}>Emily Johnson</div>
                  <div className={cn('text-sm text-foreground/60')}>
                    Home Cook
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'flex flex-col justify-between rounded-xl bg-background p-4 shadow-sm transition-all hover:shadow-md '
                )}
              >
                <blockquote
                  className={cn(
                    'text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl'
                  )}
                >
                  “I never thought I could cook such amazing meals, but this app
                  has made it so easy. Im constantly impressed by the quality of
                  the recipes.”
                </blockquote>
                <div className={cn('pt-4')}>
                  <div className={cn('font-semibold')}>Michael Chen</div>
                  <div className={cn('text-sm text-foreground/60')}>
                    Busy Professional
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'flex flex-col justify-between rounded-xl bg-background p-4 shadow-sm transition-all hover:shadow-md'
                )}
              >
                <blockquote
                  className={cn(
                    'text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl'
                  )}
                >
                  “This app has completely changed the way I think about
                  cooking. The recipes are so creative and the instructions are
                  super easy to follow.”
                </blockquote>
                <div className={cn('pt-4')}>
                  <div className={cn('font-semibold')}>Sarah Lee</div>
                  <div className={cn('text-sm text-foreground/60')}>
                    Aspiring Chef
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
