'use client';

import Link from 'next/link';
import { recipes, categories } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';

export default function Home() {
  const featuredRecipes = recipes.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plan Your Nigerian Meals
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Discover authentic recipes from top Nigerian food creators.
            Plan your weekly meals and generate grocery lists automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Browse Recipes
            </Link>
            <Link
              href="/meal-plan"
              className="px-8 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-900 transition-colors border border-green-500"
            >
              Start Meal Planning
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">{recipes.length}+</div>
              <div className="text-gray-700">Authentic Recipes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{categories.length}</div>
              <div className="text-gray-700">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">10+</div>
              <div className="text-gray-700">Featured Creators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(cat => (
              <Link
                key={cat.id}
                href={`/recipes?category=${cat.id}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <span className="text-4xl mb-2 block">{cat.emoji}</span>
                <span className="font-medium text-gray-700">{cat.name}</span>
                <span className="block text-sm text-gray-700 mt-1">
                  {recipes.filter(r => r.category === cat.id).length} recipes
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Recipes</h2>
            <Link
              href="/recipes"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">1. Browse Recipes</h3>
              <p className="text-gray-700">
                Explore authentic Nigerian recipes from your favorite food creators
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">2. Plan Your Week</h3>
              <p className="text-gray-700">
                Add meals to your weekly planner for breakfast, lunch, and dinner
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">3. Shop Smart</h3>
              <p className="text-gray-700">
                Get an auto-generated grocery list organized by category
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to eat like a true Nigerian?
          </h2>
          <p className="text-gray-600 mb-6">
            Start planning your meals today and never wonder &quot;wetin I go cook?&quot; again.
          </p>
          <Link
            href="/meal-plan"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Planning Now
          </Link>
        </div>
      </section>
    </div>
  );
}
