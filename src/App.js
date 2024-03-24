import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Project from "./pages/Project";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div
        className={`${isNavOpen ? "main-parent" : "close-parent"} bg-slate-900`}
      >
        <Router>
          <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} aboutRef={aboutRef} workRef={workRef} contactRef={contactRef}/>
          <Routes>
            <Route path="/" element={<Home aboutRef={aboutRef} workRef={workRef} contactRef={contactRef}/>} />
            <Route path="/projects/:projectName" element={<Project />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      
    </>
  );
}

export default App;
