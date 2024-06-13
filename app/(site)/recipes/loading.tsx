import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export default function Loading() {
  return (
    <div className={cn('container mx-auto py-8 px-4 md:px-6')}>
      <div
        className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6')}
      >
        <div className={cn('grid gap-6')}>
          <Skeleton
            className={cn(
              'h-[250px] w-[400px] aspect-[400/250] rounded-xl object-cover'
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
              'h-[250px] w-[400px] aspect-[400/250] rounded-xl object-cover'
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
              'h-[250px] w-[400px] aspect-[400/250] rounded-xl object-cover'
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
  );
}
