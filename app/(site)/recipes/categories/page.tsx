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

export default async function Categories() {
  const categories: CategoryType[] = await sanityFetch({
    query: categoriesQuery,
    tags: ['categories'],
  });
  return (
    <main>
      <section className={cn('w-full py-12 md:py-16 lg:py-20')}>
        <div className={cn('container grid gap-6 md:gap-8 px-4 md:px-6')}>
          <div
            className={cn(
              'flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'
            )}
          >
            <h1 className={cn('text-2xl font-bold tracking-tight')}>
              Utforsk våre kategorier
            </h1>
            <p className={cn('text-foreground/60')}>
              Oppdag nye oppskrifter og inspirasjon fra våre kategorier
            </p>
          </div>
          <div
            className={cn(
              'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8'
            )}
          >
            {categories.map((category) => (
              <div
                key={category._id}
                className={cn('relative group grid overflow-hidden rounded-lg')}
              >
                <Link
                  href={`/recipes/categories/${category.name.toLowerCase()}`}
                  className={cn('absolute inset-0 z-10')}
                  prefetch={false}
                >
                  <span className={cn('sr-only')}>
                    Se {category.name} Oppskrifter
                  </span>
                </Link>
                <Image
                  src={category?.image?.image || '/placeholder.svg'}
                  alt={category?.image?.alt}
                  width={300}
                  height={300}
                  className={cn('object-cover w-full aspect-square')}
                />
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-6 flex flex-col justify-end gap-2'
                  )}
                >
                  <div className={cn('flex items-center gap-2')}>
                    {icons[category.icon as keyof typeof icons]}
                    <h3 className={cn('font-semibold text-lg tracking-tight')}>
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
