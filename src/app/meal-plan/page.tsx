'use client';

import Link from 'next/link';
import MealPlanGrid from '@/components/MealPlanGrid';
import { useMealPlanner } from '@/components/MealPlannerContext';

export default function MealPlanPage() {
  const { clearMealPlan, getMealPlanRecipes } = useMealPlanner();
  const recipes = getMealPlanRecipes();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Weekly Meal Plan</h1>
          <p className="text-gray-500 mt-1">
            Click the + button to add meals to your plan
          </p>
        </div>
        <div className="flex gap-3">
          {recipes.length > 0 && (
            <>
              <Link
                href="/grocery-list"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                View Grocery List
              </Link>
              <button
                onClick={clearMealPlan}
                className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
              >
                Clear All
              </button>
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <MealPlanGrid />
      </div>

      {recipes.length === 0 && (
        <div className="mt-8 text-center py-12 bg-white rounded-xl border border-gray-100">
          <span className="text-6xl mb-4 block">📅</span>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Your meal plan is empty</h2>
          <p className="text-gray-500 mb-6">
            Start by browsing recipes and adding them to your weekly plan.
          </p>
          <Link
            href="/recipes"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Browse Recipes
          </Link>
        </div>
      )}

      {recipes.length > 0 && (
        <div className="mt-8 bg-green-50 rounded-xl p-6 border border-green-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Ready to shop?</h2>
          <p className="text-gray-600 mb-4">
            You have {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} in your meal plan.
            Generate a grocery list with all the ingredients you need.
          </p>
          <Link
            href="/grocery-list"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Generate Grocery List →
          </Link>
        </div>
      )}
    </div>
  );
}
