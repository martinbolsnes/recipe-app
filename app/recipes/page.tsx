import { cn } from '@/lib/utils';
import {
  CheckIcon,
  CircleDot,
  Dot,
  Grip,
  GripVertical,
  Squircle,
  StarIcon,
} from 'lucide-react';
import Image from 'next/image';

export default function Recipe() {
  return (
    <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
      <div
        className={cn(
          'grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6'
        )}
      >
        <div className={cn('grid gap-6')}>
          <Image
            alt='Dish Image'
            className={cn('rounded-lg object-cover w-full')}
            height='600'
            src='/placeholder.svg'
            style={{
              aspectRatio: '800/600',
              objectFit: 'cover',
            }}
            width='800'
          />
          <div className={cn('grid gap-4')}>
            <h1 className={cn('text-3xl font-bold')}>
              Creamy Garlic Parmesan Chicken
            </h1>
            <p className={cn('text-gray-500')}>
              A delicious and easy-to-make pasta dish with a creamy garlic
              sauce.
            </p>
            <div className={cn('flex items-center gap-2')}>
              <div className={cn('flex items-center gap-0.5')}>
                <StarIcon className={cn('w-5 h-5 fill-primary')} />
                <StarIcon className={cn('w-5 h-5 fill-primary')} />
                <StarIcon className={cn('w-5 h-5 fill-primary')} />
                <StarIcon
                  className={cn('w-5 h-5 fill-muted stroke-muted-foreground')}
                />
                <StarIcon
                  className={cn('w-5 h-5 fill-muted stroke-muted-foreground')}
                />
              </div>
              <span className={cn('text-sm text-gray-500 dark:text-gray-400')}>
                (4.2 / 5)
              </span>
            </div>
            <div className={cn('grid gap-2')}>
              <h2 className={cn('text-xl font-semibold')}>Ingredients</h2>
              <ul className={cn('grid gap-1 text-sm')}>
                <li>
                  <CircleDot
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  4 boneless, skinless chicken breasts
                </li>
                <li>
                  <GripVertical
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  1/2 cup grated Parmesan cheese
                </li>
                <li>
                  <Dot
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  2 tablespoons butter
                </li>
                <li>
                  <Squircle
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  3 cloves garlic, minced
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  1 cup heavy cream
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  Salt and pepper to taste
                </li>
              </ul>
            </div>
            <div className={cn('grid gap-2')}>
              <h2 className={cn('text-xl font-semibold')}>Instructions</h2>
              <ol className={cn('grid gap-2 text-sm')}>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  Preheat oven to 375°F.
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  In a large oven-safe skillet, melt the butter over medium
                  heat.
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  Add the garlic and cook for 1 minute, until fragrant.
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  Add the chicken breasts and cook for 2-3 minutes per side,
                  until lightly browned.
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  Pour the heavy cream over the chicken and sprinkle with
                  Parmesan cheese.
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  Bake in the preheated oven for 20-25 minutes, until the
                  chicken is cooked through and the sauce is thickened.
                </li>
                <li>
                  <CheckIcon
                    className={cn('w-4 h-4 mr-2 inline-block text-primary')}
                  />
                  Season with salt and pepper to taste.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
