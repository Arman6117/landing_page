"use client";
import { useState } from "react";
import ProjectCardSelectionButton from "./project-card-selection-btn";
import {
  AllProjects,
  AppDesignProject,
  GraphicDesignProject,
  UIUXProject,
  WebDesignProject,
} from ".";

const ProjectsCard = () => {
  const [activeBtn, setActiveBtn] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveBtn(index);
  };

  const contentData: Record<number, JSX.Element> = {
    0: <AllProjects />,
    1: <UIUXProject />,
    2: <WebDesignProject />,
    3: <AppDesignProject />,
    4: <GraphicDesignProject />,
  };

  return (
    <div>
      <ProjectCardSelectionButton
        activeBtn={activeBtn}
        handleClick={handleClick}
      />
      <div className="mt-4">{contentData[activeBtn]}</div>
    </div>
  );
};

export default ProjectsCard;
