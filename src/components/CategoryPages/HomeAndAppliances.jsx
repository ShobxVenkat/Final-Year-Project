import { useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiSearch,
  FiHome,
  FiTool,
  FiClock,
} from "react-icons/fi";


const products = [
  {
    id: 1,
    name: "Smart Air Purifier",
    category: "Appliances",
    price: 12999,
    originalPrice: 15999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 19,
    inStock: true,
    features: ["HEPA Filter", "Smart Connectivity", "300 sq.ft coverage"],
  },
  {
    id: 2,
    name: "Robot Vacuum Cleaner",
    category: "Cleaning",
    price: 24999,
    originalPrice: 29999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 17,
    inStock: true,
    features: ["Auto-recharge", "App Control", "120 mins runtime"],
  },
  {
    id: 3,
    name: "Induction Cooktop",
    category: "Kitchen",
    price: 3499,
    originalPrice: 4999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 30,
    inStock: true,
    features: ["2000W Power", "8 Preset Menus", "Child Lock"],
  },
  {
    id: 4,
    name: "Smart LED Bulb",
    category: "Lighting",
    price: 799,
    originalPrice: 1299,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1000&auto=format&fit=crop",
    discount: 38,
    inStock: true,
    features: ["16M Colors", "Voice Control", "Energy Saving"],
  },
  {
    id: 5,
    name: "Air Fryer",
    category: "Kitchen",
    price: 5999,
    originalPrice: 7999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1611791484670-ce19b801d192?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 25,
    inStock: true,
    features: ["4.2L Capacity", "8 Presets", "Non-stick Basket"],
  },
  {
    id: 6,
    name: "Smart Door Lock",
    category: "Home Security",
    price: 12999,
    originalPrice: 15999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1597224308076-9d9fdd0c0a04?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 19,
    inStock: true,
    features: ["Fingerprint", "App Control", "Auto Lock"],
  },
  {
    id: 7,
    name: "Blender with Grinder",
    category: "Kitchen",
    price: 2999,
    originalPrice: 3999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1563212035-3e8ffdf31f8b?q=80&w=1000&auto=format&fit=crop",
    discount: 25,
    inStock: true,
    features: ["1000W Motor", "Stainless Steel Blades", "2 Jars"],
  },
  {
    id: 8,
    name: "Smart Plug",
    category: "Smart Home",
    price: 999,
    originalPrice: 1499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1556740734-9f9ca6f8276d?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 33,
    inStock: true,
    features: ["Voice Control", "Energy Monitoring", "Remote Access"],
  },
];

const categories = ["All", "Kitchen", "Cleaning", "Appliances", "Lighting", "Home Security", "Smart Home"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "discount", label: "Best Deals" },
];

const HomeAndAppliances = () => {
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
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop"
          alt="Home & Appliances Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <FiHome className="text-cyan-300" />
            <span className="text-cyan-300 font-medium">Smart Living</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Home & Appliances
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Upgrade your living space with smart and efficient appliances
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4 -mt-6 z-30 relative">
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-1 border border-gray-700">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search appliances, kitchenware, smart home..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
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
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsToShow.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              {/* Product Image */}
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 bg-gray-900/50 rounded-full p-2 hover:bg-cyan-600 transition-colors">
                  <FiHeart className="text-white" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-white mb-1">{product.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">{product.category}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  <FiStar className="fill-current" />
                  <span>{product.rating}</span>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-cyan-300 px-2 py-1 rounded border border-gray-600">
                      {feature}
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
                <button className="w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center gap-2 transition-colors">
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
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default HomeAndAppliances;