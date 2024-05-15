import { cn } from '@/lib/utils';
import { SearchInput } from '../components/SearchInput';
import { DropdownMenuComponent } from '../components/DropdownMenu';
import { CategoryButtons } from '../components/CategoryButtons';
import { Suspense } from 'react';
import Card from '../components/Card';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
        <div className={cn('flex items-center justify-between mb-4')}>
          <div className={cn('flex items-center gap-4')}>
            <SearchInput placeholder='Search recipe...' />
            <DropdownMenuComponent />
          </div>
        </div>
        <section className={cn('mb-8')}>
          <div className={cn('flex items-center justify-between mb-4')}>
            <CategoryButtons />
          </div>
          <div className={cn('flex items-center justify-end mb-4 mt-4')}></div>
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            )}
          >
            <Suspense key={query + currentPage}>
              <Card query={query} currentPage={currentPage} />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}
