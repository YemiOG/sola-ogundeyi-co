import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
