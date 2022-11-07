import React from "react";
import { Routes, Route } from "react-router-dom";
//COMPONENTS
import { NavBar } from "./NavBar/NavBar";
import { Socials } from "./Socials/Socials";

import { LandingPage } from "./pages/Landing/LandingPage";
import { AboutPage } from "./pages/About/AboutPage";
import { ContactPage } from "./pages/Contact/ContactPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Socials />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <ProjectsPage /> */}
    </div>
  );
};

export default App;
