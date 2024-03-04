import React from "react";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="w-full py-20 sm:py-20 px-5 sm:pl-10 flex flex-col justify-center gap-5 sm:flex-row sm:items-center sm:justify-start">
      <p className="w-full sm:w-[70%] font-roboto font-[400] text-[8vw] sm:text-[42px] text-white leading-snug">
        Here's <span className="tracking-[5px]">SHM</span>
        <span className="text-[#4bffa5] tracking-[5px]">GILLANI</span>, a MERN
        Stack Developer turning ideas into{" "}
        <span className="text-[#4bffa5]">seamless</span> web
        <span className="text-[#4bffa5]"> experiences</span> with MongoDB,
        Express.js, React.js, and Node.js
        <span className="text-[#4bffa5]">.</span>
      </p>
      <div>
        <div className="circle w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-[50%] white react-circle-1"></div>
        <div className="circle w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-[50%] green react-circle-2"></div>
        <div className="circle w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-[50%] green react-circle-3"></div>
        <div className="circle w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-[50%] white react-circle-4"></div>
      </div>
    </div>
  );
};

export default Intro;
