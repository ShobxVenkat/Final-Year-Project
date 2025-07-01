import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  ArrowRight,
  Bell,
  Heart,
  Eye,
  Zap,
  Gavel,
  Flame,
  Timer,
  Search,
  TrendingUp,
  Star,
  Award,
  Sparkles,
  Target,
  Activity,
} from "lucide-react"

export default function LiveAuctions() {
  // Live auctions data
  const [liveAuctions, setLiveAuctions] = useState([
    {
      id: 1,
      title: "Vintage Rolex Submariner 1965",
      description: "Rare vintage Rolex in excellent condition with original box and papers",
      currentBid: 12500,
      bids: 24,
      retailPrice: 18000,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
      category: "Luxury Watches",
      watchers: 56,
      isHot: true,
      bidIncrement: 250,
    },
    {
      id: 2,
      title: "Signed Michael Jordan Rookie Card",
      description: "PSA 10 graded 1986 Fleer Michael Jordan rookie card with certificate",
      currentBid: 7800,
      bids: 18,
      retailPrice: 12000,
      image: "https://images.unsplash.com/photo-1579952363872-2898cd6f7c38",
      timeLeft: { hours: 0, minutes: 15, seconds: 10 },
      category: "Sports Memorabilia",
      watchers: 42,
      isHot: true,
      bidIncrement: 200,
    },
    {
      id: 3,
      title: "Air Jordan 1 Retro High OG 'Chicago'",
      description: "2022 re-release, deadstock condition with original box",
      currentBid: 4200,
      bids: 15,
      retailPrice: 6000,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      timeLeft: { hours: 0, minutes: 25, seconds: 30 },
      category: "Sneakers",
      watchers: 38,
      isHot: false,
      bidIncrement: 100,
    },
    {
      id: 4,
      title: "Antique Diamond Necklace",
      description: "Edwardian era diamond necklace, 18k white gold, 2.5ct total weight",
      currentBid: 6800,
      bids: 22,
      retailPrice: 9500,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      timeLeft: { hours: 0, minutes: 10, seconds: 5 },
      category: "Fine Jewelry",
      watchers: 71,
      isHot: true,
      bidIncrement: 150,
    },
    {
      id: 5,
      title: "Vincent van Gogh Limited Print",
      description: "Museum-quality limited edition print, numbered 12/250",
      currentBid: 3200,
      bids: 8,
      retailPrice: 5000,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      timeLeft: { hours: 2, minutes: 45, seconds: 20 },
      category: "Art",
      watchers: 34,
      isHot: false,
      bidIncrement: 100,
    },
    {
      id: 6,
      title: "Hermès Birkin 35cm Gold",
      description: "Authentic Hermès Birkin bag in gold togo leather with palladium hardware",
      currentBid: 9800,
      bids: 31,
      retailPrice: 15000,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      timeLeft: { hours: 1, minutes: 5, seconds: 15 },
      category: "Luxury Handbags",
      watchers: 89,
      isHot: true,
      bidIncrement: 200,
    },
  ])

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveAuctions((prev) =>
        prev.map((auction) => {
          const { hours, minutes, seconds } = auction.timeLeft
          const newSeconds = seconds - 1
          const newMinutes = newSeconds < 0 ? minutes - 1 : minutes
          const newHours = newMinutes < 0 ? hours - 1 : hours

          return {
            ...auction,
            timeLeft: {
              hours: newHours < 0 ? 0 : newHours,
              minutes: newMinutes < 0 ? 59 : newMinutes,
              seconds: newSeconds < 0 ? 59 : newSeconds,
            },
          }
        }),
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString()
  }

  const getTimeLeftColor = (timeLeft) => {
    const totalMinutes = timeLeft.hours * 60 + timeLeft.minutes
    if (totalMinutes < 30) return "text-red-400"
    if (totalMinutes < 60) return "text-yellow-400"
    return "text-green-400"
  }

  const categories = [
    "All",
    "Luxury Watches",
    "Sports Memorabilia",
    "Sneakers",
    "Fine Jewelry",
    "Art",
    "Luxury Handbags",
  ]

  const filteredAuctions = liveAuctions.filter((auction) => {
    const matchesCategory = selectedCategory === "All" || auction.category === selectedCategory
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-900">



      <div className="relative container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gray-800 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            {/* <Sparkles className="w-5 h-5 text-yellow-400" /> */}
            <span className="text-purple-200 font-medium">Live Auction House</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="relative">
              
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                LIVE AUCTION
              </span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover exclusive items and place your bids in real-time. Don't miss out on these incredible deals!
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search luxury items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0"
                      : "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Activity, label: "Active Auctions", value: "24", color: "text-green-400" },
            { icon: Users, label: "Active Bidders", value: "1.2K", color: "text-blue-400" },
            { icon: Award, label: "Items Sold Today", value: "156", color: "text-yellow-400" },
            { icon: Target, label: "Success Rate", value: "98%", color: "text-purple-400" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Live Auctions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredAuctions.map((auction, index) => (
              <motion.div
                key={auction.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col relative">
                  {/* Hot Badge */}
                  {auction.isHot && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 animate-pulse">
                        <Flame className="w-3 h-3 mr-1" />
                        HOT
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Auction Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={auction.image || "/placeholder.svg"}
                        alt={auction.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Live Indicator */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-500/90 backdrop-blur-sm text-white border-0">
                            <div className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse" />
                            LIVE
                          </Badge>
                        </div>
                      </div>

                      {/* Watchers */}
                      <div className="absolute bottom-4 right-4 z-10 flex items-center text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Eye className="w-4 h-4 mr-1" />
                        {auction.watchers}
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <Badge className="bg-purple-500/90 backdrop-blur-sm text-white border-0">
                          {auction.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Auction Details */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-xl mb-3 text-white line-clamp-2 group-hover:text-purple-300 transition-colors">
                        {auction.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{auction.description}</p>

                      {/* Bid Info */}
                      <div className="mt-auto">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                              ₹{auction.currentBid.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-400">Current Bid</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">{auction.bids} bids</div>
                            <div className="text-xs text-gray-400 line-through">
                              ₹{auction.retailPrice.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        {/* Time Left */}
                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center text-gray-300">
                              <Timer className="w-4 h-4 mr-2" />
                              <span className="text-sm">Time Left</span>
                            </div>
                            <div className={`font-mono font-bold text-lg ${getTimeLeftColor(auction.timeLeft)}`}>
                              {`${formatTime(auction.timeLeft.hours)}:${formatTime(auction.timeLeft.minutes)}:${formatTime(auction.timeLeft.seconds)}`}
                            </div>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                              style={{
                                width: `${Math.max(10, (auction.timeLeft.hours * 60 + auction.timeLeft.minutes) / 3)}%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                            <Gavel className="w-4 h-4 mr-2" />
                            Bid ₹{(auction.currentBid + auction.bidIncrement).toLocaleString()}
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm py-3 px-3 bg-transparent"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}