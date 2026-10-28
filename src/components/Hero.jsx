import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Code2,
  Laptop,
  Cloud,
} from "lucide-react";
import "../css/Hero.css";

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

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="hero-container">
      <motion.div
        className="hero-copy"
        variants={leftAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="impact-pill">
          <Sparkles size={16} fill="currentColor" />
          <span>INNOVATION · TECHNOLOGY · GROWTH</span>
        </div>
        <h1>
          Building Digital
          <br />
          Solutions for Your
          <br />
          <span className="highlight-word">Business</span> .
        </h1>
        <p className="hero-description">
          Tech Solutions helps businesses grow with modern websites, custom
          software, responsive web applications, cloud services and innovative
          digital experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#">
            Start Project <ArrowRight size={18} />
          </a>
          <a className="button button-outline" href="#">
            Explore services
          </a>
        </div>
        <div className="trust-note">
          <ShieldCheck size={16} />
          <span>Reliable technology for growing businesses</span>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        variants={rightAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="photo-frame">
          <img
            className="hero-photo"
            // src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
            src="/images/hero-section.jpg"
            alt="computer"
          />
        </div>
        <div className="floating-card smart-card">
          <span className="floating-icon green-icon">
            <Code2 size={23} />
          </span>
          <span className="floating-copy">
            <strong>Smart Code</strong>
            <small>Modern applications</small>
          </span>
        </div>
        <div className="floating-card cloud-card">
          <span className="floating-icon orange-icon">
            <Cloud size={23} />
          </span>
          <span className="floating-copy">
            <strong>Cloud Ready</strong>
            <small>Scalable solutions</small>
          </span>
        </div>
        <div className="photo-caption">
          <Laptop size={17} />
          <span>Technology built around your goals</span>
          <span className="caption-dot" />
        </div>
      </motion.div>
    </div>
  </section>
);
export default Hero;
