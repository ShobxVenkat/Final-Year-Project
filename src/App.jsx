import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Navbar from "./components/Layouts/Header/Navbar";
import FloatingParciles from "./components/Extra/FloatingParciles";
import Auctions from "./components/Pages/Auctions";
import Shop from "./components/Pages/Shop";
import CategoryPage from "./components/Pages/CategoryPage";
import ProductDetail from "./components/Pages/ProductDetail";


export default function App() {
  return (
    <Router>
      
      <FloatingParciles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
