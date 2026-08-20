import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/projects';

function Projects() {
  useEffect(() => {
    // 3D tilt effect on project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.hasLiveDemo && (
                  <a 
                    href={project.liveLink} 
                    className="project-link" 
                    aria-label="Live Demo"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
