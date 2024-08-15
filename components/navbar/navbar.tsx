import clsx from "clsx";
import Logo from "../logo";
import { Button } from "../ui/button";

import MobileNav from "./mobile-nav";
import { NavLink } from "./nav-link";

const Navbar = () => {
  return (
    <>
      <div className={clsx("flex  justify-between items-center   md:gap-14")}>
        <Logo />
        <div className="lg:flex hidden">

        <div className="flex items-center gap-10">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#project">Project</NavLink>
          <NavLink href="#testimonial">Testimonial</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button className="bg-primaryOrange hover:bg-btnPrimary/75">
            Download CV
          </Button>
        </div>
        </div>
        <div className="lg:hidden flex">

        <MobileNav/>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
