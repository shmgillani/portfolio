import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div
        className={`${isNavOpen ? "main-parent" : "close-parent"} bg-slate-900`}
      >
        <Router>
          <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      
    </>
  );
}

export default App;
