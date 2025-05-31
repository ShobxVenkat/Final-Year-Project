import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const categories = [
    {
      id: 1,
      name: "Fashion & Apparel",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=3001&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Computers",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1675582090584-4ae9400f7326?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Collectibles",
      image:
        "https://images.unsplash.com/photo-1585892669423-f430d1239c6b?q=80&w=3141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
// CSS for pulse glow animation
const pulseGlowStyle = {
  animation: "pulseGlow 1.5s infinite",
};

export default function CategoryButtons() {
  return (
    <>
      <style>
        {`
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 5px #0ff; }
            50% { box-shadow: 0 0 20px #0ff; }
            100% { box-shadow: 0 0 5px #0ff; }
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          padding: 24,
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.1 }}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.25}
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
              }}
              glareColor="#0ff"
            >
              <div
                onMouseEnter={(e) => {
                  e.currentTarget.style.animation = "pulseGlow 1.5s infinite";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = "";
                }}
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textAlign: "center",
                  textShadow: "0 0 6px rgba(0,0,0,0.9)",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <span style={{ position: "relative", zIndex: 2, padding: "0 10px" }}>
                  {cat.name}
                </span>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
}
