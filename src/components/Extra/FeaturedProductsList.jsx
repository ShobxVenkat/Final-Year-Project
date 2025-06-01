import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { toast, Toaster } from "react-hot-toast";

import dummyProducts from "./DummyProducts";
const products = dummyProducts;

export default function FeaturedProductsList({ onAddToCart }) {
  const [isMobile, setIsMobile] = useState(false);
  const [columns, setColumns] = useState("repeat(4, 1fr)");

  useEffect(() => {
    function updateLayout() {
      const width = window.innerWidth;
      if (width <= 480) {
        setColumns("repeat(2, 1fr)");
        setIsMobile(true);
      } else if (width <= 768) {
        setColumns("repeat(3, 1fr)");
        setIsMobile(true);
      } else if (width <= 1200) {
        setColumns("repeat(3, 1fr)");
        setIsMobile(false);
      } else {
        setColumns("repeat(4, 1fr)");
        setIsMobile(false);
      }
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const [btnHover, setBtnHover] = useState(null);

  const buttonStyle = (btn) => ({
    flex: isMobile ? "unset" : 1,
    width: isMobile ? "100%" : "auto",
    margin: isMobile ? "6px 0" : "0 4px",
    padding: "10px 0",
    borderRadius: 8,
    border: "none",
    background:
      btnHover === btn
        ? "linear-gradient(to right, #f97316, #ea580c)"
        : "linear-gradient(to right, #f59e0b, #f97316)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.9rem",
    transition: "background 0.3s ease",
    minWidth: 0,
    textAlign: "center",
  });

  return (
    <>
      {/* Toaster for toast notifications on top-left */}
      <Toaster position="top-left" reverseOrder={false} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: columns,
          gap: 2,
          padding: 2,
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              background: "#fff",
              borderRadius: 2,
              padding: 2,
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: 280,
              margin: "auto",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 12,
                marginBottom: 10,
              }}
            />
            <Typography variant="h6" sx={{ marginBottom: 0.5 }}>
              {product.title}
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                color: "#28a745",
                marginBottom: 1,
                fontSize: 16,
              }}
            >
              ₹{product.price.toLocaleString()}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#555", marginBottom: 2, flexGrow: 1 }}
            >
              {product.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 1,
              }}
            >
              <button
                style={buttonStyle("add")}
                onMouseEnter={() => setBtnHover("add")}
                onMouseLeave={() => setBtnHover(null)}
                onClick={() => {
                  onAddToCart(product);
                  toast.success(`${product.title} added to cart!`); // Toast here
                }}
              >
                Add to Cart
              </button>

              <button
                style={buttonStyle("view")}
                onMouseEnter={() => setBtnHover("view")}
                onMouseLeave={() => setBtnHover(null)}
                onClick={() => {
                  // Could open product details modal or page here
                }}
              >
                View
              </button>

              <button
                style={buttonStyle("buy")}
                onMouseEnter={() => setBtnHover("buy")}
                onMouseLeave={() => setBtnHover(null)}
                onClick={() => {
                  // Buy logic here
                }}
              >
                Buy
              </button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
