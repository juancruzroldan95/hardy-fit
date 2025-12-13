import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description: "Brief tagline or summary",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "text",
      rows: 4,
      description: "Detailed product description (optional)",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weight",
      title: "Weight",
      type: "string",
      description: "e.g., 380gr",
    }),
    defineField({
      name: "purchaseLink",
      title: "Purchase Link",
      type: "url",
      description: "Link to buy this product",
    }),
    defineField({
      name: "nutrition",
      title: "Nutritional Information",
      type: "object",
      fields: [
        defineField({
          name: "servingSize",
          title: "Serving Size",
          type: "string",
          description: "e.g., 25g (1 cucharada)",
        }),
        defineField({
          name: "calories",
          title: "Calories (kcal)",
          type: "number",
        }),
        defineField({
          name: "caloriesKj",
          title: "Calories (kJ)",
          type: "number",
        }),
        defineField({
          name: "protein",
          title: "Protein (g)",
          type: "number",
        }),
        defineField({
          name: "fat",
          title: "Fat (g)",
          type: "number",
        }),
        defineField({
          name: "saturatedFat",
          title: "Saturated Fat (g)",
          type: "number",
        }),
        defineField({
          name: "transFat",
          title: "Trans Fat (g)",
          type: "number",
        }),
        defineField({
          name: "carbs",
          title: "Carbohydrates (g)",
          type: "number",
        }),
        defineField({
          name: "fiber",
          title: "Fiber (g)",
          type: "number",
        }),
        defineField({
          name: "sodium",
          title: "Sodium (mg)",
          type: "number",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
      description: "List of ingredients",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: "Key benefits of this product",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Product features (optional)",
    }),
    defineField({
      name: "allergens",
      title: "Allergen Information",
      type: "text",
      rows: 2,
      description: "Information about allergens",
    }),
    defineField({
      name: "notes",
      title: "Additional Notes",
      type: "array",
      of: [{ type: "string" }],
      description: "Additional product notes or information",
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Whether this product is currently available",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "shortDescription",
      media: "image",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, subtitle, media, isActive } = selection;
      return {
        title: title,
        subtitle: `${subtitle} ${!isActive ? "(Inactive)" : ""}`,
        media: media,
      };
    },
  },
});
