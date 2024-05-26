import { ImageIcon } from 'lucide-react';
import { defineField } from 'sanity';

const hero = {
  name: 'hero',
  title: 'Hero',
  icon: ImageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload a picture for the hero section',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
  ],
};

export default hero;
