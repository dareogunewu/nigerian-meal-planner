'use client';

import { useState } from 'react';
import { useMealPlanner } from './MealPlannerContext';
import { GroceryItem } from '@/types';

const categoryLabels: Record<GroceryItem['category'], string> = {
  protein: '🥩 Proteins',
  vegetable: '🥬 Vegetables',
  grain: '🌾 Grains & Starches',
  spice: '🧂 Spices & Seasonings',
  oil: '🫒 Oils & Fats',
  dairy: '🧈 Dairy',
  other: '📦 Other',
};

export default function GroceryListComponent() {
  const { getGroceryList, getMealPlanRecipes } = useMealPlanner();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const groceryList = getGroceryList();
  const recipes = getMealPlanRecipes();

  const toggleItem = (ingredient: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(ingredient)) {
        newSet.delete(ingredient);
      } else {
        newSet.add(ingredient);
      }
      return newSet;
    });
  };

  const groupedItems = groceryList.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, GroceryItem[]>);

  const clearChecked = () => setCheckedItems(new Set());

  const checkedCount = checkedItems.size;
  const totalCount = groceryList.length;

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="text-6xl mb-4 block">🛒</span>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Your grocery list is empty</h2>
        <p className="text-gray-700">Add meals to your meal plan to generate a grocery list.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Grocery List</h2>
          <p className="text-sm text-gray-700">
            Based on {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} in your meal plan
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">
            {checkedCount}/{totalCount} items
          </span>
          {checkedCount > 0 && (
            <button
              onClick={clearChecked}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear checked
            </button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-green-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(checkedCount / totalCount) * 100}%` }}
        />
      </div>

      {/* Grouped items */}
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-semibold text-gray-700 mb-2">
              {categoryLabels[category as GroceryItem['category']]}
            </h3>
            <div className="space-y-1">
              {items.map(item => (
                <div
                  key={item.ingredient}
                  onClick={() => toggleItem(item.ingredient)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    checkedItems.has(item.ingredient)
                      ? 'bg-green-50 text-gray-600 line-through'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      checkedItems.has(item.ingredient)
                        ? 'bg-green-600 border-green-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {checkedItems.has(item.ingredient) && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="flex-1">{item.ingredient}</span>
                  <span className="text-sm text-gray-700">
                    {item.amount} {item.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Print button */}
      <button
        onClick={() => window.print()}
        className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Print Grocery List
      </button>
    </div>
  );
}
