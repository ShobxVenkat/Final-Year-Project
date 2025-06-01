import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import AnimatedWrapper from "../Extra/AnimatedWrapper";
import TextSlider from "../Extra/TextSlider";
import CarouselBanner from "../Extra/CarouselBanner";
import CategoryButtons from "../Extra/CategoryButtons";
import ScrollTriggered from "../Extra/ScrollTriggered";
import FeaturedProductsList from "../Extra/FeaturedProductsList";
import Cart from "../Layouts/Header/CartButton";  // Import your Cart component

export default function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateIsMobile() {
      setIsMobile(window.innerWidth <= 768);
    }
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  function handleAddToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  return (
    <Box
      sx={{
        backgroundColor: "#232534",
        minHeight: "100vh",
        py: 4,
      }}
    >
      {/* Animated text slider */}
      <AnimatedWrapper>
        <TextSlider />
      </AnimatedWrapper>

      {/* Product banner carousel */}
      <AnimatedWrapper delay={0.2}>
        <CarouselBanner />
      </AnimatedWrapper>

      {/* Category buttons */}
      <AnimatedWrapper delay={0.4}>
        <CategoryButtons />
      </AnimatedWrapper>

      {/* Scroll animation cards */}
      <AnimatedWrapper delay={0.6}>
        <ScrollTriggered />
      </AnimatedWrapper>

      {/* Feature Products Heading */}
      <AnimatedWrapper delay={0.55}>
        <Box
          sx={{
            mt: 6,
            mb: 2,
            textAlign: "center",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
            fontWeight: 700,
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #f59e0b, #f97316, #f59e0b)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Feature Products
        </Box>
      </AnimatedWrapper>

      {/* Featured products list with onAddToCart */}
      <AnimatedWrapper delay={0.6}>
        <FeaturedProductsList onAddToCart={handleAddToCart} />
      </AnimatedWrapper>

      {/* Cart component */}
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        isMobile={isMobile}
      />
    </Box>
  );
}
