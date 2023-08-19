import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import AnimatedPage from "../common/AnimatedPage";

const About = () => {
  return (
    <AnimatedPage>
      <Back title="About Us" />
      <AboutCard />
    </AnimatedPage>
  );
};

export default About;
