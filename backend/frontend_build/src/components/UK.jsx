// src/components/UKFinal.jsx
import React, { useState } from "react";
import cert1 from "../assets/cert1.jpg"
import ukser from "../assets/UKSER.jpg"
import cert2 from "../assets/cert2.jpg"
import WizardEnquiryModal from "./WizardEnquiryModal";
import cert3 from "../assets/cert3.jpg"
import cert4 from "../assets/cert4.jpg"
import { useNavigate } from "react-router-dom";
import apostille1 from "../assets/apostille1.jpg"; // Ensure you have an appropriate image in assets
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaWpforms, FaClipboardCheck, FaShippingFast } from "react-icons/fa";


const certs = [cert1, cert2, cert3, cert4];
const THREE_STEPS = [
  {
    title: "Contact Us",
    desc: "Get in touch with us easily through our secure online form or by giving us a call. Our dedicated and friendly team carefully reviews every request and responds promptly to ensure you get the assistance you need without any delays.",
    icon: <FaWpforms size={60} color="#000" />,
  },
  {
    title: "Confirm Requirements",
    desc: "We carefully review your documents to confirm exactly what’s required and provide clear, step-by-step guidance, making the entire process simple and stress-free for you.",
    icon: <FaClipboardCheck size={60} color="#000" />,
  },
  {
    title: "Complete the Process",
    desc: "We take care of the entire apostille process, including document verification, secure courier handling, and timely delivery—ensuring you receive your verified documents safely, securely, and right on schedule.",
    icon: <FaShippingFast size={60} color="#000" />,
  },
];

const FAQ_ITEMS = [
  { question: "What is a UK Apostille?", answer: "A UK Apostille is a government certificate that authenticates a document for use in a foreign country that is a signatory to the Hague Apostille Convention." },
  { question: "Which documents can be apostilled?", answer: "Common documents include birth certificates, marriage certificates, degrees, cooperate documents, and powers of attorney." },
  { question: "How long does the process take?", answer: "We are an approved Foreign Office provider of next-day apostille services." },
  { question: "Can I apostille documents for any country?", answer: "Apostille is valid for countries under the Hague Convention. Non-member countries need embassy legalisation." },
  { question: "Is courier delivery available?", answer: "Yes, we offer secure courier delivery for your apostilled documents worldwide." },
  { question: "Do I need original documents?", answer: "Most apostilles require original documents, though some certified copies may be accepted depending on the authority." },
  { question: "Is my data kept confidential?", answer: "Absolutely. We follow strict data protection policies to keep your personal information safe." },
  { question: "Can businesses use your services?", answer: "Yes. We assist both individuals and corporate clients with document legalisation and apostille services." },
  { question: "How do I track my document?", answer: "You will receive a tracking ID after submission and can monitor the status through our secure portal." },
  { question: "What if my document is rejected?", answer: "We guide you through corrections or resubmission if any document is rejected by the authorities." },
];


// Sample card data
const cardData = [
  {
    title: "PUBLIC",
    rate: "£82",
    days: "2-3 Working Days",
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
    days: "2-3 Working Days",
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
    title: "cooperate",
    rate: "£82",
    days: "2-3 Working Days",
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

// FAQ Accordion with smooth open/close using layout
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

const UKApostilleFinal = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
         backgroundImage: `linear-gradient(135deg, rgba(13,27,42,0.8) 0%, rgba(27,50,82,0.6) 50%, rgba(10,22,38,0.8) 100%), url(${ukser})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  padding: "60px 20px",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <motion.h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontFamily: "'DM Serif Text', serif",
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: "20px",
            background: "linear-gradient(270deg, #1E90FF, #FF7A33, #1E90FF)",
            backgroundSize: "600% 600%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 6s ease infinite",
          }}
        >
          UK Apostille Services
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
            fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)",
            color: "#E0E6F0",
                      fontFamily: "'Open Sans', sans-serif" ,

            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          We simplify the UK Apostille process for individuals and businesses, ensuring fast, secure, and accurate legalisation of your documents. Our team guides you step by step, from document submission to official verification, so you can save time and avoid errors. With trusted government-approved services and worldwide courier delivery, we make sure your documents reach their destination safely and on time.
        </motion.p>
      </motion.div>


{/* Apostille Sample Section */}
<Container style={{ padding: "40px 20px", maxWidth: "1100px" }}>
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
    }}
  >
    {/* --- Full-width Apostille Description --- */}
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "clamp(1.6rem, 4vw, 1.9rem)",
          fontWeight: 800,
          color: "#1E2F4B",
          marginBottom: "15px",
        }}
      >
        What is a UK Apostille Stamp?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: "1rem",
                    fontFamily: "'Open Sans', sans-serif" ,

          lineHeight: 1.7,
          color: "#333",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        A <strong>UK Apostille Stamp</strong> is an official certificate issued by the UK 
        Foreign, Commonwealth &amp; Development Office (FCDO). It confirms that the{" "}
        <strong>signature, seal, or stamp</strong> on a document is genuine and that it was 
        signed by a recognised UK authority such as a public official, solicitor, or notary. 
        The Apostille makes your document valid for use in countries that are part of the{" "}
        <strong>Hague Apostille Convention</strong>.
      </motion.p>
    </div>

    {/* --- Two-column Sample Layout --- */}
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "40px",
        justifyContent: "center",
      }}
    >
      {/* Image Column */}
      <div style={{ flex: "1 1 350px", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.2rem)",
            fontFamily: "'DM Serif Text', serif",
            fontWeight: 900,
            color: "#1E2F4B",
            marginBottom: "20px",
            background: "linear-gradient(90deg, #1E90FF, #FF7A33, #1E90FF)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 4s ease infinite",
          }}
        >
          Apostille Sample
        </motion.h2>

        <motion.img
          src={apostille1} // make sure your import is correct
          alt="Apostille Sample"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "16px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* Content Column */}
      <div
        style={{
          flex: "1 1 350px",
          color: "#1E2F4B",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(1.6rem, 4vw, 1.8rem)",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Sample UK Apostille Certificate
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: "1rem", lineHeight: 1.7,          fontFamily: "'Open Sans', sans-serif" ,
 marginBottom: "15px" }}
        >
          A UK Apostille is an official certificate issued by the UK Foreign, Commonwealth 
          &amp; Development Office (FCDO). It confirms the authenticity of your documents — 
          including the signature, seal, or stamp of a recognised UK authority — so they are legally accepted abroad.
          <br /><br />
          The sample shown here highlights the official format, seal, and certification style used in the legalisation process.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: "1rem",          fontFamily: "'Open Sans', sans-serif" ,
 lineHeight: 1.7 }}
        >
          With our service, you don’t need to worry about the complexities of the procedure. 
          We take care of everything — from document verification and submission to the FCDO, 
          through to secure courier collection and delivery. Your documents are processed quickly, 
          safely, and returned fully legalised, ready for international use with complete peace of mind.
        </motion.p>
      </div>
    </div>
  </motion.div>

  {/* Gradient Animation Keyframes */}
  <style>
    {`
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @media (max-width: 768px) {
        div[style*="flex-direction: row"] {
          flex-direction: column !important;
        }
      }
    `}
  </style>
</Container>

{/* Certificates Section with Frosted Glass Overlay */}
<Container style={{ padding: "60px 20px" }}>
  <h2
    style={{
      textAlign: "center",
      fontFamily: "'DM Serif Text', serif",
      fontWeight: 800,
      fontSize: "2.5rem",
      color: "#1E2F4B",
      marginBottom: "40px",
    }}
  >
    Our Popular Apostille Legalisation Services
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      justifyContent: "center",
    }}
  >
    {certs.map((img, idx) => {
      const smallTexts = [
        "Degree Certificates",
        "Birth Certificates",
        "Qualification Certificates",
        "Power of Attorney",
      ];
      return (
        <motion.div
          key={idx}
          style={{
            position: "relative",
            flex: "1 1 250px",
            maxWidth: "280px",
            height: "400px",
            borderRadius: "20px",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 20px 60px rgba(0, 144, 255, 0.4), 0 20px 40px rgba(255, 122, 51, 0.3)",
          }}
        >
          {/* Certificate Image */}
          <img
            src={img}
            alt={`Certificate ${idx + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Frosted Glass Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "25%", // bottom 25%
              background: "rgba(173, 216, 230, 0.35)",
              backdropFilter: "blur(10px) saturate(150%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#1E2F4B",
              fontWeight: 700,
              fontFamily: "'DM Serif Text', serif",
              textAlign: "center",
              fontSize: "1.5rem",
            }}
          >
            {/* Small Text Above Price */}
            <div style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "4px" }}>
              {smallTexts[idx]}
            </div>

            {/* Price */}
            £82
            <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>
              including VAT
            </span>

            {/* Shimmer Animation */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: "-150%",
                width: "150%",
                height: "100%",
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)",
                transform: "skewX(-20deg)",
              }}
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      );
    })}
  </div>
</Container>




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
    UK  Apostille  Categories
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
                  color: "#f9fcfaff",
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
              onClick={() => setShowModal(true)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Col>
    ))}
  </Row>

  {/* Modal */}
  <WizardEnquiryModal show={showModal} handleClose={() => setShowModal(false)} />

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


  {/* 3-Step Section - Responsive Vertical on Mobile */}
<Container style={{ padding: "0 20px" }}>
  <div style={{ padding: "60px 20px 80px 20px", textAlign: "center", margin: 0 }}>
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
        flexDirection: "row", // default horizontal on desktop
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

      {/* Why Choose Us - Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: "#F5F7FA",
          padding: "80px 10px",
        }}
      >
        <Container>
          <h2 style={{ 
            color: "#1E2F4B",
            fontFamily: "'DM Serif Text', serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
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
              { title: "Fast & Efficient", desc: "We offer reliable apostille services, ensuring your important documents are legalised securely and accurately within 2–3 working days without compromising on quality or safety.", icon: "⚡" },
              { title: "Secure & Confidential", desc: "We manage your documents with the highest level of care and strict confidentiality, ensuring they are protected, secure, and handled professionally throughout the entire process.", icon: "🔒" },
              { title: "Client-focused Support", desc: "We provide expert guidance and hands-on assistance at every step of the process, ensuring you understand each stage and your documents are handled smoothly from start to finish.", icon: "🤝" },
            ].map((item, idx) => (
              <Col xs={12} md={6} lg={3} key={idx} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  style={{
                    background: "linear-gradient(135deg, #1B3252 0%, #0D1B2A 100%)",
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
                    background: "linear-gradient(135deg, #1E3B60 0%, #0A1626 100%)"
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "15px", color: "#FF7A33" }}>{item.icon}</div>
                  <h4 style={{ fontWeight: 700, fontFamily: "'DM Serif Text', serif", color: "#FFB366", marginBottom: "12px", fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}>{item.title}</h4>
                  <p style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>


      {/* FAQ Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }} 
        style={{ background: "linear-gradient(135deg, #161F36 0%, #3C5490 45%, #1E2F4B 100%)", padding: "40px 20px", borderRadius: "20px", boxShadow: "0 12px 30px rgba(0,0,0,0.2)", margin: "0 auto 60px auto", maxWidth:"1000px"}}
      >
        <h2 style={{ color: "#ee834aff", fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 2.2rem)", fontFamily: "'DM Serif Text', serif", marginBottom: "30px", textAlign: "center", letterSpacing: "1px" }}>
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={FAQ_ITEMS} />
      </motion.div>

      {/* Contact CTA */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-5 mb-5">
        <Button
          style={{
            backgroundColor: "#FF7A33",
            border: "none",
            padding: "12px 30px",
            fontWeight: "700",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            width: "clamp(150px, 60%, 300px)"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          onClick={() => navigate("/contact")}        >
          Get Expert Advise
        </Button>
      </motion.div>

    </div>
  );
};

export default UKApostilleFinal;
