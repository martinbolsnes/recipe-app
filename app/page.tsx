'use client';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9HSzeK355np
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { DropdownMenuComponent } from './components/DropdownMenu';
import { CategoryButtons } from './components/CategoryButtons';
import { Card } from './components/Card';

export default function Page() {
  return (
    <>
      <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
        <div className={cn('flex items-center justify-between mb-4')}>
          <div className={cn('flex items-center gap-4')}>
            <SearchInput />
            <DropdownMenuComponent />
          </div>
        </div>
        <section className={cn('mb-8')}>
          <div className={cn('flex items-center justify-between mb-4')}>
            <CategoryButtons />
          </div>
          <div className={cn('flex items-center justify-end mb-4 mt-4')}>
            <div className={cn('flex items-center gap-4')}>
              <Link className={cn('text-primary hover:underline')} href='#'>
                View all
              </Link>
            </div>
          </div>
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            )}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}
