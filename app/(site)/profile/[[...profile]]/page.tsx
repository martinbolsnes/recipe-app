import { cn } from '@/lib/utils';
import { UserProfile } from '@clerk/nextjs';

export default async function Profile() {
  return (
    <div className={cn('flex items-center justify-center py-10')}>
      <UserProfile path='/profile' />
    </div>
  );
}
