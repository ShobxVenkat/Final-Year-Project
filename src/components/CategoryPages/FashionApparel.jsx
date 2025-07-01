import { useState } from "react";
import {
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";
import { motion } from "framer-motion";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Men's Denim Jacket",
    category: "Men",
    price: 2499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    isNew: true,
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    category: "Women",
    price: 1799,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    isNew: true,
  },
  {
    id: 3,
    name: "Kids' Hoodie",
    category: "Kids",
    price: 999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Men's Casual Shirt",
    category: "Men",
    price: 1299,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Women's Leather Jacket",
    category: "Women",
    price: 3499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Kids' Printed T-shirt",
    category: "Kids",
    price: 599,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = ["All", "Men", "Women", "Kids"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const FashionApparel = () => {
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
      default:
        return 0;
    }
  });

  const productsToShow = sortedProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
          alt="Fashion Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Fashion & Apparel
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the latest trends in clothing for men, women, and kids.
          </motion.p>
        </div>
      </div>

      {/* Search Bar */}
       <div className="flex justify-center px-4 -mt-6 z-30 relative">
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-1 border border-gray-700">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search clothing, brands, or styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${
                  selectedCategory === cat
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat === "All" ? "All Products" : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
            <motion.div
              key={product.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
                <button className="absolute top-3 right-3 bg-gray-900/50 rounded-full p-2 hover:bg-pink-600 transition-colors">
                  <FiHeart className="text-white" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    ★ {product.rating}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">₹{product.price}</span>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-lg flex items-center gap-1 transition-colors">
                    <FiShoppingBag />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
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
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Fashion Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Get the latest trends and exclusive offers straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
              />
              <button className="bg-white text-pink-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionApparel;
