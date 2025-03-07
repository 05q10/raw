import React, { useState } from 'react';

const Beauty = () => {
  // Sample product data
  const initialProducts = [
    { id: 1, name: "Hydrating Face Serum", category: "Skincare", price: 45.99, rating: 4.7, stock: 23, image: "/api/placeholder/100/100" },
    { id: 2, name: "Vitamin C Moisturizer", category: "Skincare", price: 38.50, rating: 4.5, stock: 15, image: "/api/placeholder/100/100" },
    { id: 3, name: "Hyaluronic Acid Toner", category: "Skincare", price: 26.99, rating: 4.8, stock: 30, image: "/api/placeholder/100/100" },
    { id: 4, name: "Retinol Night Cream", category: "Skincare", price: 52.00, rating: 4.6, stock: 12, image: "/api/placeholder/100/100" },
    { id: 5, name: "SPF 50 Sunscreen", category: "Skincare", price: 22.99, rating: 4.4, stock: 45, image: "/api/placeholder/100/100" },
    { id: 6, name: "Matte Lipstick", category: "Makeup", price: 19.99, rating: 4.5, stock: 28, image: "/api/placeholder/100/100" },
    { id: 7, name: "Volumizing Mascara", category: "Makeup", price: 24.50, rating: 4.7, stock: 32, image: "/api/placeholder/100/100" },
    { id: 8, name: "Full Coverage Foundation", category: "Makeup", price: 36.00, rating: 4.3, stock: 18, image: "/api/placeholder/100/100" },
    { id: 9, name: "Eyeshadow Palette", category: "Makeup", price: 42.99, rating: 4.8, stock: 20, image: "/api/placeholder/100/100" },
    { id: 10, name: "Highlighter", category: "Makeup", price: 28.00, rating: 4.6, stock: 25, image: "/api/placeholder/100/100" }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Filter products based on category and search term
  const filteredProducts = products.filter(product => 
    (activeCategory === "All" || product.category === activeCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Handle sort request
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Stats data
  const stats = [
    { title: "Total Products", value: products.length, bgColor: "bg-blue-100" },
    { title: "Skincare Items", value: products.filter(p => p.category === "Skincare").length, bgColor: "bg-green-100" },
    { title: "Makeup Items", value: products.filter(p => p.category === "Makeup").length, bgColor: "bg-purple-100" },
    { title: "Low Stock Items", value: products.filter(p => p.stock < 20).length, bgColor: "bg-red-100" }
  ];

  // Add new product
  const addProduct = (name, category, price) => {
    const newProduct = {
      id: products.length + 1,
      name,
      category,
      price: parseFloat(price),
      rating: 0,
      stock: 0,
      image: "/api/placeholder/100/100"
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Beauty Products Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} p-4 rounded-lg shadow`}>
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded ${activeCategory === "All" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeCategory === "Skincare" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveCategory("Skincare")}
          >
            Skincare
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeCategory === "Makeup" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveCategory("Makeup")}
          >
            Makeup
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border rounded w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Products Table */}
      <div className="overflow-x-auto shadow rounded-lg mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('category')}
              >
                Category
                {sortConfig.key === 'category' && (
                  <span>{sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('price')}
              >
                Price
                {sortConfig.key === 'price' && (
                  <span>{sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('rating')}
              >
                Rating
                {sortConfig.key === 'rating' && (
                  <span>{sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('stock')}
              >
                Stock
                {sortConfig.key === 'stock' && (
                  <span>{sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={product.image} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.category === 'Skincare' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="font-medium">{product.rating}</span>
                    <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    product.stock < 20 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {product.stock} units
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Beauty;