import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after login/signup
import "./Login.css"; // Import CSS for styling
import { auth } from "./firebase"; // Firebase imports
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup

  // Handle email/password login or signup
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful!");
      }
      setError(""); // Clear error state on success
      navigate("/dashboard"); // Redirect to dashboard or homepage
    } catch (error) {
      setError(getFirebaseErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful!", result.user);
      navigate("/"); // Redirect to dashboard
    } catch (error) {
      setError(getFirebaseErrorMessage(error.code));
      console.error("Google Sign-In Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Map Firebase error codes to user-friendly messages
  const getFirebaseErrorMessage = (code) => {
    const errorMap = {
      "auth/invalid-email": "Invalid email address.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/email-already-in-use": "This email is already in use.",
      "auth/user-not-found": "No user found with this email.",
      "auth/popup-closed-by-user": "Sign-in popup was closed. Please try again.",
    };
    return errorMap[code] || "An unexpected error occurred. Please try again.";
  };

  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit} aria-labelledby="login-heading">
        <h2 id="login-heading">{isSignup ? "Sign Up" : "Login"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email Address"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
        </button>
        {error && <p role="alert" className="error-message">{error}</p>}
      
        <hr className="visible-line" />
        {/* Google Sign-In Button */}
        <button className="gsi-material-button" onClick={handleGoogleSignIn} disabled={loading}>
          <div className="gsi-material-button-state"></div>
          <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ display: "block" }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span className="gsi-material-button-contents">Sign in with Google</span>
            <span style={{ display: "none" }}>Sign in with Google</span>
          </div>
        </button>
      </form>
      <button
        className="toggle-button"
        onClick={() => setIsSignup((prev) => !prev)}
      >
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Login;