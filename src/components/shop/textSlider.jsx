import { motion } from "framer-motion";
import { BsLightningFill } from "react-icons/bs";

const TextSlider = () => {
  const promoTexts = [
    "Flash Sale: 50% Off Electronics - Limited Time!",
    "Free Shipping on Orders Over ₹1999",
    "Special Gift Wrapping Available",
    "New Luxury Collection Just Arrived",
    "Limited Stock: Rare Collectibles Available"
  ];

  return (
    <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 overflow-hidden py-4 relative">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      <motion.div
        className="whitespace-nowrap flex gap-12 items-center"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {[...promoTexts, ...promoTexts].map((text, idx) => (
          <motion.div
            key={idx}
            className="text-white font-bold text-lg md:text-xl flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <BsLightningFill className="mr-3 text-yellow-300 animate-pulse" />
            <span className="text-shadow">{text}</span>
            <div className="ml-3 w-2 h-2 rounded-full bg-white/80 animate-pulse"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TextSlider;