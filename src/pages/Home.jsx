import React from "react";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Work from "../components/Work";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Intro />
      <Work />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Home;
