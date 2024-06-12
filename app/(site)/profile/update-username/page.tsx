'use client';
import { useCallback, useEffect, useState } from 'react';
import { createClient } from '../../../utils/supabase/client';
import type { User } from '@supabase/supabase-js';
import { LoadingSpinner } from '@/app/components/LoadingSpinner';
import { toast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      toast({
        title: 'Feil',
        description: 'Noe gikk galt. Vennligst prøv igjen.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({ username }: { username: string | null }) {
    try {
      setLoading(true);

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        username,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      toast({
        title: 'Oppdatert! 🎉',
        description: 'Profilen din er nå oppdatert.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'Oops! 😬',
        description: 'Brukernavnet må være minst 3 tegn langt. Prøv igjen.',
        variant: 'warning',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='form-widget'>
      <div>
        <Label htmlFor='username'>Brukernavn</Label>
        <Input
          id='username'
          type='text'
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <Button
          variant='default'
          className='mt-4'
          onClick={() => updateProfile({ username })}
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : 'Oppdater brukernavn'}
        </Button>
      </div>
    </div>
  );
}
