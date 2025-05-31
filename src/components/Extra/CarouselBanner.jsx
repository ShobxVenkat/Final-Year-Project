"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";

const bannerProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1610041321327-b794c052db27?q=80&w=2940&auto=format&fit=crop",
    description: "Noise cancelling, wireless comfort for daily use.",
  },
  {
    id: 2,
    title: "Smartwatch Series 6",
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2900&auto=format&fit=crop",
    description: "Fitness tracking, calls, notifications on your wrist.",
  },
  {
    id: 3,
    title: "Gaming Keyboard",
    price: 5400,
    image:
      "https://images.unsplash.com/photo-1629360517815-4bc68a3ead00?q=80&w=2940&auto=format&fit=crop",
    description: "RGB mechanical keyboard for hardcore gamers.",
  },
];

export default function AutoScrollBanner() {
  const theme = useTheme();

  // Media query to detect if screen width is less than 600px (mobile)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Controls for animation
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // Animate leftwards by 50%
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  // Duplicate products for seamless loop
  const duplicatedItems = [...bannerProducts, ...bannerProducts];

  // Responsive card size:
  const cardWidth = isMobile ? 200 : 300;  // Smaller width on mobile
  const cardHeight = isMobile ? 220 : 320; // Smaller height on mobile

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100vw",
        backgroundColor: "#121212",
        py: isMobile ? 3 : 6, // less vertical padding on mobile
      }}
    >
      <motion.div
        animate={controls}
        style={{
          display: "flex",
          width: `${duplicatedItems.length * (cardWidth + 20)}px`, // total width based on card size + gap
          gap: "20px",
        }}
      >
        {duplicatedItems.map((product, i) => (
          <Box
            key={`${product.id}-${i}`}
            sx={{
              flex: `0 0 ${cardWidth}px`,
              borderRadius: 2,
              overflow: "hidden",
              backgroundImage: `url(${product.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
              height: `${cardHeight}px`,
              display: "flex",
              alignItems: "flex-end",
              padding: "20px",
              color: "white",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: 2,
                p: 2,
                width: "100%",
              }}
            >
              <Typography variant={isMobile ? "subtitle1" : "h6"}>
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "grey.300", fontSize: isMobile ? 11 : 14 }}
              >
                {product.description}
              </Typography>
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                ₹{product.price.toLocaleString()}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  mt: 1,
                  textTransform: "none",
                  background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                  borderRadius: 2,
                  fontWeight: "bold",
                  fontSize: isMobile ? "0.7rem" : "0.875rem",
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
