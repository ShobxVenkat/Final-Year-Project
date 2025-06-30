import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";  // Import toast
import dummyProducts from "../Extra/DummyProducts";
import Cart from "../Layouts/Header/CartButton"; 

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const categories = [
  { slug: "electronics", title: "Electronics" },
  { slug: "fashion-apparel", title: "Fashion & Apparel" },
  { slug: "computers", title: "Computers" },
  { slug: "home-garden", title: "Home & Garden" },
  { slug: "collectibles", title: "Collectibles" },
];

import { useNavigate } from "react-router-dom";

function ProductCard({ product, index, onAddToCart }) {
  const navigate = useNavigate();
  const cardRef = React.useRef(null);
  const [glarePos, setGlarePos] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePos({ x, y });
  };

  const handleMouseLeave = () => {
    setGlarePos({ x: 50, y: 50 });
  };

  // Yahan click handler add kiya
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={productVariants}
      className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick} // click handler yahan
      ref={cardRef}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-xl"
        onError={(e) => (e.target.src = product.fallbackImage)}
      />

      {/* Glare effect */}
      <div
        className="pointer-events-none absolute w-24 h-24 rounded-full filter blur-3xl bg-green-400 opacity-80"
        style={{
          top: `${glarePos.y}%`,
          left: `${glarePos.x}%`,
          transform: "translate(-50%, -50%)",
          transition: "top 0.1s ease, left 0.1s ease",
          mixBlendMode: "screen",
          zIndex: 10,
        }}
      />

      <div className="p-5 text-white relative z-20 flex flex-col h-full">
        <h4 className="font-bold text-xl truncate">{product.title}</h4>
        <p className="mt-2 text-gray-200 line-clamp-3">{product.description}</p>
        <p className="mt-4 font-semibold text-green-400 text-lg">
          ₹{product.price.toLocaleString()}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded shadow"
            onClick={(e) => {
              e.stopPropagation();  // Important: button clicks should not trigger card click navigation
              onAddToCart(product);
            }}
          >
            Add to Cart
          </button>
          <button
            className="flex-1 bg-white text-green-700 hover:bg-green-100 font-semibold text-sm py-2 px-4 rounded shadow"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Buy Now:", product.id);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}


export default function CategoryPage() {
  const { categoryName } = useParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (categoryName) {
      setSelectedCategories([categoryName]);
    }
  }, [categoryName]);

  const toggleCategory = (slug) => {
    setHasUserInteracted(true);
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((cat) => cat !== slug)
        : [...prev, slug]
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePriceChange = (newRange) => {
    setHasUserInteracted(true);
    setPriceRange(newRange);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Modified: Add to cart + show toast
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    toast.success(`${product.title} added to cart!`, {
      style: {
        background: "#333",
        color: "#fff",
        
      },
    });
  };

  const filteredProductsRaw = dummyProducts.filter((product) => {
    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.slug);
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  const filteredProducts = filteredProductsRaw.sort((a, b) => {
    const aIndex = selectedCategories.indexOf(a.slug);
    const bIndex = selectedCategories.indexOf(b.slug);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const headingCategories =
    selectedCategories.length > 0
      ? selectedCategories
          .map((slug) => {
            const cat = categories.find((c) => c.slug === slug);
            return cat ? cat.title : slug;
          })
          .join(", ")
      : null;

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white relative">
      {/* Toaster container */}
      <Toaster position="top-left" reverseOrder={false} />

      {/* Filter Button */}
      <button
        className="fixed top-22 sm:top-20 right-1 z-30 flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded shadow-lg text-white font-semibold"
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open Filters"
      >
        <FiFilter size={20} />
        <span className="hidden sm:inline">Filter</span>
      </button>

      {/* Cart Drawer */}
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        isMobile={window.innerWidth < 768}
      />

      {/* Sidebar + Blur Background */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsFilterOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-72 bg-gray-800 shadow-lg p-6 z-50 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  aria-label="Close Filters"
                  className="text-white hover:text-green-400"
                >
                  <RxCross2 size={24} />
                </button>
              </div>

              {/* Category Filters */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categories</h4>
                <div className="flex flex-col space-y-2 max-h-48 overflow-auto">
                  {categories.map(({ slug, title }) => (
                    <label key={slug} className="inline-flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(slug)}
                        onChange={() => toggleCategory(slug)}
                        className="form-checkbox h-5 w-5 text-green-500"
                      />
                      <span>{title}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range (₹)</h4>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    min={0}
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) =>
                      handlePriceChange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-20 p-1 rounded bg-gray-700 text-white"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    min={priceRange[0]}
                    max={50000}
                    value={priceRange[1]}
                    onChange={(e) =>
                      handlePriceChange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-20 p-1 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Heading */}
      {headingCategories && hasUserInteracted && (
        <motion.h2
          className="w-full text-sm md:text-lg font-semibold capitalize mb-6 tracking-wide border-b border-green-500 pb-2 break-words"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Products in category:{" "}
          <span className="text-green-400">{headingCategories}</span>
        </motion.h2>
      )}

      {/* Product Grid with AnimatePresence */}
      <AnimatePresence mode="wait">
        {filteredProducts.length === 0 ? (
          <motion.p
            key="no-products"
            className="text-gray-400 text-lg mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No products found matching selected filters.
          </motion.p>
        ) : (
          <motion.div
            key={selectedCategories.join(",") + priceRange.join("-")}
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onAddToCart={handleAddToCart}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
