import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TypingEffect from './TypingEffect'; // Typing effect component
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="/Priyal_Nanda_Resume.pdf" download>Resume</a></li>
          
        </ul>
        <a href="#contact" className="cta-button">Let’s Talk</a>
        </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
  <div className="hero-content">
    {/* Profile Picture with Glowing Hexagonal Border */}
    <div className="hero-image">
      <img src="/public/pfp_pn.jpeg" alt="Priyal Nanda"/>
    </div>
    <h1>
      Hello, I'm <span className="highlight">Priyal Nanda</span>
    </h1>
    <p className="typing-effect">
      <TypingEffect />
    </p>
    <div className="social-links">
      <a href="https://linkedin.com/in/priyal-nanda" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:nandapriyal2003@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://instagram.com/Priyal_nanda" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  </div>
</section>



{/* Experience Section */}
<section id="experience" className="experience-section">
  <h2>My Experiences</h2>
  <div className="experience-container">
    <div className="experience-card">
    <div className="experience-card">
      <h3>1. HCI-VIS Lab | Research Intern (<a href="https://arxiv.org/abs/2408.12617" target="_blank" rel="noopener noreferrer">Publication Link</a>)</h3>
      <p>May 2023 – Present</p>
      <ul>
        <li>Developing a model to identify deceptive data visualization, addressing the spread of misinformation.</li>
        <li>Leveraging Convolutional Neural Networks (CNN) and Large Language Models (LLM) for deep learning analysis.</li>
        <li>Proficiently coding Machine Learning algorithms in Python (TensorFlow, PyTorch, and Keras) for accurate classification.</li>
      </ul>
    </div>
      <h3>2. Siemens Healthineers | Data Governance Intern</h3>
      <p>June 2023 - August 2023</p>
      <ul>
        <li>
          Developed and implemented Power BI dashboards to analyze customer data from SAP systems, generating insights
          that enhanced the Customer Data framework model.
        </li>
        <li>
          Utilized Azure Data Bricks and SQL for backend data analysis, addressing discrepancies and creating geospatial
          clustering models using the GeoPandas library in Python.
        </li>
        <li>
          Designed roadmaps and 80% of the data framework model for the Install Base Data Product, analyzing Data Quality
          documents, improving them by 20%, assessing over 100 critical data elements, and defining business roles and
          stewardship to deliver a comprehensive data product.
        </li>
        <li>
          Restructured SharePoint site and updated Microsoft Purview Data Catalog, improving governance by 30% for our
          digital products.
        </li>
      </ul>
    </div>
    <div className="experience-card">
      <h3>3. Build UMass | Product Manager</h3>
      <p>September 2022 - Present</p>
      <ul>
        <li>Utilizing the MERN stack for developing a webpage for the client, with a primary focus on the frontend using React.js.</li>
        <li>Leading meetings with internal team members, clients, and project leads.</li>
        <li>Overseeing end-to-end website development, including design and optimization while ensuring a cohesive online presence.</li>
      </ul>
    </div>
    <div className="experience-card">
      <h3>4. Dream Lab | Research Assistant</h3>
      <p>October 2023 - February 2024</p>
      <ul>
        <li>Worked on the development of a tool aimed at selecting optimal values for expansive datasets in an incremental manner.</li>
        <li>Condensed large datasets by employing advanced SQL techniques to efficiently query data, reducing runtime by 20%.</li>
        <li>Gained expertise in database management, SQL optimization, and data-driven decision-making.</li>
      </ul>
    </div>
    <div className="experience-card">
      <h3>5. University of Massachusetts Amherst | Undergraduate Course Assistant</h3>
      <p>September 2022 - December 2022</p>
      <ul>
        <li>
          Taught 200+ students programming constructs, data abstractions, and object-oriented programming in Python while
          supporting faculty with office hour questions and promoting supplemental resources.
        </li>
        <li>
          Led review sessions and study groups for students to reinforce earning and provide additional academic support.
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <img src="https://drive.google.com/file/d/1rplkaySeddt5Lk5U6CsDwAiPDnaByZYd/view?usp=share_link" alt="Python" />
            <span>Python</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/react.svg" alt="JAVA" />
            <span>JAVA</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/javascript.svg" alt="Javascript" />
            <span>Javascript</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/postgresql.svg" alt="PostgreSQL" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/typescript.svg" alt="Typescript" />
            <span>Typescript</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/r.svg" alt="R" />
            <span>R</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/html5.svg" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/css.svg" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/c.svg" alt="C" />
            <span>C</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/powerbi.jpg" alt="Power BI" />
            <span>Power BI</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/databricks.svg" alt="Databricks" />
            <span>Databricks</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/tableau.png" alt="Tableau" />
            <span>Tableau</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/jira.jpg" alt="Jira" />
            <span>Jira</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/react.svg" alt="React.js" />
            <span>React.js</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/nextdotjs.svg" alt="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="skill-item">
            <img src="/skill_icon/nodedotjs.svg" alt="Node.js" />
            <span>Node.js</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
  <p>
    <strong>Technologies:</strong> React.js, Node.js, SQLite, Spotify API
  </p>
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
  <p>
    <strong>Technologies:</strong> React.js, Node.js, MongoDB, Heroku, CSS, GitHub Pages
  </p>
  <a href="https://www.hackher413.com" target="_blank" rel="noopener noreferrer">
    Visit HackHer Website
  </a>
</div>
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="contact-section">
  <h2>Contact Me</h2>
  <p>Feel free to reach out via email, phone, or social media!</p>
  <div className="contact-details">
    <p><strong>Email:</strong> <a href="mailto:nandapriyal2003@gmail.com">nandapriyal2003@gmail.com</a></p>
    <p><strong>Phone:</strong> +1 (617) 642-8502</p> {/* Replace with your real phone number */}
    <div className="social-links">
      <a href="https://linkedin.com/in/priyal-nanda" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:nandapriyal2003@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://instagram.com/Priyal_nanda" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Priyal Nanda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
