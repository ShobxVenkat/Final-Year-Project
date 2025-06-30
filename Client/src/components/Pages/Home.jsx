import { Button } from "@mui/material";
import { motion } from "framer-motion";
import monitorImg from "../../assets/img.png";
import { useEffect, useState } from "react";




const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 12,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-[calc(100vh-64px)] bg-[#0E0F1B] text-white overflow-hidden flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-12 left-8 w-10 h-10 bg-orange-400 rounded-full blur-md opacity-40 animate-pulse" />
        <div className="absolute top-20 right-24 w-6 h-6 bg-orange-300 rounded-full blur-sm opacity-50 animate-pulse" />
        <div className="absolute bottom-16 left-[30%] w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-40 animate-pulse" />
        <div className="absolute top-[50%] right-[20%] w-16 h-16 bg-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />

        <div className="hidden md:block">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-300 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        </div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-6 flex-grow flex flex-col md:flex-row items-center justify-around"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Left content */}
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0 md:ml-15 text-center md:text-left mt-8"
          variants={item}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div variants={item}>
            <h2 className="text-md md:text-xl font-medium text-orange-400 mb-2">
              Premium Auction Platform
            </h2>
          </motion.div>

          <motion.div variants={item}>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Discover & Bid on{" "}
              <span className="text-orange-400">Exclusive</span> Items
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-gray-100 text-sm md:text-lg max-w-md md:max-w-lg mb-6 md:mb-8 mx-auto md:mx-0">
              Experience the thrill of bidding and the ease of shopping — all in
              one place. Discover unique deals, rare finds, and unbeatable
              prices in real-time auctions.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start sm:justify-center items-center"
            variants={item}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fb923c",
                "&:hover": { backgroundColor: "#f97316" },
                paddingX: 3,
                paddingY: 1.5,
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
                width: { xs: "50%", sm: "auto" },
              }}
            >
              Explore Auctions
            </Button>
            <Button
  variant="outlined"
  sx={{
    background: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.75rem 2rem',
    borderRadius: '2rem',
    textTransform: 'none',
    fontSize: '1 rem',
    border: '1px solid white',
    transition: 'all 0.3s ',
    '&:hover': {
      background: 'linear-gradient(to bottom, #ff416c, #ff4b2b)',
      color: 'white',
      
      border: '1px solid transparent',
    },
  }}
>
  How it works
</Button>

          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          variants={item}
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
        >
          {/* Show image on md+ screens */}
          <div className="hidden md:block md:w-4/9 sm:4/10 max-w-xs sm:max-w-md md:max-w-lg md:mr-20">
            <motion.img
              src={monitorImg}
              alt="Auction Platform on Monitor"
              className="w-full h-auto object-contain z-20 relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Show animated bid box on small screens only */}
          <div className="block md:hidden">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-3xl bg-gray-800/70 border border-gray-700/50 backdrop-blur-sm shadow-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center ">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    ₹1,245
                  </div>
                  <div className="text-gray-400 text-sm mb-1">Current Bid</div>
                  <div className="text-lg font-medium mb-4">
                    Vintage Luxury Watch
                  </div>
                  <div className="text-green-400 text-sm font-medium">
                    {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}{" "}
                    remaining
                  </div>
                </motion.div>

                {/* Bubbles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.random() * 40 - 20, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                    className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                    style={{
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-500/10 rounded-lg pointer-events-none"
      />




      
    </div>



  );
};

export default Home;
