// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Navbar from "./components/Layouts/Header/Navbar";
import FloatingParciles from "./components/Extra/FloatingParciles";
import Auctions from "./components/Pages/Auctions";

export default function App() {
  return (
    <Router>
      <Navbar /> 
      {/* <FloatingParciles/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions/>}/>
        
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}