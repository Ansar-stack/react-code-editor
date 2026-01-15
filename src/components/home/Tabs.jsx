import React from "react";
import TabButton from "./TabButton";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";

const Tabs = ({ toggle, handleToggle }) => {
  return (
    <div className="flex gap-0.5">
      <TabButton
        handleClick={() => handleToggle(1)}
        text={"HTML"}
        className={`rounded-tl-md ${toggle === 1 ? "bg-[#0f0f90]" : ""}`}
        icon={<FaHtml5 />}
      />
      <TabButton
        handleClick={() => handleToggle(2)}
        text={"CSS"}
        className={toggle === 2 ? "bg-[#0f0f90]" : ""}
        icon={<FaCss3 />}
      />
      <TabButton
        handleClick={() => handleToggle(3)}
        text={"JS"}
        className={toggle === 3 ? "bg-[#0f0f90]" : ""}
        icon={<FaJs />}
      />
    </div>
  );
};

export default Tabs;
