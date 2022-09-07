import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";
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
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
