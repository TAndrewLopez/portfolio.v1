import React from "react";

//COMPONENTS
import { NavBar } from "./NavBar/NavBar";
import { Socials } from "./Socials/Socials";
import { LandingPage } from "./pages/Landing/LandingPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Socials />
      {/* <LandingPage /> */}
      {/* <ProjectsPage /> */}
    </div>
  );
};

export default App;
