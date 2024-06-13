import { createClient } from '../utils/supabase/server';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, PartyPopper, Plus, Utensils } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Avatar from './Profile/Avatar';

export const Header = async () => {
  const {
    data: { user },
    error,
  } = await createClient().auth.getUser();

  return (
    <header
      className={cn(
        'bg-background shadow-md px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-10'
      )}
    >
      <div>
        <Link href='/' className={cn('flex items-center gap-2')}>
          <Utensils className={cn('w-4 h-4 text-primary')} />
          <h1 className={cn('text-lg font-bold')}>MunchMate</h1>
        </Link>
      </div>
      <div className={cn('flex items-center gap-4')}>
        {user ? (
          <Avatar />
        ) : (
          <Link href='/login'>
            <Button variant='outline'>Logg inn</Button>
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
                <Link href='/recipes'>Oppskrifter</Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href='/about'>Om oss</Link>
              </SheetTrigger>
              <>
                <Separator />
                {user ? (
                  <>
                    <SheetTrigger asChild>
                      <Link href='/profile'>Profil</Link>
                    </SheetTrigger>
                    {/* <SheetTrigger asChild>
                    <Link href='/user/view-recipe'>Dine oppskrifter</Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link href='/user/add-recipe'>Legg til oppskrift</Link>
                  </SheetTrigger> */}
                  </>
                ) : (
                  <Link href='/login'>Logg inn</Link>
                )}
              </>
            </div>
            <div className={cn('py-4 flex flex-col w-full gap-4')}>
              {/* <Button size='default' variant='default'>
                <PartyPopper className={cn('w-4 h-4 mr-2')} />
                Surprise Me
              </Button> */}
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
