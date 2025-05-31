import React from "react";
import { Box } from "@mui/material";

import AnimatedWrapper from "../Extra/AnimatedWrapper";
import TextSlider from "../Extra/TextSlider";
import CarouselBanner from "../Extra/CarouselBanner";
import CategoryButtons from "../Extra/CategoryButtons";
import ScrollTriggered from "../Extra/ScrollTriggered";
import FeaturedProductsList from "../Extra/FeaturedProductsList";


export default function Shop() {
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
      mt: 6, // ↓ was 6
      mb: 2, // ↓ was 2
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
<AnimatedWrapper delay={0.6}>
  <FeaturedProductsList />
</AnimatedWrapper>
    </Box>
    
  );
}
