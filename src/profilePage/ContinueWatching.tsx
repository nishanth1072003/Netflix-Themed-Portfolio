import React from "react";
import { Link } from "react-router-dom";
import "./ContinueWatching.css";

// Import your local images
import workPermitImg from "../images/work.jpg";
import skillsImg from "../images/skills.webp";
import experienceImg from "../images/experience.jpg";
import certificationsImg from "../images/medal_coding.png";
import projectsImg from "../images/project.jpg";
import contactImg from "../images/contact.jpg";
import musicImg from "../images/music.jpg";
import moviessImg from "../images/movie.jpg";

type ProfileType = "recruiter" | "developer" | "stalker" | "adventure";

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" },
    {
      title: "Certifications",
      imgSrc: certificationsImg,
      link: "/certifications",
    },
  ],
  developer: [
    { title: "Music", imgSrc: musicImg, link: "/music" },

    {
      title: "Certifications",
      imgSrc: certificationsImg,
      link: "/certifications",
    },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" },
  ],
  stalker: [{ title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }],
  adventure: [
    { title: "Music", imgSrc: musicImg, link: "/music" },
    {
      title: "Certifications",
      imgSrc: certificationsImg,
      link: "/certifications",
    },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" },
  ],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
