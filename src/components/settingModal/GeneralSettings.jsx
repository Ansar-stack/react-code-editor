import React, { useContext } from "react";
import SettingsHeading from "./SettingsHeading";
import SwtichInput from "./SwtichInput";
import { SettingContext } from "../../context/SettingContext";

const GeneralSettings = () => {
  const { settings, setSettings } = useContext(SettingContext);
  return (
    <div className="mt-2 px-4 flex flex-col gap-2">
      <SettingsHeading heading={"General Settings:"} lineClasses={`w-[63%]`} />
      {/* Dark Mode */}
      <div className="flex justify-between">
        <h4>Dark Mode:</h4>
        <SwtichInput
          text1={"Dark"}
          text2={"Light"}
          handleChanges={() =>
            setSettings((prev) => ({ ...prev, webTheme: !prev.webTheme }))
          }
          value={settings.webTheme}
        />
      </div>
      {/* Editor Theme Selection */}
      <div className="flex justify-between">
        <h4>Editor Theme:</h4>
        <select name="theme" id="theme" className="input ">
          {[
            { opt: "Light", value: "" },
            { opt: "Dark", value: "" },
            { opt: "Dracula", value: "" },
            { opt: "Solarized", value: "" },
          ].map((elem, index) => (
            <option key={index} value={elem.value}>
              {elem.opt}
            </option>
          ))}
        </select>
      </div>
      {/* Show the Editor Number */}
      <div className="flex justify-between">
        <h4>Line Number:</h4>
        <SwtichInput
          text1={"Show"}
          text2={"Hide"}
          value={settings.lineNumber}
          handleChanges={() => setSettings(prev=>({...prev, lineNumber: !prev.lineNumber}))}
        />
      </div>
      <div className="w-full h-px bg-gray-400"></div>
    </div>
  );
};
export default GeneralSettings;
