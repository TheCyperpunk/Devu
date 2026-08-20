import { useState, useEffect } from 'react';

/**
 * Custom hook for navigation functionality
 * Handles mobile menu, scroll effects, and active link detection
 */
export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const navbar = document.querySelector('.navbar');
    
    if (section && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    closeMenu();
  };

  return {
    isMenuOpen,
    isScrolled,
    activeSection,
    toggleMenu,
    closeMenu,
    scrollToSection
  };
};
