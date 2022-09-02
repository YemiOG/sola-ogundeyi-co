import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Clients from "./components/Clients";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <hr />
        <Clients />
      </div>
    </BrowserRouter>
  );
}
export default App;
