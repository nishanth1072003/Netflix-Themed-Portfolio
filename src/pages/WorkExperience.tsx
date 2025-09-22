import React from "react";
import timelineBg from "../images/exsd.webp"; // adjust path as needed
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";
import "./WorkExperience.css";

interface TimelineItem {
  name: string;
  timelineType: "work" | "education";
  title: string;
  techStack?: string;
  summaryPoints: string;
  dateRange: string;
}

const WorkExperience: React.FC = () => {
  // Timeline data with ANZ role
  const timeLineData: TimelineItem[] = [
    {
      name: "ANZ Operations & Technology",
      timelineType: "work",
      title: "Apprentice",
      techStack:
        "Java,Reconcilation tool - CTC,SQL,Problem Solving, Corporate Tools",
      summaryPoints:
        "Currently working as an apprentice gaining exposure in financial technology operations and software solutions.",
      dateRange: "Mar 2025 – Mar 2026 (currently present)",
    },
    {
      name: "Genial Digitech",
      timelineType: "work",
      title: "ABAP-SAP Developer Intern",
      techStack: "ABAP, SAP, SQL",
      summaryPoints: "Worked on SAP modules and implemented enhancements.",
      dateRange: "Nov 2023 – Jan 2024",
    },
    {
      name: "Vellore Institute of Technology",
      timelineType: "education",
      title: "Bachelor of Technology – CSE (Bioinformatics)",
      summaryPoints:
        "Graduated in 2025 with Computer Science and Engineering with specialization in Bioinformatics with a CGPA of 8.2.",
      dateRange: "2021 – 2025",
    },

    {
      name: "Kendriya Vidyalaya No.1, Jalahalli West",
      timelineType: "education",
      title: "CBSE Class X & XII (Science)",
      summaryPoints:
        "Completed high school education in Bangalore with 89.4% and 88.2% respectively.",
      dateRange: "2019 – 2021",
    },
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">
          📅 Work Experience & Education Timeline
        </h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? { background: "rgb(33, 150, 243)", color: "#fff" }
                : { background: "rgb(255, 224, 230)", color: "#fff" }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: "7px solid rgb(33, 150, 243)" }
                : { borderRight: "7px solid rgb(255, 224, 230)" }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: "rgb(33, 150, 243)", color: "#fff" }
                : { background: "rgb(255, 160, 200)", color: "#fff" }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div style={{ color: "black" }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.name}
              </h4>
              {item.timelineType === "work" && item.techStack && (
                <p className="vertical-timeline-element-tech">
                  🔧 {item.techStack}
                </p>
              )}
              <p>{item.summaryPoints}</p>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
