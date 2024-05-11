import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Card = () => {
  return (
    <div className={cn('bg-white rounded-md shadow-md overflow-hidden')}>
      <Image
        alt='Recipe Image'
        className={cn('w-full h-48 object-cover')}
        height={250}
        src='/placeholder.svg'
        style={{
          aspectRatio: '400/250',
          objectFit: 'cover',
        }}
        width={400}
      />
      <div className={cn('p-4')}>
        <h3 className={cn('text-lg font-bold mb-2')}>Creamy Garlic Pasta</h3>
        <p className={cn('text-gray-500 mb-4')}>
          A delicious and easy-to-make pasta dish with a creamy garlic sauce.
        </p>
        <div className={cn('flex items-center justify-between')}>
          <Button size='sm' variant='outline'>
            <Heart className={cn('w-4 h-4 mr-2')} />
            Save
          </Button>
          <Link href='/recipes'>
            <Button size='sm' variant='default'>
              View Recipe
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
