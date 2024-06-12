'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createClient } from '../../utils/supabase/client';
import { LoadingSpinner } from '../LoadingSpinner';
import { toast } from '@/components/ui/use-toast';

export default function LoginButtonGoogle(props: { nextUrl?: string }) {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          props.nextUrl || ''
        }`,
      },
    });
    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
      setLoading(false);
    }
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
