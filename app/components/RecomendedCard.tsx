import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, ArrowRightIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const RecomendedCard = () => {
  return (
    <div className='col-span-2 mt-12'>
      <h2 className='text-2xl font-bold mb-4'>You Might Also Like</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <Image
              alt='Dish Image'
              className='rounded-t-lg object-cover w-full'
              height='300'
              src='/placeholder.svg'
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover',
              }}
              width='400'
            />
          </CardHeader>
          <CardContent className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>
              Baked Salmon with Lemon Dill Sauce
            </h3>
            <div className='flex items-center gap-2 mb-2'>
              <div className='flex items-center gap-0.5'>
                <StarIcon className='w-4 h-4 fill-primary' />
                <StarIcon className='w-4 h-4 fill-primary' />
                <StarIcon className='w-4 h-4 fill-primary' />
                <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
                <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
              </div>
              <span className='text-sm text-gray-500 dark:text-gray-400'>
                (4.1 / 5)
              </span>
            </div>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
              Tender baked salmon fillets topped with a creamy lemon dill sauce.
            </p>
            <Link
              className='inline-flex items-center gap-2 text-primary hover:underline'
              href='#'
            >
              View Recipe
              <ArrowRightIcon className='w-4 h-4' />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
