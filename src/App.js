import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TypingEffect from './TypingEffect';
import {
  faGoogle,
  faAws,
  faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

import './App.css';

// Assets
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
            <p className="hero-summary"> Computer Science student at the University of Massachusetts Amherst with experience in 
              data analytics, distributed systems, and product-focused development. I enjoy building
              scalable solutions, translating data into insights, and working at the intersection of
              technology and real-world impact.</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience-section">
        <h2>My Experience</h2>
        <div className="projects-container">

          <div className="project-card">
            <h3>Siemens Healthineers | Data Governance Intern</h3>
            <p><strong>Jun 2024 – Aug 2024</strong></p>
            <ul>
              <li>Developed and implemented over 8 Power BI dashboards to analyze customer data from SAP systems, generating insights that enhanced the Customer Data framework model.</li>
              <li>Leveraged Azure Data Bricks, Snowflake, and SQL to cleanse 10,000+ customer records, resolving data discrepancies and creating geospatial clustering models using GeoPandas, directly improving data accuracy.</li>
              <li>Streamlined roadmaps and data framework models for the Install Base Data Product, analyzing Data Quality documents, assessing over 100 critical data elements, & defining business roles & stewardship to deliver a comprehensive data product.</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Dream Lab – Research for Exploration, Analytics, & Modeling | Data Analytics Assistant</h3>
            <p><strong>Sep 2023 – Feb 2024</strong></p>
            <ul>
              <li>Designed a novel algorithm for incremental data analysis, enabling real-time parameter adjustments and improving model accuracy by 15% compared to traditional batch processing methods.</li>
              <li>Leveraged advanced SQL window functions and partitioning to optimize data retrieval processes, decreasing query execution time by 20% and expediting data analysis workflows.</li>
              <li>Gained expertise in database management, SQL optimization, and data driven decision-making.</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>BUILD UMass (Tech for Social Impact Initiative) | Technical Analyst</h3>
            <p><strong>Feb 2023 – May 2025</strong></p>
            <ul>
              <li>Conducted data-driven research and requirements analysis for a multilingual period-tracking app serving 10K+ potential users in India, identifying trends through Python-based analytics.</li>
              <li>Collaborated with 7+ developers to design and optimize feature pipelines in Azure DevOps and AWS, improving sprint efficiency and engagement.</li>
              <li>Oversaw localization, testing, and AWS-based analytics (S3) to evaluate performance and guide iterative design updates.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS — MOVED HERE */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-container">

          <div className="project-card">
            <h3>1. Personal website</h3>
            <p>
              Designed and developed a fully responsive personal portfolio website to showcase projects, skills, and experiences.
              Implemented modern design principles using React.js, styled-components, and CSS for an engaging user interface.
            </p>
            <p><strong>Technologies:</strong> React.js, Node.js, HTML, CSS, Javascript</p>
            <a href="https://nandapriyal2003.github.io/personal-website/" target="_blank" rel="noopener noreferrer">
              Visit Personal Website
            </a>
          </div>

          <div className="project-card">
            <h3>2. Social Discovery App</h3>
            <p>
              Built a platform for college students to connect through shared music interests.
              Integrated Spotify API for personalized user experiences.
            </p>
            <p><strong>Technologies:</strong> React.js, Node.js, SQLite, Spotify API</p>
            <a href="https://drive.google.com/file/d/1pYIouPuIdCKcnej8E2lvKDH6VBxOVxUc/view?usp=share_link" target="_blank" rel="noopener noreferrer">
              Watch Demo Video
            </a>
          </div>

          <div className="project-card">
            <h3>3. Hack(H)er413 Website</h3>
            <p>
              Helped with making changes to the website to match the color scheme, updated all relevant information,
              created a dashboard to apply for the hackathon from scratch, and deployed it onto Heroku.
            </p>
            <p><strong>Technologies:</strong> React.js, Node.js, MongoDB, Heroku, CSS, GitHub Pages</p>
            <a href="https://www.hackher413.com" target="_blank" rel="noopener noreferrer">
              Visit HackHer Website
            </a>
          </div>

        </div>
      </section>
      {/* EDUCATION */}
<section id="education" className="projects-section">
  <h2>Education</h2>

  <div className="projects-container">

    {/* Degree Card */}
    <div className="project-card">
      <h3>University of Massachusetts Amherst</h3>
      <p><strong>Bachelor of Science in Computer Science</strong></p>
      <p>Minor in Business</p>
      <p>Expected Graduation: Fall 2025</p>
    </div>

    {/* Certifications Card */}
<div className="project-card">
  <h3>Certifications</h3>

  <div className="cert-list">

    <div className="cert-item">
      <FontAwesomeIcon icon={faGoogle} size="lg" />
      <div>
        <strong>Google</strong> — Data Analytics Professional Certificate<br />
        <a
          href="https://drive.google.com/file/d/1T-ysNsud1xMAp5OuU44tDIgs1WCHUYAZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Credential
        </a>
      </div>
    </div>

    <div className="cert-item">
      <FontAwesomeIcon icon={faAws} size="lg" />
      <span><strong>AWS</strong> — Cloud Solutions Architect (Coursework)</span>
    </div>

    <div className="cert-item">
      <FontAwesomeIcon icon={faMicrosoft} size="lg" />
      <span><strong>Microsoft</strong> — Power BI Data Analyst (Coursework)</span>
    </div>

    <div className="cert-item">
      <FontAwesomeIcon icon={faCertificate} size="lg" />
      <span><strong>Coursera</strong> — Applied Data Analytics & Visualization</span>
    </div>

  </div>
</div>

  </div>

</section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-list">

          <div className="skill-item"><img src={pythonimg} alt="Python" /><span>Python</span></div>
          <div className="skill-item"><img src={SQLimg} alt="SQL" /><span>SQL</span></div>
          <div className="skill-item"><img src={javaimg} alt="Java" /><span>Java</span></div>
          <div className="skill-item"><img src={javascriptimg} alt="JavaScript" /><span>JavaScript</span></div>
          <div className="skill-item"><img src={postgresqlimg} alt="PostgreSQL" /><span>PostgreSQL</span></div>
          <div className="skill-item"><img src={typescriptimg} alt="TypeScript" /><span>TypeScript</span></div>
          <div className="skill-item"><img src={rimg} alt="R" /><span>R</span></div>
          <div className="skill-item"><img src={htmlimg} alt="HTML" /><span>HTML</span></div>
          <div className="skill-item"><img src={cssimg} alt="CSS" /><span>CSS</span></div>
          <div className="skill-item"><img src={cimg} alt="C" /><span>C</span></div>
          <div className="skill-item"><img src={powerbiimg} alt="Power BI" /><span>Power BI</span></div>
          <div className="skill-item"><img src={databricksimg} alt="Databricks" /><span>Databricks</span></div>
          <div className="skill-item"><img src={snowflakeimg} alt="Snowflake" /><span>Snowflake</span></div>
          <div className="skill-item"><img src={tableauimg} alt="Tableau" /><span>Tableau</span></div>
          <div className="skill-item"><img src={jiraimg} alt="Jira" /><span>Jira</span></div>
          <div className="skill-item"><img src={awsimg} alt="AWS" /><span>AWS</span></div>
          <div className="skill-item"><img src={excelimg} alt="Excel" /><span>Excel</span></div>
          <div className="skill-item"><img src={reactjsimg} alt="React" /><span>React</span></div>
          <div className="skill-item"><img src={nextjsimg} alt="Next.js" /><span>Next.js</span></div>
          <div className="skill-item"><img src={nodejsimg} alt="Node.js" /><span>Node.js</span></div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="projects-section">
        <h2>Leadership</h2>
        <div className="projects-container">
          <div className="project-card"><h3>Resident Assistant — Residential Life</h3></div>
          <div className="project-card"><h3>Vice President — Indian Student Union</h3></div>
          <div className="project-card"><h3>Undergraduate Course Assistant — Manning College of CICS</h3></div>
          <div className="project-card"><h3>Peer Advisor — Computer Science Department</h3></div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email, phone, or social media!</p>
        <div className="contact-details">
          <p><strong>Email:</strong> <a href="mailto:nandapriyal2003@gmail.com">nandapriyal2003@gmail.com</a></p>
          <p><strong>Phone:</strong> +1 (617) 642-8502</p>
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
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Priyal Nanda. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
