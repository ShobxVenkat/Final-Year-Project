"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Clock,
  Users,
  Heart,
  ChevronRight,
  ChevronLeft,
  Eye,
  Star,
  Gavel,
  Trophy,
  Activity,
  Share2,
  Bookmark,
  Shield,
  Truck,
  RotateCcw,
  CheckCircle,
  X,
  ArrowLeft,
} from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

export default function LiveBidding() {
  const navigate = useNavigate()
  const { id } = useParams()

  // Sample product data - in real app, fetch based on ID
  const [product] = useState({
    id: 1,
    title: "PlayStation 5 Digital Edition",
    description:
      "Experience next-gen gaming with the PlayStation 5 Digital Edition. Brand new, unopened console with 2-year warranty. This premium gaming console features lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and a new generation of incredible PlayStation games.",
    currentBid: 5990,
    bids: 28,
    retailPrice: 7990,
    startingBid: 3500,
    images: [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1470&q=80",
    ],
    timeLeft: { hours: 1, minutes: 30, seconds: 45 },
    category: "Electronics",
    watchers: 142,
    condition: "Brand New",
    seller: {
      name: "TechStore Pro",
      rating: 4.8,
      reviews: 1250,
      verified: true,
    },
    specifications: {
      Storage: "825GB SSD",
      Resolution: "Up to 4K",
      "Frame Rate": "Up to 120fps",
      Warranty: "2 Years",
      Condition: "Brand New, Sealed",
    },
    shipping: {
      cost: "Free",
      time: "2-3 Business Days",
      location: "Mumbai, India",
    },
  })

  // Featured auctions for slider
  const [featuredAuctions] = useState([
    {
      id: 2,
      title: "Air Jordan 1 Retro High OG 'Chicago'",
      currentBid: 12000,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=800&q=80",
      timeLeft: { hours: 0, minutes: 45, seconds: 20 },
    },
    {
      id: 3,
      title: "Samsung Galaxy S23 Ultra 5G",
      currentBid: 15000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      timeLeft: { hours: 2, minutes: 15, seconds: 10 },
    },
    {
      id: 4,
      title: "Vintage Rolex Submariner",
      currentBid: 125000,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      timeLeft: { hours: 1, minutes: 30, seconds: 45 },
    },
  ])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentFeatured, setCurrentFeatured] = useState(0)
  const [bidAmount, setBidAmount] = useState("")
  const [showBidSuccess, setShowBidSuccess] = useState(false)
  const [isWatching, setIsWatching] = useState(false)
  const [showUpcomingAlert, setShowUpcomingAlert] = useState(false)

  // Bid history
  const [bidHistory] = useState([
    { id: 1, bidder: "User***123", amount: 5990, time: "2 minutes ago", isWinning: true },
    { id: 2, bidder: "Bid***456", amount: 5800, time: "5 minutes ago", isWinning: false },
    { id: 3, bidder: "Pro***789", amount: 5600, time: "8 minutes ago", isWinning: false },
    { id: 4, bidder: "Gam***012", amount: 5400, time: "12 minutes ago", isWinning: false },
    { id: 5, bidder: "Tech***345", amount: 5200, time: "15 minutes ago", isWinning: false },
  ])

  // Upcoming auction alert
  const [upcomingAuction] = useState({
    title: "Limited Edition MacBook Pro M3",
    startTime: { hours: 0, minutes: 15, seconds: 30 },
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  })

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      // Update main product timer
      // Update upcoming auction timer
      // In real app, this would update the actual state
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Auto-slide for featured auctions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredAuctions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [featuredAuctions.length])

  // Show upcoming auction alert
  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setShowUpcomingAlert(true)
    }, 3000)
    return () => clearTimeout(alertTimer)
  }, [])

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString()
  }

  const handleBidSubmit = (e) => {
    e.preventDefault()
    if (bidAmount && Number.parseFloat(bidAmount) > product.currentBid) {
      setShowBidSuccess(true)
      setBidAmount("")
      setTimeout(() => setShowBidSuccess(false), 3000)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredAuctions.length)
  }

  const prevFeatured = () => {
    setCurrentFeatured((prev) => (prev - 1 + featuredAuctions.length) % featuredAuctions.length)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Back Button */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button onClick={() => navigate("/auctions")} variant="ghost" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Auctions
          </Button>
        </div>
      </div>

      {/* Upcoming Auction Alert */}
      <AnimatePresence>
        {showUpcomingAlert && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <Alert className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl">
              <AlertDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={upcomingAuction.image || "/placeholder.svg"}
                        alt={upcomingAuction.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{upcomingAuction.title}</p>
                      <p className="text-blue-100 text-xs">
                        Starts in {formatTime(upcomingAuction.startTime.minutes)}:
                        {formatTime(upcomingAuction.startTime.seconds)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20 h-8 w-8"
                    onClick={() => setShowUpcomingAlert(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Auctions Slider */}
      <div className="bg-gray-800 border-b border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-amber-400">Other Live Auctions</h3>
            <Button
              variant="ghost"
              className="text-amber-400 hover:text-amber-300"
              onClick={() => navigate("/auctions")}
            >
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatured}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-4 bg-gray-900/50 rounded-lg p-4"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={featuredAuctions[currentFeatured].image || "/placeholder.svg"}
                    alt={featuredAuctions[currentFeatured].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-sm">{featuredAuctions[currentFeatured].title}</h4>
                  <p className="text-amber-400 font-bold">
                    ₹{featuredAuctions[currentFeatured].currentBid.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-red-400 text-sm font-mono">
                    {formatTime(featuredAuctions[currentFeatured].timeLeft.hours)}:
                    {formatTime(featuredAuctions[currentFeatured].timeLeft.minutes)}
                  </p>
                  <p className="text-gray-400 text-xs">Time left</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white h-8 w-8"
              onClick={prevFeatured}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white h-8 w-8"
              onClick={nextFeatured}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Product Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Images */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.images[currentImageIndex] || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Image Navigation */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>

                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-red-500 text-white border-0 animate-pulse">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mr-1"></div>
                      LIVE
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-900/80 text-white">
                      {product.category}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-gray-900/80 hover:bg-gray-800 text-white h-10 w-10"
                      onClick={() => setIsWatching(!isWatching)}
                    >
                      <Heart className={`w-4 h-4 ${isWatching ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-gray-900/80 hover:bg-gray-800 text-white h-10 w-10"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Image Thumbnails */}
                <div className="p-4 flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? "border-amber-400" : "border-gray-600 hover:border-gray-500"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Product Details */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{product.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {product.watchers} watching
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {product.bids} bids
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-green-600 text-white">{product.condition}</Badge>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">{key}</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seller Info */}
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Seller Information</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                          {product.seller.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <span className="text-white font-medium">{product.seller.name}</span>
                          {product.seller.verified && <CheckCircle className="w-4 h-4 text-green-500 ml-1" />}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-yellow-400 mr-1" />
                          <span>
                            {product.seller.rating} ({product.seller.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mt-4 bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Shipping & Returns</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-400">
                        <Truck className="w-4 h-4 mr-2" />
                        Shipping Cost
                      </span>
                      <span className="text-green-400 font-medium">{product.shipping.cost}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        Delivery Time
                      </span>
                      <span className="text-white">{product.shipping.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-400">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Returns
                      </span>
                      <span className="text-white">7 days return policy</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Bidding Section */}
          <div className="space-y-6">
            {/* Bidding Card */}
            <Card className="bg-gray-800 border-gray-700 sticky top-4">
              <CardContent className="p-6">
                {/* Timer */}
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-4 mb-4">
                    <div className="text-white text-sm mb-1">Auction Ends In</div>
                    <div className="text-2xl font-mono font-bold text-white">
                      {formatTime(product.timeLeft.hours)}:{formatTime(product.timeLeft.minutes)}:
                      {formatTime(product.timeLeft.seconds)}
                    </div>
                  </div>
                </div>

                {/* Current Bid */}
                <div className="text-center mb-6">
                  <div className="text-gray-400 text-sm mb-1">Current Highest Bid</div>
                  <div className="text-3xl font-bold text-amber-400 mb-2">₹{product.currentBid.toLocaleString()}</div>
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <span className="line-through mr-2">₹{product.retailPrice.toLocaleString()}</span>
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      {Math.round(((product.retailPrice - product.currentBid) / product.retailPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>

                {/* Bid Form */}
                <form onSubmit={handleBidSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Bid Amount</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                      <Input
                        type="number"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        placeholder={`Min: ${(product.currentBid + 100).toLocaleString()}`}
                        min={product.currentBid + 100}
                        className="pl-8"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      Minimum bid: ₹{(product.currentBid + 100).toLocaleString()}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3"
                    disabled={!bidAmount || Number.parseFloat(bidAmount) <= product.currentBid}
                  >
                    <Gavel className="w-4 h-4 mr-2" />
                    Place Bid
                  </Button>
                </form>

                {/* Quick Bid Buttons */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[100, 500, 1000].map((increment) => (
                    <Button
                      key={increment}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                      onClick={() => setBidAmount((product.currentBid + increment).toString())}
                    >
                      +₹{increment}
                    </Button>
                  ))}
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {showBidSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-4 p-3 bg-green-600 rounded-lg text-white text-center text-sm"
                    >
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Bid placed successfully!
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Watch Button */}
                <Button
                  variant="outline"
                  className="w-full mt-4 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  onClick={() => setIsWatching(!isWatching)}
                >
                  {isWatching ? (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      Watching
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4 mr-2" />
                      Watch Item
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Bid History */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-amber-400" />
                  Bid History
                </h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {bidHistory.map((bid) => (
                    <div
                      key={bid.id}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        bid.isWinning ? "bg-amber-500/20 border border-amber-500/30" : "bg-gray-900/50"
                      }`}
                    >
                      <div>
                        <div className="flex items-center">
                          <span className="text-white font-medium">{bid.bidder}</span>
                          {bid.isWinning && <Trophy className="w-4 h-4 text-amber-400 ml-2" />}
                        </div>
                        <div className="text-xs text-gray-400">{bid.time}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${bid.isWinning ? "text-amber-400" : "text-white"}`}>
                          ₹{bid.amount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trust & Safety */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Trust & Safety
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Verified seller
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Secure payment processing
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Buyer protection guarantee
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Authentic item verification
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
