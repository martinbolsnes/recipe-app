import { ArrowLeftIcon, Github, UtensilsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signIn } from '@/auth';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main
      className={cn(
        'mx-auto max-w-md space-y-6 py-12 h-screen flex flex-col items-center justify-center'
      )}
    >
      <Link href='/'>
        <Button
          variant='outline'
          className={cn('text-base absolute top-8 left-6')}
        >
          <ArrowLeftIcon className={cn('w-4 h-4 mr-2')} />
          Go back
        </Button>
      </Link>

      <div className={cn('space-y-2 text-center')}>
        <h1
          className={cn('text-3xl font-bold flex items-center justify-center')}
        >
          <UtensilsIcon className={cn('mr-2 h-6 w-6')} />
          MunchMate
        </h1>
        <p className={cn('text-neutral-500 dark:text-neutral-400')}>
          Log in to get started.
        </p>
      </div>
      <div className={cn('flex flex-col gap-4 items-center')}>
        <form
          action={async () => {
            'use server';
            await signIn('github', { redirectTo: '/recipes' });
          }}
        >
          <Button variant='default' type='submit'>
            <Github className={cn('w-4 h-4 mr-2')} />
            Login with Github
          </Button>
        </form>
        {/* <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          <Button variant='secondary' type='submit'>
            Login with Google
          </Button>
        </form> */}
        {/* <div className={cn("space-y-2")}>
                <Label htmlFor={cn("email")}>Email</Label>
                <Input id={cn("email")} placeholder={cn("m@example.com")} required type={cn("email")} />
            </div>
            <div className={cn("space-y-2")}>
                <Label htmlFor={cn("password")}>Password</Label>
                <Input id={cn("password")} required type={cn("password")} />
            </div>
            <Button className={cn("w-full")} type={cn("submit")}>
                Sign Up
            </Button>
            <div className={cn("text-center text-sm text-gray-500 dark:text-gray-400")}>
                Already have an account?
                <Link className={cn("font-medium underline underline-offset-4")} href={cn("#")}>
                    Log in
                </Link>
            </div>
            <div className={cn("text-center text-sm text-gray-500 dark:text-gray-400")}>
                Forgot your password?
                <Link className={cn("font-medium underline underline-offset-4")} href={cn("#")}>
                    Reset it
                </Link>
            </div> */}
      </div>
    </main>
  );
}
