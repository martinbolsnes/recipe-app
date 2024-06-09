import { groq } from 'next-sanity';
import { client } from './sanity.client';

export const recipeQuery = groq`*[_type == "recipe"]{
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      image {alt, "image": asset->url},
      "categories": categories[]->{_id, name, icon},
      totalTime,
      servings,
      ingredientsSubheaderOne,
      ingredientsSubheaderTwo,
      ingredientsSubheaderThree,
      ingredientsSubheaderFour,
      ingredientsSubheaderFive,
      ingredientsOne,
      ingredientsTwo,
      ingredientsThree,
      ingredientsFour,
      ingredientsFive,
      instructionsSubheaderOne,
      instructionsSubheaderTwo,
      instructionsSubheaderThree,
      instructionsSubheaderFour,
      instructionsSubheaderFive,
      instructionsOne,
      instructionsTwo,
      instructionsThree,
      instructionsFour,
      instructionsFive,
      featured,
    }`;

export const categoriesQuery = groq`*[_type == "category"]{
      _id,
      name,
      icon,
      image {alt, "image": asset->url},
    }`;

export const recipesByCategoryQuery = groq`*[_type == "recipe" && categories[].name match $categoryName]{
      _id,
      name,
      "slug": slug.current,
      shortDescription,
    }`;

export async function getRecipeBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "recipe" && slug.current == $slug]{
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      image {alt, "image": asset->url},
      category,
      totalTime,
      servings,
      ingredientsSubheaderOne,
      ingredientsSubheaderTwo,
      ingredientsSubheaderThree,
      ingredientsSubheaderFour,
      ingredientsSubheaderFive,
      ingredientsOne,
      ingredientsTwo,
      ingredientsThree,
      ingredientsFour,
      ingredientsFive,
      instructionsSubheaderOne,
      instructionsSubheaderTwo,
      instructionsSubheaderThree,
      instructionsSubheaderFour,
      instructionsSubheaderFive,
      instructionsOne,
      instructionsTwo,
      instructionsThree,
      instructionsFour,
      instructionsFive,
      featured,
    }`,
    { slug, revalidate: 10 }
  );
}

export const heroQuery = groq`*[_type == "hero"]{
      _id,
      name,
      description,
      image {alt, "image": asset->url},
    }`;

export const newRecipesQuery = groq`*[_type == "recipe"] | order(_createdAt desc){
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      image {alt, "image": asset->url},
    }`;
