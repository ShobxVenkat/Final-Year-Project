import { useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiSearch,
  FiDroplet,
  FiFeather,
  FiGift,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Rose Quartz Facial Roller",
    category: "Skincare",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 19,
    inStock: true,
    benefits: ["Reduces puffiness", "Improves circulation", "Natural stone"],
  },
  {
    id: 2,
    name: "Lavender Essential Oil",
    category: "Aromatherapy",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1594282486552-92ebf7fd13e7?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 25,
    inStock: true,
    benefits: ["Promotes relaxation", "100% pure", "Stress relief"],
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    category: "Skincare",
    price: 899,
    originalPrice: 1199,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 25,
    inStock: true,
    benefits: ["Brightens skin", "Reduces wrinkles", "Antioxidant"],
  },
  {
    id: 4,
    name: "Bamboo Charcoal Face Mask",
    category: "Skincare",
    price: 299,
    originalPrice: 399,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    discount: 25,
    inStock: true,
    benefits: ["Deep cleansing", "Detoxifies", "5-pack"],
  },
  {
    id: 5,
    name: "Himalayan Salt Lamp",
    category: "Wellness",
    price: 1499,
    originalPrice: 1999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1517948435809-01b7d4678a17?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 25,
    inStock: true,
    benefits: ["Negative ions", "Calming glow", "Natural material"],
  },
  {
    id: 6,
    name: "Jade Gua Sha Tool",
    category: "Skincare",
    price: 799,
    originalPrice: 999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1607602132700-06825813a0a3?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 20,
    inStock: true,
    benefits: ["Lymphatic drainage", "Facial sculpting", "Authentic jade"],
  },
  {
    id: 7,
    name: "Organic Argan Oil",
    category: "Haircare",
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1607602132863-eef1c8343363?q=80&w=1000&auto=format&fit=crop",
    discount: 22,
    inStock: true,
    benefits: ["Hydrates hair", "Cold pressed", "Multipurpose"],
  },
  {
    id: 8,
    name: "Sleep Mist Spray",
    category: "Aromatherapy",
    price: 499,
    originalPrice: 649,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 23,
    inStock: true,
    benefits: ["Lavender & chamomile", "Promotes sleep", "Alcohol-free"],
  },
];

const categories = ["All", "Skincare", "Haircare", "Aromatherapy", "Wellness", "Bath & Body", "Makeup"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "discount", label: "Best Deals" },
];

const BeautyAndWellness = () => {
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
      <div className="relative h-96 bg-gradient-to-r from-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop"
          alt="Beauty & Wellness Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <FiDroplet className="text-pink-300" />
            <span className="text-pink-300 font-medium">Self-Care Essentials</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beauty & Wellness
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover products to nourish your body, mind, and soul
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
              placeholder="Search skincare, haircare, aromatherapy..."
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
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-pink-300 px-2 py-1 rounded border border-gray-600">
                      {benefit}
                    </span>
                  ))}
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-lg">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-400 text-sm line-through">
                      ₹{product.originalPrice}
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

        {/* Wellness Promise Section */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-900/50">
              <FiDroplet className="text-2xl text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-pink-400">Our Wellness Promise</h3>
            <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
              We carefully select products that are cruelty-free, sustainably sourced, and effective for your self-care routine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <div className="text-pink-400 font-bold mb-2">Clean Ingredients</div>
                <p className="text-sm text-gray-400">No harsh chemicals or toxins</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <div className="text-pink-400 font-bold mb-2">Cruelty-Free</div>
                <p className="text-sm text-gray-400">Never tested on animals</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <div className="text-pink-400 font-bold mb-2">Sustainable</div>
                <p className="text-sm text-gray-400">Eco-friendly packaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyAndWellness;
