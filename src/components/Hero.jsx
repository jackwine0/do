import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    
    <div className='hero'>
      <div className="hero-text">
        <h4>Hi, I am</h4>
        <h1>Akande Samuel</h1>
        <h3>Frontend Web Developer</h3>
        <a href="https://github.com/jackwine0" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="logo-icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="logo-icon" />
      </a>
      <a href="samakande98@example.com">
        <FontAwesomeIcon icon={faGoogle} className="logo-icon" />
      </a>
      </div>
      
    <div className="image-content">
        <img src="/src/assets/MAIN FIELD.gif" alt="Your Name" />
      </div>
     
      
    </div>
  );
};

export default Hero;
