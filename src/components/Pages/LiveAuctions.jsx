import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Flame,
  Timer,
  Gavel,
  Eye,
  Search,
  Filter,
  Zap,
  ChevronDown,
  Heart,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";

export default function LiveAuctions() {
  // Live auctions data
  const [liveAuctions, setLiveAuctions] = useState([
    {
      id: 1,
      title: "Vintage Rolex Submariner 1965",
      description: "Rare vintage Rolex with original box and papers",
      currentBid: 12500,
      bids: 24,
      retailPrice: 18000,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
      category: "Luxury Watches",
      watchers: 56,
      isHot: true,
    },
    {
      id: 2,
      title: "Signed Michael Jordan Rookie Card",
      description: "PSA 10 graded 1986 Fleer rookie card",
      currentBid: 7800,
      bids: 18,
      retailPrice: 12000,
      image: "https://images.unsplash.com/photo-1579952363872-2898cd6f7c38",
      timeLeft: { hours: 0, minutes: 15, seconds: 10 },
      category: "Sports Memorabilia",
      watchers: 42,
      isHot: true,
    },
    {
      id: 3,
      title: "Air Jordan 1 Retro High OG",
      description: "2022 re-release, deadstock condition",
      currentBid: 4200,
      bids: 15,
      retailPrice: 6000,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      timeLeft: { hours: 0, minutes: 25, seconds: 30 },
      category: "Sneakers",
      watchers: 38,
      isHot: false,
    },
    {
      id: 4,
      title: "Antique Diamond Necklace",
      description: "Edwardian era, 18k white gold, 2.5ct",
      currentBid: 6800,
      bids: 22,
      retailPrice: 9500,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      timeLeft: { hours: 0, minutes: 10, seconds: 5 },
      category: "Fine Jewelry",
      watchers: 71,
      isHot: true,
    },
    {
      id: 5,
      title: "Vincent van Gogh Limited Print",
      description: "Museum-quality limited edition",
      currentBid: 3200,
      bids: 8,
      retailPrice: 5000,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      timeLeft: { hours: 2, minutes: 45, seconds: 20 },
      category: "Art",
      watchers: 34,
      isHot: false,
    },
    {
      id: 6,
      title: "Hermès Birkin 35cm Gold",
      description: "Authentic Hermès Birkin bag",
      currentBid: 9800,
      bids: 31,
      retailPrice: 15000,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      timeLeft: { hours: 1, minutes: 5, seconds: 15 },
      category: "Luxury Handbags",
      watchers: 89,
      isHot: true,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Timer logic
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

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const getTimeLeftColor = (timeLeft) => {
    const totalMinutes = timeLeft.hours * 60 + timeLeft.minutes;
    if (totalMinutes < 15) return "text-red-400";
    if (totalMinutes < 60) return "text-yellow-400";
    return "text-green-400";
  };

  const categories = [
    "All",
    "Luxury Watches",
    "Sports Memorabilia",
    "Sneakers",
    "Fine Jewelry",
    "Art",
    "Luxury Handbags",
  ];

  const filteredAuctions = liveAuctions.filter((auction) => {
    const matchesCategory = selectedCategory === "All" || auction.category === selectedCategory;
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         auction.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Animated Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden">
        <motion.div
          className="py-3 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="flex items-center space-x-8 text-white font-bold text-sm sm:text-base">
            <span className="flex items-center">
              <Flame className="mr-2 text-yellow-300" />
              LIVE AUCTIONS • BID NOW • LIMITED TIME •
            </span>
            <span className="flex items-center">
              <Zap className="mr-2 text-yellow-300" />
              EXCLUSIVE ITEMS • DON'T MISS OUT •
            </span>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Live Auctions
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bid on these exclusive items before time runs out
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search auctions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              />
            </div>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-lg pl-4 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Auction Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredAuctions.map((auction) => (
              <motion.div
                key={auction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                layout
              >
                <Card className="bg-gray-800 border border-gray-700 hover:border-amber-500/30 transition-all h-full flex flex-col group">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={auction.image}
                        alt={auction.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {auction.isHot && (
                          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 animate-pulse">
                            <Flame className="w-3 h-3 mr-1" />
                            HOT
                          </Badge>
                        )}
                        <Badge className="bg-red-500 text-white border-0">
                          <div className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse" />
                          LIVE
                        </Badge>
                      </div>
                      
                      <div className="absolute top-3 right-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-gray-900/50 hover:bg-gray-900/70 text-white"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="absolute bottom-3 left-3">
                        <Badge variant="secondary" className="bg-gray-900/80 text-white border-gray-700">
                          {auction.category}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Details Section */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{auction.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{auction.description}</p>
                      
                      <div className="mt-auto">
                        {/* Bid Info */}
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <div className="text-2xl font-bold text-amber-400">
                              ₹{auction.currentBid.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-400">Current Bid</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{auction.bids} bids</div>
                            <div className="text-xs text-gray-400 line-through">
                              ₹{auction.retailPrice.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        
                        {/* Time Left */}
                        <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-amber-400">
                              <Timer className="w-4 h-4 mr-2" />
                              <span className="text-sm">Time Left</span>
                            </div>
                            <div className={`font-mono font-bold ${getTimeLeftColor(auction.timeLeft)}`}>
                              {`${formatTime(auction.timeLeft.hours)}:${formatTime(auction.timeLeft.minutes)}:${formatTime(auction.timeLeft.seconds)}`}
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                          <Gavel className="w-4 h-4 mr-2" />
                          Place Bid
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAuctions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">No auctions match your search criteria</div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}