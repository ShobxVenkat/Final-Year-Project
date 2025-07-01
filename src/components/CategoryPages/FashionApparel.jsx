import { useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiSearch,
  FiTag,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Premium Denim Jacket",
    category: "Men",
    price: 3499,
    originalPrice: 4499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 22,
    inStock: true,
    features: ["Premium denim", "Slim fit", "Distressed details"],
  },
  {
    id: 2,
    name: "Floral Maxi Dress",
    category: "Women",
    price: 2799,
    originalPrice: 3999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 30,
    inStock: true,
    features: ["Breathable fabric", "Adjustable straps", "Pocketed"],
  },
  {
    id: 3,
    name: "Graphic Print T-Shirt",
    category: "Men",
    price: 999,
    originalPrice: 1499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 33,
    inStock: true,
    features: ["100% Cotton", "Oversized fit", "Screen printed"],
  },
  {
    id: 4,
    name: "High-Waisted Jeans",
    category: "Women",
    price: 2299,
    originalPrice: 2999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
    discount: 23,
    inStock: true,
    features: ["Stretch denim", "5-pocket style", "Ankle length"],
  },
  {
    id: 5,
    name: "Kids' Cartoon Hoodie",
    category: "Kids",
    price: 1499,
    originalPrice: 1999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 25,
    inStock: true,
    features: ["Fleece lining", "Kangaroo pocket", "Washable"],
  },
  {
    id: 6,
    name: "Linen Shirt",
    category: "Men",
    price: 1799,
    originalPrice: 2499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 28,
    inStock: true,
    features: ["Breathable linen", "Relaxed fit", "Button-down collar"],
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 3999,
    originalPrice: 4999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 20,
    inStock: true,
    features: ["Genuine leather", "Adjustable strap", "Multiple compartments"],
  },
  {
    id: 8,
    name: "Athleisure Set",
    category: "Women",
    price: 3299,
    originalPrice: 4599,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1000&auto=format&fit=crop",
    discount: 28,
    inStock: true,
    features: ["Moisture-wicking", "4-way stretch", "UPF 50+"],
  },
  {
    id: 9,
    name: "Classic Oxford Shoes",
    category: "Men",
    price: 4999,
    originalPrice: 6499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 23,
    inStock: true,
    features: ["Genuine leather", "Cushioned insole", "Slip-resistant"],
  },
  {
    id: 10,
    name: "Silk Scarf",
    category: "Accessories",
    price: 1299,
    originalPrice: 1999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
    discount: 35,
    inStock: true,
    features: ["100% Silk", "Hand-rolled edges", "Versatile styling"],
  },
  {
    id: 11,
    name: "Denim Overalls",
    category: "Kids",
    price: 1999,
    originalPrice: 2599,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 23,
    inStock: true,
    features: ["Adjustable straps", "Reinforced knees", "Machine wash"],
  },
  {
    id: 12,
    name: "Cashmere Sweater",
    category: "Women",
    price: 5999,
    originalPrice: 7999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
    discount: 25,
    inStock: true,
    features: ["100% Cashmere", "Ribbed trim", "Classic crewneck"],
  },
];

const categories = ["All", "Men", "Women", "Kids", "Accessories"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "discount", label: "Best Deals" },
];

const FashionAndApparel = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(8);

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
      <div className="relative h-96 bg-gradient-to-r from-fuchsia-900 to-pink-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
          alt="Fashion & Apparel Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <FiTag className="text-pink-300" />
            <span className="text-pink-300 font-medium">New Collection</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fashion & Apparel
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover stylish clothing for every occasion and season
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
              placeholder="Search dresses, shirts, accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
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
                  ? 'bg-pink-600 text-white shadow-md'
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
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
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
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-pink-500/30">
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
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 bg-gray-900/50 rounded-full p-2 hover:bg-pink-600 transition-colors">
                  <FiHeart className="text-white" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-white mb-1">{product.name}</h3>
                <p className="text-pink-400 text-sm mb-2">{product.category}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  <FiStar className="fill-current" />
                  <span>{product.rating}</span>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-pink-300 px-2 py-1 rounded border border-gray-600">
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
                <button className="w-full py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center gap-2 transition-colors">
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

export default FashionAndApparel;