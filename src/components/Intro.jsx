import React from "react";
// import webDevelopment from "../assets/gifs/web-gif-with-background.gif";
// import webDevelopment from "../assets/images/webDevelopment.jpg"
import webDevelopment from "../assets/images/webDevelopment1.png";
// import webDevelopment from "../assets/images/webDevelopment-illustration1.png"
import Lottie from 'react-lottie';
import animationData from "../assets/animations/Animation - Updated.json"

const Intro = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="w-full py-20 sm:py-20 px-5 sm:pl-10 flex flex-col justify-center gap-5 sm:flex-row sm:items-center sm:justify-start">
      <p className="w-full sm:w-[55%] font-roboto font-[400] text-[8vw] sm:text-[42px] text-white leading-snug">
        I'm <span className="tracking-[5px]">SHM</span>
        <span className="text-[#4bffa5] tracking-[5px]">GILLANI</span>, a MERN
        Stack Developer turning ideas into{" "}
        <span className="text-[#4bffa5]">seamless</span> web
        <span className="text-[#4bffa5]"> experiences</span> with MongoDB,
        Express.js, React.js, and Node.js
        <span className="text-[#4bffa5]">.</span>
      </p>
      {/* <img src={webDevelopment} className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-[10px]" /> */}
      <div className="w-[45%]">
      <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Intro;
