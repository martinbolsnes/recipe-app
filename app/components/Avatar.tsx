import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createSupabaseServerClient } from '../utils/supabase/server';
import Link from 'next/link';

export default async function AvatarComponent() {
  const supabase = createSupabaseServerClient();
  const { data: user, error } = await supabase.auth.getUser();

  return (
    <Link href='/profile'>
      <Avatar className='w-6 h-6'>
        <AvatarImage
          src={user.user?.user_metadata?.avatar_url}
          alt='User avatar'
        />
        <AvatarFallback>MM</AvatarFallback>
      </Avatar>
    </Link>
  );
}
