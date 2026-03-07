export type DietaryTag = 'vegetarian' | 'vegan' | 'low-carb' | 'gluten-free' | 'dairy-free' | 'high-protein';

export type MealCategory = 'soup' | 'stew' | 'rice' | 'swallow' | 'snack' | 'breakfast' | 'protein' | 'side';

export type MealTime = 'breakfast' | 'lunch' | 'dinner';

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
  category: 'protein' | 'vegetable' | 'grain' | 'spice' | 'oil' | 'dairy' | 'other';
}

export interface NutritionInfo {
  calories: number;      // per serving
  protein: number;       // grams
  carbs: number;         // grams
  fat: number;           // grams
  fiber: number;         // grams
  sodium?: number;       // mg (optional)
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: MealCategory;
  dietaryTags: DietaryTag[];
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition?: NutritionInfo;
  imageUrl?: string;
  creator?: {
    name: string;
    channel?: string;
    website?: string;
  };
  tips?: string[];
}

export interface MealPlan {
  id: string;
  weekStartDate: string; // ISO date string
  meals: {
    [key: string]: { // day of week: 'monday', 'tuesday', etc.
      breakfast?: string; // recipe id
      lunch?: string;
      dinner?: string;
    };
  };
}

export interface GroceryItem {
  ingredient: string;
  amount: string;
  unit: string;
  category: Ingredient['category'];
  checked: boolean;
}
