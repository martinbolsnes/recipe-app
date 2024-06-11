'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createClient } from '../../utils/supabase/client';
import { LoadingSpinner } from '../LoadingSpinner';

export default function LoginButtonGoogle(props: { nextUrl?: string }) {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleLogin = async () => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          props.nextUrl || ''
        }`,
      },
    });
    setLoading(false);
  };

  return (
    <Button variant='default' className='w-full' onClick={handleLogin}>
      {loading ? (
        <LoadingSpinner fill='fill-neutral-900' />
      ) : (
        'Logg inn med Google'
      )}
    </Button>
  );
}
