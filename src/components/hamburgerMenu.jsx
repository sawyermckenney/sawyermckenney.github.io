import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./hamburgerMenu.css";
import "../index.css";

const HamburgerMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user authentication state
  const sidebarRef = useRef(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar on outside click
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Handle sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="nav-bar-container">
      <div className="navBar">
        <div className="hamburger-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hamburger-button"
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <path
              className="hamburger-lines"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
          <div className={`sidebar ${isSidebarOpen ? "active" : ""}`} ref={sidebarRef}>
            <nav className="sidebar-content">
              {/* Conditionally render Login button */}
              {!user && (
                <Link
                  to="/login"
                  className="py-2 px-4 rounded bg-black-600 text-white hover:bg-white hover:text-black transition duration-300"
                  onClick={() => setSidebarOpen(false)}
                >
                  Login
                </Link>
              )}
              <Link
                to="/"
                className="py-2 px-4 rounded bg-black-600 text-white hover:bg-white hover:text-black transition duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/resume"
                className="py-2 px-4 rounded bg-black-600 text-white hover:bg-white hover:text-black transition duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                Resumé
              </Link>
              <Link
                to="/portfolio"
                className="py-2 px-4 rounded bg-black-600 text-white hover:bg-white hover:text-black transition duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="py-2 px-4 rounded bg-black-600 text-white hover:bg-white hover:text-black transition duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </Link>

              {/* If user is logged in, display sign-out */}
              {user && (
                <button
                  className="signout-button"
                  onClick={() => {
                    handleSignOut();
                    setSidebarOpen(false);
                  }}
                >
                  Sign Out
                </button>
              )}
            </nav>
          </div>
        </div>

        {/* User profile image */}
        {user && (
          <div className="user-profile">
            <img
              src={user.photoURL || "/default-profile.png"} // Fallback image
              alt="Profile"
              className="profile-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;