import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { auth, currentUser } from '@clerk/nextjs/server';
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

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const Header = async () => {
  const { userId } = auth();
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
        {userId ? (
          <SignedIn>
            <UserButton />
          </SignedIn>
        ) : (
          <SignedOut>
            <SignInButton />
          </SignedOut>
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
              {/* <SheetTrigger asChild>
                <Link href='/recipes/categories'>Kategorier</Link>
              </SheetTrigger> */}
              {userId ? (
                <>
                  {/* <Separator />
                  <SheetTrigger asChild>
                    <Link href='/profile'>Profil</Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link href='/user/view-recipe'>Dine oppskrifter</Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link href='/user/add-recipe'>Legg til oppskrift</Link>
                  </SheetTrigger> */}
                </>
              ) : (
                <>
                  <Separator />
                  <SheetTrigger asChild>
                    <Link href='/sign-up'>Registrer deg</Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link href='/sign-in'>Logg inn</Link>
                  </SheetTrigger>
                </>
              )}
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
