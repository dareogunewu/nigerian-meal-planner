'use client';

import { Recipe } from '@/types';
import Link from 'next/link';

interface RecipeCardProps {
  recipe: Recipe;
  onAddToMealPlan?: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onAddToMealPlan }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
      <div className="h-40 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
        <span className="text-6xl">
          {recipe.category === 'soup' && '🍲'}
          {recipe.category === 'stew' && '🥘'}
          {recipe.category === 'rice' && '🍚'}
          {recipe.category === 'swallow' && '🫓'}
          {recipe.category === 'breakfast' && '🍳'}
          {recipe.category === 'snack' && '🥟'}
          {recipe.category === 'protein' && '🍗'}
          {recipe.category === 'side' && '🥗'}
        </span>
      </div>
      <div className="p-4">
        <Link href={`/recipes/${recipe.id}`}>
          <h3 className="font-bold text-lg text-gray-800 hover:text-green-600 transition-colors">
            {recipe.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{recipe.description}</p>

        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {recipe.prepTime + recipe.cookTime} min
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {recipe.servings} servings
          </span>
        </div>

        {recipe.dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {recipe.dietaryTags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {onAddToMealPlan && (
          <button
            onClick={() => onAddToMealPlan(recipe)}
            className="mt-3 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            + Add to Meal Plan
          </button>
        )}

        {recipe.creator && (
          <p className="mt-2 text-xs text-gray-400">
            Recipe by {recipe.creator.name}
          </p>
        )}
      </div>
    </div>
  );
}
