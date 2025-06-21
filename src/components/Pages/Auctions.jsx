import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";
import {
  FiClock,
  FiUsers,
  FiArrowRight,
  FiPlus,
  FiBell,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import { BsLightningFill } from "react-icons/bs";
import { FaFire, FaRegClock } from "react-icons/fa";
import FeaturedSection from "./FeaturedSection";

const Auctions = () => {
  // Sample data for live auctions
  const [liveAuctions, setLiveAuctions] = useState([
    {
      id: 1,
      title: "Vintage Rolex Submariner",
      currentBid: 12500,
      bids: 24,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
      category: "Watches",
      watchers: 56,
    },
    {
      id: 3,
      title: "Signed Sports Memorabilia",
      currentBid: 7800,
      bids: 18,
      image: "https://images.unsplash.com/photo-1579952363872-2898cd6f7c38",
      timeLeft: { hours: 0, minutes: 15, seconds: 10 },
      category: "Collectibles",
      watchers: 42,
    },
    {
      id: 4,
      title: "Limited Edition Sneakers",
      currentBid: 4200,
      bids: 15,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      timeLeft: { hours: 0, minutes: 25, seconds: 30 },
      category: "Footwear",
      watchers: 38,
    },
    {
      id: 5,
      title: "Antique Jewelry Collection",
      currentBid: 6800,
      bids: 22,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      timeLeft: { hours: 0, minutes: 10, seconds: 5 },
      category: "Jewelry",
      watchers: 71,
    },
  ]);

  // Sample data for upcoming auctions
  const [upcomingAuctions, setUpcomingAuctions] = useState([
    {
      id: 7,
      title: "Collector's Art Piece",
      startingBid: 2500,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      startsIn: { days: 0, hours: 2, minutes: 30 },
      category: "Art",
    },
    {
      id: 8,
      title: "Designer Handbag",
      startingBid: 1800,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      startsIn: { days: 0, hours: 1, minutes: 45 },
      category: "Fashion",
    },
    {
      id: 9,
      title: "Vintage Vinyl Collection",
      startingBid: 950,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394",
      startsIn: { days: 0, hours: 3, minutes: 15 },
      category: "Music",
    },
    {
      id: 10,
      title: "Rare Whiskey Collection",
      startingBid: 3500,
      image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757",
      startsIn: { days: 0, hours: 4, minutes: 0 },
      category: "Spirits",
    },
  ]);

  // Update timers
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveAuctions((prev) =>
        prev.map((auction) => {
          const { hours, minutes, seconds } = auction.timeLeft;
          let newSeconds = seconds - 1;
          let newMinutes = newSeconds < 0 ? minutes - 1 : minutes;
          let newHours = newMinutes < 0 ? hours - 1 : hours;

          return {
            ...auction,
            timeLeft: {
              hours: newHours < 0 ? 0 : newHours,
              minutes: newMinutes < 0 ? 59 : newMinutes,
              seconds: newSeconds < 0 ? 59 : newSeconds,
            },
          };
        })
      );

      setUpcomingAuctions((prev) =>
        prev.map((auction) => {
          const { days, hours, minutes } = auction.startsIn;
          let newMinutes = minutes - 1;
          let newHours = newMinutes < 0 ? hours - 1 : hours;
          let newDays = newHours < 0 ? days - 1 : days;

          return {
            ...auction,
            startsIn: {
              days: newDays < 0 ? 0 : newDays,
              hours: newHours < 0 ? 23 : newHours,
              minutes: newMinutes < 0 ? 59 : newMinutes,
            },
          };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="min-h-screen bg-[#232534] text-white">
      {/* Animated banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 overflow-hidden">
        <motion.div
          className="py-3 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-lg font-bold mx-4">
            <BsLightningFill className="inline mr-2 animate-pulse" />
            FEATURED DEALS • ULTRA-LOW STARTING BIDS • ITEMS SELLING OUT FAST •
            PLACE YOUR BID NOW •
          </span>
          <span className="text-lg font-bold mx-4">
            <BsLightningFill className="inline mr-2 animate-pulse" />
            FEATURED DEALS • ULTRA-LOW STARTING BIDS • ITEMS SELLING OUT FAST •
            PLACE YOUR BID NOW •
          </span>
        </motion.div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured auctions section */}
        <FeaturedSection />

        {/* Live auctions section */}
        <motion.section
          className="mb-16 mt-15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <FaFire className="text-amber-500 mr-3" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Live Auctions
              </span>
            </h2>
            <button className="flex cursor-pointer items-center text-amber-400 hover:text-amber-300 transition-colors">
              View All <FiChevronRight className="ml-1" />
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {liveAuctions.map((auction) => (
                <motion.div
                  key={auction.id}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-amber-400/30 transition-all duration-300 "
                >
                  <div className="relative">
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <div className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse"></div>
                        LIVE
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <button className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors">
                        <FiHeart className="text-white" />
                      </button>
                    </div>
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg truncate">
                        {auction.title}
                      </h3>
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                        {auction.category}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <FiUsers className="mr-1" />
                      <span>{auction.bids} bids</span>
                      <span className="mx-2">•</span>
                      <span>{auction.watchers} watching</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-amber-400">
                        ₹{auction.currentBid.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400">Current bid</div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg mb-4">
                      <div className="flex items-center">
                        <FiClock className="text-amber-400 mr-2" />
                        <span className="text-sm">Time left</span>
                      </div>
                      <div className="font-mono font-bold">
                        {`${formatTime(auction.timeLeft.hours)}:${formatTime(
                          auction.timeLeft.minutes
                        )}:${formatTime(auction.timeLeft.seconds)}`}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 rounded-lg font-bold hover:opacity-90 transition-opacity cursor-pointer">
                      Place Bid
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Upcoming auctions section */}
        <motion.section
          className="mb-16 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <FaRegClock className="text-blue-400 mr-3" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Upcomings
              </span>
            </h2>
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
              View All <FiChevronRight className="ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingAuctions.map((auction) => (
              <motion.div
                key={auction.id}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-all duration-300 "
              >
                <div className="relative">
                  <div className="absolute top-3 right-3 z-10">
                    <button className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors">
                      <FiBell className="text-white" />
                    </button>
                  </div>
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg truncate">
                      {auction.title}
                    </h3>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {auction.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-xl font-bold text-blue-400">
                      Starting at ₹{auction.startingBid.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg mb-4">
                    <div className="flex items-center">
                      <FiClock className="text-blue-400 mr-2" />
                      <span className="text-sm">Starts in</span>
                    </div>
                    <div className="font-mono font-bold">
                      {`${formatTime(auction.startsIn.hours)}:${formatTime(
                        auction.startsIn.minutes
                      )}`}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg font-bold hover:opacity-90 transition-opacity cursor-pointer">
                    Set Reminder
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Wants to Sell section */}
        <motion.section
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-8 text-center border border-gray-700 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-500/10 rounded-full filter blur-xl"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-xl"></div>

          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Want to sell your items?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of sellers who are making great profits by auctioning
            their items on BidFlare. Our platform offers the best rates and
            exposure for your valuable items.
          </p>
          <Button
            variant="contained"
            startIcon={<FiPlus size={16} />}
            sx={{
              background: "linear-gradient(to right, #f59e0b, #f97316)",
              "&:hover": {
                background: "linear-gradient(to right, #f97316, #ea580c)",
                boxShadow: "0 4px 6px rgba(251, 146, 60, 0.3)",
                transform: "translateY(-2px)",
              },
              paddingX: 4,
              paddingY: 1.5,
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "0.875rem",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 6px rgba(251, 146, 60, 0.2)",
            }}
          >
            Create Auction
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default Auctions;
