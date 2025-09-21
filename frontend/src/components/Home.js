import { Link } from "react-router-dom";
import homeimage from "../assets/homeimage.jpeg";
import dhl from "../assets/dhl.webp";
import degree from "../assets/degree.jpg";
import birth from "../assets/birth.jpg";
import london from "../assets/london.webp";
import pg from "../assets/pg.jpg";
import poa from "../assets/poa.jpg";
import { motion } from "framer-motion";
import worldmap from "../assets/worldmap.jpg";
import WizardEnquiryModal from "./WizardEnquiryModal";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaCertificate,
  FaLandmark,
  FaPenFancy,
  FaPaperPlane,
  FaGlobe,
  FaCheckCircle,
  FaBuilding,
  FaUsers,
  FaBus,
} from "react-icons/fa";

import bgApostile from "../assets/bgappostile.webp";

const iconMap = {
  FaCertificate: FaCertificate,
  FaLandmark: FaLandmark,
  FaPenFancy: FaPenFancy,
  FaPaperPlane: FaPaperPlane,
  FaGlobe: FaGlobe,
  FaCheckCircle: FaCheckCircle,
  FaBuilding: FaBuilding,
  FaUsers: FaUsers,
  FaBus: FaBus,
};

const certificates = [
  {
    img: degree,
    type: "Apostilled",
    caption: "Degree Certificate – Apostilled",
  },
  {
    img: birth,
    type: "Embassy Legalised",
    caption: "Birth Certificate – Embassy Legalised",
  },
  {
    img: pg,
    type: "Embassy Legalised",
    caption: "postgraduation certificate  – Embassy Legalised",
  },
  {
    img: poa,
    type: "Apostilled",
    caption: "Power of Attorney – Apostilled",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function FadeSection({ children, delay = "0s" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}`,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const duration = 3000;
          const intervalTime = 20;
          const steps = duration / intervalTime;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(Math.floor(start));
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, started]);

  return (
    <Col md={3} style={{ minWidth: "150px" }} ref={ref} className="animated-counter">
          <motion.div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#eb7704ff" }}
      animate={count > 0? {scale:[1,1.3,1]}: {scale:1}}
      transition={{duration:0.4,type:"tween", stiffness:300}}>
        {count.toLocaleString()}+
      </motion.div>
      <div style={{ fontSize: "1rem", color: "#555", marginTop: "10px" }}>{label}</div>
      
    </Col>
  );
}

function Home() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const whoRef = useRef(null);
  const [whoVisible, setWhoVisible] = useState(false);
  const [services, setServices] = useState([]);


useEffect(() => {
  fetch("https://trinityconsular-website.onrender.com/api/services/")
    .then((res) => res.json())
    .then((data) => setServices(data))
    .catch((err) => console.error("Error loading services:", err));
}, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setWhoVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (whoRef.current) observer.observe(whoRef.current);
    return () => observer.disconnect();
  }, []);

  const gradientStyle = {
    background:
      "linear-gradient(270deg, #1D2D50, #264653, #2563EB, #5B87C7)",
    backgroundSize: "400% 100%",
    color: "#fff",
    fontWeight: "bold",
    padding: "0.8rem 1.5rem",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    animation: "gradientMove 4s linear infinite",
  };

  useEffect(() => {
    function handleResize() {
      const wrapper = document.getElementById("scale-wrapper");
      if (!wrapper) return;

      const screenWidth = window.innerWidth;
   
wrapper.style.transform = "none";
wrapper.style.width = "100%";
wrapper.style.margin = "0 auto";
wrapper.style.transformOrigin = "top center";

      // Floating icons
      const icons = document.querySelectorAll(".float-icon");
      icons.forEach((icon, i) => {
        if (screenWidth < 768) {
          icon.style.fontSize = `${12 + i}px`;
          icon.style.left = `${5 + i * 10}%`;
        } else {
          icon.style.fontSize = `${16 + i * 2}px`;
          icon.style.left = `${5 + i * 15}%`;
        }
      });

      // Counters
      const counters = document.querySelectorAll(".animated-counter div:first-child");
      counters.forEach((counter) => {
        if (screenWidth < 768) counter.style.fontSize = "2rem";
        else counter.style.fontSize = "2.5rem";
      });

      // Service cards
      const cards = document.querySelectorAll(".service-card");
      cards.forEach((card) => {
        if (screenWidth < 768) {
          card.style.width = "90%";
          card.style.margin = "0 auto 20px";
        } else {
          card.style.width = "250px";
          card.style.margin = "0 auto";
        }
      });

      // Hero/About text
      const responsiveTexts = document.querySelectorAll(".responsive-text");
      responsiveTexts.forEach((el) => {
        if (screenWidth < 768) el.style.fontSize = el.dataset.mobile;
        else el.style.fontSize = el.dataset.desktop;
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
  id="scale-wrapper"
  style={{
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "0 auto",
    padding: 0,
    overflow: "hidden",
    minHeight: "100vh",
  }}
>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#E0EDF9",
          backgroundImage: `url(${bgApostile})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          padding: window.innerWidth < 768 ? "50px 15px 30px" : "100px 20px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <FadeSection>
            <h1
              className="responsive-text"
              data-desktop="3rem"
              data-mobile="2rem"
              style={{
                fontWeight: "bold",
                fontFamily: "'DM Serif Text', serif" ,
                color: "#f5f5f5",
                marginBottom: "20px",
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              One stop Apostille services, Embassy Legalisation & Secure Shuttle Service
            </h1>
          </FadeSection>
          <FadeSection delay="0.2s">
            <p
              className="responsive-text"
              data-desktop="1.2rem"
              data-mobile="1rem"
              style={{
                color: "white",
                  fontFamily: "'Open Sans', sans-serif" ,
                textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                maxWidth: "700px",
                margin: "0 auto 30px",
                lineHeight: "1.8",
              }}
            >
              We specialise in authenticating personal, corporate, and legal documents with speed, accuracy, and full compliance. From obtaining apostilles to completing embassy legalisation and delivering bulk documents securely, our team ensures every step is handled with care, confidentiality, and efficiency — saving you time and giving you peace of mind.
            </p>
          </FadeSection>
          <FadeSection delay="0.4s">
            <Link to="/contact">
              <Button
                style={{
                  ...gradientStyle,
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  padding: "0.8rem 1.5rem",
                }}
              >
                Get in Touch
              </Button>
            </Link>
          </FadeSection>
        </Container>
      </section>

      {/* About Section */}
      <section style={{ padding: window.innerWidth < 768 ? "40px 15px" : "80px 20px"
, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "12px" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <div ref={whoRef} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "25px",
                      borderRadius: "12px",
                      marginRight: "20px",
                      alignSelf: "stretch",
                      background: "linear-gradient(180deg, orange, yellow, orange)",
                      backgroundSize: "400% 400%",
                      animation: "verticalGradient 8s linear infinite",
                    }}
                  ></div>
                  <div>
                    <h2
                      style={{
                        fontWeight: "bold",
                        color: "#1A3C8A",
                        fontFamily: "'DM Serif Text', serif" ,
                        marginBottom: "20px",
                        transform: whoVisible ? "translateX(0)" : "translateX(-50px)",
                        opacity: whoVisible ? 1 : 0,
                        transition: "all 1.5s ease",
                        fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      }}
                    >
                      Who We Are
                    </h2>
<p
  style={{
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
    color: "black",
    lineHeight: "1.7",
    transform: whoVisible ? "translateX(0)" : "translateX(-50px)",
    opacity: whoVisible ? 1 : 0,
    transition: "all 1.5s ease 0.3s",
  }}
>
  We are an England and Wales registered consular service provider{" "}
  <span style={{ fontWeight: "bold", color: "#FF7A33" }}>
    (Companies House number 14239959)
  </span>
  , supporting both individuals and companies in authenticating official documents. As an{" "}
  <span
    style={{
      fontWeight: "bold",
      position: "relative",
      display: "inline-block",
      marginRight: "6px",
    }}
  >
    approved Foreign Office provider of next-day apostille services.
    <span
      style={{
        position: "absolute",
        left: 0,
        bottom: -3,
        width: "100%",
        height: "3px",
        backgroundColor: "orange",
      }}
    ></span>
  </span>{" "}
  We ensure every document—whether a single apostille or a full batch securely delivered to the FCDO—is processed with speed, compliance, and confidentiality. You can rely on us for clear communication, timely updates, and complete transparency throughout the entire authentication process. Discover why individuals, businesses, and legal professionals across the UK trust Trinity Consular.
</p>


                  </div>
                </div>
                <FadeSection delay="0.5s">
                  <Button style={{ marginTop: "30px", ...gradientStyle }} onClick={() => (window.location.href = "/about")}>
                    More About Us
                  </Button>
                </FadeSection>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
  <section
  style={{
    backgroundColor: "#E0EDF9",
    backgroundImage: `url(${worldmap})`,     // <-- added
    backgroundSize: "cover",             // <-- makes it fill
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: window.innerWidth < 768 ? "40px 15px" : "80px 20px"
  }}
>

        <Container>
          <FadeSection>
    <div style={{ textAlign: "center" }}>
     <h2
  style={{
    fontSize: "2.5rem",
    fontFamily: "'DM Serif Text', serif",
    marginBottom: "50px",
    textAlign: "center",
    fontWeight: "bold",
    position: "relative",
    display: "inline-block" // important for underline positioning
  }}
>
  <span style={{ color: "#ffff", fontWeight: "bold" }}>What we</span>&nbsp;
  <span
    style={{
      color: "white",
      fontWeight: "bold"
    }}
  >
    Offer
  </span>

  {/* Animated gradient underline (same as CTA) */}
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
</div>

          </FadeSection>
          <Row className="justify-content-center" style={{ gap: "30px" }}>
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || FaCertificate;
              const serviceLinks = {
                "UK Apostille": "/uk-apostille",
                "Embassy Legalisation": "/embassy-legalisation",
                "About Us": "/about",
                "Shuttle Service": "/shuttle-service",
              };
              const linkTo = serviceLinks[service.title] || "/";

              return (
                <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                  <FadeSection delay={`${idx * 0.2}s`}>
            <Card
  className="service-card"
  style={{
    border: "none",
    borderRadius: "12px",
    height: "100%",
    textAlign: "center",
    paddingTop: "20px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // keep only transform/box-shadow for hover
    width: "250px",
    margin: "0 auto",
    background: "linear-gradient(135deg, #1E3A8A, #2563EB, #3B82F6)", // fixed blue gradient
    color: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
    e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.2)";
    // removed background change on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
    // removed background change on leave
  }}
>
  <div style={{ marginBottom: "15px" }}>
    <IconComponent size={30} color="#FF914D" />
  </div>
  <Card.Body>
    <Card.Title style={{ fontWeight: "bold", fontFamily: "'DM Serif Text', serif", color: "#fff" }}>
      {service.title}
    </Card.Title>
    <Card.Text style={{ color: "white", fontFamily: "'Open Sans', sans-serif" }}>
      {service.description}
    </Card.Text>
    <Link to={linkTo} className="learn-more-link">
      Learn More
      <span className="learn-more-underline"></span>
    </Link>
  </Card.Body>
</Card>

                  </FadeSection>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Why Trinity Consular */}
      <section style={{ backgroundColor: "#ffffffff", padding: window.innerWidth < 768 ? "40px 15px" : "100px 20px"
, textAlign: "center" }}>
        <FadeSection>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "'DM Serif Text', serif" ,fontWeight: "bold", color: "#1A3C8A", marginBottom: "40px", position: "relative", display: "inline-block" }}>
            Why Trinity Consular?
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
  />          </h2>
<div
  style={{
    display: window.innerWidth < 768 ? "grid" : "flex",
    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : undefined,
    justifyContent: "center",
    alignItems: "center",
    justifyItems: window.innerWidth < 768 ? "center" : undefined,
    gap: window.innerWidth < 768 ? "30px" : "0px",
    flexWrap: window.innerWidth < 768 ? "unset" : "wrap",
    marginTop: "50px",
  }}
>
  <AnimatedCounter end={10000|| 0} label="Documents Processed" />
  <AnimatedCounter end={1000} label="Satisfied Clients" />
  <AnimatedCounter end={50} label="Companies Served" />
  <AnimatedCounter end={4} label="Years of Experience" />
</div>

        </FadeSection>
      </section>
<section
  style={{
    padding: window.innerWidth < 768 ? "40px 15px" : "80px 20px",
    backgroundColor: "#d5e4f3ff",
    backgroundImage: `linear-gradient(rgba(213, 228, 243, 0.33), rgba(213, 228, 243, 0.42)), url(${london})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <h2
      style={{
        
        fontSize: "2.5rem",
        fontFamily: "'DM Serif Text', serif",
        marginBottom: "10px",
        fontWeight: "bold",
        color: "#08215cff",
        display: "inline-block",
        position: "relative",
      }}
    >
      Our Most Popular Work Examples
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          bottom: -6,
          height: "4px",
          width: "100%",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #1E90FF, #FF7A33, #1E90FF)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </h2>
    <p style={{ fontSize: "1.3rem", fontFamily: "'Open Sans', sans-serif" , color: "black", marginTop: "10px" }}>
      Trusted documents handled with professionalism
    </p>
  </div>

  {/* Grid for images */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)",
      gap: "20px",
      justifyItems: "center",
    }}
  >
    {certificates.map((item, idx) => (
      <div
  key={idx}
  style={{
    width: "100%",
    maxWidth: "250px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative", // required for the label
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
  }}
>
  {/* Always-visible label */}
  <div
    style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      backgroundColor: "#ff5c5c",
      color: "#fff",
      padding: "5px 10px",
      fontWeight: "bold",
      fontSize: "13px",
      borderRadius: "5px",
      zIndex: 2,
    }}
  >
    {item.type}
  </div>

  <img
    src={item.img}
    alt={item.caption}
    loading="lazy"
    style={{
      width: "100%",
      height: "370px",
      objectFit: "cover",
      display: "block",
    }}
  />
<div
  style={{
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
    color: "#031938", // text color
    padding: "10px 0",
    backgroundColor: "rgba(255, 255, 255, 0.6)", // light semi-transparent background
    backdropFilter: "blur(6px)",                // frosted glass effect
    WebkitBackdropFilter: "blur(6px)",         // Safari support
    borderRadius: "0 0 12px 12px",             // rounded bottom corners
  }}
>
  {item.caption}
</div>
</div>

    ))}
  </div>
</section>


{/* Secure Worldwide Couriering Section — Dark Variant (Matched Underline) */}
<section
  style={{
    padding: window.innerWidth < 768 ? "40px 15px" : "60px 20px",
    backgroundColor: "#122649ff", // deep blue
    color: "#fff",
  }}
>
  <Container>
    <div
      style={{
        display: "flex",
        flexDirection: window.innerWidth < 768 ? "column" : "row", // stack on mobile
        alignItems: "center",
        gap: window.innerWidth < 768 ? "30px" : "50px", // spacing between text & image
      }}
    >
      {/* Text Section */}
      <div style={{ flex: 1, textAlign: window.innerWidth < 768 ? "center" : "left" }}>
        <FadeSection>
          <h2
            className="section-heading"
            style={{
              fontFamily: "'DM Serif Text', serif",
              fontSize: window.innerWidth < 768 ? "1.8rem" : "2.2rem",
              fontWeight: "bold",
              color: "#FFA500",
              marginBottom: "20px",
              position: "relative",
              display: "inline-block",
            }}
          >
            Secure Worldwide Couriering
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                bottom: -6,
                height: "4px",
                width: "100%",
                borderRadius: "2px",
                background: "linear-gradient(90deg, #1E90FF, #FF7A33, #1E90FF)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </h2>

          <p
            style={{
              fontSize: window.innerWidth < 768 ? "0.95rem" : "1.05rem",
              lineHeight: 1.8,
              marginBottom: "20px",
              fontFamily: "'Open Sans', sans-serif",
              color: "#E0EDF9",
            }}
          >
            We don’t just process your documents — we make sure they get where they need to be, safely and on time, anywhere in the world. From our UK office, once fully legalised, your documents are carefully packaged and couriered directly to embassies, law firms, government offices, or trusted partners abroad.

            For deliveries within the UK, we use Special Delivery, ensuring secure, next-day arrival. For international shipments, we partner with DHL, providing fast, trackable delivery to destinations worldwide.

            Your documents stay protected at every step — handled with care, dispatched securely, and delivered with complete peace of mind.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 20px 0",
              fontSize: window.innerWidth < 768 ? "1.1rem" : "1.3rem",
              lineHeight: "1.8",
            }}
          >
            <li>✔️ Tracked, insured global delivery</li>
            <li>✔️ Protective packaging for sensitive documents</li>
            <li>✔️ Fast dispatch from our office to your destination</li>
          </ul>
        </FadeSection>
      </div>

      {/* Image Section */}
      <div style={{ flex: 1, width: window.innerWidth < 768 ? "80%" : "100%" }}>
        <FadeSection delay="0.3s">
          <motion.img
            src={dhl}
            alt="Worldwide Document Couriering"
            loading="lazy"
       style={{
    width: "100%",      // stretch full width of container
    height: "auto",     // maintain aspect ratio
    maxHeight: "500px", // optional: limit extreme height on large screens
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    border: "2px solid rgba(255,255,255,0.2)",
    objectFit: "cover"  // ensures image covers container nicely
  }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true,margin: "-100px" }}
          />
        </FadeSection>
      </div>
    </div>
  </Container>
</section>




<section
  id="cta-section"
  style={{
    marginBottom: "0",
    backgroundColor: "#1A2D50",
    backgroundImage: `url(${homeimage})`,   // background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: window.innerWidth < 768 ? "40px 15px" : "60px 20px",
    textAlign: "center",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Optional dark overlay for better readability */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(26, 45, 80, 0.6)", // semi-transparent overlay
      zIndex: 0,
    }}
  ></div>

  <Container style={{ position: "relative", zIndex: 1 }}>
    <h2
      style={{
        fontFamily: "'DM Serif Text', serif",
        fontSize: "2.2rem",
        fontWeight: "bold",
        marginBottom: "20px",
        display: "inline-block",
        position: "relative",
      }}
    >
      Ready for Seamless Apostille and Foreign Embassy Legalisation?
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          bottom: -6,
          height: "4px",
          width: "100%",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #1E90FF, #FF7A33, #1E90FF)", // orange-blue gradient underline
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </h2>

    <p
      style={{
         fontFamily: "'Open Sans', sans-serif" ,
        fontSize: "1.1rem",
        maxWidth: "650px",
        margin: "0 auto 30px",
        lineHeight: 1.8,
      }}
    >
      Let us handle the paperwork and logistics while you focus on what matters
      most. We ensure your documents are processed quickly, securely, and
      accurately — every time.
    </p>

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
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
           onClick={() => setShowEnquiryModal(true)}

    >
      Get Started
    </Button>

  </Container>
</section>


<WizardEnquiryModal
  show={showEnquiryModal}
  handleClose={() => setShowEnquiryModal(false)}
/>


      {/* Keyframes & Styles */}
      <style>{`
  /* Keyframes & Animations */
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes verticalGradient {
    0% { background-position: 0% 0%; }
    50% { background-position: 0% 100%; }
    100% { background-position: 0% 0%; }
  }
  @keyframes floatIcon {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  @keyframes slideHighlight {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  @keyframes underlineMove {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* Learn More link hover */
  .learn-more-link {
    position: relative;
    display: inline-block;
    color: #051b44ff;
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;
  }
  .learn-more-link .learn-more-underline {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #FF914D;
    transition: width 0.3s ease;
  }
  .learn-more-link:hover .learn-more-underline {
    width: 100%;
  }

  /* Mobile-specific fixes */
  @media (max-width: 768px) {
    /* Hero padding */
    section[style*="backgroundImage"] {
      padding-top: 50px !important;
      padding-bottom: 30px !important;
    }

    /* Scale-wrapper adjustments */
    #scale-wrapper {
      flex-grow: 0 !important;
      min-height: auto !important;
    }

    /* Reduce extra top padding above sections (if any) */
    div[style*="paddingTop: 75px"] {
      padding-top: 20px !important;
    }

    /* Fix remaining gap on mobile without affecting desktop */
    html, body, #root, #scale-wrapper {
      height: auto !important;
      min-height: 0 !important;
    }
  }
`}</style>

    </div>
  );
}

export default Home;
