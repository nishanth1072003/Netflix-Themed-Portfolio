import React from "react";
import "./Certifications.css";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import {
  SiUdemy,
  SiCoursera,
  SiIeee,
  SiMicrosoft,
  SiHubspot,
  SiAmazon,
} from "react-icons/si";

interface Certification {
  title: string;
  issuer: string;
  issuedDate?: string;
  link?: string;
  iconName: string;
  category: "technical" | "nontechnical";
}

const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  microsoft: <SiMicrosoft />,
  hubspot: <SiHubspot />,
  aws: <SiAmazon />,
  university: <FaUniversity />,
};

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    // 🖥️ Technical Certifications
    {
      title: "Generative AI Certified",
      issuer: "Microsoft",
      issuedDate: "2025",
      link: "https://learn.microsoft.com/",
      iconName: "microsoft",
      category: "technical",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Angela Yu | Udemy",
      issuedDate: "2023",
      link: "https://www.udemy.com/",
      iconName: "udemy",
      category: "technical",
    },
    {
      title: "AWS Certified AI Practitioner (AIF-C01)",
      issuer: "Udemy",
      issuedDate: "2025",
      link: "https://www.udemy.com/",
      iconName: "aws",
      category: "technical",
    },

    // 🎯 Non-Technical Certifications
    {
      title: "Digital Marketing Certificate",
      issuer: "HubSpot Academy",
      issuedDate: "2025",
      link: "https://academy.hubspot.com/",
      iconName: "hubspot",
      category: "nontechnical",
    },
    {
      title: "Event Management & Leadership",
      issuer: "Fifth Pillar / University Club",
      issuedDate: "2022",
      iconName: "university",
      category: "nontechnical",
    },
    {
      title: "Rotaract Club Volunteer Certificate",
      issuer: "NGO Work",
      issuedDate: "2022",
      iconName: "university",
      category: "nontechnical",
    },
  ];

  return (
    <div className="certifications-container">
      {/* Technical Certifications */}
      <h2 className="certifications-heading">🖥️ Technical Certifications</h2>
      <div className="certifications-grid">
        {certifications
          .filter((cert) => cert.category === "technical")
          .map((cert, index) => (
            <a
              href={cert.link || "#"}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
              style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="certification-content">
                <div className="certification-icon">
                  {iconData[cert.iconName] || <FaUniversity />}
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && (
                  <span className="issued-date">Issued {cert.issuedDate}</span>
                )}
              </div>
              <div className="certification-link animated-icon">
                <FaExternalLinkAlt />
              </div>
            </a>
          ))}
      </div>

      {/* Non-Technical Certifications */}
      <h2 className="certifications-heading">
        🎯 Non-Technical Certifications
      </h2>
      <div className="certifications-grid">
        {certifications
          .filter((cert) => cert.category === "nontechnical")
          .map((cert, index) => (
            <div
              key={index}
              className="certification-card"
              style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="certification-content">
                <div className="certification-icon">
                  {iconData[cert.iconName] || <FaUniversity />}
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && (
                  <span className="issued-date">Issued {cert.issuedDate}</span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Certifications;
