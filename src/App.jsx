
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CounterSection from "./components/CounterSection.jsx";
import IndustriesSection from "./components/IndustriesSection.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
// import AISolution from "./components/AISolution.jsx";
// import Testimonials from "./components/Testimonials.jsx";
import GreenSection from "./components/GreenSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />

        <main>
          <section id="home">
            <Hero />
          </section>

          <CounterSection />

          <section id="about">
            <AboutSection />
          </section>

          <section id="services">
            <ProductsSection />
          </section>

          <section id="portfolio">
            <IndustriesSection />
          </section>

          {/* <section id="aisolution">
            <AISolution />
          </section> */}

          <section id="career">
            <GreenSection />
          </section>

          {/* <Testimonials /> */}

          <section id="contact">
            <ContactSection />
          </section>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
