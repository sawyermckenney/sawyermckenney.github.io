import React from 'react';
import { Link } from "react-router-dom";
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image"></div> {/* Image element */}
      <div className="hero-content">
        <p className="oswald-400">Computer Science Student | Developer | Tech Enthusiast</p>
      </div>
      <div className="image-gallery flex justify-center space-x-4 mt-4">
        <div className="imageContext">
            <Link to="/resume">
              <img
                src="src/assets/accountingDesk.jpg"
                alt="Image 1"
                className="w-72 h-72 object-cover rounded-lg shadow-md"
              />
              <p className="oswald-400">Resumé</p>
            </Link>
          </div>
        <div className="imageContext">
          <Link to="/portfolio">
            <img
              src="src/assets/project2.jpg"
              alt="Image 2"
              className="w-72 h-72 object-cover rounded-lg shadow-md"
            />
            <p className='oswald-400'>Portfolio</p>
          </Link>
        </div>
        <div className="imageContext">
          <Link to="/contact">
            <img
              src="src/assets/grass.jpg"
              alt="Image 3"
              className="w-72 h-72 object-cover rounded-lg shadow-md"
            />
            <p className='oswald-400'>Contact</p>
          </Link>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-button-container">
          <h1 className="oswald-700">Welcome to my portfolio</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;