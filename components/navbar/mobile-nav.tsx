"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { Button } from "../ui/button";
import { BsDownload } from "react-icons/bs";
import { IoIosCodeDownload } from "react-icons/io";


const menuItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Services", link: "#services" },
  { label: "Project", link: "#project" },
  { label: "Testimonial", link: "#testimonial" },
  { label: "Contact", link: "#contact" },
  // { label: "Contact", link: "/contact" },
]
const MobileNav = () => {
 
  const [open, setOpen] = useState(false);



  const toggleNav = () => {
    setOpen(!open);
  };
  return <div className="flex justify-center items-center" >

  <Button asChild className="rounded-full p-1 relative z-10 group hover:bg-slate-50 bg-primaryOrange h-8 w-8 mt- mr-10">
    <IoIosCodeDownload  className="text-white h-7 w-7 group-hover:text-primaryOrange"/>
  </Button>
 
    {open ? (
       <RxCross1 className="h-6 w-6  cursor-pointer z-20 text-white" onClick={toggleNav}/>
    ) :  <LuMenu className="h-6 w-6 cursor-pointer" onClick={toggleNav}/>}
    {open && (
      <div className={clsx(
        "fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-end gap-5 bg- pr-4 pt-14 bg-primaryOrange transition-transform duration-300 ease-in-out lg:hidden",
        open ? "translate-x-0" : "translate-x-[70%]"
      )}>
          {menuItems.map(({ link, label }, index) => (
            <React.Fragment key={label}>
              <li className="first:mt-8 list-none">
                <a
                  href={link}
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-50 hover:text-slate-900 ",
                  
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-slate-50 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                    )}
                  />
                  <span className="relative">{label}</span>
                </a>
              </li>
              {index < menuItems.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  
                </span>
              )}
            </React.Fragment>
          ))}
      </div>
    )}
   
  </div>;
};

export default MobileNav;
