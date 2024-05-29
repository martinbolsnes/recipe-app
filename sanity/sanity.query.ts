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
      "categories": categories[]->,
      ingredients,
      instructions,
      featured,
    }`,
    { revalidate: 10 }
  );
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      name,
      icon,
    }`,
    { revalidate: 10 }
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
    { slug, revalidate: 10 }
  );
}

export async function getHero() {
  return client.fetch(
    groq`*[_type == "hero"]{
      _id,
      name,
      description,
      image {alt, "image": asset->url},
    }`,
    { revalidate: 10 }
  );
}
