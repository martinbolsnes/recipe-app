'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';
import { LoadingSpinner } from '../LoadingSpinner';

export default function LoginButtonGithub(props: { nextUrl?: string }) {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleLogin = async () => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          props.nextUrl || ''
        }`,
      },
    });
    setLoading(false);
  };

  return (
    <Button variant='secondary' className='w-full' onClick={handleLogin}>
      {loading ? <LoadingSpinner /> : 'Logg inn med Github'}
    </Button>
  );
}
