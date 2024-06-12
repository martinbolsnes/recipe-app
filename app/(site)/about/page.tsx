import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Utensils, Weight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className={cn('min-h-screen mx-auto')}>
      <div className={cn('w-full')}>
        <div className={cn('container px-4 md:px-6 py-24')}>
          <div className={cn('grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16')}>
            <div className={cn('flex flex-col justify-center space-y-4')}>
              <h1
                className={cn(
                  'text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
                )}
              >
                Vi er din oppskrift på suksess
              </h1>
              <p className={cn('md:text-xl')}>
                MunchMate er en app for matentusiaster som ønsker å utforske nye
                smaker og oppleve spennende retter. Søk etter oppskrifter basert
                på matkategorier og bli inspirert til å lage deilige måltider.
                <br />
                <br />
                Flere funksjoner kommer snart!
              </p>
            </div>
            <Utensils className={cn('mx-auto w-32 h-32 text-primary')} />
          </div>
        </div>
        <div className={cn('flex-1')}>
          <section className={cn('w-full py-12 md:py-20 lg:py-24')}>
            <div className={cn('container px-4 md:px-6')}>
              <div
                className={cn('grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16')}
              >
                <Image
                  src='/about-picture.webp'
                  width='550'
                  height='310'
                  alt='Feature'
                  className={cn(
                    'mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full'
                  )}
                />
                <div>
                  <h2
                    className={cn(
                      'text-3xl font-bold tracking-tighter sm:text-4xl'
                    )}
                  >
                    Finn din neste favorittoppskrift
                  </h2>
                  <p className={cn('mt-4 md:text-xl')}>
                    Vi legger ut nye oppskrifter hver uke, så det er alltid noe
                    nytt å prøve. Utforsk vårt utvalg av retter og finn din
                    neste favorittoppskrift.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={cn('w-full py-12 md:py-20 lg:py-24 bg-muted')}>
            <div className={cn('container px-4 md:px-6')}>
              <div
                className={cn('grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16')}
              >
                <div>
                  <h2
                    className={cn(
                      'text-3xl font-bold tracking-tighter sm:text-4xl'
                    )}
                  >
                    Nyttige verktøy for matlaging
                  </h2>
                  <p
                    className={cn(
                      'text-gray-500 dark:text-gray-400 mt-4 md:text-xl'
                    )}
                  >
                    Få tilgang til nyttige verktøy som måleenhetskonvertering.
                    Med MunchMate har du alt du trenger for å lage deilige
                    måltider.
                  </p>
                </div>
                <Weight className={cn('mx-auto w-32 h-32')} />
              </div>
            </div>
          </section>
          <section className={cn('w-full py-12 md:py-20 lg:py-24')}>
            <div className={cn('container px-4 md:px-6')}>
              <div
                className={cn('grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16')}
              >
                <div>
                  <h2
                    className={cn(
                      'text-3xl font-bold tracking-tighter sm:text-4xl'
                    )}
                  >
                    Brukervennlig opplevelse
                  </h2>
                  <p
                    className={cn(
                      'text-gray-500 dark:text-gray-400 mt-4 md:text-xl'
                    )}
                  >
                    MunchMate er designet for å være enkel og intuitiv å bruke.
                    Enten du er en erfaren kokk eller en nybegynner, vil du
                    elske vår app.
                  </p>
                </div>
                <Image
                  src='/about-picture-2.webp'
                  width='550'
                  height='310'
                  alt='Feature'
                  className={cn(
                    'mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full'
                  )}
                />
              </div>
            </div>
          </section>
          <section className={cn('w-full py-12 md:py-24 lg:py-32')}>
            <div
              className={cn(
                'container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'
              )}
            >
              <div className={cn('space-y-2')}>
                <h2
                  className={cn(
                    'text-3xl font-bold tracking-tighter md:text-4xl/tight'
                  )}
                >
                  Utforsk våre oppskrifter
                </h2>
                <p
                  className={cn(
                    'max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '
                  )}
                >
                  Utforsk vårt utvalg av retter og finn din neste
                  favorittoppskrift. Kom i gang med matlagingen i dag!
                </p>
              </div>
              <div
                className={cn(
                  'flex flex-col gap-2 min-[400px]:flex-row lg:justify-end'
                )}
              >
                <Link href='/recipes' prefetch={false}>
                  <Button>Utforsk oppskrifter</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
