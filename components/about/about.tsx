import React from "react";
import Title from "../title";
import Image from "next/image";
import clsx from "clsx";
import SkillExp from "./skillExp";

const skill = [
  {
    name: "UX",
    lvl: "90",
  },
  {
    name: "Website",
    lvl: "85",
  },
  {
    name: "App Design",
    lvl: "95",
  },
  {
    name: "Graphics Design",
    lvl: "90",
  },
];
const About = () => {
  return (
    <div
      className={clsx(
        "flex lg:justify-normal justify-center gap-16 xl:gap-72 max-w-[105rem] 2xl:justify-between  lg:items-start items-center lg:flex-row flex-col ",
       
      )}
    >
      <div>
        <Image
          src={"/assets/about.png"}
          width={300}
          height={100}
          alt="about"
          className=" md:w-[25rem] 2xl:w-[34rem] xl:w-[35rem] lg:w-[30rem]"
        />
      </div>
      <div className="flex relative lg:text-start text-center flex-col gap-5 ">
        <Title className="xl:text-8xl  2xl:text-[8rem] ">About Me</Title>
        <p className="text-[10px] 2xl:text-[20px] sm:text-xs xl:text-sm   max-w-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          nostrum accusantium reprehenderit corrupti. Est aliquid fuga nobis
          distinctio eveniet, facere dolor atque beatae, ea voluptas corrupti,
          tempore delectus sit deleniti.
        </p>
        <div className="flex flex-col gap-4 mr-5">
          {skill.map((skill, index) => (
            <div className="text-start" key={index}>
              <h1 className="my-2 2xl:my4 2xl:text-2xl text-sm xl:text-lg font-semibold">{skill.name}</h1>
              <SkillExp expLevel={skill.lvl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
