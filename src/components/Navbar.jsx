import React from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { personalInfo } from '../data/personalInfo';

function Navbar() {
  const { isMenuOpen, isScrolled, activeSection, toggleMenu, scrollToSection } = useNavigation();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact', isCTA: true }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          {personalInfo.name}
        </a>

        {/* Desktop Navigation */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          {navLinks.map(link => (
            <li key={link.id} className="nav-item">
              <a
                href={`#${link.id}`}
                className={`nav-link ${link.isCTA ? 'nav-cta' : ''} ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${link.id}`);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          id="hamburger"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
