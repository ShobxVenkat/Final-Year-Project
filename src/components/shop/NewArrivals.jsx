import { motion } from "framer-motion";

const NewArrivals = () => {
  const collections = [
    {
      id: 1,
      name: "Swiss Timepieces",
      description: "Exclusive watches from renowned makers",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6",
      items: 24,
      accentColor: "from-amber-500 to-amber-700"
    },
    {
      id: 2,
      name: "Designer Handbags",
      description: "Luxury handbags from top designers",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      items: 18,
      accentColor: "from-rose-500 to-rose-700"
    },
    {
      id: 3,
      name: "Luxury Footwear",
      description: "High-end shoes and boots for every occasion",
      image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6",
      items: 30,
      accentColor: "from-emerald-500 to-emerald-700"
    },
    {
      id: 4,
      name: "Fine Jewelry",
      description: "Elegant pieces crafted with precision",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      items: 15,
      accentColor: "from-blue-500 to-blue-700"
    },
    {
      id: 5,
      name: "Luxury Fragrances",
      description: "Signature scents from world-class brands",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
      items: 20,
      accentColor: "from-purple-500 to-purple-700"
    },
    {
      id: 6,
      name: "Premium Skincare",
      description: "High-quality skincare for radiant skin",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      items: 12,
      accentColor: "from-pink-500 to-pink-700"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          // initial={{ opacity: 0, y: -20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
              Season's New Arrivals
            </span>
          </h2>
        </motion.div>

        <motion.div
          // variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              // variants={item}
              className="relative h-80 rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                
                <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300">
                  {collection.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {collection.description}
                </p>
                <motion.button
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-2 w-fit px-4 py-2 rounded-full bg-gradient-to-r ${collection.accentColor} text-white flex items-center text-sm font-medium backdrop-blur-sm border border-white/20`}
                >
                  Explore Collection
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;