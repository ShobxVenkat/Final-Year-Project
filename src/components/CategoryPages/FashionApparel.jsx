import { useState, useEffect } from 'react';
import { FiShoppingBag, FiHeart, FiStar, FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FashionApparel = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Premium Denim Jacket',
      category: 'men',
      price: 89.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#3B82F6', '#1E293B', '#EF4444'],
      isNew: true,
    },
    {
      id: 2,
      name: 'Floral Summer Dress',
      category: 'women',
      price: 59.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb595d?q=80&w=1000&auto=format&fit=crop',
      sizes: ['XS', 'S', 'M'],
      colors: ['#EC4899', '#F59E0B', '#10B981'],
      isNew: true,
    },
    {
      id: 3,
      name: 'Classic White T-Shirt',
      category: 'men',
      price: 24.99,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['#FFFFFF', '#000000', '#64748B'],
    },
    {
      id: 4,
      name: 'Kids Cartoon Hoodie',
      category: 'kids',
      price: 39.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
      sizes: ['4-5Y', '6-7Y', '8-9Y'],
      colors: ['#3B82F6', '#F59E0B', '#EF4444'],
    },
    {
      id: 5,
      name: 'Elegant Evening Gown',
      category: 'women',
      price: 129.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
      sizes: ['S', 'M', 'L'],
      colors: ['#000000', '#7C3AED', '#B91C1C'],
    },
    {
      id: 6,
      name: 'Casual Chino Pants',
      category: 'men',
      price: 49.99,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['#1E293B', '#64748B', '#D1D5DB'],
    },
    {
      id: 7,
      name: 'Kids Denim Overalls',
      category: 'kids',
      price: 34.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1604917019118-ebda8e7a5c3d?q=80&w=1000&auto=format&fit=crop',
      sizes: ['2-3Y', '4-5Y', '6-7Y'],
      colors: ['#1E40AF', '#000000'],
    },
    {
      id: 8,
      name: 'Athletic Jogger Pants',
      category: 'women',
      price: 44.99,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['#1E293B', '#334155', '#475569'],
    },
  ];

  // Filter products based on active tab
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  // Toggle size selection
  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
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
            Discover the latest trends in clothing for men, women, and kids. Quality fabrics, perfect fits, and styles for every occasion.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['all', 'men', 'women', 'kids'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${activeTab === tab ? 'bg-pink-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {tab === 'all' ? 'All Products' : tab}
            </button>
          ))}
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FiFilter />
            Filters
            {showFilters ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="flex items-center justify-between mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-pink-500"
              />
            </div>

            <div>
              <h3 className="font-medium mb-3">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL', '4-5Y', '6-7Y', '8-9Y'].map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md border ${selectedSizes.includes(size) ? 'bg-pink-600 border-pink-600' : 'bg-gray-700 border-gray-600 hover:bg-gray-600'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {['#000000', '#FFFFFF', '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#EC4899', '#7C3AED'].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-gray-600 hover:border-pink-500"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3 capitalize">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
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
        <div className="flex justify-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
            Load More
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated With Latest Trends</h2>
          <p className="text-gray-300 mb-6">Subscribe to our newsletter and get 10% off your first order</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-300"
            />
            <button className="bg-white text-pink-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionApparel;