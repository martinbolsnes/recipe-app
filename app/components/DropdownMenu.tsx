import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react';

export const DropdownMenuComponent = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='sm' variant='outline'>
            <Filter className={cn('w-4 h-4 mr-2')} />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={cn('w-56 p-2')}>
          <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>Veggie</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Meat</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Fish</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Pasta</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
