import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/ContactSection.css";
import { IoLocationSharp } from "react-icons/io5";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Form Data:");
    console.log({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    alert("Thank you! Your message has been submitted.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Clear file input
    e.target.reset();
  };

  // Left side animation
  const leftAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Right side animation
  const rightAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section className="contact-section" id="contact">
        <motion.div 
          className="contact-heading"
          initial= {{ opacity: 0, y: 100 }}
          whileInView= {{ opacity: 1, y: 0 }}
          viewport= {{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="contact-badge">
            <span className="badge-icon">✉</span>
            GET IN TOUCH
          </span>

          <h1>We'd love to hear from you</h1>
        </motion.div>

        <div className="contact-container">
          {/* Left Side */}
          <motion.div
            className="contact-info"
            variants={leftAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="info-item">
              <div className="info-icon">
                <IoLocationSharp />
              </div>

              <div className="info-text">
                <h3>Our Office</h3>
                <p>Hinjewadi, Pune</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉</div>

              <div className="info-text">
                <h3>Email Us</h3>
                <p>hello@techsolutions.org</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">☎</div>

              <div className="info-text">
                <h3>Call Us</h3>
                <p>+ (91) 987-654-3210</p>
              </div>
            </div>

            <div className="map-placeholder">
              <div className="map-content">
                <span className="map-icon">●</span>
                <span>Map Embed Placeholder</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="contact-form-wrapper"
            variants={rightAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="send-button">
                Send Message <span>➤</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
