import React, { useRef, useEffect, useState } from "react";
import app from "../assets/whatsapp.png";

function WhatsAppButton() {
  const btnRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const resizeHandler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", resizeHandler);

    const btn = btnRef.current;
    if (!btn) return;

    // Fade in
    const fadeTimeout = setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 2000);

    // Scroll handler
    let lastScroll = window.scrollY;
    const scrollHandler = () => {
      btn.style.opacity = window.scrollY > lastScroll ? "0" : "1";
      lastScroll = window.scrollY;
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      clearTimeout(fadeTimeout);
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <a
      href="https://wa.me/447440076614?text=Hello%20there"
      target="_blank"
      rel="noopener noreferrer"
      ref={btnRef}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        display: "flex",
        alignItems: "center",
        gap: "10px", // spacing between icon and text
        padding: isDesktop ? "12px 20px" : "10px 16px",
        backgroundColor: "#314163ff",
        borderRadius: "50px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 1000,
        cursor: "pointer",
        textDecoration: "none",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.3s ease",
      }}
    >
      <img
        src={app}
        alt="Chat on WhatsApp"
        style={{
          width: isDesktop ? "35px" : "28px",
          height: isDesktop ? "35px" : "28px",
        }}
      />
      <span
        style={{
          color: "#fff",
          fontSize: isDesktop ? "16px" : "14px",
          fontWeight: 500,
        }}
      >
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;
