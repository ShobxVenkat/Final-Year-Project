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

export default function App() {
  return (
    <Router>
      {/* <FloatingParciles /> */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<ShopHome />} />
        <Route path= "/shop/fashion" element={<FashionApparel/>} />


        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}
