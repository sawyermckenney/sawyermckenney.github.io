import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HamburgerMenu from "./components/hamburgerMenu";
import Hero from "./components/hero";
import Login from "./Login";
import Background from "./components/backGround";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact"
const Home = () => {
  return (
    <div>
      <Hero/>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Background/>
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;