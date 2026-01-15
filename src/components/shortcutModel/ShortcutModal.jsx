import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SettingsHeading from "../settingModal/SettingsHeading";
import ModalHeader from "../settingModal/ModalHeader";
import { FiCommand } from "react-icons/fi";
import Shortcut from "./Shortcut";
import { shortcuts } from "../../utils/Shortcuts";
const ShortcutModal = ({ close = () => {} }) => {
  const [filteredShortcuts, setFilteredShortcuts] = useState(shortcuts);
  const [search, setSearch] = useState("");
  useEffect(()=>{
    let filterShortcut = shortcuts.filter((element, index) => {
      let userSearch = search.trim().toLowerCase();
      if (element.title.toLocaleLowerCase().includes(userSearch)) return element;
    });
    setFilteredShortcuts(filterShortcut);
  }, [search]);
  return ReactDOM.createPortal(
    <div
      onClick={close}
      className="fixed text-white inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-xs flex items-start  justify-center z-50"
    >
      {/* Model Box */}
      <div
        className="bg-[#1A1A3C] border border-gray-400 rounded-md pb-5 w-100 mt-30"
        onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
      >
        <ModalHeader
          close={close}
          heading={"Shortcut Keys"}
          icon={<FiCommand size={20} />}
        />
        {/* Short Cut Keys Container*/}
        <div className="w-full h-76 overflow-y-auto px-3 pt-2">
          <div>
            <input
              type="search"
              onChange={(e)=>setSearch(e.target.value)}
              value={search}
              placeholder="Search Shortcut Keys"
              className="w-full outline-0 text-white border border-white rounded-sm px-3 py-1"
            />
          </div>
          <div className="flex flex-col gap-1 mt-3">
            {filteredShortcuts.map((element, index) => (
              <Shortcut
                key={index}
                title={element.title}
                shortcut={element.shortcut}
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default ShortcutModal;
