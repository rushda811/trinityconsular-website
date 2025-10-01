import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const linkHover = {
    scale: 1.1,
    color: "#FF8C5A",
    transition: { duration: 0.3 },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: "#E8F0FA",
        padding: isMobile ? "20px 0" : scrolled ? "40px 0" : "60px 0",
        transition: "padding 0.4s ease",
        marginTop: "0",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Container>
        <Row className="mb-4 align-items-center">
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h5 style={headingStyle}>Quick Links</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <motion.div whileHover={linkHover}><Link to="/" style={linkStyle}>Home</Link></motion.div>
              <motion.div whileHover={linkHover}><Link to="/about" style={linkStyle}>About</Link></motion.div>
              <motion.div whileHover={linkHover}><Link to="/uk-apostille" style={linkStyle}>UK Apostille</Link></motion.div>
              <motion.div whileHover={linkHover}><Link to="/embassy-legalisation" style={linkStyle}>Embassy Legalisation</Link></motion.div>
              <motion.div whileHover={linkHover}><Link to="/shuttle-service" style={linkStyle}>Shuttle Services</Link></motion.div>
              <motion.div whileHover={linkHover}><Link to="/contact" style={linkStyle}>Contact Us</Link></motion.div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <h5 style={headingStyle}
            >Contact Us</h5>
            <p style={{ color: "#1A3C8A",fontFamily: "'Open Sans', sans-serif" , lineHeight: 1.6 }}>
              📧 <motion.a whileHover={{ scale: 1.1, color: "#FF8C5A" }} href="mailto:akbar@trinityconsular.com" style={linkStyle}>akbar@trinityconsular.com</motion.a><br /><br />
            </p>
          </Col>
        </Row>

        <hr style={{ borderColor: "#2563EB", opacity: 0.3, margin: "20px 0" }} />

        <Row>
          <Col className="text-center" style={{ color: "#1A3C8A", fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()}. All rights reserved.
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
}

const headingStyle = {
  fontWeight: 800,
  color: "#FF8C5A",
  marginBottom: "15px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
};

const linkStyle = {
  color: "#1A3C8A",
  textDecoration: "none",
  fontWeight: 500,
};

export default Footer;
