import React from "react";
import Logo from "../logo";
import { NavLink } from "../navbar/nav-link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <div className="md:px-24 mt-10 px-10 pt-5 h-[15rem] bg-[#F8F8F8] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="scale-150">
          <Logo />
        </div>
        <div className="flex gap-5 flex-wrap  justify-center text-center md:gap-5">
          <NavLink href="#home">Home</NavLink>

          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#project">Project</NavLink>
          <NavLink href="#testimonial">Testimonial</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="flex gap-2">
          <FaFacebook className="cursor-pointer 2xl:h-8 2xl:w-8 hover:text-primaryOrange" />
          <FaTwitter className="cursor-pointer  2xl:h-8 2xl:w-8 hover:text-primaryOrange" />
          <FaInstagram className="cursor-pointer  2xl:h-8 2xl:w-8 hover:text-primaryOrange" />
          <FaLinkedin className="cursor-pointer  2xl:h-8 2xl:w-8 hover:text-primaryOrange" />
        </div>
      </div>
    </div>
      <div className="bg-[#545454] gap-2 py-3  text-xs text-white w-full flex justify-center items-center">
        <h1>© 2023 <span className="text-primaryOrange font-semibold">Mumair</span>  All Rights Reserved , Inc.</h1>
        {/* <h1 className="text-primaryOrange">Mumair</h1> */}
      </div>
    </>
  );
};

export default Footer;
