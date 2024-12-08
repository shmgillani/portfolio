import React from "react";
import "../App.css";
import appreci from "../assets/images/appreciStart.PNG";
import appreci1 from "../assets/images/appreci1.svg";
import appreci2 from "../assets/images/appreci2.svg";
import appreci3 from "../assets/images/appreci3.svg";
import appreci4 from "../assets/images/appreci4.svg";
import appreci5 from "../assets/images/appreci5.svg";
import appreci6 from "../assets/images/appreci6.svg";
import appreci7 from "../assets/images/appreci7.svg";
import appreci8 from "../assets/images/appreci8.svg";
import muallimu from "../assets/images/muallim.webp";
import muallimu1 from "../assets/images/muallim1.webp";
import muallimu2 from "../assets/images/muallim2.webp";
import muallimu3 from "../assets/images/muallim3.webp";
import muallimu4 from "../assets/images/muallim4.webp";
import muallimu5 from "../assets/images/muallim5.webp";
import swoodle from "../assets/images/swoodle.svg";
import swoodle1 from "../assets/images/swoodle1.svg";
import swoodle2 from "../assets/images/swoodle2.svg";
import swoodle3 from "../assets/images/swoodle3.svg";
import swoodle4 from "../assets/images/swoodle4.svg";
import swoodle5 from "../assets/images/swoodle5.svg";
import swoodle6 from "../assets/images/swoodle6.svg";
import swoodle7 from "../assets/images/swoodle7.svg";
import imamConnect from "../assets/images/imamConnect.svg";
import imamConnect1 from "../assets/images/imamConnect1.svg";
import imamConnect2 from "../assets/images/imamConnect2.svg";
import imamConnect3 from "../assets/images/imamConnect3.svg";
import imamConnect4 from "../assets/images/imamConnect4.svg";
import imamConnect6 from "../assets/images/imamConnect6.svg";
import imamConnect7 from "../assets/images/imamConnect7.svg";
import imamConnect8 from "../assets/images/imamConnect8.svg";
import imamConnect9 from "../assets/images/imamConnect9.svg";
import imamConnect10 from "../assets/images/imamConnect10.svg";
import imamConnect11 from "../assets/images/imamConnect11.svg";
import imamConnect12 from "../assets/images/imamConnect12.svg";
import imamConnect13 from "../assets/images/imamConnect13.svg";
import imamConnect14 from "../assets/images/imamConnect14.svg";
import imamConnect15 from "../assets/images/imamConnect15.svg";
import imamConnect16 from "../assets/images/imamConnect16.svg";
import imamConnect17 from "../assets/images/imamConnect17.svg";
import imamConnect18 from "../assets/images/imamConnect18.svg";
import imamConnect19 from "../assets/images/imamConnect19.svg";
import imamConnect20 from "../assets/images/imamConnect20.svg";
import imamConnect21 from "../assets/images/imamConnect21.svg";
import imamConnect22 from "../assets/images/imamConnect22.svg";
import imamConnect23 from "../assets/images/imamConnect23.svg";
import imamConnect24 from "../assets/images/imamConnect24.svg";
import imamConnect25 from "../assets/images/imamConnect25.svg";
import imamConnect26 from "../assets/images/imamConnect26.svg";
import imamConnect27 from "../assets/images/imamConnect27.svg";
import imamConnect28 from "../assets/images/imamConnect28.svg";
import imamConnect29 from "../assets/images/imamConnect29.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

const Work = ({ workRef }) => {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    // dotsClass: "text-[#4bffa5]",
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // For tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600, // For larger screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const projects = [
    {
      title: "01 Muallimu Qurani",
      route: "muallimu-qurani",
      url: "https://play.google.com/store/apps/details?id=com.muallimuqurani",
      description:
        "I have worked on this project as backend developer and used node.js with ORM (sequelize) and mysql database.",
      introImg: muallimu,
      detailedImages: [muallimu1, muallimu2, muallimu3, muallimu4, muallimu5],
      skills: ["Node JS", "MySQL", "ORM(Sequelize)"],
    },
    {
      title: "02 Appreci",
      route: "appreci",
      url: "https://portal.appreci.io/",
      description:
        "I have worked as a React js developer, converted the figma into a seamless and responsive website.",
      introImg: appreci,
      detailedImages: [
        appreci1,
        appreci2,
        appreci3,
        appreci4,
        appreci5,
        appreci6,
        appreci7,
        appreci8,
      ],
      skills: [
        "React JS",
        "Bootstrap",
        "Reactstrap",
        "Redux",
        "API integrations",
      ],
    },
    {
      title: "03 Swoodle",
      route: "swoodle",
      url: "https://swoodle.com.au/",
      description:
        "I have worked as a React js developer, converted the figma into a seamless and responsive website.",
      introImg: swoodle,
      detailedImages: [
        swoodle1,
        swoodle2,
        swoodle3,
        swoodle4,
        swoodle5,
        swoodle6,
        swoodle7,
      ],
      skills: ["React JS", "Tailwind CSS", "Redux-toolkit", "API integrations"],
    },
    {
      title: "04 Imam Connect",
      route: "imamConnect",
      url: "",
      description:
        "I have worked as a Next js developer, converted the figma into a seamless and responsive website.",
      introImg: imamConnect,
      detailedImages: [
        imamConnect,
        imamConnect1,
        imamConnect2,
        imamConnect3,
        imamConnect4,
        imamConnect6,
        imamConnect7,
        imamConnect8,
        imamConnect9,
        imamConnect10,
        imamConnect11,
        imamConnect12,
        imamConnect13,
        imamConnect14,
        imamConnect15,
        imamConnect16,
        imamConnect17,
        imamConnect18,
        imamConnect19,
        imamConnect20,
        imamConnect21,
        imamConnect22,
        imamConnect23,
        imamConnect24,
        imamConnect25,
        imamConnect26,
        imamConnect27,
        imamConnect28,
        imamConnect29,
      ],
      skills: ["Next JS", "Tailwind CSS"],
    },
  ];
  const handleProjectClick = (p) => {
    navigate(`/projects/${p?.route}`, { state: { project: p } });
  };
  return (
    <div className="w-full px-5 sm:px-10 flex flex-col gap-5" ref={workRef}>
      <div className="w-full font-roboto font-[400] text-[18px] sm:text-[28px] text-white py-2">
        <span className="text-[#4bffa5]">Work</span>
      </div>
      <div className="divider"></div>
      <Slider className="work-slick-dots" {...settings}>
        {projects?.map((project) => (
          <div
            className="w-full cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <p className="w-full font-roboto font-[400] sm:text-[16px] md:text-[20px] lg:text-[28px] text-white">
              {project?.title}
            </p>
            <div className="divider"></div>
            <div className="w-full h-[200px] sm:h-[400px]">
              <img
                src={project?.introImg}
                alt="project img"
                className="w-full h-full mt-3 rounded-[10px] object-cover object-top"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Work;
