import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Service from "./pages/Service";
import Tools from "./pages/Tools";
import Testimonials from "./pages/Testimonals";
import Projects from "./pages/Project";      
import AllProjects from "./pages/AllProjects"; 
import Footer from "./pages/Footer";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300); 
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToHash />
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Service />
              <Tools />
              <Projects />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <AllProjects />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;