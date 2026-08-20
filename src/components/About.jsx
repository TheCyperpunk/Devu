import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { personalInfo } from '../data/personalInfo';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card glass-card">
            <div className="about-text">
              <p>
                Computer Science and Engineering graduate with a strong foundation in Python and SQL. 
                I have hands-on experience applying Python and SQL to full-stack development.
              </p>
              <p>
                I am a motivated individual seeking opportunities to contribute my Python and SQL 
                skills while growing as a software professional.
              </p>
              <div className="about-info">
                <div className="info-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
