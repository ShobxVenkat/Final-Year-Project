import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";

const InfiniteProductCarousel = () => {
  const products = [
    {
      id: 1,
      title: "Summer Edition Rolex",
      description: "Limited edition ceramic bezel with diamond markers",
      price: 895000,
      originalPrice: 950000,
      rating: 4.9,
      discount: 6,
      isNew: true,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Just Launched", "Limited Stock"]
    },
    {
      id: 2,
      title: "Designer Beach Collection",
      description: "Premium linen shirts & shorts with UV protection",
      price: 24900,
      originalPrice: 29900,
      rating: 4.7,
      discount: 17,
      isNew: true,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Summer Essential"]
    },
    {
      id: 3,
      title: "Smart Summer Gadgets",
      description: "Waterproof tech for your vacation - solar powered",
      price: 45900,
      originalPrice: 52900,
      rating: 4.8,
      discount: 13,
      isNew: true,
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Tech Innovation"]
    },
    {
      id: 4,
      title: "Luxury Sunglasses",
      description: "Handcrafted UV protection with polarized lenses",
      price: 38900,
      originalPrice: 44900,
      rating: 4.6,
      discount: 15,
      isNew: true,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Trending Now"]
    },
    {
      id: 5,
      title: "Premium Travel Bags",
      description: "Lightweight yet spacious with RFID protection",
      price: 67900,
      originalPrice: 79900,
      rating: 4.9,
      discount: 15,
      isNew: true,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Best Seller"]
    }
  ];

  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [wishlistItems, setWishlistItems] = useState([]);

  
  // Duplicate items for infinite loop
  const duplicatedProducts = [...products, ...products];
  const productWidth = 320;
  const gap = 32;
  const totalWidth = duplicatedProducts.length * (productWidth + gap);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    setCartItems([...cartItems, productToAdd]);
    console.log("Added to cart:", productToAdd.title);
  };

  // const addToWishlist = (productId) => {
  //   const productToAdd = products.find(product => product.id === productId);
  //   setWishlistItems([...wishlistItems, productToAdd]);
  //   console.log("Added to wishlist:", productToAdd.title);
  // };


  // Auto-scroll
  useEffect(() => {
    if (!isHovering) {
      controls.start({
        x: [0, -totalWidth / 2],
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    } else {
      controls.stop();
    }
  }, [isHovering, totalWidth]);

  return (
    <div className="relative overflow-hidden py-12 bg-gradient-to-b from-gray-900 to-black">

      <div 
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div 
          className="flex"
          animate={controls}
          style={{ width: totalWidth }}
        >
          {duplicatedProducts.map((product, index) => (
            <motion.div 
              key={`${product.id}-${index}`}
              className="flex-shrink-0 mx-4"
              style={{ width: productWidth }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                {/* Product image */}
                <div className="relative h-72 overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Product tags */}
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    {product.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="bg-gray-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                      >
                        {tag}
                      </span>
                    ))}
                    {product.isNew && (
                      <span className="bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                        NEW ARRIVAL
                      </span>
                    )}
                  </div>
                  
                  {/* wishlist button with tooltip */}
                  {/* <div className="absolute top-3 right-3 flex flex-col items-center gap-2 ">
                    <div className="relative group">
                      <button 
                        className="bg-gray-900/80 backdrop-blur-sm rounded-full p-2 shadow hover:bg-blue-500 transition-all duration-300"
                        onClick={() => addToWishlist(product.id)}
                      >
                        <FiShoppingBag className="text-white text-lg" />
                      </button>
                      <div className="absolute top-full right-0 mt-2 w-max px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        Add to Wishlist
                        <div className="absolute -top-1 right-2 w-2 h-2 bg-gray-800 transform rotate-45"></div>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Product details */}
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-white line-clamp-1">{product.title}</h3>
                    <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                      <FaStar className="text-amber-400 mr-1 text-sm" />
                      <span className="text-sm font-medium text-white">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-xl font-bold text-white">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      {product.discount && (
                        <span className="block text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full mt-1">
                          {product.discount}% OFF
                        </span>
                      )}
                    </div>

                    {/* Add to card button */}
                    <div className="relative group">
                      <button 
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all hover:scale-110 cursor-pointer"
                        onClick={() => addToCart(product.id)}
                      >
                        <FaCartPlus className="text-lg" />
                      </button>
                      <div className="absolute top-full -right-4 mt-0 w-max px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        Add to Cart
      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* gradient overlay on sides */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default InfiniteProductCarousel;