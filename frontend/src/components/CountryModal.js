// src/components/CountryModal.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import  { useEffect } from "react";



const CountryModal = ({ show, onClose, country }) => {
  // Always call hooks at the top
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // disable background scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [show]);

  if (!country) return null;


  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            zIndex: 1000,
    padding: "80px 15px 15px 15px", // add top padding to avoid navbar
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.02 }}
            initial={{ scale: 0.8, y: -50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: -50, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
style={{
  position: "relative",
  width: "95%",
  maxWidth: "900px",
  maxHeight: "90vh",
  overflowY: "auto",
  borderRadius: "16px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
  textAlign: "left",
  padding: "30px 40px",
  boxSizing: "border-box",

  // Softer gradient overlay for brighter image
  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${country.bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

    // Thicker, readable text
    color: "#fff",
    textShadow: "0px 2px 18px rgba(0,0,0,1)",
    WebkitTextStroke: "0.3px rgba(0,0,0,0.1)",
    fontWeight: 700,
}}


          >
            {/* Close Button */}
            <motion.div
              onClick={onClose}
              whileHover={{ scale: 1.2, rotate: 90 }}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: "#e3570bff",
              }}
            >
              <FaTimes />
            </motion.div>

            {/* Country Name */}
            <motion.h2
              style={{
                fontFamily: "'DM Serif Text', serif",
                fontSize: "2rem",
                fontWeight: 800,
                color: "#fdfdffff",
                marginBottom: "10px",
                textAlign: "center",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              {country.name}
            </motion.h2>

            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                height: "4px",
                width: "60px",
                background: "linear-gradient(90deg, #1E90FF, #FF7A33, #1E90FF)",
                margin: "0 auto 25px",
                borderRadius: "2px",
                transformOrigin: "center",
              }}
            />

            {/* Flag */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
              <motion.img
                src={country.flag}
                alt={country.name}
                style={{
                  width: "120px",
                  maxWidth: "70%",
                  objectFit: "contain",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                  border: "2px solid rgba(30,144,255,0.3)",
                }}
                animate={{
                  boxShadow: [
                    "0 6px 20px rgba(0,0,0,0.4), 0 0 15px rgba(30,144,255,0.5)",
                    "0 6px 25px rgba(0,0,0,0.4), 0 0 25px rgba(30,144,255,0.7)",
                    "0 6px 20px rgba(0,0,0,0.4), 0 0 15px rgba(30,144,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </div>
{/* Country Details with Frosted Glass Effect */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  style={{
    fontFamily: "'Open Sans', sans-serif",
    lineHeight: 1.6,
    textAlign: "left",

    // Frosted glass effect
    background: "rgba(0, 0, 0, 0.45)", // dark glass
    backdropFilter: "blur(2px)", // frosty blur
    WebkitBackdropFilter: "blur(7px)", // Safari support
    borderRadius: "12px",
    padding: "20px",
    marginTop: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    color: "#fff", // ensure text stays readable
  }}
>
 
 
              {/* Legalization Process */}
              <h2 style={{ color: "#fdfaf8ff",   textShadow: "0px 2px 8px rgba(0,0,0,0.7)",fontFamily: "'DM Serif Text', serif" ,
 marginBottom: "10px" }}>Legalisation Process:</h2>
              <ul>
                {Array.isArray(country.details.process) &&
                  country.details.process.map((stepObj) => (
                    <motion.li
                      key={stepObj.step}
                      custom={stepObj.step}
                      initial="hidden"
                      animate="visible"
                      variants={listVariants}
                      style={{ marginBottom: "12px" }}
                    >
                      <strong>{stepObj.step}. {stepObj.title}</strong>
                      <p style={{ margin: "5px 0 0 0" ,  textShadow: "0px 2px 8px rgba(0,0,0,0.7)" }}>{stepObj.description}</p>
                    </motion.li>
                  ))
                }
              </ul>

              {/* Documents Required */}
              <h3 style={{ color: "#FF7A33",     textShadow: "0px 2px 8px rgba(0,0,0,0.7)",     fontFamily: "'DM Serif Text', serif" ,
 marginBottom: "10px" }}>Documents Required:</h3>
              <ul>
                {Array.isArray(country.details.documents) &&
                  country.details.documents.map((doc, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={listVariants}
                      style={{ marginBottom: "8px",  textShadow: "0px 2px 8px rgba(0,0,0,0.7)" }}
                    >
                      {doc}
                    </motion.li>
                  ))
                }
              </ul>

              {/* Pricing */}
<h3 style={{ color: "#FF7A33",   textShadow: "0px 2px 8px rgba(0,0,0,0.7)",       fontFamily: "'DM Serif Text', serif" ,
 marginBottom: "10px" }}>Pricing:</h3>
{Array.isArray(country.details.pricing) ? (
  <ul>
    {country.details.pricing.map((price, index) => (
      <motion.li
        key={index}
        custom={index}
        initial="hidden"
        animate="visible"
        variants={listVariants}
        style={{ marginBottom: "8px"  ,textShadow: "0px 2px 8px rgba(0,0,0,0.7)" }}
      >
        {price}
      </motion.li>
    ))}
  </ul>
) : (
  <p         style={{textShadow: "0px 2px 8px rgba(0,0,0,0.7)" }}
>{country.details.pricing}</p>
)}


              {/* Estimated Processing */}
              {country.details.EstimatedProcessing && (
                <>
                  <h3 style={{ color: "#FF7A33",     textShadow: "0px 2px 8px rgba(0,0,0,0.7)",     fontFamily: "'DM Serif Text', serif" ,
 marginBottom: "10px" }}>Estimated Processing:</h3>
                  {Array.isArray(country.details.EstimatedProcessing) ? (
                    <ul>
                      {country.details.EstimatedProcessing.map((note, index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          variants={listVariants}
                          style={{ marginBottom: "8px",  textShadow: "0px 2px 8px rgba(0,0,0,0.7)" }}
                        >
                          {note}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p   style={{textShadow: "0px 2px 8px rgba(0,0,0,0.7)" }}>{country.details.EstimatedProcessing}</p>
                  )}
                </>
              )}

            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountryModal;
