// src/components/MyNavbar.jsx
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import WizardEnquiryModal from "./WizardEnquiryModal";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkHover = {
    scale: 1.15,
    color: "#FF8C5A",
    transition: { duration: 0.3 },
  };



  const commonLinkStyle = { fontWeight: 500, color: "#1A3C8A" };

  const services = [
    { name: "UK Apostille", path: "/uk-apostille" },
    { name: "Embassy Legalisation", path: "/embassy-legalisation" },
    { name: "Shuttle Service", path: "/shuttle-service" },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        style={{
          backgroundColor: scrolled ? "#E8F0FA" : "#F0F6FA",
          backdropFilter: "blur(6px)",
          boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.08)" : "none",
          transition: "0.4s ease",
          padding: scrolled ? "0.4rem 1rem" : "1rem 1rem",
        }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: scrolled ? "32px" : "40px",
                marginRight: "10px",
                transition: "0.4s ease",
              }}
            />
          </Navbar.Brand>

          {/* 🔹 Professional Hamburger */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className={`custom-toggler ${expanded ? "open" : ""}`}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-3">
              <motion.div whileHover={navLinkHover}>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => setExpanded(false)}
                  style={commonLinkStyle}
                >
                  Home
                </Nav.Link>
              </motion.div>

              {/* Services Dropdown */}
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                style={{ position: "relative" }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    color: "#FF8C5A",
                    transition: { duration: 0.3 },
                  }}
                >
                  <Nav.Link style={{ ...commonLinkStyle, cursor: "pointer" }}>
                    Services ▾
                  </Nav.Link>
                </motion.div>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "#fff",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        zIndex: 9999,
                        minWidth: "220px",
                      }}
                    >
                      {services.map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            scale: 1.03,
                            background:
                              "linear-gradient(90deg, #FF6B4A, #FF914D)",
                            color: "#fff",
                            transition: { duration: 0.3 },
                          }}
                        >
                          <Nav.Link
                            as={Link}
                            to={item.path}
                            onClick={() => {
                              setServicesOpen(false);
                              setExpanded(false);
                            }}
                            style={{
                              padding: "0.6rem 1rem",
                              color: "#1A3C8A",
                              fontWeight: 500,
                            }}
                          >
                            {item.name}
                          </Nav.Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={navLinkHover}>
                <Nav.Link as={Link} to="/about" style={commonLinkStyle}>
                  About
                </Nav.Link>
              </motion.div>

              <motion.div whileHover={navLinkHover}>
                <Nav.Link as={Link} to="/contact" style={commonLinkStyle}>
                  Contact
                </Nav.Link>
              </motion.div>

              {/* Get Started Button */}
<motion.button
  onClick={() => setShowEnquiryModal(true)}
  initial={{ scale: 1 }}
  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255,140,90,0.5)" }}
  whileTap={{ scale: 0.95 }}
  className="navbar-btn"
  style={{
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.1rem", // bigger text
    padding: scrolled ? "0.5rem 1.5rem" : "0.7rem 2rem", // more padding
    marginLeft: "1rem",
    borderRadius: "10px", // slightly bigger
    border: "none",
    background:
      "linear-gradient(270deg, #FF6B4A, #FF914D, #FFB36B, #FF914D)",
    backgroundSize: "400% 100%",
    animation: "gradientMove 4s linear infinite",
    cursor: "pointer",
    outline: "none",
    boxShadow: "none",
  }}
>
  Get Started
</motion.button>


<style>
  {`
    .navbar-btn:focus,
    .navbar-btn:active,
    .navbar-btn:focus-visible {
      outline: none !important;
      box-shadow: none !important;
    }
  `}
</style>




</Nav>
</Navbar.Collapse>

          <style>
            {`
              @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }

         

              /* Professional Hamburger - no grey box */
              .custom-toggler {
                border: none !important;
                background: transparent !important;
                padding: 0.5rem;
                box-shadow: none !important;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 36px;
                width: 36px;
                cursor: pointer;
                transition: transform 0.3s ease;
                gap: 6px;
              }

              .custom-toggler:hover {
                transform: scale(1.1);
              }

              .custom-toggler .bar {
                height: 3px;
                width: 100%;
                background-color: #1A3C8A;
                border-radius: 4px;
                transition: all 0.4s ease;
              }

              .custom-toggler:hover .bar {
                background-color: #FF8C5A;
              }

              .custom-toggler.open .bar:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
              }
              .custom-toggler.open .bar:nth-child(2) {
                opacity: 0;
              }
              .custom-toggler.open .bar:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
              }

              @media (max-width: 768px) {
                .custom-toggler {
                  height: 40px;
                  width: 40px;
                  gap: 7px;
                }

                .custom-toggler .bar {
                  height: 3.5px;
                }

                .custom-toggler:hover {
                  transform: scale(1.15);
                }
              }
            `}
          </style>
        </Container>
      </Navbar>

      <WizardEnquiryModal
        show={showEnquiryModal}
        handleClose={() => setShowEnquiryModal(false)}
      />
    </>
  );
}

export default MyNavbar;
