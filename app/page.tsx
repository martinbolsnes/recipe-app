import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SearchInput } from './components/SearchInput';
import { DropdownMenuComponent } from './components/DropdownMenu';
import { CategoryButtons } from './components/CategoryButtons';
import { Card } from './components/Card';

export default function Page() {
  return (
    <>
      <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
        <div className={cn('flex items-center justify-between mb-4')}>
          <div className={cn('flex items-center gap-4')}>
            <SearchInput />
            <DropdownMenuComponent />
          </div>
        </div>
        <section className={cn('mb-8')}>
          <div className={cn('flex items-center justify-between mb-4')}>
            <CategoryButtons />
          </div>
          <div className={cn('flex items-center justify-end mb-4 mt-4')}>
            <div className={cn('flex items-center gap-4')}>
              <Link
                className={cn('text-primary hover:underline')}
                href='/recipes'
              >
                View all
              </Link>
            </div>
          </div>
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            )}
          >
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}
