import React from "react";

const PrimaryButton = ({ label, className, onClick }) => {
  return (
    <button
      className={`bg-[#4bffa5] text-white font-poppins text-center ${
        className ? className : null
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
