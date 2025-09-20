import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

// Theme colors
const darkBlue = "#1A2B47";
const translucentOrange = "rgba(255,165,0,0.2)";
const buttonStyle = {
  backgroundColor: darkBlue,
  border: "none",
  color: "white",
  padding: "10px 25px",
  fontWeight: "bold",
  borderRadius: "8px",
};

// Step animation variants
const stepVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

// Steps info
const stepsInfo = {
  "UK Apostille": ["Document Verification", "Payment Processing", "Submission to FCDO", "Delivery to Client"],
  "Embassy Legalisation": ["Prepare Required Documents", "Payment & Booking", "Embassy Submission", "Collection & Delivery"],
  "Shuttle Services": ["Schedule Pickup", "Secure Transport", "Submission & Tracking", "Return Delivery"],
};

// Country Calling Codes
const countryCallingCodes = {
  Bahrain: "+973",
  China: "+86",
  Egypt: "+20",
  Iraq: "+964",
  Jordan: "+962",
  Kuwait: "+965",
  Malaysia: "+60",
  Pakistan: "+92",
  Qatar: "+974",
  SriLanka: "+94",
  Taiwan: "+886",
  Thailand: "+66",
  UAE: "+971",
  Vietnam: "+84",
};

// Animated dropdown component
function AnimatedDropdown({ value, onChange, options, placeholder = "-- Select --" }) {
  const [open, setOpen] = useState(false);

  return (
    <Form.Group className="mb-4" style={{ position: "relative" }}>
      <Form.Label style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{placeholder}</Form.Label>
      <div
        style={{
          background: translucentOrange,
          color: darkBlue,
          padding: "12px",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
      >
        {value || placeholder}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute",
              top: "50px",
              left: 0,
              width: "100%",
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              zIndex: 20,
              overflow: "hidden",
            }}
          >
            {options.map((opt, idx) => (
              <motion.div
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ backgroundColor: "rgba(255,165,0,0.2)", color: "#1A2B47" }}
                style={{ padding: "12px", cursor: "pointer", fontWeight: "bold" }}
              >
                {opt}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Form.Group>
  );
}

function WizardEnquiryModal({ show = false, handleClose }) {
  const [step, setStep] = useState(1);

  const [service, setService] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    document_type: "",
    attested_as: "",
    quantity: "",
    additional_info: "",
    first_name: "",
    surname: "",
    email: "",
    calling_code: "",
    contact_no: "",
    address1: "",
    postcode: "",
    city: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const getCountryName = (code) =>
    Object.keys(countryCallingCodes).find((c) => countryCallingCodes[c] === code) || "";

  const handleCloseModal = useCallback(() => {
    setStep(1);
    setService("");
    setSubmitted(false);
    setFormData({
      document_type: "",
      attested_as: "",
      quantity: "",
      additional_info: "",
      first_name: "",
      surname: "",
      email: "",
      calling_code: "",
      contact_no: "",
      address1: "",
      postcode: "",
      city: "",
    });
    setShowErrors(false);
    handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (!show) handleCloseModal();
  }, [show, handleCloseModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { service, ...formData, quantity: parseInt(formData.quantity, 10) };
      await axios.post("http://localhost:8000/api/enquiry/", payload);
      setSubmitted(true);
      setTimeout(handleCloseModal, 5000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={handleCloseModal} size="lg" centered>
      <Modal.Header style={{ backgroundColor: darkBlue }}>
        <Modal.Title style={{ color: "white", fontWeight: "bold", textAlign: "center", width: "100%" }}>
          Please fill in the information below. After your form submission, our team will guide you through every step.
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: "30px", position: "relative" }}>
        {/* Floating Close Button */}
        <Button
          onClick={handleCloseModal}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            padding: "0",
            fontWeight: "bold",
            fontSize: "1.2rem",
            backgroundColor: "#FF914D",
            color: "#fff",
            border: "none",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          ✕
        </Button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "50px", fontSize: "1.2rem", color: darkBlue }}>
            Hi {formData.first_name},<br /><br />
            Thank you for submitting your enquiry to <strong>Trinity Consular</strong>.<br />
            Our team will contact you shortly. For urgent queries, call us at <strong>+0044 7440076614</strong>.<br /><br />
            Best regards,<br />
            <strong>Trinity Consular Team</strong>
          </div>
        ) : (
          <>
            {/* Step Progress */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  style={{
                    width: "30%",
                    padding: "10px 0",
                    textAlign: "center",
                    fontWeight: "bold",
                    borderBottom: `4px solid ${step === s ? darkBlue : "#ccc"}`,
                    opacity: step === s ? 1 : 0.5,
                  }}
                >
                  Step {s}
                </div>
              ))}
            </div>

            <AnimatePresence exitBeforeEnter>
              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <AnimatedDropdown
                    value={service}
                    onChange={setService}
                    options={Object.keys(stepsInfo)}
                    placeholder="Select Service"
                  />
                  <div style={{ marginTop: "20px", textAlign: "right" }}>
                    <Button style={buttonStyle} onClick={handleNext} disabled={!service}>
                      Next
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <h3 style={{ textAlign: "center",fontFamily: "'DM Serif Text', serif" , marginBottom: "25px", color: darkBlue, fontWeight: "bold" }}>
                    Document Details
                  </h3>
                  <Form.Group className="mb-3">
                    <Form.Label>Type of Document *</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.document_type}
                      onChange={handleChange}
                      name="document_type"
                      placeholder="Enter type of document"
                    />
                    {!formData.document_type && showErrors && <div style={{ color: "red" }}>Required</div>}
                  </Form.Group>

                  <AnimatedDropdown
                    value={formData.attested_as}
                    onChange={(val) => setFormData({ ...formData, attested_as: val })}
                    options={["Original", "True Copy"]}
                    placeholder="Document Attested As"
                  />
                  {!formData.attested_as && showErrors && <div style={{ color: "red" }}>Required</div>}

                  <Form.Group className="mb-3">
                    <Form.Label>Quantity *</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      name="quantity"
                      placeholder="Enter quantity"
                    />
                    {!formData.quantity && showErrors && <div style={{ color: "red" }}>Required</div>}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Additional Information</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={formData.additional_info}
                      onChange={handleChange}
                      name="additional_info"
                      placeholder="Optional"
                    />
                  </Form.Group>

                  <div style={{ marginTop: "20px", textAlign: "right" }}>
                    <Button variant="secondary" onClick={handlePrev} style={{ marginRight: "15px" }}>
                      Previous
                    </Button>
                    <Button
                      style={buttonStyle}
                      onClick={() => {
                        const required = ["document_type", "attested_as", "quantity"];
                        if (required.every((f) => formData[f] !== "")) handleNext();
                        else setShowErrors(true);
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <Form onSubmit={handleSubmit}>
                    {["first_name", "surname", "email", "address1", "postcode", "city"].map((field) => (
                      <Form.Group className="mb-3" key={field}>
                        <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                        <Form.Control
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={`Enter ${field}`}
                        />
                      </Form.Group>
                    ))}

                    <div style={{ display: "flex", gap: "10px" }}>
                      <Form.Group style={{ flex: "1 0 35%" }}>
                        <AnimatedDropdown
                          value={formData.calling_code ? `${getCountryName(formData.calling_code)} (${formData.calling_code})` : ""}
                          onChange={(val) =>
                            setFormData((prev) => ({ ...prev, calling_code: val.match(/\((\+\d+)\)/)?.[1] || "" }))
                          }
                          options={Object.entries(countryCallingCodes).map(([c, code]) => `${c} (${code})`)}
                          placeholder="Select Country"
                        />
                      </Form.Group>

                      <Form.Group style={{ flex: "1 0 65%" }}>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="contact_no"
                          value={formData.contact_no}
                          onChange={handleChange}
                          placeholder="Enter contact number"
                        />
                      </Form.Group>
                    </div>

                    <div style={{ marginTop: "25px", textAlign: "right" }}>
                      <Button variant="secondary" onClick={handlePrev} style={{ marginRight: "15px" }}>
                        Previous
                      </Button>
                      <Button style={buttonStyle} type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default WizardEnquiryModal;
