import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import InstagramEmbed from "./components/InstagramEmbed"; 
import GlobalStyles from "./components/GlobalStyles"; 
import ContactSection from "./components/ContactSection";
import "./i18n"; // Import the language configuration


const App = () => {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesSection />
              <InstagramEmbed />
              <ContactSection />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;


