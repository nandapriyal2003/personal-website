import React, { useEffect, useRef, useState } from 'react';
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

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Gradient scroll progress bar */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

/* Small tech-tag chips */
function TechTags({ tags }) {
  return (
    <div className="tech-tags">
      {tags.map((t) => (
        <span key={t} className="tech-tag">{t}</span>
      ))}
    </div>
  );
}

function SectionHeader({ kicker, title }) {
  return (
    <div className="section-header">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <ScrollProgress />

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">PN<span className="logo-dot">.</span></a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li>
            <a
              href="https://drive.google.com/file/d/1EE4RA5Agufz388-vzAtSthcP67HnSMjS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <a href="#contact" className="cta-button">Let’s Talk ✨</a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="hero-content">
          <div className="hero-image">
            <img src={profileImage} alt="Priyal Nanda" />
          </div>

          <h1>Hi, I'm <span className="highlight">Priyal Nanda</span> 👋</h1>
          <p className="typing-effect"><TypingEffect /></p>

          <div className="hero-badges">
            <span className="hero-badge">🎓 UMass Amherst '26</span>
            <span className="hero-badge">💻 CS + Business</span>
            <span className="hero-badge">📊 Data × Product</span>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/priyal-nanda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:nandapriyal2003@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://instagram.com/Priyal_nanda" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/nandapriyal2003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          <p className="hero-summary">
            Strategic and analytical professional with hands-on experience in data analytics, distributed systems,
            and data-driven product development. I love translating messy datasets into actionable insights,
            building scalable solutions, and working at the intersection of technology, analytics, and
            real-world impact.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <SectionHeader kicker="💼 Where I've worked" title="Experience" />
        <div className="projects-container">

          <Reveal>
            <div className="project-card accent-sky">
              <div className="card-header-flex">
                <img src={hackherLogo} alt="Hack(H)er413 Logo" className="exp-logo" />
                <h3>Hack(H)er413 · Technical Team Lead</h3>
              </div>
              <p className="card-date">Oct 2024 – Present</p>
              <ul>
                <li>Led development of a full-stack registration platform using React and Node.js that supported 500+ participants and served as the primary event management system.</li>
                <li>Built REST APIs and integrated AWS SES for automated email workflows, reducing manual communication overhead.</li>
                <li>Deployed and maintained production infrastructure on AWS EC2 while improving frontend performance and accessibility, increasing user engagement by 35%.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-violet">
              <div className="card-header-flex">
                <img src={siemensLogo} alt="Siemens Logo" className="exp-logo" />
                <h3>Siemens Healthineers · Data Governance Intern</h3>
              </div>
              <p className="card-date">Jun 2024 – Aug 2024</p>
              <ul>
                <li>Developed and implemented over 8 Power BI dashboards to analyze customer data from SAP systems.</li>
                <li>Leveraged Azure Databricks, Snowflake, and SQL to cleanse 10,000+ customer records; built geospatial clustering models with GeoPandas.</li>
                <li>Analyzed 100+ critical data elements to deliver a comprehensive Install Base data product.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="project-card accent-pink">
              <div className="card-header-flex">
                <div className="exp-logo exp-logo-emoji">🔬</div>
                <h3>HCI-VIS Lab · Research Intern</h3>
              </div>
              <p className="card-date">May 2023 – May 2025</p>
              <ul>
                <li>Developed a GPT-4 based detection pipeline for identifying misleading visualizations, applying prompt engineering techniques across 9.9K labeled examples and 3.2K tweet-visualization pairs.</li>
                <li>Designed and evaluated zero-shot and few-shot prompting strategies, improving model performance by 38% in detecting misleading visualizations.</li>
                <li>Evaluated model performance across multiple prompting approaches to identify effective strategies for visual misinformation detection.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-mint">
              <div className="card-header-flex">
                <img src={dreamLogo} alt="Dream Lab Logo" className="exp-logo" />
                <h3>Dream Lab · Data Analytics Assistant</h3>
              </div>
              <p className="card-date">Sep 2023 – Feb 2024</p>
              <ul>
                <li>Designed an incremental data analysis algorithm improving accuracy by 15%.</li>
                <li>Optimized SQL queries using window functions, reducing execution time by 20%.</li>
                <li>Strengthened expertise in SQL optimization and data-driven decision making.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="project-card accent-amber">
              <div className="card-header-flex">
                <img src={buildLogo} alt="BUILD UMass Logo" className="exp-logo" />
                <h3>BUILD UMass · Product Manager</h3>
              </div>
              <p className="card-date">Feb 2023 – May 2025</p>
              <ul>
                <li>Utilized the MERN stack to develop a client webpage, with a primary focus on the frontend using React.js.</li>
                <li>Led meetings with internal team members, clients, and project leads.</li>
                <li>Oversaw end-to-end website development, including design and optimization, ensuring a cohesive online presence.</li>
              </ul>
            </div>
          </Reveal>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-alt projects-section">
        <SectionHeader kicker="🛠️ Things I've built" title="Projects" />
        <div className="projects-container">

          <Reveal>
            <div className="project-card accent-sky">
              <h3>🤖 Nova Agent</h3>
              <p>Personal AI life-ops agent — a Discord-based assistant powered by an LLM agent gateway that
                manages tasks, notes, and daily planning across Notion and Obsidian, with persistent memory,
                scheduled routines, and a Next.js dashboard.</p>
              <TechTags tags={['AI Agents', 'Discord', 'Notion API', 'Next.js', 'Node.js']} />
              <a href="https://github.com/nandapriyal2003/nova-core" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-amber">
              <h3>⚡ Study Spark</h3>
              <p>Turns raw lecture notes into structured, AI-generated study summaries — paste your notes,
                get clean outlines and key takeaways in seconds.</p>
              <TechTags tags={['React', 'Vite', 'OpenAI API', 'Vercel Serverless']} />
              <a href="https://github.com/nandapriyal2003/studyspark" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="project-card accent-mint">
              <h3>🧠 Distributed Vector Databases</h3>
              <p>Research on distributed vector database architectures — scaling embedding storage and
                similarity search across nodes for large-scale AI workloads.</p>
              <TechTags tags={['Research', 'Vector Databases', 'Distributed Systems']} />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-violet">
              <h3>📊 Detecting Misleading Visualizations — IEEE VIS 2024</h3>
              <p>Published short paper studying the ability of GPT-4 models to detect misleading visualizations
                by analyzing thousands of tweet–visualization pairs and evaluating reasoning performance.</p>
              <TechTags tags={['Python', 'GPT-4', 'Prompt Engineering', 'NLP', 'Data Analysis']} />
              <a href="https://doi.org/10.48550/arXiv.2408.12617" target="_blank" rel="noopener noreferrer">
                View Publication (DOI) →
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-mint">
              <h3>🎧 Spotifynder</h3>
              <p>Music-based social discovery platform — sign in with Spotify to build a profile from your music
                taste and get matched with people who share it.</p>
              <TechTags tags={['React', 'SQLite', 'Spotify API']} />
              <a href={`${process.env.PUBLIC_URL}/spotifynder-demo.mp4`} target="_blank" rel="noopener noreferrer">
                Watch Demo →
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="project-card accent-pink">
              <h3>💼 SwipeHire — Job Search App</h3>
              <p>Full-stack web app that helps college students discover jobs and internships through an
                intuitive swipe-based interface, automatically ranking opportunities by resume and skill matching.</p>
              <TechTags tags={['React.js', 'Django', 'PostgreSQL', 'REST APIs']} />
              <a href="https://drive.google.com/file/d/1YjAxYyWw4cCDezqE0MGVUJriipxFPqfq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Watch Demo →
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-sky">
              <h3>🚀 Hack(H)er413 Website</h3>
              <p>Redesigned and deployed the official hackathon website and the Application Dashboard used by
                hundreds of applicants.</p>
              <TechTags tags={['React', 'MongoDB', 'AWS SES', 'AWS EC2']} />
              <a href="https://www.hackher413.com" target="_blank" rel="noopener noreferrer">
                Visit Website →
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="project-card accent-amber">
              <h3>🛡️ Hate Speech Detection with ML</h3>
              <p>Research project analyzing methods and datasets for hate speech detection, proposing effective
                machine-learning approaches to combat its spread on social media.</p>
              <TechTags tags={['Python', 'Machine Learning', 'NLP', 'Research']} />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-violet">
              <h3>🌸 Personal Website</h3>
              <p>The site you're looking at! Designed and built from scratch — fully responsive, animated, and
                deployed on GitHub Pages.</p>
              <TechTags tags={['React', 'CSS', 'GitHub Pages']} />
              <a href="https://github.com/nandapriyal2003/personal-website" target="_blank" rel="noopener noreferrer">
                View Source →
              </a>
            </div>
          </Reveal>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <SectionHeader kicker="🎓 Where I've studied" title="Education & Certifications" />
        <div className="education-container">

          <Reveal>
            <div className="project-card accent-amber edu-card">
              <h3>University of Massachusetts Amherst</h3>
              <p><strong>B.S. Computer Science</strong> · Minor in Business</p>
              <p className="card-date">Class of 2026</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="project-card accent-sky edu-card">
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
          </Reveal>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-alt skills-section">
        <SectionHeader kicker="🧰 My toolbox" title="Skills" />
        <SkillsMindMap />
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="section leadership-section">
        <SectionHeader kicker="🌟 Beyond the code" title="Leadership" />
        <div className="projects-container leadership-grid">
          <Reveal><div className="project-card lead-card">🏠 Resident Assistant — Residential Life</div></Reveal>
          <Reveal delay={60}><div className="project-card lead-card">⚡ Head of Technology — Hack(H)er413</div></Reveal>
          <Reveal delay={120}><div className="project-card lead-card">🧑‍🏫 Undergraduate Course Assistant — CICS</div></Reveal>
          <Reveal><div className="project-card lead-card">🧭 Peer Advisor — CS Department</div></Reveal>
          <Reveal delay={60}><div className="project-card lead-card">💰 Treasurer — Indian Student Union</div></Reveal>
          <Reveal delay={120}><div className="project-card lead-card">🏛️ Senator — Student Government Association</div></Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <SectionHeader kicker="📬 Say hello" title="Let's build something together" />
        <p className="contact-blurb">
          Whether it's a role, a project, or just a good conversation about data — my inbox is always open.
        </p>

        <a href="mailto:nandapriyal2003@gmail.com" className="cta-button cta-large">
          nandapriyal2003@gmail.com
        </a>

        <div className="social-links" style={{ marginTop: '34px' }}>
          <a href="https://linkedin.com/in/priyal-nanda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:nandapriyal2003@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://instagram.com/Priyal_nanda" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com/nandapriyal2003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </section>

      <footer className="footer">
        © 2026 Priyal Nanda · Designed & built with 💜 and React
      </footer>

    </div>
  );
}

export default App;
