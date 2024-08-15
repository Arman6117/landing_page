import React from "react";
import Title from "../title";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="text-center flex flex-col  items-center">
      <Title className="text-3xl 2xl:text-8xl xl:text-6xl">Lets Design Together</Title>
      <p className="text-xs lg:px-60 my-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nemo
        aperiam corrupti quia! Ab voluptate illo odio in sol
      </p>
      <div className="mt-10 flex md:flex-row justify-center items-center flex-col gap-3">
        <Input
         placeholder="Enter Your Email"
         className="w-[20rem] max-w-[30rem] bg-[#F8F8F8] border- border-[#AFAFAF]"

        />
        <Button className="bg-primaryOrange px-7 py-2">Contact Me</Button>
      </div>
    </div>
  );
};

export default Contact;
