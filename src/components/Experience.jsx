import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { internships, certifications } from '../data/experience';

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Internship Experience</h2>
        <div className="experience-grid">
          {internships.map((internship) => (
            <div key={internship.id} className="experience-card glass-card">
              <div className="experience-header">
                <div>
                  <h3>{internship.title}</h3>
                  <h4>{internship.company}</h4>
                </div>
                <span className={`experience-badge ${internship.current ? 'current' : ''}`}>
                  {internship.duration}
                </span>
              </div>
              <p>{internship.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3 className="subsection-title">Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-item glass-card">
                <FontAwesomeIcon icon={faCertificate} />
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
