import React from "react";
import {
  FaCheckCircle,
  FaHeadset,
  FaTruck
} from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineFactory } from "react-icons/md";
import "../css/AISolution.css"

const AISolution = () => {
  const aisolutions = [
    {
      title: "Smart Manufacturing",
      icon: <MdOutlineFactory />,
      features: [
        "Predictive equipment maintenance",
        "Real-time production monitoring",
        "Automated defect detection",
        "Machine performance optimization",
      ],
    },
    {
      title: "Intelligent Logistics",
      icon: <FaTruck />,
      features: [
        "AI-based delivery route planning",
        "Warehouse demand forecasting",
        "Shipment delay prediction",
        "Intelligent inventory planning",
      ],
    },
    {
      title: "Banking & Finance",
      icon: <FaHeadset />,
      features: [
        "24/7 virtual customer assistants",
        "Automated support ticket classification",
        "Customer sentiment analysis",
        "Multilingual support automation",
      ],
    },
  ];

  return (
    <div>
      <section className="aisolution-section" id="aisolution">
        <div className="aisolution-container">
          <div className="aisolution-heading">
            <span className="aisolution-badge">
              <AiOutlineSolution size={20} />
              AI SOLUTION
            </span>

            <h2>Make your business smarter with technology</h2>
          </div>

          <div className="aisolution-grid">
            {aisolutions.map((item, index) => (
              <div className="aisolution-card" key={index}>
                <div className="aisolution-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <ul className="aisolution-features">
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolution;
