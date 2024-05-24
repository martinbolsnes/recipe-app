import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export default function Loading() {
  return (
    <div className={cn('container mx-auto py-8 px-4 md:px-6')}>
      <div
        className={cn(
          'grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6'
        )}
      >
        <div className={cn('grid gap-6')}>
          <Skeleton
            className={cn(
              'h-[250px] aspect-[800/600] rounded-xl w-full object-cover'
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
