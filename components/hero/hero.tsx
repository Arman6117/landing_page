import clsx from "clsx";

import Image from "next/image";
import { Button } from "../ui/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Hero = () => {
  return (
    <div className={clsx("flex gap-10 lg:flex-row flex-col justify-between 2xl:max-w-[110rem] max-w-[100rem]")}>
      <div className="flex flex-col gap-3">
        <span className="text-sm xl:text-lg font-black">Hi I am</span>
        <span className="text-xl lg:text-2xl xl:text-4xl text-primaryOrange font-semibold">
          Muhammad Umair
        </span>
        <h1 className="font-bold relative text-6xl md:text-7xl xl:text-8xl 2xl:text-[10rem]">
          <h1 >UI & UX</h1>
          <h1 className="absolute xl:left-56 2xl:left-[22rem] md:left-44">Designer</h1>
        </h1>
        <div  className="flex gap-6  flex-col mt-20 2xl:mt-44 2xl:max-w-2xl xl:mt-28 max-w-md">
            <p className="text-xs 2xl:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae! Velit, distinctio. Natus officia placeat blanditiis facere inventore ut voluptate sunt, maxime vitae. Commodi soluta excepturi modi nesciunt eum perferendis!</p>
            <Button  className="bg-primaryOrange w-32 ">Hire Me</Button>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col lg:mt-0 mt-5 md:mt-24 bg-red-7">
        <Image  src={'/assets/hero.png'} width={300} height={100} alt="hero" className=" md:w-[25rem] 2xl:w-[30rem] xl:w-[25rem] lg:w-[20rem]"/>
        <div className="flex gap-2">
          <FaFacebook  className="cursor-pointer 2xl:h-8 2xl:w-8 hover:text-primaryOrange" />
          <FaTwitter className="cursor-pointer  2xl:h-8 2xl:w-8 hover:text-primaryOrange"/>
          <FaInstagram className="cursor-pointer  2xl:h-8 2xl:w-8 hover:text-primaryOrange"/>
          <FaLinkedin className="cursor-pointer  2xl:h-8 2xl:w-8 hover:text-primaryOrange"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
