import React from "react";
import { useLocation } from "react-router";

const Project = () => {
  const location = useLocation();
  const { project } = location?.state;
  console.log("selected project", project);

  const visitSite = () => {
    if (project?.url) {
      window.open(project.url, "_blank");
    }
  };
  return (
    <div className="w-full h-full px-5 sm:px-10 py-3 sm:py-5 flex flex-col justify-between items-center">
      <div className="w-full h-[400px] overflow-hidden">
        <img src={project?.introImg} className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-start mt-5 sm:mt-10">
        <div className="flex flex-col justify-start items-start">
          <p className="w-full font-poppins font-[400] text-[10px] sm:text-[12px] lg:text-[14px] text-[#4bffa5] cursor-pointer">
            Project Showcase
          </p>
          <p className="w-full font-roboto font-[400] text-[4vh] sm:text-[5vh] lg:text-[7vh] m-0 leading-[100%] text-white">
            {project?.title}
          </p>
          <p
            className="w-full font-poppins font-[400] text-[14px] sm:text-[16px] lg:text-[18px] text-[#4bffa5] cursor-pointer"
            onClick={visitSite}
          >
            visit live site →
          </p>
          <div className="flex gap-2 items-center mt-2">
            {project?.skills?.map((s) => (
              <div className="w-auto h-[40px] sm:h-[30px] text-slate-950 bg-[#4bffa5] flex justify-center items-center text-[12px] font-poppins font-[400] px-2">
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-[30%]">
          <p className="w-full font-roboto font-[400] text-[14px] sm:text-[16px] lg:text-[18px] text-white text-left">
            {project?.description}
          </p>
        </div>
      </div>
      <div className="mt-5 sm:mt-10">
        {project?.detailedImages?.map((i) => (
          <div className="w-full h-[400px] overflow-hidden py-3 sm:py-5">
            <img src={i} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
