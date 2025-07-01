import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FiChevronRight, FiChevronLeft, FiShoppingCart, FiHeart, FiEye } from "react-icons/fi"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const ProductCarousel = ({ title, products, gradientColors }) => {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1) // Mobile: 1 item
      } else if (window.innerWidth < 768) {
        setItemsPerView(2) // Small tablet: 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3) // Tablet: 3 items
      } else {
        setItemsPerView(4) // Desktop: 4 items
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, products.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />)
    }

    return stars
  }

  return (
    <section
      className={`py-8 ${gradientColors.bg || "bg-gradient-to-br from-gray-50 to-white"} relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
              <span className={`bg-gradient-to-r ${gradientColors.text} bg-clip-text text-transparent`}>{title}</span>
            </h2>
          </div>
          <motion.button
            onClick={() => navigate("/shop/electronics")}
            className={`flex items-center ${gradientColors.button} transition-all duration-300 bg-gray-200 px-6 py-3 rounded-full shadow-lg hover:shadow-xl mt-4 sm:mt-0`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All <BsArrowRight className="ml-2" />
          </motion.button>
        </motion.div>

        <div className="relative">
          <motion.button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-8 h-16 bg-white shadow-xl rounded-md flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:shadow-2xl"
            }`}
            whileHover={{ scale: currentIndex === 0 ? 1 : 1.1 }}
            whileTap={{ scale: currentIndex === 0 ? 1 : 0.9 }}
          >
            <FiChevronLeft className="text-gray-700 text-xl" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-8 h-16 bg-white shadow-xl rounded-md flex items-center justify-center transition-all duration-300 ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:shadow-2xl"
            }`}
            whileHover={{ scale: currentIndex === maxIndex ? 1 : 1.1 }}
            whileTap={{ scale: currentIndex === maxIndex ? 1 : 0.9 }}
          >
            <FiChevronRight className="text-gray-700 text-xl" />
          </motion.button>

          {/* Products Grid */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`flex-shrink-0 px-3 ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                        ? "w-1/2"
                        : itemsPerView === 3
                          ? "w-1/3"
                          : "w-1/4"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full group"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiHeart className="text-gray-600 hover:text-red-500 transition-colors" />
                        </motion.button>
                      </div>

                      {/* Rating Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                        <div className="flex items-center text-white">
                          <div className="flex items-center mr-2">{renderStars(product.rating)}</div>
                          <span className="font-semibold text-sm">{product.rating}</span>
                          <span className="mx-2 text-white/60">•</span>
                          <span className="text-sm text-white/80">24 Reviews</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        className={`w-full ${gradientColors.buttonBg} text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiShoppingCart className="mr-2" />
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel