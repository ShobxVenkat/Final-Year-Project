"use client"

import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom" // Add these imports
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Eye, Clock, Users, Gavel, TrendingUp, ArrowLeft, ZoomIn, ImageIcon } from "lucide-react"
import "./LiveBidding.css"

const LiveBidding = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Get product data from navigation state or use default
  const productData = location.state?.product || {
    id: 1,
    title: "Sample Auction Item",
    description: "This is a sample auction item for demonstration purposes.",
    image: "/placeholder.svg?height=500&width=500",
    startingBid: 250,
    currentBid: 485,
    bidIncrement: 25,
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
    seller: "SampleSeller",
    condition: "Excellent",
    category: "Sample Category",
    views: 1247,
    watchers: 89,
  }

  const [product] = useState(productData)
  const [currentBid, setCurrentBid] = useState(product.currentBid)
  const [bidAmount, setBidAmount] = useState(currentBid + product.bidIncrement)
  const [bidHistory, setBidHistory] = useState([
    { id: 1, bidder: "User***45", amount: product.currentBid, time: "2 minutes ago", isWinning: true },
    {
      id: 2,
      bidder: "Collector***89",
      amount: product.currentBid - product.bidIncrement,
      time: "5 minutes ago",
      isWinning: false,
    },
    {
      id: 3,
      bidder: "Buyer***12",
      amount: product.currentBid - product.bidIncrement * 2,
      time: "8 minutes ago",
      isWinning: false,
    },
    {
      id: 4,
      bidder: "Bidder***67",
      amount: product.currentBid - product.bidIncrement * 3,
      time: "12 minutes ago",
      isWinning: false,
    },
  ])

  const [timeLeft, setTimeLeft] = useState("")
  const [isActive, setIsActive] = useState(true)
  const [bidders, setBidders] = useState(product.bids || 24)
  const [watchers, setWatchers] = useState(product.watchers || 89)
  const [userBid, setUserBid] = useState("")
  const [bidError, setBidError] = useState("")
  const [isPlacingBid, setIsPlacingBid] = useState(false)
  const [showBidSuccess, setShowBidSuccess] = useState(false)
  const [isWatching, setIsWatching] = useState(false)

  const bidHistoryRef = useRef(null)

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = product.endTime.getTime() - now

      if (distance < 0) {
        setTimeLeft("AUCTION ENDED")
        setIsActive(false)
        clearInterval(timer)
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [product.endTime])

  // Simulate real-time bid updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8 && isActive) {
        const newBid = currentBid + product.bidIncrement + Math.floor(Math.random() * 50)
        const bidders = ["User***23", "Collector***91", "Auction***45", "Vintage***78"]
        const randomBidder = bidders[Math.floor(Math.random() * bidders.length)]

        setCurrentBid(newBid)
        setBidAmount(newBid + product.bidIncrement)
        setBidHistory((prev) => [
          {
            id: Date.now(),
            bidder: randomBidder,
            amount: newBid,
            time: "Just now",
            isWinning: true,
          },
          ...prev.map((bid) => ({ ...bid, isWinning: false })).slice(0, 9),
        ])

        setBidders((prev) => prev + Math.floor(Math.random() * 2))
      }
    }, 20000)

    return () => clearInterval(interval)
  }, [currentBid, product.bidIncrement, isActive])

  const handleBidSubmit = async (e) => {
    e.preventDefault()
    setBidError("")

    const bidValue = Number.parseFloat(userBid)

    if (!bidValue || bidValue <= currentBid) {
      setBidError(`Bid must be higher than current bid of ₹${currentBid.toLocaleString()}`)
      return
    }

    if (bidValue < currentBid + product.bidIncrement) {
      setBidError(`Minimum bid increment is ₹${product.bidIncrement}`)
      return
    }

    setIsPlacingBid(true)

    // Simulate API call
    setTimeout(() => {
      setCurrentBid(bidValue)
      setBidAmount(bidValue + product.bidIncrement)
      setBidHistory((prev) => [
        {
          id: Date.now(),
          bidder: "You",
          amount: bidValue,
          time: "Just now",
          isWinning: true,
        },
        ...prev.map((bid) => ({ ...bid, isWinning: false })).slice(0, 9),
      ])

      setUserBid("")
      setIsPlacingBid(false)
      setShowBidSuccess(true)
      setBidders((prev) => prev + 1)

      setTimeout(() => setShowBidSuccess(false), 3000)
    }, 1500)
  }

  const handleQuickBid = (amount) => {
    setUserBid(amount.toString())
  }

  const toggleWatching = () => {
    setIsWatching(!isWatching)
    setWatchers((prev) => (isWatching ? prev - 1 : prev + 1))
  }

  const handleBackClick = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <div className="live-bidding-container">
      {/* Animated Background */}
      <div className="animated-bg">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="bidding-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="back-btn" onClick={handleBackClick}>
          <ArrowLeft size={20} />
          Back to Auctions
        </button>

        <div className="auction-status">
          <motion.div
            className={`status-indicator ${isActive ? "live" : "ended"}`}
            animate={{ scale: isActive ? [1, 1.05, 1] : 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {isActive ? "🔴 LIVE AUCTION" : "AUCTION ENDED"}
          </motion.div>

          <div className="auction-stats">
            <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
              <Users size={16} />
              <span>{bidders} Bidders</span>
            </motion.div>
            <motion.div className="stat-item" whileHover={{ scale: 1.05 }}>
              <Eye size={16} />
              <span>{watchers} Watching</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="bidding-content">
        {/* Product Section */}
        <motion.div
          className="product-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="product-image-container">
            <motion.div className="product-image" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <img src={product.image || "/placeholder.svg"} alt={product.title} />
              
            </motion.div>

            <motion.button
              className={`watch-btn ${isWatching ? "watching" : ""}`}
              onClick={toggleWatching}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} fill={isWatching ? "#ff6b35" : "none"} />
              {isWatching ? "Watching" : "Watch Item"}
            </motion.button>
          </div>

          <motion.div
            className="product-details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1>{product.title}</h1>
            <p className="product-description">{product.description}</p>

            <div className="product-info-grid">
              <div className="info-card">
                <span className="info-label">Seller</span>
                <span className="info-value">{product.seller}</span>
              </div>
              <div className="info-card">
                <span className="info-label">Condition</span>
                <span className="info-value">{product.condition}</span>
              </div>
              <div className="info-card">
                <span className="info-label">Category</span>
                <span className="info-value">{product.category}</span>
              </div>
              <div className="info-card">
                <span className="info-label">Starting Bid</span>
                <span className="info-value">₹{product.startingBid.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bidding Section */}
        <motion.div
          className="bidding-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Current Bid Card */}
          <motion.div className="current-bid-card" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <div className="current-bid-header">
              <h2>Current Bid</h2>
              <TrendingUp className="trend-icon" />
            </div>

            <motion.div
              className="bid-amount"
              key={currentBid}
              initial={{ scale: 1.2, color: "#ff6b35" }}
              animate={{ scale: 1, color: "#10b981" }}
              transition={{ duration: 0.5 }}
            >
              ₹{currentBid.toLocaleString()}
            </motion.div>

            <div className="bid-info">
              <span>Next minimum: ₹{bidAmount.toLocaleString()}</span>
            </div>

            <div className="auction-timer">
              <div className="timer-header">
                <Clock size={20} />
                <span>Time Remaining</span>
              </div>
              <motion.div
                className={`timer ${!isActive ? "ended" : ""}`}
                animate={{
                  color: isActive && timeLeft.includes("0h 0m") ? "#ef4444" : "#ffffff",
                }}
              >
                {timeLeft}
              </motion.div>
            </div>
          </motion.div>

          {/* Bidding Form */}
          {isActive && (
            <motion.div
              className="bidding-form-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="form-header">
                <Gavel size={24} />
                <h3>Place Your Bid</h3>
              </div>

              <div className="quick-bid-section">
                <p>Quick Bid Options</p>
                <div className="quick-bid-buttons">
                  {[bidAmount, bidAmount + product.bidIncrement, bidAmount + product.bidIncrement * 2].map(
                    (amount, index) => (
                      <motion.button
                        key={amount}
                        onClick={() => handleQuickBid(amount)}
                        className="quick-bid-btn"
                        whileHover={{ scale: 1.05, backgroundColor: "#ff6b35" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        ₹{amount.toLocaleString()}
                      </motion.button>
                    ),
                  )}
                </div>
              </div>

              <form onSubmit={handleBidSubmit} className="custom-bid-form">
                <div className="bid-input-container">
                  <span className="currency-symbol">₹</span>
                  <input
                    type="number"
                    value={userBid}
                    onChange={(e) => setUserBid(e.target.value)}
                    placeholder={bidAmount.toString()}
                    min={bidAmount}
                    step={product.bidIncrement}
                    className="bid-input"
                  />
                </div>

                <AnimatePresence>
                  {bidError && (
                    <motion.div
                      className="bid-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {bidError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  className="place-bid-btn"
                  disabled={isPlacingBid}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isPlacingBid ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      ⏳
                    </motion.div>
                  ) : (
                    "Place Bid"
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}

          {/* Bid History */}
          <motion.div
            className="bid-history-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Bid History</h3>
            <div className="bid-history" ref={bidHistoryRef}>
              <AnimatePresence>
                {bidHistory.map((bid, index) => (
                  <motion.div
                    key={bid.id}
                    className={`bid-item ${bid.bidder === "You" ? "your-bid" : ""} ${bid.isWinning ? "winning-bid" : ""}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    layout
                  >
                    <div className="bid-details">
                      <span className="bidder">{bid.bidder}</span>
                      <span className="bid-time">{bid.time}</span>
                    </div>
                    <div className="bid-amount-small">
                      ₹{bid.amount.toLocaleString()}
                      {bid.isWinning && <span className="winning-badge">Winning</span>}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showBidSuccess && (
          <motion.div
            className="success-toast"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            🎉 Bid placed successfully! You're now the highest bidder.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LiveBidding
