import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { education } from '../data/education';

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3>{edu.degree}</h3>
                  <span className="timeline-date">{edu.duration}</span>
                </div>
                <h4>{edu.institution}</h4>
                {edu.university && <p>{edu.university}</p>}
                {edu.stream && <p>{edu.stream}</p>}
                <div className="achievement">
                  <FontAwesomeIcon icon={faAward} />
                  <span>{edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
