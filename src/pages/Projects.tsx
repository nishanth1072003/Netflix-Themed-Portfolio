import React, { useState, useEffect } from "react";
import "./Projects.css";
import project1Img from "../images/food-del.png";
import project2Img from "../images/netflix.jpg";
import project3Img from "../images/olympic.jpg";
import project4Img from "../images/autism.jpg";

import { FaReact, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiStripe,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  ReactJS: <FaReact />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  NodeJS: <FaNodeJs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  Stripe: <SiStripe />,
  TensorFlow: <SiTensorflow />,
  Python: <FaPython />,
  TypeScript: <SiTypescript />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const realProjects = [
      {
        title: "Autism Detection with Interpretable ML and Explainable AI",
        description:
          "Built interpretable ML models (XGBoost, Random Forest, Logistic Regression, Decision Trees) for Autism Spectrum Disorder detection using questionnaire data. Applied feature selection (RFE) and SHAP for transparency.",
        techUsed: "Python, XGBoost, SHAP, LogisticRegression, Decision Trees",
        image: project4Img,
        githubLink: "https://github.com/nishanth1072003/autism-flask-app",
        deployed: true,
        liveLink: "https://autism-flask-app-2.onrender.com",
      },
      {
        title: "Food Delivery Website (Full Stack)",
        description:
          "Full-stack food delivery website with user management, product management, order management, payment integration, and responsive design.",
        techUsed: "ReactJS, Node.js, Express, MongoDB, Stripe",
        image: project1Img,
        githubLink: "https://github.com/nishanth1072003/FooddelApp-Full-Stack-",
        deployed: false,
      },
      {
        title: "Olympic Medal Prediction",
        description:
          "Deep learning project using TensorFlow & NLP to predict Olympic medal outcomes with 91.67% accuracy. Worked with 270K+ entries and advanced preprocessing.",
        techUsed: "Python, TensorFlow, NLP, Deep Learning",
        image: project3Img,
        githubLink: "https://github.com/yourusername/olympic-prediction",
        deployed: false,
      },
      {
        title: "Personalized Netflix-Style Portfolio",
        description:
          "Dynamic portfolio built with React & TypeScript featuring reusable components for Projects, Certifications, and Contact sections.",
        techUsed: "React, TypeScript, CSS3",
        image: project2Img,
        githubLink: "https://github.com/yourusername/netflix-portfolio",
        deployed: true,
        liveLink: "https://nishanth-portfolio.vercel.app",
      },
    ];

    setProjects(realProjects);
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  const handleCardClick = (project: any) => {
    if (project.deployed && project.liveLink) {
      window.open(project.liveLink, "_blank");
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => handleCardClick(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-used">
                {project.techUsed.split(", ").map((tech: string, i: number) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>

              {/* Deployment status */}
              <div className="project-status">
                {project.deployed ? (
                  <span className="deployed">🔗 Deployed</span>
                ) : (
                  <span className="not-deployed">⚠️ Not Deployed</span>
                )}
              </div>

              {/* GitHub link */}
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button github-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
