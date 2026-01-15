import React, { useContext, useEffect, useState } from "react";
import SettingsHeading from "./SettingsHeading";
import { SettingContext } from "../../context/SettingContext";
import SwtichInput from "./SwtichInput";

const FontSettings = () => {
  const {settings, setSettings} = useContext(SettingContext);
  return (
    <div className="w-full px-4 mt-3">
      <SettingsHeading heading={`Font Settings`} lineClasses={`w-[70%]`} />
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between w-full">
          {/* Font Family Change */}      
          <h4>Font Family:</h4>
          <select onChange={(e)=>setSettings(prev =>({...prev, fontFamily: e.target.value}))} value={settings.fontFamily} name="fontFamily" id="fontFamily" className="input">
            {["Fira Code", "Monaco", "Courier", "Roboto Mono"].map((elem, index)=>(
              <option key={index} value={elem}>{elem}</option>       
            ))}
          </select>
        </div>
        <div className="flex justify-between w-full">
          <h4>Font Weight:</h4>
          <select 
          value={settings.fontWeight}
          onChange={(e)=>setSettings(prev =>({...prev, fontWeight: e.target.value}))}
          name="fontFamily" id="fontFamily" className="input">
            {[
              { value: "400", text: "Normal" },
              { value: "0", text: "Light" },
              { value: "300", text: "Regular" },
              { value: "700", text: "Bold" },
              { value: "900", text: "Bolder" },
            ].map((element, index) => (
              <option key={index} value={element.value}>
                {element.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between w-full">
          {/* Font Size Change */}
          <h4>Font Size:</h4>
            <div className="input flex justify-between">
               <input
            onChange={(e) =>setSettings(prev =>({...prev, fontSize: e.target.value}))}
            value={settings.fontSize}
            type="range"
            className="w-[60%] self-center "
            min={8}
            max={24}
          /> 
          <span>{settings.fontSize}px</span>
            </div>
        </div>
        <div className="flex justify-between w-full">
          {/* Font Height Change */}
          <h4>Line Height:</h4>
          <div className="input flex justify-between">
            <input
            type="range"
            className="w-[60%]  self-center"
            min={0}
            max={5}
            onChange={(e) =>setSettings(prev =>({...prev, lineHeight: e.target.value}))}
            value={settings.lineHeight}
          />
          <span>{settings.lineHeight}</span>
          </div>
        </div>
        {/* Word Wrap */}
        <div className="flex justify-between w-full">
             <h4>Word Wrap:</h4>
             <SwtichInput handleChanges={()=>setSettings(prev =>({...prev, wordWrap:!prev.wordWrap}))} text1={'No Wrap'} text2={'Wrap'} value={settings.wordWrap}/>
        </div> 
      </div>
      <div className="w-full border-t mt-2 border-t-gray-400"></div>
    </div>
  );
};

export default FontSettings;
