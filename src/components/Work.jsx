import React from "react";
import "../App.css";
import appreci from "../assets/images/appreci.svg";
import muallimu from "../assets/images/muallim.webp";
import muallimu1 from "../assets/images/muallim1.webp";
import muallimu2 from "../assets/images/muallim2.webp";
import muallimu3 from "../assets/images/muallim3.webp";
import muallimu4 from "../assets/images/muallim4.webp";
import muallimu5 from "../assets/images/muallim5.webp";
import swoodle from "../assets/images/swoodle.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
  var settings = {
    dots: true,
    // dotsClass: "text-[#4bffa5]",
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const projects = [
    {
      title: "01 Muallimu Qurani",
      description:
        "I have worked on this project as backend developer and used node.js with ORM (sequelize) and mysql database.",
      introImg: muallimu,
      detailedImages: [muallimu1, muallimu2, muallimu3, muallimu4, muallimu5],
    },
    {
      title: "02 Appreci",
      description:
        "I have worked as a React js developer, converted the figma into a seamless and responsive website.",
      introImg: appreci,
      detailedImages: [],
    },
    {
      title: "03 Swoodle",
      description:
        "I have worked as a React js developer, converted the figma into a seamless and responsive website.",
      introImg: swoodle,
      detailedImages: [],
    },
  ];
  return (
    <div className="w-full px-5 sm:px-10 flex flex-col gap-5">
      <div className="w-full font-roboto font-[400] text-[18px] sm:text-[28px] text-white py-2">
        <span className="text-[#4bffa5]">Work</span>
      </div>
      <div className="divider"></div>
        <Slider className="work-slick-dots" {...settings}>
          {projects?.map((project) => (
            <div className="w-full ">
              <p className="w-full font-roboto font-[400] sm:text-[16px] md:text-[20px] lg:text-[28px] text-white">
                {project?.title}
              </p>
              <div className="divider"></div>
              <img
                src={project?.introImg}
                alt="project img"
                className="w-[100%] max-h-[400px] mt-3 rounded-[10px]"
              />
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default Work;
