import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getRecipe() {
  return client.fetch(
    groq`*[_type == "recipe"]{
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      image {alt, "image": asset->url},
      category,
      ingredients,
      instructions,
    }`,
    { revalidate: 1 }
  );
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      name,
      icon,
    }`,
    { revalidate: 1 }
  );
}

export async function getRecipeBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "recipe" && slug.current == $slug]{
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      image {alt, "image": asset->url},
      category,
      ingredients,
      instructions,
    }`,
    { slug, revalidate: 1 }
  );
}
