import { defineField } from 'sanity';
import { Utensils } from 'lucide-react';

const recipe = {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  icon: Utensils,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'Give a short description of the recipe',
      validation: (Rule) => Rule.required().min(10).max(120),
    }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload a picture of the recipe',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'totalTime',
      title: 'Total Time',
      type: 'number',
      description: 'Enter the total time in minutes',
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'number',
      description: 'Enter the number of servings',
    },
    {
      name: 'ingredientsSubHeaderOne',
      title: 'Sub Header 1',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'ingredientsOne',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ingredientsSubHeaderTwo',
      title: 'Sub Header 2',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'ingredientsTwo',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ingredientsSubHeaderThree',
      title: 'Sub Header 3',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'ingredientsThree',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ingredientsSubHeaderFour',
      title: 'Sub Header 4',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'ingredientsFour',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ingredientsSubHeaderFive',
      title: 'Sub Header 5',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'ingredientsFive',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructionsSubHeaderOne',
      title: 'Sub Header 1',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'instructionsOne',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructionsSubHeaderTwo',
      title: 'Sub Header 2',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'instructionsTwo',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructionsSubHeaderThree',
      title: 'Sub Header 3',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'instructionsThree',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructionsSubHeaderFour',
      title: 'Sub Header 4',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'instructionsFour',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructionsSubHeaderFive',
      title: 'Sub Header 5',
      type: 'string',
      description: 'Enter a sub header',
    },
    {
      name: 'instructionsFive',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      defaultValue: false,
      description: 'Is this recipe featured?',
    },
  ],
};

export default recipe;
