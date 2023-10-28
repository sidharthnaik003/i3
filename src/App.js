

import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<About />} path="/about" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
