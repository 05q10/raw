import React, { useState } from 'react';

const Shopping = () => {
  // User profile and preferences
  const [userProfile, setUserProfile] = useState({
    name: "Jamie Smith",
    preferences: ["Business Casual", "Smart Casual", "Minimalist"],
    favoriteColors: ["Navy", "Burgundy", "Forest Green"],
    sizes: { top: "M", bottom: "32", shoes: "9" },
    budget: {
      monthly: 300,
      spent: 145,
      remaining: 155
    },
    ethicalPreferences: ["Sustainable", "Women-Led", "Fair Trade", "Organic"]
  });

  // State for active tab
  const [activeTab, setActiveTab] = useState('ethical');

  // Ethical & sustainable products
  const [ethicalProducts, setEthicalProducts] = useState([
    {
      id: 1,
      name: "Organic Cotton Blazer",
      brand: "EcoStyle",
      price: 129.99,
      originalPrice: 179.99,
      image: "/api/placeholder/180/220",
      tags: ["Women-Led", "Sustainable", "Fair Trade"],
      rating: 4.7,
      impact: "Saves 500 gallons of water compared to conventional cotton"
    },
    {
      id: 2,
      name: "Recycled Leather Portfolio",
      brand: "GreenOffice",
      price: 79.99,
      originalPrice: 99.99,
      image: "/api/placeholder/180/220",
      tags: ["Eco-Friendly", "B-Corp"],
      rating: 4.5,
      impact: "Made from 100% recycled materials, zero waste production"
    },
    {
      id: 3,
      name: "Hemp Office Shirt",
      brand: "NaturalThreads",
      price: 69.99,
      originalPrice: 89.99,
      image: "/api/placeholder/180/220",
      tags: ["Organic", "Carbon-Neutral"],
      rating: 4.6,
      impact: "Hemp requires 50% less water than cotton and no pesticides"
    },
    {
      id: 4,
      name: "Bamboo Desk Organizer",
      brand: "EcoWorkspace",
      price: 45.99,
      originalPrice: 59.99,
      image: "/api/placeholder/180/220",
      tags: ["Sustainable", "Women-Led"],
      rating: 4.3,
      impact: "Made from fast-growing bamboo from certified sustainable forests"
    }
  ]);

  // Budget-friendly deals
  const [budgetFinds, setBudgetFinds] = useState([
    {
      id: 1,
      name: "Merino Wool Sweater",
      brand: "EssentialWear",
      price: 49.99,
      originalPrice: 129.99,
      discount: 62,
      image: "/api/placeholder/180/220",
      match: 95,
      dealEnds: "2 days"
    },
    {
      id: 2,
      name: "Leather Laptop Bag",
      brand: "UrbanGear",
      price: 65.99,
      originalPrice: 149.99,
      discount: 56,
      image: "/api/placeholder/180/220",
      match: 91,
      dealEnds: "Today"
    },
    {
      id: 3,
      name: "Smart Watch",
      brand: "TechStyle",
      price: 89.99,
      originalPrice: 199.99,
      discount: 55,
      image: "/api/placeholder/180/220",
      match: 88,
      dealEnds: "3 days"
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      brand: "SoundPro",
      price: 59.99,
      originalPrice: 119.99,
      discount: 50,
      image: "/api/placeholder/180/220",
      match: 87,
      dealEnds: "5 days"
    }
  ]);

  // Virtual outfits
  const [outfitOptions, setOutfitOptions] = useState([
    {
      id: 1,
      name: "Business Meeting",
      items: [
        { name: "Navy Blazer", brand: "EcoStyle", price: 129.99 },
        { name: "White Button-Up", brand: "NaturalThreads", price: 69.99 },
        { name: "Tailored Pants", brand: "UrbanGear", price: 89.99 },
        { name: "Leather Oxfords", brand: "FairStep", price: 119.99 }
      ],
      image: "/api/placeholder/380/280",
      occasion: "Work",
      totalPrice: 409.96
    },
    {
      id: 2,
      name: "Smart Casual",
      items: [
        { name: "Merino Cardigan", brand: "EssentialWear", price: 79.99 },
        { name: "Organic Cotton Tee", brand: "NaturalThreads", price: 35.99 },
        { name: "Slim Chinos", brand: "UrbanGear", price: 69.99 },
        { name: "Leather Sneakers", brand: "FairStep", price: 89.99 }
      ],
      image: "/api/placeholder/380/280",
      occasion: "Casual Friday",
      totalPrice: 275.96
    },
    {
      id: 3,
      name: "Weekend Casual",
      items: [
        { name: "Denim Jacket", brand: "UrbanGear", price: 99.99 },
        { name: "Printed Tee", brand: "GraphicCollective", price: 29.99 },
        { name: "Slim Jeans", brand: "DenimCo", price: 79.99 },
        { name: "Canvas Sneakers", brand: "EcoKicks", price: 59.99 }
      ],
      image: "/api/placeholder/380/280",
      occasion: "Weekend",
      totalPrice: 269.96
    }
  ]);

  // Active outfit for virtual try-on
  const [activeOutfit, setActiveOutfit] = useState(null);

  // Toggle virtual try-on modal
  const [showTryOn, setShowTryOn] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Shopping Hub</h1>
              <p className="text-gray-600">Welcome back, {userProfile.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ${userProfile.budget.remaining} remaining this month
              </div>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              className={`pb-4 px-1 ${activeTab === 'ethical' ? 'border-b-2 border-green-500 text-green-600 font-medium' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('ethical')}
            >
              Ethical & Sustainable
            </button>
            <button
              className={`pb-4 px-1 ${activeTab === 'budget' ? 'border-b-2 border-blue-500 text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('budget')}
            >
              Budget-Friendly Finds
            </button>
            <button
              className={`pb-4 px-1 ${activeTab === 'stylist' ? 'border-b-2 border-purple-500 text-purple-600 font-medium' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('stylist')}
            >
              Personal Stylist
            </button>
          </nav>
        </div>

        {/* Ethical & Sustainable Section */}
        {activeTab === 'ethical' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Ethical & Sustainable Shopping</h2>
              <div className="flex space-x-2">
                {userProfile.ethicalPreferences.map((pref, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {pref}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ethicalProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{product.name}</h3>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
                    <div className="flex space-x-2 mt-2">
                      {product.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{product.impact}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-gray-800">${product.price}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      </div>
                      <button className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Budget-Friendly Finds Section */}
        {activeTab === 'budget' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">AI-Recommended Deals</h2>
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                Set Deal Alerts
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {budgetFinds.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 rounded-br-lg font-medium">
                      {product.discount}% OFF
                    </div>
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{product.name}</h3>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {product.match}% Match
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
                    <p className="text-xs text-red-600 mt-2">Deal ends in {product.dealEnds}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-gray-800">${product.price}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      </div>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-blue-800">Your Budget Status</h3>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(userProfile.budget.spent / userProfile.budget.monthly) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-sm text-gray-600">
                <span>Spent: ${userProfile.budget.spent}</span>
                <span>Remaining: ${userProfile.budget.remaining}</span>
              </div>
            </div>
          </div>
        )}

        {/* Personal Stylist Section */}
        {activeTab === 'stylist' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Personal Stylist</h2>
              <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
                Update Style Profile
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-medium text-gray-800 mb-4">Your Style Preferences</h3>
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-sm text-gray-500">Favorite Styles</p>
                  <div className="flex space-x-2 mt-1">
                    {userProfile.preferences.map((style, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Favorite Colors</p>
                  <div className="flex space-x-2 mt-1">
                    {userProfile.favoriteColors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Your Sizes</p>
                  <div className="flex space-x-2 mt-1">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      Top: {userProfile.sizes.top}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      Bottom: {userProfile.sizes.bottom}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      Shoes: {userProfile.sizes.shoes}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-medium text-gray-800 mb-4">Recommended Outfits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outfitOptions.map(outfit => (
                <div key={outfit.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img src={outfit.image} alt={outfit.name} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{outfit.name}</h3>
                      <span className="text-sm text-gray-500">{outfit.occasion}</span>
                    </div>
                    <div className="mt-2">
                      <ul className="text-sm text-gray-600">
                        {outfit.items.slice(0, 2).map((item, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                          </li>
                        ))}
                        {outfit.items.length > 2 && (
                          <li className="text-gray-500 text-sm">
                            + {outfit.items.length - 2} more items
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-500">Total:</span>
                        <span className="ml-1 font-bold text-gray-800">${outfit.totalPrice.toFixed(2)}</span>
                      </div>
                      <button 
                        className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                        onClick={() => {
                          setActiveOutfit(outfit);
                          setShowTryOn(true);
                        }}
                      >
                        Try On
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Virtual Try-on Modal */}
            {showTryOn && activeOutfit && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Virtual Try-on: {activeOutfit.name}</h3>
                      <button 
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setShowTryOn(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img src={activeOutfit.image} alt={activeOutfit.name} className="w-full h-96 object-cover rounded-lg" />
                        <div className="mt-4 flex space-x-2">
                          <button className="flex-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm font-medium">
                            Change Background
                          </button>
                          <button className="flex-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm font-medium">
                            Adjust Lighting
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Outfit Details</h4>
                        <ul className="space-y-4">
                          {activeOutfit.items.map((item, index) => (
                            <li key={index} className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-gray-700">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.brand}</p>
                              </div>
                              <div className="flex items-center space-x-4">
                                <span className="font-medium">${item.price}</span>
                                <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                                  Add
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <div className="flex justify-between text-gray-800">
                            <span className="font-medium">Total:</span>
                            <span className="font-bold">${activeOutfit.totalPrice.toFixed(2)}</span>
                          </div>
                          
                          <div className="mt-6 flex space-x-4">
                            <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
                              Add All to Cart
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                              Save Outfit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Shopping;