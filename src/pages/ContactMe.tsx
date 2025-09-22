import React, { useState } from "react";
import "./ContactMe.css";
import profilePic from "../images/profilepic.jpg"; // put your photo in /src/images/

import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from "react-icons/fa";

const ContactMe: React.FC = () => {
  // Your details
  const [userData] = useState({
    name: "Nishanth Uvaraj",
    title: "Software Developer",
    summary:
      "Passionate about building scalable apps, creative marketing, Blending technology with innovation, DevOps Beginner.",
    companyUniversity: "Vellore Institute Of Technology (VIT Vellore)",
    linkedinLink: "https://www.linkedin.com/in/nishanth-uvaraj-69a6291b1/", // update with your LinkedIn
    email: "nishanth1072003@gmail.com", // replace with your email
    phoneNumber: "+91-8088004541", // replace with your number
  });

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt={userData.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>Always open to collaborations, networking, and new opportunities.</p>
        <p>
          Interested in tech, projects, or brainstorming ideas? Drop me a
          message!
        </p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
