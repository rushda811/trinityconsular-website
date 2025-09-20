import React, { useState, useEffect, useRef } from "react";

function Contact() {
  const [buttonHover, setButtonHover] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState({ show: false, text: "", color: "#1E3A8A" });
  const [hideToast, setHideToast] = useState(false);

  const animatedRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const showToast = (text, color = "green") => {
    setToast({ show: true, text, color });
    setHideToast(false);
    setTimeout(() => setHideToast(true), 5000);
    setTimeout(() => setToast({ show: false, text: "", color: "#1E3A8A" }), 5600);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData };
    try {
const res = await fetch("/api/contacts/", 
 {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        showToast("Your message has been sent successfully!", "green");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showToast("Failed to send message. Please try again.", "red");
      }
    } catch {
      showToast("Server error. Please try again later.", "red");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F7FAFC", position: "relative" }}>
      {/* Toast */}
      {toast.show && (
        <div
          style={{
            position: "fixed",
            top: "30px",
            right: "30px",
            background: toast.color === "green"
              ? "linear-gradient(135deg, #38b000, #70e000)"
              : "linear-gradient(135deg, #e63946, #f77f00)",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
            minWidth: "280px",
            maxWidth: "90%",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "1rem",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: hideToast ? "slideOutRight 0.6s forwards" : "slideInRight 0.6s forwards",
          }}
        >
          {toast.color === "green" ? <span style={{ fontSize: "1.2rem" }}>✅</span> : <span style={{ fontSize: "1.2rem" }}>⚠️</span>}
          <span>{toast.text}</span>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          @keyframes slideInRight {
            0% { transform: translateX(100%); opacity: 0; }
            60% { transform: translateX(-10px); opacity: 1; }
            80% { transform: translateX(5px); }
            100% { transform: translateX(0); }
          }
          @keyframes slideOutRight {
            0% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .gradient-button {
            background: linear-gradient(270deg, #1E3A8A, #3B82F6, #1E3A8A);
            background-size: 600% 600%;
            animation: gradientShift 4s ease infinite;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 14px 20px;
            font-weight: bold;
            cursor: pointer;
            font-size: 1rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .gradient-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(30, 58, 138, 0.4);
          }
          .contact-email {
            transition: color 0.3s ease, font-weight 0.3s ease;
          }
          .contact-email:hover {
            color: #1E3A8A;
            font-weight: bold;
          }
          @keyframes slideHighlight {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            section[style*='padding: 60px 20px'] h2 { font-size: 2rem !important; }
            section[style*='padding: 60px 20px'] p { font-size: 1rem !important; padding: 0 10px; line-height: 1.6; }
            section[style*='flex'] { flex-direction: column !important; padding: 30px 15px !important; gap: 30px !important; }
            section[style*='flex'] > div:nth-child(1) { flex: 1 1 100% !important; max-width: 100% !important; padding: 20px !important; }
            section[style*='flex'] > div:nth-child(1) h1 { font-size: 2rem !important; }
            section[style*='flex'] > div:nth-child(1) form { padding: 20px !important; gap: 15px !important; }
            .gradient-button { padding: 12px 16px !important; font-size: 0.95rem !important; }
            section[style*='flex'] > div:nth-child(2) { flex: 1 1 100% !important; max-width: 100% !important; padding: 15px !important; min-height: auto !important; }
            section[style*='flex'] > div:nth-child(2) h2 { font-size: 1.8rem !important; }
            section[style*='flex'] > div:nth-child(2) p,
            section[style*='flex'] > div:nth-child(2) div { font-size: 0.95rem !important; line-height: 1.5 !important; }
            section[style*='flex'] > div:nth-child(2) iframe { height: 250px !important; }
            div[style*='position: fixed'] { top: 15px !important; right: 10px !important; min-width: 90% !important; font-size: 0.9rem !important; padding: 12px 18px !important; }
            label { font-size: 0.9rem !important; }
            input, textarea { font-size: 0.95rem !important; padding: 10px !important; }
            a[style*='position: absolute'] { top: 10px !important; right: 10px !important; padding: 8px 12px !important; font-size: 0.85rem !important; }
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        ref={(el) => (animatedRefs.current[0] = el)}
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#D0E8F2",
          opacity: 0,
          transform: "translateY(40px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontFamily: "'DM Serif Text', serif", marginBottom: "15px", display: "inline-flex", alignItems: "center", position: "relative" }}>
          Get in{" "}
          <span style={{ position: "relative", display: "inline-block", color: "#000", fontWeight: "bold", overflow: "hidden", marginLeft: "5px" }}>
            Touch
            <span style={{ position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", backgroundColor: "#1E3A8A", zIndex: 0, animation: "slideHighlight 2s linear infinite", opacity: 0.4 }}></span>
          </span>
        </h2>
        <p style={{ fontSize: "1.2rem", fontFamily: "'Open Sans', sans-serif", color: "#333", marginTop: "10px", maxWidth: "700px", margin: "10px auto 0 auto", lineHeight: "1.8" }}>
          We’re here to make document legalisation and apostille services simple and stress-free for you.
          Whether it’s personal or business documents, our experienced team ensures everything is handled quickly, accurately, and professionally.
          From the very first step to the final submission, we provide clear guidance and personalised support, so you never have to worry about the process.
          With our expertise, your documents are in trusted hands, meeting all official requirements with precision and care.
          Let us take the hassle out of legalisation—so you can focus on what matters most, while we handle the paperwork smoothly and efficiently.
        </p>
      </section>

      {/* Contact + Map Section */}
      <section style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", padding: "40px 20px" }}>
        {/* Contact Form */}
        <div ref={(el) => (animatedRefs.current[1] = el)} style={{ flex: "1 1 450px", maxWidth: "550px", minHeight: "400px", opacity: 0, transform: "translateY(40px)", transition: "all 0.8s ease-out" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1E3A8A", marginBottom: "30px", fontFamily: "'DM Serif Text', serif" }}>Contact Us</h1>
          <form onSubmit={handleSubmit} style={{ padding: "40px", borderRadius: "12px", backgroundColor: "#fff", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", display: "grid", gap: "20px", transition: "transform 0.3s ease" }}>
            <FormField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <FormField label="Message" name="message" type="textarea" value={formData.message} onChange={handleChange} required />
            <button type="submit" className="gradient-button">Send</button>
          </form>
        </div>

        {/* Map Section */}
        <div ref={(el) => (animatedRefs.current[2] = el)} style={{ flex: "1 1 450px", maxWidth: "550px", borderRadius: "12px", overflow: "visible", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", backgroundColor: "#1E3A8A", color: "#fff", display: "flex", flexDirection: "column", gap: "20px", padding: "20px", minHeight: "550px", position: "relative", opacity: 0, transform: "translateY(40px)", transition: "all 0.8s ease-out" }}>
          <a href="https://maps.app.goo.gl/tbMAG7sJjXQyyRVf8" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: buttonHover ? "#1E3A8A" : "#fff", color: buttonHover ? "#fff" : "#1E3A8A", padding: "10px 15px", borderRadius: "5px", fontWeight: "bold", textDecoration: "none", boxShadow: "0 2px 6px rgba(0,0,0,0.2)", zIndex: 10, transition: "all 0.3s ease" }}>
            View on Google Maps
          </a>
          <div>
            <h2 style={{ color: "#fff", fontWeight: "bold", marginBottom: "10px", fontFamily: "'DM Serif Text', serif" }}>Our Office</h2>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>25 North Row<br />Marble Arch<br />London, W1K&nbsp;6DJ<br />England</p>
            <div style={{ fontSize: "1rem", lineHeight: "1.6", fontWeight: 600, marginBottom: "10px" }}>🕘 <span style={{ fontWeight: 700, color: "#FF8C5A" }}>Opening Hours:</span><br />Monday&nbsp;–&nbsp;Friday: 09:00&nbsp;–&nbsp;17:00</div>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", fontStyle: "italic", opacity: 0.9 }}>(Closed on weekends and public holidays)</p>
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "5px" }}>
            <span>📧 Akbar: <a href="mailto:akbar@trinityconsular.com" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }} onMouseEnter={(e) => (e.target.style.color = "#FF8C5A")} onMouseLeave={(e) => (e.target.style.color = "#fff")}>akbar@trinityconsular.com</a></span>
            <span>📧 Jefin: <a href="mailto:accounts@trinityconsular.com" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }} onMouseEnter={(e) => (e.target.style.color = "#FF8C5A")} onMouseLeave={(e) => (e.target.style.color = "#fff")}>accounts@trinityconsular.com</a></span>
            <span>📞 Phone: 0044 7440076614</span>
          </div>
          <iframe title="office-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9998520375707!2d-0.15716702369773822!3d51.51321871027866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605ca560b4db7%3A0x499d055460782789!2sRegus%20-%20London%2C%20Oxford%20Street%20(Marble%20Arch)!5e0!3m2!1sen!2sin!4v1757307617215!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, borderRadius: "8px", marginBottom: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </div>
  );
}

// Reusable Field
function FormField({ label, name, type = "text", value, onChange, required = false }) {
  const common = { name, value, onChange, placeholder: `Your ${label}`, required, style: inputStyle };
  return (
    <div style={fieldContainer}>
      <label style={labelStyle}>{label}</label>
      {type === "textarea" ? <textarea {...common} style={{ ...inputStyle, height: "150px" }} /> : <input type={type} {...common} />}
    </div>
  );
}

// Inline Styles
const fieldContainer = { display: "flex", flexDirection: "column" };
const labelStyle = { marginBottom: "5px", fontWeight: "600", color: "#333", fontSize: "0.95rem" };
const inputStyle = { padding: "12px 15px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "1rem", width: "100%", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s", boxSizing: "border-box" };

export default Contact;
