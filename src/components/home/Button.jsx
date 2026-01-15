import React from "react";

const Button = ({icon, text, onClick, className, type}) => {
  return (
    <>
 
    <button
        onClick={onClick}
      className={`text-gray-100 cursor-pointer flex gap-0.5 items-center
              px-4 rounded-md bg-[#00009a] ${className}`}
    >
         {icon} {text}
    </button>
    </>
  );
};

export default Button;
