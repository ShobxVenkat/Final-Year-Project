import { useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiSearch,
  FiAward,
  FiActivity,
  FiTarget,
} from "react-icons/fi";
import { FaClock } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    category: "Yoga",
    price: 1999,
    originalPrice: 2999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 33,
    inStock: true,
    specs: ["Non-slip", "Eco-friendly", "6mm thickness"],
  },
  {
    id: 2,
    name: "Adjustable Dumbbells",
    category: "Strength",
    price: 5999,
    originalPrice: 7999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 25,
    inStock: true,
    specs: ["5-25kg", "Quick-change", "Space-saving"],
  },
  {
    id: 3,
    name: "Wireless Sports Earbuds",
    category: "Accessories",
    price: 3499,
    originalPrice: 4999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 30,
    inStock: true,
    specs: ["IPX7 Waterproof", "8hr battery", "Secure fit"],
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Running",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    discount: 29,
    inStock: true,
    specs: ["Lightweight", "Shock absorption", "Breathable"],
  },
  {
    id: 5,
    name: "Resistance Bands Set",
    category: "Training",
    price: 1299,
    originalPrice: 1999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 35,
    inStock: true,
    specs: ["5 resistance levels", "Portable", "Full-body workout"],
  },
  {
    id: 6,
    name: "Smart Fitness Tracker",
    category: "Wearables",
    price: 3999,
    originalPrice: 5999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1551649001-7a2485554199?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 33,
    inStock: true,
    specs: ["Heart rate monitor", "Sleep tracking", "50m waterproof"],
  },
  {
    id: 7,
    name: "Boxing Gloves",
    category: "Combat Sports",
    price: 2499,
    originalPrice: 3499,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop",
    discount: 29,
    inStock: true,
    specs: ["Premium leather", "Shock-absorbing", "Velcro closure"],
  },
  {
    id: 8,
    name: "Foldable Exercise Bike",
    category: "Cardio",
    price: 12999,
    originalPrice: 16999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 24,
    inStock: true,
    specs: ["8 resistance levels", "LCD display", "Space-saving"],
  },
];

const categories = ["All", "Running", "Yoga", "Strength", "Cardio", "Wearables", "Training", "Combat Sports"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "discount", label: "Best Deals" },
];

const SportsAndFitness = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  const productsToShow = sortedProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts(prev => prev + 4);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative h-96 bg-gradient-to-br from-green-900 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
          alt="Sports & Fitness Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <FiActivity className="text-emerald-300" />
            <span className="text-emerald-300 font-medium">Active Lifestyle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sports & Fitness
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Gear up for peak performance and transform your workouts
          </p>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="flex justify-center px-4 -mt-8 z-30 relative">
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-xl p-1 border border-gray-700">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search fitness gear, equipment, wearables..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation with Scroll */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sort and Results */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="text-gray-400">
            Showing {Math.min(visibleProducts, sortedProducts.length)} of {sortedProducts.length} products
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid with Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsToShow.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-emerald-500/30 group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isBestSeller && (
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                      BESTSELLER
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      TRENDING
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 bg-gray-900/50 rounded-full p-2 hover:bg-emerald-600 transition-colors">
                  <FiHeart className="text-white" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-emerald-400 text-sm mb-2">{product.category}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  <FiStar className="fill-current" />
                  <span>{product.rating}</span>
                </div>
                
                {/* Specs */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.specs.slice(0, 2).map((spec, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-700 text-emerald-300 px-2 py-1 rounded border border-gray-600 group-hover:border-emerald-500/50 transition-colors"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-400 text-sm line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                {/* Add to Cart */}
                <button className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 transition-colors group-hover:bg-emerald-500">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < sortedProducts.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-gray-800 hover:bg-emerald-600 border border-gray-700 hover:border-emerald-600 rounded-lg font-medium transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Training Tips Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-emerald-400 mb-2">Training Tips</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Maximize your results with these expert recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                <FiTarget className="text-xl" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Set Clear Goals</h3>
              <p className="text-gray-400 text-sm">
                Define specific, measurable fitness targets to stay motivated and track progress.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                <FiActivity className="text-xl" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Mix It Up</h3>
              <p className="text-gray-400 text-sm">
                Combine cardio, strength, and flexibility training for balanced fitness.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                <FiAward className="text-xl" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Proper Form First</h3>
              <p className="text-gray-400 text-sm">
                Focus on technique before increasing weight to prevent injuries.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                <FaClock className="text-xl" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Recovery Matters</h3>
              <p className="text-gray-400 text-sm">
                Allow adequate rest between workouts for muscle repair and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsAndFitness;