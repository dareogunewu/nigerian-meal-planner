'use client';

import { useMealPlanner, DAYS, DayOfWeek } from './MealPlannerContext';
import { MealTime } from '@/types';
import { getRecipeById } from '@/data/recipes';
import Link from 'next/link';

const MEAL_TIMES: MealTime[] = ['breakfast', 'lunch', 'dinner'];

const mealTimeEmoji: Record<MealTime, string> = {
  breakfast: '🌅',
  lunch: '☀️',
  dinner: '🌙',
};

export default function MealPlanGrid() {
  const { mealPlan, removeMealFromPlan } = useMealPlanner();

  const getMealCount = () => {
    let count = 0;
    DAYS.forEach(day => {
      MEAL_TIMES.forEach(mealTime => {
        if (mealPlan[day]?.[mealTime]) count++;
      });
    });
    return count;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Weekly Meal Plan</h2>
        <span className="text-sm text-gray-700">{getMealCount()} meals planned</span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-8 gap-2 mb-2">
            <div className="p-2"></div>
            {DAYS.map(day => (
              <div
                key={day}
                className="p-2 text-center font-semibold text-gray-700 capitalize bg-gray-50 rounded-lg"
              >
                {day.slice(0, 3)}
              </div>
            ))}
          </div>

          {/* Meal rows */}
          {MEAL_TIMES.map(mealTime => (
            <div key={mealTime} className="grid grid-cols-8 gap-2 mb-2">
              <div className="p-2 flex items-center gap-2 font-medium text-gray-600 capitalize">
                <span>{mealTimeEmoji[mealTime]}</span>
                {mealTime}
              </div>
              {DAYS.map(day => {
                const recipeId = mealPlan[day]?.[mealTime];
                const recipe = recipeId ? getRecipeById(recipeId) : null;

                return (
                  <div
                    key={`${day}-${mealTime}`}
                    className={`p-2 rounded-lg min-h-[80px] flex flex-col justify-between ${
                      recipe
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 border border-dashed border-gray-200'
                    }`}
                  >
                    {recipe ? (
                      <>
                        <Link
                          href={`/recipes/${recipe.id}`}
                          className="text-sm font-medium text-gray-800 hover:text-green-600 line-clamp-2"
                        >
                          {recipe.name}
                        </Link>
                        <button
                          onClick={() => removeMealFromPlan(day, mealTime)}
                          className="mt-1 text-xs text-red-500 hover:text-red-700 self-end"
                        >
                          Remove
                        </button>
                      </>
                    ) : (
                      <Link
                        href={`/recipes?addTo=${day}-${mealTime}`}
                        className="w-full h-full flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
                      >
                        <span className="text-2xl">+</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
