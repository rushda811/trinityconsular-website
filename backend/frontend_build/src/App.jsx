// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './bootstrap.min.css';

import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/MyNavbar';
import Footer from "./components/Footer";
import About from "./components/About";
import UKApostille from "./components/UK";
import ShuttleService from "./components/shuttle";
import EmbassyLegalisation from "./components/embassy";   // <-- added this
import CountryTicker from "./components/CountryTicker";
import { preloadImages } from "./preloadImages";
import { useEffect } from "react";

// Helper for scroll to top
function AppRoutes() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/uk-apostille" element={<UKApostille />} />
      <Route path="/shuttle-service" element={<ShuttleService />} />
      <Route path="/embassy-legalisation" element={<EmbassyLegalisation />} />  {/* <-- added this */}
    </Routes>
  );
}

export default function App() {
  useEffect(() => {
    preloadImages(); // runs once on mount
  }, []);
  return (
    <Router>
      <div className="d-flex flex-column">
        <Navbar />
        <div style={{paddingTop: "75px" }}> 
        <CountryTicker />   {/* ticker goes here */}
        <div style={{flexGrow:0}} >
          <AppRoutes />
        </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
