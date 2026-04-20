import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thanks for reaching out! I will get back to you soon.');
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Header/Navbar */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <span className="logo-text">BD</span>
            </div>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#resume" onClick={() => scrollToSection('resume')}>Resume</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Badri Deepthi</span></h1>
            <p className="hero-subtitle">UI Designer & Creative Developer</p>
            <p className="hero-description">Crafting beautiful, intuitive digital experiences that users love</p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                <span className="btn-text">View My Work</span>
                <span className="btn-icon">→</span>
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                <span className="btn-text">Hire Me</span>
                <span className="btn-icon">💼</span>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/deepthi_photo.jpg" alt="Badri Deepthi" className="profile-img" />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p className="about-para">
                I'm a passionate UI Designer with a strong foundation in design thinking and front-end development. 
                Currently pursuing my Engineering degree at <span className="highlight">Sambhram Institution of Technology</span>, 
                building on the strong fundamentals I gained at <span className="highlight">Divine Institutions</span>.
              </p>
              
              <p className="about-para">
                I specialize in creating user-centered design solutions that are both beautiful and functional. 
                My approach combines design principles with technical expertise to deliver exceptional digital experiences.
              </p>

              <div className="education-box">
                <h3>Education & Certifications</h3>
                <div className="certification-items">
                  <div className="cert-item">
                    <span className="cert-icon">🎓</span>
                    <span>Engineering - Sambhram Institution of Technology</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-icon">🏫</span>
                    <span>Senior Secondary - Divine Institutions</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-icon">🏆</span>
                    <span>TCS Certificate - Professional Development</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-icon">✨</span>
                    <span>SkillsBuild Completion Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-container">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Frontend Development</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">HTML</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Tailwind CSS</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Backend & Databases</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '82%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MongoDB</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Tools & Platforms</h3>
              <div className="skill-items">
                <div className="skill-tag">Git</div>
                <div className="skill-tag">GitHub</div>
                <div className="skill-tag">VS Code</div>
                <div className="skill-tag">Figma</div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Other Skills</h3>
              <div className="skill-items">
                <div className="skill-tag">Problem Solving</div>
                <div className="skill-tag">UI/UX Design</div>
                <div className="skill-tag">Responsive Design</div>
                <div className="skill-tag">Web Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-image placeholder-1">
                  <span>Project 1</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Modern E-Commerce Platform</h3>
                <p>A fully responsive e-commerce platform with advanced filtering and smooth animations.</p>
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">Node.js</span>
                </div>
                <div className="project-links">
                  <a href="#" className="link-btn">Live Demo</a>
                  <a href="#" className="link-btn secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-image placeholder-2">
                  <span>Project 2</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Task Management Dashboard</h3>
                <p>Interactive dashboard with real-time task tracking and beautiful UI components.</p>
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="link-btn">Live Demo</a>
                  <a href="#" className="link-btn secondary">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-image placeholder-3">
                  <span>Project 3</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Portfolio Website Builder</h3>
                <p>Stunning portfolio generator with customizable themes and instant deployment.</p>
                <div className="tech-stack">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="link-btn">Live Demo</a>
                  <a href="#" className="link-btn secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume">
        <div className="section-container">
          <h2 className="section-title">Resume</h2>
          
          <div className="resume-content">
            <p className="resume-description">
              Download my comprehensive resume to see my detailed experience, education, and qualifications.
            </p>
            <button className="btn btn-primary" onClick={() => alert('Resume download functionality would be integrated here')}>
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">⬇️</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-tagline">Let's build something amazing together.</p>
          
          <div className="contact-wrapper">
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">✉️</span>
              </button>
            </form>

            <div className="contact-info">
              <div className="social-section">
                <h3>Connect with Me</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" title="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" title="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" title="Email">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" title="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="location-section">
                <h3>Location</h3>
                <p>📍 India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Badri Deepthi</h4>
              <p className="footer-quote">"Design is not just what it looks like and feels like. Design is how it works."</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Follow Me</h4>
              <div className="footer-socials">
                <a href="#" className="footer-social-link">GitHub</a>
                <a href="#" className="footer-social-link">LinkedIn</a>
                <a href="#" className="footer-social-link">Instagram</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Badri Deepthi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
