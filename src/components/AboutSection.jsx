import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck } from "lucide-react";
import "../css/AboutSection.css";

const AboutSection = () => {
  const abouts = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Business-focused web applications built around your requirements.",
    },
    {
      icon: Database,
      title: "Data-Driven Solutions",
      description:
        "Organize your data and turn it into useful business insights.",
    },
    {
      icon: ShieldCheck,
      title: "Quality and Reliability",
      description: "Maintainable, secure and responsive digital experiences.",
    },
  ];

  // Left side animation
  const leftAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
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
    hidden: {
      opacity: 0,
      x: 100,
    },
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
    <section className="about-section">
      <div className="about-container">
        {/* Left Side Images */}
        <motion.div
          className="about-images"
          variants={leftAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <img
            src="/images/our-story-office.jpg"
            alt="Office"
            className="about-main-image"
          />

          {/* Trusted Badge */}
          <div className="trusted-badge">
            <div className="trusted-circle">
              <span>IT</span>
            </div>

            <div>
              <h4>Tech Solutions</h4>
              <p>Your digital partner</p>
            </div>
          </div>

          {/* Small Image */}
          <div className="about-small-image-box">
            <img
              src="/images/our-story-computer.jpg"
              alt="Computer"
              className="about-small-image"
            />
          </div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="about-content"
          variants={rightAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className="story-badge">⚑ &nbsp; ABOUT TECH SOLUTIONS</span>

          <h1>Technology that moves your business forward</h1>

          <p className="about-description">
            Tech Solutions is a software company brand created for this website
            demonstration. We showcase how a modern IT company can present its
            services, expertise and digital capabilities to potential clients.
          </p>

          {/* Abouts */}
          <div className="about-features">
            {abouts.map((item, index) => {
              const AboutIcon = item.icon;

              return (
                <div className="about-feature" key={index}>
                  <div className="feature-icon">
                    <AboutIcon size={24} />
                  </div>

                  <div className="feature-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
