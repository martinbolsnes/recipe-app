'use client';

import { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { WeightIcon } from 'lucide-react';

export default function ConvertDrawer() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('pounds');
  const [toUnit, setToUnit] = useState('kilograms');
  const [convertedValue, setConvertedValue] = useState('');

  const conversionFactors: { [key: string]: number } = {
    'pounds-kilograms': 0.453592,
    'pounds-grams': 453.592,
    'kilograms-pounds': 2.20462,
    'kilograms-grams': 1000,
    'grams-pounds': 0.00220462,
    'grams-kilograms': 0.001,
    'cups-desiliter': 2.36588,
    'cups-grams': 201.6,
    'desiliter-cups': 0.422675,
    'desiliter-grams': 85,
    'grams-cups': 0.0049604,
    'grams-desiliter': 0.0117647,
  };

  const units = ['pounds', 'kilograms', 'grams', 'cups', 'desiliter'];

  const validToUnits = units.filter(
    (unit) => conversionFactors[`${fromUnit}-${unit}`]
  );

  const handleConvert = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericValue = Number(value);
    const conversionFactor = conversionFactors[`${fromUnit}-${toUnit}`] || 1;
    setConvertedValue((numericValue * conversionFactor).toString());
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            'fixed bottom-6 right-6 rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 shadow-lg'
          )}
          size='icon'
          variant='outline'
        >
          <WeightIcon className={cn('h-5 w-5')} />
          <span className={cn('sr-only')}>Convert units</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className={cn('mx-auto w-full max-w-sm')}>
          <DrawerHeader>
            <DrawerTitle>Convert units</DrawerTitle>
            <DrawerDescription>
              Convert the units of this recipe to suit your needs.
            </DrawerDescription>
          </DrawerHeader>
          <div className={cn('flex flex-col gap-6 p-4 pb-0')}>
            <form
              className={cn('flex flex-col gap-4')}
              onSubmit={handleConvert}
            >
              <div className={cn('flex gap-2')}>
                <input
                  className={cn(
                    'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                  )}
                  type='number'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <select
                  className={cn(
                    'flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[180px]'
                  )}
                  value={fromUnit}
                  onChange={(e) => {
                    setFromUnit(e.target.value);
                    if (!validToUnits.includes(toUnit)) {
                      setToUnit(validToUnits[0]);
                    }
                  }}
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                  ))}
                </select>
                <select
                  className={cn(
                    'flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[180px]'
                  )}
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                >
                  {validToUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <Button type='submit'>Convert</Button>
            </form>
            <div className={cn('flex items-center justify-center')}>
              {convertedValue && (
                <p className={cn('text-3xl font-bold')}>{convertedValue}</p>
              )}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline'>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
