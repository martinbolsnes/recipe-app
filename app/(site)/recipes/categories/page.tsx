import {
  Beef,
  CakeSlice,
  Fish,
  Martini,
  Salad,
  Wheat,
  ListPlus,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/sanity.client';
import { CategoryType } from '@/types/index';
import { categoriesQuery } from '@/sanity/sanity.query';

const icons = {
  kjøtt: <Beef className={cn('w-4 h-4 mr-2')} />,
  fisk: <Fish className={cn('w-4 h-4 mr-2')} />,
  vegetar: <Salad className={cn('w-4 h-4 mr-2')} />,
  pasta: <Wheat className={cn('w-4 h-4 mr-2')} />,
  dessert: <CakeSlice className={cn('w-4 h-4 mr-2')} />,
  drinker: <Martini className={cn('w-4 h-4 mr-2')} />,
  alle: <ListPlus className={cn('w-4 h-4 mr-2')} />,
};

export default async function Component() {
  const categories: CategoryType[] = await sanityFetch({
    query: categoriesQuery,
    tags: ['categories'],
  });
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
            {categories.map((category) => (
              <div
                key={category._id}
                className='relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg'
              >
                <Link
                  href='#'
                  className='absolute inset-0 z-10'
                  prefetch={false}
                >
                  <span className='sr-only'>
                    Se {category.name} Oppskrifter
                  </span>
                </Link>
                <Image
                  src={category?.image?.image || '/placeholder.svg'}
                  alt={category?.image?.alt}
                  width={300}
                  height={300}
                  className='[grid-area:stack] object-cover w-full aspect-square'
                />
                <div className='flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    {icons[category.icon as keyof typeof icons]}
                    <h3 className='font-semibold text-lg tracking-tight'>
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
