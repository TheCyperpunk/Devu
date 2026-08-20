import { useEffect } from 'react';

/**
 * Custom hook for custom cursor glow effect
 * Creates a glowing orb that follows the mouse cursor
 */
export const useCursorGlow = () => {
  useEffect(() => {
    const cursorGlow = document.querySelector('.cursor-glow');
    
    if (!cursorGlow) return;

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      });
    };

    const handleMouseLeave = () => {
      cursorGlow.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      cursorGlow.style.opacity = '1';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
};
