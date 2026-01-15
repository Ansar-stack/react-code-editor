import React from "react";

const Shortcut = ({title, shortcut}) => {
  return (
    <div className="w-full flex justify-between px-2 py-0.5 hover:bg-[#0d0d38] bg-[#04042f] rounded-md cursor-pointer">
      <div>{title}</div>
      <div className="px-2 bg-[#02025a] font-bold rounded-md">{shortcut}</div>
    </div>
  );
};

export default Shortcut;
