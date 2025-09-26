// import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// export const sanityClient = createClient({
//   projectId: 'your-project-id', // Replace with your Sanity project ID
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2023-12-01',
// });

// const builder = imageUrlBuilder(sanityClient);

// export function urlFor(source: any) {
//   return builder.image(source);
// }

// // Types for our content
// export interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: any;
//   slug: { current: string };
//   nutritionFacts: {
//     calories: number;
//     protein: number;
//     fat: number;
//     carbs: number;
//   };
//   ingredients: string[];
// }

// export interface Recipe {
//   _id: string;
//   title: string;
//   description: string;
//   image: any;
//   slug: { current: string };
//   ingredients: string[];
//   instructions: string[];
//   nutritionInfo: {
//     servings: number;
//     prepTime: number;
//     calories: number;
//     protein: number;
//   };
// }

// export interface AboutContent {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: any;
//   values: Array<{
//     title: string;
//     description: string;
//   }>;
// }