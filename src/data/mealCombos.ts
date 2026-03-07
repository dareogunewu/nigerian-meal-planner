import { MealCombo, DietGoalInfo, DietGoal, MealTime, NutritionInfo } from '@/types';

// Diet goal definitions with nutritional targets
export const dietGoals: DietGoalInfo[] = [
  {
    id: 'high-protein-weight-loss',
    name: 'High Protein Weight Loss',
    description: 'High protein meals to build muscle and burn fat. Focus on lean proteins, vegetables, and controlled portions.',
    dailyTargets: {
      calories: { min: 1200, max: 1600 },
      protein: { min: 80, max: 150 },
      carbs: { min: 50, max: 150 },
    },
  },
  {
    id: 'low-carb',
    name: 'Low Carb',
    description: 'Reduce carbohydrates while enjoying satisfying Nigerian meals. Great for blood sugar control.',
    dailyTargets: {
      calories: { min: 1400, max: 1800 },
      protein: { min: 60, max: 120 },
      carbs: { min: 20, max: 100 },
    },
  },
  {
    id: 'balanced',
    name: 'Balanced Diet',
    description: 'Well-rounded meals with good portions of proteins, carbs, and vegetables for overall health.',
    dailyTargets: {
      calories: { min: 1800, max: 2200 },
      protein: { min: 50, max: 100 },
      carbs: { min: 150, max: 250 },
    },
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian',
    description: 'Plant-based Nigerian meals without meat or fish. Rich in beans, vegetables, and plant proteins.',
    dailyTargets: {
      calories: { min: 1600, max: 2000 },
      protein: { min: 40, max: 80 },
      carbs: { min: 150, max: 250 },
    },
  },
  {
    id: 'budget-friendly',
    name: 'Budget Friendly',
    description: 'Affordable Nigerian meals that are nutritious and filling without breaking the bank.',
    dailyTargets: {
      calories: { min: 1600, max: 2200 },
      protein: { min: 50, max: 100 },
      carbs: { min: 150, max: 300 },
    },
  },
];

// Complete meal combinations
export const mealCombos: MealCombo[] = [
  // === BREAKFAST COMBOS ===
  {
    id: 'akara-pap',
    name: 'Akara with Pap',
    description: 'Crispy bean fritters with smooth fermented corn pudding. Classic Nigerian breakfast.',
    recipes: ['akara'],
    suitableFor: ['breakfast'],
    dietGoals: ['high-protein-weight-loss', 'vegetarian', 'budget-friendly'],
    totalNutrition: {
      calories: 280,
      protein: 14,
      carbs: 32,
      fat: 10,
      fiber: 6,
    },
  },
  {
    id: 'boiled-yam-egg-sauce',
    name: 'Boiled Yam with Egg Sauce',
    description: 'Soft boiled yam served with spicy scrambled eggs and vegetables.',
    recipes: ['boiled-yam', 'egg-sauce'],
    suitableFor: ['breakfast'],
    dietGoals: ['high-protein-weight-loss', 'balanced', 'budget-friendly'],
    totalNutrition: {
      calories: 380,
      protein: 18,
      carbs: 45,
      fat: 14,
      fiber: 4,
    },
  },
  {
    id: 'nigerian-pancakes-breakfast',
    name: 'Nigerian Pancakes',
    description: 'Light and fluffy Nigerian-style pancakes, perfect for a quick breakfast.',
    recipes: ['nigerian-pancakes'],
    suitableFor: ['breakfast'],
    dietGoals: ['balanced', 'budget-friendly'],
    totalNutrition: {
      calories: 220,
      protein: 6,
      carbs: 28,
      fat: 10,
      fiber: 1,
    },
  },
  {
    id: 'moi-moi-pap',
    name: 'Moi Moi with Pap',
    description: 'Steamed bean pudding with smooth corn pudding. High protein breakfast.',
    recipes: ['moi-moi'],
    suitableFor: ['breakfast', 'lunch'],
    dietGoals: ['high-protein-weight-loss', 'vegetarian', 'balanced'],
    totalNutrition: {
      calories: 320,
      protein: 16,
      carbs: 38,
      fat: 12,
      fiber: 5,
    },
  },
  {
    id: 'boiled-plantain-egg',
    name: 'Boiled Plantain with Eggs',
    description: 'Boiled unripe plantain with fried or scrambled eggs. Simple and nutritious.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['high-protein-weight-loss', 'low-carb', 'balanced'],
    totalNutrition: {
      calories: 350,
      protein: 16,
      carbs: 35,
      fat: 15,
      fiber: 4,
    },
  },

  // === LUNCH COMBOS - RICE BASED ===
  {
    id: 'jollof-rice-chicken',
    name: 'Jollof Rice with Grilled Chicken',
    description: 'Party-style jollof rice served with perfectly grilled chicken. A Nigerian favorite.',
    recipes: ['jollof-rice', 'peppered-chicken'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 580,
      protein: 38,
      carbs: 55,
      fat: 22,
      fiber: 4,
    },
  },
  {
    id: 'fried-rice-chicken',
    name: 'Fried Rice with Chicken',
    description: 'Colorful Nigerian fried rice with vegetables and grilled chicken.',
    recipes: ['fried-rice', 'peppered-chicken'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 620,
      protein: 36,
      carbs: 52,
      fat: 28,
      fiber: 5,
    },
  },
  {
    id: 'rice-buka-stew',
    name: 'White Rice with Buka Stew',
    description: 'Fluffy white rice served with authentic buka-style pepper stew and assorted meats.',
    recipes: ['buka-stew'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 650,
      protein: 35,
      carbs: 58,
      fat: 30,
      fiber: 3,
    },
  },
  {
    id: 'ofada-rice-ayamase',
    name: 'Ofada Rice with Ayamase',
    description: 'Local brown rice with spicy green pepper sauce. Rich and flavorful.',
    recipes: ['ofada-rice'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 520,
      protein: 28,
      carbs: 48,
      fat: 24,
      fiber: 5,
    },
  },
  {
    id: 'coconut-rice-fish',
    name: 'Coconut Rice with Grilled Fish',
    description: 'Fragrant coconut rice paired with seasoned grilled tilapia.',
    recipes: ['coconut-rice', 'grilled-tilapia'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 520,
      protein: 32,
      carbs: 45,
      fat: 22,
      fiber: 3,
    },
  },

  // === LUNCH/DINNER COMBOS - SWALLOW + SOUP ===
  {
    id: 'eba-egusi',
    name: 'Eba with Egusi Soup',
    description: 'Cassava swallow with rich melon seed soup loaded with vegetables and meat.',
    recipes: ['eba', 'egusi-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 720,
      protein: 38,
      carbs: 52,
      fat: 42,
      fiber: 6,
    },
  },
  {
    id: 'pounded-yam-egusi',
    name: 'Pounded Yam with Egusi Soup',
    description: 'Smooth pounded yam with hearty egusi soup. The ultimate comfort meal.',
    recipes: ['pounded-yam', 'egusi-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced'],
    totalNutrition: {
      calories: 780,
      protein: 36,
      carbs: 68,
      fat: 44,
      fiber: 5,
    },
  },
  {
    id: 'fufu-ogbono',
    name: 'Fufu with Ogbono Soup',
    description: 'Soft fufu paired with draw soup made from ogbono seeds.',
    recipes: ['fufu', 'ogbono-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 680,
      protein: 32,
      carbs: 58,
      fat: 35,
      fiber: 5,
    },
  },
  {
    id: 'amala-ewedu-gbegiri',
    name: 'Amala with Ewedu and Gbegiri',
    description: 'Yam flour swallow with jute leaf soup and bean soup combo. Yoruba classic.',
    recipes: ['amala', 'ewedu-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'vegetarian'],
    totalNutrition: {
      calories: 580,
      protein: 22,
      carbs: 72,
      fat: 22,
      fiber: 8,
    },
  },
  {
    id: 'eba-efo-riro',
    name: 'Eba with Efo Riro',
    description: 'Cassava swallow with rich spinach stew loaded with assorted meats.',
    recipes: ['eba', 'efo-riro'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 650,
      protein: 35,
      carbs: 48,
      fat: 38,
      fiber: 6,
    },
  },
  {
    id: 'wheat-okra-soup',
    name: 'Wheat Fufu with Okra Soup',
    description: 'Healthier wheat swallow with low-calorie okra soup. Great for weight loss.',
    recipes: ['okra-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'low-carb'],
    totalNutrition: {
      calories: 420,
      protein: 28,
      carbs: 38,
      fat: 18,
      fiber: 8,
    },
  },
  {
    id: 'tuwo-miyan-kuka',
    name: 'Tuwo Shinkafa with Miyan Kuka',
    description: 'Rice flour swallow with baobab leaf soup. Northern Nigerian specialty.',
    recipes: ['tuwo-shinkafa', 'miyan-kuka'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced'],
    totalNutrition: {
      calories: 520,
      protein: 24,
      carbs: 62,
      fat: 18,
      fiber: 5,
    },
  },
  {
    id: 'ofe-nsala-fufu',
    name: 'Fufu with Ofe Nsala',
    description: 'White soup with catfish and fufu. Light and aromatic Igbo delicacy.',
    recipes: ['fufu', 'ofe-nsala'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'low-carb'],
    totalNutrition: {
      calories: 480,
      protein: 35,
      carbs: 42,
      fat: 18,
      fiber: 3,
    },
  },
  {
    id: 'eba-bitterleaf-soup',
    name: 'Eba with Bitterleaf Soup',
    description: 'Cassava swallow with nutrient-rich bitterleaf soup. Immunity booster.',
    recipes: ['eba', 'bitterleaf-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 580,
      protein: 32,
      carbs: 48,
      fat: 30,
      fiber: 7,
    },
  },

  // === HIGH PROTEIN LOW CARB OPTIONS ===
  {
    id: 'grilled-fish-vegetables',
    name: 'Grilled Fish with Steamed Vegetables',
    description: 'Seasoned grilled tilapia with steamed vegetables. Perfect for weight loss.',
    recipes: ['grilled-tilapia'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'low-carb'],
    totalNutrition: {
      calories: 320,
      protein: 38,
      carbs: 12,
      fat: 14,
      fiber: 5,
    },
  },
  {
    id: 'pepper-soup-fish',
    name: 'Catfish Pepper Soup',
    description: 'Spicy, oil-free catfish pepper soup. Warming and high in protein.',
    recipes: ['pepper-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'low-carb'],
    totalNutrition: {
      calories: 280,
      protein: 35,
      carbs: 8,
      fat: 12,
      fiber: 2,
    },
  },
  {
    id: 'suya-salad',
    name: 'Beef Suya with Nigerian Salad',
    description: 'Spicy grilled suya beef served with fresh Nigerian salad.',
    recipes: ['beef-suya', 'nigerian-salad'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'low-carb'],
    totalNutrition: {
      calories: 380,
      protein: 38,
      carbs: 18,
      fat: 18,
      fiber: 5,
    },
  },
  {
    id: 'asun-plantain',
    name: 'Asun with Fried Plantain',
    description: 'Spicy peppered goat meat with sweet fried plantain.',
    recipes: ['asun'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'balanced'],
    totalNutrition: {
      calories: 480,
      protein: 32,
      carbs: 28,
      fat: 28,
      fiber: 3,
    },
  },
  {
    id: 'gizdodo',
    name: 'Gizdodo (Gizzard and Plantain)',
    description: 'Savory gizzard stir-fried with sweet plantain. Popular party dish.',
    recipes: ['gizdodo'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'balanced'],
    totalNutrition: {
      calories: 420,
      protein: 28,
      carbs: 32,
      fat: 22,
      fiber: 4,
    },
  },

  // === POTTAGE/PORRIDGE OPTIONS ===
  {
    id: 'yam-pottage-fish',
    name: 'Asaro with Smoked Fish',
    description: 'Creamy yam pottage with palm oil and smoked fish.',
    recipes: ['asaro-yam-pottage'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['balanced', 'budget-friendly'],
    totalNutrition: {
      calories: 420,
      protein: 18,
      carbs: 52,
      fat: 16,
      fiber: 5,
    },
  },
  {
    id: 'plantain-pottage',
    name: 'Unripe Plantain Pottage',
    description: 'Hearty plantain porridge with vegetables. Lower glycemic index.',
    recipes: ['unripe-plantain-pottage'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'low-carb', 'budget-friendly'],
    totalNutrition: {
      calories: 320,
      protein: 16,
      carbs: 42,
      fat: 12,
      fiber: 6,
    },
  },
  {
    id: 'beans-plantain',
    name: 'Beans and Fried Plantain',
    description: 'Nigerian brown beans with sweet fried plantain. High protein comfort food.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'vegetarian', 'budget-friendly'],
    totalNutrition: {
      calories: 480,
      protein: 22,
      carbs: 58,
      fat: 18,
      fiber: 12,
    },
  },

  // === SNACK OPTIONS ===
  {
    id: 'puff-puff-snack',
    name: 'Puff Puff',
    description: 'Light and fluffy Nigerian doughnuts. Perfect afternoon snack.',
    recipes: ['puff-puff'],
    suitableFor: ['breakfast'],
    dietGoals: ['balanced', 'budget-friendly'],
    totalNutrition: {
      calories: 180,
      protein: 4,
      carbs: 28,
      fat: 6,
      fiber: 1,
    },
  },
  {
    id: 'meat-pie-snack',
    name: 'Nigerian Meat Pie',
    description: 'Flaky pastry filled with seasoned minced meat and vegetables.',
    recipes: ['nigerian-meat-pie'],
    suitableFor: ['breakfast', 'lunch'],
    dietGoals: ['balanced'],
    totalNutrition: {
      calories: 320,
      protein: 12,
      carbs: 28,
      fat: 18,
      fiber: 2,
    },
  },
];

// Helper function to get meal combos by diet goal
export const getMealCombosByGoal = (goal: DietGoal): MealCombo[] => {
  return mealCombos.filter(combo => combo.dietGoals.includes(goal));
};

// Helper function to get meal combos by meal time
export const getMealCombosByTime = (time: MealTime): MealCombo[] => {
  return mealCombos.filter(combo => combo.suitableFor.includes(time));
};

// Helper function to get meal combos by both goal and time
export const getMealCombosByGoalAndTime = (goal: DietGoal, time: MealTime): MealCombo[] => {
  return mealCombos.filter(
    combo => combo.dietGoals.includes(goal) && combo.suitableFor.includes(time)
  );
};

// Get diet goal info by ID
export const getDietGoalById = (id: DietGoal): DietGoalInfo | undefined => {
  return dietGoals.find(goal => goal.id === id);
};

// Generate a random meal plan for a week based on diet goal
export const generateWeeklyMealPlan = (goal: DietGoal): {
  [day: string]: {
    breakfast: MealCombo | null;
    lunch: MealCombo | null;
    dinner: MealCombo | null;
  };
} => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  const breakfastOptions = getMealCombosByGoalAndTime(goal, 'breakfast');
  const lunchOptions = getMealCombosByGoalAndTime(goal, 'lunch');
  const dinnerOptions = getMealCombosByGoalAndTime(goal, 'dinner');

  // Shuffle function for variety
  const shuffle = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledBreakfast = shuffle(breakfastOptions);
  const shuffledLunch = shuffle(lunchOptions);
  const shuffledDinner = shuffle(dinnerOptions);

  const plan: {
    [day: string]: {
      breakfast: MealCombo | null;
      lunch: MealCombo | null;
      dinner: MealCombo | null;
    };
  } = {};

  days.forEach((day, index) => {
    plan[day] = {
      breakfast: shuffledBreakfast[index % shuffledBreakfast.length] || null,
      lunch: shuffledLunch[index % shuffledLunch.length] || null,
      dinner: shuffledDinner[index % shuffledDinner.length] || null,
    };
  });

  return plan;
};

// Calculate total daily nutrition for a day's meals
export const calculateDailyNutrition = (
  breakfast: MealCombo | null,
  lunch: MealCombo | null,
  dinner: MealCombo | null
): NutritionInfo => {
  const meals = [breakfast, lunch, dinner].filter(Boolean) as MealCombo[];

  return meals.reduce(
    (total, meal) => ({
      calories: total.calories + meal.totalNutrition.calories,
      protein: total.protein + meal.totalNutrition.protein,
      carbs: total.carbs + meal.totalNutrition.carbs,
      fat: total.fat + meal.totalNutrition.fat,
      fiber: total.fiber + meal.totalNutrition.fiber,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );
};
