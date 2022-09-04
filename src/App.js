import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Services from "./components/Services";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Clients />
        <Services />
      </div>
    </BrowserRouter>
  );
}
export default App;
