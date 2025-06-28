import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ShoppingBag, ArrowRight, LogIn } from 'lucide-react';

const Cart = ({ isUser = true }) => {
  // Sample items
  const cartItems = [
    {
      id: 1,
      name: 'Vintage Leather Jacket',
      price: 129.99,
      image: 'https://example.com/jacket.jpg',
      quantity: 1
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 89.99,
      image: 'https://example.com/headphones.jpg',
      quantity: 2
    }
  ];

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Animation 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a12] to-[#1a1b2f] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="flex items-center mb-8">
          <ShoppingCart className="w-8 h-8 text-orange-500 mr-3" />
          <h1 className="text-3xl font-bold text-white">Your Cart</h1>
        </motion.div>

        {isUser ? (
          cartItems.length > 0 ? (
            <>
              {/* Cart Items */}
              <motion.div variants={itemVariants} className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden mb-8">
                <div className="divide-y divide-gray-800">
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      variants={itemVariants}
                      className="flex flex-col sm:flex-row p-4 hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <div className="w-24 h-24 bg-gray-700 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium text-white">{item.name}</h3>
                          <p className="text-lg font-medium text-orange-500">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
                            <button className="px-3 py-1 bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                              -
                            </button>
                            <span className="px-4 py-1 text-white">{item.quantity}</span>
                            <button className="px-3 py-1 bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                              +
                            </button>
                          </div>
                          <button className="text-gray-400 hover:text-red-400 transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Order Summary */}
              <motion.div variants={itemVariants} className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-white">Free</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-800 pt-3">
                    <span className="text-gray-400">Total</span>
                    <span className="text-orange-500 font-bold text-lg">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Continue Shopping */}
              <motion.div variants={itemVariants} className="text-center">
                <Link
                  to="/shop"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180 mr-2" />
                  <span>Continue Shopping</span>
                </Link>
              </motion.div>
            </>
          ) : (
            /* Empty Cart State */
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900/80 border border-gray-800 rounded-xl p-12 text-center"
            >
              <div className="mx-auto max-w-md">
                <ShoppingBag className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
                <p className="text-gray-400 mb-6">Looks like you haven't added any items to your cart yet</p>
                <Link
                  to="/shop"
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  <span>Browse Products</span>
                </Link>
              </div>
            </motion.div>
          )
        ) : (
          /* Not Logged In State */
          <motion.div 
            variants={itemVariants}
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-12 text-center"
          >
            <div className="mx-auto max-w-md">
              <ShoppingCart className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Login to view your cart</h2>
              <p className="text-gray-400 mb-6">Sign in to see your saved items and checkout</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center border border-gray-700 text-gray-300 hover:bg-gray-800 font-medium py-3 px-6 rounded-lg transition-all"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  <span>Browse Products</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;