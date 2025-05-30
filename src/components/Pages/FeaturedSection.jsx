import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiClock,
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiShare2,
  FiEye,
} from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const featuredItems = [
  {
    id: 1,
    title: "PlayStation 5 Digital Edition",
    description:
      "Experience next-gen gaming with the PlayStation 5 Digital Edition. This brand new, unopened console comes with a 2-year warranty and includes the innovative DualSense wireless controller with haptic feedback and adaptive triggers. The ultra-high speed SSD delivers lightning-fast loading times.",
    specs: [
      "825GB SSD storage",
      "4K UHD Blu-ray drive",
      "120Hz refresh rate support",
      "3D Audio support"
    ],
    currentBid: 5990,
    bids: 28,
    retailPrice: 7990,
    image:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    timeLeft: { hours: 1, minutes: 30, seconds: 45 },
    badgeColor: "from-blue-500 to-purple-600",
    textGradient: "bg-gradient-to-r from-blue-400 to-purple-500",
    buttonGradient: "from-blue-500 to-purple-600",
    bgGradient: "bg-gradient-to-br from-blue-900/80 to-purple-900/80",
    category: "Electronics",
    watchers: 142,
  },
  {
    id: 2,
    title: "Air Jordan 1 Retro High OG 'Chicago'",
    description:
      "The iconic Air Jordan 1 Retro High OG 'Chicago' colorway returns in this limited edition release. These never-worn sneakers come in their original box with all accessories. The premium leather upper features the classic red, black, and white color blocking that made this silhouette legendary.",
    specs: [
      "Size: US 10",
      "Colorway: White/Varsity Red-Black",
      "Style Code: DZ5485-612",
      "Original release: 1985"
    ],
    currentBid: 12000,
    bids: 15,
    retailPrice: 18000,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRPMnVE07MSOu5B4nNwRMQAsavnp_nBEfnA9_9ufHM-cee2I_V0RYvjwPy5XHSawRS8ePrS3hOLc7XijKrXRqaPZ57UH30H_E3f1oml-jg07JHKcdv1wgGpYfw",
    timeLeft: { hours: 0, minutes: 45, seconds: 20 },
    badgeColor: "from-red-500 to-orange-500",
    textGradient: "bg-gradient-to-r from-red-400 to-orange-400",
    buttonGradient: "from-red-500 to-orange-500",
    bgGradient: "bg-gradient-to-br from-red-900/80 to-orange-900/80",
    category: "Sneakers",
    watchers: 89,
  },
  {
    id: 3,
    title: "Samsung Galaxy S23 Ultra 5G (256GB)",
    description:
      "The Samsung Galaxy S23 Ultra redefines smartphone excellence with its advanced 200MP camera system, stunning 6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate, and powerful Snapdragon 8 Gen 2 processor. This unlocked model includes all original accessories and comes with 1-year manufacturer warranty.",
    specs: [
      "6.8-inch QHD+ Dynamic AMOLED 2X",
      "200MP + 12MP + 10MP + 10MP cameras",
      "5000mAh battery with 45W fast charging",
      "S Pen included"
    ],
    currentBid: 15000,
    bids: 32,
    retailPrice: 22000,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/i/5/1/-original-imagzm8pvabtmeys.jpeg?q=20&crop=false",
    timeLeft: { hours: 2, minutes: 15, seconds: 10 },
    badgeColor: "from-green-500 to-teal-600",
    textGradient: "bg-gradient-to-r from-green-400 to-teal-500",
    buttonGradient: "from-green-500 to-teal-600",
    bgGradient: "bg-gradient-to-br from-green-900/80 to-teal-900/80",
    category: "Smartphones",
    watchers: 203,
  },
  {
    id: 4,
    title: "Apple Watch Series 8 (GPS + Cellular)",
    description:
      "The Apple Watch Series 8 in 45mm Midnight aluminum case with matching sport band. This GPS + Cellular model allows you to stay connected without your iPhone. Features include temperature sensing for advanced cycle tracking, crash detection, and the always-on Retina display. Brand new in sealed box.",
    specs: [
      "45mm Midnight Aluminum Case",
      "Blood oxygen and ECG apps",
      "Water resistant 50m",
      "WatchOS 9 out of the box"
    ],
    currentBid: 2800,
    bids: 19,
    retailPrice: 4500,
    image:
      "https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg",
    timeLeft: { hours: 0, minutes: 30, seconds: 5 },
    badgeColor: "from-indigo-500 to-pink-600",
    textGradient: "bg-gradient-to-r from-indigo-400 to-pink-500",
    buttonGradient: "from-indigo-500 to-pink-600",
    bgGradient: "bg-gradient-to-br from-indigo-900/80 to-pink-900/80",
    category: "Wearables",
    watchers: 76,
  },
  {
    id: 5,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    description:
      "Experience industry-leading noise cancellation with the Sony WH-1000XM5 headphones. Featuring new integrated processors V1 and QN1, these headphones automatically optimize noise cancellation based on your wearing conditions and environment. Enjoy premium sound quality with 30-hour battery life and quick charging.",
    specs: [
      "30-hour battery life (NC on)",
      "Multi-point connection",
      "Touch sensor controls",
      "Built-in Alexa and Google Assistant"
    ],
    currentBid: 11900,
    bids: 12,
    retailPrice: 15900,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTATdl9Qsf4jilf_MBIjOoUnn52MOdnLf7n895BmPMyfFrBoH7kzk3dIYRUhPCwtvrIQkfxaPLohNpTHPcsbLQjAYI8HWStdGeE16efw-p7eC9ufESFkSJNmQ",
    timeLeft: { hours: 3, minutes: 10, seconds: 0 },
    badgeColor: "from-gray-500 to-blue-600",
    textGradient: "bg-gradient-to-r from-gray-400 to-blue-500",
    buttonGradient: "from-gray-500 to-blue-600",
    bgGradient: "bg-gradient-to-br from-gray-900/80 to-blue-900/80",
    category: "Audio",
    watchers: 54,
  },
];

const FeaturedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoSlide, setAutoSlide] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
    setAutoSlide(true);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
    setAutoSlide(true);
  };

  useEffect(() => {
    let interval;
    if (autoSlide && !isHovering) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [autoSlide, currentIndex, isHovering]);

  useEffect(() => {
    const timer = setInterval(() => {
      featuredItems.forEach((item) => {
        const { hours, minutes, seconds } = item.timeLeft;
        let newSeconds = seconds - 1;
        let newMinutes = newSeconds < 0 ? minutes - 1 : minutes;
        let newHours = newMinutes < 0 ? hours - 1 : hours;

        item.timeLeft = {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentItem = featuredItems[currentIndex];

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div 
      className="relative w-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-white text-2xl cursor-pointer" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-white text-2xl cursor-pointer" />
          </button>

          {/* Carousel content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="relative"
            >
              {/* <div className={`absolute inset-0 ${currentItem.bgGradient} rounded-2xl -z-10`} /> */}
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-2xl">
                {/* Image section */}
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-gray-900/50 backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <motion.img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="max-w-full max-h-full object-contain"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <div
                      className={`bg-gradient-to-r ${currentItem.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1`}
                    >
                      <FaFire className="text-amber-300" />
                      <span>HOT AUCTION</span>
                    </div>
                    <div className="bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {currentItem.category}
                    </div>
                  </div>

                </div>

                {/* Details section */}
                <div className="flex flex-col justify-center p-4 md:p-6 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3
                      className={`text-2xl md:text-4xl font-bold mb-3 ${currentItem.textGradient} bg-clip-text text-transparent`}
                    >
                      {currentItem.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center text-amber-400 bg-amber-400/10 px-2 py-1 rounded text-sm">
                        <FiEye className="mr-1" />
                        <span>{currentItem.watchers} watching</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-200 mb-6">{currentItem.description}</p>

                    <div className="mb-6 grid grid-cols-2 gap-2">
                      {currentItem.specs.map((spec, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 rounded-full bg-amber-400 mr-2"></span>
                          {spec}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 mb-8">
                      <div className="flex flex-col items-center bg-black/30 p-3 rounded-lg min-w-[100px]">
                        <div className="flex items-center text-amber-400 mb-1">
                          <FiClock className="mr-2" />
                          <span className="text-sm">Time Left</span>
                        </div>
                        <div className="text-xl font-mono font-bold">
                          {`${formatTime(currentItem.timeLeft.hours)}:${formatTime(currentItem.timeLeft.minutes)}:${formatTime(currentItem.timeLeft.seconds)}`}
                        </div>
                      </div>
                      <div className="flex flex-col items-center bg-black/30 p-3 rounded-lg min-w-[100px]">
                        <div className="flex items-center text-white mb-1">
                          <FiUsers className="mr-2" />
                          <span className="text-sm">Bids</span>
                        </div>
                        <div className="text-xl font-bold">
                          {currentItem.bids}
                        </div>
                      </div>
                      <div className="flex flex-col items-center bg-black/30 p-3 rounded-lg min-w-[100px]">
                        <div className="text-gray-300 mb-1 text-sm">Retail Price</div>
                        <div className="text-lg line-through text-gray-400">
                          ₹{currentItem.retailPrice.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-amber-400">
                        ₹{currentItem.currentBid.toLocaleString()}
                      </div>
                      <div className="text-gray-300">Current Bid</div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button
                        className={`bg-gradient-to-r ${currentItem.buttonGradient} text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                      >
                        Place Bid Now
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-all border border-white/20">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setAutoSlide(true);
              }}
              className={`w-3 h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-amber-400 w-8 scale-110" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;