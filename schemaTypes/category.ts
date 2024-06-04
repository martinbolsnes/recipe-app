import { Layers3 } from 'lucide-react';
import { defineField } from 'sanity';

const category = {
  name: 'category',
  title: 'Category',
  icon: Layers3,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
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

export default category;
