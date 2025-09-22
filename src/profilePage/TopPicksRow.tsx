import React from "react";
import workPermitImg from "../images/work.jpg";
import skillsImg from "../images/skills.webp";
import experienceImg from "../images/experience.jpg";
import certificationsImg from "../images/medal_coding.png";
import projectsImg from "../images/project.jpg";
import contactImg from "../images/contact.jpg";
import musicImg from "../images/music.jpg";
import moviessImg from "../images/movie.jpg";

import { useNavigate } from "react-router-dom";
import "./TopPicksRow.css";
import {
  FaPassport,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
} from "react-icons/fa";

type ProfileType = "recruiter" | "developer" | "stalker" | "adventure";

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    {
      title: "Work Permit",
      imgSrc: workPermitImg,
      icon: <FaPassport />,
      route: "/work-permit",
    },
    { title: "Skills", imgSrc: skillsImg, icon: <FaCode />, route: "/skills" },
    {
      title: "Experience",
      imgSrc: experienceImg,
      icon: <FaBriefcase />,
      route: "/work-experience",
    },
    {
      title: "Certifications",
      imgSrc: certificationsImg,
      icon: <FaCertificate />,
      route: "/certifications",
    },
    {
      title: "Projects",
      imgSrc: projectsImg,
      icon: <FaProjectDiagram />,
      route: "/projects",
    },
    {
      title: "Contact Me",
      imgSrc: contactImg,
      icon: <FaEnvelope />,
      route: "/contact-me",
    },
  ],
  developer: [
    { title: "Skills", imgSrc: skillsImg, route: "/skills", icon: <FaCode /> },
    {
      title: "Projects",
      imgSrc: projectsImg,
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Certifications",
      imgSrc: certificationsImg,
      route: "/certifications",
      icon: <FaCertificate />,
    },
    {
      title: "Experience",
      imgSrc: experienceImg,
      route: "/work-experience",
      icon: <FaBriefcase />,
    },
    {
      title: "Contact Me",
      imgSrc: contactImg,
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
  ],
  stalker: [
    {
      title: "Contact Me",
      imgSrc: contactImg,
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
    {
      title: "Projects",
      imgSrc: projectsImg,
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Experience",
      imgSrc: experienceImg,
      route: "/work-experience",
      icon: <FaBriefcase />,
    },
    {
      title: "Certifications",
      imgSrc: certificationsImg,
      route: "/certifications",
      icon: <FaCertificate />,
    },
  ],
  adventure: [
    { title: "Music", imgSrc: musicImg, route: "/music", icon: <FaMusic /> },
    {
      title: "Projects",
      imgSrc: projectsImg,
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Reading",
      imgSrc: moviessImg,
      route: "/reading",
      icon: <FaBook />,
    },
    {
      title: "Contact Me",
      imgSrc: contactImg,
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
    {
      title: "Certifications",
      imgSrc: certificationsImg,
      route: "/certifications",
      icon: <FaCertificate />,
    },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
