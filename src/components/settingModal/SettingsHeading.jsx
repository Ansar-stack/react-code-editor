import React from "react";

const SettingsHeading = ({ heading, lineClasses}) => {
  return (
    <div className="flex gap-2 items-center justify-between">
      <h3 className="font-semibold ">{heading}</h3>{" "}
      <div className={`mt-1 h-px rounded-md  bg-gray-400 ${lineClasses}`}></div>
    </div>
  );
};

export default SettingsHeading;
