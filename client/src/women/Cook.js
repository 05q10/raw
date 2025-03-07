import React, { useState } from 'react';
import { Search, Clock, Heart, ChevronDown, ChevronUp, Filter } from 'lucide-react';

const Cook = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Creamy Garlic Parmesan Pasta',
      prepTime: 10,
      cookTime: 20,
      category: 'Pasta',
      difficulty: 'Easy',
      rating: 4.8,
      image: '/api/placeholder/300/200',
      favorite: false
    },
    {
      id: 2,
      title: 'Spicy Grilled Salmon',
      prepTime: 15,
      cookTime: 12,
      category: 'Seafood',
      difficulty: 'Medium',
      rating: 4.5,
      image: '/api/placeholder/300/200',
      favorite: true
    },
    {
      id: 3,
      title: 'Classic Chocolate Chip Cookies',
      prepTime: 15,
      cookTime: 10,
      category: 'Dessert',
      difficulty: 'Easy',
      rating: 4.9,
      image: '/api/placeholder/300/200',
      favorite: false
    },
    {
      id: 4,
      title: 'Vegetable Stir Fry',
      prepTime: 20,
      cookTime: 15,
      category: 'Vegetarian',
      difficulty: 'Easy',
      rating: 4.2,
      image: '/api/placeholder/300/200',
      favorite: false
    },
    {
      id: 5,
      title: 'Homemade Margherita Pizza',
      prepTime: 30,
      cookTime: 15,
      category: 'Italian',
      difficulty: 'Medium',
      rating: 4.7,
      image: '/api/placeholder/300/200',
      favorite: true
    },
    {
      id: 6,
      title: 'Beef and Broccoli Stir Fry',
      prepTime: 15,
      cookTime: 20,
      category: 'Asian',
      difficulty: 'Medium',
      rating: 4.6,
      image: '/api/placeholder/300/200',
      favorite: false
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('rating');
  const [sortDirection, setSortDirection] = useState('desc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Pasta', 'Seafood', 'Dessert', 'Vegetarian', 'Italian', 'Asian'];

  const toggleFavorite = (id) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === id ? {...recipe, favorite: !recipe.favorite} : recipe
    ));
  };

  const filteredRecipes = recipes
    .filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const factor = sortDirection === 'asc' ? 1 : -1;
      if (sortOrder === 'rating') {
        return (a.rating - b.rating) * factor;
      } else if (sortOrder === 'prepTime') {
        return (a.prepTime - b.prepTime) * factor;
      } else if (sortOrder === 'cookTime') {
        return (a.cookTime - b.cookTime) * factor;
      }
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Recipe Dashboard</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            className="pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <button 
            className="flex items-center space-x-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={18} />
            <span>Sort</span>
            {isFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10 w-48">
              <div className="p-2">
                <p className="font-medium text-sm text-gray-700 mb-2">Sort by:</p>
                <div className="space-y-1">
                  <button 
                    className={`w-full text-left px-3 py-2 text-sm rounded-md ${sortOrder === 'rating' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                    onClick={() => {
                      setSortOrder('rating');
                      setSortDirection(sortDirection === 'desc' && sortOrder === 'rating' ? 'asc' : 'desc');
                    }}
                  >
                    Rating {sortOrder === 'rating' && (sortDirection === 'desc' ? '↓' : '↑')}
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-2 text-sm rounded-md ${sortOrder === 'prepTime' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                    onClick={() => {
                      setSortOrder('prepTime');
                      setSortDirection(sortDirection === 'desc' && sortOrder === 'prepTime' ? 'asc' : 'desc');
                    }}
                  >
                    Prep Time {sortOrder === 'prepTime' && (sortDirection === 'desc' ? '↓' : '↑')}
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-2 text-sm rounded-md ${sortOrder === 'cookTime' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                    onClick={() => {
                      setSortOrder('cookTime');
                      setSortDirection(sortDirection === 'desc' && sortOrder === 'cookTime' ? 'asc' : 'desc');
                    }}
                  >
                    Cook Time {sortOrder === 'cookTime' && (sortDirection === 'desc' ? '↓' : '↑')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{recipe.title}</h3>
                  <button 
                    onClick={() => toggleFavorite(recipe.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Heart size={20} fill={recipe.favorite ? "#ef4444" : "none"} color={recipe.favorite ? "#ef4444" : "currentColor"} />
                  </button>
                </div>
                
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {recipe.category}
                  </span>
                  <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {recipe.difficulty}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>Prep: {recipe.prepTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>Cook: {recipe.cookTime} min</span>
                  </div>
                  <div className="flex items-center font-medium text-yellow-500">
                    <span>★ {recipe.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No recipes found. Try adjusting your search or filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cook;