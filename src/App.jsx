import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Navbar from "./components/Layouts/Header/Navbar";
// import FloatingParciles from "./components/Extra/FloatingParciles";
import Auctions from "./components/Pages/Auctions";
import Footer from "./components/Layouts/Footer/Footer";
import ShopHome from "./components/Pages/ShopHome";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Cart from "./components/Pages/Cart";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path="/shop" element={<ShopHome />} />
        <Route path="/cart" element = {<Cart/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}
