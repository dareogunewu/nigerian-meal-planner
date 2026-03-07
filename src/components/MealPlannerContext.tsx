'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Recipe, MealTime, GroceryItem } from '@/types';
import { getRecipeById } from '@/data/recipes';

type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface MealPlanState {
  [key: string]: { // day of week
    breakfast?: string; // recipe id
    lunch?: string;
    dinner?: string;
  };
}

interface MealPlannerContextType {
  mealPlan: MealPlanState;
  addMealToPlan: (day: DayOfWeek, mealTime: MealTime, recipeId: string) => void;
  removeMealFromPlan: (day: DayOfWeek, mealTime: MealTime) => void;
  clearMealPlan: () => void;
  getGroceryList: () => GroceryItem[];
  getMealPlanRecipes: () => Recipe[];
}

const MealPlannerContext = createContext<MealPlannerContextType | undefined>(undefined);

const DAYS: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const initialMealPlan: MealPlanState = DAYS.reduce((acc, day) => {
  acc[day] = {};
  return acc;
}, {} as MealPlanState);

export function MealPlannerProvider({ children }: { children: ReactNode }) {
  const [mealPlan, setMealPlan] = useState<MealPlanState>(initialMealPlan);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nigerianMealPlan');
    if (saved) {
      try {
        setMealPlan(JSON.parse(saved));
      } catch {
        setMealPlan(initialMealPlan);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('nigerianMealPlan', JSON.stringify(mealPlan));
    }
  }, [mealPlan, isLoaded]);

  const addMealToPlan = (day: DayOfWeek, mealTime: MealTime, recipeId: string) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealTime]: recipeId,
      },
    }));
  };

  const removeMealFromPlan = (day: DayOfWeek, mealTime: MealTime) => {
    setMealPlan(prev => {
      const newDayPlan = { ...prev[day] };
      delete newDayPlan[mealTime];
      return {
        ...prev,
        [day]: newDayPlan,
      };
    });
  };

  const clearMealPlan = () => {
    setMealPlan(initialMealPlan);
  };

  const getMealPlanRecipes = (): Recipe[] => {
    const recipeIds = new Set<string>();
    DAYS.forEach(day => {
      const dayPlan = mealPlan[day];
      if (dayPlan.breakfast) recipeIds.add(dayPlan.breakfast);
      if (dayPlan.lunch) recipeIds.add(dayPlan.lunch);
      if (dayPlan.dinner) recipeIds.add(dayPlan.dinner);
    });

    return Array.from(recipeIds)
      .map(id => getRecipeById(id))
      .filter((r): r is Recipe => r !== undefined);
  };

  const getGroceryList = (): GroceryItem[] => {
    const recipes = getMealPlanRecipes();
    const ingredientMap = new Map<string, GroceryItem>();

    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        const key = ing.name.toLowerCase();
        if (ingredientMap.has(key)) {
          // Combine amounts (simplified - just show both)
          const existing = ingredientMap.get(key)!;
          existing.amount = `${existing.amount} + ${ing.amount} ${ing.unit}`;
        } else {
          ingredientMap.set(key, {
            ingredient: ing.name,
            amount: ing.amount,
            unit: ing.unit,
            category: ing.category,
            checked: false,
          });
        }
      });
    });

    // Sort by category
    const categoryOrder = ['protein', 'vegetable', 'grain', 'spice', 'oil', 'dairy', 'other'];
    return Array.from(ingredientMap.values()).sort((a, b) => {
      return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
    });
  };

  return (
    <MealPlannerContext.Provider
      value={{
        mealPlan,
        addMealToPlan,
        removeMealFromPlan,
        clearMealPlan,
        getGroceryList,
        getMealPlanRecipes,
      }}
    >
      {children}
    </MealPlannerContext.Provider>
  );
}

export function useMealPlanner() {
  const context = useContext(MealPlannerContext);
  if (context === undefined) {
    throw new Error('useMealPlanner must be used within a MealPlannerProvider');
  }
  return context;
}

export { DAYS };
export type { DayOfWeek };
