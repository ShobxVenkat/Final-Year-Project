import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Header from "./components/Layouts/Header/Header";
import Auctions from "./components/Pages/Auctions";
import Footer from "./components/Layouts/Footer/Footer";
import ShopHome from "./components/Pages/ShopHome";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Cart from "./components/Pages/Cart";
import ScrollToTop from "./components/Extra/ScrollToTop"; 
import FloatingParciles from "./components/Extra/FloatingParciles";
import FashionApparel from "./components/CategoryPages/FashionApparel";
import Electronics from "./components/CategoryPages/Electronics";
import Grocery from "./components/CategoryPages/Grocery";
import BeautyAndWellness from "./components/CategoryPages/BeautyAndWellness";
import HomeAndAppliances from "./components/CategoryPages/HomeAndAppliances";
import SportsAndFitness from "./components/CategoryPages/SportsAndFitness";
import LiveAuctions from "./components/Pages/LiveAuctions";
import FAQ from "./components/Pages/FAQ";
import Shipping from "./components/Pages/Shipping";
import Contact from "./components/Pages/Contact";
import Privacy from "./components/Pages/Privacy";
import Terms from "./components/Pages/Terms";
import SellWithUs from "./components/Pages/SellWithUs"; // ✅ added

export default function App() {
  return (
    <Router>
      {/* <FloatingParciles /> */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auctions/live" element={<LiveAuctions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<ShopHome />} />
        <Route path="/shop/fashion" element={<FashionApparel />} />
        <Route path="/shop/electronics" element={<Electronics />} />
        <Route path="/shop/grocery" element={<Grocery />} />
        <Route path="/shop/wellness" element={<BeautyAndWellness />} />
        <Route path="/shop/appliances" element={<HomeAndAppliances />} />
        <Route path="/shop/sports" element={<SportsAndFitness />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sell" element={<SellWithUs />} /> {/* ✅ new route */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/live-auctions" element={<Auctions />} />
        <Route path="/upcoming" element={<Auctions />} />
        <Route path="/featured" element={<ShopHome />} />
        <Route path="/upcoming-auctions" element={<Auctions />} />
      </Routes>
      <Footer />
    </Router>
  );
}
