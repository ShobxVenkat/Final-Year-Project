// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar";
import BackgroundVisuals from "./components/Pages/BackgroundVisuals";
import Hero from "./components/Pages/Hero";
import LoginPage from "./components/Pages/LoginPage";

const LandingPage = () => (
  <div className="relative min-h-screen bg-[#0E0F1B] text-white overflow-hidden flex flex-col">
    <Navbar />
    <BackgroundVisuals />
    <div className="relative z-10 flex flex-col md:flex-row justify-start items-center px-8 py-2 flex-grow">
      <div className="flex flex-col justify-center h-full">
        <Hero />
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* add more routes like register, dashboard etc here */}
      </Routes>
    </Router>
  );
}
