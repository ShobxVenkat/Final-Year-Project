"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  ArrowRight,
  Plus,
  Bell,
  Heart,
  ChevronRight,
  ChevronLeft,
  Eye,
  Zap,
  TrendingUp,
  Star,
  Timer,
  Gavel,
  Sparkles,
  Flame,
  CalendarClock,
} from "lucide-react";

export default function Auctions() {
  // Featured auctions data
  const [featuredAuctions] = useState([
    {
      id: 1,
      title: "PlayStation 5 Digital Edition",
      description:
        "Experience next-gen gaming with the PlayStation 5 Digital Edition. Brand new, unopened console with 2-year warranty.",
      currentBid: 5990,
      bids: 28,
      retailPrice: 7990,
      image:
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
      category: "Electronics",
      watchers: 142,
      featured: true,
    },
    {
      id: 2,
      title: "Air Jordan 1 Retro High OG 'Chicago'",
      description:
        "The iconic Air Jordan 1 Retro High OG 'Chicago' colorway returns in this limited edition release.",
      currentBid: 12000,
      bids: 15,
      retailPrice: 18000,
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1470&q=80",
      timeLeft: { hours: 0, minutes: 45, seconds: 20 },
      category: "Sneakers",
      watchers: 89,
      featured: true,
    },
    {
      id: 3,
      title: "Samsung Galaxy S23 Ultra 5G",
      description:
        "The Samsung Galaxy S23 Ultra redefines smartphone excellence with its advanced 200MP camera system.",
      currentBid: 15000,
      bids: 32,
      retailPrice: 22000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1470&q=80",
      timeLeft: { hours: 2, minutes: 15, seconds: 10 },
      category: "Smartphones",
      watchers: 203,
      featured: true,
    },
  ]);

  // Live auctions data
  const [liveAuctions, setLiveAuctions] = useState([
    {
      id: 4,
      title: "Vintage Rolex Submariner",
      currentBid: 12500,
      bids: 24,
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
      category: "Watches",
      watchers: 56,
    },
    {
      id: 5,
      title: "Signed Sports Memorabilia",
      currentBid: 7800,
      bids: 18,
      image:
        "https://images.unsplash.com/photo-1579952363872-2898cd6f7c38?auto=format&fit=crop&w=800&q=80",
      timeLeft: { hours: 0, minutes: 15, seconds: 10 },
      category: "Collectibles",
      watchers: 42,
    },
    {
      id: 6,
      title: "Limited Edition Sneakers",
      currentBid: 4200,
      bids: 15,
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=800&q=80",
      timeLeft: { hours: 0, minutes: 25, seconds: 30 },
      category: "Footwear",
      watchers: 38,
    },
    {
      id: 7,
      title: "Antique Jewelry Collection",
      currentBid: 6800,
      bids: 22,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      timeLeft: { hours: 0, minutes: 10, seconds: 5 },
      category: "Jewelry",
      watchers: 71,
    },
  ]);

  // Upcoming auctions data
  const [upcomingAuctions, setUpcomingAuctions] = useState([
    {
      id: 8,
      title: "Collector's Art Piece",
      startingBid: 2500,
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      startsIn: { days: 0, hours: 2, minutes: 30 },
      category: "Art",
    },
    {
      id: 9,
      title: "Designer Handbag",
      startingBid: 1800,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      startsIn: { days: 0, hours: 1, minutes: 45 },
      category: "Fashion",
    },
    {
      id: 10,
      title: "Vintage Vinyl Collection",
      startingBid: 950,
      image:
        "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?auto=format&fit=crop&w=800&q=80",
      startsIn: { days: 0, hours: 3, minutes: 15 },
      category: "Music",
    },
    {
      id: 11,
      title: "Rare Whiskey Collection",
      startingBid: 3500,
      image:
        "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=800&q=80",
      startsIn: { days: 0, hours: 4, minutes: 0 },
      category: "Spirits",
    },
  ]);

  const [currentFeatured, setCurrentFeatured] = useState(0);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveAuctions((prev) =>
        prev.map((auction) => {
          const { hours, minutes, seconds } = auction.timeLeft;
          const newSeconds = seconds - 1;
          const newMinutes = newSeconds < 0 ? minutes - 1 : minutes;
          const newHours = newMinutes < 0 ? hours - 1 : hours;

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

  // Auto-slide for featured auctions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredAuctions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredAuctions.length]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredAuctions.length);
  };

  const prevFeatured = () => {
    setCurrentFeatured(
      (prev) => (prev - 1 + featuredAuctions.length) % featuredAuctions.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          className="relative py-3 px-4"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="flex items-center space-x-8 text-white font-bold text-sm sm:text-lg whitespace-nowrap">
            <span className="flex items-center">
              <Zap className="mr-2 text-yellow-300" />
              LIVE AUCTIONS NOW
            </span>
            <span className="flex items-center">
              <Sparkles className="mr-2 text-yellow-300" />
              ULTRA-LOW STARTING BIDS
            </span>
            <span className="flex items-center">
              <TrendingUp className="mr-2 text-yellow-300" />
              ITEMS SELLING FAST
            </span>
            <span className="flex items-center">
              <Gavel className="mr-2 text-yellow-300" />
              PLACE YOUR BID NOW
            </span>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
        {/* Featured Auctions Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-gray-900">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      Featured Auctions
                    </span>
                  </span>
                </motion.h2>
                <p className="text-center text-gray-400 mt-2 max-w-2xl mx-auto">
                  Premium items with exclusive starting prices
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatured}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="bg-gray-800 border-gray-700 overflow-hidden group mx-4 sm:mx-0">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-64 sm:h-80 lg:h-[400px] overflow-hidden lg:mx-4 lg:my-4 lg:rounded-xl">
                        <img
                          src={
                            featuredAuctions[currentFeatured].image ||
                            "/placeholder.svg"
                          }
                          alt={featuredAuctions[currentFeatured].title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                            <Flame className="w-3 h-3 mr-1" />
                            FEATURED
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-gray-900/80 text-white border-gray-700"
                          >
                            {featuredAuctions[currentFeatured].category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center text-white text-sm">
                          <Eye className="w-4 h-4 mr-2" />
                          <span>
                            {featuredAuctions[currentFeatured].watchers}{" "}
                            watching
                          </span>
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className="p-6 flex flex-col justify-center lg:pr-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                          {featuredAuctions[currentFeatured].title}
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {featuredAuctions[currentFeatured].description}
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                          <div className="bg-gray-900/50 rounded-lg p-3 text-center border border-gray-700">
                            <div className="flex items-center justify-center text-amber-400 mb-1">
                              <Timer className="w-4 h-4 mr-1" />
                              <span className="text-xs">Time Left</span>
                            </div>
                            <div className="text-lg sm:text-xl font-mono font-bold text-white">
                              {`${formatTime(
                                featuredAuctions[currentFeatured].timeLeft.hours
                              )}:${formatTime(
                                featuredAuctions[currentFeatured].timeLeft
                                  .minutes
                              )}`}
                            </div>
                          </div>
                          <div className="bg-gray-900/50 rounded-lg p-3 text-center border border-gray-700">
                            <div className="flex items-center justify-center text-blue-400 mb-1">
                              <Users className="w-4 h-4 mr-1" />
                              <span className="text-xs">Bids</span>
                            </div>
                            <div className="text-lg sm:text-xl font-bold text-white">
                              {featuredAuctions[currentFeatured].bids}
                            </div>
                          </div>
                          <div className="bg-gray-900/50 rounded-lg p-3 text-center border border-gray-700">
                            <div className="text-gray-400 mb-1 text-xs">
                              Retail
                            </div>
                            <div className="text-sm line-through text-gray-400">
                              ₹
                              {featuredAuctions[
                                currentFeatured
                              ].retailPrice.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl font-bold text-amber-400">
                              ₹
                              {featuredAuctions[
                                currentFeatured
                              ].currentBid.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-400">
                              Current Bid
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3">
                            <Gavel className="w-4 h-4 mr-2" />
                            Place Bid
                          </Button>
                          <Button
                            variant="outline"
                            className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800 z-10 hidden sm:flex"
              onClick={prevFeatured}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800 z-10 hidden sm:flex"
              onClick={nextFeatured}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {featuredAuctions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatured(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFeatured
                      ? "bg-amber-400 w-4"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Live Auctions Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-6 mx-4 sm:mx-0">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Live Auctions
                </span>
              </h2>
            </div>
            <Button
              variant="ghost"
              className="text-orange-400 hover:text-orange-300 hover:bg-gray-800"
            >
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {liveAuctions.map((auction, index) => (
              <motion.div
                key={auction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-red-500/50 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={auction.image || "/placeholder.svg"}
                        alt={auction.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 text-white border-0 animate-pulse px-2 py-0.5 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-white mr-1"></div>
                          LIVE
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-gray-900/50 hover:bg-gray-900/70 text-white h-8 w-8"
                      >
                        <Heart className="w-3 h-3" />
                      </Button>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white truncate flex-1 text-sm sm:text-base">
                          {auction.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="ml-2 text-xs bg-gray-700"
                        >
                          {auction.category}
                        </Badge>
                      </div>

                      <div className="flex items-center text-xs text-gray-400 mb-3">
                        <Users className="w-3 h-3 mr-1" />
                        <span>{auction.bids} bids</span>
                        <span className="mx-1">•</span>
                        <span>{auction.watchers} watching</span>
                      </div>

                      <div className="mb-3">
                        <div className="text-xl font-bold text-amber-400">
                          ₹{auction.currentBid.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">Current bid</div>
                      </div>

                      <div className="bg-gray-900/50 rounded-lg p-2 mb-4 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-red-400">
                            <Timer className="w-3 h-3 mr-1" />
                            <span>Ends in</span>
                          </div>
                          <div className="font-mono font-bold text-white">
                            {`${formatTime(
                              auction.timeLeft.hours
                            )}:${formatTime(auction.timeLeft.minutes)}`}
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-sm h-9">
                        Place Bid
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Auctions Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-6 mx-4 sm:mx-0">
            <div className="flex items-center">
              <CalendarClock className="text-blue-400 mr-2 w-5 h-5" />
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Upcoming Auctions
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {upcomingAuctions.map((auction, index) => (
              <motion.div
                key={auction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={auction.image || "/placeholder.svg"}
                        alt={auction.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-gray-900/50 hover:bg-gray-900/70 text-white h-8 w-8"
                      >
                        <Bell className="w-3 h-3" />
                      </Button>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white truncate flex-1 text-sm sm:text-base">
                          {auction.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="ml-2 text-xs bg-gray-700"
                        >
                          {auction.category}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <div className="text-lg font-bold text-blue-400">
                          Starting at ₹{auction.startingBid.toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-gray-900/50 rounded-lg p-2 mb-4 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-blue-400">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>Starts in</span>
                          </div>
                          <div className="font-mono font-bold text-white">
                            {`${formatTime(
                              auction.startsIn.hours
                            )}:${formatTime(auction.startsIn.minutes)}`}
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm h-9">
                        Set Reminder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="bg-gray-800 border-gray-700 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>

            <CardContent className="relative p-6 sm:p-8 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Ready to Sell Your Items?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                  Join thousands of sellers making great profits on BidFlare.
                  Our platform offers the best rates and maximum exposure for
                  your valuable items.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-6 py-2 text-sm sm:text-base">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Auction
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-6 py-2 text-sm sm:text-base bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
