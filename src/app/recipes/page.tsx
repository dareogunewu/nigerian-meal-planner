'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { recipes } from '@/data/recipes';
import { MealCategory, DietaryTag, MealTime, Recipe } from '@/types';
import RecipeCard from '@/components/RecipeCard';
import CategoryFilter from '@/components/CategoryFilter';
import { useMealPlanner, DayOfWeek } from '@/components/MealPlannerContext';

function RecipesContent() {
  const searchParams = useSearchParams();
  const { addMealToPlan } = useMealPlanner();

  const [selectedCategory, setSelectedCategory] = useState<MealCategory | 'all'>('all');
  const [selectedDietaryTags, setSelectedDietaryTags] = useState<DietaryTag[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [addingToMealPlan, setAddingToMealPlan] = useState<{
    day: DayOfWeek;
    mealTime: MealTime;
  } | null>(null);

  // Check for addTo query param (from meal plan grid)
  useEffect(() => {
    const addTo = searchParams.get('addTo');
    const category = searchParams.get('category');

    if (addTo) {
      const [day, mealTime] = addTo.split('-') as [DayOfWeek, MealTime];
      setAddingToMealPlan({ day, mealTime });
    }

    if (category && category !== 'all') {
      setSelectedCategory(category as MealCategory);
    }
  }, [searchParams]);

  const handleDietaryTagToggle = (tag: DietaryTag) => {
    setSelectedDietaryTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleAddToMealPlan = (recipe: Recipe) => {
    if (addingToMealPlan) {
      addMealToPlan(addingToMealPlan.day, addingToMealPlan.mealTime, recipe.id);
      // Clear the adding state and show success
      setAddingToMealPlan(null);
      // Redirect back to meal plan
      window.location.href = '/meal-plan';
    }
  };

  const filteredRecipes = recipes.filter(recipe => {
    // Category filter
    if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
      return false;
    }

    // Dietary tags filter (must have ALL selected tags)
    if (selectedDietaryTags.length > 0) {
      const hasAllTags = selectedDietaryTags.every(tag =>
        recipe.dietaryTags.includes(tag)
      );
      if (!hasAllTags) return false;
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {addingToMealPlan
            ? `Select a recipe for ${addingToMealPlan.day} ${addingToMealPlan.mealTime}`
            : 'All Recipes'}
        </h1>
        {addingToMealPlan && (
          <button
            onClick={() => setAddingToMealPlan(null)}
            className="text-green-600 hover:text-green-700"
          >
            ← Cancel and browse all recipes
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search recipes, ingredients..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {/* Filters */}
      <div className="mb-8 p-4 bg-white rounded-xl border border-gray-100">
        <CategoryFilter
          selectedCategory={selectedCategory}
          selectedDietaryTags={selectedDietaryTags}
          onCategoryChange={setSelectedCategory}
          onDietaryTagToggle={handleDietaryTagToggle}
        />
      </div>

      {/* Results count */}
      <p className="text-gray-700 mb-4">
        Showing {filteredRecipes.length} of {recipes.length} recipes
      </p>

      {/* Recipe grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onAddToMealPlan={addingToMealPlan ? handleAddToMealPlan : undefined}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <span className="text-6xl mb-4 block">🍽️</span>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No recipes found</h2>
          <p className="text-gray-700">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}

export default function RecipesPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8">Loading...</div>}>
      <RecipesContent />
    </Suspense>
  );
}
