import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HamburgerMenu from "./components/hamburgerMenu";
import Hero from "./components/hero";
import Login from "./Login";
import Background from "./components/backGround";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact"
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./Profile";
import { account } from "./appwrite";
import './Profile.css'; // Import the Profile.css file

const Home = () => {
  return (
    <div>
      <Hero/>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await account.get();
        setUser(response);
      } catch {
        setUser(null);
      }
    };
    checkUser();
  }, []);

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
        <Route
          path="/profile"
          element={
            <PrivateRoute user={user}>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;