import React, { useState, useEffect } from 'react'; // Import useState and useEffect

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation sticky ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/src/assets/MAIN FIELD.gif" alt="Logo" />
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#about-section" className="navigation__link">About Me</a>
        </li>
        <li className="navigation__item">
          <a href="#skills-section" className="navigation__link">Skills</a>
        </li>
        <li className="navigation__item">
          <a href="#portfolio-section" className="navigation__link">Portfolio</a>
        </li>
        <li className="navigation__item">
          <a href="#contact-section" className="contact-me">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
