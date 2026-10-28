import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/CounterSection.css";

const CounterSection = () => {
  const [engCount, setEngineers] = useState(0);
  const [yearCount, setYears] = useState(0);
  const [counCount, setCountries] = useState(0);
  const [proCount, setProjects] = useState(0);

  const counts = [
    {
      number: engCount,
      label: "Engineers",
    },
    {
      number: yearCount,
      label: "Years",
    },
    {
      number: counCount,
      label: "Countries",
    },
    {
      number: proCount,
      label: "Projects",
    },
  ];

  useEffect(() => {
    let engNum = 0;
    let yearNum = 0;
    let counNum = 0;
    let proNum = 0;

    const timer = setInterval(() => {
      engNum = Math.min(engNum + 5, 50);
      yearNum = Math.min(yearNum + 2, 10);
      counNum = Math.min(counNum + 1, 9);
      proNum = Math.min(proNum + 5, 50);

      setEngineers(engNum);
      setYears(yearNum);
      setCountries(counNum);
      setProjects(proNum);

      if (engNum === 50 && yearNum === 10 && counNum === 9 && proNum === 50) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="count-section">
      <motion.div
        className="count-container"
        initial={{ opacity: 0, scale: 0.5, z: -300, }}
        whileInView={{ opacity: 1, scale: 1, z: 0, }}
        viewport={{ once: true, amount: 0.3, }}
        transition={{ duration: 1.2, ease: "easeOut", }}
      >
        {counts.map((item, index) => (
          <div className="count-item" key={index}>
            <h2>{item.number}+</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default CounterSection;
