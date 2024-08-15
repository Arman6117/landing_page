import clsx from "clsx";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
  // interface LogoProps
const Logo = () => {
  return (
    <div className={clsx('flex md:z-0 relative -z-20 space-x-2 justify-center items-center', font.className)}>
      <Image src={'/assets/logo.png'} alt="logo" width={30} height={30}/>
      <div>
        <h1 className="text-lg">

        <span className="font-bold text-black">M</span>
        <span className="text-[#1E1E1E] ">umair</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
