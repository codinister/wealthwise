import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'realestate',
  title: 'Real Estate',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    
    defineField({
      name: 'image',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
    }),


    defineField({
      name: 'body',
      title: 'Long Description',
      type: 'blockContent',
    }),

    defineField({
      name: 'youtube',
      title: 'Video Link',
      type: 'string',
    }),

    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),

    defineField({
      name: 'tcount',
      title: 'Count',
      type: 'number',
    }),

    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    {
      title: "Type of property",
      description: "Select Type",
      name: "proptype",
      type: "string",
      options: {
        list: [
          { title: "Rent", value: "Rent" },
          { title: "Buy", value: "Buy" },
          { title: "Sale", value: "Sale" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }, 
    defineField({
      name: 'lot',
      title: 'Lot Size',
      type: 'string'
    }),
    defineField({
      name: 'beds',
      title: 'Beds',
      type: 'string'
    }),
    defineField({
      name: 'baths',
      title: 'Baths',
      type: 'string'
    }),
    defineField({
      name: 'garage',
      title: 'Garage',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
