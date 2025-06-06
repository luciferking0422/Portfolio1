import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Ullas G</div>
        <div className="nav-links">
          <button 
            className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={activeSection === 'education' ? 'nav-link active' : 'nav-link'}
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
          <button 
            className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className={activeSection === 'experience' ? 'nav-link active' : 'nav-link'}
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button 
            className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="hero-content">
          <div className="profile-container">
            <img src="pic.jpg" alt="Ullas G" className="profile-image" />
            <div className="profile-glow"></div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Ullas G</span>
            </h1>
            <p className="hero-subtitle">
              Engineering Student & Tech Enthusiast
            </p>
            <p className="hero-description">
              Currently pursuing Bachelor of Engineering at Malnad College of Engineering, Hassan. 
              Passionate about software development, embedded systems, and emerging technologies.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">8.05</span>
                <span className="stat-label">GPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">2026</span>
                <span className="stat-label">Graduation</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-header">
              <h3>Bachelor of Engineering</h3>
              <span className="education-year">2022 - 2026</span>
            </div>
            <p className="education-institution">Malnad College of Engineering, Hassan</p>
            <div className="education-details">
              <div className="detail-item">
                <span className="detail-label">Expected Graduation:</span>
                <span className="detail-value">May 2026</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Current GPA:</span>
                <span className="detail-value">8.05</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">C Programming</span>
                <span className="skill-tag">Java</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Development Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Visual Studio</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data & Analytics</h3>
              <div className="skill-tags">
                <span className="skill-tag">Excel Analytics</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <h2 className="section-title">Experience & Projects</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Student Achievement Portal</h3>
                  <span className="timeline-date">April 2025 - January</span>
                </div>
                <p className="timeline-description">
                  Developed a comprehensive web-based platform enabling students to upload and manage 
                  their certificates while providing administrators with viewing and download capabilities.
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">Web Development</span>
                  <span className="timeline-tag">Full Stack</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineering Workshop</h3>
                  <span className="timeline-date">June 2024 - January</span>
                </div>
                <p className="timeline-description">
                  Participated in intensive software engineering workshop and organized a speaker 
                  session on space exploration and technology advancement.
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">Workshop</span>
                  <span className="timeline-tag">Public Speaking</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>IEEE Workshop Leadership</h3>
                  <span className="timeline-date">September 2023 - Present</span>
                </div>
                <p className="timeline-description">
                  Attended specialized workshops on Microcontroller and Embedded Systems, 
                  and successfully conducted IEEE workshops for fellow students.
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">IEEE</span>
                  <span className="timeline-tag">Embedded Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <a href="mailto:ullasg.mce@gmail.com" className="contact-link">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <span>ullasg.mce@gmail.com</span>
                </div>
              </a>
            </div>
            
            <div className="contact-item">
              <a href="https://github.com/luciferking0422" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <span>github.com/luciferking0422</span>
                </div>
              </a>
            </div>
            
            <div className="contact-item">
              <a href="tel:8296146616" className="contact-link">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <span>8296146616</span>
                </div>
              </a>
            </div>
            
            <div className="contact-item contact-location">
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Hassan, Karnataka 573201</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Ullas G. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;