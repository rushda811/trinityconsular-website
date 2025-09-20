// src/components/Embassy.js
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Container,Button } from "react-bootstrap";
import { motion} from "framer-motion";
import embassy from "../assets/embassy.jpeg";
import CountryModal from "./CountryModal";
import WizardEnquiryModal from "./WizardEnquiryModal";

import gify from "../assets/gify.gif";
import personalSample from "../assets/personal-docs.jpg"; 
import businessSample from "../assets/business-docs.jpg";

import { FaWpforms, FaClipboardCheck, FaShippingFast } from "react-icons/fa";
import galaxy from "../assets/galaxy.jpg";
import countries from "./Country";
const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <Row>
      {items.map((item, index) => (
        <Col md={6} key={index} className="mb-3">
          <motion.div
            layout
            style={{
              background: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => toggleItem(index)}
          >
            <motion.div
              layout
              style={{
                padding: "15px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#1A3C8A",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              {item.question}
              <motion.span
                layout
                initial={false}
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: "1.2rem", fontWeight: "bold", lineHeight: 1, color: "#FF7A33" }}
              >
                ►
              </motion.span>
            </motion.div>

            {openIndex === index && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "15px 20px",
                  background: "rgba(255, 122, 51, 0.1)",
                  color: "#1A1A1A",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

// Animated Underline
const AnimatedUnderline = ({ width = "60px", delay = 0 }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    style={{
      height: "4px",
      width,
      backgroundColor: "#ff8c00",
      margin: "8px auto 30px",
      borderRadius: "2px",
      transformOrigin: "left",
    }}
  />
);


const COUNTRY_GROUPS = {
  "Gulf Countries": countries.filter(c => ["UAE","Kuwait","Qatar","Bahrain"].includes(c.name)),
  "Asian Countries": countries.filter(c => ["China","Malaysia","Pakistan","India","Taiwan","Thailand","Vietnam"].includes(c.name)),
  "Middle East": countries.filter(c => ["Egypt","Jordan"].includes(c.name)),
};


const THREE_STEPS = [
  {
    title: "Contact Us",
    desc: "Get in touch with us easily through our secure online form or by giving us a call. Our dedicated and friendly team carefully reviews every request and responds promptly to ensure you get the assistance you need without any delays.",
    icon: <FaWpforms size={60} color="#000" />,   // Big black icon
  },
  {
    title: "Verification & legalisation Processing",
    desc: "WWe take care of the entire legalisation journey from start to finish — beginning with thorough checks and UK Foreign, Commonwealth & Development Office (FCDO) verification, followed by submission to the appropriate embassy for authentication. Every step is carefully monitored, with real-time tracking to ensure precision, speed, and comp",
    icon: <FaClipboardCheck size={60} color="#000" />,
  },
  {
    title: "Safe Return & Delivery",
    desc: "Once the legalisation is successfully completed, we carefully prepare and securely package your documents. They are dispatched through a trusted courier service, fully tracked from our office to your doorstep, ensuring they reach you promptly, safely, and in immaculate condition — exactly when and where you need them.",
    icon: <FaShippingFast size={60} color="#000" />,
  },
];

const FAQ_ITEMS = [
  { question: "How long does the legalisation take?", answer: "Processing usually takes 3-7 business days depending on the country." },
  { question: "Which documents can be legalised?", answer: "Personal, corporate, and educational documents can be legalised." },
  { question: "Do you provide delivery services?", answer: "Yes, we deliver documents safely to your address." },
  { question: "Can you legalise documents from other countries?", answer: "Yes, we assist with documents originating from multiple countries." },
  { question: "Do you require notarisation before legalisation?", answer: "Some documents may require notarisation; we will guide you if needed." },
  { question: "Can I track my document legalisation?", answer: "Yes, we provide updates and tracking throughout the process." },
];


// Sample card data
const cardData = [
  {
    title: "PUBLIC",
    rate: "£82",
    days: "5-7 Working Days",
    points: ["ACRO Police Clearance",
"Adoption Certificates",
"Birth Certificates",
"Certificate of No Impediment (CNI)",
"Court Documents",
"Death/Coroner Certificates",
"Divorce Letters",
"HMRC Letters",
"Home Office Documents",
"Marriage Certificates",
"Medical Documents: Member of GMC",
"Pet Export document from DEFRA"],
  },
  {
    title: "PERSONAL",
    rate: "£82",
    days: "5-7 Working Days",
    points: ["AS and A Levels",
"Certificate/Award/Diploma",
"DBS - Criminal Records Check",
"Degrees: Associate, Bachelors, Masters & Doctoral",
"Experience Letter",
"Financial Report/Document",
"GCSEs, O-Levels, National 5s",
"Higher National Diploma/Certificates",
"International Baccalaureate",
"Medical Report/Document",
"Membership Certificate",
"Passport & Power of Attorney",
"PGCE & Teaching certificates"],
  },
  {
    title: "Cooperate",
    rate: "£82",
    days: "5-7 Working Days",
    points: [
"Articles of Association",
"Board Resolution",
"Certificate of Incorporation",
"Certificate of Good Standing",
"Certificate of Incumbency",
"Contracts, Reports, and Accounts",
"Guarantee Agreement",
"Memorandum of Association",
"Other Business Documents",
"Power of Attorney",
"Shareholder Agreement",
"Shareholder Register"],
  },
];

export default function Embassy() {
    const stepsRefs = useRef([]);
  stepsRefs.current = [];
    const [, setStepsVisible] = useState(
    new Array(THREE_STEPS.length).fill(false) // ✅ Track visibility for each step
  );
const openCountryModal = (country) => {
    setSelectedCountry(country);  // set the selected country
    setShowModal(true);           // open CountryModal
    setShowWizardModal(false);    // ensure Wizard modal is closed
};
const [showModal, setShowModal] = useState(false); // Country modal
const [showWizardModal, setShowWizardModal] = useState(false); // Wizard modal
const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepsRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setStepsVisible((prev) => { const newState = [...prev]; newState[index] = true; return newState; });
          }
        });
      },
      { threshold: 0.3 }
    );
    stepsRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f9f9f9" }}>
    {/* HERO SECTION */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13,27,42,0.8) 0%, rgba(27,50,82,0.6) 50%, rgba(10,22,38,0.8) 100%), url(${embassy})`,
          backgroundSize: "cover",
  backgroundPosition: "center", // try "top center" if you want
  backgroundRepeat: "no-repeat",
        color: "#fff",
        padding: "0 20px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        margin: 0,
        borderRadius: 0,
      }}
    >
    <motion.h1
      style={{
        fontSize: "3rem",
        fontWeight: 900,
        lineHeight: 1.2,
        fontFamily: "'DM Serif Text', serif" ,
        marginBottom: "20px",
        background: "linear-gradient(270deg, #1E90FF, #FF7A33, #1E90FF)", // initial gradient
        backgroundSize: "600% 600%", // make gradient larger for smooth animation
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "gradientShift 6s ease infinite"
      }}
    >
    Embassy Legalisation Services
    </motion.h1>
    <style>
    {`
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    `}
    </style>
    
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontSize: "1.25rem",
          fontFamily: "'Open Sans', sans-serif" ,
          color: "#E0E6F0",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.8,
        }}
      >
        We assist with the smooth legalization of your documents through embassies and consulates. Our team ensures that all your personal, corporate, or educational documents are authenticated in compliance with the requirements of the relevant embassy. Whether you need documents legalized for work, study, or business purposes, we handle the process efficiently, saving you time and ensuring accuracy.
      </motion.p>
    </motion.div>
    {/* LEGALISATION SECTION */}

{/* LEGALISATION SECTION WITH GIF */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
      background: "linear-gradient(135deg, #F5F7FA 0%, #E0E6F0 100%)",
    padding: "60px 20px",
    borderRadius: "16px",
    margin: "40px auto",
    maxWidth: "1100px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px",
    overflow: "hidden",
  }}
>
  {/* Left Column: Text */}
  <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
    <h2 style={{ fontFamily: "'DM Serif Text', serif", fontWeight: 900, fontSize: "2.2rem", color: "#1E2F4B", marginBottom: "10px", position: "relative", display: "inline-block" }}>
      What is Embassy Legalisation?
    </h2>

    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: 1.7, color: "#black", marginBottom: "20px" }}>
      Embassy legalisation is the official process of authenticating documents so they are recognised and accepted in foreign countries. Each country has its own rules, procedures, and requirements for legalisation.
    </p>

    <h3 style={{ fontFamily: "'DM Serif Text', serif", fontWeight: 700, fontSize: "1.6rem", color: "#1E2F4B", marginBottom: "10px" }}>
      Types of Documents Accepted
    </h3>

    <ul style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.6, color: "#1E2F4B", paddingLeft: "20px", marginBottom: "20px" }}>
      <li><strong>Personal Documents:</strong> Birth certificates, marriage certificates, educational degrees, passports, and other personal documents.</li>
      <li><strong>Cooperate Documents:</strong> Certificates of incorporation, trade licenses, contracts, and other business-related documents.</li>
    </ul>

    <h3 style={{ fontFamily: "'DM Serif Text', serif", fontWeight: 700, fontSize: "1.6rem", color: "#1E2F4B", marginBottom: "10px" }}>
      Country-Specific Processes
    </h3>

    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.6, color: "#1E2F4B", marginBottom: "20px" }}>
      Each embassy has its own procedure, timeline, and requirements. We ensure your documents follow the correct process for each country to guarantee acceptance.
    </p>

    <h3 style={{ fontFamily: "'DM Serif Text', serif", fontWeight: 700, fontSize: "1.6rem", color: "#1E2F4B", marginBottom: "10px" }}>
      Why Legalisation is Important
    </h3>

    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.6, color: "#1E2F4B", marginBottom: "0" }}>
      Legalising your documents ensures they are officially recognised abroad, giving them full legal validity for personal, academic, or business purposes. Our team handles verification, embassy submission, and ensures a smooth, hassle-free process.
    </p>
  </div>

  {/* Right Column: GIF */}
  <div style={{ flex: "1 1 400px", minWidth: "250px", textAlign: "center" }}>
    <img
      src={gify}
      alt="gify"
      style={{ width: "100%", maxWidth: "300px", borderRadius: "16px" }}
    />
  </div>
</motion.section>

<Container style={{ padding: "70px 20px" }}>
  <h1
    style={{
       fontFamily: "'DM Serif Text', serif",

      textAlign: "center",
      fontSize: "2.8rem",
      fontWeight: "bold",
      color: "#1A2B47",
      marginBottom: "50px",
    }}
  >
    Embassy Legalisation  Categories
  </h1>

  <Row className="g-4 justify-content-center">
    {cardData.map((card, idx) => (
      <Col md={6} lg={4} key={idx}>
        <div
          className="card-hover"
          style={{
            fontFamily: "'DM Serif Text', serif",
            background: "#1A2B47",
            borderRadius: "12px",
            padding: "20px",
            minHeight: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#fff",
            transition: "transform 0.5s ease, box-shadow 0.5s ease", // smooth animation
          }}
        >
          {/* Inner border container */}
          <div
            style={{
              border: "2px solid #FFA500",
              borderRadius: "10px",
              padding: "20px",
              height: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Card Heading */}
            <div>
              <h3
                style={{
                  fontSize: "1.9rem",
                  fontFamily: "'DM Serif Text', serif",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>

              {/* Thinner, longer underline */}
              <div
                style={{
                  width: "70px",
                  height: "2px",
                  backgroundColor: "#FFA500",
                  margin: "0 auto 20px",
                }}
              ></div>

              {/* Rate & Working Days */}
              <p
                style={{
                  fontSize: "2.2rem",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "700",
                  color: "#FFA500",
                  margin: "10px 0",
                }}
              >
                {card.rate}
              </p>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#fff",
                  marginBottom: "20px",
                }}
              >
                {card.days}
              </p>

              {/* Points */}
              <ul
                style={{
                  textAlign: "left",
                  paddingLeft: "20px",
                  listStyleType: "circle",
                }}
              >
                {card.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "10px", fontSize: "1rem" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <Button
              className="card-button"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #FFA500",
                color: "#FFA500",
                fontWeight: "700",
                borderRadius: "8px",
                padding: "8px 20px",
                fontSize: "1rem",
                marginTop: "20px",
                transition: "all 0.3s ease", // smooth hover
              }}
  onClick={() => {
    setShowWizardModal(true);
    setShowModal(false); // ensure CountryModal is closed
  }}            >
              Get Started
            </Button>
          </div>
        </div>
      </Col>
    ))}
  </Row>

  {/* Modal */}
<WizardEnquiryModal show={showWizardModal} handleClose={() => setShowWizardModal(false)} />

  {/* Card Hover & Button Effect */}
  <style>
    {`
      .card-hover:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      }

      .card-button:hover {
        background-color: #FFA500;
        color: #1A2B47;
        border-color: #FFA500;
      }
    `}
  </style>
</Container>

{/* Example Legalisation Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    background: "linear-gradient(135deg, #0D1B2A 0%, #1B3252 50%, #0A1626 100%)",
    padding: "80px 20px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    margin: "60px auto",
    maxWidth: "1200px",
  }}
>
  <Container>
    <h2
      style={{
        fontFamily: "'DM Serif Text', serif",
        fontWeight: 900,
        fontSize: "2.5rem",
        color: "#FF7A33",
        textAlign: "center",
        marginBottom: "15px",
      }}
    >
      Examples of Embassy Legalisation
    </h2>
    <AnimatedUnderline width="120px" delay={0.2} />

    <p
      style={{
        fontFamily: "'Open Sans', sans-serif",
        color: "#E0E6F0",
        fontSize: "1.05rem",
        textAlign: "center",
        marginBottom: "50px",
        lineHeight: 1.7,
      }}
    >
      Here are sample examples of how UAE Embassy Legalisation looks for both
      personal and cooperate documents. These previews demonstrate the
      authenticity and official seals you can expect.
    </p>

    <Row className="justify-content-center">
      {/* Personal Documents */}
      <Col md={6} className="mb-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #1E2F4B 0%, #162238 100%)",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h4
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontWeight: 700,
              fontSize: "1.6rem",
              color: "#FFB366",
              marginBottom: "15px",
            }}
          >
            UAE Personal Documents
          </h4>
          <img
            src={personalSample}
            alt="UAE Personal Document Legalisation"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
            }}
          />
          <p
            style={{
              marginTop: "15px",
              color: "#E0E6F0",
              fontSize: "0.95rem",
              lineHeight: 1.5,
            }}
          >
            Example of a Birth Certificate legalised through the UAE Embassy,
            showing the official stamps and verification seals.
          </p>
        </motion.div>
      </Col>

      {/* Business Documents */}
      <Col md={6} className="mb-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #1E2F4B 0%, #162238 100%)",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h4
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontWeight: 700,
              fontSize: "1.6rem",
              color: "#FFB366",
              marginBottom: "15px",
            }}
          >
            UAE Business Documents
          </h4>
          <img
            src={businessSample}
            alt="UAE Business Document Legalisation"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
            }}
          />
          <p
            style={{
              marginTop: "15px",
              color: "#E0E6F0",
              fontSize: "0.95rem",
              lineHeight: 1.5,
            }}
          >
            Example of a Cooperate Invoice authenticated by the UAE Embassy,
            with all required stamps and legalisation marks.
          </p>
        </motion.div>
      </Col>
    </Row>
  </Container>
</motion.div>

      
{/* Countries We Serve */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    position: "relative",
    padding: "60px 20px",
    marginTop: "5px",
    marginBottom: "40px",
    textAlign: "center",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#0a0a23",
  }}
>
  {/* World Map Background */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${galaxy})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.15,
      zIndex: 0,
    }}
  ></div>

  <div style={{ position: "relative", zIndex: 1 }}>
    <motion.h1
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        color: "#fff",
        fontSize: "30px",
        fontWeight: "700",
        fontFamily: "'DM Serif Text', serif",
        marginBottom: "20px",
        textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
      }}
    >
      Countries We Serve
    </motion.h1>
    <AnimatedUnderline width="60px" delay={0.2} />

    <h3
      style={{
        color: "#fff",
        fontWeight: 600,
        fontSize: "16px",
        fontFamily: "'DM Serif Text', serif",
        marginBottom: "20px",
        textAlign: "center",
        textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
      }}
    >
      Click on any flag to see its price, process, and example details!
    </h3>

    {/* Gulf + Middle East */}
    <h4
      style={{
        fontFamily: "'DM Serif Text', serif",
        margin: "40px 0 20px",
        fontWeight: "700",
        color: "#fff",
        textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
      }}
    >
      Gulf & Middle East
    </h4>
    <Row className="justify-content-center">
      {[...COUNTRY_GROUPS["Gulf Countries"], ...COUNTRY_GROUPS["Middle East"]].map(
        (c, index) => (
          <Col key={c.name} xs={6} md={3} className="mb-3 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
onClick={() => openCountryModal(c)}


              style={{ cursor: "pointer" }}
            >
              <img
                src={c.flag}
                alt={c.name}
               style={{
    width: "120px",          // adjust width as needed
    height: "auto",          // maintain aspect ratio
    objectFit: "contain",    // ensures full image is visible
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    border: "2px solid rgba(119, 127, 135, 0.3)",
  }}
              />
              <p
                style={{
                  marginTop: "8px",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#fff",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                }}
              >
                {c.name}
              </p>
            </motion.div>
          </Col>
        )
      )}
    </Row>

    {/* Asian Countries */}
    <h4
      style={{
        fontFamily: "'DM Serif Text', serif",
        margin: "30px 0 20px",
        fontWeight: "700",
        color: "#fff",
        textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
      }}
    >
      Asian Countries
    </h4>
    <Row className="justify-content-center">
      {COUNTRY_GROUPS["Asian Countries"].map((c, index) => (
        <Col key={c.name} xs={6} md={3} className="mb-3 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
onClick={() => openCountryModal(c)}



            style={{ cursor: "pointer" }}
          >
            <img
              src={c.flag}
              alt={c.name}
                          style={{
    width: "120px",          // adjust width as needed
    height: "auto",          // maintain aspect ratio
    objectFit: "contain",    // ensures full image is visible
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    border: "2px solid rgba(119, 127, 135, 0.3)",
  }}
              />
    
            
            <p
              style={{
                marginTop: "8px",
                fontWeight: "600",
                fontSize: "14px",
                color: "#fff",
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              {c.name}
            </p>
          </motion.div>
        </Col>
      ))}
    </Row>
  </div>


</motion.div>



 {/* 3-Step Section - Responsive Vertical on Mobile */}
{/* 3-Step Section - Responsive Vertical on Mobile */}
<Container style={{ padding: "0 20px" }}>
  <div style={{ padding: "60px 20px 80px 20px", textAlign: "center", margin: 0 }}>
    {/* Heading */}
    <div style={{ display: "inline-block", position: "relative" }}>
      <h2 
        style={{ 
          fontFamily: "'DM Serif Text', serif",
          fontWeight: 800,
          fontSize: "2.5rem",
          color: "#1E2F4B",
          marginBottom: "10px"
        }}
      >
        Your Hassle-Free 3-Step Solution
      </h2>
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
    </div>

    <h4 style={{ 

      textAlign: "center", 
      marginTop:"8px",
      fontFamily: "'DM Serif Text', serif",
      fontWeight: 800,
      fontSize: "1.3rem",
      marginBottom: "60px",
      color: "#ee7e0eff"
    }}>
      Contact, confirm, complete: A three-step journey
    </h4>

    {/* Steps */}
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "row",
        flexWrap: "wrap", 
        gap: "40px",
        justifyContent: "center"
      }}
    >
 {THREE_STEPS.map((step, idx) => (
        <div 
          key={idx} 
          style={{ 
            flex: "1 1 300px", // allow shrink on mobile
            maxWidth: "350px", 
            textAlign: "center" 
          }}
        >
          {/* Icon */}
          <div style={{ marginBottom: "10px", fontSize: "3rem", color: "#1E2F4B" }}>
            {React.cloneElement(step.icon, { color: "#1E2F4B", size: 60 })}
          </div>

          {/* Step Number */}
          <p style={{ fontFamily: "'DM Serif Text', serif", fontWeight: 700, fontSize: "1.5rem", margin: "5px 0", color: "#ee7d0cff" }}>
            Step : {idx + 1}
          </p>

          {/* Title */}
          <h4 style={{ fontFamily: "'DM Serif Text', serif", fontWeight: 700, fontSize: "1.5rem", marginBottom: "10px", color: "#1E2F4B" }}>
            {step.title}
          </h4>

          {/* Description */}
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", lineHeight: 1.6, color: "#1E2F4B" }}>
            {step.desc}
          </p>
        </div>
      ))}

</div>
  </div>
</Container>

{/* Why Choose Us Section */}
   {/* Why Choose Us - Premium Gradient Cards */}
<motion.div 
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true }} 
  transition={{ duration: 0.6 }}
  style={{
    background: "#F5F7FA", // neutral section background
    padding: "80px 20px", 
  }}
>
  <Container>

<h2 style={{ 
  color: "#1E90FF", 
  fontWeight: 800, 
  fontFamily: "'DM Serif Text', serif" ,
  fontSize: "2.4rem", 
  marginBottom: "30px", 
  textAlign: "center", 
  position: "relative", 
  display: "inline-block"
}}>
  Why Choose Us
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
</h2>


    <Row className="justify-content-center">
      {[
        { title: "Trusted & Experienced", desc: "We are a UK government-approved service with years of specialised expertise, dedicated to providing reliable, professional, and efficient support for all your document legalisation and certification needs.", icon: "🏛️" },
        { title: "Fast & Efficient", desc: "We offer dependable apostille services, ensuring your important documents are legalised securely and accurately within 5–7 working days without compromising on quality or safety.", icon: "⚡" },
        { title: "Secure & Confidential", desc: "We manage your documents with the highest level of care and strict confidentiality, ensuring they are protected, secure, and handled professionally throughout the entire process.", icon: "🔒" },
        { title: "Client-focused Support", desc: "We provide expert guidance and hands-on assistance at every step of the process, ensuring you understand each stage and your documents are handled smoothly from start to finish.", icon: "🤝" },
      ].map((item, idx) => (
        <Col md={6} lg={3} key={idx} className="mb-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            style={{
              background: "linear-gradient(135deg, #1B3252 0%, #0D1B2A 100%)", // professional dark blue gradient
              padding: "30px 20px",
              borderRadius: "16px",
              boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              textAlign: "center",
              color: "#E0E6F0",
              transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 16px 32px rgba(0,0,0,0.12)",
              background: "linear-gradient(135deg, #1E3B60 0%, #0A1626 100%)" // slightly different gradient on hover
            }}
          >
            <div style={{
              fontSize: "2.5rem", 
              marginBottom: "15px", 
              color: "#FF7A33" // orange accent
            }}>
              {item.icon}
            </div>
            <h4 style={{ fontWeight: 700,        fontFamily: "'DM Serif Text', serif" ,
 color: "#FFB366", marginBottom: "12px" }}>
              {item.title}
            </h4>
            <p style={{ fontSize: "1rem",fontFamily: "'Open Sans', sans-serif" , lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
</motion.div>

{/* FAQ Section */}

{/* FAQ Section */}
<motion.div 
  initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }} 
  viewport={{ once: true }} 
  transition={{ duration: 0.6 }} 
  style={{ 
    background: "linear-gradient(135deg, #161F36 0%, #3C5490 45%, #1E2F4B 100%)", // smooth dark ashy blue gradient
    padding: "60px 20px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)" // subtle depth
  }}
  className="mb-5"
>
  <h2 style={{ 
    color: "#FF7A33", // orange heading for contrast
    fontWeight: 900, 
    fontSize: "2.2rem", 
    fontFamily: "'DM Serif Text', serif" ,
    marginBottom: "30px", 
    textAlign: "center", 
    letterSpacing: "1px" 
  }}>
    Frequently Asked Questions
  </h2>
  <FAQAccordion items={FAQ_ITEMS} />
</motion.div>


<div style={{ backgroundColor: "#f9f9f9", textAlign: "center", paddingBottom: "60px" }}>
<motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#ffa733" }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{
    padding: "12px 30px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "6px",
    background: "#ff8c00",
    color: "#fff",  // change from #fff to grey
    cursor: "pointer",
  }}
  onClick={() => {
    setShowWizardModal(true);  
    setShowModal(false);
  }}
>
  Ready? Start Now
</motion.button>

</div>
<CountryModal
  show={showModal}
  onClose={() => setShowModal(false)}
  country={selectedCountry}
/>

<WizardEnquiryModal
  show={showWizardModal}
  handleClose={() => setShowWizardModal(false)}
/>

    </div>
  );
}
