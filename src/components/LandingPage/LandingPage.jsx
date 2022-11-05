import React from "react";

import { NavBar } from "../NavBar/NavBar";
import { Socials } from "../Socials/Socials";
import { HeroSection } from "./HeroSection";
import { MobileOverlay } from "../NavBar/MobileOverlay";

export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <MobileOverlay />
      <HeroSection />
      <Socials />
    </>
  );
};
