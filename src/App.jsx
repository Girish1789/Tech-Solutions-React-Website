
// import React from "react";
// import { BrowserRouter } from "react-router-dom";

// import Header from "./components/Header.jsx";
// import Hero from "./components/Hero.jsx";
// import AboutSection from "./components/AboutSection.jsx";
// import CounterSection from "./components/CounterSection.jsx";
// import IndustriesSection from "./components/IndustriesSection.jsx";
// import ProductsSection from "./components/ProductsSection.jsx";
// // import AISolution from "./components/AISolution.jsx";
// // import Testimonials from "./components/Testimonials.jsx";
// import GreenSection from "./components/GreenSection.jsx";
// import ContactSection from "./components/ContactSection.jsx";
// import Footer from "./components/Footer.jsx";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="site-shell">
//         <Header />

//         <main>
//           <section id="home">
//             <Hero />
//           </section>

//           <CounterSection />

//           <section id="about">
//             <AboutSection />
//           </section>

//           <section id="services">
//             <ProductsSection />
//           </section>

//           <section id="portfolio">
//             <IndustriesSection />
//           </section>

//           {/* <section id="aisolution">
//             <AISolution />
//           </section> */}

//           <section id="career">
//             <GreenSection />
//           </section>

//           {/* <Testimonials /> */}

//           <section id="contact">
//             <ContactSection />
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;



import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

// Lazy Loading
const AboutSection = lazy(() => import("./components/AboutSection.jsx"));
const CounterSection = lazy(() => import("./components/CounterSection.jsx"));
const IndustriesSection = lazy(() => import("./components/IndustriesSection.jsx"));
const ProductsSection = lazy(() => import("./components/ProductsSection.jsx"));
const GreenSection = lazy(() => import("./components/GreenSection.jsx"));
const ContactSection = lazy(() => import("./components/ContactSection.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />

        <main>
          <section id="home">
            <Hero />
          </section>

          <Suspense fallback={<div className="section-loader">Loading...</div>}>
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

            <section id="career">
              <GreenSection />
            </section>

            <section id="contact">
              <ContactSection />
            </section>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
