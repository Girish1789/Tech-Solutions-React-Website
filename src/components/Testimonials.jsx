import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "../css/Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      name: "VP Operations",
      role: "US Multi-Specialty Practice",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
      review:
        "Tech solutions operated like part of our engineering org from week one. Their RCM domain knowledge saved us months.",
    },
    {
      name: "CIO",
      role: "Regional Retail Chain",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      review:
        "We replaced a legacy ERP and stood up real-time inventory across 120 stores. Avotech owned outcomes, not tickets.",
    },
    {
      name: "Head of Data",
      role: "Private Bank, India",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      review:
        "Their Microsoft Fabric architecture cut our reporting cycle from a week to under a day.",
    },
    {
        name: "Head of Data",
        role: "Private Bank, India",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
        review:
          "Their Microsoft Fabric architecture cut our reporting cycle from a week to under a day.",
      },
  ];

  const [activePage, setActivePage] = useState(0);

  // Two cards per page
  const pages = [];

  for (let i = 0; i < testimonials.length; i += 2) {
    pages.push(testimonials.slice(i, i + 2));
  }

  return (
    <div>
      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-heading">
            <span className="testimonials-badge">
              <FaQuoteLeft />
              CLIENT FEEDBACK
            </span>

            <h2>What our clients say</h2>
          </div>

          <div className="testimonials-slider">
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${activePage * 100}%)`,
              }}
            >
              {pages.map((page, index) => (
                <div className="testimonial-page" key={index}>
                  {page.map((item, cardIndex) => (
                    <div className="testimonial-card" key={item.name}>

                      <p className="testimonial-review">"{item.review}"</p>

                      <div className="testimonial-person">
                        <img src={item.image} alt={item.name} />

                        <div>
                          <h4>{item.name}</h4>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Clickable dots */}
          <div className="testimonial-dots">
            {pages.map((page, index) => (
              <button
                key={index}
                type="button"
                className={
                  activePage === index
                    ? "testimonial-dot active"
                    : "testimonial-dot"
                }
                onClick={() => setActivePage(index)}
                aria-label={`Show testimonial page ${index + 1}`}
                aria-pressed={activePage === index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
