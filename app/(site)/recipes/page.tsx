import { createClient } from '../../utils/supabase/server';
import { AllRecipesCard } from '../../components/Recipes/AllRecipesCard';
import CategoryButtons from '../../components/Recipes/CategoryButtons';
import { SearchInput } from '../../components/SearchInput';
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/sanity.client';
import { recipeQuery } from '@/sanity/sanity.query';
import type { RecipeType } from '@/types';

export default async function AllRecipesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
    page?: string;
  };
}) {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  const { data, error, status } = await supabase
    .from('profiles')
    .select(`username`)
    .eq('id', user.data.user?.id)
    .single();
  const query = searchParams?.query || '';
  const category = searchParams?.category || '';
  const currentPage = Number(searchParams?.page) || 1;

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
    <main className={cn('min-h-screen container mx-auto py-8 px-4 md:px-6')}>
      {data?.username ? (
        <h3 className={cn('md:text-lg font-semibold text-foreground mb-2')}>
          Hva vil du lage idag, {data?.username}? 🍽
        </h3>
      ) : user.data.user?.user_metadata?.name ? (
        <h3 className={cn('md:text-lg font-semibold text-foreground mb-2')}>
          Hva vil du lage idag, {user.data.user?.user_metadata?.name}? 🍽
        </h3>
      ) : (
        <h3 className={cn('md:text-lg font-semibold text-foreground mb-2')}>
          Hva vil du lage idag? 🍽
        </h3>
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
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <AllRecipesCard key={recipe._id} recipe={recipe} />
            ))
          ) : (
            <p className={cn('mt-6')}>
              Her var det visst ingenting enda 😬 Vi legger snart ut nye
              oppskrifter.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
