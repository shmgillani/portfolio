import React from "react";
import "../App.css";
import { ReactComponent as Number1 } from "../assets/icons/number1.svg";
import { ReactComponent as Number2 } from "../assets/icons/number2.svg";
import { ReactComponent as Number3 } from "../assets/icons/number3.svg";

const AboutMe = ({aboutRef}) => {
  return (
    <div className="w-full px-5 sm:px-10 pt-20" ref={aboutRef}>
      <div className="w-full font-roboto font-[400] text-[18px] sm:text-[28px] text-white py-2">
        <span className="text-[#4bffa5]">About Me</span>
      </div>
      <div className="divider"></div>
      <div className="pt-5 flex flex-col gap-8 md:flex-row md:gap-24 lg:gap-32">
        <p className="w-full md:w-[50%] font-roboto font-[400] text-[3vh] md:text-[4vh] text-white leading-snug">
          I specialize in creating captivating websites on a global scale. Got
          you design ready? Feel free to email me, and I'll provide you with a
          time and cost estimate.
        </p>
        <div className="w-full md:w-[50%] flex flex-col gap-2">
          <p className="w-full font-roboto font-[600] text-[24px] sm:text-[28px] text-[#4bffa5] leading-snug">
            Services Available:
          </p>
          <div className="flex flex-col gap-3">
            <div className="w-full flex items-center gap-5">
              <Number1 />
              <p className="w-full font-roboto font-[400] text-[20px] sm:text-[24px] text-[#4bffa5] leading-snug">
                Frontend Development
              </p>
            </div>
            <div className="divider"></div>
            <div className="w-full flex items-center gap-5">
              <Number2 />
              <p className="w-full font-roboto font-[400] text-[20px] sm:text-[24px] text-[#4bffa5] leading-snug">
                Backend Development
              </p>
            </div>
            <div className="divider"></div>
            <div className="w-full flex items-center gap-5">
              <Number3 />
              <p className="w-full font-roboto font-[400] text-[20px] sm:text-[24px] text-[#4bffa5] leading-snug">
                DevOps Services
              </p>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
