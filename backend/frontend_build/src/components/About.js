// src/components/About.js
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import stamps from "../assets/stampss.jpeg"; 
import communityImage from "../assets/hands.jpeg";
import { FaCheckCircle, FaStamp, FaThumbsUp } from "react-icons/fa";

// Animated underline
const AnimatedUnderline = () => (
  <motion.div
    style={{
      position: "absolute",
      left: 0,
      bottom: -6,
      height: "4px",
      width: "100%",
      borderRadius: "2px",
      background: "linear-gradient(90deg, #1E90FF, #FF7A33, #1E90FF)",
      backgroundSize: "200% 100%"
    }}
    animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  />
);

const About = () => {
  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        backgroundColor: "#E0EDF9",
        color: "#000",
        padding: "3rem 1rem"
      }}
    >
      {/* Hero Section */}
      <Container style={{ padding: "60px 20px", maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #F5F7FA 0%, #E0E6F0 100%)",
            borderRadius: "20px",
            padding: "40px 20px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <div style={{ flex: "1 1 60%", minWidth: "250px" }}>
            <h2
              style={{
                fontFamily: "'DM Serif Text', serif",
                fontSize: "2.5rem",
                position: "relative",
                display: "inline-block",
                marginBottom: "1rem",
                color: "#1A3C8A",
                

              }}
            >
              About Trinity Consular
              <AnimatedUnderline />
            </h2>
            <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",                  fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
              We specialise in providing fast, reliable, and professional document legalisation and apostille services.
              As a business registered with the UK Foreign, Commonwealth & Development Office (FCDO), we ensure your
              documents are processed correctly and meet all official requirements for use overseas.
            </p>
            <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",                  fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
              Whether you need an apostille certificate for personal documents such as birth, marriage, or academic
              certificates, or legalisation for business and corporate papers, we handle the process from start to finish
              with care and precision.
            </p>
            <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",                  fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
              Our service is designed to save you time and remove the stress of dealing with complex procedures. We liaise
              directly with the FCDO and, where required, embassies and consulates, so you can be confident that your
              documents will be accepted internationally.
            </p>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: "1 1 35%", textAlign: "center", minWidth: "180px", marginTop: "20px" }}
          >
            <Image src={logo} alt="Trinity Consular Logo" style={{ maxWidth: "100%", height: "auto" }} fluid />
          </motion.div>
        </motion.div>
      </Container>

      {/* Approved Provider Section
      <motion.div
        className="text-center my-5"
        style={{
          backgroundColor: "#1A3C8A",
          padding: "2rem",
          borderRadius: "15px"
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Text', serif",
            fontSize: "1.5rem",
            color: "#fff",
            marginBottom: "0.5rem"
          }}
        >
          APPROVED FOREIGN OFFICE PROVIDER OF NEXT-DAY APOSTILLE SERVICES.
        </h2>

        <motion.a
          href="https://www.gov.uk/government/publications/legalisation-next-day-service-providers/list-of-next-day-legalisation-service-providers"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#f6f7faff",
            fontWeight: "600",
            textDecoration: "none",
            fontFamily: "'DM Serif Text', serif",
            position: "relative",
            display: "inline-block",
            paddingBottom: "2px"
          }}
          whileHover="hover"
        >
          CLICK HERE TO LEARN MORE
          <motion.span
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              height: "2px",
              width: "100%",
              background: "linear-gradient(90deg, #1E90FF, #FF7A33, #1E90FF)",
              backgroundSize: "200% 100%",
              borderRadius: "2px"
            }}
            initial={{ scaleX: 0 }}
            variants={{
              hover: { scaleX: 1 }
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.a>
      </motion.div> */}

      {/* Services Section */}
      <motion.div
        style={{
          position: "relative",
          backgroundImage: `url(${stamps})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "1rem",
          borderRadius: "12px",
          color: "#000",
          overflow: "hidden",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-5 text-center"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          <h3
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontSize: "2.5rem",
              position: "relative",
              display: "inline-block",
              marginBottom: "2rem",
              color: "#fff",
            }}
          >
            Our Services
            <AnimatedUnderline />
          </h3>
          <Row className="align-items-center">
            <Col xs={12}>
              <p style={{color: "#fff",
textShadow: "0px 2px 6px rgba(0,0,0,0.7)",
 fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",                  fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
                If you need assistance obtaining a fast apostille, we can help. We provide simple ordering, dedicated customer support, complete end-to-end service, regular order updates, and rapid processing.
              </p>
              <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "#fff",
textShadow: "0px 2px 6px rgba(0,0,0,0.7)"
,                 fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
                We will first check that your document is suitable for submission for an apostille. Many customers are unaware of the legalisation requirements. The document must be correctly signed, dated, officially stamped or sealed, and in some cases require solicitor certification and signature.
              </p>
              <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "#fff",
textShadow: "0px 2px 6px rgba(0,0,0,0.7)"
,                 fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
                Once confirmed, we submit the document to the Foreign, Commonwealth & Development Office (FCDO) — the official government issuing authority — for the apostille. Standard completion takes 2–3 working days.
              </p>
              <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "#fff",
textShadow: "0px 2px 6px rgba(0,0,0,0.7)"
,                 fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
                If you have chosen our solicitor certification service, we will arrange for the document to be certified correctly before submission to the FCDO, completing both the solicitor certification and apostille in just 2–3 working days.
              </p>
              <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "#fff",
textShadow: "0px 2px 6px rgba(0,0,0,0.7)"
,                 fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem" }}>
                We also provide a <strong>Shuttle Service</strong> – next-day completion. For documents requiring further legalisation, our <strong>Embassy Service</strong> – 5–7 working days ensures your papers are processed smoothly and securely.
              </p>
            </Col>
          </Row>
        </div>
      </motion.div>

      {/* Community Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-5 text-center"
        style={{ backgroundColor: "#f2f2f2", padding: "3rem 1rem", borderRadius: "12px" }}
      >
        <h3
          style={{
            fontFamily: "'DM Serif Text', serif",
            fontSize: "2.5rem",
            position: "relative",
            display: "inline-block",
            marginBottom: "2rem",
            color: "#1A3C8A"
          }}
        >
          Our Community
          <AnimatedUnderline />
        </h3>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          <Col md={6} className="mb-4 mb-md-0 text-center">
  <Image
    src={communityImage}
    alt="Community"
    fluid
    rounded
    style={{
      maxWidth: "100%", // limits the width
      maxHeight: "400px", // limits height
      height: "auto",
      objectFit: "cover",
    }}
  />
</Col>
          <Col md={6}>
            <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",                   fontFamily: "'Open Sans', sans-serif" ,
lineHeight: "1.6", marginBottom: "1rem", textAlign: "left" }}>
              At Trinity Consular, we believe that our service is more than just processing documents — it’s about supporting people, families, and businesses in achieving their goals abroad. Whether it’s helping a student study overseas, assisting families with personal certificates, or enabling companies to expand internationally, we are proud to play a role in every client’s journey.
            </p>
            <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",                  fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem", textAlign: "left" }}>
              Our community is built on trust, professionalism, and care. We work closely with individuals, legal professionals, universities, and corporate partners who rely on us for accurate, secure, and efficient document legalisation. Each client we serve becomes part of a wider network of people who value peace of mind, reliability, and personal support.
            </p>
            <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",            fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", marginBottom: "1rem", textAlign: "left" }}>
              By choosing Trinity Consular, you join a community that values transparency, efficiency, and dedication. We are here to guide you step by step, ensuring your documents are recognised and accepted worldwide.
            </p>
          </Col>
        </Row>
      </motion.div>
      {/* Features Section without heading */}
{/* Features Section with smooth animation */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.2 }}
  className="mb-5 text-center"
  style={{
    backgroundColor: "#fff",
    padding: "3rem 1rem",
    borderRadius: "12px",
    maxWidth: "1200px",
    margin: "0 auto"
  }}
>
  <Row className="align-items-start text-center flex-column flex-md-row">
    {[
      {
        icon: <FaCheckCircle />,
        title: "Simple to Order",
        text: "Our ordering process is fast, easy, and hassle-free."
      },
      {
        icon: <FaStamp />,
        title: "Fast Apostille Service",
        text: "Get your documents processed quickly with our efficient service."
      },
      {
        icon: <FaThumbsUp />,
        title: "Complete Service",
        text: "We handle your documents from start to finish, with total care."
      }
    ].map((item, index) => (
      <Col key={index} xs={12} md={4} className="mb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              fontSize: "3rem",
              color: "#1A3C8A",
              border: "2px solid #1A3C8A",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem auto"
            }}
          >
            {item.icon}
          </div>
          <h5 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem" }}>
            {item.title}
          </h5>
          <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)",                  fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: "1.6", color: "#333" }}>
            {item.text}
          </p>
        </motion.div>
      </Col>
    ))}
  </Row>
</motion.div>

      {/* Final CTA */}
      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <Button
          href="/contact"
          style={{
            background: "linear-gradient(90deg, #FF7A33, #FF914D)",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "2rem",
            fontWeight: "600",
            fontSize: "1.1rem",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default About;
