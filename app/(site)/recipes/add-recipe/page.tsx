'use client';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { sanityFetch } from '@/sanity/sanity.client';
import { client } from '@/sanity/sanity.client';
import { categoriesQuery } from '@/sanity/sanity.query';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlusIcon, Trash, TrashIcon } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

// Define Zod schema for form validation
const recipeSchema = z.object({
  name: z.string().min(1, 'Recipe name is required'),
  shortDescription: z
    .string()
    .min(10, 'Short description must be at least 10 characters'),
  selectedCategory: z.string().min(1, 'Category is required'),
  image: z.string().url('Invalid URL').optional(),
  ingredients: z.array(z.string().min(1, 'Ingredient is required')),
  instructions: z.array(z.string().min(1, 'Instruction is required')),
  featured: z.boolean().optional(),
});

export default function AddRecipe() {
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [instructionInput, setInstructionInput] = useState('');
  const [featured, setFeatured] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchData() {
      const fetchedCategories = (await sanityFetch({
        query: categoriesQuery,
        tags: ['category'],
      })) as { _id: string; name: string }[];
      setCategories(fetchedCategories);
    }
    fetchData();
  }, []);

  const handleAddIngredient = () => {
    if (ingredientInput) {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleAddInstruction = () => {
    if (instructionInput) {
      setInstructions([...instructions, instructionInput]);
      setInstructionInput('');
    }
  };

  const handleRemoveInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data using Zod schema
    const formData = {
      name,
      shortDescription,
      selectedCategory,
      image,
      ingredients,
      instructions,
      featured,
    };

    try {
      recipeSchema.parse(formData);

      const doc = {
        _type: 'recipe',
        name,
        shortDescription,
        categories: [{ _type: 'reference', _ref: selectedCategory }],
        image,
        ingredients,
        instructions,
        featured,
      };

      await client.create(doc);
      console.log(client.config());
      alert('Recipe added successfully');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce(
          (acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          },
          {} as Record<string, string>
        );
        setErrors(formattedErrors);
      } else {
        console.error(error);
        alert('Failed to add recipe');
      }
    }
  };

  return (
    <main>
      <section className={cn('w-full py-12 md:py-16 lg:py-20')}>
        <div className='flex flex-col items-center justify-center gap-6 md:gap-8 px-4 md:px-6'>
          <h1 className={cn('font-bold text-xl')}>Legg til oppskrift</h1>
          <div
            className={cn(
              'flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'
            )}
          >
            <form onSubmit={handleSubmit} className={cn('space-y-6')}>
              <div>
                <Label htmlFor='name'>Navn på oppskrift</Label>
                <Input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor='shortDescription'>Kort beskrivelse</Label>
                <Input
                  type='text'
                  id='shortDescription'
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  required
                />
                {errors.shortDescription && <p>{errors.shortDescription}</p>}
              </div>
              <div>
                <Select
                  value={selectedCategory}
                  onValueChange={(value) => setSelectedCategory(value)}
                  required
                >
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder={'Legg til kategori'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Kategori</SelectLabel>
                      {categories.map((category) => (
                        <SelectItem key={category._id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.selectedCategory && <p>{errors.selectedCategory}</p>}
              </div>
              <div>
                <Label htmlFor='image'>URL til bilde</Label>
                <Input
                  type='text'
                  id='image'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                {errors.image && <p>{errors.image}</p>}
              </div>
              <div>
                <Label htmlFor='ingredients'>Ingredienser</Label>
                <div className={cn('flex items-start space-x-2')}>
                  <Input
                    type='text'
                    id='ingredient'
                    value={ingredientInput}
                    onChange={(e) => setIngredientInput(e.target.value)}
                  />
                  <Button
                    variant='secondary'
                    type='button'
                    onClick={handleAddIngredient}
                  >
                    <PlusIcon className={cn('w-4 h-4 mr-2')} />
                    Legg til
                  </Button>
                </div>
                <ul className='mt-4'>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <Button
                        className='mr-2'
                        variant='ghost'
                        size='icon'
                        type='button'
                        onClick={() => handleRemoveIngredient(index)}
                      >
                        <TrashIcon className={cn('w-4 h-4 text-red-500')} />
                      </Button>
                      {ingredient}
                    </li>
                  ))}
                </ul>
                {errors.ingredients && <p>{errors.ingredients}</p>}
              </div>
              <div>
                <Label htmlFor='instructions'>Instrkusjoner</Label>
                <div className={cn('flex items-start space-x-2')}>
                  <Input
                    type='text'
                    id='instruction'
                    value={instructionInput}
                    onChange={(e) => setInstructionInput(e.target.value)}
                  />
                  <Button
                    variant='secondary'
                    type='button'
                    onClick={handleAddInstruction}
                  >
                    <PlusIcon className={cn('w-4 h-4 mr-2')} />
                    Legg til
                  </Button>
                </div>
                <ul className='mt-4'>
                  {instructions.map((instruction, index) => (
                    <li key={index}>
                      <Button
                        className='mr-2'
                        variant='ghost'
                        size='icon'
                        type='button'
                        onClick={() => handleRemoveInstruction(index)}
                      >
                        <TrashIcon className={cn('w-4 h-4 text-red-500')} />
                      </Button>
                      {instruction}
                    </li>
                  ))}
                </ul>
                {errors.instructions && <p>{errors.instructions}</p>}
              </div>
              <div>
                <input
                  className={cn(
                    'peer h-4 w-4 mr-2 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
                  )}
                  type='checkbox'
                  id='featured'
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                />
                <Label htmlFor='featured'>
                  Skal oppskriften være en featured oppskrift?
                </Label>
              </div>
              <Button variant='default' type='submit'>
                Legg till oppskrift
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
