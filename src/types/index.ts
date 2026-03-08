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

// Meal Goals for auto-generation
export type DietGoal =
  | 'high-protein-weight-loss'
  | 'low-carb'
  | 'balanced'
  | 'vegetarian'
  | 'budget-friendly'
  | 'light-meals'
  | 'muscle-gain'
  | 'diabetic-friendly';

export interface DietGoalInfo {
  id: DietGoal;
  name: string;
  description: string;
  dailyTargets: {
    calories: { min: number; max: number };
    protein: { min: number; max: number };
    carbs: { min: number; max: number };
  };
}

// Meal Combo - complete meals (e.g., Rice + Stew, Swallow + Soup)
export interface MealCombo {
  id: string;
  name: string;
  description: string;
  recipes: string[]; // recipe IDs that make up this combo
  suitableFor: MealTime[];
  dietGoals: DietGoal[];
  totalNutrition: NutritionInfo;
}
