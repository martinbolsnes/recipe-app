export type CategoryType = {
  _id: string;
  name: string;
  icon: string;
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
  category: CategoryType[];
  ingredients: string[];
  instructions: string[];
};
