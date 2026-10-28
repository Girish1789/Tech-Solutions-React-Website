import React from "react";
import { Code2 } from "lucide-react";
import "../css/Footer.css";


const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    "About",
    "Services",
    "Portfolio",
    "Career",
    "Contact",
  ];

  const causes = [
    "Privacy Policy",
    "Terms of Service",
    "FAQs",
  ];

  const contactInfo = [
    {
      icon: "location",
      text: "Hinjewadi, Pune",
    },
    {
      icon: "email",
      text: "hello@techsolutions.org",
    },
    {
      icon: "phone",
      text: "+(91) 987-654-3210",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-icon"><Code2/></span>
            <span>
              Tech <strong>Solutions</strong>
            </span>
          </a>

          <p className="footer-description">
            A transparent, donor-first charity connecting givers directly to
            verified causes worldwide since 2013. Every gift is tracked from
            wallet to doorstep.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              f
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              ◎
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              in
            </a>
            <a href="https://www.youtube.com/" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h3 className="footer-title">QUICK LINKS</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Causes */}
        <div className="footer-causes">
          <h3 className="footer-title">CAUSES</h3>

          <ul>
            {causes.map((cause) => (
              <li key={cause}>
                <a href={`#${cause.toLowerCase().replaceAll(" ", "-")}`}>
                  {cause}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact and Newsletter */}
        <div className="footer-contact">
          <h3 className="footer-title">GET IN TOUCH</h3>

          <div className="footer-contact-list">
            {contactInfo.map((item) => (
              <div className="footer-contact-item" key={item.icon}>
                <span className="contact-icon">
                  {item.icon === "location" && "♦"}
                  {item.icon === "email" && "✉"}
                  {item.icon === "phone" && "☎"}
                </span>

                {item.icon === "email" ? (
                  <a href={`mailto:${item.text}`}>{item.text}</a>
                ) : item.icon === "phone" ? (
                  <a href="tel:+15552048890">{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>
            © 2026 Tech Solutions. All rights reserved by{" "}
            <span>TSolutions</span>
          </p>
        </div>

        <div className="footer-bottom-right">
          <p>
            Made with <span className="footer-heart">♥</span> for a better world
            •
          </p>
        </div>
      </div>

      {/* Back To Top */}
      <button
        className="footer-back-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
