import {
  BeefIcon,
  DessertIcon,
  FishIcon,
  Martini,
  SaladIcon,
  WheatIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  return (
    <main>
      <section className='w-full py-12 md:py-16 lg:py-20'>
        <div className='container grid gap-6 md:gap-8 px-4 md:px-6'>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
            <h1 className='text-2xl font-bold tracking-tight'>
              Utforsk våre kategorier
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Oppdag nye oppskrifter og inspirasjon fra våre kategorier
            </p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8'>
            <div className='relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg'>
              <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
                <span className='sr-only'>Se Vegetar Oppskrifter</span>
              </Link>
              <Image
                src='/placeholder.svg'
                alt='Breakfast'
                width={300}
                height={300}
                className='[grid-area:stack] object-cover w-full aspect-square'
              />
              <div className='flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <SaladIcon className='w-6 h-6' />
                  <h3 className='font-semibold text-lg tracking-tight'>
                    Vegetar
                  </h3>
                </div>
              </div>
            </div>
            <div className='relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg'>
              <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
                <span className='sr-only'>Se Kjøtt Oppskrifter</span>
              </Link>
              <Image
                src='/placeholder.svg'
                alt='Lunch'
                width={300}
                height={300}
                className='[grid-area:stack] object-cover w-full aspect-square'
              />
              <div className='flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BeefIcon className='w-6 h-6' />
                  <h3 className='font-semibold text-lg tracking-tight'>
                    Kjøtt
                  </h3>
                </div>
              </div>
            </div>
            <div className='relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg'>
              <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
                <span className='sr-only'>Se Fisk Recipes</span>
              </Link>
              <Image
                src='/placeholder.svg'
                alt='Dinner'
                width={300}
                height={300}
                className='[grid-area:stack] object-cover w-full aspect-square'
              />
              <div className='flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <FishIcon className='w-6 h-6' />
                  <h3 className='font-semibold text-lg tracking-tight'>Fisk</h3>
                </div>
              </div>
            </div>
            <div className='relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg'>
              <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
                <span className='sr-only'>Se Pasta Oppskrifter</span>
              </Link>
              <Image
                src='/placeholder.svg'
                alt='Dessert'
                width={300}
                height={300}
                className='[grid-area:stack] object-cover w-full aspect-square'
              />
              <div className='flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <WheatIcon className='w-6 h-6' />
                  <h3 className='font-semibold text-lg tracking-tight'>
                    Pasta
                  </h3>
                </div>
              </div>
            </div>
            <div className='relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg'>
              <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
                <span className='sr-only'>Se Dessert Oppskrifter</span>
              </Link>
              <Image
                src='/placeholder.svg'
                alt='Appetizer'
                width={300}
                height={300}
                className='[grid-area:stack] object-cover w-full aspect-square'
              />
              <div className='flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <DessertIcon className='w-6 h-6' />
                  <h3 className='font-semibold text-lg tracking-tight'>
                    Dessert
                  </h3>
                </div>
              </div>
            </div>
            <div className='relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg'>
              <Link href='#' className='absolute inset-0 z-10' prefetch={false}>
                <span className='sr-only'>Se Drinker Oppskrifter</span>
              </Link>
              <Image
                src='/placeholder.svg'
                alt='Salad'
                width={300}
                height={300}
                className='[grid-area:stack] object-cover w-full aspect-square'
              />
              <div className='flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <Martini className='w-6 h-6' />
                  <h3 className='font-semibold text-lg tracking-tight'>
                    Drinker
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
