import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Weight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <div
      className={cn(
        'mx-auto max-w-[980px] py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'
      )}
    >
      <div className={cn('container px-4 md:px-6')}>
        <div className={cn('grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16')}>
          <div className={cn('flex flex-col justify-center space-y-4')}>
            <h1
              className={cn(
                'text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl'
              )}
            >
              Vi er din oppskrift på suksess
            </h1>
            <p className={cn('md:text-xl text-foreground')}>
              Munchmate er en app for matentusiaster som ønsker å utforske nye
              smaker og oppleve spennende retter. Søk etter oppskrifter basert
              på matkategorier og bli inspirert til å lage deilige måltider.
              <br />
              <br />
              Flere funksjoner kommer snart!
            </p>
          </div>
          <Image
            src='/about-picture-3.webp'
            width='550'
            height='310'
            alt='Feature'
            className={cn(
              'mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full'
            )}
          />
        </div>
      </div>
      <div className={cn('flex-1')}>
        <section className={cn('w-full py-12 md:py-20 lg:py-24')}>
          <div className={cn('container px-4 md:px-6')}>
            <div
              className={cn('grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16')}
            >
              <div>
                <h2
                  className={cn(
                    'text-2xl font-bold tracking-tighter sm:text-4xl'
                  )}
                >
                  Finn din neste favorittoppskrift
                </h2>
                <p className={cn('mt-4 md:text-xl text-foreground')}>
                  Vi legger ut nye oppskrifter hver uke, så det er alltid noe
                  nytt å prøve. Utforsk vårt utvalg av retter og finn din neste
                  favorittoppskrift.
                </p>
              </div>
              <Image
                src='/about-picture.webp'
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
        <section className={cn('w-full py-12 md:py-20 lg:py-24')}>
          <div className={cn('container px-4 md:px-6')}>
            <div
              className={cn('grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16')}
            >
              <Weight className={cn('mx-auto w-24 h-24 lg:w-32 lg:h-32')} />
              <div>
                <h2
                  className={cn(
                    'text-2xl font-bold tracking-tighter sm:text-4xl'
                  )}
                >
                  Nyttige verktøy for matlaging
                </h2>
                <p className={cn('text-foreground mt-4 md:text-xl')}>
                  Få tilgang til nyttige verktøy som måleenhetskonvertering. Med
                  Munchmate har du alt du trenger for å lage deilige måltider.
                </p>
              </div>
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
                    'text-2xl font-bold tracking-tighter sm:text-4xl'
                  )}
                >
                  Brukervennlig opplevelse
                </h2>
                <p className={cn('text-foreground mt-4 md:text-xl')}>
                  Munchmate er designet for å være enkel og intuitiv å bruke.
                  Enten du er en erfaren kokk eller en nybegynner, vil du elske
                  vår app.
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
              'container items-center space-y-6 px-4 md:px-6 lg:space-y-8'
            )}
          >
            <div className={cn('space-y-2')}>
              <h2
                className={cn(
                  'text-2xl font-bold tracking-tighter md:text-4xl/tight'
                )}
              >
                Utforsk våre oppskrifter
              </h2>
              <p
                className={cn(
                  'max-w-[600px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
                )}
              >
                Utforsk vårt utvalg av retter og finn din neste
                favorittoppskrift. Kom i gang med matlagingen i dag!
              </p>
            </div>
            <div className={cn('flex gap-2')}>
              <Link href='/recipes' prefetch={false}>
                <Button size='lg'>Utforsk oppskrifter</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
