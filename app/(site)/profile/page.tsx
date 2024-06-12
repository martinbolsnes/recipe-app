import { redirect } from 'next/navigation';

import { createClient } from '../../utils/supabase/server';
import { cn } from '@/lib/utils';
import LogoutButton from '@/app/components/Logout/Logout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AccountForm from './update-username/page';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <main className={cn('container mx-auto py-8 px-4 md:px-6 h-screen')}>
      <div className={cn('flex items-center justify-between')}>
        <h1 className={cn('text-xl font-bold')}>Din profil</h1>
        <LogoutButton />
      </div>
      <div className={cn('flex flex-col my-20 md:w-1/3')}>
        <div className={cn('space-y-4')}>
          <Avatar className='w-32 h-32'>
            <AvatarImage src={data.user?.user_metadata?.avatar_url} />
            <AvatarFallback>{data.user?.user_metadata?.name}</AvatarFallback>
          </Avatar>
          <div className={cn('space-y-2')}>
            <Label htmlFor='name'>Navn</Label>
            <Input
              name='name'
              value={data.user?.user_metadata?.name}
              disabled
            />
          </div>
          <div className={cn('space-y-2')}>
            <Label htmlFor='email'>Mail</Label>
            <Input value={data.user?.user_metadata?.email} disabled />
          </div>

          <AccountForm user={data.user} />
        </div>
      </div>
    </main>
  );
}
