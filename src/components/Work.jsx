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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

const Work = () => {
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
      skills: ["Node JS", "MySQL", "ORM(Sequelize)"]
    },
    {
      title: "02 Appreci",
      route: "appreci",
      url: "https://portal.appreci.io/",
      description:
        "I have worked as a React js developer, converted the figma into a seamless and responsive website.",
      introImg: appreci,
      detailedImages: [appreci1, appreci2, appreci3, appreci4, appreci5, appreci6, appreci7, appreci8],
      skills: ["React JS", "Bootstrap", "Reactstrap", "Redux", "API integrations"]
    },
    {
      title: "03 Swoodle",
      route: "swoodle",
      url: "https://dev-panel.swoodle-dev.xyz",
      description:
        "I have worked as a React js developer, converted the figma into a seamless and responsive website.",
      introImg: swoodle,
      detailedImages: [swoodle1, swoodle2, swoodle3, swoodle4, swoodle5, swoodle6, swoodle7],
      skills: ["React JS", "Tailwind CSS", "Redux-toolkit", "API integrations"]
    },
  ];
  const handleProjectClick = (p) => {
    navigate(`/projects/${p?.route}`, { state: { project: p } });
  };
  return (
    <div className="w-full px-5 sm:px-10 flex flex-col gap-5">
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
