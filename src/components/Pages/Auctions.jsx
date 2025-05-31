import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { FiClock, FiUsers, FiArrowRight, FiPlus, FiBell } from "react-icons/fi";
import { BsLightningFill } from "react-icons/bs";
import FeaturedSection from "./FeaturedSection";

const Auctions = () => {
  const [featuredTimeLeft, setFeaturedTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30,
  });

  const [liveAuctions, setLiveAuctions] = useState([
    {
      id: 1,
      title: "Vintage Rolex Submariner",
      currentBid: 12500,
      bids: 24,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
    },
    {
      id: 3,
      title: "Signed Sports Memorabilia",
      currentBid: 7800,
      bids: 18,
      image: "https://images.unsplash.com/photo-1579952363872-2898cd6f7c38",
      timeLeft: { hours: 0, minutes: 15, seconds: 10 },
    },
    {
      id: 4,
      title: "Limited Edition Sneakers",
      currentBid: 4200,
      bids: 15,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      timeLeft: { hours: 0, minutes: 25, seconds: 30 },
    },
    {
      id: 5,
      title: "Antique Jewelry Collection",
      currentBid: 6800,
      bids: 22,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      timeLeft: { hours: 0, minutes: 10, seconds: 5 },
    },
  ]);

  const [upcomingAuctions, setUpcomingAuctions] = useState([
    {
      id: 6,
      title: "Collector's Art Piece",
      startingBid: 2500,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      startsIn: { days: 3, hours: 2 },
    },
    {
      id: 7,
      title: "Designer Handbag",
      startingBid: 1800,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      startsIn: { days: 1, hours: 8 },
    },
    {
      id: 8,
      title: "Vintage Vinyl Collection",
      startingBid: 950,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394",
      startsIn: { days: 2, hours: 6 },
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedTimeLeft((prev) => {
        const seconds = prev.seconds - 1;
        const minutes = seconds < 0 ? prev.minutes - 1 : prev.minutes;
        const hours = minutes < 0 ? prev.hours - 1 : prev.hours;

        return {
          hours: hours < 0 ? 0 : hours,
          minutes: minutes < 0 ? 59 : minutes,
          seconds: seconds < 0 ? 59 : seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const cardHover = {
    rest: { height: 180 },
    hover: { height: 320 },
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
        <FeaturedSection />

        {/* Live auctions section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="flex justify-between items-center mb-8">
            <motion.div variants={item} className="relative">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Live Auctions
              </h2>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full"></div>
                </motion.div>
                 <motion.div variants={item}>
                  <Button
                  endIcon={<FiArrowRight className="text-amber-400" />}
                 sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    transform: "translateX(4px)",
                  },
                  textTransform: "none",
                  fontWeight: "medium",
                  fontSize: "0.875rem",
                  transition: "transform 0.2s ease",
                    }}
                     >
                       View All
                  </Button>
                  </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {liveAuctions.map((auction) => (
              <motion.div
                key={auction.id}
                className="relative bg-gray-800/50 rounded-xl overflow-hidden shadow-lg border border-gray-700"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                  rest: {
                    height: 180,
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                  hover: {
                    height: 320,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.1,
                    },
                  },
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    LIVE
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="font-bold text-white">{auction.title}</h3>
                  </div>
                </div>

                <motion.div
                  className="p-4"
                  initial={{ opacity: 0 }}
                  variants={{
                    rest: {
                      opacity: 0,
                      transition: { duration: 0.2 },
                    },
                    hover: {
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        delay: 0.2,
                      },
                    },
                  }}
                >
                  <div className="flex justify-between items-center my-3">
                    <div>
                      <div className="text-amber-400 font-bold text-lg">
                        ₹{auction.currentBid.toLocaleString()}
                      </div>
                      <div className="text-gray-400 text-xs">Current Bid</div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FiUsers className="mr-1" />
                      <span>{auction.bids} bids</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400 text-sm mb-4">
                    <FiClock className="mr-2" />
                    <span>
                      {`${auction.timeLeft.hours}h ${auction.timeLeft.minutes}m ${auction.timeLeft.seconds}s left`}
                    </span>
                  </div>

                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    sx={{
                      background: "linear-gradient(to right, #f59e0b, #f97316)",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #f97316, #ea580c)",
                        boxShadow: "0 4px 6px rgba(251, 146, 60, 0.3)",
                      },
                      fontWeight: "bold",
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "0.75rem",
                      py: 1,
                      boxShadow: "0 2px 4px rgba(251, 146, 60, 0.2)",
                    }}
                  >
                    Bid Now
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming auctions section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="flex justify-between items-center mb-8">
            <motion.div variants={item} className="relative">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Upcoming Auctions
              </h2>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full"></div>
            </motion.div>
            <motion.div variants={item}>
              <Button
                endIcon={<FiArrowRight className="text-cyan-400" />}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    transform: "translateX(4px)",
                  },
                  textTransform: "none",
                  fontWeight: "medium",
                  fontSize: "0.875rem",
                  transition: "transform 0.2s ease",
                }}
              >
                View All
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
          >
            {upcomingAuctions.map((auction) => (
              <motion.div
                key={auction.id}
                className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg border border-gray-700"
                whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                variants={item}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-48">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-gray-900/80 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700 backdrop-blur-sm">
                      ⏳ Starts in {auction.startsIn.days}d{" "}
                      {auction.startsIn.hours}h
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3 text-white">
                    {auction.title}
                  </h3>

                  <div className="mb-4">
                    <div className="text-cyan-400 font-bold text-xl">
                      Starting at ₹{auction.startingBid.toLocaleString()}
                    </div>
                  </div>

                  <Button
                    variant="outlined"
                    fullWidth
                    size="small"
                    startIcon={<FiBell size={14} className="text-cyan-400" />}
                    sx={{
                      color: "white",
                      borderColor: "gray.600",
                      "&:hover": {
                        borderColor: "cyan.400",
                        backgroundColor: "rgba(6, 182, 212, 0.05)",
                      },
                      fontWeight: "bold",
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "0.75rem",
                      py: 1,
                    }}
                  >
                    Notify Me
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA section */}
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
