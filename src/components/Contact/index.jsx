import React from "react";
import "../../App.css";
import ContactForm from "./ContactForm";

const Contact = ({ contactRef }) => {
  const handleEmailClick = () => {
    // Open email tools with recipient email
    window.location.href = "mailto:syedhasanmehdi1999@gmail.com";
  };

  return (
    <div className="w-full px-5 sm:px-10 pt-20" ref={contactRef}>
      <div className="w-full font-roboto font-[400] text-[18px] sm:text-[28px] text-white py-2">
        <span className="text-[#4bffa5]">Contact</span>
      </div>
      <div className="divider"></div>
      <div className="pt-5 flex flex-col gap-8 md:flex-row md:gap-24 lg:gap-32">
        <p className="w-full md:w-[50%] font-roboto font-[400] text-[3vh] md:text-[4vh] text-white leading-snug">
          Feel free to drop me an email at{" "}
          <span
            className="text-[#4bffa5] break-all cursor-pointer"
            onClick={handleEmailClick}
          >
            syedhasanmehdi1999@gmail.com
          </span>{" "}
          if you have a project idea or design! I'll do my best to respond
          within 24 hours. Looking forward to hearing from you!
        </p>
        <div className="w-full md:w-[50%] flex flex-col gap-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
