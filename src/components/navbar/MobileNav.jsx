import React, { useState } from "react";
import { navs } from "./Header";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {BiX} from 'react-icons/bi'

const MobileNav = ({open}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Humbergur Menue */}
      <FiMenu
        size={35}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer sm:hidden"
      />
      {/* Navbar */}
      <ul
        className={`sm:hidden z-10 absolute top-0 ${isOpen ? `right-0` : `-right-1/2`} flex gap-10  w-1/2 flex-col
   items-start px-5 transition-all ease-in duration-300 h-screen bg-[#070727] shadow-sm`}
      >
        {/* Close Icon */}
        <BiX onClick={()=>setIsOpen(false)} size={35} className="self-end mt-2 cursor-pointer"/>
        {/* Navs items*/}
        {navs.map((element, index) => (
          <li 
          
          className={index ===0 && `mt-8`}
          onClick={index === 1? open:() => setIsOpen(false)} key={index}>
            <Link
              to={element.href}
              className="flex justify-center items-center gap-0.5"
            >
              {element.icon} {element.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNav;
