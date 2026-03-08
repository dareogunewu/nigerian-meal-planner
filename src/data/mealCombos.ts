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
  {
    id: 'light-meals',
    name: 'Light Meals',
    description: 'Smaller portions and lighter options for those who prefer not to feel too full. Great for seniors or light eaters.',
    dailyTargets: {
      calories: { min: 1000, max: 1400 },
      protein: { min: 40, max: 70 },
      carbs: { min: 80, max: 150 },
    },
  },
  {
    id: 'muscle-gain',
    name: 'Muscle Gain',
    description: 'High calorie, high protein meals for those looking to build muscle mass and strength.',
    dailyTargets: {
      calories: { min: 2200, max: 3000 },
      protein: { min: 120, max: 180 },
      carbs: { min: 200, max: 350 },
    },
  },
  {
    id: 'diabetic-friendly',
    name: 'Diabetic Friendly',
    description: 'Low glycemic index meals with controlled carbs and natural ingredients. Helps manage blood sugar levels.',
    dailyTargets: {
      calories: { min: 1400, max: 1800 },
      protein: { min: 60, max: 100 },
      carbs: { min: 80, max: 130 },
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

  // === LIGHT BREAKFAST OPTIONS ===
  {
    id: 'oats-fruits',
    name: 'Oatmeal with Fresh Fruits',
    description: 'Warm oatmeal topped with Nigerian fruits like pawpaw, banana, and mango.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'diabetic-friendly', 'balanced', 'vegetarian'],
    totalNutrition: {
      calories: 180,
      protein: 5,
      carbs: 32,
      fat: 4,
      fiber: 5,
    },
  },
  {
    id: 'boiled-eggs-garden-egg',
    name: 'Boiled Eggs with Garden Egg',
    description: 'Simple boiled eggs with fresh garden egg and groundnut. Light and protein-rich.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'low-carb', 'diabetic-friendly', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 160,
      protein: 12,
      carbs: 6,
      fat: 10,
      fiber: 2,
    },
  },
  {
    id: 'fruit-smoothie',
    name: 'Nigerian Fruit Smoothie',
    description: 'Blended pawpaw, banana, and pineapple. Refreshing and light.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'vegetarian', 'balanced'],
    totalNutrition: {
      calories: 140,
      protein: 2,
      carbs: 32,
      fat: 1,
      fiber: 4,
    },
  },
  {
    id: 'plain-pap',
    name: 'Plain Pap (Ogi)',
    description: 'Light fermented corn pudding. Easy on the stomach, perfect for a gentle start.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'diabetic-friendly', 'budget-friendly'],
    totalNutrition: {
      calories: 120,
      protein: 2,
      carbs: 26,
      fat: 1,
      fiber: 1,
    },
  },
  {
    id: 'okpa-light',
    name: 'Okpa',
    description: 'Bambara nut pudding. Light, protein-rich, and filling without being heavy.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'diabetic-friendly', 'vegetarian', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 200,
      protein: 10,
      carbs: 22,
      fat: 8,
      fiber: 4,
    },
  },
  {
    id: 'toast-egg',
    name: 'Toast with Fried Egg',
    description: 'Simple toasted bread with fried egg. Quick and satisfying light breakfast.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'balanced', 'budget-friendly'],
    totalNutrition: {
      calories: 220,
      protein: 10,
      carbs: 22,
      fat: 10,
      fiber: 2,
    },
  },
  {
    id: 'tea-bread',
    name: 'Tea with Bread and Butter',
    description: 'Classic Nigerian breakfast. Hot tea with buttered bread.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'budget-friendly'],
    totalNutrition: {
      calories: 200,
      protein: 4,
      carbs: 28,
      fat: 8,
      fiber: 1,
    },
  },
  {
    id: 'agege-bread-akamu',
    name: 'Agege Bread with Akamu',
    description: 'Soft Nigerian bread with smooth pap. A filling but light combination.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['light-meals', 'budget-friendly', 'balanced'],
    totalNutrition: {
      calories: 240,
      protein: 6,
      carbs: 42,
      fat: 6,
      fiber: 2,
    },
  },

  // === MUSCLE GAIN BREAKFAST ===
  {
    id: 'yam-beans-egg',
    name: 'Yam with Beans and Eggs',
    description: 'Hearty breakfast with boiled yam, beans, and eggs for maximum protein.',
    recipes: [],
    suitableFor: ['breakfast'],
    dietGoals: ['muscle-gain', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 550,
      protein: 32,
      carbs: 65,
      fat: 18,
      fiber: 12,
    },
  },
  {
    id: 'double-akara-pap',
    name: 'Double Akara with Pap',
    description: 'Extra portion of bean fritters for serious protein needs.',
    recipes: ['akara'],
    suitableFor: ['breakfast'],
    dietGoals: ['muscle-gain'],
    totalNutrition: {
      calories: 480,
      protein: 26,
      carbs: 48,
      fat: 20,
      fiber: 10,
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

  // === LIGHT MEALS - LUNCH/DINNER ===
  {
    id: 'light-vegetable-soup',
    name: 'Light Vegetable Soup',
    description: 'Clear soup with assorted vegetables and small fish. Very easy on the stomach.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals', 'diabetic-friendly', 'low-carb'],
    totalNutrition: {
      calories: 180,
      protein: 15,
      carbs: 12,
      fat: 8,
      fiber: 4,
    },
  },
  {
    id: 'small-portion-jollof',
    name: 'Light Jollof Rice with Chicken',
    description: 'Smaller portion of jollof rice with grilled chicken. Satisfying but not heavy.',
    recipes: ['jollof-rice', 'peppered-chicken'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals'],
    totalNutrition: {
      calories: 380,
      protein: 24,
      carbs: 38,
      fat: 14,
      fiber: 3,
    },
  },
  {
    id: 'moi-moi-only',
    name: 'Moi Moi with Vegetables',
    description: 'Single portion of steamed bean pudding with vegetable salad. Light and filling.',
    recipes: ['moi-moi'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals', 'vegetarian', 'diabetic-friendly'],
    totalNutrition: {
      calories: 220,
      protein: 14,
      carbs: 24,
      fat: 8,
      fiber: 6,
    },
  },
  {
    id: 'light-fish-pepper-soup',
    name: 'Light Fish Pepper Soup',
    description: 'Mild pepper soup with small fish. Warming and gentle on digestion.',
    recipes: ['pepper-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals', 'diabetic-friendly', 'low-carb'],
    totalNutrition: {
      calories: 160,
      protein: 22,
      carbs: 6,
      fat: 6,
      fiber: 1,
    },
  },
  {
    id: 'small-beans-porridge',
    name: 'Light Beans Porridge',
    description: 'Small portion of beans with minimal palm oil. Protein-rich but light.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals', 'budget-friendly', 'vegetarian'],
    totalNutrition: {
      calories: 240,
      protein: 14,
      carbs: 32,
      fat: 6,
      fiber: 10,
    },
  },
  {
    id: 'coleslaw-grilled-chicken',
    name: 'Coleslaw with Grilled Chicken',
    description: 'Fresh vegetable coleslaw with grilled chicken breast. Very light option.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals', 'low-carb', 'diabetic-friendly'],
    totalNutrition: {
      calories: 220,
      protein: 26,
      carbs: 10,
      fat: 10,
      fiber: 3,
    },
  },
  {
    id: 'small-ewa-agoyin',
    name: 'Light Ewa Agoyin',
    description: 'Small portion of mashed beans with light sauce. Gentle comfort food.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals', 'budget-friendly', 'vegetarian'],
    totalNutrition: {
      calories: 260,
      protein: 12,
      carbs: 36,
      fat: 8,
      fiber: 8,
    },
  },
  {
    id: 'steamed-fish-plantain',
    name: 'Steamed Fish with Boiled Plantain',
    description: 'Steamed fish with small portion of boiled plantain. Simple and light.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['light-meals', 'diabetic-friendly'],
    totalNutrition: {
      calories: 280,
      protein: 28,
      carbs: 28,
      fat: 6,
      fiber: 3,
    },
  },

  // === MUSCLE GAIN - LUNCH/DINNER ===
  {
    id: 'double-protein-jollof',
    name: 'Jollof Rice with Double Protein',
    description: 'Large portion of jollof rice with grilled chicken AND beef. Maximum gains.',
    recipes: ['jollof-rice', 'peppered-chicken'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain'],
    totalNutrition: {
      calories: 850,
      protein: 58,
      carbs: 68,
      fat: 38,
      fiber: 5,
    },
  },
  {
    id: 'massive-eba-egusi',
    name: 'Large Eba with Egusi Soup',
    description: 'Generous portion of eba with egusi soup loaded with assorted meats.',
    recipes: ['eba', 'egusi-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain'],
    totalNutrition: {
      calories: 920,
      protein: 52,
      carbs: 72,
      fat: 48,
      fiber: 8,
    },
  },
  {
    id: 'pounded-yam-ofe-nsala-fish',
    name: 'Pounded Yam with Ofe Nsala and Fish',
    description: 'Large pounded yam with catfish pepper soup. High calorie traditional meal.',
    recipes: ['pounded-yam', 'ofe-nsala'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 780,
      protein: 48,
      carbs: 72,
      fat: 32,
      fiber: 4,
    },
  },
  {
    id: 'rice-beans-meat',
    name: 'Rice and Beans with Assorted Meat',
    description: 'Large portion of rice and beans with multiple proteins. Serious fuel.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain'],
    totalNutrition: {
      calories: 880,
      protein: 52,
      carbs: 92,
      fat: 32,
      fiber: 14,
    },
  },
  {
    id: 'suya-yam',
    name: 'Beef Suya with Fried Yam',
    description: 'Large portion of spicy suya with chunky fried yam. High protein and carbs.',
    recipes: ['beef-suya'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain'],
    totalNutrition: {
      calories: 820,
      protein: 48,
      carbs: 68,
      fat: 40,
      fiber: 5,
    },
  },
  {
    id: 'amala-gbegiri-ewedu-beef',
    name: 'Amala with Gbegiri, Ewedu and Beef',
    description: 'Traditional Yoruba meal with extra beef. Hearty and filling.',
    recipes: ['amala', 'ewedu-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain', 'balanced'],
    totalNutrition: {
      calories: 750,
      protein: 42,
      carbs: 82,
      fat: 28,
      fiber: 10,
    },
  },
  {
    id: 'coconut-rice-assorted',
    name: 'Coconut Rice with Assorted Protein',
    description: 'Large coconut rice with chicken, beef, and fish. Complete protein bomb.',
    recipes: ['coconut-rice'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain'],
    totalNutrition: {
      calories: 820,
      protein: 56,
      carbs: 62,
      fat: 38,
      fiber: 4,
    },
  },
  {
    id: 'eba-afang-soup',
    name: 'Large Eba with Afang Soup',
    description: 'Generous eba with protein-rich afang soup. Cross River specialty.',
    recipes: ['eba'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['muscle-gain', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 780,
      protein: 48,
      carbs: 58,
      fat: 42,
      fiber: 8,
    },
  },

  // === CAJUN/INTERNATIONAL OPTIONS ===
  {
    id: 'cajun-chicken-potatoes',
    name: "Earl's Cajun Chicken with Roasted Potatoes",
    description: 'Spicy blackened Cajun chicken served with crispy roasted potatoes. Hearty and flavorful.',
    recipes: ['cajun-chicken', 'roasted-potatoes'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'balanced', 'muscle-gain'],
    totalNutrition: {
      calories: 460,
      protein: 46,
      carbs: 34,
      fat: 18,
      fiber: 5,
    },
  },
  {
    id: 'cajun-chicken-salad',
    name: "Earl's Cajun Chicken with Garden Salad",
    description: 'Spicy Cajun chicken breast on a bed of fresh mixed greens. Low carb and satisfying.',
    recipes: ['cajun-chicken'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['high-protein-weight-loss', 'low-carb', 'diabetic-friendly', 'light-meals'],
    totalNutrition: {
      calories: 320,
      protein: 44,
      carbs: 8,
      fat: 14,
      fiber: 3,
    },
  },

  // === DIABETIC FRIENDLY - LUNCH/DINNER ===
  {
    id: 'unripe-plantain-fish-stew',
    name: 'Unripe Plantain with Fish Stew',
    description: 'Low GI unripe plantain with tomato fish stew. Good for blood sugar.',
    recipes: ['unripe-plantain-pottage'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 360,
      protein: 26,
      carbs: 38,
      fat: 12,
      fiber: 6,
    },
  },
  {
    id: 'ofe-nsala-fufu-wheat',
    name: 'Wheat Fufu with Ofe Nsala',
    description: 'Whole wheat fufu with white soup. Lower glycemic alternative.',
    recipes: ['ofe-nsala'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 420,
      protein: 32,
      carbs: 42,
      fat: 16,
      fiber: 6,
    },
  },
  {
    id: 'beans-vegetable',
    name: 'Brown Beans with Garden Salad',
    description: 'Protein-rich beans with fresh vegetables. Excellent blood sugar control.',
    recipes: [],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'vegetarian', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 320,
      protein: 20,
      carbs: 42,
      fat: 8,
      fiber: 14,
    },
  },
  {
    id: 'grilled-chicken-vegetables',
    name: 'Grilled Chicken with Steamed Vegetables',
    description: 'Lean grilled chicken with mixed steamed vegetables. Very low carb.',
    recipes: ['peppered-chicken'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'low-carb', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 280,
      protein: 36,
      carbs: 8,
      fat: 12,
      fiber: 4,
    },
  },
  {
    id: 'ofada-rice-controlled',
    name: 'Small Portion Ofada Rice with Vegetables',
    description: 'Controlled portion of brown Ofada rice with green vegetables.',
    recipes: ['ofada-rice'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'balanced'],
    totalNutrition: {
      calories: 340,
      protein: 18,
      carbs: 42,
      fat: 12,
      fiber: 6,
    },
  },
  {
    id: 'pepper-soup-goat',
    name: 'Goat Meat Pepper Soup',
    description: 'Lean goat meat in spicy broth. Very low carb and satisfying.',
    recipes: ['pepper-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'low-carb', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 260,
      protein: 32,
      carbs: 6,
      fat: 12,
      fiber: 2,
    },
  },
  {
    id: 'egusi-cabbage-wrap',
    name: 'Egusi with Cabbage Wrap',
    description: 'Egusi soup served with steamed cabbage instead of swallow. Very low carb.',
    recipes: ['egusi-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'low-carb'],
    totalNutrition: {
      calories: 340,
      protein: 28,
      carbs: 14,
      fat: 22,
      fiber: 6,
    },
  },
  {
    id: 'okro-soup-fish',
    name: 'Okro Soup with Fish',
    description: 'Low carb okro soup with fish. Natural blood sugar regulator.',
    recipes: ['okra-soup'],
    suitableFor: ['lunch', 'dinner'],
    dietGoals: ['diabetic-friendly', 'low-carb', 'high-protein-weight-loss'],
    totalNutrition: {
      calories: 240,
      protein: 28,
      carbs: 12,
      fat: 10,
      fiber: 5,
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
