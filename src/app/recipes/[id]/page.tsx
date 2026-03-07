'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getRecipeById } from '@/data/recipes';
import { useMealPlanner, DAYS, DayOfWeek } from '@/components/MealPlannerContext';
import { MealTime } from '@/types';
import { useState } from 'react';

export default function RecipePage() {
  const params = useParams();
  const recipe = getRecipeById(params.id as string);
  const { addMealToPlan } = useMealPlanner();
  const [showAddModal, setShowAddModal] = useState(false);
  const [added, setAdded] = useState(false);

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Recipe not found</h1>
        <Link href="/recipes" className="text-green-600 hover:text-green-700">
          ← Back to recipes
        </Link>
      </div>
    );
  }

  const handleAddToMealPlan = (day: DayOfWeek, mealTime: MealTime) => {
    addMealToPlan(day, mealTime, recipe.id);
    setShowAddModal(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back link */}
      <Link
        href="/recipes"
        className="text-green-600 hover:text-green-700 mb-6 inline-block"
      >
        ← Back to recipes
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-white mb-8">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-6xl mb-4 block">
              {recipe.category === 'soup' && '🍲'}
              {recipe.category === 'stew' && '🥘'}
              {recipe.category === 'rice' && '🍚'}
              {recipe.category === 'swallow' && '🫓'}
              {recipe.category === 'breakfast' && '🍳'}
              {recipe.category === 'snack' && '🥟'}
              {recipe.category === 'protein' && '🍗'}
              {recipe.category === 'side' && '🥗'}
            </span>
            <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
            <p className="text-green-100 text-lg">{recipe.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="block text-sm text-green-100">Prep Time</span>
            <span className="font-semibold">{recipe.prepTime} min</span>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="block text-sm text-green-100">Cook Time</span>
            <span className="font-semibold">{recipe.cookTime} min</span>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="block text-sm text-green-100">Servings</span>
            <span className="font-semibold">{recipe.servings}</span>
          </div>
        </div>

        {recipe.dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {recipe.dietaryTags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Add to meal plan button */}
      <div className="mb-8">
        {added ? (
          <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg font-medium">
            ✓ Added to meal plan!
          </div>
        ) : (
          <button
            onClick={() => setShowAddModal(true)}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            + Add to Meal Plan
          </button>
        )}
      </div>

      {/* Add modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add to Meal Plan</h2>
            <p className="text-gray-600 mb-4">Select a day and meal time:</p>

            <div className="space-y-4">
              {DAYS.map(day => (
                <div key={day} className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-medium text-gray-700 capitalize mb-2">{day}</h3>
                  <div className="flex gap-2">
                    {(['breakfast', 'lunch', 'dinner'] as MealTime[]).map(mealTime => (
                      <button
                        key={mealTime}
                        onClick={() => handleAddToMealPlan(day, mealTime)}
                        className="flex-1 py-2 px-3 bg-gray-100 hover:bg-green-100 hover:text-green-700 rounded-lg text-sm capitalize transition-colors"
                      >
                        {mealTime}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowAddModal(false)}
              className="mt-4 w-full py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Ingredients */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ing, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>
                  <strong>{ing.amount} {ing.unit}</strong> {ing.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Tips */}
      {recipe.tips && recipe.tips.length > 0 && (
        <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Tips</h2>
          <ul className="space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="text-gray-700">• {tip}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Creator credit */}
      {recipe.creator && (
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Recipe Credit</h2>
          <p className="text-gray-600">
            Recipe inspired by <strong>{recipe.creator.name}</strong>
            {recipe.creator.channel && ` (${recipe.creator.channel})`}
          </p>
          {recipe.creator.website && (
            <a
              href={recipe.creator.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 text-sm"
            >
              Visit their website →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
