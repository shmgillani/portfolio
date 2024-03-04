import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro/Intro";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-full pb-5 bg-slate-900">
      <Header />
      <Intro />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
