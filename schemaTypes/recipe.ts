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
      validation: (Rule) => Rule.required().min(10).max(50),
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
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'instructions',
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
