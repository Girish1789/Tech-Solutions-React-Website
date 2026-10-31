import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/GreenSection.css";

const GreenSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setFormData({
        ...formData,
        resume: null,
      });
      return;
    }

    if (file.type === "application/pdf") {
      setFormData({
        ...formData,
        resume: file,
      });
    } else {
      alert("Please upload a valid PDF document.");
      e.target.value = "";

      setFormData({
        ...formData,
        resume: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application Form Data:");
    console.log({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      coverLetter: formData.coverLetter,
      resume: formData.resume,
    });

    alert("Thank you! Application Submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
      resume: null,
    });

    // Clear file input
    e.target.reset();
  };

  return (
    <div>
      <section className="green-section">
        <motion.div
          className="green-container"
          initial={{ opacity: 0, scale: 0.5, z: -300 }}
          whileInView={{ opacity: 1, scale: 1, z: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="green-content">
            <div className="green-img">
              <img src="/images/career1.webp" alt="Career" />
            </div>

            <h1>Join Our Team</h1>
            <h2>Submit your application to explore opportunities.</h2>

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
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option>Select One</option>
                    <option value="Frontend Developer">
                      Frontend Developer (React)
                    </option>
                    <option value="Backend Developer">
                      Backend Developer (Node)
                    </option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resume">Upload Resume (PDF only)</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coverLetter">
                    Why do you want to join us? (Cover Letter)
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows="2"
                    value={formData.coverLetter}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-button">
                  Submit <span>➤</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GreenSection;
