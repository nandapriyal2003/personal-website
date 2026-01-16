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
import './App.css';

/* Assets */
import profileImage from './assets/pfp_pn.jpg';
import cimg from './assets/c.png';
import cssimg from './assets/css.png';
import databricksimg from './assets/databricks.png';
import htmlimg from './assets/html.png';
import javaimg from './assets/java.png';
import javascriptimg from './assets/javascript.png';
import postgresqlimg from './assets/postgresql.png';
import powerbiimg from './assets/powerbi.png';
import rimg from './assets/r.png';
import tableauimg from './assets/tableau.png';
import typescriptimg from './assets/typescript.png';
import jiraimg from './assets/jira.png';
import nextjsimg from './assets/nextjs.png';
import nodejsimg from './assets/nodejs.png';
import reactjsimg from './assets/react.png';
import pythonimg from './assets/python.png';
import SQLimg from './assets/SQL.png';
import awsimg from './assets/aws.png';
import snowflakeimg from './assets/snowflake.png';
import excelimg from './assets/excel.png';

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
            Strategic and analytical professional with hands-on experience in data analytics,
            distributed systems, and data-driven product development. Demonstrated ability to
            translate complex datasets into actionable insights, build scalable solutions, and
            support decision-making across cross-functional teams. Particularly interested in
            working at the intersection of technology, analytics, and real-world impact to drive
            meaningful outcomes.
          </p>

        </div>
      </section>

      {/* EXPERIENCE — BLACK */}
      <section id="experience" className="section-dark experience-section">
        <h2>My Experience</h2>
        <div className="projects-container">

          <div className="project-card">
            <h3>Siemens Healthineers | Data Governance Intern</h3>
            <p><strong>Jun 2024 – Aug 2024</strong></p>
            <ul>
              <li>Developed and implemented over 8 Power BI dashboards to analyze customer data from SAP systems.</li>
              <li>Leveraged Azure Databricks, Snowflake, and SQL to cleanse 10,000+ customer records.</li>
              <li>Analyzed 100+ critical data elements to deliver a comprehensive Install Base data product.</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Dream Lab - Research for Exploration, Analytics, & Modeling | Data Analytics Assistant</h3>
            <p><strong>Sep 2023 – Feb 2024</strong></p>
            <ul>
              <li>Designed an incremental data analysis algorithm improving accuracy by 15%.</li>
              <li>Optimized SQL queries using window functions, reducing execution time by 20%.</li>
              <li>Strengthened expertise in SQL optimization and data-driven decision making.</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>BUILD UMass | Technical Analyst</h3>
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
            <p>
              Designed and developed a fully responsive personal portfolio website to showcase
              projects, skills, and experiences using modern React-based UI patterns.
            </p>
            <p><strong>Technologies:</strong> React, Node.js, HTML, CSS</p>
            <a
              href="https://nandapriyal2003.github.io/personal-website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>

          <div className="project-card">
            <h3>Social Discovery App</h3>
            <p>
              Built a social platform enabling students to connect through shared music interests,
              integrating Spotify APIs for personalized experiences.
            </p>
            <p><strong>Technologies:</strong> React, SQLite, Spotify API</p>
          </div>

          <div className="project-card">
            <h3>Hack(H)er413 Website</h3>
            <p>
              Redesigned and deployed the official hackathon website and application dashboard,
              improving usability and deployment reliability.
            </p>
            <p><strong>Technologies:</strong> React, MongoDB, AWS</p>
          </div>

        </div>
      </section>

      {/* EDUCATION — BLACK */}
      <section id="education" className="section-dark education-section">
        <h2>Education & Certifications</h2>
        <div className="education-container">

          <div className="project-card">
            <h3>University of Massachusetts Amherst</h3>
            <p><strong>Bachelor of Science in Computer Science</strong></p>
            <p>Minor in Business</p>
            <p>Expected Graduation: May 2026</p>
          </div>

          <div className="project-card">
            <h3>Certifications</h3>

            <div className="cert-item">
              <FontAwesomeIcon icon={faGoogle} />&nbsp;
              Google Data Analytics Professional Certificate
            </div>

            <div className="cert-item">
              <FontAwesomeIcon icon={faAws} />&nbsp;
              AWS Cloud Solutions Architect (Coursework)
            </div>

            <div className="cert-item">
              <FontAwesomeIcon icon={faMicrosoft} />&nbsp;
              Microsoft Power BI Data Analyst (Coursework)
            </div>

          </div>

        </div>
      </section>

      {/* SKILLS — GREEN WITH LEFT-MOVING TICKER */}
      <section id="skills" className="section-green skills-section">
        <h2>My Skills</h2>

        <div className="skills-ticker">
          <div className="skills-track">

            {[
              { img: pythonimg, name: 'Python' },
              { img: SQLimg, name: 'SQL' },
              { img: javaimg, name: 'Java' },
              { img: javascriptimg, name: 'JavaScript' },
              { img: postgresqlimg, name: 'PostgreSQL' },
              { img: typescriptimg, name: 'TypeScript' },
              { img: rimg, name: 'R' },
              { img: htmlimg, name: 'HTML' },
              { img: cssimg, name: 'CSS' },
              { img: cimg, name: 'C' },
              { img: powerbiimg, name: 'Power BI' },
              { img: databricksimg, name: 'Databricks' },
              { img: snowflakeimg, name: 'Snowflake' },
              { img: tableauimg, name: 'Tableau' },
              { img: jiraimg, name: 'Jira' },
              { img: awsimg, name: 'AWS' },
              { img: excelimg, name: 'Excel' },
              { img: reactjsimg, name: 'React' },
              { img: nextjsimg, name: 'Next.js' },
              { img: nodejsimg, name: 'Node.js' }
            ]
            .concat(
              [
                { img: pythonimg, name: 'Python' },
                { img: SQLimg, name: 'SQL' },
                { img: javaimg, name: 'Java' },
                { img: javascriptimg, name: 'JavaScript' },
                { img: postgresqlimg, name: 'PostgreSQL' },
                { img: typescriptimg, name: 'TypeScript' },
                { img: rimg, name: 'R' },
                { img: htmlimg, name: 'HTML' },
                { img: cssimg, name: 'CSS' },
                { img: cimg, name: 'C' },
                { img: powerbiimg, name: 'Power BI' },
                { img: databricksimg, name: 'Databricks' },
                { img: snowflakeimg, name: 'Snowflake' },
                { img: tableauimg, name: 'Tableau' },
                { img: jiraimg, name: 'Jira' },
                { img: awsimg, name: 'AWS' },
                { img: excelimg, name: 'Excel' },
                { img: reactjsimg, name: 'React' },
                { img: nextjsimg, name: 'Next.js' },
                { img: nodejsimg, name: 'Node.js' }
              ]
            )
            .map((skill, index) => (
              <div className="ticker-item" key={index}>
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* LEADERSHIP — BLACK */}
      <section id="leadership" className="leadership-section section-dark">
        <h2>Leadership</h2>
        <div className="projects-container">
          <div className="project-card">Resident Assistant — Residential Life</div>
          <div className="project-card">Vice President — Indian Student Union</div>
          <div className="project-card">Undergraduate Course Assistant — CICS</div>
          <div className="project-card">Peer Advisor — Computer Science Department</div>
        </div>
      </section>

      {/* CONTACT — GRADIENT */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:nandapriyal2003@gmail.com">nandapriyal2003@gmail.com</a></p>
        <p>Phone: +1 (617) 642-8502</p>
      </section>

      <footer className="footer">
        © 2025 Priyal Nanda. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
