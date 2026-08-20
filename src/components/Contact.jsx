import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { personalInfo } from '../data/personalInfo';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      alert(`Thank you ${formData.name}! Your message has been received. I'll get back to you soon at ${formData.email}.`);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Email</h3>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3>Phone</h3>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <h3>LinkedIn</h3>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/devika-td
              </a>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <h3>GitHub</h3>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                github.com/devikatd
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
