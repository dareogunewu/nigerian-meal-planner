'use client';

import Link from 'next/link';
import GroceryListComponent from '@/components/GroceryList';
import { useMealPlanner } from '@/components/MealPlannerContext';

export default function GroceryListPage() {
  const { getMealPlanRecipes } = useMealPlanner();
  const recipes = getMealPlanRecipes();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Grocery List</h1>
          <p className="text-gray-500 mt-1">
            Auto-generated from your meal plan
          </p>
        </div>
        <Link
          href="/meal-plan"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          ← Back to Meal Plan
        </Link>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <GroceryListComponent />
      </div>

      {recipes.length > 0 && (
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Tip: Click items to mark them as purchased</p>
        </div>
      )}
    </div>
  );
}
