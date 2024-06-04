export type CategoryType = {
  _id: string;
  name: string;
  icon: string;
  image: {
    alt: string;
    image: string;
  };
};

export type RecipeType = {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image: {
    alt: string;
    image: string;
  };
  categories: CategoryType[];
  ingredients: string[];
  instructions: string[];
  featured: boolean;
};

export type HeroContentType = {
  name: string;
  description: string;
  image: {
    alt: string;
    image: string;
  };
};
