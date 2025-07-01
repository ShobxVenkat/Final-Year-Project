import { useState } from "react";
import { FiShoppingCart, FiHeart, FiStar, FiSearch, FiZap } from "react-icons/fi";

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
  },
];

const categories = ["All", "Phones", "Computers", "Audio", "Televisions", "Cameras", "Wearables"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
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
      default:
        return 0;
    }
  });

  const productsToShow = sortedProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts(prev => prev + 4); // Load 4 more products
  };



  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
          alt="Electronics Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Premium Electronics</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover cutting-edge technology for every need
            </p>
          </div>
        </div>
      </div>

      
        {/* search bar */}

         <div className="flex justify-center px-4 -mt-6 z-30 relative">
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-1 border border-gray-700">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search electronics items & brands"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Product Badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                      TRENDING
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded">
                      BESTSELLER
                    </span>
                  )}
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <FiStar className="fill-current" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <p className="text-blue-400 text-sm mb-2">{product.category}</p>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-400 text-sm line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="text-green-400 text-sm">
                      {product.discount}% off
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  disabled={!product.inStock}
                  className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-700 cursor-not-allowed'
                  } transition-colors`}
                >
                  <FiShoppingCart />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleProducts < sortedProducts.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={loadMore}
              className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FiZap className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Tech Updates Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get the latest electronics news and exclusive deals in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;