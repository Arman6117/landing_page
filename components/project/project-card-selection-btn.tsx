'use client';
import React from "react";
import clsx from "clsx";
import { Button } from "../ui/button";


interface ProjectCardSelectionButtonProps {
  activeBtn: number;
  handleClick: (index: number) => void;
}

const selectionButton = [
    "All",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphic Design",
];


const ProjectCardSelectionButton: React.FC<ProjectCardSelectionButtonProps> = ({ activeBtn, handleClick }) => (
  <div className="flex md:flex-nowrap flex-wrap gap-2 justify-center">
    {selectionButton.map((btn, index) => (
      <Button
        key={index}
        className={clsx(
          "bg-[#F8F8F8] text-black hover:bg-primaryOrange hover:text-white cursor-pointer border border-[#545454]",
          activeBtn === index
            ? "bg-primaryOrange text-white"
            : "bg-[#F8F8F8] text-black hover:bg-primaryOrange hover:text-white"
        )}
        onClick={() => handleClick(index)}
      >
        {btn}
      </Button>
    ))}
  </div>
);

export default ProjectCardSelectionButton;
