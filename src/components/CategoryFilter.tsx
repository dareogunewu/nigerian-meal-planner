'use client';

import { categories, dietaryTags } from '@/data/recipes';
import { MealCategory, DietaryTag } from '@/types';

interface CategoryFilterProps {
  selectedCategory: MealCategory | 'all';
  selectedDietaryTags: DietaryTag[];
  onCategoryChange: (category: MealCategory | 'all') => void;
  onDietaryTagToggle: (tag: DietaryTag) => void;
}

export default function CategoryFilter({
  selectedCategory,
  selectedDietaryTags,
  onCategoryChange,
  onDietaryTagToggle,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                selectedCategory === cat.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dietary Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Dietary Preferences</h3>
        <div className="flex flex-wrap gap-2">
          {dietaryTags.map(tag => (
            <button
              key={tag.id}
              onClick={() => onDietaryTagToggle(tag.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedDietaryTags.includes(tag.id)
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
