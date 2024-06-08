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
  totalTime: number;
  servings: number;
  ingredientsSubheaderOne: string;
  ingredientsSubheaderTwo: string;
  ingredientsSubheaderThree: string;
  ingredientsSubheaderFour: string;
  ingredientsSubheaderFive: string;
  ingredientsOne: string[];
  ingredientsTwo: string[];
  ingredientsThree: string[];
  ingredientsFour: string[];
  ingredientsFive: string[];
  instructionsSubheaderOne: string;
  instructionsSubheaderTwo: string;
  instructionsSubheaderThree: string;
  instructionsSubheaderFour: string;
  instructionsSubheaderFive: string;
  instructionsOne: string[];
  instructionsTwo: string[];
  instructionsThree: string[];
  instructionsFour: string[];
  instructionsFive: string[];
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
