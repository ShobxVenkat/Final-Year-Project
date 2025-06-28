"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaFire, FaClock, FaShoppingCart, FaBolt, FaHeart } from "react-icons/fa"
import { BsLightningChargeFill } from "react-icons/bs"

const HotDealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({})

  const hotDeals = [
    {
      id: 1,
      name: "Limited Edition Air Jordan Sneakers",
      price: 12999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=300&fit=crop",
      timeLeft: "2h 45m",
      discount: 35,
      soldCount: 127,
      totalStock: 200,
      isFlashSale: true,
    },
    {
      id: 2,
      name: "Apple Watch Series 9 GPS",
      price: 24999,
      originalPrice: 29999,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
      timeLeft: "1h 30m",
      discount: 17,
      soldCount: 89,
      totalStock: 150,
      isFlashSale: true,
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Generation",
      price: 7999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
      timeLeft: "3h 15m",
      discount: 38,
      soldCount: 203,
      totalStock: 300,
      isFlashSale: false,
    },
    {
      id: 4,
      name: "ASUS ROG Gaming Laptop RTX 4060",
      price: 74999,
      originalPrice: 89999,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      timeLeft: "5h 20m",
      discount: 17,
      soldCount: 45,
      totalStock: 80,
      isFlashSale: false,
    },
    {
      id: 5,
      name: 'Samsung 55" 4K QLED Smart TV',
      price: 59999,
      originalPrice: 79999,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      timeLeft: "4h 10m",
      discount: 25,
      soldCount: 67,
      totalStock: 120,
      isFlashSale: true,
    },
    {
      id: 6,
      name: "JBL Xtreme 3 Portable Speaker",
      price: 4999,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      timeLeft: "6h 5m",
      discount: 38,
      soldCount: 156,
      totalStock: 250,
      isFlashSale: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const getProgressPercentage = (sold, total) => {
    return (sold / total) * 100
  }

  return (
    <section className="py-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background  */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-400 to-orange-500 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            {/* <motion.div
              className="flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg"
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(239, 68, 68, 0.3)",
                  "0 8px 30px rgba(239, 68, 68, 0.5)",
                  "0 4px 20px rgba(239, 68, 68, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <FaFire className="text-2xl mr-2" />
              </motion.div>
              <span className="font-bold text-lg">HOT DEALS</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              >
                <BsLightningChargeFill className="text-xl ml-2" />
              </motion.div>
            </motion.div> */}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Today's Blazing Deals
            </span>
          </h2>
        </motion.div>

        {/* Deals Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {hotDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100"
              variants={itemVariants}
              whileHover={{
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Flash Sale Badge */}
              {deal.isFlashSale && (
                <motion.div
                  className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(239, 68, 68, 0.7)",
                      "0 0 0 10px rgba(239, 68, 68, 0)",
                      "0 0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <BsLightningChargeFill className="inline mr-1" />
                  FLASH SALE
                </motion.div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                -{deal.discount}%
              </div>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <motion.img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Countdown Timer Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <FaClock className="text-red-400 mr-2" />
                    </motion.div>
                    <span className="font-bold text-lg">{deal.timeLeft}</span>
                    <span className="ml-2 text-sm opacity-80">left</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {deal.name}
                </h3>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-orange-600">₹{deal.price.toLocaleString()}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ₹{deal.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                {/* Cart Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaShoppingCart className="mr-2" />
                  Grab Deal Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default HotDealsSection
