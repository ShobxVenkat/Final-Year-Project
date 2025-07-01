import { useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiSearch,
  FiZap,
  FiCpu,
  FiSmartphone,
  FiHeadphones,
  FiMonitor,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Quantum Pro Wireless Earbuds",
    category: "Audio",
    price: 12999,
    originalPrice: 15999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 19,
    inStock: true,
    features: ["Active Noise Cancellation", "30hr battery", "IPX7 Waterproof"],
  },
  {
    id: 2,
    name: "Nebula 8K Smart TV",
    category: "Televisions",
    price: 89999,
    originalPrice: 109999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1467296581482-7dd0b01a049c?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 18,
    inStock: true,
    features: ["75-inch display", "Dolby Vision", "120Hz refresh rate"],
  },
  {
    id: 3,
    name: "Aurora Gaming Laptop",
    category: "Computers",
    price: 129999,
    originalPrice: 149999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop",
    discount: 13,
    inStock: true,
    features: ["RTX 4080 GPU", "32GB RAM", "240Hz display"],
  },
  {
    id: 4,
    name: "Pulse Smartwatch X",
    category: "Wearables",
    price: 24999,
    originalPrice: 29999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 17,
    inStock: true,
    features: ["Blood oxygen monitor", "30-day battery", "Always-on display"],
  },
  {
    id: 5,
    name: "Zenith Mirrorless Camera",
    category: "Cameras",
    price: 74999,
    originalPrice: 84999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    discount: 12,
    inStock: false,
    features: ["Full-frame sensor", "4K 60fps video", "In-body stabilization"],
  },
  {
    id: 6,
    name: "Nova 5G Smartphone",
    category: "Phones",
    price: 59999,
    originalPrice: 69999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 14,
    inStock: true,
    features: ["200MP camera", "Snapdragon 8 Gen 2", "120W fast charging"],
  },
  {
    id: 7,
    name: "Thunderbolt SSD 2TB",
    category: "Storage",
    price: 14999,
    originalPrice: 19999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 25,
    inStock: true,
    features: ["2800MB/s speeds", "Shock resistant", "Compact design"],
  },
  {
    id: 8,
    name: "Neon Mechanical Keyboard",
    category: "Accessories",
    price: 8999,
    originalPrice: 11999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 25,
    inStock: true,
    features: ["RGB lighting", "Hot-swappable", "PBT keycaps"],
  },
];

const categories = ["All", "Phones", "Computers", "Audio", "Televisions", "Cameras", "Wearables", "Storage", "Accessories"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "discount", label: "Best Deals" },
];

const Electronics = () => {
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

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Phones": return <FiSmartphone className="mr-2" />;
      case "Computers": return <FiCpu className="mr-2" />;
      case "Audio": return <FiHeadphones className="mr-2" />;
      case "Televisions": return <FiMonitor className="mr-2" />;
      default: return <FiZap className="mr-2" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
          alt="Electronics Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <FiZap className="text-blue-300" />
            <span className="text-blue-300 font-medium">Cutting-Edge Tech</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Electronics
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover the latest in technology and smart devices
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
              placeholder="Search smartphones, laptops, gadgets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
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
              className={`px-5 py-2 rounded-full font-medium transition-all flex items-center ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {getCategoryIcon(category)}
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
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-blue-500/30">
              {/* Product Image */}
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 bg-gray-900/50 rounded-full p-2 hover:bg-blue-600 transition-colors">
                  <FiHeart className="text-white" />
                </button>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-white mb-1">{product.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{product.category}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  <FiStar className="fill-current" />
                  <span>{product.rating}</span>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-blue-300 px-2 py-1 rounded border border-gray-600">
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
                <button
                  disabled={!product.inStock}
                  className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                    product.inStock
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-700 cursor-not-allowed'
                  }`}
                >
                  <FiShoppingCart />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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

export default Electronics;