import React from "react";

const PrimaryButton = ({ label, className, onClick }) => {
  return (
    <button
      className={`bg-slate-900 text-white border border-[#4bffa5] font-poppins text-center hover:bg-[#4bffa5] hover:text-slate-900 ${
        className ? className : null
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
