import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { RecipeType } from '@/types';

export function AllRecipesCard({ recipe }: { recipe: RecipeType }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      key={recipe._id}
      className={cn(
        'bg-background border border-primary rounded-md shadow-md transition-all hover:shadow-lg overflow-hidden'
      )}
    >
      <div className={cn('relative')}>
        <Image
          alt={recipe.image?.alt}
          className={cn('w-full h-48 object-cover')}
          height={250}
          src={recipe.image?.image}
          style={{
            aspectRatio: '400/250',
            objectFit: 'cover',
          }}
          width={400}
        />
      </div>
      <div className={cn('p-4')}>
        <h3 className={cn('text-lg font-bold mb-2')}>{recipe.name}</h3>
        <p className={cn('text-neutral-500 mb-4')}>{recipe.shortDescription}</p>
      </div>
    </Link>
  );
}
