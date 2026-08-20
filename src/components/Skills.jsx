import React from 'react';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card glass-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
