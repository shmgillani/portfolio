import React from "react";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Work from "../components/Work";

const Home = ({aboutRef, workRef, contactRef}) => {
  return (
    <div className="w-full h-full pt-[50px] sm:pt-[80px]">
      <Intro />
      <Work workRef={workRef}/>
      <AboutMe aboutRef={aboutRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
};

export default Home;
