import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faGoogle,
  faAws,
  faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TypingEffect from './TypingEffect';
import SkillsMindMap from './SkillsMindMap';
import './App.css';

/* Assets */
import profileImage from './assets/pfp_pn.jpg';
import hackherLogo from './assets/hackher_new_logo.png';
import siemensLogo from './assets/siemens_logo.png';
import dreamLogo from './assets/dreamlab_logo.png';
import buildLogo from './assets/buildumass_logo.png';


function App() {
  return (
    <div className="app-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li>
            <a
              href="https://drive.google.com/file/d/14mqOw4U8ID89D2Wwyue3aMoRvg6QucjM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <a href="#contact" className="cta-button">Let’s Talk</a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-content">

          <div className="hero-image">
            <img src={profileImage} alt="Priyal Nanda" />
          </div>

          <h1>Hello, I'm <span className="highlight">Priyal Nanda</span></h1>
          <p className="typing-effect"><TypingEffect /></p>

          <div className="social-links">
            <a href="https://linkedin.com/in/priyal-nanda" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:nandapriyal2003@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://instagram.com/Priyal_nanda" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/nandapriyal2003" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          <p className="hero-summary">
            Strategic and analytical professional with hands-on experience in data analytics, distributed systems,
            and data-driven product development. Demonstrated ability to translate complex datasets into actionable
            insights, build scalable solutions, and support decision-making across cross-functional teams.
            Particularly interested in working at the intersection of technology, analytics, and real-world
            impact to drive meaningful outcomes.
          </p>

        </div>
      </section>

      {/* EXPERIENCE — BLACK */}
      <section id="experience" className="section-dark experience-section">
        <h2>My Experience</h2>
        <div className="projects-container">

          <div className="project-card">
            <div className="card-header-flex">
              <img src={hackherLogo} alt="Hack(H)er413 Logo" className="exp-logo" />
              <h3>Hack(H)er413 | Technical Team Lead</h3>
            </div>
            <p><strong>Oct 2024 – Present</strong></p>
            <ul>
              <li>Developed a registration dashboard for 500+ attendees; optimized backend workflows to automate event processes.</li>
              <li>Enhanced hackathon website UI/UX with HTML, CSS, JavaScript, improving accessibility and engagement by 30%.</li>
              <li>Integrated analytics tools to monitor participant engagement and led technical coordination across the team.</li>
            </ul>
          </div>

          <div className="project-card">
            <div className="card-header-flex">
              <img src={siemensLogo} alt="Siemens Logo" className="exp-logo" />
              <h3>Siemens Healthineers | Data Governance Intern</h3>
            </div>
            <p><strong>Jun 2024 – Aug 2024</strong></p>
            <ul>
              <li>Developed and implemented over 8 Power BI dashboards to analyze customer data from SAP systems.</li>
              <li>Leveraged Azure Databricks, Snowflake, and SQL to cleanse 10,000+ customer records.</li>
              <li>Analyzed 100+ critical data elements to deliver a comprehensive Install Base data product.</li>
            </ul>
          </div>

          <div className="project-card">
            <div className="card-header-flex">
              <img src={dreamLogo} alt="Dream Lab Logo" className="exp-logo" />
              <h3>Dream Lab - Research for Exploration, Analytics, & Modeling | Data Analytics Assistant</h3>
            </div>
            <p><strong>Sep 2023 – Feb 2024</strong></p>
            <ul>
              <li>Designed an incremental data analysis algorithm improving accuracy by 15%.</li>
              <li>Optimized SQL queries using window functions, reducing execution time by 20%.</li>
              <li>Strengthened expertise in SQL optimization and data-driven decision making.</li>
            </ul>
          </div>

          <div className="project-card">
            <div className="card-header-flex">
              <img src={buildLogo} alt="BUILD UMass Logo" className="exp-logo" />
              <h3>BUILD UMass | Technical Analyst</h3>
            </div>
            <p><strong>Feb 2023 – May 2025</strong></p>
            <ul>
              <li>Conducted Python-based analytics for a multilingual health application.</li>
              <li>Collaborated with developers using AWS and Azure DevOps pipelines.</li>
              <li>Evaluated performance using AWS S3 analytics.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS — GREEN */}
      <section id="projects" className="section-green projects-section">
        <h2>My Projects</h2>
        <div className="projects-container">

          <div className="project-card">
            <h3>Personal Website</h3>
            <p>Designed and developed a fully responsive portfolio using React.</p>
            <p><strong>Tech:</strong> React, Node.js, HTML, CSS</p>
            <a href="https://nandapriyal2003.github.io/personal-website/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>

          <div className="project-card">
            <h3>Social Discovery App</h3>
            <p>Music-based social platform integrating Spotify API.</p>
            <p><strong>Tech:</strong> React, SQLite, Spotify API</p>
            <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
          </div>

          <div className="project-card">
            <h3>Hack(H)er413 Website</h3>
            <p>Redesigned and deployed the official hackathon website and the Application Dashboard.</p>
            <p><strong>Tech:</strong> React, MongoDB, AWS (SES, EC2)</p>
            <a href="https://www.hackher413.com" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>

        </div>
      </section>

      {/* EDUCATION — BLACK */}
      <section id="education" className="section-dark education-section">
        <h2>Education & Certifications</h2>
        <div className="education-container">

          <div className="project-card">
            <h3>University of Massachusetts Amherst</h3>
            <p><strong>B.S. Computer Science</strong></p>
            <p>Minor in Business</p>
            <p>Expected Graduation: May 2026</p>
          </div>

          <div className="project-card">
            <h3>Certifications</h3>

            <div className="cert-item">
              <FontAwesomeIcon icon={faGoogle} />&nbsp;
              Data Analytics Professional
            </div>

            <div className="cert-item">
              <FontAwesomeIcon icon={faAws} />&nbsp;
              Cloud Solutions Architect
            </div>

            <div className="cert-item">
              <FontAwesomeIcon icon={faMicrosoft} />&nbsp;
              Power BI Data Analyst
            </div>

          </div>

        </div>
      </section>

      {/* SKILLS — GREEN */}
      <section id="skills" className="section-green skills-section">
        <h2>My Skills</h2>
        <SkillsMindMap />
      </section>

      {/* LEADERSHIP — BLACK */}
      <section id="leadership" className="leadership-section">
        <h2>Leadership</h2>
        <div className="projects-container">
          <div className="project-card">Resident Assistant — Residential Life</div>
          <div className="project-card">Tech Team Director - Hack(H)er413</div>
          <div className="project-card">Undergraduate Course Assistant — CICS</div>
          <div className="project-card">Peer Advisor — CS Department</div>
        </div>
      </section>

      {/* CONTACT — GRADIENT */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Feel free to reach out via email, social media, or phone number.
        </p>

        <div className="contact-details">
          <p>Email: <a href="mailto:nandapriyal2003@gmail.com">nandapriyal2003@gmail.com</a></p>
          <p>Phone: +1 (617) 642-8502</p>
        </div>

        <div className="social-links" style={{ marginTop: '30px' }}>
          <a href="https://linkedin.com/in/priyal-nanda" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:nandapriyal2003@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://instagram.com/Priyal_nanda" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com/nandapriyal2003" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </section>

      <footer className="footer">
        © 2025 Priyal Nanda. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
