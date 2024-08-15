import React from "react";

interface SkillExpProps {
  expLevel: string;
}
const SkillExp = ({ expLevel }: SkillExpProps) => {
  return (
    <div className=" sm:w-[450px] w-[300px] rounded-sm h-2 absolute bg-[#EDECEC]">
      <div
        className={` relative h-2 rounded-sm bg-primaryOrange  `}
        style={{ width: `${expLevel}%` }}
      >
        <div className="absolute -top-1 right-0 rounded-full h-4 w-4 bg-[#EDECEC] border-primaryOrange border-2 shadow-md" />
      </div>
    </div>
  );
};

export default SkillExp;
