import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@mui/material";
import { FiClock, FiUsers, FiArrowRight, FiPlus, FiBell } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Raybun Sunglasses",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1732139637065-1088495050db?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stylish and durable Raybun sunglasses offering 100% UV protection and glare reduction. Perfect for everyday wear and outdoor adventures.",
  },
  {
    id: 2,
    name: "Canon DSLR",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1625545013865-80da35181abf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capture stunning photos and videos with the Canon DSLR featuring high-resolution sensor and versatile shooting modes for beginners and pros alike.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=3113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "High-precision ergonomic gaming mouse with customizable DPI and RGB lighting. Designed for comfort during long gaming sessions.",
  },
  {
    id: 4,
    name: "Flower Pots",
    price: "₹599",
    image:
      "https://images.unsplash.com/photo-1585445490582-9872899757b7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Elegant ceramic flower pots perfect for indoor plants. Adds a touch of nature and style to your living space.",
  },
  {
    id: 5,
    name: "Laughing Buddha mini",
    price: "₹599",
    image:
      "https://images.unsplash.com/photo-1622354688049-e1a21bcb88bc?q=80&w=3150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Miniature Laughing Buddha statue made from resin, symbolizes happiness, wealth, and prosperity. Great for home or office decor.",
  },
];




export default function ScrollTriggered() {
  return (
    <div style={container}>
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} i={i} />
      ))}
    </div>
  );
}


function ProductCard({ product, i }) {
    const [isHovered, setIsHovered] = useState(false);
    const [btnHovered, setBtnHovered] = useState(false);
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(false);
    const ref = React.useRef(null);
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  
    // For desktop: hover controls animation; for mobile: scroll (intersection observer) controls animation
    useEffect(() => {
      if (!isMobile) {
        // Desktop: animate on hover
        controls.start(isHovered ? "onscreen" : "offscreen");
        return;
      }
  
      // Mobile: Use Intersection Observer to control animation on scroll
      const element = ref.current;
      if (!element) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start("onscreen");
          } else {
            controls.start("offscreen");
          }
        },
        {
          threshold: 0.5, // 50% of card visible triggers animation
        }
      );
  
      observer.observe(element);
  
      return () => {
        observer.disconnect();
      };
    }, [isHovered, isMobile, controls]);

  // Button style with gradient + hover effect
  const buttonStyle = {
    width: "100%",
    padding: "10px 0",
    borderRadius: 8,
    border: "none",
    background: btnHovered
      ? "linear-gradient(to right, #f97316, #ea580c)"
      : "linear-gradient(to right, #f59e0b, #f97316)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.75rem",
    textTransform: "none",
    boxShadow: btnHovered
      ? "0 4px 6px rgba(251, 146, 60, 0.3)"
      : "0 2px 4px rgba(251, 146, 60, 0.2)",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
  };

  
  return (
    
    <motion.div
      ref={ref}
      className="product-card"
      style={cardContainer}
      initial="offscreen"
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={splash} />
      <motion.div style={card} variants={cardVariants}>
        <img src={product.image} alt={product.name} style={imgStyle} />
        <div style={infoSection}>
          <div style={namePrice}>
            <span style={name}>{product.name}</span>
            <span style={price}>{product.price}</span>
          </div>
  
          {(isMobile ? true : isHovered) && (
            <div style={details}>
              <p style={desc}>{product.description}</p>
              <button
                style={buttonStyle}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
              >
                View All
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
  
}

// === Animation Variants ===
const cardVariants = {
  offscreen: {
    y: 300,
    rotate: 0,
    scale: 0.9,
  },
  onscreen: {
    y: 30,
    rotate: -10,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

// === Styles ===
const container = {
  margin: "0px auto",
  
  maxWidth: 600,
  paddingBottom: 100,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 130,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(300deg, #ff512f, #f09819)",
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
  zIndex: 0,
  transform: "rotate(-2deg) skewY(2deg)",
  filter: "drop-shadow(0 10px 20px rgba(0,0,0.,0.1))",
};

const card = {
  width: 300,
  height: 500,
  borderRadius: 20,
  background: "#fff",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 12px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

const imgStyle = {
  width: "100%",
  height: 170,
  objectFit: "cover",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

const infoSection = {
  padding: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
};

const namePrice = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: 16,
};

const name = {
  flex: 1,
};

const price = {
  marginLeft: 8,
  color: "#28a745",
};

const details = {
  marginTop: 16,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const desc = {
  fontSize: 14,
  marginBottom: 16,
  color: "#444",
};
