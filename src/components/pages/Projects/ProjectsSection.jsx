import React from "react";
import data from "./projects.json";
import "./projects.css";
const { projects } = data;

export const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-container">
        <div className="left col">
          <div className="project-card"></div>
        </div>
        <div className="right col">
          <div></div>
        </div>
      </div>
      <div className="projects-nav">
        <div className="prev">Prev</div>
        <div className="current">Project Name</div>
        <div className="next">Next</div>
      </div>
    </div>
  );
};
