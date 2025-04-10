import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { account } from "../appwrite";

import "./hamburgerMenu.css";
import "../index.css";
import "../Profile.css"; // Import the new Profile.css

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation(); // Get the current URL path

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const currentUser = await account.get();
        const fullName = currentUser.name;
        const firstName = fullName.split(" ")[0];
        console.log("👋 Welcome,", firstName);
        setUser({ ...currentUser, firstName });
      } catch (err) {
        setUser(null);
      }
    };

    checkLoggedIn();
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <div className="nav-bar-container">
      <div className="navBar">
        <ul className="nav-links">
          <li>
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume" className={`nav-link ${location.pathname === "/resume" ? "active" : ""}`}>
              Resumé
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
              Contact
            </Link>
          </li>
          {!user && (
            <li>
              <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>
                Login
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/profile" className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}>
                {user.firstName}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;