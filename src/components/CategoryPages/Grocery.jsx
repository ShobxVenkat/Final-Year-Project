import { useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiSearch,
  FiTruck,
} from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=1000&auto=format&fit=crop",
    isFresh: true,
    discount: 20,
    inStock: true,
    delivery: "Today",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    category: "Dairy",
    price: 89,
    originalPrice: 99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    inStock: true,
    delivery: "Today",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 59,
    originalPrice: 69,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    discount: 15,
    inStock: true,
    delivery: "Tomorrow",
  },
  {
    id: 4,
    name: "Extra Virgin Olive Oil",
    category: "Pantry",
    price: 499,
    originalPrice: 599,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=1000&auto=format&fit=crop",
    discount: 17,
    inStock: true,
    delivery: "Today",
  },
  {
    id: 5,
    name: "Organic Spinach",
    category: "Vegetables",
    price: 49,
    originalPrice: 59,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000&auto=format&fit=crop",
    isFresh: true,
    discount: 17,
    inStock: true,
    delivery: "Today",
  },
  {
    id: 6,
    name: "Almond Milk",
    category: "Dairy Alternatives",
    price: 129,
    originalPrice: 149,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1000&auto=format&fit=crop",
    isTrending: true,
    discount: 13,
    inStock: true,
    delivery: "Today",
  },
  {
    id: 7,
    name: "Basmati Rice",
    category: "Grains",
    price: 399,
    originalPrice: 449,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
    discount: 11,
    inStock: true,
    delivery: "Tomorrow",
  },
  {
    id: 8,
    name: "Dark Chocolate",
    category: "Snacks",
    price: 149,
    originalPrice: 199,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true,
    discount: 25,
    inStock: true,
    delivery: "Today",
  },
];

const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Pantry",
  "Snacks",
  "Beverages",
];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "delivery", label: "Fastest Delivery" },
];

const Grocery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
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
      case "delivery":
        return a.delivery === "Today" ? -1 : 1;
      default:
        return 0;
    }
  });

  const productsToShow = sortedProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      {/* Hero Section with Fresh Produce Theme */}
      <div className="relative h-80 bg-gradient-to-r from-green-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-green-900/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
          alt="Grocery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-4">
            <FaLeaf className="text-white" />
            <span className="text-white font-medium">Fresh & Organic</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Farm Fresh Groceries
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Delivered straight to your doorstep with care and quality
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4 -mt-6 z-30 relative">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-1">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for fresh produce, dairy, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Chips */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort and Results */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="text-gray-600">
            Showing {Math.min(visibleProducts, sortedProducts.length)} of{" "}
            {sortedProducts.length} products
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isFresh && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <FaLeaf className="text-xs" />
                      FRESH
                    </span>
                  )}
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
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-green-500 hover:text-white transition-colors">
                  <FiHeart />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-green-600 text-sm mb-2">
                  {product.category}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  <FiStar className="fill-current" />
                  <span className="text-gray-700">{product.rating}</span>
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

                {/* Delivery Info */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <FiTruck className="text-green-500" />
                  <span>Delivery {product.delivery}</span>
                </div>

                {/* Add to Cart */}
                <button className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 transition-colors">
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
              className="px-8 py-3 bg-white border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Fresh Guarantee Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLeaf className="text-2xl text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-green-700">
              Our Freshness Guarantee
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              We source directly from local farms to bring you the freshest
              produce. If you're not satisfied, we'll refund your order.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 font-bold mb-2">Farm Direct</div>
                <p className="text-sm text-gray-600">
                  Sourced directly from trusted local farmers
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 font-bold mb-2">
                  Fast Delivery
                </div>
                <p className="text-sm text-gray-600">
                  Same-day delivery on most items
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 font-bold mb-2">
                  Quality Checked
                </div>
                <p className="text-sm text-gray-600">
                  Every item inspected before delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
