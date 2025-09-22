import React, { useEffect, useState } from "react";
import "./WorkPermit.css";
import { WorkPermit as IWorkPermit } from "../types";

// Import your background image
import backgroundImage from "../images/web-development-code-login-form-password-input-secure-interface-design-clean-modern-displayed-computer-screen-focus-field-385190489.webp";

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(
    null
  );

  useEffect(() => {
    const data: IWorkPermit = {
      visaStatus: "Available Immediately",
      expiryDate: new Date(), // just to satisfy type
      additionalInfo:
        "Graduated from VIT Vellore as B.Tech Computer Science and Engineering and legally authorized to work full-time in India. 💼 Open to relocation and sponsorship opportunities abroad. 🌍",
      summary:
        "Available for full-time opportunities starting immediately, eager to apply my skills and grow my career.",
    };

    setWorkPermitData(data);
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div
      className="work-permit-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      />

      <div
        className="work-permit-card"
        style={{ zIndex: 1, position: "relative" }}
      >
        <h2 className="work-permit-headline">
          📅 <span className="highlight-red">Availability</span>
        </h2>
        <p className="work-permit-summary">{workPermitData.summary}</p>
        <p className="additional-info">
          <span className="highlight-red">Graduated</span> from{" "}
          <span className="highlight-red">
            VIT Vellore as B.Tech Computer Science and Engineering
          </span>{" "}
          and legally authorized to work full-time in India. 💼 Open to
          relocation and sponsorship opportunities abroad. 🌍
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
