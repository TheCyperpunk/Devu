import { useState, useEffect } from 'react';

/**
 * Custom hook for typing animation effect
 * @param {string} text - The text to animate
 * @param {number} delay - Delay before starting animation (ms)
 * @param {number} speed - Typing speed range (ms)
 */
export const useTypingEffect = (text, delay = 500, speed = 40) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    setIsComplete(false);

    const timeout = setTimeout(() => {
      const typeCharacter = () => {
        if (index < text.length) {
          setDisplayText(prev => prev + text.charAt(index));
          index++;
          setTimeout(typeCharacter, Math.random() * speed + 30);
        } else {
          setIsComplete(true);
        }
      };
      
      typeCharacter();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return { displayText, isComplete };
};
