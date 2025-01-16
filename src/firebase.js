// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZqJqbYDrDLbF3RP70qtsfV_ErCuq0zaA",
  authDomain: "portfolio-7958e.firebaseapp.com",
  projectId: "portfolio-7958e",
  storageBucket: "portfolio-7958e.appspot.com", // Corrected URL
  messagingSenderId: "458148493088",
  appId: "1:458148493088:web:06a4831f0158f86d9c0945",
  measurementId: "G-9W5DKTXG85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: Only include if using Google Analytics
const auth = getAuth(app); // Firebase Authentication
const googleProvider = new GoogleAuthProvider();

// Export the initialized services
export { auth, analytics, googleProvider };