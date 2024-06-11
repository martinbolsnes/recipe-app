import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '../../utils/supabase/server';
import { cn } from '@/lib/utils';
import LogoutButton from '@/app/components/Logout/Logout';

export default async function PrivatePage() {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
      <div className={cn('flex mb-4 h-screen')}>
        <p>{data.user?.user_metadata?.full_name}</p>
        <LogoutButton />
      </div>
    </main>
  );
}
