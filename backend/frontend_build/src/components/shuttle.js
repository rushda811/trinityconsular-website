// src/components/shuttle.js
import React, { useState } from "react";
import shuttle from "../assets/shuttle.jpeg"
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import { FaRegCalendarCheck, FaChair, FaMapMarkerAlt } from "react-icons/fa";
import WizardEnquiryModal from "./WizardEnquiryModal";

const THREE_STEPS = [
  {
    title: "Easy Booking",
    desc: "Book your shuttle in just a few clicks via our website or app. Choose your pickup location, time, and destination effortlessly.",
    icon: <FaRegCalendarCheck size={60} color="#000" />,   // Big black icon
  },
  {
    title: "FastTrack Document Courier Service",
    desc: "We specialise in secure and efficient collection, delivery, and return of your important documents. Our service includes picking up your documents, handling their delivery to the Foreign, Commonwealth & Development Office (FCDO), and returning them promptly.",
    icon: <FaChair size={60} color="#000" />,
  },
  {
    title: "On-Time Drop-off",
    desc:"Experience spacious seating, advanced climate control, and meticulously clean vehicles, all thoughtfully designed to provide a comfortable, relaxing, and enjoyable journey from start to finish.",
    icon: <FaMapMarkerAlt size={60} color="#000" />,
  },
];
// FAQ items
const FAQ_ITEMS = [
  {
    question: "How quickly can you submit documents?",
    answer:
      "Most submissions to the FCDO are made the same or next working day, ensuring minimal delays for our clients.",
  },
  {
    question: "Are my documents handled securely?",
    answer:
      "Yes — every delivery is sealed and monitored to maintain confidentiality and prevent tampering.",
  },
  {
    question: "Can you handle bulk or corporate submissions?",
    answer:
      "Absolutely. We frequently represent businesses, law firms, and agencies requiring multiple documents processed efficiently.",
  },
  {
    question: "Do you operate nationwide?",
    answer:
      "We provide services across the UK, with courier support available for clients outside London.",
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

// Main Shuttle Service Component
const ShuttleService = () => {
  const [showWizardModal, setShowWizardModal] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#F0F6FA",
        minHeight: "100vh",
        paddingBottom: "60px",
      }}
    >
   
         {/* HERO SECTION */}
         <motion.div
           initial={{ opacity: 0, y: -30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           style={{
            backgroundImage: `linear-gradient(135deg, rgba(13,27,42,0.8) 0%, rgba(27,50,82,0.6) 50%, rgba(10,22,38,0.8) 100%), url(${shuttle})`,
             color: "#fff",
  backgroundSize: "cover",
  backgroundPosition: "center", // try "top center" if you want
  backgroundRepeat: "no-repeat",
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
             fontFamily: "'DM Serif Text', serif" ,
             fontWeight: 900,
             lineHeight: 1.2,
             marginBottom: "20px",
             background: "linear-gradient(270deg, #1E90FF, #FF7A33, #1E90FF)", // initial gradient
             backgroundSize: "600% 600%", // make gradient larger for smooth animation
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
             animation: "gradientShift 6s ease infinite"
           }}
         >
           Shuttle Service 
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
          fontFamily: "'Open Sans', sans-serif" ,
               fontSize: "1.25rem",
               color: "#E0E6F0",
               maxWidth: "700px",
               margin: "0 auto",
               lineHeight: 1.8,
             }}
           >
In addition to handling personal and business documents, we also act as trusted representatives for other companies, securely carrying and submitting documents to the FCDO on their behalf. With our expertise and direct registration, we streamline the process and give our clients complete peace of mind that their documents are processed accurately and efficiently.           </motion.p>
         </motion.div>
       {/* VAT Section - Page Background */}
{/* VAT Section - Fully Responsive */}
<motion.div 
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true }} 
  transition={{ duration: 0.6 }}
  style={{
    backgroundColor: "#F0F6FA", // same as page background
    padding: "40px 20px",
    borderRadius: "12px",
    maxWidth: "900px",
    margin: "40px auto",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    textAlign: "left",
    width: "90%", // responsive width
  }}
>
  <h4 style={{
    fontWeight: 700,
    fontFamily: "'DM Serif Text', serif",
    color: "#1A3C8A",
    fontSize: "clamp(1.5rem, 2.2vw, 1.8rem)", // scales between mobile and desktop
    marginBottom: "30px",
    textAlign: "center",
    position: "relative",
    display: "inline-block"
  }}>
    VAT (Value Added Tax)
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
  </h4>

  <p style={{ 
    fontSize: "clamp(0.95rem, 2vw, 1rem)", 
    lineHeight: 1.6, 
    marginBottom: "15px" ,
        fontFamily: "'DM Serif Text', serif",

  }}>
    VAT is a standard UK tax of 20% applied to most services and goods. With us, it applies only to our service fees, never to disbursements like government or courier charges.
  </p>

  <p style={{ 
    fontSize: "clamp(0.95rem, 2vw, 1rem)", 
    lineHeight: 1.6, 
        fontFamily: "'DM Serif Text', serif",
    marginBottom: "15px" 
  }}>
    If you’re using our services from abroad and aren’t a UK resident, VAT won’t be added—keeping things simple and transparent.
  </p>

  <p style={{ 
        fontFamily: "'DM Serif Text', serif",
    fontSize: "clamp(0.95rem, 2vw, 1rem)", 
    lineHeight: 1.6 
  }}>
    We’re fully VAT-registered (<span style={{ fontWeight: 700, color: "#FF7A33" }}>VAT No:496 7937 11</span>), so you can rest assured every charge is clear, accurate, and compliant. With us, there are no hidden fees—just smooth, professional service from start to finish.
  </p>
</motion.div>

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
        { title: "Fast & Efficient", desc: "We offer fast, next-day apostille services for urgent requests, ensuring your important documents are legalised promptly without compromising on accuracy or security.", icon: "⚡" },
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
            <h4 style={{ fontWeight: 700,fontFamily: "'DM Serif Text', serif" , color: "#FFB366", marginBottom: "12px" }}>
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

        {/* CTA Button */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
          <Button 
            style={{
              backgroundColor: "#FF7A33",
              border: "none",
              padding: "12px 30px",
              fontWeight: "700",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
              onClick={() => setShowWizardModal(true)}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Get Started
          </Button>
        </motion.div>
      <WizardEnquiryModal 
  show={showWizardModal} 
  handleClose={() => setShowWizardModal(false)} 
/>

    </div>
  );
};

export default ShuttleService;
