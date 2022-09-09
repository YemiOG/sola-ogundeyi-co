import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Planning from "./components/Planning";
import Audit from "./components/Audit";
import Advisory from "./components/Advisory";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Clients />} />
          <Route path="/services/audit" element={<Audit />} />
          <Route path="/services/planning" element={<Planning />} />
          <Route path="/services/advisory" element={<Advisory />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
