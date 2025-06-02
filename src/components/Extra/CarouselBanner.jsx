"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Box, Typography, Button, useTheme, useMediaQuery, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import dummyProducts from "../Extra/DummyProducts";

export default function AutoScrollBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const controls = useAnimation();
  const navigate = useNavigate();

  const x = useMotionValue(0);

  const cardWidth = isMobile ? 200 : 300;
  const cardGap = 20;
  const cardHeight = isMobile ? 220 : 320;

  const duplicatedItems = [...dummyProducts, ...dummyProducts];
  const totalWidth = duplicatedItems.length * (cardWidth + cardGap);

  const scrollStep = cardWidth + cardGap;

  const resumeTimeout = useRef(null);
  const isHovered = useRef(false);

  // Smooth infinite scroll
  const startAutoScroll = (fromX = 0) => {
    controls.start({
      x: [-fromX, -(totalWidth / 2 + fromX)],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 1000,  // adjust speed here
          ease: "linear",
        },
      },
    });
  };

  const stopAutoScroll = () => {
    controls.stop();
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      controls.stop();
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, [controls, totalWidth]);

  // Arrow click handler: moves scroll and pauses animation temporarily
  const handleScroll = (direction) => {
    stopAutoScroll();

    const currentX = x.get();

    let newX = direction === "left" ? currentX + scrollStep : currentX - scrollStep;
    if (newX > 0) newX = 0;
    if (newX < -totalWidth / 2) newX = -totalWidth / 2;

    x.set(newX);

    resumeTimeout.current = setTimeout(() => {
      startAutoScroll(-newX);
    }, 5000);
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    stopAutoScroll();
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    resumeTimeout.current = setTimeout(() => {
      if (!isHovered.current) {
        startAutoScroll(-x.get());
      }
    }, 3000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        backgroundColor: "#121212",
        py: isMobile ? 3 : 6,
      }}
    >
      {/* Left Arrow */}
      <IconButton
        onClick={() => handleScroll("left")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
          zIndex: 10,
        }}
        aria-label="Scroll Left"
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={() => handleScroll("right")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
          zIndex: 10,
        }}
        aria-label="Scroll Right"
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <motion.div
        style={{
          display: "flex",
          width: totalWidth,
          gap: `${cardGap}px`,
          x: x,
        }}
        animate={controls}
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
              cursor: "pointer",
            }}
            onClick={() => navigate(`/product/${product.id}`)}
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
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`buy}`);
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
