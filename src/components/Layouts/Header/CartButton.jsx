import React from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";
import { toast } from "react-hot-toast";

function CartButton({ count, onClick, isMobile }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: isMobile ? 10 : 16,
        right: isMobile ? 80 : 50,
        backgroundColor: "#16a34a", // bg-green-600
        border: "none",
        borderRadius: "0.5rem", // rounded
        padding: "0.5rem 1rem", // px-4 py-2
        color: "white",
        fontWeight: "600", // font-semibold
        fontSize: "0.875rem", // text-sm
        cursor: "pointer",
         
        display: "flex",
        alignItems: "center",
        gap: "0.5rem", // gap-2
        zIndex: 1300,
        userSelect: "none",
        transition: "background-color 0.3s ease",
      }}
      aria-label="Open Cart"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
       
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
       
      }}
    >
      <FiShoppingCart size={20} />
      Cart
      {count > 0 && (
        <span
          style={{
            background: "#dc2626",
            borderRadius: "50%",
            padding: "2px 8px",
            fontSize: 14,
            fontWeight: "bold",
            color: "white",
            minWidth: 22,
            textAlign: "center",
            lineHeight: 1,
            boxShadow: "0 0 6px #dc2626",
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export default function Cart({ cartItems, setCartItems, drawerOpen, setDrawerOpen, isMobile }) {
  function handleRemoveFromCart(index) {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    if (!isMobile) toast(`Removed item from cart.`);
  }

  function priceToNumber(price) {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      return Number(price.replace(/[^0-9.-]+/g, ""));
    }
    return 0;
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + priceToNumber(item.price),
    0
  );

  return (
    <>
      {!drawerOpen && (
        <CartButton
          count={cartItems.length}
          onClick={() => setDrawerOpen(true)}
          isMobile={isMobile}
        />
      )}

<Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  PaperProps={{
    sx: {
      width: isMobile ? "80vw" : 400,
      backgroundColor: "#000",  // black background
      color: "#fff",            // white text
      padding: 2,
      display: "flex",
      flexDirection: "column",
    },
  }}
>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Your Cart</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
            <FiX />
          </IconButton>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            mb: 2,
            py: 1,
          }}
        >
          {cartItems.length === 0 ? (
            <Typography variant="body1" sx={{ mt: 2 }}>
              Your cart is empty.
            </Typography>
          ) : (
            cartItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 2,
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" noWrap>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{item.price.toLocaleString()}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </Button>
              </Box>
            ))
          )}
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #ddd",
            pt: 2,
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          <Typography>Total:</Typography>
          <Typography>₹{totalPrice.toLocaleString()}</Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            background:
              "linear-gradient(to right, #f97316, #f59e0b)",
            color: "white",
            fontWeight: "bold",
            borderRadius: 2,
            py: 1.5,
          }}
          onClick={() => {
            setDrawerOpen(false);
            if (cartItems.length === 0) {
              toast.error("Add some products first!");
            } else {
              toast.success("Thank you for your purchase!");
              setCartItems([]);
            }
          }}
        >
          Checkout
        </Button>
      </Drawer>
    </>
  );
}
