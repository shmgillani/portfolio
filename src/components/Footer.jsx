import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="divider"></div>
      <div className="flex items-end gap-5 pt-5 pl-5">
      <span className="font-montserrat font-[700] text-[16px] sm:text-[18px] text-white tracking-[3px]">
        SHM
        <span className="text-[#4bffa5]">GILLANI</span>.
      </span>
      <p className="text-[#4bffa5] font-montserrat font-[400] text-[10px] sm:text-[12px]">&copy; 2024 GILLANI, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
