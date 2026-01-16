import React, { useState, useEffect, useRef } from 'react';
import './SkillsMindMap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faUserTie, faGlobe, faServer, faFileAlt, faBrain, faComments, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAws, faGithub, faMicrosoft, faGitAlt, faPython, faJava, faJsSquare, faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';

/* Import Images */
import pythonimg from './assets/python.png';
import javaimg from './assets/java.png';
import sqlimg from './assets/SQL.png';
import javascriptimg from './assets/javascript.png';
import typescriptimg from './assets/typescript.png';
import rimg from './assets/r.png';
import cimg from './assets/c.png';

import powerbiimg from './assets/powerbi.png';
import databricksimg from './assets/databricks.png';
import snowflakeimg from './assets/snowflake.png';
import postgresqlimg from './assets/postgresql.png';
import tableauimg from './assets/tableau.png';
import excelimg from './assets/excel.png';
import awsimg from './assets/aws.png';
import jiraimg from './assets/jira.png';    

import reactjsimg from './assets/react.png';
import nodejsimg from './assets/nodejs.png';
import nextjsimg from './assets/nextjs.png';

/* Define Data Structure */
const skillCategories = [
    {
        id: 'prog-lang',
        title: 'Programming Languages',
        icon: faCode,
        skills: [
            { name: 'Python', icon: faPython },
            { name: 'Java', icon: faJava },
            { name: 'SQL', img: sqlimg },
            { name: 'JavaScript', icon: faJsSquare },
            { name: 'TypeScript', img: typescriptimg }, // TS usually has faJsSquare lookalike or keep img
            { name: 'R', img: rimg },
            { name: 'C', img: cimg },
        ]
    },
    {
        id: 'data-tools',
        title: 'Data & Tools',
        icon: faDatabase,
        skills: [
            { name: 'Power BI', img: powerbiimg },
            { name: 'Databricks', img: databricksimg },
            { name: 'Snowflake', img: snowflakeimg },
            { name: 'PostgreSQL', img: postgresqlimg },
            { name: 'Jira', img: jiraimg },
            { name: 'Tableau', img: tableauimg },
            { name: 'Excel', img: excelimg },
            { name: 'AWS', icon: faAws },
            { name: 'Azure DevOps', icon: faMicrosoft },
        ]
    },
    {
        id: 'frameworks',
        title: 'Frameworks & Tech',
        icon: faTools,
        skills: [
            { name: 'React', icon: faReact },
            { name: 'Node.js', icon: faNodeJs },
            { name: 'Next.js', img: nextjsimg },
            { name: 'Git / GitHub', icon: faGithub },
            { name: 'REST APIs', icon: faGlobe },
        ]
    },
    {
        id: 'soft-skills',
        title: 'Professional Skills',
        icon: faUserTie,
        skills: [
            { name: 'Data-driven Decisions', icon: faBrain },
            { name: 'Cross-functional Collab', icon: faUserTie },
            { name: 'Stakeholder Comm', icon: faComments },
            { name: 'Problem Solving', icon: faTools },
            { name: 'Research & Analysis', icon: faSearch },
            { name: 'Tech Documentation', icon: faFileAlt },
        ]
    }
];

const SkillsMindMap = () => {
    return (
        <div className="skills-grid-container">
            {skillCategories.map((cat) => (
                <div key={cat.id} className="skill-category-card">
                    <div className="skill-category-header">
                        <FontAwesomeIcon icon={cat.icon} className="header-icon" style={{ color: '#38bdf8' }} />
                        <h3>{cat.title}</h3>
                    </div>

                    <div className="skills-list-grid">
                        {cat.skills.map((skill) => (
                            <div key={skill.name} className="skill-item-row">
                                {skill.img ? (
                                    <img src={skill.img} alt={skill.name} />
                                ) : (
                                    <div className="skill-icon-placeholder">
                                        <FontAwesomeIcon icon={skill.icon || faCode} size="sm" />
                                    </div>
                                )}
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsMindMap;
