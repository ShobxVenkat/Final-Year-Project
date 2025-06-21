import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const CategoryGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const categories = [
    {
      id: 1,
      name: "Fashion & Apparel",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
      bgColor: "from-pink-500/20 to-purple-600/20",
      accentColor: "bg-pink-500"
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072230.jpg",
      bgColor: "from-amber-500/20 to-orange-600/20",
      accentColor: "bg-amber-500"
    },
    {
      id: 3,
      name: "Smartphones",
      image: "https://images.unsplash.com/photo-1640936343842-268f9d87e764?q=80&w=1000&auto=format&fit=crop",
      bgColor: "from-blue-500/20 to-indigo-600/20",
      accentColor: "bg-blue-500"
    },
    {
      id: 4,
      name: "Wellness & Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
      bgColor: "from-purple-500/20 to-fuchsia-600/20",
      accentColor: "bg-purple-500"
    },
    {
      id: 5,
      name: "Home & Appliances",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop",
      bgColor: "from-emerald-500/20 to-teal-600/20",
      accentColor: "bg-emerald-500"
    },
    {
      id: 6,
      name: "Sports & Fitness",
      image: "https://plus.unsplash.com/premium_photo-1664536967999-f75d4f4b95fb?q=80&w=1000&auto=format&fit=crop",
      bgColor: "from-red-500/20 to-rose-600/20",
      accentColor: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 ">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="relative aspect-square rounded-xl overflow-hidden group "
            whileHover={{ y: -8 }}
            onHoverStart={() => setHoveredCategory(category.id)}
            onHoverEnd={() => setHoveredCategory(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {/* Background image with zoom effect */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1 }}
              animate={{ scale: hoveredCategory === category.id ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b ${category.bgColor} z-10`}></div>

            {/* Content overlay */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4"
              initial={{ opacity: 0.8 }}
              animate={{ 
                opacity: hoveredCategory === category.id ? 1 : 0.8,
                backgroundColor: hoveredCategory === category.id ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Category name with accent bar */}
              <div className="text-center mb-2">
                <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                  {category.name}
                </h3>
                <motion.div
                  className={`h-1 w-12 mx-auto ${category.accentColor}`}
                  initial={{ scaleX: 0.5 }}
                  animate={{ scaleX: hoveredCategory === category.id ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Shop now button */}
              <motion.button
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full ${category.accentColor} text-white font-medium text-sm cursor-pointer`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredCategory === category.id ? 1 : 0,
                  y: hoveredCategory === category.id ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
              >
                Shop Now
                <FiArrowRight className="text-sm" />
              </motion.button>
            </motion.div>

            {/* Glow effect on hover */}
            {hoveredCategory === category.id && (
              <motion.div
                className={`absolute inset-0 rounded-xl shadow-lg ${category.accentColor.replace('bg', 'shadow')} opacity-50 z-0`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;