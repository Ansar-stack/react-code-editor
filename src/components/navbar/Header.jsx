import React, { useState } from "react";
import { href, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiCommand, FiInfo, FiMail, FiMenu, FiSettings } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { FcAbout, FcContacts } from "react-icons/fc";
import MobileNav from "./MobileNav";
import Setting from "../settingModal/Setting";
import Shortcut from "../shortcutModel/ShortcutModal";
import { useHotkeys } from "react-hotkeys-hook";
export const navs = [
  { href: "/", text: "Home", icon: <FaHome color="white" /> },
  { href: "#", text: "Settings", icon: <FiSettings color="white" /> },
  { href: "#", text: "Shortcuts", icon: <FiCommand color="white" /> },
  { href: "/about", text: "About", icon: <FiInfo color="white" /> },
  { href: "/contact", text: "Contact", icon: <FiMail color="white" /> },
];
const Header = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isShortcutOpen, setIsShortcutOpen] = useState(false);
  // Functions to open and close the setting modals
  const closeSettings = ()=>setIsSettingOpen(false),
        openSettings = ()=>setIsSettingOpen(true);
  // Functions to open ad close the shortcutModals
  const closeShortcutModal = ()=>setIsShortcutOpen(false),
        openShortcutModal = ()=>setIsShortcutOpen(true);
  // Shortcut to open settings
  useHotkeys('ctrl+shift+s', (e)=>{
    e.preventDefault();
    openSettings();
  })
  return (
    <header className="w-full h-15  text-white sticky top-0  font-mono shadow-md shadow-[#050543] px-7 flex justify-between items-center">
      <h1 className="font-semibold text-xl lg:text-3xl xl:text-[3vw] cursor-pointer">
        <a href="/">CodeEditor</a>
      </h1>
      <nav className="">
        {/* Desktop Navbar */}
        <ul className="w-full hidden gap-5 md:gap-8 sm:flex justify-between md:justify-around">
          {navs.map((element, index) => (
            <li 
            onClick={index === 1? ()=>openSettings(): index===2?()=>openShortcutModal():``} 
            key={index}>
              <Link
                to={element.href}
                className="flex justify-center items-center gap-0.5"
              >
                {element.icon} {element.text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Navbar */}
        <MobileNav open={openSettings}/>
      </nav>
      {isSettingOpen? <Setting close={closeSettings} />: ``}
      {isShortcutOpen?<Shortcut close={closeShortcutModal} />: ``}
    </header>
  );
};

export default Header;
