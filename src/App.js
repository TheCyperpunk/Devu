import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import custom hooks
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useCursorGlow } from './hooks/useCursorGlow';

// Import styles
import './App.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Initialize cursor glow effect
  useCursorGlow();

  // Console message easter egg
  useEffect(() => {
    console.log('%c🚀 Welcome to Devika\'s Portfolio!', 'color: #a855f7; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with React, HTML, CSS, and JavaScript', 'color: #c084fc; font-size: 14px;');
    console.log('%cFeel free to explore the code!', 'color: #e9d5ff; font-size: 12px;');
  }, []);

  return (
    <div className="App">
      {/* Custom Cursor Glow Effect */}
      <div className="cursor-glow"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
