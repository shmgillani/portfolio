import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Home = () => {
  return (
    <div className="w-full h-full pb-5 bg-slate-900">
      <Header />
      <Intro />
      <Work />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
