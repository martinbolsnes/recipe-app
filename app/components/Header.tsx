import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { auth } from '../../auth';
import { Menu, PartyPopper, Plus, Utensils } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import UserAvatar from './UseAvatar';

export const Header = async () => {
  const session = await auth();
  return (
    <header
      className={cn(
        'bg-white shadow-md px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-10'
      )}
    >
      <div>
        <Link href='/' className={cn('flex items-center gap-2')}>
          <Utensils className={cn('w-4 h-4 text-primary')} />
          <h1 className={cn('text-lg font-bold')}>MunchMate</h1>
        </Link>
      </div>
      <div className={cn('flex items-center gap-4')}>
        {session?.user ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <UserAvatar />
              </TooltipTrigger>
              <TooltipContent>
                <div className={cn('flex flex-col gap-4')}>
                  <Link href='/'>Profile</Link>
                  <Link href='/'>Settings</Link>
                  <Link href='/logout'>Logout</Link>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Link href='/login'>
            <Button size='sm' variant='outline'>
              Login
            </Button>
          </Link>
        )}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost'>
              <Menu className={cn('w-6 h-6')} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className={cn('flex')}>
              <Link href='/' className={cn('flex items-center gap-2')}>
                <Utensils className={cn('w-4 h-4 text-primary')} />
                <h1 className={cn('text-lg font-bold')}>MunchMate</h1>
              </Link>
            </SheetHeader>
            <div className={cn('flex flex-col items-end gap-4 py-6 text-lg')}>
              <SheetTrigger asChild>
                <Link href='/recipes'>All recipes</Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href='/recipes'>Categories</Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href='/recipes'>About</Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href='/recipes'>FAQ</Link>
              </SheetTrigger>
            </div>
            <div className={cn('py-4 flex flex-col w-full gap-4')}>
              <Button size='default' variant='default'>
                <PartyPopper className={cn('w-4 h-4 mr-2')} />
                Surprise Me
              </Button>
              <Button size='default' variant='secondary'>
                <Plus className={cn('w-4 h-4 mr-2')} />
                Add Recipe
              </Button>
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
