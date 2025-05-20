import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Myplan from "./Myplan";
import Generateplan from "./Generateplan";
import Contact from "./Contact";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-plan" element={<Myplan />} />
        <Route path="/generate-plan" element={<Generateplan />} />
      </Routes>
    </Router>
  );
};

export default App;
