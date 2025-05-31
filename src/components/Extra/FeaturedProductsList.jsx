import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";

const products = [
  {
    id: 101,
    name: "Wireless Earbuds",
    price: "₹2999",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=3000&auto=format&fit=crop",
    description:
      "Compact wireless earbuds with crystal clear sound and noise isolation for on-the-go music lovers.",
  },
  {
    id: 102,
    name: "Portable Charger",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=3000&auto=format&fit=crop",
    description:
      "High-capacity portable charger with fast charging support to keep your devices powered anytime, anywhere.",
  },
  {
    id: 103,
    name: "Bluetooth Speaker",
    price: "₹1799",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3000&auto=format&fit=crop",
    description:
      "Portable Bluetooth speaker with rich bass and 10 hours of battery life, perfect for parties and outdoor use.",
  },
  {
    id: 104,
    name: "Smart LED Bulb",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3000&auto=format&fit=crop",
    description:
      "Energy-efficient smart LED bulb controllable via app with adjustable brightness and colors.",
  },
  {
    id: 105,
    name: "Fitness Tracker",
    price: "₹2499",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=3000&auto=format&fit=crop",
    description: "Monitor your daily activity, heart rate, and sleep with this sleek fitness tracker.",
  },
  {
    id: 106,
    name: "Laptop Backpack",
    price: "₹1599",
    image:
      "https://images.unsplash.com/photo-1512427691650-7ccde1c105f1?q=80&w=3000&auto=format&fit=crop",
    description:
      "Durable and water-resistant laptop backpack with multiple compartments for organization.",
  },
  {
    id: 107,
    name: "Wireless Mouse",
    price: "₹799",
    image:
      "https://images.unsplash.com/photo-1587825140408-3f2172f34c64?q=80&w=3000&auto=format&fit=crop",
    description:
      "Ergonomic wireless mouse with adjustable DPI and long battery life.",
  },
  {
    id: 108,
    name: "Gaming Headset",
    price: "₹3499",
    image:
      "https://images.unsplash.com/photo-1580910051070-7d3f271b5a7a?q=80&w=3000&auto=format&fit=crop",
    description:
      "Surround sound gaming headset with noise-cancelling mic and comfortable ear cushions.",
  },
  {
    id: 109,
    name: "Smartphone Gimbal",
    price: "₹4999",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=3000&auto=format&fit=crop",
    description:
      "Stabilize your smartphone videos with this 3-axis handheld gimbal for smooth shots.",
  },
  {
    id: 110,
    name: "Action Camera",
    price: "₹7999",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=3000&auto=format&fit=crop",
    description:
      "Rugged action camera with 4K recording and waterproof casing for adventure enthusiasts.",
  },
  {
    id: 111,
    name: "Electric Kettle",
    price: "₹1999",
    image:
      "https://images.unsplash.com/photo-1505731130612-34eaf7eb2078?q=80&w=3000&auto=format&fit=crop",
    description:
      "Fast boiling electric kettle with auto shut-off and sleek stainless steel design.",
  },
  {
    id: 112,
    name: "Yoga Mat",
    price: "₹699",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=3000&auto=format&fit=crop",
    description:
      "Non-slip yoga mat with cushioning for comfortable workouts and meditation.",
  },
  {
    id: 113,
    name: "Desk Lamp",
    price: "₹1199",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3000&auto=format&fit=crop",
    description:
      "Adjustable LED desk lamp with touch controls and multiple brightness settings.",
  },
  {
    id: 114,
    name: "Wireless Charger",
    price: "₹1299",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=3000&auto=format&fit=crop",
    description:
      "Fast wireless charger compatible with most Qi-enabled smartphones.",
  },
  {
    id: 115,
    name: "Portable Projector",
    price: "₹10999",
    image:
      "https://images.unsplash.com/photo-1526401485004-c07d48cbb3d3?q=80&w=3000&auto=format&fit=crop",
    description:
      "Compact portable projector with HD display and HDMI input for movies and presentations.",
  },
  {
    id: 116,
    name: "Noise Cancelling Headphones",
    price: "₹6499",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3000&auto=format&fit=crop",
    description:
      "Over-ear headphones with active noise cancellation and superior sound quality.",
  },
  {
    id: 117,
    name: "Smart Thermostat",
    price: "₹8999",
    image:
      "https://images.unsplash.com/photo-1576671080517-82e3e7aa6592?q=80&w=3000&auto=format&fit=crop",
    description:
      "Control your home's temperature remotely with this easy-to-use smart thermostat.",
  },
  {
    id: 118,
    name: "Electric Toothbrush",
    price: "₹2999",
    image:
      "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=3000&auto=format&fit=crop",
    description:
      "Rechargeable electric toothbrush with multiple cleaning modes for better oral health.",
  },
  {
    id: 119,
    name: "Robot Vacuum",
    price: "₹14999",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=3000&auto=format&fit=crop",
    description:
      "Smart robot vacuum cleaner with automatic navigation and powerful suction.",
  },
  {
    id: 120,
    name: "Coffee Maker",
    price: "₹3999",
    image:
      "https://images.unsplash.com/photo-1510626176961-4b76adf6d4f3?q=80&w=3000&auto=format&fit=crop",
    description:
      "Automatic coffee maker with programmable timer and brew strength control.",
  },
];


// Cart Button
function CartButton({ count, onClick, isMobile }) {
    return (
      <button
        onClick={onClick}
        style={{
          position: "fixed",
          top: isMobile ? 10 : 15,
          right: isMobile ? 100 : 30,
          background: "linear-gradient(45deg, #f59e0b, #f97316)",
          border: "none",
          borderRadius: "50px",
          padding: "10px 20px",
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(245, 158, 11, 0.6)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 1300,
          userSelect: "none",
        }}
        aria-label="Open Cart"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(245, 158, 11, 0.8)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(245, 158, 11, 0.6)";
        }}
      >
        <FiShoppingCart size={24} />
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
  
  // Product Card
  function FeaturedProductCard({ product, isMobile, onAddToCart }) {
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
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 12,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 280,
          margin: "auto",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            borderRadius: 12,
            marginBottom: 10,
          }}
        />
        <h3 style={{ margin: "0 0 6px 0", fontSize: 18 }}>{product.name}</h3>
        <p
          style={{
            fontWeight: "bold",
            color: "#28a745",
            marginBottom: 6,
            fontSize: 16,
          }}
        >
          {product.price}
        </p>
        <p style={{ fontSize: 13, color: "#555", marginBottom: 12, flexGrow: 1 }}>
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 8,
          }}
        >
          <button
            style={buttonStyle("add")}
            onMouseEnter={() => setBtnHover("add")}
            onMouseLeave={() => setBtnHover(null)}
            onClick={() => {
              onAddToCart(product);
              alert(`Added ${product.name} to cart!`);
            }}
          >
            Add to Cart
          </button>
          <button
            style={buttonStyle("view")}
            onMouseEnter={() => setBtnHover("view")}
            onMouseLeave={() => setBtnHover(null)}
            onClick={() => alert(`Viewing details of ${product.name}`)}
          >
            View
          </button>
          <button
            style={buttonStyle("buy")}
            onMouseEnter={() => setBtnHover("buy")}
            onMouseLeave={() => setBtnHover(null)}
            onClick={() => alert(`Buying ${product.name}`)}
          >
            Buy
          </button>
        </div>
      </div>
    );
  }
  
  // Main Component
  export default function FeaturedProductsList() {
    const [isMobile, setIsMobile] = useState(false);
    const [columns, setColumns] = useState("repeat(4, 1fr)");
    const [cartItems, setCartItems] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
  
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
  
    function handleAddToCart(product) {
      setCartItems((prev) => [...prev, product]);
    }
  
    function handleRemoveFromCart(index) {
      setCartItems((prev) => prev.filter((_, i) => i !== index));
    }
  
    function priceToNumber(priceStr) {
      return Number(priceStr.replace(/[^0-9.-]+/g, ""));
    }
  
    const totalPrice = cartItems.reduce(
      (total, item) => total + priceToNumber(item.price),
      0
    );
  
    return (
      <>
        {/* Cart Button only shows if drawer is closed */}
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
              backgroundColor: "#f9f9f9",
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
            <IconButton onClick={() => setDrawerOpen(false)}>
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
              paddingY: 1,
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
                    alt={item.name}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" noWrap>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}
                    </Typography>
                  </Box>
                  {/* Remove Button */}
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleRemoveFromCart(index)}
                    sx={{ minWidth: 0, px: 1, py: 0.5 }}
                  >
                    Remove
                  </Button>
                </Box>
              ))
            )}
          </Box>
  
          {/* Total Price and Checkout Button */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Total: ₹{totalPrice.toLocaleString()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disabled={cartItems.length === 0}
              onClick={() => alert("Checkout not implemented")}
              sx={{ width: "100%" }}
            >
              Checkout
            </Button>
          </Box>
        </Drawer>
  
        {/* Product grid */}
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
            <FeaturedProductCard
              key={product.id}
              product={product}
              isMobile={isMobile}
              onAddToCart={handleAddToCart}
            />
          ))}
        </Box>
      </>
    );
  }