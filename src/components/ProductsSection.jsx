import React from "react";
import "../css/ProductsSection.css";
import { FaPencilAlt, FaMobileAlt, FaShareAlt, FaRobot } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      icon: FaPencilAlt,
      title: "Custom Software Development",
      description:
        "End-to-end design and development of bespoke software tailored to your exact business workflows.",
      services: ["Node.Js", "Next.Js", "Python", "Django", "FastAPI"],
    },
    {
      icon: MdWeb,
      title: "Web Application Development",
      description:
        "Build fast, scalable, and secure web applications using modern frameworks and cloud-native architecture.",
      services: ["React", "Node.Js", "Next.Js", "TypeScript"],
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android built for performance and scale.",
      services: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: FaShareAlt,
      title: "API & Backend Development",
      description:
        "Design robust, well-documented APIs and backend systems that power your applications reliably at scale.",
      services: ["Node.Js", "REST APIs", "GraphQL", "Webhooks"],
    },
    {
      icon: FaRobot,
      title: "Artificial Intelligence",
      description:
        "Use AI to auto-analyse codebases, detect dead code, generate delivery plans, and accelerate engineering — cutting development timelines by up to 60%.",
      services: ["Auto-Refactor", "AI Automation", "Open AI", "AI Agents development"],
    },
    {
      icon: ShieldCheck,
      title: "Security Engineering",
      description:
        "Address vulnerabilities and implement modern security practices.",
      services: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP"],
    },
  ];

  return (
    <div>
      <section className="product-section" id="products">
        <div className="product-container">
          
          <motion.div 
            className="product-heading"
            initial= {{ opacity: 0, y: 40 }}
            whileInView= {{ opacity: 1, y: 0 }}
            viewport= {{ once: true, amount: 0.2 }}
            transition= {{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="product-badge">SERVICES</span>

            <h2>Full-spectrum services under one roof.</h2>
          </motion.div>

          <div className="product-grid">
            {products.map((item, index) => {
              const ServiceIcon = item.icon;

              return (
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
                <div className="product-card" key={index}>
                  <div className="product-icon">
                    {/* <img src={item.icon} /> */}
                    <ServiceIcon size={24} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="service-badge">
                    {item.services.map((service, i) => (
                      <span className="product-badge" key={i}>
                        {service}
                      </span>
                    ))}
                  </div>

                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;
