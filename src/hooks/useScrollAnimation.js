import { useEffect } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Observes elements and adds 'show' class when they enter viewport
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      '.glass-card, .timeline-item, .skill-card, .section-title'
    );

    // Add hidden class initially
    animatedElements.forEach(el => el.classList.add('hidden'));

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
};
