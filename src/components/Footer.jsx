import React from 'react';
import { FaTwitter, FaCodepen, FaEnvelope, FaDribbble, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { url: 'https://twitter.com', icon: <FaTwitter /> },
    { url: 'https://codepen.io', icon: <FaCodepen /> },
    { url: 'mailto:samakande98@gmail.com', icon: <FaEnvelope /> },
    { url: 'https://dribbble.com', icon: <FaDribbble /> },
    { url: 'https://github.com/jackwine0', icon: <FaGithub /> }
  ];

  return (
    <footer>
      <div className="footer-links">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="copywright">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
      <div className="back-to-top">
        <a href="#">Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
