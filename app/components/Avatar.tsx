import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createClient } from '../utils/supabase/server';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default async function AvatarComponent() {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.getUser();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href='/profile'>
            <Avatar className='w-6 h-6'>
              <AvatarImage
                src={user.user?.user_metadata?.avatar_url}
                alt='User avatar'
              />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Profil</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
