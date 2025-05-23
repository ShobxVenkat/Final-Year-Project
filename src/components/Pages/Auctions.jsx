import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { FiClock, FiUsers, FiArrowRight, FiPlus, FiBell } from "react-icons/fi";
import { BsLightningFill } from "react-icons/bs";

const Auctions = () => {
  // State for featured auction

  const [featuredTimeLeft, setFeaturedTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30,
  });

  // State for live auctions
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
      id: 2,
      title: "Rare First Edition Book Set",
      currentBid: 3200,
      bids: 12,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      timeLeft: { hours: 0, minutes: 45, seconds: 20 },
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

  // State for upcoming auctions
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

  const [hoveredId, setHoveredId] = useState(null);

  // Countdown timer effect for featured auction
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

  // Countdown timer effect for live auctions
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

  // Animation variants
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
    initial: { height: "180px" },
    hover: { height: "320px" },
  };

  return (
    <div className="min-h-screen bg-[#0a0b16] text-white">
      {/* Scrolling banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 overflow-hidden">
        <motion.div
          className="py-3 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-lg font-bold mx-4">
            <BsLightningFill className="inline mr-2" />
            LIVE AUCTIONS HAPPENING NOW • DON'T MISS OUT • BID TO WIN •
          </span>
          <span className="text-lg font-bold mx-4">
            <BsLightningFill className="inline mr-2" />
            LIVE AUCTIONS HAPPENING NOW • DON'T MISS OUT • BID TO WIN •
          </span>
        </motion.div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured auction section - more compact */}
        <motion.section
          className="mb-12 max-w-4xl mx-auto"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div
            className="bg-gradient-to-br from-[#1a1c2f] to-[#13152a] rounded-xl overflow-hidden shadow-xl border border-gray-800"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Auction image */}
              <div className="md:w-2/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                  alt="Featured Auction"
                  className="w-full h-48 md:h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Featured
                </div>
              </div>

              {/* Auction details */}
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Limited Edition Luxury Watch
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A rare collector's item with only 50 pieces made worldwide.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#1e2038] p-3 rounded-lg">
                    <div className="text-orange-400 font-bold text-lg">
                      ₹42,800
                    </div>
                    <div className="text-gray-500 text-xs">Current Bid</div>
                  </div>
                  <div className="bg-[#1e2038] p-3 rounded-lg">
                    <div className="text-white font-bold text-lg">36</div>
                    <div className="text-gray-500 text-xs">Bids</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-orange-400 text-sm mb-1">
                    <FiClock className="mr-2" />
                    <span>Time Remaining</span>
                  </div>
                  <div className="text-lg font-mono bg-[#1e2038] p-2 rounded-lg">
                    {`${featuredTimeLeft.hours}h ${featuredTimeLeft.minutes}m ${featuredTimeLeft.seconds}s`}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#fb923c",
                      "&:hover": { backgroundColor: "#f97316" },
                      fontWeight: "bold",
                      borderRadius: 1,
                      textTransform: "none",
                      flex: 1,
                    }}
                  >
                    Place Bid
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "white",
                      borderColor: "gray.600",
                      "&:hover": { borderColor: "gray.400" },
                      fontWeight: "bold",
                      borderRadius: 1,
                      textTransform: "none",
                      flex: 1,
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

{/* Live auctions section */}
<motion.section 
  className="mb-12"
  initial="hidden"
  animate="show"
  variants={container}
>
  <div className="flex justify-between items-center mb-6">
    <motion.h2 className="text-xl font-bold text-orange-400" variants={item}>
      Live Auctions
    </motion.h2>
    <motion.div variants={item}>
      <Button
        endIcon={<FiArrowRight />}
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
          textTransform: "none",
          fontWeight: "medium",
          fontSize: '0.875rem'
        }}
      >
        View All
      </Button>
    </motion.div>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    {liveAuctions.map((auction) => (
      <motion.div 
        key={auction.id}
        className="bg-[#1a1c2f] rounded-xl overflow-hidden shadow-lg border border-gray-800/50"
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={{
          rest: { height: "auto" },
          hover: { height: "auto" } // Needed for proper animation
        }}
      >
        <div className="relative">
          <img 
            src={auction.image} 
            alt={auction.title} 
            className="w-full h-40 object-cover"
          />
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            LIVE
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-base mb-1">{auction.title}</h3>
          
          {/* Hidden details that appear on hover */}
          <motion.div
            initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, delay: 0.1 },
                padding: { duration: 0.3 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              paddingTop: 0,
              paddingBottom: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.1 },
                padding: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="flex justify-between items-center my-3">
              <div>
                <div className="text-orange-400 font-bold">₹{auction.currentBid.toLocaleString()}</div>
                <div className="text-gray-500 text-xs">Current Bid</div>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <FiUsers className="mr-1" />
                <span>{auction.bids} bids</span>
              </div>
            </div>
            
            <div className="flex items-center text-orange-400 text-sm mb-3">
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
                backgroundColor: "#fb923c",
                "&:hover": { backgroundColor: "#f97316" },
                fontWeight: "bold",
                borderRadius: 1,
                textTransform: "none",
                fontSize: '0.75rem'
              }}
            >
              Bid Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

        {/* Upcoming auctions section */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="flex justify-between items-center mb-6">
            <motion.h2
              className="text-xl font-bold text-orange-400"
              variants={item}
            >
              Upcoming Auctions
            </motion.h2>
            <motion.div variants={item}>
              <Button
                endIcon={<FiArrowRight />}
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
                  textTransform: "none",
                  fontWeight: "medium",
                  fontSize: "0.875rem",
                }}
              >
                View All
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={container}
          >
            {upcomingAuctions.map((auction) => (
              <motion.div
                key={auction.id}
                className="bg-[#1a1c2f] rounded-xl overflow-hidden shadow-lg border border-gray-800/50"
                whileHover={{ y: -5 }}
                variants={item}
              >
                <div className="relative">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-[#1a1c2f] text-white px-3 py-1 rounded-full text-xs font-medium border border-gray-700">
                      Starts in {auction.startsIn.days}d{" "}
                      {auction.startsIn.hours}h
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-base mb-2">{auction.title}</h3>

                  <div className="mb-3">
                    <div className="text-orange-400 font-bold">
                      Starting at ₹{auction.startingBid.toLocaleString()}
                    </div>
                  </div>

                  <Button
                    variant="outlined"
                    fullWidth
                    size="small"
                    startIcon={<FiBell size={14} />}
                    sx={{
                      color: "white",
                      borderColor: "gray.600",
                      "&:hover": { borderColor: "gray.400" },
                      fontWeight: "bold",
                      borderRadius: 1,
                      textTransform: "none",
                      fontSize: "0.75rem",
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
          className="bg-gradient-to-r from-[#1a1c2f] to-[#13152a] rounded-xl p-8 mb-8 text-center border border-gray-800/50 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-3">Want to sell your items?</h2>
          <p className="text-gray-400 mb-5 text-sm">
            Join thousands of sellers who are making great profits by auctioning
            their items on BidFlare.
          </p>
          <Button
            variant="contained"
            startIcon={<FiPlus size={16} />}
            sx={{
              backgroundColor: "#fb923c",
              "&:hover": { backgroundColor: "#f97316" },
              paddingX: 3,
              paddingY: 1,
              fontWeight: "bold",
              borderRadius: 1,
              textTransform: "none",
              fontSize: "0.875rem",
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
