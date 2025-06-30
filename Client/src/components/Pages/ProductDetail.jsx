import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import dummyProducts from "../Extra/DummyProducts";

export default function ProductDetail({ setCartItems, setDrawerOpen }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0 });
  const [showScrollNotice, setShowScrollNotice] = useState(false);

  useEffect(() => {
    setIsTransitioning(false);
  }, [productId]);

  useEffect(() => {
    // Scroll smoothly to top on product change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show scroll notice for 2.5 seconds
    setShowScrollNotice(true);
    const timer = setTimeout(() => setShowScrollNotice(false), 2000);

    return () => clearTimeout(timer);
  }, [productId]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlarePos({ x, y });
  };

  const product = dummyProducts.find((p) => String(p.id) === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h2 className="text-2xl mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const relatedProducts = dummyProducts.filter(
    (p) => p.slug === product.slug && p.id !== product.id
  );

  const reviews = [
    { id: 1, user: "Rahul", rating: 5, comment: "Awesome product! Highly recommended." },
    { id: 2, user: "Sneha", rating: 4, comment: "Good quality, worth the price." },
    { id: 3, user: "Amit", rating: 3, comment: "Decent but could be better." },
  ];

  const faqs = [
    { question: "What is the warranty period?", answer: "This product comes with a 1-year manufacturer warranty." },
    { question: "Can I return the product if not satisfied?", answer: "Yes, you can return within 30 days of purchase." },
  ];

  const discountPercent = 10;
  const discountedPrice = product.price * (1 - discountPercent / 100);

  const handleRelatedClick = (id) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/product/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 inline ${i + 1 <= rating ? "text-yellow-400" : "text-gray-400"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.961c.3.92-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.176 0l-3.374 2.455c-.785.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.119L2.04 9.387c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69l1.285-3.96z" />
      </svg>
    ));
  };

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 max-w-6xl mx-auto
        transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        {/* Product Detail Section */}
        <motion.div
          key={product.id}
          onMouseMove={handleMouseMove}
          className="relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-8 group"
          initial={{ opacity: 0, y: 50, scale: 0.95, rotate: -1 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Glare effect */}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: `radial-gradient(500px at ${glarePos.x}px ${glarePos.y}px, rgba(34,197,94,0.15), transparent 80%)`,
              zIndex: 0,
            }}
          />

          {/* Product Image */}
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 rounded-lg object-cover max-h-[480px]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.35 }}
            onError={(e) => (e.target.src = product.fallbackImage)}
            style={{ position: "relative", zIndex: 10 }}
          />

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-green-400 tracking-wide">
                {product.title}
              </h1>
              <p className="text-gray-300 text-base mb-5 leading-relaxed max-w-xl">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {discountPercent > 0 ? (
                  <>
                    <p className="text-gray-400 line-through text-lg md:text-xl">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-green-400 font-extrabold text-2xl md:text-3xl">
                      ₹{discountedPrice.toLocaleString()}
                    </p>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md uppercase tracking-wider">
                      {discountPercent}% OFF
                    </span>
                  </>
                ) : (
                  <p className="text-green-400 font-extrabold text-3xl">
                    ₹{product.price.toLocaleString()}
                  </p>
                )}
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 border-b border-green-400 pb-1 max-w-max">
                  Specifications
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm max-w-xl">
                  {product.specifications?.length ? (
                    product.specifications.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))
                  ) : (
                    <li>No specifications available.</li>
                  )}
                </ul>
              </div>

              {/* Reviews */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 border-b border-green-400 pb-1 max-w-max">
                  Customer Reviews
                </h2>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">{renderStars(4)}</div>
                  <span className="text-green-400 font-semibold text-sm">4.0</span>
                  <span className="text-gray-400 text-sm">
                    ({reviews.length} reviews)
                  </span>
                </div>

                <div className="space-y-4 max-w-xl">
                  {reviews.map(({ id, user, rating, comment }) => (
                    <div key={id} className="bg-white/10 p-3 rounded-md shadow-sm">
                      <p className="font-semibold text-green-400">{user}</p>
                      <div className="flex items-center gap-2 text-yellow-400">
                        {renderStars(rating)}
                        <span className="text-gray-300 text-xs">({rating}/5)</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-8 max-w-xl">
                <h2 className="text-xl font-semibold mb-3 border-b border-green-400 pb-1 max-w-max">
                  FAQs
                </h2>
                <div className="space-y-2">
                  {faqs.map(({ question, answer }, i) => (
                    <details
                      key={i}
                      className="bg-white/10 rounded-md p-3 cursor-pointer hover:bg-white/20 transition"
                    >
                      <summary className="font-semibold">{question}</summary>
                      <p className="text-gray-300 text-sm mt-1">{answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => alert("Proceed to Buy clicked!")}
                className="bg-transparent border border-green-500 hover:bg-green-600 hover:text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-6 border-b border-green-400 pb-1 max-w-max">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map(({ id, title, image, price }) => (
                <motion.div
                  key={id}
                  onClick={() => handleRelatedClick(id)}
                  className="cursor-pointer rounded-lg overflow-hidden border border-white/10 shadow-lg hover:shadow-green-500 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-white/5 text-white">
                    <h4 className="text-md font-semibold truncate">{title}</h4>
                    <p className="text-green-400 font-semibold text-lg mt-1">
                      ₹{price.toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Scroll to top notice */}
      {showScrollNotice && (
        <div
          style={{
            position: "fixed",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#22c55e",
            color: "white",
            padding: "10px 20px",
            borderRadius: "25px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            fontWeight: "600",
            zIndex: 1100,
            userSelect: "none",
          }}
        >
          Scrolled to top for product details
        </div>
      )}
    </>
  );
}
