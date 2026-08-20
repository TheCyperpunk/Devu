import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { personalInfo } from '../data/personalInfo';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="social-icon" 
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <p className="footer-text">Designed & Built by {personalInfo.name}</p>
          <p className="footer-copyright">&copy; 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
