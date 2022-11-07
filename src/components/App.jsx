import React from "react";
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import { NavBar } from "./navBar/NavBar";
import { Socials } from "./socials/Socials";

import { HeroSection } from "./pages/Landing/HeroSection";
import { AboutPage } from "./pages/About/AboutPage";
import { ContactPage } from "./pages/Contact/ContactPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Socials />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
