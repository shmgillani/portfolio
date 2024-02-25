import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center bg-slate-800 px-5 sm:px-10 py-3 sm:py-5">
      <span className="font-montserrat font-[700] text-[14px] sm:text-[16px] text-white tracking-[3px]">
        SHM
        <span className="font-montserrat font-[700] text-[14px] sm:text-[16px] text-[#4bffa5] tracking-[3px]">
          GILLANI
        </span>
        .
      </span>
      <div className="w-[40%] flex justify-end items-center gap-5 sm:gap-10">
        <span className="font-montserrat font-[500] text-[14px] sm:text-[16px] text-white cursor-pointer">
          About me
        </span>
        <span className="font-montserrat font-[500] text-[14px] sm:text-[16px] text-white cursor-pointer">
          Work
        </span>
        <span className="font-montserrat font-[500] text-[14px] sm:text-[16px] text-white cursor-pointer">
          Contact
        </span>
      </div>
    </div>
  );
};

export default Header;