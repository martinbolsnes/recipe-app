import { AllRecipesCard } from '../../components/AllRecipesCard';
import CategoryButtons from '../../components/CategoryButtons';
import { SearchInput } from '../../components/SearchInput';
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/sanity.client';
import { recipeQuery } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';
import { currentUser } from '@clerk/nextjs/server';

export default async function AllRecipesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const category = searchParams?.category || '';
  const currentPage = Number(searchParams?.page) || 1;
  const user = await currentUser();

  const allRecipes: RecipeType[] = await sanityFetch({
    query: recipeQuery,
    tags: ['recipe'],
  });
  const filteredRecipes = allRecipes.filter((recipe) => {
    const name = recipe.name?.toLowerCase() || '';
    const shortDescription = recipe.shortDescription?.toLowerCase() || '';
    const categoryNames = recipe.categories?.map((cat) =>
      cat.name.toLowerCase()
    );

    const matchesQuery =
      name.includes(query.toLowerCase()) ||
      shortDescription.includes(query.toLowerCase());
    const matchesCategory =
      category === '' || categoryNames?.includes(category.toLowerCase());

    return matchesQuery && matchesCategory;
  });

  return (
    <main className={cn('container mx-auto py-8 px-4 md:px-6')}>
      {user ? (
        <h3 className={cn('md:text-lg font-semibold text-foreground mb-2')}>
          Hva vil du spise idag, {user.firstName}? 🍽
        </h3>
      ) : (
        <div className={cn('hidden')}></div>
      )}
      <div className={cn('flex items-center justify-between mb-4')}>
        <div className={cn('flex items-center gap-4')}>
          <SearchInput placeholder='Søk oppskrifter...' />
        </div>
      </div>
      <section className={cn('mb-8')}>
        <div className={cn('flex items-center justify-between mb-4')}>
          <CategoryButtons />
        </div>
        <div
          className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6')}
        >
          {filteredRecipes.map((recipe) => (
            <AllRecipesCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}
