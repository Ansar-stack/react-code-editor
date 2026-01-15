import React from "react";
import ReactDOM from "react-dom";
import { BiX } from "react-icons/bi";
import FontSettings from "./FontSettings";
import GeneralSettings from "./GeneralSettings";
import { FiSettings } from "react-icons/fi";
import ModalHeader from "./ModalHeader";
const Setting = ({ close = () => {} }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed text-white inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-xs flex items-start  justify-center z-50"
      onClick={close} // clicking outside closes modal
    >
      {/* Modal box */}
      <div
        className="bg-[#1A1A3C] border border-gray-400 rounded-md pb-5 w-100 mt-30"
        onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
      >
        {/* Header of settings model*/}
        <ModalHeader heading={'Setting'} icon={<FiSettings size={20}/>} close={close}/>
        {/* Font Settings */}
        <FontSettings />
        <GeneralSettings />
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
export default Setting;
