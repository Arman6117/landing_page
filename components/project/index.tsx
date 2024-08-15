import Image from "next/image";
import Card from "./card";

const projects = [
  {
    type: "Web Design",
    name: "AirCalling Landing Page Design",
    image: "/assets/project/project1.png",
  },
  {
    type: "Web Design",
    name: "Business Landing Page Design",
    image: "/assets/project/project2.png",
  },
  {
    type: "Web Design",
    name: "Ecom Web Page Design",
    image: "/assets/project/project3.png",
  },
  {
    type: "UI/UX",
    name: "UI/UX Project 1",
    image: "/assets/project/project1.png",
  },
  {
    type: "UI/UX",
    name: "UI/UX Project 2",
    image: "/assets/project/project2.png",
  },
  {
    type: "UI/UX",
    name: "UI/UX Project 3",
    image: "/assets/project/project3.png",
  },
  {
    type: "App Design",
    name: "App Design Project 1",
    image: "/assets/project/project1.png",
  },
  {
    type: "App Design",
    name: "App Design Project 2",
    image: "/assets/project/project2.png",
  },
  {
    type: "Graphic Design",
    name: "Graphic Design Project ",
    image: "/assets/project/project3.png",
  },
];

export const AllProjects = () => {
  return (
    <div className="flex flex-wrap  md:flex-row flex-col md:items-start md:justify-center xl:justify-center  text-center sm:text-start items-center gap-4 xl:gap-7 ">
      {projects.map((project, index) => (
        <div className="flex flex-col my-7 gap-4" key={index}>
          <Card img={project.image} name={project.name} type={project.type} />
        </div>
      ))}
    </div>
  );
};

export const UIUXProject = () => {
  const uiuxProjects = projects.filter((project) => project.type === "UI/UX");
  return (
    <div className="flex flex-wrap md:items-start md:justify-center xl:justify-center  md:flex-row flex-col md:items-start text-center sm:text-start items-center gap-4 xl:gap-7 ">
      {uiuxProjects.map((project, index) => (
        <div className="flex flex-col my-7 gap-4" key={index}>
          <Card img={project.image} name={project.name} type={project.type} />
        </div>
      ))}
    </div>
  );
};

export const GraphicDesignProject = () => {
  const graphicDesignProjects = projects.filter(
    (project) => project.type === "Graphic Design"
  );

  return (
    <div className="flex flex-wrap md:items-start md:justify-center xl:justify-center md:flex-row flex-col md:items-start text-center sm:text-start items-center gap-4 xl:gap-7">
      {graphicDesignProjects.map((project, index) => (
        <div className="flex flex-col my-7 gap-4" key={index}>
          <Card img={project.image} name={project.name} type={project.type} />
        </div>
      ))}
    </div>
  );
};

export const WebDesignProject = () => {
  const webDesignProjects = projects.filter(
    (project) => project.type === "Web Design"
  );

  return (
    <div className="flex flex-wrap md:items-start md:justify-center xl:justify-center md:flex-row flex-col md:items-start text-center sm:text-start items-center gap-4 xl:gap-7">
      {webDesignProjects.map((project, index) => (
        <div className="flex flex-col my-7 gap-4" key={index}>
          <Card img={project.image} name={project.name} type={project.type} />
        </div>
      ))}
    </div>
  );
};

export const AppDesignProject = () => {
  const appDesignProjects = projects.filter(
    (project) => project.type === "App Design"
  );

  return (
    <div className="flex flex-wrap md:items-start md:justify-center xl:justify-center md:flex-row flex-col md:items-start text-center sm:text-start items-center gap-4 xl:gap-7">
      {appDesignProjects.map((project, index) => (
        <div className="flex flex-col my-7 gap-4" key={index}>
          <Card img={project.image} name={project.name} type={project.type} />
        </div>
      ))}
    </div>
  );
};
