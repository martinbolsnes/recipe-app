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
      name: 'ingredientsSubheaderOne',
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
      name: 'ingredientsSubheaderTwo',
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
      name: 'ingredientsSubheaderThree',
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
      name: 'ingredientsSubheaderFour',
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
      name: 'ingredientsSubheaderFive',
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
      name: 'instructionsSubheaderOne',
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
      name: 'instructionsSubheaderTwo',
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
      name: 'instructionsSubheaderThree',
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
      name: 'instructionsSubheaderFour',
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
      name: 'instructionsSubheaderFive',
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
