'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMealPlanner, DAYS, DayOfWeek } from '@/components/MealPlannerContext';
import { dietGoals } from '@/data/mealCombos';
import { DietGoal } from '@/types';

export default function MyPlanPage() {
  const {
    generatedPlan,
    currentDietGoal,
    generateMealPlanForGoal,
    clearGeneratedPlan,
    getComboById,
    getGeneratedPlanNutrition,
  } = useMealPlanner();

  const [selectedGoal, setSelectedGoal] = useState<DietGoal | null>(currentDietGoal);
  const hasGeneratedPlan = Object.values(generatedPlan).some(
    day => day.breakfast || day.lunch || day.dinner
  );

  const handleGeneratePlan = () => {
    if (selectedGoal) {
      generateMealPlanForGoal(selectedGoal);
    }
  };

  const handleRegeneratePlan = () => {
    if (currentDietGoal) {
      generateMealPlanForGoal(currentDietGoal);
    }
  };

  const currentGoalInfo = currentDietGoal
    ? dietGoals.find(g => g.id === currentDietGoal)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Weekly Plan</h1>
        <p className="text-gray-500">
          Auto-generate a personalized meal plan based on your dietary goals
        </p>
      </div>

      {/* Goal Selection */}
      {!hasGeneratedPlan && (
        <div className="bg-white rounded-xl p-6 border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Choose Your Goal</h2>
          <p className="text-gray-600 mb-6">
            Select a dietary goal and we will generate a complete 7-day Nigerian meal plan for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {dietGoals.map(goal => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selectedGoal === goal.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">
                    {goal.id === 'high-protein-weight-loss' && '💪'}
                    {goal.id === 'low-carb' && '🥗'}
                    {goal.id === 'balanced' && '⚖️'}
                    {goal.id === 'vegetarian' && '🥬'}
                    {goal.id === 'budget-friendly' && '💰'}
                  </span>
                  <h3 className="font-semibold text-gray-800">{goal.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{goal.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">
                    {goal.dailyTargets.calories.min}-{goal.dailyTargets.calories.max} cal
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    {goal.dailyTargets.protein.min}g+ protein
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleGeneratePlan}
            disabled={!selectedGoal}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              selectedGoal
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Generate My Meal Plan
          </button>
        </div>
      )}

      {/* Generated Plan Display */}
      {hasGeneratedPlan && (
        <>
          {/* Plan Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-xl p-6 text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">
                    {currentDietGoal === 'high-protein-weight-loss' && '💪'}
                    {currentDietGoal === 'low-carb' && '🥗'}
                    {currentDietGoal === 'balanced' && '⚖️'}
                    {currentDietGoal === 'vegetarian' && '🥬'}
                    {currentDietGoal === 'budget-friendly' && '💰'}
                  </span>
                  <h2 className="text-xl font-bold">{currentGoalInfo?.name} Plan</h2>
                </div>
                <p className="text-green-100">{currentGoalInfo?.description}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleRegeneratePlan}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
                >
                  Regenerate
                </button>
                <button
                  onClick={clearGeneratedPlan}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>

          {/* Weekly Grid */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 w-28">
                      Day
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                      Breakfast
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                      Lunch
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                      Dinner
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600 w-32">
                      Daily Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DAYS.map(day => {
                    const dayPlan = generatedPlan[day];
                    const breakfast = dayPlan.breakfast ? getComboById(dayPlan.breakfast) : null;
                    const lunch = dayPlan.lunch ? getComboById(dayPlan.lunch) : null;
                    const dinner = dayPlan.dinner ? getComboById(dayPlan.dinner) : null;
                    const dailyNutrition = getGeneratedPlanNutrition(day);

                    return (
                      <tr key={day} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <span className="font-semibold text-gray-800 capitalize">{day}</span>
                        </td>
                        <td className="px-4 py-4">
                          {breakfast ? (
                            <MealCard combo={breakfast} />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          {lunch ? (
                            <MealCard combo={lunch} />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          {dinner ? (
                            <MealCard combo={dinner} />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="text-sm">
                            <span className="font-semibold text-orange-600">
                              {dailyNutrition.calories} cal
                            </span>
                            <br />
                            <span className="text-blue-600">
                              {dailyNutrition.protein}g protein
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Summary</h3>
            <WeeklySummary />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/meal-plan"
              className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
            >
              Go to Manual Meal Planner
            </Link>
            <Link
              href="/recipes"
              className="flex-1 py-3 border border-green-600 text-green-600 rounded-lg font-semibold text-center hover:bg-green-50 transition-colors"
            >
              Browse All Recipes
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

// Meal card component for the grid
function MealCard({ combo }: { combo: { name: string; totalNutrition: { calories: number; protein: number } } }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <p className="font-medium text-gray-800 text-sm mb-1">{combo.name}</p>
      <div className="flex gap-2 text-xs">
        <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded">
          {combo.totalNutrition.calories} cal
        </span>
        <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">
          {combo.totalNutrition.protein}g
        </span>
      </div>
    </div>
  );
}

// Weekly summary component
function WeeklySummary() {
  const { generatedPlan, getComboById, getGeneratedPlanNutrition } = useMealPlanner();

  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  let totalFiber = 0;

  DAYS.forEach(day => {
    const nutrition = getGeneratedPlanNutrition(day);
    totalCalories += nutrition.calories;
    totalProtein += nutrition.protein;
    totalCarbs += nutrition.carbs;
    totalFat += nutrition.fat;
    totalFiber += nutrition.fiber;
  });

  const avgCalories = Math.round(totalCalories / 7);
  const avgProtein = Math.round(totalProtein / 7);
  const avgCarbs = Math.round(totalCarbs / 7);
  const avgFat = Math.round(totalFat / 7);
  const avgFiber = Math.round(totalFiber / 7);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div className="text-center p-3 bg-white rounded-lg">
        <span className="block text-2xl font-bold text-orange-600">{avgCalories}</span>
        <span className="text-sm text-gray-600">Avg Daily Calories</span>
      </div>
      <div className="text-center p-3 bg-white rounded-lg">
        <span className="block text-2xl font-bold text-blue-600">{avgProtein}g</span>
        <span className="text-sm text-gray-600">Avg Daily Protein</span>
      </div>
      <div className="text-center p-3 bg-white rounded-lg">
        <span className="block text-2xl font-bold text-amber-600">{avgCarbs}g</span>
        <span className="text-sm text-gray-600">Avg Daily Carbs</span>
      </div>
      <div className="text-center p-3 bg-white rounded-lg">
        <span className="block text-2xl font-bold text-red-600">{avgFat}g</span>
        <span className="text-sm text-gray-600">Avg Daily Fat</span>
      </div>
      <div className="text-center p-3 bg-white rounded-lg">
        <span className="block text-2xl font-bold text-green-600">{avgFiber}g</span>
        <span className="text-sm text-gray-600">Avg Daily Fiber</span>
      </div>
    </div>
  );
}
