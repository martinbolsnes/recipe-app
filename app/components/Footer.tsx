import { cn } from '@/lib/utils';
import { Utensils } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '../utils/supabase/server';

export const Footer = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  return (
    <footer className='p-6 md:py-12 w-full bg-muted'>
      <div className='container max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm'>
        <div className='grid gap-1'>
          <Link href='/'>
            <h3 className='font-semibold flex'>
              <Utensils className={cn('w-4 h-4 text-primary mr-2')} />
              MunchMate
            </h3>
          </Link>
          {/* <Link href='#' prefetch={false}>
            Om oss
          </Link> */}
        </div>
        <div className='grid gap-1'>
          {/* <h3 className='font-semibold'>Oppskrifter</h3> */}
          <Link href='/recipes' prefetch={false}>
            Oppskrifter
          </Link>
          {/* <Link href='/recipes/categories' prefetch={false}>
            Kategorier
          </Link> */}
        </div>
        {user?.user ? (
          <div className='grid gap-1'>
            <Link href='/profile'>Profil</Link>
          </div>
        ) : (
          <div className='grid gap-1'>
            <Link href='/login'>Logg inn</Link>
          </div>
        )}
      </div>
    </footer>
  );
};
