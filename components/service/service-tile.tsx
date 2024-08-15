import Image from "next/image";
import React from "react";

const services = [
  {
    image: "/assets/services/uiux.png",
    title: "UI/UX",
  },
  {
    image: "/assets/services/web.png",
    title: "Web Design",
  },
  {
    image: "/assets/services/appDesign.png",
    title: "App Design",
    width: 35,
  },
  {
    image: "/assets/services/graphicDesign.png",
    title: "Graphics Design",
  },
];
const ServiceTile = () => {
  return (
    <div className="text-center md:text-start gap-8 flex items-center justify-center  md:flex-row flex-col ">
      {services.map((service, index) => (
        <div key={index} className=" px-2 max-w-72  py-4 bg-[#F8F8F8]  gap-2 ">
          <div className="flex lg:items-start items-center lg:justify-normal justify-center  flex-col gap-4">
            <Image
              src={service.image}
              alt={service.title}
              width={service.width ? service.width : 55}
              height={100}
            />
            <h1 className="font-semibold">{service.title}</h1>
            <p className="max-w-sm text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              quisquam velit{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTile;
