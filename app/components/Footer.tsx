import { cn } from '@/lib/utils';
import { Utensils } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '../utils/supabase/server';

export const Footer = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className='pr-6 pt-6 pb-6 md:py-12 w-full bg-muted'>
      <div className='container grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm mt-4'>
        <div className='grid gap-2'>
          <h3 className='font-semibold text-base'>Info</h3>
          <Link href='/about' prefetch={false}>
            Om oss
          </Link>
        </div>
        <div className='grid gap-2'>
          <h3 className='font-semibold text-base'>Oppskrifter</h3>
          <Link href='/recipes' prefetch={false}>
            Alle Oppskrifter
          </Link>
          {/* <Link href='/recipes/categories' prefetch={false}>
            Kategorier
          </Link> */}
        </div>
        {user?.user ? (
          <div className='grid gap-2'>
            <h3 className='font-semibold text-base'>Konto</h3>
            <Link href='/profile'>Profil</Link>
          </div>
        ) : (
          <div className='grid gap-2'>
            <h3 className='font-semibold text-base'>Konto</h3>
            <Link href='/login'>Logg inn</Link>
          </div>
        )}
      </div>
      <div className='container mt-24'>
        <Link href='/'>
          <h3 className='font-urbanist font-medium flex items-center text-lg'>
            <Utensils className={cn('w-4 h-4 text-primary mr-2')} />
            munchmate
          </h3>
        </Link>
        <p className='text-sm mt-4'>
          &copy; {getCurrentYear()} Martin Bolsønes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
