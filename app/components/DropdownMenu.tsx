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
import { Filter, Fish, Beef, Wheat, Salad } from 'lucide-react';

export const DropdownMenuComponent = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='default' variant='outline'>
            <Filter className={cn('w-4 h-4 mr-2')} />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={cn('w-56 p-2')}>
          <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <Salad className={cn('w-4 h-4 mr-2')} />
            Veggie
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Beef className={cn('w-4 h-4 mr-2')} />
            Meat
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Fish className={cn('w-4 h-4 mr-2')} />
            Fish
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Wheat className={cn('w-4 h-4 mr-2')} />
            Pasta
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
