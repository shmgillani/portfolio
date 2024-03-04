import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro/Intro";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div className="w-full h-full pb-10 bg-slate-900">
      <Header />
      <Intro />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Home;
