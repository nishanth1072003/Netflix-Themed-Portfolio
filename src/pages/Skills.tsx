import React from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaDocker, FaJava, FaLinux } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          description: "Frontend Library",
          icon: <FaReact />,
        },
        {
          name: "TypeScript",
          description: "Typed JavaScript",
          icon: <FaReact />,
        },
        {
          name: "JavaScript",
          description: "Core Web Language",
          icon: <FaReact />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", description: "Backend Runtime", icon: <FaNodeJs /> },
        {
          name: "Express.js",
          description: "Node.js Framework",
          icon: <SiExpress />,
        },
        { name: "Java", description: "DSA & OOPs", icon: <FaJava /> },
        { name: "Python", description: "ML & AI Projects", icon: <SiPython /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", description: "NoSQL Database", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker", description: "Containerization", icon: <FaDocker /> },
        { name: "CLI", description: "Command Line Tools", icon: <FaLinux /> },
        { name: "VCS - Git", description: "Version Control", icon: <SiGit /> },
        {
          name: "GitHub",
          description: "Code Collaboration",
          icon: <SiGithub />,
        },
        { name: "Render", description: "Web Hosting", icon: <SiVercel /> },
        { name: "Linux/OS", description: "System & Shell", icon: <FaLinux /> },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        {
          name: "Video Editing",
          description: "Content Creation",
          icon: <FaReact />,
        },
        {
          name: "Content Creation",
          description: "Marketing & Branding",
          icon: <FaReact />,
        },
        {
          name: "Digital marketing",
          description: "Marketing & Branding",
          icon: <FaReact />,
        },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      {categories.map((category, idx) => (
        <div key={idx}>
          <h3 className="category-title">{category.title}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
