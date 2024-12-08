import React from "react";
import { ReactComponent as HamburgerButton } from "../assets/icons/hamburgerButton.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./components.scss";

const Header = ({ isNavOpen, setIsNavOpen, aboutRef, workRef, contactRef }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location.pathname", location.pathname);

  const scrollToAbout = () => {
    if (location.pathname === "/") {
      aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToWork = () => {
    if (location.pathname === "/") {
      workRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        workRef?.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToContact = () => {
    if (location.pathname === "/") {
      contactRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="w-full flex flex-row-reverse sm:flex-row justify-between items-center bg-slate-800 px-5 sm:px-10 py-3 sm:py-5 fixed z-10">
        <span
          className="font-montserrat font-[700] text-[16px] sm:text-[18px] text-white tracking-[3px] cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          SHM
          <span className="text-[#4bffa5]">GILLANI</span>.
        </span>
        <div className="hidden sm:block w-[40%]">
          <div className="flex justify-end items-center gap-5 sm:gap-10">
            <span
              className="font-montserrat font-[500] text-[16px] sm:text-[18px] text-white cursor-pointer"
              onClick={scrollToAbout}
            >
              About
            </span>
            <span
              className="font-montserrat font-[500] text-[16px] sm:text-[18px] text-white cursor-pointer"
              onClick={scrollToWork}
            >
              Work
            </span>
            <span
              className="font-montserrat font-[500] text-[16px] sm:text-[18px] text-white cursor-pointer"
              onClick={scrollToContact}
            >
              Contact
            </span>
          </div>
        </div>
        <div className="block sm:hidden w-[40%]">
          <HamburgerButton
            className="rounded-[10px] w-[30px] h-[30px] cursor-pointer"
            onClick={handleNavOpen}
          />
        </div>
      </div>
      {isNavOpen && (
        <div
          className={`${
            isNavOpen ? "menu-form" : "menu-close"
          } flex flex-col justify-center items-center h-screen w-[240px] bg-slate-600 gap-10`}
        >
          <span
            className="font-montserrat font-[500] text-[22px] sm:text-[28px] text-white cursor-pointer"
            onClick={() => {
              setIsNavOpen(false);
              setTimeout(() => {
                scrollToAbout();
              }, 100);
            }}
          >
            About
          </span>
          <span
            className="font-montserrat font-[500] text-[22px] sm:text-[28px] text-white cursor-pointer"
            onClick={() => {
              setIsNavOpen(false);
              setTimeout(() => {
                scrollToWork();
              }, 100);
            }}
          >
            Work
          </span>
          <span
            className="font-montserrat font-[500] text-[22px] sm:text-[28px] text-white cursor-pointer"
            onClick={() => {
              setIsNavOpen(false);
              setTimeout(() => {
                scrollToContact();
              }, 100);
            }}
          >
            Contact
          </span>
        </div>
      )}
    </>
  );
};

export default Header;
