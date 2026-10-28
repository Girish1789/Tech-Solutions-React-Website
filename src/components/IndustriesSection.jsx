import React from "react";
import { FaIndustry } from "react-icons/fa";
import { motion } from "framer-motion";
import "../css/IndustriesSection.css"

const IndustriesSection = () => {
  const industries = [
    {
      category: "/images/industries/healt-icon.png",
      image: "/images/industries/heartcare1.jpg",
      title: "Healthcare",
      description: "HMS, patient management, telehealth, medical billing and healthcare analytics solutions.",
    },
    {
      category: "/images/industries/retail-icon.jpg",
      image: "/images/industries/retail.jpg",
      title: "Retail & E-commerce",
      description:
        "Online shopping platforms, inventory management, payment integration and order tracking.",
    },
    {
      category: "/images/industries/bfsi-icon.jpg",
      image: "/images/industries/banking.jpg",
      title: "Banking & Finance",
      description: "FinTech applications, financial dashboards, secure transactions and reporting systems.",
    },
    {
      category: "/images/industries/manufacturing-icon.jpg",
      image: "/images/industries/manufacturing1.jpg",
      title: "Manufacturing",
      description: "Production monitoring, MES applications, quality control आणि inventory tracking.",
    },
    {
      category: "/images/industries/logistics-icon.png",
      image: "/images/industries/logistics1.jpg",
      title: "Logistics & Supply Chain",
      description: "Shipment tracking, warehouse management, delivery optimization and logistics dashboards.",
    },
    {
      category: "/images/industries/education-icon.png",
      image: "/images/industries/education1.jpg",
      title: "Education & E-learning",
      description: "Learning portals, online courses, student management आणि virtual classrooms.",
    },
  ];

  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">
        {/* Section Heading */}
        <motion.div
          className="industries-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="industries-badge">
            <span className="heart-icon">
              <FaIndustry size={15} />
            </span>
            INDUSTRIES WE SERVE
          </span>

          <h2>Technology for different industries</h2>
        </motion.div>

        {/* Industries Cards */}
        <div className="industries-grid">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.0,
                delay: index  * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="industries-card">
                <div className="industries-image-box">
                  <img src={item.image} alt={item.title} />

                  <span className="category-badge">
                    <img src={item.category} alt="" />
                  </span>
                </div>

                <div className="industries-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
