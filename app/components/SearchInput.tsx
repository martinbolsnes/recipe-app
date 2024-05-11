import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

export const SearchInput = () => {
  return (
    <div className={cn('relative w-full max-w-md')}>
      <Search
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500'
        )}
      />
      <Input
        className={cn(
          'pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary'
        )}
        placeholder='Search recipes...'
        type='search'
      />
    </div>
  );
};
