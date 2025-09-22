import React, { useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import bannerImage from "../images/giphy.gif"; // relative to ProfileBanner.tsx

const ProfileBanner: React.FC = () => {
  // Hardcoded profile banner data
  const [bannerData] = useState({
    headline: "Nishanth Uvaraj",
    profileSummary:
      "Dynamic and Proficient Computer Science B.Tech Graduate eager to contribute always using my technical skills and creative vision with skills for Web-development and machine learning for innovative projects and most importantly a positive attitude equipped with a strong communication skills.",
    linkedinLink: "https://www.linkedin.com/in/nishanth-uvaraj-69a6291b1/",
    resumeLink: {
      url: "https://drive.google.com/file/d/1KXwqEo2VkbywuYJ9-fivwP0Uo_jhMt8L/view?usp=sharing",
    },
    backgroundImage: bannerImage,
  });

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, "_blank");
  };

  return (
    <div
      className="profile-banner"
      style={{ backgroundImage: `url(${bannerData.backgroundImage})` }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
