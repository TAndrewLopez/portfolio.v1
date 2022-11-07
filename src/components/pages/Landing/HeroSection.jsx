import React from "react";
import "./heroSection.css";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <h2>
        <span>Cultivating bonds</span>
        <span>between</span>
        <span>
          <span className="products">products</span>
          and
          <span className="users">users</span>.
        </span>
      </h2>
      <p>Software Engineer | UI/UX Designer</p>
      <button>
        <Link to={"/projects"}>Projects</Link>
      </button>
    </div>
  );
};
