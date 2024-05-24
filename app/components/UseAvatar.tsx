import { auth } from '../../auth';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      {session?.user.image && (
        <Avatar className={cn('w-8 h-8')}>
          <AvatarImage src={session?.user.image} alt={session?.user.image} />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
