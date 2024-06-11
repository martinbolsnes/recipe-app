'use client';

import { UtensilsIcon } from 'lucide-react';
import LoginButtonGithub from '@/app/components/Login/LoginGithub';
import LoginButtonGoogle from '@/app/components/Login/LoginGoogle';

export default function LoginPage() {
  return (
    <div className='mx-auto max-w-md space-y-6 py-12'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold flex items-center justify-center'>
          <UtensilsIcon className='mr-2 h-6 w-6' />
          MunchMate
        </h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Logg inn for å begynne. Hvis dette er første gang du logger inn, vil
          en bruker bli opprettet for deg.
        </p>
      </div>
      <LoginButtonGoogle />
      <LoginButtonGithub />
    </div>
  );
}
