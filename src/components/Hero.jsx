import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/personalInfo';

function Hero() {
  const { displayText } = useTypingEffect(personalInfo.tagline, 500);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-tagline typing-text">{displayText}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <FontAwesomeIcon icon={faCode} /> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </a>
          </div>

          <div className="hero-social">
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
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ opacity: showScrollIndicator ? 1 : 0 }}
      >
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;
