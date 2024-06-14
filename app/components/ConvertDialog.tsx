'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { WeightIcon } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function ConvertDrawer() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('pounds');
  const [toUnit, setToUnit] = useState('kilograms');
  const [convertedValue, setConvertedValue] = useState('');

  const conversionFactors: { [key: string]: number } = {
    'pounds-kilogram': 0.453592,
    'pounds-gram': 453.592,
    'kilogram-pounds': 2.20462,
    'kilogram-gram': 1000,
    'gram-pounds': 0.00220462,
    'gram-kilogram': 0.001,
    'cups-desiliter': 2.36588,
    'cups-gram': 201.6,
    'desiliter-cups': 0.422675,
    'desiliter-gram': 85,
    'gram-cups': 0.0049604,
    'gram-desiliter': 0.0117647,
    'ounces-gram': 28.3495,
    'gram-ounces': 0.035274,
    'ounces-desiliter': 0.118294,
    'desiliter-ounces': 8.45351,
  };

  const units = ['pounds', 'kilogram', 'gram', 'cups', 'desiliter', 'ounces'];

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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            'fixed bottom-6 right-6 rounded-full bg-neutral-900 text-neutral-50 shadow-lg'
          )}
          size='icon'
          variant='outline'
        >
          <WeightIcon className={cn('h-5 w-5')} />
          <span className={cn('sr-only')}>Convert units</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className={cn('mx-auto w-full max-w-sm text-center')}>
          <DialogHeader>
            <DialogTitle>Måleenhetshjelper</DialogTitle>
            <DialogDescription>
              Konverter mellom ulike måleenheter
            </DialogDescription>
          </DialogHeader>
          <div className={cn('flex flex-col gap-6 p-4 pb-0')}>
            <form
              className={cn('flex flex-col gap-4')}
              onSubmit={handleConvert}
            >
              <div className={cn('flex gap-2 justify-between')}>
                <input
                  className={cn(
                    'text-base flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
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
                  <option value='Velg enhet'>Velg enhet</option>
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
                  <option value='Velg enhet'>Velg enhet</option>
                  {validToUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <Button type='submit'>Konverter</Button>
            </form>
            <div className={cn('flex items-center justify-center')}>
              {convertedValue && (
                <p className={cn('text-3xl font-bold')}>{convertedValue}</p>
              )}
            </div>
          </div>
          <DialogClose
            className={cn(
              'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mt-4'
            )}
          >
            Lukk
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
