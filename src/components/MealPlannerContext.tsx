'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Recipe, MealTime, GroceryItem, DietGoal, MealCombo, NutritionInfo } from '@/types';
import { getRecipeById } from '@/data/recipes';
import { generateWeeklyMealPlan, mealCombos, calculateDailyNutrition } from '@/data/mealCombos';

type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface MealPlanState {
  [key: string]: { // day of week
    breakfast?: string; // recipe id
    lunch?: string;
    dinner?: string;
  };
}

// Generated meal plan uses combo IDs instead of recipe IDs
interface GeneratedMealPlanState {
  [key: string]: { // day of week
    breakfast?: string; // combo id
    lunch?: string;
    dinner?: string;
  };
}

interface MealPlannerContextType {
  mealPlan: MealPlanState;
  generatedPlan: GeneratedMealPlanState;
  currentDietGoal: DietGoal | null;
  addMealToPlan: (day: DayOfWeek, mealTime: MealTime, recipeId: string) => void;
  removeMealFromPlan: (day: DayOfWeek, mealTime: MealTime) => void;
  clearMealPlan: () => void;
  getGroceryList: () => GroceryItem[];
  getMealPlanRecipes: () => Recipe[];
  generateMealPlanForGoal: (goal: DietGoal) => void;
  clearGeneratedPlan: () => void;
  getComboById: (id: string) => MealCombo | undefined;
  applyGeneratedPlanToMealPlan: () => void;
  getGeneratedPlanNutrition: (day: DayOfWeek) => NutritionInfo;
}

const MealPlannerContext = createContext<MealPlannerContextType | undefined>(undefined);

const DAYS: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const initialMealPlan: MealPlanState = DAYS.reduce((acc, day) => {
  acc[day] = {};
  return acc;
}, {} as MealPlanState);

const initialGeneratedPlan: GeneratedMealPlanState = DAYS.reduce((acc, day) => {
  acc[day] = {};
  return acc;
}, {} as GeneratedMealPlanState);

export function MealPlannerProvider({ children }: { children: ReactNode }) {
  const [mealPlan, setMealPlan] = useState<MealPlanState>(initialMealPlan);
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedMealPlanState>(initialGeneratedPlan);
  const [currentDietGoal, setCurrentDietGoal] = useState<DietGoal | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nigerianMealPlan');
    const savedGenerated = localStorage.getItem('nigerianGeneratedPlan');
    const savedGoal = localStorage.getItem('nigerianDietGoal');
    if (saved) {
      try {
        setMealPlan(JSON.parse(saved));
      } catch {
        setMealPlan(initialMealPlan);
      }
    }
    if (savedGenerated) {
      try {
        setGeneratedPlan(JSON.parse(savedGenerated));
      } catch {
        setGeneratedPlan(initialGeneratedPlan);
      }
    }
    if (savedGoal) {
      setCurrentDietGoal(savedGoal as DietGoal);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('nigerianMealPlan', JSON.stringify(mealPlan));
      localStorage.setItem('nigerianGeneratedPlan', JSON.stringify(generatedPlan));
      if (currentDietGoal) {
        localStorage.setItem('nigerianDietGoal', currentDietGoal);
      }
    }
  }, [mealPlan, generatedPlan, currentDietGoal, isLoaded]);

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

  const generateMealPlanForGoal = (goal: DietGoal) => {
    const plan = generateWeeklyMealPlan(goal);
    const newGeneratedPlan: GeneratedMealPlanState = {};

    DAYS.forEach(day => {
      newGeneratedPlan[day] = {
        breakfast: plan[day].breakfast?.id,
        lunch: plan[day].lunch?.id,
        dinner: plan[day].dinner?.id,
      };
    });

    setGeneratedPlan(newGeneratedPlan);
    setCurrentDietGoal(goal);
  };

  const clearGeneratedPlan = () => {
    setGeneratedPlan(initialGeneratedPlan);
    setCurrentDietGoal(null);
  };

  const getComboById = (id: string): MealCombo | undefined => {
    return mealCombos.find(combo => combo.id === id);
  };

  const applyGeneratedPlanToMealPlan = () => {
    // Convert generated plan (combos) to meal plan (first recipe in combo)
    const newMealPlan: MealPlanState = {};

    DAYS.forEach(day => {
      const dayPlan = generatedPlan[day];
      newMealPlan[day] = {};

      if (dayPlan.breakfast) {
        const combo = getComboById(dayPlan.breakfast);
        if (combo && combo.recipes.length > 0) {
          newMealPlan[day].breakfast = combo.recipes[0];
        }
      }
      if (dayPlan.lunch) {
        const combo = getComboById(dayPlan.lunch);
        if (combo && combo.recipes.length > 0) {
          newMealPlan[day].lunch = combo.recipes[0];
        }
      }
      if (dayPlan.dinner) {
        const combo = getComboById(dayPlan.dinner);
        if (combo && combo.recipes.length > 0) {
          newMealPlan[day].dinner = combo.recipes[0];
        }
      }
    });

    setMealPlan(newMealPlan);
  };

  const getGeneratedPlanNutrition = (day: DayOfWeek): NutritionInfo => {
    const dayPlan = generatedPlan[day];
    const breakfast = dayPlan.breakfast ? getComboById(dayPlan.breakfast) : null;
    const lunch = dayPlan.lunch ? getComboById(dayPlan.lunch) : null;
    const dinner = dayPlan.dinner ? getComboById(dayPlan.dinner) : null;

    return calculateDailyNutrition(breakfast || null, lunch || null, dinner || null);
  };

  return (
    <MealPlannerContext.Provider
      value={{
        mealPlan,
        generatedPlan,
        currentDietGoal,
        addMealToPlan,
        removeMealFromPlan,
        clearMealPlan,
        getGroceryList,
        getMealPlanRecipes,
        generateMealPlanForGoal,
        clearGeneratedPlan,
        getComboById,
        applyGeneratedPlanToMealPlan,
        getGeneratedPlanNutrition,
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
