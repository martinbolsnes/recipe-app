import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export const LoadingLandingCards = () => {
  return (
    <section className={cn('w-full py-8 md:py-20 lg:py-24')}>
      <div className={cn('container px-4 md:px-6')}>
        <div
          className={cn(
            'mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12'
          )}
        >
          <div className={cn('grid gap-6')}>
            <Skeleton
              className={cn(
                'h-[200px] w-[300px] aspect-viedo rounded-xl object-cover'
              )}
            />
            <div className={cn('grid gap-4')}>
              <Skeleton className={cn('h-6 w-[250px]')} />
              <Skeleton className={cn('h-4 w-[200px]')} />
              <Skeleton className={cn('h-4 w-[200px]')} />
            </div>
          </div>
          <div className={cn('grid gap-6')}>
            <Skeleton
              className={cn(
                'h-[200px] w-[300px] aspect-viedo rounded-xl object-cover'
              )}
            />
            <div className={cn('grid gap-4')}>
              <Skeleton className={cn('h-6 w-[250px]')} />
              <Skeleton className={cn('h-4 w-[200px]')} />
              <Skeleton className={cn('h-4 w-[200px]')} />
            </div>
          </div>
          <div className={cn('grid gap-6')}>
            <Skeleton
              className={cn(
                'h-[200px] w-[300px] aspect-viedo rounded-xl object-cover'
              )}
            />
            <div className={cn('grid gap-4')}>
              <Skeleton className={cn('h-6 w-[250px]')} />
              <Skeleton className={cn('h-4 w-[200px]')} />
              <Skeleton className={cn('h-4 w-[200px]')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
